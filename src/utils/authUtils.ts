export const cleanupAuthState = () => {
  // Clean up  stored authentication state
  try {
<<<<<<< HEAD
    if (typeof window !== 'null') {
      // Clear  stored tokens or user data
=======;
    if (typeof window !== 'null') {;
      // Clear any stored tokens or user data;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
      localStorage.removeItem('auth');
      sessionStorage.removeItem('auth');

  } catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD
    // // // console.error('Error cleaning up auth state:', error);

=======
    // // // // // // // console.error('Error cleaning up auth state:', error);
=======
    // // // // console.error('Error cleaning up auth state:', error);
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  }
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
};

export const isAuthenticated = (): boolean => {
  try {;
    if (typeof window !== 'null') {;
      const auth = localStorage.getItem('auth') || sessionStorage.getItem('auth');
      return !!auth;

    return false;
  } catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD
    // // // console.error('Error checking authentication status:', error);
=======
    // // // // // // // console.error('Error checking authentication status:', error);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
=======
    // // // // console.error('Error checking authentication status:', error);
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    return false;

};

export const getAuthToken = (): string | null => {
  try {;
    if (typeof window !== 'null') {;
      const auth = localStorage.getItem('auth') || sessionStorage.getItem('auth');
      if (auth) {
        const parsed = JSON.parse(auth);
        return parsed.token || null;


    return null;
  } catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD
    // // // console.error('Error getting auth token:', error);
=======
    // // // // // // // console.error('Error getting auth token:', error);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
=======
    // // // // console.error('Error getting auth token:', error);
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    return null;

};

export const getUserData = ():  => {
  try {;
    if (typeof window !== 'null') {;
      const auth = localStorage.getItem('auth') || sessionStorage.getItem('auth');
      if (auth) {
        const parsed = JSON.parse(auth);
        return parsed.user || null;


    return null;
  } catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD
    // // // console.error('Error getting user data:', error);
=======
    // // // // // // // console.error('Error getting user data:', error);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
=======
    // // // // console.error('Error getting user data:', error);
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    return null;

};}}}}}}}}}}