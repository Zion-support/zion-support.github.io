import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Database, 
  Globe, 
  Zap, 
  TrendingUp, 
  Users, 
  Lock, 
  Cpu,
  Smartphone,
  Building2,
  Car,
  Heart,
  DollarSign,
  Leaf,
  Network,
  Code,
  BarChart3,
  Target
} from 'lucide-react';

const InnovativeServicesShowcase2030: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe },
    { id: 'micro-saas', name: 'Micro SaaS', icon: Cpu },
    { id: 'ai-solutions', name: 'AI Solutions', icon: Brain },
    { id: 'it-services', name: 'IT Services', icon: Cloud },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'healthcare', name: 'Healthcare Tech', icon: Heart },
    { id: 'fintech', name: 'FinTech', icon: DollarSign },
    { id: 'sustainability', name: 'Sustainability', icon: Leaf }
  ];

  const services = [
    // Micro SaaS Services
    {
      id: 1,
      name: "AI-Powered Supply Chain Risk Intelligence Platform",
      category: "micro-saas",
      description: "Real-time supply chain risk monitoring and predictive analytics platform that identifies potential disruptions before they occur.",
      price: "$899/month",
      features: ["Real-time risk monitoring", "Predictive disruption alerts", "Supplier health scoring", "Geopolitical risk analysis"],
      benefits: ["40% reduction in supply chain disruptions", "Proactive risk management", "Improved supplier relationships"],
      marketPrice: "$750 - $1,200/month",
      competitors: ["Resilinc", "RiskMethods", "SupplyShift", "EcoVadis"],
      roi: "300% within 8 months",
      icon: Network,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      name: "Quantum-Enhanced Financial Trading Analytics Platform",
      category: "micro-saas",
      description: "Next-generation financial trading platform leveraging quantum computing principles for ultra-fast market analysis.",
      price: "$1,499/month",
      features: ["Quantum-inspired algorithms", "Real-time market analysis", "Pattern recognition AI", "Risk assessment engine"],
      benefits: ["60% faster market analysis", "Improved trading accuracy", "Enhanced risk management"],
      marketPrice: "$1,200 - $2,000/month",
      competitors: ["Bloomberg Terminal", "Thomson Reuters", "FactSet", "Refinitiv"],
      roi: "500% within 12 months",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      name: "AI-Powered Healthcare Predictive Analytics Platform",
      category: "healthcare",
      description: "Advanced healthcare analytics platform that predicts patient outcomes and optimizes treatment plans.",
      price: "$599/month",
      features: ["Patient outcome prediction", "Treatment optimization", "Disease progression modeling", "Resource allocation"],
      benefits: ["25% improvement in patient outcomes", "Reduced healthcare costs", "Better resource utilization"],
      marketPrice: "$500 - $800/month",
      competitors: ["Epic", "Cerner", "Allscripts", "Athenahealth"],
      roi: "350% within 10 months",
      icon: Heart,
      color: "from-red-500 to-pink-500"
    },
    {
      id: 4,
      name: "Autonomous Cybersecurity Threat Intelligence Platform",
      category: "cybersecurity",
      description: "Self-learning cybersecurity platform that autonomously detects, analyzes, and responds to cyber threats.",
      price: "$1,299/month",
      features: ["Autonomous threat detection", "Real-time response automation", "Behavioral analysis", "Threat intelligence sharing"],
      benefits: ["99.9% threat detection rate", "90% faster incident response", "Reduced security team workload"],
      marketPrice: "$1,000 - $1,500/month",
      competitors: ["CrowdStrike", "SentinelOne", "Palo Alto Networks", "FireEye"],
      roi: "400% within 6 months",
      icon: Shield,
      color: "from-purple-500 to-indigo-500"
    },
    {
      id: 5,
      name: "Sustainable Energy Management & Optimization Platform",
      category: "sustainability",
      description: "Comprehensive energy management platform that optimizes energy consumption and integrates renewable sources.",
      price: "$399/month",
      features: ["Real-time energy monitoring", "Renewable energy integration", "Predictive maintenance", "Carbon footprint tracking"],
      benefits: ["30% reduction in energy costs", "Improved sustainability scores", "Enhanced regulatory compliance"],
      marketPrice: "$300 - $500/month",
      competitors: ["Schneider Electric", "Siemens", "Honeywell", "Johnson Controls"],
      roi: "250% within 12 months",
      icon: Leaf,
      color: "from-green-600 to-teal-500"
    },
    // IT Services
    {
      id: 6,
      name: "Quantum-Enhanced Cloud Infrastructure & DevOps Platform",
      category: "it-services",
      description: "Next-generation cloud infrastructure platform leveraging quantum computing principles for ultra-fast deployment.",
      price: "$2,500/month",
      features: ["Quantum-inspired resource optimization", "Autonomous DevOps pipelines", "Intelligent auto-scaling", "Multi-cloud orchestration"],
      benefits: ["80% faster deployment times", "60% reduction in infrastructure costs", "99.99% uptime guarantee"],
      marketPrice: "$2,000 - $3,500/month",
      competitors: ["AWS", "Microsoft Azure", "Google Cloud", "IBM Cloud"],
      roi: "400% within 12 months",
      icon: Cloud,
      color: "from-blue-600 to-sky-500"
    },
    {
      id: 7,
      name: "AI-Powered Digital Twin & IoT Integration Platform",
      category: "it-services",
      description: "Comprehensive digital twin platform creating real-time virtual replicas of physical assets.",
      price: "$899/month",
      features: ["Real-time asset monitoring", "Predictive maintenance alerts", "3D visualization dashboard", "IoT sensor integration"],
      benefits: ["35% reduction in maintenance costs", "50% fewer unplanned outages", "Improved asset utilization"],
      marketPrice: "$700 - $1,200/month",
      competitors: ["Siemens", "GE Digital", "PTC", "Dassault Systèmes"],
      roi: "300% within 10 months",
      icon: Building2,
      color: "from-orange-500 to-red-500"
    },
    // AI Solutions
    {
      id: 8,
      name: "Autonomous AI Business Intelligence & Decision Engine",
      category: "ai-solutions",
      description: "Self-learning AI platform that autonomously analyzes business data and makes strategic decisions.",
      price: "$3,200/month",
      features: ["Autonomous data analysis", "Predictive business modeling", "Strategic decision automation", "Real-time market intelligence"],
      benefits: ["90% faster decision-making", "40% improvement in business outcomes", "Automated strategic planning"],
      marketPrice: "$2,500 - $4,000/month",
      competitors: ["Tableau", "Power BI", "Qlik", "SAS"],
      roi: "450% within 10 months",
      icon: Brain,
      color: "from-violet-500 to-purple-600"
    },
    {
      id: 9,
      name: "Quantum-Enhanced Machine Learning & Neural Network Platform",
      category: "ai-solutions",
      description: "Breakthrough machine learning platform leveraging quantum computing principles for unprecedented AI capabilities.",
      price: "$4,500/month",
      features: ["Quantum-enhanced training", "Neural network optimization", "Automated model selection", "Real-time learning"],
      benefits: ["100x faster model training", "Superior model accuracy", "Reduced computational costs"],
      marketPrice: "$3,500 - $6,000/month",
      competitors: ["Google AI", "OpenAI", "Anthropic", "Microsoft AI"],
      roi: "600% within 15 months",
      icon: Cpu,
      color: "from-indigo-500 to-blue-600"
    },
    {
      id: 10,
      name: "AI-Powered Autonomous Customer Experience Platform",
      category: "ai-solutions",
      description: "Intelligent customer experience platform that autonomously manages customer interactions and predicts needs.",
      price: "$899/month",
      features: ["Autonomous customer service", "Predictive customer needs", "Personalization engine", "Multi-channel integration"],
      benefits: ["85% improvement in customer satisfaction", "60% reduction in support costs", "24/7 customer service"],
      marketPrice: "$700 - $1,200/month",
      competitors: ["Zendesk", "Intercom", "Drift", "Crisp"],
      roi: "320% within 8 months",
      icon: Users,
      color: "from-pink-500 to-rose-500"
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Innovative Services 2030
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover Zion Tech Group's cutting-edge micro SaaS, AI solutions, and IT services that are revolutionizing industries worldwide. 
              Experience the future of technology with our innovative, intelligent, and diversified service portfolio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started Today
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
                onClick={() => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Services
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <Icon className="w-5 h-5" />
                {category.name}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Services Grid */}
      <div id="services-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-blue-400">{service.price}</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>

                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2 text-sm text-gray-400 mb-6">
                  <div className="flex justify-between">
                    <span>Market Price:</span>
                    <span className="text-white">{service.marketPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ROI:</span>
                    <span className="text-green-400">{service.roi}</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                  onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Started
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Why Choose Zion Tech Group */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Zion Tech Group</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're not just another technology company. We're your strategic partner in digital transformation, 
            offering cutting-edge solutions that drive real business value and competitive advantage.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Zap,
              title: "Innovation First",
              description: "Cutting-edge technology solutions that keep you ahead of the competition"
            },
            {
              icon: Target,
              title: "Proven Results",
              description: "Track record of delivering measurable ROI and business transformation"
            },
            {
              icon: Users,
              title: "Expert Team",
              description: "World-class engineers, architects, and consultants with deep industry expertise"
            },
            {
              icon: Shield,
              title: "Enterprise Security",
              description: "Bank-level security and compliance standards for your peace of mind"
            }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-8 md:p-12 border border-white/10"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Let's discuss how our innovative services can drive your digital transformation and create sustainable competitive advantages.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Phone</p>
                    <p className="text-white font-semibold">+1 302 464 0950</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Website</p>
                    <p className="text-white font-semibold">https://ziontechgroup.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Address</p>
                    <p className="text-white font-semibold">364 E Main St STE 1008<br />Middletown DE 19709</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get Started Today</h3>
              <div className="space-y-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                  onClick={() => window.open('mailto:kleber@ziontechgroup.com', '_blank')}
                >
                  Email Us
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300"
                  onClick={() => window.open('tel:+13024640950', '_blank')}
                >
                  Call Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full border-2 border-white/30 text-white py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
                  onClick={() => window.open('https://ziontechgroup.com', '_blank')}
                >
                  Visit Website
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don't Wait to Transform Your Business
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            The future of technology is here. Join thousands of organizations already leveraging our innovative solutions 
            to stay ahead of the curve and drive sustainable growth.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-lg font-semibold text-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Your Transformation Today
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default InnovativeServicesShowcase2030;