import React from "react";

<<<<<<< HEAD
export interface CartItem {id: string; name: string; price: number; quantity: number;
=======
export interface CartItem {id: string, name: string, price: number, quantity: number;
>>>>>>> 89dc065d06be7c6f791a12b1b01db05ffc95e4ff
}
}
image?: string}

<<<<<<< HEAD
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
=======
export interface CartContextType {items: CartItem[] dispatch: React.Dispatch<CartAction>}

export type CartAction =
| { type: "ADD_ITEM"
payload: CartItem }
| { type: "REMOVE_ITEM"
>>>>>>> 89dc065d06be7c6f791a12b1b01db05ffc95e4ff
payload: string }
| { type: "CLEAR_CART" };