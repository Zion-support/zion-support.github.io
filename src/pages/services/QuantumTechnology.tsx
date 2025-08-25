import React from 'react';
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { 
<<<<<<< HEAD
  Building, 
=======
<<<<<<< HEAD
  Microchip, 
  Atom, 
  Zap, 
  Shield, 
  Cpu, 
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
  Database, 
  Network, 
  Brain,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
<<<<<<< HEAD
  TrendingUp,
  Shield,
  Globe
=======
  Brain,
  Bot,
  Database as DatabaseIcon,
  ShieldCheck,
  Globe2,
  BarChart
=======
  Atom, 
  Cpu, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  Globe, 
  Database,
  Lock,
  BarChart3,
  Target,
  Rocket,
  Brain,
  Network
>>>>>>> origin/cursor/website-audit-and-enhancement-4d8c
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
} from 'lucide-react';

<<<<<<< HEAD
const quantumServices = [
  {
    id: 'quantum-edge-computing-platform',
    title: 'Quantum Edge Computing Platform',
    description: 'Revolutionary edge computing platform that leverages quantum computing principles to deliver unprecedented performance and efficiency',
    icon: Building,
    color: 'from-blue-500 to-indigo-600',
    features: [
      'Quantum-enhanced processing',
      'Edge computing optimization',
      'Real-time data analysis',
      'Scalable architecture',
      'Energy efficiency'
    ],
    pricing: '$1,299/month',
    href: '/quantum-edge-computing-platform'
  },
  {
    id: 'neuromorphic-computing-infrastructure',
    title: 'Neuromorphic Computing Infrastructure',
    description: 'Brain-inspired computing systems that mimic neural networks for advanced AI and machine learning applications',
    icon: Brain,
    color: 'from-purple-500 to-pink-600',
    features: [
      'Neural network simulation',
      'Cognitive computing',
      'Pattern recognition',
      'Adaptive learning',
      'Low power consumption'
    ],
    pricing: '$899/month',
    href: '/neuromorphic-computing-infrastructure'
  },
  {
    id: 'holographic-data-center-platform',
    title: 'Holographic Data Center Platform',
    description: 'Next-generation data center technology using holographic storage and quantum processing for massive data operations',
    icon: Database,
    color: 'from-green-500 to-teal-600',
    features: [
      'Holographic storage',
      'Quantum data processing',
      '3D data visualization',
      'High-density storage',
      'Fast data retrieval'
    ],
    pricing: '$1,599/month',
    href: '/holographic-data-center-platform'
  },
  {
    id: 'bio-computing-infrastructure',
    title: 'Bio-Computing Infrastructure',
    description: 'Biological computing systems that harness the power of living organisms for computational tasks',
    icon: Building,
    color: 'from-emerald-500 to-green-600',
    features: [
      'Biological processors',
      'DNA computing',
      'Protein-based logic',
      'Biomolecular storage',
      'Natural computing'
    ],
    pricing: '$1,199/month',
    href: '/bio-computing-infrastructure'
  },
  {
    id: 'quantum-internet-backbone',
    title: 'Quantum Internet Backbone',
    description: 'Quantum-secured internet infrastructure providing unhackable communication and ultra-fast data transfer',
    icon: Network,
    color: 'from-cyan-500 to-blue-600',
    features: [
      'Quantum encryption',
      'Entangled communication',
      'Ultra-secure networks',
      'Instant data transfer',
      'Quantum key distribution'
    ],
    pricing: '$1,799/month',
    href: '/quantum-internet-backbone'
  }
];

const benefits = [
  {
    title: 'Unprecedented Performance',
    description: 'Quantum computing delivers exponential speed improvements over classical systems',
    icon: Zap
  },
  {
    title: 'Quantum Advantage',
    description: 'Solve complex problems that are impossible for traditional computers',
    icon: Building
  },
  {
    title: 'Future-Proof Technology',
    description: 'Stay ahead with cutting-edge quantum computing solutions',
    icon: TrendingUp
  },
  {
    title: 'Quantum Security',
    description: 'Unhackable communication and data protection',
    icon: Shield
  }
];

