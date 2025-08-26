import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Atom, 
  Rocket, 
  Shield, 
  Globe, 
  Building, 
  Zap, 
  Target,
  Star,
  TrendingUp,
  Users,
  Award,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  DollarSign,
  Clock,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Target as TargetIcon,
  Cpu,
  Lock,
  Cloud,
  Database,
  Network,
  BarChart3,
  Heart,
  ShoppingCart,
  Eye,
  Code,
  Palette,
  Camera,
  Video,
  Music,
  BookOpen,
  GraduationCap,
  Scale,
  Gavel,
  Car,
  Plane,
  Ship,
  Train,
  Leaf,
  Sun,
  Moon,
  Wind,
  Droplets,
  Zap as Lightning,
  Wifi,
  Bluetooth,
  Satellite,
  Telescope,
  Microscope,
  Flask,
  TestTube,
  Pill,
  Stethoscope,
  Heart as HeartIcon,
  Brain as BrainIcon,
  Dna,
  Virus,
  Bacteria,
  Leaf as LeafIcon,
  Tree,
  Mountain,
  Globe as GlobeIcon,
  Map,
  Compass,
  Navigation,
  Radar,
  Sonar,
  Laser,
  Magnet,
  Battery,
  Power,
  Solar,
  Nuclear,
  Fusion,
  Fission,
  Quantum,
  Neural,
  Circuit,
  Chip,
  Motherboard,
  Server,
  Router,
  Switch,
  Hub,
  Bridge,
  Gateway,
  Firewall,
  Antivirus,
  Encryption,
  Decryption,
  Hash,
  Signature,
  Certificate,
  Token,
  Wallet,
  Exchange,
  Mining,
  Staking,
  Yield,
  Liquidity,
  Swap,
  Bridge as BridgeIcon,
  Pool,
  Farm,
  Vault,
  Safe,
  Insurance,
  Audit,
  Compliance,
  Governance,
  Voting,
  Proposal,
  Execution,
  Automation,
  Workflow,
  Pipeline,
  Orchestration,
  Scheduling,
  Monitoring,
  Alerting,
  Logging,
  Tracing,
  Profiling,
  Debugging,
  Testing,
  Deployment,
  Rollback,
  Scaling,
  LoadBalancing,
  Failover,
  Backup,
  Recovery,
  Disaster,
  BusinessContinuity,
  HighAvailability,
  FaultTolerance,
  Redundancy,
  Replication,
  Synchronization,
  Consistency,
  Availability,
  Partition,
  Latency,
  Throughput,
  Bandwidth,
  Storage,
  Memory,
  Cache,
  Index,
  Search,
  Filter,
  Sort,
  Aggregate,
  Transform,
  ETL,
  DataWarehouse,
  DataLake,
  DataMart,
  DataPipeline,
  DataStream,
  Batch,
  RealTime,
  NearRealTime,
  Historical,
  Predictive,
  Prescriptive,
  Descriptive,
  Diagnostic,
  Cognitive,
  Emotional,
  Social,
  Behavioral,
  Psychological,
  Neurological,
  Biological,
  Chemical,
  Physical,
  Mathematical,
  Statistical,
  Probabilistic,
  Deterministic,
  Stochastic,
  Chaotic,
  Complex,
  Simple,
  Linear,
  NonLinear,
  Dynamic,
  Static,
  Adaptive,
  Learning,
  Evolution,
  Optimization,
  Minimization,
  Maximization,
  Constraint,
  Objective,
  Function,
  Variable,
  Parameter,
  Hyperparameter,
  Model,
  Algorithm,
  Heuristic,
  Metaheuristic,
  Genetic,
  Evolutionary,
  Swarm,
  Particle,
  Ant,
  Bee,
  Firefly,
  Cuckoo,
  Bat,
  Whale,
  Dragonfly,
  Butterfly,
  Moth,
  Spider,
  Scorpion,
  Snake,
  Lizard,
  Turtle,
  Fish,
  Bird,
  Mammal,
  Reptile,
  Amphibian,
  Insect,
  Arachnid,
  Crustacean,
  Mollusk,
  Annelid,
  Nematode,
  Platyhelminthes,
  Cnidarian,
  Poriferan,
  Echinoderm,
  Chordate,
  Vertebrate,
  Invertebrate,
  Prokaryote,
  Eukaryote,
  Bacteria as BacteriaIcon,
  Archaea,
  Fungi,
  Protist,
  Plant,
  Animal,
  Human,
  Machine,
  Robot,
  Cyborg,
  Android,
  Clone,
  Mutant,
  Hybrid,
  Chimera,
  Symbiont,
  Parasite,
  Host,
  Vector,
  Reservoir,
  Carrier,
  Patient,
  Doctor,
  Nurse,
  Surgeon,
  Specialist,
  Generalist,
  Practitioner,
  Researcher,
  Scientist,
  Engineer,
  Architect,
  Designer,
  Developer,
  Programmer,
  Coder,
  Hacker,
  Analyst,
  Consultant,
  Advisor,
  Mentor,
  Coach,
  Trainer,
  Teacher,
  Professor,
  Instructor,
  Lecturer,
  Facilitator,
  Moderator,
  Mediator,
  Arbitrator,
  Judge,
  Lawyer,
  Attorney,
  Counsel,
  Advocate,
  Representative,
  Agent,
  Broker,
  Dealer,
  Trader,
  Investor,
  Entrepreneur,
  Businessman,
  Executive,
  Manager,
  Director,
  Officer,
  President,
  CEO,
  CFO,
  CTO,
  COO,
  CIO,
  CISO,
  CDO,
  CMO,
  CHRO,
  CLO,
  CCO,
  CRO,
  CQO,
  CKO,
  CPO,
  CTO as CTOIcon,
  VP,
  SVP,
  EVP,
  Head,
  Lead,
  Senior,
  Junior,
  Associate,
  Assistant,
  Intern,
  Apprentice,
  Trainee,
  Student,
  Graduate,
  Alumni,
  Member,
  Partner,
  CoFounder,
  Founder,
  Owner,
  Proprietor,
  Shareholder,
  Stakeholder,
  Customer,
  Client,
  User,
  Consumer,
  Buyer,
  Purchaser,
  Shopper,
  Visitor,
  Guest,
  Host as HostIcon,
  Guest as GuestIcon,
  Host as HostIcon2,
  Guest as GuestIcon2,
  Host as HostIcon3,
  Guest as GuestIcon3,
  Host as HostIcon4,
  Guest as GuestIcon4,
  Host as HostIcon5,
  Guest as GuestIcon5,
  Host as HostIcon6,
  Guest as GuestIcon6,
  Host as HostIcon7,
  Guest as GuestIcon7,
  Host as HostIcon8,
  Guest as GuestIcon8,
  Host as HostIcon9,
  Guest as GuestIcon9,
  Host as HostIcon10,
  Guest as GuestIcon10
} from 'lucide-react';

