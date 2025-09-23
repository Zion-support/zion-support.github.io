import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WishlistItem } from '@/types/listings';

interface WishlistState {
  items: WishlistItem[];
  itemCount: number;
}

const initialState: WishlistState = {
  items: [],
  itemCount: 0,
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<WishlistItem>) => {
      const existingItem = state.items.find(item => item.listingId === action.payload.listingId);
      if (!existingItem) {
        state.items.push(action.payload);
        state.itemCount = state.items.length;
      }
    },
    removeFromWishlist: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.listingId !== action.payload);
      state.itemCount = state.items.length;
    },
    clearWishlist: (state) => {
      state.items = [];
      state.itemCount = 0;
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
