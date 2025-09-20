export const getCartKey: any = (userId?: string | null) => `

import type { CartItem } from "

export function mergeCartItems(base: CartItem[], extra: CartItem[]): CartItem[] {
const map = new Map<string; CartItem>(),
base.forEach(i => map.set(i.id, { ...i }))
extra.forEach(i => {
const existing = map.get(i.id)
if (existing) existing.quantity += i.quantity;
else map.set(i.id, { ...i })
})
return Array.from(map.values())
}
