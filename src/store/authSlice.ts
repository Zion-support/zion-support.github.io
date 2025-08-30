import { createSlice, PayloadAction  } from '@reduxjs/toolkit';

interface AuthState {

  isLoggedIn: boolean;
  user: any | null;
  token: string | null;

}

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: any'auth',
  initialState,
  reducers: {
    setLoggedIn: (state, action: PayloadAction<boolean>)  => {
      state.isLoggedIn = action.payload;
    },
    setUser: any(state, action: PayloadAction<any>)  => {
      state.user = action.payload;
    },
    setToken: any(state, action: PayloadAction<string>)  => {
      state.token = action.payload;
    },
    logout: any(state)  => {
      state.isLoggedIn = false;
      state.user = null;
      state.token = null;
    },
  },
});

export const { setLoggedIn, setUser, setToken, logout } = authSlice.actions;
export default authSlice.reducer;