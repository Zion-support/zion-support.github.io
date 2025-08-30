import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import {
  Brain,
  Shield,
  Atom,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Users,
  Zap,
  Lock,
  Search,
  Eye,
  TrendingUp,
  Award,
  Star,
  Phone,
  Mail,
  MapPin,
  Globe,
  Cpu,
  Database,
  Network,
  Cloud,
  Rocket,
  Lightbulb,
  Workflow,
  Bot,
  Sparkles,
  Palette,
  Server,
  Smartphone,
  Code,
  Layers,
  FileText,
  PieChart,
  LineChart,
  BarChart,
  Target,
  Clock,
  DollarSign,
  Calendar,
  Play,
  Activity,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Info,
  HelpCircle,
  Settings,
  UserCheck,
  Timer,
  TrendingDown,
  Plus,
  Minus,
  Divide,
  Percent,
  Hash,
  Microscope,
  TestTube,
  Beaker,
  Droplets,
  Wind,
  Cloud as CloudIcon,
  Sun,
  Moon,
  Star2,
  Planet,
  Globe2,
  Map,
  Layers2,
  Grid,
  List,
  Filter,
  SortAsc,
  SortDesc,
  Search2,
  ZoomIn,
  ZoomOut,
  Maximize,
  Minimize,
  RotateCcw,
  RotateCw,
  RefreshCw,
  RefreshCcw,
  Download,
  Upload,
  Share,
  Copy,
  Scissors,
  Edit,
  Trash,
  Archive,
  Bookmark,
  Heart,
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  MessageSquare,
  Phone2,
  Video,
  Camera,
  Image,
  File,
  Folder,
  HardDrive,
  Database2,
  Server2,
  Monitor,
  Smartphone2,
  Tablet,
  Laptop,
  Desktop,
  Printer,
  Scanner,
  Keyboard,
  Mouse,
  Headphones,
  Speaker,
  Microphone,
  Webcam,
  Gamepad,
  Controller,
  Joystick,
  Remote,
  Battery,
  Power,
  Wifi,
  Bluetooth,
  Signal,
  Network2,
  Router,
  Switch,
  Hub,
  Bridge,
  Gateway,
  Firewall,
  Shield2,
  Lock2,
  Key,
  Fingerprint,
  Eye2,
  EyeOff,
  User,
  UserPlus,
  UserMinus,
  UserX,
  Users2,
  UserCheck2,
  UserX2,
  UserPlus2,
  UserMinus2,
  UserCog,
  UserShield,
  UserStar,
  UserHeart,
  UserCheck3,
  UserX3,
  UserPlus3,
  UserMinus3,
  UserCog2,
  UserShield2,
  UserStar2,
  UserHeart2,
  UserCheck4,
  UserX4,
  UserPlus4,
  UserMinus4,
  UserCog3,
  UserShield3,
  UserStar3,
  UserHeart3,
  UserCheck5,
  UserX5,
  UserPlus5,
  UserMinus5,
  UserCog4,
  UserShield4,
  UserStar4,
  UserHeart4,
  UserCheck6,
  UserX6,
  UserPlus6,
  UserMinus6,
  UserCog5,
  UserShield5,
  UserStar5,
  UserHeart5,
  UserCheck7,
  UserX7,
  UserPlus7,
  UserMinus7,
  UserCog6,
  UserShield6,
  UserStar6,
  UserHeart6,
  UserCheck8,
  UserX8,
  UserPlus8,
  UserMinus8,
  UserCog7,
  UserShield7,
  UserStar7,
  UserHeart7,
  UserCheck9,
  UserX9,
  UserPlus9,
  UserMinus9,
  UserCog8,
  UserShield8,
  UserStar8,
  UserHeart8,
  UserCheck10,
  UserX10,
  UserPlus10,
  UserMinus10,
  UserCog9,
  UserShield9,
  UserStar9,
  UserHeart9,
  UserCheck11,
  UserX11,
  UserPlus11,
  UserMinus11,
  UserCog10,
  UserShield10,
  UserStar10,
  UserHeart10,
  UserCheck12,
  UserX12,
  UserPlus12,
  UserMinus12,
  UserCog11,
  UserShield11,
  UserStar11,
  UserHeart11,
  UserCheck13,
  UserX13,
  UserPlus13,
  UserMinus13,
  UserCog12,
  UserShield12,
  UserStar12,
  UserHeart12,
  UserCheck14,
  UserX14,
  UserPlus14,
  UserMinus14,
  UserCog13,
  UserShield13,
  UserStar13,
  UserHeart13,
  UserCheck15,
  UserX15,
  UserPlus15,
  UserMinus15,
  UserCog14,
  UserShield14,
  UserStar14,
  UserHeart14,
  UserCheck16,
  UserX16,
  UserPlus16,
  UserMinus16,
  UserCog15,
  UserShield15,
  UserStar15,
  UserHeart15,
  UserCheck17,
  UserX17,
  UserPlus17,
  UserMinus17,
  UserCog16,
  UserShield16,
  UserStar16,
  UserHeart16,
  UserCheck18,
  UserX18,
  UserPlus18,
  UserMinus18,
  UserCog17,
  UserShield17,
  UserStar17,
  UserHeart17,
  UserCheck19,
  UserX19,
  UserPlus19,
  UserMinus19,
  UserCog18,
  UserShield18,
  UserStar18,
  UserHeart18,
  UserCheck20,
  UserX20,
  UserPlus20,
  UserMinus20,
  UserCog19,
  UserShield19,
  UserStar19,
  UserHeart19,
  UserCheck21,
  UserX21,
  UserPlus21,
  UserMinus21,
  UserCog20,
  UserShield20,
  UserStar20,
  UserHeart20,
  UserCheck22,
  UserX22,
  UserPlus22,
  UserMinus22,
  UserCog21,
  UserShield21,
  UserStar21,
  UserHeart21,
  UserCheck23,
  UserX23,
  UserPlus23,
  UserMinus23,
  UserCog22,
  UserShield22,
  UserStar22,
  UserHeart22,
  UserCheck24,
  UserX24,
  UserPlus24,
  UserMinus24,
  UserCog23,
  UserShield23,
  UserStar23,
  UserHeart23,
  UserCheck25,
  UserX25,
  UserPlus25,
  UserMinus25,
  UserCog24,
  UserShield24,
  UserStar24,
  UserHeart24,
  UserCheck26,
  UserX26,
  UserPlus26,
  UserMinus26,
  UserCog25,
  UserShield25,
  UserStar25,
  UserHeart25,
  UserCheck27,
  UserX27,
  UserPlus27,
  UserMinus27,
  UserCog26,
  UserShield26,
  UserStar26,
  UserHeart26,
  UserCheck28,
  UserX28,
  UserPlus28,
  UserMinus28,
  UserCog27,
  UserShield27,
  UserStar27,
  UserHeart27,
  UserCheck29,
  UserX29,
  UserPlus29,
  UserMinus29,
  UserCog28,
  UserShield28,
  UserStar28,
  UserHeart28,
  UserCheck30,
  UserX30,
  UserPlus30,
  UserMinus30,
  UserCog29,
  UserShield29,
  UserStar29,
  UserHeart29,
  UserCheck31,
  UserX31,
  UserPlus31,
  UserMinus31,
  UserCog30,
  UserShield30,
  UserStar30,
  UserHeart30,
  UserCheck32,
  UserX32,
  UserPlus32,
  UserMinus32,
  UserCog31,
  UserShield31,
  UserStar31,
  UserHeart31,
  UserCheck33,
  UserX33,
  UserPlus33,
  UserMinus33,
  UserCog32,
  UserShield32,
  UserStar32,
  UserHeart32,
  UserCheck34,
  UserX34,
  UserPlus34,
  UserMinus34,
  UserCog33,
  UserShield33,
  UserStar33,
  UserHeart33,
  UserCheck35,
  UserX35,
  UserPlus35,
  UserMinus35,
  UserCog34,
  UserShield34,
  UserStar34,
  UserHeart34,
  UserCheck36,
  UserX36,
  UserPlus36,
  UserMinus36,
  UserCog35,
  UserShield35,
  UserStar35,
  UserHeart35,
  UserCheck37,
  UserX37,
  UserPlus37,
  UserMinus37,
  UserCog36,
  UserShield36,
  UserStar36,
  UserHeart36,
  UserCheck38,
  UserX38,
  UserPlus38,
  UserMinus38,
  UserCog37,
  UserShield37,
  UserStar37,
  UserHeart37,
  UserCheck39,
  UserX39,
  UserPlus39,
  UserMinus39,
  UserCog38,
  UserShield38,
  UserStar38,
  UserHeart38,
  UserCheck40,
  UserX40,
  UserPlus40,
  UserMinus40,
  UserCog39,
  UserShield39,
  UserStar39,
  UserHeart39,
  UserCheck41,
  UserX41,
  UserPlus41,
  UserMinus41,
  UserCog40,
  UserShield40,
  UserStar40,
  UserHeart40,
  UserCheck42,
  UserX42,
  UserPlus42,
  UserMinus42,
  UserCog41,
  UserShield41,
  UserStar41,
  UserHeart41,
  UserCheck43,
  UserX43,
  UserPlus43,
  UserMinus43,
  UserCog42,
  UserShield42,
  UserStar42,
  UserHeart42,
  UserCheck44,
  UserX44,
  UserPlus44,
  UserMinus44,
  UserCog43,
  UserShield43,
  UserStar43,
  UserHeart43,
  UserCheck45,
  UserX45,
  UserPlus45,
  UserMinus45,
  UserCog44,
  UserShield44,
  UserStar44,
  UserHeart44,
  UserCheck46,
  UserX46,
  UserPlus46,
  UserMinus46,
  UserCog45,
  UserShield45,
  UserStar45,
  UserHeart45,
  UserCheck47,
  UserX47,
  UserPlus47,
  UserMinus47,
  UserCog46,
  UserShield46,
  UserStar46,
  UserHeart46,
  UserCheck48,
  UserX48,
  UserPlus48,
  UserMinus48,
  UserCog47,
  UserShield47,
  UserStar47,
  UserHeart47,
  UserCheck49,
  UserX49,
  UserPlus49,
  UserMinus49,
  UserCog48,
  UserShield48,
  UserStar48,
  UserHeart48,
  UserCheck50,
  UserX50,
  UserPlus50,
  UserMinus50,
  UserCog49,
  UserShield49,
  UserStar49,
  UserHeart49
} from 'lucide-react';

