import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Calculator, 
  MessageSquare, 
  Phone, 
  Mail, 
  Calendar, 
  Clock, 
  Users, 
  Target, 
  Award, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Globe, 
  Building, 
  Settings, 
  Cpu, 
  Database, 
  Network, 
  Lock, 
  Eye, 
  Heart, 
  Palette, 
  BarChart3, 
  FileText, 
  Zap, 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Star as StarIcon,
  Lightbulb,
  BarChart,
  PieChart,
  LineChart,
  Activity,
  Gauge,
  Target as TargetIcon,
  UserCheck,
  MessageCircle,
  FileCheck,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Info,
  Server,
  Monitor,
  Smartphone,
  Laptop,
  Router,
  HardDrive,
  Wifi,
  Key,
  FileCode,
  GitBranch,
  Workflow,
  Layers,
  Box,
  Package,
  Truck,
  Factory,
  Home,
  Office,
  Store,
  School,
  Hospital,
  Bank,
  ShoppingCart,
  CreditCard,
  PieChart as PieChartIcon,
  Users as UsersIcon,
  MessageSquare as MessageSquareIcon,
  FileText as FileTextIcon,
  Mail as MailIcon,
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  DollarSign as DollarSignIcon,
  Zap as ZapIcon2,
  Brain as BrainIcon2,
  Cloud as CloudIcon2,
  Shield as ShieldIcon2,
  Rocket as RocketIcon2,
  Star as StarIcon2,
  Send,
  FileText as FileTextIcon2,
  Phone as PhoneIcon,
  MapPin,
  Building as BuildingIcon,
  Globe as GlobeIcon,
  Users as UsersIcon2,
  Target as TargetIcon2,
  Award as AwardIcon,
  CheckCircle as CheckCircleIcon,
  ArrowRight as ArrowRightIcon,
  Star as StarIcon3,
  TrendingUp as TrendingUpIcon,
  Building as BuildingIcon2,
  Settings as SettingsIcon,
  Cpu as CpuIcon,
  Database as DatabaseIcon,
  Network as NetworkIcon,
  Lock as LockIcon,
  Eye as EyeIcon,
  Heart as HeartIcon,
  Palette as PaletteIcon,
  BarChart3 as BarChart3Icon,
  MessageSquare as MessageSquareIcon2,
  FileText as FileTextIcon3,
  Mail as MailIcon2,
  Calendar as CalendarIcon2,
  Clock as ClockIcon2,
  DollarSign as DollarSignIcon2,
  Zap as ZapIcon3,
  Brain as BrainIcon3,
  Cloud as CloudIcon3,
  Shield as ShieldIcon3,
  Rocket as RocketIcon3,
  Star as StarIcon4,
  Lightbulb as LightbulbIcon,
  BarChart as BarChartIcon,
  PieChart as PieChartIcon2,
  LineChart as LineChartIcon,
  Activity as ActivityIcon,
  Gauge as GaugeIcon,
  Target as TargetIcon3,
  UserCheck as UserCheckIcon,
  MessageCircle as MessageCircleIcon,
  FileCheck as FileCheckIcon,
  AlertTriangle as AlertTriangleIcon,
  CheckCircle2 as CheckCircle2Icon,
  XCircle as XCircleIcon,
  Info as InfoIcon,
  Server as ServerIcon,
  Monitor as MonitorIcon,
  Smartphone as SmartphoneIcon,
  Laptop as LaptopIcon,
  Router as RouterIcon,
  HardDrive as HardDriveIcon,
  Wifi as WifiIcon,
  Key as KeyIcon,
  FileCode as FileCodeIcon,
  GitBranch as GitBranchIcon,
  Workflow as WorkflowIcon,
  Layers as LayersIcon,
  Box as BoxIcon,
  Package as PackageIcon,
  Truck as TruckIcon,
  Factory as FactoryIcon,
  Home as HomeIcon,
  Office as OfficeIcon,
  Store as StoreIcon,
  School as SchoolIcon,
  Hospital as HospitalIcon,
  Bank as BankIcon,
  ShoppingCart as ShoppingCartIcon,
  CreditCard as CreditCardIcon,
  PieChart as PieChartIcon3,
  Users as UsersIcon3,
  MessageSquare as MessageSquareIcon3,
  FileText as FileTextIcon4,
  Mail as MailIcon3,
  Calendar as CalendarIcon3,
  Clock as ClockIcon3,
  DollarSign as DollarSignIcon3,
  Zap as ZapIcon4,
  Brain as BrainIcon4,
  Cloud as CloudIcon4,
  Shield as ShieldIcon4,
  Rocket as RocketIcon4,
  Star as StarIcon5
} from 'lucide-react';

