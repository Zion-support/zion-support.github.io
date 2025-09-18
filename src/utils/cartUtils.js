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

export default cartUtils;
