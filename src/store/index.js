import { configureStore } from '@reduxjs/toolkit, ';
import cartReducer from './cartSlice;';
import wishlistReducer from './wishlistSlice;';
import authReducer from './authSlice;';
import { safeStorage } from '@/utils/safeStorage, ';
export const store = configureStore({
    reducer: {
<<<<<<< HEAD
        cart: cartReducer;
        wishlist: wishlistReducer;
        auth: authReducer;}});
=======
        cart: cartReducer,
        wishlist: wishlistReducer,
        auth: authReducer,,
    },
});
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
store.subscribe(() => {
    const state = store.getState();
    safeStorage.setItem('zion_cart', JSON.stringify(state.cart.items));
    safeStorage.setItem('wishlist', JSON.stringify(state.wishlist.items));
    safeStorage.setItem('is_logged_in', JSON.stringify(state.auth.isLoggedIn));
});
