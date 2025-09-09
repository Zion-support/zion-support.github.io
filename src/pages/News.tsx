import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  ArrowRight, 
  Search,
  Filter,
  TrendingUp,
  Lightbulb,
  Globe,
  Award,
  Rocket,
  Brain,
  Shield,
  Cloud,
  Zap
} from 'lucide-react';

const News: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All News', icon: Globe, count: 24 },
    { id: 'company', label: 'Company Updates', icon: Award, count: 8 },
    { id: 'technology', label: 'Technology Trends', icon: Brain, count: 6 },
    { id: 'ai-ml', label: 'AI & Machine Learning', icon: TrendingUp, count: 5 },
    { id: 'cybersecurity', label: 'Cybersecurity', icon: Shield, count: 3 },
    { id: 'quantum', label: 'Quantum Computing', icon: Rocket, count: 2 }
  ];

  const newsArticles = [
    {
      id: 1,
      title: 'Zion Tech Group Announces Breakthrough in Quantum Neural Networks',
      excerpt: 'Our research team has achieved a significant milestone in quantum computing, developing neural networks that operate 1000x faster than classical systems.',
      category: 'quantum',
      author: 'Dr. Sarah Chen',
      date: '2025-01-15',
      readTime: '5 min read',
      featured: true,
      tags: ['Quantum Computing', 'Neural Networks', 'Research', 'Innovation'],
      image: '🧠'
    },
    {
      id: 2,
      title: 'New AI-Powered Cybersecurity Platform Launches',
      excerpt: 'Zion Tech Group introduces advanced threat detection system using machine learning algorithms to prevent cyber attacks in real-time.',
      category: 'cybersecurity',
      author: 'Michael Rodriguez',
      date: '2025-01-12',
      readTime: '4 min read',
      featured: true,
      tags: ['Cybersecurity', 'AI', 'Threat Detection', 'Machine Learning'],
      image: '🔒'
    },
    {
      id: 3,
      title: 'Partnership with Global Tech Leaders Announced',
      excerpt: 'Strategic collaboration to accelerate digital transformation initiatives across multiple industries and geographies.',
      category: 'company',
      author: 'Jennifer Kim',
      date: '2025-01-10',
      readTime: '3 min read',
      featured: false,
      tags: ['Partnerships', 'Digital Transformation', 'Global Expansion'],
      image: '🤝'
    },
    {
      id: 4,
      title: 'Revolutionary Edge Computing Solution for IoT',
      excerpt: 'New edge computing platform enables real-time data processing for millions of IoT devices with minimal latency.',
      category: 'technology',
      author: 'David Thompson',
      date: '2025-01-08',
      readTime: '6 min read',
      featured: false,
      tags: ['Edge Computing', 'IoT', 'Real-time Processing', 'Technology'],
      image: '🌐'
    },
    {
      id: 5,
      title: 'AI Ethics Framework Released',
      excerpt: 'Comprehensive guidelines for responsible AI development and deployment, ensuring ethical considerations in all our solutions.',
      category: 'ai-ml',
      author: 'Dr. Emily Watson',
      date: '2025-01-05',
      readTime: '7 min read',
      featured: false,
      tags: ['AI Ethics', 'Responsible AI', 'Guidelines', 'Machine Learning'],
      image: '⚖️'
    },
    {
      id: 6,
      title: 'Cloud Infrastructure Optimization Breakthrough',
      excerpt: 'Advanced algorithms reduce cloud computing costs by 40% while improving performance and reliability.',
      category: 'technology',
      author: 'Alex Chen',
      date: '2025-01-03',
      readTime: '4 min read',
      featured: false,
      tags: ['Cloud Computing', 'Cost Optimization', 'Performance', 'Algorithms'],
      image: '☁️'
    },
    {
      id: 7,
      title: 'Healthcare AI Implementation Success Story',
      excerpt: 'How our AI diagnostic platform helped a major hospital network improve patient outcomes by 60%.',
      category: 'ai-ml',
      author: 'Dr. Robert Johnson',
      date: '2024-12-28',
      readTime: '8 min read',
      featured: false,
      tags: ['Healthcare AI', 'Case Study', 'Patient Outcomes', 'Diagnostics'],
      image: '🏥'
    },
    {
      id: 8,
      title: 'New Office Opening in Singapore',
      excerpt: 'Expanding our global presence to better serve clients in the Asia-Pacific region.',
      category: 'company',
      author: 'Lisa Wang',
      date: '2024-12-25',
      readTime: '2 min read',
      featured: false,
      tags: ['Global Expansion', 'Singapore', 'Asia-Pacific', 'Growth'],
      image: '🌏'
    },
    {
      id: 9,
      title: 'Blockchain Integration for Supply Chain',
      excerpt: 'Revolutionary blockchain solution provides transparent and secure tracking across complex supply chains.',
      category: 'technology',
      author: 'Mark Stevens',
      date: '2024-12-22',
      readTime: '5 min read',
      featured: false,
      tags: ['Blockchain', 'Supply Chain', 'Transparency', 'Security'],
      image: '⛓️'
    },
    {
      id: 10,
      title: 'Machine Learning Model Performance Breakthrough',
      excerpt: 'New training methodology improves ML model accuracy by 35% while reducing training time by 50%.',
      category: 'ai-ml',
      author: 'Dr. Carlos Mendez',
      date: '2024-12-20',
      readTime: '6 min read',
      featured: false,
      tags: ['Machine Learning', 'Model Training', 'Performance', 'Innovation'],
      image: '📊'
    },
    {
      id: 11,
      title: 'Zero-Trust Security Architecture Guide',
      excerpt: 'Comprehensive implementation guide for organizations looking to adopt zero-trust security principles.',
      category: 'cybersecurity',
      author: 'Rachel Green',
      date: '2024-12-18',
      readTime: '9 min read',
      featured: false,
      tags: ['Zero-Trust', 'Security', 'Implementation', 'Best Practices'],
      image: '🛡️'
    },
    {
      id: 12,
      title: 'Quantum-Safe Cryptography Standards',
      excerpt: 'Leading the development of post-quantum cryptography standards for future-proof security.',
      category: 'quantum',
      author: 'Dr. James Wilson',
      date: '2024-12-15',
      readTime: '7 min read',
      featured: false,
      tags: ['Quantum Cryptography', 'Security Standards', 'Future-Proof', 'Innovation'],
      image: '🔐'
    }
  ];

  const filteredArticles = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = activeCategory === 'all' || article.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticles = newsArticles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Latest News & Insights
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-zion-cyan/80 max-w-4xl mx-auto leading-relaxed"
          >
            Stay updated with the latest developments in AI, quantum computing, cybersecurity, 
            and technology innovation from Zion Tech Group and the industry.
          </motion.p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-cyan/60" />
              <input
                type="text"
                placeholder="Search news, articles, and insights..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-zion-slate/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl text-white placeholder-zion-cyan/60 focus:outline-none focus:border-zion-cyan/40 transition-all duration-300"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-zion-cyan text-zion-slate-dark'
                    : 'bg-zion-slate/30 text-zion-cyan hover:bg-zion-slate/50 border border-zion-cyan/20'
                }`}
              >
                <category.icon className="w-5 h-5" />
                {category.label}
                <span className="bg-zion-slate/20 text-zion-slate-dark px-2 py-1 rounded-full text-xs font-bold">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Featured Stories</h2>
              <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto">
                Highlighted articles showcasing our latest innovations and industry leadership.
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate/30 backdrop-blur-sm rounded-2xl p-8 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-zion-cyan/20 text-zion-cyan px-3 py-1 rounded-full text-sm font-medium">
                      {categories.find(cat => cat.id === article.category)?.label}
                    </span>
                    <span className="text-zion-cyan/60 text-sm">{article.readTime}</span>
                  </div>
                  
                  <div className="text-6xl mb-6">{article.image}</div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{article.title}</h3>
                  <p className="text-zion-cyan/80 text-lg leading-relaxed mb-6">{article.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {article.tags.map((tag, idx) => (
                      <span key={idx} className="bg-zion-slate/50 text-zion-cyan/80 px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-zion-cyan/20">
                    <div className="flex items-center gap-4 text-sm text-zion-cyan/60">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {article.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(article.date)}
                      </span>
                    </div>
                    <button className="text-zion-cyan hover:text-zion-cyan/80 font-medium flex items-center gap-2 transition-colors duration-300">
                      Read Full Article
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Articles Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Latest News</h2>
            <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto">
              Stay informed with our latest company updates, technology insights, and industry trends.
            </p>
          </motion.div>
          
          {regularArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate/30 backdrop-blur-sm rounded-2xl p-6 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-zion-cyan/20 text-zion-cyan px-3 py-1 rounded-full text-sm font-medium">
                      {categories.find(cat => cat.id === article.category)?.label}
                    </span>
                    <span className="text-zion-cyan/60 text-sm">{article.readTime}</span>
                  </div>
                  
                  <div className="text-4xl mb-4">{article.image}</div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{article.title}</h3>
                  <p className="text-zion-cyan/80 text-sm leading-relaxed mb-4">{article.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="bg-zion-slate/50 text-zion-cyan/80 px-2 py-1 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-zion-cyan/20">
                    <div className="text-xs text-zion-cyan/60">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {formatDate(article.date)}
                      </span>
                    </div>
                    <button className="text-zion-cyan hover:text-zion-cyan/80 font-medium flex items-center gap-1 transition-colors duration-300 text-sm">
                      Read More
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-zion-cyan/80 mb-2">No Articles Found</h3>
              <p className="text-zion-cyan/60">Try adjusting your search or filters to see more results.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-zion-slate/30 backdrop-blur-sm rounded-2xl p-12 border border-zion-cyan/20 text-center"
          >
            <div className="text-6xl mb-6">📧</div>
            <h2 className="text-4xl font-bold text-white mb-6">Stay Updated</h2>
            <p className="text-xl text-zion-cyan/80 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest insights, company updates, and technology trends delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-zion-slate/50 border border-zion-cyan/20 rounded-2xl text-white placeholder-zion-cyan/60 focus:outline-none focus:border-zion-cyan/40 transition-all duration-300"
              />
              <button className="bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark px-8 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default News;
