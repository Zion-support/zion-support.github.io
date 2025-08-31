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
  MapPin as MapPinIcon
} from 'lucide-react';

const InnovativeServicesShowcase2026: React.FC = () => {
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
      id: 'ai-legal-analysis',
      title: 'AI Legal Document Analysis Platform',
      description: 'Revolutionize legal document processing with AI-powered analysis that reduces review time by 80% and improves accuracy by 95%.',
      icon: Shield,
      category: 'Legal Tech',
      price: '$299/month',
      features: [
        'AI-Powered Analysis (95% accuracy)',
        'Intelligent Search across legal documents',
        'Compliance Monitoring & Risk Assessment',
        'Automated Review & Analytics Dashboard',
        'Enterprise Security (SOC 2 Type II)',
        'Support for 50+ regulations'
      ],
      benefits: [
        '99.5% analysis accuracy',
        '90% time savings',
        'Support for 50+ regulations',
        'Used by 10,000+ legal firms'
      ],
      href: '/services/ai-legal-document-analysis',
      color: 'from-zion-purple to-zion-cyan'
    },
    {
      id: 'ai-real-estate',
      title: 'AI Real Estate Investment Platform',
      description: 'Transform your real estate investments with AI-powered market analysis, ROI predictions, and comprehensive property insights.',
      icon: Building2,
      category: 'Real Estate',
      price: '$99/month',
      features: [
        'AI Market Analysis (95% accuracy)',
        'Predictive Analytics for property appreciation',
        'Geographic Intelligence and neighborhood trends',
        'ROI Calculator with comprehensive analysis',
        'Risk Assessment and scoring',
        'Global Market Access (150+ countries)'
      ],
      benefits: [
        '95% analysis accuracy',
        '40% better returns',
        'Coverage of 150+ countries',
        '50,000+ active users'
      ],
      href: '/services/ai-real-estate-investment-platform',
      color: 'from-zion-cyan to-zion-purple'
    },
    {
      id: 'ai-supply-chain',
      title: 'AI Supply Chain Optimization Platform',
      description: 'Revolutionize your supply chain operations with AI-powered optimization that reduces costs by 40% and improves delivery times by 50%.',
      icon: Network,
      category: 'Supply Chain',
      price: '$499/month',
      features: [
        'AI Demand Forecasting (95% accuracy)',
        'Route Optimization reducing delivery costs by 30%',
        'Inventory Management reducing stockouts by 80%',
        'Global Visibility across supply chain networks',
        'Risk Management and mitigation strategies',
        'Performance Analytics and KPIs'
      ],
      benefits: [
        '95% forecast accuracy',
        '30% cost reduction',
        '80% stockout reduction',
        'Coverage of 100+ countries'
      ],
      href: '/services/ai-supply-chain-optimization-platform',
      color: 'from-zion-purple to-zion-cyan'
    }
  ];

  const categories = ['All', 'AI & Automation', 'Quantum AI', 'Space Technology', 'Legal Tech', 'Real Estate', 'Supply Chain'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredServices = selectedCategory === 'All' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Helmet>
        <title>Innovative Services Showcase 2026 | Zion Tech Group</title>
        <meta name="description" content="Discover Zion Tech Group's revolutionary AI-powered services for 2026. From autonomous logistics to quantum AI and space technology, transform your business with cutting-edge innovation." />
        <meta name="keywords" content="AI services 2026, quantum AI, space technology, autonomous logistics, legal tech, real estate AI, supply chain optimization" />
        <link rel="canonical" href="https://ziontechgroup.com/innovative-services-showcase-2026" />
      </Helmet>

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
              Innovative Services
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple"> Showcase 2026</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Experience the future of technology with our revolutionary AI-powered services. 
              From autonomous logistics to quantum computing and space technology, 
              discover solutions that will transform your business in 2026 and beyond.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Explore All Services
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

      {/* Category Filter */}
      <section className="py-12 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-zion-cyan text-white shadow-lg shadow-zion-cyan/25'
                    : 'bg-zion-slate-dark text-zion-slate-light hover:bg-zion-purple/20 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 rounded-2xl border border-zion-purple/20 overflow-hidden hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                {/* Service Header */}
                <div className={`bg-gradient-to-r ${service.color} p-8`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-white/80 text-sm font-medium">{service.category}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-white/90 mb-4">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-3xl font-bold text-white">
                      {service.price}
                    </div>
                    <Link
                      to={service.href}
                      className="flex items-center space-x-2 text-white hover:text-zion-cyan transition-colors group"
                    >
                      <span className="font-medium">Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Service Details */}
                <div className="p-8">
                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <Star className="w-5 h-5 text-zion-cyan mr-2" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3 text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <TrendingUpIcon className="w-5 h-5 text-zion-cyan mr-2" />
                      Key Benefits
                    </h4>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-3 text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Link
                    to={service.href}
                    className="block w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white text-center py-3 px-6 rounded-lg font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                  >
                    Get Started
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Zion Tech Group by the Numbers
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Our innovative services are already transforming businesses across the globe.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-bold text-zion-cyan mb-2">6</div>
              <div className="text-zion-slate-light">Revolutionary Services</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-bold text-zion-cyan mb-2">95%+</div>
              <div className="text-zion-slate-light">AI Accuracy Rate</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-bold text-zion-cyan mb-2">150+</div>
              <div className="text-zion-slate-light">Countries Served</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-bold text-zion-cyan mb-2">24/7</div>
              <div className="text-zion-slate-light">Global Support</div>
            </motion.div>
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
            className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-3xl p-12 text-center border border-zion-cyan/30"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business in 2026?
            </h2>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of companies already using our innovative AI services to gain competitive advantages. 
              Start your transformation journey today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Start Free Trial
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

      {/* Contact Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Ready to explore our innovative services? Our team is here to help you get started.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-zion-cyan font-medium">+1 302 464 0950</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-zion-cyan font-medium">kleber@ziontechgroup.com</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPinIcon className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-zion-cyan font-medium">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServicesShowcase2026;
