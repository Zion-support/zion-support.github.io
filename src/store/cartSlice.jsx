import { createSlice } from '@reduxjs/toolkit';
import { safeStorage } from '@/utils/safeStorage';
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
    items: loadState(),
};
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
                state.items({
                    id: action.payload.id,
                    name: action.payload.title,
                    price: action.payload.price,
                    quantity: 1,
                    image: action.payload.image,
                });
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
            state.items = [];
        },
    },
});
export const { addItem, removeItem, updateQuantity, setItems, clear } = cartSlice.actions;
export default cartSlice.reducer;
