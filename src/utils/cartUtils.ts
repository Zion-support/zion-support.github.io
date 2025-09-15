<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> cursor/create-and-deploy-new-content-d3a3
=======
>>>>>>> cursor/create-and-deploy-new-content-8735
=======
>>>>>>> cursor/create-and-deploy-new-content-f977
>>>>>>> 75eb4d630573de2c91ceda573e859cd83b99c68c
=======
// Cart utilities for handling shopping cart operations

>>>>>>> cursor/create-and-deploy-new-content-45eb
export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  description?: string;
  category?: string;
  sku?: string;
}

export interface Cart {
  items: CartItem[];
  total: number;
  itemCount: number;
  lastUpdated: Date;
}

<<<<<<< HEAD
export const cartUtils = {
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
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
>>>>>>> cursor/create-and-deploy-new-content-45eb

    return {
      subtotal,
      tax,
      shipping,
      total,
      itemCount,
    };
  }

  // Add item to cart
<<<<<<< HEAD
  addItem(cart: Cart, item: Omit<CartItem, 'quantity'>): Cart {
>>>>>>> main
=======
>>>>>>> cursor/create-and-deploy-new-content-d3a3
=======
>>>>>>> cursor/create-and-deploy-new-content-8735
=======
>>>>>>> cursor/create-and-deploy-new-content-f977
>>>>>>> 75eb4d630573de2c91ceda573e859cd83b99c68c
    const existingItem = cart.items.find(cartItem => cartItem.id === item.id);
=======
  addItem(cart: Cart, item: Omit<CartItem, 'quantity'>, quantity: number = 1): Cart {
    const existingItemIndex = cart.items.findIndex(cartItem => cartItem.id === item.id);
>>>>>>> cursor/create-and-deploy-new-content-45eb
    
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
<<<<<<< HEAD
      const newItem: CartItem = { ...item, quantity: 1 };
      const newItems = [...cart.items, newItem];
      return cartUtils.calculateTotals({ ...cart, items: newItems });
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
      newItems = [...cart.items, { ...item, quantity }];
>>>>>>> cursor/create-and-deploy-new-content-45eb
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
<<<<<<< HEAD
>>>>>>> main
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-8735
=======
>>>>>>> cursor/create-and-deploy-new-content-f977
>>>>>>> 75eb4d630573de2c91ceda573e859cd83b99c68c
    }
  },

  // Remove item from cart
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-d3a3
=======
>>>>>>> cursor/create-and-deploy-new-content-8735
=======
>>>>>>> cursor/create-and-deploy-new-content-f977
>>>>>>> 75eb4d630573de2c91ceda573e859cd83b99c68c
=======
>>>>>>> cursor/create-and-deploy-new-content-45eb
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> cursor/create-and-deploy-new-content-8735
=======
>>>>>>> cursor/create-and-deploy-new-content-f977
>>>>>>> 75eb4d630573de2c91ceda573e859cd83b99c68c
    if (quantity <= 0) {
      return cartUtils.removeItem(cart, itemId);
=======
  updateQuantity(cart: Cart, itemId: string, quantity: number): Cart {
    if (quantity <= 0) {
      return this.removeItem(cart, itemId);
>>>>>>> cursor/create-and-deploy-new-content-45eb
    }

    const newItems = cart.items.map(item =>
      item.id === itemId ? { ...item, quantity } : item
    );
    
<<<<<<< HEAD
    return cartUtils.calculateTotals({ ...cart, items: newItems });
  },

  // Calculate totals
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-d3a3
=======
>>>>>>> cursor/create-and-deploy-new-content-8735
=======
>>>>>>> cursor/create-and-deploy-new-content-f977
>>>>>>> 75eb4d630573de2c91ceda573e859cd83b99c68c
    const total = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const itemCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);
    
    return {
      ...cart,
      total: Math.round(total * 100) / 100, // Round to 2 decimal places
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
    const summary = this.calculateTotals(newItems);
    
    return {
      items: newItems,
      total: summary.total,
      itemCount: summary.itemCount,
      lastUpdated: new Date(),
>>>>>>> cursor/create-and-deploy-new-content-45eb
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
<<<<<<< HEAD
  },

  // Check if item is in cart
  hasItem(cart: Cart, itemId: string): boolean {
>>>>>>> main
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-f977
>>>>>>> 75eb4d630573de2c91ceda573e859cd83b99c68c
    };
  },

  // Clear cart
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-d3a3
=======
    };
  },

  // Clear cart
>>>>>>> cursor/create-and-deploy-new-content-8735
=======
>>>>>>> cursor/create-and-deploy-new-content-f977
>>>>>>> 75eb4d630573de2c91ceda573e859cd83b99c68c
    return cart.items.some(item => item.id === itemId);
  },

  // Get cart summary
<<<<<<< HEAD
export default cartUtils;
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> cursor/create-and-deploy-new-content-45eb
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
    }

    cart.items.forEach((item, index) => {
      if (!item.id) {
        errors.push(`Item at index ${index} has no ID`);
      }
      if (!item.name) {
        errors.push(`Item at index ${index} has no name`);
      }
      if (item.price < 0) {
        errors.push(`Item at index ${index} has negative price`);
      }
      if (item.quantity <= 0) {
        errors.push(`Item at index ${index} has invalid quantity`);
      }
    });

    return {
      isValid: errors.length === 0,
      errors,
    };
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
<<<<<<< HEAD
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
>>>>>>> cursor/create-and-deploy-new-content-d3a3
=======
export default cartUtils;
>>>>>>> cursor/create-and-deploy-new-content-8735
=======
export default cartUtils;
>>>>>>> cursor/create-and-deploy-new-content-f977
>>>>>>> 75eb4d630573de2c91ceda573e859cd83b99c68c
=======

// Export the class for testing purposes
export { CartUtils };
>>>>>>> cursor/create-and-deploy-new-content-45eb
