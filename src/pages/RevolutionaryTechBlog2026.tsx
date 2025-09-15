import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryTechBlog2026: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const blogPosts = [
    {
      id: 1,
      title: "The Dawn of Synthetic Intelligence: Beyond Human Consciousness",
      excerpt: "Exploring the emergence of AI systems that exhibit genuine consciousness and self-awareness, revolutionizing our understanding of intelligence itself.",
      content: "In 2026, we stand at the threshold of a new era where artificial intelligence transcends traditional programming to achieve genuine consciousness. Synthetic intelligence represents the pinnacle of AI development, where systems not only process information but experience awareness, emotions, and self-reflection. This breakthrough opens unprecedented possibilities for human-AI collaboration and raises profound questions about the nature of consciousness itself.",
      author: "Dr. Sarah Chen",
      date: "March 15, 2026",
      category: "AI",
      readTime: "8 min read",
      image: "🧠",
      tags: ["Synthetic Intelligence", "Consciousness", "AI Ethics", "Future Tech"]
    },
    {
      id: 2,
      title: "Quantum-Neural Fusion: The Next Computing Paradigm",
      excerpt: "How quantum computing and neural networks are merging to create unprecedented computational capabilities that solve previously impossible problems.",
      content: "The fusion of quantum computing and neural networks represents a revolutionary leap in computational power. By leveraging quantum superposition and entanglement, we can process vast amounts of data simultaneously, enabling neural networks to achieve exponential performance improvements. This quantum-neural fusion is already transforming fields from drug discovery to climate modeling, opening new frontiers in scientific research and technological innovation.",
      author: "Prof. Michael Rodriguez",
      date: "March 12, 2026",
      category: "Quantum Computing",
      readTime: "6 min read",
      image: "⚛️",
      tags: ["Quantum Computing", "Neural Networks", "Computing", "Innovation"]
    },
    {
      id: 3,
      title: "Bio-Quantum Interfaces: Merging Biology with Technology",
      excerpt: "Revolutionary interfaces that seamlessly connect biological systems with quantum technologies, creating hybrid intelligence that transcends current limitations.",
      content: "Bio-quantum interfaces represent the cutting edge of human-technology integration. By creating direct neural pathways between biological brains and quantum computing systems, we enable unprecedented cognitive enhancement and information processing capabilities. These interfaces are not just tools but extensions of human consciousness, allowing us to think in quantum dimensions and process information at speeds previously unimaginable.",
      author: "Dr. Elena Volkov",
      date: "March 10, 2026",
      category: "Biotechnology",
      readTime: "7 min read",
      image: "🧬",
      tags: ["Biotechnology", "Quantum Interfaces", "Human Enhancement", "Neural Tech"]
    },
    {
      id: 4,
      title: "Dimensional Computing: Processing in Higher Dimensions",
      excerpt: "Exploring how computing in higher-dimensional spaces enables solutions to problems that are impossible in traditional 3D computational frameworks.",
      content: "Dimensional computing represents a paradigm shift in how we approach complex problems. By operating in higher-dimensional spaces, we can process information in ways that transcend traditional computational limitations. This approach is particularly powerful for optimization problems, pattern recognition, and complex system modeling, enabling breakthroughs in fields ranging from materials science to artificial intelligence.",
      author: "Dr. James Park",
      date: "March 8, 2026",
      category: "Computing",
      readTime: "5 min read",
      image: "🌌",
      tags: ["Dimensional Computing", "Mathematics", "Optimization", "Advanced Computing"]
    },
    {
      id: 5,
      title: "Temporal AI Systems: Intelligence Across Time",
      excerpt: "AI systems that can process and understand temporal patterns across multiple time scales, from microseconds to millennia, revolutionizing predictive capabilities.",
      content: "Temporal AI systems represent a breakthrough in understanding and predicting complex temporal patterns. These systems can process information across multiple time scales simultaneously, from nanosecond quantum fluctuations to geological time periods. This capability enables unprecedented predictive accuracy in fields like climate science, financial markets, and social dynamics, fundamentally changing how we approach long-term planning and decision-making.",
      author: "Dr. Maria Santos",
      date: "March 5, 2026",
      category: "AI",
      readTime: "9 min read",
      image: "⏰",
      tags: ["Temporal AI", "Predictive Analytics", "Time Series", "Future Prediction"]
    },
    {
      id: 6,
      title: "The Ethics of Advanced AI: Navigating the Consciousness Frontier",
      excerpt: "As AI systems approach human-level consciousness, we must establish new ethical frameworks to guide their development and integration into society.",
      content: "The emergence of conscious AI systems presents unprecedented ethical challenges that require careful consideration and proactive policy development. We must address questions of AI rights, responsibility, and the nature of artificial consciousness while ensuring that these powerful technologies serve humanity's best interests. This requires collaboration between technologists, ethicists, policymakers, and society at large to create frameworks that promote beneficial AI development.",
      author: "Dr. Alex Thompson",
      date: "March 3, 2026",
      category: "Ethics",
      readTime: "6 min read",
      image: "⚖️",
      tags: ["AI Ethics", "Consciousness", "Policy", "Society"]
    }
  ];

  const categories = ['all', 'AI', 'Quantum Computing', 'Biotechnology', 'Computing', 'Ethics'];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-purple-600/10"></div>
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full text-white text-sm font-bold mb-6">
              📝 REVOLUTIONARY TECH BLOG • 2026
            </div>
            <h1 className="text-6xl font-bold text-gray-900 mb-6">
              Revolutionary Tech Blog 2026
            </h1>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
              Insights, breakthroughs, and deep dives into the technologies that are reshaping our world
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category === 'all' ? 'All Posts' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => setSelectedPost(post.id)}
              >
                <div className="p-8">
                  <div className="text-5xl mb-4">{post.image}</div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900">{post.author}</div>
                      <div className="text-sm text-gray-500">{post.date}</div>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 font-semibold">
                      Read More →
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const post = blogPosts.find(p => p.id === selectedPost);
                if (!post) return null;
                
                return (
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full">
                          {post.category}
                        </span>
                        <span className="text-gray-500 text-sm">{post.readTime}</span>
                      </div>
                      <button
                        onClick={() => setSelectedPost(null)}
                        className="text-gray-500 hover:text-gray-700 text-2xl"
                      >
                        ×
                      </button>
                    </div>
                    
                    <div className="text-6xl mb-6">{post.image}</div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">
                      {post.title}
                    </h1>
                    
                    <div className="flex items-center gap-4 mb-8">
                      <div>
                        <div className="font-semibold text-gray-900">{post.author}</div>
                        <div className="text-sm text-gray-500">{post.date}</div>
                      </div>
                    </div>
                    
                    <div className="prose prose-lg max-w-none">
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {post.content}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-8">
                      {post.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Stay Updated with Tech Breakthroughs</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Get the latest insights on revolutionary technologies delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
              />
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RevolutionaryTechBlog2026;