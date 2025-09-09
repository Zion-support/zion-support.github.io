// Cart utility functions
export const getCartKey = (userId) => {
  return `cart_${userId || 'anonymous'}`;
};

export const mergeCartItems = (existingItems, newItems) => {
  const merged = [...existingItems];
  
  newItems.forEach(newItem => {
    const existingIndex = merged.findIndex(item => item.id === newItem.id);
    if (existingIndex >= 0) {
      merged[existingIndex].quantity += newItem.quantity || 1;
    } else {
      merged.push(newItem);
    }
  });
  
  return merged;
};

export const calculateCartTotal = (items) => {
  return items.reduce((total, item) => {
    return total + (item.price * (item.quantity || 1));
  }, 0);
};

export const getCartItemCount = (items) => {
  return items.reduce((count, item) => {
    return count + (item.quantity || 1);
  }, 0);
};