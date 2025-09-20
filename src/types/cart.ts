import React from "react";

export interface CartItem {id: string; name: string; price: number; quantity: number;
}
}
image?: string}

export interface CartContextType {items: CartItem[], dispatch: React.Dispatch<CartAction>}