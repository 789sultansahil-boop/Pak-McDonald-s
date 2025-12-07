
import { create } from 'zustand';
import { CartItem, Product, Modifier, User, OrderType } from '../types';

interface AppState {
  cart: CartItem[];
  user: User;
  isCartOpen: boolean;
  selectedStoreId: string | null;
  orderType: OrderType | null;
  isOrderTypeModalOpen: boolean;
  
  addToCart: (product: Product, quantity: number, modifiers: Modifier[]) => void;
  removeFromCart: (cartId: string) => void;
  toggleCart: () => void;
  setStore: (id: string) => void;
  clearCart: () => void;
  login: (name: string, email: string) => void;
  logout: () => void;
  setOrderType: (type: OrderType) => void;
  setOrderTypeModalOpen: (isOpen: boolean) => void;
}

export const useStore = create<AppState>((set) => ({
  cart: [],
  user: {
    name: 'Guest',
    points: 0,
    isGuest: true,
  },
  isCartOpen: false,
  selectedStoreId: null,
  orderType: null,
  isOrderTypeModalOpen: false,

  addToCart: (product, quantity, modifiers) =>
    set((state) => {
      // Logic: if first item and no order type selected, open the modal
      const isFirstItem = state.cart.length === 0;
      const shouldOpenOrderType = isFirstItem && !state.orderType;

      const newItem: CartItem = {
        ...product,
        cartId: Math.random().toString(36).substr(2, 9),
        quantity,
        selectedModifiers: modifiers,
        price: product.price + modifiers.reduce((acc, mod) => acc + mod.price, 0),
      };
      
      return { 
        cart: [...state.cart, newItem], 
        isCartOpen: true,
        isOrderTypeModalOpen: shouldOpenOrderType 
      };
    }),

  removeFromCart: (cartId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.cartId !== cartId),
    })),

  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),

  setStore: (id) => set({ selectedStoreId: id }),
  
  clearCart: () => set({ cart: [] }),

  login: (name, email) => set({
    user: {
      name,
      email,
      points: 500, // Bonus points for logging in
      isGuest: false
    }
  }),

  logout: () => set({
    user: {
      name: 'Guest',
      points: 0,
      isGuest: true
    },
    cart: [] // Optional: clear cart on logout
  }),

  setOrderType: (type) => set({ orderType: type, isOrderTypeModalOpen: false }),
  setOrderTypeModalOpen: (isOpen) => set({ isOrderTypeModalOpen: isOpen }),
}));
