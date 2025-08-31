import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calculator, 
  Brain, 
  Shield, 
  Zap, 
  Users, 
  Building2, 
  Mail, 
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Globe,
  Server,
  Cloud,
  Lock,
  Database,
  Workflow
} from 'lucide-react';

export default function RequestQuote() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [companySize, setCompanySize] = useState('');
  const [timeline, setTimeline] = useState('');
  const [budget, setBudget] = useState('');

  const serviceCategories = [
    {
      id: 'ai-automation',
      name: 'AI & Automation',
      icon: <Brain className="w-6 h-6" />,
      services: [
        'AI Enterprise Automation Platform',
        'AI Data Analytics Platform',
        'AI Business Intelligence',
        'AI Cybersecurity Platform',
        'AI Autonomous Research Assistant',
        'AI Financial Trading Platform',
        'AI Healthcare Platform',
        'AI Quantum Hybrid Platform'
      ]
    },
    {
      id: 'it-infrastructure',
      name: 'IT & Infrastructure',
      icon: <Server className="w-6 h-6" />,
      services: [
        'IT Infrastructure Management',
        'Cloud & DevOps Solutions',
        'Cybersecurity Services',
        'Digital Transformation',
        'Edge Computing Solutions',
        'Quantum Computing Solutions',
        'IoT Edge Computing'
      ]
    },
    {
      id: 'micro-saas',
      name: 'Micro SaaS Solutions',
      icon: <Zap className="w-6 h-6" />,
      services: [
        'AI Sales Copilot',
        'Cloud FinOps Optimizer',
        'AI Compliance Assistant',
        'Micro SaaS Platform',
        'AI HR Management Platform',
        'AI Customer Support Automation',
        'AI Workflow Orchestrator'
      ]
    }
  ];

  const companySizes = [
    { value: 'startup', label: 'Startup (1-10 employees)', description: 'Perfect for emerging businesses' },
    { value: 'small', label: 'Small Business (11-50 employees)', description: 'Ideal for growing companies' },
    { value: 'medium', label: 'Medium Business (51-200 employees)', description: 'Great for established organizations' },
    { value: 'large', label: 'Large Business (201-1000 employees)', description: 'Perfect for enterprise solutions' },
    { value: 'enterprise', label: 'Enterprise (1000+ employees)', description: 'Custom enterprise solutions' }
  ];

  const timelines = [
    { value: 'immediate', label: 'Immediate (1-2 weeks)', description: 'Urgent implementation needed' },
    { value: 'quick', label: 'Quick (1-2 months)', description: 'Fast-track implementation' },
    { value: 'standard', label: 'Standard (3-6 months)', description: 'Normal implementation timeline' },
    { value: 'extended', label: 'Extended (6+ months)', description: 'Complex, phased implementation' }
  ];

  const budgetRanges = [
    { value: 'under-50k', label: 'Under $50,000', description: 'Basic implementation' },
    { value: '50k-100k', label: '$50,000 - $100,000', description: 'Standard implementation' },
    { value: '100k-250k', label: '$100,000 - $250,000', description: 'Advanced implementation' },
    { value: '250k-500k', label: '$250,000 - $500,000', description: 'Enterprise implementation' },
    { value: '500k-plus', label: '$500,000+', description: 'Custom enterprise solution' }
  ];

  const handleServiceToggle = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Quote request submitted:', {
      selectedServices,
      companySize,
      timeline,
      budget
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-6">
              <Calculator className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get Your Custom
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}Quote
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ready to transform your business? Get a personalized quote for our cutting-edge 
              AI, IT, and Micro SaaS solutions tailored to your specific needs.
            </p>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Why Get a Quote */}
      <div className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Get a Custom Quote?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every business is unique. Our custom quotes ensure you get exactly what you need 
              at the right price point.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-slate-700/50 rounded-xl border border-slate-600/50">
              <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Personalized Solutions</h3>
              <p className="text-gray-300">Tailored to your specific business needs and goals</p>
            </div>
            
            <div className="text-center p-6 bg-slate-700/50 rounded-xl border border-slate-600/50">
              <TrendingUp className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">ROI Optimization</h3>
              <p className="text-gray-300">Maximize your investment with strategic planning</p>
            </div>
            
            <div className="text-center p-6 bg-slate-700/50 rounded-xl border border-slate-600/50">
              <Clock className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Timeline Planning</h3>
              <p className="text-gray-300">Realistic implementation schedules that work for you</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Form */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Request Your Custom Quote
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Fill out the form below and our team will provide you with a detailed, 
              personalized quote within 24 hours.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-12">
            {/* Service Selection */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <Zap className="w-6 h-6 mr-3 text-cyan-400" />
                Select Services
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {serviceCategories.map((category) => (
                  <div key={category.id} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                    <div className="flex items-center mb-4">
                      <div className="text-cyan-400 mr-3">{category.icon}</div>
                      <h4 className="text-lg font-semibold text-white">{category.name}</h4>
                    </div>
                    <div className="space-y-3">
                      {category.services.map((service) => (
                        <label key={service} className="flex items-start space-x-3 cursor-pointer group">
                          <input
                            type="checkbox"
                            checked={selectedServices.includes(service)}
                            onChange={() => handleServiceToggle(service)}
                            className="w-4 h-4 text-cyan-500 bg-slate-700 border-slate-600 rounded focus:ring-cyan-500 mt-1"
                          />
                          <span className="text-gray-300 group-hover:text-white transition-colors text-sm">
                            {service}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Company Information */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <Building2 className="w-6 h-6 mr-3 text-purple-400" />
                Company Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Company Size</label>
                  <select
                    value={companySize}
                    onChange={(e) => setCompanySize(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="">Select company size</option>
                    {companySizes.map((size) => (
                      <option key={size.value} value={size.value}>
                        {size.label}
                      </option>
                    ))}
                  </select>
                  {companySize && (
                    <p className="text-sm text-gray-400 mt-2">
                      {companySizes.find(s => s.value === companySize)?.description}
                    </p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Implementation Timeline</label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="">Select timeline</option>
                    {timelines.map((t) => (
                      <option key={t.value} value={t.value}>
                        {t.label}
                      </option>
                    ))}
                  </select>
                  {timeline && (
                    <p className="text-sm text-gray-400 mt-2">
                      {timelines.find(t => t.value === timeline)?.description}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Budget Range */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <TrendingUp className="w-6 h-6 mr-3 text-green-400" />
                Budget Range
              </h3>
              <div className="max-w-2xl">
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="">Select budget range</option>
                  {budgetRanges.map((range) => (
                    <option key={range.value} value={range.value}>
                      {range.label}
                    </option>
                  ))}
                </select>
                {budget && (
                  <p className="text-sm text-gray-400 mt-2">
                    {budgetRanges.find(r => r.value === budget)?.description}
                  </p>
                )}
              </div>
            </div>

            {/* Additional Information */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <Users className="w-6 h-6 mr-3 text-yellow-400" />
                Additional Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Company Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Enter your company name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Contact Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">Project Description</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Describe your project requirements, goals, and any specific challenges you're facing..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-12 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 text-lg"
              >
                Get My Custom Quote
              </button>
              <p className="text-gray-400 mt-4 text-sm">
                We'll respond within 24 hours with your personalized quote
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* What Happens Next */}
      <div className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              What Happens Next?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our streamlined process ensures you get the information you need quickly 
              and efficiently.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Submit Request</h3>
              <p className="text-gray-300">Fill out our comprehensive quote form</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Expert Review</h3>
              <p className="text-gray-300">Our team analyzes your requirements</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Custom Quote</h3>
              <p className="text-gray-300">Receive your personalized quote within 24 hours</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Project Start</h3>
              <p className="text-gray-300">Begin your digital transformation journey</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Don't wait to transform your business. Get your custom quote today and 
            take the first step towards digital excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              <Phone className="w-5 h-5 inline mr-2" />
              Talk to an Expert
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200"
            >
              <ArrowRight className="w-5 h-5 inline mr-2" />
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
