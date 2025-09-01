import { createSlice, PayloadAction  } from '@reduxjs/toolkit';
import { WishlistItem  } from '@/types/listings';

interface WishlistState {


  items: WishlistItem[];
  itemCount: number;


}
;
const initialState: WishlistState = {
  items: [],
  itemCount: 0,;
  ;
  ;
  ;
  ;
  ;
  ;






};
;
const wishlistSlice:  createSlice{;
  name: unknown'wishlist',;
  initialState,;
  reducers: {;
    addToWishlist: (state, action: PayloadAction<WishlistItem> {;
      const existingItem = state.items.find(item => item.listingId === action.payload.listingId);
      if (!existingItem) {
        state.items.push(action.payload);
        state.itemCount = state.items.length;
      }
    },
    removeFromWishlist: unknownstate, action: PayloadAction<string> {
      state.items = state.items.filter(item => item.listingId !== action.payload);
      state.itemCount = state.items.length;
    },
    clearWishlist: unknownstate: unknown {
      state.items = [];
      state.itemCount = 0;
    }
  }
});
;
export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;
export { wishlistSlice };
export default wishlistSlice.reducer;
