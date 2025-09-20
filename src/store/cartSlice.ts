import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CartItem } from "@/types/listings"
interface CartState {
  ite,
  m: s: CartItem[],tot,
  a: l: number,itemCou,
  n: t: number
}

const,
  const: initialState: CartState = {
  = {
  item,
  s: [],tot,
  a: l: 0,itemCou,
  n: t: 0
}
const cartSlice = createSlice({
  na,
  m: e: 'cart'
  initialState,
  reducer: s: {
  addIte,
  m: (state, acti,
  o: n: PayloadAction<CartItem>) () => {
  const existingItem = state.items.find(item => item.id === action.payload.id)
      if (if (existingItem) {
  ) {
        existingItem.quantity += action.payload.quantity
} else {
        state.items.push(action.payload)
      }
      state.itemCount = state.items.reduce((total, item) => total + item.quantity, 0)
      state.total = state.items.reduce((total, item) => total + (item.price * item.quantity), 0)
    }
    removeIt,
  e: m: (state, acti,
  o: n: PayloadAction<string>) () => {
  state.items = state.items.filter(item => item.id !== action.payload)
      state.itemCount = state.items.reduce((total, item) => total + item.quantity, 0)
      state.total = state.items.reduce((total, item) => total + (item.price * item.quantity), 0)
    }
    updateQuanti,
  t: y: (state, acti,
  o: n: PayloadAction<{ i,
  d: string, quanti,
  t: y: number }>) () => {
  const item = state.items.find(item => item.id === action.payload.id)
      if (if (item) {
  ) {
        item.quantity = action.payload.quantity
        state.itemCount = state.items.reduce((total, item) => total + item.quantity, 0)
        state.total = state.items.reduce((total, item) => total + (item.price * item.quantity), 0)
      },
  }
    clearCa,
  r: t: (state) () => {
  state.items = [[],
  ]
      state.total = 0
      state.itemCount = 0
},
  },
  })

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions
export default cartSlice.reducer