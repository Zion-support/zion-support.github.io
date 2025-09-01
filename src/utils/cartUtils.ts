export interface CartItem {
<<<<<<< HEAD
<<<<<<< HEAD
=======














>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
=======
>>>>>>> cursor/add-new-services-and-advertise-them-650b
  id: string;
  name: string;
  price: number;
  quantity: number;
  type: 'equipment' | 'service' | 'talent';
<<<<<<< HEAD
<<<<<<< HEAD
}
export const calculateCartTotal = (items: CartItem[]): number => {;
  return items.reduce((total, item) => total + (item.price * item.quantity), 0);
};
export const addToCart = (cart: CartItem[], item: CartItem): CartItem[] => {;
=======
<<<<<<< HEAD
=======














=======
  image?: string;
  description?: string;
  category?: string;
>>>>>>> cursor/add-new-services-and-advertise-them-650b
}

export const calculateCartTotal = (items: CartItem[]): number => {
  return items.reduce((total, item) => total + (item.price * item.quantity), 0);
};

<<<<<<< HEAD
export const addToCart = (cart: anyanyanyanyanyanyanyanyanyanyanyanyanyCartItem[], item: CartItem): CartItem[]               => {;
=======;
export const calculateCartTotal = (items: anyanyanyanyanyanyanyanyanyanyanyanyanyCartItem[]): number              => {;
  return items.reduce((total, item) => total + (item.price * item.quantity), 0);
};

export const addToCart = (cart: anyanyanyanyanyanyanyanyanyanyanyanyanyCartItem[], item: CartItem): CartItem[]              => {;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
=======
export const addToCart = (cart: CartItem[], item: CartItem): CartItem[] => {
>>>>>>> cursor/add-new-services-and-advertise-them-650b
  const existingItem = cart.find(cartItem => cartItem.id === item.id);
  if (existingItem) {
    return cart.map(cartItem =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
        : cartItem
    );
  }
<<<<<<< HEAD
=======

>>>>>>> cursor/add-new-services-and-advertise-them-650b
  return [...cart, item];
};
<<<<<<< HEAD
export const removeFromCart = (cart: CartItem[], itemId: string): CartItem[] => {;
  return cart.filter(item => item.id !== itemId);
};
export const updateQuantity = (cart: CartItem[], itemId: string, quantity: number): CartItem[] => {;
=======

export const removeFromCart = (cart: CartItem[], itemId: string): CartItem[] => {
  return cart.filter(item => item.id !== itemId);
};

<<<<<<< HEAD
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
=======
export const updateQuantity = (cart: CartItem[], itemId: string, quantity: number): CartItem[] => {
  if (quantity <= 0) {
    return removeFromCart(cart, itemId);
  }

>>>>>>> cursor/add-new-services-and-advertise-them-650b
  return cart.map(item =>
    item.id === itemId ? { ...item, quantity } : item
  );
};
<<<<<<< HEAD
export const clearCart = (): CartItem[] => {;
=======

export const clearCart = (): CartItem[] => {
>>>>>>> cursor/add-new-services-and-advertise-them-650b
  return [];
};
<<<<<<< HEAD
=======

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
<<<<<<< HEAD
};}}}}
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
=======
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

export const validateCartItem = (item: CartItem): boolean => {
  return (
    item.id &&
    item.name &&
    item.price >= 0 &&
    item.quantity > 0 &&
    ['equipment', 'service', 'talent'].includes(item.type)
  );
};

export const filterCartByType = (cart: CartItem[], type: CartItem['type']): CartItem[] => {
  return cart.filter(item => item.type === type);
};

export const sortCartByPrice = (cart: CartItem[], ascending: boolean = true): CartItem[] => {
  return [...cart].sort((a, b) => {
    return ascending ? a.price - b.price : b.price - a.price;
  });
};
>>>>>>> cursor/add-new-services-and-advertise-them-650b
