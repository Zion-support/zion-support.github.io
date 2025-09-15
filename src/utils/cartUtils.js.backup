<<<<<<< HEAD
=======
<<<<<<< HEAD
// Cart utilities
export const cartUtils = {
  addItem: (cart, item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
=======
>>>>>>> cursor/create-and-deploy-new-content-7857
// Cart utilities for managing shopping cart functionality

export const cartUtils = {
  // Add item to cart
  addItem: (cart, item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-d952
>>>>>>> cursor/create-and-deploy-new-content-7857
    if (existingItem) {
      return cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD
    return [...cart, { ...item, quantity: 1 }];
  },
  
=======
>>>>>>> cursor/create-and-deploy-new-content-7857
    
    return [...cart, { ...item, quantity: 1 }];
  },
  
  // Remove item from cart
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-d952
>>>>>>> cursor/create-and-deploy-new-content-7857
  removeItem: (cart, itemId) => {
    return cart.filter(item => item.id !== itemId);
  },
  
<<<<<<< HEAD
  // Update item quantity
=======
<<<<<<< HEAD
=======
  // Update item quantity
>>>>>>> cursor/create-and-deploy-new-content-d952
>>>>>>> cursor/create-and-deploy-new-content-7857
  updateQuantity: (cart, itemId, quantity) => {
    if (quantity <= 0) {
      return cartUtils.removeItem(cart, itemId);
    }
<<<<<<< HEAD
    
=======
<<<<<<< HEAD
=======
    
>>>>>>> cursor/create-and-deploy-new-content-d952
>>>>>>> cursor/create-and-deploy-new-content-7857
    return cart.map(item =>
      item.id === itemId ? { ...item, quantity } : item
    );
  },
  
<<<<<<< HEAD
  // Get total price
  getTotalPrice: (cart) => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
=======
<<<<<<< HEAD
  getTotalPrice: (cart) => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  },
  
=======
  // Clear cart
  clearCart: () => {
    return [];
>>>>>>> cursor/create-and-deploy-new-content-7857
  },
  
  // Get total items count
  getTotalItems: (cart) => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  },
  
<<<<<<< HEAD
  // Clear cart
  clearCart: () => {
    return [];
=======
<<<<<<< HEAD
  clearCart: () => {
    return [];
=======
  // Get total price
  getTotalPrice: (cart) => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
>>>>>>> cursor/create-and-deploy-new-content-7857
  },
  
  // Check if item is in cart
  isInCart: (cart, itemId) => {
    return cart.some(item => item.id === itemId);
  },
  
  // Get item from cart
  getItem: (cart, itemId) => {
    return cart.find(item => item.id === itemId);
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-d952
>>>>>>> cursor/create-and-deploy-new-content-7857
  }
};

export default cartUtils;