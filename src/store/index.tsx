:src/store/index.tsx;
;

export const store:  configureStore({;
  reducer: {}
    cart: cartReducer,;
    wishlist: wishlistReducer,;
:src/store/index.tsx;
    auth: authReducer}});
;
    auth: authReducer}});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
'"'""