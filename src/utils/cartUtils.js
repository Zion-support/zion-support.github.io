<<<<<<< HEAD
<<<<<<< HEAD
export const cartUtils = {
  // Add item to cart
  addItem: (cart, item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    
  // Get total items count
=======
    if (existingItem) {
      return cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
  removeItem: (cart, itemId) => {
    return cart.filter(item => item.id !== itemId);
  },
  
  updateQuantity: (cart, itemId, quantity) => {
    if (quantity <= 0) {
      return cartUtils.removeItem(cart, itemId);
    }
    return cart.map(item =>
      item.id === itemId ? { ...item, quantity } : item
    );
  },
  
  getTotalItems: (cart) => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  },
  
  }
};

>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d
export default cartUtils;
=======
>>>>>>> 6995d05efbf958465be8e251001703bdbc87a50a
