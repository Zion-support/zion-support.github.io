import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  BarChart3, 
  Target, 
  Rocket, 
  Atom, 
  Network,
  Eye,
  Cpu,
  Lock,
  MessageCircle,
  FileText,
  ShoppingCart,
  TrendingUp,
  Globe,
  Star,
  ArrowRight
} from 'lucide-react';

const UltimateServicesShowcase2026: React.FC = () => {
  const featuredServices = [
    {
      name: 'AI Autonomous Research Assistant',
      description: 'Revolutionary AI that conducts independent research and analysis',
      icon: Brain,
      color: 'from-blue-500 to-indigo-500',
      features: ['Autonomous research', 'Real-time analysis', 'Multi-source validation'],
      href: '/services/ai-autonomous-research-assistant'
    },
    {
      name: 'AI Quantum Hybrid Platform',
      description: 'Breakthrough integration of AI and quantum computing',
      icon: Atom,
      color: 'from-indigo-500 to-purple-500',
      features: ['Quantum-AI fusion', 'Exponential processing', 'Future-ready architecture'],
      href: '/services/ai-quantum-hybrid-platform'
    },
    {
      name: 'AI Cybersecurity Platform',
      description: 'Next-generation AI-powered security solutions',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      features: ['AI threat detection', 'Zero-day protection', 'Automated response'],
      href: '/services/ai-cybersecurity-platform'
    }
  ];

  const serviceCategories = [
    {
      name: 'AI & Machine Learning',
      icon: Brain,
      services: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence' },
        { name: 'AI Content Marketing Suite', href: '/services/ai-content-marketing-suite' },
        { name: 'AI Project Management', href: '/services/ai-project-management' },
        { name: 'AI Financial Analytics', href: '/services/ai-financial-analytics' }
      ]
    },
    {
      name: 'Cloud & Infrastructure',
      icon: Cloud,
      services: [
        { name: 'Cloud DevOps', href: '/services/cloud-devops' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure' },
        { name: 'FinOps Advisor', href: '/services/finops-advisor' },
        { name: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer' }
      ]
    },
    {
      name: 'Cybersecurity',
      icon: Shield,
      services: [
        { name: 'Zero Trust Network Access', href: '/services/zero-trust-network-access' },
        { name: 'Security Headers & CSP', href: '/services/security-headers-csp' },
        { name: 'DSR Privacy Portal', href: '/services/dsr-portal' }
      ]
    },
    {
      name: 'Digital Transformation',
      icon: Zap,
      services: [
        { name: 'Digital Twin', href: '/services/digital-twin' },
        { name: 'Digital Transformation', href: '/services/digital-transformation' },
        { name: 'IT Consulting', href: '/it-consulting' }
      ]
    },
    {
      name: 'Emerging Technologies',
      icon: Rocket,
      services: [
        { name: 'Quantum Computing', href: '/services/quantum-computing' },
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing' },
        { name: 'Space Technology', href: '/services/space-tech' }
      ]
    },
    {
      name: 'Micro SaaS Solutions',
      icon: ShoppingCart,
      services: [
        { name: 'Micro CRM', href: '/services/micro-crm' },
        { name: 'Helpdesk Platform', href: '/services/helpdesk-platform' },
        { name: 'Website Analytics', href: '/services/website-analytics' }
      ]
    }
  ];

  const innovations = [
    {
      title: 'AI-First Architecture',
      description: 'Built from the ground up with AI at the core of every service',
      icon: Brain
    },
    {
      title: 'Quantum-Ready Infrastructure',
      description: 'Prepared for the quantum computing revolution',
      icon: Atom
    },
    {
      title: 'Zero-Trust Security',
      description: 'Advanced security protocols for the modern threat landscape',
      icon: Lock
    },
    {
      title: 'Sustainable Technology',
      description: 'Green computing solutions for a better future',
      icon: Globe
    }
  ];

  return (
    <>
      <Helmet>
        <title>2026 Services Overview - Zion Tech Group</title>
        <meta name="description" content="Discover Zion Tech Group's revolutionary 2026 services portfolio featuring cutting-edge AI, quantum computing, and next-generation technology solutions." />
        <meta name="keywords" content="2026 services, AI services, quantum computing, cybersecurity, digital transformation, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/ultimate-services-showcase-2026" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                2026 Services Portfolio
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Revolutionary{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Technology
                </span>{' '}
                Services
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Experience the future of technology with our 2026 services portfolio. 
                From AI-powered solutions to quantum computing, we're redefining what's possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-400 text-black font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-500 transition-all duration-300">
                  Explore Services
                </button>
                <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 border border-cyan-400/30 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Services
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our most innovative and cutting-edge services for 2026
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={service.href}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Complete{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Service
                </span>{' '}
                Portfolio
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Explore our comprehensive range of technology services
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{category.name}</h3>
                  
                  <ul className="space-y-2">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex}>
                        <a
                          href={service.href}
                          className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                        >
                          {service.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Innovations Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                2026{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Innovations
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Cutting-edge technologies and approaches that set us apart
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {innovations.map((innovation, index) => (
                <motion.div
                  key={innovation.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/30 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 text-center hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <innovation.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{innovation.title}</h3>
                  <p className="text-gray-300 text-sm">{innovation.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Experience the{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Future?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the technology revolution with Zion Tech Group's 2026 services
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-400 text-black font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-500 transition-all duration-300">
                  Get Started Today
                </button>
                <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 border border-cyan-400/30 transition-all duration-300">
                  Contact Our Team
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default UltimateServicesShowcase2026;