const ServicesAdvertising: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Services');

  // Service categories with icons and descriptions
  const serviceCategories = [
    {
      name: 'AI & Machine Learning',
      icon: <Brain className="w-8 h-8" />,
      description: 'Cutting-edge artificial intelligence and machine learning solutions',
      color: 'from-purple-500 to-pink-500',
      services: [
        {
          title: 'AI-Powered Space Technology Platform',
          description: 'Revolutionary AI platform for space exploration and satellite management',
          price: '$5,000/month',
          features: ['Satellite AI management', 'Space data analytics', 'Autonomous mission planning'],
          benefits: ['40% cost reduction', '60% success rate improvement', 'Real-time operations'],
          marketPrice: '$5,000 - $15,000/month'
        },
        {
          title: 'AI-Powered Autonomous Business Operations',
          description: 'Complete business automation with AI-driven decision making',
          price: '$2,500/month',
          features: ['24/7 autonomous operations', 'Real-time optimization', 'Predictive analytics'],
          benefits: ['30% cost reduction', '50% efficiency improvement', 'Scalable automation'],
          marketPrice: '$2,500 - $8,000/month'
        },
        {
          title: 'Advanced AI Consciousness Simulation Platform',
          description: 'Breakthrough platform for AI consciousness research and development',
          price: '$8,000/month',
          features: ['Consciousness simulation', 'Emotional intelligence modeling', 'Research collaboration'],
          benefits: ['Research breakthroughs', 'Ethical AI development', 'Advanced capabilities'],
          marketPrice: '$8,000 - $25,000/month'
        }
      ]
    },
    {
      name: 'Quantum Technology',
      icon: <Atom className="w-8 h-8" />,
      description: 'Next-generation quantum computing and security solutions',
      color: 'from-cyan-500 to-blue-500',
      services: [
        {
          title: 'Quantum-Secure Cloud Infrastructure',
          description: 'Future-proof cloud platform with quantum encryption',
          price: '$3,500/month',
          features: ['Quantum-resistant encryption', 'Zero-trust architecture', 'Advanced threat detection'],
          benefits: ['Unbreakable security', '99.99% uptime', 'Automated compliance'],
          marketPrice: '$3,500 - $12,000/month'
        },
        {
          title: 'Quantum Neural Network Platform',
          description: 'Revolutionary quantum-AI hybrid platform',
          price: '$6,000/month',
          features: ['Quantum neural networks', 'Hybrid algorithms', 'Performance optimization'],
          benefits: ['Exponential performance', 'Impossible problem solving', 'Future-proof technology'],
          marketPrice: '$6,000 - $20,000/month'
        }
      ]
    },
    {
      name: 'IT & Infrastructure',
      icon: <Globe className="w-8 h-8" />,
      description: 'Enterprise-grade IT infrastructure and management solutions',
      color: 'from-green-500 to-emerald-500',
      services: [
        {
          title: 'AI-Powered IT Asset Management',
          description: 'Intelligent IT infrastructure management and optimization',
          price: '$1,800/month',
          features: ['Automated asset discovery', 'Predictive maintenance', 'Cost optimization'],
          benefits: ['25% cost reduction', 'Improved utilization', 'Automated compliance'],
          marketPrice: '$1,800 - $5,000/month'
        },
        {
          title: '5G Enterprise Solutions Platform',
          description: 'Ultra-fast 5G connectivity with IoT integration',
          price: '$2,800/month',
          features: ['5G optimization', 'IoT management', 'Edge computing'],
          benefits: ['Ultra-fast connectivity', 'Low latency', 'Massive IoT support'],
          marketPrice: '$2,800 - $7,000/month'
        }
      ]
    },
    {
      name: 'Compliance & Security',
      icon: <Shield className="w-8 h-8" />,
      description: 'Advanced security and compliance automation solutions',
      color: 'from-red-500 to-pink-500',
      services: [
        {
          title: 'SOC2 Compliance Automation Platform',
          description: 'Automated SOC2 compliance monitoring and management',
          price: '$2,200/month',
          features: ['Automated monitoring', 'Real-time assessment', 'Documentation automation'],
          benefits: ['Faster compliance', 'Reduced audit time', 'Continuous monitoring'],
          marketPrice: '$2,200 - $6,000/month'
        }
      ]
    },
    {
      name: 'Blockchain & Web3',
      icon: <Network className="w-8 h-8" />,
      description: 'Enterprise blockchain and Web3 innovation solutions',
      color: 'from-yellow-500 to-orange-500',
      services: [
        {
          title: 'Blockchain Enterprise Solutions Platform',
          description: 'Enterprise-grade blockchain infrastructure and development',
          price: '$3,200/month',
          features: ['Enterprise blockchain', 'Smart contracts', 'DeFi integration'],
          benefits: ['Enhanced security', 'Reduced costs', 'Innovative models'],
          marketPrice: '$3,200 - $9,000/month'
        }
      ]
    },
    {
      name: 'IoT & Analytics',
      icon: <Target className="w-8 h-8" />,
      description: 'Advanced IoT data analytics and processing solutions',
      color: 'from-teal-500 to-green-500',
      services: [
        {
          title: 'IoT Data Analytics Platform',
          description: 'Real-time IoT data processing and analytics',
          price: '$1,400/month',
          features: ['Real-time processing', 'Predictive modeling', 'Device management'],
          benefits: ['Real-time insights', 'Predictive maintenance', 'Operational efficiency'],
          marketPrice: '$1,400 - $4,000/month'
        }
      ]
    }
  ];

  const allServices = serviceCategories.flatMap(category => 
    category.services.map(service => ({ ...service, category: category.name }))
  );

  const filteredServices = selectedCategory === 'All Services' 
    ? allServices 
    : allServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full" style={{
              backgroundImage: `linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)`,
              backgroundSize: '100px 100px'
            }}></div>
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-6xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-4 py-2 text-sm mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-300">Premium Technology Services</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Revolutionary
              </span>
              <br />
              <span className="text-white">Technology Solutions</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Transform your business with our cutting-edge AI, quantum computing, IT infrastructure, and micro SAAS solutions. 
              Experience unprecedented growth, efficiency, and competitive advantage.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-lg font-bold text-white mb-2">300% Average ROI</div>
                <div className="text-sm text-gray-400">Proven results across industries</div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-green-400" />
                </div>
                <div className="text-lg font-bold text-white mb-2">99.9% Success Rate</div>
                <div className="text-sm text-gray-400">Reliable delivery and support</div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-pink-400" />
                </div>
                <div className="text-lg font-bold text-white mb-2">2-8 Weeks Delivery</div>
                <div className="text-sm text-gray-400">Fast implementation and deployment</div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-400 mb-12">
              <a href="tel:+1 302 464 0950" className="flex items-center hover:text-cyan-400 transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="flex items-center hover:text-purple-400 transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                kleber@ziontechgroup.com
              </a>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                364 E Main St STE 1008 Middletown DE 19709
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1 302 464 0950"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3 shadow-2xl shadow-cyan-500/25"
              >
                <Phone className="w-5 h-5" />
                <span>Get Started Today</span>
              </a>
              
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Services Inquiry"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3 shadow-2xl shadow-purple-500/25"
              >
                <Mail className="w-5 h-5" />
                <span>Request Quote</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Service Categories
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive portfolio of innovative technology solutions designed to transform your business
            </p>
          </motion.div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['All Services', ...serviceCategories.map(cat => cat.name)].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full border transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 border-transparent text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 hover:border-white/30'
                }`}
              >
                <span>{category}</span>
                <span className="bg-white/20 rounded-full px-2 py-1 text-xs">
                  {category === 'All Services' ? allServices.length : serviceCategories.find(cat => cat.name === category)?.services.length}
                </span>
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={`${service.title}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Service Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="text-3xl font-bold text-cyan-400 mb-1">{service.price}</div>
                  <div className="text-sm text-gray-400">Market Price: {service.marketPrice}</div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-green-400 mb-3">Key Benefits:</h4>
                  <div className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="text-xs text-gray-400">• {benefit}</div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <a
                    href={`tel:+1 302 464 0950?subject=Inquiry about ${service.title}`}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-3 rounded-xl font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                  </a>
                  
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Quote Request for ${service.title}`}
                    className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 rounded-xl font-medium hover:bg-white/20 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Get Quote</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Why Choose Zion Tech Group?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're not just another tech company. We're the architects of tomorrow's digital landscape.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">AI-First Approach</h3>
              <p className="text-gray-300 leading-relaxed">
                Leading-edge AI consciousness and emotional intelligence that adapts to your business needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Atom className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Quantum Innovation</h3>
              <p className="text-gray-300 leading-relaxed">
                Breakthrough quantum computing solutions that solve previously impossible problems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-300 leading-relaxed">
                Zero-trust architecture and quantum-secured infrastructure for maximum protection.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Rapid Deployment</h3>
              <p className="text-gray-300 leading-relaxed">
                Micro SAAS solutions that deploy in minutes, not months, with instant ROI.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 border border-cyan-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join hundreds of companies already leveraging our revolutionary technology solutions to achieve unprecedented growth and efficiency.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="tel:+1 302 464 0950"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3 shadow-2xl shadow-cyan-500/25"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now: +1 302 464 0950</span>
                </a>
                
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=Comprehensive Services Inquiry"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3 shadow-2xl shadow-purple-500/25"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email Us</span>
                </a>
              </div>

              <div className="text-center">
                <p className="text-gray-400 mb-4">Visit our website for more information:</p>
                <a
                  href="https://ziontechgroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium inline-flex items-center gap-2"
                >
                  <span>ziontechgroup.com</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesAdvertising;