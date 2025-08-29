import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  CheckCircle, 
  Star, 
  Zap, 
  Brain, 
  Cloud, 
  Shield, 
  Rocket,
  ArrowRight,
  TrendingUp,
  Award,
  Clock,
  Users,
  Globe,
  Lock,
  Cpu,
  Database,
  Heart,
  Building,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Send,
  FileText,
  DollarSign,
  Calendar,
  Target,
  BarChart3
} from 'lucide-react';

const serviceCategories = [
  {
    id: 'ai-analytics',
    name: 'AI & Analytics',
    icon: Brain,
    color: 'from-purple-400 to-pink-500',
    services: [
      'AI Business Intelligence',
      'AI Sales Copilot',
      'LLM Content Studio',
      'Predictive Analytics',
      'Machine Learning Models'
    ]
  },
  {
    id: 'cloud-devops',
    name: 'Cloud & DevOps',
    icon: Cloud,
    color: 'from-blue-400 to-cyan-500',
    services: [
      'Cloud Infrastructure',
      'DevOps Automation',
      'CI/CD Pipelines',
      'Cloud Migration',
      'FinOps Optimization'
    ]
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    icon: Shield,
    color: 'from-red-400 to-orange-500',
    services: [
      'AI Compliance Copilot',
      'Zero Trust Architecture',
      'Security Auditing',
      'Incident Response',
      'Compliance Management'
    ]
  },
  {
    id: 'digital-solutions',
    name: 'Digital Solutions',
    icon: Rocket,
    color: 'from-green-400 to-emerald-500',
    services: [
      'Digital Twin',
      'Micro SaaS Solutions',
      'IoT Implementation',
      'Digital Transformation',
      'Custom Development'
    ]
  }
];

const budgetRanges = [
  { value: 'under-10k', label: 'Under $10,000', description: 'Basic implementation' },
  { value: '10k-50k', label: '$10,000 - $50,000', description: 'Standard solution' },
  { value: '50k-100k', label: '$50,000 - $100,000', description: 'Advanced features' },
  { value: '100k-500k', label: '$100,000 - $500,000', description: 'Enterprise solution' },
  { value: 'over-500k', label: 'Over $500,000', description: 'Custom enterprise' }
];

const timelineOptions = [
  { value: 'asap', label: 'ASAP', description: 'Immediate start' },
  { value: '1-3-months', label: '1-3 months', description: 'Quick turnaround' },
  { value: '3-6-months', label: '3-6 months', description: 'Standard timeline' },
  { value: '6-12-months', label: '6-12 months', description: 'Complex project' },
  { value: 'over-12-months', label: 'Over 12 months', description: 'Long-term project' }
];

