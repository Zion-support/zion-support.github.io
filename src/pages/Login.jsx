import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { safeStorage } from '@/utils/safeStorage';
import { LoginForm } from '@/components/auth/login/LoginForm';
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
<<<<<<< HEAD
  const { dispatch } = useCart();
  const reduxDispatch = useDispatch();
=======
  const { clearCart } = useCart();
  const dispatch = useDispatch();
>>>>>>> 06def4290ee3053eb920562d74f17d7b43649b20

  useEffect(() => {
    // This effect handles token processing (e.g., from magic link)
    const queryString = location.search;
    const params = new URLSearchParams(queryString);
    const token = params.get('token');

    if (token) {
      // Store token in localStorage for now
      localStorage.setItem('zion_token', token);
<<<<<<< HEAD
      // The actual authentication state will update via useAuth's listeners,
      // which should trigger the other useEffect.
      navigate(location.pathname, { replace: true });
    }
  }, [location.search, location.pathname, navigate]);
=======
      
      // Clear token from URL to prevent re-processing and clean up history
      navigate(location.pathname, { replace: true });
      
      // Set logged in state
      dispatch(setLoggedIn({ token }));
      
      // Clear cart on login
      clearCart();
      
      // Show success message
      toast({
        title: "Login Successful",
        description: "Welcome to Zion Tech Group!",
      });
    }
  }, [location.search, location.pathname, navigate, dispatch, clearCart]);
>>>>>>> 06def4290ee3053eb920562d74f17d7b43649b20

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      const next = new URLSearchParams(location.search).get('next') || '/dashboard';
      navigate(next, { replace: true });
    }
<<<<<<< HEAD
  }, [isAuthenticated, isLoading, navigate, reduxDispatch, location.search]);
=======
  }, [isAuthenticated, isLoading, navigate, location.search]);
>>>>>>> 06def4290ee3053eb920562d74f17d7b43649b20

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
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-zion-cyan mx-auto mb-4"></div>
          <p className="text-zion-slate-light text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  // If authenticated and isLoading is false, the useEffect above should have navigated.
  // Return null or a minimal layout if needed, though direct navigation is preferred.
  return null;
}
