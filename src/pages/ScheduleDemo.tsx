import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  Users, 
  Video, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle,
  Star,
  Shield,
  Zap,
  Brain,
  Cloud,
  ShoppingCart,
  Target,
  BarChart3,
  MessageCircle,
  FileText,
  Settings,
  Truck,
  Building,
  Car,
  Factory,
  City,
  ArrowUpRight,
  Play,
  MailIcon,
  Phone as PhoneIcon,
  MapPin as MapPinIcon,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Github,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ScheduleDemo: React.FC = () => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [demoType, setDemoType] = useState('video');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    attendees: 1,
    message: ''
  });

  const services = [
    {
      id: 'ai-enterprise-orchestrator',
      name: 'AI Enterprise Orchestrator',
      description: 'Multi-agent AI coordination & workflow automation',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      duration: '45 minutes',
      features: ['Multi-agent coordination', 'Workflow automation', 'Process optimization']
    },
    {
      id: 'ai-business-intelligence',
      name: 'AI Business Intelligence',
      description: 'Machine Learning & Data Science solutions',
      icon: BarChart3,
      color: 'from-blue-600 to-cyan-600',
      duration: '30 minutes',
      features: ['Predictive analytics', 'Data visualization', 'ML models']
    },
    {
      id: 'ai-cybersecurity-suite',
      name: 'AI Cybersecurity Suite',
      description: 'AI-Powered Threat Detection & Response',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      duration: '40 minutes',
      features: ['Threat detection', 'Automated response', 'Compliance']
    },
    {
      id: 'quantum-ai-platform',
      name: 'Quantum AI Platform',
      description: 'Next-Generation Quantum Computing',
      icon: Zap,
      color: 'from-indigo-600 to-purple-600',
      duration: '60 minutes',
      features: ['Quantum algorithms', 'Hybrid computing', 'Research support']
    },
    {
      id: 'cloud-devops',
      name: 'Cloud & DevOps',
      description: 'Infrastructure & Automation solutions',
      icon: Cloud,
      color: 'from-blue-500 to-indigo-500',
      duration: '35 minutes',
      features: ['Cloud migration', 'CI/CD pipelines', 'Monitoring']
    },
    {
      id: 'micro-saas-solutions',
      name: 'Micro SaaS Solutions',
      description: 'Productized SaaS for specific niches',
      icon: ShoppingCart,
      color: 'from-orange-500 to-red-500',
      duration: '25 minutes',
      features: ['Custom development', 'White-label options', 'Scalability']
    }
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  const demoTypes = [
    { id: 'video', name: 'Video Call', icon: Video, description: 'Zoom, Teams, or Google Meet' },
    { id: 'phone', name: 'Phone Call', icon: Phone, description: 'Audio-only consultation' },
    { id: 'onsite', name: 'On-site Visit', icon: MapPin, description: 'In-person demonstration' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Demo request submitted:', {
      service: selectedService,
      date: selectedDate,
      time: selectedTime,
      type: demoType,
      ...formData
    });
    // Show success message or redirect
  };

  const selectedServiceData = services.find(s => s.id === selectedService);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-white dark:bg-slate-900 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Schedule a Demo
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              Experience the power of our AI and technology solutions firsthand. 
              Book a personalized demonstration tailored to your business needs.
            </motion.p>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Demo Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Book Your Demo
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Service Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Select Service *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => setSelectedService(service.id)}
                        className={`p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                          selectedService === service.id
                            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                            : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg bg-gradient-to-br ${service.color} text-white`}>
                            <service.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white">
                              {service.name}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {service.duration} • {service.description}
                            </p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Demo Type Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Demo Type *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {demoTypes.map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setDemoType(type.id)}
                        className={`p-4 rounded-xl border-2 text-center transition-all duration-200 ${
                          demoType === type.id
                            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                            : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                        }`}
                      >
                        <type.icon className="w-8 h-8 mx-auto mb-2 text-gray-600 dark:text-gray-400" />
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {type.name}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {type.description}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Date and Time Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Preferred Time *
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
                      required
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="attendees" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Number of Attendees
                    </label>
                    <select
                      id="attendees"
                      name="attendees"
                      value={formData.attendees}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'person' : 'people'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Tell us about your specific needs, questions, or any particular aspects you'd like us to focus on during the demo..."
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Schedule Demo
                </button>
              </form>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              {/* Selected Service Info */}
              {selectedServiceData && (
                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Demo Details
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${selectedServiceData.color} text-white`}>
                        <selectedServiceData.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {selectedServiceData.name}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Duration: {selectedServiceData.duration}
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-gray-900 dark:text-white mb-2">What you'll see:</h5>
                      <ul className="space-y-2">
                        {selectedServiceData.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Why Choose Zion Tech Group */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Why Choose Zion Tech Group?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg">
                      <Star className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Expert Team</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Industry veterans with 10+ years experience</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                      <Shield className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Proven Results</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Successfully delivered 500+ projects</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                      <Zap className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Cutting-Edge Tech</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Latest AI and emerging technologies</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Need Help?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <PhoneIcon className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MailIcon className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-600 dark:text-gray-400">demos@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPinIcon className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-600 dark:text-gray-400">Available worldwide</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Zion Tech Group</h4>
              <p className="text-gray-400 mb-4">
                Leading provider of AI, infrastructure, and emerging technology solutions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/ai-services" className="hover:text-white transition-colors">AI Services</Link></li>
                <li><Link to="/it-services" className="hover:text-white transition-colors">IT Services</Link></li>
                <li><Link to="/micro-saas" className="hover:text-white transition-colors">Micro SaaS</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">All Services</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/team" className="hover:text-white transition-colors">Our Team</Link></li>
                <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center gap-2">
                  <PhoneIcon className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <MailIcon className="w-4 h-4" />
                  <span>info@ziontechgroup.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPinIcon className="w-4 h-4" />
                  <span>123 Tech Street, Innovation City</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ScheduleDemo;