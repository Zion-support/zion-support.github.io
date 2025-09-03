<<<<<<< HEAD
import {createSlice, PayloadAction } from '@reduxjs/toolkit';
import {User } from 'lucide-react';
=======
<<<<<<< HEAD
import { createSlice, PayloadAction } from &apos;@reduxjs/toolkit';
=======
<<<<<<< HEAD
import { createSlice, PayloadAction } from '@reduxjs/toolkit';""
=======
import { createSlice, PayloadAction } from '@reduxjs/toolkit
>>>>>>> main
import { User } from 'lucide-react';
>>>>>>> main

>>>>>>> main

interface User {id: string;
  email: string;
<<<<<<< HEAD
  nam,e: string;
  avatar?: string;
}
=======
  name: string;
  avatar?: string}
>>>>>>> main

interface AuthState {isLoggedIn: boolean;
  isAuthenticated: boolean;
  isLoading: boolean;
  user: User | null;
  token: string | null;
<<<<<<< HEAD
  erro,r: string | null;
}&apos;&apos;

const initialState: AuthState = {
  isLoggedI,n: false,
  isAuthenticated: false,
  isLoading: false,
  user: null,
  token: null,
  error: null
};

const authSlice = createSlice({
  name: &apos;auth&apos;,
  initialState,
=======
  error: string | null}

const initialState: AuthState = {isLoggedIn: false, isAuthenticated: false,
  isLoading: false, user: null,
<<<<<<< HEAD
  token: null, error: null
};
<<<<<<< HEAD
const authSlice = createSlice({name: 'auth', initialState,
=======

const authSlice = createSlice({
  name: 'auth', initialState,
>>>>>>> main
>>>>>>> main
  reducers: {
    setLoggedI,n: (state, action: PayloadAction&apos;}}<;<boolean>) => {
      state.isLoggedIn = action.payload;
    }, setUser: (state, action: PayloadAction<User>) => {state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null;
<<<<<<< HEAD
    }, setToken: (state, action: PayloadAction<string>) => {state.token = action.payload;
    }, logout: (state) => {state.isLoggedIn = false;
=======
    }, setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    }, logout: (state) => {
=======
  token: null, error: null,
};
const authSlice = createSlice({""
  name: 'auth', initialState,
  reducers: {
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;, }, setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
<<<<<<< HEAD
      state.error = null;, }, setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;, }, logout: (state) => {
=======
      state.error = null;,
}, setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;,
}, logout: (state) => {
>>>>>>> main
>>>>>>> main
      state.isLoggedIn = false;
>>>>>>> main
      state.user = null;
      state.isAuthenticated = false;
      state.token = null;
<<<<<<< HEAD
      state.error = null;, }, setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;, }, setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;, }, clearError: (state) => {
      state.error = null;, }
=======
<<<<<<< HEAD
      state.error = null;
    }, setLoading: (state, action: PayloadAction<boolean>) => {state.isLoading = action.payload;
    }, setError: (state, action: PayloadAction<string>) => {state.error = action.payload;
    }, clearError: (state) => {state.error = null;
    }
=======
      state.error = null;,
}, setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;,
}, setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;,
}, clearError: (state) => {
      state.error = null;,
}
>>>>>>> main
>>>>>>> main
  }
});
<<<<<<< HEAD
export const {setLoggedIn, setUser, setToken, logout, setLoading, setError, clearError } = authSlice.actions;
export default authSlice.reducer;"
=======
export const { setLoggedIn, setUser, setToken, logout, setLoading, setError, clearError } = authSlice.actions;""
export default authSlice.reducer;""
 interface User {
  id: string
   email: string
   name: string
   : src/store/authSlice.tsx avatar?: string, } avatar?: string} interface AuthState {
  isLoggedIn: boolean
   isAuthenticated: boolean
   isLoading: boolean
   user: User | null
   token: string | null
   : src/store/authSlice.tsx error: string | null","
} error: string | null} }  const initialState: AuthState = { isLoggedIn: false, isAuthenticated: false, isLoading: false, user: null, token: null, : src/store/authSlice.tsx error: null}}, error: null}}, setUser: (state, action: PayloadAction<User>) => { state.user = action.payload state.isAuthenticated = true state.error = null}, setToken: (state, action: PayloadAction<string>) => { : src/store/authSlice.tsx state.token = action.payload}, logout: state => { state.token = action.payload}, logout: (state) => { state.isLoggedIn = false state.user = null state.isAuthenticated = false state.token = null state.error = null}, setLoading: (state, action: PayloadAction<boolean>) => { : src/store/authSlice.tsx state.isLoading = action.payload}, setError: (state, action: PayloadAction<string>) => { state.error = action.payload}, clearError: state => { state.error = null}}}) state.isLoading = action.payload}, setError: (state, action: PayloadAction<string>) => { state.error = action.payload}, clearError: (state) => { state.error = null}}}) export const { setLoggedIn, setUser, setToken, logout, setLoading, setError, clearError} = authSlice.actions export default authSlice.reducer ''
""
>>>>>>> main
