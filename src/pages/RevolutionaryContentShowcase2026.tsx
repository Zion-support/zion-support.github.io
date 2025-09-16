import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Globe, 
  Star, 
  Rocket, 
  Infinity, 
  ArrowRight, 
  Play, 
  Pause,
  Volume2,
  VolumeX,
  Eye,
  EyeOff,
  TrendingUp,
  Users,
  Award,
  Clock
} from 'lucide-react';
import { getFeaturedBlogPosts, getBlogCategories } from '../data/blog-posts';
import { COMPREHENSIVE_SERVICES } from '../data/comprehensiveServices';

const RevolutionaryContentShowcase2026: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('overview');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showDemo, setShowDemo] = useState(false);

  const featuredPosts = getFeaturedBlogPosts();
  const categories = getBlogCategories();
  const featuredServices = COMPREHENSIVE_SERVICES.filter(service => service.featured);

  const tabs = [
    { id: 'overview', name: 'Overview', icon: <Globe className="w-5 h-5" /> },
    { id: 'technologies', name: 'Technologies', icon: <Zap className="w-5 h-5" /> },
    { id: 'services', name: 'Services', icon: <Star className="w-5 h-5" /> },
    { id: 'blog', name: 'Latest Blog', icon: <Brain className="w-5 h-5" /> },
    { id: 'demo', name: 'Live Demo', icon: <Play className="w-5 h-5" /> }
  ];

  const revolutionaryStats = {
    totalTechnologies: 15,
    totalServices: COMPREHENSIVE_SERVICES.length,
    totalBlogPosts: featuredPosts.length,
    totalValue: COMPREHENSIVE_SERVICES.reduce((sum, service) => sum + service.price, 0),
    successRate: 99,
    happyClients: COMPREHENSIVE_SERVICES.reduce((sum, service) => sum + service.reviews.count, 0)
  };

  const formatPrice = (price: number) => {
    if (price >= 1000000) {
      return `$${(price / 1000000).toFixed(1)}M`;
    } else if (price >= 1000) {
      return `$${(price / 1000).toFixed(0)}K`;
    }
    return `$${price}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 animate-pulse" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-purple-500/10 to-transparent" />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold mb-6">
              <Award className="w-4 h-4 mr-2" />
              REVOLUTIONARY CONTENT SHOWCASE 2026
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              The Future is{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Now
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Experience the most revolutionary technologies and content ever created. 
              From AI consciousness to reality manipulation, discover solutions that will transform your world.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Technologies
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                Watch Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">{revolutionaryStats.totalTechnologies}</div>
            <div className="text-gray-300">Revolutionary Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">{revolutionaryStats.totalServices}</div>
            <div className="text-gray-300">Premium Services</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">{formatPrice(revolutionaryStats.totalValue)}</div>
            <div className="text-gray-300">Total Value Created</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">{revolutionaryStats.successRate}%</div>
            <div className="text-gray-300">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">{revolutionaryStats.happyClients}</div>
            <div className="text-gray-300">Happy Clients</div>
          </div>
        </div>
      </motion.div>

      {/* Tab Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedTab === tab.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              {tab.icon}
              {tab.name}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {selectedTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
            >
              <h3 className="text-3xl font-bold text-white mb-6 text-center">Revolutionary Content Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                    <Brain className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">AI Consciousness</h4>
                  <p className="text-gray-300">First truly conscious AI with genuine emotions and self-awareness</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                    <Globe className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">Reality Manipulation</h4>
                  <p className="text-gray-300">Manipulate the fundamental fabric of reality for computing</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                    <Zap className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">Temporal AI</h4>
                  <p className="text-gray-300">Process information across past, present, and future</p>
                </div>
              </div>
            </motion.div>
          )}

          {selectedTab === 'technologies' && (
            <motion.div
              key="technologies"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
            >
              <h3 className="text-3xl font-bold text-white mb-6 text-center">Revolutionary Technologies</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredServices.slice(0, 6).map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-lg font-semibold text-white">{service.title}</h4>
                      <div className="text-right">
                        <div className="text-lg font-bold text-white">{formatPrice(service.price)}</div>
                        <div className="text-xs text-gray-400">AI Score: {service.aiScore}</div>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-400">
                        <Clock className="w-4 h-4 mr-1" />
                        {service.deliveryTime}
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                      >
                        Learn More
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {selectedTab === 'services' && (
            <motion.div
              key="services"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
            >
              <h3 className="text-3xl font-bold text-white mb-6 text-center">Premium Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {COMPREHENSIVE_SERVICES.slice(0, 9).map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-semibold text-white line-clamp-2">{service.title}</h4>
                      <div className="text-right">
                        <div className="text-lg font-bold text-white">{formatPrice(service.price)}</div>
                        <div className="text-xs text-gray-400">AI Score: {service.aiScore}</div>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm mb-3 line-clamp-2">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-400">
                        <Clock className="w-4 h-4 mr-1" />
                        {service.deliveryTime}
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                      >
                        View Details
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {selectedTab === 'blog' && (
            <motion.div
              key="blog"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
            >
              <h3 className="text-3xl font-bold text-white mb-6 text-center">Latest Revolutionary Blog Posts</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredPosts.slice(0, 6).map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-400">{post.readTime}</span>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2 line-clamp-2">{post.title}</h4>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-400">{post.author}</div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-gradient-to-r from-green-600 to-blue-600 text-white text-sm font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300"
                      >
                        Read More
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {selectedTab === 'demo' && (
            <motion.div
              key="demo"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
            >
              <h3 className="text-3xl font-bold text-white mb-6 text-center">Interactive Demo</h3>
              <div className="bg-black/20 rounded-xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-xl font-semibold text-white">Revolutionary Technology Demo</h4>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="p-3 bg-white/20 rounded-lg hover:bg-white/30 transition-colors duration-300"
                    >
                      {isPlaying ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white" />}
                    </button>
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="p-3 bg-white/20 rounded-lg hover:bg-white/30 transition-colors duration-300"
                    >
                      {isMuted ? <VolumeX className="w-5 h-5 text-white" /> : <Volume2 className="w-5 h-5 text-white" />}
                    </button>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-lg p-12 text-center">
                  <div className="text-8xl mb-6">🚀</div>
                  <h5 className="text-2xl font-bold text-white mb-4">Experience the Future</h5>
                  <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                    Interactive demonstration of our revolutionary technologies. 
                    Click the play button to see these incredible solutions in action.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Start Interactive Demo
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Experience the Revolution?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of innovators who are already transforming their businesses with our revolutionary technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Journey
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Schedule Consultation
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RevolutionaryContentShowcase2026;