import React from "react";

<<<<<<< HEAD
export interface CartItem {id: string, name: string, price: number, quantity: number;
=======
export interface CartItem {id: string; name: string; price: number; quantity: number;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
}
}
image?: string}

<<<<<<< HEAD
export interface CartContextType {items: CartItem[] dispatch: React.Dispatch<CartAction>}

export type CartAction =
| { type: "ADD_ITEM"
payload: CartItem }
| { type: "REMOVE_ITEM"
=======
export interface CartContextType {items: CartItem[], dispatch: React.Dispatch<CartAction>}
export interface CartItem {
id: string; name: string; price: number; quantity: number;
image?: string}

export interface CartContextType {
items: CartItem[], dispatch: React.Dispatch<CartAction>}

export type CartAction =
| { type: "ADD_ITEM",
payload: CartItem }
| { type: "REMOVE_ITEM",
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
payload: string }
| { type: "CLEAR_CART" };