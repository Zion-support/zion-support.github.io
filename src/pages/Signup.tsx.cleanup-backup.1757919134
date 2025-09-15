<<<<<<< HEAD
import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { User, Mail, Lock, Eye, EyeOff, CheckCircle, AlertCircle, Building, Phone, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Signup: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    company: '',
    phone: '',
    website: '',
    industry: '',
    companySize: '',
    agreeToTerms: false,
    agreeToMarketing: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const industries = [
    'Technology',
    'Healthcare',
    'Finance',
    'Manufacturing',
    'Retail',
    'Education',
    'Government',
    'Non-profit',
    'Other'
  ];

  const companySizes = [
    '1-10 employees',
    '11-50 employees',
    '51-200 employees',
    '201-500 employees',
    '501-1000 employees',
    '1000+ employees'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const validateForm = () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
      setError('Please fill in all required fields');
      return false;
    }

    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long');
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }

    if (!formData.agreeToTerms) {
      setError('You must agree to the Terms of Service');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSuccess(true);
    } catch (err) {
      setError('Failed to create account. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
        <SEO 
          title="Account Created - Zion Tech Group"
          description="Your Zion Tech Group account has been successfully created."
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md text-center"
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-3xl font-bold text-white mb-4">Welcome to Zion Tech Group!</h1>
          <p className="text-gray-400 mb-8">
            Your account has been successfully created. We've sent a verification email to{' '}
            <span className="text-white font-medium">{formData.email}</span>. 
            Please check your email and verify your account to get started.
          </p>

          <div className="space-y-4">
            <Link
              to="/login"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 inline-block"
            >
              Go to Login
            </Link>
            
            <Link
              to="/"
              className="w-full bg-slate-800 text-white py-3 px-6 rounded-xl font-semibold hover:bg-slate-700 transition-all duration-300 border border-slate-600 inline-block"
            >
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
=======
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'; // Changed from react-router-dom
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { LoadingSpinner } from '@/components/ui/enhanced-loading-states';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { PasswordStrengthMeter } from '@/components/PasswordStrengthMeter';
import { AuthButtons } from '@/components/AuthButtons';
import { AlertCircle, CheckCircle, Mail } from 'lucide-react'
import { toast } from '@/hooks/use-toast';
import { AuthLayout } from '@/layout';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';


const SignupSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/[A-Z]/, 'Password must include an uppercase letter')
    .matches(/[a-z]/, 'Password must include a lowercase letter')
    .matches(/[0-9]/, 'Password must include a number')
    .required('Password is required'),
  confirm: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
  terms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions')
});

