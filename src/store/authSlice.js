import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { safeStorage } from '../utils/safeStorage';

// Async thunks
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, { rejectWithValue }) => {
    try {
      // Simulate API call
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            user: {
              id: 1,
              email: credentials.email,
              name: 'John Doe',
              role: 'user'
            },
            token: 'mock-jwt-token'
          });
        }, 1000);
      });

      // Store token
      safeStorage.setItem('token', response.token);
      safeStorage.setItem('user', JSON.stringify(response.user));

      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const signupUser = createAsyncThunk(
  'auth/signupUser',
  async (userData, { rejectWithValue }) => {
    try {
      // Simulate API call
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            user: {
              id: 1,
              email: userData.email,
              name: userData.name,
              role: 'user'
            },
            token: 'mock-jwt-token'
          });
        }, 1000);
      });

      // Store token
      safeStorage.setItem('token', response.token);
      safeStorage.setItem('user', JSON.stringify(response.user));

      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, { rejectWithValue }) => {
    try {
      // Clear storage
      safeStorage.removeItem('token');
      safeStorage.removeItem('user');
      return true;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const checkAuthStatus = createAsyncThunk(
  'auth/checkAuthStatus',
  async (_, { rejectWithValue }) => {
    try {
      const token = safeStorage.getItem('token');
      const user = safeStorage.getItem('user');

      if (!token || !user) {
        throw new Error('No authentication data found');
      }

      // Simulate API call to verify token
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            user: JSON.parse(user),
            token: token
          });
        }, 500);
      });

      return response;
    } catch (error) {
      // Clear invalid data
      safeStorage.removeItem('token');
      safeStorage.removeItem('user');
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  user: null,
  token: safeStorage.getItem('token'),
  isAuthenticated: false,
  isLoading: false,
  error: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = !!action.payload;
    },
    setLoggedIn: (state, action) => {
      state.isAuthenticated = action.payload;
    }
  },
  extraReducers: (builder) => {
    // Login
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    // Signup
    builder
      .addCase(signupUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    // Logout
    builder
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
        state.error = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    // Check auth status
    builder
      .addCase(checkAuthStatus.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkAuthStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(checkAuthStatus.rejected, (state) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.token = null;
      });
  }
});

export const { clearError, setUser, setLoggedIn } = authSlice.actions;

// Selectors
export const selectUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectIsLoading = (state) => state.auth.isLoading;
export const selectError = (state) => state.auth.error;

export default authSlice.reducer;