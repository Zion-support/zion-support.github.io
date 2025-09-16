import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { getFeaturedBlogPosts, getRecentBlogPosts } from '../data/blog-posts';

const UltimateTechShowcase2026: React.FC = () => {
  const featuredPosts = getFeaturedBlogPosts();
  const recentPosts = getRecentBlogPosts(6);

  const techCategories = [
    {
      title: "Neural Reality Engine",
      description: "Revolutionary brain-computer interfaces that blur the line between digital and physical reality.",
      icon: "🧠",
      color: "from-purple-500 to-pink-600",
      link: "/pages/NeuralRealityEngine2026"
    },
    {
      title: "Quantum Consciousness",
      description: "How quantum computing is revolutionizing artificial consciousness and creating truly intelligent systems.",
      icon: "⚛️",
      color: "from-blue-500 to-cyan-600",
      link: "/pages/QuantumConsciousness2026"
    },
    {
      title: "Interdimensional Tech",
      description: "Exploring technologies that operate across multiple dimensions and realities.",
      icon: "🌌",
      color: "from-indigo-500 to-purple-600",
      link: "/pages/InterdimensionalTech2026"
    },
    {
      title: "Space Technology",
      description: "Next-generation space technologies that will enable human colonization of other worlds.",
      icon: "🚀",
      color: "from-orange-500 to-red-600",
      link: "/pages/SpaceTech2030"
    },
    {
      title: "Green Tech Revolution",
      description: "Revolutionary environmental technologies that will reverse climate change and create a sustainable future.",
      icon: "🌱",
      color: "from-green-500 to-emerald-600",
      link: "/pages/GreenTechRevolution2026"
    },
    {
      title: "Holographic Reality",
      description: "How holographic technology is transforming communication, entertainment, and business.",
      icon: "👁️",
      color: "from-teal-500 to-blue-600",
      link: "/pages/HolographicReality2026"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <Helmet>
        <title>Ultimate Tech Showcase 2026 - Zion Tech Group</title>
        <meta name="description" content="Discover the most revolutionary technologies of 2026. From Neural Reality Engines to Quantum Consciousness Computing, explore the future of technology." />
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
            Ultimate Tech Showcase 2026
          </motion.h1>
          <motion.p 
            className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience the most revolutionary technologies that will define the future. 
            From Neural Reality Engines to Interdimensional Computing, discover innovations 
            that will transform humanity.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link 
              to="/pages/ComprehensiveServicesShowcase2027" 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🚀 Explore All Services
            </Link>
            <Link 
              to="/pages/RevolutionaryTechBlog2026" 
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              📚 Read Tech Blog
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Technology Categories Grid */}
      <motion.section 
        className="py-20 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Revolutionary Technology Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techCategories.map((category, index) => (
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
                <Link 
                  to={category.link}
                  className={`inline-block bg-gradient-to-r ${category.color} hover:opacity-90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300`}
                >
                  Explore Technology →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Featured Blog Posts */}
      <motion.section 
        className="py-20 px-4 bg-white/5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
      >
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Latest Technology Insights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-4xl">📊</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                  <span>{post.publishDate}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span 
                      key={tag}
                      className="bg-white/20 text-white text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link 
                  to={`/blog/${post.slug}`}
                  className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm"
                >
                  Read More →
                </Link>
              </motion.article>
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
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of innovators who are already leveraging these revolutionary 
              technologies to transform their businesses and shape the future.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                to="/pages/ComprehensiveServicesShowcase2027" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Started Today
              </Link>
              <Link 
                to="/contact" 
                className="bg-white/20 hover:bg-white/30 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 border border-white/30"
              >
                Contact Our Experts
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default UltimateTechShowcase2026;