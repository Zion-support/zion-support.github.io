import React from "react";

export interface CartItem {
<<<<<<< HEAD
id: string; name: string; price: number; quantity: number;
image?: string}
=======
  id: string, name: string, price: number, quantity: number,
    image?: string,
}
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e

export interface CartContextType {
items: CartItem[], dispatch: React.Dispatch<CartAction>}

export type CartAction =
<<<<<<< HEAD
| { type: "ADD_ITEM",
payload: CartItem }
| { type: "REMOVE_ITEM",
payload: string }
| { type: "CLEAR_CART" };
=======
  | { type: "ADD_ITEM",
    payload: CartItem }
  | { type: "REMOVE_ITEM",
    payload: string }
  | { type: "CLEAR_CART" },
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