export default function RequestQuote() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    companySize: '',
    industry: '',
    projectDescription: '',
    selectedServices: [],
    budget: '',
    timeline: '',
    additionalRequirements: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

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
    console.log('Form submitted:', { ...formData, selectedServices });
    // Here you would typically send the data to your backend
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-12">
      {[1, 2, 3, 4].map((step) => (
        <div key={step} className="flex items-center">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
            step <= currentStep 
              ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white' 
              : 'bg-slate-700 text-slate-400'
          }`}>
            {step < currentStep ? '✓' : step}
          </div>
          {step < 4 && (
            <div className={`w-16 h-1 mx-2 ${
              step < currentStep ? 'bg-gradient-to-r from-cyan-400 to-blue-500' : 'bg-slate-700'
            }`} />
          )}
        </div>
      ))}
    </div>
  );

  const renderStep1 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold text-white mb-6">Basic Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-slate-300 text-sm font-medium mb-2">First Name *</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
            placeholder="Enter your first name"
            required
          />
        </div>
        <div>
          <label className="block text-slate-300 text-sm font-medium mb-2">Last Name *</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
            placeholder="Enter your last name"
            required
          />
        </div>
        <div>
          <label className="block text-slate-300 text-sm font-medium mb-2">Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
            placeholder="Enter your email address"
            required
          />
        </div>
        <div>
          <label className="block text-slate-300 text-sm font-medium mb-2">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
            placeholder="Enter your phone number"
          />
        </div>
        <div>
          <label className="block text-slate-300 text-sm font-medium mb-2">Company *</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
            placeholder="Enter your company name"
            required
          />
        </div>
        <div>
          <label className="block text-slate-300 text-sm font-medium mb-2">Company Size</label>
          <select
            name="companySize"
            value={formData.companySize}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
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
    </motion.div>
  );

  const renderStep2 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold text-white mb-6">Services & Requirements</h3>
      
      <div className="mb-8">
        <label className="block text-slate-300 text-sm font-medium mb-4">Select Services *</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {serviceCategories.map((category) => (
            <div key={category.id} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
              <div className="flex items-center space-x-3 mb-3">
                <div className={`w-8 h-8 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center`}>
                  <category.icon className="w-4 h-4 text-white" />
                </div>
                <h4 className="text-white font-medium">{category.name}</h4>
              </div>
              <div className="space-y-2">
                {category.services.map((service, index) => (
                  <label key={index} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedServices.includes(`${category.id}-${index}`)}
                      onChange={() => handleServiceToggle(`${category.id}-${index}`)}
                      className="w-4 h-4 text-cyan-400 bg-slate-700 border-slate-600 rounded focus:ring-cyan-400 focus:ring-2"
                    />
                    <span className="text-sm text-slate-300">{service}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-slate-300 text-sm font-medium mb-2">Project Description *</label>
        <textarea
          name="projectDescription"
          value={formData.projectDescription}
          onChange={handleInputChange}
          rows={4}
          className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
          placeholder="Describe your project requirements, goals, and any specific challenges you're facing..."
          required
        />
      </div>
    </motion.div>
  );

  const renderStep3 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold text-white mb-6">Project Details</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-slate-300 text-sm font-medium mb-2">Budget Range *</label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
            required
          >
            <option value="">Select budget range</option>
            {budgetRanges.map((range) => (
              <option key={range.value} value={range.value}>
                {range.label} - {range.description}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-slate-300 text-sm font-medium mb-2">Timeline *</label>
          <select
            name="timeline"
            value={formData.timeline}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
            required
          >
            <option value="">Select timeline</option>
            {timelineOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label} - {option.description}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-slate-300 text-sm font-medium mb-2">Industry</label>
        <select
          name="industry"
          value={formData.industry}
          onChange={handleInputChange}
          className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
        >
          <option value="">Select industry</option>
          <option value="technology">Technology</option>
          <option value="healthcare">Healthcare</option>
          <option value="finance">Finance</option>
          <option value="manufacturing">Manufacturing</option>
          <option value="retail">Retail</option>
          <option value="education">Education</option>
          <option value="government">Government</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label className="block text-slate-300 text-sm font-medium mb-2">Additional Requirements</label>
        <textarea
          name="additionalRequirements"
          value={formData.additionalRequirements}
          onChange={handleInputChange}
          rows={3}
          className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
          placeholder="Any additional requirements, constraints, or special considerations..."
        />
      </div>
    </motion.div>
  );

  const renderStep4 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold text-white mb-6">Review & Submit</h3>
      
      <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50 mb-6">
        <h4 className="text-lg font-semibold text-white mb-4">Request Summary</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-slate-400">Name:</p>
            <p className="text-white">{formData.firstName} {formData.lastName}</p>
          </div>
          <div>
            <p className="text-slate-400">Company:</p>
            <p className="text-white">{formData.company}</p>
          </div>
          <div>
            <p className="text-slate-400">Email:</p>
            <p className="text-white">{formData.email}</p>
          </div>
          <div>
            <p className="text-slate-400">Phone:</p>
            <p className="text-white">{formData.phone || 'Not provided'}</p>
          </div>
          <div>
            <p className="text-slate-400">Budget:</p>
            <p className="text-white">{budgetRanges.find(r => r.value === formData.budget)?.label || 'Not selected'}</p>
          </div>
          <div>
            <p className="text-slate-400">Timeline:</p>
            <p className="text-white">{timelineOptions.find(t => t.value === formData.timeline)?.label || 'Not selected'}</p>
          </div>
        </div>
        
        <div className="mt-4">
          <p className="text-slate-400">Selected Services:</p>
          <p className="text-white">{selectedServices.length > 0 ? `${selectedServices.length} services selected` : 'No services selected'}</p>
        </div>
        
        <div className="mt-4">
          <p className="text-slate-400">Project Description:</p>
          <p className="text-white">{formData.projectDescription || 'Not provided'}</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
          <div>
            <h5 className="text-white font-medium mb-1">What happens next?</h5>
            <p className="text-slate-300 text-sm">
              Our team will review your request and contact you within 24 hours to discuss your project in detail and provide a customized quote.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Request Quote - Zion Tech Group"
        description="Get a customized quote for your technology project. Our team will analyze your requirements and provide competitive pricing."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Request a Quote
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
              Get a customized quote for your technology project. Our team will analyze your requirements and provide competitive pricing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
            {renderStepIndicator()}
            
            <form onSubmit={handleSubmit}>
              {currentStep === 1 && renderStep1()}
              {currentStep === 2 && renderStep2()}
              {currentStep === 3 && renderStep3()}
              {currentStep === 4 && renderStep4()}
              
              <div className="flex justify-between mt-12">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-8 py-3 border-2 border-slate-600 text-slate-300 font-semibold rounded-xl hover:border-slate-500 hover:text-white transition-colors duration-300"
                  >
                    Previous
                  </button>
                )}
                
                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 ml-auto"
                  >
                    Next Step
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 ml-auto flex items-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Submit Request</span>
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need Immediate Assistance?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our team is here to help. Contact us directly for urgent inquiries or to schedule a consultation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-slate-300 mb-3">Speak with our experts directly</p>
              <a href="tel:+1-555-0123" className="text-cyan-400 hover:text-cyan-300 font-medium">
                +1 (555) 012-3456
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-slate-300 mb-3">Send us a detailed message</p>
              <a href="mailto:sales@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-medium">
                sales@ziontechgroup.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>
              <p className="text-slate-300 mb-3">Chat with our support team</p>
              <button className="text-cyan-400 hover:text-cyan-300 font-medium">
                Start Chat
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 rounded-2xl p-8 md:p-12 border border-slate-600/50 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Let's discuss how our technology solutions can drive your business forward
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-400/25"
              >
                Schedule Consultation
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-colors duration-300"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
