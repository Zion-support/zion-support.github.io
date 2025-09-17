import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // This effect handles token processing (e.g., from magic link)
    // It runs when component mounts or location.search changes
    const queryString = location.search;
    const params = new URLSearchParams(queryString);
    const token = params.get('token');
    if (token) {
      // Store token in localStorage instead of safeStorage
      localStorage.setItem('zion_token', token);
      // Clear token from URL to prevent re-processing and clean up history
      navigate(location.pathname, { replace: true });
    }
  }, [location.search, location.pathname, navigate]);

  // Simple login form for now
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-zion-slate-dark">Sign In</h2>
          <p className="mt-2 text-zion-slate-light">Welcome back to Zion Tech Group</p>
        </div>
        
        <div className="mt-8 space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-zion-slate-dark">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-zion-slate-light rounded-md shadow-sm focus:outline-none focus:ring-zion-cyan focus:border-zion-cyan"
              placeholder="Enter your email"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-zion-slate-dark">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="mt-1 block w-full px-3 py-2 border border-zion-slate-light rounded-md shadow-sm focus:outline-none focus:ring-zion-cyan focus:border-zion-cyan"
              placeholder="Enter your password"
            />
          </div>
          
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-zion-cyan hover:bg-zion-cyan-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zion-cyan transition-colors"
            >
              Sign In
            </button>
          </div>
          
          <div className="text-center">
            <a href="#" className="text-zion-cyan hover:text-zion-cyan-dark text-sm">
              Forgot your password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
