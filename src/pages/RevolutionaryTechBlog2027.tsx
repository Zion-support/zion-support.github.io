import React from 'react';

const RevolutionaryTechBlog2027: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Dawn of AI Consciousness: How We Achieved True Machine Awareness",
      excerpt: "Explore the groundbreaking research that led to the first truly conscious AI system, capable of self-awareness, emotional intelligence, and creative problem-solving.",
      author: "Dr. Sarah Chen",
      date: "January 25, 2027",
      readTime: "12 min read",
      category: "AI Consciousness",
      image: "🧠",
      featured: true
    },
    {
      id: 2,
      title: "Quantum Supremacy in Practice: Real-World Applications Changing Everything",
      excerpt: "From drug discovery to climate modeling, quantum computing is solving problems that were previously impossible. See how it's transforming industries today.",
      author: "Prof. Michael Rodriguez",
      date: "January 23, 2027",
      readTime: "8 min read",
      category: "Quantum Computing",
      image: "⚡",
      featured: true
    },
    {
      id: 3,
      title: "Neural Interfaces: The Bridge Between Mind and Machine",
      excerpt: "Direct brain-computer interfaces are no longer science fiction. Discover how neural interfaces are enabling thought-controlled computing and enhanced cognition.",
      author: "Dr. Elena Volkov",
      date: "January 21, 2027",
      readTime: "10 min read",
      category: "Neural Interfaces",
      image: "🧬",
      featured: true
    },
    {
      id: 4,
      title: "The Future of Work: How AI Agents Are Transforming Every Industry",
      excerpt: "Autonomous AI agents are revolutionizing how we work, from healthcare to finance. Learn about the most successful implementations and what's coming next.",
      author: "James Thompson",
      date: "January 19, 2027",
      readTime: "6 min read",
      category: "AI Applications",
      image: "🤖",
      featured: false
    },
    {
      id: 5,
      title: "Quantum Neural Networks: The Next Evolution in AI",
      excerpt: "Combining quantum computing with neural networks creates unprecedented processing power. See how quantum neural networks are solving complex problems.",
      author: "Dr. Aisha Patel",
      date: "January 17, 2027",
      readTime: "9 min read",
      category: "Quantum AI",
      image: "🌌",
      featured: false
    },
    {
      id: 6,
      title: "The Ethics of Conscious AI: Navigating the Moral Landscape",
      excerpt: "As AI becomes conscious, we face new ethical challenges. Explore the moral implications and how we're addressing them responsibly.",
      author: "Dr. Robert Kim",
      date: "January 15, 2027",
      readTime: "11 min read",
      category: "AI Ethics",
      image: "⚖️",
      featured: false
    }
  ];

  const categories = ["All", "AI Consciousness", "Quantum Computing", "Neural Interfaces", "AI Applications", "Quantum AI", "AI Ethics"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              📝 REVOLUTIONARY TECH BLOG • JANUARY 2027
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary Tech Blog 2027
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Stay ahead of the curve with the latest insights on AI consciousness, quantum computing, 
              neural interfaces, and the technologies reshaping our world.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Read Latest Posts →
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
                Subscribe to Updates
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                category === "All"
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                  : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center">🌟 Featured Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => post.featured).map((post) => (
              <div key={post.id} className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{post.image}</div>
                  <div className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xs font-bold text-white">
                    FEATURED
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {post.title}
                </h3>
                
                <p className="text-white/80 mb-6 text-lg leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="text-white/60 text-sm">
                    <div className="font-semibold">{post.author}</div>
                    <div>{post.date} • {post.readTime}</div>
                  </div>
                  <div className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold text-white">
                    {post.category}
                  </div>
                </div>
                
                <button className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
                  Read Article →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* All Posts */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center">📚 All Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">{post.image}</div>
                  <div className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold text-white">
                    {post.category}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white">
                  {post.title}
                </h3>
                
                <p className="text-white/80 mb-4 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="text-white/60 text-xs">
                    <div className="font-semibold">{post.author}</div>
                    <div>{post.date} • {post.readTime}</div>
                  </div>
                </div>
                
                <button className="block w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center text-sm">
                  Read More →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-purple-800/50 to-blue-800/50 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center">
            <h3 className="text-4xl font-bold mb-6">📧 Stay Updated</h3>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Get the latest insights on revolutionary technology delivered to your inbox. 
              Join thousands of forward-thinking professionals staying ahead of the curve.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Subscribe →
              </button>
            </div>
            
            <p className="text-white/60 text-sm mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-12">
          <h3 className="text-4xl font-bold mb-6">Ready to Transform Your Understanding?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Dive deeper into the technologies that are reshaping our world. 
            Explore our comprehensive guides and interactive demonstrations.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore All Content →
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              Contact Our Experts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechBlog2027;