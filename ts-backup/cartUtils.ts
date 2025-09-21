export const getCartKey = (userId?: string | null) => `cart_${userId || "guest"}`;

interface CartItem {
  id: string,
  name: string,
  price: number,
  quantity: number,
  image?: string;
}

export function mergeCartItems(base: CartItem[], extra: CartItem[]): CartItem[] {
  const map = new Map<string, CartItem>();
  
  base.forEach(item => map.set(item.id, { ...item }));
  
  extra.forEach(item => {
    const existing = map.get(item.id);
    if (existing) {
      existing.quantity += item.quantity;
    } else {
      map.set(item.id, { ...item });
    },
  });
  
  return Array.from(map.values());
}

export function calculateCartTotal(items: CartItem[]): number {
  return items.reduce((total, item) => total + (item.price * item.quantity), 0);
}

export function getCartItemCount(items: CartItem[]): number {
  return items.reduce((count, item) => count + item.quantity, 0);
}