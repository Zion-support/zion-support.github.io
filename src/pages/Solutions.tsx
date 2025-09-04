import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Building, Cpu, Brain, Shield, Cloud, Code, Users, Globe, 
  Rocket, Target, TrendingUp, Award, Zap, Database, Network,
  Smartphone, Lock, BarChart3, Server, Chip, Wifi, Bot,
  Workflow, Eye, Sparkles, Leaf, Gamepad2, Coins, Satellite,
  Activity, FileText, MessageCircle, Search, BarChart, Settings,
  Palette, Truck, Factory, Heart, Car, Plane, Ship, Train,
  Check, ArrowRight
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const Solutions = () => {
  const industrySolutions = [
    {
      title: 'Healthcare Solutions',
      description: 'Transform healthcare delivery with AI-powered diagnostics, patient management, and medical research platforms.',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      features: [
        'AI Medical Imaging Analysis',
        'Patient Data Management',
        'Drug Discovery Platforms',
        'Telemedicine Solutions',
        'Healthcare Analytics',
        'Compliance & Security'
      ],
      href: '/solutions/healthcare',
      image: '/images/healthcare-solutions.jpg'
    },
    {
      title: 'Financial Solutions',
      description: 'Revolutionize financial services with quantum computing, AI trading, and blockchain technology.',
      icon: Coins,
      color: 'from-green-500 to-emerald-500',
      features: [
        'AI Trading Platforms',
        'Risk Management Systems',
        'Fraud Detection',
        'Compliance Automation',
        'Financial Analytics',
        'Blockchain Integration'
      ],
      href: '/financial-solutions',
      image: '/images/financial-solutions.jpg'
    },
    {
      title: 'Manufacturing Solutions',
      description: 'Drive Industry 4.0 transformation with smart manufacturing, IoT integration, and predictive maintenance.',
      icon: Factory,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Smart Factory Systems',
        'IoT Edge Computing',
        'Predictive Maintenance',
        'Quality Control AI',
        'Supply Chain Optimization',
        'Digital Twin Technology'
      ],
      href: '/manufacturing-solutions',
      image: '/images/manufacturing-solutions.jpg'
    },
    {
      title: 'Transportation & Logistics',
      description: 'Optimize transportation networks with AI routing, autonomous systems, and real-time tracking.',
      icon: Truck,
      color: 'from-orange-500 to-yellow-500',
      features: [
        'AI Route Optimization',
        'Autonomous Vehicle Systems',
        'Fleet Management',
        'Supply Chain Tracking',
        'Traffic Prediction',
        'Smart Infrastructure'
      ],
      href: '/transportation-solutions',
      image: '/images/transportation-solutions.jpg'
    }
  ];

  const technologySolutions = [
    {
      title: 'AI Solutions',
      description: 'Comprehensive artificial intelligence solutions for business transformation and automation.',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Machine Learning Platforms',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI Ethics & Governance',
        'Custom AI Development'
      ],
      href: '/ai-solutions',
      image: '/images/ai-solutions.jpg'
    },
    {
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services to modernize your business operations.',
      icon: Rocket,
      color: 'from-indigo-500 to-blue-500',
      features: [
        'Process Automation',
        'Cloud Migration',
        'Legacy System Modernization',
        'Change Management',
        'Digital Strategy',
        'Technology Roadmap'
      ],
      href: '/services/digital-transformation',
      image: '/images/digital-transformation.jpg'
    },
    {
      title: 'Research & Development',
      description: 'Cutting-edge R&D services in emerging technologies and innovation.',
      icon: Search,
      color: 'from-cyan-500 to-teal-500',
      features: [
        'Emerging Tech Research',
        'Prototype Development',
        'Technology Validation',
        'Innovation Labs',
        'Patent Support',
        'Academic Collaboration'
      ],
      href: '/research-development',
      image: '/images/research-development.jpg'
    },
    {
      title: 'Green IT Solutions',
      description: 'Sustainable technology solutions for environmental responsibility and efficiency.',
      icon: Leaf,
      color: 'from-emerald-500 to-green-500',
      features: [
        'Energy Optimization',
        'Carbon Footprint Reduction',
        'Sustainable Infrastructure',
        'Green Data Centers',
        'Renewable Energy Integration',
        'Environmental Monitoring'
      ],
      href: '/green-it',
      image: '/images/green-it-solutions.jpg'
    }
  ];

  const enterpriseSolutions = [
    {
      title: 'Enterprise Solutions',
      description: 'Scalable solutions for large organizations with complex requirements.',
      icon: Building,
      color: 'from-slate-500 to-gray-500',
      features: [
        'Enterprise Architecture',
        'Scalable Infrastructure',
        'Multi-tenant Systems',
        'Enterprise Security',
        'Compliance Management',
        '24/7 Support'
      ],
      href: '/solutions/enterprise',
      image: '/images/enterprise-solutions.jpg'
    },
    {
      title: 'SMB Solutions',
      description: 'Cost-effective solutions designed for small and medium businesses.',
      icon: Users,
      color: 'from-blue-500 to-indigo-500',
      features: [
        'Affordable Pricing',
        'Quick Implementation',
        'Essential Features',
        'Basic Support',
        'Scalable Growth',
        'Training & Onboarding'
      ],
      href: '/solutions/smb',
      image: '/images/smb-solutions.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Solutions - Zion Tech Group"
        description="Comprehensive industry and technology solutions from Zion Tech Group. Transform your business with AI, cloud, cybersecurity, and digital transformation services."
        keywords="business solutions, industry solutions, technology solutions, AI solutions, digital transformation, healthcare, finance, manufacturing"
        canonicalUrl="https://ziontechgroup.com/solutions"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Industry-Leading
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {' '}Solutions
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Transform your business with our comprehensive suite of AI-powered solutions, 
            designed to address industry-specific challenges and drive innovation.
          </motion.p>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Tailored solutions designed for specific industries and business challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industrySolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-400 transition-all duration-300"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{solution.title}</h3>
                    <p className="text-gray-300">{solution.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to={solution.href}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Solutions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technology Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Cutting-edge technology solutions to drive innovation and competitive advantage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologySolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-400 transition-all duration-300"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{solution.title}</h3>
                    <p className="text-gray-300">{solution.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to={solution.href}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise vs SMB */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Business Size Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Tailored solutions for businesses of all sizes, from startups to enterprise organizations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {enterpriseSolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-400 transition-all duration-300"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{solution.title}</h3>
                    <p className="text-gray-300">{solution.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to={solution.href}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Zion Tech */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We combine cutting-edge technology with industry expertise to deliver exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: 'AI-First Approach',
                description: 'All our solutions are built with AI at the core, ensuring maximum efficiency and innovation.'
              },
              {
                icon: Shield,
                title: 'Enterprise Security',
                description: 'Bank-grade security and compliance built into every solution we deliver.'
              },
              {
                icon: Rocket,
                title: 'Rapid Implementation',
                description: 'Quick deployment and time-to-value with our proven implementation methodology.'
              },
              {
                icon: Users,
                title: 'Expert Team',
                description: 'Experienced professionals with deep industry and technology expertise.'
              },
              {
                icon: Globe,
                title: 'Global Reach',
                description: 'Worldwide support and deployment capabilities for international businesses.'
              },
              {
                icon: Award,
                title: 'Proven Results',
                description: 'Track record of successful transformations and measurable business outcomes.'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let our experts help you choose the right solution and implement it successfully. 
              Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
