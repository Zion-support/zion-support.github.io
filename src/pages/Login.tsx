import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  User,
  Building,
  Globe,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Shield,
  Zap,
  Brain,
  Cloud,
  Server,
  BarChart3,
  Code,
  Network,
  Atom,
  TrendingUp,
  Heart,
  MessageCircle,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  Facebook,
  Chrome,
  Apple,
  Smartphone,
  Monitor,
  Tablet,
  Laptop
} from 'lucide-react';

const Login: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitted(true);

    // Reset form after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
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
    }, 5000);
  };

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Get intelligent recommendations and analytics'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security for your data'
    },
    {
      icon: Cloud,
      title: 'Cloud Integration',
      description: 'Seamless cloud service management'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance and speed'
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Performance Analytics',
      description: 'Track and optimize your business metrics'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Work together efficiently across teams'
    },
    {
      icon: Globe,
      title: 'Global Access',
      description: 'Access your account from anywhere'
    },
    {
      icon: Heart,
      title: '24/7 Support',
      description: 'Round-the-clock customer assistance'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Left Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
          >
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">
                {isLogin ? 'Welcome Back' : 'Create Account'}
              </h1>
              <p className="text-gray-300">
                {isLogin 
                  ? 'Sign in to access your dashboard' 
                  : 'Join Zion Tech Group and transform your business'
                }
              </p>
            </div>

            {/* Toggle Buttons */}
            <div className="flex bg-white/10 rounded-lg p-1 mb-8">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2 px-4 rounded-md font-medium transition-all duration-300 ${
                  isLogin
                    ? 'bg-cyan-500 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2 px-4 rounded-md font-medium transition-all duration-300 ${
                  !isLogin
                    ? 'bg-cyan-500 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Sign Up
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {!isLogin && (
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-white font-medium mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required={!isLogin}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="First Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-white font-medium mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required={!isLogin}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email *
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </div>

              {!isLogin && (
                <div>
                  <label htmlFor="company" className="block text-white font-medium mb-2">
                    Company
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Company Name"
                    />
                    <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  </div>
                </div>
              )}

              <div>
                <label htmlFor="password" className="block text-white font-medium mb-2">
                  Password *
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-12 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Enter your password"
                  />
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {!isLogin && (
                <div>
                  <label htmlFor="confirmPassword" className="block text-white font-medium mb-2">
                    Confirm Password *
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      required={!isLogin}
                      className="w-full pl-12 pr-12 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Confirm your password"
                    />
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              )}

              {!isLogin && (
                <div className="space-y-4">
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      name="acceptTerms"
                      checked={formData.acceptTerms}
                      onChange={handleInputChange}
                      required={!isLogin}
                      className="w-4 h-4 text-cyan-500 bg-white/10 border-white/20 rounded focus:ring-cyan-500 focus:ring-2"
                    />
                    <span className="text-sm text-gray-300">
                      I agree to the{' '}
                      <a href="/terms" className="text-cyan-400 hover:text-cyan-300">
                        Terms of Service
                      </a>{' '}
                      and{' '}
                      <a href="/privacy" className="text-cyan-400 hover:text-cyan-300">
                        Privacy Policy
                      </a>
                    </span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      name="acceptMarketing"
                      checked={formData.acceptMarketing}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-cyan-500 bg-white/10 border-white/20 rounded focus:ring-cyan-500 focus:ring-2"
                    />
                    <span className="text-sm text-gray-300">
                      I want to receive updates about new features and services
                    </span>
                  </label>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    {isLogin ? 'Signing In...' : 'Creating Account...'}
                  </>
                ) : (
                  <>
                    {isLogin ? 'Sign In' : 'Create Account'}
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 text-center"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 mx-auto mb-2" />
                  <p className="text-green-300 font-medium">
                    {isLogin ? 'Successfully signed in!' : 'Account created successfully!'}
                  </p>
                </motion.div>
              )}
            </form>

            {/* Social Login */}
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/20"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white/10 text-gray-300">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center px-4 py-2 border border-white/20 rounded-lg text-white hover:bg-white/10 transition-colors">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </button>
                <button className="flex items-center justify-center px-4 py-2 border border-white/20 rounded-lg text-white hover:bg-white/10 transition-colors">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Features & Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Platform Features</h2>
              <div className="grid gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg border border-white/10"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">{feature.title}</h3>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Why Choose Us</h2>
              <div className="grid gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg border border-white/10"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <benefit.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">{benefit.title}</h3>
                      <p className="text-gray-400 text-sm">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">Need Help?</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MessageCircle className="w-5 h-5 text-cyan-400" />
                  <span>24/7 Live Chat Support</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <ExternalLink className="w-5 h-5 text-cyan-400" />
                  <a href="/contact" className="text-cyan-400 hover:text-cyan-300">
                    Contact Support
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Login;
