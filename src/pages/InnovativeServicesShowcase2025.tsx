import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Zap, 
  Rocket, 
  Users, 
  Globe, 
  Target, 
  TrendingUp,
  CheckCircle,
  Star,
  Award,
  Heart,
  Truck,
  Package,
  Warehouse,
  Calendar,
  MessageSquare,
  BarChart3,
  Cpu,
  Network,
  Database,
  Cloud,
  Smartphone,
  Server,
  Lock,
  Eye,
  Route,
  Clock,
  DollarSign,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function InnovativeServicesShowcase2025() {
  const featuredServices = [
    {
      category: 'AI & Analytics',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      services: [
        {
          name: 'AI Project Management',
          description: 'Revolutionary AI-powered project management platform that automates task prioritization, optimizes team collaboration, and provides predictive insights for successful project delivery.',
          href: '/services/ai-project-management',
          features: ['AI task prioritization', 'Smart team collaboration', 'Predictive risk management', 'Real-time analytics'],
          pricing: 'Starting at $49/month',
          cta: 'Start Free Trial'
        },
        {
          name: 'AI Customer Success Platform',
          description: 'AI-powered customer success platform that automates customer engagement, predicts churn risk, and drives customer retention and growth.',
          href: '/services/ai-customer-success-platform',
          features: ['AI-powered insights', 'Proactive monitoring', 'Automated engagement', 'Predictive analytics'],
          pricing: 'Starting at $99/month',
          cta: 'Start Free Trial'
        },
        {
          name: 'AI Supply Chain Optimization',
          description: 'AI-powered supply chain optimization platform that automates demand forecasting, route optimization, and inventory management for maximum efficiency.',
          href: '/services/ai-supply-chain-optimization',
          features: ['AI demand forecasting', 'Route optimization', 'Smart inventory', 'Risk management'],
          pricing: 'Starting at $299/month',
          cta: 'Start Free Trial'
        }
      ]
    },
    {
      category: 'Cybersecurity & Compliance',
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      services: [
        {
          name: 'AI Cybersecurity Platform',
          description: 'Enterprise-grade AI-powered cybersecurity platform providing real-time threat detection, automated incident response, and comprehensive protection for modern organizations.',
          href: '/services/ai-cybersecurity-platform',
          features: ['AI threat detection', 'Zero-day protection', '24/7 monitoring', 'Automated response'],
          pricing: 'Starting at $199/month',
          cta: 'Start Free Trial'
        },
        {
          name: 'AI Compliance Copilot',
          description: 'AI-powered compliance automation that ensures your organization meets all regulatory requirements with intelligent monitoring and reporting.',
          href: '/services/ai-compliance-copilot',
          features: ['Regulatory compliance', 'Automated monitoring', 'Risk assessment', 'Audit trails'],
          pricing: 'Starting at $149/month',
          cta: 'Start Free Trial'
        }
      ]
    },
    {
      category: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-600',
      services: [
        {
          name: 'Cloud FinOps Optimizer',
          description: 'Intelligent cloud cost optimization platform that automatically identifies savings opportunities and optimizes resource allocation.',
          href: '/services/cloud-finops-optimizer',
          features: ['Cost optimization', 'Resource management', 'Automated scaling', 'Budget tracking'],
          pricing: 'Starting at $199/month',
          cta: 'Start Free Trial'
        },
        {
          name: 'Edge Computing Platform',
          description: 'Next-generation edge computing platform that brings AI and analytics closer to data sources for real-time processing.',
          href: '/services/edge-computing-platform',
          features: ['Edge AI', 'Real-time processing', 'Low latency', 'Scalable architecture'],
          pricing: 'Starting at $299/month',
          cta: 'Start Free Trial'
        }
      ]
    },
    {
      category: 'Digital Innovation',
      icon: Rocket,
      color: 'from-green-500 to-emerald-600',
      services: [
        {
          name: 'Digital Twin Solutions',
          description: 'Advanced digital twin technology for virtual simulation, monitoring, and optimization of physical systems.',
          href: '/services/digital-twin',
          features: ['Virtual simulation', 'Real-time monitoring', 'Predictive maintenance', 'Performance optimization'],
          pricing: 'Starting at $399/month',
          cta: 'Start Free Trial'
        },
        {
          name: 'IoT Edge Computing',
          description: 'Comprehensive IoT edge computing solutions for smart device networks and real-time data processing.',
          href: '/services/iot-edge',
          features: ['Smart device networks', 'Edge processing', 'Real-time analytics', 'Scalable IoT'],
          pricing: 'Starting at $249/month',
          cta: 'Start Free Trial'
        }
      ]
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Innovative Services Showcase 2025 - Zion Tech Group"
        description="Discover our cutting-edge AI-powered services including project management, cybersecurity, supply chain optimization, and more. Transform your business with Zion Tech Group's innovative solutions."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              <span>2025 Innovation Showcase</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Innovative Services
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                That Define the Future
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover our comprehensive suite of AI-powered services designed to transform 
              your business operations and drive unprecedented growth in 2025 and beyond.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                Explore All Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our most innovative and transformative services designed to address 
              the biggest challenges facing modern businesses.
            </p>
          </motion.div>

          <div className="space-y-16">
            {featuredServices.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8"
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">{category.category}</h3>
                    <p className="text-gray-300">Cutting-edge solutions for modern challenges</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={serviceIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                      className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group"
                    >
                      <div className="mb-4">
                        <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {service.name}
                        </h4>
                        <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                      </div>

                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h5>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-2 text-xs text-gray-300">
                              <CheckCircle className="w-3 h-3 text-cyan-500 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <div className="text-sm text-gray-400 mb-2">Starting Price:</div>
                        <div className="text-lg font-bold text-white">{service.pricing}</div>
                      </div>

                      <div className="flex space-x-3">
                        <motion.a
                          href={service.href}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg text-sm font-semibold text-center hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                        >
                          {service.cta}
                        </motion.a>
                        <motion.a
                          href={service.href}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="border border-cyan-500 text-cyan-400 py-2 px-4 rounded-lg text-sm font-semibold hover:bg-cyan-500/10 transition-all duration-300"
                        >
                          Learn More
                        </motion.a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our experts help you choose the right services and implement 
              solutions that drive real results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>{contactInfo.phone}</span>
                </a>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>{contactInfo.email}</span>
                </a>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <motion.a
                  href="/request-quote"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg text-center font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                >
                  Request Custom Quote
                </motion.a>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block w-full border border-cyan-500 text-cyan-400 py-3 px-4 rounded-lg text-center font-semibold hover:bg-cyan-500/10 transition-all duration-300"
                >
                  Schedule Consultation
                </motion.a>
              </div>
            </div>
          </div>

          <div className="text-center">
            <motion.a
              href="/services-catalog"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              <span>View Complete Services Catalog</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
}