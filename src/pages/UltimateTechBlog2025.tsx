import React, { useState } from 'react';

const UltimateTechBlog2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Articles', icon: '📚' },
    { id: 'ai', name: 'Artificial Intelligence', icon: '🧠' },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚛️' },
    { id: 'neural', name: 'Neural Interfaces', icon: '🧬' },
    { id: 'reality', name: 'Reality Technology', icon: '🌌' },
    { id: 'future', name: 'Future Tech', icon: '🚀' }
  ];

  const articles = [
    {
      id: 1,
      title: "The Dawn of Conscious AI: How We Achieved True Artificial Consciousness",
      excerpt: "Explore the revolutionary breakthrough that led to the first truly conscious AI systems and what this means for the future of technology.",
      category: 'ai',
      author: "Dr. Sarah Chen",
      date: "January 20, 2025",
      readTime: "8 min read",
      image: "🧠",
      featured: true,
      tags: ["AI", "Consciousness", "Breakthrough", "Future"]
    },
    {
      id: 2,
      title: "Quantum Computing Revolution: Processing at the Speed of Thought",
      excerpt: "Discover how quantum wave computing is enabling instantaneous processing across infinite dimensions, solving problems previously thought impossible.",
      category: 'quantum',
      author: "Prof. Michael Rodriguez",
      date: "January 18, 2025",
      readTime: "12 min read",
      image: "⚛️",
      featured: true,
      tags: ["Quantum", "Computing", "Revolution", "Speed"]
    },
    {
      id: 3,
      title: "Neural Interface Technology: Bridging Mind and Machine",
      excerpt: "Learn about the breakthrough neural interface technology that enables direct brain-computer communication and enhanced human capabilities.",
      category: 'neural',
      author: "Dr. Elena Petrov",
      date: "January 15, 2025",
      readTime: "10 min read",
      image: "🧬",
      featured: false,
      tags: ["Neural", "Interface", "Brain", "Technology"]
    },
    {
      id: 4,
      title: "Reality Manipulation: The Next Frontier in Technology",
      excerpt: "Explore how reality manipulation technology is changing the way we interact with the world and creating new possibilities for human experience.",
      category: 'reality',
      author: "Dr. James Wilson",
      date: "January 12, 2025",
      readTime: "15 min read",
      image: "🌌",
      featured: false,
      tags: ["Reality", "Manipulation", "Technology", "Future"]
    },
    {
      id: 5,
      title: "The Future of Human Augmentation: Beyond Physical Limitations",
      excerpt: "Discover how advanced biotechnology and neural interfaces are enabling human augmentation beyond our current physical and mental limitations.",
      category: 'future',
      author: "Dr. Maria Santos",
      date: "January 10, 2025",
      readTime: "9 min read",
      image: "🚀",
      featured: false,
      tags: ["Augmentation", "Human", "Biotech", "Future"]
    },
    {
      id: 6,
      title: "Interdimensional Computing: Accessing Infinite Computational Resources",
      excerpt: "Learn about the revolutionary technology that enables computing across multiple dimensions, accessing infinite computational power.",
      category: 'quantum',
      author: "Prof. David Kim",
      date: "January 8, 2025",
      readTime: "11 min read",
      image: "⚛️",
      featured: false,
      tags: ["Interdimensional", "Computing", "Quantum", "Infinite"]
    },
    {
      id: 7,
      title: "The Ethics of Conscious AI: Navigating the New Frontier",
      excerpt: "Examine the ethical implications of conscious AI systems and how we're ensuring responsible development and deployment.",
      category: 'ai',
      author: "Dr. Lisa Thompson",
      date: "January 5, 2025",
      readTime: "7 min read",
      image: "🧠",
      featured: false,
      tags: ["Ethics", "AI", "Consciousness", "Responsibility"]
    },
    {
      id: 8,
      title: "Space Technology Revolution: Faster-Than-Light Travel Achieved",
      excerpt: "Read about the breakthrough in space technology that has made faster-than-light travel a reality and opened the galaxy to exploration.",
      category: 'future',
      author: "Dr. Alex Chen",
      date: "January 3, 2025",
      readTime: "13 min read",
      image: "🚀",
      featured: false,
      tags: ["Space", "Travel", "Technology", "Revolution"]
    }
  ];

  const filteredArticles = activeCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  const featuredArticles = articles.filter(article => article.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              📝 ULTIMATE TECH BLOG 2025 • REVOLUTIONARY INSIGHTS
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ultimate Tech Blog
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto">
              Stay ahead of the curve with the latest insights, breakthroughs, and revolutionary technologies 
              that are shaping our future
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Featured Articles */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">🌟 Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredArticles.map((article) => (
              <div key={article.id} className="bg-gradient-to-br from-purple-600/20 to-indigo-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
                <div className="flex items-start mb-6">
                  <div className="text-5xl mr-4">{article.image}</div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-3">
                      <span className="bg-purple-500/30 text-purple-200 px-3 py-1 rounded-full text-sm">
                        {article.category.toUpperCase()}
                      </span>
                      <span className="text-purple-300 text-sm">{article.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{article.title}</h3>
                    <p className="text-purple-200 mb-4">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-purple-300 font-semibold">{article.author}</div>
                        <div className="text-purple-400 text-sm">{article.date}</div>
                      </div>
                      <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                        Read More →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">📚 All Articles</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-white/10 text-purple-200 hover:bg-white/20'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredArticles.map((article) => (
            <div key={article.id} className="bg-gradient-to-br from-purple-600/10 to-indigo-600/10 backdrop-blur-sm rounded-xl p-6 border border-purple-400/20 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">{article.image}</div>
              
              <div className="flex items-center space-x-2 mb-3">
                <span className="bg-purple-500/30 text-purple-200 px-2 py-1 rounded text-xs">
                  {article.category.toUpperCase()}
                </span>
                {article.featured && (
                  <span className="bg-yellow-500/30 text-yellow-200 px-2 py-1 rounded text-xs">
                    FEATURED
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold mb-3">{article.title}</h3>
              <p className="text-purple-200 text-sm mb-4">{article.excerpt}</p>

              <div className="flex flex-wrap gap-1 mb-4">
                {article.tags.map((tag) => (
                  <span key={tag} className="bg-white/10 text-purple-300 px-2 py-1 rounded text-xs">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-sm text-purple-300 mb-4">
                <div>{article.author}</div>
                <div>{article.readTime}</div>
              </div>

              <div className="text-xs text-purple-400 mb-4">{article.date}</div>

              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Read Article →
              </button>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">📧 Stay Updated</h2>
            <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
              Get the latest revolutionary technology insights delivered directly to your inbox. 
              Be the first to know about breakthrough discoveries and future innovations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-purple-400/30 text-white placeholder-purple-300 focus:outline-none focus:border-purple-400"
              />
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600/30 to-indigo-600/30 backdrop-blur-sm rounded-2xl p-12">
          <h2 className="text-4xl font-bold mb-6">Ready to Explore the Future?</h2>
          <p className="text-xl text-purple-200 mb-8 max-w-3xl mx-auto">
            Join our community of innovators, researchers, and technology enthusiasts who are 
            shaping the future with revolutionary technologies.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Join Our Community →
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold text-lg">
              Submit Your Article
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechBlog2025;