import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Cpu, 
  Lock, 
  Heart, 
  Globe,
  Zap,
  Users,
  ShoppingCart,
  MessageCircle,
  BookOpen,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Award,
  Lightbulb,
  Database,
  Network,
  Smartphone,
  Server,
  Phone,
  Mail,
  MapPin,
  ExternalLink
} from 'lucide-react';
import expandedServices2025 from '../data/expandedServices2025';

export default function Services() {
  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const serviceCategories = [
    {
      name: 'AI & Analytics',
      icon: Brain,
      description: 'Cutting-edge artificial intelligence and data analytics solutions',
      color: 'from-purple-600 to-pink-600',
      services: [
        {
          name: 'AI Business Intelligence',
          description: 'Transform your data into actionable insights with advanced AI algorithms',
          features: ['Predictive Analytics', 'Real-time Dashboards', 'Machine Learning Models', 'Data Visualization'],
          href: '/services/ai-business-intelligence',
          price: 'From $5,000',
          rating: 4.9,
          reviewCount: 127
        },
        {
          name: 'AI Sales Copilot',
          description: 'AI-powered sales automation and customer relationship management',
          features: ['Lead Scoring', 'Sales Forecasting', 'Customer Insights', 'Automated Follow-ups'],
          href: '/services/ai-sales-copilot',
          price: 'From $3,500',
          rating: 4.8,
          reviewCount: 89
        },
        {
          name: 'AI Content Optimizer Pro',
          description: 'Advanced AI-powered content optimization for SEO and engagement',
          features: ['SEO Optimization', 'Readability Scoring', 'Multi-language Support', 'Performance Analytics'],
          href: '/services/ai-content-optimizer-pro',
          price: 'From $199/month',
          rating: 4.9,
          reviewCount: 156
        }
      ]
    },
    {
      name: 'Cloud & DevOps',
      icon: Cloud,
      description: 'Scalable cloud infrastructure and automated deployment solutions',
      color: 'from-blue-600 to-cyan-600',
      services: [
        {
          name: 'Cloud DevOps',
          description: 'End-to-end cloud infrastructure and automated deployment solutions',
          features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Logging', 'Auto-scaling'],
          href: '/services/cloud-devops',
          price: 'From $8,000',
          rating: 4.9,
          reviewCount: 234
        },
        {
          name: 'Cloud FinOps Optimizer',
          description: 'Cloud cost optimization and financial operations management',
          features: ['Cost Analysis', 'Resource Optimization', 'Budget Management', 'ROI Tracking'],
          href: '/services/cloud-finops-optimizer',
          price: 'From $4,500',
          rating: 4.7,
          reviewCount: 89
        }
      ]
    },
    {
      name: 'Cybersecurity',
      icon: Shield,
      description: 'Advanced security solutions to protect your digital assets',
      color: 'from-red-600 to-orange-600',
      services: [
        {
          name: 'AI Cybersecurity Suite',
          description: 'Next-generation AI-powered threat detection and response',
          features: ['Real-time Threat Detection', 'Automated Response', 'Behavioral Analysis', 'Compliance Reporting'],
          href: '/services/ai-cybersecurity-suite',
          price: 'From $6,500',
          rating: 4.9,
          reviewCount: 198
        },
        {
          name: 'Zero Trust Security',
          description: 'Comprehensive zero trust architecture implementation',
          features: ['Identity Verification', 'Access Control', 'Network Segmentation', 'Continuous Monitoring'],
          href: '/services/zero-trust-security',
          price: 'From $7,500',
          rating: 4.8,
          reviewCount: 156
        }
      ]
    },
    {
      name: 'Healthcare AI',
      icon: Heart,
      description: 'AI-powered healthcare solutions for improved patient care',
      color: 'from-pink-600 to-red-600',
      services: [
        {
          name: 'AI Healthcare Analytics',
          description: 'Advanced analytics for healthcare data insights and patient outcomes',
          features: ['Patient Risk Assessment', 'Treatment Optimization', 'Clinical Decision Support', 'Population Health'],
          href: '/services/ai-healthcare-analytics',
          price: 'From $12,000',
          rating: 4.9,
          reviewCount: 89
        },
        {
          name: 'Medical Imaging AI',
          description: 'AI-powered medical image analysis and diagnosis support',
          features: ['Image Recognition', 'Diagnosis Assistance', 'Radiology Support', 'Quality Assurance'],
          href: '/services/medical-imaging-ai',
          price: 'From $15,000',
          rating: 4.9,
          reviewCount: 67
        }
      ]
    },
    {
      name: 'Financial AI',
      icon: DollarSign,
      description: 'AI-driven financial technology solutions',
      color: 'from-green-600 to-emerald-600',
      services: [
        {
          name: 'AI Trading Platform',
          description: 'Intelligent trading platform with AI-powered market analysis',
          features: ['Market Prediction', 'Risk Management', 'Portfolio Optimization', 'Automated Trading'],
          href: '/services/ai-trading-platform',
          price: 'From $25,000',
          rating: 4.8,
          reviewCount: 45
        },
        {
          name: 'Fraud Detection AI',
          description: 'Advanced fraud detection and prevention using machine learning',
          features: ['Real-time Detection', 'Pattern Recognition', 'Risk Scoring', 'Compliance Monitoring'],
          href: '/services/fraud-detection-ai',
          price: 'From $8,500',
          rating: 4.9,
          reviewCount: 123
        }
      ]
    },
    {
      name: 'IoT & Edge Computing',
      icon: Cpu,
      description: 'Internet of Things and edge computing solutions',
      color: 'from-indigo-600 to-purple-600',
      services: [
        {
          name: 'IoT Platform',
          description: 'Comprehensive IoT platform for device management and data collection',
          features: ['Device Management', 'Data Collection', 'Real-time Analytics', 'Scalable Infrastructure'],
          href: '/services/iot-platform',
          price: 'From $10,000',
          rating: 4.7,
          reviewCount: 78
        },
        {
          name: 'Edge Computing Solutions',
          description: 'Edge computing infrastructure for low-latency applications',
          features: ['Edge Nodes', 'Data Processing', 'Local Analytics', 'Cloud Integration'],
          href: '/services/edge-computing-solutions',
          price: 'From $12,000',
          rating: 4.8,
          reviewCount: 92
        }
      ]
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Proven Excellence',
      description: 'Award-winning solutions with proven track records across industries'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced professionals with deep technical expertise'
    },
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'Cutting-edge technology and forward-thinking solutions'
    },
    {
      icon: Shield,
      title: 'Trusted Partner',
      description: 'Long-term partnerships built on trust and results'
    }
  ];

  return (
    <>
      <SEO 
        title="Our Services - Zion Tech Group"
        description="Comprehensive AI, IT, and Micro SaaS solutions to transform your business. From AI analytics to cloud infrastructure, we deliver innovative technology solutions."
        keywords="AI services, cloud computing, cybersecurity, healthcare AI, financial AI, IoT solutions, edge computing, micro SaaS"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Our
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Services</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Comprehensive AI, IT, and Micro SaaS solutions designed to transform your business 
                and drive innovation across all industries.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                <span className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  50+ AI-Powered Services
                </span>
                <span className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  Enterprise-Grade Solutions
                </span>
                <span className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  24/7 Support
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Service Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive range of technology services designed to meet 
                the diverse needs of modern businesses.
              </p>
            </motion.div>

            <div className="space-y-16">
              {serviceCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8"
                >
                  <div className="flex items-center space-x-4 mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">{category.name}</h3>
                      <p className="text-gray-300 text-lg">{category.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {category.services.map((service, serviceIndex) => (
                      <motion.div
                        key={service.name}
                        initial={{ opacity: 0, x: serviceIndex % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                        className="bg-slate-700/30 rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300 group"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                            {service.name}
                          </h4>
                          <div className="flex items-center space-x-2">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-white font-semibold">{service.rating}</span>
                            <span className="text-gray-400 text-sm">({service.reviewCount})</span>
                          </div>
                        </div>

                        <p className="text-gray-300 mb-4">{service.description}</p>

                        <div className="mb-4">
                          <h5 className="text-white font-semibold mb-2">Key Features:</h5>
                          <ul className="space-y-1">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start">
                                <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-300 text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-blue-400 font-semibold">{service.price}</span>
                          <Link
                            to={service.href}
                            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                          >
                            Learn More <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine deep technical expertise with innovative thinking to deliver solutions that transform businesses.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
                    <reason.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{reason.title}</h3>
                  <p className="text-gray-300">{reason.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our technology solutions can drive innovation, efficiency, and growth for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Email</span>
                </a>
                <a 
                  href={contactInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-green-400 text-green-400 font-semibold py-3 px-8 rounded-lg hover:bg-green-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Visit Website</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}