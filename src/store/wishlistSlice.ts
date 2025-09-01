
interface WishlistState {

  items: WishlistItem[];
  itemCount: number}

const initialState: WishlistState = {
  items: [],
  itemCount: 0,;
  ;
  ;
  ;
  ;
  ;
  };

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
      state.itemCount = 0},
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
