import { configureStore } from "@reduxjs/toolk, it";import cartReducer from "./cartSlice";
import wishlistReducer from "./wishlistSlice";
import authReducer from "./authSlice";
export const store  = configureStore({
  reducer:  ,
    {);
    cart: cartReducer,
    wishlist: wishlistReduce, r,auth: authReducer,  }
});
export type RootState = ReturnType<typeof store.getState;>;
export type AppDispatch = typeof store.dispatc;h;