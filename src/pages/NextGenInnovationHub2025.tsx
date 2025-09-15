import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Shield, 
  Cloud, 
  Code, 
  Database, 
  Smartphone, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Award,
  Target,
  BarChart3,
  Clock,
  DollarSign,
  Lightbulb,
  Rocket,
  Eye,
  Cpu,
  Network
} from 'lucide-react';

const NextGenInnovationHub2025: React.FC = () => {
  const innovations = [
    {
      icon: Brain,
      title: "Consciousness AI",
      description: "AI systems with self-awareness and emotional intelligence",
      impact: "Revolutionize human-AI interaction",
      status: "In Development",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: Zap,
      title: "Quantum Neural Networks",
      description: "Combining quantum computing with neural networks for unprecedented processing power",
      impact: "Solve complex problems in seconds",
      status: "Beta Testing",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: Shield,
      title: "Self-Healing Security",
      description: "Autonomous security systems that detect and fix vulnerabilities automatically",
      impact: "Eliminate 99.9% of cyber threats",
      status: "Live",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Cloud,
      title: "Distributed Intelligence",
      description: "AI that operates across multiple cloud platforms simultaneously",
      impact: "Global-scale problem solving",
      status: "In Development",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Code,
      title: "AI Code Generation",
      description: "AI that writes, tests, and deploys code autonomously",
      impact: "10x faster software development",
      status: "Beta Testing",
      color: "from-pink-500 to-rose-600"
    },
    {
      icon: Database,
      title: "Predictive Data Mining",
      description: "AI that predicts future data needs and prepares accordingly",
      impact: "Anticipate business needs",
      status: "Live",
      color: "from-teal-500 to-cyan-600"
    }
  ];

  const breakthroughFeatures = [
    {
      icon: Rocket,
      title: "Instant Deployment",
      description: "Deploy AI solutions in minutes, not months",
      benefit: "90% faster time-to-market"
    },
    {
      icon: Eye,
      title: "Predictive Analytics",
      description: "See into the future with 95% accuracy",
      benefit: "Prevent issues before they occur"
    },
    {
      icon: Cpu,
      title: "Edge Computing",
      description: "Process data at the source for real-time results",
      benefit: "Sub-second response times"
    },
    {
      icon: Network,
      title: "Global Network",
      description: "Connect with AI systems worldwide",
      benefit: "Unlimited processing power"
    }
  ];

  const researchAreas = [
    {
      title: "Artificial General Intelligence",
      description: "Developing AI that matches human cognitive abilities across all domains",
      progress: 75,
      timeline: "2025-2027"
    },
    {
      title: "Quantum-AI Hybrid Systems",
      description: "Combining quantum computing with AI for breakthrough problem-solving",
      progress: 60,
      timeline: "2025-2028"
    },
    {
      title: "Neural-Computer Interfaces",
      description: "Direct brain-to-computer communication for enhanced human capabilities",
      progress: 45,
      timeline: "2025-2030"
    },
    {
      title: "Autonomous Business Systems",
      description: "Self-managing business processes that adapt and evolve independently",
      progress: 80,
      timeline: "2025-2026"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-cyan-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-6xl mx-auto"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-sm font-bold mb-8 animate-pulse">
              🌟 NEXT-GEN INNOVATION • JANUARY 2025
            </div>
            <h1 className="text-6xl font-bold mb-6">
              Next-Gen Innovation Hub 2025
            </h1>
            <p className="text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
              Welcome to the future of innovation. Our cutting-edge research lab is developing breakthrough technologies that will reshape industries and create new possibilities.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/30">
                <span className="font-semibold">🧠 AGI Research</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/30">
                <span className="font-semibold">⚡ Quantum AI</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/30">
                <span className="font-semibold">🔬 Breakthrough Labs</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#innovations" className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-all duration-300 font-semibold text-lg">
                Explore Innovations →
              </a>
              <a href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
                Join Research
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Breakthrough Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {breakthroughFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 mb-2">{feature.description}</p>
                  <div className="text-sm font-semibold text-purple-600">{feature.benefit}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Innovation Showcase */}
      <section id="innovations" className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              🚀 Breakthrough Innovations
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our research lab is developing the next generation of AI technologies that will transform how we work, live, and innovate.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {innovations.map((innovation, index) => {
              const IconComponent = innovation.icon;
              const statusColor = innovation.status === 'Live' ? 'bg-green-100 text-green-700' : 
                                innovation.status === 'Beta Testing' ? 'bg-blue-100 text-blue-700' : 
                                'bg-yellow-100 text-yellow-700';
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${innovation.color} rounded-xl flex items-center justify-center mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{innovation.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColor}`}>
                      {innovation.status}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{innovation.description}</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      <span className="font-medium">Impact:</span>
                      <span className="ml-2">{innovation.impact}</span>
                    </div>
                  </div>
                  <a href="/contact" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Research Progress */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              🔬 Research Progress
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Track the development of our most ambitious research projects and their expected completion timelines.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{area.title}</h3>
                <p className="text-gray-600 mb-6">{area.description}</p>
                
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Progress</span>
                    <span className="text-sm font-semibold text-purple-600">{area.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-cyan-500 h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${area.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>Timeline: {area.timeline}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Statistics */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              📊 Innovation Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our innovations are already making a significant impact across industries worldwide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-purple-600 mb-2">500+</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Active Projects</h3>
              <p className="text-gray-600">Ongoing research initiatives</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-cyan-600 mb-2">50+</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Patents Filed</h3>
              <p className="text-gray-600">Breakthrough technologies protected</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-green-600 mb-2">1000+</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Companies Served</h3>
              <p className="text-gray-600">Businesses transformed by our innovations</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-orange-600 mb-2">99.9%</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Success Rate</h3>
              <p className="text-gray-600">Successful project deliveries</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-indigo-900 to-cyan-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-6">
              Join the Innovation Revolution
            </h2>
            <p className="text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
              Be part of the future. Partner with us to access cutting-edge innovations and transform your business with next-generation AI technologies.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="/contact" className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-all duration-300 font-semibold text-lg">
                Partner With Us →
              </a>
              <a href="/pages/ComprehensiveServices2025" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NextGenInnovationHub2025;