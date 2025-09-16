export const cartUtils = {
  // Add item to cart
  addItem: (cart, item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    
  // Get total items count
export default cartUtils;