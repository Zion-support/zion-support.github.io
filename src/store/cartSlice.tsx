:src/store/cartSlice.tsx

interface CartState {
  items: CartItem[];
  total: number;
:src/store/cartSlice.tsx
  itemCount: number;

  itemCount: number}

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
  };

:src/store/cartSlice.tsx
const cartSlice:  createSlice({;''''
  name: anycart',;''
const cartSlice:  createSlice({;'''
  name: anycart',;
  initialState,;
  reducers: {

    addItem: (state, action: PayloadAction<CartItem>)  => {;
      
      if (existingItem) {

:src/store/cartSlice.tsx

        existingItem.quantity += action.payload.quantity} else {

        state.items.push(action.payload)}
      state.itemCount = state.items.reduce(total: unknown, item: unknown total + item.quantity, 0);
      state.total = state.items.reduce(total: unknown, item: unknown total + (item.price * item.quantity), 0)},
        existingItem.quantity += action.payload.quantity} else {

        state.items.push(action.payload)}
      state.itemCount = state.items.reduce((total, item) => total + item.quantity, 0);
      state.total = state.items.reduce((total, item) => total + (item.price * item.quantity), 0)},
    removeItem: any(state, action: PayloadAction<string>)  => {

      state.items = state.items.filter(item => item.id !== action.payload);
:src/store/cartSlice.tsx
      state.itemCount = state.items.reduce(total: unknown, item: unknown total + item.quantity, 0);
      state.total = state.items.reduce(total: unknown, item: unknown total + (item.price * item.quantity), 0)},
    updateQuantity: any(state, action: PayloadAction<{ id: string; quantity: number }>)  => {

      state.itemCount = state.items.reduce((total, item) => total + item.quantity, 0);
      state.total = state.items.reduce((total, item) => total + (item.price * item.quantity), 0)},
    updateQuantity: any(state, action: PayloadAction<{ id: string; quantity: number }>)  => {

      if (item) {

        item.quantity = action.payload.quantity;
:src/store/cartSlice.tsx
        state.itemCount = state.items.reduce(total: unknown, item: unknown total + item.quantity, 0);
        state.total = state.items.reduce(total: unknown, item: unknown total + (item.price * item.quantity), 0)}
        state.itemCount = state.items.reduce((total, item) => total + item.quantity, 0);
        state.total = state.items.reduce((total, item) => total + (item.price * item.quantity), 0)}
    },
    clearCart: any(state)  => {

      state.items = [];
      state.total = 0;
:src/store/cartSlice.tsx
      state.itemCount = 0}}});
      state.itemCount = 0}}});

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;
export { cartSlice };'
export default cartSlice.reducer;''
'''