import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Clock, User, Tag, TrendingUp, Eye, Heart, Share2, BookOpen, Zap, Brain, Shield, Globe } from 'lucide-react';
import NewContentAdvertisingBanner2026 from '../components/NewContentAdvertisingBanner2026';
import EnhancedContentShowcase2026 from '../components/EnhancedContentShowcase2026';
import SEOContentOptimizer2026 from '../components/SEOContentOptimizer2026';
import { blogPosts } from '../data/blog-posts';

const RevolutionaryContentShowcase2026: React.FC = () => {
  const [featuredContent, setFeaturedContent] = useState<any[]>([]);
  const [stats, setStats] = useState({
    totalArticles: 0,
    totalWords: 0,
    totalCategories: 0,
    totalAuthors: 0
  });

  useEffect(() => {
    // Get featured content
    const featured = blogPosts.filter(post => post.featured).slice(0, 6);
    setFeaturedContent(featured);

    // Calculate stats
    const totalWords = blogPosts.reduce((acc, post) => acc + post.content.split(' ').length, 0);
    const categories = [...new Set(blogPosts.map(post => post.category))];
    const authors = [...new Set(blogPosts.map(post => post.author))];

    setStats({
      totalArticles: blogPosts.length,
      totalWords,
      totalCategories: categories.length,
      totalAuthors: authors.length
    });
  }, []);

  const contentCategories = [
    {
      name: "Healthcare AI",
      icon: <Zap className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      count: blogPosts.filter(p => p.category === "Healthcare AI").length,
      description: "Revolutionary AI applications in healthcare and medicine"
    },
    {
      name: "Quantum Computing",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      count: blogPosts.filter(p => p.category === "Quantum Computing").length,
      description: "Next-generation computing power and applications"
    },
    {
      name: "Neural Interfaces",
      icon: <Globe className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      count: blogPosts.filter(p => p.category === "Neural Interfaces").length,
      description: "Direct brain-computer interaction technology"
    },
    {
      name: "Cybersecurity",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-rose-500",
      count: blogPosts.filter(p => p.category === "Cybersecurity").length,
      description: "AI-powered security and threat protection"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <SEOContentOptimizer2026
        title="Revolutionary AI Content Collection 2026 - Latest Breakthroughs & Innovations"
        description="Explore groundbreaking AI content including healthcare breakthroughs, quantum computing, neural interfaces, autonomous systems, and cybersecurity innovations. Discover the future of technology with our comprehensive content collection."
        keywords={[
          "AI content 2026",
          "artificial intelligence",
          "quantum computing",
          "neural interfaces",
          "autonomous systems",
          "AI healthcare",
          "cybersecurity AI",
          "metaverse AI",
          "edge computing",
          "temporal AI",
          "breakthrough technology",
          "future tech",
          "AI innovation",
          "machine learning",
          "deep learning",
          "AI research",
          "technology trends",
          "digital transformation",
          "AI solutions",
          "tech insights"
        ]}
        canonicalUrl="https://your-domain.com/pages/RevolutionaryContentShowcase2026"
        ogImage="https://your-domain.com/images/og/revolutionary-content-showcase-2026.jpg"
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-medium mb-8"
            >
              <Star className="w-5 h-5 mr-2" />
              REVOLUTIONARY CONTENT COLLECTION 2026
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              The Future of
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI Content
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
            >
              Explore groundbreaking insights, revolutionary technologies, and cutting-edge AI solutions that are shaping the future of humanity
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stats.totalArticles}+</div>
                <div className="text-gray-300">Articles</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{Math.round(stats.totalWords / 1000)}K+</div>
                <div className="text-gray-300">Words</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stats.totalCategories}+</div>
                <div className="text-gray-300">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stats.totalAuthors}+</div>
                <div className="text-gray-300">Experts</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* New Content Banner */}
      <NewContentAdvertisingBanner2026 />

      {/* Content Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Content Categories
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Dive deep into specialized areas of AI and technology innovation
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contentCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900">{category.count}</span>
                  <span className="text-sm text-gray-500">Articles</span>
                </div>
                
                <div className="absolute top-4 right-4">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Content Showcase */}
      <section className="py-20 bg-gray-50">
        <EnhancedContentShowcase2026 
          contentItems={blogPosts}
          maxItems={9}
          showFilters={true}
          autoRotate={true}
        />
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Explore the Future?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 mb-8"
          >
            Join thousands of innovators, researchers, and technology leaders who are already exploring our revolutionary content
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group">
              <BookOpen className="w-5 h-5 mr-2" />
              Start Reading Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
              Subscribe to Updates
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RevolutionaryContentShowcase2026;
