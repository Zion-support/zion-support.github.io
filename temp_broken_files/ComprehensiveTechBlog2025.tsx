import React from 'react';
import { Helmet } from 'react-helmet-async';

const ComprehensiveTechBlog2025: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Conscious AI: Breaking the Boundaries of Machine Intelligence",
      excerpt: "Explore how conscious AI systems are revolutionizing our understanding of machine intelligence and what it means for the future of technology.",
      author: "Dr. Sarah Chen",
      date: "January 22, 2025",
      category: "AI & Machine Learning",
      readTime: "8 min read",
      image: "🧠",
      gradient: "from-purple-600 to-pink-600",
      featured: true
    },
    {
      id: 2,
      title: "Quantum Computing Breakthrough: Solving Impossible Problems",
      excerpt: "Discover how quantum computing is enabling solutions to problems that were previously thought impossible, from drug discovery to climate modeling.",
      author: "Prof. Michael Rodriguez",
      date: "January 20, 2025",
      category: "Quantum Computing",
      readTime: "6 min read",
      image: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      featured: false
    },
    {
      id: 3,
      title: "Neural Interfaces: The Bridge Between Mind and Machine",
      excerpt: "Learn about the latest developments in neural interface technology and how it's creating new possibilities for human-computer interaction.",
      author: "Dr. Elena Volkov",
      date: "January 18, 2025",
      category: "Neural Interfaces",
      readTime: "7 min read",
      image: "🧬",
      gradient: "from-emerald-600 to-teal-600",
      featured: false
    },
    {
      id: 4,
      title: "Interdimensional Computing: Computing Across Multiple Realities",
      excerpt: "Explore the revolutionary concept of interdimensional computing and how it's opening up infinite possibilities for problem-solving.",
      author: "Dr. James Park",
      date: "January 16, 2025",
      category: "Advanced Computing",
      readTime: "9 min read",
      image: "🌌",
      gradient: "from-orange-600 to-red-600",
      featured: false
    },
    {
      id: 5,
      title: "Predictive Reality: AI That Can See the Future",
      excerpt: "Understand how predictive reality AI systems are changing decision-making processes and enabling perfect foresight in business and technology.",
      author: "Dr. Maria Santos",
      date: "January 14, 2025",
      category: "Predictive AI",
      readTime: "5 min read",
      image: "🔮",
      gradient: "from-violet-600 to-purple-600",
      featured: false
    },
    {
      id: 6,
      title: "Omniversal AI: Intelligence Across All Possible Universes",
      excerpt: "Dive into the concept of omniversal AI and how it's providing infinite computational power by operating across all possible realities.",
      author: "Dr. Alex Thompson",
      date: "January 12, 2025",
      category: "Omniversal AI",
      readTime: "10 min read",
      image: "🌟",
      gradient: "from-pink-600 to-rose-600",
      featured: false
    }
  ];

  const categories = [
    "All Posts",
    "AI & Machine Learning",
    "Quantum Computing",
    "Neural Interfaces",
    "Advanced Computing",
    "Predictive AI",
    "Omniversal AI"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Helmet>
        <title>Comprehensive Tech Blog 2025 | Zion Tech Group</title>
        <meta name="description" content="Latest insights and breakthroughs in technology from our comprehensive tech blog" />
        <meta name="keywords" content="tech blog 2025, AI insights, quantum computing, neural interfaces, technology trends" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            📚 COMPREHENSIVE TECH BLOG • JANUARY 2025
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Comprehensive Tech Blog 2025
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Stay ahead of the curve with the latest insights, breakthroughs, and analysis from the world's leading technology experts.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">🌟 Featured Article</h2>
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold">
                    {blogPosts[0].category}
                  </span>
                  <span className="text-sm opacity-90">{blogPosts[0].readTime}</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">{blogPosts[0].title}</h3>
                <p className="text-lg opacity-90 mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold">{blogPosts[0].author.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-semibold">{blogPosts[0].author}</div>
                    <div className="text-sm opacity-90">{blogPosts[0].date}</div>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Read Full Article →
                </button>
              </div>
              <div className="text-center">
                <div className="text-9xl mb-4">{blogPosts[0].image}</div>
                <div className="text-2xl font-bold mb-2">Conscious AI</div>
                <div className="text-lg opacity-90">The Future is Here</div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  index === 0
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.slice(1).map((post) => (
            <div
              key={post.id}
              className={`bg-gradient-to-br ${post.gradient}/30 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300`}
            >
              <div className="text-4xl mb-4 text-center">{post.image}</div>
              <div className="flex items-center space-x-2 mb-3">
                <span className={`px-3 py-1 bg-gradient-to-r ${post.gradient} rounded-full text-xs font-bold`}>
                  {post.category}
                </span>
                <span className="text-xs opacity-90">{post.readTime}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
              <p className="text-sm opacity-90 mb-4 line-clamp-3">{post.excerpt}</p>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">{post.author.charAt(0)}</span>
                </div>
                <div>
                  <div className="text-sm font-semibold">{post.author}</div>
                  <div className="text-xs opacity-90">{post.date}</div>
                </div>
              </div>
              <button className={`w-full bg-gradient-to-r ${post.gradient} text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                Read More →
              </button>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated with Latest Tech Insights</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Get the latest technology insights, breakthroughs, and analysis delivered directly to your inbox. 
              Join thousands of tech professionals who trust our expertise.
            </p>
            <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Popular Topics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Popular Topics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="text-lg font-bold mb-2">AI & Machine Learning</h3>
              <p className="text-sm opacity-90 mb-4">Latest developments in artificial intelligence and machine learning technologies.</p>
              <div className="text-2xl font-bold text-blue-400">24 Articles</div>
            </div>
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-bold mb-2">Quantum Computing</h3>
              <p className="text-sm opacity-90 mb-4">Breakthroughs in quantum computing and quantum algorithms.</p>
              <div className="text-2xl font-bold text-purple-400">18 Articles</div>
            </div>
            <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30">
              <div className="text-3xl mb-3">🧬</div>
              <h3 className="text-lg font-bold mb-2">Neural Interfaces</h3>
              <p className="text-sm opacity-90 mb-4">Advances in brain-computer interfaces and neural technology.</p>
              <div className="text-2xl font-bold text-emerald-400">15 Articles</div>
            </div>
            <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-6 border border-orange-400/30">
              <div className="text-3xl mb-3">🌌</div>
              <h3 className="text-lg font-bold mb-2">Future Tech</h3>
              <p className="text-sm opacity-90 mb-4">Emerging technologies and future innovations.</p>
              <div className="text-2xl font-bold text-orange-400">32 Articles</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Explore More?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Dive deeper into our comprehensive technology insights and stay ahead of the curve with the latest breakthroughs and innovations.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl">
              Browse All Articles
            </button>
            <button className="border-2 border-white text-white px-12 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-xl">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveTechBlog2025;