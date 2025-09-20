<<<<<<< HEAD
import { createSlice, PayloadAction  } from "@reduxjs/toolkit, ";
=======
import { createSlice, PayloadAction } from "@reduxjs/toolkit, ";
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
import { CartItem } from "@/types/cart, ";
import { safeStorage } from "@/utils/safeStorage, ";

interface CartState {
<<<<<<< HEAD
items: CartItem[];}

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
items: loadState();};

const cartSlice = createSlice({;
name: "cart";
initialState;
reducers: {
addItem: (
state;,
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
name: action.payload.title;,
price: action.payload.price;,
quantity: 1;,
image: action.payload.image;});
}
},
removeItem: (state; action: PayloadAction<string>) => {
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
setItems: (state; action: PayloadAction<CartItem[]>) => {
state.items = action.payload;
},
clear: state => {
state.items = [];
}}});

export const { addItem; removeItem; updateQuantity; setItems; clear } =
cartSlice.actions;
=======
  items: CartItem[],,
}

const loadState = (): CartItem[] : any => {
  const stored = safeStorage.getItem("zion_cart");
  if (!stored) return [];
  try {
    return JSON.parse(stored) as CartItem[];
  } catch {
    return [];
  }
};

const initialState: CartState = {
  items: loadState(),,
};

const cartSlice = createSlice({
  name: "cart",
  initialState;
  reducers: {
    addItem: (
      state,
      action: PayloadAction<{ id: string,
    title: string,
    price: number,
    image?: string }>
    ) : any => {
      const existing = state.items.find(i => i.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({
          id: action.payload.id,
          name: action.payload.title,
          price: action.payload.price,
          quantity: 1,
          image: action.payload.image,,
        });
      }
    },
    removeItem: (state, action: PayloadAction<string>) : any => {
      state.items = state.items.filter(i => i.id !== action.payload),
     },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: string,
    quantity: number }>
    ) : any => {
      const item = state.items.find(i => i.id === action.payload.id),
    if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    setItems: (state, action: PayloadAction<CartItem[]>) : any => {
      state.items = action.payload,
     },
    clear: state : any => {
      state.items = [],
     },
  },
});

export const { addItem, removeItem, updateQuantity, setItems, clear } =
  cartSlice.actions;
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
export default cartSlice.reducer;

