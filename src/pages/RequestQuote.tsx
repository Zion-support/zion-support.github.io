import React, { useState } from "react"
import { motion } from "framer-motion"
import { SEO } from "../components/SEO"
import { ;
  Calculator,;
  FileText, ;
  Clock, ;
  CheckCircle, ;
  AlertCircle,;
  Building2,;
  Users,;
  Globe,;
  Shield,;
  Zap,;
  Database,;
  Cloud,;
  Bot,;
  Smartphone,;
  Monitor,;
  Server,;
  Lock,;
  BarChart3,;
  Settings,;
  Palette,;
  Code,;
  Target,;
  TrendingUp,;
  Award,;
  Star,;
  ChevronDown,;
  ChevronUp,;
  Mail,;
  Phone,;
  MapPin,;
  Calendar,;
  DollarSign,;
  Package,;
  Truck,;
  Headphones;
} from "lucide-react"
export default function RequestQuote() {;
  const [formData, setFormData] = useState({;
    companyName: '',contactName: '',email: '',phone: '',companySize: '',industry: '',projectType: '',budget: '',timeline: '',description: '',services: [] as string[],urgency: 'medium',preferredContact: 'email'
  });
  const [formStep, setFormStep] = useState(1),;
  const [expandedService, setExpandedService] = useState<string | null>(null),;
  const [isSubmitting, setSubmitting] = useState(false),;
  const [submitted, setSubmitted] = useState(false),;

  const companySizes = [;
    '1-10 employees11-50 employees',;
    '51-200 employees201-500 employees',;
    '500+ employees'
  ],;

  const industries = [;
    'TechnologyHealthcare',;
    'FinanceManufacturing',;
    'RetailEducation',;
    'Real EstateConsulting',;
    'Non-profitOther'
  ],;

  const projectTypes = [;
    'New DevelopmentSystem Upgrade',;
    'IntegrationConsulting',;
    'Support & MaintenanceTraining',;
    'Other'
  ],;

  const budgets = [;
    'Under $10,000$10,000 - $25,000',;
    '$25,000 - $50,000$50,000 - $100,000',;
    '$100,000 - $250,000$250,000+'
  ],;

  const timelines = [;
    'ASAP1-2 weeks',;
    '1-2 months3-6 months',;
    '6+ monthsFlexible'
  ],;

  const urgencyLevels = [;
    { value: 'low', label: 'Low', description: 'No immediate deadline', color: 'text-green-400' };
    { value: 'medium', label: 'Medium', description: 'Standard timeline', color: 'text-yellow-400' };
    { value: 'high', label: 'High', description: 'Urgent deadline', color: 'text-orange-400' };
    { value: 'critical', label: 'Critical', description: 'Emergency situation', color: 'text-red-400' };
  ];
  const contactMethods = [;
    { value: 'email', label: 'Email', icon: Mail, description: 'Best for detailed responses' };
    { value: 'phone', label: 'Phone Call', icon: Phone, description: 'Best for immediate discussion' };
    { value: 'video', label: 'Video Call', icon: Users, description: 'Best for complex discussions' };
  ];
  const services = [;
    {;
      id: 'ai-ml',name: 'AI & Machine Learning',icon: Bot,description: 'Custom AI solutions, ML models, and intelligent automation',;
      features: [;
        'Custom AI model developmentMachine learning pipelines'
        'Natural language processingComputer vision solutions',;
        'Predictive analyticsAI-powered automation'
      ],;
      pricing: 'Starting from $25,000',;
      timeline: '4-12 weeks',category: 'AI Services'
    };
    {;
      id: 'cloud-devops',name: 'Cloud & DevOps',icon: Cloud,description: 'Cloud infrastructure, CI/CD pipelines, and infrastructure automation',;
      features: [;
        'AWS/Azure/GCP setupKubernetes orchestration'
        'CI/CD pipeline developmentInfrastructure as Code',;
        'Monitoring & loggingSecurity & compliance'
      ],;
      pricing: 'Starting from $15,000',;
      timeline: '2-8 weeks',category: 'IT Services'
    };
    {;
      id: 'web-development',name: 'Web Development',icon: Monitor,description: 'Modern web applications, e-commerce, and custom web solutions',;
      features: [;
        'React/Next.js applicationsE-commerce platforms'
        'Custom web portalsAPI development',;
        'Performance optimizationSEO & accessibility'
      ],;
      pricing: 'Starting from $10,000',;
      timeline: '3-10 weeks',category: 'IT Services'
    };
    {;
      id: 'mobile-apps',name: 'Mobile Applications',icon: Smartphone,description: 'iOS and Android apps with cross-platform solutions',features: [;
        'Native iOS developmentNative Android development'
        'React Native appsFlutter applications',;
        'App store optimizationPush notifications'
      ],;
      pricing: 'Starting from $20,000',;
      timeline: '6-16 weeks',category: 'IT Services'
    };
    {;
      id: 'data-analytics',name: 'Data & Analytics',icon: BarChart3,description: 'Data warehousing, business intelligence, and advanced analytics',;
      features: [;
        'Data warehouse designETL pipeline development'
        'Business intelligence dashboardsAdvanced analytics',;
        'Data visualizationPredictive modeling'
      ],;
      pricing: 'Starting from $18,000',;
      timeline: '4-12 weeks',category: 'AI Services'
    };
    {;
      id: 'cybersecurity',name: 'Cybersecurity',icon: Shield,description: 'Security audits, compliance, and threat protection',;
      features: [;
        'Security assessmentsPenetration testing'
        'Compliance frameworksThreat detection',;
        'Incident responseSecurity training'
      ],;
      pricing: 'Starting from $12,000',;
      timeline: '2-6 weeks',category: 'Security'
    };
    {;
      id: 'micro-saas',name: 'Micro SaaS Solutions',icon: Package,description: 'Custom SaaS applications and business automation tools',features: [;
        'Custom SaaS platformsBusiness process automation'
        'Workflow managementUser management systems',;
        'Subscription billingAnalytics & reporting'
      ],;
      pricing: 'Starting from $30,000',;
      timeline: '8-20 weeks',category: 'Micro SaaS'
    };
    {;
      id: 'integration',name: 'System Integration',icon: Settings,description: 'API development, third-party integrations, and data synchronization',;
      features: [;
        'API developmentThird-party integrations'
        'Data synchronizationWebhook implementation',;
        'Custom connectorsIntegration testing'
      ],;
      pricing: 'Starting from $15,000',;
      timeline: '3-8 weeks',category: 'IT Services'
    };
  ];
  const benefits = [;
    {;
      icon: Calculator,title: 'Transparent Pricing',description: 'Clear, upfront pricing with no hidden fees'
    },;
    {;
      icon: Clock,title: 'Fast Response',description: 'Get a detailed quote within 24-48 hours'
    };
    {;
      icon: FileText,title: 'Detailed Proposals',description: 'Comprehensive project breakdowns and timelines'
    };
    {;
      icon: CheckCircle,title: 'Quality Guarantee',description: 'We stand behind our work with satisfaction guarantees'
    };
  ];
  const handleInputChange = (field: string, value: string | string[]) => {;
    setFormData(prev => ({;
      ...prev
      [field]: value;
    })),;
  },;

  const toggleService = (serviceId: string) => {;
    setFormData(prev => ({;
      ...prev
      services: prev.services.includes(serviceId)
        ? prev.services.filter(id => id !== serviceId)
        : [...prev.services, serviceId]
    })),;
  },;

  const toggleServiceExpansion = (serviceId: string) => {;
    setExpandedService(expandedService === serviceId ? null : serviceId)
  };
  const nextStep = () => {;
    if (formStep < 3) {;
      setFormStep(formStep + 1),;
    };
  },;

  const prevStep = () => {;
    if (formStep > 1) {;
      setFormStep(formStep - 1),;
    };
  },;

  const handleSubmit = async (e: React.FormEvent) => {;
    e.preventDefault()
    setSubmitting(true),;
    ;
    //[^;]*
    await new Promise(resolve => setTimeout(resolve, 2000)),;
    ;
    setSubmitting(false),;
    setSubmitted(true),;
  },;

  const resetForm = () => {;
    setFormData({;
      companyName: '',contactName: '',email: '',phone: '',companySize: '',industry: '',projectType: '',budget: '',timeline: '',description: '',services: [],urgency: 'medium',preferredContact: 'email'
    });
    setFormStep(1),;
    setSubmitted(false),;
  },;

  if (submitted) {;
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">;
        <SEO ;
          title="Quote Requested - Zion Tech Group"
          description="Thank you for your quote request. We'll get back to you soon with a detailed proposal."
        />;
        ;
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }};
          animate={{ opacity: 1, scale: 1 }};
          transition={{ duration: 0.5 }};
          className="[^"]*"
        >;
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full mb-8">;
            <[^>]*/>
          </[^>]*>
          ;
          <h1 className="text-4xl font-bold text-white mb-6">;
            Quote Request Submitted!;
          </[^>]*>
          ;
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">;
            Thank you for your interest in Zion Tech Group. Our team has received your ;
            request and will review it carefully. You can expect a detailed proposal ;
            within 24-48 hours.;
          </[^>]*>
          ;
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 mb-8">;
            <h3 className="text-lg font-semibold text-white mb-4">What happens next?</[^>]*>
            <div className="space-y-3 text-left">;
              <div className="flex items-start">;
                <div className="w-6 h-6 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</[^>]*>
                <div>;
                  <div className="text-white font-medium">Initial Review</[^>]*>
                  <div className="text-gray-300 text-sm">Our team reviews your requirements and project scope</[^>]*>
                </[^>]*>
              </[^>]*>
              <div className="flex items-start">;
                <div className="w-6 h-6 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</[^>]*>
                <div>;
                  <div className="text-white font-medium">Detailed Proposal</[^>]*>
                  <div className="text-gray-300 text-sm">We'll send you a comprehensive proposal with pricing and timeline</[^>]*>
                </[^>]*>
              </[^>]*>
              <div className="flex items-start">;
                <div className="w-6 h-6 bg-purple-500/20 text-purple-400 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</[^>]*>
                <div>;
                  <div className="text-white font-medium">Follow-up Call</[^>]*>
                  <div className="text-gray-300 text-sm">Schedule a call to discuss the proposal and answer questions</[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
          ;
          <div className="flex flex-col sm:flex-row gap-4 justify-center">;
            <button;
              onClick={resetForm};
              className="[^"]*"
            >;
              Request Another Quote;
            </[^>]*>
            <a;
              href="mailto:info@ziontechgroup.com"
              className="[^"]*"
            >;
              Contact Us;
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      <SEO ;
        title="Request Quote - Zion Tech Group"
        description="Get a custom quote for your technology project. Our team will provide detailed pricing and timelines for your specific needs."
      />;
      ;
      {/* Hero Section */};
      <section className="relative py-20 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10"></[^>]*>
        <div className="container mx-auto px-6 relative z-10">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl mb-6">;
              <[^>]*/>
            </[^>]*>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;
              Get Your <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Custom Quote</[^>]*>
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">;
              Tell us about your project and we'll provide a detailed quote with pricing;
              timeline, and implementation plan tailored to your specific needs.;
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Benefits */};
      <section className="py-16">;
        <div className="container mx-auto px-6">;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
            {benefits.map((benefit, index) => (;
              <motion.div
                key={benefit.title};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.8, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl mb-4">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</[^>]*>
                <p className="text-gray-300 text-sm">{benefit.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Main Form Section */};
      <section className="py-20">;
        <div className="container mx-auto px-6">;
          <div className="max-w-6xl mx-auto">;
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">;
              {/* Form */};
              <div className="lg:col-span-2">;
                <motion.div
                  initial={{ opacity: 0, x: -20 }};
                  whileInView={{ opacity: 1, x: 0 }};
                  transition={{ duration: 0.8 }};
                  className="[^"]*"
                >;
                  {/* Progress Steps */};
                  <div className="flex items-center justify-between mb-8">;
                    {[1, 2, 3].map((step) => (;
                      <div key={step} className="flex items-center">;
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${;
                          formStep >= step ;
                            ? 'bg-gradient-to-r from-green-400 to-blue-500 text-white' ;
                            : 'bg-slate-700 text-gray-400'
                        }`}>;
                          {step};
                        </[^>]*>
                        {step < 3 && (;&& (; (
                          <div className={`w-16 h-1 mx-2 ${;
                            formStep > step ? 'bg-gradient-to-r from-green-400 to-blue-500' : 'bg-slate-700'
                          }`}></[^>]*>
                        )};
                      </[^>]*>
                    ))};
                  </[^>]*>

                  <form onSubmit={handleSubmit}>;
                    {/* Step 1: Basic Information */};
                    {formStep === 1 && (;&& (; (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }};
                        animate={{ opacity: 1, y: 0 }};
                        transition={{ duration: 0.5 }};
                        className="[^"]*"
                      >;
                        <h3 className="text-2xl font-bold text-white mb-6">Basic Information</[^>]*>
                        ;
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
                          <div>;
                            <label className="block text-white font-medium mb-2">Company Name *</[^>]*>
                            <input;
                              type="text"
                              required;
                              value={formData.companyName};
                              onChange={(e) => handleInputChange('companyName', e.target.value)};
                              className="[^"]*"
                              placeholder="Your company name"
                            />;
                          </[^>]*>
                          ;
                          <div>;
                            <label className="block text-white font-medium mb-2">Contact Name *</[^>]*>
                            <input;
                              type="text"
                              required;
                              value={formData.contactName};
                              onChange={(e) => handleInputChange('contactName', e.target.value)};
                              className="[^"]*"
                              placeholder="Your full name"
                            />;
                          </[^>]*>
                        </[^>]*>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
                          <div>;
                            <label className="block text-white font-medium mb-2">Email *</[^>]*>
                            <input;
                              type="email"
                              required;
                              value={formData.email};
                              onChange={(e) => handleInputChange('email', e.target.value)};
                              className="[^"]*"
                              placeholder="your.email@company.com"
                            />;
                          </[^>]*>
                          ;
                          <div>;
                            <label className="block text-white font-medium mb-2">Phone</[^>]*>
                            <input;
                              type="tel"
                              value={formData.phone};
                              onChange={(e) => handleInputChange('phone', e.target.value)};
                              className="[^"]*"
                              placeholder="+1 (555) 123-4567"
                            />;
                          </[^>]*>
                        </[^>]*>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
                          <div>;
                            <label className="block text-white font-medium mb-2">Company Size</[^>]*>
                            <select;
                              value={formData.companySize};
                              onChange={(e) => handleInputChange('companySize', e.target.value)};
                              className="[^"]*"
                            >;
                              <option value="">Select company size</[^>]*>
                              {companySizes.map((size) => (;
                                <option key={size} value={size}>{size}</[^>]*>
                              ))};
                            </[^>]*>
                          </[^>]*>
                          ;
                          <div>;
                            <label className="block text-white font-medium mb-2">Industry</[^>]*>
                            <select;
                              value={formData.industry};
                              onChange={(e) => handleInputChange('industry', e.target.value)};
                              className="[^"]*"
                            >;
                              <option value="">Select industry</[^>]*>
                              {industries.map((industry) => (;
                                <option key={industry} value={industry}>{industry}</[^>]*>
                              ))};
                            </[^>]*>
                          </[^>]*>
                        </[^>]*>
                      </[^>]*>
                    )};

                    {/* Step 2: Project Details */};
                    {formStep === 2 && (;&& (; (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }};
                        animate={{ opacity: 1, y: 0 }};
                        transition={{ duration: 0.5 }};
                        className="[^"]*"
                      >;
                        <h3 className="text-2xl font-bold text-white mb-6">Project Details</[^>]*>
                        ;
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
                          <div>;
                            <label className="block text-white font-medium mb-2">Project Type</[^>]*>
                            <select;
                              value={formData.projectType};
                              onChange={(e) => handleInputChange('projectType', e.target.value)};
                              className="[^"]*"
                            >;
                              <option value="">Select project type</[^>]*>
                              {projectTypes.map((type) => (;
                                <option key={type} value={type}>{type}</[^>]*>
                              ))};
                            </[^>]*>
                          </[^>]*>
                          ;
                          <div>;
                            <label className="block text-white font-medium mb-2">Budget Range</[^>]*>
                            <select;
                              value={formData.budget};
                              onChange={(e) => handleInputChange('budget', e.target.value)};
                              className="[^"]*"
                            >;
                              <option value="">Select budget range</[^>]*>
                              {budgets.map((budget) => (;
                                <option key={budget} value={budget}>{budget}</[^>]*>
                              ))};
                            </[^>]*>
                          </[^>]*>
                        </[^>]*>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
                          <div>;
                            <label className="block text-white font-medium mb-2">Timeline</[^>]*>
                            <select;
                              value={formData.timeline};
                              onChange={(e) => handleInputChange('timeline', e.target.value)};
                              className="[^"]*"
                            >;
                              <option value="">Select timeline</[^>]*>
                              {timelines.map((timeline) => (;
                                <option key={timeline} value={timeline}>{timeline}</[^>]*>
                              ))};
                            </[^>]*>
                          </[^>]*>
                          ;
                          <div>;
                            <label className="block text-white font-medium mb-2">Urgency Level</[^>]*>
                            <select;
                              value={formData.urgency};
                              onChange={(e) => handleInputChange('urgency', e.target.value)};
                              className="[^"]*"
                            >;
                              {urgencyLevels.map((level) => (;
                                <option key={level.value} value={level.value}>;
                                  {level.label} - {level.description};
                                </[^>]*>
                              ))};
                            </[^>]*>
                          </[^>]*>
                        </[^>]*>

                        <div>;
                          <label className="block text-white font-medium mb-2">Project Description *</[^>]*>
                          <textarea;
                            required;
                            rows={4};
                            value={formData.description};
                            onChange={(e) => handleInputChange('description', e.target.value)};
                            className="[^"]*"
                            placeholder="Describe your project requirements, goals, and any specific features you need..."
                          />;
                        </[^>]*>
                      </[^>]*>
                    )};

                    {/* Step 3: Services & Preferences */};
                    {formStep === 3 && (;&& (; (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }};
                        animate={{ opacity: 1, y: 0 }};
                        transition={{ duration: 0.5 }};
                        className="[^"]*"
                      >;
                        <h3 className="text-2xl font-bold text-white mb-6">Services & Preferences</[^>]*>
                        ;
                        <div>;
                          <label className="block text-white font-medium mb-4">Select Services (Optional)</[^>]*>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
                            {services.map((service) => (;
                              <div key={service.id} className="relative">;
                                <input;
                                  type="checkbox"
                                  id={service.id};
                                  checked={formData.services.includes(service.id)};
                                  onChange={() => toggleService(service.id)};
                                  className="[^"]*"
                                />;
                                <label;
                                  htmlFor={service.id};
                                  className={`block p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${;
                                    formData.services.includes(service.id)
                                      ? 'border-green-400 bg-green-400/10'
                                      : 'border-slate-600 hover:border-slate-500 bg-slate-800/30'
                                  }`};
                                >;
                                  <div className="flex items-start">;
                                    <div className="flex-shrink-0">;
                                      <[^>]*/>
                                    </[^>]*>
                                    <div className="ml-3 flex-1">;
                                      <div className="text-white font-medium">{service.name}</[^>]*>
                                      <div className="text-gray-300 text-sm mt-1">{service.description}</[^>]*>
                                      <div className="text-green-400 text-sm mt-2">{service.pricing}</[^>]*>
                                    </[^>]*>
                                  </[^>]*>
                                </[^>]*>
                              </[^>]*>
                            ))};
                          </[^>]*>
                        </[^>]*>

                        <div>;
                          <label className="block text-white font-medium mb-4">Preferred Contact Method</[^>]*>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">;
                            {contactMethods.map((method) => (;
                              <div key={method.value} className="relative">;
                                <input;
                                  type="radio"
                                  id={method.value};
                                  name="preferredContact"
                                  value={method.value};
                                  checked={formData.preferredContact === method.value};
                                  onChange={(e) => handleInputChange('preferredContact', e.target.value)};
                                  className="[^"]*"
                                />;
                                <label;
                                  htmlFor={method.value};
                                  className={`block p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${;
                                    formData.preferredContact === method.value
                                      ? 'border-green-400 bg-green-400/10'
                                      : 'border-slate-600 hover:border-slate-500 bg-slate-800/30'
                                  }`};
                                >;
                                  <div className="text-center">;
                                    <[^>]*/>
                                    <div className="text-white font-medium">{method.label}</[^>]*>
                                    <div className="text-gray-300 text-sm mt-1">{method.description}</[^>]*>
                                  </[^>]*>
                                </[^>]*>
                              </[^>]*>
                            ))};
                          </[^>]*>
                        </[^>]*>
                      </[^>]*>
                    )};

                    {/* Navigation Buttons */};
                    <div className="flex justify-between mt-8">;
                      {formStep > 1 && (;&& (; (
                        <button;
                          type="button"
                          onClick={prevStep};
                          className="[^"]*"
                        >;
                          Previous;
                        </[^>]*>
                      )};
                      ;
                      <div className="ml-auto">;
                        {formStep < 3 ? (;
                          <button;
                            type="button"
                            onClick={nextStep};
                            className="[^"]*"
                          >;
                            Next Step;
                          </[^>]*>
                        ) : (;
                          <button;
                            type="submit"
                            disabled={isSubmitting};
                            className="[^"]*"
                          >;
                            {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                          </[^>]*>
                        )};
                      </[^>]*>
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>

              {/* Services Sidebar */};
              <div className="lg:col-span-1">;
                <motion.div
                  initial={{ opacity: 0, x: 20 }};
                  whileInView={{ opacity: 1, x: 0 }};
                  transition={{ duration: 0.8 }};
                  className="[^"]*"
                >;
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl border border-slate-600/50 p-6">;
                    <h3 className="text-xl font-bold text-white mb-4">Our Services</[^>]*>
                    <p className="text-gray-300 text-sm mb-4">;
                      Explore our comprehensive range of technology services and solutions.;
                    </[^>]*>
                    ;
                    <div className="space-y-3">;
                      {services.map((service) => (;
                        <div key={service.id} className="border border-slate-600/50 rounded-lg overflow-hidden">;
                          <button;
                            onClick={() => toggleServiceExpansion(service.id)};
                            className="[^"]*"
                          >;
                            <div className="flex items-center justify-between">;
                              <div className="flex items-center">;
                                <[^>]*/>
                                <span className="text-white font-medium text-sm">{service.name}</[^>]*>
                              </[^>]*>
                              {expandedService === service.id ? (;
                                <[^>]*/>
                              ) : (;
                                <[^>]*/>
                              )};
                            </[^>]*>
                          </[^>]*>
                          ;
                          {expandedService === service.id && (;&& (; (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }};
                              animate={{ opacity: 1, height: 'auto' }};
                              exit={{ opacity: 0, height: 0 }};
                              transition={{ duration: 0.3 }};
                              className="[^"]*"
                            >;
                              <p className="text-gray-300 text-sm mt-3 mb-3">{service.description}</[^>]*>
                              <div className="space-y-2">;
                                {service.features.map((feature, index) => (;
                                  <div key={index} className="flex items-center text-gray-300 text-sm">;
                                    <[^>]*/>
                                    {feature};
                                  </[^>]*>
                                ))};
                              </[^>]*>
                              <div className="mt-3 pt-3 border-t border-slate-600/50">;
                                <div className="flex items-center justify-between text-sm">;
                                  <span className="text-gray-400">Starting from:</[^>]*>
                                  <span className="text-green-400 font-medium">{service.pricing}</[^>]*>
                                </[^>]*>
                                <div className="flex items-center justify-between text-sm mt-1">;
                                  <span className="text-gray-400">Timeline:</[^>]*>
                                  <span className="text-blue-400 font-medium">{service.timeline}</[^>]*>
                                </[^>]*>
                              </[^>]*>
                            </[^>]*>
                          )};
                        </[^>]*>
                      ))};
                    </[^>]*>
                  </[^>]*>

                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl border border-slate-600/50 p-6">;
                    <h3 className="text-xl font-bold text-white mb-4">Why Choose Us?</[^>]*>
                    <div className="space-y-3">;
                      <div className="flex items-start">;
                        <[^>]*/>
                        <div>;
                          <div className="text-white font-medium text-sm">Expert Team</[^>]*>
                          <div className="text-gray-300 text-xs">Certified professionals with years of experience</[^>]*>
                        </[^>]*>
                      </[^>]*>
                      <div className="flex items-start">;
                        <[^>]*/>
                        <div>;
                          <div className="text-white font-medium text-sm">Quality Guarantee</[^>]*>
                          <div className="text-gray-300 text-xs">We stand behind our work 100%</[^>]*>
                        </[^>]*>
                      </[^>]*>
                      <div className="flex items-start">;
                        <[^>]*/>
                        <div>;
                          <div className="text-white font-medium text-sm">Proven Results</[^>]*>
                          <div className="text-gray-300 text-xs">Track record of successful projects</[^>]*>
                        </[^>]*>
                      </[^>]*>
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Contact Information */};
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">;
        <div className="container mx-auto px-6 text-center">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Need Immediate Assistance?;
            </[^>]*>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">;
              Our team is here to help. Contact us directly for urgent inquiries ;
              or to discuss your project in detail.;
            </[^>]*>
            ;
            <div className="grid grid-cols-1 md: grid-cols-3 gap-8 max-w-4xl mx-auto">;
              <div className="text-center">;
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl mb-4">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-lg font-bold text-white mb-2">Email Us</[^>]*>
                <p className="text-gray-300 text-sm mb-3">Get a quick response</[^>]*>
                <a;
                  href="mailto:info@ziontechgroup.com"
                  className="[^"]*"
                >;
                  info@ziontechgroup.com
                </[^>]*>
              </[^>]*>
              ;
              <div className="text-center">;
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl mb-4">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-lg font-bold text-white mb-2">Call Us</[^>]*>
                <p className="text-gray-300 text-sm mb-3">Speak with an expert</[^>]*>
                <a;
                  href="tel:+13024640950"
                  className="[^"]*"
                >;
                  +1 (302) 464-0950;
                </[^>]*>
              </[^>]*>
              ;
              <div className="text-center">;
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl mb-4">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-lg font-bold text-white mb-2">Live Chat</[^>]*>
                <p className="text-gray-300 text-sm mb-3">Instant support</[^>]*>
                <button className="text-green-400 hover:text-green-300 transition-colors duration-200">;
                  Start Chat;
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};
