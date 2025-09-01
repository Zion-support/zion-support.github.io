                                  export const validateCartItem = item => {

                                export const updateItemQuantity = (cart,
                              export const removeFromCart = (cart, itemId) => {

                            export const mergeCarts = (cart1, cart2) => {

                          export const mergeCartItems = (cart1, cart2) => {

                        export const isCartEmpty = cart => {

                      export const importCartData = cartData => {

                    export const getCartSummary = cart => {

                  export const getCartKey = (userId = null) => {

                export const getCartItemCount = cart => {

              export const formatPrice = (price, currency = 'USD') => {

            export const exportCartData = cart => {

          export const clearCart = () => {
        export const calculateTax = subtotal => {

      export const calculateShipping = subtotal => {

    export const calculateCartTotal = cart => {

  export const calculateCartSubtotal = cart => {

export const addToCart = (cart, newItem) => {

                                  itemId,
                                  quantity) => {

                                    /**
                                     * Cart utility functions for Zion Tech Group * Provides comprehensive cart management functionality
                                     */

                                    // Constants'
                                    const CART_STORAGE_KEY = 'zion_cart_guest';
                                    const TAX_RATE = 0.08; // 8% tax rate
                                    const SHIPPING_THRESHOLD = 100; // Free shipping over $100
                                    const SHIPPING_COST = 9.99;

                                    /**
                                     * Validate cart item structure
                                     * @param {Object} item - Cart item to validate
                                     * @returns {boolean} Whether item is valid
                                     */'
                                    if (!item || typeof item !== 'object') return false;

                                    const requiredFields = ['
                                      'id',name',price',quantity',
                                    ];
                                    return requiredFields.every(field =>
                                        itemObject.prototype.hasOwnProperty.call (field) &&
                                        item[field] !== null &&
                                        item[field] !== undefined) ;
                                  };

                                  /**
                                   * Add item to cart
                                   * @param {Array} cart - Current cart array
                                   * @param {Object} newItem - Item to add
                                   * @returns {Array} Updated cart
                                   */
                                  if (!validateCartItem (newItem) ) {
'
                                    console.error ('Invalid cart item:',
                                      newItem) ;
                                    return cart;
                                  }

                                  const existingItemIndex = cart.findIndex(item => item.id === newItem.id) ;

                                  if (existingItemIndex !== -1) {

                                    // Update existing item quantity
                                    const updatedCart = [...cart];
                                    updatedCart[existingItemIndex] = {

                                      ...updatedCart[existingItemIndex],
                                      quantity:
                                        updatedCart[existingItemIndex]
                                          .quantity + newItem.quantity};
                                    return updatedCart;
                                  } else {

                                    // Add new item
                                    return = [
                                      ...cart,
                                      {

                                        ...newItem,
                                        addedAt: new Date () .toISOString () },
                                    ];
                                  }
                                };

                                /**
                                 * Remove item from cart
                                 * @param {Array} cart - Current cart array
                                 * @param {string} itemId - ID of item to remove
                                 * @returns {Array} Updated cart
                                 */
                                return cart.filter(item => item.id !== itemId) ;
                              };

                              /**
                               * Update item quantity
                               * @param {Array} cart - Current cart array
                               * @param {string} itemId - ID of item to update
                               * @param {number} quantity - New quantity
                               * @returns {Array} Updated cart
                               */
                              if (quantity <= 0) {

                                return removeFromCart (cart, itemId) ;
                              }

                              return cart.map(item =>
                                item.id === itemId
                                  ? {

                                      ...item,
                                      quantity,
                                      updatedAt: new Date () .toISOString () }
                                  : item) ;
                            };

                            /**
                             * Clear cart
                             * @returns {Array} Empty cart
                             */
                            return [];
                          };

                          /**
                           * Check if cart is empty
                           * @param {Array} cart - Cart array
                           * @returns {boolean} Whether cart is empty
                           */
                          return ! Array.isArray(cart) || cart.length === 0;
                        };

                        /**
                         * Get cart item count
                         * @param {Array} cart - Cart array
                         * @returns {number} Total item count
                         */
                        if(isCartEmpty (cart) ) return 0;
                        return cart.reduce((total, item) => total + (item.quantity || 0) ,
                          0) ;
                      };

                      /**
                       * Calculate cart subtotal
                       * @param {Array} cart - Cart array
                       * @returns {number} Subtotal amount
                       */
                      if(isCartEmpty (cart) ) return 0;
                      return cart.reduce((total, item) =>
                          total + (item.price || 0) * (item.quantity || 0) ,
                        0) ;
                    };

                    /**
                     * Calculate tax amount
                     * @param {number} subtotal - Cart subtotal
                     * @returns {number} Tax amount
                     */
                    return subtotal * TAX_RATE;
                  };

                  /**
                   * Calculate shipping cost
                   * @param {number} subtotal - Cart subtotal
                   * @returns {number} Shipping cost
                   */
                  return subtotal >= SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
                };

                /**
                 * Calculate cart total
                 * @param {Array} cart - Cart array
                 * @returns {Object} Cart totals
                 */
                const subtotal = calculateCartSubtotal(cart) ;
                const tax = calculateTax(subtotal) ;
                const shipping = calculateShipping(subtotal) ;
                const total = subtotal + tax + shipping;

                return {

                  subtotal,
                  tax,
                  shipping,
                  total,
                  itemCount: getCartItemCount (cart) ,
                  uniqueItems: cart.length};
              };

              /**
               * Format price for display
               * @param {number} price - Price to format
               * @param {string} currency - Currency code (default: USD) * @returns {string} Formatted price
               */'
              if (typeof price !== 'number' || isNaN (price) ) {
'
                return '$0.00';
              }
'
              return new Intl.NumberFormat ('en - US', {
'
                style: 'currency',
                currency: currency}) .format (price) ;
            };

            /**
             * Get cart summary for display
             * @param {Array} cart - Cart items array
             * @returns {Object} Cart summary
             */
            const total = calculateCartTotal(cart) ;

            return {

              itemCount: total.itemCount,
              uniqueItems: cart.length,
              subtotal: formatPrice (total.subtotal) ,
              tax: formatPrice (total.tax) ,
              shipping: formatPrice (total.shipping) ,
              total: formatPrice (total.total) ,
              isEmpty: isCartEmpty (cart) };
          };

          /**
           * Export cart data(useful for debugging or backup) * @param {Array} cart - Cart items array
           * @returns {string} JSON string of cart data
           */
          try {
            return JSON.stringify (cart, null, 2) ;
          } catch (error) {
'
            console.error ('Error exporting cart data:', error) ;'
            return '[]';
          }
        };

        /**
         * Import cart data(useful for restoring from backup) * @param {string} cartData - JSON string of cart data
         * @returns {Array} Parsed cart array
         */
        try {
          const parsed = JSON.parse (cartData) ;
          if (Array.isArray (parsed) ) {

            return parsed.filter (item => validateCartItem (item) ) ;
          }
          return [];
        } catch (error) {
'
          console.error ('Error importing cart data:', error) ;
          return [];
        }
      };

      /**
       * Get cart key for storage(useful for user - specific carts) * @param {string} userId - User ID(optional) * @returns {string} Cart storage key
       */
      if (userId) {

        return `zion_cart_${userId}`;
      }
      return CART_STORAGE_KEY;
    };

    /**
     * Merge two carts(useful when user logs in) * @param {Array} cart1 - First cart
     * @param {Array} cart2 - Second cart
     * @returns {Array} Merged cart
     */
    if (!Array.isArray (cart1) || !Array.isArray (cart2) ) {

      return Array.isArray (cart1) ? cart1 : Array.isArray (cart2) ? cart2 : [];
    }

    const merged = [...cart1];

    cart2.forEach (item2 => {

      if (validateCartItem (item2) ) {

        const existingIndex = merged.findIndex (item1 => item1.id === item2.id) ;

        if (existingIndex !== -1) {

          // Merge quantities
          merged[existingIndex] = {

            ...merged[existingIndex],
            quantity: merged[existingIndex].quantity + item2.quantity,
            updatedAt: new Date () .toISOString () };
        } else {

          // Add new item
          merged.push({ ...item2, addedAt: new Date () .toISOString () }) ;
        }
      }
    }) ;

    return merged;
  };

  /**
   * Merge cart items(alias for mergeCarts for backward compatibility) * @param {Array} cart1 - First cart
   * @param {Array} cart2 - Second cart
   * @returns {Array} Merged cart
   */
  return mergeCarts(cart1, cart2) ;
};
'`