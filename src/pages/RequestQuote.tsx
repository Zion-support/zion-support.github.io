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
      title: "Industry Solutions",
      icon: Target,
      services: [
        { id: "healthcare", name: "Healthcare Solutions", description: "Healthcare technology solutions" },
        { id: "financial", name: "Financial Solutions", description: "Fintech and financial services" },
        { id: "manufacturing", name: "Manufacturing Solutions", description: "Smart manufacturing and Industry 4.0" },
        { id: "government", name: "Government Solutions", description: "Public sector technology solutions" },
        { id: "retail", name: "Retail Solutions", description: "Retail technology and e-commerce" }
      ]
    },
    {
      title: "Micro SaaS & Specialized",
      icon: Zap,
      services: [
        { id: "ai-project-management", name: "AI Project Management", description: "Intelligent project management platform" },
        { id: "ai-marketing", name: "AI Marketing Automation", description: "AI-powered marketing solutions" },
        { id: "ai-customer-support", name: "AI Customer Support", description: "Automated customer support systems" },
        { id: "ai-business-intelligence", name: "AI Business Intelligence", description: "Advanced BI and analytics" }
      ]
    }
  ];

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
              Get Your Custom Quote
            </h1>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto mb-8">
              Transform your business with Zion Tech Group's cutting-edge AI, cloud, and technology solutions. 
              Get a personalized quote tailored to your specific needs and objectives.
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
              <h2 className="text-3xl font-bold text-white mb-6">Request Your Quote</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Company Information */}
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
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                      placeholder="Your full name"
                      value={formData.contactName}
                      onChange={(e) => setFormData({...formData, contactName: e.target.value})}
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

                {/* Company Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                </div>

                {/* Services Selection */}
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-4">
                    Services of Interest *
                  </label>
                  <div className="space-y-4">
                    {serviceCategories.map((category) => (
                      <div key={category.title} className="border border-zinc-600 rounded-lg p-4">
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                          <category.icon className="w-5 h-5 mr-2 text-zion-cyan" />
                          {category.title}
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {category.services.map((service) => (
                            <label key={service.id} className="flex items-start space-x-3 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={selectedServices.includes(service.id)}
                                onChange={() => handleServiceToggle(service.id)}
                                className="mt-1 w-4 h-4 text-zion-cyan bg-zinc-700 border-zinc-600 rounded focus:ring-zion-cyan focus:ring-2"
                              />
                              <div>
                                <div className="text-sm font-medium text-white">{service.name}</div>
                                <div className="text-xs text-zinc-400">{service.description}</div>
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                      Budget Range
                    </label>
                    <select
                      className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                      value={formData.budget}
                      onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    >
                      <option value="">Select budget range</option>
                      <option value="under-25k">Under $25,000</option>
                      <option value="25k-100k">$25,000 - $100,000</option>
                      <option value="100k-500k">$100,000 - $500,000</option>
                      <option value="500k-1m">$500,000 - $1,000,000</option>
                      <option value="over-1m">Over $1,000,000</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                      Timeline
                    </label>
                    <select
                      className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                      value={formData.timeline}
                      onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-3-months">1-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="6-12-months">6-12 months</option>
                      <option value="over-12-months">Over 12 months</option>
                    </select>
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">
                    Project Description *
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    placeholder="Describe your project requirements, goals, and any specific challenges you're facing..."
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                  />
                </div>

                {/* Preferred Contact Method */}
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-3">
                    Preferred Contact Method
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="contactMethod"
                        value="email"
                        checked={formData.preferredContact === 'email'}
                        onChange={(e) => setFormData({...formData, preferredContact: e.target.value})}
                        className="w-4 h-4 text-zion-cyan bg-zinc-700 border-zinc-600 focus:ring-zion-cyan focus:ring-2"
                      />
                      <span className="text-white">Email</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="contactMethod"
                        value="phone"
                        checked={formData.preferredContact === 'phone'}
                        onChange={(e) => setFormData({...formData, preferredContact: e.target.value})}
                        className="w-4 h-4 text-zion-cyan bg-zinc-700 border-zinc-600 focus:ring-zion-cyan focus:ring-2"
                      />
                      <span className="text-white">Phone</span>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-zion-cyan/25"
                >
                  Submit Quote Request
                </button>
              </form>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Why Choose Zion */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Star className="w-5 h-5 mr-2 text-zion-cyan" />
                Why Choose Zion Tech Group?
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mt-0.5" />
                  <div>
                    <div className="text-white font-medium">Expert Team</div>
                    <div className="text-sm text-zinc-400">Certified professionals with 10+ years experience</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mt-0.5" />
                  <div>
                    <div className="text-white font-medium">Cutting-Edge Tech</div>
                    <div className="text-sm text-zinc-400">Latest AI, cloud, and emerging technologies</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mt-0.5" />
                  <div>
                    <div className="text-white font-medium">24/7 Support</div>
                    <div className="text-sm text-zinc-400">Round-the-clock technical support</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mt-0.5" />
                  <div>
                    <div className="text-white font-medium">Proven Results</div>
                    <div className="text-sm text-zinc-400">Success stories across industries</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <MessageSquare className="w-5 h-5 mr-2 text-zion-cyan" />
                Get in Touch
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

            {/* Response Time */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl p-6 text-center"
            >
              <Clock className="w-12 h-12 text-white mx-auto mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">Quick Response</h3>
              <p className="text-zinc-100">We'll get back to you within 24 hours with a detailed quote and next steps.</p>
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
            transition={{ duration: 0.6, delay: 1 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies that have already accelerated their digital transformation with Zion Tech Group.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Schedule a Demo
              </button>
              <button className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
