import {Eye, EyeOff, Mail, Lock, User, Building, Phone, CheckCircle, Shield, Award, Globe, Shield, Award, Globe 'use, client'; import, React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
const SignupPage: React.FC = () => {
  return (
    <div>Coming Soon</div>
  );
};
  const [formData, setFormData] = useState({
  // TODO: Add content;
};
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
const handleInputChange = (e: React.ChangeEvent
          
          
          
          
          
          
          
          ;
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
  // TODO: Add content;
}
//       ...prev,
      [name]: type === 'checkbox' ? checked : value;
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
  // TODO: Add content;
}
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
  // TODO: Add content;
}
      alert('Passwords do not match');
      return;
    }
    if (!formData.agreeToTerms) {
  // TODO: Add content;
}
      alert('Please agree to the terms and conditions');
    setIsLoading(true);
    // Simulate signup process;
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    // Redirect to dashboard or home page;
    window.location.href = '/';
  const features = [
  // TODO: Add items;
];;
    {
  // TODO: Add content;
};
  icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with advanced encryption and compliance'
    },







  ];
  const benefits = [
'Free 14-day trial',
    'No setup fees',
    '24/7 expert support',
    'Custom integrations',
    'Scalable solutions',
    'Regular updates'
    
          
          
          
          
          
          
          
  )
    
            {/* Left Side - Signup Form */}
// Create Your Account
                
          
          
          
          
          
          
          
          ;
// Join thousands of businesses transforming with AI and IT solutions
                
          
          
          
          
          
          
          
          ;
// First Name
                    
          
          
          
          
          
          
          
          ;
type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
// required;
className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focu,ring-cyan-400/20"
                        placeholder="Enter your first name"
/>
                      Last Name;
                        name="lastName"
                        value={formData.lastName}
                        placeholder="Enter your last name"
                    Email Address
                    
          
          
          
          
          
          
          
          ;
                      type="email"
                      name="email"
                      value={formData.email}
                      placeholder="Enter your email"
                    Company Name;
                      name="company"
                      value={formData.company}
                      placeholder="Enter your company name"
Phone Number;
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      placeholder="Enter your phone number"
Password;
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      className="w-full pl-10 pr-12 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focu,ring-cyan-400/20"
                      placeholder="Create a password"
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
// >
                      {showPassword ? 
          
          
          
          
          
          
          
          
Confirm Password;
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      placeholder="Confirm your password"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      className="w-4 h-4 text-cyan-400 bg-slate-700 border-gray-600 rounded focus: ring-cyan-400 focu,ring-2 mt-1"
                      I agree to the{' '}
// Terms of Service
                      
          
          
          
          
          
          
          
          ;
                      and{' '}
// Privacy Policy
                      
          
          
          
          
          
          
          
          ;
name="subscribeNewsletter"
                      checked={formData.subscribeNewsletter}
                      Subscribe to our newsletter for updates and tips;
                  type="submit"
                  disabled={isLoading}
                  className="w-full cyber-button py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover: scale-105 disabled: opacity-50 disable,cursor-not-allowed"
                  {isLoading ? ()
                    
Creating Account...
                  ) : ()
// 'Create Account'
                  )}
              
          
          
          
          
          
          
          
          
                  Already have an account?{' '}
                    href="/login"
                    className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
Sign in here;
            {/* Right Side - Features and Benefits */}
// Transform Your Business Today
                
          
          
          
          
          
          
          
          ;
Join thousands of businesses already using our AI and IT solutions;
                  to achieve unprecedented growth and efficiency.
                {features.map((feature, index) => ()
                  
                ))}
                  What You Get:
                  {benefits.map((benefit, index) => ()
                    
                      {benefit}
                  Trusted by 1000+ companies worldwide;
  );
};

export default AiAnalyticsDashboardPage;