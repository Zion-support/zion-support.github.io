<<<<<<< HEAD
<<<<<<< HEAD
import { createSlice, PayloadAction  } from '@reduxjs/toolkit';
=======
import { createSlice, PayloadAction               } from '@reduxjs/toolkit';

>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
interface User {












=======
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
>>>>>>> cursor/add-new-services-and-advertise-them-650b

export interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  avatar?: string;
  company?: string;
  preferences?: Record<string, any>;
}
<<<<<<< HEAD
interface AuthState {
<<<<<<< HEAD
  isLoggedIn: boolean;
  user: User | null;
  token: string | null;
=======














  isLoggedIn: boolean;
  user:  | null;
  token: string | null;
<<<<<<< HEAD
=======














>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
}
=======

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  token: string | null;
}

>>>>>>> cursor/add-new-services-and-advertise-them-650b
const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,
<<<<<<< HEAD
  error: null,;
  ;
  ;
  ;
  ;
  ;
  ;
=======
  error: null,
  token: null,
>>>>>>> cursor/add-new-services-and-advertise-them-650b
};
<<<<<<< HEAD
=======

const authSlice = createSlice({
  name: 'auth',
  initialState,
<<<<<<< HEAD
  reducers: {;
    setLoggedIn: (state, action: PayloadAction<boolean>)               => {;
      state.isLoggedIn = action.payload;
    },
    setUser: anyanyanyanyanyanyanyanyanyanyanyanyany(state, action: PayloadAction<any>)               => {
=======
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
const authSlice = createSlice({;
  name: anyanyanyanyanyanyanyanyanyanyanyanyany'auth',;
  initialState,;
  reducers: {;
<<<<<<< HEAD
    setUser: (state, action: PayloadAction<User>) => {;
=======
    setUser: (state, action: PayloadAction<User>)              => {;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
=======
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
>>>>>>> cursor/add-new-services-and-advertise-them-650b
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null;
    },
<<<<<<< HEAD
<<<<<<< HEAD
    setToken: anyanyanyanyanyanyanyanyanyanyanyanyany(state, action: PayloadAction<string>)               => {
      state.token = action.payload;
    },
    logout: anyanyanyanyanyanyanyanyanyanyanyanyany(state)               => {
=======
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    logout: (state) => {
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
      state.isLoggedIn = false;
=======
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    logout: (state) => {
>>>>>>> cursor/add-new-services-and-advertise-them-650b
      state.user = null;
      state.token = null;
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
    clearError: (state) => {
      state.error = null;
    },
    updateUser: (state, action: PayloadAction<Partial<User>>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
  },
});
<<<<<<< HEAD
export const { setUser, clearUser, setLoading, setError, clearError } = authSlice.actions;
=======

export const { 
  setUser, 
  setToken, 
  logout, 
  setLoading, 
  setError, 
  clearError, 
  updateUser 
} = authSlice.actions;

>>>>>>> cursor/add-new-services-and-advertise-them-650b
export default authSlice.reducer;
