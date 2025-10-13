import {Eye, EyeOff, Mail, Lock, User, Building, Phone, CheckCircle, Shield, Award, Globe} from 'lucide-react';
'use client';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
<<<<<<< HEAD
const SignupPage: React.FC = () => {
  const [formData, setFormData] = useState({
=======
;
const SignupPage: React.FC = () => {
};
const [formData, setFormData] = useState({
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
    subscribeNewsletter: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
<<<<<<< HEAD
    }));
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match'),
      return
  }
    if (!formData.agreeToTerms) {
      alert('Please agree to the terms and conditions');
    setIsLoading(true);
    // Simulate signup process
=======
    }))};
;
const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return};
    if (!formData.agreeToTerms) {
      alert('Please agree to the terms and conditions');
    setIsLoading(true);
    /
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    // Redirect to dashboard or home page
    window.location.href = '/';
<<<<<<< HEAD
  const features = [
    {
=======
;
const features = [
[
        {
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      icon: Shield,
      title: 'Enterprise Security',
      description:     ,
$4},
      icon: Award,
      title: 'Proven Results',
      description:       ,
icon$5: Globe,
      title: 'Global Support',
      description:   ,
$4];
<<<<<<< HEAD
  const benefits = [
=======
;
const benefits = [
];
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    'Free 14-day trial',
    'No setup fees',
    '24/7 expert support',
    'Custom integrations',
    'Scalable solutions',
    'Regular updates'
  return (
    <React .Fragment>
    <div>Coming Soon</div>
<<<<<<< HEAD
  );
}
  const [formData, setFormData] = useState({/* TODO: Fix JSX expression */}
  O: Add content,}
}
=======
  )};
  const [formData, setFormData] = useState({/* TODO: Fix JSX expression */};
  O: Add content};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  firstNam,
  e: '',
    lastNam,
  e: '',
    emai,
  l: '',
    compan,
  y: '',
    phon,
  e: '',
    passwor,
  d: '',
    confirmPasswor,
  d: '',
    agreeToTerm,
  s: false,
    subscribeNewslette,
  r: false,)
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
const handleInputChange = (e: React.ChangeEvent,)
          <HTMLInputElement>) => {/* TODO: Fix JSX expression */}
    const { name, value, type, checked } = e.target;
<<<<<<< HEAD
    setFormData(prev => ({/* TODO: Fix JSX expression */}
  O: Add content,}
}
//       ...prev,
      [name]: type === 'checkbox' ? checked : value;)
    }));
  }
  const handleSubmit = async (e: React.FormEvent) => {/* TODO: Fix JSX expression */}
  O: Add content,}
}
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {/* TODO: Fix JSX expression */}
  O: Add content,}
}
      alert('Passwords do not match');
      return;
    }
    if (!formData.agreeToTerms) {/* TODO: Fix JSX expression */}
  O: Add content,}
}
=======
    setFormData(prev => ({/* TODO: Fix JSX expression */};
  O: Add content};
};
/
      [name]: type === 'checkbox' ? checked : value;)
    }))};
  const handleSubmit = async (e: React.FormEvent) => {/* TODO: Fix JSX expression */};
  O: Add content};
};
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {/* TODO: Fix JSX expression */};
  O: Add content};
};
      alert('Passwords do not match');
      return};
    if (!formData.agreeToTerms) {/* TODO: Fix JSX expression */};
  O: Add content};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      alert('Please agree to the terms and conditions');
    setIsLoading(true);
    // Simulate signup process;
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    // Redirect to dashboard or home page;
    window.location.href = '/';
  const features = [
<<<<<<< HEAD
  // TOD,
  O: Add items
],
    {/* TODO: Fix JSX expression */}
  O: Add content,}
}
=======
];
  /
  O: Add items;
];;
    {/* TODO: Fix JSX expression */};
  O: Add content};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  ico,
  n: Shield,
      titl,
  e: 'Enterprise Security',
      descriptio,
  n: 'Bank-level security with advanced encryption and compliance'
    },
