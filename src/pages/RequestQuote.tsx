import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Calculator,
  CheckCircle,
  ArrowRight,
  Users,
  Building2,
  Globe,
  Zap,
  Brain,
  Server,
  Shield,
  Target,
  FileText,
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  Award,
  TrendingUp,
  Lightbulb,
  DollarSign,
  Calendar,
  BarChart3,
  Workflow,
  Cloud,
  Lock,
  Database,
  Network,
  Cpu,
  Rocket
} from 'lucide-react';

export default function RequestQuote() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    industry: '',
    projectType: '',
    timeline: '',
    budget: '',
    teamSize: '',
    description: '',
    requirements: '',
    integrations: '',
    compliance: '',
    location: ''
  });

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedSolutions, setSelectedSolutions] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleServiceToggle = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleSolutionToggle = (solution: string) => {
    setSelectedSolutions(prev => 
      prev.includes(solution) 
        ? prev.filter(s => s !== solution)
        : [...prev, solution]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Quote request submitted:', { formData, selectedServices, selectedSolutions });
  };

  const industries = [
    'Healthcare', 'Financial Services', 'Manufacturing', 'Government', 'Retail', 'Education',
    'Technology', 'Real Estate', 'Transportation', 'Energy', 'Telecommunications', 'Media & Entertainment',
    'Professional Services', 'Non-Profit', 'Other'
  ];

  const projectTypes = [
    'AI & Machine Learning Implementation', 'Cloud Migration & Infrastructure', 'Digital Transformation',
    'Cybersecurity & Compliance', 'Data Analytics & Business Intelligence', 'IoT Solutions',
    'Blockchain & Web3', 'Micro SaaS Platform Development', 'Legacy System Modernization',
    'API Development & Integration', 'Mobile App Development', 'Web Application Development',
    'DevOps & CI/CD Implementation', 'Data Migration & ETL', 'Custom Software Development'
  ];

  const timelines = [
    'Immediate (1-3 months)', 'Short-term (3-6 months)', 'Medium-term (6-12 months)', 
    'Long-term (1+ years)', 'Ongoing/Continuous'
  ];

  const budgets = [
    'Under $25K', '$25K - $50K', '$50K - $100K', '$100K - $250K', '$250K - $500K', '$500K - $1M', '$1M+'
  ];

  const teamSizes = [
    '1-10 employees', '11-50 employees', '51-200 employees', '201-500 employees', '500+ employees'
  ];

  const services = [
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, category: 'AI Services' },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, category: 'Infrastructure' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, category: 'Security' },
    { id: 'data-analytics', name: 'Data Analytics', icon: BarChart3, category: 'Analytics' },
    { id: 'blockchain', name: 'Blockchain Solutions', icon: Network, category: 'Emerging Tech' },
    { id: 'iot', name: 'IoT & Edge Computing', icon: Cpu, category: 'Emerging Tech' },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, category: 'Emerging Tech' },
    { id: 'micro-saas', name: 'Micro SaaS Development', icon: Rocket, category: 'Development' },
    { id: 'digital-transformation', name: 'Digital Transformation', icon: Workflow, category: 'Strategy' },
    { id: 'legacy-modernization', name: 'Legacy Modernization', icon: Server, category: 'Infrastructure' }
  ];

  const solutions = [
    { id: 'healthcare', name: 'Healthcare Solutions', icon: Users, category: 'Industry Solutions' },
    { id: 'financial', name: 'Financial Services', icon: DollarSign, category: 'Industry Solutions' },
    { id: 'manufacturing', name: 'Manufacturing', icon: Building2, category: 'Industry Solutions' },
    { id: 'government', name: 'Government & Public Sector', icon: Globe, category: 'Industry Solutions' },
    { id: 'retail', name: 'Retail & E-commerce', icon: ShoppingCart, category: 'Industry Solutions' },
    { id: 'education', name: 'Education & Training', icon: GraduationCap, category: 'Industry Solutions' }
  ];

  const complianceStandards = [
    'SOC 2 Type II', 'ISO 27001', 'HIPAA', 'PCI DSS', 'GDPR', 'CCPA', 'SOX', 'FedRAMP', 'None Required'
  ];

  const locations = [
    'United States', 'Canada', 'United Kingdom', 'European Union', 'Asia Pacific', 'Latin America', 'Middle East', 'Africa', 'Global'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-dark">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Calculator className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get Your Custom Quote
            </h1>
            <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
              Receive a detailed, personalized quote for your technology project. 
              Our experts will analyze your requirements and provide transparent pricing 
              with no hidden costs.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center space-x-2 text-zinc-400">
                <CheckCircle className="w-5 h-5 text-zion-cyan" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center space-x-2 text-zinc-400">
                <Clock className="w-5 h-5 text-zion-cyan" />
                <span>24-Hour Response</span>
              </div>
              <div className="flex items-center space-x-2 text-zinc-400">
                <DollarSign className="w-5 h-5 text-zion-cyan" />
                <span>Transparent Pricing</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Request Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-6xl mx-auto"
          >
            <form onSubmit={handleSubmit} className="space-y-12">
              {/* Basic Information */}
              <div className="bg-zion-slate-dark/50 rounded-2xl p-8 border border-zion-purple/30">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Users className="w-8 h-8 text-zion-cyan mr-3" />
                  Basic Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-purple/30 rounded-lg text-white placeholder-zinc-400 focus:border-zion-cyan focus:outline-none transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-purple/30 rounded-lg text-white placeholder-zinc-400 focus:border-zion-cyan focus:outline-none transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-purple/30 rounded-lg text-white placeholder-zinc-400 focus:border-zion-cyan focus:outline-none transition-colors"
                      placeholder="Enter your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-purple/30 rounded-lg text-white placeholder-zinc-400 focus:border-zion-cyan focus:outline-none transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="bg-zion-slate-dark/50 rounded-2xl p-8 border border-zion-purple/30">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Target className="w-8 h-8 text-zion-cyan mr-3" />
                  Project Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Industry *</label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-purple/30 rounded-lg text-white focus:border-zion-cyan focus:outline-none transition-colors"
                    >
                      <option value="">Select your industry</option>
                      {industries.map((industry) => (
                        <option key={industry} value={industry}>{industry}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Project Type *</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-purple/30 rounded-lg text-white focus:border-zion-cyan focus:outline-none transition-colors"
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Timeline *</label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-purple/30 rounded-lg text-white focus:border-zion-cyan focus:outline-none transition-colors"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((timeline) => (
                        <option key={timeline} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Budget Range *</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-purple/30 rounded-lg text-white focus:border-zion-cyan focus:outline-none transition-colors"
                    >
                      <option value="">Select budget range</option>
                      {budgets.map((budget) => (
                        <option key={budget} value={budget}>{budget}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Team Size</label>
                    <select
                      name="teamSize"
                      value={formData.teamSize}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-purple/30 rounded-lg text-white focus:border-zion-cyan focus:outline-none transition-colors"
                    >
                      <option value="">Select team size</option>
                      {teamSizes.map((size) => (
                        <option key={size} value={size}>{size}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Location</label>
                    <select
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-purple/30 rounded-lg text-white focus:border-zion-cyan focus:outline-none transition-colors"
                    >
                      <option value="">Select location</option>
                      {locations.map((location) => (
                        <option key={location} value={location}>{location}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Services Selection */}
              <div className="bg-zion-slate-dark/50 rounded-2xl p-8 border border-zion-purple/30">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Zap className="w-8 h-8 text-zion-cyan mr-3" />
                  Services You're Interested In
                </h2>
                <p className="text-zinc-300 mb-6">Select all services that apply to your project:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {services.map((service) => (
                    <label
                      key={service.id}
                      className={`flex items-center space-x-3 p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                        selectedServices.includes(service.id)
                          ? 'border-zion-cyan bg-zion-cyan/10'
                          : 'border-zion-purple/30 hover:border-zion-cyan/50'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={selectedServices.includes(service.id)}
                        onChange={() => handleServiceToggle(service.id)}
                        className="w-4 h-4 text-zion-cyan bg-zion-slate-dark border-zion-purple/30 rounded focus:ring-zion-cyan"
                      />
                      <div className="flex items-center space-x-3">
                        <service.icon className="w-5 h-5 text-zion-cyan" />
                        <div>
                          <span className="text-white font-medium">{service.name}</span>
                          <div className="text-xs text-zinc-400">{service.category}</div>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Industry Solutions */}
              <div className="bg-zion-slate-dark/50 rounded-2xl p-8 border border-zion-purple/30">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Building2 className="w-8 h-8 text-zion-cyan mr-3" />
                  Industry-Specific Solutions
                </h2>
                <p className="text-zinc-300 mb-6">Select any industry-specific solutions you need:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {solutions.map((solution) => (
                    <label
                      key={solution.id}
                      className={`flex items-center space-x-3 p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                        selectedSolutions.includes(solution.id)
                          ? 'border-zion-cyan bg-zion-cyan/10'
                          : 'border-zion-purple/30 hover:border-zion-cyan/50'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={selectedSolutions.includes(solution.id)}
                        onChange={() => handleSolutionToggle(solution.id)}
                        className="w-4 h-4 text-zion-cyan bg-zion-slate-dark border-zion-purple/30 rounded focus:ring-zion-cyan"
                      />
                      <div className="flex items-center space-x-3">
                        <solution.icon className="w-5 h-5 text-zion-cyan" />
                        <div>
                          <span className="text-white font-medium">{solution.name}</span>
                          <div className="text-xs text-zinc-400">{solution.category}</div>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Project Description */}
              <div className="bg-zion-slate-dark/50 rounded-2xl p-8 border border-zion-purple/30">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <FileText className="w-8 h-8 text-zion-cyan mr-3" />
                  Project Description & Requirements
                </h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Project Description *</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={4}
                      required
                      className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-purple/30 rounded-lg text-white placeholder-zinc-400 focus:border-zion-cyan focus:outline-none transition-colors"
                      placeholder="Describe your project in detail, including goals, objectives, and expected outcomes..."
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Specific Requirements</label>
                    <textarea
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-purple/30 rounded-lg text-white placeholder-zinc-400 focus:border-zion-cyan focus:outline-none transition-colors"
                      placeholder="List any specific technical requirements, integrations, or constraints..."
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Existing Integrations</label>
                    <textarea
                      name="integrations"
                      value={formData.integrations}
                      onChange={handleInputChange}
                      rows={2}
                      className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-purple/30 rounded-lg text-white placeholder-zinc-400 focus:border-zion-cyan focus:outline-none transition-colors"
                      placeholder="What systems, tools, or platforms do you currently use that need to integrate with this project?"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Compliance Requirements</label>
                    <select
                      name="compliance"
                      value={formData.compliance}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-purple/30 rounded-lg text-white focus:border-zion-cyan focus:outline-none transition-colors"
                    >
                      <option value="">Select compliance standards (if any)</option>
                      {complianceStandards.map((standard) => (
                        <option key={standard} value={standard}>{standard}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center px-12 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold text-lg rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25"
                >
                  Request Custom Quote
                  <ArrowRight className="w-6 h-6 ml-2" />
                </button>
                <p className="text-zinc-400 mt-4">
                  We'll respond within 24 hours with a detailed quote and next steps.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              We deliver exceptional value through our expertise, innovation, and commitment to your success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: 'Proven Track Record', description: '500+ successful projects across industries' },
              { icon: Users, title: 'Expert Team', description: 'Certified professionals with deep domain expertise' },
              { icon: Zap, title: 'Fast Delivery', description: 'Agile methodology for rapid time-to-market' },
              { icon: Shield, title: 'Quality Assurance', description: 'Rigorous testing and quality control processes' }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-zinc-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-12">Questions About Your Quote?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                <p className="text-zinc-400">+1 302 464 0950</p>
                <p className="text-zinc-400">Mon-Fri 9AM-6PM EST</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                <p className="text-zinc-400">kleber@ziontechgroup.com</p>
                <p className="text-zinc-400">24/7 support available</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-blue to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-zinc-400">364 E Main St STE 1008</p>
                <p className="text-zinc-400">Middletown DE 19709</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
