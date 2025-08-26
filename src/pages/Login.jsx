import { useEffect } from 'react';
<<<<<<< HEAD
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
=======
import { useNavigate, useLocation } from 'react-router-dom';
>>>>>>> origin/main

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
<<<<<<< HEAD
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // This effect handles token processing (e.g., from magic link)
    // It runs when component mounts or search params change
    const token = searchParams.get('token');
    if (token) {
=======

  useEffect(() => {
    // This effect handles token processing (e.g., from magic link)
    // It runs when component mounts or location.search changes
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    if (token) {
      // Store token in localStorage for now
>>>>>>> origin/main
      localStorage.setItem('zion_token', token);
      // Clear token from URL to prevent re-processing and clean up history
      navigate(location.pathname, { replace: true });
    }
<<<<<<< HEAD
  }, [searchParams, location.pathname, navigate]);

  // Simple login form
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
=======
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
>>>>>>> origin/main
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
<<<<<<< HEAD
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>
=======
                required
                className="mt-1 block w-full px-3 py-2 bg-zion-slate-light/20 border border-zion-cyan/20 rounded-md text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                placeholder="Enter your password"
              />
            </div>
            
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zion-cyan"
              >
                Sign in
              </button>
            </div>
          </form>
          
          <div className="mt-6 text-center">
            <a href="/contact" className="text-zion-cyan hover:text-zion-cyan-light text-sm">
              Need help? Contact support
            </a>
          </div>
        </div>
>>>>>>> origin/main
      </div>
    </div>
  );
}
