// Cart utility functions for managing shopping cart state

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
}

export const cartUtils = {
  // Create a new empty cart
  createEmptyCart: (): Cart => ({
    items: [],
    total: 0,
    itemCount: 0,
  }),

  // Add item to cart
  addItem: (cart: Cart, newItem: Omit<CartItem, 'quantity'>): Cart => {
    const existingItemIndex = cart.items.findIndex(item => item.id === newItem.id);
    
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
  removeItem: (cart: Cart, itemId: string): Cart => {
    const updatedItems = cart.items.filter(item => item.id !== itemId);
    return cartUtils.calculateTotals({ ...cart, items: updatedItems });
  },

  // Update item quantity
  updateQuantity: (cart: Cart, itemId: string, quantity: number): Cart => {
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
  calculateTotals: (cart: Cart): Cart => {
    const total = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const itemCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);
    
    return {
      ...cart,
      total: Math.round(total * 100) / 100, // Round to 2 decimal places
      itemCount,
    };
  },

  // Get item by ID
  getItem: (cart: Cart, itemId: string): CartItem | undefined => {
    return cart.items.find(item => item.id === itemId);
  },

  // Check if item exists in cart
  hasItem: (cart: Cart, itemId: string): boolean => {
    return cart.items.some(item => item.id === itemId);
  },

  // Get cart summary
  getSummary: (cart: Cart) => {
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
        errors.push(`Item at index ${index} has invalid quantity`);
      }
    });

    return {
      isValid: errors.length === 0,
      errors,
    };
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

export default cartUtils;