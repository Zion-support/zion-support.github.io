import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, Zap, Shield, Users, Globe, ArrowRight, CheckCircle, Star,
  Server, Cloud, Database, Network, Lock, Code, Rocket, Building,
  Search, Phone, Mail, Cpu, Monitor, Smartphone, Wifi, Bluetooth,
  Satellite, Atom, Leaf, Space, Handshake, Calendar, DollarSign,
  BarChart3, Target, Award, Clock, Heart, Truck, Sparkles, Crown,
  Lightbulb, Globe2, FileText, Image, Video, Code, Palette,
  ShoppingCart, MessageSquare, Eye, Ear, Hand, Foot, Bone, Tooth,
  Pill, Bandage, Thermometer, Scale, Calculator, ChartBar, PieChart,
  LineChart, Activity, TrendingDown, Minus, Plus, Equal, Divide,
  Percent, Euro, Pound, Yen, CreditCard, Wallet, Banknote, Coins,
  PiggyBank, Safe, Vault, LockKeyhole, Key, Fingerprint, QrCode,
  Barcode, Scan, Camera, VideoOff, Mic, MicOff, Volume2, VolumeX
} from 'lucide-react';

const itServices2028 = [
  {
    id: 'quantum-cloud-infrastructure',
    name: 'Quantum Cloud Infrastructure',
    tagline: 'Next-generation quantum-ready cloud infrastructure',
    price: '$45,999',
    period: '/month',
    description: 'Revolutionary quantum-ready cloud infrastructure that provides unprecedented performance, security, and scalability for enterprise applications.',
    features: [
      'Quantum-ready computing nodes',
      'Advanced AI optimization',
      'Zero-latency networking',
      'Quantum encryption',
      'Auto-scaling infrastructure',
      'Real-time monitoring',
      'Disaster recovery',
      'Global CDN',
      'API management',
      'DevOps automation'
    ],
    popular: true,
    icon: Cloud,
    color: 'from-blue-600 to-cyan-700',
    category: 'Cloud & Infrastructure',
    realService: true,
    marketSize: '$18.5B cloud infrastructure market',
    growthRate: '320% annual growth',
    rating: 4.9,
    reviews: 89,
    customers: 45
  },
  {
    id: 'ai-powered-cybersecurity',
    name: 'AI-Powered Cybersecurity Suite',
    tagline: 'Intelligent threat detection and response',
    price: '$32,999',
    period: '/month',
    description: 'Advanced AI-powered cybersecurity platform that provides real-time threat detection, automated response, and predictive security analytics.',
    features: [
      'AI threat detection',
      'Behavioral analysis',
      'Zero-trust architecture',
      'Automated incident response',
      'Threat intelligence',
      'Compliance automation',
      'Security analytics',
      'Penetration testing',
      'Vulnerability assessment',
      'Security training'
    ],
    popular: true,
    icon: Shield,
    color: 'from-red-600 to-pink-700',
    category: 'Cybersecurity',
    realService: true,
    marketSize: '$15.2B cybersecurity market',
    growthRate: '280% annual growth',
    rating: 4.8,
    reviews: 234,
    customers: 156
  },
  {
    id: 'quantum-database-platform',
    name: 'Quantum Database Platform',
    tagline: 'Quantum-powered database management system',
    price: '$28,999',
    period: '/month',
    description: 'Revolutionary quantum database platform that provides unprecedented speed, security, and scalability for enterprise data management.',
    features: [
      'Quantum query optimization',
      'Real-time data processing',
      'Advanced encryption',
      'Auto-scaling storage',
      'Multi-model support',
      'Data analytics',
      'Backup automation',
      'Disaster recovery',
      'Performance monitoring',
      'API integration'
    ],
    popular: false,
    icon: Database,
    color: 'from-green-600 to-emerald-700',
    category: 'Database & Storage',
    realService: true,
    marketSize: '$8.9B database market',
    growthRate: '240% annual growth',
    rating: 4.7,
    reviews: 123,
    customers: 67
  },
  {
    id: 'ai-network-optimization',
    name: 'AI Network Optimization',
    tagline: 'Intelligent network performance and security',
    price: '$22,999',
    period: '/month',
    description: 'AI-powered network optimization platform that automatically manages, secures, and optimizes enterprise network infrastructure.',
    features: [
      'AI network monitoring',
      'Automatic optimization',
      'Traffic analysis',
      'Security automation',
      'Performance tuning',
      'Bandwidth management',
      'Quality of service',
      'Network analytics',
      'Alert management',
      'Reporting tools'
    ],
    popular: true,
    icon: Network,
    color: 'from-purple-600 to-indigo-700',
    category: 'Networking',
    realService: true,
    marketSize: '$12.3B network management market',
    growthRate: '260% annual growth',
    rating: 4.8,
    reviews: 189,
    customers: 98
  },
  {
    id: 'quantum-devops-automation',
    name: 'Quantum DevOps Automation',
    tagline: 'Next-generation development and operations automation',
    price: '$35,999',
    period: '/month',
    description: 'Advanced quantum-powered DevOps platform that automates software development, testing, deployment, and operations processes.',
    features: [
      'AI-powered CI/CD',
      'Automated testing',
      'Deployment automation',
      'Performance monitoring',
      'Error tracking',
      'Team collaboration',
      'Version control',
      'Infrastructure as code',
      'Security scanning',
      'Compliance automation'
    ],
    popular: true,
    icon: Rocket,
    color: 'from-orange-600 to-red-700',
    category: 'DevOps & Automation',
    realService: true,
    marketSize: '$9.8B DevOps market',
    growthRate: '300% annual growth',
    rating: 4.9,
    reviews: 267,
    customers: 134
  },
  {
    id: 'ai-data-analytics-platform',
    name: 'AI Data Analytics Platform',
    tagline: 'Intelligent business intelligence and analytics',
    price: '$25,999',
    period: '/month',
    description: 'Comprehensive AI-powered data analytics platform that provides real-time insights, predictive analytics, and automated reporting.',
    features: [
      'Real-time data processing',
      'AI-powered insights',
      'Predictive analytics',
      'Data visualization',
      'Automated reporting',
      'Custom dashboards',
      'Data integration',
      'Collaboration tools',
      'Mobile access',
      'API integration'
    ],
    popular: false,
    icon: BarChart3,
    color: 'from-emerald-600 to-teal-700',
    category: 'Data & Analytics',
    realService: true,
    marketSize: '$11.2B data analytics market',
    growthRate: '220% annual growth',
    rating: 4.6,
    reviews: 156,
    customers: 89
  }
];

