import { useEffect } from 'react';
<<<<<<< HEAD
=======
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { safeStorage } from '@/utils/safeStorage';
import { LoginForm } from '@/components/auth/login/LoginForm';
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
import { ErrorBoundary } from 'react-error-boundary';
import { LoginErrorFallback } from '@/components/auth/login/LoginErrorFallback';
import { useCart } from '@/context/CartContext';
import { toast } from '@/hooks/use-toast';
import { useDispatch } from 'react-redux';
import { setLoggedIn } from '@/store/authSlice';

export default function Login() {
<<<<<<< HEAD
  const dispatch = useDispatch();
  const { clearCart } = useCart();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

=======
  const { isAuthenticated, user, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { dispatch } = useCart();
  const reduxDispatch = useDispatch();

  useEffect(() => {
    // This effect handles token processing (e.g., from magic link)
    const queryString = location.search;
    const params = new URLSearchParams(queryString);
    const token = params.get('token');
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
    if (token) {
      // Store token in localStorage for now
      localStorage.setItem('zion_token', token);
      // Clear token from URL to prevent re-processing and clean up history
<<<<<<< HEAD
      window.history.replaceState({}, document.title, window.location.pathname);
      
      // Set logged in state
      dispatch(setLoggedIn({ token }));
      
      // Clear cart on login
      clearCart();
      
      // Show success message
      toast({
        title: "Login Successful",
        description: "Welcome to Zion Tech Group!",
      });
      
      // Redirect to home page
      window.location.href = '/';
    }
  }, [dispatch, clearCart]);

  return (
    <ErrorBoundary FallbackComponent={LoginErrorFallback}>
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
        </div>
      </div>
    </ErrorBoundary>
  );
=======
      // The actual authentication state will update via useAuth's listeners,
      // which should trigger the other useEffect.
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

  // Render LoginForm if not authenticated and auth is not loading
  if (!isAuthenticated && !isLoading) {
    return (
      <ErrorBoundary FallbackComponent={LoginErrorFallback}>
        <LoginForm />
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
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
}
