import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {items: [] };

<<<<<<< HEAD
export const getApiUrl = () => {
  const env = import.meta?.env || process.env;
  return env.VITE_API_URL || env.API_URL || 'http://localhos,
    t:3000';
=======
export const getApiUrl = () => {const env = import.meta?.env || process.env;
  return env.VITE_API_URL || env.API_URL || 'http: //localhost:3000';
>>>>>>> main
};

export const loadWishlistFromDB = createAsyncThunk('
  'wishlist/loadFromDB',
<<<<<<< HEAD
  async (userId) => {'
    const res = await fetch(`${getApiUrl()}/wishlist?userId=${userId}`);`
=======
  async (userId) => {const res = await fetch(`${getApiUrl()}/wishlist?userId=${userId}`);
>>>>>>> main
    if (!res.ok) throw new Error('Failed to load');
    return await res.json();
  }
);

<<<<<<< HEAD
const wishlistSlice = createSlice({'
  name: 'wishlist',
=======
const wishlistSlice = createSlice({name: 'wishlist',
>>>>>>> main
  initialState,
  reducers: {
    addToWishlist(state, action) {
      const exists = state.items.some(
        item => item.id === action.payload.id && item.type === action.payload.type
      );
      if (!exists) state.items.push(action.payload);
    },
    removeFromWishlist(state, action) {state.items = state.items.filter(item => item.id !== action.payload.id);
    }
  },
  extraReducers: builder => {builder.addCase(loadWishlistFromDB.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  }
});

export const {addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export {wishlistSlice };
export default wishlistSlice.reducer;