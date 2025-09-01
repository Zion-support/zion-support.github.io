export function cleanupAuthState(): void {
  try {
    sessionStorage.removeItem('auth');
    localStorage.removeItem('auth');
  } catch (error) {
    // console.error('Error cleaning up auth state:', error);
  }
}

export function isAuthenticated(): boolean {
  try {
    const auth = sessionStorage.getItem('auth') || localStorage.getItem('auth');
    return !!auth;
  } catch (error) {
    // console.error('Error checking authentication status:', error);
    return false;
  }
}

export function getAuthToken(): string | null {
  try {
    const auth = sessionStorage.getItem('auth') || localStorage.getItem('auth');
    if (auth) {
      const parsed = JSON.parse(auth);
      return parsed.token || null;
    }
    return null;
  } catch (error) {
    // console.error('Error getting auth token:', error);
    return null;
  }
}

export function getUserData(): any | null {
  try {
    const auth = sessionStorage.getItem('auth') || localStorage.getItem('auth');
    if (auth) {
      const parsed = JSON.parse(auth);
      return parsed.user || null;
    }
    return null;
  } catch (error) {
    // console.error('Error getting user data:', error);
    return null;
  }
}