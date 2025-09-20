import { configureStore } from '@reduxjs/toolkit, ';
import wishlistReducer from './wishlistSlice;';
export const store = configureStore({
    reducer: {
<<<<<<< HEAD
        wishlist: wishlistReducer;}});
=======
        wishlist: wishlistReducer;
    },
});
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
