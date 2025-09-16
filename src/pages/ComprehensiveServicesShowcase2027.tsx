import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ComprehensiveServicesShowcase2027: React.FC = () => {
  const serviceCategories = [
    {
      title: "AI & Machine Learning",
      description: "Revolutionary artificial intelligence solutions that transform businesses",
      services: [
        "Neural Reality Engine Development",
        "Quantum Consciousness Computing",
        "Autonomous Business Operations",
        "Advanced Predictive Analytics",
        "Multimodal AI Agents",
        "AI-Powered Decision Making"
      ],
      icon: "🤖",
      color: "from-blue-500 to-cyan-600",
      link: "/pages/AIServices2026"
    },
    {
      title: "Quantum Computing",
      description: "Next-generation quantum computing solutions for complex problem solving",
      services: [
        "Quantum Algorithm Development",
        "Quantum Machine Learning",
        "Quantum Cryptography",
        "Quantum Simulation Services",
        "Quantum Optimization",
        "Quantum Consciousness Research"
      ],
      icon: "⚛️",
      color: "from-purple-500 to-pink-600",
      link: "/pages/QuantumComputing2026"
    },
    {
      title: "Neural Interface Technology",
      description: "Brain-computer interfaces that revolutionize human-computer interaction",
      services: [
        "Neural Reality Engine",
        "Brain-Computer Interface Design",
        "Neural Data Processing",
        "Consciousness Transfer Technology",
        "Neural Network Optimization",
        "Mind-Machine Integration"
      ],
      icon: "🧠",
      color: "from-indigo-500 to-purple-600",
      link: "/pages/NeuralInterface2026"
    },
    {
      title: "Interdimensional Technology",
      description: "Breakthrough technologies operating across multiple dimensions",
      services: [
        "Interdimensional Communication",
        "Multiverse Data Transfer",
        "Parallel Reality Computing",
        "Dimensional Gateway Technology",
        "Cross-Reality Analytics",
        "Omniversal AI Systems"
      ],
      icon: "🌌",
      color: "from-pink-500 to-red-600",
      link: "/pages/InterdimensionalTech2026"
    },
    {
      title: "Space Technology",
      description: "Advanced space technologies for interplanetary and interstellar travel",
      services: [
        "Advanced Propulsion Systems",
        "Space Habitat Design",
        "Interstellar Communication",
        "Planetary Colonization Tech",
        "Space Mining Technology",
        "Intergalactic Navigation"
      ],
      icon: "🚀",
      color: "from-orange-500 to-red-600",
      link: "/pages/SpaceTech2030"
    },
    {
      title: "Green Technology",
      description: "Revolutionary environmental technologies for a sustainable future",
      services: [
        "Carbon Capture Technology",
        "Renewable Energy Systems",
        "Climate Restoration Solutions",
        "Sustainable Manufacturing",
        "Environmental Monitoring AI",
        "Green Infrastructure Design"
      ],
      icon: "🌱",
      color: "from-green-500 to-emerald-600",
      link: "/pages/GreenTech2026"
    },
    {
      title: "Holographic Technology",
      description: "Immersive holographic solutions for communication and entertainment",
      services: [
        "Holographic Display Systems",
        "3D Holographic Communication",
        "Immersive Entertainment Tech",
        "Holographic Data Visualization",
        "Virtual Reality Integration",
        "Augmented Reality Solutions"
      ],
      icon: "👁️",
      color: "from-teal-500 to-blue-600",
      link: "/pages/HolographicTech2026"
    },
    {
      title: "Biotech AI",
      description: "AI-powered biotechnology solutions for healthcare and human enhancement",
      services: [
        "Personalized Medicine AI",
        "Regenerative Therapy Technology",
        "Genetic Engineering AI",
        "Biotech Process Automation",
        "Health Monitoring Systems",
        "Human Enhancement Technology"
      ],
      icon: "🧬",
      color: "from-emerald-500 to-teal-600",
      link: "/pages/BiotechAI2026"
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$99,999",
      period: "per month",
      description: "Perfect for small businesses exploring advanced technology",
      features: [
        "Basic AI Integration",
        "Standard Neural Interface",
        "Essential Quantum Computing",
        "Basic Holographic Display",
        "24/7 Support",
        "Monthly Technology Updates"
      ],
      color: "from-blue-500 to-cyan-600",
      popular: false
    },
    {
      name: "Professional",
      price: "$499,999",
      period: "per month",
      description: "Ideal for growing companies ready to embrace the future",
      features: [
        "Advanced AI Systems",
        "Full Neural Reality Engine",
        "Complete Quantum Computing Suite",
        "Premium Holographic Technology",
        "Interdimensional Communication",
        "Priority Support & Updates",
        "Custom Technology Development"
      ],
      color: "from-purple-500 to-pink-600",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For large organizations transforming entire industries",
      features: [
        "Complete Technology Stack",
        "Custom Neural Reality Solutions",
        "Quantum Consciousness Computing",
        "Full Interdimensional Technology",
        "Space Technology Integration",
        "Dedicated Technology Team",
        "White-label Solutions",
        "Unlimited Custom Development"
      ],
      color: "from-indigo-500 to-purple-600",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <Helmet>
        <title>Comprehensive Services Showcase 2027 - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive suite of revolutionary technology services. From AI and Quantum Computing to Neural Interfaces and Interdimensional Technology." />
      </Helmet>

      {/* Hero Section */}
      <motion.section 
        className="relative py-20 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto text-center">
          <motion.h1 
            className="text-6xl md:text-8xl font-bold text-white mb-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive Services 2027
          </motion.h1>
          <motion.p 
            className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Transform your business with our revolutionary technology services. 
            From AI and Quantum Computing to Neural Interfaces and Interdimensional Technology, 
            we provide the complete solution for the future.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link 
              to="/pages/UltimateTechShowcase2026" 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🚀 Explore Technologies
            </Link>
            <Link 
              to="#pricing" 
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              💰 View Pricing
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Service Categories */}
      <motion.section 
        className="py-20 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Our Revolutionary Service Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-6xl mb-6">{category.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{category.description}</p>
                <div className="space-y-2 mb-6">
                  {category.services.slice(0, 3).map((service, serviceIndex) => (
                    <div key={serviceIndex} className="text-sm text-gray-400 flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                      {service}
                    </div>
                  ))}
                  <div className="text-sm text-cyan-400 font-semibold">
                    +{category.services.length - 3} more services
                  </div>
                </div>
                <Link 
                  to={category.link}
                  className={`inline-block bg-gradient-to-r ${category.color} hover:opacity-90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 w-full text-center`}
                >
                  Explore Services →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section 
        id="pricing"
        className="py-20 px-4 bg-white/5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
      >
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Revolutionary Technology Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border-2 ${
                  tier.popular ? 'border-cyan-400' : 'border-white/20'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-white mb-2">
                    {tier.price}
                    <span className="text-lg text-gray-400">/{tier.period}</span>
                  </div>
                  <p className="text-gray-300">{tier.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-gray-300">
                      <span className="w-5 h-5 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></span>
                      {feature}
                    </div>
                  ))}
                </div>

                <Link 
                  to="/contact"
                  className={`block w-full bg-gradient-to-r ${tier.color} hover:opacity-90 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 text-center`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className="py-20 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-12 border border-cyan-500/30">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the revolution and transform your business with our comprehensive 
              suite of revolutionary technology services. The future is here, and it starts with you.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Start Your Transformation
              </Link>
              <Link 
                to="/pages/UltimateTechShowcase2026" 
                className="bg-white/20 hover:bg-white/30 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 border border-white/30"
              >
                Explore All Technologies
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ComprehensiveServicesShowcase2027;