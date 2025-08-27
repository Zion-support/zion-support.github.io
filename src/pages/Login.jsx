import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Lock, Mail, Github, Twitter, Linkedin, AlertCircle } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Basic validation
    if (!formData.email || !formData.password) {
      setError('Please fill in all required fields');
      setIsLoading(false);
      return;
    }

    if (!formData.email.includes('@')) {
      setError('Please enter a valid email address');
      setIsLoading(false);
      return;
    }

    try {
      // Simulate login API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simple login logic - in a real app this would handle authentication
      console.log('Login attempted with:', formData);
      
      // Redirect to dashboard or home after successful login
      navigate('/');
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    console.log(`Social login with ${provider}`);
    // In a real app, this would handle OAuth flow
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-futuristic flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <motion.div 
          className="card-futuristic"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          {/* Logo and Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-white font-bold text-3xl">Z</span>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-zion-slate-light">Sign in to your Zion Tech Group account</p>
          </div>
          
          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center gap-3"
            >
              <AlertCircle className="w-5 h-5 text-red-400" />
              <span className="text-red-400 text-sm">{error}</span>
            </motion.div>
          )}
          
          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-12 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light hover:text-zion-cyan transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="rememberMe"
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-zion-cyan focus:ring-zion-cyan border-zion-cyan/20 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-zion-slate-light">
                  Remember me
                </label>
              </div>
              
              <div className="text-sm">
                <button
                  type="button"
                  className="text-zion-cyan hover:text-zion-cyan/80 transition-colors"
                >
                  Forgot password?
                </button>
              </div>
            </div>
            
            <motion.button
              type="submit"
              disabled={isLoading}
              className="w-full btn-futuristic py-3 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Signing In...
                </>
              ) : (
                'Sign In'
              )}
            </motion.button>
          </form>
          
          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-zion-cyan/20"></div>
            <span className="px-4 text-zion-slate-light text-sm">Or continue with</span>
            <div className="flex-1 border-t border-zion-cyan/20"></div>
          </div>
          
          {/* Social Login */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <motion.button
              type="button"
              onClick={() => handleSocialLogin('github')}
              className="flex items-center justify-center p-3 border border-zion-cyan/20 rounded-lg text-zion-slate-light hover:border-zion-cyan/40 hover:text-zion-cyan transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
            </motion.button>
            <motion.button
              type="button"
              onClick={() => handleSocialLogin('twitter')}
              className="flex items-center justify-center p-3 border border-zion-cyan/20 rounded-lg text-zion-slate-light hover:border-zion-cyan/40 hover:text-zion-cyan transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Twitter className="w-5 h-5" />
            </motion.button>
            <motion.button
              type="button"
              onClick={() => handleSocialLogin('linkedin')}
              className="flex items-center justify-center p-3 border border-zion-cyan/20 rounded-lg text-zion-slate-light hover:border-zion-cyan/40 hover:text-zion-cyan transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.button>
          </div>
          
          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-zion-slate-light">
              Don't have an account?{' '}
              <button
                onClick={() => navigate('/contact')}
                className="text-zion-cyan hover:text-zion-cyan/80 font-medium transition-colors"
              >
                Contact us to get started
              </button>
            </p>
          </div>
        </motion.div>
        
        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 text-center"
        >
          <p className="text-zion-slate-light text-sm">
            By signing in, you agree to our{' '}
            <button className="text-zion-cyan hover:text-zion-cyan/80 transition-colors">
              Terms of Service
            </button>{' '}
            and{' '}
            <button className="text-zion-cyan hover:text-zion-cyan/80 transition-colors">
              Privacy Policy
            </button>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
