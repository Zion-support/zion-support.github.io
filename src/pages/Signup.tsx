import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  UserPlus,
  CheckCircle,
  ArrowRight,
  Users,
  Building2,
  Globe,
  Zap,
  Brain,
  Server,
  Shield,
  Target,
  FileText,
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  Award,
  TrendingUp,
  Lightbulb,
  Lock,
  Eye,
  EyeOff,
  AlertCircle
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
    industry: '',
    role: '',
    teamSize: '',
    useCase: '',
    newsletter: false,
    terms: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    
    if (!formData.confirmPassword) newErrors.confirmPassword = 'Please confirm your password';
    else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    
    if (!formData.terms) newErrors.terms = 'You must accept the terms and conditions';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log('Signup form submitted:', formData);
    }
  };

  const industries = [
    'Healthcare', 'Financial Services', 'Manufacturing', 'Government', 'Retail', 'Education',
    'Technology', 'Real Estate', 'Transportation', 'Energy', 'Telecommunications', 'Media & Entertainment',
    'Professional Services', 'Non-Profit', 'Other'
  ];

  const roles = [
    'CEO/Founder', 'CTO/CIO', 'IT Director', 'Software Engineer', 'Data Scientist', 'Product Manager',
    'Business Analyst', 'Operations Manager', 'Marketing Manager', 'Sales Manager', 'Student', 'Other'
  ];

  const teamSizes = [
    '1-10 employees', '11-50 employees', '51-200 employees', '201-500 employees', '500+ employees'
  ];

  const useCases = [
    'AI & Machine Learning', 'Cloud Migration', 'Digital Transformation', 'Cybersecurity',
    'Data Analytics', 'IoT Solutions', 'Blockchain', 'Micro SaaS Platform', 'Legacy Modernization',
    'API Development', 'Mobile App Development', 'Web Development', 'DevOps Implementation',
    'Research & Development', 'Other'
  ];

  const benefits = [
    { icon: Zap, title: 'Access to AI Platform', description: 'Start building AI solutions immediately' },
    { icon: Brain, title: 'Expert Support', description: '24/7 access to our AI specialists' },
    { icon: Server, title: 'Cloud Infrastructure', description: 'Scalable cloud resources included' },
    { icon: Shield, title: 'Enterprise Security', description: 'Bank-level security and compliance' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-dark">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
              <UserPlus className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join Zion Tech Group
            </h1>
            <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
              Create your account and unlock access to cutting-edge AI solutions, 
              enterprise-grade infrastructure, and expert support. Start transforming 
              your business today.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center space-x-2 text-zinc-400">
                <CheckCircle className="w-5 h-5 text-zion-cyan" />
                <span>Free 14-day trial</span>
              </div>
              <div className="flex items-center space-x-2 text-zinc-400">
                <Clock className="w-5 h-5 text-zion-cyan" />
                <span>Setup in minutes</span>
              </div>
              <div className="flex items-center space-x-2 text-zinc-400">
                <Star className="w-5 h-5 text-zion-cyan" />
                <span>No credit card required</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Signup Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Signup Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="bg-zion-slate-dark/50 rounded-2xl p-8 border border-zion-purple/30">
                  <h2 className="text-3xl font-bold text-white mb-6">Create Your Account</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white font-medium mb-2">First Name *</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-zion-slate-dark border rounded-lg text-white placeholder-zinc-400 focus:outline-none transition-colors ${
                            errors.firstName ? 'border-red-500' : 'border-zion-purple/30 focus:border-zion-cyan'
                          }`}
                          placeholder="Enter your first name"
                        />
                        {errors.firstName && (
                          <p className="text-red-400 text-sm mt-1 flex items-center">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {errors.firstName}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-white font-medium mb-2">Last Name *</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-zion-slate-dark border rounded-lg text-white placeholder-zinc-400 focus:outline-none transition-colors ${
                            errors.lastName ? 'border-red-500' : 'border-zion-purple/30 focus:border-zion-cyan'
                          }`}
                          placeholder="Enter your last name"
                        />
                        {errors.lastName && (
                          <p className="text-red-400 text-sm mt-1 flex items-center">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {errors.lastName}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-zion-slate-dark border rounded-lg text-white placeholder-zinc-400 focus:outline-none transition-colors ${
                          errors.email ? 'border-red-500' : 'border-zion-purple/30 focus:border-zion-cyan'
                        }`}
                        placeholder="Enter your email address"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-sm mt-1 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2">Password *</label>
                      <div className="relative">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-zion-slate-dark border rounded-lg text-white placeholder-zinc-400 focus:outline-none transition-colors pr-12 ${
                            errors.password ? 'border-red-500' : 'border-zion-purple/30 focus:border-zion-cyan'
                          }`}
                          placeholder="Create a strong password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400 hover:text-white transition-colors"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                      {errors.password && (
                        <p className="text-red-400 text-sm mt-1 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.password}
                        </p>
                      )}
                      <p className="text-zinc-400 text-sm mt-1">Must be at least 8 characters long</p>
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2">Confirm Password *</label>
                      <div className="relative">
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-zion-slate-dark border rounded-lg text-white placeholder-zinc-400 focus:outline-none transition-colors pr-12 ${
                            errors.confirmPassword ? 'border-red-500' : 'border-zion-purple/30 focus:border-zion-cyan'
                          }`}
                          placeholder="Confirm your password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400 hover:text-white transition-colors"
                        >
                          {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                      {errors.confirmPassword && (
                        <p className="text-red-400 text-sm mt-1 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.confirmPassword}
                        </p>
                      )}
                    </div>

                    {/* Company Information */}
                    <div>
                      <label className="block text-white font-medium mb-2">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-purple/30 rounded-lg text-white placeholder-zinc-400 focus:border-zion-cyan focus:outline-none transition-colors"
                        placeholder="Enter your company name"
                      />
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-purple/30 rounded-lg text-white placeholder-zinc-400 focus:border-zion-cyan focus:outline-none transition-colors"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white font-medium mb-2">Industry</label>
                        <select
                          name="industry"
                          value={formData.industry}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-purple/30 rounded-lg text-white focus:border-zion-cyan focus:outline-none transition-colors"
                        >
                          <option value="">Select your industry</option>
                          {industries.map((industry) => (
                            <option key={industry} value={industry}>{industry}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-white font-medium mb-2">Role</label>
                        <select
                          name="role"
                          value={formData.role}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-purple/30 rounded-lg text-white focus:border-zion-cyan focus:outline-none transition-colors"
                        >
                          <option value="">Select your role</option>
                          {roles.map((role) => (
                            <option key={role} value={role}>{role}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white font-medium mb-2">Team Size</label>
                        <select
                          name="teamSize"
                          value={formData.teamSize}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-purple/30 rounded-lg text-white focus:border-zion-cyan focus:outline-none transition-colors"
                        >
                          <option value="">Select team size</option>
                          {teamSizes.map((size) => (
                            <option key={size} value={size}>{size}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-white font-medium mb-2">Primary Use Case</label>
                        <select
                          name="useCase"
                          value={formData.useCase}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-purple/30 rounded-lg text-white focus:border-zion-cyan focus:outline-none transition-colors"
                        >
                          <option value="">Select primary use case</option>
                          {useCases.map((useCase) => (
                            <option key={useCase} value={useCase}>{useCase}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Checkboxes */}
                    <div className="space-y-4">
                      <label className="flex items-start space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="newsletter"
                          checked={formData.newsletter}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-zion-cyan bg-zion-slate-dark border-zion-purple/30 rounded focus:ring-zion-cyan mt-1"
                        />
                        <span className="text-zinc-300 text-sm">
                          I want to receive updates about new features, AI insights, and industry trends
                        </span>
                      </label>

                      <label className="flex items-start space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="terms"
                          checked={formData.terms}
                          onChange={handleInputChange}
                          className={`w-4 h-4 text-zion-cyan bg-zion-slate-dark border rounded focus:ring-zion-cyan mt-1 ${
                            errors.terms ? 'border-red-500' : 'border-zion-purple/30'
                          }`}
                        />
                        <span className="text-zinc-300 text-sm">
                          I agree to the{' '}
                          <Link to="/terms" className="text-zion-cyan hover:underline">
                            Terms of Service
                          </Link>{' '}
                          and{' '}
                          <Link to="/privacy" className="text-zion-cyan hover:underline">
                            Privacy Policy
                          </Link>
                          *
                        </span>
                      </label>
                      {errors.terms && (
                        <p className="text-red-400 text-sm flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.terms}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25"
                    >
                      Create Account
                      <ArrowRight className="w-5 h-5 ml-2 inline" />
                    </button>

                    <p className="text-center text-zinc-400">
                      Already have an account?{' '}
                      <Link to="/login" className="text-zion-cyan hover:underline font-medium">
                        Sign in here
                      </Link>
                    </p>
                  </form>
                </div>
              </motion.div>

              {/* Benefits and Features */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">What You'll Get</h3>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={benefit.title} className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center flex-shrink-0">
                          <benefit.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-1">{benefit.title}</h4>
                          <p className="text-zinc-400">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-zion-slate-dark/30 rounded-2xl p-6 border border-zion-purple/20">
                  <h4 className="text-xl font-semibold text-white mb-4">Free Trial Includes</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3 text-zinc-300">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span>Full access to AI platform for 14 days</span>
                    </li>
                    <li className="flex items-center space-x-3 text-zinc-300">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span>Up to 5 AI models and workflows</span>
                    </li>
                    <li className="flex items-center space-x-3 text-zinc-300">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span>10GB cloud storage</span>
                    </li>
                    <li className="flex items-center space-x-3 text-zinc-300">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span>Email support</span>
                    </li>
                    <li className="flex items-center space-x-3 text-zinc-300">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span>Basic analytics dashboard</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-blue/10 rounded-2xl p-6 border border-zion-cyan/20">
                  <h4 className="text-xl font-semibold text-white mb-4">Ready to Get Started?</h4>
                  <p className="text-zinc-300 mb-4">
                    Join thousands of businesses already using Zion Tech Group to accelerate their AI transformation.
                  </p>
                  <Link
                    to="/get-started"
                    className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light font-medium group"
                  >
                    Learn more about our solutions
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-12">Trusted by Industry Leaders</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { icon: Award, title: '500+', subtitle: 'Successful Projects' },
                { icon: Users, title: '10,000+', subtitle: 'Active Users' },
                { icon: Star, title: '98%', subtitle: 'Client Satisfaction' },
                { icon: TrendingUp, title: '40%', subtitle: 'Average ROI Increase' }
              ].map((stat, index) => (
                <div key={stat.title} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.title}</div>
                  <div className="text-zinc-400">{stat.subtitle}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
