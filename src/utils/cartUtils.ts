/**
 * Cart utilities for managing shopping cart functionality
 */

export interface CartItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  quantity: number;
  image?: string;
  category?: string;
  metadata?: Record<string, any>;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  tax: number;
  total: number;
  currency: string;
  updatedAt: Date;
}

export interface CartItemInput {
  id: string;
  name: string;
  description?: string;
  price: number;
  quantity?: number;
  image?: string;
  category?: string;
  metadata?: Record<string, any>;
}

export interface CartOptions {
  currency?: string;
  taxRate?: number;
  autoSave?: boolean;
  storageKey?: string;
}

class CartManager {
  private cart: Cart;
  private options: Required<CartOptions>;

  constructor(options: CartOptions = {}) {
    this.options = {
      currency: 'USD',
      taxRate: 0.08,
      autoSave: true,
      storageKey: 'shopping_cart',
      ...options
    };

    this.cart = this.loadCart();
    this.calculateTotals();
  }

  private loadCart(): Cart {
    try {
      const saved = localStorage.getItem(this.options.storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...parsed,
          updatedAt: new Date(parsed.updatedAt)
        };
      }
    } catch (error) {
      console.warn('Failed to load cart from storage:', error);
    }

    return {
      items: [],
      subtotal: 0,
      tax: 0,
      total: 0,
      currency: this.options.currency,
      updatedAt: new Date()
    };
  }

  private saveCart(): void {
    if (!this.options.autoSave) return;

    try {
      localStorage.setItem(this.options.storageKey, JSON.stringify(this.cart));
    } catch (error) {
      console.warn('Failed to save cart to storage:', error);
    }
  }

  private calculateTotals(): void {
    this.cart.subtotal = this.cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    this.cart.tax = this.cart.subtotal * this.options.taxRate;
    this.cart.total = this.cart.subtotal + this.cart.tax;
    this.cart.updatedAt = new Date();
  }

  private findItemIndex(itemId: string): number {
    return this.cart.items.findIndex(item => item.id === itemId);
  }

  // Public methods
  addItem(itemInput: CartItemInput): Cart {
    const existingIndex = this.findItemIndex(itemInput.id);
    
    if (existingIndex >= 0) {
      // Update quantity if item exists
      this.cart.items[existingIndex].quantity += itemInput.quantity || 1;
    } else {
      // Add new item
      const newItem: CartItem = {
        ...itemInput,
        quantity: itemInput.quantity || 1
      };
      this.cart.items.push(newItem);
    }

    this.calculateTotals();
    this.saveCart();
    return this.getCart();
  }

  removeItem(itemId: string): Cart {
    const index = this.findItemIndex(itemId);
    if (index >= 0) {
      this.cart.items.splice(index, 1);
      this.calculateTotals();
      this.saveCart();
    }
    return this.getCart();
  }

  updateItemQuantity(itemId: string, quantity: number): Cart {
    const index = this.findItemIndex(itemId);
    if (index >= 0) {
      if (quantity <= 0) {
        this.removeItem(itemId);
      } else {
        this.cart.items[index].quantity = quantity;
        this.calculateTotals();
        this.saveCart();
      }
    }
    return this.getCart();
  }

  updateItem(itemId: string, updates: Partial<CartItem>): Cart {
    const index = this.findItemIndex(itemId);
    if (index >= 0) {
      this.cart.items[index] = { ...this.cart.items[index], ...updates };
      this.calculateTotals();
      this.saveCart();
    }
    return this.getCart();
  }

  clearCart(): Cart {
    this.cart.items = [];
    this.calculateTotals();
    this.saveCart();
    return this.getCart();
  }

  getCart(): Cart {
    return { ...this.cart };
  }

  getItem(itemId: string): CartItem | undefined {
    return this.cart.items.find(item => item.id === itemId);
  }

  getItemCount(): number {
    return this.cart.items.reduce((sum, item) => sum + item.quantity, 0);
  }

  getTotalItems(): number {
    return this.cart.items.length;
  }

  isEmpty(): boolean {
    return this.cart.items.length === 0;
  }

  // Utility methods
  formatPrice(amount: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: this.cart.currency
    }).format(amount);
  }

  validateCart(): { valid: boolean; errors: string[] } {
    const errors: string[] = [];

    this.cart.items.forEach((item, index) => {
      if (!item.id) {
        errors.push(`Item ${index + 1}: Missing ID`);
      }
      if (!item.name || item.name.trim() === '') {
        errors.push(`Item ${index + 1}: Missing name`);
      }
      if (item.price <= 0) {
        errors.push(`Item ${index + 1}: Invalid price`);
      }
      if (item.quantity <= 0) {
        errors.push(`Item ${index + 1}: Invalid quantity`);
      }
    });

    return {
      valid: errors.length === 0,
      errors
    };
  }

  // Export/Import
  exportCart(): string {
    return JSON.stringify(this.cart, null, 2);
  }

  importCart(cartData: string): boolean {
    try {
      const imported = JSON.parse(cartData);
      this.cart = {
        ...imported,
        updatedAt: new Date(imported.updatedAt || new Date())
      };
      this.calculateTotals();
      this.saveCart();
      return true;
    } catch (error) {
      console.error('Failed to import cart:', error);
      return false;
    }
  }

  // Event handling
  subscribe(callback: (cart: Cart) => void): () => void {
    const handler = () => callback(this.getCart());
    
    // Listen for storage changes from other tabs
    const storageHandler = (e: StorageEvent) => {
      if (e.key === this.options.storageKey && e.newValue) {
        try {
          const newCart = JSON.parse(e.newValue);
          this.cart = {
            ...newCart,
            updatedAt: new Date(newCart.updatedAt)
          };
          handler();
        } catch (error) {
          console.warn('Failed to parse cart from storage event:', error);
        }
      }
    };

    window.addEventListener('storage', storageHandler);
    
    // Return unsubscribe function
    return () => {
      window.removeEventListener('storage', storageHandler);
    };
  }
}

// Create singleton instance
export const cartManager = new CartManager();

// Export convenience functions
export const cartUtils = {
  addItem: (item: CartItemInput) => cartManager.addItem(item),
  removeItem: (itemId: string) => cartManager.removeItem(itemId),
  updateQuantity: (itemId: string, quantity: number) => cartManager.updateItemQuantity(itemId, quantity),
  updateItem: (itemId: string, updates: Partial<CartItem>) => cartManager.updateItem(itemId, updates),
  clear: () => cartManager.clearCart(),
  getCart: () => cartManager.getCart(),
  getItem: (itemId: string) => cartManager.getItem(itemId),
  getItemCount: () => cartManager.getItemCount(),
  getTotalItems: () => cartManager.getTotalItems(),
  isEmpty: () => cartManager.isEmpty(),
  formatPrice: (amount: number) => cartManager.formatPrice(amount),
  validate: () => cartManager.validateCart(),
  export: () => cartManager.exportCart(),
  import: (data: string) => cartManager.importCart(data),
  subscribe: (callback: (cart: Cart) => void) => cartManager.subscribe(callback),
};

export default cartManager;