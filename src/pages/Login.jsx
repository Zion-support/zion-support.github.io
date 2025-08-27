import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Shield, Brain, Cloud, Lock, ArrowRight } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Handle token processing (e.g., from magic link)
    const queryString = location.search;
    const params = new URLSearchParams(queryString);
    const token = params.get('token');

    if (token) {
      // Store token in localStorage for now
      localStorage.setItem('zion_token', token);
      // Clear token from URL to prevent re-processing and clean up history
      navigate(location.pathname, { replace: true });
      
      // Show success message
      // In a real app, you'd validate the token and set auth state
      console.log('Token received:', token);
    }
  }, [location.search, location.pathname, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    // In a real app, this would handle actual authentication
    console.log('Login attempt');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-zion-slate-light">Sign in to your Zion Tech Group account</p>
        </motion.div>

        {/* Login Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="futuristic-card"
        >
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="futuristic-input w-full"
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
                className="futuristic-input w-full"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-zion-cyan bg-zion-slate-dark border-zion-slate-light rounded focus:ring-zion-cyan focus:ring-2"
                />
                <span className="ml-2 text-sm text-zion-slate-light">Remember me</span>
              </label>
              <a href="/forgot-password" className="text-sm text-zion-cyan hover:text-zion-cyan-light transition-colors">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="futuristic-button w-full flex items-center justify-center"
            >
              Sign In
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-zion-slate-light text-sm">
              Don't have an account?{' '}
              <a href="/signup" className="text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium">
                Sign up
              </a>
            </p>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 grid grid-cols-3 gap-4"
        >
          <div className="text-center">
            <div className="w-10 h-10 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Shield className="w-5 h-5 text-zion-cyan" />
            </div>
            <p className="text-xs text-zion-slate-light">Secure</p>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 bg-zion-purple/20 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Brain className="w-5 h-5 text-zion-purple" />
            </div>
            <p className="text-xs text-zion-slate-light">AI-Powered</p>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 bg-zion-green/20 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Cloud className="w-5 h-5 text-zion-green" />
            </div>
            <p className="text-xs text-zion-slate-light">Cloud-Native</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
