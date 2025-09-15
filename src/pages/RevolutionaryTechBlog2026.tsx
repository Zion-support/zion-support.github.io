import React from 'react';
import { motion } from 'framer-motion';

const RevolutionaryTechBlog2026: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI: Synthetic Intelligence and Beyond",
      excerpt: "Exploring how synthetic intelligence is reshaping our understanding of artificial consciousness and machine learning capabilities.",
      author: "Dr. Sarah Chen",
      date: "January 20, 2026",
      category: "AI & Machine Learning",
      readTime: "8 min read",
      image: "🧠",
      featured: true
    },
    {
      id: 2,
      title: "Quantum Computing Breakthrough: Solving Impossible Problems",
      excerpt: "A deep dive into the latest quantum computing advances and how they're revolutionizing cryptography, optimization, and scientific research.",
      author: "Prof. Michael Rodriguez",
      date: "January 18, 2026",
      category: "Quantum Computing",
      readTime: "12 min read",
      image: "⚡",
      featured: true
    },
    {
      id: 3,
      title: "Neural Interfaces: Bridging Mind and Machine",
      excerpt: "The revolutionary technology that's enabling direct communication between human brains and computers, transforming healthcare and human capabilities.",
      author: "Dr. Emily Watson",
      date: "January 15, 2026",
      category: "Neural Technology",
      readTime: "10 min read",
      image: "🧬",
      featured: false
    },
    {
      id: 4,
      title: "Cyber-Physical Systems: The Next Digital Revolution",
      excerpt: "How intelligent cyber-physical systems are creating seamless integration between digital and physical worlds in smart cities and industries.",
      author: "Alex Thompson",
      date: "January 12, 2026",
      category: "IoT & Smart Systems",
      readTime: "7 min read",
      image: "🌐",
      featured: false
    },
    {
      id: 5,
      title: "Advanced Biotechnology: Merging Biology and Technology",
      excerpt: "Revolutionary biotech solutions that are merging biology and technology for unprecedented medical breakthroughs and human enhancement.",
      author: "Dr. Lisa Park",
      date: "January 10, 2026",
      category: "Biotechnology",
      readTime: "9 min read",
      image: "🧬",
      featured: false
    },
    {
      id: 6,
      title: "The Rise of Autonomous AI Agents",
      excerpt: "Self-directed AI systems that can plan, execute, and adapt without human intervention, revolutionizing business operations and decision-making.",
      author: "James Wilson",
      date: "January 8, 2026",
      category: "AI & Automation",
      readTime: "6 min read",
      image: "🤖",
      featured: false
    }
  ];

  const categories = [
    "All Posts",
    "AI & Machine Learning",
    "Quantum Computing",
    "Neural Technology",
    "IoT & Smart Systems",
    "Biotechnology",
    "AI & Automation"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-6">
              📚 REVOLUTIONARY TECH BLOG • JANUARY 2026
            </div>
            <h1 className="text-6xl font-bold mb-6">
              Revolutionary Tech Blog
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Stay ahead of the curve with insights into the latest technological breakthroughs and innovations shaping our future
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Subscribe to Updates
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
                Browse Categories
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  index === 0
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Posts */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🌟 Featured Articles</h2>
            <p className="text-xl text-gray-600">Our most popular and impactful technology insights</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {blogPosts.filter(post => post.featured).map((post) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full font-semibold">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  
                  <div className="text-6xl mb-4">{post.image}</div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 hover:text-purple-600 transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{post.author}</div>
                        <div className="text-sm text-gray-500">{post.date}</div>
                      </div>
                    </div>
                    
                    <button className="text-purple-600 hover:text-purple-700 font-semibold">
                      Read More →
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* All Posts Grid */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">📖 All Articles</h2>
            <p className="text-xl text-gray-600">Explore our complete collection of technology insights and analysis</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-semibold">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  
                  <div className="text-4xl mb-4">{post.image}</div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-purple-600 transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">{post.author}</div>
                        <div className="text-xs text-gray-500">{post.date}</div>
                      </div>
                    </div>
                    
                    <button className="text-purple-600 hover:text-purple-700 font-semibold text-sm">
                      Read →
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Stay Updated with Latest Tech Insights</h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-3xl mx-auto">
            Get the latest technology insights, breakthrough discoveries, and industry analysis delivered to your inbox
          </p>
          
          <div className="max-w-md mx-auto flex space-x-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Subscribe
            </button>
          </div>
          
          <p className="text-sm text-white opacity-75 mt-4">
            Join 50,000+ tech professionals who trust our insights
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Explore More?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover our comprehensive technology solutions and services that are shaping the future
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Solutions
            </button>
            <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-all duration-300 font-semibold text-lg">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechBlog2026;