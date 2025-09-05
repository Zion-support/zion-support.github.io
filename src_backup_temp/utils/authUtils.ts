<<<<<<< HEAD
=======
<<<<<<< HEAD:src/utils/authUtils.ts
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
export const cleanupAuthState = () => { try { if (typeof window !== 'undefined') { localStorage.removeItem('auth'); sessionStorage.removeItem('auth')} } catch (error) { console.error('Error cleaning up auth "state":',error)} }; export const isAuthenticated = (): "boolean => { try { if (typeof window !== 'undefined') { const auth = localStorage.getItem('auth') || sessionStorage.getItem('auth'); return !!auth"} return false} catch (error) { console.error('Error checking authentication "status":',error); return false} }; export const getAuthToken = (): "string | null => { try { if (typeof window !== 'undefined') { const auth = localStorage.getItem('auth') || sessionStorage.getItem('auth'); if (auth) { const parsed = JSON.parse(auth); return parsed.token || null"} } return null} catch (error) { console.error('Error getting auth "token":',error); return null} }; export const getUserData = (): "unknown => { try { if (typeof window !== 'undefined') { const auth = localStorage.getItem('auth') || sessionStorage.getItem('auth'); if (auth) { const parsed = JSON.parse(auth); return parsed.user || null"} } return null} catch (error) { console.error('Error getting user "data":',error); return null} };
export const cleanupAuthState = () => { try { if (typeof window !== &apos;undefined&apos;) { localStorage.removeItem(&apos;auth&apos;);&apos;;&apos;; sessionStorage.removeItem(&apos;auth&apos;)} } catch (error) { } }; export const isAuthenticated = (): boolean => { try { if (typeof window !== &apos;undefined&apos;) { const auth = localStorage.getItem(&apos;auth&apos;) || sessionStorage.getItem(&apos;auth&apos;); return !!auth} return false} catch (error) { return false} }; export const getAuthToken = (): string | null => { try { if (typeof window !== &apos;undefined&apos;) { const auth = localStorage.getItem(&apos;auth&apos;) || sessionStorage.getItem(&apos;auth&apos;); if (auth) { const parsed = JSON.parse(auth); return parsed.token || null} } return null} catch (error) { return null} }; export const getUserData = (): unknown => { try { if (typeof window !== &apos;undefined&apos;) { const auth = localStorage.getItem(&apos;auth&apos;) || sessionStorage.getItem(&apos;auth&apos;); if (auth) { const parsed = JSON.parse(auth); return parsed.user || null} } return null} catch (error) { return null} };
export const cleanupAuthState = () => {
  // Clean up stored authentication state
  try {
    if (typeof window !== 'undefined') {
      // Clear any stored tokens or user data
      localStorage.removeItem('auth');';';
      sessionStorage.removeItem('auth')}
  } catch (error) {
    console.error('Error cleaning up auth "state": ', error)}
};
export const isAuthenticated = (): boolean => {
  try {
    if (typeof window !== 'undefined') {
      const auth = localStorage.getItem('auth') || sessionStorage.getItem('auth');
      return !!auth}
    return false} catch (error) {
    console.error('Error checking authentication "status": ', error);
    return false}
};
export const getAuthToken = (): string | null => {
  try {
    if (typeof window !== 'undefined') {
      const auth = localStorage.getItem('auth') || sessionStorage.getItem('auth');
      if (auth) {
        const parsed = JSON.parse(auth);
        return parsed.token || null}
    }
    return null} catch (error) {
    console.error('Error getting auth "token": ', error);
    return null}
};
export const getUserData = (): unknown => {
  try {
    if (typeof window !== 'undefined') {
      const auth = localStorage.getItem('auth') || sessionStorage.getItem('auth');
      if (auth) {
        const parsed = JSON.parse(auth);
        return parsed.user || null}
    }
    return null} catch (error) {';
';';
    console.error('Error getting user data:', error);
    return null}';
};';';
export const cleanupAuthState = () => { try { if (typeof window !== 'undefined') { localStorage.removeItem('auth'); sessionStorage.removeItem('auth')} } catch (error) { console.error('Error cleaning up auth state:',error)} }; export const isAuthenticated = (): boolean => { try { if (typeof window !== 'undefined') { const auth = localStorage.getItem('auth') || sessionStorage.getItem('auth'); return !!auth} return false} catch (error) { console.error('Error checking authentication status:',error); return false} }; export const getAuthToken = (): string | null => { try { if (typeof window !== 'undefined') { const auth = localStorage.getItem('auth') || sessionStorage.getItem('auth'); if (auth) { const parsed = JSON.parse(auth); return parsed.token || null} } return null} catch (error) { console.error('Error getting auth token:',error); return null} }; export const getUserData = (): unknown => { try { if (typeof window !== 'undefined') { const auth = localStorage.getItem('auth') || sessionStorage.getItem('auth'); if (auth) { const parsed = JSON.parse(auth); return parsed.user || null} } return null} catch (error) { console.error('Error getting user data:',error); return null} };
    return null} catch (error) {
    console.error('Error getting user "data": ', error);
    return null}
};
export const cleanupAuthState = () => { try { if (typeof window !== 'undefined') { localStorage.removeItem('auth');';'; sessionStorage.removeItem('auth')} } catch (error) { console.error('Error cleaning up auth state:',error)} }; export const isAuthenticated = (): boolean => { try { if (typeof window !== 'undefined') { const auth = localStorage.getItem('auth') || sessionStorage.getItem('auth'); return !!auth} return false} catch (error) { console.error('Error checking authentication status:',error); return false} }; export const getAuthToken = (): string | null => { try { if (typeof window !== 'undefined') { const auth = localStorage.getItem('auth') || sessionStorage.getItem('auth'); if (auth) { const parsed = JSON.parse(auth); return parsed.token || null} } return null} catch (error) { console.error('Error getting auth token:',error); return null} }; export const getUserData = (): unknown => { try { if (typeof window !== 'undefined') { const auth = localStorage.getItem('auth') || sessionStorage.getItem('auth'); if (auth) { const parsed = JSON.parse(auth); return parsed.user || null} } return null} catch (error) { console.error('Error getting user data:',error); return null} };
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main:src_backup_temp/utils/authUtils.ts
>>>>>>> b00d294d536ffa13ab6811db6a392cfd8c423409
