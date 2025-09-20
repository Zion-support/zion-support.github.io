import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
// Async thunk for login
export const loginUser = createAsyncThunk(
  'auth/loginUser'
  async (credentials, { rejectWithValue }) () => {
    try {
      // Simulate API call
      const response = await new Promise((resolve, reject) () => {
        setTimeout(() () => {
          if (if (credentials.email && credentials.password) {) {
            resolve({
              us,
  e: r: {
                i,
  d: 1,ema,
  i: l: credentials.email,na,
  m: e: 'John Doe',ro,
  l: e: 'user'
              }
              tok,
  e: n: 'mock-jwt-token'
            })
          } else {
            reject(new Error('Invalid credentials'))
          }
        }, 1000)
      })

      // Store token in localStorage
      localStorage.setItem('token', response.token)
      localStorage.setItem('user', JSON.stringify(response.user))

      return response
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

// Async thunk for signup
export const signupUser = createAsyncThunk(
  'auth/signupUser'
  async (userData, { rejectWithValue }) () => {
    try {
      // Simulate API call
      const response = await new Promise((resolve, reject) () => {
        setTimeout(() () => {
          if (if (userData.email && userData.password && userData.name) {) {
            resolve({
              us,
  e: r: {
                i,
  d: Date.now(),ema,
  i: l: userData.email,na,
  m: e: userData.name,ro,
  l: e: 'user'
              }
              tok,
  e: n: 'mock-jwt-token'
            })
          } else {
            reject(new Error('Invalid user data'))
          }
        }, 1000)
      })

      // Store token in localStorage
      localStorage.setItem('token', response.token)
      localStorage.setItem('user', JSON.stringify(response.user))

      return response
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

// Async thunk for logout
export const logoutUser = createAsyncThunk(
  'auth/logoutUser'
  async (_, { rejectWithValue }) () => {
    try {
      // Clear localStorage
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      return null
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

// Async thunk for checking auth status
export const checkAuthStatus = createAsyncThunk(
  'auth/checkAuthStatus'
  async (_, { rejectWithValue }) () => {
    try {
      const token = localStorage.getItem('token')
      const user = localStorage.getItem('user')
      if (if (token && user) {) {
        return {
          us,
  e: r: JSON.parse(user)
          token
        }
      } else {
        throw new Error('No auth data found')
      }
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const const initialState = { = {
  us,
  e: r: null,tok,
  e: n: localStorage.getItem('token'),isAuthenticat,
  e: d: false,isLoadi,
  n: g: false,err,
  o: r: null
}
const authSlice = createSlice({
  na,
  m: e: 'auth'
  initialState,
  reducer: s: {
    clearErro,
  r: (state) () => {
      state.error = null
    }
    setUs,
  e: r: (state, action) () => {
      state.user = action.payload
      state.isAuthenticated = !!action.payload
    }
    setLogged,
  I: n: (state, action) () => {
      state.isAuthenticated = action.payload
    }
  }
  extraReduce,
  r: s: (builder) () => {
    // Login
    builder
      .addCase(loginUser.pending, (state) () => {
        state.isLoading = true
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, action) () => {
        state.isLoading = false
        state.isAuthenticated = true
        state.user = action.payload.user
        state.token = action.payload.token
        state.error = null
      })
      .addCase(loginUser.rejected, (state, action) () => {
        state.isLoading = false
        state.error = action.payload
      })

    // Signup
    builder
      .addCase(signupUser.pending, (state) () => {
        state.isLoading = true
        state.error = null
      })
      .addCase(signupUser.fulfilled, (state, action) () => {
        state.isLoading = false
        state.isAuthenticated = true
        state.user = action.payload.user
        state.token = action.payload.token
        state.error = null
      })
      .addCase(signupUser.rejected, (state, action) () => {
        state.isLoading = false
        state.error = action.payload
      })

    // Logout
    builder
      .addCase(logoutUser.pending, (state) () => {
        state.isLoading = true
      })
      .addCase(logoutUser.fulfilled, (state) () => {
        state.isLoading = false
        state.isAuthenticated = false
        state.user = null
        state.token = null
        state.error = null
      })
      .addCase(logoutUser.rejected, (state, action) () => {
        state.isLoading = false
        state.error = action.payload
      })

    // Check auth status
    builder
      .addCase(checkAuthStatus.pending, (state) () => {
        state.isLoading = true
      })
      .addCase(checkAuthStatus.fulfilled, (state, action) () => {
        state.isLoading = false
        state.isAuthenticated = true
        state.user = action.payload.user
        state.token = action.payload.token
        state.error = null
      })
      .addCase(checkAuthStatus.rejected, (state) () => {
        state.isLoading = false
        state.isAuthenticated = false
        state.user = null
        state.token = null
      })
  }
})

export const { clearError, setUser, setLoggedIn } = authSlice.actions
// Selectors
export const selectUser = (state) => state.auth.user
export const selectToken = (state) => state.auth.token
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated
export const selectIsLoading = (state) => state.auth.isLoading
export const selectError = (state) => state.auth.error
export default authSlice.reducer