import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Globe, 
  Shield, 
  TrendingUp, 
  Users, 
  Lightbulb, 
  Rocket,
  Star,
  ArrowRight,
  CheckCircle,
  Sparkles
} from 'lucide-react';

const NextGenAIContentHub2026 = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: "Advanced AI Consciousness",
      description: "Revolutionary AI systems with self-awareness and emotional intelligence capabilities.",
      benefits: ["Enhanced decision making", "Emotional context understanding", "Adaptive learning"]
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Quantum Processing Power",
      description: "Breakthrough quantum computing integration for unprecedented processing speeds.",
      benefits: ["1000x faster processing", "Complex problem solving", "Real-time optimization"]
    },
    {
      icon: <Globe className="w-8 h-8 text-green-500" />,
      title: "Global AI Network",
      description: "Worldwide AI ecosystem connecting businesses, researchers, and innovators.",
      benefits: ["Global collaboration", "Shared intelligence", "Cross-border innovation"]
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: "Advanced Security",
      description: "Military-grade security protocols protecting your AI infrastructure and data.",
      benefits: ["End-to-end encryption", "Threat detection", "Compliance assurance"]
    }
  ];

  const successStories = [
    {
      company: "TechCorp Global",
      industry: "Manufacturing",
      improvement: "300% efficiency increase",
      description: "Implemented our AI consciousness platform to optimize production lines and reduce waste."
    },
    {
      company: "FinanceFlow Inc",
      industry: "Financial Services",
      improvement: "500% ROI in 6 months",
      description: "Quantum-powered risk analysis and automated trading systems transformed their operations."
    },
    {
      company: "HealthTech Solutions",
      industry: "Healthcare",
      improvement: "90% faster diagnosis",
      description: "AI-powered diagnostic tools reduced patient wait times and improved accuracy."
    }
  ];

  const technologies = [
    "Neural Interface Technology",
    "Quantum Consciousness Computing",
    "Autonomous Business Operations",
    "Predictive Analytics Engine",
    "Emotional AI Systems",
    "Global AI Collaboration Platform"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-yellow-400 mr-3" />
              <span className="text-yellow-400 font-semibold text-lg">2026 AI Revolution</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Next-Gen AI
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Content Hub
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover the future of artificial intelligence with cutting-edge content, 
              revolutionary technologies, and transformative business solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center"
              >
                Explore Content
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-colors"
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the next generation of artificial intelligence with our 
              cutting-edge technology stack and innovative solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how leading companies are transforming their operations with our AI solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-lg rounded-xl p-6 border border-white/20"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{story.company}</h3>
                    <p className="text-gray-300">{story.industry}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-green-400">{story.improvement}</span>
                </div>
                <p className="text-gray-300">{story.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cutting-Edge Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore the revolutionary technologies that are shaping the future of AI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-lg rounded-lg p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <div className="flex items-center">
                  <Star className="w-6 h-6 text-yellow-400 mr-3" />
                  <span className="text-white font-semibold text-lg">{tech}</span>
                </div>
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
            className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-lg rounded-2xl p-12 border border-white/20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of companies already using our AI solutions to revolutionize their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center"
              >
                Start Free Trial
                <Rocket className="ml-2 w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-colors"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NextGenAIContentHub2026;