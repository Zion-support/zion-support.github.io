import { Link } from 'react - router - dom';
import React, { useState } from 'react';
export default React.memo (function Login () {
import {
import { motion } from 'framer - motion';


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
  Laptop,
} from 'lucide - react';

  const [isLogin, setIsLogin] = useState (true) ;
  const [showPassword, setShowPassword] = useState (false) ;
  const [showConfirmPassword, setShowConfirmPassword] = useState (false) ;
  const [formData, setFormData] = useState ({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    company: '',
    phone: '',
    acceptTerms: false,
    acceptMarketing: false,
  }) ;
  const [isSubmitting, setIsSubmitting] = useState (false) ;
  const [submitted, setSubmitted] = useState (false) ;

  const handleInputChange = useCallback ( (e: React.ChangeEvent < HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData (prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }) ) ;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault () ;
    setIsSubmitting (true) ;

    // Simulate form submission
    await new Promise (resolve => setTimeout (resolve, 2000) ) ;

    setIsSubmitting (false) ;
    setSubmitted (true) ;

    // Reset form after 5 seconds
    setTimeout ( () => {
      setSubmitted (false) ;
      setFormData ({
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        company: '',
        phone: '',
        acceptTerms: false,
        acceptMarketing: false,
      }) ;
    }, 5000) ;
  };

  const toggleForm = () => {
    setIsLogin (!isLogin) ;
    setFormData ({
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      company: '',
      phone: '',
      acceptTerms: false,
      acceptMarketing: false,
    }) ;
  };

  const isFormValid = (...args: unknown[]): unknown => {
    if (isLogin) {
      return formData.email && formData.password;
    } else {
      return (formData.email &&
        formData.password &&
        formData.confirmPassword &&
        formData.firstName &&
        formData.lastName &&
        formData.acceptTerms) ;
    }
  };

  return (<div role="button" className="min - h-screen bg - gradient - to - br from - slate - 900 via - blue - 900 to - indigo - 900 flex items - center justify - center p - 4">
      <div role="button" className="w - full max - w-md">
        {/* Logo and Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text - center mb - 8"
        >
          <div role="button" className="w - 16 h - 16 bg - gradient - to - r from - cyan - 500 to - blue - 500 rounded - xl flex items - center justify - center mx - auto mb - 4">
            <span className="text - white font - bold text - 2xl">Z</span>
          </div>
          <h1 className="text - 3xl font - bold text - white mb - 2">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h1>
          <p className="text - gray - 300">
            {isLogin ? 'Sign in to your account' : 'Join Zion Tech Group today'}
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg - white / 10 backdrop - blur - lg rounded - 2xl p - 8 border border - white / 20"
        >
          {/* Success Message */}
          {submitted && (<motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb - 6 p - 4 bg - green - 500 / 20 border border - green - 500 / 50 rounded - lg flex items - center space - x-3"
            >
              <CheckCircle className="w - 6 h - 6 text - green - 400" />
              <span className="text - green - 400">
                {isLogin
                  ? 'Successfully logged in!'
                  : 'Account created successfully!'}
              </span>
            </motion.div>) }

          <form onSubmit={handleSubmit} className="space - y-6">
            {!isLogin && (<div role="button" className="grid grid - cols - 2 gap - 4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text - white font - medium mb - 2"
                  >
                    <User className="w - 4 h - 4 inline mr - 2" />
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w - full px - 4 py - 3 bg - white / 10 border border - white / 20 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - cyan - 400 focus:border - transparent"
                    placeholder="Enter first name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text - white font - medium mb - 2"
                  >
                    <User className="w - 4 h - 4 inline mr - 2" />
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w - full px - 4 py - 3 bg - white / 10 border border - white / 20 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - cyan - 400 focus:border - transparent"
                    placeholder="Enter last name"
                  />
                </div>
              </div>) }

            <div>
              <label
                htmlFor="email"
                className="block text - white font - medium mb - 2"
              >
                <Mail className="w - 4 h - 4 inline mr - 2" />
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w - full px - 4 py - 3 bg - white / 10 border border - white / 20 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - cyan - 400 focus:border - transparent"
                placeholder="Enter your email"
              />
            </div>

            {!isLogin && (<div>
                <label
                  htmlFor="company"
                  className="block text - white font - medium mb - 2"
                >
                  <Building className="w - 4 h - 4 inline mr - 2" />
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w - full px - 4 py - 3 bg - white / 10 border border - white / 20 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - cyan - 400 focus:border - transparent"
                  placeholder="Enter company name"
                />
              </div>) }

            <div>
              <label
                htmlFor="password"
                className="block text - white font - medium mb - 2"
              >
                <Lock className="w - 4 h - 4 inline mr - 2" />
                Password *
              </label>
              <div role="button" className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w - full px - 4 py - 3 bg - white / 10 border border - white / 20 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - cyan - 400 focus:border - transparent pr - 12"
                  placeholder="Enter your password"
                />
                <button aria-label="Button" aria - label="Button" aria - label="Button" aria - label="Button" aria - label="Button" type="button"
                  onClick={ () => setShowPassword (!showPassword) }
                  className="absolute right - 3 top - 1/2 transform - translate - y-1 / 2 text - gray - 400 hover:text - white"
                >
                  {showPassword ? (<EyeOff className="w - 5 h - 5" />) : (<Eye className="w - 5 h - 5" />) }
                </button>
              </div>
            </div>

            {!isLogin && (<div>
                <label
                  htmlFor="confirmPassword"
                  className="block text - white font - medium mb - 2"
                >
                  <Lock className="w - 4 h - 4 inline mr - 2" />
                  Confirm Password *
                </label>
                <div role="button" className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                    className="w - full px - 4 py - 3 bg - white / 10 border border - white / 20 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - cyan - 400 focus:border - transparent pr - 12"
                    placeholder="Confirm your password"
                  />
                  <button aria-label="Button" aria - label="Button" aria - label="Button" aria - label="Button" aria - label="Button" type="button"
                    onClick={ () => setShowConfirmPassword (!showConfirmPassword) }
                    className="absolute right - 3 top - 1/2 transform - translate - y-1 / 2 text - gray - 400 hover:text - white"
                  >
                    {showConfirmPassword ? (<EyeOff className="w - 5 h - 5" />) : (<Eye className="w - 5 h - 5" />) }
                  </button>
                </div>
              </div>) }

            {!isLogin && (<div role="button" className="space - y-3">
                <label className="flex items - center space - x-3">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleInputChange}
                    required
                    className="w - 4 h - 4 text - cyan - 500 bg - white / 10 border - white / 20 rounded focus:ring - cyan - 400 focus:ring - 2"
                  />
                  <span className="text - white text - sm">
                    I agree to the{' '}
                    <Link
                      to="/terms"
                      className="text - cyan - 400 hover:text - cyan - 300 underline"
                    >
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link
                      to="/privacy"
                      className="text - cyan - 400 hover:text - cyan - 300 underline"
                    >
                      Privacy Policy
                    </Link>
                  </span>
                </label>
                <label className="flex items - center space - x-3">
                  <input
                    type="checkbox"
                    name="acceptMarketing"
                    checked={formData.acceptMarketing}
                    onChange={handleInputChange}
                    className="w - 4 h - 4 text - cyan - 500 bg - white / 10 border - white / 20 rounded focus:ring - cyan - 400 focus:ring - 2"
                  />
                  <span className="text - white text - sm">
                    I want to receive updates about new features and services
                  </span>
                </label>
              </div>) }

            <button aria-label="Button" aria - label="Button" aria - label="Button" aria - label="Button" aria - label="Button" type="submit"
              disabled={!isFormValid () || isSubmitting}
              className={`w - full py - 4 px - 6 rounded - lg font - semibold text - lg transition - all duration - 200 flex items - center justify - center space - x-2 ${
                isFormValid () && !isSubmitting
                  ? 'bg - gradient - to - r from - cyan - 500 to - blue - 500 hover:from - cyan - 600 hover:to - blue - 600 text - white transform hover:-translate - y-1 shadow - lg hover:shadow - xl'
                  : 'bg - gray - 600 text - gray - 400 cursor - not - allowed'
              }`}
            >
              {isSubmitting ? (<>
                  <div role="button" className="animate - spin rounded - full h - 6 w - 6 border - b-2 border - white"></div>
                  <span>
                    {isLogin ? 'Signing In...' : 'Creating Account...'}
                  </span>
                </>) : (<>
                  <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
                  <ArrowRight className="w - 5 h - 5" />
                </>) }
            </button>
          </form>

          {/* Form Toggle */}
          <div role="button" className="mt - 6 text - center">
            <p className="text - gray - 300">
              {isLogin
                ? "Don't have an account? "
                : 'Already have an account? '}
              <button aria-label="Button" aria - label="Button" aria - label="Button" aria - label="Button" aria - label="Button" onClick={toggleForm}
                className="text - cyan - 400 hover:text - cyan - 300 font - medium underline"
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>

          {/* Social Login */}
          <div role="button" className="mt - 8">
            <div role="button" className="relative">
              <div role="button" className="absolute inset - 0 flex items - center">
                <div role="button" className="w - full border - t border - white / 20"></div>
              </div>
              <div role="button" className="relative flex justify - center text - sm">
                <span className="px - 2 bg - white / 10 text - gray - 300">
                  Or continue with
                </span>
              </div>
            </div>
            <div role="button" className="mt - 6 grid grid - cols - 2 gap - 3">
              <button aria-label="Button" aria - label="Button" aria - label="Button" aria - label="Button" aria - label="Button" className="w - full inline - flex justify - center py - 3 px - 4 border border - white / 20 rounded - lg shadow - sm bg - white / 10 text - white hover:bg - white / 20 transition - colors">
                <Google className="w - 5 h - 5" />
                <span className="ml - 2">Google</span>
              </button>
              <button aria-label="Button" aria - label="Button" aria - label="Button" aria - label="Button" aria - label="Button" className="w - full inline - flex justify - center py - 3 px - 4 border border - white / 20 rounded - lg shadow - sm bg - white / 10 text - white hover:bg - white / 20 transition - colors">
                <Github className="w - 5 h - 5" />
                <span className="ml - 2">GitHub</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Footer Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt - 8 text - center text - gray - 400 text - sm"
        >
          <div role="button" className="space - y-2">
            <Link
              to="/forgot - password"
              className="block hover:text - white transition - colors"
            >
              Forgot your password?
            </Link>
            <Link
              to="/contact"
              className="block hover:text - white transition - colors"
            >
              Need help? Contact support
            </Link>
          </div>
        </motion.div>
      </div>
    </div>) ;
}
