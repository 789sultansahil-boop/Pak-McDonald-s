import React, { useState } from 'react';
import { Product, Modifier } from '../../types';
import { AVAILABLE_MODIFIERS } from '../../constants';
import { Button } from '../ui/Button';
import { X, Check } from 'lucide-react';

interface CustomizationModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (product: Product, quantity: number, modifiers: Modifier[]) => void;
}

export const CustomizationModal: React.FC<CustomizationModalProps> = ({ 
  product, 
  isOpen, 
  onClose, 
  onConfirm 
}) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedModifiers, setSelectedModifiers] = useState<Modifier[]>([]);

  if (!isOpen || !product) return null;

  const toggleModifier = (mod: Modifier) => {
    if (selectedModifiers.find(m => m.id === mod.id)) {
      setSelectedModifiers(selectedModifiers.filter(m => m.id !== mod.id));
    } else {
      setSelectedModifiers([...selectedModifiers, mod]);
    }
  };

  const totalPrice = (product.price + selectedModifiers.reduce((acc, m) => acc + m.price, 0)) * quantity;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="relative h-48 bg-gray-100 shrink-0">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-sm hover:bg-white transition-colors"
          >
            <X className="w-5 h-5 text-gray-800" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          <h2 className="text-2xl font-bold text-brand-dark mb-2">{product.name}</h2>
          <p className="text-gray-500 text-sm mb-6">{product.description}</p>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Customize</h3>
              <div className="space-y-2">
                {AVAILABLE_MODIFIERS.map((mod) => {
                  const isSelected = !!selectedModifiers.find(m => m.id === mod.id);
                  return (
                    <button
                      key={mod.id}
                      onClick={() => toggleModifier(mod)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg border transition-all ${
                        isSelected 
                          ? 'border-brand-red bg-red-50 text-brand-red' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center">
                        <div className={`w-5 h-5 rounded border mr-3 flex items-center justify-center ${isSelected ? 'bg-brand-red border-brand-red' : 'border-gray-300'}`}>
                          {isSelected && <Check className="w-3 h-3 text-white" />}
                        </div>
                        <span className="font-medium">{mod.name}</span>
                      </div>
                      <span className="text-sm font-semibold">
                        {mod.price > 0 ? `+$${mod.price.toFixed(2)}` : 'Free'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl">
              <span className="font-bold text-brand-dark">Quantity</span>
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded-full bg-white border border-gray-300 flex items-center justify-center font-bold hover:bg-gray-100"
                >
                  -
                </button>
                <span className="font-bold text-lg w-4 text-center">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-full bg-white border border-gray-300 flex items-center justify-center font-bold hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-100 bg-white">
          <Button 
            fullWidth 
            size="lg"
            onClick={() => {
              onConfirm(product, quantity, selectedModifiers);
              onClose();
              setQuantity(1);
              setSelectedModifiers([]);
            }}
          >
            Add to Order - ${totalPrice.toFixed(2)}
          </Button>
        </div>
      </div>
    </div>
  );
};
