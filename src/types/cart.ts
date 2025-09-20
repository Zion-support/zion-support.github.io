import React from "react";

<<<<<<< HEAD
export interface CartItem {
id: string; name: string; price: number; quantity: number;
image?: string}

export interface CartContextType {
items: CartItem[], dispatch: React.Dispatch<CartAction>}
=======
export interface CartItem {id: string; name: string; price: number; quantity: number;
}
}
image?: string}

export interface CartContextType {items: CartItem[], dispatch: React.Dispatch<CartAction>}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee

export type CartAction =
| { type: "ADD_ITEM",
payload: CartItem }
| { type: "REMOVE_ITEM",
payload: string }
| { type: "CLEAR_CART" };