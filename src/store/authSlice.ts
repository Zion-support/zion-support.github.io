import { createSlice, PayloadAction  } from "@reduxjs/toolkit, ";

<<<<<<< HEAD
interface AuthState {
isLoggedIn: boolean}
=======
interface AuthState {isLoggedIn: boolean}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee

const initialState: AuthState = {,
isLoggedIn: false};

const authSlice = createSlice({;
name: "auth";
initialState;,
reducers: {
setLoggedIn(state; action: PayloadAction<boolean>) {
<<<<<<< HEAD
state.isLoggedIn = action.payload}}});
=======
state.isLoggedIn = action.payload},
},
});
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee

export const { setLoggedIn } = authSlice.actions;
export default authSlice.reducer;
