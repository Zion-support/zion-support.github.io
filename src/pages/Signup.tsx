import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Users, 
  User, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff,
  CheckCircle,
  Star,
  Zap,
  Brain,
  Server,
  Shield,
  Cloud,
  Database,
  Workflow,
  Target,
  Rocket,
  TrendingUp,
  BarChart3,
  Atom,
  Network,
  Lock as LockIcon,
  Cpu,
  Wifi,
  Satellite,
  Handshake,
  FileText,
  Video,
  GraduationCap,
  Lightbulb,
  Star as StarIcon,
  HelpCircle,
  BarChart as BarChartIcon,
  ShoppingCart,
  ArrowRight,
  Globe,
  Phone,
  MapPin,
  Calendar,
  DollarSign,
  Package,
  Truck,
  Headphones,
  Award,
  Clock,
  MessageSquare
} from 'lucide-react';

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    companyName: '',
    jobTitle: '',
    phone: '',
    userType: 'individual',
    industry: '',
    companySize: '',
    interests: [] as string[]
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const userTypes = [
    {
      id: 'individual',
      title: 'Individual',
      description: 'Personal use and learning',
      icon: User,
      features: ['Access to basic features', 'Personal projects', 'Community access']
    },
    {
      id: 'business',
      title: 'Business',
      description: 'Small to medium businesses',
      icon: Building2,
      features: ['Team collaboration', 'Business tools', 'Priority support']
    },
    {
      id: 'enterprise',
      title: 'Enterprise',
      description: 'Large organizations',
      icon: Users,
      features: ['Custom solutions', 'Dedicated support', 'Advanced features']
    }
  ];

  const interestCategories = [
    {
      title: "AI & Automation",
      icon: Brain,
      interests: [
        { id: "ai-enterprise-automation", name: "AI Enterprise Automation" },
        { id: "ai-data-analytics", name: "AI Data Analytics" },
        { id: "ai-cybersecurity", name: "AI Cybersecurity" },
        { id: "ai-healthcare", name: "AI Healthcare Solutions" },
        { id: "ai-quantum", name: "AI Quantum Computing" }
      ]
    },
    {
      title: "IT & Infrastructure",
      icon: Server,
      interests: [
        { id: "cloud-devops", name: "Cloud & DevOps" },
        { id: "cybersecurity", name: "Cybersecurity" },
        { id: "it-infrastructure", name: "IT Infrastructure" },
        { id: "digital-transformation", name: "Digital Transformation" },
        { id: "edge-computing", name: "Edge Computing" }
      ]
    },
    {
      title: "Industry Solutions",
      icon: Target,
      interests: [
        { id: "healthcare", name: "Healthcare Solutions" },
        { id: "finance", name: "Financial Solutions" },
        { id: "manufacturing", name: "Manufacturing Solutions" },
        { id: "government", name: "Government Solutions" },
        { id: "retail", name: "Retail Solutions" }
      ]
    },
    {
      title: "Micro SaaS & Specialized",
      icon: Zap,
      interests: [
        { id: "ai-project-management", name: "AI Project Management" },
        { id: "ai-marketing", name: "AI Marketing Automation" },
        { id: "ai-customer-support", name: "AI Customer Support" },
        { id: "ai-business-intelligence", name: "AI Business Intelligence" }
      ]
    }
  ];

  const handleInterestToggle = (interestId: string) => {
    setSelectedInterests(prev => 
      prev.includes(interestId) 
        ? prev.filter(id => id !== interestId)
        : [...prev, interestId]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', { ...formData, interests: selectedInterests });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark to-zion-purple opacity-20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join Zion Tech Group
            </h1>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto mb-8">
              Unlock the power of cutting-edge AI, cloud, and technology solutions. 
              Start your digital transformation journey today.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-zinc-300">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-zion-cyan" />
                <span>Free to Start</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-zion-cyan" />
                <span>Instant Access</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-zion-cyan" />
                <span>No Credit Card Required</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Signup Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-8"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Create Your Account</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* User Type Selection */}
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-4">
                    Account Type *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {userTypes.map((type) => (
                      <label key={type.id} className="relative cursor-pointer">
                        <input
                          type="radio"
                          name="userType"
                          value={type.id}
                          checked={formData.userType === type.id}
                          onChange={(e) => setFormData({...formData, userType: e.target.value})}
                          className="sr-only"
                        />
                        <div className={`p-4 border-2 rounded-lg transition-all duration-300 ${
                          formData.userType === type.id
                            ? 'border-zion-cyan bg-zion-cyan/10'
                            : 'border-zinc-600 hover:border-zinc-500 bg-zinc-700/30'
                        }`}>
                          <div className="text-center">
                            <type.icon className={`w-8 h-8 mx-auto mb-2 ${
                              formData.userType === type.id ? 'text-zion-cyan' : 'text-zinc-400'
                            }`} />
                            <div className={`font-medium ${
                              formData.userType === type.id ? 'text-white' : 'text-zinc-300'
                            }`}>
                              {type.title}
                            </div>
                            <div className="text-xs text-zinc-400 mt-1">{type.description}</div>
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                      placeholder="Enter your first name"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                      placeholder="Enter your last name"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    />
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                      placeholder="your.email@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                {/* Business Information (for business/enterprise users) */}
                {(formData.userType === 'business' || formData.userType === 'enterprise') && (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-zinc-300 mb-2">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                          placeholder="Enter your company name"
                          value={formData.companyName}
                          onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-zinc-300 mb-2">
                          Job Title
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                          placeholder="Your job title"
                          value={formData.jobTitle}
                          onChange={(e) => setFormData({...formData, jobTitle: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-zinc-300 mb-2">
                          Industry
                        </label>
                        <select
                          className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                          value={formData.industry}
                          onChange={(e) => setFormData({...formData, industry: e.target.value})}
                        >
                          <option value="">Select industry</option>
                          <option value="technology">Technology</option>
                          <option value="healthcare">Healthcare</option>
                          <option value="finance">Finance</option>
                          <option value="manufacturing">Manufacturing</option>
                          <option value="retail">Retail</option>
                          <option value="government">Government</option>
                          <option value="education">Education</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-zinc-300 mb-2">
                          Company Size
                        </label>
                        <select
                          className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                          value={formData.companySize}
                          onChange={(e) => setFormData({...formData, companySize: e.target.value})}
                        >
                          <option value="">Select company size</option>
                          <option value="1-10">1-10 employees</option>
                          <option value="11-50">11-50 employees</option>
                          <option value="51-200">51-200 employees</option>
                          <option value="201-1000">201-1000 employees</option>
                          <option value="1000+">1000+ employees</option>
                        </select>
                      </div>
                    </div>
                  </>
                )}

                {/* Password Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                      Password *
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        required
                        className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent pr-12"
                        placeholder="Create a strong password"
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400 hover:text-white"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                      Confirm Password *
                    </label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        required
                        className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent pr-12"
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400 hover:text-white"
                      >
                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Interests Selection */}
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-4">
                    Areas of Interest (Optional)
                  </label>
                  <div className="space-y-4">
                    {interestCategories.map((category) => (
                      <div key={category.title} className="border border-zinc-600 rounded-lg p-4">
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                          <category.icon className="w-5 h-5 mr-2 text-zion-cyan" />
                          {category.title}
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {category.interests.map((interest) => (
                            <label key={interest.id} className="flex items-start space-x-3 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={selectedInterests.includes(interest.id)}
                                onChange={() => handleInterestToggle(interest.id)}
                                className="mt-1 w-4 h-4 text-zion-cyan bg-zinc-700 border-zinc-600 rounded focus:ring-zion-cyan focus:ring-2"
                              />
                              <div>
                                <div className="text-sm font-medium text-white">{interest.name}</div>
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 w-4 h-4 text-zion-cyan bg-zinc-700 border-zinc-600 rounded focus:ring-zion-cyan focus:ring-2"
                  />
                  <div className="text-sm text-zinc-400">
                    I agree to the{' '}
                    <Link to="/terms" className="text-zion-cyan hover:text-zion-cyan-light">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy" className="text-zion-cyan hover:text-zion-cyan-light">
                      Privacy Policy
                    </Link>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-zion-cyan/25"
                >
                  Create Account
                </button>

                {/* Login Link */}
                <div className="text-center text-zinc-400">
                  Already have an account?{' '}
                  <Link to="/login" className="text-zion-cyan hover:text-zion-cyan-light font-medium">
                    Sign in
                  </Link>
                </div>
              </form>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Star className="w-5 h-5 mr-2 text-zion-cyan" />
                Why Join Zion Tech Group?
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mt-0.5" />
                  <div>
                    <div className="text-white font-medium">Access to Innovation</div>
                    <div className="text-sm text-zinc-400">Latest AI and emerging technologies</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mt-0.5" />
                  <div>
                    <div className="text-white font-medium">Expert Community</div>
                    <div className="text-sm text-zinc-400">Connect with industry professionals</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mt-0.5" />
                  <div>
                    <div className="text-white font-medium">Free Resources</div>
                    <div className="text-sm text-zinc-400">Whitepapers, webinars, and guides</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mt-0.5" />
                  <div>
                    <div className="text-white font-medium">Early Access</div>
                    <div className="text-sm text-zinc-400">Be first to try new features</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Zap className="w-5 h-5 mr-2 text-zion-cyan" />
                What You'll Get
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Package className="w-5 h-5 text-zion-cyan" />
                  <span className="text-white text-sm">Free Trial Access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Video className="w-5 h-5 text-zion-cyan" />
                  <span className="text-white text-sm">Exclusive Webinars</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FileText className="w-5 h-5 text-zion-cyan" />
                  <span className="text-white text-sm">Resource Library</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-zion-cyan" />
                  <span className="text-white text-sm">Community Access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-5 h-5 text-zion-cyan" />
                  <span className="text-white text-sm">Market Insights</span>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <MessageSquare className="w-5 h-5 mr-2 text-zion-cyan" />
                Need Help?
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-zion-cyan" />
                  <div>
                    <div className="text-white font-medium">Email</div>
                    <div className="text-sm text-zinc-400">kleber@ziontechgroup.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-zion-cyan" />
                  <div>
                    <div className="text-white font-medium">Phone</div>
                    <div className="text-sm text-zinc-400">+1 302 464 0950</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-zion-cyan" />
                  <div>
                    <div className="text-white font-medium">Website</div>
                    <div className="text-sm text-zinc-400">ziontechgroup.com</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="bg-gradient-to-r from-zion-purple to-zion-purple-dark rounded-2xl p-6 text-center"
            >
              <Rocket className="w-12 h-12 text-white mx-auto mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">Ready to Get Started?</h3>
              <p className="text-zinc-100 mb-4">Join thousands of professionals already using our platform.</p>
              <Link
                to="/request-quote"
                className="inline-flex items-center bg-white text-zion-purple font-semibold px-6 py-3 rounded-lg hover:bg-zinc-100 transition-colors"
              >
                Get Custom Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-zinc-800/30 border-t border-zinc-700/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Join the Future of Technology
            </h2>
            <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
              Be part of a community that's shaping the future with AI, cloud, and emerging technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Explore Services
              </Link>
              <Link
                to="/contact"
                className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
