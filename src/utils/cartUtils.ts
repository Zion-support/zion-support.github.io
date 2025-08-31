export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  type: 'equipment' | 'service' | 'talent';
  image?: string;
  description?: string;
  category?: string;
}

export const calculateCartTotal = (items: CartItem[]): number => {
  return items.reduce((total, item) => total + (item.price * item.quantity), 0);
};

export const addToCart = (cart: CartItem[], item: CartItem): CartItem[] => {
  const existingItem = cart.find(cartItem => cartItem.id === item.id);
  if (existingItem) {
    return cart.map(cartItem =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
        : cartItem
    );
  }
  return [...cart, item];
};

export const removeFromCart = (cart: CartItem[], itemId: string): CartItem[] => {
  return cart.filter(item => item.id !== itemId);
};

export const updateCartItemQuantity = (cart: CartItem[], itemId: string, quantity: number): CartItem[] => {
  if (quantity <= 0) {
    return removeFromCart(cart, itemId);
  }
  return cart.map(item =>
    item.id === itemId ? { ...item, quantity } : item
  );
};

export const clearCart = (): CartItem[] => {
  return [];
};

export const getCartItemCount = (cart: CartItem[]): number => {
  return cart.reduce((total, item) => total + item.quantity, 0);
};

export const getCartItemById = (cart: CartItem[], itemId: string): CartItem | undefined => {
  return cart.find(item => item.id === itemId);
};

export const isItemInCart = (cart: CartItem[], itemId: string): boolean => {
  return cart.some(item => item.id === itemId);
};

export const getCartItemsByType = (cart: CartItem[], type: CartItem['type']): CartItem[] => {
  return cart.filter(item => item.type === type);
};

export const getCartItemsByCategory = (cart: CartItem[], category: string): CartItem[] => {
  return cart.filter(item => item.category === category);
};

export const calculateCartSubtotal = (items: CartItem[]): number => {
  return calculateCartTotal(items);
};

export const calculateCartTax = (items: CartItem[], taxRate: number = 0.08): number => {
  return calculateCartSubtotal(items) * taxRate;
};

export const calculateCartTotalWithTax = (items: CartItem[], taxRate: number = 0.08): number => {
  const subtotal = calculateCartSubtotal(items);
  const tax = calculateCartTax(items, taxRate);
  return subtotal + tax;
};
