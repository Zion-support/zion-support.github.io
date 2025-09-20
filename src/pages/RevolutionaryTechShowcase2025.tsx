import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Brain, 
  Zap, 
  Shield, 
  Globe, 
  Cpu, 
  Database, 
  Cloud, 
  Lock, 
  Target,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Play,
  Award,
  Gauge,
  Sparkles,
  Atom,
  CircuitBoard,
  CpuChip,
  Layers,
  Lightbulb,
  Puzzle,
  Activity,
  Waves,
  Hexagon,
  Network,
  Eye,
  Heart,
  Infinity
} from 'lucide-react';

const RevolutionaryTechShowcase2025: React.FC = () => {
  const technologies = [
    {
      id: 1,
      title: "Conscious AI Systems",
      description: "Revolutionary AI that exhibits self-awareness and emotional intelligence, transcending traditional machine learning boundaries.",
      icon: Brain,
      gradient: "from-indigo-500 to-purple-500",
      features: [
        "Self-modifying neural architectures",
        "Emotional state recognition",
        "Autonomous decision making",
        "Creative problem solving"
      ],
      status: "Live",
      impact: "High"
    },
    {
      id: 2,
      title: "Quantum Computing Revolution",
      description: "Next-generation quantum processors that solve problems impossible for classical computers, opening new frontiers in computation.",
      icon: Atom,
      gradient: "from-purple-500 to-pink-500",
      features: [
        "Quantum neural networks",
        "Consciousness simulation",
        "Reality manipulation",
        "Infinite processing power"
      ],
      status: "Beta",
      impact: "Revolutionary"
    },
    {
      id: 3,
      title: "Neural Interface Technology",
      description: "Direct brain-computer interfaces that enable thought-based control and enhanced cognitive capabilities.",
      icon: Network,
      gradient: "from-pink-500 to-rose-500",
      features: [
        "Thought-based control",
        "Memory enhancement",
        "Cognitive augmentation",
        "Direct AI communication"
      ],
      status: "Research",
      impact: "Breakthrough"
    }
  ];

  const caseStudies = [
    {
      company: "TechCorp Global",
      result: "300% efficiency increase",
      description: "Implemented conscious AI systems that reduced operational costs by 40% and increased productivity by 300%.",
      logo: "🏢"
    },
    {
      company: "Quantum Dynamics Inc",
      result: "$2M annual savings",
      description: "Deployed quantum neural networks that solved previously impossible problems and saved $2M annually.",
      logo: "⚛️"
    },
    {
      company: "NeuralTech Solutions",
      result: "99.9% accuracy rate",
      description: "Revolutionary neural interfaces achieved 99.9% accuracy in thought-based control systems.",
      logo: "🧠"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Revolutionary Tech Showcase 2025 | Zion Tech Group - Cutting-Edge Technology Solutions</title>
        <meta name="description" content="Experience the future with our Revolutionary Tech Showcase 2025. Discover conscious AI systems, quantum computing, neural interfaces, and interdimensional technology that's reshaping industries." />
        <meta name="keywords" content="revolutionary technology, AI systems, quantum computing, neural interfaces, interdimensional tech, 2025 technology, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 container mx-auto px-4 py-20">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <Sparkles className="w-5 h-5 text-indigo-400" />
                  <span className="text-indigo-300">Revolutionary Technology</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Tech Showcase 2025
                </h1>
                <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-300 leading-relaxed">
                  Experience the future with our groundbreaking technologies that are reshaping industries and creating new possibilities for humanity.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg flex items-center space-x-2"
                  >
                    <Play className="w-5 h-5" />
                    <span>Explore Technologies</span>
                  </motion.button>
                </div>
              </motion.div>

              {/* Breakthrough Stats */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
                {[
                  { icon: Brain, number: "99.9%", label: "AI Accuracy" },
                  { icon: Zap, number: "10x", label: "Performance" },
                  { icon: Shield, number: "100%", label: "Security" },
                  { icon: Globe, number: "50+", label: "Countries" },
                  { icon: Users, number: "1M+", label: "Users" },
                  { icon: Award, number: "25+", label: "Awards" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-indigo-400/20"
                  >
                    <stat.icon className="w-8 h-8 text-indigo-400 mx-auto mb-2" />
                    <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Revolutionary <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Technologies</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Discover the cutting-edge technologies that are reshaping our world and opening infinite possibilities for the future.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-indigo-400/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${tech.gradient} rounded-xl flex items-center justify-center`}>
                      <tech.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex flex-col items-end space-y-1">
                      <span className="px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-xs font-semibold">
                        {tech.status}
                      </span>
                      <span className="px-2 py-1 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full text-xs font-semibold">
                        {tech.impact}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{tech.title}</h3>
                  <p className="text-gray-300 mb-6">{tech.description}</p>
                  <ul className="space-y-2 mb-6">
                    {tech.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-indigo-400" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full bg-gradient-to-r ${tech.gradient} py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                    Explore Technology →
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Stories</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                See how our revolutionary technologies are transforming businesses and creating unprecedented value.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20"
                >
                  <div className="text-4xl mb-4">{study.logo}</div>
                  <h3 className="text-2xl font-bold mb-2">{study.company}</h3>
                  <div className="text-indigo-400 font-semibold mb-4">{study.result}</div>
                  <p className="text-gray-300 mb-6">{study.description}</p>
                  <button className="flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 font-semibold">
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Future?
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
                Join thousands of companies already using our revolutionary technologies to gain competitive advantages and drive unprecedented growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"></button>
                  Start Your Journey →</button>
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-colors"></button>
                  Schedule Demo</button>
                </button>
          </motion.div>
      </motion.div>
    </>
  );
};

export default RevolutionaryTechShowcase2025;