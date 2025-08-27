import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Rocket, 
  Brain, 
  Globe, 
  Zap, 
  Shield, 
  TrendingUp,
  Users,
  Target,
  Award,
  Star,
  ArrowRight,
  CheckCircle,
  Clock,
  DollarSign,
  BarChart3,
  Lightbulb,
  Cpu,
  Database,
  Network,
  Lock,
  Code,
  Atom,
  Dna,
  Microscope,
  Flask,
  TestTube,
  Syringe,
  Stethoscope,
  HeartPulse,
  BrainCircuit,
  Eye,
  Ear,
  Hand,
  Foot,
  Bone,
  Tooth,
  Pill,
  Bandage,
  Thermometer,
  Scale,
  Calculator,
  ChartBar,
  PieChart,
  LineChart,
  Activity,
  TrendingDown,
  Minus,
  Plus,
  Equal,
  Divide,
  Percent,
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
  Search,
  ChevronDown,
  Phone,
  Mail,
  Cloud,
  Leaf,
  Space,
  Handshake,
  Calendar,
  Building,
  Briefcase,
  FileText,
  Video,
  HelpCircle,
  Crown,
  Sparkles,
  Truck,
  Heart,
  Server,
  Wifi,
  Globe2
} from 'lucide-react';

const ComprehensiveServicesOverview2027: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<string>('innovation');

  const serviceCategories = [
    {
      id: 'ai-services',
      name: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-blue-500 to-purple-600',
      description: 'Advanced AI solutions for business automation and intelligence',
      services: [
        {
          title: 'AI Autonomous Business Platform',
          description: 'Revolutionary quantum-powered AI platform that autonomously manages entire business operations',
          price: '$15,999/month',
          roi: '800-1500%',
          badge: 'Revolutionary',
          icon: '🤖'
        },
        {
          title: 'AI-Powered Healthcare Platform',
          description: 'AI diagnostics and patient monitoring with medical imaging analysis',
          price: '$32,999/month',
          roi: '450%',
          badge: 'Breakthrough',
          icon: '🏥'
        },
        {
          title: 'AI Predictive Analytics Engine',
          description: '95% prediction accuracy with real-time processing and multi-dimensional forecasting',
          price: '$12,999/month',
          roi: '450%',
          badge: 'Advanced',
          icon: '📊'
        }
      ]
    },
    {
      id: 'quantum-services',
      name: 'Quantum Computing',
      icon: Atom,
      color: 'from-purple-500 to-pink-600',
      description: 'Quantum computing solutions for complex problem solving',
      services: [
        {
          title: 'Quantum AI Platform',
          description: 'Combines quantum computing and AI to solve complex problems impossible for classical computers',
          price: '$4,999/month',
          roi: '1000%',
          badge: 'Revolutionary',
          icon: '⚛️'
        },
        {
          title: 'Quantum Internet Infrastructure',
          description: 'Next-generation quantum internet with ultra-secure communications and quantum entanglement',
          price: '$25,000/month',
          roi: '1000-2000%',
          badge: 'Breakthrough',
          icon: '🌐'
        },
        {
          title: 'Space-Based Quantum Computing',
          description: 'Leveraging microgravity for enhanced quantum coherence and computational power',
          price: '$50,000/month',
          roi: '1500-3000%',
          badge: 'Revolutionary',
          icon: '🚀'
        }
      ]
    },
    {
      id: 'cybersecurity',
      name: 'Advanced Cybersecurity',
      icon: Shield,
      color: 'from-indigo-500 to-blue-600',
      description: 'Military-grade security solutions for enterprise protection',
      services: [
        {
          title: 'AI-Powered Threat Intelligence',
          description: 'Real-time threat detection with AI behavioral analysis and predictive security',
          price: '$8,999/month',
          roi: '400-800%',
          badge: 'Advanced',
          icon: '🛡️'
        },
        {
          title: 'Quantum Cryptography Platform',
          description: 'Unbreakable quantum encryption using quantum key distribution and entanglement',
          price: '$25,000/month',
          roi: '1000-2000%',
          badge: 'Revolutionary',
          icon: '🔐'
        },
        {
          title: 'Zero Trust Security Architecture',
          description: 'Continuous verification and least privilege access for enterprise networks',
          price: '$12,999/month',
          roi: '600-1200%',
          badge: 'Advanced',
          icon: '🔒'
        }
      ]
    },
    {
      id: 'emerging-tech',
      name: 'Emerging Technologies',
      icon: Rocket,
      color: 'from-green-500 to-teal-600',
      description: 'Cutting-edge technologies shaping the future',
      services: [
        {
          title: 'Biocomputing Platform',
          description: 'DNA and cellular computing for massive parallel processing and energy efficiency',
          price: '$15,000/month',
          roi: '800-1500%',
          badge: 'Breakthrough',
          icon: '🧬'
        },
        {
          title: 'Neuromorphic Computing',
          description: 'Brain-inspired architecture for ultra-efficient AI processing and real-time learning',
          price: '$12,000/month',
          roi: '600-1200%',
          badge: 'Advanced',
          icon: '🧠'
        },
        {
          title: 'Fusion Energy Computing',
          description: 'Fusion-powered computing with clean energy generation and massive computational power',
          price: '$35,000/month',
          roi: '2000-4000%',
          badge: 'Revolutionary',
          icon: '☢️'
        }
      ]
    },
    {
      id: 'blockchain-web3',
      name: 'Blockchain & Web3',
      icon: Lock,
      color: 'from-orange-500 to-red-600',
      description: 'Decentralized solutions for the future of the internet',
      services: [
        {
          title: 'Enterprise Blockchain Platform',
          description: 'AI-powered governance and smart contracts with multi-chain support',
          price: '$22,999/month',
          roi: '600%',
          badge: 'Advanced',
          icon: '⛓️'
        },
        {
          title: 'DeFi Yield Optimization',
          description: 'Multi-protocol yield farming with intelligent risk management',
          price: '$2,500/month',
          roi: '400%',
          badge: 'Advanced',
          icon: '💰'
        }
      ]
    },
    {
      id: 'iot-edge',
      name: 'IoT & Edge Computing',
      icon: Wifi,
      color: 'from-yellow-500 to-orange-600',
      description: 'Connected devices and edge computing solutions',
      services: [
        {
          title: 'AI-Powered IoT Platform',
          description: 'Device management and predictive maintenance with real-time monitoring',
          price: '$16,999/month',
          roi: '550%',
          badge: 'Advanced',
          icon: '🌐'
        },
        {
          title: 'Smart City IoT Platform',
          description: 'Traffic management, utility monitoring, and public safety systems',
          price: '$4,000/month',
          roi: '300%',
          badge: 'Advanced',
          icon: '🏙️'
        }
      ]
    }
  ];

  const filteredCategories = serviceCategories.filter(category => {
    if (selectedCategory === 'all') return true;
    return category.id === selectedCategory;
  });

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Revolutionary': return 'bg-gradient-to-r from-red-500 to-pink-600';
      case 'Breakthrough': return 'bg-gradient-to-r from-purple-500 to-indigo-600';
      case 'Advanced': return 'bg-gradient-to-r from-blue-500 to-cyan-600';
      default: return 'bg-gradient-to-r from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-zion-cyan/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-zion-purple/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-pink bg-clip-text text-transparent">
            Comprehensive Services Overview 2027
          </h1>
          <p className="text-xl md:text-2xl text-zion-gray-light mb-8 max-w-4xl mx-auto">
            Discover our complete portfolio of cutting-edge technology services. 
            From AI and quantum computing to cybersecurity and emerging technologies, 
            we deliver innovative solutions that drive business transformation.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-zion-slate-dark/50 backdrop-blur-sm rounded-full px-6 py-3 border border-zion-cyan/20">
              <Rocket className="w-5 h-5 text-zion-cyan" />
              <span className="text-zion-gray-light">Innovation Leadership</span>
            </div>
            <div className="flex items-center gap-2 bg-zion-slate-dark/50 backdrop-blur-sm rounded-full px-6 py-3 border border-zion-purple/20">
              <Brain className="w-5 h-5 text-zion-purple" />
              <span className="text-zion-gray-light">AI-Powered Solutions</span>
            </div>
            <div className="flex items-center gap-2 bg-zion-slate-dark/50 backdrop-blur-sm rounded-full px-6 py-3 border border-zion-pink/20">
              <Shield className="w-5 h-5 text-zion-pink" />
              <span className="text-zion-gray-light">Enterprise Security</span>
            </div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            onClick={() => setSelectedCategory('all')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-zion-cyan to-zion-purple border-transparent text-white shadow-lg'
                : 'bg-zion-slate-dark/30 border-zion-cyan/20 text-zion-gray-light hover:border-zion-cyan/40 hover:bg-zion-slate-dark/50'
            }`}
          >
            <Globe className="w-5 h-5" />
            All Services
          </motion.button>
          {serviceCategories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                selectedCategory === category.id
                  ? `bg-gradient-to-r ${category.color} border-transparent text-white shadow-lg`
                  : 'bg-zion-slate-dark/30 border-zion-cyan/20 text-zion-gray-light hover:border-zion-cyan/40 hover:bg-zion-slate-dark/50'
              }`}
            >
              <category.icon className="w-5 h-5" />
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Services by Category */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-16"
        >
          {filteredCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-zion-slate-dark/20 backdrop-blur-sm rounded-3xl p-8 border border-zion-cyan/20"
            >
              {/* Category Header */}
              <div className="text-center mb-12">
                <div className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <category.icon className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-zion-gray-light mb-4">{category.name}</h2>
                <p className="text-xl text-zion-gray-dark max-w-3xl mx-auto">{category.description}</p>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={serviceIndex}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                    className="group bg-zion-slate-dark/40 backdrop-blur-sm rounded-2xl p-6 border border-zion-cyan/20 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 hover:-translate-y-2"
                  >
                    {/* Badge */}
                    <div className={`absolute -top-3 right-6 ${getBadgeColor(service.badge)} text-white px-4 py-1 rounded-full text-sm font-semibold`}>
                      {service.badge}
                    </div>

                    {/* Icon */}
                    <div className="text-6xl mb-4">{service.icon}</div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-zion-gray-light mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-zion-gray-dark mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Pricing and ROI */}
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="text-center">
                        <div className="text-zion-gray-dark">Price</div>
                        <div className="text-zion-cyan font-semibold">{service.price}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-zion-gray-dark">ROI</div>
                        <div className="text-zion-green font-semibold">{service.roi}</div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      Learn More
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-zion-slate-dark/50 to-zion-slate/50 backdrop-blur-sm rounded-3xl p-12 border border-zion-cyan/20">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center">
                <Rocket className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-zion-gray-light mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-gray-dark mb-8 max-w-3xl mx-auto">
              Our comprehensive suite of innovative services is designed to drive your business forward. 
              Contact our experts to discover how we can help you achieve your technology goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Get Started Today
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-zion-cyan/50 text-zion-cyan px-8 py-4 rounded-xl font-semibold text-lg hover:bg-zion-cyan/10 transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComprehensiveServicesOverview2027;