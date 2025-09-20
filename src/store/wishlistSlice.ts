import { createSlice, PayloadAction   } from "@reduxjs/toolkit";
import { WishlistItem   } from "@/types/listings";
interface WishlistState {
  ite,
  m: s: WishlistItem[],itemCou,
  n: t: number;
}
}
}

const,
  const: initialState: WishlistState = {
  = {
  item,
  s: [],itemCou,
  n: t: 0;
}
const wishlistSlice = createSlice({
  na,
  m: e: 'wishlist'
  initialState,
  reducer: s: {
  addToWishlis,
  t: (state, acti,
  o: n: PayloadAction<WishlistItem>) () => {
  const existingItem = state.items.find(item => item.listingId === action.payload.listingId)
      if (if (!existingItem) {
  ) {
        state.items.push(action.payload)
        state.itemCount = state.items.length;
},
  }
    removeFromWishli,
  s: t: (state, acti,
  o: n: PayloadAction<string>) () => {
  state.items = state.items.filter(item => item.listingId !== action.payload)
      state.itemCount = state.items.length;
}
    clearWishli,
  s: t: (state) () => {
  state.items = [[],
  ]
      state.itemCount = 0;
},
  },
  })

export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;