export default function RequestQuote() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    industry: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    services: [],
    teamSize: '',
    location: '',
    preferredContact: 'email'
  });

  const [activeStep, setActiveStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceCategories = [
    {
      name: 'AI & Analytics',
      icon: Brain,
      color: 'from-indigo-500 to-purple-600',
      services: [
        'Machine Learning Models',
        'Predictive Analytics',
        'Natural Language Processing',
        'Computer Vision',
        'Data Science Consulting',
        'AI Strategy & Roadmap'
      ]
    },
    {
      name: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-600',
      services: [
        'Cloud Migration',
        'DevOps Automation',
        'Infrastructure as Code',
        'Container Orchestration',
        'CI/CD Pipelines',
        'Cloud Security'
      ]
    },
    {
      name: 'Edge & IoT',
      icon: Zap,
      color: 'from-yellow-500 to-orange-600',
      services: [
        'IoT Platform Development',
        'Edge Computing Solutions',
        'Sensor Integration',
        'Real-time Analytics',
        'Device Management',
        'IoT Security'
      ]
    },
    {
      name: 'Quantum & Emerging Tech',
      icon: Rocket,
      color: 'from-purple-500 to-pink-600',
      services: [
        'Quantum Computing',
        'Blockchain Solutions',
        'AR/VR Applications',
        '5G Integration',
        'Emerging Tech Consulting',
        'Innovation Labs'
      ]
    }
  ];

  const budgetRanges = [
    { value: 'under-25k', label: 'Under $25,000', description: 'Small projects and MVPs' },
    { value: '25k-100k', label: '$25,000 - $100,000', description: 'Medium-scale implementations' },
    { value: '100k-500k', label: '$100,000 - $500,000', description: 'Enterprise solutions' },
    { value: '500k-1m', label: '$500,000 - $1,000,000', description: 'Large-scale transformations' },
    { value: 'over-1m', label: 'Over $1,000,000', description: 'Strategic partnerships' }
  ];

  const timelineOptions = [
    { value: 'asap', label: 'ASAP', description: 'Immediate start' },
    { value: '1-3months', label: '1-3 months', description: 'Quick turnaround' },
    { value: '3-6months', label: '3-6 months', description: 'Standard timeline' },
    { value: '6-12months', label: '6-12 months', description: 'Complex projects' },
    { value: '12months+', label: '12+ months', description: 'Long-term partnerships' }
  ];

  const teamSizes = [
    { value: '1-10', label: '1-10 employees', description: 'Startup' },
    { value: '11-50', label: '11-50 employees', description: 'Small business' },
    { value: '51-200', label: '51-200 employees', description: 'Medium business' },
    { value: '201-1000', label: '201-1000 employees', description: 'Large business' },
    { value: '1000+', label: '1000+ employees', description: 'Enterprise' }
  ];

  const industries = [
    'Technology', 'Healthcare', 'Finance', 'Manufacturing', 'Retail', 'Education',
    'Government', 'Non-profit', 'Energy', 'Transportation', 'Media', 'Real Estate',
    'Consulting', 'Legal', 'Other'
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        services: checked 
          ? [...prev.services, value]
          : prev.services.filter(service => service !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    // Handle success - could redirect to thank you page or show success message
    alert('Thank you! We\'ll get back to you within 24 hours.');
  };

  const nextStep = () => setActiveStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setActiveStep(prev => Math.max(prev - 1, 1));

  const progressPercentage = (activeStep / 4) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Request Quote - Zion Tech Group"
        description="Get a customized quote for your AI, cloud, IoT, or emerging technology project. Our experts will provide detailed pricing and timelines."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-indigo-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center">
              <Calculator className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get Your <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">Custom Quote</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Tell us about your project and we'll provide a detailed quote tailored to your needs. 
              Get started in minutes and receive your custom proposal within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="py-8 border-b border-slate-700/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-400">Step {activeStep} of 4</span>
              <span className="text-sm text-cyan-400">{Math.round(progressPercentage)}% Complete</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-cyan-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-400">
              <span>Project Details</span>
              <span>Services</span>
              <span>Requirements</span>
              <span>Contact Info</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Step 1: Project Details */}
              {activeStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mr-4">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Project Details</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-cyan-400 mb-2">
                        Project Type *
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                      >
                        <option value="">Select project type</option>
                        <option value="new-development">New Development</option>
                        <option value="enhancement">Enhancement/Upgrade</option>
                        <option value="migration">Migration/Integration</option>
                        <option value="consulting">Consulting/Strategy</option>
                        <option value="maintenance">Maintenance/Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-cyan-400 mb-2">
                        Industry *
                      </label>
                      <select
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                      >
                        <option value="">Select industry</option>
                        {industries.map(industry => (
                          <option key={industry} value={industry}>{industry}</option>
                        ))}
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-cyan-400 mb-2">
                        Project Description *
                      </label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        placeholder="Describe your project, goals, and requirements..."
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none resize-none"
                      ></textarea>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Services */}
              {activeStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                      <Settings className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Select Services</h2>
                  </div>

                  <div className="space-y-6">
                    {serviceCategories.map((category, index) => (
                      <div key={category.name} className="border border-slate-700/50 rounded-lg p-6">
                        <div className="flex items-center mb-4">
                          <div className={`w-8 h-8 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mr-3`}>
                            <category.icon className="w-4 h-4 text-white" />
                          </div>
                          <h3 className="text-lg font-semibold text-white">{category.name}</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {category.services.map((service) => (
                            <label key={service} className="flex items-center space-x-3 cursor-pointer">
                              <input
                                type="checkbox"
                                name="services"
                                value={service}
                                checked={formData.services.includes(service)}
                                onChange={handleInputChange}
                                className="w-4 h-4 text-cyan-600 bg-slate-700 border-slate-600 rounded focus:ring-cyan-500 focus:ring-2"
                              />
                              <span className="text-gray-300 text-sm">{service}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 3: Requirements */}
              {activeStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-4">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Project Requirements</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-cyan-400 mb-2">
                        Budget Range *
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map(budget => (
                          <option key={budget.value} value={budget.value}>
                            {budget.label} - {budget.description}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-cyan-400 mb-2">
                        Timeline *
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                      >
                        <option value="">Select timeline</option>
                        {timelineOptions.map(timeline => (
                          <option key={timeline.value} value={timeline.value}>
                            {timeline.label} - {timeline.description}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-cyan-400 mb-2">
                        Team Size *
                      </label>
                      <select
                        name="teamSize"
                        value={formData.teamSize}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                      >
                        <option value="">Select team size</option>
                        {teamSizes.map(size => (
                          <option key={size.value} value={size.value}>
                            {size.label} - {size.description}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-cyan-400 mb-2">
                        Location
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="City, Country"
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Contact Information */}
              {activeStep === 4 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mr-4">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Contact Information</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-cyan-400 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-cyan-400 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-cyan-400 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-cyan-400 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-cyan-400 mb-2">
                        Company *
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-cyan-400 mb-2">
                        Website
                      </label>
                      <input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        placeholder="https://example.com"
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-cyan-400 mb-2">
                        Preferred Contact Method
                      </label>
                      <div className="flex space-x-4">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="email"
                            checked={formData.preferredContact === 'email'}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-cyan-600 bg-slate-700 border-slate-600 focus:ring-cyan-500 focus:ring-2"
                          />
                          <span className="text-gray-300">Email</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="phone"
                            checked={formData.preferredContact === 'phone'}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-cyan-600 bg-slate-700 border-slate-600 focus:ring-cyan-500 focus:ring-2"
                          />
                          <span className="text-gray-300">Phone</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between">
                {activeStep > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-3 border border-slate-600 text-gray-300 rounded-lg hover:bg-slate-700 transition-all duration-300"
                  >
                    Previous
                  </button>
                )}
                
                {activeStep < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="ml-auto px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300"
                  >
                    Next Step
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="ml-auto px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Submit Quote Request
                        <Send className="w-4 h-4 ml-2" />
                      </span>
                    )}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get expert guidance and competitive pricing for your technology projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Expert Team</h3>
              <p className="text-gray-300">
                Certified professionals with deep expertise in AI, cloud, IoT, and emerging technologies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Fast Response</h3>
              <p className="text-gray-300">
                Receive your custom quote within 24 hours and start your project quickly.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Transparent Pricing</h3>
              <p className="text-gray-300">
                Clear, detailed quotes with no hidden costs and flexible payment options.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Complete the form above or contact us directly for immediate assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300">
                <Phone className="w-5 h-5 inline mr-2" />
                Call Us: +1 302 464 0950
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300">
                <Mail className="w-5 h-5 inline mr-2" />
                Email: kleber@ziontechgroup.com
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
