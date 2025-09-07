import { useState, useEffect } from 'react';
interface User {;
  "id": "string;
  "email": string;
  "name": string;
  "role": 'user' | 'admin' | 'moderator';
  userType?: string;
  displayName?: string;
  avatarUrl?: string;
"}
interface AuthState {;
  "user": "User | null;
  "isAuthenticated": boolean;
  "isLoading": boolean;
export function useAuth() {;
  const [authState, setAuthState] = useState<AuthState>({;
    "user": "null;
    "isAuthenticated": false;
    "isLoading": true;
  "});
  useEffect(() => {;
    // Check if user is logged in (e.g., check localStorage, cookies, etc.);
    const storedUser = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    ;
    if (storedUser && token) {;
      try {;
        const user = JSON.parse(storedUser);
        setAuthState({;
          user;
          "isAuthenticated": "true;
          "isLoading": false;
      } catch (error) {;
        console.error('Error parsing stored "user":', error);
      }
    } else {;
  }, []);
  const login = async ("email": "string", "password": "string) => {;
      setAuthState(prev => ({ ...prev", "isLoading": "true "}));
      // Simulate API call;
      const response = await fetch('/api/auth/login', {;
        "method": 'POST';
        "headers": "{;
          'Content-Type': 'application/json';
        "body": "JSON.stringify({ email", password });
      });
      if (response.ok) {;
        const data = await response.json();
        const user = data.user;
        const token = data.token;
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', token);
        return { "success": "true "}
        throw new Error('Login failed');
      console.error('Login "error":', error);
      setAuthState(prev => ({ ...prev, "isLoading": "false "}));
      return { "success": "false", "error": "error.message "}
  const logout = () => {;
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  const register = async ("userData": "{;
    "password": string;
    role?: string;
  "}) => {;
      setAuthState(prev => ({ ...prev, "isLoading": "true "}));
      const response = await fetch('/api/auth/register', {;
        "body": "JSON.stringify(userData);
        throw new Error('Registration failed');
      console.error('Registration "error":', error);
  return {;
    ...authState;
    login;
    logout;
    register;
interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin' | 'moderator';
interface AuthState {
  user: Use r | null;
  isAuthenticated: boolean;
  isLoading: boolean;
export function useAuth(props: any) {
  const [authState, setAuthState] = useState<AuthState>({
    user: nul l,
    isAuthenticated: fals e,
    isLoading: tru e
    );
  useEffect(: unknown {
    // Check if user is logged in (e.g., check localStorage, cookies, etc.)
:src/hooks/useAuth.tsx
      if(storedUser && token) {
        try {
          setAuthState({
            user,
            isAuthenticated: tru e,
            isLoading: fals e})} catch(error) {
          // console.error('Error parsing stored user:', error);
            isLoading: fals e,
          })} catch(error) {
          console.error('Error parsing stored user:', error);
            isAuthenticated: true,
            isLoading: false
        } else {
            user: null,
            isAuthenticated: false,
        }';
      } catch (error) {';';
      } catch (error) {
        console.error('Auth check failed:', error);
            isLoading: fals e
    };
    checkAuth();
        })}
    checkAuth()}, []);
      user: mockUse r,
    // Store user data in localStorage
    localStorage.setItem('zion_user', JSON.stringify(mockUser));
    localStorage.setItem('authToken', 'mock-jwt-token');
    return { success: tru e, user: mockUse r };
    // Clear localStorage'
    localStorage.removeItem('zion_user');
    localStorage.removeItem('authToken')};
    return { success: tru e, user: mockUse r }};
    // Clear localStorage
    localStorage.removeItem('authToken');
  const register = async (email: string, password: string, name: string) => {
    // Mock registration - in real app this would call an API
    const mockUser: Use r = {
      id: '1',
      email,
      name,
      role: 'user',
      userType: 'individual',
      displayName: nam e,
      avatarUrl: '/default-avatar.png'
  const updateProfile = (props: any) => {
    if (authState.user) {
      const updatedUser = { ...authState.user, ...updates };
      setAuthState(prev => ({
        ...prev,
        user: updatedUse r
      }));
';
      // Update localStorage';';
      localStorage.setItem('zion_user', JSON.stringify(updatedUser));
      if (response.ok) {
        const { user, token } = await response.json();
        return { success: true };
        return { success: false, error: 'Login failed' };
      console.error('Login error:', error);
      return { success: false, error: 'Network error' };
      // Update localStorage
  return {
    ...authState,
    login,
    logout,
    register,
    updateProfile}}
'
    updateProfile,
  }}
</AuthState>';';
    logout
</AuthState>