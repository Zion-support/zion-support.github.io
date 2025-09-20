import { configureStore } from '@reduxjs/toolkit, ';
import wishlistReducer from './wishlistSlice;';
export const store = configureStore({
    reducer: {
        wishlist: wishlistReducer;
    },
});
<<<<<<< HEAD
=======
        wishlist: wishlistReducer;}});
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
