import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Zap, 
  Users, 
  BarChart3, 
  Cpu,
  Network,
  Code,
  Search,
  MessageSquare,
  FileText,
  TrendingUp,
  Target,
  Rocket,
  Atom,
  Mail,
  Phone,
  MapPin,
  Star,
  CheckCircle,
  ArrowRight,
  Eye,
  Lock,
  Globe,
  Database,
  Palette,
  Camera,
  Video,
  Music,
  BookOpen,
  Calendar,
  ExternalLink,
  Sparkles,
  Gauge,
  Workflow,
  Heart,
  Truck,
  Building,
  Server,
  Smartphone,
  Clock,
  Satellite,
  TestTube,
  Beaker,
  Pill,
  Stethoscope,
  Syringe,
  HeartPulse,
  Activity,
  Thermometer,
  Droplet,
  EyeOff,
  Key,
  Fingerprint,
  Scan,
  QrCode,
  CreditCard,
  Wallet,
  PiggyBank,
  TrendingDown,
  BarChart,
  PieChart,
  LineChart,
  ScatterChart,
  AreaChart,
  CandlestickChart,
  GanttChart,
  Kanban,
  Timer,
  Stopwatch,
  Warehouse,
  Factory,
  Package,
  Navigation,
  Route,
  Compass,
  Leaf,
  Sun,
  Wind,
  Droplets,
  Mountain,
  TreePine,
  Recycle,
  Lightbulb,
  Battery,
  Wifi,
  Bluetooth,
  Radio,
  Telescope,
  Microscope,
  Gamepad2,
  Car,
  Plane,
  Ship,
  Train
} from 'lucide-react';

