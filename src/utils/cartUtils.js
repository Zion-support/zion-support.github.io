// Cart utilities for managing shopping cart functionality

export const cartUtils = {
  // Add item to cart
  addItem: (cart, item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    
<<<<<<< HEAD
>>>>>>> 764f38a25b6ac8e639cc80767ab314d644c44287
=======
>>>>>>> cursor/create-and-deploy-new-content-abae
    if (existingItem) {
      return cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
    
    return [...cart, { ...item, quantity: 1 }];
  },
  
  // Remove item from cart
<<<<<<< HEAD
>>>>>>> 764f38a25b6ac8e639cc80767ab314d644c44287
=======
>>>>>>> cursor/create-and-deploy-new-content-abae
  removeItem: (cart, itemId) => {
    return cart.filter(item => item.id !== itemId);
  },
  
<<<<<<< HEAD
>>>>>>> 764f38a25b6ac8e639cc80767ab314d644c44287
=======
  // Update item quantity
>>>>>>> cursor/create-and-deploy-new-content-abae
  updateQuantity: (cart, itemId, quantity) => {
    if (quantity <= 0) {
      return cartUtils.removeItem(cart, itemId);
    }
<<<<<<< HEAD
>>>>>>> 764f38a25b6ac8e639cc80767ab314d644c44287
=======
    
>>>>>>> cursor/create-and-deploy-new-content-abae
    return cart.map(item =>
      item.id === itemId ? { ...item, quantity } : item
    );
  },
  
<<<<<<< HEAD
  // Clear cart
  clearCart: () => {
    return [];
=======
  // Get total price
  getTotalPrice: (cart) => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
>>>>>>> cursor/create-and-deploy-new-content-abae
  },
  
  // Get total items count
  getTotalItems: (cart) => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  },
  
<<<<<<< HEAD
>>>>>>> 764f38a25b6ac8e639cc80767ab314d644c44287
=======
  // Clear cart
  clearCart: () => {
    return [];
  },
  
  // Check if item is in cart
  isInCart: (cart, itemId) => {
    return cart.some(item => item.id === itemId);
  },
  
  // Get item from cart
  getItem: (cart, itemId) => {
    return cart.find(item => item.id === itemId);
>>>>>>> cursor/create-and-deploy-new-content-abae
  }
};

export default cartUtils;