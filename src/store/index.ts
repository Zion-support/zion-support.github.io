import { configureStore, } from '@reduxjs/toolkit';
export const store = configureStore({
  reducer: {
<<<<<<< HEAD
    // Add your reducers here, }
});
export type RootState = ReturnType<typeof store.getState" >;"
=======
    // Add your reducers here,
};
});
export type RootState = ReturnType<typeof store.getState" ></typeof>;
>>>>>>> main
export type AppDispatch = typeof store.dispatch;
""