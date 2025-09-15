import React from 'react';
import { Helmet } from 'react-helmet-async';

const ComprehensiveTechInsights2026: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Insights', icon: '🌟' },
    { id: 'ai', name: 'Artificial Intelligence', icon: '🤖' },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚛️' },
    { id: 'biotech', name: 'Biotechnology', icon: '🧬' },
    { id: 'space', name: 'Space Technology', icon: '🚀' },
    { id: 'neural', name: 'Neural Interfaces', icon: '🧠' }
  ];

  const insights = [
    {
      id: 1,
      title: "The Future of Synthetic Intelligence: Beyond Human Cognition",
      category: 'ai',
      author: "Dr. Sarah Chen",
      date: "January 15, 2026",
      readTime: "8 min read",
      excerpt: "Exploring how synthetic intelligence systems are developing consciousness-like capabilities that transcend traditional AI limitations, enabling unprecedented problem-solving and creative thinking.",
      content: "Synthetic Intelligence represents the next evolutionary step in artificial intelligence, moving beyond pattern recognition to genuine understanding and creativity. These systems demonstrate emergent behaviors that suggest a form of digital consciousness, capable of original thought and emotional processing...",
      tags: ["Synthetic Intelligence", "Consciousness", "AI Evolution", "Digital Cognition"],
      image: "🧠",
      featured: true
    },
    {
      id: 2,
      title: "Quantum Supremacy in Real-World Applications",
      category: 'quantum',
      author: "Prof. Michael Rodriguez",
      date: "January 12, 2026",
      readTime: "12 min read",
      excerpt: "How quantum computers are solving previously impossible problems in cryptography, drug discovery, and climate modeling, ushering in a new era of computational power.",
      content: "The achievement of quantum supremacy has opened doors to solving complex problems that were previously computationally intractable. From breaking encryption to simulating molecular interactions, quantum computers are revolutionizing multiple industries...",
      tags: ["Quantum Computing", "Cryptography", "Drug Discovery", "Climate Modeling"],
      image: "⚛️",
      featured: false
    },
    {
      id: 3,
      title: "Gene Editing Revolution: CRISPR 3.0 and Beyond",
      category: 'biotech',
      author: "Dr. Elena Petrov",
      date: "January 10, 2026",
      readTime: "10 min read",
      excerpt: "The latest advances in gene editing technology are enabling precise DNA modifications with unprecedented accuracy, opening new possibilities for treating genetic diseases.",
      content: "CRISPR 3.0 represents a quantum leap in gene editing precision, with error rates reduced to near-zero levels. This breakthrough enables safe and effective treatment of previously untreatable genetic conditions...",
      tags: ["Gene Editing", "CRISPR", "Genetic Medicine", "Precision Therapy"],
      image: "🧬",
      featured: true
    },
    {
      id: 4,
      title: "Mars Colonization: The First Permanent Settlement",
      category: 'space',
      author: "Commander Alex Kim",
      date: "January 8, 2026",
      readTime: "15 min read",
      excerpt: "An inside look at the technology and infrastructure being developed for humanity's first permanent settlement on Mars, including life support systems and terraforming initiatives.",
      content: "The Mars colonization project represents humanity's greatest engineering challenge. Advanced life support systems, closed-loop ecosystems, and terraforming technologies are being developed to create a sustainable human presence on the Red Planet...",
      tags: ["Mars Colonization", "Space Habitats", "Terraforming", "Life Support"],
      image: "🚀",
      featured: false
    },
    {
      id: 5,
      title: "Neural Interface Breakthrough: Direct Brain-Computer Communication",
      category: 'neural',
      author: "Dr. James Wilson",
      date: "January 5, 2026",
      readTime: "9 min read",
      excerpt: "Revolutionary neural interface technology enables direct communication between the human brain and computers, restoring mobility and communication for paralyzed patients.",
      content: "The latest neural interface technology represents a paradigm shift in human-computer interaction. By directly interfacing with the brain's neural networks, these systems can restore lost functions and enhance human capabilities...",
      tags: ["Neural Interfaces", "Brain-Computer Interface", "Medical Technology", "Human Enhancement"],
      image: "🧠",
      featured: true
    },
    {
      id: 6,
      title: "The Convergence of AI and Quantum Computing",
      category: 'ai',
      author: "Dr. Maria Santos",
      date: "January 3, 2026",
      readTime: "11 min read",
      excerpt: "How the combination of artificial intelligence and quantum computing is creating hybrid systems with unprecedented computational capabilities and problem-solving abilities.",
      content: "The convergence of AI and quantum computing represents a new frontier in computational science. These hybrid systems combine the pattern recognition capabilities of AI with the exponential processing power of quantum computers...",
      tags: ["AI", "Quantum Computing", "Hybrid Systems", "Computational Science"],
      image: "🤖",
      featured: false
    }
  ];

  const filteredInsights = selectedCategory === 'all' 
    ? insights 
    : insights.filter(insight => insight.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              📚 COMPREHENSIVE TECH INSIGHTS • 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Revolutionary Technology Insights
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Deep dive into the latest breakthroughs, innovations, and future trends 
              shaping the technological landscape of 2026 and beyond.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Explore Insights
              </button>
              <button className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300 font-semibold">
                Subscribe to Updates
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Featured Insights */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Insights</h2>
          <p className="text-xl opacity-90">Discover the most impactful technological breakthroughs</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredInsights.map((insight, index) => (
            <motion.article
              key={insight.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-gradient-to-br from-slate-800/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-500/30 hover:scale-105 transition-all duration-300 ${
                insight.featured ? 'ring-2 ring-blue-400/50' : ''
              }`}
            >
              {insight.featured && (
                <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-xs font-bold mb-4">
                  ⭐ FEATURED
                </div>
              )}
              
              <div className="text-6xl mb-4 text-center">{insight.image}</div>
              
              <h3 className="text-2xl font-bold mb-4 text-center">{insight.title}</h3>
              
              <div className="flex items-center justify-center space-x-4 mb-4 text-sm text-slate-400">
                <span>{insight.author}</span>
                <span>•</span>
                <span>{insight.date}</span>
                <span>•</span>
                <span>{insight.readTime}</span>
              </div>
              
              <p className="text-slate-300 mb-6 leading-relaxed">{insight.excerpt}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {insight.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Read Full Article →
              </button>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Technology Trends Section */}
      <div className="bg-gradient-to-r from-slate-800/30 to-gray-800/30 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Technology Trends 2026</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Key trends and predictions shaping the future of technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                trend: "AI-Human Collaboration",
                description: "Seamless integration of AI systems with human workflows",
                impact: "High",
                icon: "🤝"
              },
              {
                trend: "Quantum Internet",
                description: "Ultra-secure quantum communication networks",
                impact: "Medium",
                icon: "🌐"
              },
              {
                trend: "Synthetic Biology",
                description: "Engineering life forms for specific purposes",
                impact: "High",
                icon: "🧬"
              },
              {
                trend: "Space Economy",
                description: "Commercial activities in space and on other planets",
                impact: "Medium",
                icon: "🚀"
              }
            ].map((trend, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-700/50 to-gray-700/50 backdrop-blur-sm rounded-xl p-6 border border-slate-500/30 hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl mb-4 text-center">{trend.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-center">{trend.trend}</h3>
                <p className="text-slate-300 mb-4 text-center text-sm">{trend.description}</p>
                <div className="text-center">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    trend.impact === 'High' 
                      ? 'bg-red-500/20 text-red-400' 
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {trend.impact} Impact
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Stay Ahead of the Curve</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Get the latest insights and analysis on emerging technologies delivered to your inbox
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Subscribe to Newsletter
            </button>
            <button className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300 font-semibold text-lg">
              Follow on Social Media
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComprehensiveTechInsights2026;