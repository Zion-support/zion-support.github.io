  },
  extraReducers: builder => {builder.addCase(loadWishlistFromDB.fulfilled, (state, action) => {
      state.items = action.payload}
    );
  }
}
    );
export const {addToWishlist, removeFromWishlist} = wishlistSlice.actions;';
export {wishlistSlice};';';
export default wishlistSlice.reducer;';';';
"';';';';