icon: Award,
      title: 'Proven Results',
      description: '300% average ROI and 95% process automation for our clients',
const PagePage: React.FC = () => {
<<<<<<< HEAD
=======
};
return (
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<<<<<<< HEAD
            {/* Left Side - Signup Form */}
=======
);
};
            {/* Left Side - Signup Form */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-gray-700/50">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-white mb-2 neon-text">
                  Create Your Account;
  </
                <p className="text-gray-300">
<<<<<<< HEAD
                  Join thousands of businesses transforming with AI and IT solutions;
  </
              </div>
=======
                  Join thousands of businesses transforming with AI and IT solutions
                <
              <
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md: grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      First Name,
  </
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        name="firstName"
<<<<<<< HEAD
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                        placeholder="Enter your first name"
                      />
=======
                        value = { formData.firstName };
                        onChange = { handleInputChange };
                        className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focu,
    s:ring-cyan-400
                        placeholder="Enter your first name"
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
                      Last Name
                        name="lastName"
                        value={formData.lastName}
                        placeholder="Enter your last name"
                    Email Address
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      type="email"
                      name="email"
                      value={formData.email}
                      placeholder="Enter your email"
                    Company Name
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      name="company"
                      value={formData.company}
                      placeholder="Enter your company name"
                    Phone Number
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      placeholder="Enter your phone number"
<<<<<<< HEAD
                    Password
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      type={showPassword ? 'text' : 'password'}
=======
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" 
                      type = { showPassword ? 'text' : 'password' };
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
                      name="password"
                      value={formData.password}
                      className="w-full pl-10 pr-12 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                      placeholder="Create a password"
                    <button
<<<<<<< HEAD
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors">
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
=======
                      type="button")
                      onClick = { () => setShowPassword(!showPassword) };
                      className="absolute right-3 top-1/2 transform -translate-y-1
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" 
                    <
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
                    Confirm Password
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      placeholder="Confirm your password"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                <div className="space-y-4">
                  <label className="flex items-start">
                      type="checkbox"
                      name="agreeToTerms"
