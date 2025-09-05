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
>>>>>>> main
