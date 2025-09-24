import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const RevolutionaryTechBlog2026: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI: Beyond Human Intelligence",
      excerpt: "Exploring how artificial intelligence is evolving beyond human cognitive capabilities and what this means for society.",
      author: "Dr. Sarah Chen",
      date: "January 25, 2026",
      category: "Artificial Intelligence",
      readTime: "8 min read",
      image: "🧠",
      featured: true
    },
    {
      id: 2,
      title: "Quantum Computing: Breaking the Speed Barrier",
      excerpt: "How quantum computers are solving problems that would take classical computers billions of years to complete.",
      author: "Prof. Michael Rodriguez",
      date: "January 23, 2026",
      category: "Quantum Computing",
      readTime: "6 min read",
      image: "⚡",
      featured: false
    },
    {
      id: 3,
      title: "Neural Interfaces: The Next Frontier of Human-Computer Interaction",
      excerpt: "Direct brain-computer communication is no longer science fiction. Here's what's possible today.",
      author: "Dr. Elena Volkov",
      date: "January 21, 2026",
      category: "Neural Technology",
      readTime: "7 min read",
      image: "🧬",
      featured: false
    },
    {
      id: 4,
      title: "Synthetic Intelligence: Creating Digital Consciousness",
      excerpt: "The emergence of synthetic intelligence that may possess consciousness and self-awareness.",
      author: "Dr. James Park",
      date: "January 19, 2026",
      category: "Synthetic Intelligence",
      readTime: "9 min read",
      image: "🤖",
      featured: true
    },
    {
      id: 5,
      title: "Quantum-Neural Fusion: The Ultimate Computing Paradigm",
      excerpt: "Combining quantum computing with neural networks to create unprecedented computational power.",
      author: "Dr. Maria Santos",
      date: "January 17, 2026",
      category: "Hybrid Technology",
      readTime: "10 min read",
      image: "🔮",
      featured: false
    },
    {
      id: 6,
      title: "The Ethics of Advanced AI: Navigating the Moral Landscape",
      excerpt: "As AI becomes more powerful, we must address the ethical implications of artificial consciousness.",
      author: "Prof. David Kim",
      date: "January 15, 2026",
      category: "AI Ethics",
      readTime: "5 min read",
      image: "⚖️",
      featured: false
    }
  ];

  const categories = [
    "All Posts",
    "Artificial Intelligence",
    "Quantum Computing", 
    "Neural Technology",
    "Synthetic Intelligence",
    "Hybrid Technology",
    "AI Ethics"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-sm font-bold mb-6 animate-pulse">
            📚 REVOLUTIONARY INSIGHTS • JANUARY 2026
          </div>
          <h1 className="text-6xl font-bold text-white mb-6">
            Revolutionary Tech Blog 2026
          </h1>
          <p className="text-2xl text-purple-200 max-w-4xl mx-auto mb-8">
            Deep insights into the technologies that are reshaping our world. 
            Stay ahead of the curve with expert analysis and breakthrough discoveries.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                index === 0 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                  : 'bg-white/10 text-purple-200 hover:bg-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">🌟 Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.filter(post => post.featured).map((post) => (
              <div key={post.id} className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-4xl">{post.image}</div>
                  <div>
                    <span className="px-3 py-1 bg-purple-500/30 text-purple-200 text-xs rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{post.title}</h3>
                <p className="text-purple-200 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-purple-300">
                  <span>By {post.author}</span>
                  <span>{post.readTime}</span>
                </div>
                <div className="mt-4">
                  <button className="text-purple-400 hover:text-white font-semibold">
                    Read Full Article →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Posts Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">📖 All Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-3xl">{post.image}</div>
                  <div>
                    <span className="px-2 py-1 bg-blue-500/30 text-blue-200 text-xs rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                  <span>{post.author}</span>
                  <span>{post.readTime}</span>
                </div>
                <div className="text-xs text-gray-500 mb-4">{post.date}</div>
                <button className="text-blue-400 hover:text-white font-semibold text-sm">
                  Read More →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-12 mb-16">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
              Get the latest insights on revolutionary technologies delivered to your inbox. 
              Join 50,000+ tech leaders staying ahead of the curve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Expert Authors */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">👥 Expert Authors</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl text-white">
                SC
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Dr. Sarah Chen</h3>
              <p className="text-purple-200 text-sm mb-4">AI Research Director at MIT</p>
              <p className="text-gray-300 text-sm">Leading expert in artificial intelligence and machine learning with 15+ years of experience.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl text-white">
                MR
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Prof. Michael Rodriguez</h3>
              <p className="text-purple-200 text-sm mb-4">Quantum Computing Specialist</p>
              <p className="text-gray-300 text-sm">Pioneer in quantum computing research and applications across multiple industries.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl text-white">
                EV
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Dr. Elena Volkov</h3>
              <p className="text-purple-200 text-sm mb-4">Neural Interface Researcher</p>
              <p className="text-gray-300 text-sm">Expert in brain-computer interfaces and neural technology applications.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Explore the Future?</h2>
          <p className="text-xl text-purple-200 mb-8 max-w-3xl mx-auto">
            Dive deeper into revolutionary technologies and discover how they can transform your business. 
            Our expert insights will guide you through the next wave of innovation.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore All Articles
            </button>
            <button className="border-2 border-white text-white px-12 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
              Contact Our Experts
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RevolutionaryTechBlog2026;