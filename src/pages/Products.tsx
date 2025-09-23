import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Package, 
  Zap, 
  Shield, 
  Cloud, 
  Bot, 
  Database, 
  Globe, 
  Smartphone, 
  Monitor, 
  Server, 
  Lock, 
  TrendingUp, 
  Star, 
  ArrowRight, 
  CheckCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const Products: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const productCategories = [
    {
      id: 'ai-solutions',
      name: 'AI Solutions',
      icon: <Bot className="w-8 h-8" />,
      description: 'Cutting-edge artificial intelligence and machine learning products',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'cloud-platforms',
      name: 'Cloud Platforms',
      icon: <Cloud className="w-8 h-8" />,
      description: 'Scalable cloud infrastructure and platform services',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      icon: <Shield className="w-8 h-8" />,
      description: 'Advanced security solutions for enterprise protection',
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 'data-analytics',
      name: 'Data Analytics',
      icon: <Database className="w-8 h-8" />,
      description: 'Comprehensive data analysis and business intelligence tools',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'automation-tools',
      name: 'Automation Tools',
      icon: <Zap className="w-8 h-8" />,
      description: 'Intelligent automation and workflow optimization',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'mobile-apps',
      name: 'Mobile Applications',
      icon: <Smartphone className="w-8 h-8" />,
      description: 'Cross-platform mobile applications and solutions',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const products = {
    'ai-solutions': [
      {
        id: 'ai-content-generator',
        name: 'AI Content Generator Pro',
        description: 'Advanced AI-powered content creation tool for marketing, writing, and creative projects',
        features: ['Natural language processing', 'Multi-language support', 'SEO optimization', 'Content templates'],
        pricing: 'Starting at $99/month',
        rating: 4.8,
        reviews: 1247,
        status: 'Available'
      },
      {
        id: 'ai-customer-support',
        name: 'AI Customer Support Suite',
        description: 'Intelligent chatbot and customer service automation platform',
        features: ['24/7 customer support', 'Multi-channel integration', 'Sentiment analysis', 'Custom workflows'],
        pricing: 'Starting at $199/month',
        rating: 4.7,
        reviews: 892,
        status: 'Available'
      },
      {
        id: 'ai-predictive-analytics',
        name: 'AI Predictive Analytics',
        description: 'Machine learning platform for business forecasting and trend analysis',
        features: ['Predictive modeling', 'Real-time insights', 'Custom algorithms', 'API integration'],
        pricing: 'Starting at $299/month',
        rating: 4.9,
        reviews: 567,
        status: 'Available'
      }
    ],
    'cloud-platforms': [
      {
        id: 'zion-cloud',
        name: 'Zion Cloud Platform',
        description: 'Enterprise-grade cloud infrastructure with advanced management tools',
        features: ['Auto-scaling', 'Load balancing', 'Multi-region deployment', 'Monitoring & alerting'],
        pricing: 'Starting at $0.10/hour',
        rating: 4.8,
        reviews: 2156,
        status: 'Available'
      },
      {
        id: 'container-orchestration',
        name: 'Container Orchestration Suite',
        description: 'Complete container management and orchestration solution',
        features: ['Kubernetes support', 'Service mesh', 'CI/CD integration', 'Security scanning'],
        pricing: 'Starting at $50/month',
        rating: 4.6,
        reviews: 743,
        status: 'Available'
      }
    ],
    'cybersecurity': [
      {
        id: 'threat-detection',
        name: 'Advanced Threat Detection',
        description: 'AI-powered security monitoring and threat intelligence platform',
        features: ['Real-time monitoring', 'Behavioral analysis', 'Threat hunting', 'Incident response'],
        pricing: 'Starting at $399/month',
        rating: 4.9,
        reviews: 445,
        status: 'Available'
      },
      {
        id: 'identity-management',
        name: 'Identity & Access Management',
        description: 'Comprehensive identity governance and access control solution',
        features: ['Single sign-on', 'Multi-factor authentication', 'Role-based access', 'Compliance reporting'],
        pricing: 'Starting at $25/user/month',
        rating: 4.7,
        reviews: 678,
        status: 'Available'
      }
    ],
    'data-analytics': [
      {
        id: 'business-intelligence',
        name: 'Business Intelligence Platform',
        description: 'Complete BI solution for data visualization and reporting',
        features: ['Interactive dashboards', 'Data connectors', 'Advanced analytics', 'Collaboration tools'],
        pricing: 'Starting at $150/month',
        rating: 4.6,
        reviews: 934,
        status: 'Available'
      },
      {
        id: 'data-warehouse',
        name: 'Data Warehouse Solution',
        description: 'Scalable data storage and processing platform',
        features: ['Columnar storage', 'Query optimization', 'Data integration', 'Backup & recovery'],
        pricing: 'Starting at $0.25/GB/month',
        rating: 4.8,
        reviews: 567,
        status: 'Available'
      }
    ],
    'automation-tools': [
      {
        id: 'workflow-automation',
        name: 'Workflow Automation Platform',
        description: 'Visual workflow builder for business process automation',
        features: ['Drag & drop builder', 'Pre-built templates', 'Integration connectors', 'Analytics dashboard'],
        pricing: 'Starting at $75/month',
        rating: 4.7,
        reviews: 789,
        status: 'Available'
      },
      {
        id: 'rpa-suite',
        name: 'RPA Suite',
        description: 'Robotic process automation for repetitive task automation',
        features: ['Screen recording', 'AI-powered automation', 'Process mining', 'Performance analytics'],
        pricing: 'Starting at $200/month',
        rating: 4.5,
        reviews: 456,
        status: 'Available'
      }
    ],
    'mobile-apps': [
      {
        id: 'cross-platform-framework',
        name: 'Cross-Platform Framework',
        description: 'Development framework for building native mobile applications',
        features: ['Single codebase', 'Native performance', 'Hot reload', 'Plugin ecosystem'],
        pricing: 'Starting at $49/month',
        rating: 4.6,
        reviews: 1234,
        status: 'Available'
      },
      {
        id: 'mobile-analytics',
        name: 'Mobile Analytics Platform',
        description: 'Comprehensive analytics for mobile application performance',
        features: ['User behavior tracking', 'Crash reporting', 'Performance monitoring', 'A/B testing'],
        pricing: 'Starting at $99/month',
        rating: 4.7,
        reviews: 678,
        status: 'Available'
      }
    ]
  };

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-400" />);
    }

    return stars;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Products - Zion Tech Group"
        description="Explore Zion Tech Group's comprehensive product portfolio including AI solutions, cloud platforms, cybersecurity tools, and more."
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Package className="w-4 h-4 mr-2" />
              Product Portfolio
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Products
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Discover our comprehensive suite of cutting-edge technology solutions designed to 
              transform your business and drive innovation across every industry.
            </p>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Product Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our diverse range of technology solutions organized by category
            </p>
          </motion.div>

          <div className="space-y-6">
            {productCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full p-8 text-left hover:bg-slate-700/30 transition-colors duration-200"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center text-white`}>
                        {category.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                        <p className="text-gray-400">{category.description}</p>
                      </div>
                    </div>
                    <div className="text-cyan-400">
                      {expandedCategory === category.id ? (
                        <ChevronUp className="w-6 h-6" />
                      ) : (
                        <ChevronDown className="w-6 h-6" />
                      )}
                    </div>
                  </div>
                </button>

                {expandedCategory === category.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-slate-700/50 p-8"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {products[category.id as keyof typeof products]?.map((product) => (
                        <div
                          key={product.id}
                          className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/50 hover:border-cyan-500/30 transition-all duration-300"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <h4 className="text-xl font-bold text-white">{product.name}</h4>
                            <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                              {product.status}
                            </span>
                          </div>
                          
                          <p className="text-gray-400 mb-4">{product.description}</p>
                          
                          <div className="mb-4">
                            <h5 className="text-sm font-semibold text-white mb-2">Key Features:</h5>
                            <ul className="space-y-1">
                              {product.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center text-sm text-gray-300">
                                  <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-2">
                              <div className="flex items-center">
                                {renderStars(product.rating)}
                              </div>
                              <span className="text-sm text-gray-400">
                                {product.rating} ({product.reviews} reviews)
                              </span>
                            </div>
                            <div className="text-cyan-400 font-semibold">
                              {product.pricing}
                            </div>
                          </div>
                          
                          <div className="flex space-x-3">
                            <button className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
                              Learn More
                            </button>
                            <button className="px-4 py-2 bg-slate-700 text-white text-sm font-medium rounded-lg hover:bg-slate-600 transition-all duration-300 border border-slate-600">
                              Demo
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Featured Products
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most popular and innovative solutions that are transforming businesses worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Zion AI Platform',
                description: 'Comprehensive AI platform combining machine learning, natural language processing, and computer vision',
                icon: <Bot className="w-12 h-12" />,
                color: 'from-purple-500 to-pink-500',
                features: ['Advanced ML models', 'Real-time processing', 'Scalable infrastructure']
              },
              {
                name: 'Zion Cloud Enterprise',
                description: 'Enterprise-grade cloud platform with advanced security and compliance features',
                icon: <Cloud className="w-12 h-12" />,
                color: 'from-blue-500 to-cyan-500',
                features: ['99.99% uptime', 'Global CDN', 'Advanced security']
              },
              {
                name: 'Zion Security Suite',
                description: 'Comprehensive cybersecurity solution protecting against modern threats',
                icon: <Shield className="w-12 h-12" />,
                color: 'from-red-500 to-orange-500',
                features: ['Threat detection', 'Zero-trust security', 'Compliance ready']
              }
            ].map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${product.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {product.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{product.name}</h3>
                <p className="text-gray-400 mb-6">{product.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                  Explore Product
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our products are designed to help you stay ahead of the competition and 
              drive innovation in your industry. Get started today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Schedule Demo
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl border border-slate-600 hover:bg-slate-700 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;