import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { safeStorage } from '@/utils/safeStorage';
import { LoginForm } from '@/components/auth/login/LoginForm';
import { ErrorBoundary } from 'react-error-boundary';
import { useCart } from '@/context/CartContext';
import { toast } from '@/hooks/use-toast';
import { useDispatch } from 'react-redux';
import { setLoggedIn } from '@/store/authSlice';

// Simple error fallback component
function LoginErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Something went wrong
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {error.message}
          </p>
          <button
            onClick={resetErrorBoundary}
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Login() {
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
    if (token) {
      safeStorage.setItem('zion_token', token);
      // Clear token from URL to prevent re-processing
      navigate(location.pathname, { replace: true });
    }
  }, [location.search, location.pathname, navigate]);

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      reduxDispatch(setLoggedIn(true));
      const next = location.state?.from || '/dashboard';
      navigate(next, { replace: true });
    }
  }, [isAuthenticated, isLoading, navigate, reduxDispatch, location.state]);

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
    return <div className="p-4 text-center text-foreground">Loading...</div>;
  }

  // If authenticated and isLoading is false, the useEffect above should have navigated.
  return null;
}
