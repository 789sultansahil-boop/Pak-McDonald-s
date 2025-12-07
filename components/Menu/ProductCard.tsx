import React from 'react';
import { Product } from '../../types';
import { Button } from '../ui/Button';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAdd: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAdd }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full">
      <div className="relative h-48 w-full bg-gray-50 overflow-hidden">
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full z-10">
            NEW
          </span>
        )}
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-brand-dark leading-tight">{product.name}</h3>
          <span className="font-bold text-brand-dark">${product.price.toFixed(2)}</span>
        </div>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-grow">{product.description}</p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xs text-gray-400 font-medium">{product.calories} Cal</span>
          <Button 
            variant="primary" 
            size="sm" 
            onClick={() => onAdd(product)}
            className="rounded-lg px-4"
          >
            <Plus className="w-4 h-4 mr-1" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};
