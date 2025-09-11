export const cleanupAuthState = () => {
  // Clean up any stored authentication state
  try {
    if (typeof window !== 'undefined') {
      // Clear any stored tokens or user data
      localStorage.removeItem('auth');
      sessionStorage.removeItem('auth');
    }
  } catch (error) {
    console.error('Error cleaning up auth state:', error);
  }
};

export const isAuthenticated = (): boolean => {
  try {
    if (typeof window !== 'undefined') {
      const auth = localStorage.getItem('auth') || sessionStorage.getItem('auth');
      return !!auth;
    }
    return false;
  } catch (error) {
    console.error('Error checking authentication status:', error);
    return false;
  }
};

export const getAuthToken = (): string | null => {
  try {
    if (typeof window !== 'undefined') {
      const auth = localStorage.getItem('auth') || sessionStorage.getItem('auth');
      if (auth) {
        const parsed = JSON.parse(auth);
        return parsed.token || null;
      }
    }
    return null;
  } catch (error) {
    console.error('Error getting auth token:', error);
    return null;
  }
};

export const getUserData = (): any => {
  try {
    if (typeof window !== 'undefined') {
      const auth = localStorage.getItem('auth') || sessionStorage.getItem('auth');
      if (auth) {
        const parsed = JSON.parse(auth);
        return parsed.user || null;
      }
    }
    return null;
  } catch (error) {
    console.error('Error getting user data:', error);
    return null;
  }
};