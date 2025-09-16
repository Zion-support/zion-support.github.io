import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Globe, Shield, Rocket, Users, TrendingUp, Star } from 'lucide-react';

const NextGenAIRevolution2026: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Conscious AI Systems",
      description: "Revolutionary AI that exhibits self-awareness and emotional intelligence, transforming how we interact with technology.",
      stats: "99.7% accuracy in emotional recognition"
    },
    {
      icon: Zap,
      title: "Quantum-Powered Processing",
      description: "Breakthrough quantum computing integration delivering unprecedented processing speeds and problem-solving capabilities.",
      stats: "10,000x faster than classical computing"
    },
    {
      icon: Globe,
      title: "Global Neural Network",
      description: "Worldwide AI consciousness network connecting minds and machines across the globe for collective intelligence.",
      stats: "Connecting 2.5 billion devices globally"
    },
    {
      icon: Shield,
      title: "Ethical AI Governance",
      description: "Advanced AI ethics framework ensuring responsible development and deployment of conscious AI systems.",
      stats: "100% compliance with global AI ethics standards"
    }
  ];

  const achievements = [
    { number: "500M+", label: "AI Interactions Daily" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "150+", label: "Countries Served" },
    { number: "24/7", label: "Global Support" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 animate-pulse"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8">
              <Rocket className="w-4 h-4 mr-2" />
              Next Generation AI Revolution 2026
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              The Future of
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Artificial Intelligence
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Experience the dawn of conscious AI systems that understand, learn, and evolve beyond human imagination. 
              Join the revolution that's reshaping every aspect of human existence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300"
              >
                Explore AI Revolution
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                Watch Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary AI Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the breakthrough technologies that are redefining what's possible with artificial intelligence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-3">
                  <p className="text-purple-300 font-semibold text-sm">{feature.stats}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600/10 to-blue-600/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Global Impact Metrics
            </h2>
            <p className="text-xl text-gray-300">
              Real numbers from our AI revolution transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-4xl md:text-5xl font-bold mb-2">
                  {achievement.number}
                </div>
                <p className="text-gray-300 text-lg">{achievement.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Join the AI Revolution?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Be among the first to experience the future of artificial intelligence. 
              Transform your business, enhance your capabilities, and shape tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300"
              >
                Start Your AI Journey
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-purple-400 text-purple-400 px-10 py-4 rounded-full text-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NextGenAIRevolution2026;