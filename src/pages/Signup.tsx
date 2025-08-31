import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  UserPlus, 
  Building, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  CheckCircle, 
  ArrowRight,
  Shield,
  Zap,
  Users,
  Globe,
  Star
} from 'lucide-react';

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    companyName: '',
    companySize: '',
    industry: '',
    role: '',
    phone: '',
    agreeToTerms: false,
    agreeToMarketing: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setCurrentStep(3);
  };

  const companySizes = [
    '1-10 employees',
    '11-50 employees',
    '51-200 employees',
    '201-1000 employees',
    '1000+ employees'
  ];

  const industries = [
    'Healthcare',
    'Financial Services',
    'Manufacturing',
    'Retail',
    'Technology',
    'Government',
    'Education',
    'Real Estate',
    'Transportation',
    'Energy',
    'Other'
  ];

  const roles = [
    'CEO/Founder',
    'CTO/Technology Director',
    'IT Manager',
    'Project Manager',
    'Business Analyst',
    'Developer',
    'Consultant',
    'Other'
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Access to AI Platform",
      description: "Get early access to our cutting-edge AI solutions and automation tools"
    },
    {
      icon: Users,
      title: "Expert Community",
      description: "Join our network of technology professionals and thought leaders"
    },
    {
      icon: Shield,
      title: "Priority Support",
      description: "Receive priority customer support and dedicated account management"
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Connect with partners and clients worldwide through our platform"
    }
  ];

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-4">Personal Information</h3>
        <p className="text-zion-slate-light">Tell us about yourself to get started</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-white mb-2">First Name *</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
            placeholder="Enter your first name"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-white mb-2">Last Name *</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
            placeholder="Enter your last name"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-white mb-2">Email Address *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
            placeholder="Enter your email address"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-white mb-2">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
            placeholder="Enter your phone number"
          />
        </div>
      </div>
      
      <div className="text-center">
        <button
          type="button"
          onClick={() => setCurrentStep(2)}
          disabled={!formData.firstName || !formData.lastName || !formData.email}
          className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continue to Company Details
          <ArrowRight className="ml-2 w-5 h-5 inline" />
        </button>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-4">Company Information</h3>
        <p className="text-zion-slate-light">Tell us about your organization</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-white mb-2">Company Name *</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
            placeholder="Enter your company name"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-white mb-2">Company Size *</label>
          <select
            name="companySize"
            value={formData.companySize}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
            required
          >
            <option value="">Select company size</option>
            {companySizes.map(size => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-white mb-2">Industry *</label>
          <select
            name="industry"
            value={formData.industry}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
            required
          >
            <option value="">Select industry</option>
            {industries.map(industry => (
              <option key={industry} value={industry}>{industry}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-white mb-2">Your Role *</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
            required
          >
            <option value="">Select your role</option>
            {roles.map(role => (
              <option key={role} value={role}>{role}</option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="text-center">
        <button
          type="button"
          onClick={() => setCurrentStep(3)}
          disabled={!formData.companyName || !formData.companySize || !formData.industry || !formData.role}
          className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continue to Security
          <ArrowRight className="ml-2 w-5 h-5 inline" />
        </button>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-4">Account Security</h3>
        <p className="text-zion-slate-light">Create your secure account credentials</p>
      </div>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-white mb-2">Password *</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent pr-12"
              placeholder="Create a strong password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light hover:text-white"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
          <p className="text-sm text-zion-slate-light mt-1">
            Password must be at least 8 characters long with uppercase, lowercase, number, and special character
          </p>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-white mb-2">Confirm Password *</label>
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent pr-12"
              placeholder="Confirm your password"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light hover:text-white"
            >
              {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>
        
        <div className="space-y-4">
          <label className="flex items-start space-x-3">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleInputChange}
              className="mt-1 w-4 h-4 text-zion-cyan bg-zion-slate-dark border-zion-purple/30 rounded focus:ring-zion-cyan"
              required
            />
            <div className="text-sm text-zion-slate-light">
              I agree to the{' '}
              <Link to="/terms" className="text-zion-cyan hover:text-zion-cyan-light underline">
                Terms of Service
              </Link>
              {' '}and{' '}
              <Link to="/privacy" className="text-zion-cyan hover:text-zion-cyan-light underline">
                Privacy Policy
              </Link>
              *
            </div>
          </label>
          
          <label className="flex items-start space-x-3">
            <input
              type="checkbox"
              name="agreeToMarketing"
              checked={formData.agreeToMarketing}
              onChange={handleInputChange}
              className="mt-1 w-4 h-4 text-zion-cyan bg-zion-slate-dark border-zion-purple/30 rounded focus:ring-zion-cyan"
            />
            <div className="text-sm text-zion-slate-light">
              I agree to receive marketing communications from Zion Tech Group about new features, 
              services, and industry insights
            </div>
          </label>
        </div>
      </div>
      
      <div className="flex justify-between">
        <button
          type="button"
          onClick={() => setCurrentStep(2)}
          className="px-6 py-3 border border-zion-purple text-zion-purple font-semibold rounded-lg hover:bg-zion-purple hover:text-white transition-all duration-300"
        >
          Back
        </button>
        <button
          type="submit"
          disabled={!formData.password || !formData.confirmPassword || formData.password !== formData.confirmPassword || !formData.agreeToTerms}
          className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Create Account
          <ArrowRight className="ml-2 w-5 h-5 inline" />
        </button>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="text-center space-y-8">
      <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto">
        <CheckCircle className="w-10 h-10 text-white" />
      </div>
      
      <div>
        <h3 className="text-3xl font-bold text-white mb-4">Welcome to Zion Tech Group!</h3>
        <p className="text-xl text-zion-slate-light mb-6">
          Your account has been created successfully. You now have access to our platform 
          and can start exploring our AI-powered solutions.
        </p>
      </div>
      
      <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-2xl p-8">
        <h4 className="text-xl font-semibold text-white mb-4">What's Next?</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-zion-cyan rounded-full flex items-center justify-center flex-shrink-0">
              <Mail className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="font-medium text-white">Verify Email</div>
              <div className="text-sm text-zion-slate-light">Check your email for verification link</div>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-zion-purple rounded-full flex items-center justify-center flex-shrink-0">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="font-medium text-white">Explore Platform</div>
              <div className="text-sm text-zion-slate-light">Discover our AI solutions and services</div>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-zion-blue rounded-full flex items-center justify-center flex-shrink-0">
              <Users className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="font-medium text-white">Connect with Team</div>
              <div className="text-sm text-zion-slate-light">Schedule a consultation with our experts</div>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-zion-cyan rounded-full flex items-center justify-center flex-shrink-0">
              <Star className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="font-medium text-white">Start Building</div>
              <div className="text-sm text-zion-slate-light">Begin your digital transformation journey</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/dashboard"
          className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300"
        >
          Go to Dashboard
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
        <Link
          to="/services"
          className="inline-flex items-center px-8 py-3 border border-zion-purple text-zion-purple font-semibold rounded-lg hover:bg-zion-purple hover:text-white transition-all duration-300"
        >
          Explore Services
        </Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-dark">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl">
                <UserPlus className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join Zion Tech Group
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Create your account and unlock access to cutting-edge AI solutions, 
              expert consulting, and a global network of technology innovators.
            </p>
          </div>
        </div>
      </div>

      {/* Signup Form */}
      <div className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Form */}
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-br from-zion-slate-dark to-zion-blue-dark border border-zion-purple/30 rounded-3xl p-8 md:p-12">
                  {/* Progress Steps */}
                  <div className="flex items-center justify-between mb-12">
                    {[1, 2, 3].map((step) => (
                      <div key={step} className="flex items-center">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                          currentStep >= step
                            ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white'
                            : 'bg-zion-slate-dark/50 border border-zion-purple/30 text-zion-slate-light'
                        }`}>
                          {currentStep > step ? <CheckCircle className="w-6 h-6" /> : step}
                        </div>
                        {step < 3 && (
                          <div className={`w-16 h-1 mx-4 transition-all duration-300 ${
                            currentStep > step ? 'bg-gradient-to-r from-zion-cyan to-zion-purple' : 'bg-zion-slate-dark/50'
                          }`} />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Form Content */}
                  <form onSubmit={handleSubmit}>
                    {currentStep === 1 && renderStep1()}
                    {currentStep === 2 && renderStep2()}
                    {currentStep === 3 && renderStep3()}
                    {currentStep === 4 && renderStep4()}
                  </form>
                </div>
              </div>

              {/* Benefits Sidebar */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-zion-slate-dark to-zion-blue-dark border border-zion-purple/30 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <Star className="w-5 h-5 text-zion-cyan mr-2" />
                    Member Benefits
                  </h3>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-zion-purple/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <benefit.icon className="w-4 h-4 text-zion-purple" />
                        </div>
                        <div>
                          <div className="font-medium text-white text-sm">{benefit.title}</div>
                          <div className="text-xs text-zion-slate-light">{benefit.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-zion-slate-dark to-zion-blue-dark border border-zion-purple/30 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <Shield className="w-5 h-5 text-zion-cyan mr-2" />
                    Why Sign Up?
                  </h3>
                  <ul className="space-y-3 text-sm text-zion-slate-light">
                    <li>• Access to exclusive AI tools and platforms</li>
                    <li>• Early access to new features and services</li>
                    <li>• Priority customer support</li>
                    <li>• Networking opportunities</li>
                    <li>• Industry insights and reports</li>
                    <li>• Special pricing on services</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-zion-slate-dark to-zion-blue-dark border border-zion-purple/30 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <Users className="w-5 h-5 text-zion-cyan mr-2" />
                    Already Have an Account?
                  </h3>
                  <p className="text-sm text-zion-slate-light mb-4">
                    Sign in to access your dashboard and continue your journey.
                  </p>
                  <Link
                    to="/login"
                    className="inline-flex items-center w-full justify-center px-4 py-2 border border-zion-purple text-zion-purple font-medium rounded-lg hover:bg-zion-purple hover:text-white transition-all duration-300"
                  >
                    Sign In
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Join thousands of organizations that have accelerated their digital transformation 
              with Zion Tech Group's innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105"
              >
                Contact Our Team
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-zion-purple text-zion-purple font-semibold rounded-xl hover:bg-zion-purple hover:text-white transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
