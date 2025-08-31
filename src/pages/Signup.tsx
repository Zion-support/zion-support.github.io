import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Users, 
  Globe, 
  Phone, 
  Mail, 
  MessageSquare, 
  Calendar,
  CheckCircle,
  Star,
  Zap,
  Brain,
  Server,
  Shield,
  Cloud,
  Database,
  Workflow,
  Target,
  Rocket,
  TrendingUp,
  BarChart3,
  Atom,
  Network,
  Lock,
  Cpu,
  Wifi,
  Satellite,
  Handshake,
  FileText,
  Video,
  GraduationCap,
  Lightbulb,
  Star as StarIcon,
  HelpCircle,
  BarChart as BarChartIcon,
  ShoppingCart,
  Clock,
  Eye,
  EyeOff,
  ArrowRight,
<<<<<<< HEAD
  User
} from 'lucide-react';

export default function Signup() {
=======
  Shield,
  Zap,
  Users,
  CheckCircle
 } from 'lucide-react';
export default function Signup(...args[]):  {
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    companyName: '',
    companySize: '',
    industry: '',
    role: '',
    phone: '',
    agreeToTerms: false,
    subscribeToNewsletter: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
<<<<<<< HEAD
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const companySizes = [
    { value: 'startup', label: 'Startup (1-50 employees)' },
    { value: 'small', label: 'Small Business (51-200 employees)' },
    { value: 'medium', label: 'Medium Business (201-1000 employees)' },
    { value: 'large', label: 'Large Enterprise (1000+ employees)' }
  ];

  const industries = [
    { value: 'technology', label: 'Technology' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'finance', label: 'Financial Services' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'retail', label: 'Retail & E-commerce' },
    { value: 'education', label: 'Education' },
    { value: 'government', label: 'Government' },
    { value: 'nonprofit', label: 'Non-profit' },
    { value: 'other', label: 'Other' }
  ];

  const roles = [
    { value: 'executive', label: 'C-Level Executive' },
    { value: 'director', label: 'Director/VP' },
    { value: 'manager', label: 'Manager' },
    { value: 'developer', label: 'Developer/Engineer' },
    { value: 'consultant', label: 'Consultant' },
    { value: 'student', label: 'Student' },
    { value: 'other', label: 'Other' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
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

  const validateStep = (step: number) => {
    const newErrors: {[key: string]: string} = {};

    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
      if (!formData.password) newErrors.password = 'Password is required';
      else if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
      if (!formData.confirmPassword) newErrors.confirmPassword = 'Please confirm your password';
      else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    }

    if (step === 2) {
      if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
      if (!formData.companySize) newErrors.companySize = 'Please select company size';
      if (!formData.industry) newErrors.industry = 'Please select industry';
      if (!formData.role) newErrors.role = 'Please select your role';
    }

    if (step === 3) {
      if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 3));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(currentStep)) {
      // Handle form submission
      console.log('Form submitted:', formData);
    }
  };

  const getStepStatus = (step: number) => {
    if (step < currentStep) return 'completed';
    if (step === currentStep) return 'current';
    return 'upcoming';
  };

=======
  const [isLoading, setIsLoading] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
      return}
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return}
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    // Here you would typically make an API call to register
    // // // // // // // console.log('Signup attempt:', formData);
    setIsLoading(false);
  };
=======
    console.log('Signup attempt:', formData);
    setIsLoading(false)};
  const features = [
    {
      icon: <Shield className="h-6 w-6 text-zion-cyan" />,
      title: "Enterprise Security",
      description: "Bank-level security protocols protect your data and ensure compliance"
    },
    {
      icon: <Zap className="h-6 w-6 text-zion-purple" />,
      title: "Lightning Fast",
      description: "Optimized performance for seamless user experience across all devices";
    },;
    {;
      icon: <Users className="h-6 w-6 text-zion-cyan" />,;
      title: "Team Collaboration",;
      description: "Built-in tools for seamless team communication and project management";
    };
  ];
  const benefits = [;
    "Access to cutting-edge AI solutions",;
    "24/7 customer support",;
    "Free consultation session",;
    "Exclusive partner discounts",;
    "Early access to new features",;
    "Dedicated account manager";
  ];
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark to-zion-purple opacity-20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
<<<<<<< HEAD
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join Zion Tech Group
            </h1>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto mb-8">
              Create your account to access our cutting-edge AI, cloud, and technology solutions. 
              Start your digital transformation journey today.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-zinc-300">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-zion-cyan" />
                <span>Free Account</span>
