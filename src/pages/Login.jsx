import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { safeStorage } from '@/utils/safeStorage';
import { LoginContent } from '@/components/auth/login/LoginContent';
import { ErrorBoundary } from 'react-error-boundary';
import { LoginErrorFallback } from '@/components/auth/login/LoginErrorFallback';
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
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    if (token) {
      safeStorage.setItem('zion_token', token);
      // Clear token from URL to prevent re-processing
      navigate(location.pathname, { replace: true });
    }
  }, [location.search, location.pathname, navigate]);

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      reduxDispatch(setLoggedIn(true));
      const next = new URLSearchParams(location.search).get('next') || '/dashboard';
      navigate(next, { replace: true });
    }
  }, [isAuthenticated, isLoading, navigate, reduxDispatch, location.search]);

  // Render LoginContent if not authenticated and auth is not loading
  if (!isAuthenticated && !isLoading) {
    return (
      <ErrorBoundary FallbackComponent={LoginErrorFallback}>
        <LoginContent />
      </ErrorBoundary>
    );
  }

  // Optional: Render a loading indicator while isLoading is true
  if (isLoading) {
    return <div className="p-4 text-center text-foreground">Loading...</div>; // Or a proper loading spinner component
  }

  // If authenticated and isLoading is false, the useEffect above should have navigated.
  // Return null or a minimal layout if needed, though direct navigation is preferred.
  return null;
}
