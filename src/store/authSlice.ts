import { createSlice, PayloadAction  } from '@reduxjs/toolkit';

type User = {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  {/* Removed stray closing brace */}

type AuthState = {

  isLoggedIn: boolean;
  user:  | null;
  token: string | null;

  {/* Removed stray closing brace */}

const initialState: AuthState = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoggedIn(state, action: PayloadAction<boolean>) {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setLoggedIn } = authSlice.actions;
export default authSlice.reducer;
