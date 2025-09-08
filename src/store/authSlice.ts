import { createSlice, PayloadAction  } from '@reduxjs/toolkit';

interface AuthState {

  isLoggedIn: boolean;
  user:  | null;
  token: string | null;

}

const initialState: AuthState = {
  isLoggedIn: false,
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

export const { setLoggedIn } = authSlice.actions;
export default authSlice.reducer;
