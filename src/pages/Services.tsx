import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { COMPREHENSIVE_SERVICES } from '../data/comprehensiveServices';
import { INNOVATIVE_MICRO_SAAS_SERVICES } from '../data/innovativeMicroSaasServices';
import { ADVANCED_ENTERPRISE_SOLUTIONS } from '../data/advancedEnterpriseSolutions';
import { SPECIALIZED_IT_SERVICES } from '../data/specializedITServices';
import { Link } from 'react-router-dom';

export function Services() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

<<<<<<< HEAD
  const allServices = [
    ...COMPREHENSIVE_SERVICES,
    ...INNOVATIVE_MICRO_SAAS_SERVICES,
    ...ADVANCED_ENTERPRISE_SOLUTIONS,
    ...SPECIALIZED_IT_SERVICES
=======
  const serviceCategories = [
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      description: 'Intelligent solutions powered by artificial intelligence',
      services: [
        {
          name: 'AI Financial Advisor Platform',
          path: '/comprehensive-services-showcase',
          description: 'Intelligent financial advisory with AI-powered investment recommendations',
          icon: Brain,
          features: ['AI investment advice', 'Portfolio optimization', 'Real-time market analysis'],
          pricing: 'Starting from $299/month'
        },
        {
          name: 'AI Healthcare Diagnostics',
          path: '/comprehensive-services-showcase',
          description: 'Advanced medical diagnostic platform using AI',
          icon: Brain,
          features: ['Medical image analysis', 'Symptom assessment', 'Treatment recommendations'],
          pricing: 'Starting from $899/month'
        },
        {
          name: 'AI Legal Research Assistant',
          path: '/comprehensive-services-showcase',
          description: 'AI-powered legal research and case analysis',
          icon: Brain,
          features: ['Case law analysis', 'Legal document review', 'Precedent identification'],
          pricing: 'Starting from $199/month'
        },
        {
          name: 'AI Manufacturing Optimization',
          path: '/comprehensive-services-showcase',
          description: 'Intelligent manufacturing process optimization',
          icon: Brain,
          features: ['Production optimization', 'Predictive maintenance', 'Quality control'],
          pricing: 'Starting from $599/month'
        }
      ]
    },
    {
      id: 'quantum',
      title: 'Quantum Technology',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500',
      description: 'Next-generation quantum computing solutions',
      services: [
        {
          name: 'Quantum Machine Learning Platform',
          path: '/comprehensive-services-showcase',
          description: 'Revolutionary platform combining quantum computing with ML',
          icon: Brain,
          features: ['Quantum ML algorithms', 'Hybrid workflows', 'Performance benchmarking'],
          pricing: 'Starting from $2,500/month'
        },
        {
          name: 'Quantum Internet Platform',
          path: '/comprehensive-services-showcase',
          description: 'Ultra-secure quantum communications network',
          icon: Cpu,
          features: ['Quantum key distribution', 'Unbreakable encryption', 'Quantum networks'],
          pricing: 'Starting from $4,000/month'
        }
      ]
    },
    {
      id: 'emerging-tech',
      title: 'Emerging Technologies',
      icon: Rocket,
      color: 'from-purple-500 to-pink-500',
      description: 'Cutting-edge technologies of the future',
      services: [
        {
          name: 'Edge AI Computing Platform',
          path: '/comprehensive-services-showcase',
          description: 'AI processing at the edge for real-time decisions',
          icon: Rocket,
          features: ['Edge AI deployment', 'Low latency processing', 'Privacy-preserving AI'],
          pricing: 'Starting from $899/month'
        },
        {
          name: 'Neuromorphic Computing',
          path: '/comprehensive-services-showcase',
          description: 'Brain-inspired computing for ultra-efficient AI',
          icon: Rocket,
          features: ['Spiking neural networks', 'Ultra-low power', 'Cognitive computing'],
          pricing: 'Starting from $3,500/month'
        },
        {
          name: '6G Network Infrastructure',
          path: '/comprehensive-services-showcase',
          description: 'Next-generation 6G network solutions',
          icon: Rocket,
          features: ['Terahertz speeds', 'Ultra-low latency', 'AI optimization'],
          pricing: 'Starting from $5,000/month'
        }
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      description: 'Comprehensive security and compliance solutions',
      services: [
        {
          name: 'Cybersecurity Services',
          path: '/services/cybersecurity',
          description: 'Complete security solutions for your business',
          icon: Shield,
          features: ['Threat detection', 'Vulnerability assessment', 'Incident response'],
          pricing: 'Starting from $3,500/month'
        },
        {
          name: 'SOC2 Compliance Automation',
          path: '/soc2-compliance-automation',
          description: 'Automated compliance management and monitoring',
          icon: Lock,
          features: ['Automated audits', 'Real-time monitoring', 'Compliance reporting'],
          pricing: 'Starting from $4,500/month'
        }
      ]
    },
    {
      id: 'infrastructure',
      title: 'Cloud & Infrastructure',
      icon: Cpu,
      color: 'from-blue-500 to-indigo-500',
      description: 'Scalable cloud solutions and infrastructure management',
      services: [
        {
          name: 'Cloud-Native Development Platform',
          path: '/comprehensive-services-showcase',
          description: 'Enterprise-grade cloud-native development platform',
          icon: Cloud,
          features: ['Kubernetes orchestration', 'Microservices architecture', 'CI/CD pipelines'],
          pricing: 'Starting from $800/month'
        },
        {
          name: 'AI-Powered IT Operations',
          path: '/comprehensive-services-showcase',
          description: 'Intelligent IT operations with AI automation',
          icon: Network,
          features: ['AI monitoring', 'Predictive analytics', 'Automated incident response'],
          pricing: 'Starting from $1,500/month'
        },
        {
          name: 'Enterprise Data Management',
          path: '/comprehensive-services-showcase',
          description: 'Comprehensive data governance and management',
          icon: Network,
          features: ['Data governance', 'Quality management', 'Compliance monitoring'],
          pricing: 'Starting from $1,000/month'
        }
      ]
    },
    {
      id: 'business',
      title: 'Business Operations',
      icon: Building,
      color: 'from-green-500 to-emerald-500',
      description: 'Streamlined business process automation',
      services: [
        {
          name: 'AI Retail Intelligence Platform',
          path: '/comprehensive-services-showcase',
          description: 'Comprehensive retail analytics and customer intelligence',
          icon: Building,
          features: ['Customer behavior analysis', 'Inventory optimization', 'Personalized recommendations'],
          pricing: 'Starting from $399/month'
        },
        {
          name: 'AI Real Estate Analytics',
          path: '/comprehensive-services-showcase',
          description: 'Intelligent real estate market analysis and insights',
          icon: Database,
          features: ['Market trend analysis', 'Property value prediction', 'Investment scoring'],
          pricing: 'Starting from $299/month'
        }
      ]
    },
    {
      id: 'industry',
      title: 'Industry Solutions',
      icon: Target,
      color: 'from-orange-500 to-yellow-500',
      description: 'Tailored solutions for specific industries',
      services: [
        {
          name: 'AI Adaptive Learning Platform',
          path: '/comprehensive-services-showcase',
          description: 'Intelligent learning platform with personalized education',
          icon: Heart,
          features: ['Personalized learning paths', 'Progress tracking', 'Performance analytics'],
          pricing: 'Starting from $199/month'
        },
        {
          name: 'AI Logistics Optimization',
          path: '/comprehensive-services-showcase',
          description: 'Intelligent logistics and supply chain optimization',
          icon: DollarSign,
          features: ['Route optimization', 'Delivery prediction', 'Supply chain analytics'],
          pricing: 'Starting from $499/month'
        },
        {
          name: 'AI Energy Optimization',
          path: '/comprehensive-services-showcase',
          description: 'Intelligent energy management and optimization',
          icon: Cpu,
          features: ['Energy consumption analysis', 'Cost optimization', 'Sustainability reporting'],
          pricing: 'Starting from $399/month'
        }
      ]
    },
    {
      id: 'specialized-it',
      title: 'Specialized IT Services',
      icon: Shield,
      color: 'from-indigo-500 to-purple-500',
      description: 'Advanced IT solutions and specialized services',
      services: [
        {
          name: 'Zero Trust Security Platform',
          path: '/comprehensive-services-showcase',
          description: 'Comprehensive zero trust security implementation',
          icon: Shield,
          features: ['Continuous verification', 'Least privilege access', 'Micro-segmentation'],
          pricing: 'Starting from $1,200/month'
        },
        {
          name: 'DevOps Automation Platform',
          path: '/comprehensive-services-showcase',
          description: 'Comprehensive DevOps automation and CI/CD',
          icon: Shield,
          features: ['CI/CD pipelines', 'Infrastructure as code', 'Automated testing'],
          pricing: 'Starting from $600/month'
        },
        {
          name: 'Application Performance Management',
          path: '/comprehensive-services-showcase',
          description: 'Advanced application performance monitoring',
          icon: Shield,
          features: ['Real-time monitoring', 'Performance analytics', 'User experience tracking'],
          pricing: 'Starting from $900/month'
        }
      ]
    }
>>>>>>> origin/cursor/expand-services-and-deploy-updates-9864
  ];
  
  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];
  
  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (service.tags && service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-zion-blue-dark text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-quantum-gradient opacity-20 animate-pulse"></div>
      <div className="absolute inset-0 bg-quantum-mesh"></div>
      
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-zion-cyan text-xs animate-matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${20 + Math.random() * 10}s`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-holographic-gradient bg-clip-text text-transparent animate-holographic-shift">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Discover our comprehensive range of cutting-edge technology solutions designed to transform your business
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 backdrop-blur-sm"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-zion-cyan">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-zion-cyan text-zion-blue-dark shadow-lg shadow-zion-cyan/25'
                    : 'bg-zion-blue-light/20 text-zion-slate-light hover:bg-zion-blue-light/30 hover:text-white border border-zion-cyan/30'
                }`}
              >
                {category === 'all' ? 'All Services' : category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group bg-zion-blue-light/10 backdrop-blur-md border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 hover:bg-zion-blue-light/20 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 group-hover:-translate-y-2"
            >
              {/* Service Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl mb-6 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">
                  {service.category === 'ai-ml' ? '🤖' : 
                   service.category === 'cybersecurity' ? '🔒' :
                   service.category === 'cloud-devops' ? '☁️' :
                   service.category === 'web-development' ? '🌐' :
                   service.category === 'data-analytics' ? '📊' : '🚀'}
                </span>
              </div>
              
              {/* Service Content */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                  {service.title}
                </h3>
                <p className="text-zion-slate-light leading-relaxed mb-4">
                  {service.description}
                </p>
                
                {/* Tags */}
                {service.tags && service.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded-full border border-zion-cyan/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                
                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-white">
                    ${service.price.toLocaleString()}
                  </span>
                </div>
              </div>
              
              {/* CTA Button */}
              <Link
                to={`/services/${service.id}`}
                className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center justify-center gap-2 group hover:scale-105"
              >
                Learn More
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20 border border-zion-cyan/30 rounded-2xl p-12 backdrop-blur-md">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Let's discuss how our technology solutions can accelerate your growth and 
              give you a competitive edge in the market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
<<<<<<< HEAD
                to="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2 justify-center group hover:scale-105"
              >
                Get Free Consultation
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
=======
                to="/contact"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/comprehensive-services-showcase"
                className="px-8 py-3 border border-cyan-500 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
              >
                View All Services
>>>>>>> origin/cursor/expand-services-and-deploy-updates-9864
              </Link>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-xl text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center gap-2 justify-center group hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Sales Team
              </a>
            </div>
          </div>
        </motion.div>

        {/* Footer Section */}
        <div className="bg-zion-slate-dark py-12 border-t border-zion-blue-light">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-xl font-bold text-white mb-4">Zion Tech Group</h3>
                <p className="text-zion-slate-light mb-4">
                  Pioneering the future of technology with revolutionary AI consciousness, 
                  quantum computing, and autonomous solutions that transform businesses worldwide.
                </p>
                <div className="flex items-center gap-4 text-zion-slate-light">
                  <a href="https://ziontechgroup.com" className="hover:text-zion-cyan transition-colors">
                    ziontechgroup.com
                  </a>
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
                <div className="space-y-2 text-zion-slate-light">
                  <p>📱 +1 302 464 0950</p>
                  <p>✉️ kleber@ziontechgroup.com</p>
                  <p>📍 364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
                <div className="space-y-2">
                  <a href="/comprehensive-services" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Comprehensive Services
                  </a>
                  <a href="/ai-services" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                    AI Services
                  </a>
                  <a href="/enterprise-solutions" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Enterprise Solutions
                  </a>
                  <a href="/micro-saas-services" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Micro SAAS Services
                  </a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-zion-blue-light mt-8 pt-8 text-center">
              <p className="text-zion-slate-light text-sm">
                © 2024 Zion Tech Group. All rights reserved. | 
                <a href="/privacy" className="ml-2 hover:text-zion-cyan transition-colors">Privacy Policy</a> | 
                <a href="/terms" className="ml-2 hover:text-zion-cyan transition-colors">Terms of Service</a>
              </p>
            </div>
          </div>
        </div>

        {/* Comprehensive Services Showcase CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Discover Our Complete Portfolio
            </h2>
            <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
              Explore our comprehensive showcase featuring 30+ cutting-edge AI solutions, emerging technologies, and specialized IT services. 
              From micro SAAS applications to quantum computing platforms, we have the tools you need to stay ahead.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6 text-sm text-gray-400">
              <div>• AI-Powered Business Solutions</div>
              <div>• Emerging Technology Platforms</div>
              <div>• Specialized IT Services</div>
            </div>
            <Link
              to="/comprehensive-services-showcase"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-medium rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
            >
              Explore Comprehensive Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
