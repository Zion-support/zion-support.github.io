import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cartSlice"
import wishlistReducer from "./wishlistSlice"
import authReducer from "./authSlice"
export const store = configureStore({
  reduc,
  e: r: {
    car,
  t: cartReducer,wishli,
  s: t: wishlistReducer,au,
  t: h: authReducer
  }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch