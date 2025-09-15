// Cart utilities for managing shopping cart functionality

export const cartUtils = {
  // Add item to cart
  addItem: (cart, item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    
>>>>>>> 764f38a25b6ac8e639cc80767ab314d644c44287
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
>>>>>>> 764f38a25b6ac8e639cc80767ab314d644c44287
  removeItem: (cart, itemId) => {
    return cart.filter(item => item.id !== itemId);
  },
  
>>>>>>> 764f38a25b6ac8e639cc80767ab314d644c44287
  updateQuantity: (cart, itemId, quantity) => {
    if (quantity <= 0) {
      return cartUtils.removeItem(cart, itemId);
    }
>>>>>>> 764f38a25b6ac8e639cc80767ab314d644c44287
    return cart.map(item =>
      item.id === itemId ? { ...item, quantity } : item
    );
  },
  
  // Clear cart
  clearCart: () => {
    return [];
  },
  
  // Get total items count
>>>>>>> cursor/create-and-deploy-new-content-d952
  getTotalItems: (cart) => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  },
  
>>>>>>> 764f38a25b6ac8e639cc80767ab314d644c44287
  }
};

export default cartUtils;