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
      name: 'Revolutionary AI Services',
      icon: Brain,
      description: 'Next-generation AI solutions that transform enterprise operations',
      color: 'from-purple-600 to-pink-600',
      services: [
        {
          name: 'AI Enterprise Orchestrator',
          description: 'Multi-agent AI coordination and workflow automation for enterprise transformation',
          features: ['Multi-Agent Coordination', 'Intelligent Process Orchestration', 'Predictive Analytics Engine', 'Enterprise Security Suite'],
          href: '/services/ai-enterprise-orchestrator',
          price: 'From $15,000',
          rating: 5.0,
          reviewCount: 89
        },
        {
          name: 'Quantum AI Platform',
          description: 'Next-generation quantum computing with AI capabilities for complex problem solving',
          features: ['Quantum Machine Learning', 'Quantum Cryptography', 'Quantum Optimization', 'Quantum Simulation'],
          href: '/services/quantum-ai-platform',
          price: 'From $25,000',
          rating: 5.0,
          reviewCount: 67
        },
        {
          name: 'AI Cybersecurity Suite',
          description: 'AI-powered threat detection and automated incident response with zero-trust architecture',
          features: ['AI Threat Detection', 'Zero-Trust Architecture', 'Automated Incident Response', 'Compliance Automation'],
          href: '/services/ai-cybersecurity-suite',
          price: 'From $8,500',
          rating: 4.9,
          reviewCount: 156
        },
        {
          name: 'AI Healthcare Analytics',
          description: 'Predictive diagnostics and patient care optimization with AI-powered insights',
          features: ['Predictive Diagnostics', 'Patient Care Optimization', 'Clinical Research Acceleration', 'Healthcare Operations'],
          href: '/services/ai-healthcare-analytics',
          price: 'From $12,000',
          rating: 4.9,
          reviewCount: 134
        }
      ]
    },
    {
      name: 'AI & Analytics',
      icon: Brain,
      description: 'Cutting-edge artificial intelligence and data analytics solutions',
      color: 'from-blue-600 to-cyan-600',
      services: [
        {
          name: 'AI Business Intelligence Platform',
          description: 'Transform your data into actionable insights with advanced AI algorithms and predictive analytics',
          features: ['Predictive Analytics', 'Real-time Dashboards', 'Machine Learning Models', 'Data Visualization', 'Automated Reporting'],
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
        },
        {
          name: 'AI Customer Success Platform',
          description: 'Intelligent customer success with predictive analytics and automated engagement',
          features: ['Churn Prevention', 'Health Scoring', 'Automated Engagement', 'Predictive Analytics'],
          href: '/services/ai-customer-success-platform',
          price: 'From $299',
          rating: 4.9,
          reviewCount: 234
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
          rating: 4.8,
          reviewCount: 167
        },
        {
          name: 'Edge Computing Platform',
          description: 'Next-generation edge computing infrastructure for IoT and real-time applications',
          features: ['Edge Analytics', 'Real-time Processing', 'Low Latency', 'Distributed Computing'],
          href: '/services/edge-computing-platform',
          price: 'From $12,000',
          rating: 4.9,
          reviewCount: 98
        }
      ]
    },
    {
      name: 'Digital Solutions',
      icon: Rocket,
      description: 'Digital transformation and innovative technology solutions',
      color: 'from-green-600 to-emerald-600',
      services: [
        {
          name: 'Digital Twin',
          description: 'Real-time digital simulation and monitoring solutions',
          features: ['3D Modeling', 'Real-time Monitoring', 'Predictive Maintenance', 'Performance Analytics'],
          href: '/services/digital-twin',
          price: 'From $15,000',
          rating: 4.9,
          reviewCount: 78
        },
        {
          name: 'IT Infrastructure',
          description: 'Enterprise-grade IT infrastructure and network management',
          features: ['Network Design', 'Server Management', 'Security Implementation', '24/7 Monitoring'],
          href: '/services/it-infrastructure',
          price: 'From $12,000',
          rating: 4.8,
          reviewCount: 145
        },
        {
          name: 'Blockchain Enterprise Solutions',
          description: 'Enterprise blockchain implementation and smart contract solutions',
          features: ['Smart Contracts', 'Supply Chain Tracking', 'Digital Identity', 'DeFi Solutions'],
          href: '/services/blockchain-enterprise-solutions',
          price: 'From $18,000',
          rating: 4.9,
          reviewCount: 89
        }
      ]
    },
    {
      name: 'Cybersecurity & Compliance',
      icon: Shield,
      description: 'Advanced security protocols and threat protection systems',
      color: 'from-red-600 to-orange-600',
      services: [
        {
          name: 'Zero Trust Architecture',
          description: 'Advanced zero-trust security implementation and management',
          features: ['Identity Verification', 'Access Control', 'Network Segmentation', 'Continuous Monitoring'],
          href: '/services/zero-trust-network-architecture',
          price: 'From $18,000',
          rating: 4.9,
          reviewCount: 134
        },
        {
          name: 'AI Financial Fraud Detection',
          description: 'Protect your business with AI-powered fraud detection and 99.2% accuracy',
          features: ['Fraud Detection', 'Real-time Monitoring', 'Multi-layer Security', 'Adaptive Learning'],
          href: '/services/ai-financial-fraud-detection',
          price: 'From $799',
          rating: 4.9,
          reviewCount: 189
        },
        {
          name: 'Contract Management System',
          description: 'Streamlined contract lifecycle management with AI-powered insights',
          features: ['Contract Creation', 'Approval Workflows', 'Compliance Monitoring', 'AI Analysis', 'Reporting'],
          href: '/services/contract-management',
          price: 'From $3,200',
          rating: 4.6,
          reviewCount: 78
        }
      ]
    },
    {
      name: 'Micro SaaS Solutions',
      icon: Zap,
      description: 'Specialized software-as-a-service solutions for specific business needs',
      color: 'from-yellow-600 to-orange-600',
      services: [
        {
          name: 'AI Lead Scoring',
          description: 'Intelligent lead qualification and scoring with AI-powered analytics',
          features: ['Lead Qualification', 'Scoring Algorithms', 'CRM Integration', 'Performance Analytics'],
          href: '/services/ai-lead-scoring',
          price: 'From $199/month',
          rating: 4.8,
          reviewCount: 156
        },
        {
          name: 'Website AI Chatbot',
          description: 'Intelligent customer support chatbot with natural language processing',
          features: ['24/7 Support', 'Natural Language Processing', 'Multi-language Support', 'Integration APIs'],
          href: '/services/website-ai-chatbot',
          price: 'From $99/month',
          rating: 4.9,
          reviewCount: 234
        },
        {
          name: 'AI HR Talent Acquisition',
          description: 'Revolutionize hiring with AI-powered candidate matching and recruitment automation',
          features: ['AI Matching', 'Intelligent Sourcing', 'Predictive Analytics', 'Smart Screening'],
          href: '/services/ai-hr-talent-acquisition',
          price: 'From $399',
          rating: 4.8,
          reviewCount: 267
        }
      ]
    }
  ];

  const emergingTechnologies = [
    {
      name: 'Quantum Computing',
      icon: Cpu,
      description: 'Next-generation quantum computing solutions for complex problem-solving',
      href: '/services/quantum-computing',
      color: 'from-violet-600 to-purple-600'
    },
    {
      name: 'Blockchain Solutions',
      icon: Lock,
      description: 'Enterprise blockchain implementation and DeFi solutions',
      href: '/services/blockchain-enterprise-solutions',
      color: 'from-blue-600 to-indigo-600'
    },
    {
      name: 'IoT & Edge Computing',
      icon: Network,
      description: 'Internet of Things and edge computing infrastructure',
      href: '/services/iot-edge',
      color: 'from-green-600 to-teal-600'
    },
    {
      name: 'Healthcare Technology',
      icon: Heart,
      description: 'AI-powered healthcare solutions and medical technology',
      href: '/services/healthcare-tech',
      color: 'from-red-600 to-pink-600'
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Proven Expertise',
      description: '15+ years of technology innovation and successful project delivery'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified professionals with deep industry knowledge and experience'
    },
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'Cutting-edge solutions that keep you ahead of the competition'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control for reliable solutions'
    }
  ];

  return (
    <>
      <SEO
        title="Our Services | Zion Tech Group"
        description="Discover our comprehensive range of AI-powered solutions, IT infrastructure services, and emerging technology platforms. Transform your business with cutting-edge technology."
        keywords="AI services, IT services, cloud solutions, cybersecurity, digital transformation, Zion Tech Group"
        canonical="https://ziontechgroup.com/services"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our Comprehensive Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                From AI-powered micro SaaS to enterprise IT infrastructure, we provide end-to-end technology solutions that drive innovation and growth.
              </p>
              
              {/* Contact Information */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="text-blue-400 w-5 h-5" />
                    <div className="text-left">
                      <p className="text-sm text-gray-400">Phone</p>
                      <p className="text-white font-semibold">{contactInfo.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="text-green-400 w-5 h-5" />
                    <div className="text-left">
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="text-white font-semibold">{contactInfo.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="text-red-400 w-5 h-5" />
                    <div className="text-left">
                      <p className="text-sm text-gray-400">Address</p>
                      <p className="text-white font-semibold text-sm">{contactInfo.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/comprehensive-services-showcase-2025"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  View All Services
                </Link>
                <Link
                  to="/request-quote"
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  Contact Us
                </Link>
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
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Service Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive range of technology services designed to meet your business needs.
              </p>
            </motion.div>

            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className="mb-20"
              >
                <div className="text-center mb-12">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${category.color} mb-4`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{category.name}</h3>
                  <p className="text-lg text-gray-300 max-w-2xl mx-auto">{category.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
                    >
                      <div className="mb-4">
                        <h4 className="text-xl font-bold text-white mb-2">{service.name}</h4>
                        <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                        
                        {/* Price and Rating */}
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-lg font-semibold text-green-400">{service.price}</span>
                          <div className="flex items-center">
                            <div className="flex items-center mr-2">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                              ))}
                            </div>
                            <span className="text-sm text-gray-400">({service.reviewCount})</span>
                          </div>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-white mb-2">Key Features:</h5>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                              <CheckCircle className="text-green-400 w-3 h-3 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA Button */}
                      <Link
                        to={service.href}
                        className="w-full py-3 px-4 rounded-lg font-semibold text-center transition-all duration-300 block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                      >
                        Learn More
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Emerging Technologies */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Emerging Technologies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay ahead of the curve with our cutting-edge technology solutions and research initiatives.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {emergingTechnologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${tech.color} mb-4`}>
                    <tech.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{tech.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{tech.description}</p>
                  <Link
                    to={tech.href}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
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