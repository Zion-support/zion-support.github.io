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
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // This effect handles token processing (e.g., from magic link)
    // It runs when component mounts or location.search changes
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    if (token) {
      // Store token in localStorage for now
      localStorage.setItem('zion_token', token);
      // Clear token from URL to prevent re-processing and clean up history
      navigate(location.pathname, { replace: true });
    }
  }, [location.search, location.pathname, navigate]);

  // Simple login form for now
  return (
    <div className="min-h-screen bg-zion-slate-dark flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 p-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Sign In</h2>
          <p className="mt-2 text-zion-slate-light">
            Welcome back to Zion Tech Group
          </p>
        </div>
        
        <div className="bg-zion-slate-light/10 p-6 rounded-lg">
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 block w-full px-3 py-2 bg-zion-slate-light/20 border border-zion-cyan/20 rounded-md text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1 block w-full px-3 py-2 bg-zion-slate-light/20 border border-zion-cyan/20 rounded-md text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                placeholder="Enter your password"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-zion-cyan focus:ring-zion-cyan border-zion-slate-light rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-zion-slate-light">
                  Remember me
                </label>
              </div>
              
              <div className="text-sm">
                <a href="#" className="font-medium text-zion-cyan hover:text-zion-cyan-light">
                  Forgot your password?
                </a>
              </div>
            </div>
            
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-zion-cyan hover:bg-zion-cyan-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zion-cyan transition-colors duration-200"
              >
                Sign in
              </button>
            </div>
            
            <div className="text-center">
              <p className="text-sm text-zion-slate-light">
                Don't have an account?{' '}
                <a href="/signup" className="font-medium text-zion-cyan hover:text-zion-cyan-light">
                  Sign up
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
