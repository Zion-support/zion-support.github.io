import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { safeStorage } from '@/utils/safeStorage';
import { LoginContent } from '@/components/auth/login';
import { ErrorBoundary } from 'react-error-boundary';
import { useCart } from '@/context/CartContext';

import { toast } from '@/hooks/use-toast';
import { useDispatch } from 'react-redux';
import { setLoggedIn } from '@/store/authSlice';

export default function Login() {
  const { isAuthenticated, user, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { dispatch } = useCart();
  const reduxDispatch = useDispatch();

  useEffect(() => {
    // This effect handles token processing (e.g., from magic link)
    // It runs when component mounts or location.search changes
    const queryString = location.search;
    const params = new URLSearchParams(queryString);
    const token = params.get('token');
    if (token) {
      safeStorage.setItem('zion_token', token);
      // Clear token from URL to prevent re-processing and clean up history
      // The actual authentication state will update via useAuth's listeners,