const ITServices2028: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, color: 'from-zion-cyan to-zion-purple' },
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: Cloud, color: 'from-zion-blue to-zion-cyan' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-zion-red to-zion-pink' },
    { id: 'database', name: 'Database & Storage', icon: Database, color: 'from-zion-green to-zion-emerald' },
    { id: 'networking', name: 'Networking', icon: Network, color: 'from-zion-purple to-zion-indigo' },
    { id: 'devops', name: 'DevOps & Automation', icon: Rocket, color: 'from-zion-orange to-zion-red' },
    { id: 'analytics', name: 'Data & Analytics', icon: BarChart3, color: 'from-zion-emerald to-zion-teal' }
  ];

  const filteredServices = itServices2028.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
      service.category.toLowerCase().includes(selectedCategory.replace('-', ' '));
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
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
            IT Services 2028
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto"
          >
            Cutting-edge IT solutions powered by quantum computing and artificial intelligence
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <div className="bg-zion-cyan/20 backdrop-blur-sm border border-zion-cyan/30 rounded-full px-6 py-3 text-zion-cyan font-semibold">
              🚀 Quantum-Ready Infrastructure
            </div>
            <div className="bg-zion-purple/20 backdrop-blur-sm border border-zion-purple/30 rounded-full px-6 py-3 text-zion-purple font-semibold">
              🛡️ AI-Powered Security
            </div>
            <div className="bg-zion-blue/20 backdrop-blur-sm border border-zion-blue/30 rounded-full px-6 py-3 text-zion-blue font-semibold">
              💡 Intelligent Automation
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

            {/* Search */}
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
                  to={`/it-services/${service.id}`}
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
            Ready to Transform Your IT Infrastructure?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto"
          >
            Contact our team of IT experts to discuss how our innovative services can revolutionize your technology infrastructure
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

export default ITServices2028;