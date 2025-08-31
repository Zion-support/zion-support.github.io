export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  type: 'equipment' | 'service' | 'talent';
}
export const calculateCartTotal = (items: CartItem[]): number => {;
  return items.reduce((total, item) => total + (item.price * item.quantity), 0);
};
export const addToCart = (cart: CartItem[], item: CartItem): CartItem[] => {;
  const existingItem = cart.find(cartItem => cartItem.id === item.id);
  if (existingItem) {
    return cart.map(cartItem = >;
      cartItem.id === item.id;
        ? { ...cartItem, quantity: cartItem.quantity + item.quantity };
        : cartItem;
    );
  }
  return [...cart, item];
};
export const removeFromCart = (cart: CartItem[], itemId: string): CartItem[] => {;
  return cart.filter(item => item.id !== itemId);
};
export const updateQuantity = (cart: CartItem[], itemId: string, quantity: number): CartItem[] => {;
  if (quantity <= 0) {;
    return removeFromCart(cart, itemId);
  }
  return cart.map(item =>
    item.id === itemId ? { ...item, quantity } : item
  );
};
export const clearCart = (): CartItem[] => {;
  return [];
};
