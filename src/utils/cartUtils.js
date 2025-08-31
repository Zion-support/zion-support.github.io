// Cart utility functions for Zion Tech Group application

const CART_STORAGE_KEY = 'zion_cart';

/**
 * Get cart from localStorage
 * @returns {Array} Cart items
 */
export const getCart = () => {
  try {
    const cartData = localStorage.getItem(CART_STORAGE_KEY);
    return cartData ? JSON.parse(cartData) : [];
  } catch (error) {
    console.warn('Failed to get cart from localStorage:', error);
    return [];
  }
};

/**
 * Save cart to localStorage
 * @param {Array} cart - Cart items to save
 */
export const saveCart = (cart) => {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    return true;
  } catch (error) {
    console.warn('Failed to save cart to localStorage:', error);
    return false;
  }
};

/**
 * Add item to cart
 * @param {Object} item - Item to add
 * @param {number} quantity - Quantity to add
 * @returns {Array} Updated cart
 */
export const addToCart = (item, quantity = 1) => {
  const cart = getCart();
  const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
  
  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += quantity;
  } else {
    cart.push({ ...item, quantity });
  }
  
  saveCart(cart);
  return cart;
};

/**
 * Remove item from cart
 * @param {string} itemId - ID of item to remove
 * @returns {Array} Updated cart
 */
export const removeFromCart = (itemId) => {
  const cart = getCart();
  const updatedCart = cart.filter(item => item.id !== itemId);
  saveCart(updatedCart);
  return updatedCart;
};

/**
 * Update item quantity in cart
 * @param {string} itemId - ID of item to update
 * @param {number} quantity - New quantity
 * @returns {Array} Updated cart
 */
export const updateCartItemQuantity = (itemId, quantity) => {
  const cart = getCart();
  const itemIndex = cart.findIndex(item => item.id === itemId);
  
  if (itemIndex > -1) {
    if (quantity <= 0) {
      cart.splice(itemIndex, 1);
    } else {
      cart[itemIndex].quantity = quantity;
    }
    saveCart(cart);
  }
  
  return cart;
};

/**
 * Clear cart
 * @returns {Array} Empty cart
 */
export const clearCart = () => {
  const emptyCart = [];
  saveCart(emptyCart);
  return emptyCart;
};

/**
 * Get cart total
 * @returns {number} Total price of all items in cart
 */
export const getCartTotal = () => {
  const cart = getCart();
  return cart.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);
};

/**
 * Get cart item count
 * @returns {number} Total number of items in cart
 */
export const getCartItemCount = () => {
  const cart = getCart();
  return cart.reduce((count, item) => {
    return count + item.quantity;
  }, 0);
};

/**
 * Check if cart is empty
 * @returns {boolean} True if cart is empty
 */
export const isCartEmpty = () => {
  return getCartItemCount() === 0;
};

/**
 * Merge two carts
 * @param {Array} cart1 - First cart
 * @param {Array} cart2 - Second cart
 * @returns {Array} Merged cart
 */
export const mergeCarts = (cart1, cart2) => {
  const mergedCart = [...cart1];
  
  cart2.forEach(item2 => {
    const existingItemIndex = mergedCart.findIndex(item1 => item1.id === item2.id);
    
    if (existingItemIndex > -1) {
      mergedCart[existingItemIndex].quantity += item2.quantity;
    } else {
      mergedCart.push(item2);
    }
  });
  
  return mergedCart;
};

/**
 * Merge cart items (alias for mergeCarts for backward compatibility)
 * @param {Array} cart1 - First cart
 * @param {Array} cart2 - Second cart
 * @returns {Array} Merged cart
 */
export const mergeCartItems = (cart1, cart2) => {
  return mergeCarts(cart1, cart2);
};

/**
 * Get cart key for storage (useful for user-specific carts)
 * @param {string} userId - User ID (optional)
 * @returns {string} Cart storage key
 */
export const getCartKey = (userId = null) => {
  if (userId) {
    return `zion_cart_${userId}`;
  }
  return CART_STORAGE_KEY;
};