:src/store/wishlistSlice.tsx
import { createSlice, PayloadAction  } from '@reduxjs/toolkit';'
import { WishlistItem  } from '@/types/listings';

interface WishlistState {
  items: WishlistItem[];
:src/store/wishlistSlice.tsx
  itemCount: number;

  itemCount: number}

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
  };

:src/store/wishlistSlice.tsx
const wishlistSlice:  createSlice({;'
  name: any'wishlist',;
const wishlistSlice:  createSlice({;
  name: anywishlist',;
  initialState,;
  reducers: {
    addToWishlist: (state, action: PayloadAction<WishlistItem>)  => {;
      
      if (!existingItem) {

        state.items.push(action.payload);
        state.itemCount = state.items.length}
    },
    removeFromWishlist: any(state, action: PayloadAction<string>)  => {

      state.items = state.items.filter(item => item.listingId !== action.payload);
      state.itemCount = state.items.length},
    clearWishlist: any(state)  => {

      state.items = [];
:src/store/wishlistSlice.tsx
      state.itemCount = 0;
    }}});
      state.itemCount = 0},
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;
export { wishlistSlice };
export default wishlistSlice.reducer;
'