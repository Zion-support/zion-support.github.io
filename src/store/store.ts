import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';

// Import your reducers here
// import userReducer from './slices/userSlice';
// import uiReducer from './slices/uiSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'ui'], // Only persist these reducers
};

const rootReducer = combineReducers({
  // user: userReducer,
  // ui: uiReducer,
  // Add your reducers here
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;