import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Atom, Brain, Zap, Shield, Cpu, Rocket, ArrowRight, 
  CheckCircle, Star, Phone, Mail, MapPin, Search, Filter,
  Bot, GitFork, Sparkles, Workflow, Target, Lock, 
  Eye, ExternalLink, Download, Upload, Share, Bookmark,
  MessageCircle, PhoneCall, VideoCall, MailOpen, Send,
  Plus, Minus, Database, Server, Network, Code, Palette,
  Camera, Video, Music, Gamepad2, Car, Plane, Ship, Leaf,
  Sun, Wind, Smartphone, Watch, Headphones, Printer, Wifi,
  Bluetooth, Satellite, Telescope, Microscope, Beaker, Pill,
  Stethoscope, Calculator, BookOpen, GraduationCap, DollarSign,
  CreditCard, ShoppingCart, Truck, Warehouse, Factory, Building2,
  Home, Store, Bank, Insurance, Law, Gavel, FileText, Calendar,
  Clock, Timer, Stopwatch, Thermometer, Gauge, Compass, Map,
  SortAsc, SortDesc, ChevronDown, ChevronUp, Users, BarChart3,
  Cloud, Globe, Target as TargetIcon
} from 'lucide-react';

interface QuantumService {
  id: string;
  title: string;
  description: string;
  category: string;
  features: string[];
  pricing: string;
  benefits: string[];
  icon: any;
  color: string;
  featured: boolean;
  cta: string;
  ctaLink: string;
  marketPrice: string;
  roi: string;
  applications: string[];
  qubitCount: string;
}

