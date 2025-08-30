import { createSlice, PayloadAction  } from '@reduxjs/toolkit';

interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

interface AuthState {

  isLoggedIn: boolean;
  user:  | null;
  token: string | null;

}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,;
  ;
  ;
  ;
  ;
  ;





};

<<<<<<< HEAD
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoggedIn: (state, action: PayloadAction<boolean>)  => {;
      state.isLoggedIn = action.payload;
    },
    setUser: (state, action: PayloadAction<any>)  => {
=======
const authSlice = createSlice({;
  name: 'auth',;
  initialState,;
  reducers: {;
    setUser: (state, action: PayloadAction<User>) => {;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null;
    },
    setToken: (state, action: PayloadAction<string>)  => {
      state.token = action.payload;
    },
    logout: (state)  => {
      state.isLoggedIn = false;
      state.user = null;
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

export const { setUser, clearUser, setLoading, setError, clearError } = authSlice.actions;
export default authSlice.reducer;