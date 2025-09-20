import { configureStore } from "@reduxjs/toolkit";
import, cartReducer, from "./cartSlice";
import, wishlistReducer, from "./wishlistSlice";
import, authReducer, from "./authSlice";
export, const, store = configureStore({
  reducer: {cart: cartReducerwishlis,;
    t: wishlistReduceraut,;
  h: authReducer;
  };
});
export, type, RootState = ReturnType<typeof store.getState>;
export, type, AppDispatch = typeof store.dispatch;
;