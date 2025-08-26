import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Rocket, 
  Users, 
  Award, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  Code,
  BarChart3,
  FileImage,
  MessageCircle,
  Video,
  FileText,
  Heart,
  ShoppingCart,
  Settings,
  HelpCircle,
  BookOpen,
  Briefcase,
  Target,
  Lightbulb,
  ShieldCheck,
  Server,
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
  DollarSign,
  Euro,
  Pound,
  Yen,
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
  VolumeX
} from 'lucide-react';

export default function Home() {
  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Global Clients",
      description: "Serving businesses worldwide"
    },
    {
      icon: Globe,
      value: "25+",
      label: "Countries",
      description: "Global presence"
    },
    {
      icon: Code,
      value: "1000+",
      label: "Projects",
      description: "Successfully delivered"
    },
    {
      icon: Shield,
      value: "99.9%",
      label: "Uptime",
      description: "Reliable service"
    }
  ];

  const featuredServices = [
    {
      title: "Quantum-Classical Hybrid AI",
      description: "Revolutionary AI platform combining quantum computing with classical AI algorithms",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      price: "$15,999/month",
      link: "/ai-services/quantum-classical-hybrid-ai"
    },
    {
      title: "6G Network Infrastructure",
      description: "Next-generation 6G network with terahertz frequencies and ultra-low latency",
      icon: Network,
      color: "from-blue-500 to-cyan-500",
      price: "$29,999/month",
      link: "/it-services/6g-network-infrastructure"
    },
    {
      title: "Synthetic Biology AI",
      description: "AI-powered platform for designing and optimizing biological systems",
      icon: Dna,
      color: "from-green-500 to-emerald-500",
      price: "$12,999/month",
      link: "/ai-services/synthetic-biology-ai"
    },
    {
      title: "Autonomous AI Agents",
      description: "Platform for creating autonomous AI agents that perform complex tasks",
      icon: Rocket,
      color: "from-orange-500 to-red-500",
      price: "$15,999/month",
      link: "/ai-services/autonomous-ai-agents"
    }
  ];

  const innovationCategories = [
    {
      title: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence solutions",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      services: [
        "Quantum-Classical Hybrid AI",
        "Multimodal AI Platform",
        "Autonomous AI Agents",
        "Neuromorphic AI Processing",
        "AI-Powered Drug Discovery",
        "AI Financial Trading Platform"
      ]
    },
    {
      title: "Next-Gen Infrastructure",
      description: "Revolutionary infrastructure solutions",
      icon: Server,
      color: "from-blue-500 to-cyan-500",
      services: [
        "6G Network Infrastructure",
        "Quantum-Secure Cloud",
        "AI-Powered Edge Computing",
        "Blockchain Infrastructure",
        "Zero-Trust Security",
        "Space Technology Platform"
      ]
    },
    {
      title: "Emerging Technologies",
      description: "Breakthrough technologies of the future",
      icon: Rocket,
      color: "from-green-500 to-emerald-500",
      services: [
        "Synthetic Biology AI",
        "Holographic AR/VR",
        "Brain-Computer Interfaces",
        "Autonomous Drone Fleets",
        "Quantum Blockchain",
        "Neuromorphic Computing"
      ]
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent mb-6">
              Zion Tech Group
            </h1>
            <p className="text-2xl md:text-3xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
              Pioneering the Future with Revolutionary AI, Quantum Computing, and Next-Generation Technology Solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-full hover:from-zion-purple hover:to-zion-cyan transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-full hover:bg-zion-cyan hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-slate-dark/50 to-zion-slate/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-zion-slate-dark/80 to-zion-slate/80 backdrop-blur-sm border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-zion-cyan mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
                <div className="text-zion-slate-light">{stat.description}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Technology Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover our cutting-edge services that are shaping the future of technology, business, and society
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <Link to={service.link}>
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-zion-slate-dark/80 to-zion-slate/80 backdrop-blur-sm border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 transform hover:scale-105">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-full mb-4`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-zion-slate-light mb-4 text-sm">
                      {service.description}
                    </p>
                    <div className="text-zion-cyan font-semibold text-lg">
                      {service.price}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-slate-dark/50 to-zion-slate/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Innovation Categories
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Explore our comprehensive range of innovative solutions across multiple technology domains
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {innovationCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-zion-slate-dark/80 to-zion-slate/80 backdrop-blur-sm border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${category.color} rounded-full mb-6`}>
                  <category.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                <p className="text-zion-slate-light mb-6">{category.description}</p>
                <ul className="space-y-2">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="h-5 w-5 text-zion-cyan mr-3 flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services"
                  className="inline-flex items-center mt-6 text-zion-cyan hover:text-zion-cyan-light transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join the future of technology with Zion Tech Group. Our innovative solutions are designed to give you a competitive edge in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-full hover:from-zion-purple hover:to-zion-cyan transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Your Journey
                <Rocket className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-full hover:bg-zion-cyan hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
