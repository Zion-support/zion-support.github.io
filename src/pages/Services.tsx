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
  ExternalLink,
  BarChart3
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
        },
        {
          name: 'AI Legal Document Automation',
          description: 'Automate legal document creation and compliance with AI',
          features: ['Contract Generation', 'Compliance Checking', 'Risk Assessment', 'Template Library'],
          href: '/services/ai-legal-document-automation',
          price: 'From $399/month',
          rating: 4.9,
          reviewCount: 203
        },
        {
          name: 'AI Healthcare Analytics',
          description: 'Predictive healthcare analytics for better patient outcomes',
          features: ['Patient Outcome Prediction', 'Treatment Optimization', 'Risk Scoring', 'EHR Integration'],
          href: '/services/ai-healthcare-analytics',
          price: 'From $599/month',
          rating: 4.9,
          reviewCount: 178
        },
        {
          name: 'AI Financial Trading Platform',
          description: 'AI-powered financial trading and risk management',
          features: ['Risk Assessment', 'Portfolio Optimization', 'Market Prediction', 'Compliance Monitoring'],
          href: '/services/ai-financial-trading-platform',
          price: 'From $799/month',
          rating: 4.8,
          reviewCount: 145
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
          name: 'Cloud Migration Services',
          description: 'Expert cloud migration and consulting services',
          features: ['Strategy Planning', 'Application Modernization', 'Data Migration', 'Cost Optimization'],
          href: '/services/cloud-migration',
          price: 'From $3,200/month',
          rating: 4.9,
          reviewCount: 234
        },
        {
          name: 'DevOps Automation',
          description: 'Streamline development and operations with CI/CD pipelines',
          features: ['CI/CD Setup', 'Infrastructure as Code', 'Automated Testing', 'Performance Monitoring'],
          href: '/services/devops-automation',
          price: 'From $2,100/month',
          rating: 4.8,
          reviewCount: 167
        },
        {
          name: 'Edge Computing Platform',
          description: 'Intelligent edge computing for IoT and real-time processing',
          features: ['Edge AI Processing', 'Real-time Analytics', 'IoT Management', 'Low-latency Computing'],
          href: '/services/edge-computing-platform',
          price: 'From $699/month',
          rating: 4.9,
          reviewCount: 189
        },
        {
          name: 'Micro SaaS Solutions',
          description: 'AI-powered micro SaaS products with transparent pricing',
          features: ['AI Automation', 'Transparent Pricing', 'Quick Implementation', '24/7 Support'],
          href: '/services/micro-saas',
          price: 'From $199/month',
          rating: 4.9,
          reviewCount: 312
        }
      ]
    },
    {
      name: 'Cybersecurity',
      icon: Shield,
      description: 'Advanced cybersecurity solutions and threat protection',
      color: 'from-red-600 to-orange-600',
      services: [
        {
          name: 'AI Cybersecurity Suite',
          description: 'AI-powered threat detection and response platform',
          features: ['Real-time Detection', 'AI Analysis', 'Automated Response', 'Threat Intelligence'],
          href: '/services/ai-cybersecurity-suite',
          price: 'From $599/month',
          rating: 4.9,
          reviewCount: 198
        },
        {
          name: 'Zero Trust Network Architecture',
          description: 'Advanced network security with zero trust principles',
          features: ['Identity Verification', 'Continuous Monitoring', 'Access Control', 'Threat Prevention'],
          href: '/services/zero-trust-network-architecture',
          price: 'From $2,500/month',
          rating: 4.8,
          reviewCount: 156
        },
        {
          name: 'Smart Contract Risk Scanner',
          description: 'Blockchain security and smart contract auditing',
          features: ['Vulnerability Detection', 'Compliance Checking', 'Security Auditing', 'Risk Assessment'],
          href: '/services/smart-contract-risk-scanner',
          price: 'From $449/month',
          rating: 4.9,
          reviewCount: 134
        },
        {
          name: 'Cybersecurity Audit & Compliance',
          description: 'Comprehensive security auditing and compliance services',
          features: ['Vulnerability Assessment', 'Penetration Testing', 'Compliance Auditing', 'Security Training'],
          href: '/services/cybersecurity-audit',
          price: 'From $1,800/month',
          rating: 4.8,
          reviewCount: 223
        }
      ]
    },
    {
      name: 'IT Services',
      icon: Server,
      description: 'Comprehensive IT infrastructure and management services',
      color: 'from-gray-600 to-slate-600',
      services: [
        {
          name: 'Enterprise IT Infrastructure',
          description: 'Complete IT infrastructure management and optimization',
          features: ['Network Design', 'Server Management', 'Cloud Migration', '24/7 Monitoring'],
          href: '/services/enterprise-it-infrastructure',
          price: 'From $2,500/month',
          rating: 4.9,
          reviewCount: 189
        },
        {
          name: 'Managed IT Services',
          description: '24/7 IT monitoring, support, and proactive maintenance',
          features: ['24/7 Monitoring', 'Help Desk Support', 'Proactive Maintenance', 'Security Management'],
          href: '/services/managed-it',
          price: 'From $1,500/month',
          rating: 4.8,
          reviewCount: 267
        },
        {
          name: 'Mobile App Development',
          description: 'Custom mobile applications for iOS and Android',
          features: ['Native Development', 'UI/UX Design', 'Performance Optimization', 'App Store Optimization'],
          href: '/services/mobile-development',
          price: 'From $1,800/month',
          rating: 4.9,
          reviewCount: 198
        },
        {
          name: 'Web Development Services',
          description: 'Custom websites, e-commerce platforms, and web applications',
          features: ['Custom Development', 'Responsive Design', 'SEO Optimization', 'Performance Optimization'],
          href: '/services/web-development',
          price: 'From $1,200/month',
          rating: 4.8,
          reviewCount: 234
        }
      ]
    },
    {
      name: 'Emerging Technologies',
      icon: Rocket,
      description: 'Cutting-edge technologies for the future',
      color: 'from-indigo-600 to-purple-600',
      services: [
        {
          name: 'Quantum Computing Solutions',
          description: 'Quantum computing and optimization platform',
          features: ['Quantum Algorithms', 'Hybrid Computing', 'Complex Problem Solving', 'Performance Benchmarking'],
          href: '/services/quantum-computing',
          price: 'From $999/month',
          rating: 4.9,
          reviewCount: 89
        },
        {
          name: 'Space Technology',
          description: 'Advanced space technology and satellite management',
          features: ['Satellite Operations', 'Mission Planning', 'Earth Observation', 'Communication Optimization'],
          href: '/services/space-tech',
          price: 'From $1,299/month',
          rating: 4.9,
          reviewCount: 67
        },
        {
          name: 'Sustainability Solutions',
          description: 'Green technology and ESG monitoring platform',
          features: ['ESG Tracking', 'Carbon Footprint', 'Sustainability Reporting', 'Compliance Monitoring'],
          href: '/services/sustainability',
          price: 'From $349/month',
          rating: 4.8,
          reviewCount: 145
        },
        {
          name: 'IoT Solutions Development',
          description: 'End-to-end IoT solutions and integration services',
          features: ['Device Development', 'Sensor Integration', 'Data Processing', 'Cloud Integration'],
          href: '/services/iot-development',
          price: 'From $2,800/month',
          rating: 4.9,
          reviewCount: 178
        }
      ]
    },
    {
      name: 'Data & Analytics',
      icon: BarChart3,
      description: 'Data-driven insights and business intelligence solutions',
      color: 'from-green-600 to-emerald-600',
      services: [
        {
          name: 'Data Analytics & BI',
          description: 'Transform data into actionable business insights',
          features: ['Data Warehouse Design', 'ETL Pipelines', 'Dashboard Creation', 'Predictive Analytics'],
          href: '/services/data-analytics',
          price: 'From $1,500/month',
          rating: 4.9,
          reviewCount: 234
        },
        {
          name: 'AI Data Governance',
          description: 'Comprehensive data governance and compliance platform',
          features: ['Data Quality Assessment', 'Compliance Monitoring', 'Data Lineage Tracking', 'Privacy Management'],
          href: '/services/ai-data-governance',
          price: 'From $499/month',
          rating: 4.8,
          reviewCount: 167
        },
        {
          name: 'Data Backup & Recovery',
          description: 'Comprehensive data protection and disaster recovery',
          features: ['Automated Backup', 'Cloud Backup', 'Disaster Recovery', 'Business Continuity'],
          href: '/services/data-backup',
          price: 'From $800/month',
          rating: 4.9,
          reviewCount: 289
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