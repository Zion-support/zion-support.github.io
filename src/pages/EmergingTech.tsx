import React from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Users, TrendingUp, Globe, Lock, CheckCircle, Star, Cpu, Database, Building2, Network, Server, Monitor, Rocket, Code, Settings, Atom, Eye, Brain, Cloud } from 'lucide-react';
import { SEO } from '@/components/SEO';
=======
import { SEO } from '@/components/SEO';
import { 
  Zap, 
  Cpu, 
  Database, 
  Network, 
  Globe, 
  Shield,
  ArrowRight,
  CheckCircle,
  Star,
  Brain,
  Award,
  Rocket,
  Atom,
  Link,
  Eye,
  Leaf,
  Wifi,
  Smartphone
} from 'lucide-react';
import { Link } from 'react-router-dom';
>>>>>>> origin/cursor/website-audit-and-enhancement-8e2b

const EmergingTech = () => {
  const services = [
    {
<<<<<<< HEAD
      title: "Quantum Computing",
      description: "Explore the potential of quantum computing for complex problem-solving and optimization.",
      icon: Atom,
      features: ["Quantum algorithms", "Optimization problems", "Cryptography", "Research partnerships"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Extended Reality (XR)",
      description: "Immersive technologies including VR, AR, and MR for enhanced user experiences.",
      icon: Eye,
      features: ["VR/AR development", "3D modeling", "Interactive experiences", "Training simulations"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Edge Computing",
      description: "Distributed computing architecture for real-time data processing and reduced latency.",
      icon: Server,
      features: ["Edge infrastructure", "IoT integration", "Real-time processing", "Data optimization"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Blockchain & Web3",
      description: "Decentralized technologies for secure, transparent, and trustless applications.",
      icon: Shield,
      features: ["Smart contracts", "DeFi solutions", "NFT platforms", "DApp development"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Internet of Things (IoT)",
      description: "Connected devices and sensors for smart environments and data collection.",
      icon: Network,
      features: ["IoT platforms", "Sensor networks", "Data analytics", "Smart cities"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Advanced AI/ML",
      description: "Next-generation artificial intelligence and machine learning technologies.",
      icon: Brain,
      features: ["Deep learning", "Neural networks", "AI ethics", "Explainable AI"],
=======
      icon: Atom,
      title: "Quantum Computing Solutions",
      description: "Next-generation quantum computing applications for cryptography, optimization, and scientific research.",
      features: ["Quantum algorithms", "Cryptography", "Optimization", "Scientific simulation"],
      price: "From $200,000",
      innovationLevel: "Cutting-edge",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Link,
      title: "Blockchain & DeFi Platforms",
      description: "Advanced blockchain solutions for decentralized finance, smart contracts, and digital assets.",
      features: ["Smart contracts", "DeFi protocols", "NFT platforms", "Cross-chain solutions"],
      price: "From $120,000",
      innovationLevel: "Advanced",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Network,
      title: "IoT & Edge Computing",
      description: "Internet of Things solutions with edge computing for real-time data processing and analytics.",
      features: ["IoT sensors", "Edge processing", "Real-time analytics", "Device management"],
      price: "From $85,000",
      innovationLevel: "Advanced",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Eye,
      title: "Extended Reality (AR/VR)",
      description: "Immersive technology solutions for training, entertainment, and business applications.",
      features: ["AR applications", "VR experiences", "Mixed reality", "3D visualization"],
      price: "From $95,000",
      innovationLevel: "Innovative",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Wifi,
      title: "5G & Advanced Networks",
      description: "Next-generation network infrastructure and applications for ultra-fast connectivity.",
      features: ["5G infrastructure", "Network optimization", "Low latency apps", "IoT connectivity"],
      price: "From $150,000",
      innovationLevel: "Cutting-edge",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Leaf,
      title: "Green Technology Solutions",
      description: "Sustainable technology solutions for environmental monitoring and renewable energy.",
      features: ["Environmental monitoring", "Renewable energy", "Carbon tracking", "Sustainability analytics"],
      price: "From $75,000",
      innovationLevel: "Innovative",
>>>>>>> origin/cursor/website-audit-and-enhancement-8e2b
      color: "from-yellow-500 to-orange-500"
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Brain, 
  Shield, 
  Users, 
  Cpu, 
  Cloud,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Target,
  Rocket,
  Globe,
  Database,
  Network,
  Lock,
  BarChart3
} from 'lucide-react';

const EmergingTech = () => {
  const emergingTechServices = [
    {
      icon: Brain,
      title: 'Quantum Computing',
      description: 'Explore the potential of quantum computing for solving complex computational problems.',
      features: ['Quantum Algorithms', 'Quantum Simulation', 'Optimization Problems', 'Cryptography'],
      link: '/quantum-computing'
    },
    {
      icon: Zap,
      title: 'Edge Computing',
      description: 'Bring computation closer to data sources for faster processing and reduced latency.',
      features: ['Edge Infrastructure', 'Real-time Processing', 'IoT Integration', 'Performance Optimization'],
      link: '/edge-computing'
    },
    {
      icon: Shield,
      title: 'Blockchain & Web3',
      description: 'Leverage blockchain technology for secure, transparent, and decentralized solutions.',
      features: ['Smart Contracts', 'DeFi Solutions', 'NFT Platforms', 'Supply Chain Tracking'],
      link: '/blockchain-web3'
    },
    {
      icon: Users,
      title: 'Extended Reality (XR)',
      description: 'Create immersive experiences with virtual, augmented, and mixed reality technologies.',
      features: ['VR Applications', 'AR Solutions', 'Mixed Reality', 'Immersive Experiences'],
      link: '/extended-reality'
    },
    {
      icon: Cpu,
      title: 'Neuromorphic Computing',
      description: 'Brain-inspired computing systems that mimic neural networks for efficient processing.',
      features: ['Neural Networks', 'Cognitive Computing', 'Pattern Recognition', 'Adaptive Learning'],
      link: '/neuromorphic-computing'
    },
    {
      icon: Cloud,
      title: '5G & Next-Gen Networks',
      description: 'Harness the power of 5G and future network technologies for enhanced connectivity.',
      features: ['5G Infrastructure', 'Network Optimization', 'IoT Connectivity', 'Low Latency Solutions'],
      link: '/5g-networks'
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
    }
  ];

  const benefits = [
    {
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
      title: "Innovation Leadership",
      description: "Stay ahead of the curve with cutting-edge technology solutions",
      icon: Rocket,
      color: "text-green-400"
    },
    {
      title: "Competitive Advantage",
      description: "Differentiate your business with emerging technology capabilities",
      icon: TrendingUp,
      color: "text-blue-400"
    },
    {
      title: "Future-Proofing",
      description: "Prepare your organization for tomorrow's technology landscape",
      icon: Shield,
      color: "text-yellow-400"
    },
    {
      title: "New Opportunities",
      description: "Discover new business models and revenue streams",
      icon: Zap,
      color: "text-purple-400"
    }
  ];

  const testimonials = [
    {
      content: "Zion Tech Group's emerging tech solutions put us at the forefront of innovation. Our customers are amazed by our new capabilities.",
      name: "Dr. Sarah Chen",
      role: "Head of Innovation, FutureTech Labs",
      rating: 5
    },
    {
      content: "The quantum computing research partnership opened up possibilities we never imagined. Incredible breakthrough technology.",
      name: "Michael Rodriguez",
      role: "CTO, Quantum Solutions Inc",
      rating: 5
    },
    {
      content: "Their XR development team created an immersive experience that transformed how we train our employees.",
      name: "Lisa Thompson",
      role: "Training Director, Global Industries",
      rating: 5
    }
  ];

  return (
    <>
      <SEO 
        title="Emerging Technology Solutions | Zion Tech Group"
        description="Next-generation technology solutions including quantum computing, XR, blockchain, and IoT for forward-thinking organizations."
        keywords="emerging technology, quantum computing, XR, blockchain, IoT, edge computing, AI/ML"
      />
      
      <div className="min-h-screen bg-zion-blue-dark">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple opacity-20"></div>
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/30 rounded-full text-zion-cyan text-sm font-medium mb-6">
                <Atom className="w-4 h-4 mr-2" />
                Emerging Technologies
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Shape the Future with
                <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  Emerging Technologies
                </span>
              </h1>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
                Explore the cutting edge of technology with our emerging tech solutions that push boundaries 
                and create new possibilities for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/request-quote"
                  className="inline-flex items-center px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  Request Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-zion-blue">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Next-Generation Technology Solutions
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                From quantum computing to extended reality, we provide cutting-edge emerging technology 
                solutions that drive innovation and competitive advantage.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-zion-blue-dark border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-zion-slate-light mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
=======
      icon: Rocket,
      title: "First-Mover Advantage",
      description: "Stay ahead of the competition by adopting cutting-edge technologies early."
    },
    {
      icon: Award,
      title: "Innovation Leadership",
      description: "Establish your company as a technology leader in your industry."
    },
    {
      icon: Globe,
      title: "Future-Proof Solutions",
      description: "Build solutions that will remain relevant and competitive in the future."
    },
    {
      icon: Shield,
      title: "Competitive Edge",
      description: "Gain significant advantages over competitors using traditional technologies."
    }
  ];

  const stats = [
    { label: "Emerging Tech Projects", value: "60+", icon: Zap },
    { label: "Innovation Patents", value: "25+", icon: Brain },
    { label: "Technology Firsts", value: "15+", icon: Award },
    { label: "Client Innovation", value: "4.5x", icon: Star }
  ];

  const technologies = [
    { name: "Quantum Computing", icon: "⚛️", description: "Quantum algorithms and cryptography solutions" },
    { name: "Blockchain", icon: "🔗", description: "Distributed ledger and smart contract platforms" },
    { name: "IoT & Edge", icon: "🌐", description: "Internet of Things and edge computing solutions" },
    { name: "AR/VR", icon: "🥽", description: "Augmented and virtual reality applications" },
    { name: "5G Networks", icon: "📡", description: "Next-generation network infrastructure" },
    { name: "Green Tech", icon: "🌱", description: "Sustainable and environmental technology" }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO 
        title="Emerging Technology Services - Zion Tech Group"
        description="Next-generation technology solutions including quantum computing, blockchain, IoT, AR/VR, and green technology for forward-thinking businesses."
        keywords="emerging technology, quantum computing, blockchain, IoT, AR/VR, 5G, green technology, Zion Tech Group"
        canonical="https://ziontechgroup.com/emerging-tech"
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-purple to-zion-pink opacity-95" />
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-zion-pink opacity-60 blur-sm"
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div 
            className="absolute top-3/4 right-1/4 w-6 h-6 rounded-full bg-zion-purple opacity-40 blur-sm"
            animate={{ y: [0, 20, 0], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      icon: TrendingUp,
      title: 'Competitive Advantage',
      description: 'Stay ahead of the competition with cutting-edge technology solutions.'
    },
    {
      icon: Target,
      title: 'Innovation Leadership',
      description: 'Position your business as a technology leader in your industry.'
    },
    {
      icon: Shield,
      title: 'Future-Proofing',
      description: 'Invest in technologies that will drive business growth for years to come.'
    },
    {
      icon: Users,
      title: 'Enhanced Capabilities',
      description: 'Unlock new possibilities and capabilities that weren\'t possible before.'
    }
  ];

  const industries = [
    'Financial Services',
    'Healthcare',
    'Manufacturing',
    'Retail',
    'Technology',
    'Government',
    'Education',
    'Energy'
  ];

  return (
    <div className="min-h-screen bg-zion-blue-dark text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/10 via-zion-purple/10 to-zion-blue-light/10"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
<<<<<<< HEAD
=======
<<<<<<< HEAD
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-zion-pink via-zion-purple to-zion-cyan bg-clip-text text-transparent">
                Emerging
              </span>
              <br />
              <span className="text-white">Technology</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">
              Next-generation technology solutions including quantum computing, blockchain, IoT, AR/VR, 
              and green technology for forward-thinking businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-pink to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-pink/25 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-pink/30 text-zion-pink font-semibold rounded-xl hover:bg-zion-pink hover:text-white transition-all duration-300"
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Emerging{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Technologies
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light leading-relaxed mb-8">
              Explore the cutting-edge technologies that are shaping the future and discover how they can 
              transform your business operations and create new opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Get Started
              </Link>
              <Link
                to="/request-quote"
                className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan rounded-xl font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
=======
<<<<<<< HEAD
      {/* Stats Section */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-pink to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-zion-slate-light">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Emerging Technology Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Cutting-edge solutions that push the boundaries of what's possible
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6 hover:border-zion-pink/50 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      service.innovationLevel === 'Cutting-edge' ? 'bg-purple-500/20 text-purple-400' :
                      service.innovationLevel === 'Advanced' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      {service.innovationLevel}
                    </span>
                  </div>
                  <p className="text-zion-slate-light mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-zion-pink mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-pink mr-2 flex-shrink-0" />
>>>>>>> origin/cursor/website-audit-and-enhancement-8e2b
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      {/* Emerging Tech Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Emerging Tech Services
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Cutting-edge technology solutions that push the boundaries of what\'s possible and drive innovation.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {emergingTechServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group p-6 rounded-2xl border border-zion-cyan/20 hover:border-zion-cyan/40 hover:bg-zion-blue-light/10 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-zion-slate-light mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-zion-slate-light flex items-center">
                          <CheckCircle className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
                          {feature}
                        </li>
                      ))}
                    </ul>
<<<<<<< HEAD
                  </div>
                  
=======
<<<<<<< HEAD
<<<<<<< HEAD
                  </motion.div>
                );
              })}
=======
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-zion-pink mb-4">{service.price}</div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-pink to-zion-purple text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-zion-pink/25 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
=======
                  </div>
                  
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-zion-cyan hover:text-zion-purple transition-colors duration-300 group/link"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
                  </Link>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
<<<<<<< HEAD
=======
<<<<<<< HEAD

      {/* Technologies Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Technologies We Work With
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Expert-level proficiency in cutting-edge and emerging technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue border border-zion-blue-light rounded-xl p-6 text-center hover:border-zion-pink/50 transition-all duration-300"
              >
                <div className="text-4xl mb-3">{tech.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{tech.name}</h3>
                <p className="text-zion-slate-light">{tech.description}</p>
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7

      {/* Benefits Section */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Emerging Technologies?
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Discover the transformative benefits that cutting-edge technologies can bring to your business.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl hover:bg-zion-blue-light/10 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-zion-slate-light">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Industries We{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Innovate
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Our emerging technology solutions are tailored to meet the unique challenges and opportunities across diverse industries.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="p-4 rounded-xl border border-zion-cyan/20 hover:border-zion-cyan/40 hover:bg-zion-blue-light/10 transition-all duration-300 text-center"
              >
                <span className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                  {industry}
                </span>
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Benefits Section */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Emerging Technology Services?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Experience the benefits of cutting-edge technology and innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-pink to-zion-purple rounded-xl flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-zion-slate-light">{benefit.description}</p>
                  </div>
                </motion.div>
              );
            })}
=======
      {/* Innovation Process */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Innovation
              </span>
              {' '}Process
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              A proven methodology for successfully implementing emerging technologies that drive innovation and business value.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Research & Discovery',
                description: 'Explore emerging technologies and identify opportunities for your business.'
              },
              {
                step: '02',
                title: 'Proof of Concept',
                description: 'Validate technology potential through small-scale testing and experimentation.'
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'Deploy emerging technologies with careful attention to integration and adoption.'
              },
              {
                step: '04',
                title: 'Scale & Optimize',
                description: 'Expand successful implementations and continuously optimize performance.'
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{phase.title}</h3>
                <p className="text-zion-slate-light">{phase.description}</p>
              </motion.div>
            ))}
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Explore the Future?
            </h2>
            <p className="text-lg text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Let's discuss how emerging technologies can transform your business operations, 
              create new opportunities, and position you as an industry leader.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Start Your Innovation Journey
              </Link>
              <Link
                to="/request-quote"
                className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan rounded-xl font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Get a Custom Quote
              </Link>
            </div>
=======
<<<<<<< HEAD
      <section className="py-20 bg-gradient-to-r from-zion-pink to-zion-purple">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Embrace the Future?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Let's discuss how our emerging technology solutions can give you a competitive edge
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-zion-blue-dark font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white hover:text-zion-blue-dark transition-all duration-300"
              >
                Get Free Quote
              </Link>
>>>>>>> origin/cursor/website-audit-and-enhancement-8e2b
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-zion-blue-dark">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Emerging Technologies?
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                Discover the transformative benefits of implementing cutting-edge emerging technologies.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className={`w-16 h-16 bg-zion-cyan/10 border border-zion-cyan/30 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className={`w-8 h-8 ${benefit.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-zion-slate-light">
                      {benefit.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-zion-blue">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                What Our Emerging Tech Clients Say
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                Hear from organizations that have embraced the future with our emerging technology solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-blue-dark border border-zion-cyan/20 rounded-2xl p-6"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-zion-slate-light mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-zion-slate-light text-sm">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-blue">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Embrace the Future?
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto mb-8">
                Let's discuss how our emerging technology solutions can position your organization for future success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/request-quote"
                  className="inline-flex items-center px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  Get Free Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
=======
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Explore the Future?
            </h2>
            <p className="text-lg text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Let's discuss how emerging technologies can transform your business operations, 
              create new opportunities, and position you as an industry leader.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Start Your Innovation Journey
              </Link>
              <Link
                to="/request-quote"
                className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan rounded-xl font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Get a Custom Quote
              </Link>
            </div>
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
          </motion.div>
        </div>
      </section>
    </div>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
  );
};

export default EmergingTech;