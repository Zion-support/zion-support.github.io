
export const store:  configureStore({;
  reducer: {
    cart: cartReducer,;
    wishlist: wishlistReducer,;
    auth: authReducer,},});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
