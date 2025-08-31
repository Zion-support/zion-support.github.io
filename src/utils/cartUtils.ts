export interface CartItem {
<<<<<<< HEAD
=======














>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  id: string;
  name: string;
  price: number;
  quantity: number;
  type: 'equipment' | 'service' | 'talent';
<<<<<<< HEAD
}
export const calculateCartTotal = (items: CartItem[]): number => {;
  return items.reduce((total, item) => total + (item.price * item.quantity), 0);
};
export const addToCart = (cart: CartItem[], item: CartItem): CartItem[] => {;
=======
<<<<<<< HEAD
=======














}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

<<<<<<< HEAD
export const calculateCartTotal = (items: anyanyanyanyanyanyanyanyanyanyanyanyanyCartItem[]): number               => {;
  return items.reduce((total, item) => total + (item.price * item.quantity), 0);
};

export const addToCart = (cart: anyanyanyanyanyanyanyanyanyanyanyanyanyCartItem[], item: CartItem): CartItem[]               => {;
=======;
export const calculateCartTotal = (items: anyanyanyanyanyanyanyanyanyanyanyanyanyCartItem[]): number              => {;
  return items.reduce((total, item) => total + (item.price * item.quantity), 0);
};

export const addToCart = (cart: anyanyanyanyanyanyanyanyanyanyanyanyanyCartItem[], item: CartItem): CartItem[]              => {;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
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
<<<<<<< HEAD
export const removeFromCart = (cart: CartItem[], itemId: string): CartItem[] => {;
  return cart.filter(item => item.id !== itemId);
};
export const updateQuantity = (cart: CartItem[], itemId: string, quantity: number): CartItem[] => {;
=======

<<<<<<< HEAD
export const removeFromCart = (cart: anyanyanyanyanyanyanyanyanyanyanyanyanyCartItem[], itemId: string): CartItem[]               => {;
  return cart.filter(item => item.id !== itemId);
};

export const updateQuantity = (cart: anyanyanyanyanyanyanyanyanyanyanyanyanyCartItem[], itemId: string, quantity: number): CartItem[]               => {
  if (quantity <= 0) {;
=======;
export const removeFromCart = (cart: anyanyanyanyanyanyanyanyanyanyanyanyanyCartItem[], itemId: string): CartItem[]              => {;
  return cart.filter(item => item.id !== itemId);
};

export const updateQuantity = (cart: anyanyanyanyanyanyanyanyanyanyanyanyanyCartItem[], itemId: string, quantity: number): CartItem[]              => {;
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
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
<<<<<<< HEAD
=======

<<<<<<< HEAD
export const getCartKey = (userId: anyanyanyanyanyanyanyanyanyanyanyanyanystring): string               => {;
  return `cart_${userId}`;
};

export const mergeCartItems = (existingItems: anyanyanyanyanyanyanyanyanyanyanyanyanyCartItem[], newItems: CartItem[]): CartItem[]              => {
  const merged = [...existingItems];

  newItems.forEach(newItem => {
    const existingIndex = merged.findIndex(item => item.id === newItem.id);
    if (existingIndex >= 0 && merged[existingIndex]) {
      merged[existingIndex].quantity += newItem.quantity;
    } else {
      merged.push(newItem);

  });

  return merged;
};}}}}
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
