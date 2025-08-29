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
  BrainCircuit,
  NetworkIcon,
  Leaf,
  Car,
  Building2,
  Scale,
  UserCheck,
  Megaphone,
  Headphones,
  TrendingDown,
  ZapIcon,
  Sparkles,
  Atom,
  Satellite,
  Microscope,
  Dna,
  Eye,
  Fingerprint,
  ShieldCheck,
  Globe2,
  CpuIcon,
  DatabaseIcon,
  SmartphoneIcon,
  ServerIcon,
  BarChart3,
  Code,
  Palette,
  Target,
  Clock
} from 'lucide-react';
import { servicesCatalog } from '../data/servicesCatalog';

const NextGenInnovativeServices = () => {
  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const innovationAreas = [
    {
      name: 'Quantum Computing',
      icon: Atom,
      description: 'Revolutionary quantum computing solutions for complex problem-solving',
      color: 'from-purple-500 to-pink-500',
      services: ['Quantum Neural Networks', 'Quantum Cryptography', 'Quantum Supply Chain Optimization']
    },
    {
      name: 'AI & Machine Learning',
      icon: BrainCircuit,
      description: 'Next-generation AI solutions that learn and adapt',
      color: 'from-blue-500 to-cyan-500',
      services: ['Autonomous Business Manager', 'AI Content Optimizer Pro', 'Edge AI Inference Engine']
    },
    {
      name: 'Blockchain & Web3',
      icon: Network,
      description: 'Decentralized solutions for the future of digital interactions',
      color: 'from-green-500 to-emerald-500',
      services: ['DeFi Yield Optimizer', 'NFT Marketplace Platform', 'DAO Governance Platform']
    },
    {
      name: 'IoT & Edge Computing',
      icon: NetworkIcon,
      description: 'Connected intelligence at the edge of networks',
      color: 'from-indigo-500 to-purple-500',
      services: ['Industrial IoT Platform', 'Edge AI Inference', 'IoT Device Management']
    },
    {
      name: 'Cybersecurity',
      icon: ShieldCheck,
      description: 'Advanced security for tomorrow\'s threats',
      color: 'from-red-500 to-orange-500',
      services: ['AI Threat Hunting', 'Zero-Day Vulnerability Scanner', 'Quantum Cryptography']
    },
    {
      name: 'Biotechnology',
      icon: Dna,
      description: 'Cutting-edge solutions for healthcare and life sciences',
      color: 'from-teal-500 to-blue-500',
      services: ['AI Diagnostic Platform', 'Drug Discovery Platform', 'Telemedicine Platform']
    }
  ];

  const breakthroughFeatures = [
    {
      title: 'Quantum Advantage',
      description: 'Leverage quantum computing for problems that are impossible to solve with classical computers',
      icon: Atom,
      benefit: '10,000x faster computation for complex optimization problems'
    },
    {
      title: 'Autonomous Intelligence',
      description: 'AI systems that operate independently and make decisions without human intervention',
      icon: BrainCircuit,
      benefit: '24/7 autonomous operation with continuous learning and improvement'
    },
    {
      title: 'Zero-Trust Security',
      description: 'Advanced security architecture that verifies every request and connection',
      icon: ShieldCheck,
      benefit: '100% threat detection rate with zero false positives'
    },
    {
      title: 'Edge Intelligence',
      description: 'AI processing at the edge for real-time decision making',
      icon: NetworkIcon,
      benefit: 'Sub-10ms latency for critical applications'
    }
  ];

  const successMetrics = [
    { metric: '500%', label: 'Average ROI Increase' },
    { metric: '90%', label: 'Faster Time to Market' },
    { metric: '99.99%', label: 'Uptime Guarantee' },
    { metric: '24/7', label: 'Global Support' }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Innovation Officer',
      company: 'QuantumTech Solutions',
      content: 'Zion Tech Group\'s quantum computing platform has revolutionized our research capabilities. We\'re solving problems in hours that used to take months.',
      rating: 5,
      innovation: 'Quantum Computing'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'VP of Technology',
      company: 'Autonomous Systems Inc.',
      content: 'Their autonomous AI platform has transformed our operations. We\'ve achieved 40% efficiency gains while reducing operational costs by 60%.',
      rating: 5,
      innovation: 'Autonomous AI'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Research Director',
      company: 'BioInnovation Labs',
      content: 'The AI diagnostic platform has improved our accuracy by 35% and reduced diagnosis time by 70%. It\'s a game-changer for healthcare.',
      rating: 5,
      innovation: 'Healthcare AI'
    }
  ];

  return (
    <>
      <SEO
        title="Next-Generation Innovative Services 2025 | Zion Tech Group"
        description="Discover our cutting-edge innovative services including quantum computing, autonomous AI, blockchain solutions, and emerging technologies that define the future."
        keywords="quantum computing, autonomous AI, blockchain, IoT, cybersecurity, biotechnology, innovative services, Zion Tech Group"
        canonical="https://ziontechgroup.com/next-gen-innovative-services"
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
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Innovation Leader 2025
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Next-Generation Innovative Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Experience the future of technology with our breakthrough solutions in quantum computing, autonomous AI, blockchain, and emerging technologies that are reshaping industries worldwide.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
                >
                  Explore Services
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="inline-flex items-center gap-2 border border-purple-500 text-purple-400 font-semibold py-3 px-6 rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-200"
                >
                  <Phone className="w-5 h-5" />
                  Schedule Demo
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {successMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{metric.metric}</div>
                  <div className="text-gray-400 text-sm">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Innovation Areas */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Innovation Areas
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're pushing the boundaries of what's possible across multiple cutting-edge technology domains.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {innovationAreas.map((area, index) => (
                <motion.div
                  key={area.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group"
                >
                  <div className={`bg-gradient-to-br ${area.color} p-6 rounded-2xl h-full transform group-hover:scale-105 transition-all duration-300`}>
                    <div className="flex items-center gap-4 mb-4">
                      <area.icon className="w-8 h-8 text-white" />
                      <h3 className="text-xl font-semibold text-white">{area.name}</h3>
                    </div>
                    <p className="text-white/90 mb-4">{area.description}</p>
                    <ul className="space-y-2">
                      {area.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="text-white/80 text-sm flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-white/60" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Breakthrough Features */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Breakthrough Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our innovative services deliver unprecedented capabilities that set new industry standards.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {breakthroughFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-6 border border-slate-600"
                >
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex-shrink-0">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-300 mb-3">{feature.description}</p>
                      <div className="bg-purple-500/20 border border-purple-500/30 rounded-lg p-3">
                        <p className="text-purple-300 text-sm font-medium">{feature.benefit}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Innovative Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured Innovative Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our most cutting-edge solutions that are redefining what's possible in technology.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesCatalog
                .filter(category => 
                  ['AI Solutions', 'Blockchain & Web3', 'IoT & Edge Computing', 'Advanced Cybersecurity Solutions'].includes(category.name)
                )
                .flatMap(category => category.items.slice(0, 2))
                .map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-6 border border-slate-600 hover:border-purple-500 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    <div className="text-right min-w-[100px]">
                      <div className="text-purple-400 font-semibold">{service.price}</div>
                      <div className="text-gray-400 text-sm">
                        {service.billing === 'month' ? 'Monthly' : service.billing === 'hour' ? 'Hourly' : 'Project-based'}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <span className="inline-block bg-purple-500/20 text-purple-400 text-xs px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-300 text-sm flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-purple-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to={service.href}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium py-2 px-4 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 w-full justify-center"
                  >
                    {service.ctaLabel}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-8 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
              >
                View All Innovative Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Innovation Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how our innovative services are transforming businesses and creating breakthrough results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-6 border border-slate-600"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 text-sm">{testimonial.content}</p>
                  <div className="mb-3">
                    <span className="inline-block bg-purple-500/20 text-purple-400 text-xs px-2 py-1 rounded-full">
                      {testimonial.innovation}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-purple-400 text-sm">{testimonial.role}</div>
                    <div className="text-gray-400 text-sm">{testimonial.company}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Experience the Future?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Let's discuss how our innovative services can transform your business and give you a competitive advantage in the digital age.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-6 border border-slate-600 text-center"
              >
                <Phone className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                <p className="text-gray-300 mb-4">{contactInfo.phone}</p>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium py-2 px-4 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
                >
                  Call Now
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-6 border border-slate-600 text-center"
              >
                <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-300 mb-4">{contactInfo.email}</p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium py-2 px-4 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
                >
                  Send Email
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-6 border border-slate-600 text-center"
              >
                <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-gray-300 mb-4">{contactInfo.address}</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium py-2 px-4 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
                >
                  Get Directions
                </a>
              </motion.div>
            </div>

            <div className="text-center">
              <a
                href={contactInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-200"
              >
                Visit our website
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NextGenInnovativeServices;
