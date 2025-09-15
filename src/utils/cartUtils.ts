<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/revolutionary-content-2026
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/feature/revolutionary-2027-content
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-b15f
// Cart utility functions for managing shopping cart state
=======
<<<<<<< HEAD
<<<<<<< HEAD
// Cart utilities for handling shopping cart operations

=======
// Cart utilities for managing shopping cart functionality
>>>>>>> main
=======
/**
 * Cart utility functions for managing shopping cart operations
 */
>>>>>>> cursor/create-and-deploy-new-content-cc9d

>>>>>>> 2ad069e84825dabaf46d071e81e10e505f57815a
=======
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-afc8
=======
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-d3a3
=======
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-8735
=======
>>>>>>> cursor/create-and-deploy-new-content-fb46
>>>>>>> cursor/create-and-deploy-new-content-b15f
>>>>>>> origin/feature/revolutionary-2027-content
=======
>>>>>>> cursor/create-and-deploy-new-content-f4f2
>>>>>>> origin/revolutionary-content-2026
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

<<<<<<< HEAD
export const cartUtils = {
<<<<<<< HEAD
  // Create a new empty cart
  createEmptyCart: (): Cart => ({
=======
<<<<<<< HEAD
export const cartUtils = {
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-afc8
=======
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-d3a3
=======
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-8735
=======
>>>>>>> cursor/create-and-deploy-new-content-fb46
>>>>>>> cursor/create-and-deploy-new-content-b15f
>>>>>>> origin/feature/revolutionary-2027-content
=======
>>>>>>> cursor/create-and-deploy-new-content-f4f2
>>>>>>> origin/revolutionary-content-2026
    const existingItem = cart.items.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
      // Update quantity if item already exists
      return cartUtils.updateItemQuantity(cart, item.id, existingItem.quantity + 1);
    } else {
      // Add new item
      const newItem: CartItem = { ...item, quantity: 1 };
      const newItems = [...cart.items, newItem];
      return cartUtils.calculateTotals({ ...cart, items: newItems });
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/revolutionary-content-2026
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-b15f
>>>>>>> origin/feature/revolutionary-2027-content
=======
export interface Discount {
  code: string;
  type: 'percentage' | 'fixed';
  value: number;
  minimumAmount?: number;
  expiresAt?: Date;
}

const TAX_RATE = 0.08; // 8% tax rate
const FREE_SHIPPING_THRESHOLD = 100;
const SHIPPING_COST = 9.99;

export function createEmptyCart(): Cart {
  return {
>>>>>>> cursor/create-and-deploy-new-content-cc9d
    items: [],
    total: 0,
    itemCount: 0,
  }),

<<<<<<< HEAD
  // Add item to cart
  addItem: (cart: Cart, newItem: Omit<CartItem, 'quantity'>): Cart => {
    const existingItemIndex = cart.items.findIndex(item => item.id === newItem.id);
=======
export function addItemToCart(cart: Cart, item: Omit<CartItem, 'quantity'>, quantity: number = 1): Cart {
  const existingItemIndex = cart.items.findIndex(cartItem => cartItem.id === item.id);

  let newItems: CartItem[];
  if (existingItemIndex >= 0) {
    // Update existing item quantity
    newItems = cart.items.map((cartItem, index) => {
      if (index === existingItemIndex) {
        return {
          ...cartItem,
          quantity: cartItem.quantity + quantity,
        };
      }
      return cartItem;
    });
  } else {
    // Add new item
    newItems = [...cart.items, { ...item, quantity }];
  }

  return calculateCartTotals({ ...cart, items: newItems });
}

export function removeItemFromCart(cart: Cart, itemId: string): Cart {
  const newItems = cart.items.filter(item => item.id !== itemId);
  return calculateCartTotals({ ...cart, items: newItems });
}

export function updateItemQuantity(cart: Cart, itemId: string, quantity: number): Cart {
  if (quantity <= 0) {
    return removeItemFromCart(cart, itemId);
  }

  const newItems = cart.items.map(item => {
    if (item.id === itemId) {
      return { ...item, quantity };
>>>>>>> 2ad069e84825dabaf46d071e81e10e505f57815a
    }
    return item;
  });

<<<<<<< HEAD
  // Remove item from cart
<<<<<<< HEAD
  removeItem: (cart: Cart, itemId: string): Cart => {
=======
  removeItem(cart: Cart, itemId: string): Cart {
>>>>>>> main
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-8735
=======
>>>>>>> cursor/create-and-deploy-new-content-b15f
>>>>>>> origin/feature/revolutionary-2027-content
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-f4f2
>>>>>>> origin/revolutionary-content-2026
    }
  },

  // Remove item from cart
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-afc8
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-d3a3
=======
>>>>>>> cursor/create-and-deploy-new-content-8735
=======
>>>>>>> cursor/create-and-deploy-new-content-fb46
>>>>>>> cursor/create-and-deploy-new-content-b15f
>>>>>>> origin/feature/revolutionary-2027-content
=======
>>>>>>> cursor/create-and-deploy-new-content-d3a3
=======
>>>>>>> cursor/create-and-deploy-new-content-f4f2
>>>>>>> origin/revolutionary-content-2026
    const newItems = cart.items.filter(item => item.id !== itemId);
    return cartUtils.calculateTotals({ ...cart, items: newItems });
  },

  // Update item quantity
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/revolutionary-content-2026
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/feature/revolutionary-2027-content
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-b15f
  updateItemQuantity: (cart: Cart, itemId: string, quantity: number): Cart => {
=======
  updateItemQuantity(cart: Cart, itemId: string, quantity: number): Cart {
>>>>>>> main
    if (quantity <= 0) {
      return cartUtils.removeItem(cart, itemId);
    }
=======
  return calculateCartTotals({ ...cart, items: newItems });
}

export function clearCart(): Cart {
  return createEmptyCart();
}
>>>>>>> 2ad069e84825dabaf46d071e81e10e505f57815a

export function calculateCartTotals(cart: Cart): Cart {
  const subtotal = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);
  
  // Calculate shipping
  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  
  // Calculate tax (on subtotal + shipping - discount)
  const taxableAmount = subtotal + shipping - cart.discount;
  const tax = taxableAmount * TAX_RATE;
  
  // Calculate total
  const total = subtotal + shipping + tax - cart.discount;

<<<<<<< HEAD
  // Calculate totals
<<<<<<< HEAD
  calculateTotals: (cart: Cart): Cart => {
=======
  calculateTotals(cart: Cart): Cart {
>>>>>>> main
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-8735
=======
>>>>>>> cursor/create-and-deploy-new-content-b15f
>>>>>>> origin/feature/revolutionary-2027-content
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-f4f2
>>>>>>> origin/revolutionary-content-2026
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
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-afc8
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-d3a3
=======
>>>>>>> cursor/create-and-deploy-new-content-8735
=======
>>>>>>> cursor/create-and-deploy-new-content-fb46
>>>>>>> cursor/create-and-deploy-new-content-b15f
>>>>>>> origin/feature/revolutionary-2027-content
=======
>>>>>>> cursor/create-and-deploy-new-content-d3a3
=======
>>>>>>> cursor/create-and-deploy-new-content-f4f2
>>>>>>> origin/revolutionary-content-2026
    const total = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const itemCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);
    
    return {
      ...cart,
      total: Math.round(total * 100) / 100, // Round to 2 decimal places
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/revolutionary-content-2026
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/feature/revolutionary-2027-content
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-b15f
      itemCount
=======
      itemCount,
>>>>>>> main
=======
  return {
    ...cart,
    subtotal: Math.round(subtotal * 100) / 100,
    tax: Math.round(tax * 100) / 100,
    shipping: Math.round(shipping * 100) / 100,
    total: Math.round(total * 100) / 100,
    itemCount,
  };
}

export function applyDiscount(cart: Cart, discount: Discount): { cart: Cart; isValid: boolean; message: string } {
  const now = new Date();
  
  // Check if discount is expired
  if (discount.expiresAt && discount.expiresAt < now) {
    return {
      cart,
      isValid: false,
      message: 'Discount code has expired',
>>>>>>> 2ad069e84825dabaf46d071e81e10e505f57815a
    };
  }

<<<<<<< HEAD
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
=======
    };
  },

  // Clear cart
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-afc8
=======
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-d3a3
=======
    };
  },

  // Clear cart
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-8735
=======
>>>>>>> cursor/create-and-deploy-new-content-fb46
>>>>>>> cursor/create-and-deploy-new-content-b15f
>>>>>>> origin/feature/revolutionary-2027-content
=======
>>>>>>> cursor/create-and-deploy-new-content-f4f2
>>>>>>> origin/revolutionary-content-2026
    return cart.items.some(item => item.id === itemId);
  },

  // Get cart summary
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/revolutionary-content-2026
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/feature/revolutionary-2027-content
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-b15f
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
=======
  // Check minimum amount
  if (discount.minimumAmount && cart.subtotal < discount.minimumAmount) {
>>>>>>> 2ad069e84825dabaf46d071e81e10e505f57815a
    return {
      cart,
      isValid: false,
      message: `Minimum order amount of $${discount.minimumAmount} required`,
    };
  }

  // Calculate discount amount
  let discountAmount = 0;
  if (discount.type === 'percentage') {
    discountAmount = cart.subtotal * (discount.value / 100);
  } else {
    discountAmount = discount.value;
  }

  // Don't allow discount to exceed subtotal
  discountAmount = Math.min(discountAmount, cart.subtotal);

  const newCart = calculateCartTotals({
    ...cart,
    discount: Math.round(discountAmount * 100) / 100,
  });

  return {
    cart: newCart,
    isValid: true,
    message: 'Discount applied successfully',
  };
}

<<<<<<< HEAD
>>>>>>> main
export default cartUtils;
=======
export function removeDiscount(cart: Cart): Cart {
  return calculateCartTotals({
    ...cart,
    discount: 0,
  });
}

export function getCartSummary(cart: Cart): string {
  if (cart.itemCount === 0) {
    return 'Your cart is empty';
  }

  const itemText = cart.itemCount === 1 ? 'item' : 'items';
  return `${cart.itemCount} ${itemText} - $${cart.total.toFixed(2)}`;
}

export function getCartItemById(cart: Cart, itemId: string): CartItem | undefined {
  return cart.items.find(item => item.id === itemId);
}

export function isItemInCart(cart: Cart, itemId: string): boolean {
  return cart.items.some(item => item.id === itemId);
}

export function getCartItemsByCategory(cart: Cart, category: string): CartItem[] {
  return cart.items.filter(item => item.category === category);
}

export function getCartTotalByCategory(cart: Cart, category: string): number {
  return getCartItemsByCategory(cart, category).reduce(
    (sum, item) => sum + (item.price * item.quantity),
    0
  );
}

export function validateCartItem(item: Partial<CartItem>): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!item.id) {
    errors.push('Item ID is required');
  }

  if (!item.name) {
    errors.push('Item name is required');
  }

  if (!item.price || item.price <= 0) {
    errors.push('Valid price is required');
  }

  if (!item.quantity || item.quantity <= 0) {
    errors.push('Valid quantity is required');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

export function exportCart(cart: Cart): string {
  return JSON.stringify(cart, null, 2);
}

export function importCart(cartData: string): { cart: Cart; isValid: boolean; errors: string[] } {
  try {
    const parsed = JSON.parse(cartData);
    const cart = calculateCartTotals(parsed);
>>>>>>> cursor/create-and-deploy-new-content-cc9d
    
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

<<<<<<< HEAD
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
=======
export default {
  createEmptyCart,
  addItemToCart,
  removeItemFromCart,
  updateItemQuantity,
  clearCart,
  calculateCartTotals,
  applyDiscount,
  removeDiscount,
  getCartSummary,
  getCartItemById,
  isItemInCart,
  getCartItemsByCategory,
  getCartTotalByCategory,
  validateCartItem,
  exportCart,
  importCart,
};
>>>>>>> 2ad069e84825dabaf46d071e81e10e505f57815a
>>>>>>> cursor/create-and-deploy-new-content-cc9d
=======
export default cartUtils;
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-afc8
=======
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-d3a3
=======
export default cartUtils;
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-8735
=======
>>>>>>> cursor/create-and-deploy-new-content-fb46
>>>>>>> cursor/create-and-deploy-new-content-b15f
>>>>>>> origin/feature/revolutionary-2027-content
=======
>>>>>>> cursor/create-and-deploy-new-content-f4f2
>>>>>>> origin/revolutionary-content-2026
