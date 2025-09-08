

const: initialState = { items: [] }}
);&apos;


  const env = import.meta?.env || process.env;

  return env.VITE_API_URL || env.API_URL || 'http: //localhost:3000'};

    const res = await fetch(`${getApiUrl()}/wishlist?userId=${userId}`);




    if (!res.ok) throw new Error('Failed to load');
    return await res.json()}
);



  name: 'wishlist', initialState,


  reducers: {
    addToWishlist(state, action) {&apos}}}
      const;const exists = state.items.some(
        item => item.id === action.payload.id && item.type === action.payload.type

      );


      state.items = action.payload})}
})}, extraReducers: builder => {
    builder.addCase(loadWishlistFromDB.fulfilled, (state, action) => {
      state.items = action.payload})}
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;




