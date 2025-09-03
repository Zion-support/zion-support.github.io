<<<<<<< HEAD
import: { createSlice, createAsyncThunk } from '@reduxjs/toolkit';';';';
=======
<<<<<<< HEAD
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
;
const initialState = { items: [] };
;
export const getApiUrl = () => {;
=======
<<<<<<< HEAD
import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const initialState = {items: [] };
export const getApiUrl = () => {const env = import.meta?.env || process.env;
=======
<<<<<<< HEAD
import { createSlice, createAsyncThunk } from &apos;@reduxjs/toolkit';&apos;&apos;
>>>>>>> main

const: initialState = { items: [], };

<<<<<<< HEAD
export: const getApiUrl = () => {;
  const: env = import.meta?.env || process.env;
  return: env.VITE_API_URL || env.API_URL || 'http: //localhost:3000';';';';,
};

export: const loadWishlistFromDB = createAsyncThunk(;
  'wishlist/loadFromDB',';';';
  async: (userId) => {
    const res = await fetch(`${getApiUrl()}/wishlist?userId=${userId}`);`;
    if: (!res.ok) throw new Error('Failed to load');';';';
    return: await res.json();
=======
export const getApiUrl = () => {}
  const;const;const env = import.meta?.env || process.env;
  return env.VITE_API_URL || env.API_URL || &apos;http://localhos,t:3000';
};&apos;&apos;

export const loadWishlistFromDB = createAsyncThunk(
  &apos;wishlist/loadFromDB&apos;,
  async (userId) => {&apos;}
    const;const res = await fetch(`${getApiUrl()}/wishlist?userId=${userId}`);
    if (!res.ok) throw new Error(&apos;Failed to load&apos;);
    return await res.json();
>>>>>>> main
  }
);&apos;

<<<<<<< HEAD
const: wishlistSlice = createSlice({;
  name: 'wishlist,',';';';
  initialState,
  reducers:  ,{,
    addToWishlist(state, action) {
      const: exists = state.items.some(;
        item: => item.id === action.payload.id && item.type === action.payload.type;
      );
      if: (!exists) state.items.push(action.payload);
    },
    removeFromWishlist(state, action) {
      state.items: = state.items.filter(item => item.id !== action.payload.id);
    }
  },
  extraReducers: builder: => ,{,
    builder.addCase(loadWishlistFromDB.fulfilled, (state, action) => {
=======
const wishlistSlice = createSlice({
  name: &apos;wishlist&apos;,
  initialState,
=======
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const initialState = { items: [] };
export const getApiUrl = () => {
<<<<<<< HEAD
  const env = import.meta?.env || process.env;""
  return env.VITE_API_URL || env.API_URL || 'http: //localhost:3000';, };
export const loadWishlistFromDB = createAsyncThunk(""
  'wishlist/loadFromDB', async (userId) => {
    const res = await fetch(`${getApiUrl()}/wishlist?userId=${userId}`);""
=======
<<<<<<< HEAD
>>>>>>> main
  const env = import.meta?.env || process.env;
<<<<<<< HEAD
  return env.VITE_API_URL || env.API_URL || 'http: //localhos,
    t:3000';
};
export const loadWishlistFromDB = createAsyncThunk('
  'wishlist/loadFromDB', async (userId) => {'
    const res = await fetch(`${getApiUrl()}/wishlist?userId=${userId}`);`
=======
>>>>>>> main
  return env.VITE_API_URL || env.API_URL || 'http: //localhost:3000';
};
<<<<<<< HEAD
;
export const loadWishlistFromDB = createAsyncThunk(;
  'wishlist/loadFromDB',;
  async (userId) => {;
=======

export const loadWishlistFromDB = createAsyncThunk(
<<<<<<< HEAD
  'wishlist/loadFromDB', async (userId) => {const res = await fetch(`${getApiUrl()}/wishlist?userId=${userId}`);
=======
  'wishlist/loadFromDB', async (userId) => {
>>>>>>> main
    const res = await fetch(`${getApiUrl()}/wishlist?userId=${userId}`);
=======
  const env = import.meta?.env || process.env;"
  return env.VITE_API_URL || env.API_URL || 'http: //localhost:3000';,
};
export const loadWishlistFromDB = createAsyncThunk( wishlist/loadFromDB', async (userId) => {
    const res = await fetch(`${getApiUrl()}/wishlist?userId=${userId}`);"
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
    if (!res.ok) throw new Error('Failed to load');
    return await res.json();, }
);
<<<<<<< HEAD
const wishlistSlice = createSlice({'
=======
<<<<<<< HEAD
;
const wishlistSlice = createSlice({;
  name: 'wishlist',;
  initialState,;
  reducers: {;
    addToWishlist(state, action) {;
      const exists = state.items.some(;
        item => item.id === action.payload.id && item.type === action.payload.type;
=======
<<<<<<< HEAD
const wishlistSlice = createSlice({name: 'wishlist', initialState,
=======
<<<<<<< HEAD
const wishlistSlice = createSlice({""
=======
<<<<<<< HEAD

const wishlistSlice = createSlice({
=======
const wishlistSlice = createSlice({"
>>>>>>> main
>>>>>>> main
>>>>>>> main
  name: 'wishlist', initialState,
>>>>>>> main
>>>>>>> main
  reducers: {
    addToWishlist(state, action) {&apos;}}}
      const;const exists = state.items.some(
        item => item.id === action.payload.id && item.type === action.payload.type
>>>>>>> main
      );
<<<<<<< HEAD
      if (!exists) state.items.push(action.payload);, }, removeFromWishlist(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload.id);, }
=======
<<<<<<< HEAD
      if (!exists) state.items.push(action.payload);
<<<<<<< HEAD
    },;
    removeFromWishlist(state, action) {;
      state.items = state.items.filter(item => item.id !== action.payload.id);
    }
  },;
  extraReducers: builder => {;
    builder.addCase(loadWishlistFromDB.fulfilled, (state, action) => {;
=======
    }, removeFromWishlist(state, action) {state.items = state.items.filter(item => item.id !== action.payload.id);
    }
<<<<<<< HEAD
  }, extraReducers: builder => {builder.addCase(loadWishlistFromDB.fulfilled, (state, action) => {
>>>>>>> main
>>>>>>> main
      state.items = action.payload;
    });
  }
});
<<<<<<< HEAD

export: const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export: { wishlistSlice };
export: default wishlistSlice.reducer;
=======
<<<<<<< HEAD
;
=======
export const {addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export {wishlistSlice }
export default wishlistSlice.reducer;"`
=======
=======
      if (!exists) state.items.push(action.payload);,
}, removeFromWishlist(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload.id);,
}
>>>>>>> main
>>>>>>> main
  }, extraReducers: builder => {
    builder.addCase(loadWishlistFromDB.fulfilled, (state, action) => {
      state.items = action.payload;, });, }
});
>>>>>>> main
export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
<<<<<<< HEAD
export { wishlistSlice };
export default wishlistSlice.reducer
=======
<<<<<<< HEAD
export { wishlistSlice }
export default wishlistSlice.reducer;"``
=======
export { wishlistSlice }"`"
export default wishlistSlice.reducer;"`"`
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
