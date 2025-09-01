import { configureStore  } from '@reduxjs/toolkit';
import cartReducer from "cartSlice.ts";
import wishlistReducer from "wishlistSlice.ts";
import authReducer from "authSlice.ts";

export const store:  configureStore({;
  reducer: {;
    cart: cartReducer,;
    wishlist: wishlistReducer,;
    auth: authReducer,;
  },;
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
