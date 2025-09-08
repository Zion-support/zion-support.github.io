import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  Users, 
  Video, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle,
  ArrowRight,
  Star,
  Brain,
  Shield,
  Cloud,
  Building,
  Zap,
  Heart,
  Lock,
  Leaf,
  Rocket,
  Cpu,
  TrendingUp,
  MessageCircle,
  FileText,
  Settings,
  Globe,
  Database,
  Network,
  Award,
  BookOpen,
  Play,
  Key,
  Target,
  Lightbulb,
  Clock as ClockIcon,
  BarChart3,
  PieChart,
  Activity,
  Eye,
  Search,
  Filter,
  Grid,
  List
} from 'lucide-react';

const ScheduleDemo: React.FC = () => {
  const [selectedService, setSelectedService] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [companySize, setCompanySize] = useState('');
  const [demoType, setDemoType] = useState('live');

  const services = [
    {
      id: 'ai-enterprise-orchestrator',
      name: 'AI Enterprise Orchestrator',
      category: 'AI & Machine Learning',
      description: 'Multi-agent AI coordination and workflow automation platform',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      demoDuration: '45 minutes',
      features: ['Multi-agent coordination', 'Workflow automation', 'Process optimization']
    },
    {
      id: 'ai-cybersecurity-suite',
      name: 'AI Cybersecurity Suite',
      category: 'Cybersecurity',
      description: 'AI-powered threat detection and response platform',
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      demoDuration: '60 minutes',
      features: ['Threat detection', 'Incident response', 'Security monitoring']
    },
    {
      id: 'cloud-devops',
      name: 'Cloud DevOps',
      category: 'Cloud & Infrastructure',
      description: 'End-to-end cloud infrastructure and DevOps automation',
      icon: Cloud,
      color: 'from-cyan-500 to-blue-600',
      demoDuration: '45 minutes',
      features: ['Cloud migration', 'DevOps automation', 'Infrastructure as code']
    },
    {
      id: 'digital-transformation',
      name: 'Digital Transformation',
      category: 'Consulting',
      description: 'Strategic guidance for business transformation',
      icon: Building,
      color: 'from-blue-500 to-indigo-600',
      demoDuration: '90 minutes',
      features: ['Strategy development', 'Process optimization', 'Technology roadmap']
    },
    {
      id: 'ai-business-intelligence',
      name: 'AI Business Intelligence',
      category: 'AI & Machine Learning',
      description: 'Advanced analytics and predictive insights platform',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-600',
      demoDuration: '45 minutes',
      features: ['Predictive analytics', 'Data visualization', 'Machine learning models']
    },
    {
      id: 'micro-saas-solutions',
      name: 'Micro SaaS Solutions',
      category: 'Software Solutions',
      description: 'Scalable, focused software solutions for specific business needs',
      icon: Zap,
      color: 'from-indigo-500 to-purple-600',
      demoDuration: '30 minutes',
      features: ['AI Lead Scoring', 'Website Chatbot', 'Content Optimizer']
    }
  ];

  const timeSlots = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '1:00 PM - 2:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '4:00 PM - 5:00 PM'
  ];

  const companySizes = [
    '1-10 employees',
    '11-50 employees',
    '51-200 employees',
    '201-500 employees',
    '500+ employees'
  ];

  const demoTypes = [
    { id: 'live', name: 'Live Demo', description: 'Interactive demonstration with our experts', icon: Video },
    { id: 'recorded', name: 'Recorded Demo', description: 'Pre-recorded video demonstration', icon: Play },
    { id: 'custom', name: 'Custom Demo', description: 'Tailored demonstration for your specific needs', icon: Settings }
  ];

  const benefits = [
    {
      icon: Target,
      title: 'See Solutions in Action',
      description: 'Witness how our technology solves real business challenges'
    },
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Get insights from our experienced technology consultants'
    },
    {
      icon: Clock,
      title: 'Save Time',
      description: 'Quickly understand if our solutions fit your needs'
    },
    {
      icon: CheckCircle,
      title: 'Make Informed Decisions',
      description: 'Get all your questions answered before making a commitment'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Demo request submitted:', {
      selectedService,
      preferredTime,
      companySize,
      demoType
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Schedule a Demo - Zion Tech Group</title>
        <meta name="description" content="Schedule a personalized demo of Zion Tech Group's AI, cybersecurity, cloud, and digital transformation solutions. See our technology in action." />
        <meta name="keywords" content="schedule demo, technology demo, AI demo, cybersecurity demo, cloud demo, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-6">
              <Video className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Schedule a Demo
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Experience our cutting-edge technology solutions firsthand. Schedule a personalized 
              demonstration and see how Zion Tech Group can transform your business.
            </p>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">500+</div>
              <div className="text-slate-300 text-sm">Demos Delivered</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">98%</div>
              <div className="text-slate-300 text-sm">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">24h</div>
              <div className="text-slate-300 text-sm">Response Time</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">100%</div>
              <div className="text-slate-300 text-sm">Customized</div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Schedule a Demo?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-slate-300 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Available Demo Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.id} className="bg-white/5 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="mb-4">
                  <span className="inline-block px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded mb-2">
                    {service.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-slate-300 text-sm mb-3">{service.description}</p>
                  <div className="flex items-center text-slate-400 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {service.demoDuration}
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                      <span className="text-slate-300 text-xs">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button
                  onClick={() => setSelectedService(service.id)}
                  className={`w-full py-2 px-4 rounded-lg transition-all duration-200 ${
                    selectedService === service.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  {selectedService === service.id ? 'Selected' : 'Select for Demo'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Demo Types
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {demoTypes.map((type) => (
              <div key={type.id} className="bg-white/5 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white text-center mb-2">{type.name}</h3>
                <p className="text-slate-300 text-center text-sm mb-4">{type.description}</p>
                
                <button
                  onClick={() => setDemoType(type.id)}
                  className={`w-full py-2 px-4 rounded-lg transition-all duration-200 ${
                    demoType === type.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  {demoType === type.id ? 'Selected' : 'Choose This Type'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Scheduling Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Schedule Your Demo
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Service Selection */}
              <div>
                <label className="block text-white font-semibold mb-2">
                  Select Service for Demo
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  required
                >
                  <option value="">Choose a service...</option>
                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.name} - {service.category}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Demo Type */}
              <div>
                <label className="block text-white font-semibold mb-2">
                  Demo Type
                </label>
                <select
                  value={demoType}
                  onChange={(e) => setDemoType(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  required
                >
                  {demoTypes.map((type) => (
                    <option key={type.id} value={type.id}>
                      {type.name}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Company Size */}
              <div>
                <label className="block text-white font-semibold mb-2">
                  Company Size
                </label>
                <select
                  value={companySize}
                  onChange={(e) => setCompanySize(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  required
                >
                  <option value="">Select company size...</option>
                  {companySizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Preferred Time */}
              <div>
                <label className="block text-white font-semibold mb-2">
                  Preferred Time Slot
                </label>
                <select
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  required
                >
                  <option value="">Select preferred time...</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Enter your company name"
                  required
                />
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-2">
                  Additional Requirements
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Tell us about your specific needs or questions..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-semibold"
              >
                Schedule Demo
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            What to Expect
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Confirmation & Preparation</h3>
                <p className="text-slate-300">You'll receive a confirmation email with demo details and any preparation materials needed.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Interactive Demo Session</h3>
                <p className="text-slate-300">Our experts will walk you through the solution, answer questions, and show real-world applications.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Follow-up & Next Steps</h3>
                <p className="text-slate-300">After the demo, we'll provide additional resources and discuss next steps for implementation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to See Our Solutions in Action?
            </h2>
            <p className="text-slate-300 mb-6">
              Schedule your demo today and discover how Zion Tech Group can transform your business 
              with cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Contact Sales Team
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-all duration-200"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScheduleDemo;