
import { User } from 'lucide-react';




interface User {id: string;


  email: string}

  avatar?: string}


interface AuthState {isLoggedIn: boolean;

  isAuthenticated: boolean;
  isLoading: boolean;
  user: User | null;

      state.isLoggedIn = action.payload},;
    setUser: (state, action: PayloadAction<User>) => {;
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null},;
    setToken: (state, action: PayloadAction<string>) => {;
      state.token = action.payload},;
    logout: (state) => {;

  reducers: {
    setLoggedI,n: (state, action: PayloadAction&apos}}<;<boolean>) => {
      state.isLoggedIn = action.payload}, setUser: (state, action: PayloadAction<User>) => {state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null}, setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload}, logout: (state) => {


      state.isLoggedIn = false;

      state.user = null;
      state.isAuthenticated = false;
      state.token = null;

      state.error = action.payload},;
    clearError: (state) => {;
      state.error = null}


  }
});








