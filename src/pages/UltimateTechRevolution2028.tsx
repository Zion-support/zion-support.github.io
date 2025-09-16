import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Cpu, 
  Database, 
  Cloud, 
  Shield, 
  Rocket, 
  Globe,
  Star,
  Sparkles,
  ArrowRight,
  Play,
  Download,
  ExternalLink
} from 'lucide-react';

const UltimateTechRevolution2028 = () => {
  const technologies = [
    {
      title: "Consciousness Computing",
      description: "AI systems that achieve true self-awareness and emotional intelligence",
      icon: Brain,
      color: "from-purple-600 to-pink-600",
      features: ["Self-Aware AI", "Emotional Intelligence", "Creative Problem Solving"],
      impact: "Revolutionary breakthrough in AI consciousness"
    },
    {
      title: "Quantum Neural Networks",
      description: "Fusion of quantum computing with neural networks for unprecedented processing power",
      icon: Cpu,
      color: "from-blue-600 to-cyan-600",
      features: ["Exponential Speed", "Quantum Entanglement", "Parallel Processing"],
      impact: "1000x faster than classical computing"
    },
    {
      title: "Holographic Reality",
      description: "Full-sensory holographic environments indistinguishable from physical reality",
      icon: Globe,
      color: "from-green-600 to-emerald-600",
      features: ["Full Sensory Immersion", "Tactile Feedback", "Real-time Rendering"],
      impact: "Complete virtual reality transformation"
    },
    {
      title: "Interdimensional Computing",
      description: "Computing across multiple dimensions and parallel universes",
      icon: Rocket,
      color: "from-orange-600 to-red-600",
      features: ["Multi-Dimensional Processing", "Parallel Universe Access", "Reality Manipulation"],
      impact: "Access to infinite computational resources"
    }
  ];

  const achievements = [
    { metric: "99.9%", label: "AI Accuracy Rate", icon: Star },
    { metric: "1000x", label: "Processing Speed", icon: Zap },
    { metric: "∞", label: "Computational Capacity", icon: Database },
    { metric: "100%", label: "Reality Simulation", icon: Globe }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMS41Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold mb-8">
              <Sparkles className="w-5 h-5 mr-2" />
              ULTIMATE TECH REVOLUTION 2028
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              The Future is
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Here Today
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Experience the most advanced technologies ever created. From consciousness computing 
              to interdimensional processing, we're pushing the boundaries of what's possible.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href="#technologies"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Technologies
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{achievement.metric}</div>
                <div className="text-gray-300">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the cutting-edge technologies that are reshaping our world 
              and creating infinite possibilities for the future.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${tech.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <tech.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{tech.title}</h3>
                    <p className="text-gray-300">{tech.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {tech.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <Star className="w-4 h-4 text-purple-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-4 mb-6">
                  <div className="text-sm font-semibold text-purple-300 mb-1">Impact:</div>
                  <div className="text-white">{tech.impact}</div>
                </div>

                <div className="flex space-x-4">
                  <a
                    href={`/tech/${tech.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="/contact"
                    className="px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
                  >
                    <Download className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of forward-thinking organizations already using our 
              revolutionary technologies to transform their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.a
                href="/pages/UltimateTechRevolution2027"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                View 2027 Revolution
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default UltimateTechRevolution2028;