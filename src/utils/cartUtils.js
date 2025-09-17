=======
>>>>>>> origin/cursor/create-and-deploy-new-content-24fa
>>>>>>> cursor/create-and-deploy-new-content-cc9d
=======
>>>>>>> 764f38a25b6ac8e639cc80767ab314d644c44287
>>>>>>> origin/cursor/create-and-deploy-new-content-24fa
// Cart utilities for managing shopping cart functionality

export const cartUtils = {
  // Add item to cart
  addItem: (cart, item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    
=======
=======
>>>>>>> 2ad069e84825dabaf46d071e81e10e505f57815a
>>>>>>> cursor/create-and-deploy-new-content-cc9d
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-d952
>>>>>>> 764f38a25b6ac8e639cc80767ab314d644c44287
>>>>>>> origin/cursor/create-and-deploy-new-content-24fa
>>>>>>> origin/cursor/create-and-deploy-new-content-62f5
    if (existingItem) {
      return cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
=======
>>>>>>> origin/cursor/create-and-deploy-new-content-24fa
>>>>>>> cursor/create-and-deploy-new-content-cc9d
=======
>>>>>>> 764f38a25b6ac8e639cc80767ab314d644c44287
>>>>>>> origin/cursor/create-and-deploy-new-content-24fa
    
    return [...cart, { ...item, quantity: 1 }];
  },
  
  // Remove item from cart
=======
=======
>>>>>>> 2ad069e84825dabaf46d071e81e10e505f57815a
>>>>>>> cursor/create-and-deploy-new-content-cc9d
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-d952
>>>>>>> 764f38a25b6ac8e639cc80767ab314d644c44287
>>>>>>> origin/cursor/create-and-deploy-new-content-24fa
>>>>>>> origin/cursor/create-and-deploy-new-content-62f5
  removeItem: (cart, itemId) => {
    return cart.filter(item => item.id !== itemId);
  },
  
=======
  // Update item quantity
=======
>>>>>>> origin/cursor/create-and-deploy-new-content-24fa
>>>>>>> cursor/create-and-deploy-new-content-cc9d
=======
>>>>>>> 764f38a25b6ac8e639cc80767ab314d644c44287
>>>>>>> origin/cursor/create-and-deploy-new-content-24fa
>>>>>>> origin/cursor/create-and-deploy-new-content-62f5
  updateQuantity: (cart, itemId, quantity) => {
    if (quantity <= 0) {
      return cartUtils.removeItem(cart, itemId);
    }
=======
    
=======
>>>>>>> origin/cursor/create-and-deploy-new-content-24fa
>>>>>>> cursor/create-and-deploy-new-content-cc9d
=======
>>>>>>> 764f38a25b6ac8e639cc80767ab314d644c44287
>>>>>>> origin/cursor/create-and-deploy-new-content-24fa
>>>>>>> origin/cursor/create-and-deploy-new-content-62f5
    return cart.map(item =>
      item.id === itemId ? { ...item, quantity } : item
    );
  },
  
=======
>>>>>>> origin/cursor/create-and-deploy-new-content-24fa
>>>>>>> origin/cursor/create-and-deploy-new-content-24fa
  // Clear cart
  clearCart: () => {
    return [];
>>>>>>> cursor/create-and-deploy-new-content-cc9d
  },
  
  // Get total items count
>>>>>>> cursor/create-and-deploy-new-content-d952
>>>>>>> origin/cursor/create-and-deploy-new-content-62f5
  getTotalItems: (cart) => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  },
  
>>>>>>> cursor/create-and-deploy-new-content-cc9d
  },
  
  // Check if item is in cart
  isInCart: (cart, itemId) => {
    return cart.some(item => item.id === itemId);
  },
  
  // Get item from cart
  getItem: (cart, itemId) => {
    return cart.find(item => item.id === itemId);
=======
=======
>>>>>>> 2ad069e84825dabaf46d071e81e10e505f57815a
>>>>>>> cursor/create-and-deploy-new-content-cc9d
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-d952
>>>>>>> 764f38a25b6ac8e639cc80767ab314d644c44287
>>>>>>> origin/cursor/create-and-deploy-new-content-24fa
>>>>>>> origin/cursor/create-and-deploy-new-content-62f5
  }
};

export default cartUtils;
=======
