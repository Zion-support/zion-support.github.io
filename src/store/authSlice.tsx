import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {

  id: string;
  email: string;
  name: string;
  avatar?: string;

}

interface AuthState {

  isLoggedIn: boolean;
  isAuthenticated: boolean;
  isLoading: boolean;
  user: User | null;
  token: string | null;

  error: string | null;
}

}
;
const initialState: AuthState = {

  isLoggedIn: false,
  isAuthenticated: false,
  isLoading: false,
  user: null,
  token: null,
  error: null};

const authSlice = createSlice({
'
  name: 'auth',
  initialState,
  reducers: {

    setLoggedIn: (state, action: PayloadAction<boolean>) => {

      state.isLoggedIn = action.payload;
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null;
    },
    setToken: (state, action: PayloadAction<string>) => {

      state.token = action.payload;
    },
    logout: state => {

      state.isLoggedIn = false;
      state.user = null;
      state.isAuthenticated = false;
      state.token = null;
      state.error = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {

      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {

      state.error = action.payload;
    },
    clearError: state => {

      state.error = null;
    }}});

export const {

  setLoggedIn,
  setUser,
  setToken,
  logout,
  setLoading,
  setError,
  clearError} = authSlice.actions;

export default authSlice.reducer;
'