export default function Signup() {
  const router = useRouter(); // Changed from navigate
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [emailVerificationRequired, setEmailVerificationRequired] = useState(false);
  const [authServiceAvailable, setAuthServiceAvailable] = useState(true);
  const [healthCheckLoading, setHealthCheckLoading] = useState(true);
  const [healthCheckError, setHealthCheckError] = useState<string | null>(null);
  
  // Check if this is a partner signup
  const isPartnerSignup = router.query.type === 'partner';
  const signupSource = router.query.source as string || 'direct';

  const performHealthCheck = async () => {
    setHealthCheckLoading(true);
    setHealthCheckError(null);
    try {
      const res = await axios.get('/api/auth/health');
      setAuthServiceAvailable(res.status === 200);
      if (res.status !== 200) {
        setHealthCheckError('Authentication service is experiencing issues');
      }
    } catch (err: any) {
      logErrorToProduction('Auth service health check failed', { data: err });
      setAuthServiceAvailable(false);
      // Set a more specific error message based on the error type
      if (err.code === 'NETWORK_ERROR' || err.message?.includes('Network Error')) {
        setHealthCheckError('Network connection issues detected');
      } else if (err.response?.status === 500) {
        setHealthCheckError('Authentication service is temporarily unavailable');
      } else {
        setHealthCheckError('Unable to verify authentication service status');
      }
    } finally {
      setHealthCheckLoading(false);
    }
  };

  useEffect(() => {
    performHealthCheck();
  }, []);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirm: '',
      terms: false
    },
    validationSchema: SignupSchema,
    onSubmit: async (values, { setErrors }) => {
      logInfo('Form submission started with:', { 
        name: values.name, 
        email: values.email,
        hasPassword: !!values.password,
        isPartnerSignup 
      });
      
      setLoading(true);
      setErrorMessage(''); // Clear any previous error
      setSuccessMessage(''); // Clear any previous success message
      setEmailVerificationRequired(false);
      
      try {
        const requestData = {
          name: values.name,
          email: values.email,
          password: values.password,
          ...(isPartnerSignup && {
            userType: 'partner',
            source: signupSource,
            metadata: {
              partnerProgram: true,
              signupType: 'partner'
            }
          })
        };
        
        logInfo('Making API request to /api/auth/register with:', { 
          ...requestData, 
          password: '[REDACTED]' 
        });
        
        const res = await axios.post('/api/auth/register', requestData);
        
        logInfo('API response received:', { 
          status: res.status, 
          data: res.data 
        });
        
        if (res.status === 201) {
          const data = res.data;
          
          if (data.emailVerificationRequired) {
            // Email verification is required
            setEmailVerificationRequired(true);
            const message = isPartnerSignup 
              ? 'Partner application submitted! Please check your email to verify your account. Once verified, your partner application will be reviewed.'
              : 'Account created! Please check your email to verify your account.';
            setSuccessMessage(data.message || message);
            
            toast({
              title: isPartnerSignup ? 'Partner application submitted!' : 'Account created!',
              description: isPartnerSignup 
                ? 'Please verify your email. Your partner application will be reviewed after verification.'
                : 'Please check your email to verify your account before logging in.',
            });
          } else {
            // Account created and ready to use
            const message = isPartnerSignup 
              ? 'Partner application submitted successfully! You can now log in and your application will be reviewed.'
              : 'Account created successfully!';
            setSuccessMessage(data.message || message);
            
            toast({
              title: isPartnerSignup ? 'Partner application submitted!' : 'Account created successfully!',
              description: isPartnerSignup 
                ? 'Welcome to the partner program. You can now log in.'
                : 'Welcome to the platform. You can now log in.',
            });
            
            // Redirect to appropriate page after a short delay
            setTimeout(() => {
              router.push(isPartnerSignup ? '/partners' : '/login');
            }, 2000);
          }
        }
      } catch (err: any) {
        logErrorToProduction('Signup error details:', {
          message: err.message,
          response: err.response ? {
            status: err.response.status,
            statusText: err.response.statusText,
            data: err.response.data
          } : 'No response',
          request: err.request ? 'Request made but no response' : 'No request',
          config: err.config ? {
            url: err.config.url,
            method: err.config.method
          } : 'No config'
        });
        
        const status = err.response?.status;
        // Try both 'error' and 'message' fields for compatibility
        const errorMsg = err.response?.data?.error || err.response?.data?.message || 'Signup failed. Please try again.';
        
        logInfo('Processed error message:', { data: errorMsg });
        
        if (status === 409) {
          // Handle duplicate email specifically
          setErrorMessage(errorMsg);
          setErrors({ email: errorMsg });
          
          // Show toast notification
          toast({
            title: 'Signup failed',
            description: errorMsg,
            variant: 'destructive',
          });
        } else if (status === 400) {
          // Handle validation errors (weak password, etc.)
          setErrorMessage(errorMsg);
          
          // Set the error on password field if it's password-related
          if (errorMsg.toLowerCase().includes('password')) {
            setErrors({ password: errorMsg });
          } else {
            setErrors({ confirm: errorMsg });
          }
          
          toast({
            title: 'Signup failed',
            description: errorMsg,
            variant: 'destructive',
          });
        } else {
          // Handle other errors (network, server, etc.)
          setErrorMessage(errorMsg);
          setErrors({ confirm: errorMsg });
          
          // Show toast notification for other errors
          toast({
            title: 'Signup failed',
            description: errorMsg,
            variant: 'destructive',
          });
        }
      } finally {
        logInfo('Form submission completed, setting loading to false');
        setLoading(false);
      }
    }
  });

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formik.setTouched({
      name: true,
      email: true,
      password: true,
      confirm: true,
      terms: true
    });
    await formik.handleSubmit(e);
  };

  // After successful registration, guide the user to the verification screen
  useEffect(() => {
    if (emailVerificationRequired && formik.values.email) {
      const timer = setTimeout(() => {
        router.push(`/verify-status?email=${encodeURIComponent(formik.values.email)}`);
      }, 3000);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [emailVerificationRequired, formik.values.email, router]);

  // Show loading state only during initial health check
  if (healthCheckLoading) {
    return (
      <AuthLayout>
        <div className="flex min-h-screen items-center justify-center p-4">
          <div className="text-center space-y-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            <p className="text-muted-foreground">Initializing signup...</p>
          </div>
        </div>
      </AuthLayout>
>>>>>>> origin/auto/autonomy-17186719616
    );
  }

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-4">
      <SEO 
        title="Sign Up - Zion Tech Group"
        description="Create your Zion Tech Group account and start leveraging cutting-edge AI and technology solutions for your business."
      />
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Create your account and start leveraging cutting-edge AI, cloud computing, 
              and emerging technologies to transform your business.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Create Your Account</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                    First Name *
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name *
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              {/* Password Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                    Password *
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200 pr-12"
                      placeholder="Create a password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors duration-200"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Must be at least 8 characters</p>
                </div>
                
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                    Confirm Password *
                  </label>
                  <div className="relative">
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200 pr-12"
                      placeholder="Confirm your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors duration-200"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Company Information */}
              <div className="border-t border-slate-600 pt-6">
                <h3 className="text-lg font-semibold text-white mb-4">Company Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company Name
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200"
                      placeholder="Enter company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-gray-300 mb-2">
                      Industry
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200"
                    >
                      <option value="">Select industry</option>
                      {industries.map(industry => (
                        <option key={industry} value={industry}>{industry}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="companySize" className="block text-sm font-medium text-gray-300 mb-2">
                      Company Size
                    </label>
                    <select
                      id="companySize"
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200"
                    >
                      <option value="">Select company size</option>
                      {companySizes.map(size => (
                        <option key={size} value={size}>{size}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-4">
                  <label htmlFor="website" className="block text-sm font-medium text-gray-300 mb-2">
                    Website
                  </label>
                  <input
                    id="website"
                    name="website"
                    type="url"
                    value={formData.website}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200"
                    placeholder="https://yourcompany.com"
                  />
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <input
                    id="agreeToTerms"
                    name="agreeToTerms"
                    type="checkbox"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    className="mt-1 w-4 h-4 text-cyan-500 bg-slate-700 border-slate-600 rounded focus:ring-cyan-500 focus:ring-2"
                    required
                  />
                  <label htmlFor="agreeToTerms" className="text-sm text-gray-300">
                    I agree to the{' '}
                    <Link to="/terms" className="text-cyan-400 hover:text-cyan-300 underline">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy" className="text-cyan-400 hover:text-cyan-300 underline">
                      Privacy Policy
                    </Link> *
                  </label>
                </div>
                
                <div className="flex items-start space-x-3">
                  <input
                    id="agreeToMarketing"
                    name="agreeToMarketing"
                    type="checkbox"
                    checked={formData.agreeToMarketing}
                    onChange={handleInputChange}
                    className="mt-1 w-4 h-4 text-cyan-500 bg-slate-700 border-slate-600 rounded focus:ring-cyan-500 focus:ring-2"
                  />
                  <label htmlFor="agreeToMarketing" className="text-sm text-gray-300">
                    I agree to receive marketing communications about Zion Tech Group products and services
                  </label>
                </div>
              </div>

              {error && (
                <div className="flex items-center p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-400 mr-3" />
                  <span className="text-red-400 text-sm">{error}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 px-6 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
              >
                {isLoading ? 'Creating Account...' : 'Create Account'}
                {!isLoading && <ArrowRight className="w-5 h-5 ml-2" />}
              </button>

              <div className="text-center">
                <p className="text-gray-400">
                  Already have an account?{' '}
                  <Link
                    to="/login"
                    className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200"
                  >
                    Sign in here
                  </Link>
                </p>
              </div>
            </form>
          </motion.div>

          {/* Benefits Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Cutting-Edge AI Solutions</h4>
                    <p className="text-gray-400 text-sm">Access to the latest artificial intelligence and machine learning technologies</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Expert Support Team</h4>
                    <p className="text-gray-400 text-sm">24/7 technical support and dedicated account management</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Scalable Infrastructure</h4>
                    <p className="text-gray-400 text-sm">Cloud-native solutions that grow with your business needs</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Security First</h4>
                    <p className="text-gray-400 text-sm">Enterprise-grade security and compliance standards</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Get Started Today</h3>
              <p className="text-gray-400 mb-6">
                Join thousands of businesses already transforming their operations with Zion Tech Group's innovative solutions.
              </p>
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span>Free trial available</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span>No setup fees</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span>Instant access</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
=======
    <AuthLayout>
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-sm space-y-4">
          {isPartnerSignup && (
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-foreground">Partner Application</h1>
              <p className="text-sm text-muted-foreground mt-2">
                Join the Zion AI Partner Program and start earning rewards
              </p>
            </div>
          )}
          <form onSubmit={handleFormSubmit} className="space-y-4" noValidate>
          {/* Show Health Check Warning */}
          {healthCheckError && (
            <Alert variant="destructive" className="border-yellow-500 bg-yellow-50 text-yellow-900">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription className="flex items-center justify-between">
                <span>{healthCheckError}. You can still try to sign up, but it may fail.</span>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={performHealthCheck}
                  disabled={healthCheckLoading}
                  className="ml-2 text-xs"
                >
                  {healthCheckLoading ? 'Checking...' : 'Retry'}
                </Button>
              </AlertDescription>
            </Alert>
          )}
          
          {/* Show Success message */}
          {successMessage && (
            <Alert className="border-green-500 bg-green-50 text-green-900" data-testid="success-alert">
              {emailVerificationRequired ? <Mail className="h-4 w-4" /> : <CheckCircle className="h-4 w-4" />}
              <AlertDescription>{successMessage}</AlertDescription>
            </Alert>
          )}
          
          {/* Show Error message */}
          {errorMessage && (
            <Alert variant="destructive" data-testid="error-alert">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{errorMessage}</AlertDescription>
            </Alert>
          )}
          
          {emailVerificationRequired && (
            <Alert className="border-blue-500 bg-blue-50 text-blue-900">
              <Mail className="h-4 w-4" />
              <AlertDescription>
                Before you can log in, please click the verification link in the email we sent to <strong>{formik.values.email}</strong>.
              </AlertDescription>
            </Alert>
          )}
          
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Full Name
            </label>
            <Input
              id="name"
              name="name"
              data-testid="name-input"
              value={formik.values.name}
              onChange={formik.handleChange}
              disabled={loading || emailVerificationRequired}
            />
            {formik.touched.name && formik.errors.name && (
              <div className="text-red-500 text-sm">{formik.errors.name}</div>
            )}
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email address
            </label>
            <Input
              id="email"
              type="email"
              name="email"
              data-testid="email-input"
              value={formik.values.email}
              onChange={formik.handleChange}
              disabled={loading || emailVerificationRequired}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            )}
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
          <Input
            id="password"
            type="password"
            name="password"
            data-testid="password-input"
            value={formik.values.password}
            onChange={formik.handleChange}
            disabled={loading || emailVerificationRequired}
          />
          <PasswordStrengthMeter password={formik.values.password} />
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-500 text-sm">{formik.errors.password}</div>
          )}
        </div>
          
          <div>
            <label htmlFor="confirm" className="block text-sm font-medium">
              Confirm Password
            </label>
            <Input
              id="confirm"
              type="password"
              name="confirm"
              data-testid="confirm-password-input"
              value={formik.values.confirm}
              onChange={formik.handleChange}
              disabled={loading || emailVerificationRequired}
            />
            {formik.touched.confirm && formik.errors.confirm && (
              <div className="text-red-500 text-sm">{formik.errors.confirm}</div>
            )}
          </div>
          
          <div className="flex items-center space-x-2">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              data-testid="terms-checkbox"
              checked={formik.values.terms}
              onChange={formik.handleChange}
              disabled={loading || emailVerificationRequired}
            />
            <label htmlFor="terms" className="text-sm">
              I agree to the{' '}
              <Link href="/terms" className="underline">Terms of Service</Link>{' '}
              and{' '}
              <Link href="/privacy" className="underline">Privacy Policy</Link>
            </label>
          </div>
          {formik.touched.terms && formik.errors.terms && (
            <div className="text-red-500 text-sm">{formik.errors.terms}</div>
          )}
          
          {!emailVerificationRequired ? (
            <Button 
              type="submit" 
              disabled={loading} 
              data-testid="signup-submit"
              className={healthCheckError ? 'bg-yellow-600 hover:bg-yellow-700' : ''}
            >
              {loading ? (
                <>
                  <LoadingSpinner size="sm" className="mr-2" />
                  Creating Account...
                </>
              ) : (
                healthCheckError ? 'Try Creating Account' : 'Create Account'
              )}
            </Button>
          ) : (
            <div className="space-y-2">
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => router.push('/login')}
              >
                Go to Login
              </Button>
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() =>
                  router.push(`/verify-status?email=${encodeURIComponent(formik.values.email)}`)
                }
              >
                Check Verification Status
              </Button>
              <Button
                type="button"
                variant="ghost"
                className="w-full text-sm"
                onClick={() => {
                  setEmailVerificationRequired(false);
                  setSuccessMessage('');
                }}
              >
                Try Different Email
              </Button>
            </div>
          )}
          
          {/* Additional help text when service issues are detected */}
          {healthCheckError && (
            <div className="text-center text-xs text-muted-foreground mt-4 p-3 bg-muted rounded">
              <p>⚠️ We detected some authentication service issues.</p>
              <p>If signup fails, please try again in a few minutes or contact support.</p>
            </div>
          )}
          </form>
          {!emailVerificationRequired && (
            <div className="mt-6">
              <AuthButtons providers={["google", "github"]} />
            </div>
          )}
        </div>
      </div>
    </AuthLayout>
  );
}
>>>>>>> origin/auto/autonomy-17186719616
