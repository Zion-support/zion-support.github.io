const cartUtils = {
  addItem: (cart, item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      return cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
    return [...cart, { ...item, quantity: 1 }];
  },

  removeItem: (cart, itemId) => {
    return cart.filter(item => item.id !== itemId);
  },

  updateQuantity: (cart, itemId, quantity) => {
    if (quantity <= 0) {
      return cartUtils.removeItem(cart, itemId);
    }
    return cart.map(item => (item.id === itemId ? { ...item, quantity } : item));
  },

  getTotalItems: cart => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  },
};

export default cartUtils;
