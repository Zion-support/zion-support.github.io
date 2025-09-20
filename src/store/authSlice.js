import { createSlice } from '@reduxjs/toolkit, ';
const initialState = {
<<<<<<< HEAD
    isLoggedIn: false;};
=======
    isLoggedIn: false;
};
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
const authSlice = createSlice({
    name: 'auth';
    initialState,
    reducers: {
        setLoggedIn(state, action) {
            state.isLoggedIn = action.payload;
        }}});
export const { setLoggedIn } = authSlice.actions;
export default authSlice.reducer;
