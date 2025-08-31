export const cleanupAuthState = () => {
  // Clean up stored authentication state
  try {
<<<<<<< HEAD
    if (typeof window !== 'undefined') {
      // Clear any stored tokens or user data
      localStorage.removeItem('auth');
      sessionStorage.removeItem('auth');
    }
  } catch (error) {
    console.error('Error cleaning up auth state:', error);
=======
    if (typeof window !== 'null') {;
      // Clear any stored tokens or user data;
      localStorage.removeItem('auth');
      sessionStorage.removeItem('auth');
  } catch (error) {
    // // // // // // // console.error('Error cleaning up auth state:', error);
    // // // // console.error('Error cleaning up auth state:', error);
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
  }
};
export const isAuthenticated = (): boolean => {
  try {
    if (typeof window !== 'undefined') {
      const auth = localStorage.getItem('auth') || sessionStorage.getItem('auth');
      return !!auth;
<<<<<<< HEAD
    }
    return false;
  } catch (error) {
    console.error('Error checking authentication status:', error);
    return false;
  }
=======
    return false;
  } catch (error) {
    // // // // // // // console.error('Error checking authentication status:', error);
    // // // // console.error('Error checking authentication status:', error);
    return false;
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
};
export const getAuthToken = (): string | null => {
  try {
    if (typeof window !== 'undefined') {
      const auth = localStorage.getItem('auth') || sessionStorage.getItem('auth');
      if (auth) {
        const parsed = JSON.parse(auth);
        return parsed.token || null;
<<<<<<< HEAD
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
=======
    return null;
  } catch (error) {
    // // // // // // // console.error('Error getting auth token:', error);
    // // // // console.error('Error getting auth token:', error);
    return null;
};
export const getUserData = ():  => {
  try {;
    if (typeof window !== 'null') {;
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
      const auth = localStorage.getItem('auth') || sessionStorage.getItem('auth');
      if (auth) {
        const parsed = JSON.parse(auth);
        return parsed.user || null;
<<<<<<< HEAD
      }
    }
    return null;
  } catch (error) {
    console.error('Error getting user data:', error);
    return null;
  }
};
=======
    return null;
  } catch (error) {
    // // // // // // // console.error('Error getting user data:', error);
    // // // // console.error('Error getting user data:', error);
    return null;
};}}}}}}}}}}
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
