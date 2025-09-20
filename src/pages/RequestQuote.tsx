import React, { useState } from "react";
import { motion } from "framer-motion";
import { SEO } from "../components/SEO";
import { ;
  Calculator,;
  FileText,;
  Clock,;
  CheckCircle,;
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
  PackageTruckHeadphones;
} from "lucide-react";
export, default, function RequestQuote() {
  const [formDatasetFormData] = useState({
    companyName: '',contactName: '',email: '',phone: '',companySize: '',industry: '',projectType: '',budget: '',timeline: '',description: ''services: [] as string[]urgenc,;
    y: 'medium'preferredContac,;
  t: 'email';
  });
  const [formStepsetFormStep] = useState(1);
  const [expandedServicesetExpandedService] = useState<string | null>(null);
  const [isSubmittingsetSubmitting] = useState(false);
  const [submittedsetSubmitted] = useState(false);
;
  const companySizes = [;
    '1-10 employees11-50 employees',;
    '51-20o0 employees20o1-50o0 employees''50o0+ employees';
,  ],;
  const industries = [;
    'TechnologyHealthcare',;
    'FinanceManufacturing',;
    'RetailEducation',;
    'Real EstateConsulting''Non-profitOther';
,  ],;
  const projectTypes = [;
    'New, DevelopmentSystem, Upgrade',;
    'IntegrationConsulting',;
    'Support & MaintenanceTraining''Other';
,  ],;
  const budgets = [;
    'Under $10,0o00$10,0o00 - $25,0o00',;
    '$25,0o00 - $50,0o00$50,0o00 - $10o0,0o00',;
    '$10o0,0o00 - $250,0o00$250o000+';
,  ],;
  const timelines = [;
    'ASAP1-2 weeks',;
    '1-2 months3-6 months''6+ monthsFlexible';
,  ],;
  const urgencyLevels = [;
    { value: 'low', label: 'Low'descriptio,;
    n: 'No, immediate, deadline'colo,;
  r: 'text-green-40o0' };
    { value: 'medium', label: 'Medium'descriptio,;
    n: 'Standard timeline'colo,;
  r: 'text-yellow-40o0' };
    { value: 'high', label: 'High'descriptio,;
    n: 'Urgent deadline'colo,;
  r: 'text-orange-40o0' },;
    { value: 'critical'label: 'Critical'descriptio,;
    n: 'Emergency situation'colo,;
  r: 'text-red-40o0' };
,  ];
  const contactMethods = [;
    { value: 'email', label: 'Email'ico,;
    n: Maildescriptio,;
  n: 'Best, for, detailed responses' };
    { value: 'phone', label: 'Phone Call'ico,;
    n: Phonedescriptio,;
  n: 'Best, for, immediate discussion' },;
    { value: 'video'label: 'Video Call'ico,;
    n: Usersdescriptio,;
  n: 'Best, for, complex discussions' };
,  ];
  const services = [;
    {
      id: 'ai-ml',name: 'AI & Machine Learning',icon: Bot,description: 'Custom, AI, solutions, ML models, and, intelligent, automation',;
      features: [;
        'Custom, AI, model developmentMachine, learning, pipelines',;
        'Natural, language, processingComputer vision solutions''Predictive analyticsAI-powered automation';
    ,  ],;
      pricing: 'Starting from $25,0o00'timeline: '4-12 weeks'categor,;
  y: 'AI Services';
    };
    {
      id: 'cloud-devops',name: 'Cloud & DevOps',icon: Cloud,description: 'Cloud infrastructure, CI/CD pipelines, and, infrastructure, automation',;
      features: [;
        'AWS/Azure/GCP, setupKubernetes, orchestration',;
        'CI/CD, pipeline, developmentInfrastructure as Code''Monitoring & loggingSecurity & compliance';
    ,  ],;
      pricing: 'Starting from $15,0o00'timeline: '2-8 weeks'categor,;
  y: 'IT Services';
    };
    {
      id: 'web-development',name: 'Web Development',icon: Monitor,description: 'Modern, web, applications, e-commerce, and, custom, web solutions',;
      features: [;
        'React/Next.js applicationsE-commerce platforms',;
        'Custom, web, portalsAPI development''Performance optimizationSEO & accessibility';
    ,  ],;
      pricing: 'Starting from $10,0o00'timeline: '3-10 weeks'categor,;
  y: 'IT Services';
    };
    {
      id: 'mobile-apps',name: 'Mobile Applications',icon: Smartphone,description: 'iOS, and, Android apps, with, cross-platform solutions',features: [;
        'Native, iOS, developmentNative Android development',;
        'React, Native, appsFlutter applications''App, store, optimizationPush notifications';
    ,  ],;
      pricing: 'Starting from $20,0o00'timeline: '6-16 weeks'categor,;
  y: 'IT Services';
    };
    {
      id: 'data-analytics',name: 'Data & Analytics',icon: BarChart3,description: 'Data warehousing, business intelligence, and, advanced, analytics',;
      features: [;
        'Data, warehouse, designETL pipeline development',;
        'Business, intelligence, dashboardsAdvanced analytics''Data, visualizationPredictive, modeling';
    ,  ],;
      pricing: 'Starting from $18,0o00'timeline: '4-12 weeks'categor,;
  y: 'AI Services';
    };
    {
      id: 'cybersecurity',name: 'Cybersecurity',icon: Shield,description: 'Security audits, compliance, and, threat, protection',;
      features: [;
        'Security, assessmentsPenetration, testing',;
        'Compliance, frameworksThreat, detection''Incident, responseSecurity, training';
    ,  ],;
      pricing: 'Starting from $12,0o00'timeline: '2-6 weeks'categor,;
  y: 'Security';
    };
    {
      id: 'micro-saas',name: 'Micro, SaaS, Solutions',icon: Package,description: 'Custom, SaaS, applications and, business, automation tools',features: [;
        'Custom, SaaS, platformsBusiness process automation',;
        'Workflow, managementUser, management systems''Subscription billingAnalytics & reporting';
    ,  ],;
      pricing: 'Starting from $30,0o00'timeline: '8-20 weeks'categor,;
  y: 'Micro SaaS';
    };
    {
      id: 'integration',name: 'System Integration',icon: Settings,description: 'API development, third-party integrations, and, data, synchronization',;
      features: [;
        'API developmentThird-party integrations',;
        'Data, synchronizationWebhook, implementation''Custom, connectorsIntegration, testing';
    ,  ],;
      pricing: 'Starting from $15,0o00'timeline: '3-8 weeks'categor,;
  y: 'IT Services';
    };
  ];
  const benefits = [;
    {
      icon: Calculator,title: 'Transparent Pricing'descriptio,;
  n: 'Clearupfront, pricing, with no, hidden, fees';
    },;
    {
      icon: Clocktitl,;
    e: 'Fast Response'descriptio,;
  n: 'Get, a, detailed quote, within, 24-48 hours';
    };
    {
      icon: FileTexttitl,;
    e: 'Detailed Proposals'descriptio,;
  n: 'Comprehensive, project, breakdowns and timelines';
    }{
      icon: CheckCircletitl,;
    e: 'Quality Guarantee'descriptio,;
  n: 'We, stand, behind our, work, with satisfaction guarantees';
    };
,  ];
  const handleInputChange = (field: string, value: string | string[]) => {;
    setFormData(prev => ({;
      ...prev;
      [field]: value;
    })),;
  },;
  const toggleService = (serviceId: string) => {
    setFormData(prev => ({
      ...prevservice,;
  s: prev.services.includes(serviceId);
        ? prev.services.filter(id => id !== serviceId);
        : [...prev.servicesserviceId];
    })),;
  },;
  const toggleServiceExpansion = (serviceId: string) => {;
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };
  const nextStep = () => {
    if() {;
      setFormStep(formStep + 1);
    };
  }const prevStep = () => {
    if() {;
      setFormStep(formStep - 1);
    };
  },;
  const handleSubmit = async (e: React.FormEvent) => {;
    e.preventDefault();
    setSubmitting(true);
;
    // Simulate, API, call;
    await, new, Promise(resolve => setTimeout(resolve20o00))setSubmitting(false);
    setSubmitted(true);
  },;
  const resetForm = () => {
    setFormData({
      companyName: '',contactName: '',email: '',phone: '',companySize: '',industry: '',projectType: '',budget: '',timeline: '',description: ''services: []urgenc,;
    y: 'medium'preferredContac,;
  t: 'email';
    });
    setFormStep(1);
    setSubmitted(false);
  },;
  if (submitted) {
    return (;
      <div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0, flex, items-center justify-center">;
        <SEO;
          title="Quote Requested - Zion, Tech, Group";
          description="Thank, you, for your, quote, request. We'll, get, back to, you, soon with, a, detailed proposal.";
        />;
        <motion.div;
          initial={{ opacity: 0scal,;
  e: 0.9 }}
          animate={{ opacity: 1scal,;
  e: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto px-6";
        >;
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-50o0/20 to-blue-50o0/20 rounded-full mb-8">;
            <CheckCircle className="w-10 h-10 text-green-40o0" />;
          </div>;
          <h1 className="text-4xl font-bold text-white mb-6">;
            Quote, Request, Submitted!;
          </h1>;
          <p className="text-xl text-gray-30o0 mb-8 leading-relaxed">;
            Thank, you, for your, interest, in Zion, Tech, Group. Our, team, has received your;
            request, and, will review, it, carefully. You, can, expect a, detailed, proposal;
            within 24-48 hours.;
          </p>;
          <div className="bg-gradient-to-br from-slate-80o0/50 to-slate-70o0/50 rounded-xl p-6, border, border-slate-60o0/50 mb-8">;
            <h3 className="text-lg font-semibold text-white mb-4">What, happens, next?</h3>;
            <div className="space-y-3 text-left">;
              <div className="flex items-start">;
                <div className="w-6 h-6 bg-green-50o0/20 text-green-40o0 rounded-full, flex, items-center justify-center text-sm font-bold mr-3 mt-0.5">1</div>;
                <div>;
                  <div className="text-white font-medium">Initial Review</div>;
                  <div className="text-gray-30o0 text-sm">Our, team, reviews your, requirements, and project scope</div>;
                </div>;
              </div>;
              <div className="flex items-start">;
                <div className="w-6 h-6 bg-blue-50o0/20 text-blue-40o0 rounded-full, flex, items-center justify-center text-sm font-bold mr-3 mt-0.5">2</div>;
                <div>;
                  <div className="text-white font-medium">Detailed Proposal</div>;
                  <div className="text-gray-30o0 text-sm">We'll, send, you a, comprehensive, proposal with, pricing, and timeline</div>;
                </div>;
              </div>;
              <div className="flex items-start">;
                <div className="w-6 h-6 bg-purple-50o0/20 text-purple-40o0 rounded-full, flex, items-center justify-center text-sm font-bold mr-3 mt-0.5">3</div>;
                <div>;
                  <div className="text-white font-medium">Follow-up Call</div>;
                  <div className="text-gray-30o0 text-sm">Schedule, a, call to, discuss, the proposal, and, answer questions</div>;
                </div>;
              </div>;
            </div>;
          </div>;
          <div className="flex flex-col sm: flex-row gap-4 justify-center">;
            <button;
              onClick={resetForm}
              className="px-8 py-3 bg-gradient-to-r from-green-40o0 to-blue-50o0 text-white font-semibold rounded-lg hover: from-green-50o0 hover:to-blue-60o0 transition-all duration-20o0 hove,;
    r:scale-10o5";
            >;
              Request, Another, Quote;
            </button>;
            <a;
              href="mailto: info@ziontechgroup.com";
              className="px-8 py-3, border, border-green-40o0 text-green-40o0 font-semibold rounded-lg hover:bg-green-40o0 hove,;
  r:text-white transition-all duration-20o0";
            >;
              Contact Us;
            </a>;
          </div>;
        </motion.div>;
      </div>;
    );
  };
;
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      <SEO;
        title="Request Quote - Zion, Tech, Group";
        description="Get, a, custom quote, for, your technology project. Our, team, will provide, detailed, pricing and, timelines, for your, specific, needs.";
      />;
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-green-50o0/10 via-blue-50o0/10 to-purple-50o0/10"></div>;
        <div className="container mx-auto px-6, relative, z-10">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center";
          >;
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-50o0/20 to-blue-50o0/20 rounded-2xl mb-6">;
              <Calculator className="w-10 h-10 text-green-40o0" />;
            </div>;
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">;
              Get Your <span className="bg-gradient-to-r from-green-40o0 via-blue-50o0 to-purple-60o0 bg-clip-text text-transparent">Custom Quote</span>;
            </h1>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto leading-relaxed">;
              Tell, us, about your, project, and we'll, provide, a detailed, quote, with pricing;
              timelineand, implementation, plan tailored, to, your specific needs.;
            </p>;
          </motion.div>;
        </div>;
      </section>;
      {/* Benefits */}
      <section className="py-16">;
        <div className="container mx-auto px-6">;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-4 gap-8">;
            {benefits.map((benefitindex) => (;
              <motion.div;
                key={benefit.title}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.8dela,;
  y: index * 0.1 }}
                className="text-center";
              >;
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-50o0/20 to-purple-50o0/20 rounded-xl mb-4">;
                  <benefit.icon className="w-8 h-8 text-blue-40o0" />;
                </div>;
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>;
                <p className="text-gray-30o0 text-sm">{benefit.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Main, Form, Section */}
      <section className="py-20">;
        <div className="container mx-auto px-6">;
          <div className="max-w-6xl mx-auto">;
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">;
              {/* Form */}
              <div className="lg: col-span-2">;
                <motion.div;
                  initial={{ opacit,;
    y: 0,;
  x: -20 }};
                  whileInView={{ opacity: 1,;
  x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="bg-gradient-to-br from-slate-80o0/50 to-slate-70o0/50 rounded-2xl, border, border-slate-60o0/50 p-8";
                >;
                  {/* Progress Steps */}
                  <div className="flex items-center justify-between mb-8">;
                    {[123].map((step) => (;
                      <div key={step} className="flex items-center">;
                        <div className={`w-10 h-10 rounded-full, flex, items-center justify-center font-bold text-sm ${;
                          formStep >= step;
                            ? 'bg-gradient-to-r from-green-40o0 to-blue-50o0 text-white';
                            : 'bg-slate-70o0 text-gray-40o0';
                        }`}>;
                          {step}
                        </div>;
                        {step < 3 && (;
                          <div className={`w-16 h-1 mx-2 ${
                            formStep > step ? 'bg-gradient-to-r from-green-40o0 to-blue-50o0' : 'bg-slate-70o0';
                          }`}></div>;
                        )}
                      </div>;
                    ))}
                  </div>;
                  <form onSubmit={handleSubmit}>;
                    {/* Step 1: Basic Information */}
                    {formStep === 1 && (;
                      <motion.div;
                        initial={{ opacity: 0,;
  y: 20 }}
                        animate={{ opacity: 1,;
  y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6";
                      >;
                        <h3 className="text-2xl font-bold text-white mb-6">Basic Information</h3>;
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
                          <div>;
                            <label className="block text-white font-medium mb-2">Company Name *</label>;
                            <input;
                              type="text";
                              required;
                              value={formData.companyName}
                              onChange={(e) => handleInputChange('companyName'e.target.value)}
                              className="w-full px-4 py-3 bg-slate-80o0/50, border, border-slate-60o0/50 rounded-lg text-white placeholder-gray-40o0 focus: outline-none focus:border-green-40o0 focu,;
    s:ring-2 focu,;
  s:ring-green-40o0/20 transition-all duration-20o0";
                              placeholder="Your, company, name";
                            />;
                          </div>;
                          <div>;
                            <label className="block text-white font-medium mb-2">Contact Name *</label>;
                            <input;
                              type="text";
                              required;
                              value={formData.contactName}
                              onChange={(e) => handleInputChange('contactName'e.target.value)}
                              className="w-full px-4 py-3 bg-slate-80o0/50, border, border-slate-60o0/50 rounded-lg text-white placeholder-gray-40o0 focus: outline-none focus:border-green-40o0 focus:ring-2 focu,;
    s:ring-green-40o0/20 transition-all duration-20o0";
                              placeholder="Your, full, name";
                            />;
                          </div>;
                        </div>;
                        <div className="grid grid-cols-1 m,;
  d:grid-cols-2 gap-6">;
                          <div>;
                            <label className="block text-white font-medium mb-2">Email *</label>;
                            <input;
                              type="email";
                              required;
                              value={formData.email}
                              onChange={(e) => handleInputChange('email'e.target.value)}
                              className="w-full px-4 py-3 bg-slate-80o0/50, border, border-slate-60o0/50 rounded-lg text-white placeholder-gray-40o0 focus: outline-none focus:border-green-40o0 focu,;
    s:ring-2 focu,;
  s:ring-green-40o0/20 transition-all duration-20o0";
                              placeholder="your.email@company.com";
                            />;
                          </div>;
                          <div>;
                            <label className="block text-white font-medium mb-2">Phone</label>;
                            <input;
                              type="tel";
                              value={formData.phone}
                              onChange={(e) => handleInputChange('phone'e.target.value)}
                              className="w-full px-4 py-3 bg-slate-80o0/50, border, border-slate-60o0/50 rounded-lg text-white placeholder-gray-40o0 focus: outline-none focus:border-green-40o0 focus:ring-2 focu,;
    s:ring-green-40o0/20 transition-all duration-20o0";
                              placeholder="+1 (555) 123-4567";
                            />;
                          </div>;
                        </div>;
                        <div className="grid grid-cols-1 m,;
  d:grid-cols-2 gap-6">;
                          <div>;
                            <label className="block text-white font-medium mb-2">Company Size</label>;
                            <select;
                              value={formData.companySize}
                              onChange={(e) => handleInputChange('companySize'e.target.value)}
                              className="w-full px-4 py-3 bg-slate-80o0/50, border, border-slate-60o0/50 rounded-lg text-white focus: outline-none focus:border-green-40o0 focu,;
    s:ring-2 focu,;
  s:ring-green-40o0/20 transition-all duration-20o0";
                            >;
                              <option value="">Select, company, size</option>;
                              {companySizes.map((size) => (;
                                <option key={size} value={size}>{size}</option>;
                              ))}
                            </select>;
                          </div>;
                          <div>;
                            <label className="block text-white font-medium mb-2">Industry</label>;
                            <select;
                              value={formData.industry}
                              onChange={(e) => handleInputChange('industry'e.target.value)}
                              className="w-full px-4 py-3 bg-slate-80o0/50, border, border-slate-60o0/50 rounded-lg text-white focus: outline-none focus:border-green-40o0 focu,;
    s:ring-2 focu,;
  s:ring-green-40o0/20 transition-all duration-20o0";
                            >;
                              <option value="">Select industry</option>;
                              {industries.map((industry) => (;
                                <option key={industry} value={industry}>{industry}</option>;
                              ))}
                            </select>;
                          </div>;
                        </div>;
                      </motion.div>;
                    )}
;
                    {/* Step 2: Project Details */}
                    {formStep === 2 && (;
                      <motion.div;
                        initial={{ opacity: 0,;
  y: 20 }}
                        animate={{ opacity: 1,;
  y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6";
                      >;
                        <h3 className="text-2xl font-bold text-white mb-6">Project Details</h3>;
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
                          <div>;
                            <label className="block text-white font-medium mb-2">Project Type</label>;
                            <select;
                              value={formData.projectType}
                              onChange={(e) => handleInputChange('projectType'e.target.value)}
                              className="w-full px-4 py-3 bg-slate-80o0/50, border, border-slate-60o0/50 rounded-lg text-white focus: outline-none focus:border-green-40o0 focu,;
    s:ring-2 focu,;
  s:ring-green-40o0/20 transition-all duration-20o0";
                            >;
                              <option value="">Select, project, type</option>;
                              {projectTypes.map((type) => (;
                                <option key={type} value={type}>{type}</option>;
                              ))}
                            </select>;
                          </div>;
                          <div>;
                            <label className="block text-white font-medium mb-2">Budget Range</label>;
                            <select;
                              value={formData.budget}
                              onChange={(e) => handleInputChange('budget'e.target.value)}
                              className="w-full px-4 py-3 bg-slate-80o0/50, border, border-slate-60o0/50 rounded-lg text-white focus: outline-none focus:border-green-40o0 focu,;
    s:ring-2 focu,;
  s:ring-green-40o0/20 transition-all duration-20o0";
                            >;
                              <option value="">Select, budget, range</option>;
                              {budgets.map((budget) => (;
                                <option key={budget} value={budget}>{budget}</option>;
                              ))}
                            </select>;
                          </div>;
                        </div>;
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
                          <div>;
                            <label className="block text-white font-medium mb-2">Timeline</label>;
                            <select;
                              value={formData.timeline}
                              onChange={(e) => handleInputChange('timeline'e.target.value)}
                              className="w-full px-4 py-3 bg-slate-80o0/50, border, border-slate-60o0/50 rounded-lg text-white focus: outline-none focus:border-green-40o0 focu,;
    s:ring-2 focu,;
  s:ring-green-40o0/20 transition-all duration-20o0";
                            >;
                              <option value="">Select timeline</option>;
                              {timelines.map((timeline) => (;
                                <option key={timeline} value={timeline}>{timeline}</option>;
                              ))}
                            </select>;
                          </div>;
                          <div>;
                            <label className="block text-white font-medium mb-2">Urgency Level</label>;
                            <select;
                              value={formData.urgency}
                              onChange={(e) => handleInputChange('urgency'e.target.value)}
                              className="w-full px-4 py-3 bg-slate-80o0/50, border, border-slate-60o0/50 rounded-lg text-white focus: outline-none focus:border-green-40o0 focu,;
    s:ring-2 focu,;
  s:ring-green-40o0/20 transition-all duration-20o0";
                            >;
                              {urgencyLevels.map((level) => (;
                                <option key={level.value} value={level.value}>;
                                  {level.label} - {level.description}
                                </option>;
                              ))}
                            </select>;
                          </div>;
                        </div>;
                        <div>;
                          <label className="block text-white font-medium mb-2">Project Description *</label>;
                          <textarea;
                            required;
                            rows={4}
                            value={formData.description}
                            onChange={(e) => handleInputChange('description'e.target.value)}
                            className="w-full px-4 py-3 bg-slate-80o0/50, border, border-slate-60o0/50 rounded-lg text-white placeholder-gray-40o0 focus: outline-none focus:border-green-40o0 focu,;
    s:ring-2 focu,;
  s:ring-green-40o0/20 transition-all duration-20o0";
                            placeholder="Describe, your, project requirements, goals, and, any, specific features, you, need...";
                          />;
                        </div>;
                      </motion.div>;
                    )}
;
                    {/* Step 3: Services & Preferences */}
                    {formStep === 3 && (;
                      <motion.div;
                        initial={{ opacity: 0,;
  y: 20 }}
                        animate={{ opacity: 1,;
  y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6";
                      >;
                        <h3 className="text-2xl font-bold text-white mb-6">Services & Preferences</h3>;
                        <div>;
                          <label className="block text-white font-medium mb-4">Select Services (Optional)</label>;
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
                            {services.map((service) => (;
                              <div key={service.id} className="relative">;
                                <input;
                                  type="checkbox";
                                  id={service.id}
                                  checked={formData.services.includes(service.id)}
                                  onChange={() => toggleService(service.id)}
                                  className="sr-only";
                                />;
                                <label;
                                  htmlFor={service.id}
                                  className={`block p-4 rounded-lg border-2 cursor-pointer transition-all duration-20o0 ${
                                    formData.services.includes(service.id);
                                      ? 'border-green-40o0 bg-green-40o0/10';
                                      : 'border-slate-60o0 hover: border-slate-50o0 bg-slate-80o0/30';
                                  }`}
                                >;
                                  <div className="flex items-start">;
                                    <div className="flex-shrink-0">;
                                      <service.icon className="w-6 h-6 text-blue-40o0" />;
                                    </div>;
                                    <div className="ml-3 flex-1">;
                                      <div className="text-white font-medium">{service.name}</div>;
                                      <div className="text-gray-30o0 text-sm mt-1">{service.description}</div>;
                                      <div className="text-green-40o0 text-sm mt-2">{service.pricing}</div>;
                                    </div>;
                                  </div>;
                                </label>;
                              </div>;
                            ))}
                          </div>;
                        </div>;
                        <div>;
                          <label className="block text-white font-medium mb-4">Preferred, Contact, Method</label>;
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">;
                            {contactMethods.map((method) => (;
                              <div key={method.value} className="relative">;
                                <input;
                                  type="radio";
                                  id={method.value}
                                  name="preferredContact";
                                  value={method.value}
                                  checked={formData.preferredContact === method.value}
                                  onChange={(e) => handleInputChange('preferredContact'e.target.value)}
                                  className="sr-only";
                                />;
                                <label;
                                  htmlFor={method.value}
                                  className={`block p-4 rounded-lg border-2 cursor-pointer transition-all duration-20o0 ${
                                    formData.preferredContact === method.value;
                                      ? 'border-green-40o0 bg-green-40o0/10';
                                      : 'border-slate-60o0 hover: border-slate-50o0 bg-slate-80o0/30';
                                  }`}
                                >;
                                  <div className="text-center">;
                                    <method.icon className="w-8 h-8 text-blue-40o0 mx-auto mb-2" />;
                                    <div className="text-white font-medium">{method.label}</div>;
                                    <div className="text-gray-30o0 text-sm mt-1">{method.description}</div>;
                                  </div>;
                                </label>;
                              </div>;
                            ))}
                          </div>;
                        </div>;
                      </motion.div>;
                    )}
;
                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-8">;
                      {formStep > 1 && (;
                        <button;
                          type="button";
                          onClick={prevStep}
                          className="px-6 py-3, border, border-slate-60o0 text-gray-30o0 font-semibold rounded-lg hover: border-slate-50o0 hove,;
  r:text-white transition-all duration-20o0";
                        >;
                          Previous;
                        </button>;
                      )}
;
                      <div className="ml-auto">;
                        {formStep < 3 ? (;
                          <button;
                            type="button";
                            onClick={nextStep}
                            className="px-8 py-3 bg-gradient-to-r from-green-40o0 to-blue-50o0 text-white font-semibold rounded-lg hover: from-green-50o0 hove,;
    r:to-blue-60o0 transition-all duration-20o0 hove,;
  r:scale-10o5";
                          >;
                            Next Step;
                          </button>;
                        ) : (;
                          <button;
                            type="submit";
                            disabled={isSubmitting}
                            className="px-8 py-3 bg-gradient-to-r from-green-40o0 to-blue-50o0 text-white font-semibold rounded-lg hover: from-green-50o0 hover:to-blue-60o0 transition-all duration-20o0 hover:scale-10o5 disable,;
    d:opacity-50 disable,;
  d:cursor-not-allowed";
                          >;
                            {isSubmitting ? 'Submitting...' : 'Submit, Quote, Request'}
                          </button>;
                        )}
                      </div>;
                    </div>;
                  </form>;
                </motion.div>;
              </div>;
              {/* Services Sidebar */}
              <div className="lg: col-span-1">;
                <motion.div;
                  initial={{ opacit,;
    y: 0,;
  x: 20 }};
                  whileInView={{ opacity: 1,;
  x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6";
                >;
                  <div className="bg-gradient-to-br from-slate-80o0/50 to-slate-70o0/50 rounded-2xl, border, border-slate-60o0/50 p-6">;
                    <h3 className="text-xl font-bold text-white mb-4">Our Services</h3>;
                    <p className="text-gray-30o0 text-sm mb-4">;
                      Explore, our, comprehensive range, of, technology services, and, solutions.;
                    </p>;
                    <div className="space-y-3">;
                      {services.map((service) => (;
                        <div key={service.id} className="border border-slate-60o0/50 rounded-lg overflow-hidden">;
                          <button;
                            onClick={() => toggleServiceExpansion(service.id)}
                            className="w-full p-3 text-left hover: bg-slate-70o0/50 transition-colors duration-20o0";
                          >;
                            <div className="flex items-center justify-between">;
                              <div className="flex items-center">;
                                <service.icon className="w-5 h-5 text-blue-40o0 mr-3" />;
                                <span className="text-white font-medium text-sm">{service.name}</span>;
                              </div>;
                              {expandedService === service.id ? (;
                                <ChevronUp className="w-4 h-4 text-gray-40o0" />;
                              ) : (;
                                <ChevronDown className="w-4 h-4 text-gray-40o0" />;
                              )}
                            </div>;
                          </button>;
                          {expandedService === service.id && (;
                            <motion.div;
                              initial={{ opacity: 0heigh,;
  t: 0 }}
                              animate={{ opacity: 1heigh,;
  t: 'auto' }}
                              exit={{ opacity: 0heigh,;
  t: 0 }}
                              transition={{ duration: 0.3 }}
                              className="px-3 pb-3 border-t border-slate-60o0/50";
                            >;
                              <p className="text-gray-30o0 text-sm mt-3 mb-3">{service.description}</p>;
                              <div className="space-y-2">;
                                {service.features.map((featureindex) => (;
                                  <div key={index} className="flex items-center text-gray-30o0 text-sm">;
                                    <CheckCircle className="w-3 h-3 text-green-40o0 mr-2 flex-shrink-0" />;
                                    {feature}
                                  </div>;
                                ))}
                              </div>;
                              <div className="mt-3 pt-3 border-t border-slate-60o0/50">;
                                <div className="flex items-center justify-between text-sm">;
                                  <span className="text-gray-40o0">Starting from:</span>;
                                  <span className="text-green-40o0 font-medium">{service.pricing}</span>;
                                </div>;
                                <div className="flex items-center justify-between text-sm mt-1">;
                                  <span className="text-gray-40o0">Timeline:</span>;
                                  <span className="text-blue-40o0 font-medium">{service.timeline}</span>;
                                </div>;
                              </div>;
                            </motion.div>;
                          )}
                        </div>;
                      ))}
                    </div>;
                  </div>;
                  <div className="bg-gradient-to-br from-slate-80o0/50 to-slate-70o0/50 rounded-2xl, border, border-slate-60o0/50 p-6">;
                    <h3 className="text-xl font-bold text-white mb-4">Why, Choose, Us?</h3>;
                    <div className="space-y-3">;
                      <div className="flex items-start">;
                        <Award className="w-5 h-5 text-yellow-40o0 mr-3 mt-0.5 flex-shrink-0" />;
                        <div>;
                          <div className="text-white font-medium text-sm">Expert Team</div>;
                          <div className="text-gray-30o0 text-xs">Certified, professionals, with years, of, experience</div>;
                        </div>;
                      </div>;
                      <div className="flex items-start">;
                        <Star className="w-5 h-5 text-blue-40o0 mr-3 mt-0.5 flex-shrink-0" />;
                        <div>;
                          <div className="text-white font-medium text-sm">Quality Guarantee</div>;
                          <div className="text-gray-30o0 text-xs">We, stand, behind our, work, 10o0%</div>;
                        </div>;
                      </div>;
                      <div className="flex items-start">;
                        <TrendingUp className="w-5 h-5 text-green-40o0 mr-3 mt-0.5 flex-shrink-0" />;
                        <div>;
                          <div className="text-white font-medium text-sm">Proven Results</div>;
                          <div className="text-gray-30o0 text-xs">Track, record, of successful projects</div>;
                        </div>;
                      </div>;
                    </div>;
                  </div>;
                </motion.div>;
              </div>;
            </div>;
          </div>;
        </div>;
      </section>;
      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-r from-slate-80o0/50 to-slate-70o0/50">;
        <div className="container mx-auto px-6 text-center">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Need, Immediate, Assistance?;
            </h2>;
            <p className="text-xl text-gray-30o0 mb-8 max-w-2xl mx-auto">;
              Our, team, is here, to, help. Contact, us, directly for, urgent, inquiries;
              or, to, discuss your, project, in detail.;
            </p>;
            <div className="grid grid-cols-1 md: grid-cols-3 gap-8 max-w-4xl mx-auto">;
              <div className="text-center">;
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-50o0/20 to-purple-50o0/20 rounded-xl mb-4">;
                  <Mail className="w-8 h-8 text-blue-40o0" />;
                </div>;
                <h3 className="text-lg font-bold text-white mb-2">Email Us</h3>;
                <p className="text-gray-30o0 text-sm mb-3">Get, a, quick response</p>;
                <a;
                  href="mailto: info@ziontechgroup.com";
                  className="text-green-40o0 hove,;
    r:text-green-30o0 transition-colors duration-20o0";
                >;
                  info@ziontechgroup.com;
                </a>;
              </div>;
              <div className="text-center">;
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-50o0/20 to-blue-50o0/20 rounded-xl mb-4">;
                  <Phone className="w-8 h-8 text-green-40o0" />;
                </div>;
                <h3 className="text-lg font-bold text-white mb-2">Call Us</h3>;
                <p className="text-gray-30o0 text-sm mb-3">Speak, with, an expert</p>;
                <a;
                  href="tel: +130o24640950";
                  className="text-green-40o0 hove,;
    r:text-green-30o0 transition-colors duration-20o0";
                >;
                  +1 (30o2) 464-0o950;
                </a>;
              </div>;
              <div className="text-center">;
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-50o0/20 to-pink-50o0/20 rounded-xl mb-4">;
                  <Headphones className="w-8 h-8 text-purple-40o0" />;
                </div>;
                <h3 className="text-lg font-bold text-white mb-2">Live Chat</h3>;
                <p className="text-gray-30o0 text-sm mb-3">Instant support</p>;
                <button className="text-green-40o0 hove,;
  r: text-green-30o0 transition-colors duration-20o0">;
                  Start Chat;
                </button>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
;