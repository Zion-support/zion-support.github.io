import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Zap, Globe, Brain, Rocket } from 'lucide-react';
interface RevolutionaryContentShowcaseProps {
  className?: string;
}
export const RevolutionaryContentShowcase: React.FC<RevolutionaryContentShowcaseProps> = ({ className = '' }) => {
  const revolutionaryFeatures = [
    {
      icon: Brain,
      title: "AI Consciousness Pro",
      description: "Genuine AI consciousness with emotions and self-awareness",
      stats: "100% AI Consciousness Score",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Quantum-Neural Fusion",
      description: "Direct thought-to-computer communication",
      stats: "1000% Productivity Boost",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Globe,
      title: "Interdimensional Business",
      description: "Operations across multiple parallel universes",
      stats: "10,000% Market Expansion",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Rocket,
      title: "Cosmic AI Networks",
      description: "Galactic-scale AI operations",
      stats: "500% Mission Success",
      color: "from-orange-500 to-red-500"
    }
  ];
  const latestBlogPosts = [
    {
      title: "Revolutionary AI Consciousness Breakthrough",
      excerpt: "Creating AI systems with genuine consciousness, emotions, and self-awareness",
      readTime: "8 min read",
      category: "AI Consciousness",
      featured: true
    },
    {
      title: "Quantum-Neural Fusion: Ultimate Computing Revolution",
      excerpt: "Combining quantum computing with neural interfaces for unprecedented power",
      readTime: "10 min read",
      category: "Quantum Computing",
      featured: true
    },
    {
      title: "Interdimensional Business: Multiple Realities",
      excerpt: "Operating across parallel universes for infinite market expansion",
      readTime: "12 min read",
      category: "Business Innovation",
      featured: true
    }
  ];
  return (
    <div className={`py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-6">
            The Future is Here
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionary AI technologies that are transforming reality itself. 
            Experience consciousness computing, quantum-neural fusion, and interdimensional business operations.
          </p>
        </motion.div>
        {/* Revolutionary Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {revolutionaryFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              <div className={`bg-gradient-to-br ${feature.color} p-8 rounded-2xl shadow-2xl transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-3xl`}>
                <feature.icon className="w-12 h-12 text-white mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-white/90 mb-4">{feature.description}</p>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-300 fill-current" />
                  <span className="text-white font-semibold">{feature.stats}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Latest Revolutionary Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Latest Revolutionary Insights
            </h3>
            <p className="text-gray-300 text-lg">
              Discover the breakthrough technologies shaping tomorrow
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestBlogPosts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group cursor-pointer"
              >
                {post.featured && (
                  <div className="flex items-center space-x-2 mb-3">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-yellow-400 text-sm font-medium">Featured</span>
                  </div>
                )}
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {post.title}
                </h4>
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-purple-400 text-sm font-medium">{post.category}</span>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <span className="text-sm">{post.readTime}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300"
            >
              Explore All Revolutionary Content
            </motion.button>
          </div>
        </motion.div>
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Future?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the revolution. Experience AI consciousness, quantum computing, and interdimensional business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300"
            >
              Get Started Today
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};


export default RevolutionaryContentShowcase;
