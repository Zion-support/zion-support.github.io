import { useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { LoginErrorFallback } from '@/components/auth/login/LoginErrorFallback';
import { useCart } from '@/context/CartContext';
import { toast } from '@/hooks/use-toast';
import { useDispatch } from 'react-redux';
import { setLoggedIn } from '@/store/authSlice';

export default function Login() {
  const dispatch = useDispatch();
  const { clearCart } = useCart();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    if (token) {
      // Store token in localStorage for now
      localStorage.setItem('zion_token', token);
      // Clear token from URL to prevent re-processing and clean up history
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
}
