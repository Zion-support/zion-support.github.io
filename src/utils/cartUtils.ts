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

export const updateQuantity = (cart: CartItem[], itemId: string, quantity: number): CartItem[] => {
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

export const getCartSubtotal = (cart: CartItem[]): number => {
  return calculateCartTotal(cart);
};

export const getCartTax = (cart: CartItem[], taxRate: number = 0.08): number => {
  return getCartSubtotal(cart) * taxRate;
};

export const getCartTotal = (cart: CartItem[], taxRate: number = 0.08): number => {
  return getCartSubtotal(cart) + getCartTax(cart, taxRate);
};

export const isCartEmpty = (cart: CartItem[]): boolean => {
  return cart.length === 0;
};

export const getCartItemsByType = (cart: CartItem[], type: CartItem['type']): CartItem[] => {
  return cart.filter(item => item.type === type);
};

export const getCartSummary = (cart: CartItem[]) => {
  const subtotal = getCartSubtotal(cart);
  const tax = getCartTax(cart);
  const total = getCartTotal(cart);
  const itemCount = getCartItemCount(cart);

  return {
    subtotal,
    tax,
    total,
    itemCount,
    isEmpty: isCartEmpty(cart)
  };
};
