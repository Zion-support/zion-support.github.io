import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  Lock, 
  Mail, 
  Eye, 
  EyeOff, 
  Shield, 
  CheckCircle, 
  AlertCircle, 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Award, 
  Globe, 
  Building, 
  Zap, 
  Brain, 
  Cloud, 
  Rocket, 
  Star as StarIcon,
  Lightbulb,
  BarChart,
  PieChart,
  LineChart,
  Activity,
  Gauge,
  Target,
  UserCheck,
  MessageCircle,
  FileCheck,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Info,
  Server,
  Monitor,
  Smartphone,
  Laptop,
  Router,
  HardDrive,
  Wifi,
  Key,
  FileCode,
  GitBranch,
  Workflow,
  Layers,
  Box,
  Package,
  Truck,
  Factory,
  Home,
  Office,
  Store,
  School,
  Hospital,
  Bank,
  ShoppingCart,
  CreditCard,
  PieChart as PieChartIcon,
  Users,
  MessageSquare,
  FileText,
  Calendar,
  Clock,
  DollarSign,
  Zap as ZapIcon,
  Brain as BrainIcon,
  Cloud as CloudIcon,
  Shield as ShieldIcon,
  Rocket as RocketIcon,
  Star as StarIcon2,
  Lightbulb as LightbulbIcon,
  BarChart as BarChartIcon,
  PieChart as PieChartIcon2,
  LineChart as LineChartIcon,
  Activity as ActivityIcon,
  Gauge as GaugeIcon,
  Target as TargetIcon,
  UserCheck as UserCheckIcon,
  MessageCircle as MessageCircleIcon,
  FileCheck as FileCheckIcon,
  AlertTriangle as AlertTriangleIcon,
  CheckCircle2 as CheckCircle2Icon,
  XCircle as XCircleIcon,
  Info as InfoIcon,
  Server as ServerIcon,
  Monitor as MonitorIcon,
  Smartphone as SmartphoneIcon,
  Laptop as LaptopIcon,
  Router as RouterIcon,
  HardDrive as HardDriveIcon,
  Wifi as WifiIcon,
  Key as KeyIcon,
  FileCode as FileCodeIcon,
  GitBranch as GitBranchIcon,
  Workflow as WorkflowIcon,
  Layers as LayersIcon,
  Box as BoxIcon,
  Package as PackageIcon,
  Truck as TruckIcon,
  Factory as FactoryIcon,
  Home as HomeIcon,
  Office as OfficeIcon,
  Store as StoreIcon,
  School as SchoolIcon,
  Hospital as HospitalIcon,
  Bank as BankIcon,
  ShoppingCart as ShoppingCartIcon,
  CreditCard as CreditCardIcon,
  PieChart as PieChartIcon3,
  Users as UsersIcon,
  MessageSquare as MessageSquareIcon,
  FileText as FileTextIcon,
  Mail as MailIcon,
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  DollarSign as DollarSignIcon,
  Zap as ZapIcon2,
  Brain as BrainIcon2,
  Cloud as CloudIcon2,
  Shield as ShieldIcon2,
  Rocket as RocketIcon2,
  Star as StarIcon3,
  Lightbulb as LightbulbIcon2,
  BarChart as BarChartIcon2,
  PieChart as PieChartIcon4,
  LineChart as LineChartIcon2,
  Activity as ActivityIcon2,
  Gauge as GaugeIcon2,
  Target as TargetIcon2,
  UserCheck as UserCheckIcon2,
  MessageCircle as MessageCircleIcon2,
  FileCheck as FileCheckIcon2,
  AlertTriangle as AlertTriangleIcon2,
  CheckCircle2 as CheckCircle2Icon2,
  XCircle as XCircleIcon2,
  Info as InfoIcon2,
  Server as ServerIcon2,
  Monitor as MonitorIcon2,
  Smartphone as SmartphoneIcon2,
  Laptop as LaptopIcon2,
  Router as RouterIcon2,
  HardDrive as HardDriveIcon2,
  Wifi as WifiIcon2,
  Key as KeyIcon2,
  FileCode as FileCodeIcon2,
  GitBranch as GitBranchIcon2,
  Workflow as WorkflowIcon2,
  Layers as LayersIcon2,
  Box as BoxIcon2,
  Package as PackageIcon2,
  Truck as TruckIcon2,
  Factory as FactoryIcon2,
  Home as HomeIcon2,
  Office as OfficeIcon2,
  Store as StoreIcon2,
  School as SchoolIcon2,
  Hospital as HospitalIcon2,
  Bank as BankIcon2,
  ShoppingCart as ShoppingCartIcon2,
  CreditCard as CreditCardIcon2,
  PieChart as PieChartIcon5,
  Users as UsersIcon2,
  MessageSquare as MessageSquareIcon2,
  FileText as FileTextIcon2,
  Mail as MailIcon2,
  Calendar as CalendarIcon2,
  Clock as ClockIcon2,
  DollarSign as DollarSignIcon2,
  Zap as ZapIcon3,
  Brain as BrainIcon3,
  Cloud as CloudIcon3,
  Shield as ShieldIcon3,
  Rocket as RocketIcon3,
  Star as StarIcon4,
  Lightbulb as LightbulbIcon3,
  BarChart as BarChartIcon3,
  PieChart as PieChartIcon6,
  LineChart as LineChartIcon3,
  Activity as ActivityIcon3,
  Gauge as GaugeIcon3,
  Target as TargetIcon3,
  UserCheck as UserCheckIcon3,
  MessageCircle as MessageCircleIcon3,
  FileCheck as FileCheckIcon3,
  AlertTriangle as AlertTriangleIcon3,
  CheckCircle2 as CheckCircle2Icon3,
  XCircle as XCircleIcon3,
  Info as InfoIcon3,
  Server as ServerIcon3,
  Monitor as MonitorIcon3,
  Smartphone as SmartphoneIcon3,
  Laptop as LaptopIcon3,
  Router as RouterIcon3,
  HardDrive as HardDriveIcon3,
  Wifi as WifiIcon3,
  Key as KeyIcon3,
  FileCode as FileCodeIcon3,
  GitBranch as GitBranchIcon3,
  Workflow as WorkflowIcon3,
  Layers as LayersIcon3,
  Box as BoxIcon3,
  Package as PackageIcon3,
  Truck as TruckIcon3,
  Factory as FactoryIcon3,
  Home as HomeIcon3,
  Office as OfficeIcon3,
  Store as StoreIcon3,
  School as SchoolIcon3,
  Hospital as HospitalIcon3,
  Bank as BankIcon3,
  ShoppingCart as ShoppingCartIcon3,
  CreditCard as CreditCardIcon3,
  PieChart as PieChartIcon7,
  Users as UsersIcon3,
  MessageSquare as MessageSquareIcon3,
  FileText as FileTextIcon3,
  Mail as MailIcon3,
  Calendar as CalendarIcon3,
  Clock as ClockIcon3,
  DollarSign as DollarSignIcon3,
  Zap as ZapIcon4,
  Brain as BrainIcon4,
  Cloud as CloudIcon4,
  Shield as ShieldIcon4,
  Rocket as RocketIcon4,
  Star as StarIcon5
} from 'lucide-react';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Handle successful login
      console.log('Login successful:', formData);
      // Redirect to dashboard or handle authentication state
      
    } catch (error) {
      console.error('Login failed:', error);
      setErrors({ general: 'Login failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const features = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with SOC 2 compliance and advanced encryption'
    },
    {
      icon: Globe,
      title: 'Global Access',
      description: 'Access your projects from anywhere in the world, 24/7'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance for seamless user experience'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Login - Zion Tech Group"
        description="Secure access to your Zion Tech Group dashboard. Manage projects, track progress, and collaborate with your team."
      />
      
      <div className="min-h-screen flex">
        {/* Left Side - Login Form */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-md w-full space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center">
                <Lock className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">
                Welcome Back
              </h2>
              <p className="text-gray-300">
                Sign in to your account to continue
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-8 space-y-6"
              onSubmit={handleSubmit}
            >
              {errors.general && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 flex items-center space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span className="text-red-400 text-sm">{errors.general}</span>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-cyan-400 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-3 bg-slate-700 border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors ${
                        errors.email ? 'border-red-500 focus:border-red-500' : 'border-slate-600 focus:border-cyan-400'
                      }`}
                      placeholder="Enter your email address"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-semibold text-cyan-400 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      autoComplete="current-password"
                      required
                      value={formData.password}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-12 py-3 bg-slate-700 border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors ${
                        errors.password ? 'border-red-500 focus:border-red-500' : 'border-slate-600 focus:border-cyan-400'
                      }`}
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="mt-1 text-sm text-red-400 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.password}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-cyan-600 bg-slate-700 border-slate-600 rounded focus:ring-cyan-500 focus:ring-2"
                  />
                  <span className="ml-2 text-sm text-gray-300">Remember me</span>
                </label>
                <Link
                  to="/forgot-password"
                  className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
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

              <div className="text-center">
                <p className="text-gray-400 text-sm">
                  Don't have an account?{' '}
                  <Link
                    to="/register"
                    className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </motion.form>

            {/* Additional Options */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-slate-900 text-gray-400">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <button className="w-full inline-flex justify-center py-2 px-4 border border-slate-600 rounded-lg shadow-sm bg-slate-700 text-sm font-medium text-gray-300 hover:bg-slate-600 transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="ml-2">Google</span>
                </button>

                <button className="w-full inline-flex justify-center py-2 px-4 border border-slate-600 rounded-lg shadow-sm bg-slate-700 text-sm font-medium text-gray-300 hover:bg-slate-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                  <span className="ml-2">Facebook</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Side - Features & Info */}
        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center lg:px-8 lg:py-12 bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-indigo-500/10">
          <div className="max-w-lg w-full">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl font-bold text-white mb-4">
                Zion Tech Group
              </h1>
              <p className="text-xl text-gray-300">
                Empowering businesses with cutting-edge technology solutions
              </p>
            </motion.div>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Trusted by Industry Leaders
                </h3>
                <p className="text-gray-300 text-sm">
                  Join thousands of companies that trust Zion Tech Group for their technology needs
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}