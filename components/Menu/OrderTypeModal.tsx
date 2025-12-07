import React from 'react';
import { useStore } from '../../store/useStore';
import { OrderType } from '../../types';
import { ShoppingBag, Car, Bike, X } from 'lucide-react';

export const OrderTypeModal: React.FC = () => {
  const { isOrderTypeModalOpen, setOrderType, setOrderTypeModalOpen } = useStore();

  if (!isOrderTypeModalOpen) return null;

  const options: { id: OrderType; label: string; description: string; icon: React.ReactNode }[] = [
    {
      id: 'pickup',
      label: 'Pickup',
      description: 'Pick up inside the restaurant',
      icon: <ShoppingBag className="w-8 h-8 mb-3 text-brand-gold" />
    },
    {
      id: 'curbside',
      label: 'Curbside',
      description: 'We bring it to your parked car',
      icon: <Car className="w-8 h-8 mb-3 text-brand-red" />
    },
    {
      id: 'delivery',
      label: 'Delivery',
      description: 'Delivered straight to your door',
      icon: <Bike className="w-8 h-8 mb-3 text-blue-500" />
    }
  ];

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl w-full max-w-3xl overflow-hidden shadow-2xl relative">
        <button 
          onClick={() => setOrderTypeModalOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
        >
          <X className="w-6 h-6 text-gray-400" />
        </button>

        <div className="p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">How would you like your order?</h2>
          <p className="text-gray-500 text-lg mb-10">Select an option to proceed with your order.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {options.map((option) => (
              <button
                key={option.id}
                onClick={() => setOrderType(option.id)}
                className="group relative flex flex-col items-center p-8 rounded-2xl border-2 border-gray-100 hover:border-brand-gold hover:bg-yellow-50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="bg-white p-4 rounded-full shadow-sm mb-4 group-hover:scale-110 transition-transform">
                  {option.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-2">{option.label}</h3>
                <p className="text-sm text-gray-500">{option.description}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
