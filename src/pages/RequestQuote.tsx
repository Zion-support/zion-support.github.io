  Rocket,
  TrendingUp,
  BarChart3,
  Atom,
  Network,
  Lock,
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
  Clock
=======
import React, { useState } from 'react.ts';
import { motion              } from 'framer-motion.ts';
import { SEO              } from '../components/SEO';
import { Calculator, 
  FileText, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Building2,
  Users,
  Globe,
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  Shield,
  Zap,
  Database,
  Cloud,
  Bot,
  Smartphone,
  Monitor,
  Server,
  Lock,
  BarChart3,
  Settings,
  Palette,
  Code,
  Target,
  TrendingUp,
  Award,
  Star,
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  MapPin,
  Calendar,
  DollarSign,
  Package,
  Truck,
  Headphones
 
 
 
 
 
 
 
 
 
 
 
 
 
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
} from 'lucide-react';

export default function RequestQuote(...args: any[]): any {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    projectSize: '',
    timeline: '',
    budget: '',
    description: ''
  });

  const [formStep, setFormStep] = useState(1);
  const [expandedService, setExpandedService] = useState<any>(null);
  const [isSubmitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894

  const companySizes = [
    { value: 'startup', label: 'Startup (1-50 employees)' },
    { value: 'small', label: 'Small Business (51-200 employees)' },
    { value: 'medium', label: 'Medium Business (201-1000 employees)' },
    { value: 'large', label: 'Large Enterprise (1000+ employees)' }
  ];

  const industries = [
    { value: 'technology', label: 'Technology' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'finance', label: 'Financial Services' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'retail', label: 'Retail & E-commerce' },
    { value: 'education', label: 'Education' },
    { value: 'government', label: 'Government' },
    { value: 'nonprofit', label: 'Non-profit' },
    { value: 'other', label: 'Other' }
  ];

  const budgetRanges = [
    { value: 'under-50k', label: 'Under $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: '100k-250k', label: '$100,000 - $250,000' },
    { value: '250k-500k', label: '$250,000 - $500,000' },
    { value: '500k-1m', label: '$500,000 - $1,000,000' },
    { value: 'over-1m', label: 'Over $1,000,000' }
  ];

  const timelines = [
    { value: 'immediate', label: 'Immediate (0-3 months)' },
    { value: 'short-term', label: 'Short-term (3-6 months)' },
    { value: 'medium-term', label: 'Medium-term (6-12 months)' },
    { value: 'long-term', label: 'Long-term (1+ years)' }
  ];

  const urgencyLevels = [
    { value: 'low', label: 'Low', description: 'No immediate deadline', color: 'text-green-400' },
    { value: 'medium', label: 'Medium', description: 'Standard timeline', color: 'text-yellow-400' },
    { value: 'high', label: 'High', description: 'Urgent deadline', color: 'text-orange-400' },
    { value: 'critical', label: 'Critical', description: 'Emergency situation', color: 'text-red-400' }
  ];

  const contactMethods = [
    { value: 'email', label: 'Email', icon: Mail, description: 'Best for detailed responses' },
    { value: 'phone', label: 'Phone Call', icon: Phone, description: 'Best for immediate discussion' },
    { value: 'video', label: 'Video Call', icon: Users, description: 'Best for complex discussions' }
  ];

  const services = [
    {
      id: 'ai-ml',
      name: 'AI & Machine Learning',
      icon: Bot,
      description: 'Custom AI solutions, ML models, and intelligent automation',
      features: [
        'Custom AI model development',
        'Machine learning pipelines',
        'Natural language processing',
        'Computer vision solutions',
        'Predictive analytics',
        'AI-powered automation'
      ],
      pricing: 'Starting from $25,000',
      timeline: '4-12 weeks',
      category: 'AI Services'
    },
    {
      id: 'cloud-devops',
      name: 'Cloud & DevOps',
      icon: Cloud,
      description: 'Cloud infrastructure, CI/CD pipelines, and infrastructure automation',
      features: [
        'AWS/Azure/GCP setup',
        'Kubernetes orchestration',
        'CI/CD pipeline development',
        'Infrastructure as Code',
        'Monitoring & logging',
        'Security & compliance'
      ],
      pricing: 'Starting from $15,000',
      timeline: '2-8 weeks',
      category: 'IT Services'
    },
    {
      id: 'web-development',
      name: 'Web Development',
      icon: Monitor,
      description: 'Modern web applications, e-commerce, and custom web solutions',
      features: [
        'React/Next.js applications',
        'E-commerce platforms',
        'Custom web portals',
        'API development',
        'Performance optimization',
        'SEO & accessibility'
      ],
      pricing: 'Starting from $10,000',
      timeline: '3-10 weeks',
      category: 'IT Services'
    },
    {
      id: 'mobile-apps',
      name: 'Mobile Applications',
      icon: Smartphone,
      description: 'iOS and Android apps with cross-platform solutions',
      features: [
        'Native iOS development',
        'Native Android development',
        'React Native apps',
        'Flutter applications',
        'App store optimization',
        'Push notifications'
      ],
      pricing: 'Starting from $20,000',
      timeline: '6-16 weeks',
      category: 'IT Services'
    },
    {
      id: 'data-analytics',
      name: 'Data & Analytics',
      icon: BarChart3,
      description: 'Data warehousing, business intelligence, and advanced analytics',
      features: [
        'Data warehouse design',
        'ETL pipeline development',
        'Business intelligence dashboards',
        'Advanced analytics',
        'Data visualization',
        'Predictive modeling'
      ],
      pricing: 'Starting from $18,000',
      timeline: '4-12 weeks',
      category: 'AI Services'
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      icon: Shield,
      description: 'Security audits, compliance, and threat protection',
      features: [
        'Security assessments',
        'Penetration testing',
        'Compliance frameworks',
        'Threat detection',
        'Incident response',
        'Security training'
      ],
      pricing: 'Starting from $12,000',
      timeline: '2-6 weeks',
      category: 'Security'
    },
    {
      id: 'micro-saas',
      name: 'Micro SaaS Solutions',
      icon: Package,
      description: 'Custom SaaS applications and business automation tools',
      features: [
        'Custom SaaS platforms',
        'Business process automation',
        'Workflow management',
        'User management systems',
        'Subscription billing',
        'Analytics & reporting'
      ],
      pricing: 'Starting from $30,000',
      timeline: '8-20 weeks',
      category: 'Micro SaaS'
    },
    {
      id: 'integration',
      name: 'System Integration',
      icon: Settings,
      description: 'API development, third-party integrations, and data synchronization',
      features: [
        'API development',
        'Third-party integrations',
        'Data synchronization',
        'Webhook implementation',
        'Custom connectors',
        'Integration testing'
      ],
      pricing: 'Starting from $15,000',
      timeline: '3-8 weeks',
      category: 'IT Services'
    }
  ];

  const benefits = [
    {
      icon: Calculator,
      title: 'Transparent Pricing',
      description: 'Clear, upfront pricing with no hidden fees'
    },
    {
      icon: Clock,
      title: 'Fast Response',
      description: 'Get a detailed quote within 24-48 hours'
    },
    {
      icon: FileText,
      title: 'Detailed Proposals',
      description: 'Comprehensive project breakdowns and timelines'
    },
    {
      icon: CheckCircle,
      title: 'Quality Guarantee',
      description: 'We stand behind our work with satisfaction guarantees'
    }
  ];

  const handleInputChange = (field: anyanyanyanyanyanyanyanyanyanyanyanyanystring, value: string | string[])              => {
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark to-zion-purple opacity-20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
=======
  const toggleService = (serviceId: anyanyanyanyanyanyanyanyanyanyanyanyanystring)              => {
    setFormData(prev => ({
      ...prev,
      services: anyanyanyanyanyanyanyanyanyanyanyanyanyprev.services.includes(serviceId)
        ? prev.services.filter(id              => id !== serviceId)
        : [...prev.services, serviceId]
    }));
  };

  const toggleServiceExpansion = (serviceId: anyanyanyanyanyanyanyanyanyanyanyanyanystring)              => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  const nextStep = () => {
    if (formStep < 3) {
      setFormStep(formStep + 1);
    }
  };

  const prevStep = () => {
    if (formStep > 1) {
      setFormStep(formStep - 1);
    }
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  };

  const handleSubmit = async (e: anyanyanyanyanyanyanyanyanyanyanyanyanyReact.FormEvent)              => {;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setSubmitting(false);
    setSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      companyName: '',
      contactName: '',
      email: '',
      phone: '',
      companySize: '',
      industry: '',
      projectType: '',
      budget: '',
      timeline: '',
      description: '',
      services: [],
      urgency: 'medium',
      preferredContact: 'email'
    });
    setFormStep(1);
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <SEO 
          title="Quote Requested - Zion Tech Group"
          description="Thank you for your quote request. We'll get back to you soon with a detailed proposal."
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto px-6"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full mb-8">
            <CheckCircle className="w-10 h-10 text-green-400" />
          </div>
          
          <h1 className="text-4xl font-bold text-white mb-6">
            Quote Request Submitted!
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Thank you for your interest in Zion Tech Group. Our team has received your 
            request and will review it carefully. You can expect a detailed proposal 
            within 24-48 hours.
          </p>
          
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 mb-8">
            <h3 className="text-lg font-semibold text-white mb-4">What happens next?</h3>
            <div className="space-y-3 text-left">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</div>
                <div>
                  <div className="text-white font-medium">Initial Review</div>
                  <div className="text-gray-300 text-sm">Our team reviews your requirements and project scope</div>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                </div>
              </div>
      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index)              => (
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-cyan-400">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Form */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl border border-slate-600/50 p-8"
                >
                  {/* Progress Steps */}
                  <div className="flex items-center justify-between mb-8">
                    {[1, 2, 3].map((step) => (
                      <div key={step} className="flex items-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                          formStep >= step 
                            ? 'bg-gradient-to-r from-green-400 to-blue-500 text-white' 
                            : 'bg-slate-700 text-gray-400'
                        }`}>
                          {step}
                        </div>
                        {step < 3 && (
                          <div className={`w-16 h-1 mx-2 ${
                            formStep > step ? 'bg-gradient-to-r from-green-400 to-blue-500' : 'bg-slate-700'
                          }`}></div>
                        )}
                      </div>
                    ))}
                  </div>

                  <form onSubmit={handleSubmit}>
                    {/* Step 1: Basic Information */}
                    {formStep === 1 && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                      >
                        <h3 className="text-2xl font-bold text-white mb-6">Basic Information</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-white font-medium mb-2">Company Name *</label>
                            <input
                              type="text"
                              required
                              value={formData.companyName}
                              onChange={(e) => handleInputChange('companyName', e.target.value)}
                              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all duration-200"
                              placeholder="Your company name"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-white font-medium mb-2">Contact Name *</label>
                            <input
                              type="text"
                              required
                              value={formData.contactName}
                              onChange={(e) => handleInputChange('contactName', e.target.value)}
                              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all duration-200"
                              placeholder="Your full name"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-white font-medium mb-2">Email *</label>
                            <input
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all duration-200"
                              placeholder="your.email@company.com"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-white font-medium mb-2">Phone</label>
                            <input
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => handleInputChange('phone', e.target.value)}
                              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all duration-200"
                              placeholder="+1 (555) 123-4567"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-white font-medium mb-2">Company Size</label>
                            <select
                              value={formData.companySize}
                              onChange={(e) => handleInputChange('companySize', e.target.value)}
                              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all duration-200"
                            >
                              <option value="">Select company size</option>
                              {companySizes.map((size) => (
                                <option key={size} value={size}>{size}</option>
                              ))}
                            </select>
                          </div>
                          
                          <div>
                            <label className="block text-white font-medium mb-2">Industry</label>
                            <select
                              value={formData.industry}
                              onChange={(e) => handleInputChange('industry', e.target.value)}
                              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all duration-200"
                            >
                              <option value="">Select industry</option>
                              {industries.map((industry) => (
                                <option key={industry} value={industry}>{industry}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 2: Project Details */}
                    {formStep === 2 && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                      >
                        <h3 className="text-2xl font-bold text-white mb-6">Project Details</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-white font-medium mb-2">Project Type</label>
                            <select
                              value={formData.projectType}
                              onChange={(e) => handleInputChange('projectType', e.target.value)}
                              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all duration-200"
                            >
                              <option value="">Select project type</option>
                              {projectTypes.map((type) => (
                                <option key={type} value={type}>{type}</option>
                              ))}
                            </select>
                          </div>
                          
                          <div>
                            <label className="block text-white font-medium mb-2">Budget Range</label>
                            <select
                              value={formData.budget}
                              onChange={(e) => handleInputChange('budget', e.target.value)}
                              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all duration-200"
                            >
                              <option value="">Select budget range</option>
                              {budgets.map((budget) => (
                                <option key={budget} value={budget}>{budget}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-white font-medium mb-2">Timeline</label>
                            <select
                              value={formData.timeline}
                              onChange={(e) => handleInputChange('timeline', e.target.value)}
                              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all duration-200"
                            >
                              <option value="">Select timeline</option>
                              {timelines.map((timeline) => (
                                <option key={timeline} value={timeline}>{timeline}</option>
                              ))}
                            </select>
                          </div>
                          
                          <div>
                            <label className="block text-white font-medium mb-2">Urgency Level</label>
                            <select
                              value={formData.urgency}
                              onChange={(e) => handleInputChange('urgency', e.target.value)}
                              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus: anyanyanyanyanyanyanyanyanyanyanyanyanyoutline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all duration-200"
                            >
                              {urgencyLevels.map((level)              => (
                                <option key={level.value} value={level.value}>
                                  {level.label} - {level.description}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-white font-medium mb-2">Project Description *</label>
                          <textarea
                            required
                            rows={4}
                            value={formData.description}
                            onChange={(e) => handleInputChange('description', e.target.value)}
                            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all duration-200"
                            placeholder="Describe your project requirements, goals, and any specific features you need..."
                          />
                        </div>
                      </motion.div>
                    )}

                    {/* Step 3: Services & Preferences */}
                    {formStep === 3 && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                      >
                        <h3 className="text-2xl font-bold text-white mb-6">Services & Preferences</h3>
                        
                        <div>
                          <label className="block text-white font-medium mb-4">Select Services (Optional)</label>
                          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-4">
                            {services.map((service)              => (
                              <div key={service.id} className="relative">
                                <input
                                  type="checkbox"
                                  id={service.id}
                                  checked={formData.services.includes(service.id)}
                                  onChange={() => toggleService(service.id)}
                                  className="sr-only"
                                />
                                <label
                                  htmlFor={service.id}
                                  className={`block p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                                    formData.services.includes(service.id)
                                      ? 'border-green-400 bg-green-400/10'
                                      : 'border-slate-600 hover:border-slate-500 bg-slate-800/30'
                                  }`}
                                >
                                  <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                      <service.icon className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <div className="ml-3 flex-1">
                                      <div className="text-white font-medium">{service.name}</div>
                                      <div className="text-gray-300 text-sm mt-1">{service.description}</div>
                                      <div className="text-green-400 text-sm mt-2">{service.pricing}</div>
                                    </div>
                                  </div>
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block text-white font-medium mb-4">Preferred Contact Method</label>
                          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-3 gap-4">
                            {contactMethods.map((method)              => (
                              <div key={method.value} className="relative">
                                <input
                                  type="radio"
                                  id={method.value}
                                  name="preferredContact"
                                  value={method.value}
                                  checked={formData.preferredContact === method.value}
                                  onChange={(e) => handleInputChange('preferredContact', e.target.value)}
                                  className="sr-only"
                                />
                                <label
                                  htmlFor={method.value}
                                  className={`block p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                                    formData.preferredContact === method.value
                                      ? 'border-green-400 bg-green-400/10'
                                      : 'border-slate-600 hover:border-slate-500 bg-slate-800/30'
                                  }`}
                                >
                                  <div className="text-center">
                                    <method.icon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                                    <div className="text-white font-medium">{method.label}</div>
                                    <div className="text-gray-300 text-sm mt-1">{method.description}</div>
                                  </div>
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-8">
                      {formStep > 1 && (
                        <button
                          type="button"
                          onClick={prevStep}
                          className="px-6 py-3 border border-slate-600 text-gray-300 font-semibold rounded-lg hover:border-slate-500 hover:text-white transition-all duration-200"
                        >
                          Previous
                        </button>
                      )}
                      
                      <div className="ml-auto">
                        {formStep < 3 ? (
                          <button
                            type="button"
                            onClick={nextStep}
                            className="px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg hover:from-green-500 hover:to-blue-600 transition-all duration-200 hover:scale-105"
                          >
                            Next Step
                          </button>
                        ) : (
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg hover:from-green-500 hover:to-blue-600 transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                          </button>
                        )}
                      </div>
                    </div>
                  </form>
                </motion.div>
              </div>

              {/* Services Sidebar */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
                >
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl border border-slate-600/50 p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Our Services</h3>
                    <p className="text-gray-300 text-sm mb-4">
                      Explore our comprehensive range of technology services and solutions.
                    </p>
                    
                    <div className="space-y-3">
                      {services.map((service) => (
                        <div key={service.id} className="border border-slate-600/50 rounded-lg overflow-hidden">
                          <button
                            onClick={() => toggleServiceExpansion(service.id)}
                            className="w-full p-3 text-left hover:bg-slate-700/50 transition-colors duration-200"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <service.icon className="w-5 h-5 text-blue-400 mr-3" />
                                <span className="text-white font-medium text-sm">{service.name}</span>
                              </div>
                              {expandedService === service.id ? (
                                <ChevronUp className="w-4 h-4 text-gray-400" />
                              ) : (
                                <ChevronDown className="w-4 h-4 text-gray-400" />
                              )}
                            </div>
                          </button>
                          
                          {expandedService === service.id && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="px-3 pb-3 border-t border-slate-600/50"
                            >
                              <p className="text-gray-300 text-sm mt-3 mb-3">{service.description}</p>
                              <div className="space-y-2">
                                {service.features.map((feature, index) => (
                                  <div key={index} className="flex items-center text-gray-300 text-sm">
                                    <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                                    {feature}
                                  </div>
                                ))}
                              </div>
                              <div className="mt-3 pt-3 border-t border-slate-600/50">
                                <div className="flex items-center justify-between text-sm">
                                  <span className="text-gray-400">Starting from:</span>
                                  <span className="text-green-400 font-medium">{service.pricing}</span>
                                </div>
                                <div className="flex items-center justify-between text-sm mt-1">
                                  <span className="text-gray-400">Timeline:</span>
                                  <span className="text-blue-400 font-medium">{service.timeline}</span>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl border border-slate-600/50 p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Why Choose Us?</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <Award className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="text-white font-medium text-sm">Expert Team</div>
                          <div className="text-gray-300 text-xs">Certified professionals with years of experience</div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Star className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="text-white font-medium text-sm">Quality Guarantee</div>
                          <div className="text-gray-300 text-xs">We stand behind our work 100%</div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <TrendingUp className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="text-white font-medium text-sm">Proven Results</div>
                          <div className="text-gray-300 text-xs">Track record of successful projects</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6 text-center">
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your project requirements and get a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1-800-ZION-TECH"
                className="bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Call Now
              </a>
              <a
                href="mailto:info@ziontechgroup.com"
                className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Send Email
              </a>
            </div>
          </motion.div>
        </div>
      </div>

    </div>
  );
}
