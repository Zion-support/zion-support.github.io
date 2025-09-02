import { configureStore } from &apos;@reduxjs/toolkit';&apos;&apos;

export const store = configureStore({
  reducer: {
    // Add your reducers here
  }
});

export type RootState = ReturnType;<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;