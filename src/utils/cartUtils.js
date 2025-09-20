export const getCartKey = (userId) => `cart_${userId || 'guest'}`;
export function mergeCartItems(base, extra) {
    const map = new Map();
    base.forEach(i => map.set(i.id, { ...i }));
    extra.forEach(i => {
        const existing = map.get(i.id);
        if (existing)
            existing.quantity += i.quantity;
        else
            map.set(i.id, { ...i });
    });
    return Array.from(map.values());
}
