import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Brain, Shield, Database, Cpu, Globe, Rocket } from 'lucide-react';
const UltimateTechShowcase2026: React.FC = () => {
  const technologies = [
    {
      title: "Conscious AI Systems",
      description: "AI that exhibits true self-awareness and independent thought processes",
      features: ["Self-learning algorithms", "Emotional intelligence", "Creative problem-solving", "Multi-dimensional reasoning"],
      icon: <Brain className="w-12 h-12" />,
      color: "from-blue-500 to-cyan-500",
      applications: ["Business automation", "Research assistance", "Creative industries", "Healthcare diagnostics"]
    },
    quantum: {
      title: "Quantum Computing Breakthrough",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      description: "Unlock exponential computing power that solves impossible problems with quantum supremacy and molecular simulation.",
      features: [
        "Quantum Supremacy",
        "Molecular Simulation",
        "Unbreakable Encryption",
        "Climate Modeling",
        "Drug Discovery",
        "Financial Optimization"
      ],
      demos: [
        {
          title: "Quantum Supremacy Demo",
          description: "See quantum computers solve problems impossible for classical computers",
          video: "🔬",
          stats: "10^50 operations per second"
        },
        {
          title: "Molecular Simulation",
          description: "Real-time simulation of complex molecular structures",
          video: "🧬",
          stats: "99.9% accuracy"
        }
      ]
    }
  };

  const [isAnimating, setIsAnimating] = useState(false);
  const technologies = {
    ai: {
      title: "Artificial Intelligence Revolution",
      icon: "🧠",
      description: "Next-generation AI systems with consciousness and creativity",
      features: [
        "Synthetic consciousness and self-awareness",
        "Quantum-enhanced neural processing",
        "Emotional intelligence and empathy",
        "Creative problem solving beyond human capability",
        "Autonomous decision making with ethical frameworks"
      ],
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-600/20 to-pink-600/20",
      borderColor: "border-purple-400/30"
    },
    {
      title: "Multi-Dimensional Security",
      description: "Cybersecurity that protects across multiple dimensions and realities",
      features: ["Threat prediction", "Reality-based protection", "Quantum encryption", "AI-powered defense"],
      icon: <Shield className="w-12 h-12" />,
      color: "from-green-500 to-emerald-500",
      applications: ["Enterprise security", "Government defense", "Financial protection", "Personal privacy"]
    },
    {
      title: "Consciousness Transfer Technology",
      description: "Advanced systems for transferring consciousness across platforms",
      features: ["Neural mapping", "Consciousness backup", "Platform migration", "Identity preservation"],
      icon: <Globe className="w-12 h-12" />,
      color: "from-orange-500 to-red-500",
      applications: ["Digital immortality", "Platform migration", "Backup systems", "Research applications"]
    },
    {
      title: "Quantum Data Processing",
      description: "Processing information across infinite dimensions simultaneously",
      features: ["Infinite scalability", "Parallel processing", "Quantum storage", "Reality synchronization"],
      icon: <Database className="w-12 h-12" />,
      color: "from-indigo-500 to-purple-500",
      applications: ["Big data analytics", "Scientific research", "Market analysis", "Predictive modeling"]
    },
    {
      title: "Autonomous Space Technology",
      description: "Self-managing systems for interplanetary and interstellar operations",
      features: ["Self-repair capabilities", "Resource optimization", "Mission adaptation", "Communication networks"],
      icon: <Rocket className="w-12 h-12" />,
      color: "from-teal-500 to-blue-500",
      applications: ["Space exploration", "Satellite management", "Interplanetary travel", "Resource mining"]
    }
  ];
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <Helmet>
        <title>Ultimate Tech Showcase 2026: Revolutionary Technologies | Zion Tech Group</title>
        <meta name="description" content="Explore our ultimate showcase of revolutionary technologies: conscious AI, quantum-neural computing, multi-dimensional security, and consciousness transfer systems." />
        <meta name="keywords" content="revolutionary technology, conscious AI, quantum computing, cybersecurity, consciousness transfer, space technology" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl font-bold text-white mb-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
=======
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 ULTIMATE TECH SHOWCASE • JANUARY 2026
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 ULTIMATE BREAKTHROUGH • JANUARY 2026
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ULTIMATE SHOWCASE • 2026
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 ULTIMATE TECH SHOWCASE • 2026
          </div>
          <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
>>>>>>> origin/feat/realtime-rag-content
            Ultimate Tech Showcase 2026
          </h1>
          <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Experience the future of technology with our revolutionary suite of AI, quantum computing, and consciousness technologies that are reshaping reality itself.
          </p>
<<<<<<< HEAD
          <div className="flex items-center justify-center gap-4 mb-8">
            <Zap className="w-8 h-8 text-yellow-400" />
            <span className="text-xl text-yellow-400 font-semibold">Next-Generation Technologies</span>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${tech.color} flex items-center justify-center text-white mb-6`}>
                {tech.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{tech.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{tech.description}</p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                <div className="grid grid-cols-2 gap-2">
                  {tech.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Applications</h4>
                <div className="flex flex-wrap gap-2">
                  {tech.applications.map((app, appIndex) => (
                    <span key={appIndex} className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-sm">
                      {app}
                    </span>
                  ))}
                </div>
              </div>
              <Link 
                to="/pages/RevolutionaryAIServices2026" 
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
        <motion.div 
          className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl p-12 border border-purple-400/30 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white mb-8">The Future is Revolutionary</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            These technologies represent the pinnacle of human innovation. Our systems are already implementing 
            these revolutionary capabilities to deliver unprecedented results across all industries and dimensions.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              to="/pages/RevolutionaryAIServices2026" 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore All Technologies
            </Link>
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Started Today
            </Link>
          </div>
        </motion.div>
=======
            </button>
          </div>
        </div>

        </div>

        {/* Interactive Technology Tabs */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {techCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
              >
                <span className="text-2xl mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          {/* Technology Content */}
          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">{techCategories[activeTab].icon}</div>
                <h2 className="text-4xl font-bold mb-4">{techCategories[activeTab].name}</h2>
                <p className="text-xl opacity-90 max-w-3xl mx-auto">
                  Discover the cutting-edge technologies that are pushing the boundaries of what's possible
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {techCategories[activeTab].technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/30 hover:scale-105 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                      <h3 className="text-lg font-semibold">{tech}</h3>
                    </div>
                    <p className="text-white/70 text-sm">
                      Revolutionary technology that's transforming industries and creating new possibilities
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Innovation Statistics */}
        <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Innovation by the Numbers</h2>
            <p className="text-xl opacity-90">The impact of our revolutionary technologies</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-lg opacity-90">Accuracy Rate</div>
              <div className="text-sm opacity-70">Quantum Computing Precision</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">1000x</div>
              <div className="text-lg opacity-90">Faster Processing</div>
              <div className="text-sm opacity-70">Neural Interface Speed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">50+</div>
              <div className="text-lg opacity-90">Industries Transformed</div>
              <div className="text-sm opacity-70">Global Impact</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-pink-400 mb-2">24/7</div>
              <div className="text-lg opacity-90">Continuous Innovation</div>
              <div className="text-sm opacity-70">Autonomous Systems</div>
            </div>
          </div>
        </div>

        {/* Technology Showcase Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Genetic AI</h3>
            <p className="text-purple-100 mb-6 text-center">
        {/* Revolutionary Technologies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Advanced AI Systems</h3>
              AI systems that evolve and adapt like biological organisms, continuously improving through genetic algorithms
            </p>
            <div className="text-center">
              <span className="px-3 py-1 bg-purple-500/50 rounded-full text-xs font-semibold">EVOLUTIONARY</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🌊</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Fluid Computing</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Computing systems that flow and adapt like water, providing seamless scalability and infinite flexibility
            </p>
            <div className="text-center">
              <span className="px-3 py-1 bg-cyan-500/50 rounded-full text-xs font-semibold">ADAPTIVE</span>
            </div>
          </div>

            </p>
            <ul className="text-purple-200 space-y-2 mb-6 text-sm">
              <li>• Quantum Neural Networks</li>
              <li>• Self-Improving Algorithms</li>
              <li>• Predictive Analytics</li>
            </ul>
            <a href="/pages/AdvancedAI" className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center">
              Explore AI Future →
            </a>
          </div>

          <div className="bg-gradient-to-br from-blue-600/30 to-cyan-600/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-6 text-center">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Computing</h3>
            <p className="text-blue-100 mb-6 text-center">
              Revolutionary quantum processors that solve complex problems in seconds
            </p>
            <ul className="text-blue-200 space-y-2 mb-6 text-sm">
              <li>• Quantum Supremacy</li>
              <li>• Error Correction</li>
              <li>• Cryptography</li>
            </ul>
            <a href="/pages/QuantumComputing" className="block w-full bg-white text-blue-600 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-center">
              Enter Quantum Realm →
            </a>
          </div>

          <div className="bg-gradient-to-br from-green-600/30 to-emerald-600/30 backdrop-blur-sm rounded-2xl p-8 border border-green-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-6 text-center">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Autonomous Robotics</h3>
            <p className="text-green-100 mb-6 text-center">
              Self-operating machines that work alongside humans in perfect harmony
            </p>
            <ul className="text-green-200 space-y-2 mb-6 text-sm">
              <li>• Human-Robot Collaboration</li>
              <li>• Advanced Sensors</li>
              <li>• Machine Learning</li>
            </ul>
            <a href="/pages/Robotics" className="block w-full bg-white text-green-600 py-3 rounded-lg hover:bg-green-50 transition-colors font-semibold text-center">
              Meet the Robots →
            </a>
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🔮</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Predictive Reality</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Systems that can predict and simulate future scenarios with unprecedented accuracy, enabling proactive decision-making
            </p>
            <div className="text-center">
              <span className="px-3 py-1 bg-emerald-500/50 rounded-full text-xs font-semibold">PREDICTIVE</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Energy Harvesting AI</h3>
            <p className="text-orange-100 mb-6 text-center">
              AI systems that generate their own power from ambient energy sources, creating truly autonomous systems
            </p>
            <div className="text-center">
              <span className="px-3 py-1 bg-orange-500/50 rounded-full text-xs font-semibold">AUTONOMOUS</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-violet-600/30 to-purple-600/30 backdrop-blur-sm rounded-2xl p-8 border border-violet-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🌌</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Dimensional Computing</h3>
            <p className="text-violet-100 mb-6 text-center">
              Computing systems that operate across multiple dimensions, enabling parallel processing beyond current limitations
            </p>
            <div className="text-center">
              <span className="px-3 py-1 bg-violet-500/50 rounded-full text-xs font-semibold">MULTIDIMENSIONAL</span>
            </div>
          </div>

            <div className="text-6xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Neural Interfaces</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Direct brain-computer interfaces for enhanced human capabilities
            </p>
            <ul className="text-emerald-200 space-y-2 mb-6 text-sm">
              <li>• Non-Invasive BCI</li>
              <li>• Thought Control</li>
              <li>• Neural Feedback</li>
            </ul>
            <a href="/pages/NeuralInterfaceFuture" className="block w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center">
              Connect Mind & Machine →
        {/* Revolutionary Stats */}
        <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-12 mb-16 border border-cyan-400/30">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-6">Revolutionary Impact Statistics</h2>
            <p className="text-2xl opacity-90">The numbers that prove our technology is changing the world</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-gradient-to-br from-pink-600/30 to-rose-600/30 backdrop-blur-sm rounded-2xl p-8 border border-pink-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🎭</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Personality AI</h3>
            <p className="text-pink-100 mb-6 text-center">
              AI systems with distinct personalities and emotional intelligence, creating more human-like interactions
            </p>
            <div className="text-center">
              <span className="px-3 py-1 bg-pink-500/50 rounded-full text-xs font-semibold">EMOTIONAL</span>
            </div>
            <button className="w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold">
              Connect Mind & Machine →
          </div>
        </div>

            </button>
            </button>
          </div>
        </div>

        {/* Call to Action */}
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Future?</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Join us in exploring these revolutionary technologies and discover how they can transform your business.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Get Started
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400/10 transition-all duration-300 font-semibold">
              Contact Us
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/pages/ConsciousnessAI2026" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-12 py-4 rounded-2xl hover:shadow-2xl transition-all duration-300 font-bold text-xl">
              Start Your Journey →
            </button>
          </div>
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-2xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join us in exploring these revolutionary technologies and discover how they can transform your business and unlock unprecedented possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Schedule Demo
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors">
                Contact Our Experts
              </button>
            </div>
              Learn More
            </button>
          </div>
          </motion.div>
        </div>
>>>>>>> origin/feat/realtime-rag-content
      </div>
