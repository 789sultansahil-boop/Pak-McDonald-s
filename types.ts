
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  calories: number;
  image: string;
  category: 'burgers' | 'chicken' | 'sides' | 'beverages' | 'breakfast' | 'desserts' | 'deals';
  isNew?: boolean;
}

export interface Modifier {
  id: string;
  name: string;
  price: number;
  type: 'size' | 'topping' | 'remove';
}

export interface CartItem extends Product {
  cartId: string;
  quantity: number;
  selectedModifiers: Modifier[];
}

export interface StoreLocation {
  id: string;
  name: string;
  address: string;
  distance: number; // in miles
  isOpen: boolean;
  features: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface User {
  name: string;
  email?: string;
  points: number;
  isGuest: boolean;
}

export type OrderType = 'pickup' | 'curbside' | 'delivery';
