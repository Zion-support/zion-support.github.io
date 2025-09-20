import React, { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ;
  Mail,;
  Lock, ;
  Eye, ;
  EyeOff, ;
  User, ;
  Building, ;
  Globe, ;
  ArrowRight,;
  CheckCircle,;
  AlertCircle,;
  Shield,;
  Zap,;
  Brain,;
  Cloud,;
  Server,;
  BarChart3,;
  Code,;
  Network,;
  Atom,;
  TrendingUp,;
  Heart,;
  MessageCircle,;
  ExternalLink,;
  Github,;
  Linkedin,;
  Twitter,;
  Facebook,;
  Chrome,;
  Apple,;
  Smartphone,;
  Monitor,;
  Tablet,;
  Laptop;
} from "lucide-react"
import { SEO } from "../components/SEO"
export default function Login() {;
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({;
    email: '',password: '',confirmPassword: '',firstName: '',lastName: '',company: '',phone: '',acceptTerms: false,acceptMarketing: false;
  });
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [submitted, setSubmitted] = useState(false),;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {;
    const { name, value, type, checked } = e.target,;
    setFormData(prev => ({;
      ...prev,;
      [name]: type === 'checkbox' ? checked : value
    })),;
  },;

  const handleSubmit = async (e: React.FormEvent) => {;
    e.preventDefault()
    setIsSubmitting(true),;
    ;
    //[^;]*
    await new Promise(resolve => setTimeout(resolve, 2000)),;
    ;
    setIsSubmitting(false),;
    setSubmitted(true),;
    ;
    //[^;]*
    setTimeout(() => {;
      setSubmitted(false),;
      setFormData({;
        email: '',password: '',confirmPassword: '',firstName: '',lastName: '',company: '',phone: '',acceptTerms: false,acceptMarketing: false;
      });
    }, 5000),;
  },;

  const socialLoginOptions = [;
    { name: 'Google', icon: Google, color: 'bg-red-500 hover:bg-red-600' };
    { name: 'Apple', icon: Apple, color: 'bg-black hover:bg-gray-800' };
    { name: 'GitHub', icon: Github, color: 'bg-gray-800 hover:bg-gray-900' };
    { name: 'LinkedIn', icon: Linkedin, color: 'bg-blue-600 hover:bg-blue-700' };
  ];
  const features = [;
    {;
      icon: Brain,title: 'AI-Powered Solutions',description: 'Access cutting-edge artificial intelligence and machine learning services'
    };
    {;
      icon: Cloud,title: 'Cloud Infrastructure',description: 'Scalable cloud solutions for modern business needs'
    };
    {;
      icon: Shield,title: 'Cybersecurity',description: 'Advanced security and compliance solutions'
    };
    {;
      icon: Zap,title: 'Digital Transformation',description: 'Transform your business with innovative technology'
    };
  ];
  const stats = [;
    { number: '10,000+', label: 'Active Users' };
    { number: '500+', label: 'Enterprise Clients' };
    { number: '99.9%', label: 'Uptime' };
    { number: '24/7', label: 'Support' };
  ];
  return (
    <div className="min-h-screen bg-futuristic">;
      <SEO ;
        title={isLogin ? "Login - Zion Tech Group" : "Sign Up - Zion Tech Group"}
        description={isLogin ? "Access your Zion Tech Group account to manage your projects and services." : "Join Zion Tech Group to access cutting-edge technology solutions and AI services."}
      />;
      ;
      <div className="flex min-h-screen">;
        {/* Left Side - Form */};
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">;
          <div className="w-full max-w-md">;
            {/* Header */};
            <div className="text-center mb-8">;
              <motion.div
                initial={{ opacity: 0, y: 20 }};
                animate={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6 }};
              >;
                <div className="flex justify-center mb-4">;
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan via-blue-500 to-zion-purple rounded-2xl flex items-center justify-center">;
                    <[^>]*/>
                  </[^>]*>
                </[^>]*>
                <h1 className="text-3xl font-bold text-white mb-2">;
                  {isLogin ? 'Welcome Back' : 'Create Your Account'}
                </[^>]*>
                <p className="text-zion-slate-light">;
                  {isLogin ;
                    ? 'Sign in to access your dashboard and projects' ;
                    : 'Join thousands of businesses transforming with AI technology'
                  };
                </[^>]*>
              </[^>]*>
            </[^>]*>

            {/* Social Login */};
            <motion.div
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.6, delay: 0.1 }};
              className="[^"]*"
            >;
              <div className="grid grid-cols-2 gap-3">;
                {socialLoginOptions.map((option) => (;
                  <button;
                    key={option.name};
                    className={`${option.color} text-white px-4 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2`};
                  >;
                    <[^>]*/>
                    {option.name};
                  </[^>]*>
                ))};
              </[^>]*>
              <div className="relative my-6">;
                <div className="absolute inset-0 flex items-center">;
                  <[^>]*/>
                </[^>]*>
                <div className="relative flex justify-center text-sm">;
                  <span className="px-2 bg-futuristic text-zion-slate-light">Or continue with</[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>

            {/* Form */};
            <motion.form
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.6, delay: 0.2 }};
              onSubmit={handleSubmit};
              className="[^"]*"
            >;
              {!isLogin && (;&& (; (
                <>;
                  <div className="grid grid-cols-2 gap-3">;
                    <div>;
                      <label htmlFor="firstName" className="block text-sm font-medium text-white mb-2">;
                        First Name;
                      </[^>]*>
                      <input;
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName};
                        onChange={handleInputChange};
                        required;
                        className="[^"]*"
                        placeholder="First Name"
                      />;
                    </[^>]*>
                    <div>;
                      <label htmlFor="lastName" className="block text-sm font-medium text-white mb-2">;
                        Last Name;
                      </[^>]*>
                      <input;
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName};
                        onChange={handleInputChange};
                        required;
                        className="[^"]*"
                        placeholder="Last Name"
                      />;
                    </[^>]*>
                  </[^>]*>
                  ;
                  <div>;
                    <label htmlFor="company" className="block text-sm font-medium text-white mb-2">;
                      Company;
                    </[^>]*>
                    <input;
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company};
                      onChange={handleInputChange};
                      className="[^"]*"
                      placeholder="Company Name (Optional)"
                    />;
                  </[^>]*>
                  ;
                  <div>;
                    <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">;
                      Phone;
                    </[^>]*>
                    <input;
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone};
                      onChange={handleInputChange};
                      className="[^"]*"
                      placeholder="Phone Number (Optional)"
                    />;
                  </[^>]*>
                </[^>]*>
              )};

              <div>;
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">;
                  Email Address;
                </[^>]*>
                <input;
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email};
                  onChange={handleInputChange};
                  required;
                  className="[^"]*"
                  placeholder="Enter your email"
                />;
              </[^>]*>

              <div>;
                <label htmlFor="password" className="block text-sm font-medium text-white mb-2">;
                  Password;
                </[^>]*>
                <div className="relative">;
                  <input;
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password};
                    onChange={handleInputChange};
                    required;
                    className="[^"]*"
                    placeholder="Enter your password"
                  />;
                  <button;
                    type="button"
                    onClick={() => setShowPassword(!showPassword)};
                    className="[^"]*"
                  >;
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </[^>]*>
                </[^>]*>
              </[^>]*>

              {!isLogin && (;&& (; (
                <div>;
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-white mb-2">;
                    Confirm Password;
                  </[^>]*>
                  <div className="relative">;
                    <input;
                      type={showConfirmPassword ? 'text' : 'password'}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword};
                      onChange={handleInputChange};
                      required;
                      className="[^"]*"
                      placeholder="Confirm your password"
                    />;
                    <button;
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)};
                      className="[^"]*"
                    >;
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              )};

              {!isLogin && (;&& (; (
                <div className="space-y-3">;
                  <label className="flex items-center">;
                    <input;
                      type="checkbox"
                      name="acceptTerms"
                      checked={formData.acceptTerms};
                      onChange={handleInputChange};
                      required;
                      className="[^"]*"
                    />;
                    <span className="ml-2 text-sm text-zion-slate-light">;
                      I agree to the{' '};
                      <Link to="/terms" className="text-zion-cyan hover:text-zion-cyan/80 transition-colors duration-200">;
                        Terms of Service;
                      </Link>{' '};
                      and{' '};
                      <Link to="/privacy" className="text-zion-cyan hover:text-zion-cyan/80 transition-colors duration-200">;
                        Privacy Policy;
                      </[^>]*>
                    </[^>]*>
                  </[^>]*>
                  ;
                  <label className="flex items-center">;
                    <input;
                      type="checkbox"
                      name="acceptMarketing"
                      checked={formData.acceptMarketing};
                      onChange={handleInputChange};
                      className="[^"]*"
                    />;
                    <span className="ml-2 text-sm text-zion-slate-light">;
                      I want to receive updates about new features and services;
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              )};

              {isLogin && (;&& (; (
                <div className="flex items-center justify-between">;
                  <label className="flex items-center">;
                    <input;
                      type="checkbox"
                      className="[^"]*"
                    />;
                    <span className="ml-2 text-sm text-zion-slate-light">Remember me</[^>]*>
                  </[^>]*>
                  <Link to="/forgot-password" className="text-sm text-zion-cyan hover:text-zion-cyan/80 transition-colors duration-200">;
                    Forgot password?;
                  </[^>]*>
                </[^>]*>
              )};

              <button;
                type="submit"
                disabled={isSubmitting};
                className="[^"]*"
              >;
                {isSubmitting ? (;
                  <div className="flex items-center justify-center gap-2">;
                    <[^>]*/>
                    {isLogin ? 'Signing In...' : 'Creating Account...'}
                  </[^>]*>
                ) : (;
                  <div className="flex items-center justify-center gap-2">;
                    {isLogin ? 'Sign In' : 'Create Account'}
                    <[^>]*/>
                  </[^>]*>
                )};
              </[^>]*>
            </[^>]*>

            {/* Success Message */};
            {submitted && (;&& (; (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }};
                animate={{ opacity: 1, scale: 1 }};
                className="[^"]*"
              >;
                <[^>]*/>
                <p className="text-green-400 font-medium">;
                  {isLogin ? 'Successfully signed in!' : 'Account created successfully!'}
                </[^>]*>
                <p className="text-green-400/80 text-sm mt-1">;
                  Redirecting to dashboard...;
                </[^>]*>
              </[^>]*>
            )};

            {/* Toggle Form Type */};
            <motion.div
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.6, delay: 0.3 }};
              className="[^"]*"
            >;
              <p className="text-zion-slate-light">;
                {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
                <button;
                  onClick={() => setIsLogin(!isLogin)};
                  className="[^"]*"
                >;
                  {isLogin ? 'Sign up' : 'Sign in'}
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>

        {/* Right Side - Features & Stats */};
        <div className="hidden lg:flex flex-1 bg-gradient-to-br from-zion-slate-dark via-zion-blue to-zion-slate-dark p-8">;
          <div className="w-full max-w-2xl mx-auto">;
            {/* Stats */};
            <motion.div
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.6, delay: 0.4 }};
              className="[^"]*"
            >;
              {stats.map((stat, index) => (;
                <div key={stat.label} className="text-center">;
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</[^>]*>
                  <div className="text-zion-slate-light text-sm">{stat.label}</[^>]*>
                </[^>]*>
              ))};
            </[^>]*>

            {/* Features */};
            <motion.div
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.6, delay: 0.5 }};
              className="[^"]*"
            >;
              <h2 className="text-2xl font-bold text-white mb-6">;
                Why Choose Zion Tech Group?;
              </[^>]*>
              {features.map((feature, index) => (;
                <div key={feature.title} className="flex items-start gap-4">;
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center flex-shrink-0">;
                    <[^>]*/>
                  </[^>]*>
                  <div>;
                    <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</[^>]*>
                    <p className="text-zion-slate-light leading-relaxed">{feature.description}</[^>]*>
                  </[^>]*>
                </[^>]*>
              ))};
            </[^>]*>

            {/* CTA */};
            <motion.div
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.6, delay: 0.6 }};
              className="[^"]*"
            >;
              <Link;
                to="/contact"
                className="[^"]*"
              >;
                <[^>]*/>
                Get in Touch;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};