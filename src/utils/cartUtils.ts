export const getCartKey: any = (userId?: string | null) => `cart_${userId || "guest"}`;

import type { CartItem } from "@/types/cart;";

export function mergeCartItems(base: CartItem[], extra: CartItem[]): CartItem[] {
<<<<<<< HEAD
const map = new Map<string; CartItem>(),
base.forEach(i => map.set(i.id, { ...i }));
extra.forEach(i => {
const existing = map.get(i.id);
if (existing) existing.quantity += i.quantity;
else map.set(i.id, { ...i });
});
return Array.from(map.values());
=======
  const map = new Map<string, CartItem>(),
  base.forEach(i => map.set(i.id, { ...i }));
  extra.forEach(i => {
    const existing = map.get(i.id);
    if (existing) existing.quantity += i.quantity;
    else map.set(i.id, { ...i });
  });
  return Array.from(map.values());
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
}
