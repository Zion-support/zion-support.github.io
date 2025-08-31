<<<<<<< HEAD
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

=======
import { createSlice, PayloadAction  } from '@reduxjs/toolkit';
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}
interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
  token: string | null;
<<<<<<< HEAD
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

=======
}
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,
<<<<<<< HEAD
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    setUser: (state, action: PayloadAction<User>) => {
=======
  error: null,;
  ;
  ;
  ;
  ;
  ;
  ;
};
const authSlice = createSlice({;
  name: 'auth',;
  initialState,;
  reducers: {;
    setUser: (state, action: PayloadAction<User>) => {;
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});
<<<<<<< HEAD

export const { 
  setLoggedIn, 
  setUser, 
  setToken, 
  logout, 
  setLoading, 
  setError, 
  clearError 
} = authSlice.actions;

=======
export const { setUser, clearUser, setLoading, setError, clearError } = authSlice.actions;
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
export default authSlice.reducer;
