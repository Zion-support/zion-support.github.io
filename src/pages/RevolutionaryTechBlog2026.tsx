import React from 'react';
import { motion } from 'framer-motion';
import Header from '../Header';
import Footer from '../Footer';

const RevolutionaryTechBlog2026: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Dawn of Synthetic Intelligence: When AI Becomes Conscious",
      excerpt: "We are witnessing the birth of true artificial consciousness. AI systems are developing self-awareness, emotional intelligence, and creative capabilities that rival human cognition.",
      date: "January 25, 2026",
      category: "AI & Machine Learning",
      readTime: "8 min read",
      image: "🧠",
      featured: true
    },
    {
      id: 2,
      title: "Quantum Reality: How Quantum Computing is Reshaping Our Universe",
      excerpt: "Quantum computing has achieved true supremacy, enabling us to simulate reality itself. We can now model entire universes and predict the future with unprecedented accuracy.",
      date: "January 22, 2026",
      category: "Quantum Computing",
      readTime: "6 min read",
      image: "⚛️",
      featured: true
    },
    {
      id: 3,
      title: "Neural Interface Revolution: Merging Mind and Machine",
      excerpt: "Direct brain-computer interfaces are no longer science fiction. We're entering an era where human consciousness can directly interface with digital systems.",
      date: "January 20, 2026",
      category: "Neural Interfaces",
      readTime: "7 min read",
      image: "🧬",
      featured: false
    },
    {
      id: 4,
      title: "Space Technology Breakthrough: Mars Colonization is Now Reality",
      excerpt: "Revolutionary space technologies are making Mars colonization not just possible, but imminent. Space elevators, asteroid mining, and interplanetary travel are here.",
      date: "January 18, 2026",
      category: "Space Technology",
      readTime: "9 min read",
      image: "🚀",
      featured: false
    },
    {
      id: 5,
      title: "Advanced Robotics: The Age of Humanoid Companions",
      excerpt: "Humanoid robots are becoming indistinguishable from humans in their capabilities. They're not just tools anymore—they're companions, colleagues, and friends.",
      date: "January 15, 2026",
      category: "Robotics",
      readTime: "5 min read",
      image: "🤖",
      featured: false
    },
    {
      id: 6,
      title: "Biotechnology Revolution: Gene Editing and Life Extension",
      excerpt: "We're on the verge of curing all diseases, extending human life indefinitely, and enhancing human capabilities through advanced biotechnology.",
      date: "January 12, 2026",
      category: "Biotechnology",
      readTime: "6 min read",
      image: "🔬",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-semibold mb-6 animate-pulse">
            📚 REVOLUTIONARY TECH BLOG • JANUARY 2026
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Tech Blog 2026
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Stay ahead of the technological revolution with our comprehensive insights, 
            breakthrough discoveries, and expert analysis of the most cutting-edge technologies.
          </p>
        </motion.div>

        {/* Featured Posts */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">🌟 Featured Articles</h2>
            <p className="text-xl opacity-90">The most important technological insights of 2026</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.filter(post => post.featured).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-4xl">{post.image}</div>
                  <div>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">
                      {post.category}
                    </span>
                    <div className="text-sm text-purple-200 mt-1">
                      {post.date} • {post.readTime}
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-purple-100">{post.title}</h3>
                <p className="text-purple-200 mb-6">{post.excerpt}</p>
                <button className="bg-white text-purple-600 px-6 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
                  Read Full Article →
                </button>
              </motion.article>
            ))}
          </div>
        </div>

        {/* All Posts */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">📰 All Articles</h2>
            <p className="text-xl opacity-90">Complete collection of our revolutionary tech insights</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-3xl">{post.image}</div>
                  <div>
                    <span className="px-2 py-1 bg-white/20 text-white text-xs rounded-full">
                      {post.category}
                    </span>
                    <div className="text-sm text-gray-300 mt-1">
                      {post.date} • {post.readTime}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{post.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{post.excerpt}</p>
                <button className="text-purple-400 hover:text-purple-300 font-semibold text-sm">
                  Read More →
                </button>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 py-20 mb-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold mb-4">📧 Stay Updated</h2>
              <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                Get the latest revolutionary tech insights delivered directly to your inbox. 
                Be the first to know about breakthrough technologies and industry developments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">🏷️ Categories</h2>
            <p className="text-xl opacity-90">Explore topics that interest you most</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "AI & Machine Learning", icon: "🧠", count: "24 articles" },
              { name: "Quantum Computing", icon: "⚛️", count: "18 articles" },
              { name: "Neural Interfaces", icon: "🧬", count: "15 articles" },
              { name: "Space Technology", icon: "🚀", count: "12 articles" },
              { name: "Robotics", icon: "🤖", count: "20 articles" },
              { name: "Biotechnology", icon: "🔬", count: "16 articles" }
            ].map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="text-4xl mb-4 text-center">{category.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-center text-white">{category.name}</h3>
                <p className="text-gray-300 text-center text-sm">{category.count}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Tech Revolution</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Be part of the conversation that's shaping the future. Share your thoughts, 
            ask questions, and connect with fellow tech enthusiasts and experts.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Join Discussion
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold text-lg">
              Submit Article
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RevolutionaryTechBlog2026;