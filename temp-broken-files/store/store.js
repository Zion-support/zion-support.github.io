import import { configureStore } from '@reduxjs/toolkit, ';
import import wishlistReducer from './wishlistSlice;';
export const store = configureStore({
    reducer: {
        wishlist: wishlistReducer;
    },
});
        wishlist: wishlistReducer;}});
