
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Mail, 
  Lock, 
  Building, 
  Phone, 
  Globe, 
  CheckCircle, 
  Eye,
  EyeOff,
  Shield,
  Zap,
  Brain,
  Rocket
} from 'lucide-react';

const accountTypes = [
  {
    id: 'individual',
    title: 'Individual',
    description: 'Personal account for freelancers and individual professionals',
    icon: User,
    features: ['Personal projects', 'Basic features', 'Community access', 'Free tier available']
  },
  {
    id: 'business',
    title: 'Business',
    description: 'Company account for teams and organizations',
    icon: Building,
    features: ['Team collaboration', 'Advanced features', 'Priority support', 'Custom integrations']
  },
  {
    id: 'enterprise',
    title: 'Enterprise',
    description: 'Large organization account with custom solutions',
    icon: Building,
    features: ['Custom solutions', 'Dedicated support', 'SLA guarantees', 'On-premise options']
  }
];

const benefits = [
  {
    icon: Zap,
    title: 'Instant Access',
    description: 'Get started immediately with our platform and services'
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'Enterprise-grade security with SOC2 compliance'
  },
  {
    icon: Brain,
    title: 'AI-Powered',
    description: 'Access to cutting-edge AI and machine learning tools'
  },
  {
    icon: Rocket,
    title: 'Scalable Growth',
    description: 'Scale your business with our flexible solutions'
  }
];

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    company: '',
    phone: '',
    website: '',
    accountType: 'individual',
    agreeToTerms: false,
    marketingEmails: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [step, setStep] = useState(1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Handle final form submission
      console.log('Form submitted:', formData);
    }
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.firstName && formData.lastName && formData.email;
      case 2:
        return formData.password && formData.confirmPassword && formData.password === formData.confirmPassword;
      case 3:
        return formData.agreeToTerms;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 border border-zion-cyan rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 right-32 w-32 h-32 border border-zion-purple rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 border border-zion-blue rounded-full animate-pulse delay-2000"></div>
        </div>
        
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              Join Zion Tech Group
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Create your account and unlock access to the world's premier high-tech marketplace, 
              AI solutions, and cutting-edge technology services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Signup Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-zion-slate-dark/50 rounded-2xl border border-zion-cyan/20 p-8"
            >
              {/* Progress Steps */}
              <div className="flex items-center justify-between mb-8">
                {[1, 2, 3].map((stepNumber) => (
                  <div key={stepNumber} className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                      step >= stepNumber 
                        ? 'bg-zion-cyan text-white' 
                        : 'bg-zion-slate-light/20 text-zion-slate-light'
                    }`}>
                      {stepNumber}
                    </div>
                    {stepNumber < 3 && (
                      <div className={`w-16 h-1 mx-2 ${
                        step > stepNumber ? 'bg-zion-cyan' : 'bg-zion-slate-light/20'
                      }`} />
                    )}
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-6"
                  >
                    <h2 className="text-2xl font-bold text-white mb-6">Personal Information</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-zion-slate-light mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg px-4 py-3 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                          placeholder="Enter your first name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-zion-slate-light mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg px-4 py-3 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                          placeholder="Enter your last name"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-zion-slate-light mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg px-4 py-3 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                        placeholder="Enter your email address"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-zion-slate-light mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg px-4 py-3 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                        placeholder="Enter your company name (optional)"
                      />
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-6"
                  >
                    <h2 className="text-2xl font-bold text-white mb-6">Account Security</h2>
                    
                    <div>
                      <label className="block text-sm font-medium text-zion-slate-light mb-2">
                        Password *
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          className="w-full bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg px-4 py-3 pr-12 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                          placeholder="Create a strong password"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light hover:text-zion-cyan transition-colors"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                      <p className="text-xs text-zion-slate-light mt-2">
                        Password must be at least 8 characters with uppercase, lowercase, number, and special character
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-zion-slate-light mb-2">
                        Confirm Password *
                      </label>
                      <div className="relative">
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          className="w-full bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg px-4 py-3 pr-12 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                          placeholder="Confirm your password"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light hover:text-zion-cyan transition-colors"
                        >
                          {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-zion-slate-light mb-2">
                        Account Type *
                      </label>
                      <div className="grid grid-cols-1 gap-4">
                        {accountTypes.map((type) => (
                          <label
                            key={type.id}
                            className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                              formData.accountType === type.id
                                ? 'border-zion-cyan bg-zion-cyan/10'
                                : 'border-zion-cyan/20 hover:border-zion-cyan/40'
                            }`}
                          >
                            <input
                              type="radio"
                              name="accountType"
                              value={type.id}
                              checked={formData.accountType === type.id}
                              onChange={handleInputChange}
                              className="sr-only"
                            />
                            <div className="flex items-start space-x-3">
                              <div className="w-6 h-6 bg-zion-cyan rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                {formData.accountType === type.id && <CheckCircle className="w-4 h-4 text-white" />}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-2">
                                  <type.icon className="w-5 h-5 text-zion-cyan" />
                                  <h3 className="font-semibold text-white">{type.title}</h3>
                                </div>
                                <p className="text-sm text-zion-slate-light mb-3">{type.description}</p>
                                <ul className="space-y-1">
                                  {type.features.map((feature) => (
                                    <li key={feature} className="text-xs text-zion-slate-light flex items-center space-x-2">
                                      <CheckCircle className="w-3 h-3 text-zion-cyan flex-shrink-0" />
                                      <span>{feature}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-6"
                  >
                    <h2 className="text-2xl font-bold text-white mb-6">Final Details</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-zion-slate-light mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg px-4 py-3 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-zion-slate-light mb-2">
                          Website
                        </label>
                        <input
                          type="url"
                          name="website"
                          value={formData.website}
                          onChange={handleInputChange}
                          className="w-full bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg px-4 py-3 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                          placeholder="Enter your website URL"
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="flex items-start space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="agreeToTerms"
                          checked={formData.agreeToTerms}
                          onChange={handleInputChange}
                          className="w-5 h-5 text-zion-cyan bg-zion-slate-light/10 border-zion-cyan/20 rounded focus:ring-zion-cyan focus:ring-2 mt-1"
                          required
                        />
                        <span className="text-sm text-zion-slate-light">
                          I agree to the{' '}
                          <a href="/terms" className="text-zion-cyan hover:underline">
                            Terms of Service
                          </a>{' '}
                          and{' '}
                          <a href="/privacy" className="text-zion-cyan hover:underline">
                            Privacy Policy
                          </a>{' '}
                          *
                        </span>
                      </label>

                      <label className="flex items-start space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="marketingEmails"
                          checked={formData.marketingEmails}
                          onChange={handleInputChange}
                          className="w-5 h-5 text-zion-cyan bg-zion-slate-light/10 border-zion-cyan/20 rounded focus:ring-zion-cyan focus:ring-2 mt-1"
                        />
                        <span className="text-sm text-zion-slate-light">
                          I would like to receive updates about new features, services, and industry insights
                        </span>
                      </label>
                    </div>
                  </motion.div>
                )}

                <div className="flex items-center justify-between pt-6">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={() => setStep(step - 1)}
                      className="px-6 py-3 text-zion-slate-light hover:text-zion-cyan transition-colors"
                    >
                      Back
                    </button>
                  )}
                  
                  <button
                    type="submit"
                    disabled={!isStepValid()}
                    className="btn-futuristic px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {step === 3 ? 'Create Account' : 'Continue'}
                  </button>
                </div>
              </form>
            </motion.div>

            {/* Benefits Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Why Join Zion Tech Group?</h2>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={benefit.title} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                        <p className="text-zion-slate-light">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-zion-slate-dark/30 rounded-xl border border-zion-cyan/20 p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Already have an account?</h3>
                <p className="text-zion-slate-light mb-4">
                  Sign in to access your dashboard and continue your journey with Zion Tech Group.
                </p>
                <a
                  href="/login"
                  className="btn-neon w-full text-center"
                >
                  Sign In
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
