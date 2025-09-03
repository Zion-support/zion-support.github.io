import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const initialState = { items: [] };
export const getApiUrl = () => {
<<<<<<< HEAD
  const env = import.meta?.env || process.env;
  return env.VITE_API_URL || env.API_URL || 'http: //localhost:3000';
};

export const loadWishlistFromDB = createAsyncThunk(
  'wishlist/loadFromDB', async (userId) => {
    const res = await fetch(`${getApiUrl()}/wishlist?userId=${userId}`);
=======
  const env = import.meta?.env || process.env;"
  return env.VITE_API_URL || env.API_URL || 'http: //localhost:3000';,
};
export const loadWishlistFromDB = createAsyncThunk( wishlist/loadFromDB', async (userId) => {
    const res = await fetch(`${getApiUrl()}/wishlist?userId=${userId}`);"
>>>>>>> main
    if (!res.ok) throw new Error('Failed to load');
    return await res.json();,
}
);
<<<<<<< HEAD

const wishlistSlice = createSlice({
=======
const wishlistSlice = createSlice({"
>>>>>>> main
  name: 'wishlist', initialState,
  reducers: {
    addToWishlist(state, action) {
      const exists = state.items.some(
        item => item.id === action.payload.id && item.type === action.payload.type
      );
<<<<<<< HEAD
      if (!exists) state.items.push(action.payload);
    }, removeFromWishlist(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    }
=======
      if (!exists) state.items.push(action.payload);,
}, removeFromWishlist(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload.id);,
}
>>>>>>> main
  }, extraReducers: builder => {
    builder.addCase(loadWishlistFromDB.fulfilled, (state, action) => {
      state.items = action.payload;,
});,
}
});
export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export { wishlistSlice }"`
export default wishlistSlice.reducer;"`"`