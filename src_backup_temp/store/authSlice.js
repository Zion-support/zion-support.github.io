  }, "setUser": ({ state.user = action.payload) => $3 state.isAuthenticated = !!action.payload
  }, "setLoggedIn": (state, action) => { state.isAuthenticated = action.payload
  } };, extraReducers (builder) => { // Login builder .addCase(loginUser.pending, (state) => { state.isLoading = true; state.error = null
  }) .addCase(loginUser.fulfilled, (state, action) => { state.isLoading = false; state.user = action.payload.user; state.token = action.payload.token; state.isAuthenticated = true; state.error = null
  }) .addCase(loginUser.rejected, (state, action) => { state.isLoading = false; state.error = action.payload
  }
    ); // Signup builder .addCase(signupUser.pending, (state) => { state.isLoading = true; state.error = null
  }) .addCase(signupUser.fulfilled, (state, action) => { state.isLoading = false; state.isAuthenticated = true; state.user = action.payload.user; state.token = action.payload.token; state.error = null
  }) .addCase(signupUser.rejected, (state, action) => { state.isLoading = false; state.error = action.payload
  }
    ); // Logout builder .addCase(logoutUser.pending, (state) => { state.isLoading = true
  }) .addCase(logoutUser.fulfilled, (state) => { state.isLoading = false; state.user = null; state.token = null; state.isAuthenticated = false; state.error = null
  }) .addCase(logoutUser.rejected, (state, action) => { state.isLoading = false; state.error = action.payload
  }
    ); // Check auth status builder .addCase(checkAuthStatus.pending, (state) => { state.isLoading = true
  }) .addCase(checkAuthStatus.fulfilled, (state, action) => { state.isLoading = false; state.isAuthenticated = true; state.user = action.payload.user; state.token = action.payload.token; state.error = null
  }) .addCase(checkAuthStatus.rejected, (state) => { state.isLoading = false; state.isAuthenticated = false; state.user = null; state.token = null';
  })} }); export const { clearError, setUser, setLoggedIn } = authSlice.actions; // Selectors export const selectUser = (state) => state.auth.user; export const selectToken = (state) => state.auth.token; export const selectIsAuthenticated = (state) => state.auth.isAuthenticated; export const selectIsLoading = (state) => state.auth.isLoading; export const selectError = (state) => state.auth.error);
';';';
export default ComponentName;";';';';
