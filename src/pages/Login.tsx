import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Lock, 
  Eye, 
  EyeOff, 
  Mail, 
  User, 
  Shield, 
  CheckCircle, 
  AlertCircle,
  ArrowRight,
  Github,
  Chrome,
  Smartphone,
  Key,
  Fingerprint,
  Zap,
  Brain,
  Cloud,
  Database,
  Code,
  Target,
  Star,
  Rocket,
  Award,
  Lightbulb,
  Users,
  Globe,
  Building,
  Heart,
  Car,
  GraduationCap,
  Factory,
  ShoppingCart,
  Camera,
  Gamepad2,
  Microscope
} from 'lucide-react';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginStatus, setLoginStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setLoginStatus('idle');
    setErrorMessage('');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Mock validation
    if (formData.email === 'demo@ziontechgroup.com' && formData.password === 'demo123') {
      setLoginStatus('success');
      // Redirect after success
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 1500);
    } else {
      setLoginStatus('error');
      setErrorMessage('Invalid email or password. Please try again.');
    }

    setIsLoading(false);
  };

  const socialLoginOptions = [
    {
      name: 'Google',
      icon: Chrome,
      color: 'from-red-500 to-red-600',
      hoverColor: 'hover:from-red-600 hover:to-red-700'
    },
    {
      name: 'GitHub',
      icon: Github,
      color: 'from-gray-700 to-gray-800',
      hoverColor: 'hover:from-gray-800 hover:to-gray-900'
    },
    {
      name: 'Microsoft',
      icon: Building,
      color: 'from-blue-600 to-blue-700',
      hoverColor: 'hover:from-blue-700 hover:to-blue-800'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with multi-factor authentication'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance for seamless user experience'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Built-in tools for team management and collaboration'
    },
    {
      icon: Globe,
      title: 'Global Access',
      description: 'Access your account from anywhere in the world'
    }
  ];

  const benefits = [
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Get intelligent recommendations and analytics'
    },
    {
      icon: Cloud,
      title: 'Cloud-First Architecture',
      description: 'Scalable and reliable cloud infrastructure'
    },
    {
      icon: Database,
      title: 'Data Protection',
      description: 'Your data is encrypted and secure'
    },
    {
      icon: Code,
      title: 'Developer Friendly',
      description: 'APIs and tools for custom integrations'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Login - Zion Tech Group"
        description="Secure login to access your Zion Tech Group account. Enterprise-grade security with multi-factor authentication."
      />
      
      <div className="min-h-screen flex">
        {/* Left Side - Login Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Lock className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
              <p className="text-gray-300">Sign in to your account to continue</p>
            </motion.div>

            {/* Login Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Success/Error Messages */}
              {loginStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-green-400">Login successful! Redirecting...</span>
                </motion.div>
              )}

              {loginStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center"
                >
                  <AlertCircle className="w-5 h-5 text-red-400 mr-3" />
                  <span className="text-red-400">{errorMessage}</span>
                </motion.div>
              )}

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="block w-full pl-10 pr-3 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Key className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                    className="block w-full pl-10 pr-12 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-300" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-300" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-cyan-500 focus:ring-cyan-500 border-slate-600 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-300">Remember me</span>
                </label>
                <a
                  href="/forgot-password"
                  className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Forgot password?
                </a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign In
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </button>
            </motion.form>

            {/* Divider */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative my-8"
            >
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-600/50"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-slate-900 text-gray-400">Or continue with</span>
              </div>
            </motion.div>

            {/* Social Login */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-3"
            >
              {socialLoginOptions.map((option, index) => (
                <button
                  key={option.name}
                  type="button"
                  className={`w-full bg-gradient-to-r ${option.color} ${option.hoverColor} text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-3`}
                >
                  <option.icon className="w-5 h-5" />
                  Continue with {option.name}
                </button>
              ))}
            </motion.div>

            {/* Sign Up Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mt-8"
            >
              <p className="text-gray-400">
                Don't have an account?{' '}
                <a
                  href="/signup"
                  className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                  Sign up
                </a>
              </p>
            </motion.div>
          </div>
        </div>

        {/* Right Side - Features & Benefits */}
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 p-8">
          <div className="w-full max-w-lg mx-auto">
            {/* Features Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Why Choose Zion Tech Group?</h2>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
                      <p className="text-gray-300 text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Benefits Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Platform Benefits</h3>
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-sm font-semibold text-white mb-1">{benefit.title}</h4>
                    <p className="text-xs text-gray-300">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Demo Credentials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mt-12 p-6 bg-slate-800/30 rounded-xl border border-slate-600/30"
            >
              <h4 className="text-lg font-semibold text-white mb-3">Demo Account</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Email:</span>
                  <span className="text-white font-mono">demo@ziontechgroup.com</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Password:</span>
                  <span className="text-white font-mono">demo123</span>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-3">
                Use these credentials to explore our platform features
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
