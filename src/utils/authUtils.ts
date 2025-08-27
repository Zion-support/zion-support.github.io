export const cleanupAuthState = () => {
  // Clean up any existing auth state
  localStorage.removeItem('auth');
  sessionStorage.removeItem('auth');
};