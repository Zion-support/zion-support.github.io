<<<<<<< HEAD
import { createSlice, PayloadAction } from "@reduxjs/toolkit, ";

interface AuthState {isLoggedIn: boolean}

const initialState: AuthState = {
=======
import { createSlice, PayloadAction  } from "@reduxjs/toolkit, ";

interface AuthState {isLoggedIn: boolean}
interface AuthState {
isLoggedIn: boolean}

const initialState: AuthState = {,
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
isLoggedIn: false};

const authSlice = createSlice({;
name: "auth";
initialState;,
reducers: {
<<<<<<< HEAD
setLoggedIn(state, action: PayloadAction<boolean>) {
state.isLoggedIn = action.payload},
},
});
=======
setLoggedIn(state; action: PayloadAction<boolean>) {
state.isLoggedIn = action.payload},
},
});
state.isLoggedIn = action.payload}}});
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840

export const { setLoggedIn } = authSlice.actions;
export default authSlice.reducer;
