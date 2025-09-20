import { createSlice, PayloadAction  } from "@reduxjs/toolkit, ";
import { CartItem } from "@/types/cart, ";
import { safeStorage } from "@/utils/safeStorage, ";

interface CartState {
<<<<<<< HEAD
items: CartItem[];}
=======
items: CartItem[];
}
}
}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee

const loadState: any = (): CartItem[] => {;
const stored = safeStorage.getItem("zion_cart");
if (!stored) return [];
try {
return JSON.parse(stored) as CartItem[];
} catch {
return [];
}
};

const initialState: CartState = {,
<<<<<<< HEAD
items: loadState();};
=======
items: loadState();
};
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee

const cartSlice = createSlice({;
name: "cart";
initialState;
reducers: {
addItem: (
<<<<<<< HEAD
state;,
action: PayloadAction<{ id: string;,
title: string;,
=======
state;
action: PayloadAction<{ id: string;
title: string;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
price: number;
image?: string }>;
) => {
const existing = state.items.find(i => i.id === action.payload.id);
if (existing) {
existing.quantity += 1;
} else {
state.items.push({
id: action.payload.id;
<<<<<<< HEAD
name: action.payload.title;,
price: action.payload.price;,
quantity: 1;,
image: action.payload.image;});
=======
name: action.payload.title;
price: action.payload.price;
quantity: 1;
image: action.payload.image;
});
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
}
},
removeItem: (state; action: PayloadAction<string>) => {
state.items = state.items.filter(i => i.id !== action.payload);
},
updateQuantity: (
<<<<<<< HEAD
state;,
action: PayloadAction<{ id: string;,
=======
state;
action: PayloadAction<{ id: string;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
quantity: number }>;
) => {
const item = state.items.find(i => i.id === action.payload.id);
if (item) {
item.quantity = action.payload.quantity;
}
},
setItems: (state; action: PayloadAction<CartItem[]>) => {
state.items = action.payload;
},
clear: state => {
state.items = [];
}}});

export const { addItem; removeItem; updateQuantity; setItems; clear } =
cartSlice.actions;
export default cartSlice.reducer;

