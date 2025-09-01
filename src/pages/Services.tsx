import React from 'react';
export default Services;


  const serviceCategories = [
    {
      name: 'AI-Powered Micro SaaS',
      icon: Brain,
      description: 'Intelligent software-as-a-service solutions that scale with your business',
      color: 'from-purple-600 to-pink-600',
      services: [
        {
          name: 'AI Customer Churn Predictor',
          description: 'Predict customer churn with 95% accuracy using machine learning algorithms',
          features: ['Real-time Churn Risk Scoring', 'Behavioral Pattern Analysis', 'Automated Retention Campaigns', 'CRM Integration'],
          href: '/services/ai-customer-churn-predictor',
          price: 'From $299/month',
          rating: 4.9,
          reviewCount: 127
        },
        {
          name: 'Intelligent Inventory Optimization',
          description: 'AI-driven inventory management that reduces stockouts by 60%',
          features: ['Demand Forecasting', 'Real-time Tracking', 'Automated Reorder Points', 'Cost Optimization'],
          href: '/services/intelligent-inventory-optimization',
          price: 'From $199/month',
          rating: 4.8,
          reviewCount: 89
        },
        {
          name: 'AI Legal Document Analyzer Pro',
          description: 'Advanced legal document analysis using NLP and AI for risk assessment',
          features: ['Contract Analysis', 'Risk Assessment', 'Compliance Checking', 'Template Generation'],
          href: '/services/ai-legal-document-analyzer',
          price: 'From $399/month',
          rating: 4.9,
          reviewCount: 156
        }
      ]
    },
    {
      name: 'Business Technology Solutions',
      icon: Rocket,
      description: 'Comprehensive business technology solutions for modern organizations',
      color: 'from-green-600 to-emerald-600',
      services: [
        {
          name: 'Real Estate Market Intelligence',
          description: 'Comprehensive real estate analytics platform for market insights and investment opportunities',
          features: ['Market Trend Analysis', 'Property Valuations', 'Investment Scoring', 'Portfolio Optimization'],
          href: '/services/real-estate-market-intelligence',
          price: 'From $299/month',
          rating: 4.8,
          reviewCount: 78
        },
        {
          name: 'AI HR Recruitment Automation',
          description: 'Intelligent recruitment platform that automates candidate sourcing and screening',
          features: ['AI-powered Sourcing', 'Automated Screening', 'Skill Matching', 'Diversity Tracking'],
          href: '/services/ai-hr-recruitment-automation',
          price: 'From $199/month',
          rating: 4.7,
          reviewCount: 145
        },
        {
          name: 'Intelligent Marketing Automation',
          description: 'AI-driven marketing automation that personalizes campaigns and maximizes ROI',
          features: ['Campaign Optimization', 'Customer Journey Mapping', 'Personalization Engine', 'ROI Tracking'],
          href: '/services/intelligent-marketing-automation',
          price: 'From $399/month',
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
          name: 'Cloud-Native Application Development',
          description: 'End-to-end cloud-native development with microservices architecture',
          features: ['Microservices Design', 'Container Orchestration', 'CI/CD Pipelines', 'Performance Optimization'],
          href: '/services/cloud-native-application-development',
          price: 'From $25,000',
          rating: 4.9,
          reviewCount: 167
        },
        {
          name: 'Performance Monitoring Intelligence',
          description: 'Advanced application performance monitoring with AI-powered insights',
          features: ['Real-time Monitoring', 'AI Anomaly Detection', 'Performance Optimization', 'Root Cause Analysis'],
          href: '/services/performance-monitoring-intelligence',
          price: 'From $499/month',
          rating: 4.8,
          reviewCount: 134
        },
        {
          name: 'API Management Intelligence',
          description: 'Comprehensive API management with intelligent monitoring and security',
          features: ['API Gateway Management', 'Intelligent Rate Limiting', 'Security & Authentication', 'Developer Portal'],
          href: '/services/api-management-intelligence',
          price: 'From $399/month',
          rating: 4.9,
          reviewCount: 89
        }
      ]
    },
    {
      name: 'Security & Compliance',
      icon: Shield,
      description: 'Advanced security protocols and regulatory compliance solutions',
      color: 'from-red-600 to-orange-600',
      services: [
        {
          name: 'Zero Trust Security Implementation',
          description: 'Comprehensive zero-trust security framework with continuous verification',
          features: ['Identity Management', 'Network Segmentation', 'Continuous Monitoring', 'Threat Detection'],
          href: '/services/zero-trust-security-implementation',
          price: 'From $15,000',
          rating: 4.9,
          reviewCount: 134
        },
        {
          name: 'Carbon Footprint Tracking Platform',
          description: 'AI-powered platform for tracking and reducing carbon footprints',
          features: ['Carbon Calculation', 'Real-time Monitoring', 'Reduction Recommendations', 'Sustainability Reporting'],
          href: '/services/carbon-footprint-tracking',
          price: 'From $299/month',
          rating: 4.7,
          reviewCount: 67
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
      name: 'Blockchain & Web3',
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
      name: 'Space Technology',
      icon: Globe,
      description: 'Satellite data analytics and space technology solutions',
      href: '/services/space-technology',
      color: 'from-indigo-600 to-blue-600'
    },
    {
      name: 'Metaverse & AR/VR',
      icon: Eye,
      description: 'Virtual reality and metaverse business solutions',
      href: '/services/metaverse-ar-vr',
      color: 'from-purple-600 to-pink-600'
    },
    {
      name: 'Autonomous Systems',
      icon: Car,
      description: 'AI-powered autonomous vehicle and robotic systems',
      href: '/services/autonomous-systems',
      color: 'from-orange-600 to-red-600'
    },
    {
      name: 'Biotechnology & Health',
      icon: Heart,
      description: 'AI-powered healthcare solutions and medical technology',
      href: '/services/biotech-health',
      color: 'from-red-600 to-pink-600'
    },
    {
      name: 'Green Technology',
      icon: Leaf,
      description: 'Sustainable technology and environmental solutions',
      href: '/services/green-technology',
      color: 'from-green-600 to-emerald-600'
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Proven Expertise',
      description: '15+ years of technology innovation and successful project delivery across 25+ industries'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified professionals with deep industry knowledge and cutting-edge technology expertise'
    },
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'Pioneering solutions in AI, quantum computing, blockchain, and emerging technologies'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous testing, compliance, and quality control for enterprise-grade solutions'
    },
    {
      icon: Rocket,
      title: 'Rapid Implementation',
      description: 'Fast deployment with 2-8 weeks average implementation time'
    },
    {
      icon: TrendingUp,
      title: 'Proven ROI',
      description: 'Average 350% return on investment across all our solutions'
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
                From AI-powered micro SaaS to quantum computing, blockchain, and emerging technologies, we provide comprehensive technology solutions across 25+ categories that drive innovation and growth.
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
                Explore our comprehensive range of 25+ technology service categories designed to meet your business needs across all industries.
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
                Stay ahead of the curve with our cutting-edge emerging technology solutions including quantum computing, blockchain, space tech, and autonomous systems.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
        </div>

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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div>

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
                Let's discuss how our comprehensive technology solutions across 25+ categories can drive innovation, efficiency, and growth for your organization.
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
        </div>

        {/* CTA and Contact */}
        <div className="mt - 24 text - left">
          <div className="bg - white / 5 rounded - 2xl p - 8 border border - white / 10">
            <h3 className="text - 3xl font - bold mb - 4">Ready to start?</h3>
            <p className="text - gray - 300 mb - 6 max - w-3xl">Talk with our experts to scope a pilot or request a tailored quote. We respond within 24 hours.</p>
            <div className="flex flex - col md:flex - row gap - 4 items - start md:items - center">
              <a href="https://ziontechgroup.com / contact" className="px - 6 py - 3 rounded - lg bg - cyan - 600 hover:bg - cyan - 500 font - semibold">Book a consultation</a>
              <a href="tel:+13024640950" className="px - 6 py - 3 rounded - lg border border - cyan - 500 text - cyan - 300 hover:bg - cyan - 500 / 10">Call + 1 302 464 0950</a>
              <a href="mailto:kleber@ziontechgroup.com" className="px - 6 py - 3 rounded - lg border border - cyan - 500 text - cyan - 300 hover:bg - cyan - 500 / 10">kleber@ziontechgroup.com</a>
            </div>
            <div className="mt - 4 text - sm text - gray - 400">
              Address: 364 E Main St STE 1008, Middletown, DE 19709 • Website: ziontechgroup.com
            </div>
          </div>
        </div>
        <div className="mt - 16">
          <a href="tel:+13024640950" className="bg - blue - 600 hover:bg - blue - 700 text - white px - 8 py - 4 rounded - lg font - semibold text - lg transition - colors">
            📞 Call + 1 (302) 464 - 0950
          </a>
        </div>
      </div>
    </div>) ;
};

