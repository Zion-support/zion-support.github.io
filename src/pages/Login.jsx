import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // This effect handles token processing (e.g., from magic link)
    const queryString = location.search;
    const params = new URLSearchParams(queryString);
    const token = params.get('token');
    if (token) {
      // Store token in localStorage for now
      localStorage.setItem('zion_token', token);
      navigate(location.pathname, { replace: true });
    }
  }, [location.search, location.pathname, navigate]);

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      const next = new URLSearchParams(location.search).get('next') || '/dashboard';
      navigate(next, { replace: true });
    }
  }, [isAuthenticated, isLoading, navigate, location.search]);

  // Simple login form for now
  if (!isAuthenticated && !isLoading) {
    return (
      <div className="min-h-screen bg-futuristic flex items-center justify-center">
        <div className="bg-zion-slate-dark/50 rounded-xl border border-zion-cyan/20 p-8 max-w-md w-full">
          <h2 className="text-3xl font-bold text-white text-center mb-6">Login</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zion-slate-light mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg px-4 py-3 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-zion-slate-light mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg px-4 py-3 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
            >
              Sign In
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-zion-slate-light">
              Don't have an account?{' '}
              <a href="/signup" className="text-zion-cyan hover:text-zion-purple transition-colors font-medium">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Loading indicator
  if (isLoading) {
    return (
      <div className="min-h-screen bg-futuristic flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-zion-cyan/20 border-t-zion-cyan rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-zion-slate-light">Loading...</p>
        </div>
      </div>
    );
  }

  return null;
}
