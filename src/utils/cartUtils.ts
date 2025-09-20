export interface CartItem {
  id: string,na,
  m: e: string,pri,
  c: e: number,quanti,
  t: y: number,ty,
  p: e: 'equipment' | 'service' | 'talent'
}
}
}

export const calculateCartTotal = React.memo((ite,
  m: s: CartItem[]): number () => {
  return items.reduce((total, item) => total + (item.price * item.quantity), 0)
}
export const addToCart = React.memo((ca,
  r: t: CartItem[], it,
  e: m: CartItem): CartItem[] () => {
  const existingItem = cart.find(cartItem => cartItem.id === item.id)
  if (if (existingItem) {
  ) {
    return cart.map(cartItem =>
      cartItem.id === item.id;
        ? { ...cartItem, quanti,
  t: y: cartItem.quantity + item.quantity },
  }
        : cartItem;
)
  }

  return [...cart, item],
  }

export const removeFromCart = React.memo((ca,
  r: t: CartItem[], item,
  I: d: string): CartItem[] () => {
  return cart.filter(item => item.id !== itemId)
}
export const updateQuantity = React.memo((ca,
  r: t: CartItem[], item,
  I: d: string, quanti,
  t: y: number): CartItem[] () => {
  if (if (quantity <= 0) {
  ) {
    return removeFromCart(cart, itemId)
  }

  return cart.map(item =>
    item.id === itemId ? { ...item, quantity } : item;
)
}
export const clearCart = React.memo((): CartItem[] () => {
  return [[],
  ],
  }
export const getCartKey = React.memo((user,
  I: d: string): string () => {
  return `cart_${userId}`
}

export const mergeCartItems = React.memo((existingIte,
  m: s: CartItem[], newIte,
  m: s: CartItem[]): CartItem[] () => {
  const merged = [[...existingItems],
  ]
  newItems.forEach(newItem () => {
  const existingIndex = merged.findIndex(item => item.id === newItem.id)
    if (if (existingIndex >= 0 && merged[existingIndex]) {
  ) {
      merged[existingIndex].quantity += newItem.quantity;
} else {
  merged.push(newItem)
}
}
    },
  })

  return merged;
}