import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

export interface WishlistItem {
  id: string;
  type: 'service' | 'product' | 'talent';
  name: string;
  price?: number;
  image?: string;
  description?: string;
}

interface WishlistState {
  items: WishlistItem[];
  loading: boolean;
  error: string | null;
}

const initialState: WishlistState = {
  items: [],
  loading: false,
  error: null,
};

export const getApiUrl = () => {
  const env = import.meta?.env || process.env;
  return env.VITE_API_URL || env.API_URL || '';
};

export const loadWishlistFromDB = createAsyncThunk(
  'wishlist/loadFromDB',
  async (userId: string) => {
    const res = await fetch(`${getApiUrl()}/wishlist?userId=${userId}`);
    if (!res.ok) throw new Error('Failed to load wishlist');
    return await res.json();
  }
);

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<WishlistItem>) => {
      const exists = state.items.some(
        item => item.id === action.payload.id && item.type === action.payload.type
      );
      if (!exists) {
        state.items.push(action.payload);
      }
    },
    removeFromWishlist: (state, action: PayloadAction<{ id: string }>) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    clearWishlist: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadWishlistFromDB.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadWishlistFromDB.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(loadWishlistFromDB.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load wishlist';
      });
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;
export { wishlistSlice };
export default wishlistSlice.reducer;