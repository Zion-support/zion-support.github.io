import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  DollarSign,
  Users,
  Building2,
  Cloud,
  Shield,
  Brain,
  Target,
  Zap,
  Sparkles
} from 'lucide-react';

export default function RequestQuote() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
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

  const serviceCategories = [
    {
      id: 'ai-services',
      title: 'AI & Machine Learning',
      icon: <Brain className="w-6 h-6" />,
      services: [
        'AI Business Intelligence Dashboard',
        'AI Customer Support Automation',
        'AI Project Management Platform',
        'AI Marketing Automation Platform',
        'AI Workflow Orchestrator',
        'AI Predictive Maintenance'
      ]
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud & Infrastructure',
      icon: <Cloud className="w-6 h-6" />,
      services: [
        'Cloud & DevOps',
        'IT Infrastructure Management',
        'Edge Computing Solutions',
        'Cloud FinOps Optimizer'
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity & Compliance',
      icon: <Shield className="w-6 h-6" />,
      services: [
        'AI Cybersecurity Platform',
        'AI Cybersecurity Threat Intelligence',
        'Quantum AI Cybersecurity Platform',
        'Zero Trust Network Architecture'
      ]
    },
    {
      id: 'specialized-ai',
      title: 'Specialized AI Services',
      icon: <Target className="w-6 h-6" />,
      services: [
        'AI Healthcare Analytics Platform',
        'AI Financial Trading Platform',
        'AI Legal Document Automation',
        'AI Supply Chain Optimization'
      ]
    }
  ];

  const handleServiceToggle = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', { formData, selectedServices });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
              <Calculator className="w-4 h-4 mr-2" />
              Get Your Custom Quote
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Request a Quote
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get a personalized quote for our AI services, IT solutions, and technology platforms. Our experts will analyze your needs and provide a comprehensive proposal.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <a 
                href="tel:+13024640950" 
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                +1 (302) 464-0950
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                kleber@ziontechgroup.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-300 text-sm">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-gradient-to-r from-slate-800/30 to-purple-800/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Service Selection */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">
                  Select Your Services
                </h2>
                <div className="space-y-6">
                  {serviceCategories.map((category, index) => (
                    <motion.div
                      key={category.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700 rounded-xl p-6"
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mr-3">
                          {category.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                      </div>
                      <div className="space-y-3">
                        {category.services.map((service, serviceIndex) => (
                          <label key={serviceIndex} className="flex items-center space-x-3 cursor-pointer group">
                            <input
                              type="checkbox"
                              checked={selectedServices.includes(service)}
                              onChange={() => handleServiceToggle(service)}
                              className="w-4 h-4 text-cyan-500 bg-gray-700 border-gray-600 rounded focus:ring-cyan-500 focus:ring-2"
                            />
                            <span className="text-gray-300 group-hover:text-white transition-colors">
                              {service}
                            </span>
                          </label>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">
                  Project Details
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-colors"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-colors"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-colors"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-colors"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-colors"
                      placeholder="Enter your company name"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Industry
                      </label>
                      <select
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-colors"
                      >
                        <option value="">Select Industry</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="finance">Finance</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="retail">Retail</option>
                        <option value="technology">Technology</option>
                        <option value="government">Government</option>
                        <option value="education">Education</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Project Size
                      </label>
                      <select
                        name="projectSize"
                        value={formData.projectSize}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-colors"
                      >
                        <option value="">Select Size</option>
                        <option value="small">Small (1-10 users)</option>
                        <option value="medium">Medium (11-100 users)</option>
                        <option value="large">Large (101-1000 users)</option>
                        <option value="enterprise">Enterprise (1000+ users)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-colors"
                      >
                        <option value="">Select Timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="1-3-months">1-3 months</option>
                        <option value="3-6-months">3-6 months</option>
                        <option value="6-12-months">6-12 months</option>
                        <option value="12-plus-months">12+ months</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-colors"
                      >
                        <option value="">Select Budget</option>
                        <option value="under-10k">Under $10,000</option>
                        <option value="10k-50k">$10,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="100k-500k">$100,000 - $500,000</option>
                        <option value="500k-plus">$500,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Project Description *
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-colors"
                      placeholder="Describe your project requirements, goals, and any specific needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    Submit Quote Request
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We deliver exceptional value through innovative technology solutions and expert implementation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Innovation First",
                description: "Cutting-edge AI and emerging technology solutions"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Expert Team",
                description: "Experienced professionals with deep industry knowledge"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Fast Delivery",
                description: "Quick implementation and time-to-value"
              },
              {
                icon: <DollarSign className="w-8 h-8" />,
                title: "Cost Effective",
                description: "Competitive pricing with maximum ROI"
              }
            ].map((feature, index) => (
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
      </section>
    </div>
  );
}
