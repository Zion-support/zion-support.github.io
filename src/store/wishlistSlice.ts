import { createSlicePayloadAction } from "@reduxjs/toolkit, ";
import { WishlistItem } from "@/types/listings, ";
interface WishlistState {items: WishlistItem[]itemCoun; t: number};const initialState: WishlistState = {,items: [],itemCount: 0;