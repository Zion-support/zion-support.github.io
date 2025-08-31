/**
 * Cart Utilities for Zion Tech Group
 * Handles cart operations, calculations, and storage
 */

// Storage key for cart data
const CART_STORAGE_KEY = 'zion_cart';

/**
 * Add item to cart
 * @param {Array} cart - Current cart items
 * @param {Object} item - Item to add
 * @returns {Array} Updated cart
 */
export const addToCart = (cart, item) => {
  if (!item || !item.id) {
    return cart;
  }

  const existingItem = cart.find(cartItem => cartItem.id === item.id);
  
  if (existingItem) {
    return cart.map(cartItem =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + (item.quantity || 1) }
        : cartItem
    );
  }

  return [...cart, { ...item, quantity: item.quantity || 1 }];
};

/**
 * Remove item from cart
 * @param {Array} cart - Current cart items
 * @param {string} itemId - ID of item to remove
 * @returns {Array} Updated cart
 */
export const removeFromCart = (cart, itemId) => {
  return cart.filter(item => item.id !== itemId);
};

/**
 * Update item quantity in cart
 * @param {Array} cart - Current cart items
 * @param {string} itemId - ID of item to update
 * @param {number} quantity - New quantity
 * @returns {Array} Updated cart
 */
export const updateCartItemQuantity = (cart, itemId, quantity) => {
  if (quantity <= 0) {
    return removeFromCart(cart, itemId);
  }

  return cart.map(item =>
    item.id === itemId ? { ...item, quantity } : item
  );
};

/**
 * Clear cart
 * @returns {Array} Empty cart
 */
export const clearCart = () => {
  return [];
};

/**
 * Get cart item count
 * @param {Array} cart - Cart items
 * @returns {number} Total item count
 */
export const getCartItemCount = (cart) => {
  return cart.reduce((total, item) => total + (item.quantity || 1), 0);
};

/**
 * Check if cart is empty
 * @param {Array} cart - Cart items
 * @returns {boolean} True if cart is empty
 */
export const isCartEmpty = (cart) => {
  return !cart || cart.length === 0;
};

/**
 * Calculate cart subtotal
 * @param {Array} cart - Cart items
 * @returns {number} Subtotal amount
 */
export const calculateCartSubtotal = (cart) => {
  return cart.reduce((subtotal, item) => {
    const price = parseFloat(item.price) || 0;
    const quantity = parseInt(item.quantity) || 1;
    return subtotal + (price * quantity);
  }, 0);
};

/**
 * Calculate tax amount
 * @param {number} subtotal - Cart subtotal
 * @param {number} taxRate - Tax rate as decimal (e.g., 0.08 for 8%)
 * @returns {number} Tax amount
 */
export const calculateTax = (subtotal, taxRate = 0.08) => {
  return subtotal * taxRate;
};

/**
 * Calculate shipping cost
 * @param {Array} cart - Cart items
 * @param {number} baseShipping - Base shipping cost
 * @param {number} freeShippingThreshold - Threshold for free shipping
 * @returns {number} Shipping cost
 */
export const calculateShipping = (cart, baseShipping = 10, freeShippingThreshold = 100) => {
  const subtotal = calculateCartSubtotal(cart);
  return subtotal >= freeShippingThreshold ? 0 : baseShipping;
};

/**
 * Calculate cart total
 * @param {Array} cart - Cart items
 * @param {Object} options - Calculation options
 * @returns {Object} Cart totals
 */
export const calculateCartTotal = (cart, options = {}) => {
  const {
    taxRate = 0.08,
    baseShipping = 10,
    freeShippingThreshold = 100
  } = options;

  const subtotal = calculateCartSubtotal(cart);
  const tax = calculateTax(subtotal, taxRate);
  const shipping = calculateShipping(cart, baseShipping, freeShippingThreshold);
  const total = subtotal + tax + shipping;

  return {
    subtotal,
    tax,
    shipping,
    total,
    itemCount: getCartItemCount(cart),
    uniqueItems: cart.length
  };
};

/**
 * Validate cart item
 * @param {Object} item - Cart item to validate
 * @returns {boolean} True if item is valid
 */
export const validateCartItem = (item) => {
  return item &&
    typeof item === 'object' &&
    item.id &&
    typeof item.id === 'string' &&
    item.price !== undefined &&
    !isNaN(parseFloat(item.price)) &&
    item.quantity !== undefined &&
    !isNaN(parseInt(item.quantity)) &&
    parseInt(item.quantity) > 0;
};

