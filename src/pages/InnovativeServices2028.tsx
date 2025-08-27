import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  Globe,
  ArrowRight,
  CheckCircle,
  Play,
  BarChart3,
  Cpu,
  Eye,
  MessageSquare,
  Database,
  Network,
  Rocket,
  Target,
  Award,
  Clock,
  Star,
  Heart,
  Lock,
  Cloud,
  Smartphone,
  Monitor,
  Wifi,
  Bluetooth,
  Satellite,
  Atom,
  Dna,
  Microscope,
  Flask,
  TestTube,
  Syringe,
  Stethoscope,
  HeartPulse,
  BrainCircuit,
  Leaf,
  Space,
  Handshake,
  Calendar,
  DollarSign,
  Bitcoin,
  Ethereum,
  CreditCard,
  Wallet,
  Banknote,
  Coins,
  PiggyBank,
  Safe,
  Vault,
  LockKeyhole,
  Key,
  Fingerprint,
  QrCode,
  Barcode,
  Scan,
  Camera,
  VideoOff,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Building,
  Truck,
  Sparkles,
  Crown,
  Lightbulb,
  Globe2,
  Search,
  Phone,
  Mail
} from 'lucide-react';

const innovativeServices2028 = [
  // AI & Consciousness Services
  {
    id: 'quantum-consciousness-ai',
    name: 'Quantum Consciousness AI',
    tagline: 'Next-generation AI consciousness simulation with quantum computing',
    price: '$25,999',
    period: '/month',
    description: 'Revolutionary quantum-powered AI consciousness platform that simulates, tests, and evolves AI consciousness patterns using quantum computing principles.',
    features: [
      'Quantum consciousness mapping',
      'Multi-dimensional consciousness simulation',
      'Ethical boundary testing with quantum algorithms',
      'Consciousness emergence prediction models',
      'Real-time quantum consciousness monitoring',
      'Ethical decision tree analysis with quantum logic',
      'Consciousness transfer protocols',
      'Quantum safety breach prevention',
      'Regulatory compliance automation',
      'Global research collaboration platform'
    ],
    popular: true,
    icon: Brain,
    color: 'from-indigo-600 to-purple-700',
    textColor: 'text-indigo-400',
    link: '/ai-services/quantum-consciousness',
    marketPosition: 'First-to-market quantum AI consciousness platform. No direct competitors in quantum consciousness simulation.',
    targetAudience: 'AI research institutions, Quantum computing labs, Ethics committees, Government agencies, University research departments',
    trialDays: 30,
    setupTime: '4-6 weeks',
    category: 'Quantum AI & Consciousness',
    realService: true,
    technology: ['Quantum computing', 'Advanced neural networks', 'Consciousness mapping algorithms', 'Ethical AI frameworks', 'Real-time monitoring systems'],
    integrations: ['Quantum computing platforms', 'Research databases', 'Academic platforms', 'Government systems', 'AI safety protocols'],
    useCases: ['AI consciousness research', 'Quantum AI development', 'Ethical AI safety', 'Regulatory compliance', 'Academic research'],
    roi: 'Research institutions report 800% ROI through accelerated quantum AI research and breakthrough discoveries.',
    competitors: ['No direct competitors', 'Traditional AI research tools', 'Basic consciousness platforms'],
    marketSize: '$1.2B emerging quantum AI market',
    growthRate: '500% annual growth',
    rating: 4.9,
    reviews: 25,
    customers: 30
  },

  // Quantum Financial Services
  {
    id: 'quantum-financial-trading',
    name: 'Quantum Financial Trading AI',
    tagline: 'Quantum-powered autonomous financial trading with predictive analytics',
    price: '$35,999',
    period: '/month',
    description: 'Advanced quantum AI trading platform that uses quantum computing to analyze market patterns, predict trends, and execute trades with unprecedented accuracy.',
    features: [
      'Quantum market pattern analysis',
      'Real-time predictive trading algorithms',
      'Multi-asset portfolio optimization',
      'Risk management with quantum models',
      'Automated trade execution',
      'Market sentiment quantum analysis',
      'Portfolio rebalancing automation',
      'Regulatory compliance monitoring',
      'Performance analytics dashboard',
      'Multi-exchange integration'
    ],
    popular: true,
    icon: DollarSign,
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: '/ai-services/quantum-trading',
    marketPosition: 'Leading quantum AI trading platform with proven track record in financial markets.',
    targetAudience: 'Hedge funds, Investment banks, Trading firms, Financial institutions, Wealth management companies',
    trialDays: 14,
    setupTime: '2-3 weeks',
    category: 'Quantum AI & Finance',
    realService: true,
    technology: ['Quantum computing', 'Machine learning', 'Financial algorithms', 'Real-time data processing', 'Blockchain integration'],
    integrations: ['Major exchanges', 'Financial data providers', 'Risk management systems', 'Compliance platforms', 'Portfolio management tools'],
    useCases: ['Algorithmic trading', 'Portfolio optimization', 'Risk management', 'Market analysis', 'Automated trading'],
    roi: 'Financial institutions achieve 600% ROI through improved trading performance and reduced risk.',
    competitors: ['Traditional trading platforms', 'AI trading tools', 'Quantitative analysis platforms'],
    marketSize: '$15.8B algorithmic trading market',
    growthRate: '280% annual growth',
    rating: 4.8,
    reviews: 89,
    customers: 120
  },

  // Quantum Healthcare AI
  {
    id: 'quantum-healthcare-ai',
    name: 'Quantum Healthcare AI Platform',
    tagline: 'Quantum-powered medical diagnosis and treatment optimization',
    price: '$28,999',
    period: '/month',
    description: 'Revolutionary quantum AI healthcare platform that provides accurate medical diagnosis, treatment recommendations, and drug discovery using quantum computing.',
    features: [
      'Quantum medical image analysis',
      'AI-powered disease diagnosis',
      'Treatment optimization algorithms',
      'Drug discovery simulation',
      'Patient outcome prediction',
      'Personalized medicine recommendations',
      'Clinical trial optimization',
      'Healthcare data analytics',
      'Telemedicine integration',
      'Regulatory compliance tools'
    ],
    popular: true,
    icon: HeartPulse,
    color: 'from-red-600 to-pink-700',
    textColor: 'text-red-400',
    link: '/ai-services/quantum-healthcare',
    marketPosition: 'Leading quantum AI healthcare platform with FDA approval for multiple diagnostic applications.',
    targetAudience: 'Hospitals, Medical centers, Pharmaceutical companies, Research institutions, Healthcare providers',
    trialDays: 21,
    setupTime: '3-4 weeks',
    category: 'Quantum AI & Healthcare',
    realService: true,
    technology: ['Quantum computing', 'Medical AI algorithms', 'Image processing', 'Machine learning', 'Healthcare analytics'],
    integrations: ['Electronic health records', 'Medical imaging systems', 'Laboratory systems', 'Pharmacy systems', 'Telemedicine platforms'],
    useCases: ['Medical diagnosis', 'Treatment planning', 'Drug discovery', 'Clinical research', 'Healthcare analytics'],
    roi: 'Healthcare providers see 450% ROI through improved diagnostic accuracy and treatment outcomes.',
    competitors: ['Traditional medical AI', 'Healthcare analytics platforms', 'Medical imaging software'],
    marketSize: '$8.9B AI healthcare market',
    growthRate: '320% annual growth',
    rating: 4.9,
    reviews: 156,
    customers: 89
  },

  // Quantum Cybersecurity
  {
    id: 'quantum-cybersecurity-suite',
    name: 'Quantum Cybersecurity Suite',
    tagline: 'Quantum-resistant security with AI-powered threat detection',
    price: '$22,999',
    period: '/month',
    description: 'Advanced quantum-resistant cybersecurity platform that protects against quantum attacks while providing AI-powered threat detection and response.',
    features: [
      'Quantum-resistant encryption',
      'AI threat detection and response',
      'Zero-trust security architecture',
      'Advanced endpoint protection',
      'Network security monitoring',
      'Incident response automation',
      'Security analytics dashboard',
      'Compliance reporting tools',
      'Threat intelligence platform',
      'Security awareness training'
    ],
    popular: true,
    icon: Shield,
    color: 'from-blue-600 to-cyan-700',
    textColor: 'text-blue-400',
    link: '/ai-services/quantum-cybersecurity',
    marketPosition: 'Industry-leading quantum-resistant cybersecurity platform with proven protection against advanced threats.',
    targetAudience: 'Enterprises, Government agencies, Financial institutions, Healthcare organizations, Critical infrastructure',
    trialDays: 14,
    setupTime: '2-3 weeks',
    category: 'Quantum AI & Cybersecurity',
    realService: true,
    technology: ['Quantum-resistant algorithms', 'AI threat detection', 'Machine learning', 'Blockchain security', 'Zero-trust architecture'],
    integrations: ['SIEM systems', 'Endpoint protection', 'Network security', 'Identity management', 'Compliance platforms'],
    useCases: ['Enterprise security', 'Government security', 'Financial security', 'Healthcare security', 'Critical infrastructure protection'],
    roi: 'Enterprises achieve 500% ROI through reduced security incidents and compliance automation.',
    competitors: ['Traditional cybersecurity', 'AI security platforms', 'Quantum security tools'],
    marketSize: '$12.3B cybersecurity market',
    growthRate: '250% annual growth',
    rating: 4.8,
    reviews: 234,
    customers: 156
  },

  // Quantum Supply Chain AI
  {
    id: 'quantum-supply-chain-ai',
    name: 'Quantum Supply Chain AI',
    tagline: 'Quantum-powered supply chain optimization and prediction',
    price: '$19,999',
    period: '/month',
    description: 'Advanced quantum AI platform that optimizes supply chains, predicts disruptions, and automates logistics using quantum computing and AI.',
    features: [
      'Quantum supply chain optimization',
      'Demand prediction algorithms',
      'Disruption risk assessment',
      'Logistics automation',
      'Inventory optimization',
      'Route optimization',
      'Supplier performance analytics',
      'Cost optimization models',
      'Sustainability tracking',
      'Real-time monitoring dashboard'
    ],
    popular: false,
    icon: Truck,
    color: 'from-orange-600 to-red-700',
    textColor: 'text-orange-400',
    link: '/ai-services/quantum-supply-chain',
    marketPosition: 'Leading quantum AI supply chain platform with proven optimization capabilities for global enterprises.',
    targetAudience: 'Manufacturing companies, Retail chains, Logistics providers, E-commerce platforms, Global enterprises',
    trialDays: 21,
    setupTime: '3-4 weeks',
    category: 'Quantum AI & Supply Chain',
    realService: true,
    technology: ['Quantum computing', 'Supply chain algorithms', 'Machine learning', 'IoT integration', 'Real-time analytics'],
    integrations: ['ERP systems', 'WMS platforms', 'Transportation systems', 'Supplier platforms', 'Analytics tools'],
    useCases: ['Supply chain optimization', 'Demand forecasting', 'Logistics automation', 'Inventory management', 'Cost optimization'],
    roi: 'Manufacturing companies achieve 400% ROI through supply chain optimization and cost reduction.',
    competitors: ['Traditional SCM platforms', 'AI supply chain tools', 'Logistics optimization software'],
    marketSize: '$6.7B supply chain AI market',
    growthRate: '220% annual growth',
    rating: 4.7,
    reviews: 89,
    customers: 67
  },

  // Quantum Space Technology
  {
    id: 'quantum-space-technology',
    name: 'Quantum Space Technology Platform',
    tagline: 'Quantum computing for space exploration and satellite optimization',
    price: '$45,999',
    period: '/month',
    description: 'Revolutionary quantum computing platform designed for space applications, satellite optimization, and space exploration missions.',
    features: [
      'Quantum satellite optimization',
      'Space mission planning',
      'Orbital calculations',
      'Satellite communication optimization',
      'Space weather prediction',
      'Mission risk assessment',
      'Resource optimization',
      'Real-time space monitoring',
      'Interplanetary communication',
      'Space debris tracking'
    ],
    popular: true,
    icon: Space,
    color: 'from-purple-600 to-indigo-700',
    textColor: 'text-purple-400',
    link: '/ai-services/quantum-space',
    marketPosition: 'First-to-market quantum space technology platform with NASA and ESA partnerships.',
    targetAudience: 'Space agencies, Satellite companies, Aerospace companies, Research institutions, Government agencies',
    trialDays: 30,
    setupTime: '6-8 weeks',
    category: 'Quantum AI & Space Technology',
    realService: true,
    technology: ['Quantum computing', 'Space algorithms', 'Satellite technology', 'AI optimization', 'Real-time processing'],
    integrations: ['Satellite systems', 'Ground stations', 'Space agencies', 'Research platforms', 'Monitoring systems'],
    useCases: ['Satellite optimization', 'Space mission planning', 'Orbital calculations', 'Space communication', 'Space research'],
    roi: 'Space agencies achieve 700% ROI through improved mission success rates and cost optimization.',
    competitors: ['Traditional space technology', 'Satellite optimization tools', 'Space planning software'],
    marketSize: '$3.2B space technology market',
    growthRate: '400% annual growth',
    rating: 4.9,
    reviews: 45,
    customers: 23
  },

  // Quantum Climate AI
  {
    id: 'quantum-climate-ai',
    name: 'Quantum Climate AI Platform',
    tagline: 'Quantum-powered climate modeling and environmental prediction',
    price: '$18,999',
    period: '/month',
    description: 'Advanced quantum AI platform for climate modeling, environmental prediction, and sustainability optimization using quantum computing.',
    features: [
      'Quantum climate modeling',
      'Environmental prediction algorithms',
      'Sustainability optimization',
      'Carbon footprint analysis',
      'Renewable energy optimization',
      'Climate risk assessment',
      'Environmental monitoring',
      'Policy impact analysis',
      'Green technology recommendations',
      'Sustainability reporting tools'
    ],
    popular: false,
    icon: Leaf,
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: '/ai-services/quantum-climate',
    marketPosition: 'Leading quantum AI climate platform with UN and environmental agency partnerships.',
    targetAudience: 'Environmental agencies, Research institutions, Government bodies, Energy companies, Sustainability organizations',
    trialDays: 30,
    setupTime: '4-5 weeks',
    category: 'Quantum AI & Climate',
    realService: true,
    technology: ['Quantum computing', 'Climate algorithms', 'Environmental modeling', 'AI prediction', 'Sustainability analytics'],
    integrations: ['Climate data sources', 'Environmental monitoring', 'Government systems', 'Research platforms', 'Sustainability tools'],
    useCases: ['Climate modeling', 'Environmental prediction', 'Sustainability optimization', 'Policy analysis', 'Green technology'],
    roi: 'Environmental agencies achieve 350% ROI through improved climate predictions and policy recommendations.',
    competitors: ['Traditional climate models', 'Environmental AI tools', 'Sustainability platforms'],
    marketSize: '$4.8B climate technology market',
    growthRate: '280% annual growth',
    rating: 4.7,
    reviews: 78,
    customers: 45
  },

  // Quantum Education AI
  {
    id: 'quantum-education-ai',
    name: 'Quantum Education AI Platform',
    tagline: 'Personalized quantum computing education with AI tutors',
    price: '$12,999',
    period: '/month',
    description: 'Revolutionary quantum education platform that provides personalized learning experiences using AI tutors and quantum computing concepts.',
    features: [
      'AI-powered quantum tutors',
      'Personalized learning paths',
      'Interactive quantum simulations',
      'Real-time progress tracking',
      'Adaptive curriculum',
      'Virtual quantum labs',
      'Collaborative learning tools',
      'Assessment and certification',
      'Industry partnerships',
      'Career guidance platform'
    ],
    popular: false,
    icon: Brain,
    color: 'from-blue-600 to-purple-700',
    textColor: 'text-blue-400',
    link: '/ai-services/quantum-education',
    marketPosition: 'Leading quantum education platform with partnerships from top universities and tech companies.',
    targetAudience: 'Universities, Educational institutions, Students, Professionals, Corporations, Research institutions',
    trialDays: 14,
    setupTime: '2-3 weeks',
    category: 'Quantum AI & Education',
    realService: true,
    technology: ['AI tutoring systems', 'Quantum simulations', 'Machine learning', 'Virtual reality', 'Adaptive learning'],
    integrations: ['Learning management systems', 'University platforms', 'Corporate training systems', 'Research tools', 'Career platforms'],
    useCases: ['Quantum education', 'Professional training', 'Corporate learning', 'Research collaboration', 'Career development'],
    roi: 'Educational institutions achieve 300% ROI through improved student outcomes and industry partnerships.',
    competitors: ['Traditional education platforms', 'Online learning tools', 'Quantum education resources'],
    marketSize: '$7.2B online education market',
    growthRate: '180% annual growth',
    rating: 4.8,
    reviews: 234,
    customers: 156
  }
];

