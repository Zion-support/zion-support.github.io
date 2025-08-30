import React, { useState } from 'react.ts';
import { motion             } from 'framer-motion.ts';
<<<<<<< HEAD
import { Calculator,
  Send,
  CheckCircle,
  AlertCircle,
  Clock,
  DollarSign,
  Users,
  Calendar,
  FileText,
  MessageCircle,
  Phone,
  Mail,
  Building,
  Globe,
  Target,
  Star,
  ArrowRight,
  ChevronDown,
  ChevronUp,
=======
import { SEO             } from '../components/SEO';
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
<<<<<<< HEAD
  Lightbulb,
  CheckSquare,
  Square,
  Info,
  HelpCircle
interface QuoteForm {












  // Company Information
  companyName: string;
  industry: string;
  companySize: string;
  website: string;

  // Contact Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  jobTitle: string;

  // Project Details
  projectTitle: string;
  projectDescription: string;
  projectType: string;
  services: string[];
  budget: string;
  timeline: string;
  urgency: string;

  // Technical Requirements
  currentTechnology: string;
  integrationRequirements: string;
  complianceNeeds: string;
  scalabilityRequirements: string;

  // Additional Information
  teamSize: string;
  existingPartners: string;
  successMetrics: string;
  additionalNotes: string;

const industries = [
  'Technology',
  'Healthcare',
  'Finance',
  'Manufacturing',
  'Retail',
  'Education',
  'Government',
  'Non-profit',
  'Real Estate',
  'Transportation',
  'Energy',
  'Media & Entertainment',
  'Other'
];

const companySizes = [
  '1-10 employees',
  '11-50 employees',
  '51-200 employees',
  '201-500 employees',
  '501-1000 employees',
  '1000+ employees'
];

const projectTypes = [
  'New Development',
  'System Integration',
  'Migration/Upgrade',
  'Consulting',
  'Support & Maintenance',
  'Custom Solution',
  'Other'
];

const services = [
  'AI & Machine Learning',
  'Cloud & DevOps',
  'Cybersecurity',
  'IoT & Edge Computing',
  'Quantum Computing',
  'Digital Transformation',
  'IT Infrastructure',
  'Technology Consulting'
];

const budgets = [
  'Under $10,000',
  '$10,000 - $50,000',
  '$50,000 - $100,000',
  '$100,000 - $500,000',
  '$500,000 - $1,000,000',
  'Over $1,000,000'
];

const timelines = [
  'Immediate (1-2 weeks)',
  'Quick (1-2 months)',
  'Standard (3-6 months)',
  'Extended (6-12 months)',
  'Long-term (12+ months)',
  'Flexible'
];

const urgencyLevels = [
  'Low - Planning phase',
  'Medium - Need within 3 months',
  'High - Need within 1 month',
  'Critical - Need immediately'
];

const teamSizes = [
  '1-5 people',
  '6-15 people',
  '16-50 people',
  '51-100 people',
  '100+ people'
];
=======
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
 
 
 
 
 
 
 
 
 
 
 
 
} from 'lucide-react';
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

export default function RequestQuote(...args: any[]): any {
  const [formData, setFormData] = useState({
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
    services: [] as string[],
    urgency: 'medium',
    preferredContact: 'email'
  });

  const [formStep, setFormStep] = useState(1);
  const [expandedService, setExpandedService] = useState<any>(null);
  const [isSubmitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const companySizes = [
    '1-10 employees',
    '11-50 employees',
    '51-200 employees',
    '201-500 employees',
    '500+ employees'
  ];

  const industries = [
    'Technology',
    'Healthcare',
    'Finance',
    'Manufacturing',
    'Retail',
    'Education',
    'Real Estate',
    'Consulting',
    'Non-profit',
    'Other'
  ];

  const projectTypes = [
    'New Development',
    'System Upgrade',
    'Integration',
    'Consulting',
    'Support & Maintenance',
    'Training',
    'Other'
  ];

  const budgets = [
    'Under $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $250,000',
    '$250,000+'
  ];

  const timelines = [
    'ASAP',
    '1-2 weeks',
    '1-2 months',
    '3-6 months',
    '6+ months',
    'Flexible'
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

  const handleInputChange = (field: anyanyanyanyanyanyanyanyanyanyanyanystring, value: string | string[])             => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const toggleService = (serviceId: anyanyanyanyanyanyanyanyanyanyanyanystring)             => {
    setFormData(prev => ({
      ...prev,
      services: anyanyanyanyanyanyanyanyanyanyanyanyprev.services.includes(serviceId)
        ? prev.services.filter(id             => id !== serviceId)
        : [...prev.services, serviceId]
    }));
  };

  const toggleServiceExpansion = (serviceId: anyanyanyanyanyanyanyanyanyanyanyanystring)             => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  const nextStep = () => {
<<<<<<< HEAD
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);

  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);

=======
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

  const handleSubmit = async (e: anyanyanyanyanyanyanyanyanyanyanyanyReact.FormEvent)             => {;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
    e.preventDefault();
<<<<<<< HEAD
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');

      // Reset form after success
      setTimeout(() => {
        setSubmitStatus('idle');
        setFormData({
          companyName: '',
          industry: '',
          companySize: '',
          website: '',
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          jobTitle: '',
          projectTitle: '',
          projectDescription: '',
          projectType: '',
          services: [],
          budget: '',
          timeline: '',
          urgency: '',
          currentTechnology: '',
          integrationRequirements: '',
          complianceNeeds: '',
          scalabilityRequirements: '',
          teamSize: '',
          existingPartners: '',
          successMetrics: '',
          additionalNotes: ''
        });
        setCurrentStep(1);
      }, 3000);
    }, 2000);
  };

  const isStepValid = (step: anyanyanyanyanyanyanyanyanyanyanyanynumber)             => {
    switch (step) {
      case 1:
        return formData.companyName && formData.industry && formData.firstName && formData.lastName && formData.email;
      case 2:
        return formData.projectTitle && formData.projectDescription && formData.projectType && formData.services.length > 0;
      case 3:
        return formData.budget && formData.timeline && formData.urgency;
      case 4:
        return true; // Additional info is optional
      default:
        return false;

  };

  const getStepIcon = (step: anyanyanyanyanyanyanyanyanyanyanyanynumber)             => {
    switch (step) {
      case 1: return <Building className="h-5 w-5" />;
      case 2: return <Target className="h-5 w-5" />;
      case 3: return <Calculator className="h-5 w-5" />;
      case 4: return <FileText className="h-5 w-5" />;
      default: return <CheckCircle className="h-5 w-5" />;

  };

  const getStepTitle = (step: anyanyanyanyanyanyanyanyanyanyanyanynumber)             => {
    switch (step) {
      case 1: return 'Company & Contact';
      case 2: return 'Project Details';
      case 3: return 'Budget & Timeline';
      case 4: return 'Additional Info';
      default: return 'Complete';

  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-24">
      <div className="container-responsive">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Request a Quote
          </h1>
          <p className="text-zion-slate-light text-lg max-w-4xl mx-auto leading-relaxed">
            Get a detailed quote for your technology project. Our team will analyze your requirements
            and provide a comprehensive proposal tailored to your business needs and budget.
          </p>
        </motion.div>

        {/* Progress Steps */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}

          <div className="flex items-center justify-between max-w-4xl mx-auto">
            {Array.from({ length: anyanyanyanyanyanyanyanyanyanyanyanytotalSteps }, (_, index)             => (
              <div key={index + 1} className="flex items-center">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                  currentStep > index + 1
                    ? 'bg-zion-cyan border-zion-cyan text-white'
                    : currentStep === index + 1
                    ? 'bg-zion-cyan/20 border-zion-cyan text-zion-cyan'
                    : 'bg-white/10 border-zion-slate-light text-zion-slate-light'
                }`}>
                  {currentStep > index + 1 ? (
                    <CheckCircle className="h-6 w-6" />
                  ) : (
                    getStepIcon(index + 1)
                  )}
=======
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
<<<<<<< HEAD
            ))}
          </div>
        </motion.div>

        {/* Success Message */}
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8 p-6 bg-green-500/20 border border-green-500/30 rounded-2xl flex items-center gap-4 max-w-2xl mx-auto"

            <CheckCircle className="h-8 w-8 text-green-500" />
            <div>
              <h3 className="text-green-400 font-bold text-lg">Quote Request Submitted!</h3>
              <p className="text-green-400/80">
                Thank you for your request. Our team will review your requirements and get back to you
                with a detailed quote within 24-48 hours.
              </p>
            </div>
          </motion.div>
        )}

        {/* Quote Form */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}

          <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-3xl p-8">
            {/* Step 1: Company & Contact Information */}
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"

                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-white mb-2">Company & Contact Information</h2>
                  <p className="text-zion-slate-light">Tell us about your company and how to reach you</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="companyName" className="block text-white font-medium mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/10 backdrop-blur-xl border border-zion-cyan/30 rounded-xl px-4 py-3 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                      placeholder="Enter your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="industry" className="block text-white font-medium mb-2">
                      Industry *
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/10 backdrop-blur-xl border border-zion-cyan/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"

                      <option value="">Select industry</option>
                      {industries.map(industry => (
                        <option key={industry} value={industry} className="bg-zion-slate-dark text-white">
                          {industry}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="companySize" className="block text-white font-medium mb-2">
                      Company Size
                    </label>
                    <select
                      id="companySize"
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 backdrop-blur-xl border border-zion-cyan/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"

                      <option value="">Select company size</option>
                      {companySizes.map(size => (
                        <option key={size} value={size} className="bg-zion-slate-dark text-white">
                          {size}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="website" className="block text-white font-medium mb-2">
                      Website
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 backdrop-blur-xl border border-zion-cyan/30 rounded-xl px-4 py-3 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                      placeholder="https://yourcompany.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="firstName" className="block text-white font-medium mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/10 backdrop-blur-xl border border-zion-cyan/30 rounded-xl px-4 py-3 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                      placeholder="Enter your first name"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-white font-medium mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/10 backdrop-blur-xl border border-zion-cyan/30 rounded-xl px-4 py-3 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                      placeholder="Enter your last name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/10 backdrop-blur-xl border border-zion-cyan/30 rounded-xl px-4 py-3 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-white font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 backdrop-blur-xl border border-zion-cyan/30 rounded-xl px-4 py-3 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="jobTitle" className="block text-white font-medium mb-2">
                      Job Title
                    </label>
                    <input
                      type="text"
                      id="jobTitle"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 backdrop-blur-xl border border-zion-cyan/30 rounded-xl px-4 py-3 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                      placeholder="Enter your job title"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2: Project Details */}
            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"

                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-white mb-2">Project Details</h2>
                  <p className="text-zion-slate-light">Describe your project and what you need</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label htmlFor="projectTitle" className="block text-white font-medium mb-2">
                      Project Title *
                    </label>
                    <input
                      type="text"
                      id="projectTitle"
                      name="projectTitle"
                      value={formData.projectTitle}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/10 backdrop-blur-xl border border-zion-cyan/30 rounded-xl px-4 py-3 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                      placeholder="Enter a descriptive project title"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="projectDescription" className="block text-white font-medium mb-2">
                      Project Description *
                    </label>
                    <textarea
                      id="projectDescription"
                      name="projectDescription"
                      value={formData.projectDescription}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full bg-white/10 backdrop-blur-xl border border-zion-cyan/30 rounded-xl px-4 py-3 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Describe your project goals, requirements, and expected outcomes..."
                    />
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-white font-medium mb-2">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/10 backdrop-blur-xl border border-zion-cyan/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"

                      <option value="">Select project type</option>
                      {projectTypes.map(type => (
                        <option key={type} value={type} className="bg-zion-slate-dark text-white">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Services Needed *
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {services.map(service => (
                        <label key={service} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.services.includes(service)}
                            onChange={() => handleServiceToggle(service)}
                            className="w-4 h-4 text-zion-cyan bg-white/10 border-zion-cyan/30 rounded focus:ring-zion-cyan focus:ring-2"
                          />
                          <span className="text-zion-slate-light text-sm">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Budget & Timeline */}
            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"

                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-white mb-2">Budget & Timeline</h2>
                  <p className="text-zion-slate-light">Help us understand your constraints and priorities</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="budget" className="block text-white font-medium mb-2">
                      Budget Range *
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/10 backdrop-blur-xl border border-zion-cyan/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"

                      <option value="">Select budget range</option>
                      {budgets.map(budget => (
                        <option key={budget} value={budget} className="bg-zion-slate-dark text-white">
                          {budget}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-white font-medium mb-2">
                      Project Timeline *
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/10 backdrop-blur-xl border border-zion-cyan/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"

                      <option value="">Select timeline</option>
                      {timelines.map(timeline => (
                        <option key={timeline} value={timeline} className="bg-zion-slate-dark text-white">
                          {timeline}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="urgency" className="block text-white font-medium mb-2">
                      Project Urgency *
                    </label>
                    <select
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/10 backdrop-blur-xl border border-zion-cyan/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"

                      <option value="">Select urgency level</option>
                      {urgencyLevels.map(level => (
                        <option key={level} value={level} className="bg-zion-slate-dark text-white">
                          {level}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 4: Additional Information */}
            {currentStep === 4 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"

                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-white mb-2">Additional Information</h2>
                  <p className="text-zion-slate-light">Help us provide a more accurate quote</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="currentTechnology" className="block text-white font-medium mb-2">
                      Current Technology Stack
                    </label>
                    <input
                      type="text"
                      id="currentTechnology"
                      name="currentTechnology"
                      value={formData.currentTechnology}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 backdrop-blur-xl border border-zion-cyan/30 rounded-xl px-4 py-3 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                      placeholder="e.g., React, Node.js, AWS, etc."
                    />
                  </div>

                  <div>
                    <label htmlFor="teamSize" className="block text-white font-medium mb-2">
                      Development Team Size
                    </label>
                    <select
                      id="teamSize"
                      name="teamSize"
                      value={formData.teamSize}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 backdrop-blur-xl border border-zion-cyan/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"

                      <option value="">Select team size</option>
                      {teamSizes.map(size => (
                        <option key={size} value={size} className="bg-zion-slate-dark text-white">
                          {size}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="integrationRequirements" className="block text-white font-medium mb-2">
                      Integration Requirements
                    </label>
                    <textarea
                      id="integrationRequirements"
                      name="integrationRequirements"
                      value={formData.integrationRequirements}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full bg-white/10 backdrop-blur-xl border border-zion-cyan/30 rounded-xl px-4 py-3 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Describe any third-party integrations or systems that need to be connected..."
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="successMetrics" className="block text-white font-medium mb-2">
                      Success Metrics
                    </label>
                    <textarea
                      id="successMetrics"
                      name="successMetrics"
                      value={formData.successMetrics}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full bg-white/10 backdrop-blur-xl border border-zion-cyan/30 rounded-xl px-4 py-3 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="How will you measure the success of this project? (KPIs, goals, etc.)"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="additionalNotes" className="block text-white font-medium mb-2">
                      Additional Notes
                    </label>
                    <textarea
                      id="additionalNotes"
                      name="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full bg-white/10 backdrop-blur-xl border border-zion-cyan/30 rounded-xl px-4 py-3 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Any additional information, special requirements, or questions you'd like to share..."
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-8 border-t border-zion-cyan/20">
              <button
                type="button"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="px-6 py-3 border border-zion-cyan text-zion-cyan rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"

                Previous
              </button>

              <div className="text-zion-slate-light text-sm">
                Step {currentStep} of {totalSteps}
              </div>

              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!isStepValid(currentStep)}
                  className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"

                  Next Step
                  <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"

                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Submit Quote Request
                    </>
                  )}
                </button>
              )}
            </div>
          </form>
        </motion.div>

        {/* Why Choose Zion Tech Group */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}

          <h2 className="text-3xl font-bold text-white mb-12">Why Choose Zion Tech Group?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
=======
              <div className="flex items-start">
                <div className="w-6 h-6 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</div>
                <div>
                  <div className="text-white font-medium">Detailed Proposal</div>
                  <div className="text-gray-300 text-sm">We'll send you a comprehensive proposal with pricing and timeline</div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-purple-500/20 text-purple-400 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</div>
                <div>
                  <div className="text-white font-medium">Follow-up Call</div>
                  <div className="text-gray-300 text-sm">Schedule a call to discuss the proposal and answer questions</div>
                </div>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
              </div>
            </div>
          </div>
<<<<<<< HEAD
        </motion.div>

        {/* Contact Information */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}

          <div className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-3xl p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">Need Immediate Assistance?</h2>
            <p className="text-zion-slate-light mb-8">
              Can't wait for a quote? Our team is available to discuss your project right now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-3 rounded-xl hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300"

                <Phone className="mr-2 h-4 w-4" />
                Call Now: +1 (302) 464-0950
              </a>
              <a
                href="/contact"
                className="inline-flex items-center border border-zion-cyan text-zion-cyan px-6 py-3 rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"

                <MessageCircle className="mr-2 h-4 w-4" />
                Live Chat
              </a>
            </div>
=======
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={resetForm}
              className="px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg hover:from-green-500 hover:to-blue-600 transition-all duration-200 hover:scale-105"
            >
              Request Another Quote
            </button>
            <a
              href="mailto:info@ziontechgroup.com"
              className="px-8 py-3 border border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-white transition-all duration-200"
            >
              Contact Us
            </a>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Request Quote - Zion Tech Group"
        description="Get a custom quote for your technology project. Our team will provide detailed pricing and timelines for your specific needs."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl mb-6">
              <Calculator className="w-10 h-10 text-green-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get Your <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Custom Quote</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Tell us about your project and we'll provide a detailed quote with pricing, 
              timeline, and implementation plan tailored to your specific needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index)             => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl mb-4">
                  <benefit.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
                              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus: anyanyanyanyanyanyanyanyanyanyanyanyoutline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all duration-200"
                            >
                              {urgencyLevels.map((level)             => (
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
                          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-4">
                            {services.map((service)             => (
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
                          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanygrid-cols-3 gap-4">
                            {contactMethods.map((method)             => (
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Need Immediate Assistance?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team is here to help. Contact us directly for urgent inquiries 
              or to discuss your project in detail.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl mb-4">
                  <Mail className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Email Us</h3>
                <p className="text-gray-300 text-sm mb-3">Get a quick response</p>
                <a
                  href="mailto:info@ziontechgroup.com"
                  className="text-green-400 hover:text-green-300 transition-colors duration-200"
                >
                  info@ziontechgroup.com
                </a>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl mb-4">
                  <Phone className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Call Us</h3>
                <p className="text-gray-300 text-sm mb-3">Speak with an expert</p>
                <a
                  href="tel:+13024640950"
                  className="text-green-400 hover:text-green-300 transition-colors duration-200"
                >
                  +1 (302) 464-0950
                </a>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl mb-4">
                  <Headphones className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Live Chat</h3>
                <p className="text-gray-300 text-sm mb-3">Instant support</p>
                <button className="text-green-400 hover:text-green-300 transition-colors duration-200">
                  Start Chat
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )};
=======;
            </div>;
          </div>;
        </motion.div>;
      </div>;
    </div>;
  );
<<<<<<< HEAD
</div>}}}}}}}}
=======
}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
