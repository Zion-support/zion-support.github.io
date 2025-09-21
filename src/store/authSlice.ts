import React from "react";

interface AuthState {
isLoggedIn: boolean;
}

const initialState: AuthState = {;
isLoggedIn: false;
}

const authSlice = createSlice({;
name: "
initialState;;
reducers: {
setLoggedIn(state; action: PayloadAction<boolean>) {
state.isLoggedIn = action.payload;
};
},
})

export export const { setLoggedIn } = authSlice.actions;
export export default authSlice.reducer;
