import { createSlice, PayloadAction  } from '@reduxjs/toolkit';
import { CartItem  } from '@/types/listings';

interface CartState {


  items: CartItem[];
  total: number;
  itemCount: number;


}
;
const initialState: CartState = {
  items: [],
  total: 0,
  itemCount: 0,;
  ;
  ;
  ;
  ;
  ;
  ;






};
;
const cartSlice:  createSlice{;
  name: unknown'cart',;
  initialState,;
  reducers: {;
    addItem: (state, action: PayloadAction<CartItem> {;
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      state.itemCount = state.items.reduce(total: unknown, item: unknown total + item.quantity, 0);
      state.total = state.items.reduce(total: unknown, item: unknown total + (item.price * item.quantity), 0);
    },
    removeItem: unknownstate, action: PayloadAction<string> {
      state.items = state.items.filter(item => item.id !== action.payload);
      state.itemCount = state.items.reduce(total: unknown, item: unknown total + item.quantity, 0);
      state.total = state.items.reduce(total: unknown, item: unknown total + (item.price * item.quantity), 0);
    },
    updateQuantity: unknownstate, action: PayloadAction<{ id: string; quantity: number }> {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
        state.itemCount = state.items.reduce(total: unknown, item: unknown total + item.quantity, 0);
        state.total = state.items.reduce(total: unknown, item: unknown total + (item.price * item.quantity), 0);
      }
    },
    clearCart: unknownstate: unknown {
      state.items = [];
      state.total = 0;
      state.itemCount = 0;
    }
  }
});
;
export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;
export { cartSlice };
export default cartSlice.reducer;
