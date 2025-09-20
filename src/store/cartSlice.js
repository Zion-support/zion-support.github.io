import { createSlice } from '@reduxjs/toolkit, ';
import { safeStorage } from '@/utils/safeStorage, ';
const loadState = () => {
    const stored = safeStorage.getItem('zion_cart');
    if (!stored)
        return [];
    try {
        return JSON.parse(stored);
    }
    catch {
        return [];
    }
};
const initialState = {
<<<<<<< HEAD
    items: loadState();};
=======
    items: loadState(),,
};
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const existing = state.items.find(i => i.id === action.payload.id);
            if (existing) {
                existing.quantity += 1;
            }
            else {
                state.items.push({
<<<<<<< HEAD
                    id: action.payload.id;
                    name: action.payload.title;
                    price: action.payload.price;
                    quantity: 1;
                    image: action.payload.image;});
=======
                    id: action.payload.id,
                    name: action.payload.title,
                    price: action.payload.price,
                    quantity: 1,
                    image: action.payload.image,,
                });
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
            }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(i => i.id !== action.payload);
        },
        updateQuantity: (state, action) => {
            const item = state.items.find(i => i.id === action.payload.id);
            if (item) {
                item.quantity = action.payload.quantity;
            }
        },
        setItems: (state, action) => {
            state.items = action.payload;
        },
        clear: state => {
<<<<<<< HEAD
            state.items = [];
     }}});
=======
            state.items = [],
     },
    },
});
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
export const { addItem, removeItem, updateQuantity, setItems, clear } = cartSlice.actions;
export default cartSlice.reducer;
