import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    // Simple login logic - in a real app this would handle authentication
    console.log('Login attempted');
    // Redirect to dashboard or home after successful login
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-futuristic flex items-center justify-center">
      <div className="max-w-md w-full mx-auto p-6">
        <div className="card-futuristic">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-zion-slate-light">Sign in to your account</p>
          </div>
          
          <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                placeholder="Enter your password"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-zion-cyan focus:ring-zion-cyan border-zion-cyan/20 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-zion-slate-light">
                  Remember me
                </label>
              </div>
              
              <div className="text-sm">
                <a href="#" className="text-zion-cyan hover:text-zion-cyan/80">
                  Forgot your password?
                </a>
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full btn-futuristic py-3 text-lg font-semibold"
            >
              Sign In
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-zion-slate-light">
              Don't have an account?{' '}
              <button
                onClick={() => navigate('/contact')}
                className="text-zion-cyan hover:text-zion-cyan/80 font-medium"
              >
                Contact us to get started
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
