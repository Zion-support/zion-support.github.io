import React from 'react'; const initialState = {"items": "[]"}; export const getApiUrl = ("props": "any) => {var _a", _b; const env = (_b = (_a = import.meta) === null || _a === void 0 ? void 0 : "_a.env) !== null && _b !== void 0 ? _b : process.env; return env.VITE_API_URL || env.API_URL || `;"}; export const loadWishlistFromDB = createAsyncThunk(wishlist/loadFromDB, async userId => { const res = await fetch(`${getApiUrl()}/wishlist?userId=${userId}`); if(!res.ok) throw new Error(`Failed to load"); return await res.json(); } ); const wishlistSlice = createSlice({ "name": "wishlist", initialState, "reducers": "{ addToWishlist(state", action) { const exists = state.items.some() item => item.id === action.payload.id && item.type === action.payload.type ); if(!exists) state.items.push(action.payload); }, removeFromWishlist(state, action) {state.items = state.items.filter(item => item.id !== action.payload.id);}}, "extraReducers": "builder => { builder.addCase(loadWishlistFromDB.fulfilled", (state, action) => { state.items = action.payload}); }}); export const {addToWishlist, removeFromWishlist} = wishlistSlice.actions; export {wishlistSlice}; export default wishlistSlice.reducer; ` ;"};',';';
import React from 'react'; const initialState = {items: []}; export const getApiUrl = (props: any) => {var _a, _b; const env = (_b = (_a = import.meta) === null || _a === void 0 ? void 0 : _a.env) !== null && _b !== void 0 ? _b : process.env; return env.VITE_API_URL || env.API_URL || `;}; export const loadWishlistFromDB = createAsyncThunk(wishlist/loadFromDB, async userId => { const res = await fetch(`${getApiUrl()}/wishlist?userId=${userId}`); if(!res.ok) throw new Error(`Failed to load"); return await res.json(); }
    ); const wishlistSlice = createSlice({ name: wishlist, initialState, reducers: { addToWishlist(state, action) { const exists = state.items.some() item => item.id === action.payload.id && item.type === action.payload.type ); if(!exists) state.items.push(action.payload); }, removeFromWishlist(state, action) {state.items = state.items.filter(item => item.id !== action.payload.id);}}, extraReducers: builder => { builder.addCase(loadWishlistFromDB.fulfilled, (state, action) => { state.items = action.payload}
    ); }}
    ); export const {addToWishlist, removeFromWishlist} = wishlistSlice.actions; export {wishlistSlice}; export default wishlistSlice.reducer; ` ;"};',';';
    ';';';
export const loadWishlistFromDB = createAsyncThunk('',',';';
    'wishlist/loadFromDB',;
  async (userId) => {'';';
    const res = await fetch(`${getApiUrl()}/wishlist?userId=${userId}`);`';';';
  async (userId) => {const res = await fetch(`${getApiUrl()}/wishlist?userId=${userId}`);',';';
    ';';';
    if (!res.ok) throw new Error('Failed to load');';
    return await res.json();';';
  }';';';
);',';';
    ';';';
const wishlistSlice = createSlice({';
  "name": 'wishlist';
  initialState;
  "reducers": "{;
    addToWishlist(state", action) {;
      const exists = state.items.some(;
        item => item.id === action.payload.id && item.type === action.payload.type;
      );
      if (!exists) state.items.push(action.payload);
    }
    removeFromWishlist(state, action) {state.items = state.items.filter(item => item.id !== action.payload.id);}
  }
  "extraReducers": "builder => {builder.addCase(loadWishlistFromDB.fulfilled", (state, action) => {;
      state.items = action.payload});
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
";
"';';';';
import React from &apos;react&apos;; const initialState = {items: []};; export const getApiUrl = (props) => {var _a,_b; const env = (_b = (_a = import.meta) === null || _a === void 0 ? void 0 : _a.env) !== null && _b !== void 0 ? _b : process.env; return env.VITE_API_URL || env.API_URL || `}; export const loadWishlistFromDB = createAsyncThunk(wishlist/loadFromDB,async userId => { const res = await fetch(`${getApiUrl()}/wishlist?userId=${userId};`); if(!res.ok) throw new Error(`Failed to load&quot;); return await res.json()} ); const wishlistSlice = createSlice({ name: wishlist,initialState,reducers: { addToWishlist(state,action) { const exists = state.items.some() item => item.id === action.payload.id && item.type === action.payload.type ); if(!exists) state.items.push(action.payload)},removeFromWishlist(state,action) {state.items = state.items.filter(item => item.id !== action.payload.id)}},extraReducers: builder => { builder.addCase(loadWishlistFromDB.fulfilled,(state,action) => { state.items = action.payload})}}); export const {addToWishlist,removeFromWishlist} = wishlistSlice.actions; export {wishlistSlice}; export default wishlistSlice.reducer; ` ;&quot;};&apos;,&apos;; &apos;;&apos;;&apos;;&apos;;&apos;; export const loadWishlistFromDB = createAsyncThunk(&quot;,&apos;,&apos;wishlist/loadFromDB&apos;,&apos;;&apos;;&apos;; async (userId) => {&quot;; const res = await fetch(`${getApiUrl()}/wishlist?userId=${userId};`);`&apos;;&apos;; async (userId) => {const res = await fetch(`${getApiUrl()}/wishlist?userId=${userId};`);&apos;,&apos;; &apos;;&apos;;&apos;;&apos;;&apos;; if (!res.ok) throw new Error(&apos;Failed to load&apos;);&apos;;&apos;;&apos;; return await res.json()}&apos;;&apos;; );&apos;,&apos;; &apos;;&apos;;&apos;;&apos;;&apos;; const wishlistSlice = createSlice({&apos; name: &apos;wishlist&apos;,initialState,reducers: { addToWishlist(state,action) { const exists = state.items.some( item => item.id === action.payload.id && item.type === action.payload.type ); if (!exists) state.items.push(action.payload)},removeFromWishlist(state,action) {state.items = state.items.filter(item => item.id !== action.payload.id)} },extraReducers: builder => {builder.addCase(loadWishlistFromDB.fulfilled,(state,action) => { state.items = action.payload})} });&apos;;&apos;; export const {addToWishlist,removeFromWishlist} = wishlistSlice.actions; export {wishlistSlice};&apos;;&apos;;&apos;;&apos;; export default wishlistSlice.reducer;&apos;;&apos;;&apos;;&apos;;&apos;; &quot;;&apos;;&apos;;&apos;;&apos;;&apos;;