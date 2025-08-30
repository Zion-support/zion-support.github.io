import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Brain,
  Shield,
  Cpu,
  Rocket,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  BarChart3,
  Heart,
  Eye,
  Atom,
  Activity,
  Code,
  Database,
  Server,
  Network,
  Lock,
  Cloud,
  Target,
  TrendingUp,
  Briefcase,
  Globe,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export function ServicesPage() {
  const location = useLocation();
  const currentService = location.pathname.split('/').pop();

  const services = [
    {
      id: 'ai-solutions',
      title: 'AI Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      features: [
        'Machine Learning & Deep Learning',
        'Natural Language Processing',
        'Computer Vision & Image Recognition',
        'Predictive Analytics & Forecasting',
        'AI-Powered Automation',
        'Intelligent Decision Support'
      ],
      benefits: [
        'Increase operational efficiency by up to 40%',
        'Reduce costs through intelligent automation',
        'Improve decision-making with data-driven insights',
        'Enhance customer experience with personalized solutions'
      ],
      useCases: [
        'Customer Service Chatbots',
        'Predictive Maintenance',
        'Fraud Detection',
        'Recommendation Systems',
        'Process Automation',
        'Quality Control'
      ]
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing',
      description: 'Harness the power of quantum mechanics for unprecedented computational capabilities',
      icon: Atom,
      color: 'from-blue-500 to-cyan-600',
      features: [
        'Quantum Algorithm Development',
        'Quantum AI Hybrid Systems',
        'Quantum Cryptography',
        'Quantum Optimization',
        'Quantum Machine Learning',
        'Quantum Simulation'
      ],
      benefits: [
        'Solve complex problems exponentially faster',
        'Breakthrough computational capabilities',
        'Enhanced security with quantum encryption',
        'Revolutionary optimization algorithms'
      ],
      useCases: [
        'Financial Modeling',
        'Drug Discovery',
        'Climate Modeling',
        'Supply Chain Optimization',
        'Cryptography',
        'Machine Learning'
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Protect your digital assets with AI-powered security solutions',
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      features: [
        'Zero Trust Security Architecture',
        'AI-Powered Threat Detection',
        'Security Headers & CSP Management',
        'Compliance & Risk Management',
        'Incident Response & Recovery',
        'Security Training & Awareness'
      ],
      benefits: [
        'Real-time threat detection and response',
        'Comprehensive compliance management',
        'Reduced security incidents by 90%',
        '24/7 security monitoring and support'
      ],
      useCases: [
        'Network Security',
        'Application Security',
        'Data Protection',
        'Identity & Access Management',
        'Cloud Security',
        'IoT Security'
      ]
    },
    {
      id: 'cloud-devops',
      title: 'Cloud & DevOps',
      description: 'Modernize your infrastructure with cloud-native solutions and DevOps practices',
      icon: Cloud,
      color: 'from-green-500 to-teal-600',
      features: [
        'Cloud Migration & Strategy',
        'DevOps Automation',
        'Container Orchestration',
        'Infrastructure as Code',
        'Continuous Integration/Deployment',
        'Monitoring & Observability'
      ],
      benefits: [
        'Reduce infrastructure costs by 30-50%',
        'Faster time to market',
        'Improved reliability and scalability',
        'Enhanced security and compliance'
      ],
      useCases: [
        'Application Modernization',
        'Microservices Architecture',
        'Data Center Migration',
        'Disaster Recovery',
        'Performance Optimization',
        'Cost Optimization'
      ]
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      description: 'Transform your business processes and customer experience for the digital age',
      icon: Rocket,
      color: 'from-indigo-500 to-purple-600',
      features: [
        'Process Automation & Optimization',
        'Customer Experience Design',
        'Data Strategy & Analytics',
        'Change Management',
        'Technology Roadmapping',
        'Digital Culture Development'
      ],
      benefits: [
        'Improved operational efficiency',
        'Enhanced customer satisfaction',
        'Increased revenue growth',
        'Competitive advantage in digital markets'
      ],
      useCases: [
        'Business Process Automation',
        'Customer Journey Optimization',
        'Data-Driven Decision Making',
        'Employee Experience Enhancement',
        'Supply Chain Digitalization',
        'E-commerce Transformation'
      ]
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights for better decision-making',
      icon: BarChart3,
      color: 'from-yellow-500 to-orange-600',
      features: [
        'Data Strategy & Architecture',
        'Business Intelligence & Reporting',
        'Advanced Analytics & Modeling',
        'Data Visualization',
        'Data Quality & Governance',
        'Real-time Analytics'
      ],
      benefits: [
        'Data-driven decision making',
        'Improved operational efficiency',
        'Enhanced customer insights',
        'Competitive market intelligence'
      ],
      useCases: [
        'Business Performance Monitoring',
        'Customer Behavior Analysis',
        'Predictive Analytics',
        'Risk Assessment',
        'Market Research',
        'Operational Optimization'
      ]
    }
  ];

  const getCurrentService = () => {
    if (!currentService || currentService === 'services') {
      return null;
    }
    return services.find(service => service.id === currentService);
  };

  const currentServiceData = getCurrentService();

  if (currentServiceData) {
    return (
      <div className="min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Service Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex justify-center mb-6">
                <div className={`w-24 h-24 bg-gradient-to-r ${currentServiceData.color} rounded-2xl flex items-center justify-center`}>
                  <currentServiceData.icon className="w-12 h-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl font-bold text-white mb-4">{currentServiceData.title}</h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                {currentServiceData.description}
              </p>
            </motion.div>
          </div>

          {/* Service Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                  <Zap className="w-7 h-7 text-cyan-400" />
                  <span>Key Features</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentServiceData.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                  <Star className="w-7 h-7 text-yellow-400" />
                  <span>Benefits</span>
                </h2>
                <div className="space-y-4">
                  {currentServiceData.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                  <Target className="w-7 h-7 text-green-400" />
                  <span>Use Cases</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentServiceData.useCases.map((useCase, index) => (
                    <div key={index} className="flex items-center space-x-3 text-gray-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                      <span>{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-cyan-600 to-blue-700 rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-cyan-100 mb-6">
                  Transform your business with our cutting-edge {currentServiceData.title.toLowerCase()} solutions.
                </p>
                <div className="space-y-3">
                  <Link
                    to="/contact"
                    className="block w-full text-center bg-white text-cyan-600 px-4 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Contact Sales
                  </Link>
                  <Link
                    to="/request-quote"
                    className="block w-full text-center bg-transparent text-white px-4 py-3 rounded-lg font-semibold border border-white hover:bg-white/10 transition-colors"
                  >
                    Request Quote
                  </Link>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span>364 E Main St STE 1008 Middletown DE 19709</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  // Services Overview Page
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to drive innovation, enhance security, 
              and accelerate your digital transformation journey.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-cyan-500/30 group"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="space-y-3 mb-6">
                {service.features.slice(0, 3).map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                    <span>{feature}</span>
                  </div>
                ))}
                {service.features.length > 3 && (
                  <div className="text-sm text-gray-500">
                    +{service.features.length - 3} more features
                  </div>
                )}
              </div>

              <Link
                to={`/services/${service.id}`}
                className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium group-hover:translate-x-1 transition-transform"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* New Services Showcase CTA */}
        <div className="text-center mt-16 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Discover Our Revolutionary New Services 2025
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Explore our latest cutting-edge micro SAAS services, AI-powered platforms, and emerging technology solutions. 
              Each service is designed with proven ROI and market-leading capabilities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/revolutionary-services"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Explore Revolutionary Services</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-transparent text-white rounded-lg hover:bg-white/10 transition-all duration-200 font-semibold text-lg border-2 border-white"
              >
                <span>Contact Sales</span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl p-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your technology goals
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-cyan-600 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-transparent text-white rounded-lg hover:bg-white/10 transition-all duration-200 font-semibold text-lg border-2 border-white"
              >
                <span>Request a Quote</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