const InnovativeServicesShowcase2030: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, count: 0 },
    { id: 'quantum', name: 'Quantum Tech', icon: Atom, count: 0 },
    { id: 'space', name: 'Space Tech', icon: Satellite, count: 0 },
    { id: 'sustainability', name: 'Sustainability', icon: Leaf, count: 0 },
    { id: 'ai', name: 'AI Services', icon: Brain, count: 0 },
    { id: 'emerging', name: 'Emerging Tech', icon: Rocket, count: 0 },
    { id: 'security', name: 'Security', icon: Shield, count: 0 }
  ];

  const innovativeServices2030 = [
    // Quantum Technology Services
    {
      id: 'quantum-computing-solutions',
      name: 'Quantum Computing Solutions',
      category: 'quantum',
      description: 'Next-generation quantum computing services for complex problem solving and optimization.',
      features: ['Quantum Algorithms', 'Optimization Problems', 'Cryptography', 'Scientific Computing', 'Research Support', 'Quantum Training'],
      pricing: { monthly: 999, yearly: 9999, enterprise: 'Custom' },
      icon: Atom,
      link: '/services/quantum-computing-solutions',
      popular: true,
      highlights: ['1000x faster computations', 'Quantum-safe security', 'Advanced algorithms'],
      rating: 4.9,
      reviews: 45,
      badge: 'Future Tech',
      color: 'from-purple-600 to-pink-700'
    },
    {
      id: 'quantum-ai-platform',
      name: 'Quantum AI Platform',
      category: 'quantum',
      description: 'Revolutionary platform combining quantum computing with artificial intelligence.',
      features: ['Quantum Neural Networks', 'Quantum ML', 'Hybrid Computing', 'Quantum Optimization', 'AI Acceleration', 'Quantum Analytics'],
      pricing: { monthly: 1299, yearly: 12999, enterprise: 'Custom' },
      icon: Brain,
      link: '/services/QuantumAIPlatform',
      popular: true,
      highlights: ['Quantum AI acceleration', 'Hybrid computing', 'Neural optimization'],
      rating: 4.8,
      reviews: 67,
      badge: 'Revolutionary',
      color: 'from-blue-600 to-cyan-700'
    },
    {
      id: 'quantum-computing-as-a-service',
      name: 'Quantum Computing as a Service',
      category: 'quantum',
      description: 'Cloud-based quantum computing access for businesses and researchers.',
      features: ['Cloud Access', 'Quantum Simulators', 'Real Quantum Hardware', 'API Integration', 'Scalable Resources', 'Expert Support'],
      pricing: { monthly: 599, yearly: 5999, enterprise: 'Custom' },
      icon: Cloud,
      link: '/services/QuantumComputingAsAService',
      popular: false,
      highlights: ['Cloud quantum access', 'Real hardware', 'API integration'],
      rating: 4.7,
      reviews: 89,
      badge: 'Cloud Quantum',
      color: 'from-cyan-600 to-blue-700'
    },

    // Space Technology Services
    {
      id: 'space-tech',
      name: 'Space Technology Solutions',
      category: 'space',
      description: 'Innovative solutions for space industry applications and satellite technology.',
      features: ['Satellite Data', 'Space Analytics', 'Mission Planning', 'Research Support', 'Space Communications', 'Orbital Mechanics'],
      pricing: { monthly: 599, yearly: 5999, enterprise: 'Custom' },
      icon: Satellite,
      link: '/services/space-tech',
      popular: false,
      highlights: ['Satellite analytics', 'Mission planning', 'Space communications'],
      rating: 4.6,
      reviews: 34,
      badge: 'Space Tech',
      color: 'from-indigo-600 to-purple-700'
    },
    {
      id: 'satellite-data-analytics',
      name: 'Satellite Data Analytics Platform',
      category: 'space',
      description: 'Advanced analytics platform for satellite data and space-based information.',
      features: ['Data Processing', 'Real-time Monitoring', 'Predictive Analytics', 'GIS Integration', 'Environmental Monitoring', 'Climate Analysis'],
      pricing: { monthly: 399, yearly: 3999, enterprise: 'Custom' },
      icon: BarChart3,
      link: '/services/satellite-data-analytics',
      popular: false,
      highlights: ['Real-time monitoring', 'Environmental data', 'Climate analysis'],
      rating: 4.5,
      reviews: 56,
      badge: 'Satellite AI',
      color: 'from-green-600 to-emerald-700'
    },

    // Sustainability Services
    {
      id: 'sustainability',
      name: 'Sustainability Analytics Platform',
      category: 'sustainability',
      description: 'Environmental impact measurement and optimization for sustainable business practices.',
      features: ['Carbon Tracking', 'ESG Reporting', 'Sustainability Metrics', 'Goal Setting', 'Impact Assessment', 'Green Certification'],
      pricing: { monthly: 99, yearly: 999, enterprise: 'Custom' },
      icon: Leaf,
      link: '/services/sustainability',
      popular: false,
      highlights: ['Carbon footprint tracking', 'ESG reporting', 'Green certification'],
      rating: 4.4,
      reviews: 78,
      badge: 'Green Tech',
      color: 'from-green-600 to-teal-700'
    },
    {
      id: 'green-it',
      name: 'Green IT Solutions',
      category: 'sustainability',
      description: 'Sustainable IT solutions for environmental responsibility and energy efficiency.',
      features: ['Energy Optimization', 'Carbon Footprint', 'Sustainable Hardware', 'Green Cloud', 'E-waste Management', 'Renewable Energy'],
      pricing: { monthly: 149, yearly: 1499, enterprise: 'Custom' },
      icon: Globe,
      link: '/services/green-it',
      popular: false,
      highlights: ['Energy optimization', 'Sustainable hardware', 'Green cloud'],
      rating: 4.3,
      reviews: 45,
      badge: 'Eco IT',
      color: 'from-emerald-600 to-green-700'
    },
    {
      id: 'circular-economy-platform',
      name: 'Circular Economy Platform',
      category: 'sustainability',
      description: 'Platform for managing circular economy initiatives and waste reduction.',
      features: ['Waste Tracking', 'Resource Optimization', 'Recycling Analytics', 'Supply Chain Sustainability', 'Circular Metrics', 'Impact Reporting'],
      pricing: { monthly: 199, yearly: 1999, enterprise: 'Custom' },
      icon: Recycle,
      link: '/services/circular-economy-platform',
      popular: false,
      highlights: ['Waste reduction', 'Resource optimization', 'Circular metrics'],
      rating: 4.2,
      reviews: 34,
      badge: 'Circular',
      color: 'from-teal-600 to-cyan-700'
    },

    // AI Services
    {
      id: 'ai-autonomous-business-operations-platform',
      name: 'AI Autonomous Business Operations Platform',
      category: 'ai',
      description: 'Fully automated business processes with intelligent decision making and resource optimization.',
      features: ['Process Automation', 'Decision Intelligence', 'Resource Optimization', 'Performance Monitoring', 'Predictive Analytics', 'Autonomous Operations'],
      pricing: { monthly: 599, yearly: 5999, enterprise: 'Custom' },
      icon: Zap,
      link: '/services/ai-autonomous-business-operations-platform',
      popular: true,
      highlights: ['100% process automation', 'Intelligent decision making', 'Resource optimization'],
      rating: 4.8,
      reviews: 198,
      badge: 'Autonomous',
      color: 'from-emerald-600 to-teal-700'
    },
    {
      id: 'ai-quantum-hybrid-platform',
      name: 'AI-Quantum Hybrid Platform',
      category: 'ai',
      description: 'Revolutionary platform combining artificial intelligence with quantum computing.',
      features: ['Quantum Neural Networks', 'Quantum Algorithm Optimization', 'Real-time Quantum Processing', 'Quantum-Safe Security', 'Quantum Analytics', 'Hybrid Computing'],
      pricing: { monthly: 999, yearly: 9999, enterprise: 'Custom' },
      icon: Brain,
      link: '/services/ai-quantum-hybrid-platform',
      popular: true,
      highlights: ['1000x faster computations', 'Quantum-safe security', 'Hybrid quantum-classical AI'],
      rating: 4.9,
      reviews: 156,
      badge: 'Revolutionary',
      color: 'from-purple-600 to-pink-700'
    },
    {
      id: 'ai-cybersecurity-platform',
      name: 'AI-Powered Cybersecurity Platform',
      category: 'ai',
      description: 'Next-generation cybersecurity powered by artificial intelligence and machine learning.',
      features: ['AI Threat Detection', 'Zero-Day Protection', 'Network Security', 'Data Encryption', 'Continuous Monitoring', 'Automated Response'],
      pricing: { monthly: 399, yearly: 3999, enterprise: 'Custom' },
      icon: Shield,
      link: '/services/ai-cybersecurity-platform',
      popular: true,
      highlights: ['99.9% threat blocking', '< 1 second response time', 'AI-powered automation'],
      rating: 4.9,
      reviews: 289,
      badge: 'Enterprise',
      color: 'from-red-600 to-orange-700'
    },

    // Emerging Technology Services
    {
      id: 'digital-twin',
      name: 'Digital Twin Platform',
      category: 'emerging',
      description: 'Digital twin solutions for physical assets and processes with real-time monitoring.',
      features: ['3D Modeling', 'Real-time Monitoring', 'Predictive Analytics', 'Simulation', 'IoT Integration', 'Performance Optimization'],
      pricing: { monthly: 299, yearly: 2999, enterprise: 'Custom' },
      icon: Cpu,
      link: '/services/digital-twin',
      popular: false,
      highlights: ['3D modeling', 'Real-time monitoring', 'Predictive analytics'],
      rating: 4.5,
      reviews: 67,
      badge: 'Digital Twin',
      color: 'from-blue-600 to-indigo-700'
    },
    {
      id: 'blockchain-enterprise-solutions',
      name: 'Blockchain Enterprise Solutions',
      category: 'emerging',
      description: 'Enterprise blockchain solutions for business transformation and digital innovation.',
      features: ['Smart Contracts', 'Supply Chain', 'Identity Management', 'Compliance', 'DeFi Solutions', 'Tokenization'],
      pricing: { monthly: 399, yearly: 3999, enterprise: 'Custom' },
      icon: Lock,
      link: '/services/blockchain-enterprise-solutions',
      popular: false,
      highlights: ['Smart contracts', 'Supply chain', 'Identity management'],
      rating: 4.4,
      reviews: 78,
      badge: 'Blockchain',
      color: 'from-orange-600 to-red-700'
    },
    {
      id: 'edge-computing-platform',
      name: 'Edge Computing Platform',
      category: 'emerging',
      description: 'Distributed edge computing platform for IoT and real-time applications.',
      features: ['Edge Nodes', 'Real-time Processing', 'IoT Integration', 'Low Latency', 'Scalable Architecture', 'Edge AI'],
      pricing: { monthly: 199, yearly: 1999, enterprise: 'Custom' },
      icon: Network,
      link: '/services/edge-computing-platform',
      popular: false,
      highlights: ['Edge processing', 'Real-time analytics', 'IoT integration'],
      rating: 4.3,
      reviews: 56,
      badge: 'Edge Tech',
      color: 'from-cyan-600 to-blue-700'
    },
    {
      id: 'augmented-reality-platform',
      name: 'Augmented Reality Platform',
      category: 'emerging',
      description: 'Enterprise AR platform for training, visualization, and interactive experiences.',
      features: ['AR Development', '3D Visualization', 'Interactive Training', 'Spatial Computing', 'Device Management', 'Content Creation'],
      pricing: { monthly: 299, yearly: 2999, enterprise: 'Custom' },
      icon: Eye,
      link: '/services/ar-platform',
      popular: false,
      highlights: ['3D visualization', 'Interactive training', 'Spatial computing'],
      rating: 4.2,
      reviews: 45,
      badge: 'AR Tech',
      color: 'from-violet-600 to-purple-700'
    },
    {
      id: 'virtual-reality-solutions',
      name: 'Virtual Reality Solutions',
      category: 'emerging',
      description: 'VR solutions for immersive experiences, training, and virtual collaboration.',
      features: ['VR Development', 'Immersive Experiences', 'Virtual Collaboration', 'Training Simulations', 'Content Creation', 'Device Integration'],
      pricing: { monthly: 249, yearly: 2499, enterprise: 'Custom' },
      icon: Eye,
      link: '/services/vr-solutions',
      popular: false,
      highlights: ['Immersive experiences', 'Virtual collaboration', 'Training simulations'],
      rating: 4.1,
      reviews: 34,
      badge: 'VR Tech',
      color: 'from-pink-600 to-rose-700'
    },

    // Security Services
    {
      id: 'zero-trust-network-architecture',
      name: 'Zero Trust Network Architecture',
      category: 'security',
      description: 'Zero trust security framework implementation for modern enterprise networks.',
      features: ['Identity Verification', 'Access Control', 'Network Segmentation', 'Monitoring', 'Threat Detection', 'Compliance'],
      pricing: { monthly: 249, yearly: 2499, enterprise: 'Custom' },
      icon: Shield,
      link: '/services/zero-trust-network-architecture',
      popular: false,
      highlights: ['Identity verification', 'Access control', 'Network segmentation'],
      rating: 4.6,
      reviews: 89,
      badge: 'Zero Trust',
      color: 'from-indigo-600 to-purple-700'
    },
    {
      id: 'ai-cybersecurity-suite',
      name: 'AI Cybersecurity Suite',
      category: 'security',
      description: 'Comprehensive cybersecurity with AI-powered threat detection and response.',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response', 'Compliance', 'Behavioral Analysis', 'Risk Scoring'],
      pricing: { monthly: 199, yearly: 1999, enterprise: 'Custom' },
      icon: Shield,
      link: '/services/ai-cybersecurity-suite',
      popular: false,
      highlights: ['AI behavioral analysis', 'Automated threat response', 'Compliance automation'],
      rating: 4.7,
      reviews: 134,
      badge: 'AI Security',
      color: 'from-orange-600 to-red-700'
    },
    {
      id: 'quantum-cryptography',
      name: 'Quantum Cryptography Solutions',
      category: 'security',
      description: 'Quantum-safe cryptography for future-proof security in the quantum era.',
      features: ['Quantum Key Distribution', 'Post-Quantum Cryptography', 'Quantum Random Numbers', 'Secure Communication', 'Future-Proof Security', 'Quantum Networks'],
      pricing: { monthly: 599, yearly: 5999, enterprise: 'Custom' },
      icon: Lock,
      link: '/services/quantum-cryptography',
      popular: false,
      highlights: ['Quantum key distribution', 'Post-quantum crypto', 'Future-proof security'],
      rating: 4.8,
      reviews: 67,
      badge: 'Quantum Safe',
      color: 'from-purple-600 to-pink-700'
    },

    // Specialized Services
    {
      id: 'biotech-platform',
      name: 'Biotechnology Platform',
      category: 'emerging',
      description: 'Advanced biotechnology solutions for research, development, and innovation.',
      features: ['DNA Analysis', 'Protein Modeling', 'Drug Discovery', 'Bioinformatics', 'Lab Automation', 'Research Tools'],
      pricing: { monthly: 799, yearly: 7999, enterprise: 'Custom' },
      icon: TestTube,
      link: '/services/biotech-platform',
      popular: false,
      highlights: ['DNA analysis', 'Drug discovery', 'Lab automation'],
      rating: 4.5,
      reviews: 45,
      badge: 'BioTech',
      color: 'from-green-600 to-emerald-700'
    },
    {
      id: 'nanotechnology-solutions',
      name: 'Nanotechnology Solutions',
      category: 'emerging',
      description: 'Nanotechnology applications for materials science and manufacturing.',
      features: ['Material Design', 'Nano Manufacturing', 'Quality Control', 'Research Support', 'Industrial Applications', 'Safety Protocols'],
      pricing: { monthly: 699, yearly: 6999, enterprise: 'Custom' },
      icon: Microscope,
      link: '/services/nanotechnology-solutions',
      popular: false,
      highlights: ['Material design', 'Nano manufacturing', 'Quality control'],
      rating: 4.4,
      reviews: 34,
      badge: 'NanoTech',
      color: 'from-blue-600 to-cyan-700'
    },
    {
      id: 'robotics-automation',
      name: 'Robotics & Automation Platform',
      category: 'emerging',
      description: 'Advanced robotics and automation solutions for industrial and commercial applications.',
      features: ['Robot Programming', 'Automation Design', 'Safety Systems', 'Integration', 'Maintenance', 'Performance Analytics'],
      pricing: { monthly: 499, yearly: 4999, enterprise: 'Custom' },
      icon: Cpu,
      link: '/services/robotics-automation',
      popular: false,
      highlights: ['Robot programming', 'Automation design', 'Safety systems'],
      rating: 4.3,
      reviews: 56,
      badge: 'Robotics',
      color: 'from-gray-600 to-slate-700'
    },
    {
      id: 'autonomous-vehicles',
      name: 'Autonomous Vehicle Solutions',
      category: 'emerging',
      description: 'Autonomous vehicle technology and infrastructure solutions.',
      features: ['Vehicle Control', 'Sensor Integration', 'Safety Systems', 'Infrastructure', 'Testing', 'Regulatory Compliance'],
      pricing: { monthly: 899, yearly: 8999, enterprise: 'Custom' },
      icon: Car,
      link: '/services/autonomous-vehicles',
      popular: false,
      highlights: ['Vehicle control', 'Sensor integration', 'Safety systems'],
      rating: 4.2,
      reviews: 23,
      badge: 'AutoTech',
      color: 'from-red-600 to-orange-700'
    },
    {
      id: 'smart-city-platform',
      name: 'Smart City Platform',
      category: 'emerging',
      description: 'Comprehensive smart city solutions for urban infrastructure and management.',
      features: ['Infrastructure Management', 'IoT Integration', 'Data Analytics', 'Energy Management', 'Traffic Control', 'Public Services'],
      pricing: { monthly: 1299, yearly: 12999, enterprise: 'Custom' },
      icon: Building,
      link: '/services/smart-city-platform',
      popular: false,
      highlights: ['Infrastructure management', 'IoT integration', 'Energy management'],
      rating: 4.1,
      reviews: 45,
      badge: 'Smart City',
      color: 'from-blue-600 to-indigo-700'
    },
    {
      id: 'energy-storage-solutions',
      name: 'Advanced Energy Storage Solutions',
      category: 'sustainability',
      description: 'Next-generation energy storage and management systems.',
      features: ['Battery Technology', 'Grid Integration', 'Energy Management', 'Renewable Integration', 'Storage Optimization', 'Smart Grid'],
      pricing: { monthly: 399, yearly: 3999, enterprise: 'Custom' },
      icon: Battery,
      link: '/services/energy-storage',
      popular: false,
      highlights: ['Battery technology', 'Grid integration', 'Energy management'],
      rating: 4.0,
      reviews: 34,
      badge: 'Energy',
      color: 'from-yellow-600 to-orange-700'
    }
  ];

  // Calculate category counts
  useEffect(() => {
    categories.forEach(cat => {
      if (cat.id === 'all') {
        cat.count = innovativeServices2030.length;
      } else {
        cat.count = innovativeServices2030.filter(service => service.category === cat.id).length;
      }
    });
  }, []);

  const filteredServices = innovativeServices2030.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/20 text-indigo-300 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              2030 Future Technology Showcase
            </div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Innovative Services Showcase 2030
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8"
          >
            Discover our cutting-edge services that define the future of technology, from quantum computing and space technology to sustainability and emerging innovations
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <span className="text-white font-semibold">{innovativeServices2030.length}+ Future Services</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <span className="text-white font-semibold">Quantum Technology</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <span className="text-white font-semibold">Space & Sustainability</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search future services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {service.popular && (
                <div className="absolute -top-3 left-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Popular
                </div>
              )}

              {/* Service Header */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex flex-col items-end">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      service.badge === 'Revolutionary' ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' :
                      service.badge === 'Enterprise' ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white' :
                      service.badge === 'Future Tech' ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white' :
                      service.badge === 'Green Tech' ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' :
                      'bg-gradient-to-r from-gray-500 to-slate-500 text-white'
                    }`}>
                      {service.badge}
                    </span>
                    <div className="flex items-center mt-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-300 ml-1">{service.rating}</span>
                      <span className="text-xs text-gray-400 ml-1">({service.reviews})</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {service.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-indigo-300 mb-3">Key Highlights</h4>
                <div className="space-y-2">
                  {service.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-center text-sm text-gray-300">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-indigo-300 mb-3">Features</h4>
                <div className="grid grid-cols-1 gap-2">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-sm text-gray-400">
                      +{service.features.length - 3} more features
                    </div>
                  )}
                </div>
              </div>

              {/* Pricing and CTA */}
              <div className="border-t border-indigo-500/20 pt-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-2xl font-bold text-white">${service.pricing.monthly}</div>
                    <div className="text-sm text-gray-400">per month</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400">Yearly</div>
                    <div className="text-lg font-semibold text-white">
                      ${service.pricing.yearly}
                    </div>
                  </div>
                </div>
                <Link
                  to={service.link}
                  className="w-full block text-center py-3 px-6 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 group-hover:scale-105"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Shape the Future?
          </h2>
          <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
            Get in touch with our innovation experts to discuss how our cutting-edge 2030 services can transform your business and prepare you for the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="inline-flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center gap-2 bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
          <div className="mt-6 text-indigo-100">
            <p className="flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4" />
              364 E Main St STE 1008, Middletown DE 19709
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovativeServicesShowcase2030;