<<<<<<< HEAD
            {/* Left Side - Signup Form */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-gray-700/50"></div>"
              <div className="text-center mb-8"></div>"
                <h1 className="text-3xl font-bold text-white mb-2 neon-text"></h1>
// Create Your Account;
          </h1>"
                <p className="text-gray-300"></p>
// Join thousands of businesses transforming with AI and IT solutions;
          </p>
              </div>"
              <form onSubmit={handleSubmit} className="space-y-6"></form>"
                <div className="grid grid-cols-1,"
  md: grid-cols-2 gap-4"></div>
                  <div></div>"
                    <label className="block text-sm font-medium text-gray-300 mb-2"></label>
// First Name,
          </label>
=======
            {/* Left Side - Signup Form *
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-gray-700/50"><
              <div className="text-center mb-8"><
                <h1 className="text-3xl font-bold text-white mb-2 neon-text"><
/
          <
                <p className="text-gray-300"><
/
          <
              <
              <form onSubmit={handleSubmit} className="space-y-6"><
                <div className="grid grid-cols-1,"
  md:grid-cols-2 gap-4"><
                  <div><
                    <label className="block text-sm font-medium text-gray-300 mb-2"><
/
          <
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
type="text" name="firstName"
<<<<<<< HEAD
                        value={formData.firstName}
                        onChange={handleInputChange}
// required
className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20" placeholder="Enter your first name"
/>
                      Last Name,
                        name="lastName" value={formData.lastName}
=======
                        value = { formData.firstName };
                        onChange = { handleInputChange };
/
className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focu,
    s:ring-cyan-400
                      Last Name;
                        name="lastName" value = { formData.lastName };
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
                        placeholder="Enter your last name" Email Address;
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      type="email" name="email"
                      value={formData.email}
                      placeholder="Enter your email" Company Name;
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      name="company" value={formData.company}
                      placeholder="Enter your company name" Phone Number;
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      type="tel" name="phone"
                      value={formData.phone}
                      placeholder="Enter your phone number" Password;
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      type={showPassword ? 'text' : 'password'}
                      name="password" value={formData.password}
                      className="w-full pl-10 pr-12 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20" placeholder="Create a password"
                    <button
<<<<<<< HEAD
                      type="button" onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
// >
=======
                      type="button" onClick = { () => setShowPassword(!showPassword) };
                      className="absolute right-3 top-1/2 transform -translate-y-1
/
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
                      {showPassword ?}"
          <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
Confirm Password;
<<<<<<< HEAD
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword" value={formData.confirmPassword}
                      placeholder="Confirm your password" onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                <div className="space-y-4">
=======
                      type = { showConfirmPassword ? 'text' : 'password' };
                      name="confirmPassword" value = { formData.confirmPassword };
                      placeholder="Confirm your password" onClick = { () => setShowConfirmPassword(!showConfirmPassword) };
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : 
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
                  <label className="flex items-start">
                      type="checkbox" name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      className="w-4 h-4 text-cyan-400 bg-slate-700 border-gray-600 rounded focus:ring-cyan-400 focus:ring-2 mt-1"
                    <span className="ml-2 text-sm text-gray-300">
<<<<<<< HEAD
                      I agree to the{' '}
                      <a href="/terms" className="text-cyan-400 hover: text-cyan-300">
                        Terms of Service,
  </{' '}
                      and{' '}
                      <a href="/privacy" className="text-cyan-400 hover: text-cyan-300">
                        Privacy Policy,
  </
                    </span>
=======
                      I agree to the{' '};
                      <a href="
                        Terms of Service
                      <
                      and{' '};
                      <a href="
                        Privacy Policy
                      <
                    <
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
                      name="subscribeNewsletter"
                      checked={formData.subscribeNewsletter}
                      Subscribe to our newsletter for updates and tips
                  type="submit"
<<<<<<< HEAD
                  disabled={isLoading}
                  className="w-full cyber-button py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Creating Account...
                  ) : (
                    'Create Account'
                  )}
              </form>
              <div className="mt-8 text-center">
                  Already have an account?{' '}
                  <a
                    href="/login"
                    className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                    Sign in here
            {/* Right Side - Features and Benefits */}
=======
                  disabled = { isLoading };
                  className="w-full cyber-button py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover: scale-105 disabled:opacity-50 disable,
    d:cursor-not-allowed"
                  {isLoading ? (<div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"><
                      Creating Account...)
                  ) : ('Create Account')
                  )};
              <
              <div className="mt-8 text-center">
                  Already have an account?{' '};
                  <a href="
                    className="text-cyan-400 hover: text-cyan-300 font-medium transition-colors"
                    Sign in here
            {/* Right Side - Features and Benefits *
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
            <div className="space-y-8">
                <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                  Transform Your Business Today;
  </
                <p className="text-xl text-gray-300 mb-8">
                  Join thousands of businesses already using our AI and IT solutions 
                  to achieve unprecedented growth and efficiency.
              <div className="space-y-6">
<<<<<<< HEAD
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-cyan-400" />
                      <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
                ))}
              <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  What You Get:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
              <div className="text-center">
=======
                {features.map((feature), index) => (<div key={index} className="flex items-start">
                    <div className="w-12 h-12 bg-cyan-500
                      <feature.icon className="w-6 h-6 text-cyan-400" 
                      <h3 className="text-lg font-semibold text-white mb-2">{feature.title}<
                      <p className="text-gray-300">{feature.description}<)
                ))};
              <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900
                <h3 className="text-lg font-semibold text-white mb-4">
                  What You Get: <
                <div className="grid grid-cols-1 m,
    d:grid-cols-2 gap-2">
                  {benefits.map((benefit), index) => (<div key={index} className="flex items-center text-sm text-gray-300">
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
                <p className="text-gray-400 text-sm mb-4">
                  Trusted by 1000+ companies worldwide
                <div className="flex justify-center items-center space-x-6 opacity-60">
                  <div className="text-2xl font-bold text-white">Microsoft</div>
                  <div className="text-2xl font-bold text-white">Google</div>
                  <div className="text-2xl font-bold text-white">Amazon</div>
      <Footer />
    </React.Fragment>
<<<<<<< HEAD
// Terms of Service;
          </a>{' '}
                      and{' '}"
                      <a href="/privacy" className="text-cyan-400,"
  hover: text-cyan-300"></a>
// Privacy Policy,
          </a>
                    </span>
name="subscribeNewsletter" checked={formData.subscribeNewsletter}
                      Subscribe to our newsletter for updates and tips;
                  type="submit" disabled={isLoading}
                  className="w-full cyber-button py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  {isLoading ? ()}
          <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
Creating Account...
                  ) : ()
// 'Create Account'
                  )}
          </form>"
              <div className="mt-8 text-center"></div>
                  Already have an account?{' '}
                  <a
                    href="/login" className="text-cyan-400 hover: text-cyan-300 font-medium transition-colors"
Sign in here,
            {/* Right Side - Features and Benefits */}"
            <div className="space-y-8"></div>"
                <h2 className="text-3xl font-bold text-white mb-4 neon-text"></h2>
