import { Check } from 'lucide-react';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  type: 'equipment' | 'service' | 'talent';
  description?: string;
  image?: string;
  category?: string;
  tags?: string[];
}

export interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
  lastUpdated: string;
}

// Calculate total cart value
export const _calculateCartTotal = (items: CartItem[]): number => {
  return items.reduce((total, item) => total + (item.price * item.quantity), 0);
};

// Add item to cart
export const _addToCart = (cart: CartItem[], item: CartItem): CartItem[] => {
  const _existingItem = cart.find(cartItem => cartItem.id === item.id);

  if (existingItem) {
    return cart.map(cartItem =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
        : cartItem
    );
  }

  return [...cart, item];
};

// Remove item from cart
export const _removeFromCart = (cart: CartItem[], itemId: string): CartItem[] => {
  return cart.filter(item => item.id !== itemId);
};

// Update item quantity
export const _updateQuantity = (cart: CartItem[], itemId: string, quantity: number): CartItem[] => {
  if (quantity <= 0) {
    return removeFromCart(cart, itemId);
  }

  return cart.map(item =>
    item.id === itemId ? { ...item, quantity } : item
  );
};

// Clear entire cart
export const _clearCart = (): CartItem[] => {
  return [];
};

// Get cart key for localStorage
export const _getCartKey = (userId: string): string => {
  return `cart_${userId}`;
};

// Merge cart items from different sources
export const _mergeCartItems = (existingItems: CartItem[], newItems: CartItem[]): CartItem[] => {
  const _merged = [...existingItems];

  newItems.forEach(newItem => {
    const _existingIndex = merged.findIndex(item => item.id === newItem.id);
    if (existingIndex >= 0 && merged[existingIndex]) {
      merged[existingIndex].quantity += newItem.quantity;
    } else {
      merged.push(newItem);
    }
  });

  return merged;
};

// Get cart item count
export const _getCartItemCount = (items: CartItem[]): number => {
  return items.reduce((count, item) => count + item.quantity, 0);
};

// Check if cart is empty
export const _isCartEmpty = (items: CartItem[]): boolean => {
  return items.length === 0;
};

// Validate cart item
export const _validateCartItem = (item: CartItem): boolean => {
  return (
    item.id &&
    item.name &&
    typeof item.price === 'number' &&
    item.price >= 0 &&
    typeof item.quantity === 'number' &&
    item.quantity > 0 &&
    ['equipment', 'service', 'talent'].includes(item.type)
  );
};

// Get cart summary
export const _getCartSummary = (items: CartItem[]) => {
  const _total = calculateCartTotal(items);
  const _itemCount = getCartItemCount(items);
  const _categories = [...new Set(items.map(item => item.category).filter(Boolean))];
  const _types = [...new Set(items.map(item => item.type))];

  return {
    total,
    itemCount,
    categories,
    types,
    isEmpty: isCartEmpty(items)
  };
};

// Apply discount to cart
export const _applyDiscount = (items: CartItem[], discountPercent: number): number => {
  const _total = calculateCartTotal(items);
  const _discount = total * (discountPercent / 100);
  return Math.max(0, total - discount);
};

// Get cart items by type
export const _getCartItemsByType = (items: CartItem[], type: CartItem['type']): CartItem[] => {
  return items.filter(item => item.type === type);
};

// Get cart items by category
export const _getCartItemsByCategory = (items: CartItem[], category: string): CartItem[] => {
  return items.filter(item => item.category === category);
};

// Sort cart items
export const _sortCartItems = (items: CartItem[], sortBy: 'name' | 'price' | 'quantity' | 'type' = 'name'): CartItem[] => {
  return [...items].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price;
      case 'quantity':
        return a.quantity - b.quantity;
      case 'type':
        return a.type.localeCompare(b.type);
      case 'name':
      default:
        return a.name.localeCompare(b.name);
    }
  });
};

// Filter cart items
export const _filterCartItems = (
  items: CartItem[],
  filters: {
    minPrice?: number;
    maxPrice?: number;
    types?: CartItem['type'][];
    categories?: string[];
    searchTerm?: string;
  }
): CartItem[] => {
  return items.filter(item => {
    if (filters.minPrice !== undefined && item.price < filters.minPrice) return false;
    if (filters.maxPrice !== undefined && item.price > filters.maxPrice) return false;
    if (filters.types && !filters.types.includes(item.type)) return false;
    if (filters.categories && item.category && !filters.categories.includes(item.category)) return false;
    if (filters.searchTerm && !item.name.toLowerCase().includes(filters.searchTerm.toLowerCase())) return false;
    return true;
  });
};