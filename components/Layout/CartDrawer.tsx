
import React from 'react';
import { useStore } from '../../store/useStore';
import { X, Trash2, ShoppingBag, Car, Bike, ChevronRight } from 'lucide-react';
import { Button } from '../ui/Button';

export const CartDrawer: React.FC = () => {
  const { cart, isCartOpen, toggleCart, removeFromCart, orderType, setOrderTypeModalOpen } = useStore();

  const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const tax = total * 0.08;
  const finalTotal = total + tax;

  if (!isCartOpen) return null;

  const getOrderTypeLabel = () => {
    switch(orderType) {
      case 'pickup': return { label: 'Pickup', icon: <ShoppingBag className="w-4 h-4 mr-2" /> };
      case 'curbside': return { label: 'Curbside', icon: <Car className="w-4 h-4 mr-2" /> };
      case 'delivery': return { label: 'Delivery', icon: <Bike className="w-4 h-4 mr-2" /> };
      default: return null;
    }
  };

  const typeInfo = getOrderTypeLabel();

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={toggleCart} />
      
      <div className="absolute inset-y-0 right-0 max-w-md w-full flex">
        <div className="w-full h-full flex flex-col bg-white shadow-2xl animate-in slide-in-from-right duration-300">
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-xl font-bold text-brand-dark flex items-center">
              <ShoppingBag className="w-5 h-5 mr-2" />
              Your Order
            </h2>
            <button onClick={toggleCart} className="p-2 hover:bg-gray-100 rounded-full">
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>

          {/* Order Type Selector in Cart */}
          {cart.length > 0 && (
            <div className="px-6 py-4 bg-brand-light border-b border-gray-100">
               <div className="flex items-center justify-between">
                 <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Order Type</span>
                 <button 
                   onClick={() => setOrderTypeModalOpen(true)}
                   className="text-xs font-bold text-brand-red hover:underline"
                 >
                   Change
                 </button>
               </div>
               {typeInfo ? (
                 <div className="flex items-center mt-2 font-bold text-brand-dark bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                   {typeInfo.icon}
                   {typeInfo.label}
                 </div>
               ) : (
                 <button 
                   onClick={() => setOrderTypeModalOpen(true)}
                   className="w-full mt-2 flex items-center justify-between bg-brand-red text-white p-3 rounded-lg font-bold shadow-md hover:bg-red-700 transition-colors"
                 >
                   <span>Select Order Type</span>
                   <ChevronRight className="w-4 h-4" />
                 </button>
               )}
            </div>
          )}

          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center text-gray-500">
                <ShoppingBag className="w-16 h-16 mb-4 text-gray-200" />
                <p className="text-lg font-medium">Your bag is empty</p>
                <p className="text-sm">Start your order to see items here</p>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={item.cartId} className="flex gap-4">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg bg-gray-50" />
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h4 className="font-bold text-gray-900">{item.name}</h4>
                        <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                      {item.selectedModifiers.length > 0 && (
                        <p className="text-xs text-gray-500 mt-1">
                          {item.selectedModifiers.map(m => m.name).join(', ')}
                        </p>
                      )}
                      <button 
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-red-500 text-xs font-medium mt-2 flex items-center hover:text-red-700"
                      >
                        <Trash2 className="w-3 h-3 mr-1" /> Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {cart.length > 0 && (
            <div className="border-t border-gray-100 p-6 bg-gray-50">
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Tax (8%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-brand-dark pt-2 border-t">
                  <span>Total</span>
                  <span>${finalTotal.toFixed(2)}</span>
                </div>
              </div>
              <Button 
                fullWidth 
                onClick={() => alert(`Proceeding to checkout for ${orderType || 'Pickup'}`)}
                disabled={!orderType}
              >
                Checkout
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