=======
            initial = {
  { opacity: 0,
  y: 20 
}}
            animate = {
  { opacity: 1,
  y: 0 
}}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
            <Link to="/" className="inline-block mb-6">
              <div className="text-3xl font-bold text-zion-cyan">Zion Tech Group</div>
            </Link>
            <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
            <p className="text-zion-slate-light">
              Join thousands of businesses transforming with AI
            </p>
          </motion.div>
          {/* Signup Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial = {
  { opacity: 0,
  y: 20 
}}
            animate = {
  { opacity: 1,
  y: 0 
}}
            transition = {
  { duration: 0.8,
  delay: 0.2 
}}
          >
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-zion-slate-light mb-2">
                  First Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zion-slate-light" />
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-zion-blue-light/20 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    placeholder="First name"
                  />
                </div>
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-zion-cyan" />
                <span>Instant Access</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-zion-cyan" />
                <span>Premium Support</span>
              </div>
            </div>
<<<<<<< HEAD
          </motion.div>
=======
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zion-slate-light mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zion-slate-light" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 bg-zion-blue-light/20 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            {/* Comp Field */}
            <div>
              <label htmlFor="comp" className="block text-sm font-medium text-zion-slate-light mb-2">
                Comp Name
              </label>
              <div className="relative">
                <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zion-slate-light" />
                <input
                  type="text"
                  id="comp"
                  name="comp"
                  value={formData.comp}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-zion-blue-light/20 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                  placeholder="Comp name (optional)"
                />
              </div>
            </div>
            {/* Password Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-zion-slate-light mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zion-slate-light" />
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-12 py-3 bg-zion-blue-light/20 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    placeholder="Create password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light hover:text-white transition-colors"
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-zion-slate-light mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zion-slate-light" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-12 py-3 bg-zion-blue-light/20 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    placeholder="Confirm password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light hover:text-white transition-colors"
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>
            </div>
            {/* Terms Agreement */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="terms"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="w-4 h-4 text-zion-cyan bg-zion-blue-light/20 border-zion-purple/30 rounded focus:ring-zion-cyan focus:ring-2 mt-1"
              />
              <label htmlFor="terms" className="text-sm text-zion-slate-light">
                I agree to the{' '}
                <Link to="/terms" className="text-zion-cyan hover:text-zion-cyan-light">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-zion-cyan hover:text-zion-cyan-light">
                  Privacy Policy
                </Link>
              </label>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || !agreedToTerms}
              className="w-full bg-zion-purple hover:bg-zion-purple/80 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Creating Account...
                </>
              ) : (
                <>
                  Create Account
                  <ArrowRight className="h-5 w-5" />
                </>
              )}
            </button>
            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-zion-purple/30"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-zion-blue text-zion-slate-light">Or continue with</span>
              </div>
            </div>
            {/* Social Signup Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-zion-blue-light/20 border border-zion-purple/30 rounded-lg text-white hover:bg-zion-purple/20 transition-all duration-300"
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-zion-blue-light/20 border border-zion-purple/30 rounded-lg text-white hover:bg-zion-purple/20 transition-all duration-300"
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </button>
            </div>
            {/* Sign In Link */}
            <div className="text-center">
              <p className="text-zion-slate-light">
                Already have an account?{' '}
                <Link
                  to="/login"
                  className="text-zion-cyan hover:text-zion-cyan-light font-medium transition-colors"
                  Sign in here
                </Link>
              </p>
            </div>
          </motion.form>
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
        </div>
      </div>

      {/* Progress Steps */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-between mb-8">
            {[
              { step: 1, title: 'Account Details', icon: User },
              { step: 2, title: 'Company Info', icon: Building2 },
              { step: 3, title: 'Terms & Finish', icon: CheckCircle }
            ].map(({ step, title, icon: Icon }) => (
              <div key={step} className="flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${
                  getStepStatus(step) === 'completed' 
                    ? 'bg-zion-cyan text-white' 
                    : getStepStatus(step) === 'current'
                    ? 'bg-zion-cyan/20 text-zion-cyan border-2 border-zion-cyan'
                    : 'bg-zinc-700 text-zinc-400'
                }`}>
                  {getStepStatus(step) === 'completed' ? (
                    <CheckCircle className="w-6 h-6" />
                  ) : (
                    <Icon className="w-6 h-6" />
                  )}
                </div>
                <span className={`text-sm font-medium ${
                  getStepStatus(step) === 'completed' 
                    ? 'text-zion-cyan' 
                    : getStepStatus(step) === 'current'
                    ? 'text-white'
                    : 'text-zinc-400'
                }`}>
                  {title}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl mx-auto">
          <motion.div
<<<<<<< HEAD
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Account Details */}
              {currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-white mb-6">Account Details</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-zinc-300 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-zinc-700/50 border rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent ${
                          errors.firstName ? 'border-red-500' : 'border-zinc-600'
                        }`}
                        placeholder="Enter first name"
                      />
                      {errors.firstName && (
                        <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-zinc-300 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-zinc-700/50 border rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent ${
                          errors.lastName ? 'border-red-500' : 'border-zinc-600'
                        }`}
                        placeholder="Enter last name"
                      />
                      {errors.lastName && (
                        <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>
                      )}
                    </div>
=======
            initial = {
  { opacity: 0,
  x: 30 
}}
            animate = {
  { opacity: 1,
  x: 0 
}}
            transition = {
  { duration: 0.8,
  delay: 0.4 
}}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Join the AI Revolution
            </h2>
            <p className="text-xl text-zion-slate-light mb-12 leading-relaxed">
              Get access to cutting-edge AI solutions, cybersecurity services, and digital transformation expertise.
              Start your journey towards business innovation today.
            </p>
            {/* Features List */}
            <div className="space-y-8 mb-12">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex items-start gap-4"
                  initial = {
  { opacity: 0,
  x: 30 
}}
                  animate = {
  { opacity: 1,
  x: 0 
}}
                  transition = {
  { duration: 0.8,
  delay: 0.6 + index * 0.1 
}}
                >
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    {feature.icon}
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-zinc-700/50 border rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent ${
                        errors.email ? 'border-red-500' : 'border-zinc-600'
                      }`}
                      placeholder="Enter email address"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                      Password *
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-zinc-700/50 border rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent pr-12 ${
                          errors.password ? 'border-red-500' : 'border-zinc-600'
                        }`}
                        placeholder="Create a password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400 hover:text-white"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="text-red-400 text-sm mt-1">{errors.password}</p>
                    )}
                    <p className="text-zinc-400 text-sm mt-1">Must be at least 8 characters long</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                      Confirm Password *
                    </label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-zinc-700/50 border rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent pr-12 ${
                          errors.confirmPassword ? 'border-red-500' : 'border-zinc-600'
                        }`}
                        placeholder="Confirm your password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400 hover:text-white"
                      >
                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                    {errors.confirmPassword && (
                      <p className="text-red-400 text-sm mt-1">{errors.confirmPassword}</p>
                    )}
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={nextStep}
                      className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      Continue
                      <ArrowRight className="w-5 h-5 ml-2 inline" />
                    </button>
                  </div>
                </motion.div>
<<<<<<< HEAD
              )}

              {/* Step 2: Company Information */}
              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-white mb-6">Company Information</h2>
                  
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-zinc-700/50 border rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent ${
                        errors.companyName ? 'border-red-500' : 'border-zinc-600'
                      }`}
                      placeholder="Enter company name"
                    />
                    {errors.companyName && (
                      <p className="text-red-400 text-sm mt-1">{errors.companyName}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-zinc-300 mb-2">
                        Company Size *
                      </label>
                      <select
                        name="companySize"
                        value={formData.companySize}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-zinc-700/50 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent ${
                          errors.companySize ? 'border-red-500' : 'border-zinc-600'
                        }`}
                      >
                        <option value="">Select company size</option>
                        {companySizes.map(size => (
                          <option key={size.value} value={size.value}>
                            {size.label}
                          </option>
                        ))}
                      </select>
                      {errors.companySize && (
                        <p className="text-red-400 text-sm mt-1">{errors.companySize}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-zinc-300 mb-2">
                        Industry *
                      </label>
                      <select
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-zinc-700/50 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent ${
                          errors.industry ? 'border-red-500' : 'border-zinc-600'
                        }`}
                      >
                        <option value="">Select industry</option>
                        {industries.map(industry => (
                          <option key={industry.value} value={industry.value}>
                            {industry.label}
                          </option>
                        ))}
                      </select>
                      {errors.industry && (
                        <p className="text-red-400 text-sm mt-1">{errors.industry}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-zinc-300 mb-2">
                        Your Role *
                      </label>
                      <select
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-zinc-700/50 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent ${
                          errors.role ? 'border-red-500' : 'border-zinc-600'
                        }`}
                      >
                        <option value="">Select your role</option>
                        {roles.map(role => (
                          <option key={role.value} value={role.value}>
                            {role.label}
                          </option>
                        ))}
                      </select>
                      {errors.role && (
                        <p className="text-red-400 text-sm mt-1">{errors.role}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-zinc-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>

                  <div className="pt-4 flex space-x-4">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="flex-1 border border-zinc-600 text-zinc-300 hover:bg-zinc-700 font-semibold py-4 px-8 rounded-lg transition-all duration-300"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      Continue
                      <ArrowRight className="w-5 h-5 ml-2 inline" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Terms & Finish */}
              {currentStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-white mb-6">Terms & Finish</h2>
                  
                  <div className="space-y-4">
                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleInputChange}
                        className="mt-1 text-zion-cyan focus:ring-zion-cyan rounded"
                      />
                      <div>
                        <span className="text-zinc-300">
                          I agree to the{' '}
                          <Link to="/terms" className="text-zion-cyan hover:text-zion-cyan-light underline">
                            Terms of Service
                          </Link>
                          {' '}and{' '}
                          <Link to="/privacy" className="text-zion-cyan hover:text-zion-cyan-light underline">
                            Privacy Policy
                          </Link>
                          *
                        </span>
                        {errors.agreeToTerms && (
                          <p className="text-red-400 text-sm mt-1">{errors.agreeToTerms}</p>
                        )}
                      </div>
                    </label>

                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="subscribeToNewsletter"
                        checked={formData.subscribeToNewsletter}
                        onChange={handleInputChange}
                        className="mt-1 text-zion-cyan focus:ring-zion-cyan rounded"
                      />
                      <span className="text-zinc-300">
                        Subscribe to our newsletter for updates on new features, industry insights, and exclusive offers
                      </span>
                    </label>
                  </div>

                  <div className="pt-4 flex space-x-4">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="flex-1 border border-zinc-600 text-zinc-300 hover:bg-zinc-700 font-semibold py-4 px-8 rounded-lg transition-all duration-300"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      Create Account
                    </button>
                  </div>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      {/* Login Link */}
      <div className="bg-zinc-800/30 border-t border-zinc-700/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <p className="text-zinc-300 mb-4">
              Already have an account?{' '}
              <Link to="/login" className="text-zion-cyan hover:text-zion-cyan-light font-semibold">
                Sign in here
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
=======
              ))}
            </div>
            {/* Benefits List */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">What You'll Get</h3>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    className="flex items-center gap-3"
                    initial = {
  { opacity: 0,
  x: 30 
}}
                    animate = {
  { opacity: 1,
  x: 0 
}}
                    transition = {
  { duration: 0.8,
  delay: 1 + index * 0.1 
}}
                  >
                    <CheckCircle className="h-5 w-5 text-zion-cyan flex-shrink-0" />
                    <span className="text-zion-slate-light">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 text-center"
              initial = {
  { opacity: 0,
  y: 30 
}}
              animate = {
  { opacity: 1,
  y: 0 
}}
              transition = {
  { duration: 0.8,
  delay: 1.5 
}}
            >
              <div>
                <div className="text-3xl font-bold text-white mb-1">500+</div>
                <div className="text-zion-slate-light text-sm">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">100+</div>
                <div className="text-zion-slate-light text-sm">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">99.9%</div>
                <div className="text-zion-slate-light text-sm">Uptime</div>
              </div>
            </motion.div>;
          </motion.div>;
        </div>;
      </div>;
    </div>;
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  );
}
