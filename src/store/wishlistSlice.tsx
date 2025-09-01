<<<<<<< HEAD
=======
:src/store/wishlistSlice.tsx
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954

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
  };

<<<<<<< HEAD
const wishlistSlice:  createSlice({;
=======
:src/store/wishlistSlice.tsx
const wishlistSlice:  createSlice({;'
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954
  name: anywishlist',;
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
      state.itemCount = 0}}});
      state.itemCount = 0},
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;
export { wishlistSlice };
export default wishlistSlice.reducer;
