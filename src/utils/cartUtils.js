<<<<<<< HEAD
<<<<<<< HEAD
// Cart utilities
export const cartUtils = {
  addItem: (cart, item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
=======
=======
>>>>>>> 2ad069e84825dabaf46d071e81e10e505f57815a
// Cart utilities for managing shopping cart functionality

export const cartUtils = {
  // Add item to cart
  addItem: (cart, item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-d952
=======
>>>>>>> 2ad069e84825dabaf46d071e81e10e505f57815a
    if (existingItem) {
      return cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
<<<<<<< HEAD
<<<<<<< HEAD
    return [...cart, { ...item, quantity: 1 }];
  },
  
=======
=======
>>>>>>> 2ad069e84825dabaf46d071e81e10e505f57815a
    
    return [...cart, { ...item, quantity: 1 }];
  },
  
  // Remove item from cart
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-d952
=======
>>>>>>> 2ad069e84825dabaf46d071e81e10e505f57815a
  removeItem: (cart, itemId) => {
    return cart.filter(item => item.id !== itemId);
  },
  
<<<<<<< HEAD
<<<<<<< HEAD
=======
  // Update item quantity
>>>>>>> cursor/create-and-deploy-new-content-d952
=======
  // Update item quantity
>>>>>>> 2ad069e84825dabaf46d071e81e10e505f57815a
  updateQuantity: (cart, itemId, quantity) => {
    if (quantity <= 0) {
      return cartUtils.removeItem(cart, itemId);
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
    
>>>>>>> cursor/create-and-deploy-new-content-d952
=======
    
>>>>>>> 2ad069e84825dabaf46d071e81e10e505f57815a
    return cart.map(item =>
      item.id === itemId ? { ...item, quantity } : item
    );
  },
  
<<<<<<< HEAD
<<<<<<< HEAD
  getTotalPrice: (cart) => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  },
  
=======
  // Clear cart
  clearCart: () => {
    return [];
=======
  // Get total price
  getTotalPrice: (cart) => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
>>>>>>> 2ad069e84825dabaf46d071e81e10e505f57815a
  },
  
  // Get total items count
>>>>>>> cursor/create-and-deploy-new-content-d952
  getTotalItems: (cart) => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  },
  
<<<<<<< HEAD
<<<<<<< HEAD
  clearCart: () => {
    return [];
=======
  // Get total price
  getTotalPrice: (cart) => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
=======
  // Clear cart
  clearCart: () => {
    return [];
>>>>>>> 2ad069e84825dabaf46d071e81e10e505f57815a
  },
  
  // Check if item is in cart
  isInCart: (cart, itemId) => {
    return cart.some(item => item.id === itemId);
  },
  
  // Get item from cart
  getItem: (cart, itemId) => {
    return cart.find(item => item.id === itemId);
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-d952
=======
>>>>>>> 2ad069e84825dabaf46d071e81e10e505f57815a
  }
};

export default cartUtils;