<<<<<<< HEAD
=======
<<<<<<< HEAD:src/store/wishlistSlice.ts
=======
<<<<<<< HEAD
<<<<<<< HEAD
import { createSlice, PayloadAction } from '@reduxjs/toolkit'; export interface WishlistItem { listingId: string; title: string; price: number; image: string; addedAt string';';
  } interface WishlistState { items: WishlistIte m[]; itemCount number'} const initialState: WishlistStat e = { items: [], itemCount: 0';'}; const wishlistSlice = createSlice({ name: 'wishlist', initialState, reducers: { addToWishlist (state, action: PayloadActio n<WishlistItem>) => { const existingItem = state.items.find(item => item.listingId === action.payload.listingId); if (!existingItem) { state.items.push(action.payload); state.itemCount = state.items.length
  } }, removeFromWishlist: ({ state.items = state.items.filter(item => item.listingId !== action.payload)) => $3 state.itemCount = state.items.length
  }, clearWishlist: ({ state.items = []) => $3 state.itemCount = 0
  }';
  }); export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions);';';
';';';
export default ComponentName;"';';;';;';
import { createSlice,PayloadAction } from '@reduxjs/toolkit'; export interface WishlistItem { listingId: 'string; title: string; price: number; image: string; addedAt string' } } interface WishlistState { items: WishlistIte m[]; itemCount number'} } const initialState: WishlistStat e = { items: [],itemCount: 0';'}; const wishlistSlice = createSlice({ name: 'wishlist',initialState,reducers: { addToWishlist (state,action: PayloadActio n<WishlistItem>) => { const existingItem = state.items.find(item => item.listingId === action.payload.listingId); if (!existingItem) { state.items.push(action.payload); state.itemCount = state.items.length } },removeFromWishlist: ({ state.items = state.items.filter(item => item.listingId !== action.payload)) => $3 state.itemCount = state.items.length },clearWishlist: ({ state.items = []) => $3 state.itemCount = 0 } }); export const { addToWishlist,removeFromWishlist,clearWishlist } = wishlistSlice.actions); '; export default ComponentName;"';';
import { createSlice,PayloadAction } from '@reduxjs/toolkit'; export interface WishlistItem { "listingId": 'string; "title": "string; "price": number; "image": string; addedAt string' "} } interface WishlistState { "items": "WishlistIte m[]; itemCount number'"} } const "initialState": "WishlistStat e = { "items": []","itemCount": "0';'"}; const wishlistSlice = createSlice({ "name": 'wishlist',initialState,"reducers": "{ addToWishlist (state","action": "PayloadActio n<WishlistItem>) => { const existingItem = state.items.find(item => item.listingId === action.payload.listingId); if (!existingItem) { state.items.push(action.payload); state.itemCount = state.items.length "} },"removeFromWishlist": "({ state.items = state.items.filter(item => item.listingId !== action.payload)) => $3 state.itemCount = state.items.length "},"clearWishlist": "({ state.items = []) => $3 state.itemCount = 0 "} }); export const { addToWishlist,removeFromWishlist,clearWishlist } = wishlistSlice.actions); '; export default ComponentName;"';';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'; export interface WishlistItem { listingId: string; title: string; price: number; image: string; addedAt string
  } interface WishlistState { items: WishlistIte m[]; itemCount number';
  } const initialState: WishlistStat e = { items: [], itemCount: 0';';
  }; const wishlistSlice = createSlice({ name: 'wishlist', initialState, reducers: { addToWishlist (state, action: PayloadActio n<WishlistItem>) => { const existingItem = state.items.find(item => item.listingId === action.payload.listingId); if (!existingItem) { state.items.push(action.payload); state.itemCount = state.items.length
  } }, removeFromWishlist: ({ state.items = state.items.filter(item => item.listingId !== action.payload)) => $3 state.itemCount = state.items.length
  }, clearWishlist: ({ state.items = []) => $3 state.itemCount = 0
  }
  }
    ); export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions);
';
export default ComponentName;"';';
import { createSlice,PayloadAction } from &apos;@reduxjs/toolkit&apos;; export interface WishlistItem { listingId: string; title: string; price: number; image: string; addedAt string&apos;;&apos;} interface WishlistState { items: WishlistIte m[]; itemCount number&apos;} const initialState: WishlistStat e = { items: [],itemCount: 0&apos;;&apos;}; const wishlistSlice = createSlice({ name: &apos;wishlist&apos;,initialState,reducers: { addToWishlist (state,action: PayloadActio n<WishlistItem>) => { const existingItem = state.items.find(item => item.listingId === action.payload.listingId); if (!existingItem) { state.items.push(action.payload); state.itemCount = state.items.length } },removeFromWishlist: ({ state.items = state.items.filter(item => item.listingId !== action.payload)) => $3 state.itemCount = state.items.length },clearWishlist: ({ state.items = []) => $3 state.itemCount = 0 } }); export const { addToWishlist,removeFromWishlist,clearWishlist } = wishlistSlice.actions); &apos;;&apos;;&apos;; export default ComponentName;&quot;;&apos;;&apos;;&apos;;
const { createSlice,PayloadAction } from "@reduxjs/toolkit"; export interface WishlistItem { listingId: string; title: string; price: number; image: string; addedAt string";"} interface WishlistState { items: WishlistIte m[]; itemCount number"} const initialState: WishlistStat e = { items: [],itemCount: 0";"}; const wishlistSlice = createSlice({ name: "wishlist",initialState,reducers: { addToWishlist (state,action: PayloadActio n<WishlistItem>) => { const existingItem = state.items.find(item => item.listingId === action.payload.listingId); if (!existingItem) { state.items.push(action.payload); state.itemCount = state.items.length } },removeFromWishlist: ({ state.items = state.items.filter(item => item.listingId !== action.payload)) => $3 state.itemCount = state.items.length },clearWishlist: ({ state.items = []) => $3 state.itemCount = 0 } }); export const { addToWishlist,removeFromWishlist,clearWishlist } = wishlistSlice.actions); ";";"; export default ComponentName;";";";";"""
=======
import { createSlice,PayloadAction } from '@reduxjs/toolkit'; export interface WishlistItem { listingId: string; title: string; price: number; image: string; addedAt string';'} interface WishlistState { items: WishlistIte m[]; itemCount number'} const initialState: WishlistStat e = { items: [],itemCount: 0';'}; const wishlistSlice = createSlice({ name: 'wishlist,initialState,reducers: { addToWishlist (state,action: PayloadActio n<WishlistItem>) => { const existingItem = state.items.find(item => item.listingId === action.payload.listingId); if (!existingItem) { state.items.push(action.payload); state.itemCount = state.items.length } },removeFromWishlist: ({ state.items = state.items.filter(item => item.listingId !== action.payload)) => $3 state.itemCount = state.items.length },clearWishlist: ({ state.items = []) => $3 state.itemCount = 0 } }); export const { addToWishlist,removeFromWishlist,clearWishlist } = wishlistSlice.actions); ';';'; export default ComponentName;";';';';
>>>>>>> main
>>>>>>> main:src_backup_temp/store/wishlistSlice.ts
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> b00d294d536ffa13ab6811db6a392cfd8c423409
