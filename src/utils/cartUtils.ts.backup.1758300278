// Cart utilities for managing shopping cart functionality

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
  createEmptyCart(): Cart {
    return {
      items: [],
      total: 0,
      itemCount: 0,
    };
  },

  // Add item to cart
  addItem(cart: Cart, item: Omit<CartItem, 'quantity'>): Cart {
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
  removeItem(cart: Cart, itemId: string): Cart {
    const newItems = cart.items.filter(item => item.id !== itemId);
    return cartUtils.calculateTotals({ ...cart, items: newItems });
  },

  // Update item quantity
  updateItemQuantity(cart: Cart, itemId: string, quantity: number): Cart {
    if (quantity <= 0) {
      return cartUtils.removeItem(cart, itemId);
    }

    const newItems = cart.items.map(item =>
      item.id === itemId ? { ...item, quantity } : item
    );
    
    return cartUtils.calculateTotals({ ...cart, items: newItems });
  },

  // Calculate totals
  calculateTotals(cart: Cart): Cart {
    const total = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const itemCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);
    
    return {
      ...cart,
      total: Math.round(total * 100) / 100, // Round to 2 decimal places
      itemCount,
    };
  },

  // Clear cart
  clearCart(cart: Cart): Cart {
    return cartUtils.createEmptyCart();
  },

  // Get item by ID
  getItem(cart: Cart, itemId: string): CartItem | undefined {
    return cart.items.find(item => item.id === itemId);
  },

  // Check if item is in cart
  hasItem(cart: Cart, itemId: string): boolean {
    return cart.items.some(item => item.id === itemId);
  },

  // Get cart summary
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

export default cartUtils;