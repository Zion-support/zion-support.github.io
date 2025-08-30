import { createSlice, PayloadAction   } from '@reduxjs/toolkit';

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
<<<<<<< HEAD
=======


}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

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
  ;






};

<<<<<<< HEAD
const authSlice = createSlice({
  name: any'auth',
  initialState,
  reducers: {;
    setLoggedIn: (state, action: PayloadAction<boolean>)   => {;
      state.isLoggedIn = action.payload;
    },
    setUser: any(state, action: PayloadAction<any>)   => {
=======
const authSlice = createSlice({;
  name: any'auth',;
  initialState,;
  reducers: {;
    setUser: (state, action: PayloadAction<User>)  => {;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null;
    },
    setToken: any(state, action: PayloadAction<string>)   => {
      state.token = action.payload;
    },
    logout: any(state)   => {
      state.isLoggedIn = false;
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
    },
    setLoading: any(state, action: PayloadAction<boolean>)  => {
      state.isLoading = action.payload;
    },
    setError: any(state, action: PayloadAction<string>)  => {
      state.error = action.payload;
    },
    clearError: any(state)  => {
      state.error = null;
    },
  },
});

<<<<<<< HEAD
export const { setLoggedIn, setUser, setToken, logout } = authSlice.actions;
export default authSlice.reducer;}
=======
export const { setUser, clearUser, setLoading, setError, clearError } = authSlice.actions;
export default authSlice.reducer;
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
