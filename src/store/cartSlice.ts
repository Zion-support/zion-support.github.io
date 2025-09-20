import { createSlice, PayloadAction  } from "@reduxjs/toolkit, ";
import { CartItem } from "@/types/cart, ";
import { safeStorage } from "@/utils/safeStorage, ";

interface CartState {
