import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Users, 
  Globe, 
  Phone, 
  Mail, 
  MessageSquare, 
  Calendar,
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
} from 'lucide-react';

export default function RequestQuote() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    companySize: '',
    industry: '',
    services: [],
    budget: '',
    timeline: '',
    description: '',
    preferredContact: 'email'
  });

  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const serviceCategories = [
    {
      title: "AI & Automation Services",
      icon: Brain,
      services: [
        { id: "ai-enterprise-automation", name: "AI Enterprise Automation", description: "Intelligent automation for business processes" },
        { id: "ai-enterprise-intelligence", name: "AI Enterprise Intelligence", description: "Advanced AI-powered business insights" },
        { id: "ai-data-analytics", name: "AI Data Analytics", description: "Comprehensive data analysis and visualization" },
        { id: "ai-cybersecurity", name: "AI Cybersecurity", description: "AI-powered threat detection and response" },
        { id: "ai-healthcare", name: "AI Healthcare Platform", description: "Healthcare-specific AI solutions" },
        { id: "ai-quantum", name: "AI Quantum Computing", description: "Quantum AI hybrid solutions" },
        { id: "ai-supply-chain", name: "AI Supply Chain Optimization", description: "Intelligent supply chain management" }
      ]
    },
    {
      title: "IT & Infrastructure",
      icon: Server,
      services: [
        { id: "it-infrastructure", name: "IT Infrastructure Management", description: "Comprehensive infrastructure solutions" },
        { id: "cloud-devops", name: "Cloud & DevOps", description: "Cloud migration and DevOps automation" },
        { id: "cybersecurity", name: "Cybersecurity", description: "Advanced security solutions" },
        { id: "digital-transformation", name: "Digital Transformation", description: "End-to-end digital transformation" },
        { id: "edge-computing", name: "Edge Computing", description: "Edge computing and IoT solutions" },
        { id: "blockchain", name: "Blockchain Solutions", description: "Enterprise blockchain implementation" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      services: [
        { id: "cloud-migration", name: "Cloud Migration", description: "Seamless cloud migration services" },
        { id: "devops-automation", name: "DevOps Automation", description: "CI/CD pipeline automation" },
        { id: "container-orchestration", name: "Container Orchestration", description: "Kubernetes and Docker management" },
        { id: "serverless-architecture", name: "Serverless Architecture", description: "Serverless application development" },
        { id: "cloud-security", name: "Cloud Security", description: "Cloud-native security solutions" },
        { id: "cost-optimization", name: "Cost Optimization", description: "Cloud cost management and optimization" }
      ]
    },
    {
      title: "Cybersecurity & Compliance",
      icon: Shield,
      services: [
        { id: "security-audit", name: "Security Audit", description: "Comprehensive security assessments" },
        { id: "penetration-testing", name: "Penetration Testing", description: "Advanced penetration testing services" },
        { id: "compliance-management", name: "Compliance Management", description: "SOC2, ISO, GDPR compliance" },
        { id: "incident-response", name: "Incident Response", description: "24/7 security incident response" },
        { id: "security-training", name: "Security Training", description: "Employee security awareness training" },
        { id: "threat-intelligence", name: "Threat Intelligence", description: "Real-time threat monitoring" }
      ]
    },
    {
      title: "Data & Analytics",
      icon: Database,
      services: [
        { id: "data-warehousing", name: "Data Warehousing", description: "Enterprise data warehouse solutions" },
        { id: "business-intelligence", name: "Business Intelligence", description: "BI dashboard and reporting" },
        { id: "machine-learning", name: "Machine Learning", description: "Custom ML model development" },
        { id: "data-governance", name: "Data Governance", description: "Data quality and compliance" },
        { id: "real-time-analytics", name: "Real-time Analytics", description: "Streaming data analytics" },
        { id: "predictive-analytics", name: "Predictive Analytics", description: "Future trend forecasting" }
      ]
    },
    {
      title: "Digital Transformation",
      icon: Rocket,
      services: [
        { id: "process-automation", name: "Process Automation", description: "RPA and workflow automation" },
        { id: "customer-experience", name: "Customer Experience", description: "CX optimization and design" },
        { id: "mobile-apps", name: "Mobile Applications", description: "Native and cross-platform apps" },
        { id: "web-development", name: "Web Development", description: "Modern web applications" },
        { id: "ecommerce-solutions", name: "E-commerce Solutions", description: "Online store development" },
        { id: "legacy-modernization", name: "Legacy Modernization", description: "System modernization and migration" }
      ]
    }
  ];

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', { ...formData, services: selectedServices });
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
              Request a Custom Quote
            </h1>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto mb-8">
              Get a personalized quote for your technology needs. Our experts will analyze your requirements 
              and provide a comprehensive solution tailored to your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-zinc-300">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-zion-cyan" />
                <span>Custom Solutions</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-zion-cyan" />
                <span>Expert Consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-zion-cyan" />
                <span>24/7 Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Quote Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-8"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Project Details</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Company Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                      placeholder="Enter company name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                      placeholder="Enter contact name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                      placeholder="Enter email address"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                      Company Size
                    </label>
                    <select
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    >
                      <option value="">Select company size</option>
                      {companySizes.map(size => (
                        <option key={size.value} value={size.value}>
                          {size.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                      Industry
                    </label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    >
                      <option value="">Select industry</option>
                      {industries.map(industry => (
                        <option key={industry.value} value={industry.value}>
                          {industry.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map(budget => (
                        <option key={budget.value} value={budget.value}>
                          {budget.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                      Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map(timeline => (
                        <option key={timeline.value} value={timeline.value}>
                          {timeline.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">
                    Project Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    placeholder="Describe your project requirements, goals, and any specific challenges you're facing..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">
                    Preferred Contact Method
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="email"
                        checked={formData.preferredContact === 'email'}
                        onChange={handleInputChange}
                        className="mr-2 text-zion-cyan focus:ring-zion-cyan"
                      />
                      <span className="text-zinc-300">Email</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="phone"
                        checked={formData.preferredContact === 'phone'}
                        onChange={handleInputChange}
                        className="mr-2 text-zion-cyan focus:ring-zion-cyan"
                      />
                      <span className="text-zinc-300">Phone</span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Submit Quote Request
                </button>
              </form>
            </motion.div>
          </div>

          {/* Services Selection */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold text-white mb-6">Select Services</h3>
              
              <div className="space-y-4">
                {serviceCategories.map((category) => (
                  <div key={category.title} className="border border-zinc-600 rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <category.icon className="w-5 h-5 text-zion-cyan" />
                      <h4 className="font-semibold text-white">{category.title}</h4>
                    </div>
                    
                    <div className="space-y-2">
                      {category.services.map((service) => (
                        <label key={service.id} className="flex items-start space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedServices.includes(service.id)}
                            onChange={() => handleServiceToggle(service.id)}
                            className="mt-1 text-zion-cyan focus:ring-zion-cyan rounded"
                          />
                          <div>
                            <div className="text-sm font-medium text-zinc-300">
                              {service.name}
                            </div>
                            <div className="text-xs text-zinc-400">
                              {service.description}
                            </div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-zinc-800/30 border-t border-zinc-700/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
              We deliver cutting-edge technology solutions with unmatched expertise and dedication to your success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Star,
                title: "Expert Team",
                description: "Certified professionals with years of industry experience"
              },
              {
                icon: Zap,
                title: "Fast Delivery",
                description: "Agile development with rapid deployment capabilities"
              },
              {
                icon: Shield,
                title: "Quality Assurance",
                description: "Rigorous testing and quality control processes"
              },
              {
                icon: Users,
                title: "24/7 Support",
                description: "Round-the-clock technical support and maintenance"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-zinc-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-zinc-800/30 border-t border-zinc-700/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
