<<<<<<< HEAD
<<<<<<< HEAD
// Cart utility functions for managing shopping cart state
=======
// Cart utilities for handling shopping cart operations
>>>>>>> origin/cursor/create-and-deploy-new-content-7d6d

=======
<<<<<<< HEAD
// Cart utilities for handling shopping cart operations

=======
// Cart utilities for managing shopping cart functionality
>>>>>>> main
>>>>>>> cursor/create-and-deploy-new-content-be96
export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  description?: string;
  category?: string;
}

export interface Cart {
  items: CartItem[];
  total: number;
  itemCount: number;
<<<<<<< HEAD
}

export const cartUtils = {
<<<<<<< HEAD
  // Create empty cart
  createEmptyCart: (): Cart => ({
    items: [],
    total: 0,
    itemCount: 0
  }),

  // Add item to cart
  addItem: (cart: Cart, item: Omit<CartItem, 'quantity'>): Cart => {
=======
  // Create a new empty cart
  createEmptyCart: (): Cart => ({
    items: [],
    total: 0,
    itemCount: 0,
  }),

  // Add item to cart
<<<<<<< HEAD
  addItem: (cart: Cart, newItem: Omit<CartItem, 'quantity'>): Cart => {
    const existingItemIndex = cart.items.findIndex(item => item.id === newItem.id);
=======
  addItem(cart: Cart, item: Omit<CartItem, 'quantity'>): Cart {
>>>>>>> main
    const existingItem = cart.items.find(cartItem => cartItem.id === item.id);
>>>>>>> cursor/create-and-deploy-new-content-be96
    
    if (existingItemIndex > -1) {
      // Item exists, increment quantity
      const updatedItems = [...cart.items];
      updatedItems[existingItemIndex].quantity += 1;
      return cartUtils.calculateTotals({ ...cart, items: updatedItems });
    } else {
      // New item, add with quantity 1
      const updatedItems = [...cart.items, { ...newItem, quantity: 1 }];
      return cartUtils.calculateTotals({ ...cart, items: updatedItems });
    }
  },

  // Remove item from cart
<<<<<<< HEAD
  removeItem: (cart: Cart, itemId: string): Cart => {
    const updatedItems = cart.items.filter(item => item.id !== itemId);
    return cartUtils.calculateTotals({ ...cart, items: updatedItems });
  },

  // Update item quantity
  updateQuantity: (cart: Cart, itemId: string, quantity: number): Cart => {
=======
<<<<<<< HEAD
  removeItem: (cart: Cart, itemId: string): Cart => {
=======
  removeItem(cart: Cart, itemId: string): Cart {
>>>>>>> main
    const newItems = cart.items.filter(item => item.id !== itemId);
    return cartUtils.calculateTotals({ ...cart, items: newItems });
  },

  // Update item quantity
<<<<<<< HEAD
  updateItemQuantity: (cart: Cart, itemId: string, quantity: number): Cart => {
=======
  updateItemQuantity(cart: Cart, itemId: string, quantity: number): Cart {
>>>>>>> main
>>>>>>> cursor/create-and-deploy-new-content-be96
    if (quantity <= 0) {
      return cartUtils.removeItem(cart, itemId);
    }

    const updatedItems = cart.items.map(item =>
      item.id === itemId ? { ...item, quantity } : item
    );
    return cartUtils.calculateTotals({ ...cart, items: updatedItems });
  },

  // Clear all items from cart
  clearCart: (): Cart => cartUtils.createEmptyCart(),

  // Calculate totals
<<<<<<< HEAD
  calculateTotals: (cart: Cart): Cart => {
=======
<<<<<<< HEAD
  calculateTotals: (cart: Cart): Cart => {
=======
  calculateTotals(cart: Cart): Cart {
>>>>>>> main
>>>>>>> cursor/create-and-deploy-new-content-be96
    const total = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const itemCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);
    
    return {
      ...cart,
      total: Math.round(total * 100) / 100, // Round to 2 decimal places
<<<<<<< HEAD
      itemCount
=======
      itemCount,
>>>>>>> main
    };
  },

<<<<<<< HEAD
=======
  // Clear cart
<<<<<<< HEAD
  clearCart: (): Cart => cartUtils.createEmptyCart(),

  // Get item by ID
  getItem: (cart: Cart, itemId: string): CartItem | undefined => {
    return cart.items.find(item => item.id === itemId);
  },

  // Check if item exists in cart
  hasItem: (cart: Cart, itemId: string): boolean => {
=======
  clearCart(cart: Cart): Cart {
    return cartUtils.createEmptyCart();
  },

>>>>>>> cursor/create-and-deploy-new-content-be96
  // Get item by ID
  getItem: (cart: Cart, itemId: string): CartItem | undefined => {
    return cart.items.find(item => item.id === itemId);
  },

<<<<<<< HEAD
  // Check if item exists in cart
  hasItem: (cart: Cart, itemId: string): boolean => {
=======
  // Check if item is in cart
  hasItem(cart: Cart, itemId: string): boolean {
>>>>>>> main
>>>>>>> cursor/create-and-deploy-new-content-be96
    return cart.items.some(item => item.id === itemId);
  },

  // Get cart summary
<<<<<<< HEAD
  getSummary: (cart: Cart) => {
=======
<<<<<<< HEAD
  getSummary: (cart: Cart) => ({
    itemCount: cart.itemCount,
    total: cart.total,
    isEmpty: cart.items.length === 0,
    uniqueItems: cart.items.length
  }),

  // Validate cart
  validateCart: (cart: Cart): { isValid: boolean; errors: string[] } => {
    const errors: string[] = [];

    if (!Array.isArray(cart.items)) {
      errors.push('Cart items must be an array');
=======
  lastUpdated: Date;
}

export interface CartSummary {
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  itemCount: number;
}

class CartUtils {
  // Calculate cart totals
  calculateTotals(items: CartItem[]): CartSummary {
    const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.08; // 8% tax rate
    const shipping = subtotal > 100 ? 0 : 10; // Free shipping over $100
    const total = subtotal + tax + shipping;
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

    return {
      subtotal,
      tax,
      shipping,
      total,
      itemCount,
    };
  }

  // Add item to cart
  addItem(cart: Cart, item: Omit<CartItem, 'quantity'>, quantity: number = 1): Cart {
    const existingItemIndex = cart.items.findIndex(cartItem => cartItem.id === item.id);
    
    let newItems: CartItem[];
    if (existingItemIndex >= 0) {
      // Update existing item quantity
      newItems = [...cart.items];
      newItems[existingItemIndex] = {
        ...newItems[existingItemIndex],
        quantity: newItems[existingItemIndex].quantity + quantity,
      };
    } else {
      // Add new item
      newItems = [...cart.items, { ...item, quantity }];
    }

    const summary = this.calculateTotals(newItems);
    
    return {
      items: newItems,
      total: summary.total,
      itemCount: summary.itemCount,
      lastUpdated: new Date(),
    };
  }

  // Remove item from cart
  removeItem(cart: Cart, itemId: string): Cart {
    const newItems = cart.items.filter(item => item.id !== itemId);
    const summary = this.calculateTotals(newItems);
    
    return {
      items: newItems,
      total: summary.total,
      itemCount: summary.itemCount,
      lastUpdated: new Date(),
    };
  }

  // Update item quantity
  updateQuantity(cart: Cart, itemId: string, quantity: number): Cart {
    if (quantity <= 0) {
      return this.removeItem(cart, itemId);
    }

    const newItems = cart.items.map(item =>
      item.id === itemId ? { ...item, quantity } : item
    );
    
    const summary = this.calculateTotals(newItems);
    
    return {
      items: newItems,
      total: summary.total,
      itemCount: summary.itemCount,
      lastUpdated: new Date(),
    };
  }

  // Clear cart
  clearCart(): Cart {
    return {
      items: [],
      total: 0,
      itemCount: 0,
      lastUpdated: new Date(),
    };
  }

  // Get item by ID
  getItem(cart: Cart, itemId: string): CartItem | undefined {
    return cart.items.find(item => item.id === itemId);
  }

  // Check if item exists in cart
  hasItem(cart: Cart, itemId: string): boolean {
    return cart.items.some(item => item.id === itemId);
  }

  // Get cart summary
  getSummary(cart: Cart): CartSummary {
    return this.calculateTotals(cart.items);
  }

  // Validate cart
  validateCart(cart: Cart): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (cart.items.length === 0) {
      errors.push('Cart is empty');
>>>>>>> origin/cursor/create-and-deploy-new-content-7d6d
    }

    cart.items.forEach((item, index) => {
      if (!item.id) {
<<<<<<< HEAD
        errors.push(`Item at index ${index} is missing ID`);
      }
      if (!item.name) {
        errors.push(`Item at index ${index} is missing name`);
      }
      if (typeof item.price !== 'number' || item.price < 0) {
        errors.push(`Item at index ${index} has invalid price`);
      }
      if (typeof item.quantity !== 'number' || item.quantity <= 0) {
        errors.push(`Item at index ${index} has invalid quantity`);
      }
    });

    return {
      isValid: errors.length === 0,
      errors
    };
  },

  // Get cart key for storage
  getCartKey: (userId?: string): string => {
    return userId ? `cart_${userId}` : 'cart_guest';
  },

  // Merge cart items
  mergeCartItems: (items1: CartItem[], items2: CartItem[]): CartItem[] => {
    const mergedMap = new Map<string, CartItem>();

    // Add items from first array
    items1.forEach(item => {
      mergedMap.set(item.id, { ...item });
    });

    // Merge items from second array
    items2.forEach(item => {
      const existing = mergedMap.get(item.id);
      if (existing) {
        existing.quantity += item.quantity;
      } else {
        mergedMap.set(item.id, { ...item });
      }
    });

    return Array.from(mergedMap.values());
  }
};

// Named exports for individual functions
export const getCartKey = cartUtils.getCartKey;
export const mergeCartItems = cartUtils.mergeCartItems;

=======
  getSummary(cart: Cart) {
>>>>>>> cursor/create-and-deploy-new-content-be96
    return {
      itemCount: cart.itemCount,
      total: cart.total,
      isEmpty: cart.items.length === 0,
      uniqueItems: cart.items.length,
    };
  },

  // Validate cart
  validateCart: (cart: Cart): { isValid: boolean; errors: string[] } => {
    const errors: string[] = [];

    if (!Array.isArray(cart.items)) {
      errors.push('Items must be an array');
      return { isValid: false, errors };
    }

    cart.items.forEach((item, index) => {
      if (!item.id) {
        errors.push(`Item at index ${index} is missing ID`);
      }
      if (!item.name) {
        errors.push(`Item at index ${index} is missing name`);
      }
      if (typeof item.price !== 'number' || item.price < 0) {
        errors.push(`Item at index ${index} has invalid price`);
      }
      if (typeof item.quantity !== 'number' || item.quantity <= 0) {
=======
        errors.push(`Item at index ${index} has no ID`);
      }
      if (!item.name) {
        errors.push(`Item at index ${index} has no name`);
      }
      if (item.price < 0) {
        errors.push(`Item at index ${index} has negative price`);
      }
      if (item.quantity <= 0) {
>>>>>>> origin/cursor/create-and-deploy-new-content-7d6d
        errors.push(`Item at index ${index} has invalid quantity`);
      }
    });

    return {
      isValid: errors.length === 0,
      errors,
    };
<<<<<<< HEAD
  },

  // Persist cart to localStorage
  persistCart: (cart: Cart): boolean => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('cart', JSON.stringify(cart));
        return true;
      }
      return false;
    } catch (error) {
      console.warn('Failed to persist cart:', error);
      return false;
    }
  },

  // Load cart from localStorage
  loadCart: (): Cart => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const stored = localStorage.getItem('cart');
        if (stored) {
          const parsed = JSON.parse(stored);
          const validation = cartUtils.validateCart(parsed);
          if (validation.isValid) {
            return cartUtils.calculateTotals(parsed);
          }
        }
      }
    } catch (error) {
      console.warn('Failed to load cart:', error);
    }
    return cartUtils.createEmptyCart();
  },

  // Clear persisted cart
  clearPersistedCart: (): boolean => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.removeItem('cart');
        return true;
      }
      return false;
    } catch (error) {
      console.warn('Failed to clear persisted cart:', error);
      return false;
    }
  },
};

>>>>>>> main
export default cartUtils;
=======
  }

  // Format price for display
  formatPrice(price: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  }

  // Get cart size (number of unique items)
  getCartSize(cart: Cart): number {
    return cart.items.length;
  }

  // Check if cart is empty
  isEmpty(cart: Cart): boolean {
    return cart.items.length === 0;
  }
}

// Create and export a singleton instance
const cartUtils = new CartUtils();

export default cartUtils;

// Export the class for testing purposes
export { CartUtils };
>>>>>>> origin/cursor/create-and-deploy-new-content-7d6d
