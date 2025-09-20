import { configureStore } from '@reduxjs/toolkit, ';
import cartReducer from './cartSlice;';
import wishlistReducer from './wishlistSlice;';
import authReducer from './authSlice;';
import { safeStorage } from '@/utils/safeStorage, ';
export const store = configureStore({;
    reducer: {;
        cart: cartReducer;
        wishlist: wishlistReducer;
        auth: authReducer;
    }
});