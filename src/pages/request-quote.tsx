import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  Send, 
  CheckCircle, 
  Clock, 
  Users, 
  Shield, 
  Zap,
  Brain,
  Cloud,
  Atom,
  TrendingUp,
  FileText,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Star
} from 'lucide-react';

export default function RequestQuote() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    teamSize: '',
    industry: '',
    urgency: 'medium'
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setCurrentStep(4); // Success step
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const services = [
    {
      name: "AI & Machine Learning",
      icon: Brain,
      description: "Custom AI solutions, ML models, and intelligent automation",
      price: "$25K - $150K+"
    },
    {
      name: "Quantum Computing",
      icon: Atom,
      description: "Quantum algorithms, hybrid systems, and quantum-ready applications",
      price: "$50K - $300K+"
    },
    {
      name: "Edge Computing",
      icon: Zap,
      description: "Edge AI, IoT solutions, and distributed computing platforms",
      price: "$30K - $200K+"
    },
    {
      name: "Digital Twins",
      icon: Cloud,
      description: "Real-time simulation, IoT integration, and predictive analytics",
      price: "$40K - $250K+"
    },
    {
      name: "Cybersecurity",
      icon: Shield,
      description: "AI-powered security, threat detection, and compliance solutions",
      price: "$20K - $120K+"
    },
    {
      name: "Micro SaaS",
      icon: TrendingUp,
      description: "Scalable SaaS platforms, automation tools, and business solutions",
      price: "$15K - $100K+"
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: "Free Consultation",
      description: "Get expert advice on your project requirements and technology stack"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock technical support and project management"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Work with certified professionals and industry experts"
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee with milestone-based delivery"
    }
  ];

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">First Name *</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your first name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Last Name *</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your last name"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your email address"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your phone number"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Company Name *</label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter your company name"
        />
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Project Type *</label>
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select project type</option>
            <option value="ai-ml">AI & Machine Learning</option>
            <option value="quantum">Quantum Computing</option>
            <option value="edge">Edge Computing</option>
            <option value="digital-twins">Digital Twins</option>
            <option value="cybersecurity">Cybersecurity</option>
            <option value="micro-saas">Micro SaaS</option>
            <option value="custom">Custom Solution</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Industry *</label>
          <select
            name="industry"
            value={formData.industry}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select industry</option>
            <option value="healthcare">Healthcare</option>
            <option value="finance">Finance & Banking</option>
            <option value="manufacturing">Manufacturing</option>
            <option value="retail">Retail & E-commerce</option>
            <option value="transportation">Transportation & Logistics</option>
            <option value="energy">Energy & Utilities</option>
            <option value="technology">Technology</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Budget Range *</label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select budget range</option>
            <option value="under-25k">Under $25K</option>
            <option value="25k-50k">$25K - $50K</option>
            <option value="50k-100k">$50K - $100K</option>
            <option value="100k-250k">$100K - $250K</option>
            <option value="250k-500k">$250K - $500K</option>
            <option value="over-500k">Over $500K</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Timeline *</label>
          <select
            name="timeline"
            value={formData.timeline}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select timeline</option>
            <option value="1-3-months">1-3 months</option>
            <option value="3-6-months">3-6 months</option>
            <option value="6-12-months">6-12 months</option>
            <option value="over-12-months">Over 12 months</option>
          </select>
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Team Size</label>
        <select
          name="teamSize"
          value={formData.teamSize}
          onChange={handleInputChange}
          className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select team size</option>
          <option value="1-5">1-5 people</option>
          <option value="6-20">6-20 people</option>
          <option value="21-100">21-100 people</option>
          <option value="over-100">Over 100 people</option>
        </select>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Project Description *</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          required
          rows={6}
          className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Describe your project requirements, goals, and any specific features you need..."
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Project Urgency</label>
        <div className="grid grid-cols-3 gap-4">
          {[
            { value: 'low', label: 'Low', description: 'Flexible timeline' },
            { value: 'medium', label: 'Medium', description: 'Standard timeline' },
            { value: 'high', label: 'High', description: 'Urgent delivery needed' }
          ].map((urgency) => (
            <label key={urgency.value} className="relative">
              <input
                type="radio"
                name="urgency"
                value={urgency.value}
                checked={formData.urgency === urgency.value}
                onChange={handleInputChange}
                className="sr-only"
              />
              <div className={`p-4 border rounded-lg cursor-pointer transition-all duration-300 ${
                formData.urgency === urgency.value
                  ? 'border-blue-500 bg-blue-500/10'
                  : 'border-slate-600 bg-slate-700 hover:border-slate-500'
              }`}>
                <div className="text-center">
                  <div className={`font-medium ${
                    formData.urgency === urgency.value ? 'text-blue-400' : 'text-gray-300'
                  }`}>
                    {urgency.label}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">
                    {urgency.description}
                  </div>
                </div>
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSuccess = () => (
    <div className="text-center py-12">
      <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle className="w-10 h-10 text-green-400" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">Quote Request Submitted!</h3>
      <p className="text-gray-300 mb-8 max-w-md mx-auto">
        Thank you for your interest! Our team will review your requirements and get back to you 
        within 24 hours with a detailed quote and project plan.
      </p>
      <div className="space-y-4">
        <div className="flex items-center justify-center text-sm text-gray-400">
          <Clock className="w-4 h-4 mr-2" />
          Response time: 24 hours
        </div>
        <div className="flex items-center justify-center text-sm text-gray-400">
          <FileText className="w-4 h-4 mr-2" />
          Detailed proposal included
        </div>
        <div className="flex items-center justify-center text-sm text-gray-400">
          <Phone className="w-4 h-4 mr-2" />
          Free consultation call
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-8">
                <Calculator className="w-4 h-4 mr-2" />
                Get Your Quote
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Ready to Start Your
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Project?</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                Get a detailed quote for your custom AI, quantum computing, or technology solution. 
                Our experts will analyze your requirements and provide a comprehensive proposal.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form Section */}
            <div className="lg:col-span-2">
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8">
                {/* Progress Steps */}
                {currentStep <= 3 && (
                  <div className="flex items-center justify-between mb-8">
                    {[1, 2, 3].map((step) => (
                      <div key={step} className="flex items-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                          step <= currentStep
                            ? 'bg-blue-500 text-white'
                            : 'bg-slate-700 text-gray-400'
                        }`}>
                          {step}
                        </div>
                        {step < 3 && (
                          <div className={`w-16 h-1 mx-4 ${
                            step < currentStep ? 'bg-blue-500' : 'bg-slate-700'
                          }`} />
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Form Steps */}
                <form onSubmit={handleSubmit}>
                  {currentStep === 1 && renderStep1()}
                  {currentStep === 2 && renderStep2()}
                  {currentStep === 3 && renderStep3()}
                  {currentStep === 4 && renderSuccess()}

                  {/* Navigation Buttons */}
                  {currentStep < 4 && (
                    <div className="flex justify-between mt-8">
                      <button
                        type="button"
                        onClick={prevStep}
                        disabled={currentStep === 1}
                        className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                          currentStep === 1
                            ? 'bg-slate-700 text-gray-500 cursor-not-allowed'
                            : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                        }`}
                      >
                        Previous
                      </button>
                      
                      {currentStep < 3 ? (
                        <button
                          type="button"
                          onClick={nextStep}
                          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                        >
                          Next Step
                        </button>
                      ) : (
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                              Submitting...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4 mr-2" />
                              Submit Quote Request
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Services Overview */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Our Services</h3>
                <div className="space-y-4">
                  {services.map((service) => (
                    <div key={service.name} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-4 h-4 text-blue-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-white">{service.name}</h4>
                        <p className="text-xs text-gray-400 mt-1">{service.description}</p>
                        <p className="text-xs text-blue-400 mt-1 font-medium">{service.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Why Choose Us</h3>
                <div className="space-y-4">
                  {benefits.map((benefit) => (
                    <div key={benefit.title} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <benefit.icon className="w-3 h-3 text-green-400" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-white">{benefit.title}</h4>
                        <p className="text-xs text-gray-400 mt-1">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Get in Touch</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-sm text-gray-300">
                    <Phone className="w-4 h-4 text-blue-400" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-300">
                    <Mail className="w-4 h-4 text-blue-400" />
                    <span>quotes@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-300">
                    <MapPin className="w-4 h-4 text-blue-400" />
                    <span>San Francisco, CA</span>
                  </div>
                </div>
                <button className="w-full mt-4 px-4 py-2 border border-blue-500/30 text-blue-400 rounded-lg font-medium hover:bg-blue-500/10 transition-all duration-300 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Schedule a Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Not Sure Where to Start?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our team of experts is here to help you navigate the complex world of 
              emerging technologies and find the perfect solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                Free Consultation
              </button>
              <button className="px-8 py-4 border border-blue-500/30 text-blue-400 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}