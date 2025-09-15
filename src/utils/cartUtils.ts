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
=======
>>>>>>> cursor/create-and-deploy-new-content-d3a3
=======
>>>>>>> cursor/create-and-deploy-new-content-8735
=======
>>>>>>> cursor/create-and-deploy-new-content-f977
>>>>>>> 75eb4d630573de2c91ceda573e859cd83b99c68c
    const existingItem = cart.items.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
      // Update quantity if item already exists
      return cartUtils.updateItemQuantity(cart, item.id, existingItem.quantity + 1);
    } else {
      // Add new item
      const newItem: CartItem = { ...item, quantity: 1 };
      const newItems = [...cart.items, newItem];
      return cartUtils.calculateTotals({ ...cart, items: newItems });
    items: [],
    total: 0,
    itemCount: 0,
  }),

    }
    return item;
  });

=======
=======
>>>>>>> cursor/create-and-deploy-new-content-8735
=======
>>>>>>> cursor/create-and-deploy-new-content-f977
>>>>>>> 75eb4d630573de2c91ceda573e859cd83b99c68c
    }
  },

  // Remove item from cart
=======
>>>>>>> cursor/create-and-deploy-new-content-8735
=======
>>>>>>> cursor/create-and-deploy-new-content-f977
>>>>>>> 75eb4d630573de2c91ceda573e859cd83b99c68c
    const newItems = cart.items.filter(item => item.id !== itemId);
    return cartUtils.calculateTotals({ ...cart, items: newItems });
  },

  // Update item quantity
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

=======
=======
>>>>>>> cursor/create-and-deploy-new-content-8735
=======
>>>>>>> cursor/create-and-deploy-new-content-f977
>>>>>>> 75eb4d630573de2c91ceda573e859cd83b99c68c
    if (quantity <= 0) {
      return cartUtils.removeItem(cart, itemId);
    }

    const newItems = cart.items.map(item =>
      item.id === itemId ? { ...item, quantity } : item
    );
    
    return cartUtils.calculateTotals({ ...cart, items: newItems });
  },

  // Calculate totals
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

=======
=======
>>>>>>> cursor/create-and-deploy-new-content-f977
>>>>>>> 75eb4d630573de2c91ceda573e859cd83b99c68c
    };
  },

  // Clear cart
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
