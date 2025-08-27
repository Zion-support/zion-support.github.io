import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  User, 
  Shield, 
  Zap, 
  Brain, 
  Cloud, 
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Globe,
  Building,
  Users,
  Star,
  CheckCircle,
  AlertCircle,
  HelpCircle,
  MessageCircle,
  Phone,
  MapPin,
  Mail as MailIcon,
  Clock,
  Shield as ShieldIcon,
  Activity,
  TrendingUp,
  Award,
  Rocket,
  Atom,
  Network,
  Leaf,
  Satellite,
  Cpu,
  Database,
  Server,
  Lock as LockIcon,
  Heart,
  ShoppingCart,
  FileText,
  Video,
  TestTube,
  Code,
  BookOpen,
  Briefcase,
  Newspaper,
  Target,
  DollarSign,
  Settings,
  Bell,
  Search,
  Filter,
  Download,
  Edit,
  Trash2,
  Plus,
  Calendar,
  Truck,
  BarChart3
} from 'lucide-react';

export function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});

    // Basic validation
    const newErrors: { email?: string; password?: string } = {};
    
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsLoading(false);
      return;
    }

    // Simulate login process
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      // Redirect to dashboard or handle successful login
      window.location.href = '/dashboard';
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const features = [
    { icon: Brain, title: 'AI-Powered Solutions', description: 'Advanced artificial intelligence services' },
    { icon: Cloud, title: 'Cloud Infrastructure', description: 'Scalable cloud computing solutions' },
    { icon: Shield, title: 'Enterprise Security', description: 'Military-grade cybersecurity protection' },
    { icon: Atom, title: 'Quantum Computing', description: 'Next-generation computational power' },
    { icon: Network, title: 'IoT & Edge Computing', description: 'Smart device networks & processing' },
    { icon: Leaf, title: 'Sustainable Technology', description: 'Green IT & eco-friendly solutions' }
  ];

  const stats = [
    { number: '500+', label: 'Enterprise Clients', icon: Building },
    { number: '99.9%', label: 'Uptime SLA', icon: Activity },
    { number: '24/7', label: 'Support Available', icon: MessageCircle },
    { number: '50+', label: 'AI Services', icon: Brain }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex">
      {/* Left Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          {/* Logo & Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-4">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
            <p className="text-gray-600">Sign in to your Zion Tech Group account</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`block w-full pl-10 pr-3 py-3 border rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.email ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="Enter your email"
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`block w-full pl-10 pr-12 py-3 border rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.password ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.password}
                </p>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <Link
                to="/forgot-password"
                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Signing in...
                </div>
              ) : (
                <div className="flex items-center">
                  Sign In
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            <button className="w-full inline-flex justify-center items-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors">
              <Github className="h-5 w-5 mr-2" />
              GitHub
            </button>
            <button className="w-full inline-flex justify-center items-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors">
              <Linkedin className="h-5 w-5 mr-2" />
              LinkedIn
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link
                to="/signup"
                className="font-medium text-blue-600 hover:text-blue-700"
              >
                Sign up for free
              </Link>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Right Side - Company Info & Features */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 p-12 text-white">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full max-w-lg mx-auto"
        >
          {/* Company Header */}
          <div className="mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-3xl mb-6">
              <Zap className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-4">Zion Tech Group</h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              Leading the future of technology with cutting-edge AI, quantum computing, and sustainable solutions for enterprises worldwide.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl mb-3">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold">{stat.number}</div>
                <div className="text-sm text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Our Core Services</h3>
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <feature.icon className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-white">{feature.title}</h4>
                  <p className="text-sm text-blue-100">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex items-center space-x-4 text-sm text-blue-100">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center">
                <MailIcon className="h-4 w-4 mr-2" />
                contact@ziontechgroup.com
              </div>
            </div>
            <div className="mt-2 text-sm text-blue-100">
              <MapPin className="h-4 w-4 inline mr-2" />
              123 Innovation Drive, Tech Valley, CA 94000
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}