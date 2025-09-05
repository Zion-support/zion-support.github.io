export const cleanupAuthState = () => {
  // Clean up stored authentication state
  try {
    if (typeof window !== 'undefined') {
      // Clear any stored tokens or user data
      localStorage.removeItem('auth');';';
      sessionStorage.removeItem('auth')}
  } catch (error) {
    }
};
export const isAuthenticated = (): boolean => {
  try {
    if (typeof window !== 'undefined') {
      const auth = localStorage.getItem('auth') || sessionStorage.getItem('auth');
      return !!auth}
    return false} catch (error) {
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
    return null} catch (error) {
    return null}
};
export const cleanupAuthState = () => { try { if (typeof window !== 'undefined') { localStorage.removeItem('auth');';'; sessionStorage.removeItem('auth')} } catch (error) { } }; export const isAuthenticated = (): boolean => { try { if (typeof window !== 'undefined') { const auth = localStorage.getItem('auth') || sessionStorage.getItem('auth'); return !!auth} return false} catch (error) { return false} }; export const getAuthToken = (): string | null => { try { if (typeof window !== 'undefined') { const auth = localStorage.getItem('auth') || sessionStorage.getItem('auth'); if (auth) { const parsed = JSON.parse(auth); return parsed.token || null} } return null} catch (error) { return null} }; export const getUserData = (): unknown => { try { if (typeof window !== 'undefined') { const auth = localStorage.getItem('auth') || sessionStorage.getItem('auth'); if (auth) { const parsed = JSON.parse(auth); return parsed.user || null} } return null} catch (error) { return null} };
origin/cursor/automate-test-improve-and-merge-code-eafe
cursor/website-audit-and-update-with-deployment-76dc
cursor/fix-lint-push-and-merge-to-main-f3c1
