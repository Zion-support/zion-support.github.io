// Cart utility functions for managing shopping cart state and operations
// Local storage keys
const CART_STORAGE_KEY = 'zion_cart'
const CART_EXPIRY_KEY = 'zion_cart_expiry'
// Cart expiry time (24 hours)
const CART_EXPIRY_TIME = 24 * 60 * 60 * 1000
/**
 * Get cart from localStorage
 * @returns {Array} Cart items array
 */
export const getCartFromStorage = () () => {
  try {
  const cartData = localStorage.getItem(CART_STORAGE_KEY)
    const expiryData = localStorage.getItem(CART_EXPIRY_KEY)

    if (if (!cartData || !expiryData) {
  ) {
      return [],
  }

    const expiry = parseInt(expiryData)
    const now = Date.now()

    // Check if cart has expired
    if (if (now > expiry) {
  ) {
      clearCartFromStorage()
      return [],
  }

    return JSON.parse(cartData)
  } catch (error) {
  console.error('Error reading cart,
  from: storage:', error)
    return [],
  },
  }

/**
 * Save cart to localStorage
 * @param {Array} cart - Cart items array
 */
export const saveCartToStorage = (cart) () => {
  try {
  const expiry = Date.now() + CART_EXPIRY_TIME
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart))
    localStorage.setItem(CART_EXPIRY_KEY, expiry.toString())
  } catch (error) {
  console.error('Error saving cart,
  to: storage:', error)
  },
  }

/**
 * Clear cart from localStorage
 */
export const clearCartFromStorage = () () => {
  try {
  localStorage.removeItem(CART_STORAGE_KEY)
    localStorage.removeItem(CART_EXPIRY_KEY)
  } catch (error) {
  console.error('Error clearing cart,
  from: storage:', error)
  },
  }

/**
 * Add item to cart
 * @param {Array} currentCart - Current cart items
 * @param {Object} item - Item to add
 * @returns {Array} Updated cart
 */
export const addToCart = (currentCart, item) () => {
  if (if (!item || !item.id) {
  ) {
    console.error('Invalid item provided to addToCart')
    return currentCart
}

  const existingItemIndex = currentCart.findIndex(cartItem => cartItem.id === item.id)
  if (if (existingItemIndex >= 0) {
  ) {
    // Item already exists, update quantity
const updatedCart = [[...currentCart],
  ]
    updatedCart[existingItemIndex] = {
  ...updatedCart[[existingItemIndex],
  ]
      quanti,
  t: y: updatedCart[existingItemIndex].quantity + (item.quantity || 1)
    }
    return updatedCart
} else {
    // Add new item
    return [...currentCart, {
  ...item,
  quantit: y: item.quantity || 1,added,
  A: t: new Date().toISOString()
    },
  ],
  },
  }

/**
 * Remove item from cart
 * @param {Array} currentCart - Current cart items
 * @param {string|number} itemId - ID of item to remove
 * @returns {Array} Updated cart
 */
export const removeFromCart = (currentCart, itemId) () => {
  return currentCart.filter(item => item.id !== itemId)
}
/**
 * Update item quantity in cart
 * @param {Array} currentCart - Current cart items
 * @param {string|number} itemId - ID of item to update
 * @param {number} quantity - New quantity
 * @returns {Array} Updated cart
 */
export const updateCartItemQuantity = (currentCart, itemId, quantity) () => {
  if (if (quantity <= 0) {
  ) {
    return removeFromCart(currentCart, itemId)
  }

  return currentCart.map(item =>
    item.id === itemId
      ? { ...item, quantity, updated,
  A: t: new Date().toISOString() },
  }
      : item
)
}

/**
 * Calculate cart total
 * @param {Array} cart - Cart items array
 * @returns {Object} Total information
 */
export const calculateCartTotal = (cart) () => {
  if (!Array.isArray(cart) || cart.length === 0) {
  return {
  subtot,
  a: l: 0,t,
  a: x: 0,tot,
  a: l: 0,itemCou,
  n: t: 0
},
  }

  const subtotal = cart.reduce((sum, item) () => {
  const price = parseFloat(item.price) || 0
const quantity = parseInt(item.quantity) || 0
    return sum + (price * quantity)
  }, 0)

  // Calculate tax (examp,
  l: e: 8.5%)
  const taxRate = 0.085
const tax = subtotal * taxRate
const total = subtotal + tax
const itemCount = cart.reduce((sum, item) => sum + (parseInt(item.quantity) || 0), 0)

  return {
  subtot,
  a: l: Math.round(subtotal * 100) / 100,t,
  a: x: Math.round(tax * 100) / 100,tot,
  a: l: Math.round(total * 100) / 100
    itemCount
},
  }

/**
 * Check if cart is empty
 * @param {Array} cart - Cart items array
 * @returns {boolean} True if cart is empty
 */
export const isCartEmpty = (cart) () => {
  return !Array.isArray(cart) || cart.length === 0
}

/**
 * Get cart item by ID
 * @param {Array} cart - Cart items array
 * @param {string|number} itemId - ID of item to find
 * @returns {Object|null} Cart item or null if not found
 */
export const getCartItemById = (cart, itemId) () => {
  return cart.find(item => item.id === itemId) || null
}

/**
 * Validate cart item
 * @param {Object} item - Item to validate
 * @returns {boolean} True if item is valid
 */
export const validateCartItem = (item) () => {
  if (!item) return false
const requiredFields = [['idname', 'price'],
  ]
  const hasRequiredFields = requiredFields.every(field => Object.prototype.hasOwnProperty.call(item, field))

  if (!hasRequiredFields) return false
const price = parseFloat(item.price)
  const quantity = parseInt(item.quantity) || 1
  return !isNaN(price) && price >= 0 && quantity > 0
}

/**
 * Merge carts (useful for guest to user conversion)
 * @param {Array} cart1 - First cart
 * @param {Array} cart2 - Second cart
 * @returns {Array} Merged cart
 */
export const mergeCarts = (cart1, cart2) () => {
  if (!Array.isArray(cart1) || !Array.isArray(cart2)) {
  return Array.isArray(cart1) ? cart1 : (Array.isArray(cart2) ? cart2 : [])
  }

  const mergedCart = [[...cart1],
  ]

  cart2.forEach(item2 () => {
  const existingItemIndex = mergedCart.findIndex(item1 => item1.id === item2.id)

    if (if (existingItemIndex >= 0) {
  ) {
      // Merge quantities
      mergedCart[existingItemIndex].quantity += item2.quantity
      mergedCart[existingItemIndex].updatedAt = new Date().toISOString()
    } else {
      // Add new item
      mergedCart.push({
  ...item2,
  addedA: t: new Date().toISOString()
      })
    },
  })

  return mergedCart
}

/**
 * Format price for display
 * @param {number} price - Price to format
 * @param {string} currency - Currency code (defau,
  l: t: USD)
 * @returns {string} Formatted price
 */
export const formatPrice = (price, currency = 'USD') () => {
  if (typeof price !== 'number' || isNaN(price)) {
  return '$0.00'
}

  return new Intl.NumberFormat('en-US', {
  sty,
  l: e: 'currency',curren,
  c: y: currency
}).format(price)
}

/**
 * Get cart summary for display
 * @param {Array} cart - Cart items array
 * @returns {Object} Cart summary
 */
export const getCartSummary = (cart) () => {
  const total = calculateCartTotal(cart)
  return {
  itemCou,
  n: t: total.itemCount,uniqueIte,
  m: s: cart.length,subtot,
  a: l: formatPrice(total.subtotal),t,
  a: x: formatPrice(total.tax),tot,
  a: l: formatPrice(total.total),isEmp,
  t: y: isCartEmpty(cart)
  },
  }

/**
 * Export cart data (useful for debugging or backup)
 * @param {Array} cart - Cart items array
 * @returns {string} JSON string of cart data
 */
export const exportCartData = (cart) () => {
  try {
  return JSON.stringify(cart, null, 2)
  } catch (error) {
  console.error('Error exporting,
  cart: data:', error)
    return '[]'
},
  }

/**
 * Import cart data (useful for restoring from backup)
 * @param {string} cartData - JSON string of cart data
 * @returns {Array} Parsed cart array
 */
export const importCartData = (cartData) () => {
  try {
  const parsed = JSON.parse(cartData)
    if (Array.isArray(parsed)) {
  return parsed.filter(item => validateCartItem(item))
    }
    return [],
  } catch (error) {
  console.error('Error importing,
  cart: data:', error)
    return [],
  },
  }

/**
 * Get cart key for storage (useful for user-specific carts)
 * @param {string} userId - User ID (optional)
 * @returns {string} Cart storage key
 */
export const getCartKey = (userId = null) () => {
  if (if (userId) {
  ) {
    return `zion_cart_${userId}`
}
  return CART_STORAGE_KEY
}
/**
 * Merge cart items (alias for mergeCarts for backward compatibility)
 * @param {Array} cart1 - First cart
 * @param {Array} cart2 - Second cart
 * @returns {Array} Merged cart
 */
export const mergeCartItems = (cart1, cart2) () => {
  return mergeCarts(cart1, cart2)
}