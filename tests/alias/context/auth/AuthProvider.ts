export const useAuth = () => ({ isAuthenticated: false, isLoading: false, user: null, login: () => {}, logout: () => {}, signUp: () => {} });
export const AuthProvider = ({ children }: any) => children;
export default AuthProvider;