/**
 * Validate cart
 * @param {Array} cart - Cart to validate
 * @returns {boolean} True if cart is valid
 */
export const validateCart = (cart) => {
  return Array.isArray(cart) && cart.every(validateCartItem);
};

/**
 * Get cart item by ID
 * @param {Array} cart - Cart items
 * @param {string} itemId - Item ID to find
 * @returns {Object|null} Cart item or null
 */
export const getCartItem = (cart, itemId) => {
  return cart.find(item => item.id === itemId) || null;
};

/**
 * Check if item exists in cart
 * @param {Array} cart - Cart items
 * @param {string} itemId - Item ID to check
 * @returns {boolean} True if item exists
 */
export const isItemInCart = (cart, itemId) => {
  return cart.some(item => item.id === itemId);
};

/**
 * Get cart items by category
 * @param {Array} cart - Cart items
 * @param {string} category - Category to filter by
 * @returns {Array} Filtered cart items
 */
export const getCartItemsByCategory = (cart, category) => {
  return cart.filter(item => item.category === category);
};

/**
 * Get cart items by price range
 * @param {Array} cart - Cart items
 * @param {number} minPrice - Minimum price
 * @param {number} maxPrice - Maximum price
 * @returns {Array} Filtered cart items
 */
export const getCartItemsByPriceRange = (cart, minPrice, maxPrice) => {
  return cart.filter(item => {
    const price = parseFloat(item.price) || 0;
    return price >= minPrice && price <= maxPrice;
  });
};

/**
 * Sort cart items
 * @param {Array} cart - Cart items
 * @param {string} sortBy - Sort field ('name', 'price', 'quantity', 'date')
 * @param {string} sortOrder - Sort order ('asc' or 'desc')
 * @returns {Array} Sorted cart items
 */
export const sortCartItems = (cart, sortBy = 'name', sortOrder = 'asc') => {
  const sortedCart = [...cart];
  
  sortedCart.sort((a, b) => {
    let aValue, bValue;
    
    switch (sortBy) {
      case 'price':
        aValue = parseFloat(a.price) || 0;
        bValue = parseFloat(b.price) || 0;
        break;
      case 'quantity':
        aValue = parseInt(a.quantity) || 0;
        bValue = parseInt(b.quantity) || 0;
        break;
      case 'name':
        aValue = (a.name || a.title || '').toLowerCase();
        bValue = (b.name || b.title || '').toLowerCase();
        break;
      case 'date':
        aValue = new Date(a.addedAt || 0);
        bValue = new Date(b.addedAt || 0);
        break;
      default:
        aValue = a[sortBy];
        bValue = b[sortBy];
    }
    
    if (sortOrder === 'desc') {
      return aValue < bValue ? 1 : aValue > bValue ? -1 : 0;
    }
    
    return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
  });
  
  return sortedCart;
};

/**
 * Filter cart items
 * @param {Array} cart - Cart items
 * @param {Object} filters - Filter criteria
 * @returns {Array} Filtered cart items
 */
export const filterCartItems = (cart, filters = {}) => {
  return cart.filter(item => {
    for (const [key, value] of Object.entries(filters)) {
      if (value === undefined || value === null) continue;
      
      switch (key) {
        case 'category':
          if (item.category !== value) return false;
          break;
        case 'minPrice':
          if ((parseFloat(item.price) || 0) < value) return false;
          break;
        case 'maxPrice':
          if ((parseFloat(item.price) || 0) > value) return false;
          break;
        case 'inStock':
          if (item.inStock !== value) return false;
          break;
        case 'search':
          const searchTerm = value.toLowerCase();
          const itemText = `${item.name || ''} ${item.title || ''} ${item.description || ''}`.toLowerCase();
          if (!itemText.includes(searchTerm)) return false;
          break;
        default:
          if (item[key] !== value) return false;
      }
    }
    return true;
  });
};

/**
 * Merge two carts
 * @param {Array} cart1 - First cart
 * @param {Array} cart2 - Second cart
 * @returns {Array} Merged cart
 */
export const mergeCarts = (cart1, cart2) => {
  const merged = [...cart1];
  
  cart2.forEach(item2 => {
    const existingIndex = merged.findIndex(item1 => item1.id === item2.id);
    
    if (existingIndex >= 0) {
      merged[existingIndex] = {
        ...merged[existingIndex],
        quantity: (merged[existingIndex].quantity || 1) + (item2.quantity || 1)
      };
    } else {
      merged.push(item2);
    }
  });
  
  return merged;
};

/**
 * Format price for display
 * @param {number} price - Price to format
 * @param {string} currency - Currency code
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