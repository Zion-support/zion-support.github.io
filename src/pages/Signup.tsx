import React, { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import {;
  Mail,;
  Lock,;
  Eye,;
  EyeOff,;
  User,;
  Building,;
  ArrowRight,;
  Shield,;
  Zap,;
  Users,;
  CheckCircle;
} from "lucide-react"
export default function Signup() {;
  const [formData, setFormData] = useState({;
    firstName: '',lastName: '',email: '',company: '',password: '',confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false),;
  const [showConfirmPassword, setShowConfirmPassword] = useState(false),;
  const [isLoading, setIsLoading] = useState(false),;
  const [agreedToTerms, setAgreedToTerms] = useState(false),;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {;
    setFormData({;
      ...formData
      [e.target.name]: e.target.value
    }),;
  },;
  const handleSubmit = async (e: React.FormEvent) => {;
    e.preventDefault()
    if (!agreedToTerms) {;
      alert('Please agree to the terms and conditions'),;
      return;
    };
    if (formData.password !== formData.confirmPassword) {;
      alert('Passwords do not match'),;
      return,;
    };
    setIsLoading(true),;
    //[^;]*
    await new Promise(resolve => setTimeout(resolve, 2000)),;
    //[^;]*
    console.log('Signup attempt:', formData),;
    setIsLoading(false),;
  },;
  const features = [;
    {;
      icon: <Shield className="h-6 w-6 text-zion-cyan" />,title: "Enterprise Security",description: "Bank-level security protocols protect your data and ensure compliance"
    };
    {;
      icon: <Zap className="h-6 w-6 text-zion-purple" />,title: "Lightning Fast",description: "Optimized performance for seamless user experience across all devices"
    };
    {;
      icon: <Users className="h-6 w-6 text-zion-cyan" />,title: "Team Collaboration",description: "Built-in tools for seamless team communication and project management"
    };
  ];
  const benefits = [;
    "Access to cutting-edge AI solutions",;
    "24/7 customer support",;
    "Free consultation session",;
    "Exclusive partner discounts",;
    "Early access to new features",;
    "Dedicated account manager"
  ],;
  return (
    <div className="min-h-screen bg-zion-blue text-white flex">;
      {/* Left Side - Signup Form */};
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">;
        <div className="w-full max-w-md">;
          {/* Header */};
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <Link to="/" className="inline-block mb-6">;
              <div className="text-3xl font-bold text-zion-cyan">Zion Tech Group</[^>]*>
            </[^>]*>
            <h1 className="text-3xl font-bold text-white mb-2">Create Account</[^>]*>
            <p className="text-zion-slate-light">;
              Join thousands of businesses transforming with AI;
            </[^>]*>
          </[^>]*>
          {/* Signup Form */};
          <motion.form
            onSubmit={handleSubmit};
            className="[^"]*"
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8, delay: 0.2 }};
          >;
            {/* Name Fields */};
            <div className="grid grid-cols-2 gap-4">;
              <div>;
                <label htmlFor="firstName" className="block text-sm font-medium text-zion-slate-light mb-2">;
                  First Name;
                </[^>]*>
                <div className="relative">;
                  <[^>]*/>
                  <input;
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName};
                    onChange={handleChange};
                    required;
                    className="[^"]*"
                    placeholder="First name"
                  />;
                </[^>]*>
              </[^>]*>
              <div>;
                <label htmlFor="lastName" className="block text-sm font-medium text-zion-slate-light mb-2">;
                  Last Name;
                </[^>]*>
                <div className="relative">;
                  <[^>]*/>
                  <input;
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName};
                    onChange={handleChange};
                    required;
                    className="[^"]*"
                    placeholder="Last name"
                  />;
                </[^>]*>
              </[^>]*>
            </[^>]*>
            {/* Email Field */};
            <div>;
              <label htmlFor="email" className="block text-sm font-medium text-zion-slate-light mb-2">;
                Email Address;
              </[^>]*>
              <div className="relative">;
                <[^>]*/>
                <input;
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email};
                  onChange={handleChange};
                  required;
                  className="[^"]*"
                  placeholder="Enter your email address"
                />;
              </[^>]*>
            </[^>]*>
            {/* Company Field */};
            <div>;
              <label htmlFor="company" className="block text-sm font-medium text-zion-slate-light mb-2">;
                Company Name;
              </[^>]*>
              <div className="relative">;
                <[^>]*/>
                <input;
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company};
                  onChange={handleChange};
                  className="[^"]*"
                  placeholder="Company name (optional)"
                />;
              </[^>]*>
            </[^>]*>
            {/* Password Fields */};
            <div className="grid grid-cols-2 gap-4">;
              <div>;
                <label htmlFor="password" className="block text-sm font-medium text-zion-slate-light mb-2">;
                  Password;
                </[^>]*>
                <div className="relative">;
                  <[^>]*/>
                  <input;
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password};
                    onChange={handleChange};
                    required;
                    className="[^"]*"
                    placeholder="Create password"
                  />;
                  <button;
                    type="button"
                    onClick={() => setShowPassword(!showPassword)};
                    className="[^"]*"
                  >;
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </[^>]*>
                </[^>]*>
              </[^>]*>
              <div>;
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-zion-slate-light mb-2">;
                  Confirm Password;
                </[^>]*>
                <div className="relative">;
                  <[^>]*/>
                  <input;
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword};
                    onChange={handleChange};
                    required;
                    className="[^"]*"
                    placeholder="Confirm password"
                  />;
                  <button;
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)};
                    className="[^"]*"
                  >;
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
            {/* Terms Agreement */};
            <div className="flex items-start gap-3">;
              <input;
                type="checkbox"
                id="terms"
                checked={agreedToTerms};
                onChange={(e) => setAgreedToTerms(e.target.checked)};
                className="[^"]*"
              />;
              <label htmlFor="terms" className="text-sm text-zion-slate-light">;
                I agree to the{' '};
                <Link to="/terms" className="text-zion-cyan hover:text-zion-cyan-light">;
                  Terms of Service;
                </Link>{' '};
                and{' '};
                <Link to="/privacy" className="text-zion-cyan hover:text-zion-cyan-light">;
                  Privacy Policy;
                </[^>]*>
              </[^>]*>
            </[^>]*>
            {/* Submit Button */};
            <button;
              type="submit"
              disabled={isLoading || !agreedToTerms}
              className="[^"]*"
            >;
              {isLoading ? (;
                <>;
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></[^>]*>
                  Creating Account...;
                </[^>]*>
              ) : (;
                <>;
                  Create Account;
                  <[^>]*/>
                </[^>]*>
              )};
            </[^>]*>
            {/* Divider */};
            <div className="relative">;
              <div className="absolute inset-0 flex items-center">;
                <div className="w-full border-t border-zion-purple/30"></[^>]*>
              </[^>]*>
              <div className="relative flex justify-center text-sm">;
                <span className="px-2 bg-zion-blue text-zion-slate-light">Or continue with</[^>]*>
              </[^>]*>
            </[^>]*>
            {/* Social Signup Buttons */};
            <div className="grid grid-cols-2 gap-3">;
              <button;
                type="button"
                className="[^"]*"
              >;
                <svg className="w-5 h-5" viewBox="0 0 24 24">;
                  <[^>]*/>
                  <[^>]*/>
                  <[^>]*/>
                  <[^>]*/>
                </[^>]*>
                Google;
              </[^>]*>
              <button;
                type="button"
                className="[^"]*"
              >;
                <svg className="w-5 h-5" viewBox="0 0 24 24">;
                  <[^>]*/>
                </[^>]*>
                LinkedIn;
              </[^>]*>
            </[^>]*>
            {/* Sign In Link */};
            <div className="text-center">;
              <p className="text-zion-slate-light">;
                Already have an account?{' '};
                <Link;
                  to="/login"
                  className="[^"]*"
                >;
                  Sign in here;
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
      {/* Right Side - Features & Benefits */};
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-zion-purple to-zion-purple-light p-12">;
        <div className="w-full max-w-lg mx-auto">;
          <motion.div
            initial={{ opacity: 0, x: 30 }};
            animate={{ opacity: 1, x: 0 }};
            transition={{ duration: 0.8, delay: 0.4 }};
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Join the AI Revolution;
            </[^>]*>
            <p className="text-xl text-zion-slate-light mb-12 leading-relaxed">;
              Get access to cutting-edge AI solutions, cybersecurity services, and digital transformation expertise.;
              Start your journey towards business innovation today.;
            </[^>]*>
            {/* Features List */};
            <div className="space-y-8 mb-12">;
              {features.map((feature, index) => (;
                <motion.div
                  key={feature.title};
                  className="[^"]*"
                  initial={{ opacity: 0, x: 30 }};
                  animate={{ opacity: 1, x: 0 }};
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }};
                >;
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">;
                    {feature.icon};
                  </[^>]*>
                  <div>;
                    <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</[^>]*>
                    <p className="text-zion-slate-light">{feature.description}</[^>]*>
                  </[^>]*>
                </[^>]*>
              ))};
            </[^>]*>
            {/* Benefits List */};
            <div className="mb-12">;
              <h3 className="text-2xl font-bold text-white mb-6">What You'll Get</[^>]*>
              <div className="space-y-3">;
                {benefits.map((benefit, index) => (;
                  <motion.div
                    key={benefit};
                    className="[^"]*"
                    initial={{ opacity: 0, x: 30 }};
                    animate={{ opacity: 1, x: 0 }};
                    transition={{ duration: 0.8, delay: 1 + index * 0.1 }};
                  >;
                    <[^>]*/>
                    <span className="text-zion-slate-light">{benefit}</[^>]*>
                  </[^>]*>
                ))};
              </[^>]*>
            </[^>]*>
            {/* Stats */};
            <motion.div
              className="[^"]*"
              initial={{ opacity: 0, y: 30 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8, delay: 1.5 }};
            >;
              <div>;
                <div className="text-3xl font-bold text-white mb-1">500+</[^>]*>
                <div className="text-zion-slate-light text-sm">Happy Clients</[^>]*>
              </[^>]*>
              <div>;
                <div className="text-3xl font-bold text-white mb-1">100+</[^>]*>
                <div className="text-zion-slate-light text-sm">Projects Delivered</[^>]*>
              </[^>]*>
              <div>;
                <div className="text-3xl font-bold text-white mb-1">99.9%</[^>]*>
                <div className="text-zion-slate-light text-sm">Uptime</[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};
