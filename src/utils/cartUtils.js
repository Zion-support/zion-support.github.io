// Cart utility functions for managing shopping cart state and operations

// Local storage keys
const CART_STORAGE_KEY = 'zion_cart';
const CART_EXPIRY_KEY = 'zion_cart_expiry';

// Cart expiry time (24 hours)
const CART_EXPIRY_TIME = 24 * 60 * 60 * 1000;

/**
 * Get cart from localStorage
 * @returns {Array} Cart items array
 */
export const getCartFromStorage = () => {
  try {
    const cartData = localStorage.getItem(CART_STORAGE_KEY);
    const expiryData = localStorage.getItem(CART_EXPIRY_KEY);
    
    if (!cartData || !expiryData) {
      return [];
    }
    
    const expiry = parseInt(expiryData);
    const now = Date.now();
    
    // Check if cart has expired
    if (now > expiry) {
      clearCartFromStorage();
      return [];
    }
    
    return JSON.parse(cartData);
  } catch (error) {
    console.error('Error reading cart from storage:', error);
    return [];
  }
};

/**
 * Save cart to localStorage
 * @param {Array} cart - Cart items array
 */
export const saveCartToStorage = (cart) => {
  try {
    const expiry = Date.now() + CART_EXPIRY_TIME;
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    localStorage.setItem(CART_EXPIRY_KEY, expiry.toString());
  } catch (error) {
    console.error('Error saving cart to storage:', error);
  }
};

/**
 * Clear cart from localStorage
 */
export const clearCartFromStorage = () => {
  try {
    localStorage.removeItem(CART_STORAGE_KEY);
    localStorage.removeItem(CART_EXPIRY_KEY);
  } catch (error) {
    console.error('Error clearing cart from storage:', error);
  }
};

/**
 * Add item to cart
 * @param {Array} currentCart - Current cart items
 * @param {Object} item - Item to add
 * @returns {Array} Updated cart
 */
export const addToCart = (currentCart, item) => {
  if (!item || !item.id) {
    console.error('Invalid item provided to addToCart');
    return currentCart;
  }
  
  const existingItemIndex = currentCart.findIndex(cartItem => cartItem.id === item.id);
  
  if (existingItemIndex >= 0) {
    // Item already exists, update quantity
    const updatedCart = [...currentCart];
    updatedCart[existingItemIndex] = {
      ...updatedCart[existingItemIndex],
      quantity: updatedCart[existingItemIndex].quantity + (item.quantity || 1),
      updatedAt: new Date().toISOString()
    };
    return updatedCart;
  } else {
    // Add new item
    return [...currentCart, {
      ...item,
      quantity: item.quantity || 1,
      addedAt: new Date().toISOString()
    }];
  }
};

/**
 * Remove item from cart
 * @param {Array} currentCart - Current cart items
 * @param {string|number} itemId - ID of item to remove
 * @returns {Array} Updated cart
 */
export const removeFromCart = (currentCart, itemId) => {
  return currentCart.filter(item => item.id !== itemId);
};

/**
 * Update item quantity in cart
 * @param {Array} currentCart - Current cart items
 * @param {string|number} itemId - ID of item to update
 * @param {number} quantity - New quantity
 * @returns {Array} Updated cart
 */
export const updateCartItemQuantity = (currentCart, itemId, quantity) => {
  if (quantity <= 0) {
    return removeFromCart(currentCart, itemId);
  }
  
  return currentCart.map(item => 
    item.id === itemId 
      ? { ...item, quantity, updatedAt: new Date().toISOString() }
      : item
  );
};

/**
 * Check if cart is empty
 * @param {Array} cart - Cart items array
 * @returns {boolean} True if cart is empty
 */
export const isCartEmpty = (cart) => {
  return !Array.isArray(cart) || cart.length === 0;
};

/**
 * Get cart item count
 * @param {Array} cart - Cart items array
 * @returns {number} Total number of items in cart
 */
export const getCartItemCount = (cart) => {
  if (!Array.isArray(cart)) return 0;
  return cart.reduce((total, item) => total + (item.quantity || 1), 0);
};

