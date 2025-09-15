<<<<<<< HEAD
// Cart utilities for handling shopping cart operations

=======
// Cart utilities for managing shopping cart functionality
>>>>>>> main
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
  createEmptyCart(): Cart {
    return {
      items: [],
      total: 0,
      itemCount: 0,
    };
  },

  // Add item to cart
  addItem(cart: Cart, item: Omit<CartItem, 'quantity'>): Cart {
>>>>>>> main
    const existingItem = cart.items.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
      // Update quantity if item already exists
      return cartUtils.updateItemQuantity(cart, item.id, existingItem.quantity + 1);
    } else {
      // Add new item
      const newItem: CartItem = { ...item, quantity: 1 };
      const newItems = [...cart.items, newItem];
      return cartUtils.calculateTotals({ ...cart, items: newItems });
    }
  },

  // Remove item from cart
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
    if (quantity <= 0) {
      return cartUtils.removeItem(cart, itemId);
    }

    const newItems = cart.items.map(item =>
      item.id === itemId ? { ...item, quantity } : item
    );
    
    return cartUtils.calculateTotals({ ...cart, items: newItems });
  },

  // Calculate totals
<<<<<<< HEAD
  calculateTotals: (cart: Cart): Cart => {
=======
  calculateTotals(cart: Cart): Cart {
>>>>>>> main
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

  // Get item by ID
  getItem(cart: Cart, itemId: string): CartItem | undefined {
    return cart.items.find(item => item.id === itemId);
  },

  // Check if item is in cart
  hasItem(cart: Cart, itemId: string): boolean {
>>>>>>> main
    return cart.items.some(item => item.id === itemId);
  },

  // Get cart summary
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
    return {
      itemCount: cart.itemCount,
      total: cart.total,
      isEmpty: cart.items.length === 0,
      uniqueItems: cart.items.length,
    };
  },

  // Validate cart item
  validateItem(item: any): item is CartItem {
    return (
      typeof item === 'object' &&
      typeof item.id === 'string' &&
      typeof item.name === 'string' &&
      typeof item.price === 'number' &&
      typeof item.quantity === 'number' &&
      item.price >= 0 &&
      item.quantity > 0
    );
  },

  // Calculate shipping (example implementation)
  calculateShipping(cart: Cart, shippingRate: number = 0): number {
    if (cart.total >= 100) return 0; // Free shipping over $100
    return shippingRate;
  },

  // Calculate tax (example implementation)
  calculateTax(cart: Cart, taxRate: number = 0.08): number {
    return Math.round(cart.total * taxRate * 100) / 100;
  },

  // Get total with shipping and tax
  getGrandTotal(cart: Cart, shippingRate: number = 0, taxRate: number = 0.08): number {
    const shipping = cartUtils.calculateShipping(cart, shippingRate);
    const tax = cartUtils.calculateTax(cart, taxRate);
    return Math.round((cart.total + shipping + tax) * 100) / 100;
  },
};

>>>>>>> main
export default cartUtils;