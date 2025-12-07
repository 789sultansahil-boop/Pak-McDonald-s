import React, { useState, useMemo } from 'react';
import { CATEGORIES, MOCK_MENU } from '../constants';
import { ProductCard } from '../components/Menu/ProductCard';
import { CustomizationModal } from '../components/Menu/CustomizationModal';
import { Product, Modifier } from '../types';
import { useStore } from '../store/useStore';
import { Search } from 'lucide-react';

export const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const { addToCart } = useStore();

  const filteredProducts = useMemo(() => {
    return MOCK_MENU.filter(product => {
      const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleAddToCartClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleConfirmAdd = (product: Product, quantity: number, modifiers: Modifier[]) => {
    addToCart(product, quantity, modifiers);
  };

  return (
    <div className="bg-brand-light min-h-screen pt-4 pb-20">
      
      {/* Category Nav - Sticky below Navbar */}
      <div className="sticky top-16 z-30 bg-white/95 backdrop-blur shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Scrollable Categories */}
            <div className="flex overflow-x-auto gap-2 pb-2 md:pb-0 scrollbar-hide">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-bold transition-all ${
                    activeCategory === cat.id
                      ? 'bg-brand-dark text-white shadow-md transform scale-105'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search menu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 border-transparent focus:bg-white focus:ring-2 focus:ring-brand-gold focus:outline-none transition-all"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>
      </div>

      {/* Menu Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-brand-dark mb-6">
          {CATEGORIES.find(c => c.id === activeCategory)?.label || 'Menu'}
        </h1>
        
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAdd={handleAddToCartClick} 
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500">
            <p className="text-xl">No items found matching your criteria.</p>
            <button 
              onClick={() => {setActiveCategory('all'); setSearchQuery('');}}
              className="mt-4 text-brand-red font-bold hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      <CustomizationModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmAdd}
      />
    </div>
  );
};