/**
 * Calculate cart total
 * @param {Array} cart - Cart items array
 * @returns {Object} Cart totals
 */
export const calculateCartTotal = (cart) => {
  if (!Array.isArray(cart)) {
    return { subtotal: 0, tax: 0, total: 0, itemCount: 0 };
  }
  
  const subtotal = cart.reduce((total, item) => {
    const price = parseFloat(item.price) || 0;
    const quantity = parseInt(item.quantity) || 1;
    return total + (price * quantity);
  }, 0);
  
  const tax = subtotal * 0.1; // 10% tax rate
  const total = subtotal + tax;
  const itemCount = getCartItemCount(cart);
  
  return { subtotal, tax, total, itemCount };
};

/**
 * Validate cart item
 * @param {Object} item - Cart item to validate
 * @returns {boolean} True if item is valid
 */
export const validateCartItem = (item) => {
  return item && 
         item.id && 
         typeof item.price === 'number' && 
         !isNaN(item.price) && 
         item.price >= 0 &&
         typeof item.quantity === 'number' && 
         !isNaN(item.quantity) && 
         item.quantity > 0;
};

/**
 * Merge two carts
 * @param {Array} cart1 - First cart
 * @param {Array} cart2 - Second cart
 * @returns {Array} Merged cart
 */
export const mergeCarts = (cart1, cart2) => {
  if (!Array.isArray(cart1) || !Array.isArray(cart2)) {
    return Array.isArray(cart1) ? cart1 : (Array.isArray(cart2) ? cart2 : []);
  }
  
  const mergedCart = [...cart1];
  
  cart2.forEach(item2 => {
    const existingItemIndex = mergedCart.findIndex(item1 => item1.id === item2.id);
    
    if (existingItemIndex >= 0) {
      // Merge quantities
      mergedCart[existingItemIndex].quantity += item2.quantity;
      mergedCart[existingItemIndex].updatedAt = new Date().toISOString();
    } else {
      // Add new item
      mergedCart.push({
        ...item2,
        addedAt: new Date().toISOString()
      });
    }
  });
  
  return mergedCart;
};

/**
 * Format price for display
 * @param {number} price - Price to format
 * @param {string} currency - Currency code (default: USD)
 * @returns {string} Formatted price
 */
export const formatPrice = (price, currency = 'USD') => {
  if (typeof price !== 'number' || isNaN(price)) {
    return '$0.00';
  }
  
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency
  }).format(price);
};

/**
 * Get cart summary for display
 * @param {Array} cart - Cart items array
 * @returns {Object} Cart summary
 */
export const getCartSummary = (cart) => {
  const total = calculateCartTotal(cart);
  
  return {
    itemCount: total.itemCount,
    uniqueItems: cart.length,
    subtotal: formatPrice(total.subtotal),
    tax: formatPrice(total.tax),
    total: formatPrice(total.total),
    isEmpty: isCartEmpty(cart)
  };
};

/**
 * Export cart data (useful for debugging or backup)
 * @param {Array} cart - Cart items array
 * @returns {string} JSON string of cart data
 */
export const exportCartData = (cart) => {
  try {
    return JSON.stringify(cart, null, 2);
  } catch (error) {
    console.error('Error exporting cart data:', error);
    return '[]';
  }
};

/**
 * Import cart data (useful for restoring from backup)
 * @param {string} cartData - JSON string of cart data
 * @returns {Array} Parsed cart array
 */
export const importCartData = (cartData) => {
  try {
    const parsed = JSON.parse(cartData);
    if (Array.isArray(parsed)) {
      return parsed.filter(item => validateCartItem(item));
    }
    return [];
  } catch (error) {
    console.error('Error importing cart data:', error);
    return [];
  }
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

/**
 * Merge cart items (alias for mergeCarts for backward compatibility)
 * @param {Array} cart1 - First cart
 * @param {Array} cart2 - Second cart
 * @returns {Array} Merged cart
 */
export const mergeCartItems = (cart1, cart2) => {
  return mergeCarts(cart1, cart2);
};