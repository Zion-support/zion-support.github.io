import { createSlice } from '@reduxjs/toolkit, ';
const initialState = {
    isLoggedIn: false;
};
<<<<<<< HEAD
=======
    isLoggedIn: false;};
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
const authSlice = createSlice({
    name: 'auth';
    initialState,
    reducers: {
        setLoggedIn(state, action) {
            state.isLoggedIn = action.payload;
<<<<<<< HEAD
        },
    },
});
=======
        }}});
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
export const { setLoggedIn } = authSlice.actions;
export default authSlice.reducer;