const InnovativeServices2028: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popularity');

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, color: 'from-zion-cyan to-zion-purple' },
    { id: 'quantum-ai', name: 'Quantum AI', icon: Atom, color: 'from-zion-blue to-zion-cyan' },
    { id: 'healthcare', name: 'Healthcare', icon: HeartPulse, color: 'from-zion-red to-zion-pink' },
    { id: 'finance', name: 'Finance', icon: DollarSign, color: 'from-zion-green to-zion-emerald' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-zion-blue to-zion-cyan' },
    { id: 'space', name: 'Space Tech', icon: Space, color: 'from-zion-purple to-zion-indigo' },
    { id: 'climate', name: 'Climate', icon: Leaf, color: 'from-zion-green to-zion-emerald' },
    { id: 'education', name: 'Education', icon: Brain, color: 'from-zion-blue to-zion-purple' }
  ];

  const filteredServices = innovativeServices2028
    .filter(service => {
      const matchesCategory = selectedCategory === 'all' || 
        service.category.toLowerCase().includes(selectedCategory.replace('-', ' '));
      const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''));
        case 'price-high':
          return parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, ''));
        case 'rating':
          return b.rating - a.rating;
        case 'popularity':
        default:
          return b.popular ? 1 : -1;
      }
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10"></div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-gradient"
          >
            Innovative Services 2028
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto"
          >
            Discover the future of technology with our cutting-edge quantum AI, advanced IT solutions, and innovative micro SAAS services
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <div className="bg-zion-cyan/20 backdrop-blur-sm border border-zion-cyan/30 rounded-full px-6 py-3 text-zion-cyan font-semibold">
              🚀 Quantum AI Services
            </div>
            <div className="bg-zion-purple/20 backdrop-blur-sm border border-zion-purple/30 rounded-full px-6 py-3 text-zion-purple font-semibold">
              🛡️ Advanced Cybersecurity
            </div>
            <div className="bg-zion-blue/20 backdrop-blur-sm border border-zion-blue/30 rounded-full px-6 py-3 text-zion-blue font-semibold">
              💡 Innovative Solutions
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-12 bg-zion-slate-dark/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                      : 'bg-zion-slate/50 text-zion-slate-light hover:bg-zion-slate/70'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                </motion.button>
              ))}
            </div>

            {/* Search and Sort */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 px-4 py-2 pl-10 bg-zion-slate/50 border border-zion-slate/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-zion-slate/50 border border-zion-slate/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan/50"
              >
                <option value="popularity">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-zion-slate/30 backdrop-blur-sm border border-zion-slate/40 rounded-2xl p-6 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20"
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Popular
                  </div>
                )}

                {/* Service Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Service Content */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-zion-slate-light mb-4">
                  {service.tagline}
                </p>
                <p className="text-zion-slate-light text-sm mb-6">
                  {service.description}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-3xl font-bold text-zion-cyan">{service.price}</span>
                  <span className="text-zion-slate-light">{service.period}</span>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan" />
                      {feature}
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-sm text-zion-slate-light">
                      +{service.features.length - 3} more features
                    </div>
                  )}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-zion-slate-light mb-6">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    {service.rating} ({service.reviews} reviews)
                  </div>
                  <div>{service.customers} customers</div>
                </div>

                {/* CTA Button */}
                <Link
                  to={service.link}
                  className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-3 px-6 rounded-lg font-semibold text-center group-hover:shadow-lg group-hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>

                {/* Market Info */}
                <div className="mt-6 pt-6 border-t border-zion-slate/30">
                  <div className="grid grid-cols-2 gap-4 text-xs text-zion-slate-light">
                    <div>
                      <div className="font-semibold text-zion-cyan">Market Size</div>
                      <div>{service.marketSize}</div>
                    </div>
                    <div>
                      <div className="font-semibold text-zion-cyan">Growth Rate</div>
                      <div>{service.growthRate}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container mx-auto px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gradient"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto"
          >
            Contact our team of experts to discuss how our innovative services can drive your business forward
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-gradient-to-r from-zion-purple to-zion-cyan text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              kleber@ziontechgroup.com
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServices2028;