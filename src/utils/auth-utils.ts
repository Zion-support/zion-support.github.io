/**
 * Authentication utility functions
 */
/**
 * Cleans up authentication state by removing stored tokens and user data
 */
export const cleanupAuthState = (): void => {
  try {
    // Clear localStorage
    if (typeof window !== 'undefined') {
      localStorage.removeItem('auth');
      localStorage.removeItem('user');
      localStorage.removeItem('tokens');
      localStorage.removeItem('supabase.auth.token');
    }
    
    // Clear sessionStorage
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('auth');
      sessionStorage.removeItem('user');
      sessionStorage.removeItem('tokens');
      sessionStorage.removeItem('supabase.auth.token');
    }
    
    // Clear cookies (if using js-cookie or similar)
    // This would need to be implemented based on your cookie library
    
    console.log('Authentication state cleaned up successfully');
  } catch (error) {
    console.error('Error cleaning up authentication state:', error);
  }
};
/**
 * Checks if user is authenticated
 */
export const isAuthenticated = (): boolean => {
  try {
    if (typeof window === 'undefined') return false;
    
    const auth = localStorage.getItem('auth') || sessionStorage.getItem('auth');
    const tokens = localStorage.getItem('tokens') || sessionStorage.getItem('tokens');
    
    return !!(auth && tokens);
  } catch (error) {
    console.error('Error checking authentication status:', error);
    return false;
  }
};
/**
 * Gets stored authentication tokens
 */
export const getStoredTokens = (): { accessToken?: string; refreshToken?: string } | null => {
  try {
    if (typeof window === 'undefined') return null;
    
    const tokens = localStorage.getItem('tokens') || sessionStorage.getItem('tokens');
    return tokens ? JSON.parse(tokens) : null;
  } catch (error) {
    console.error('Error getting stored tokens:', error);
    return null;
  }
};
/**
 * Stores authentication tokens
 */
export const storeTokens = (tokens: { accessToken: string; refreshToken?: string }): void => {
  try {
    if (typeof window === 'undefined') return;
    
    const tokenData = JSON.stringify(tokens);
    localStorage.setItem('tokens', tokenData);
    sessionStorage.setItem('tokens', tokenData);
  } catch (error) {
    console.error('Error storing tokens:', error);
  }
};