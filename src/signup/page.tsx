'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SignupPage: React.FC = () =>{
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
    subscribeNewsletter: false;
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

      setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value;
    }));
  }
      if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return null;
    }
    
    if (!formData.agreeToTerms) {
      alert('Please agree to the terms and conditions');
      return null;
    }
    
    setIsLoading(true);
    
    // Simulate signup process;
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    // Redirect to dashboard or home page;
    window.location.href = '/'
  }
  return (
    <>
      <Navigation />
      <div>
        <div>
          <div>
            {/* Left Side - Signup Form */}
            <div>
              <div>
                <h1 className="text-3xl font-bold text-white mb-2 neon-text">Create Your Account</h1>
                <p className="text-gray-300">Join thousands of businesses transforming with AI and IT solutions</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                    <div>
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                        placeholder="Enter your first name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                    <div>
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <div>
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Company Name</label>
                  <div>
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                  <div>
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                  <div>
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-12 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                      placeholder="Create a password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Confirm Password</label>
                  <div>
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-12 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                      placeholder="Confirm your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="flex items-start">
                    <input type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      required
                      className="w-4 h-4 text-cyan-400 bg-slate-700 border-gray-600 rounded focus:ring-cyan-400 focus:ring-2 mt-1"
                    />
                    <span className="ml-2 text-sm text-gray-300">
                      I agree to the{' '}
                      <a href="/terms" className="text-cyan-400 hover:text-cyan-300">Terms of Service</a>{' '}
                      and{' '}
                      <a href="/privacy" className="text-cyan-400 hover:text-cyan-300">Privacy Policy</a>
                    </span>
                  </label>
                  
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="subscribeNewsletter"
                      checked={formData.subscribeNewsletter}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-cyan-400 bg-slate-700 border-gray-600 rounded focus:ring-cyan-400 focus:ring-2 mt-1"
                    />
                    <span className="ml-2 text-sm text-gray-300">Subscribe to our newsletter for updates and tips</span>
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full cyber-button py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Creating Account...
                    </div>
                  ) : (
                    'Create Account'
                  )}
                </button>
              </form>

              <div>
                <p className="text-gray-300">
                  Already have an account?{' '}
                  <a
                    href="/login"
                    className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                  >Sign in here</a>
                </p>
              </div>
            </div>
            {/* Right Side - Features and Benefits */}
            <div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-4 neon-text">Transform Your Business Today</h2>
                <p className="text-xl text-gray-300 mb-8">Join thousands of businesses already using our AI and IT solutions
                  to achieve unprecedented growth and efficiency.
                </p>
              </div>
              <div>
                {features.map((feature, index) => (
                  <div>
                    <div>
                      <feature.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">
                  What You Get:
                </h3>
                <div>
                  {benefits.map((benefit, index) => (
                    <div>
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-4">Trusted by 1000+ companies worldwide</p>
                <div>
                  <div className="text-2xl font-bold text-white">Microsoft</div>
                  <div className="text-2xl font-bold text-white">Google</div>
                  <div className="text-2xl font-bold text-white">Amazon</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>);
}
export default SignupPage