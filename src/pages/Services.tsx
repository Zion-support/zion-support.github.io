import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Heart, 
  Shield, 
  Atom, 
  Cpu, 
  Building2, 
  BarChart3, 
  Server, 
  Cloud, 
  ShoppingCart,
  Rocket,
  Zap,
  Target,
  Users,
  Globe,
  Code,
  PenTool,
  Database,
  Network,
  Lock,
  Eye,
  TrendingUp,
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const Services: React.FC = () => {
  const serviceCategories = [
    {
      title: 'AI & Business Intelligence',
      description: 'Transform your business with cutting-edge AI solutions',
      icon: Brain,
      color: 'from-purple-500 to-cyan-500',
      services: [
        {
          name: 'AI Business Intelligence',
          description: 'Machine learning and data science solutions',
          href: '/services/ai-business-intelligence',
          featured: true,
          badge: 'Popular'
        },
        {
          name: 'AI Legal Document Analysis',
          description: 'Automated legal document processing and analysis',
          href: '/services/ai-legal-document-analysis',
          featured: false
        },
        {
          name: 'AI Healthcare Analytics',
          description: 'Healthcare data insights and predictive analytics',
          href: '/services/ai-healthcare-analytics',
          featured: false
        },
        {
          name: 'AI Financial Trading',
          description: 'AI-powered financial trading and analysis',
          href: '/services/ai-financial-trading',
          featured: false
        }
      ]
    },
    {
      title: 'AI & Operations',
      description: 'Streamline operations with intelligent automation',
      icon: Rocket,
      color: 'from-blue-500 to-indigo-500',
      services: [
        {
          name: 'AI Project Management',
          description: 'Intelligent project planning and execution',
          href: '/services/ai-project-management',
          featured: true
        },
        {
          name: 'AI Workflow Automation',
          description: 'Automate complex business workflows',
          href: '/services/ai-workflow-automation',
          featured: false
        },
        {
          name: 'AI Predictive Maintenance',
          description: 'Predictive maintenance for industrial systems',
          href: '/services/ai-predictive-maintenance',
          featured: false
        },
        {
          name: 'AI Supply Chain Optimization',
          description: 'Optimize supply chain with AI insights',
          href: '/services/ai-supply-chain-optimization',
          featured: false
        }
      ]
    },
    {
      title: 'AI & Marketing',
      description: 'Revolutionize your marketing with AI-powered tools',
      icon: Target,
      color: 'from-pink-500 to-red-500',
      services: [
        {
          name: 'AI Marketing Automation',
          description: 'Intelligent marketing campaign automation',
          href: '/services/ai-marketing-automation',
          featured: true
        },
        {
          name: 'AI Content Creation',
          description: 'AI-powered content generation and optimization',
          href: '/services/ai-content-creation',
          featured: false
        },
        {
          name: 'AI Customer Support',
          description: 'Automated customer support with AI',
          href: '/services/ai-customer-support-automation',
          featured: false
        }
      ]
    },
    {
      title: 'Advanced Technologies',
      description: 'Cutting-edge technology solutions for the future',
      icon: Atom,
      color: 'from-indigo-500 to-purple-500',
      services: [
        {
          name: 'Quantum Computing',
          description: 'Quantum computing solutions and consulting',
          href: '/services/quantum-computing',
          featured: true,
          badge: 'Cutting Edge'
        },
        {
          name: 'IoT Edge Computing',
          description: 'IoT and edge computing infrastructure',
          href: '/services/iot-edge-computing',
          featured: false
        },
        {
          name: 'Digital Twin Platform',
          description: 'Digital twin solutions for complex systems',
          href: '/services/digital-twin',
          featured: false
        }
      ]
    },
    {
      title: 'Enterprise Infrastructure',
      description: 'Robust infrastructure solutions for enterprise needs',
      icon: Server,
      color: 'from-gray-500 to-blue-500',
      services: [
        {
          name: 'IT Infrastructure',
          description: 'Enterprise IT infrastructure solutions',
          href: '/services/it-infrastructure',
          featured: true
        },
        {
          name: 'Cloud DevOps',
          description: 'Cloud infrastructure and DevOps services',
          href: '/services/cloud-devops',
          featured: false
        },
        {
          name: 'Data Analytics',
          description: 'Business intelligence and analytics',
          href: '/services/data-analytics',
          featured: false
        }
      ]
    },
    {
      title: 'Micro SaaS Products',
      description: 'Affordable AI-powered solutions for small businesses',
      icon: ShoppingCart,
      color: 'from-orange-500 to-red-500',
      services: [
        {
          name: 'Micro SaaS Platform',
          description: 'AI automations with transparent pricing',
          href: '/services/micro-saas',
          featured: true,
          badge: 'Starting at $99/month'
        }
      ]
    }
  ];

  const featuredServices = [
    {
      name: 'AI Business Intelligence',
      description: 'Transform your business data into actionable insights with our advanced AI-powered business intelligence platform.',
      href: '/services/ai-business-intelligence',
      icon: Brain,
      color: 'from-purple-500 to-cyan-500',
      features: ['Machine Learning', 'Predictive Analytics', 'Real-time Dashboards', 'Custom Reports']
    },
    {
      name: 'AI Healthcare Platform',
      description: 'Revolutionize healthcare delivery with AI-powered diagnostics, patient monitoring, and predictive analytics.',
      href: '/services/ai-healthcare-platform',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      features: ['Medical Diagnostics', 'Patient Monitoring', 'Predictive Analytics', 'HIPAA Compliant']
    },
    {
      name: 'Quantum Computing Solutions',
      description: 'Stay ahead of the curve with our cutting-edge quantum computing solutions for complex problem-solving.',
      href: '/services/quantum-computing',
      icon: Atom,
      color: 'from-indigo-500 to-purple-500',
      features: ['Quantum Algorithms', 'Optimization', 'Research & Development', 'Consulting']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI-Powered
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge AI solutions, intelligent automation, and advanced technology services designed for the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200 hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Featured Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Featured Services</h2>
          <p className="text-xl text-gray-300">Our most popular and innovative solutions</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-all duration-200 hover:shadow-xl"
            >
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <div className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    {feature}
                  </div>
                ))}
              </div>
              <Link
                to={service.href}
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-200"
              >
                Learn More
                <Rocket className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">All Services</h2>
          <p className="text-xl text-gray-300">Comprehensive solutions organized by category</p>
        </motion.div>

        <div className="space-y-12">
          {serviceCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * categoryIndex }}
              className="bg-gray-800 rounded-xl p-8"
            >
              <div className="flex items-center mb-8">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mr-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                  <p className="text-gray-400">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className="group block p-6 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all duration-200 hover:shadow-lg"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors duration-200">
                        {service.name}
                      </h4>
                      {service.badge && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {service.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                    <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors duration-200">
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI-powered services can help you achieve your business goals and stay ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-quote"
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105"
            >
              Get Free Quote
            </Link>
            <Link
              to="/demo"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Schedule Demo
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
