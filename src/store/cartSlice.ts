<<<<<<< HEAD
import { createSlice, PayloadAction } from "@reduxjs/toolkit, ";
=======
import { createSlice, PayloadAction  } from "@reduxjs/toolkit, ";
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
import { CartItem } from "@/types/cart, ";
import { safeStorage } from "@/utils/safeStorage, ";

interface CartState {
items: CartItem[];
}
}
}
<<<<<<< HEAD
=======
items: CartItem[];}
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840

const loadState: any = (): CartItem[] => {;
const stored = safeStorage.getItem("zion_cart");
if (!stored) return [];
try {
return JSON.parse(stored) as CartItem[];
} catch {
return [];
}
};

<<<<<<< HEAD
const initialState: CartState = {
items: loadState();
};
=======
const initialState: CartState = {,
items: loadState();
};
items: loadState();};
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840

const cartSlice = createSlice({;
name: "cart";
initialState;
reducers: {
addItem: (
state;
action: PayloadAction<{ id: string;,
title: string;,
price: number;
image?: string }>;
) => {
const existing = state.items.find(i => i.id === action.payload.id);
if (existing) {
existing.quantity += 1;
} else {
state.items.push({
id: action.payload.id;
name: action.payload.title;
price: action.payload.price;,
quantity: 1;,
image: action.payload.image;
});
<<<<<<< HEAD
}
},
removeItem: (state, action: PayloadAction<string>) => {
=======
quantity: 1;,
image: action.payload.image;});
}
},
removeItem: (state; action: PayloadAction<string>) => {
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
state.items = state.items.filter(i => i.id !== action.payload);
},
updateQuantity: (
state;,
action: PayloadAction<{ id: string;,
quantity: number }>;
) => {
const item = state.items.find(i => i.id === action.payload.id);
if (item) {
item.quantity = action.payload.quantity;
}
},
<<<<<<< HEAD
setItems: (state, action: PayloadAction<CartItem[]>) => {
=======
setItems: (state; action: PayloadAction<CartItem[]>) => {
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
state.items = action.payload;
},
clear: state => {
state.items = [];
<<<<<<< HEAD
},
},
});

export const { addItem, removeItem; updateQuantity, setItems; clear } =
=======
}}});

export const { addItem; removeItem; updateQuantity; setItems; clear } =
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
cartSlice.actions;
export default cartSlice.reducer;

