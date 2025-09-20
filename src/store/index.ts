import { configureStore } from "
import cartReducer from "
import wishlistReducer from "
import authReducer from "
import { safeStorage } from "

export const store = configureStore({
reducer: {;
cart: cartReducer; wishlist: wishlistReducer;,
auth: authReducer;
},
})

store.subscribe(() => {
const state = store.getState()
safeStorage.setItem("zion_cart", JSON.stringify(state.cart.items))
safeStorage.setItem("wishlist", JSON.stringify(state.wishlist.items))
safeStorage.setItem("is_logged_in", JSON.stringify(state.auth.isLoggedIn)),
})

export type RootState = ReturnType<typeof store.getState>
export export type AppDispatch = typeof store.dispatch;

