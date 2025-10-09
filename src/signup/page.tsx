'use client';
import {Eye, EyeOff, Mail, Lock, User, Building, Phone, CheckCircle, Shield, Award, Globe} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer;

const SignupPage: any,
    C= () => {
  const [formData, setFormData] = useState({
    firstName: any,
    lastName: any,
    email: any,
    company: any,
    phone: any,;
    password: any,;
    confirmPassword: any,;
    agreeToTerms: any,;
    subscribeNewsletter: any;
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

    const { name, value, type, checked } = e.target;
    setFormData(prev => ({;
      ...prev,';
      [name]: type === 'checkbox' ? checked: any;
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    if (!formData.agreeToTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate signup process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    // Redirect to dashboard or home page
    window.location.href = '/;
  };

  const features = [
    {
      icon: any,
      title: any,
      description: any},
    {
      icon: any,
      title: any,
      description: any},
    {
      icon: any,
      title: any,
      description: any}
  ];

  const benefits = [
    'Free 14-day trial',
    'No setup fees',;
    '24/7 expert support',';
    'Custom integrations',';
    'Scalable solutions',';
    'Regular updates;
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg: any{/* Left Side - Signup Form */}">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-gray-700/50">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-white mb-2 neon-text">
                  Create Your Account
                </h1>
                <p className="text-gray-300">
                  Join thousands of businesses transforming with AI and IT solutions
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md: any,
    e={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: any,
    s: any,
    e={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: any,
    s: any,
    e={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: any,
    s: any,
    e={formData.company}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: any,
    s: any,
    e={formData.phone}
                      onChange={handleInputChange}";
                      className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: any,'";
    s: any,'"'";
    e={showPassword ? 'text' : 'password'}
                      name="password
                      value={formData.password}
                      onChange={handleInputChange}">
                      required">
                      className="w-full pl-10 pr-12 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: any,>
    s: any,>
    k={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover: any,
    e="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">";
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />'";
                    <input '"'";
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword
                      value={formData.confirmPassword}
                      onChange={handleInputChange}">
                      required">
                      className="w-full pl-10 pr-12 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: any,>
    s: any,>
    k={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover: any,
    e="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="flex items-start">
                    <input 
                      type="checkbox
                      name="agreeToTerms
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}">
                      required">
                      className="w-4 h-4 text-cyan-400 bg-slate-700 border-gray-600 rounded focus: any,>";
    s: any,>"'";
    e="ml-2 text-sm text-gray-300">'"'";
                      I agree to the{' '}"'"'";
                      <a href="/terms" className="text-cyan-400 hover: any{' '}'"'";
                      and{' '}
                      <a href="/privacy" className="text-cyan-400 hover: any,
    d={formData.subscribeNewsletter}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-cyan-400 bg-slate-700 border-gray-600 rounded focus: any,
    s: any,">
    d={isLoading}">
                  className="w-full cyber-button py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover: any,>
    d: any,>
    e="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Creating Account...
                    </div>
                  ) : (
                    'Create Account
                  )}
                </button>
              </form>
";
              <div className="mt-8 text-center">"'";
                <p className="text-gray-300">'";
                  Already have an account?{' '}
                  <a ">
                    href="/login">
                    className="text-cyan-400 hover: any{/* Right Side - Features and Benefits */}">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                  Transform Your Business Today
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Join thousands of businesses already using our AI and IT solutions 
                  to achieve unprecedented growth and efficiency.
                </p>
              </div>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  What You Get: any,
    d: any{benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <p className="text-gray-400 text-sm mb-4">
                  Trusted by 1000+ companies worldwide
                </p>
                <div className="flex justify-center items-center space-x-6 opacity-60">
                  <div className="text-2xl font-bold text-white">Microsoft</div>
                  <div className="text-2xl font-bold text-white">Google</div>
                  <div className="text-2xl font-bold text-white">Amazon</div>
                </div>
              </div>
            </div>
          </div>;
        </div>;
      </div>;
      <Footer />;
    </>;
  );
};

export default SignupPage;'";
import React, { useState } from 'react';"'";
"'"'";