const applications = [
  {
    category: 'Cryptography',
    description: 'Quantum-resistant encryption and secure communication',
    icon: Shield
  },
  {
    category: 'Optimization',
    description: 'Complex optimization problems in logistics and finance',
    icon: Building
  },
  {
    category: 'Machine Learning',
    description: 'Quantum-enhanced AI and pattern recognition',
    icon: Brain
  },
  {
    category: 'Drug Discovery',
    description: 'Molecular simulation and pharmaceutical research',
    icon: Building
  },
  {
    category: 'Climate Modeling',
    description: 'Advanced climate prediction and environmental analysis',
    icon: Globe
  },
  {
    category: 'Financial Modeling',
    description: 'Risk assessment and portfolio optimization',
    icon: TrendingUp
  }
];
=======
<<<<<<< HEAD
const QuantumTechnology: React.FC = () => {
  const features = [
    {
      icon: Atom,
      title: "Quantum Computing",
      description: "Harness the power of quantum bits (qubits) for exponentially faster computational capabilities."
    },
    {
      icon: Shield,
      title: "Quantum Security",
      description: "Unbreakable encryption using quantum key distribution and quantum-resistant algorithms."
    },
    {
      icon: Brain,
      title: "Quantum AI",
      description: "Quantum machine learning algorithms that solve complex problems beyond classical computing limits."
=======
const QuantumTechnology = () => {
  const features = [
    {
      icon: Atom,
      title: "Quantum Computing Solutions",
      description: "Harness the power of quantum mechanics to solve complex computational problems that are impossible for classical computers.",
      benefits: ["Exponential speedup", "Quantum advantage", "Future-proof technology"]
    },
    {
      icon: Shield,
      title: "Quantum-Safe Cryptography",
      description: "Next-generation security protocols that protect against quantum attacks and ensure data remains secure in the quantum era.",
      benefits: ["Post-quantum security", "Advanced encryption", "Threat resistance"]
    },
    {
      icon: Brain,
      title: "Quantum Machine Learning",
      description: "Revolutionary AI algorithms that leverage quantum computing to process and analyze data with unprecedented efficiency.",
      benefits: ["Faster training", "Better accuracy", "Quantum insights"]
>>>>>>> origin/cursor/website-audit-and-enhancement-4d8c
    },
    {
      icon: Network,
      title: "Quantum Networks",
<<<<<<< HEAD
      description: "Secure quantum communication networks for ultra-fast, unhackable data transmission."
=======
      description: "Secure quantum communication networks that enable unhackable data transmission and quantum internet infrastructure.",
      benefits: ["Unhackable communication", "Quantum entanglement", "Global connectivity"]
>>>>>>> origin/cursor/website-audit-and-enhancement-4d8c
    }
  ];

  const applications = [
    {
      title: "Financial Services",
<<<<<<< HEAD
      description: "Revolutionize risk assessment, portfolio optimization, and fraud detection with quantum algorithms.",
      icon: BarChart,
      benefits: ["Risk Modeling", "Portfolio Optimization", "Fraud Detection", "Algorithmic Trading"]
    },
    {
      title: "Drug Discovery",
      description: "Accelerate pharmaceutical research with quantum simulations of molecular interactions.",
      icon: Heart,
      benefits: ["Molecular Modeling", "Drug Design", "Protein Folding", "Clinical Trials"]
    },
    {
      title: "Logistics Optimization",
      description: "Solve complex routing and supply chain problems with quantum optimization algorithms.",
      icon: Network,
      benefits: ["Route Optimization", "Supply Chain", "Inventory Management", "Cost Reduction"]
    },
    {
      title: "Climate Modeling",
      description: "Advanced climate prediction and environmental modeling using quantum computational power.",
      icon: Globe2,
      benefits: ["Weather Forecasting", "Climate Analysis", "Environmental Impact", "Policy Planning"]
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Exponential Speed",
      description: "Solve problems in minutes that would take classical computers years"
    },
    {
      icon: Shield,
      title: "Unbreakable Security",
      description: "Quantum encryption provides theoretically unbreakable data protection"
    },
    {
      icon: Brain,
      title: "Advanced AI",
      description: "Quantum machine learning enables breakthroughs in artificial intelligence"
    },
    {
      icon: Target,
      title: "Competitive Advantage",
      description: "Stay ahead of the curve with cutting-edge quantum technology"
    }
  ];

  const technologies = [
    "Quantum Gates & Circuits",
    "Quantum Error Correction",
    "Quantum Key Distribution",
    "Quantum Machine Learning",
    "Quantum Cryptography",
    "Quantum Sensors",
    "Quantum Memory",
    "Quantum Repeaters"
  ];

  const quantumComputingTypes = [
    {
      name: "Gate-based Quantum Computing",
      description: "Traditional quantum computing using quantum gates and circuits",
      applications: ["Algorithm Development", "Research & Development", "Proof of Concepts"]
    },
    {
      name: "Quantum Annealing",
      description: "Specialized quantum computing for optimization problems",
      applications: ["Supply Chain", "Logistics", "Financial Modeling"]
    },
    {
      name: "Quantum Simulation",
      description: "Simulating quantum systems for scientific research",
      applications: ["Chemistry", "Physics", "Material Science"]
    }
  ];
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7

export default function QuantumTechnology() {
  return (
<<<<<<< HEAD
=======
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white">
      <SEOHead 
        title="Quantum Technology - Zion Tech Group"
        description="Explore the future of computing with our quantum technology solutions. From quantum computing to quantum security, unlock unprecedented computational power and security."
        keywords="quantum technology, quantum computing, quantum security, quantum AI, quantum networks, quantum cryptography"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-6">
              <Microchip className="w-4 h-4 mr-2" />
=======
import { motion } from 'framer-motion';
import { Atom, Brain, Shield, Zap, Cpu, Globe, Rocket, Target } from 'lucide-react';

export default function QuantumTechnology() {
  const services = [
    {
      icon: Atom,
      title: "Quantum Computing",
      description: "Access to cutting-edge quantum computers for complex computational problems and research."
    },
    {
      icon: Brain,
      title: "Quantum Neural Networks",
      description: "Next-generation AI powered by quantum computing principles for unprecedented performance."
    },
    {
      icon: Shield,
      title: "Quantum Cryptography",
      description: "Unbreakable encryption using quantum key distribution and quantum-resistant algorithms."
    },
    {
      icon: Zap,
      title: "Quantum Simulation",
      description: "Accurate simulation of quantum systems for drug discovery and materials science."
    },
    {
      icon: Cpu,
      title: "Quantum Algorithms",
      description: "Custom quantum algorithms optimized for specific business applications and research."
    },
    {
      icon: Globe,
      title: "Quantum Cloud Access",
      description: "Cloud-based access to quantum computing resources and development tools."
    }
  ];

  const applications = [
    "Drug Discovery & Pharmaceutical Research",
    "Financial Modeling & Risk Assessment",
    "Climate Change & Environmental Modeling",
    "Artificial Intelligence & Machine Learning",
    "Cryptography & Cybersecurity",
    "Materials Science & Engineering"
  ];

  const benefits = [
    "Exponential speedup for complex calculations",
    "Unprecedented accuracy in simulations",
    "Future-proof security with quantum cryptography",
    "Competitive advantage in research and development",
    "Access to cutting-edge quantum infrastructure",
    "Expert guidance from quantum computing specialists"
  ];

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white">
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
    <div className="min-h-screen bg-background">
      <SEO 
        title="Quantum Technology - Zion Tech Group" 
        description="Next-generation quantum computing solutions for unprecedented performance and innovation across industries."
        tags={["quantum computing", "quantum technology", "quantum edge computing", "neuromorphic computing", "holographic data centers"]}
        url="https://ziontechgroup.com/services/quantum-technology"
      />

<<<<<<< HEAD
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-black to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4">
              <Building className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gradient">
              Quantum Technology
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Next-generation quantum computing solutions that deliver unprecedented performance, 
            security, and innovation. Experience the future of computing technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-primary text-lg px-8 py-4 inline-flex items-center"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/request-quote"
              className="btn-secondary text-lg px-8 py-4"
            >
              Request Demo
            </Link>
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f698
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full">
                <Atom className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
>>>>>>> origin/cursor/website-audit-and-enhancement-da65
=======
      description: "Quantum algorithms for portfolio optimization, risk assessment, and high-frequency trading.",
      icon: BarChart3
    },
    {
      title: "Drug Discovery",
      description: "Molecular simulation and chemical analysis for pharmaceutical research and development.",
      icon: Brain
    },
    {
      title: "Logistics & Supply Chain",
      description: "Complex optimization problems for route planning, inventory management, and resource allocation.",
      icon: Database
    },
    {
      title: "Cybersecurity",
      description: "Quantum-resistant encryption and advanced threat detection systems.",
      icon: Lock
    }
  ];

  const technologies = [
    "Quantum Gates & Circuits",
    "Quantum Error Correction",
    "Quantum Annealing",
    "Quantum Machine Learning",
    "Post-Quantum Cryptography",
    "Quantum Key Distribution",
    "Quantum Sensors",
    "Quantum Materials"
  ];

  const benefits = [
    {
      title: "Exponential Performance",
      description: "Solve problems in minutes that would take classical computers centuries to complete.",
      icon: Zap
    },
    {
      title: "Unprecedented Security",
      description: "Quantum-safe encryption that protects against all known and future attack vectors.",
      icon: Shield
    },
    {
      title: "Scientific Breakthroughs",
      description: "Enable discoveries in physics, chemistry, and materials science that were previously impossible.",
      icon: Rocket
    },
    {
      title: "Competitive Advantage",
      description: "Stay ahead of the curve with early adoption of quantum technologies.",
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
>>>>>>> origin/cursor/website-audit-and-enhancement-4d8c
              Quantum Technology
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              The Future of Computing
            </h1>
<<<<<<< HEAD
<<<<<<< HEAD
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Unlock unprecedented computational power with quantum technology solutions that solve problems beyond classical computing limits
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link 
                to="/services" 
                className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Quantum Services Grid */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gradient">
              Our Quantum Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of quantum computing solutions designed to revolutionize your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {quantumServices.map((service) => (
              <div
                key={service.id}
                className="group bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-400">{service.description}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>{feature}</span>
=======
      {/* Features Section */}
      <section className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Quantum Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our quantum technology solutions leverage the fundamental principles of quantum mechanics to deliver breakthrough performance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how quantum technology is transforming industries and solving previously intractable problems
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {applications.map((application, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                    <application.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{application.title}</h3>
                    <p className="text-gray-300 mb-4">{application.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {application.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-bold text-blue-400">{service.pricing}</span>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
<<<<<<< HEAD

                <div className="pt-4 border-t border-gray-700/50">
                  <Link
                    to={service.href}
                    className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm font-medium group"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
=======
              </div>
            ))}
=======
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Unlock the future with cutting-edge quantum computing, quantum-safe security, 
              and revolutionary quantum applications that transform industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg hover:from-purple-400 hover:to-cyan-400 transition-all duration-300 text-lg font-semibold transform hover:scale-105 shadow-lg shadow-purple-500/30"
              >
                Explore Quantum
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border border-purple-400/50 text-purple-400 rounded-lg hover:bg-purple-400/20 transition-all duration-300 text-lg font-semibold"
              >
                All Services
              </Link>
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-4d8c
          </div>
        </div>
        
        {/* Quantum Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-40 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/2 w-1 h-1 bg-blue-400 rounded-full animate-bounce"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping animation-delay-1000"></div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Why Choose Quantum Technology?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the transformative benefits of quantum technology solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
=======
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quantum Capabilities
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our quantum technology solutions leverage the fundamental principles of quantum mechanics 
              to deliver unprecedented computational power and security.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-purple-400">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-4d8c
              </div>
=======
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Harness the power of quantum mechanics to solve previously impossible problems and unlock new possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                Explore Quantum
              </button>
              <button className="px-8 py-4 border border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300">
                Get Started
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Quantum Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive quantum technology solutions designed to revolutionize your research and business operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300"
              >
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg w-fit mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
>>>>>>> origin/cursor/website-audit-and-enhancement-da65
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Technologies Section */}
      <section className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Core Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built on cutting-edge quantum technologies that ensure reliability and performance
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <Microchip className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                  {tech}
                </div>
              ))}
            </div>
=======
      {/* Applications Section */}
      <section className="py-16 px-4 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Quantum Applications</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how quantum technology is transforming industries and solving complex challenges.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((application, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 bg-gray-700/50 rounded-lg p-4 hover:bg-gray-600/50 transition-all duration-300"
              >
                <Target className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <span className="text-gray-200">{application}</span>
              </motion.div>
=======
      {/* Applications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Quantum technology is revolutionizing industries by solving previously intractable problems 
              and opening new possibilities for innovation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <app.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{app.title}</h3>
                </div>
                <p className="text-gray-300">{app.description}</p>
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
<<<<<<< HEAD
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gradient">
              Why Choose Quantum Technology?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our quantum solutions deliver exceptional value through unprecedented performance, security, and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center group"
                style={{ opacity: 0, transform: 'translateY(30px)' }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Quantum?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Quantum technology offers advantages that are impossible to achieve with classical computing.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                </div>
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Applications Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
=======
      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gradient">
              Quantum Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how quantum computing is transforming industries and solving complex problems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((application, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
<<<<<<< HEAD
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                    <application.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{application.category}</h3>
                </div>
                <p className="text-gray-300">{application.description}</p>
              </div>
            ))}
=======
                <div className="text-purple-400 text-sm font-medium">{tech}</div>
              </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-4d8c
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose Quantum?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the revolutionary advantages of quantum technology in your research and business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 bg-gray-700/50 rounded-lg p-4 hover:bg-gray-600/50 transition-all duration-300"
              >
                <Rocket className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <span className="text-gray-200">{benefit}</span>
              </motion.div>
            ))}
>>>>>>> origin/cursor/website-audit-and-enhancement-da65
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Experience Quantum Computing?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your business with our cutting-edge quantum computing solutions. 
            Experience unprecedented performance and innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-primary text-lg px-8 py-4 inline-flex items-center"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/request-quote"
              className="btn-secondary text-lg px-8 py-4"
            >
              Request Quote
            </Link>
          </div>
=======
<<<<<<< HEAD
<<<<<<< HEAD
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-700">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready for the Quantum Future?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Transform your business with the power of quantum technology and stay ahead of the competition
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Journey
            </Link>
            <Link 
              to="/services" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              Explore All Services
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 to-cyan-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for the Quantum Revolution?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the quantum future and discover how our quantum technology solutions can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg hover:from-purple-400 hover:to-cyan-400 transition-all duration-300 text-lg font-semibold transform hover:scale-105 shadow-lg shadow-purple-500/30"
            >
              Start Quantum Journey
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 border border-purple-400/50 text-purple-400 rounded-lg hover:bg-purple-400/20 transition-all duration-300 text-lg font-semibold"
            >
              View Pricing
>>>>>>> origin/cursor/website-audit-and-enhancement-4d8c
            </Link>
          </div>
=======
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Go Quantum?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the quantum revolution and unlock the future of computing with Zion Tech Group.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                Start Quantum Journey
              </button>
              <button className="px-8 py-4 border border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
>>>>>>> origin/cursor/website-audit-and-enhancement-da65
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
        </div>
      </section>
    </div>
  );
}