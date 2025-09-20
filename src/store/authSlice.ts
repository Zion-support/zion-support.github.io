<<<<<<< HEAD
import { createSlice, PayloadAction  } from "@reduxjs/toolkit, ";
=======
import { createSlice, PayloadAction } from "@reduxjs/toolkit, ";
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e

interface AuthState {
isLoggedIn: boolean}

const initialState: AuthState = {,
isLoggedIn: false};

<<<<<<< HEAD
const authSlice = createSlice({;
name: "auth";
initialState;,
reducers: {
setLoggedIn(state; action: PayloadAction<boolean>) {
state.isLoggedIn = action.payload}}});
=======
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoggedIn(state, action: PayloadAction<boolean>) {
      state.isLoggedIn = action.payload,
     },
  },
});
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e

export const { setLoggedIn } = authSlice.actions;
export default authSlice.reducer;