// Transform Your Business Today;
          </h2>"
                <p className="text-xl text-gray-300 mb-8"></p>
=======
/
          <
                      and{' '}"
                      <a href="
  hover:text-cyan-300"><
/
          <
                    <
name="subscribeNewsletter" checked = { formData.subscribeNewsletter };
                      Subscribe to our newsletter for updates and tips;
                  type="submit" disabled = { isLoading };
                  className="w-full cyber-button py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover: scale-105 disabled:opacity-50 disable,
    d:cursor-not-allowed")
                  {isLoading ? ()};
          <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"><
Creating Account...
                  ) : ()
/
                  )};
          <
              <div className="mt-8 text-center"><
                  Already have an account?{' '};
                  <a
                    href="
Sign in here;
            {/* Right Side - Features and Benefits *
            <div className="space-y-8"><
                <h2 className="text-3xl font-bold text-white mb-4 neon-text"><
/
          <
                <p className="text-xl text-gray-300 mb-8"><
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
Join thousands of businesses already using our AI and IT solutions;
                  to achieve unprecedented growth and efficiency."
              <div className="space-y-6"></div>
                {features.map((feature, index) => ()}"
          <div key={index} className="flex items-start"></div>"
                    <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0"></div>"
                      <feature.icon className="w-6 h-6 text-cyan-400" /></feature>"
                      <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>"
                      <p className="text-gray-300">{feature.description}</p>
                ))}"
              <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-lg p-6"></div>"
                <h3 className="text-lg font-semibold text-white mb-4"></h3>
                  What You,
  Get:
                </h3>"
                <div className="grid grid-cols-1,"
  md:grid-cols-2 gap-2"></div>
                  {benefits.map((benefit, index) => ()}"
          <div key={index} className="flex items-center text-sm text-gray-300"></div>"
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" /></CheckCircle>
                      {benefit}"
<div className="text-center"></div>"
                <p className="text-gray-400 text-sm mb-4"></p>
                  Trusted by 1000+ companies worldwide;"
<<<<<<< HEAD
                <div className="flex justify-center items-center space-x-6 opacity-60"></div>"
                  <div className="text-2xl font-bold text-white">Microsoft</div>"
                  <div className="text-2xl font-bold text-white">Google</div>"
                  <div className="text-2xl font-bold text-white">Amazon</div>
      <Footer />
    </div>
  );
export default SignupPage;
  </a>
  </div>
  </p>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </p>
  </div>
  </div>
  </div>
  </a>
  </label>
  </div>
  </div>
  </div>
  </label>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </HTMLInputElement>
  </HTMLInputElement>
=======
                <div className="flex justify-center items-center space-x-6 opacity-60"><
                  <div className="text-2xl font-bold text-white">Microsoft<
                  <div className="text-2xl font-bold text-white">Google<
                  <div className="text-2xl font-bold text-white">Amazon<
      <Footer 
    <
  );
export default SignupPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
