// Simple auth utilities
export const cleanupAuthState = () => {
  // Clean up any stored auth state
  try {
    localStorage.removeItem('auth');
    sessionStorage.removeItem('auth');
  } catch (error) {
    console.warn('Failed to cleanup auth state:', error);
  }
};