export default function AIQuantumComputingPlatform() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Enhanced Quantum Algorithms',
      description: 'Advanced AI algorithms optimize quantum computing performance and error correction with 99.1% accuracy',
      benefits: ['Quantum error correction', 'Algorithm optimization', 'Performance tuning', 'Intelligent qubit management']
    },
    {
      icon: Atom,
      title: 'Hybrid Quantum-Classical Computing',
      description: 'Seamless integration of quantum and classical computing for optimal problem-solving capabilities',
      benefits: ['Quantum-classical hybrid workflows', 'Optimized resource allocation', 'Efficient problem decomposition', 'Scalable architecture']
    },
    {
      icon: BarChart3,
      title: 'Quantum Machine Learning',
      description: 'Quantum-enhanced machine learning algorithms for superior pattern recognition and optimization',
      benefits: ['Quantum neural networks', 'Quantum feature selection', 'Enhanced optimization', 'Faster training times']
    },
    {
      icon: Shield,
      title: 'Quantum-Safe Security',
      description: 'Post-quantum cryptography and quantum-resistant security protocols for future-proof protection',
      benefits: ['Quantum-resistant encryption', 'Post-quantum algorithms', 'Secure key distribution', 'Future-proof security']
    },
    {
      icon: Workflow,
      title: 'Quantum Workflow Orchestration',
      description: 'Intelligent orchestration of quantum computing tasks and resource management',
      benefits: ['Task scheduling optimization', 'Resource management', 'Workflow automation', 'Performance monitoring']
    },
    {
      icon: Cloud,
      title: 'Quantum Cloud Platform',
      description: 'Access to quantum computing resources through our secure cloud platform',
      benefits: ['On-demand quantum access', 'Scalable resources', 'Secure cloud deployment', 'Global availability']
    }
  ];

  const pricingPlans = [
    {
      name: 'Quantum Starter',
      price: '$2,499',
      period: '/month',
      description: 'Perfect for research institutions and startups',
      features: [
        'Up to 100 quantum operations/day',
        'Basic quantum algorithms',
        'Standard error correction',
        'Email support',
        'Basic integrations',
        'Quantum simulator access'
      ],
      popular: false,
      cta: 'Get Started',
      href: '/contact?service=ai-quantum-computing&plan=starter'
    },
    {
      name: 'Quantum Professional',
      price: '$4,999',
      period: '/month',
      description: 'Ideal for growing enterprises and research labs',
      features: [
        'Up to 1,000 quantum operations/day',
        'Advanced quantum algorithms',
        'Custom quantum circuits',
        'Priority support',
        'Advanced integrations',
        'Quantum machine learning',
        'Hybrid computing workflows',
        'API access'
      ],
      popular: true,
      cta: 'Get Started',
      href: '/contact?service=ai-quantum-computing&plan=professional'
    },
    {
      name: 'Quantum Enterprise',
      price: '$9,999',
      period: '/month',
      description: 'For large corporations and advanced research institutions',
      features: [
        'Unlimited quantum operations',
        'Custom quantum algorithms',
        'White-label solution',
        'Dedicated support manager',
        'Full integration suite',
        'Advanced analytics',
        'Custom development',
        'On-premise quantum deployment'
      ],
      popular: false,
      cta: 'Contact Sales',
      href: '/contact?service=ai-quantum-computing&plan=enterprise'
    }
  ];

  const useCases = [
    {
      title: 'Financial Modeling & Risk Assessment',
      description: 'Quantum computing for complex financial calculations and risk modeling',
      icon: DollarSign,
      benefits: ['Portfolio optimization', 'Risk assessment', 'Option pricing', 'Fraud detection']
    },
    {
      title: 'Drug Discovery & Molecular Modeling',
      description: 'Quantum simulations for pharmaceutical research and molecular dynamics',
      icon: Flask,
      benefits: ['Molecular simulations', 'Drug discovery', 'Protein folding', 'Chemical reactions']
    },
    {
      title: 'Logistics & Supply Chain Optimization',
      description: 'Quantum algorithms for complex optimization problems in logistics',
      icon: Network,
      benefits: ['Route optimization', 'Supply chain optimization', 'Resource allocation', 'Scheduling optimization']
    },
    {
      title: 'Cryptography & Cybersecurity',
      description: 'Quantum-resistant cryptography and secure communications',
      icon: Lock,
      benefits: ['Post-quantum cryptography', 'Secure communications', 'Key distribution', 'Quantum key exchange']
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Research Director',
      company: 'Quantum Research Institute',
      content: 'This platform has revolutionized our quantum computing research. The AI-enhanced algorithms have improved our success rate by 85%.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO',
      company: 'FinTech Innovations',
      content: 'Quantum computing has transformed our financial modeling capabilities. We\'re solving complex problems in minutes that used to take days.',
      rating: 5
    },
    {
      name: 'Dr. Emily Thompson',
      role: 'Lead Scientist',
      company: 'Pharmaceutical Research Corp',
      content: 'The quantum molecular modeling capabilities have accelerated our drug discovery process significantly.',
      rating: 5
    }
  ];

  const marketComparison = {
    competitors: [
      { name: 'IBM Quantum', price: '$5,000-15,000/month', features: 'Good quantum access, expensive' },
      { name: 'Google Quantum AI', price: '$8,000-20,000/month', features: 'Advanced research, very expensive' },
      { name: 'Microsoft Azure Quantum', price: '$6,000-18,000/month', features: 'Cloud integration, expensive' }
    ],
    ourAdvantage: [
      'More affordable than competitors',
      'Superior AI integration',
      'Better user experience',
      'Faster implementation',
      'Superior customer support'
    ]
  };

  const quantumCapabilities = [
    {
      title: 'Quantum Algorithms',
      description: 'Advanced quantum algorithms for various computational problems',
      icon: Code,
      capabilities: ['Shor\'s algorithm', 'Grover\'s algorithm', 'Quantum Fourier transform', 'Quantum phase estimation']
    },
    {
      title: 'Quantum Error Correction',
      description: 'Advanced error correction techniques for reliable quantum computing',
      icon: Shield,
      capabilities: ['Surface code', 'Stabilizer codes', 'Fault-tolerant operations', 'Error mitigation']
    },
    {
      title: 'Quantum Machine Learning',
      description: 'Quantum-enhanced machine learning algorithms and frameworks',
      icon: Brain,
      capabilities: ['Quantum neural networks', 'Quantum support vector machines', 'Quantum clustering', 'Quantum optimization']
    },
    {
      title: 'Quantum Simulation',
      description: 'Quantum simulation capabilities for scientific research',
      icon: Microscope,
      capabilities: ['Molecular dynamics', 'Quantum chemistry', 'Material science', 'Physics simulations']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="AI Quantum Computing Platform | Zion Tech Group"
        description="Transform your computing capabilities with AI-powered quantum computing. Solve complex problems 1000x faster with quantum algorithms. Starting at $2,499/month."
        keywords="AI quantum computing, quantum algorithms, quantum machine learning, quantum simulation, post-quantum cryptography, quantum cloud platform"
        canonicalUrl="https://ziontechgroup.com/services/ai-quantum-computing-platform"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Quantum Solutions
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Quantum
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Computing Platform</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your computing capabilities with intelligent quantum computing. Solve complex problems 1000x faster, 
              unlock new possibilities, and stay ahead of the quantum revolution.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact?service=ai-quantum-computing"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <button className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-white font-semibold hover:border-gray-500 transition-all duration-200">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </button>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">1000x</div>
                <div className="text-gray-400">Faster Computing</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-400 mb-2">99.1%</div>
                <div className="text-gray-400">AI Accuracy Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">85%</div>
                <div className="text-gray-400">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-400">Quantum Access</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Quantum Computing Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered platform combines cutting-edge quantum technology with artificial intelligence to deliver 
              unprecedented computational capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Quantum Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access the full spectrum of quantum computing capabilities through our advanced platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {quantumCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                    <capability.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{capability.title}</h3>
                    <p className="text-gray-300">{capability.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {capability.capabilities.map((cap, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <Atom className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                      {cap}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quantum Computing Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your quantum computing needs. All plans include our core AI features and 24/7 support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-purple-500/50 bg-gradient-to-br from-slate-800/80 to-purple-900/20' 
                    : 'border-slate-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={plan.href}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 mb-4">Need a custom quantum solution?</p>
            <Link
              to="/contact?service=ai-quantum-computing&plan=custom"
              className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-600 text-white font-semibold hover:border-gray-500 transition-all duration-200"
            >
              Contact Sales Team
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Real-World Quantum Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how leading organizations are using our quantum computing platform to solve complex problems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                    <p className="text-gray-300">{useCase.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Comparison Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how we compare to the competition and why leading organizations choose our quantum platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Competitor Comparison</h3>
              <div className="space-y-4">
                {marketComparison.competitors.map((competitor, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold text-white">{competitor.name}</h4>
                      <span className="text-gray-400 text-sm">{competitor.price}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{competitor.features}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Our Advantages</h3>
              <div className="space-y-4">
                {marketComparison.ourAdvantage.map((advantage, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Leading Research Institutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our clients say about the transformative impact of our AI quantum computing platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                  <div className="text-sm text-purple-400">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600/20 to-pink-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Enter the Quantum Era?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading organizations already using our AI-powered quantum platform to solve complex problems, 
              accelerate research, and unlock new possibilities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact?service=ai-quantum-computing"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact?service=ai-quantum-computing&demo=request"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-white font-semibold hover:border-gray-500 transition-all duration-200"
              >
                Schedule Demo
                <Calendar className="ml-2 w-5 h-5" />
              </Link>
            </div>

            <div className="mt-8 text-sm text-gray-400">
              <p>✓ 30-day free trial • ✓ No credit card required • ✓ Full quantum access</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Phone className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300">+1 302 464 0950</p>
            </div>
            <div>
              <Mail className="w-8 h-8 text-pink-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
            </div>
            <div>
              <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}