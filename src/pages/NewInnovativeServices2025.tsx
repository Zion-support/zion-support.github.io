import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, Shield, Cloud, Server, BarChart3, Users, ShoppingCart, 
  MessageCircle, HelpCircle, DollarSign, Target, TrendingUp, 
  Atom, Network, Eye, PenTool, Heart, Building, Truck, 
  Lock, Smartphone, Mail, Video, Satellite, Leaf, Code,
  Zap, Star, Rocket, Globe, Cpu, ArrowRight, FileText,
  Workflow, Database, AlertTriangle, Package, Route, Factory,
  Calculator, Graph
} from 'lucide-react';

const NewInnovativeServices2025: React.FC = () => {
  const newServices = [
    {
      id: 'ai-workflow-orchestrator',
      title: 'AI Workflow Orchestrator',
      description: 'Transform business operations with AI-powered workflow automation. Discover, optimize, and automate complex business processes.',
      icon: Workflow,
      category: 'AI & Automation',
      price: 'From $299/month',
      features: [
        'Intelligent Process Mapping',
        'Smart Workflow Automation',
        'Predictive Optimization',
        'Adaptive Learning'
      ],
      benefits: [
        'Reduce manual work by up to 80%',
        'Improve process efficiency by 60%',
        'Eliminate human errors',
        'Scale operations without additional staff'
      ],
      href: '/services/ai-workflow-orchestrator',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'ai-data-governance-platform',
      title: 'AI Data Governance Platform',
      description: 'Transform data governance with AI-powered compliance automation. Ensure data privacy, security, and regulatory compliance.',
      icon: Shield,
      category: 'AI & Compliance',
      price: 'From $399/month',
      features: [
        'Intelligent Data Classification',
        'Advanced Access Control',
        'Real-time Monitoring',
        'Data Lineage Tracking'
      ],
      benefits: [
        'Reduce compliance costs by 70%',
        'Automate 90% of governance tasks',
        'Real-time compliance monitoring',
        'Improve data security by 85%'
      ],
      href: '/services/ai-data-governance-platform',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'ai-customer-experience-analytics',
      title: 'AI Customer Experience Analytics',
      description: 'Transform customer insights with AI-powered analytics. Understand emotions, predict satisfaction, and optimize experiences.',
      icon: BarChart3,
      category: 'AI & Analytics',
      price: 'From $249/month',
      features: [
        'Real-time Sentiment Analysis',
        'Customer Journey Mapping',
        'Predictive Satisfaction',
        'Behavioral Analytics'
      ],
      benefits: [
        'Increase customer satisfaction by 45%',
        'Reduce customer churn by 60%',
        'Improve response time by 70%',
        'Boost customer lifetime value by 50%'
      ],
      href: '/services/ai-customer-experience-analytics',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'ai-supply-chain-optimization',
      title: 'AI Supply Chain Optimization',
      description: 'Transform supply chain with AI-powered optimization. Reduce costs, improve efficiency, and gain real-time visibility.',
      icon: Truck,
      category: 'AI & Logistics',
      price: 'From $599/month',
      features: [
        'Intelligent Route Optimization',
        'Global Supply Chain Visibility',
        'Predictive Demand Forecasting',
        'Smart Inventory Management'
      ],
      benefits: [
        'Reduce supply chain costs by 25-40%',
        'Improve delivery performance by 60%',
        'Reduce inventory costs by 30%',
        'Increase supplier performance by 45%'
      ],
      href: '/services/ai-supply-chain-optimization',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'ai-financial-risk-management',
      title: 'AI Financial Risk Management',
      description: 'Transform financial risk management with AI-powered analytics. Monitor risks in real-time and optimize portfolio performance.',
      icon: Shield,
      category: 'AI & Finance',
      price: 'From $799/month',
      features: [
        'Real-time Risk Monitoring',
        'Predictive Risk Analytics',
        'Intelligent Risk Alerts',
        'Portfolio Optimization'
      ],
      benefits: [
        'Reduce portfolio volatility by 30-40%',
        'Improve risk-adjusted returns by 25%',
        'Early warning system for disruptions',
        'Automated compliance monitoring'
      ],
      href: '/services/ai-financial-risk-management',
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  const categories = [
    {
      name: 'AI & Automation',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500',
      count: 1
    },
    {
      name: 'AI & Compliance',
      icon: Shield,
      color: 'from-green-500 to-emerald-500',
      count: 1
    },
    {
      name: 'AI & Analytics',
      icon: BarChart3,
      color: 'from-purple-500 to-pink-500',
      count: 1
    },
    {
      name: 'AI & Logistics',
      icon: Truck,
      color: 'from-orange-500 to-red-500',
      count: 1
    },
    {
      name: 'AI & Finance',
      icon: DollarSign,
      color: 'from-emerald-500 to-teal-500',
      count: 1
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full border border-indigo-400/30 mb-6">
              <Rocket className="w-5 h-5 text-indigo-400 mr-2" />
              <span className="text-indigo-300 font-medium">2025 New Services</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              New Innovative
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400">
                Services 2025
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover our latest AI-powered micro SAAS services designed to transform your business operations, 
              enhance customer experiences, and drive innovation across all industries.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-400 hover:to-purple-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-indigo-500/20">
                Explore Services
              </button>
              <button className="px-8 py-4 border border-indigo-400/30 text-indigo-300 font-semibold rounded-lg hover:bg-indigo-400/10 transition-all duration-200">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our comprehensive range of AI-powered solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-indigo-400/30 transition-all duration-200 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{category.name}</h3>
                <p className="text-gray-400 text-sm">{category.count} service{category.count !== 1 ? 's' : ''}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Latest Innovative Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Cutting-edge AI solutions to transform your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-indigo-400/30 transition-all duration-200"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mr-4`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="text-sm text-gray-400">{service.category}</span>
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <span className="text-lg font-bold text-white">{service.price}</span>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-xs text-gray-400 flex items-center">
                        <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-xs text-gray-400 flex items-center">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={service.href}
                  className={`w-full px-4 py-3 bg-gradient-to-r ${service.color} text-white font-semibold rounded-lg hover:scale-105 transition-all duration-200 text-center block`}
                >
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Explore our innovative AI-powered services and discover how they can revolutionize your operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-400 hover:to-purple-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-indigo-500/20">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-indigo-400/30 text-indigo-300 font-semibold rounded-lg hover:bg-indigo-400/10 transition-all duration-200">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Get in Touch
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-gray-300">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p>+1 302 464 0950</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p>kleber@ziontechgroup.com</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Website</h3>
                <a href="https://ziontechgroup.com" className="text-indigo-400 hover:text-indigo-300">
                  ziontechgroup.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NewInnovativeServices2025;