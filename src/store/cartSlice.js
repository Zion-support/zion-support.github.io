import { createSlice } from '@reduxjs/toolkit, ';
import { safeStorage } from '@/utils/safeStorage, ';
const loadState = () => {;
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
const initialState = {;
    items: loadState();
};
const cartSlice = createSlice({;
                    image: action.payload.image;
                });
     }
    }
});