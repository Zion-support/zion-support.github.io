import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  User,
  Building,
  Phone,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Shield,
  Sparkles
} from 'lucide-react';
import { contactInfo } from '../data/services.js';

interface FormData {
  email: string;
  password: string;
  confirmPassword?: string;
  firstName?: string;
  lastName?: string;
  company?: string;
  phone?: string;
  acceptTerms?: boolean;
  acceptMarketing?: boolean;
}

const Login: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    company: '',
    phone: '',
    acceptTerms: false,
    acceptMarketing: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.email || !formData.password) {
      setMessage({ type: 'error', text: 'Email and password are required' });
      return false;
    }

    if (!isLogin) {
      if (formData.password !== formData.confirmPassword) {
        setMessage({ type: 'error', text: 'Passwords do not match' });
        return false;
      }
      if (!formData.acceptTerms) {
        setMessage({ type: 'error', text: 'Please accept the terms and conditions' });
        return false;
      }
      if (!formData.firstName || !formData.lastName || !formData.company) {
        setMessage({ type: 'error', text: 'Please fill in all required fields' });
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    setMessage(null);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setMessage({
        type: 'success',
        text: isLogin 
          ? 'Login successful! Redirecting to dashboard...' 
          : 'Account created successfully! Please check your email for verification.'
      });

      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          email: '',
          password: '',
          confirmPassword: '',
          firstName: '',
          lastName: '',
          company: '',
          phone: '',
          acceptTerms: false,
          acceptMarketing: false
        });
        setMessage(null);
      }, 3000);

    } catch (error) {
      setMessage({
        type: 'error',
        text: 'An error occurred. Please try again.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const switchMode = () => {
    setIsLogin(!isLogin);
    setMessage(null);
    setFormData(prev => ({
      ...prev,
      confirmPassword: '',
      firstName: '',
      lastName: '',
      company: '',
      phone: '',
      acceptTerms: false,
      acceptMarketing: false
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            {isLogin ? 'Welcome Back' : 'Join Us'}
          </h1>
          <p className="text-gray-300">
            {isLogin 
              ? 'Sign in to access your Zion Tech Group account' 
              : 'Create your account to get started'
            }
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Registration Fields */}
            {!isLogin && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    First Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName || ''}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      placeholder="John"
                      required={!isLogin}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName || ''}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      placeholder="Doe"
                      required={!isLogin}
                    />
                  </div>
                </div>
              </div>
            )}

            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Company *
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    name="company"
                    value={formData.company || ''}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    placeholder="Your Company"
                    required={!isLogin}
                  />
                </div>
              </div>
            )}

            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Phone
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone || ''}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
            )}

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password *
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-12 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Confirm Password *
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword || ''}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-12 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    placeholder="Confirm your password"
                    required={!isLogin}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            )}

            {/* Terms and Marketing */}
            {!isLogin && (
              <div className="space-y-3">
                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={formData.acceptTerms || false}
                    onChange={handleInputChange}
                    className="mt-1 w-4 h-4 text-cyan-400 border-gray-300 rounded focus:ring-cyan-400"
                    required={!isLogin}
                  />
                  <span className="text-sm text-gray-300">
                    I agree to the{' '}
                    <Link to="/terms" className="text-cyan-400 hover:underline">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy" className="text-cyan-400 hover:underline">
                      Privacy Policy
                    </Link>
                  </span>
                </label>
                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    name="acceptMarketing"
                    checked={formData.acceptMarketing || false}
                    onChange={handleInputChange}
                    className="mt-1 w-4 h-4 text-cyan-400 border-gray-300 rounded focus:ring-cyan-400"
                  />
                  <span className="text-sm text-gray-300">
                    I would like to receive updates about Zion Tech Group services and offers
                  </span>
                </label>
              </div>
            )}

            {/* Message */}
            {message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-3 rounded-lg flex items-center space-x-2 ${
                  message.type === 'success' 
                    ? 'bg-green-500/20 border border-green-500/30 text-green-400' 
                    : 'bg-red-500/20 border border-red-500/30 text-red-400'
                }`}
              >
                {message.type === 'success' ? (
                  <CheckCircle className="w-4 h-4" />
                ) : (
                  <AlertCircle className="w-4 h-4" />
                )}
                <span className="text-sm">{message.text}</span>
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              whileHover={{ scale: isLoading ? 1 : 1.02 }}
              whileTap={{ scale: isLoading ? 1 : 0.98 }}
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </motion.button>
          </form>

          {/* Switch Mode */}
          <div className="mt-6 text-center">
            <p className="text-gray-300">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
              <button
                onClick={switchMode}
                className="text-cyan-400 hover:underline font-medium"
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>

          {/* Contact Info */}
          <div className="mt-6 pt-6 border-t border-white/20 text-center">
            <p className="text-sm text-gray-400 mb-3">
              Need help? Contact our support team
            </p>
            <div className="flex justify-center space-x-4 text-sm">
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-cyan-400 hover:underline flex items-center space-x-1"
              >
                <Mail className="w-3 h-3" />
                <span>Email</span>
              </a>
              <a
                href={`tel:${contactInfo.mobile}`}
                className="text-cyan-400 hover:underline flex items-center space-x-1"
              >
                <Phone className="w-3 h-3" />
                <span>Call</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="flex flex-col items-center space-y-2">
              <Shield className="w-6 h-6 text-cyan-400" />
              <span className="text-xs text-gray-400">Secure</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Sparkles className="w-6 h-6 text-cyan-400" />
              <span className="text-xs text-gray-400">Advanced</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <CheckCircle className="w-6 h-6 text-cyan-400" />
              <span className="text-xs text-gray-400">Trusted</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;