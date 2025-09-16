import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Cpu, 
  Database, 
  Shield, 
  Globe, 
  Rocket, 
  Atom,
  Sparkles,
  TrendingUp,
  Users,
  Target,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Lightbulb,
  Gauge
} from 'lucide-react';

const UltimateTechShowcase2025 = () => {
  const [activeTab, setActiveTab] = useState('ai');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const technologies = {
    ai: {
      title: "Artificial Intelligence Revolution",
      subtitle: "Transform your business with cutting-edge AI solutions",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      features: [
        "Neural Network Optimization",
        "Predictive Analytics",
        "Natural Language Processing",
        "Computer Vision",
        "Autonomous Decision Making",
        "Real-time Learning"
      ],
      stats: [
        { label: "Accuracy", value: "99.7%", icon: Target },
        { label: "Speed", value: "10x Faster", icon: Zap },
        { label: "Efficiency", value: "85% Cost Reduction", icon: TrendingUp }
      ]
    },
    quantum: {
      title: "Quantum Computing Breakthrough",
      subtitle: "Unlock unprecedented computational power",
      icon: Atom,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Quantum Supremacy",
        "Cryptographic Security",
        "Optimization Algorithms",
        "Quantum Machine Learning",
        "Molecular Simulation",
        "Financial Modeling"
      ],
      stats: [
        { label: "Processing Power", value: "1M+ Qubits", icon: Cpu },
        { label: "Speed", value: "1000x Faster", icon: Rocket },
        { label: "Security", value: "Unbreakable", icon: Shield }
      ]
    },
    blockchain: {
      title: "Blockchain Innovation",
      subtitle: "Secure, transparent, and decentralized solutions",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      features: [
        "Smart Contracts",
        "Decentralized Finance",
        "Supply Chain Tracking",
        "Digital Identity",
        "NFT Marketplaces",
        "Cross-chain Interoperability"
      ],
      stats: [
        { label: "Transactions", value: "50K+ TPS", icon: Gauge },
        { label: "Security", value: "Military Grade", icon: Shield },
        { label: "Efficiency", value: "99.9% Uptime", icon: CheckCircle }
      ]
    },
    iot: {
      title: "Internet of Things",
      subtitle: "Connect and control everything around you",
      icon: Globe,
      color: "from-orange-500 to-red-500",
      features: [
        "Smart Cities",
        "Industrial Automation",
        "Health Monitoring",
        "Environmental Sensing",
        "Predictive Maintenance",
        "Edge Computing"
      ],
      stats: [
        { label: "Devices", value: "1B+ Connected", icon: Users },
        { label: "Data", value: "Real-time", icon: Zap },
        { label: "Reliability", value: "99.99%", icon: Award }
      ]
    }
  };

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "CTO, TechCorp",
      content: "This technology has revolutionized our entire operation. The results speak for themselves.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Marcus Rodriguez",
      role: "CEO, InnovateLabs",
      content: "The breakthrough we've been waiting for. Our productivity has increased by 300%.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Emily Watson",
      role: "Director, FutureTech",
      content: "Absolutely game-changing. This is the future of technology right here.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.05, y: -10 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <motion.div 
        className="relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div 
            className="text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Ultimate Tech
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}Showcase 2025
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience the most revolutionary technologies that are reshaping our world. 
              From AI consciousness to quantum computing, discover the future today.
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Explore Technologies
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
                Watch Demo
              </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Technology Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(technologies).map(([key, tech]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === key
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <tech.icon className="w-5 h-5" />
              {tech.title.split(' ')[0]}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={tabVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">
                {technologies[activeTab].title}
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                {technologies[activeTab].subtitle}
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {technologies[activeTab].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-6">
                {technologies[activeTab].stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              className={`bg-gradient-to-br ${technologies[activeTab].color} p-8 rounded-3xl`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="text-center">
                <technologies[activeTab].icon className="w-24 h-24 text-white mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">
                  {technologies[activeTab].title}
                </h3>
                <p className="text-white/90 mb-6">
                  Experience the power of next-generation technology that's transforming industries worldwide.
                </p>
                <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                  Learn More
                </button>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              What Industry Leaders Say
            </h2>
            <p className="text-xl text-gray-300">
              Don't just take our word for it - hear from the experts
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Future?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of companies already using our revolutionary technology to stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechShowcase2025;