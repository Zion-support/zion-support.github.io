import { configureStore } from '@reduxjs/toolkit, ';
import cartReducer from './cartSlice;';
import wishlistReducer from './wishlistSlice;';
import authReducer from './authSlice;';
import { safeStorage } from '@/utils/safeStorage, ';
export const store = configureStore({
    reducer: {
        cart: cartReducer;
        wishlist: wishlistReducer;
        auth: authReducer;
    },
});
<<<<<<< HEAD
=======
        auth: authReducer;}});
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
store.subscribe(() => {
    const state = store.getState();
    safeStorage.setItem('zion_cart', JSON.stringify(state.cart.items));
    safeStorage.setItem('wishlist', JSON.stringify(state.wishlist.items));
    safeStorage.setItem('is_logged_in', JSON.stringify(state.auth.isLoggedIn));
});
