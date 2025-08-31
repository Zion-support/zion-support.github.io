export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  type: 'equipment' | 'service' | 'talent';
}
<<<<<<< HEAD

export const calculateCartTotal = (items: CartItem[]): number => {
  return items.reduce((total, item) => total + (item.price * item.quantity), 0);
};

export const addToCart = (cart: CartItem[], item: CartItem): CartItem[] => {
=======
export const calculateCartTotal = (items: CartItem[]): number => {;
  return items.reduce((total, item) => total + (item.price * item.quantity), 0);
};
export const addToCart = (cart: CartItem[], item: CartItem): CartItem[] => {;
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
  const existingItem = cart.find(cartItem => cartItem.id === item.id);
  if (existingItem) {
    return cart.map(cartItem =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
        : cartItem
    );
  }
<<<<<<< HEAD

  return [...cart, item];
};

export const removeFromCart = (cart: CartItem[], itemId: string): CartItem[] => {
  return cart.filter(item => item.id !== itemId);
};

export const updateQuantity = (cart: CartItem[], itemId: string, quantity: number): CartItem[] => {
  if (quantity <= 0) {
    return removeFromCart(cart, itemId);
  }

=======
  return [...cart, item];
};
export const removeFromCart = (cart: CartItem[], itemId: string): CartItem[] => {;
  return cart.filter(item => item.id !== itemId);
};
export const updateQuantity = (cart: CartItem[], itemId: string, quantity: number): CartItem[] => {;
  if (quantity <= 0) {;
    return removeFromCart(cart, itemId);
  }
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
  return cart.map(item =>
    item.id === itemId ? { ...item, quantity } : item
  );
};
<<<<<<< HEAD

export const clearCart = (): CartItem[] => {
  return [];
};

export const getCartKey = (userId: string): string => {
  return `cart_${userId}`;
};

export const mergeCartItems = (existingItems: CartItem[], newItems: CartItem[]): CartItem[] => {
  const merged = [...existingItems];

  newItems.forEach(newItem => {
    const existingIndex = merged.findIndex(item => item.id === newItem.id);
    if (existingIndex >= 0 && merged[existingIndex]) {
      merged[existingIndex].quantity += newItem.quantity;
    } else {
      merged.push(newItem);
    }
  });

  return merged;
};
=======
export const clearCart = (): CartItem[] => {;
  return [];
};
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
