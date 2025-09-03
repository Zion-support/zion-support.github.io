<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from 'react'; interface User { id: string; email: string; name: string; :src/store/authSlice.tsx avatar?: string  } avatar?: string} interface AuthState { isLoggedIn: boolean; isAuthenticated: boolean; isLoading: boolean; user: User | null; token: string | null; :src/store/authSlice.tsx error: string | null  } error: string | null} } ; const initialState: AuthState = { isLoggedIn: false, isAuthenticated: false, isLoading: false, user: null, token: null, :src/store/authSlice.tsx error: null}}, error: null}}, setUser: (state, action: PayloadAction<User>) => { state.user = action.payload; state.isAuthenticated = true; state.error = null}, setToken: (state, action: PayloadAction<string>) => { :src/store/authSlice.tsx state.token = action.payload}, logout: state => { state.token = action.payload}, logout: (state) => { state.isLoggedIn = false; state.user = null; state.isAuthenticated = false; state.token = null; state.error = null}, setLoading: (state, action: PayloadAction<boolean>) => { :src/store/authSlice.tsx state.isLoading = action.payload}, setError: (state, action: PayloadAction<string>) => { state.error = action.payload}, clearError: state => { state.error = null}}}); state.isLoading = action.payload}, setError: (state, action: PayloadAction<string>) => { state.error = action.payload}, clearError: (state) => { state.error = null}}}); export const { setLoggedIn, setUser, setToken, logout, setLoading, setError, clearError} = authSlice.actions; export default authSlice.reducer; ;
=======
import React from "react"
  );
export default function Authslice() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Authslice</h1>
        <p className="text-lg text-gray-600 mb-8">
          This is a placeholder component for authslice.
        </p>
      </div>
  )
}
>>>>>>> main
>>>>>>> main
