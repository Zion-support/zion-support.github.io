// cartUtils utility
export const cartUtils = {
  // Placeholder utility functions
  init: () => {
    // // console.log('cartUtils initialized');
  },
};

export const getCartKey = () => 'zion_cart';

export const mergeCartItems = (existingItems, newItems) => {
  const merged = [...existingItems];
  newItems.forEach(newItem => {
    const existing = merged.find(item => item.id === newItem.id);
    if (existing) {
      existing.quantity += newItem.quantity || 1;
    } else {
      merged.push({ ...newItem, quantity: newItem.quantity || 1 });
    }
  });
  return merged;
};

export default cartUtils