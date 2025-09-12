export const useCart = () => ({ items: [], dispatch: () => {} });
export const CartProvider = ({ children }: any) => children;
export default CartProvider;