import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Home, 
  Truck, 
  Cloud, 
  Cpu, 
  Globe, 
  Rocket, 
  Zap, 
  Users, 
  DollarSign, 
  CheckCircle, 
  ArrowRight,
  Star,
  TrendingUp,
  Award,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const ComprehensiveServicesShowcase2026: React.FC = () => {
  const serviceCategories = [
    {
      title: 'AI-Powered Analytics & Intelligence',
      description: 'Transform your data into actionable insights with advanced AI algorithms',
      color: 'from-purple-500 to-indigo-500',
      services: [
        {
          name: 'AI Business Intelligence',
          description: 'Machine learning & data science solutions',
          href: '/services/ai-business-intelligence',
          price: 'From $5,000',
          rating: 4.9
        },
        {
          name: 'AI Real Estate Analytics',
          description: 'Property investment AI & market intelligence',
          href: '/services/ai-real-estate-analytics',
          price: 'From $199/month',
          rating: 4.8
        },
        {
          name: 'AI Healthcare Analytics',
          description: 'Medical AI & predictive diagnostics',
          href: '/services/ai-healthcare-analytics',
          price: 'From $8,000',
          rating: 4.9
        }
      ]
    },
    {
      title: 'AI Cybersecurity & Security',
      description: 'Protect your organization with AI-powered security solutions',
      color: 'from-red-500 to-pink-500',
      services: [
        {
          name: 'AI Cybersecurity Suite',
          description: 'Comprehensive AI-powered security platform',
          href: '/services/ai-cybersecurity-suite',
          price: 'From $999/month',
          rating: 4.9
        },
        {
          name: 'AI Threat Intelligence',
          description: 'Advanced threat detection & response',
          href: '/services/ai-cybersecurity-threat-intelligence',
          price: 'From $399/month',
          rating: 4.9
        },
        {
          name: 'Zero Trust Architecture',
          description: 'Modern security framework implementation',
          href: '/services/zero-trust-network-architecture',
          price: 'From $12,000',
          rating: 4.8
        }
      ]
    },
    {
      title: 'AI Logistics & Supply Chain',
      description: 'Optimize your operations with intelligent logistics solutions',
      color: 'from-blue-500 to-cyan-500',
      services: [
        {
          name: 'AI Logistics Optimization',
          description: 'Route optimization & fleet management',
          href: '/services/ai-logistics-optimization',
          price: 'From $299/month',
          rating: 4.8
        },
        {
          name: 'AI Supply Chain Optimization',
          description: 'Intelligent supply chain management',
          href: '/services/ai-supply-chain-optimization',
          price: 'From $6,000',
          rating: 4.7
        },
        {
          name: 'Edge Computing Platform',
          description: 'Real-time processing & IoT solutions',
          href: '/services/edge-computing-platform',
          price: 'From $15,000',
          rating: 4.9
        }
      ]
    },
    {
      title: 'AI Business Automation',
      description: 'Streamline operations with intelligent automation',
      color: 'from-green-500 to-emerald-500',
      services: [
        {
          name: 'AI Workflow Orchestrator',
          description: 'Intelligent process automation',
          href: '/services/ai-workflow-orchestrator',
          price: 'From $7,000',
          rating: 4.8
        },
        {
          name: 'AI Project Management',
          description: 'Smart project planning & execution',
          href: '/services/ai-project-management-platform',
          price: 'From $4,500',
          rating: 4.7
        },
        {
          name: 'AI Customer Success Platform',
          description: 'Enhanced customer experience & retention',
          href: '/services/ai-customer-success-platform',
          price: 'From $5,500',
          rating: 4.8
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <SEO 
        title="Comprehensive AI Services Showcase 2026 | Zion Tech Group"
        description="Discover our complete portfolio of AI-powered services and micro SAAS solutions. From business intelligence to cybersecurity, logistics to automation - we have the solutions you need."
        keywords="AI services, micro SAAS, business intelligence, cybersecurity, logistics optimization, automation, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Comprehensive AI Services Showcase 2026
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-blue-100">
              Discover our complete portfolio of AI-powered services and micro SAAS solutions designed to transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Complete Service Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From AI analytics to cybersecurity, logistics to automation - we have the solutions you need to succeed
            </p>
          </motion.div>

          <div className="space-y-16">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="text-center mb-12">
                  <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                    {category.title}
                  </h3>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={serviceIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                      className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <Star className="w-5 h-5 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-600">{service.rating}</span>
                        </div>
                        <span className="text-sm font-semibold text-blue-600">{service.price}</span>
                      </div>
                      
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">{service.name}</h4>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      
                      <Link
                        to={service.href}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
              Join hundreds of companies who trust our AI platform for business transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Get Started Today
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Phone className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">{contactInfo.phone}</p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">{contactInfo.email}</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600">{contactInfo.address}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServicesShowcase2026;