const QuantumComputingServices2029: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Quantum Services', icon: Atom, count: 0 },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Cpu, count: 0 },
    { id: 'quantum-ai', name: 'Quantum AI', icon: Brain, count: 0 },
    { id: 'quantum-security', name: 'Quantum Security', icon: Shield, count: 0 },
    { id: 'quantum-optimization', name: 'Optimization', icon: TargetIcon, count: 0 },
    { id: 'quantum-research', name: 'Research & Development', icon: Microscope, count: 0 },
    { id: 'quantum-consulting', name: 'Consulting', icon: Users, count: 0 }
  ];

  const quantumServices: QuantumService[] = [
    // QUANTUM COMPUTING ACCESS
    {
      id: 'quantum-computing-platform',
      title: 'Quantum Computing Elite Platform',
      description: 'Access to cutting-edge quantum computing with AI-quantum hybrid systems for complex problem solving',
      category: 'quantum-computing',
      features: [
        '1000+ Qubit Access',
        'AI-Quantum Hybrid Systems',
        'Quantum-Safe Cryptography',
        'Global Network Access',
        'Custom Algorithm Development',
        'Performance Optimization',
        'Expert Consultation',
        'Training & Support'
      ],
      pricing: '$8,500 - $45,000/month',
      benefits: [
        'Solve impossible problems',
        'Exponential speed improvements',
        'Future-proof cryptography',
        'Competitive advantage',
        'Research leadership'
      ],
      icon: Atom,
      color: 'from-blue-500 to-cyan-500',
      featured: true,
      cta: 'Access Quantum',
      ctaLink: '/contact',
      marketPrice: '$15,000 - $100,000/month',
      roi: '500% ROI in 24 months',
      applications: [
        'Drug Discovery',
        'Financial Modeling',
        'Climate Research',
        'AI Training'
      ],
      qubitCount: '1000+ Qubits'
    },
    {
      id: 'quantum-simulator',
      title: 'Quantum Simulator Pro',
      description: 'High-fidelity quantum simulation platform for testing and validating quantum algorithms',
      category: 'quantum-computing',
      features: [
        'Up to 100 Qubit Simulation',
        'Noise Modeling',
        'Error Correction',
        'Algorithm Testing',
        'Performance Analysis',
        'Custom Noise Models',
        'API Integration',
        'Real-time Results'
      ],
      pricing: '$2,500 - $12,000/month',
      benefits: [
        'Test algorithms before deployment',
        'Reduce quantum costs',
        'Faster development cycles',
        'Better algorithm optimization',
        'Risk-free experimentation'
      ],
      icon: Cpu,
      color: 'from-green-500 to-emerald-500',
      featured: false,
      cta: 'Start Simulating',
      ctaLink: '/contact',
      marketPrice: '$5,000 - $20,000/month',
      roi: '350% ROI in 12 months',
      applications: [
        'Algorithm Development',
        'Research & Education',
        'Proof of Concepts',
        'Performance Testing'
      ],
      qubitCount: '100 Qubits'
    },

    // QUANTUM AI
    {
      id: 'quantum-ai-platform',
      title: 'Quantum AI Hybrid Platform',
      description: 'Revolutionary platform combining quantum computing with artificial intelligence for unprecedented capabilities',
      category: 'quantum-ai',
      features: [
        'Quantum Neural Networks',
        'Hybrid Classical-Quantum ML',
        'Quantum Feature Maps',
        'Quantum Kernel Methods',
        'Quantum Generative Models',
        'Real-time Learning',
        'Scalable Architecture',
        'Custom Model Training'
      ],
      pricing: '$5,000 - $25,000/month',
      benefits: [
        'Exponential AI capabilities',
        'Faster model training',
        'Better pattern recognition',
        'Quantum advantage in ML',
        'Future-proof AI solutions'
      ],
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      featured: true,
      cta: 'Explore Quantum AI',
      ctaLink: '/contact',
      marketPrice: '$10,000 - $40,000/month',
      roi: '450% ROI in 18 months',
      applications: [
        'Machine Learning',
        'Pattern Recognition',
        'Optimization Problems',
        'Data Analysis'
      ],
      qubitCount: '500+ Qubits'
    },

    // QUANTUM SECURITY
    {
      id: 'quantum-cryptography',
      title: 'Quantum-Safe Cryptography Suite',
      description: 'Post-quantum cryptography solutions to protect against quantum computing threats',
      category: 'quantum-security',
      features: [
        'Post-Quantum Algorithms',
        'Quantum Key Distribution',
        'Hybrid Cryptography',
        'Migration Planning',
        'Security Audits',
        'Compliance Support',
        'Performance Optimization',
        'Future-Proof Security'
      ],
      pricing: '$3,000 - $18,000/month',
      benefits: [
        'Protect against quantum threats',
        'Future-proof security',
        'Compliance readiness',
        'Competitive advantage',
        'Risk mitigation'
      ],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      featured: false,
      cta: 'Secure Now',
      ctaLink: '/contact',
      marketPrice: '$6,000 - $25,000/month',
      roi: '400% ROI in 15 months',
      applications: [
        'Financial Services',
        'Healthcare',
        'Government',
        'Critical Infrastructure'
      ],
      qubitCount: 'N/A'
    },

    // QUANTUM OPTIMIZATION
    {
      id: 'quantum-optimization',
      title: 'Quantum Optimization Engine',
      description: 'Advanced optimization engine using quantum algorithms for complex business problems',
      category: 'quantum-optimization',
      features: [
        'Quantum Annealing',
        'Quantum Approximate Optimization',
        'Custom Problem Encoding',
        'Real-time Optimization',
        'Performance Analytics',
        'API Integration',
        'Scalable Solutions',
        'Expert Support'
      ],
      pricing: '$4,000 - $20,000/month',
      benefits: [
        'Solve complex optimization problems',
        'Faster solution times',
        'Better optimal solutions',
        'Scale optimization efforts',
        'Competitive advantage'
      ],
      icon: TargetIcon,
      color: 'from-indigo-500 to-purple-500',
      featured: false,
      cta: 'Optimize Now',
      ctaLink: '/contact',
      marketPrice: '$8,000 - $30,000/month',
      roi: '380% ROI in 16 months',
      applications: [
        'Supply Chain Optimization',
        'Portfolio Management',
        'Route Optimization',
        'Resource Allocation'
      ],
      qubitCount: '200+ Qubits'
    },

    // QUANTUM RESEARCH
    {
      id: 'quantum-research-platform',
      title: 'Quantum Research & Development Platform',
      description: 'Comprehensive platform for quantum research, development, and innovation',
      category: 'quantum-research',
      features: [
        'Research Environment',
        'Collaboration Tools',
        'Data Management',
        'Experiment Tracking',
        'Publication Support',
        'Grant Assistance',
        'Patent Support',
        'Industry Partnerships'
      ],
      pricing: '$2,000 - $15,000/month',
      benefits: [
        'Accelerate research',
        'Collaborate globally',
        'Secure funding',
        'Protect IP',
        'Industry connections'
      ],
      icon: Microscope,
      color: 'from-teal-500 to-cyan-500',
      featured: false,
      cta: 'Start Researching',
      ctaLink: '/contact',
      marketPrice: '$4,000 - $25,000/month',
      roi: '320% ROI in 20 months',
      applications: [
        'Academic Research',
        'Corporate R&D',
        'Government Research',
        'Startup Innovation'
      ],
      qubitCount: '100+ Qubits'
    },

    // QUANTUM CONSULTING
    {
      id: 'quantum-consulting',
      title: 'Quantum Strategy Consulting',
      description: 'Expert consulting services to develop quantum computing strategies and roadmaps',
      category: 'quantum-consulting',
      features: [
        'Strategy Development',
        'Technology Assessment',
        'Implementation Planning',
        'Team Training',
        'Vendor Selection',
        'ROI Analysis',
        'Risk Assessment',
        'Ongoing Support'
      ],
      pricing: '$500 - $2,500/hour',
      benefits: [
        'Expert guidance',
        'Avoid costly mistakes',
        'Accelerate adoption',
        'Maximize ROI',
        'Competitive positioning'
      ],
      icon: Users,
      color: 'from-yellow-500 to-orange-500',
      featured: false,
      cta: 'Get Consultation',
      ctaLink: '/contact',
      marketPrice: '$800 - $3,500/hour',
      roi: '600% ROI in 12 months',
      applications: [
        'Enterprise Strategy',
        'Technology Planning',
        'Digital Transformation',
        'Innovation Management'
      ],
      qubitCount: 'N/A'
    }
  ];

  // Calculate category counts
  categories.forEach(cat => {
    cat.count = quantumServices.filter(service => 
      cat.id === 'all' || service.category === cat.id
    ).length;
  });

  const filteredServices = quantumServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto px-4 py-20 text-white">
        {/* Header */}
        <motion.header 
          className="text-center max-w-6xl mx-auto mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Quantum Computing Services 2029
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
            Access the future of computing with our cutting-edge quantum computing solutions, quantum AI, and quantum-safe security services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="inline-block w-5 h-5 mr-2" />
              Call +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="inline-block w-5 h-5 mr-2" />
              Email kleber@ziontechgroup.com
            </a>
          </div>
        </motion.header>

        {/* Search and Filter */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search quantum services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                      : 'bg-white/10 border border-white/20 text-gray-300 hover:bg-white/20 hover:border-cyan-400/40'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className={`bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 transform hover:scale-105 ${
                service.featured ? 'ring-2 ring-cyan-400/50' : ''
              }`}
            >
              {/* Service Header */}
              <div className="flex items-start justify-between mb-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                {service.featured && (
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    FEATURED
                  </div>
                )}
              </div>

              {/* Service Title & Description */}
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">{service.description}</p>

              {/* Qubit Count */}
              {service.qubitCount !== 'N/A' && (
                <div className="mb-4 p-3 bg-cyan-500/10 border border-cyan-400/20 rounded-lg">
                  <div className="text-sm text-cyan-300 font-semibold">Quantum Power</div>
                  <div className="text-lg font-bold text-cyan-400">{service.qubitCount}</div>
                </div>
              )}

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-cyan-300 mb-3 uppercase tracking-wide">Key Features</h4>
                <ul className="space-y-2">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 4 && (
                    <li className="text-sm text-cyan-400 font-medium">
                      +{service.features.length - 4} more features
                    </li>
                  )}
                </ul>
              </div>

              {/* Benefits */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-green-300 mb-3 uppercase tracking-wide">Benefits</h4>
                <ul className="space-y-2">
                  {service.benefits.slice(0, 3).map((benefit, index) => (
                    <li key={index} className="flex items-center text-sm text-slate-300">
                      <Star className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applications */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-purple-300 mb-3 uppercase tracking-wide">Applications</h4>
                <div className="flex flex-wrap gap-2">
                  {service.applications.map((application, index) => (
                    <span key={index} className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs">
                      {application}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pricing & ROI */}
              <div className="mb-6 p-4 bg-white/5 rounded-xl">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-bold text-cyan-300">{service.pricing}</span>
                  <span className="text-sm text-green-400 font-medium">{service.roi}</span>
                </div>
                <div className="text-xs text-slate-400">
                  Market Price: {service.marketPrice}
                </div>
              </div>

              {/* CTA Button */}
              <a
                href={service.ctaLink}
                className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white py-3 px-6 rounded-xl font-semibold text-center transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                {service.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Section */}
        <motion.section 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/20 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Access Quantum Computing?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Get a personalized quantum strategy and discover how quantum computing can solve your most complex problems
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-slate-300">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-slate-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-slate-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            <div className="mt-8">
              <a 
                href="/contact"
                className="inline-flex items-center bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Quantum Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default QuantumComputingServices2029;