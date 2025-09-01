export interface CartItem {}
  id: string;
  name: string;
  price: number;
  quantity: number;
  type: 'equipment' | 'service' | 'talent'}

export const calculateCartTotal: any = (items: CartItem[]): number => {}
  return items.reduce((total, item) => total + item.price * item.quantity, 0)};

export;
  if (existingItem) {}
    return cart.map(cartItem =>
      cartItem.id === item.id;
        ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
        : cartItem;
    )}

  return [...cart, item]};


export;
};

export;
};

export;
  }

  return cart.map(item => (item.id === itemId ? { ...item, quantity } : item))};

export;
};

export;
};

export;
  newItems.forEach(newItem => {}
    if (existingIndex >= 0 && merged[existingIndex]) {}
      merged[existingIndex].quantity += newItem.quantity} else {}
      merged.push(newItem)}
  });

  return merged};
'`