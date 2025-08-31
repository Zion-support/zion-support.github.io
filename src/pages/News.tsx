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
  Globe,
  Award,
  Rocket,
  Brain,
  Shield,
  Building2,
  Handshake
} from 'lucide-react';

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All News', icon: Globe },
    { id: 'company', name: 'Company Updates', icon: Building2 },
    { id: 'technology', name: 'Technology', icon: Brain },
    { id: 'awards', name: 'Awards & Recognition', icon: Award },
    { id: 'partnerships', name: 'Partnerships', icon: Handshake },
    { id: 'product', name: 'Product Launches', icon: Rocket }
  ];

  const newsArticles = [
    {
      id: 1,
      title: 'Zion Tech Group Named AI Innovation Leader of the Year 2025',
      excerpt: 'We are thrilled to announce that Zion Tech Group has been recognized as the AI Innovation Leader of the Year at the prestigious Tech Innovation Awards 2025.',
      category: 'awards',
      author: 'Kleber Santos',
      date: '2025-01-15',
      readTime: '3 min read',
      image: '/news/award-2025.jpg',
      featured: true,
      tags: ['AI Innovation', 'Awards', 'Leadership']
    },
    {
      id: 2,
      title: 'Launch of Revolutionary AI Autonomous Business Operations Platform',
      excerpt: 'Introducing our latest breakthrough: an AI-powered platform that enables businesses to operate autonomously with unprecedented efficiency and intelligence.',
      category: 'product',
      author: 'Dr. Sarah Chen',
      date: '2025-01-10',
      readTime: '5 min read',
      image: '/news/ai-platform-launch.jpg',
      featured: true,
      tags: ['AI Platform', 'Product Launch', 'Innovation']
    },
    {
      id: 3,
      title: 'Strategic Partnership with Global Tech Consortium Announced',
      excerpt: 'Zion Tech Group joins forces with leading technology companies to accelerate the development of next-generation AI solutions.',
      category: 'partnerships',
      author: 'Michael Rodriguez',
      date: '2025-01-08',
      readTime: '4 min read',
      image: '/news/partnership-announcement.jpg',
      featured: false,
      tags: ['Partnerships', 'Collaboration', 'Global Tech']
    },
    {
      id: 4,
      title: 'Quantum Computing Breakthrough in AI Applications',
      excerpt: 'Our research team achieves significant milestone in quantum AI, opening new possibilities for solving complex business problems.',
      category: 'technology',
      author: 'Dr. Emily Watson',
      date: '2025-01-05',
      readTime: '6 min read',
      image: '/news/quantum-breakthrough.jpg',
      featured: false,
      tags: ['Quantum Computing', 'AI Research', 'Breakthrough']
    },
    {
      id: 5,
      title: 'Zion Tech Group Expands Global Operations to Asia-Pacific',
      excerpt: 'We are excited to announce the expansion of our operations into the Asia-Pacific region, bringing our innovative solutions to new markets.',
      category: 'company',
      author: 'Kleber Santos',
      date: '2025-01-03',
      readTime: '4 min read',
      image: '/news/asia-pacific-expansion.jpg',
      featured: false,
      tags: ['Global Expansion', 'Asia-Pacific', 'Growth']
    },
    {
      id: 6,
      title: 'New AI-Powered Cybersecurity Solutions for Enterprise',
      excerpt: 'Launching advanced cybersecurity solutions that leverage artificial intelligence to protect businesses from evolving threats.',
      category: 'product',
      author: 'Dr. Sarah Chen',
      date: '2024-12-28',
      readTime: '4 min read',
      image: '/news/cybersecurity-launch.jpg',
      featured: false,
      tags: ['Cybersecurity', 'AI Security', 'Enterprise']
    },
    {
      id: 7,
      title: 'Zion Tech Group Recognized in Forbes Technology Leaders List',
      excerpt: 'Our CEO Kleber Santos has been featured in Forbes\' prestigious list of technology leaders shaping the future of business.',
      category: 'awards',
      author: 'Press Team',
      date: '2024-12-20',
      readTime: '3 min read',
      image: '/news/forbes-recognition.jpg',
      featured: false,
      tags: ['Forbes', 'Leadership', 'Recognition']
    },
    {
      id: 8,
      title: 'Breakthrough in AI-Powered Supply Chain Optimization',
      excerpt: 'Our AI team develops revolutionary algorithms that can optimize complex supply chains in real-time.',
      category: 'technology',
      author: 'Dr. Emily Watson',
      date: '2024-12-15',
      readTime: '5 min read',
      image: '/news/supply-chain-ai.jpg',
      featured: false,
      tags: ['Supply Chain', 'AI Optimization', 'Innovation']
    }
  ];

  const filteredNews = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredArticles = newsArticles.filter(article => article.featured);
  const regularArticles = filteredNews.filter(article => !article.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-zion-slate-dark text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-zion-cyan mb-6">
              Latest News & Updates
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              Stay informed about the latest developments, innovations, and achievements at Zion Tech Group as we continue to push the boundaries of AI and technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-zion-slate-darker">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
              <input
                type="text"
                placeholder="Search news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zion-slate-dark border border-zion-purple/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-1 focus:ring-zion-cyan"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'border-zion-cyan bg-zion-cyan/20 text-zion-cyan'
                      : 'border-zion-purple/20 text-zion-slate-light hover:border-zion-cyan/40 hover:text-zion-cyan'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-zion-cyan mb-4">
                Featured Stories
              </h2>
              <p className="text-xl text-zion-slate-light">
                Top stories and important announcements from Zion Tech Group
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-darker rounded-2xl overflow-hidden border border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-xl hover:shadow-zion-cyan/10"
                >
                  <div className="h-48 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 flex items-center justify-center">
                    <Rocket className="w-16 h-16 text-zion-cyan" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-3">
                      <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full">
                        {categories.find(cat => cat.id === article.category)?.name}
                      </span>
                      <span className="text-zion-slate-light text-sm flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 hover:text-zion-cyan transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-zion-slate-light mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-zion-slate-light">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <span className="text-sm text-zion-slate-light">
                        {formatDate(article.date)}
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Articles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-slate-darker">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zion-cyan mb-4">
              Latest News
            </h2>
            <p className="text-xl text-zion-slate-light">
              Stay updated with our latest developments and industry insights
            </p>
          </motion.div>

          {regularArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark rounded-xl overflow-hidden border border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/10"
                >
                  <div className="h-40 bg-gradient-to-br from-zion-purple/20 to-zion-cyan/20 flex items-center justify-center">
                    <Brain className="w-12 h-12 text-zion-purple" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-3">
                      <span className="px-3 py-1 bg-zion-purple/20 text-zion-purple text-sm rounded-full">
                        {categories.find(cat => cat.id === article.category)?.name}
                      </span>
                      <span className="text-zion-slate-light text-sm flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 hover:text-zion-cyan transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-zion-slate-light mb-4 line-clamp-3 text-sm">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-zion-slate-light">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <span className="text-sm text-zion-slate-light">
                        {formatDate(article.date)}
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-zion-slate-light/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-zion-slate-light" />
              </div>
              <h3 className="text-xl font-semibold text-zion-slate-light mb-2">
                No news found
              </h3>
              <p className="text-zion-slate-light">
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zion-cyan mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Subscribe to our newsletter to receive the latest news, insights, and updates directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-zion-slate-dark border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-1 focus:ring-zion-cyan"
              />
              <button className="bg-zion-cyan hover:bg-zion-cyan/80 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
