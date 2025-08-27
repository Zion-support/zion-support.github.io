import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { safeStorage } from '@/utils/safeStorage';
import { LoginContent } from '@/components/auth/login';
import { ErrorBoundary } from 'react-error-boundary';
import LoginErrorFallback from '@/components/auth/login/LoginErrorFallback';
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
      // Clear token from URL to prevent re-processing and clean up history
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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-futuristic flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-zion-cyan/20 rounded-full animate-spin border-t-zion-cyan mx-auto mb-4"></div>
          <p className="text-zion-slate-light">Loading...</p>
        </div>
      </div>
    );
  }

  if (isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-futuristic flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="card-futuristic text-center">
          <h1 className="text-2xl font-bold text-white mb-6">Login to Zion Tech Group</h1>
          <p className="text-zion-slate-light mb-8">
            Access your account to manage services and view your dashboard.
          </p>
          
          <div className="space-y-4">
            <button 
              onClick={() => navigate('/contact')}
              className="btn-futuristic w-full"
            >
              Contact Support
            </button>
            
            <button 
              onClick={() => navigate('/')}
              className="btn-neon w-full"
            >
              Back to Home
            </button>
          </div>
          
          <div className="mt-8 pt-6 border-t border-zion-cyan/20">
            <p className="text-sm text-zion-slate-light mb-2">Need help?</p>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="text-zion-cyan hover:text-zion-purple transition-colors duration-300"
            >
              kleber@ziontechgroup.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
