export const cleanupAuthState = () => {
  // Clean up any stored authentication state
  try {
    localStorage.removeItem('auth');
    sessionStorage.removeItem('auth');
  } catch (error) {
    console.warn('Failed to cleanup auth state:', error);
  }
};

export const getStoredAuthToken = () => {
  try {
    const auth = localStorage.getItem('auth') || sessionStorage.getItem('auth');
    if (auth) {
      const parsed = JSON.parse(auth);
      return parsed.token || null;
    }
    return null;
  } catch (error) {
    console.warn('Failed to get stored auth token:', error);
    return null;
  }
};

export const clearStoredAuth = () => {
  try {
    localStorage.removeItem('auth');
    sessionStorage.removeItem('auth');
  } catch (error) {
    console.warn('Failed to clear stored auth:', error);
  }
};