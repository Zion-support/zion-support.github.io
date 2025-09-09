import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import { CartState } from './cartSlice';
import { default as wishlistReducer, WishlistState } from './wishlistSlice';
import authReducer from './authSlice';
import { safeLocalStorage } from '@/utils/safeStorage';
import { warn } from '@/utils/productionLogger';

export const store = configureStore({

  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    auth: authReducer,
  },
});

// Add throttling to prevent infinite loops
let lastStorageUpdate = 0;
const STORAGE_UPDATE_THROTTLE = 100; // 100ms throttle

store.subscribe(() => {
  const now = Date.now();
  if (now - lastStorageUpdate < STORAGE_UPDATE_THROTTLE) {
    return; // Skip if too soon
  }
  lastStorageUpdate = now;
  
  try {
    const state = store.getState();
    
    // Only update if data has actually changed to prevent infinite loops
    const cartData = JSON.stringify(state.cart.items);
    const wishlistData = JSON.stringify(state.wishlist.items);
    
    const storage = safeLocalStorage();
    if (!storage) return;
    
    if (cartData !== storage.getItem('zion_cart')) {
      storage.setItem('zion_cart', cartData);
    }
    
    if (wishlistData !== storage.getItem('wishlist')) {
      storage.setItem('wishlist', wishlistData);
    }
    
    // Handle auth token storage
    if (state.auth.token) {
      const currentToken = storage.getItem('authToken');
      if (currentToken !== state.auth.token) {
        storage.setItem('authToken', state.auth.token);
        storage.setItem('ztg_token', state.auth.token); // For backward compatibility
      }
    } else {
      // Only remove if they exist to prevent unnecessary operations
      if (storage.getItem('authToken')) {
        storage.removeItem('authToken');
      }
      if (storage.getItem('ztg_token')) {
        storage.removeItem('ztg_token');
      }
    }
  } catch (error) {
    warn('Store subscription error (throttled):', { data: error });
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
