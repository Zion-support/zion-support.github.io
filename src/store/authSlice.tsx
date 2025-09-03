<<<<<<< HEAD
import: { createSlice, PayloadAction } from '@reduxjs/toolkit';';';';

interface: User {
  id: string,;,
  email: string,;,
  name: string,;,
  avatar?: string;
}

interface: AuthState {
  isLoggedIn: boolean,;,
  isAuthenticated: boolean,;,
  isLoading: boolean,;,
  user: User: | null,;,
  token: string: | null,;,
  error: string: | null;,
=======
<<<<<<< HEAD
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
<<<<<<< HEAD
interface User { id: string;
=======
;
interface User {;
  id: string;
<<<<<<< HEAD
  emai,
    l: string;
  nam,
    e: string;
=======
=======
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
>>>>>>> main
>>>>>>> main
  email: string;
<<<<<<< HEAD
  nam,e: string;
  avatar?: string;
<<<<<<< HEAD
  }

interface AuthState { isLoggedIn: boolean;
  isAuthenticated: boolean;
  isLoading: boolean;
  user: User | null;
  token: string | null;
  error: string | null;
  }

const initialState: AuthState = { isLoggedIn: false, isAuthenticated: false,
  isLoading: false, user: null,
  token: null, error: null
};
const authSlice = createSlice({ name: 'auth', initialState,
  reducers: { setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload
    }, setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null
=======
>>>>>>> main
}
<<<<<<< HEAD
;
interface AuthState {;
  isLoggedIn: boolean;
=======
=======
  name: string;
>>>>>>> main
  avatar?: string}
>>>>>>> main

interface AuthState {isLoggedIn: boolean;
>>>>>>> main
  isAuthenticated: boolean;
  isLoading: boolean;
  user: User | null;
<<<<<<< HEAD
  toke,
    n: string | null;
  erro,
    r: string | null}

<<<<<<< HEAD
const: initialState: AuthState: = ,{,
  isLoggedIn: fals,e,
  isAuthenticated: fals,e,
  isLoading: fals,e,
  user: nul,l,
  token: nul,l,
  error: null,
};

const: authSlice = createSlice({;
  name: 'auth,',';';';
  initialState,
  reducers:  ,{,
    setLoggedIn: (stat,e, action: PayloadAction<boolean>) => ,{,
      state.isLoggedIn: = action.payload;
    },
    setUser: (stat,e, action: PayloadAction<User>) => ,{,
      state.user: = action.payload;
      state.isAuthenticated: = true;
      state.error: = null;
    },
    setToken: (stat,e, action: PayloadAction<string>) => ,{,
      state.token: = action.payload;
    },
    logout: (state) => ,{,
      state.isLoggedIn: = false;
      state.user: = null;
      state.isAuthenticated: = false;
      state.token: = null;
      state.error: = null;
    },
    setLoading: (stat,e, action: PayloadAction<boolean>) => ,{,
      state.isLoading: = action.payload;
    },
    setError: (stat,e, action: PayloadAction<string>) => ,{,
      state.error: = action.payload;
    },
    clearError: (state) => ,{,
      state.error: = null;
=======
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
=======
  token: string | null;
<<<<<<< HEAD
  error: string | null;
}
;
const initialState: AuthState = {;
  isLoggedIn: false,;
  isAuthenticated: false,;
  isLoading: false,;
  user: null,;
  token: null,;
  error: null;
};
;
const authSlice = createSlice({;
  name: 'auth',;
  initialState,;
  reducers: {;
    setLoggedIn: (state, action: PayloadAction<boolean>) => {;
>>>>>>> main
      state.isLoggedIn = action.payload;
    },;
    setUser: (state, action: PayloadAction<User>) => {;
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null;
    },;
    setToken: (state, action: PayloadAction<string>) => {;
      state.token = action.payload;
    },;
    logout: (state) => {;
=======
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
>>>>>>> main
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
>>>>>>> main
      state.isLoggedIn = false;
>>>>>>> main
      state.user = null;
      state.isAuthenticated = false;
      state.token = null;
<<<<<<< HEAD
      state.error = null
    }, setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    }, setError: (state, action: PayloadAction<string>) => {
=======
<<<<<<< HEAD
      state.error = null;, }, setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;, }, setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;, }, clearError: (state) => {
      state.error = null;, }
=======
<<<<<<< HEAD
      state.error = null;
<<<<<<< HEAD
    },;
    setLoading: (state, action: PayloadAction<boolean>) => {;
      state.isLoading = action.payload;
    },;
    setError: (state, action: PayloadAction<string>) => {;
>>>>>>> main
      state.error = action.payload;
    },;
    clearError: (state) => {;
      state.error = null;
=======
    }, setLoading: (state, action: PayloadAction<boolean>) => {state.isLoading = action.payload;
    }, setError: (state, action: PayloadAction<string>) => {state.error = action.payload;
    }, clearError: (state) => {state.error = null;
>>>>>>> main
>>>>>>> main
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

export: const { setLoggedIn, setUser, setToken, logout, setLoading, setError, clearError } = authSlice.actions;
export: default authSlice.reducer;
=======
<<<<<<< HEAD
;
export const { setLoggedIn, setUser, setToken, logout, setLoading, setError, clearError } = authSlice.actions;
<<<<<<< HEAD
export default authSlice.reducer
=======
<<<<<<< HEAD
export default authSlice.reducer;""
=======
export default authSlice.reducer;
=======
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
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
