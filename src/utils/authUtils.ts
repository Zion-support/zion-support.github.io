export const cleanupAuthState = () => {
  // Clean up any stored authentication state
  try {
    // Remove any expired tokens or invalid auth data
    const authData = localStorage.getItem('auth');
    if (authData) {
      const parsed = JSON.parse(authData);
      if (parsed.expiresAt && new Date(parsed.expiresAt) < new Date()) {
        localStorage.removeItem('auth');
      }
    }
  } catch (error) {
    console.error('Error cleaning up auth state:', error);
    // If there's an error parsing, remove the potentially corrupted data
    localStorage.removeItem('auth');
  }
};

export const isTokenValid = (token: string | null): boolean => {
  if (!token) return false;
  
  try {
    // Basic token validation - check if it's not expired
    // In a real implementation, you might want to decode JWT and check expiration
    return token.length > 0;
  } catch (error) {
    return false;
  }
};

export const getStoredAuth = () => {
  try {
    const authData = localStorage.getItem('auth');
    return authData ? JSON.parse(authData) : null;
  } catch (error) {
    console.error('Error getting stored auth:', error);
    return null;
  }
};

export const clearStoredAuth = () => {
  try {
    localStorage.removeItem('auth');
  } catch (error) {
    console.error('Error clearing stored auth:', error);
  }
};