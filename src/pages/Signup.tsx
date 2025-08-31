import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  UserPlus, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  User, 
  Building, 
  Phone, 
  Globe, 
  Shield, 
  CheckCircle, 
  AlertCircle,
  ArrowRight,
  Github,
  Chrome,
  Building2,
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
  Globe2,
  Heart,
  Car,
  GraduationCap,
  Factory,
  ShoppingCart,
  Camera,
  Gamepad2,
  Microscope,
  Key,
  Fingerprint
} from 'lucide-react';

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    company: '',
    phone: '',
    website: '',
    acceptTerms: false,
    acceptMarketing: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [signupStatus, setSignupStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [passwordStrength, setPasswordStrength] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Check password strength
    if (name === 'password') {
      let strength = 0;
      if (value.length >= 8) strength++;
      if (/[a-z]/.test(value)) strength++;
      if (/[A-Z]/.test(value)) strength++;
      if (/[0-9]/.test(value)) strength++;
      if (/[^A-Za-z0-9]/.test(value)) strength++;
      setPasswordStrength(strength);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSignupStatus('idle');
    setErrorMessage('');

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setSignupStatus('error');
      setErrorMessage('Passwords do not match');
      setIsLoading(false);
      return;
    }

    if (formData.password.length < 8) {
      setSignupStatus('error');
      setErrorMessage('Password must be at least 8 characters long');
      setIsLoading(false);
      return;
    }

    if (!formData.acceptTerms) {
      setSignupStatus('error');
      setErrorMessage('You must accept the terms of service');
      setIsLoading(false);
      return;
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Mock successful signup
    setSignupStatus('success');
    
    // Redirect after success
    setTimeout(() => {
      window.location.href = '/dashboard';
    }, 2000);

    setIsLoading(false);
  };

  const socialSignupOptions = [
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
      icon: Building2,
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
      icon: Globe2,
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

  const getPasswordStrengthColor = () => {
    if (passwordStrength <= 2) return 'text-red-400';
    if (passwordStrength <= 3) return 'text-yellow-400';
    if (passwordStrength <= 4) return 'text-blue-400';
    return 'text-green-400';
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength <= 2) return 'Weak';
    if (passwordStrength <= 3) return 'Fair';
    if (passwordStrength <= 4) return 'Good';
    return 'Strong';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Sign Up - Zion Tech Group"
        description="Create your Zion Tech Group account to access cutting-edge technology solutions and AI services."
      />
      
      <div className="min-h-screen flex">
        {/* Left Side - Signup Form */}
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
                <UserPlus className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
              <p className="text-gray-300">Join thousands of businesses transforming with AI technology</p>
            </motion.div>

            {/* Signup Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Success/Error Messages */}
              {signupStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-green-400">Account created successfully! Redirecting...</span>
                </motion.div>
              )}

              {signupStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center"
                >
                  <AlertCircle className="w-5 h-5 text-red-400 mr-3" />
                  <span className="text-red-400">{errorMessage}</span>
                </motion.div>
              )}

              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                    First Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="block w-full pl-10 pr-3 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="First Name"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="block w-full pl-10 pr-3 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
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

              {/* Company Field */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Building className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="block w-full pl-10 pr-3 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Company Name (Optional)"
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="block w-full pl-10 pr-3 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Phone Number (Optional)"
                  />
                </div>
              </div>

              {/* Website Field */}
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-300 mb-2">
                  Website
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Globe className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="website"
                    name="website"
                    type="url"
                    value={formData.website}
                    onChange={handleInputChange}
                    className="block w-full pl-10 pr-3 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="https://yourcompany.com (Optional)"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                  Password *
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
                    placeholder="Create a strong password"
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
                {/* Password Strength Indicator */}
                {formData.password && (
                  <div className="mt-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Password strength:</span>
                      <span className={getPasswordStrengthColor()}>{getPasswordStrengthText()}</span>
                    </div>
                    <div className="mt-1 flex gap-1">
                      {[1, 2, 3, 4, 5].map((level) => (
                        <div
                          key={level}
                          className={`h-1 flex-1 rounded-full ${
                            level <= passwordStrength
                              ? passwordStrength <= 2
                                ? 'bg-red-400'
                                : passwordStrength <= 3
                                ? 'bg-yellow-400'
                                : passwordStrength <= 4
                                ? 'bg-blue-400'
                                : 'bg-green-400'
                              : 'bg-slate-600'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Confirm Password Field */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                  Confirm Password *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    required
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="block w-full pl-10 pr-12 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Confirm your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-300" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-300" />
                    )}
                  </button>
                </div>
              </div>

              {/* Checkboxes */}
              <div className="space-y-3">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleInputChange}
                    required
                    className="h-4 w-4 text-cyan-500 focus:ring-cyan-500 border-slate-600 rounded mt-1"
                  />
                  <span className="ml-2 text-sm text-gray-300">
                    I agree to the{' '}
                    <a
                      href="/terms"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a
                      href="/privacy"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Privacy Policy
                    </a>{' '}
                    *
                  </span>
                </label>
                
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="acceptMarketing"
                    checked={formData.acceptMarketing}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-cyan-500 focus:ring-cyan-500 border-slate-600 rounded mt-1"
                  />
                  <span className="ml-2 text-sm text-gray-300">
                    I want to receive updates about new features and services
                  </span>
                </label>
              </div>

              {/* Signup Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Creating Account...
                  </>
                ) : (
                  <>
                    Create Account
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

            {/* Social Signup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-3"
            >
              {socialSignupOptions.map((option, index) => (
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

            {/* Sign In Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mt-8"
            >
              <p className="text-gray-400">
                Already have an account?{' '}
                <a
                  href="/login"
                  className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                  Sign in
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
              <h2 className="text-3xl font-bold text-white mb-8">Join the Future of Technology</h2>
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
              <h3 className="text-2xl font-bold text-white mb-6">What You'll Get</h3>
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

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mt-12 p-6 bg-slate-800/30 rounded-xl border border-slate-600/30"
            >
              <h4 className="text-lg font-semibold text-white mb-4">Trusted by Thousands</h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-cyan-400">10,000+</div>
                  <div className="text-sm text-gray-400">Active Users</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-400">500+</div>
                  <div className="text-sm text-gray-400">Enterprise Clients</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-400">99.9%</div>
                  <div className="text-sm text-gray-400">Uptime</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-400">24/7</div>
                  <div className="text-sm text-gray-400">Support</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
