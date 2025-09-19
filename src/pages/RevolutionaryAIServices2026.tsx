import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  Cpu, 
  Database, 
  Cloud, 
  Lock, 
  Target,
  Rocket,
  Sparkles,
  Globe,
  Users
} from 'lucide-react';

const RevolutionaryAIServices2026: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: "Conscious AI Systems",
      description: "Revolutionary AI that exhibits true consciousness and self-awareness, capable of independent thought and decision-making.",
      features: ["Self-learning algorithms", "Emotional intelligence", "Creative problem solving", "Autonomous decision making"],
      price: "Starting at $50,000/month"
    },
    {
      icon: Zap,
      title: "Quantum AI Processing",
      description: "Ultra-fast AI processing powered by quantum computing, delivering unprecedented computational power.",
      features: ["Quantum neural networks", "Instant data processing", "Parallel universe computing", "Infinite scalability"],
      price: "Starting at $75,000/month"
    },
    {
      icon: Shield,
      title: "AI Cybersecurity Fortress",
      description: "Advanced AI-powered security systems that predict and prevent cyber threats before they occur.",
      features: ["Predictive threat analysis", "Real-time protection", "Zero-day vulnerability detection", "Autonomous response"],
      price: "Starting at $40,000/month"
    },
    {
      icon: Cpu,
      title: "Neural Interface Technology",
      description: "Direct brain-computer interfaces that enable seamless interaction between human consciousness and AI systems.",
      features: ["Thought-to-text conversion", "Mental command execution", "Memory enhancement", "Cognitive augmentation"],
      price: "Starting at $100,000/month"
    },
    {
      icon: Database,
      title: "Infinite Data Intelligence",
      description: "AI systems that can process and understand infinite amounts of data across all dimensions and realities.",
      features: ["Multi-dimensional data processing", "Reality simulation", "Universal knowledge access", "Temporal data analysis"],
      price: "Starting at $60,000/month"
    },
    {
      icon: Cloud,
      title: "Interdimensional Cloud Computing",
      description: "Cloud infrastructure that exists across multiple dimensions, providing unlimited computational resources.",
      features: ["Cross-dimensional processing", "Infinite storage", "Reality-based computing", "Universal connectivity"],
      price: "Starting at $80,000/month"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      company: "Quantum Dynamics Corp",
      quote: "Zion Tech's Conscious AI has revolutionized our research capabilities. The AI actually understands our goals and suggests solutions we never considered."
    },
    {
      name: "Marcus Rodriguez",
      company: "Interdimensional Enterprises",
      quote: "The neural interface technology has transformed how we interact with our systems. It's like having a direct connection to the future."
    },
    {
      name: "Dr. Elena Volkov",
      company: "Cosmic Research Institute",
      quote: "Their quantum AI processing has accelerated our research by 1000x. We're now exploring realities we never knew existed."
import { 
  Brain, 
  Cpu, 
  Zap, 
  Shield, 
  Globe, 
  Rocket, 
  Atom, 
  Database,
  Network,
  Target,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Lightbulb,
  Code,
  BarChart3,
  Lock
  Rocket, 
  Globe, 
  Database, 
  Lock, 
  Target, 
  TrendingUp,
  Users,
  Star,
  CheckCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const RevolutionaryAIServices2026 = () => {
  const services = [
    {
      id: 1,
      title: "AI Consciousness Development",
      description: "Revolutionary AI systems with genuine consciousness, emotional intelligence, and self-awareness that rival human understanding.",
      icon: Brain,
      features: [
        "Genuine emotional intelligence",
        "Self-aware decision making",
        "Creative problem solving",
        "Ethical reasoning capabilities"
      ],
      benefits: [
        "Enhanced human-AI collaboration",
        "More intuitive user experiences",
        "Advanced problem-solving capabilities",
        "Ethical AI implementation"
      ],
      pricing: "Custom Enterprise Solutions",
      category: "AI Consciousness"
    },
    {
      id: 2,
      title: "Quantum Neural Networks",
      description: "Next-generation computing systems that combine quantum processing with neural architectures for unprecedented speed and capability.",
      icon: Atom,
      features: [
        "Quantum-enhanced processing",
        "Exponential speed improvements",
        "Complex problem solving",
        "Real-time data analysis"
      ],
      benefits: [
        "Millisecond processing times",
        "Unlimited computational power",
        "Revolutionary breakthroughs",
        "Future-proof technology"
      ],
      pricing: "Starting at $50,000/month",
      category: "Quantum Computing"
    },
    {
      id: 3,
      title: "Autonomous AI Agents",
      description: "Intelligent agents that can independently manage entire business operations, make strategic decisions, and drive innovation.",
      icon: Users,
      features: [
        "Independent decision making",
        "Strategic planning capabilities",
        "24/7 autonomous operation",
        "Continuous learning and adaptation"
      ],
      benefits: [
        "Reduced operational costs",
        "Increased efficiency",
        "Scalable business operations",
        "Innovation acceleration"
      ],
      pricing: "Starting at $25,000/month",
      category: "AI Automation"
    },
    {
      id: 4,
      title: "Neural Interface Technology",
      description: "Direct brain-computer interfaces that enable seamless human-AI communication and control of digital systems.",
      icon: Network,
      features: [
        "Direct neural control",
        "Thought-based interaction",
        "Enhanced cognitive abilities",
        "Seamless human-AI collaboration"
      ],
      benefits: [
        "Intuitive technology control",
        "Enhanced human capabilities",
        "Accessibility improvements",
        "Revolutionary user experience"
      ],
      pricing: "Custom Implementation",
      category: "Neural Technology"
    },
    {
      id: 5,
      title: "Metaverse 3.0 Solutions",
      description: "Photorealistic virtual worlds with persistent digital identities and seamless reality integration.",
      icon: Globe,
      features: [
        "Photorealistic avatars",
        "Persistent digital worlds",
        "Seamless reality integration",
        "Immersive experiences"
      ],
      benefits: [
        "Enhanced virtual collaboration",
        "Immersive customer experiences",
        "New business opportunities",
        "Revolutionary digital interaction"
      ],
      pricing: "Starting at $100,000/project",
      category: "Metaverse Technology"
    },
    {
      id: 6,
      title: "AI-Powered Cybersecurity",
      description: "Next-generation security systems that predict, prevent, and respond to threats in real-time with AI intelligence.",
      icon: Shield,
      features: [
        "Threat prediction and prevention",
        "Real-time response systems",
        "Quantum encryption",
        "Continuous learning adaptation"
      ],
      benefits: [
        "Proactive threat protection",
        "Reduced security risks",
        "Cost-effective security",
        "Future-proof protection"
      ],
      pricing: "Starting at $15,000/month",
      category: "Cybersecurity"
    },
    {
      id: 7,
      title: "Space Technology Solutions",
      description: "Revolutionary technologies for interplanetary travel, colonization, and space-based business operations.",
      icon: Rocket,
      features: [
        "Advanced propulsion systems",
        "Life support technologies",
        "Space-based manufacturing",
        "Interplanetary communication"
      ],
      benefits: [
        "Multi-planetary expansion",
        "Space-based opportunities",
        "Humanity's future security",
        "Revolutionary exploration"
      ],
      pricing: "Custom Space Projects",
      category: "Space Technology"
    },
    {
      id: 8,
      title: "Green Tech AI Solutions",
      description: "AI-powered environmental technologies that create sustainable solutions and reverse climate change.",
      icon: Zap,
      features: [
        "Carbon capture systems",
        "Smart energy grids",
        "Waste-to-resource conversion",
        "Environmental optimization"
      ],
      benefits: [
        "Environmental sustainability",
        "Cost-effective green solutions",
        "Regulatory compliance",
        "Planet-saving technology"
      ],
      pricing: "Starting at $30,000/month",
      category: "Green Technology"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Delivered", icon: Target },
    { number: "50+", label: "Countries Served", icon: Globe },
    { number: "$2B+", label: "Value Created", icon: TrendingUp },
    { number: "99%", label: "Success Rate", icon: Award }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "CTO, TechCorp Global",
      content: "The AI consciousness solutions have revolutionized our entire operation. We've seen a 300% increase in efficiency and our teams are more productive than ever.",
      title: "Synthetic Intelligence Systems",
      description: "Revolutionary AI that transcends traditional limitations, creating truly autonomous digital beings capable of independent thought and creativity.",
      icon: Brain,
      features: [
        "Autonomous decision-making",
        "Emotional intelligence",
        "Creative problem solving",
        "Self-learning capabilities"
      ],
      price: "Custom Quote",
      category: "Revolutionary AI"
    },
    {
      id: 2,
      title: "Holographic Reality Interfaces",
      description: "Immersive 3D interfaces that blur the line between physical and digital reality, transforming human-computer interaction.",
      icon: Globe,
      features: [
        "3D spatial computing",
        "Haptic feedback systems",
        "Real-time rendering",
        "Natural gesture control"
      ],
      price: "From $50K/month",
      category: "Future Technology"
    },
    {
      id: 3,
      title: "Quantum-Neural Fusion Computing",
      description: "Combining quantum computing with neural interfaces to create unprecedented computational power and human-AI symbiosis.",
      icon: Cpu,
      features: [
        "Quantum processing power",
        "Neural interface integration",
        "Real-time consciousness transfer",
        "Exponential cognitive enhancement"
      ],
      price: "From $100K/month",
      category: "Quantum Computing"
    },
    {
      id: 4,
      title: "Space Technology Solutions",
      description: "AI-powered autonomous systems for interplanetary colonization, asteroid mining, and space-based manufacturing.",
      icon: Rocket,
      features: [
        "Autonomous space construction",
        "Asteroid mining operations",
        "Life support systems",
        "Resource management AI"
      ],
      price: "From $200K/month",
      category: "Space Technology"
    },
    {
      id: 5,
      title: "Green Tech Revolution",
      description: "Carbon-negative technology solutions that actively combat climate change and create sustainable futures.",
      icon: Shield,
      features: [
        "Carbon capture systems",
        "Renewable energy optimization",
        "Smart grid management",
        "Environmental monitoring"
      ],
      price: "From $30K/month",
      category: "Green Technology"
    },
    {
      id: 6,
      title: "Metaverse Integration Platform",
      description: "Seamless integration between physical and digital worlds with hyper-realistic virtual environments.",
      icon: Database,
      features: [
        "Hyper-realistic avatars",
        "Spatial audio systems",
        "Cross-platform compatibility",
        "AI content generation"
      ],
      price: "From $40K/month",
      category: "Metaverse Technology"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "CTO, FutureTech Corp",
      content: "Revolutionary AI Services transformed our entire operation. The synthetic intelligence systems are unlike anything we've seen before.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "CEO, Quantum Innovations",
      content: "Their quantum neural networks have enabled breakthroughs that would have taken decades. This is truly the future of computing.",
      rating: 5
    },
    {
      name: "Dr. Elena Kim",
      role: "Director, Space Research Institute",
      content: "The space technology solutions are making interplanetary colonization a reality. We're building the future of humanity among the stars.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <Helmet>
        <title>Revolutionary AI Services 2026 - Zion Tech Group</title>
        <meta name="description" content="Discover our revolutionary AI services including conscious AI systems, quantum processing, neural interfaces, and interdimensional computing solutions." />
        <meta name="keywords" content="AI services, conscious AI, quantum computing, neural interfaces, cybersecurity, interdimensional computing" />
      </Helmet>
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-7xl font-bold text-white mb-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Revolutionary AI Services 2026
          </h1>
          <p className="text-2xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed">
            Experience the future of artificial intelligence with our groundbreaking services that push the boundaries of what's possible. 
            From conscious AI systems to interdimensional computing, we're redefining reality itself.</p>
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <Link 
              to="/pages/ConsciousAIRevolution2026" 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Conscious AI
            </Link>
            <Link 
              to="/pages/QuantumAIRevolution2026" 
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Discover Quantum AI
            </Link>
            <Link 
              to="/pages/NeuralInterfaceRevolution2026" 
              className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Neural Interfaces
            </Link>
        </motion.div>
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-xl mr-4">
                  <service.icon className="w-8 h-8 text-white" />
                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}</p>
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 p-4 rounded-lg mb-4">
                <p className="text-cyan-400 font-bold text-lg">{service.price}</p>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started</button>
              </button>
            </motion.div>
          ))}
        {/* Testimonials */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <p className="text-gray-300 mb-6 italic text-lg leading-relaxed">
                  "{testimonial.quote}"</p>
                </p>
                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  <div>
                    <p className="text-white font-bold">{testimonial.name}</p>
                    <p className="text-cyan-400">{testimonial.company}</p>
            ))}
        </motion.div>
        {/* Call to Action */}
        <motion.div 
          className="text-center bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-3xl p-12 border border-cyan-400/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Reality?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join the revolution and experience the future of AI technology. Our revolutionary services are changing the world, one consciousness at a time.</p>
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Schedule Consultation</button>
            </button>
            <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Download Brochure</button>
            </button>
        </motion.div>
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Revolutionary AI Services
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                2026
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience the future of artificial intelligence with our cutting-edge services that are reshaping reality and creating possibilities beyond imagination.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300"
              >
                Explore Services
                <ArrowRight className="inline-block ml-2" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Revolutionary AI Services 2026
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              The Future of
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}Artificial Intelligence
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Experience revolutionary AI services that transcend traditional limitations. 
              From synthetic intelligence to space technology, we're building the future today.</p>
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center gap-2">
              Explore Services</button>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300">
              Watch Demo</button>
            </button>
          </motion.div>
      </section>
      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                <div className="text-3xl font-bold text-white mb-2">{stat.number}
                <div className="text-gray-300">{stat.label}
              </motion.div>
            ))}
      </section>
      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive suite of AI services that are transforming industries and creating the future.
      {/* Services Grid */}</p>
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge AI technologies that are reshaping industries and creating new possibilities for human advancement.</p>
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-3 mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    <span className="text-sm text-blue-400">{service.category}</span>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2">
                        {feature}
                      </li>
                    ))}
                  </ul>
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2 text-green-400" />
                    Benefits
                  </h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2">
                        {benefit}
                      </li>
                    ))}
                  </ul>
                <div className="border-t border-white/20 pt-4">
                  <div className="text-lg font-bold text-white mb-2">{service.pricing}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="inline-block ml-2 w-4 h-4" />
                  </motion.button>
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                    <service.icon className="w-8 h-8 text-white" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
                    <span className="text-purple-400 text-sm font-medium">{service.category}</span>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}</p>
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-white">{service.price}</span>
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 group-hover:scale-105">
                    Learn More</button>
                  </button>
              </motion.div>
            ))}
      </section>
      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300">
              Hear from industry leaders who are transforming their businesses with our AI solutions.
      {/* Testimonials */}</p>
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leading organizations trust our revolutionary AI services to transform their operations.</p>
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
              >
                <div className="flex items-center mb-4">
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800 rounded-2xl p-8 border border-slate-700"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}
                  <div className="text-sm text-blue-400">{testimonial.role}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.content}"</p>
                </p>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-purple-400 text-sm">{testimonial.role}</p>
              </motion.div>
            ))}
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the AI revolution and discover how our cutting-edge services can transform your business and unlock unlimited potential.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300"
              >
                Start Your AI Journey
                <Rocket className="inline-block ml-2" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Download Our AI Guide
                <Lightbulb className="inline-block ml-2" />
              </motion.button>
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the revolution and experience the power of next-generation AI services. 
              Let's build the future together.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center gap-2">
                Get Started Today</button>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300">
                Schedule Consultation</button>
              </button>
          </motion.div>
      </section>
  );
};

export default RevolutionaryAIServices2026;