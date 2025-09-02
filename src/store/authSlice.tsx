import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'lucide-react';


interface User {
  id: string;
  emai,
    l: string;
  nam,
    e: string;
  avatar?: string}

interface AuthState {
  isLoggedIn: boolean;
  isAuthenticated: boolean;
  isLoading: boolean;
  user: User | null;
  toke,
    n: string | null;
  erro,
    r: string | null}

const initialState: AuthState = {
  isLoggedI,
    n: false, isAuthenticated: false,
  isLoading: false, user: null,
  token: null, error: null
};
const authSlice = createSlice({'
  name: 'auth', initialState,
  reducers: {
    setLoggedI,
    n: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    }, setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null;
    }, setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    }, logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.isAuthenticated = false;
      state.token = null;
      state.error = null;
    }, setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    }, setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    }, clearError: (state) => {
      state.error = null;
    }
  }
});
export const { setLoggedIn, setUser, setToken, logout, setLoading, setError, clearError } = authSlice.actions;
export default authSlice.reducer;""