import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Brain, 
  Server, 
  Shield, 
  Users, 
  Building2, 
  Rocket, 
  Target, 
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Globe,
  Cpu,
  Database,
  Network,
  Truck,
  Satellite,
  Atom,
  BarChart3,
  MessageCircle,
  Workflow,
  TrendingUp as TrendingUpIcon,
  Users as UsersIcon,
  Shield as ShieldIcon,
  Globe as GlobeIcon,
  Phone,
  Mail,
  MapPin as MapPinIcon,
  DollarSign,
  FileText,
  Heart
} from 'lucide-react';

export default function InnovativeServicesShowcase2026() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const services = [
    {
      id: 'ai-autonomous-logistics',
      title: 'AI Autonomous Logistics Platform',
      description: 'Revolutionize your logistics operations with AI-powered autonomous fleet management and intelligent route optimization.',
      icon: Truck,
      category: 'AI & Automation',
      price: '$599/month',
      features: [
        'AI-Powered Fleet Management',
        'Intelligent Route Optimization',
        'Smart Package Tracking',
        'Global Supply Chain Visibility',
        'Predictive Analytics (95% accuracy)',
        'Security & Compliance'
      ],
      benefits: [
        '40% reduction in delivery costs',
        '60% improvement in delivery times',
        '95% route optimization accuracy',
        '80% reduction in fuel consumption'
      ],
      href: '/services/ai-autonomous-logistics-platform',
      color: 'from-zion-cyan to-zion-purple'
    },
    {
      id: 'ai-quantum-neural',
      title: 'AI Quantum Neural Network Platform',
      description: 'Experience the future of AI with our revolutionary quantum neural network platform for unprecedented computational power.',
      icon: Atom,
      category: 'Quantum AI',
      price: '$1,999/month',
      features: [
        'Quantum Neural Networks',
        'Advanced AI Models',
        'Quantum Circuit Optimization',
        'Distributed Computing',
        'Real-time Processing',
        'Quantum Security'
      ],
      benefits: [
        '1000x faster computation speed',
        '99.9% quantum accuracy rate',
        '50% reduction in energy consumption',
        'Unlimited scalability potential'
      ],
      href: '/services/ai-quantum-neural-network-platform',
      color: 'from-zion-purple to-zion-cyan'
    },
    {
      id: 'ai-space-technology',
      title: 'AI Space Technology Platform',
      description: 'Pioneer the future of space exploration with our AI-powered space technology platform for autonomous space operations.',
      icon: Satellite,
      category: 'Space Technology',
      price: '$2,999/month',
      features: [
        'Satellite Constellation Management',
        'Space Observation & Analytics',
        'Orbital Mechanics AI',
        'Space Communication Networks',
        'Real-time Space Monitoring',
        'Space Security & Defense'
      ],
      benefits: [
        '99.9% satellite tracking accuracy',
        '1000x faster space data processing',
        '24/7 continuous space monitoring',
        'Global coverage and reach'
      ],
      href: '/services/ai-space-technology-platform',
      color: 'from-zion-cyan to-zion-purple'
    },
    {
      id: 'ai-legal-document-automation',
      title: 'AI Legal Document Automation Platform',
      description: 'Transform your legal practice with AI-powered document automation, intelligent contract review, and automated compliance management.',
      icon: FileText,
      category: 'Legal Technology',
      price: '$399 - $1,999/month',
      features: [
        'AI-powered document analysis',
        'Smart document generation',
        'Intelligent contract review',
        'Compliance & risk management',
        'Workflow automation',
        'Enterprise security'
      ],
      benefits: [
        'Reduce legal document processing time by 80%',
        'Eliminate 95% of manual errors',
        'Ensure 100% regulatory compliance',
        'Save up to $50,000 annually'
      ],
      href: '/services/ai-legal-document-automation-platform',
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 'ai-healthcare-analytics',
      title: 'AI Healthcare Analytics Platform',
      description: 'Transform healthcare delivery with AI-powered analytics, predictive insights, and clinical decision support.',
      icon: Heart,
      category: 'Healthcare Technology',
      price: '$599 - $2,999/month',
      features: [
        'AI-powered predictive analytics',
        'Real-time patient monitoring',
        'Clinical decision support',
        'HIPAA-compliant security',
        'Population health insights',
        'Drug discovery acceleration'
      ],
      benefits: [
        'Improve patient outcomes by 40%',
        'Reduce healthcare costs by 30%',
        'Accelerate drug discovery by 5x',
        'Ensure 99.9% data accuracy'
      ],
      href: '/services/ai-healthcare-analytics-platform',
      color: 'from-green-500 to-blue-600'
    },
    {
      id: 'ai-financial-risk-management',
      title: 'AI Financial Risk Management Platform',
      description: 'Advanced AI-powered financial risk assessment, fraud detection, and regulatory compliance for financial institutions.',
      icon: Shield,
      category: 'Financial Technology',
      price: '$799 - $3,999/month',
      features: [
        'Real-time risk assessment',
        'AI-powered fraud detection',
        'Regulatory compliance automation',
        'Portfolio optimization',
        'Stress testing scenarios',
        'Market trend analysis'
      ],
      benefits: [
        'Reduce financial losses by 60%',
        'Improve compliance accuracy by 95%',
        'Real-time risk monitoring',
        'Automated regulatory reporting'
      ],
      href: '/services/ai-financial-risk-management-platform',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      id: 'ai-supply-chain-optimization',
      title: 'AI Supply Chain Optimization Platform',
      description: 'Revolutionize supply chain management with AI-powered optimization, predictive analytics, and real-time visibility.',
      icon: Network,
      category: 'Supply Chain',
      price: '$499 - $2,499/month',
      features: [
        'End-to-end supply chain visibility',
        'AI-powered demand forecasting',
        'Inventory optimization',
        'Route optimization',
        'Supplier risk assessment',
        'Real-time tracking'
      ],
      benefits: [
        'Reduce supply chain costs by 35%',
        'Improve delivery accuracy by 90%',
        'Optimize inventory levels by 40%',
        'Enhance supplier relationships'
      ],
      href: '/services/ai-supply-chain-optimization-platform',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const categories = ['All', ...Array.from(new Set(services.map(service => service.category)))];

  const filteredServices = selectedCategory === 'All' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Innovative AI Services Showcase 2026 | Zion Tech Group</title>
        <meta name="description" content="Discover cutting-edge AI services and solutions for 2026. From autonomous logistics to quantum neural networks, explore the future of technology with Zion Tech Group." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, autonomous systems, quantum computing, space technology, logistics, healthcare analytics, financial risk management" />
        <meta property="og:title" content="Innovative AI Services Showcase 2026 | Zion Tech Group" />
        <meta property="og:description" content="Discover cutting-edge AI services and solutions for 2026. From autonomous logistics to quantum neural networks, explore the future of technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/innovative-services-showcase-2026" />
        <link rel="canonical" href="https://ziontechgroup.com/innovative-services-showcase-2026" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center space-x-2 bg-zion-cyan/20 text-zion-cyan px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Rocket className="w-4 h-4" />
                <span>2026 Innovation Showcase</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Innovative AI Services
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple"> Showcase 2026</span>
              </h1>
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
                Experience the future of technology with our cutting-edge AI services. From autonomous logistics to quantum neural networks, 
                discover solutions that will transform your business in 2026 and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  Explore Services
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-zion-cyan text-zion-cyan px-8 py-4 rounded-lg font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg shadow-zion-cyan/25'
                      : 'bg-slate-800 text-zion-slate-light hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-xl hover:shadow-zion-cyan/10"
                >
                  {/* Service Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Service Content */}
                  <div className="space-y-4">
                    <div>
                      <span className="inline-block px-3 py-1 bg-slate-700/50 text-zion-cyan text-xs font-medium rounded-full mb-3">
                        {service.category}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-zion-slate-light text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-4 h-4 text-zion-cyan" />
                      <span className="text-white font-semibold">{service.price}</span>
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-white">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-xs text-zion-slate-light">
                            <CheckCircle className="w-3 h-3 text-zion-cyan flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-white">Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-xs text-zion-slate-light">
                            <TrendingUp className="w-3 h-3 text-zion-cyan flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <Link
                      to={service.href}
                      className="inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-medium rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 group-hover:scale-105"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
                Join the future of technology with our innovative AI services. Get started today and experience the power of next-generation solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-zion-cyan text-zion-cyan px-8 py-4 rounded-lg font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  Contact Sales
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-slate-800/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                <p className="text-zion-slate-light">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl mb-4">
                  <MapPinIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
