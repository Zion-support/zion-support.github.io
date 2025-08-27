<<<<<<< HEAD
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Eye, 
  EyeOff, 
  Lock, 
  Mail, 
  User, 
  Shield, 
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
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
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock validation
      if (formData.email === 'demo@ziontech.com' && formData.password === 'demo123') {
        setSubmitStatus('success');
        // In a real app, you would redirect or set auth state here
      } else {
        setSubmitStatus('error');
        setErrorMessage('Invalid email or password. Try demo@ziontech.com / demo123');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.email && formData.password;

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8 shadow-2xl"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Welcome Back
            </h1>
            <p className="text-zion-slate-light">
              Sign in to your Zion Tech Group account
            </p>
          </div>

          {/* Demo Credentials */}
          <div className="bg-zion-slate-dark/30 border border-zion-cyan/20 rounded-xl p-4 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-4 h-4 text-zion-cyan" />
              <span className="text-sm font-medium text-white">Demo Credentials</span>
            </div>
            <p className="text-xs text-zion-slate-light">
              Email: demo@ziontech.com | Password: demo123
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
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
                  className="w-full pl-10 pr-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-12 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
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

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-zion-cyan bg-zion-slate-dark border-zion-cyan/20 rounded focus:ring-zion-cyan focus:ring-2"
                />
                <span className="text-sm text-zion-slate-light">Remember me</span>
              </label>
              <Link 
                to="/forgot-password"
                className="text-sm text-zion-cyan hover:text-zion-blue transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                isFormValid && !isSubmitting
                  ? 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white hover:shadow-lg hover:shadow-zion-cyan/25'
                  : 'bg-zion-slate-dark/50 text-zion-slate-light cursor-not-allowed'
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Signing In...
                </>
              ) : (
                <>
                  Sign In
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400"
              >
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm">Login successful! Redirecting...</span>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400"
              >
                <AlertCircle className="w-5 h-5" />
                <span className="text-sm">{errorMessage}</span>
              </motion.div>
            )}
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-zion-slate-dark/50"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-zion-slate-dark/50 text-zion-slate-light">Or continue with</span>
            </div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            {[
              { icon: Github, label: 'GitHub', bgColor: 'bg-gray-800 hover:bg-gray-700' },
              { icon: Linkedin, label: 'LinkedIn', bgColor: 'bg-blue-600 hover:bg-blue-500' },
              { icon: Twitter, label: 'Twitter', bgColor: 'bg-blue-400 hover:bg-blue-300' }
            ].map((social) => (
              <button
                key={social.label}
                className={`${social.bgColor} text-white py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center`}
              >
                <social.icon className="w-5 h-5" />
              </button>
            ))}
          </div>

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-zion-slate-light">
              Don't have an account?{' '}
              <Link 
                to="/signup"
                className="text-zion-cyan hover:text-zion-blue font-medium transition-colors"
              >
                Sign up
              </Link>
            </p>
          </div>
        </motion.div>

        {/* Footer Links */}
        <div className="text-center mt-8">
          <div className="flex items-center justify-center gap-6 text-sm text-zion-slate-light">
            <Link to="/privacy" className="hover:text-zion-cyan transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-zion-cyan transition-colors">
              Terms of Service
            </Link>
            <Link to="/contact" className="hover:text-zion-cyan transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
=======
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useAuth } from '@/hooks/useAuth';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email.trim() || !password.trim())
            return;
        setIsLoading(true);
        setError('');
        try {
            await login(email, password);
            navigate('/dashboard');
        }
        catch (error) {
            setError('Invalid email or password. Please try again.');
        }
        finally {
            setIsLoading(false);
        }
    };
    return (_jsxs(_Fragment, { children: [_jsx(SEO, { title: "Login - Zion Tech Group", description: "Sign in to your Zion Tech Group account to access the marketplace.", canonical: "https://ziontechgroup.com/login" }), _jsx("div", { className: "min-h-screen bg-zion-blue flex items-center justify-center", children: _jsxs("div", { className: "max-w-md w-full mx-auto p-6", children: [_jsxs("div", { className: "text-center mb-8", children: [_jsx(GradientHeading, { children: "Welcome Back" }), _jsx("p", { className: "text-zion-slate-light mt-4", children: "Sign in to your account to continue" })] }), error && (_jsx("div", { className: "mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg", children: _jsx("p", { className: "text-red-400 text-sm", children: error }) })), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-white mb-2", children: "Email Address" }), _jsxs("div", { className: "relative", children: [_jsx(Mail, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" }), _jsx(Input, { id: "email", type: "email", value: email, onChange: (e) => setEmail(e.target.value), placeholder: "Enter your email", className: "pl-10 bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate-light focus:border-zion-cyan", required: true })] })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "password", className: "block text-sm font-medium text-white mb-2", children: "Password" }), _jsxs("div", { className: "relative", children: [_jsx(Lock, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" }), _jsx(Input, { id: "password", type: showPassword ? 'text' : 'password', value: password, onChange: (e) => setPassword(e.target.value), placeholder: "Enter your password", className: "pl-10 pr-10 bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate-light focus:border-zion-cyan", required: true }), _jsx("button", { type: "button", onClick: () => setShowPassword(!showPassword), className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light hover:text-white transition-colors", "aria-label": showPassword ? 'Hide password' : 'Show password', children: showPassword ? _jsx(EyeOff, { className: "h-4 w-4" }) : _jsx(Eye, { className: "h-4 w-4" }) })] })] }), _jsx("div", { className: "flex items-center justify-between", children: _jsx(Link, { to: "/forgot-password", className: "text-sm text-zion-cyan hover:underline", children: "Forgot password?" }) }), _jsx(Button, { type: "submit", disabled: isLoading || !email.trim() || !password.trim(), className: "w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple disabled:opacity-50 disabled:cursor-not-allowed", children: isLoading ? 'Signing In...' : 'Sign In' })] }), _jsx("div", { className: "mt-8 text-center", children: _jsxs("p", { className: "text-zion-slate-light text-sm", children: ["Don't have an account?", ' ', _jsx(Link, { to: "/signup", className: "text-zion-cyan hover:underline", children: "Sign up" })] }) })] }) })] }));
import React, { useState } from 'react';
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Login attempt:', { email, password });
    };
    return (<div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO title="Login" description="Access your Zion Tech Group account" keywords="login, sign in, account access, Zion Tech Group" canonical="https://ziontechgroup.com/login"/>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <GradientHeading>Welcome Back</GradientHeading>
            <p className="text-zion-slate-light mt-2">
              Sign in to your account to continue
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zion-slate-light mb-2">
                  Email Address
                </label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-3 py-2 bg-white/20 border border-zion-slate-light rounded-md text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan" placeholder="Enter your email"/>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-zion-slate-light mb-2">
                  Password
                </label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full px-3 py-2 bg-white/20 border border-zion-slate-light rounded-md text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan" placeholder="Enter your password"/>
              </div>

              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-zion-slate-light">
                Don't have an account?{' '}
                <a href="/signup" className="text-zion-cyan hover:underline">
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>);
=======
}
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
