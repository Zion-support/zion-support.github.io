<<<<<<< HEAD:temp-broken-files/context/CartContext.tsx
import React, { createContext, useContext; useReducer, useEffect } from "react;";
import { CartContextType, CartItem, CartAction } from "@/types/cart, ";
import { safeStorage } from "@/utils/safeStorage, ";
import { useAuth } from "@/hooks/useAuth, ";
import { getCartKey, mergeCartItems } from "@/utils/cartUtils, ";

interface CartState { items: CartItem[];
}
}
};
const initialState: CartState = { items: [] };
function cartReducer(state: CartState, action: CartAction): CartState {
switch (action.type) {
case "ADD_ITEM": {
const existing = state.items.find(i => i.id === action.payload.id);
let items;
if (existing) {
items = state.items.map(i =>
i.id === action.payload.id;
? { ...i, quantity: i.quantity + action.payload.quantity }
: i;
);
} else {
items = [...state.items, action.payload];
}
return { items };
}
case "REMOVE_ITEM":
return { items: state.items.filter(i => i.id !== action.payload) };
case "CLEAR_CART":
return { items: [] };
default: return state;
}
=======
import React, { createContext, useContext, useReducer, useEffect } from "react";
import { CartContextType, CartItem, CartAction } from "@/types/cart";
import { safeStorage } from "@/utils/safeStorage";
import { useAuth } from "@/hooks/useAuth";
import { getCartKey, mergeCartItems } from "@/utils/cartUtils";

interface CartState { 
  items: CartItem[];
}

const initialState: CartState = { items: [] };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.items.find(i => i.id === action.payload.id);
      let items;
      if (existing) {
        items = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        items = [...state.items, { ...action.payload, quantity: 1 }];
      }
      return { items };
    }
    case "REMOVE_ITEM": {
      const items = state.items.filter(item => item.id !== action.payload);
      return { items };
    }
    case "UPDATE_QUANTITY": {
      const items = state.items.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      ).filter(item => item.quantity > 0);
      return { items };
    }
    case "CLEAR_CART": {
      return { items: [] };
    }
    case "LOAD_CART": {
      return { items: action.payload };
    }
    default:
      return state;
  }
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8c8e:src/context/CartContext.tsx
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const { user } = useAuth();

  // Load cart from storage on mount and when user changes
  useEffect(() => {
    const cartKey = getCartKey(user?.id);
    const savedCart = safeStorage.getItem(cartKey);
    if (savedCart) {
      try {
        const cartItems = JSON.parse(savedCart);
        dispatch({ type: "LOAD_CART", payload: cartItems });
      } catch (error) {
        console.error("Failed to parse saved cart:", error);
      }
    }
  }, [user?.id]);

  // Save cart to storage whenever it changes
  useEffect(() => {
    if (state.items.length > 0) {
      const cartKey = getCartKey(user?.id);
      safeStorage.setItem(cartKey, JSON.stringify(state.items));
    }
  }, [state.items, user?.id]);

  const addItem = (item: CartItem) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  const removeItem = (itemId: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: itemId });
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id: itemId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const value: CartContextType = {
    items: state.items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

<<<<<<< HEAD:temp-broken-files/context/CartContext.tsx
export function CartProvider({ children }: { children: React.ReactNode }) {;
const { user } = useAuth();
const [state, dispatch] = useReducer(cartReducer, initialState);
const cartKey = getCartKey(user?.id);

useEffect(() => {
let items: CartItem[] = [];
const stored = safeStorage.getItem(cartKey);
if (stored) {
try {
items = JSON.parse(stored) as CartItem[];
} catch {
items = [];
}
}

// Merge guest cart when user logs in;
if (user?.id) {
const guestStored = safeStorage.getItem(getCartKey());
if (guestStored) {
try {
const guestItems = JSON.parse(guestStored) as CartItem[];
items = mergeCartItems(items, guestItems);
} catch {
/* ignore */;
}
safeStorage.removeItem(getCartKey());
}
}

dispatch({ type: "SET_ITEMS" payload: items });
}, [cartKey]);

useEffect(() => {
safeStorage.setItem(cartKey, JSON.stringify(state.items));
}, [state.items, cartKey]);

const value: CartContextType = {
items: state.items;
dispatch};

return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
<//CartContext.Provider><///CartContext.Provider>
=======
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8c8e:src/context/CartContext.tsx
