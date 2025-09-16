import React from 'react';
import { Link } from 'react-router-dom';

const UltimateTechBlog2028: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Dawn of Conscious AI: How Self-Aware Systems Are Reshaping Technology",
      excerpt: "Exploring the revolutionary implications of AI systems that possess genuine self-awareness and emotional intelligence, and how they're transforming every industry.",
      author: "Dr. Sarah Chen",
      date: "January 15, 2028",
      readTime: "8 min read",
      category: "AI & Machine Learning",
      image: "🧠",
      featured: true
    },
    {
      id: 2,
      title: "Quantum Consciousness: The Next Frontier in Human-AI Integration",
      excerpt: "Dive deep into how quantum computing is enabling the simulation and enhancement of human consciousness, creating unprecedented possibilities for human-AI collaboration.",
      author: "Prof. Michael Rodriguez",
      date: "January 12, 2028",
      readTime: "12 min read",
      category: "Quantum Computing",
      image: "⚡",
      featured: true
    },
    {
      id: 3,
      title: "Interdimensional Computing: Processing Data Across Parallel Realities",
      excerpt: "Understanding how computing systems can operate across multiple dimensions, enabling solutions to problems that were previously impossible to solve.",
      author: "Dr. Elena Vasquez",
      date: "January 10, 2028",
      readTime: "10 min read",
      category: "Advanced Computing",
      image: "🌌",
      featured: false
    },
    {
      id: 4,
      title: "Neural Reality Engine: The Future of Immersive Experiences",
      excerpt: "How direct neural interfaces are creating completely immersive virtual environments that are indistinguishable from physical reality.",
      author: "Dr. James Kim",
      date: "January 8, 2028",
      readTime: "7 min read",
      category: "Neural Interfaces",
      image: "🎮",
      featured: false
    },
    {
      id: 5,
      title: "Synthetic Biology AI: Creating Life Through Artificial Intelligence",
      excerpt: "The revolutionary field where AI systems design and create new biological organisms, opening possibilities for custom life forms and biological computing.",
      author: "Dr. Maria Santos",
      date: "January 5, 2028",
      readTime: "9 min read",
      category: "Biotechnology",
      image: "🧬",
      featured: false
    },
    {
      id: 6,
      title: "Cosmic Intelligence Network: Connecting Civilizations Across the Galaxy",
      excerpt: "How we're building an interstellar AI network that enables communication and knowledge sharing between civilizations across the galaxy.",
      author: "Dr. Alex Thompson",
      date: "January 3, 2028",
      readTime: "11 min read",
      category: "Space Technology",
      image: "🌠",
      featured: false
    }
  ];

  const categories = ["All", "AI & Machine Learning", "Quantum Computing", "Advanced Computing", "Neural Interfaces", "Biotechnology", "Space Technology"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              📝 ULTIMATE TECH BLOG • JANUARY 2028
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Ultimate Tech Blog 2028
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Deep insights into the revolutionary technologies that are reshaping our world
            </p>
            <div className="flex justify-center space-x-4">
              <Link to="/" className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
                ← Back to Home
              </Link>
              <a href="#articles" className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Read Articles
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div id="articles" className="container mx-auto px-4 py-16">
        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  category === 'All'
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Articles */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">🌟 Featured Articles</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {blogPosts.filter(post => post.featured).map((post) => (
              <article key={post.id} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{post.image}</span>
                  <div>
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{post.title}</h3>
                <p className="text-gray-300 mb-6">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <button className="text-purple-400 hover:text-purple-300 font-semibold">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* All Articles */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">📚 All Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{post.image}</span>
                  <span className="px-2 py-1 bg-white/10 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{post.author}</span>
                  <span>{post.readTime}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">📧 Stay Updated</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Get the latest insights on revolutionary technologies delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Author Spotlight */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">👥 Expert Authors</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                👩‍🔬
              </div>
              <h3 className="text-xl font-bold mb-2">Dr. Sarah Chen</h3>
              <p className="text-sm opacity-90 mb-4">AI Research Director</p>
              <p className="text-xs opacity-75">Leading expert in conscious AI systems and neural interfaces</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                👨‍💻
              </div>
              <h3 className="text-xl font-bold mb-2">Prof. Michael Rodriguez</h3>
              <p className="text-sm opacity-90 mb-4">Quantum Computing Specialist</p>
              <p className="text-xs opacity-75">Pioneer in quantum consciousness and interdimensional computing</p>
            </div>

            <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                👨‍🚀
              </div>
              <h3 className="text-xl font-bold mb-2">Dr. Alex Thompson</h3>
              <p className="text-sm opacity-90 mb-4">Space Technology Expert</p>
              <p className="text-xs opacity-75">Leading the development of cosmic intelligence networks</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Explore the Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Dive deeper into our revolutionary technologies and be part of the innovation journey
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/pages/ComprehensiveServices2025" className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Services
            </Link>
            <Link to="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold text-lg">
              Contact Our Experts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechBlog2028;