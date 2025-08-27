import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  Zap,
  Brain,
  Cloud,
  Shield,
  Rocket,
  Atom,
  Globe,
  Award,
  Users,
  Building,
  Code,
  Database
} from 'lucide-react';
import { SEO } from '@/components/SEO';

interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
  readTime: number;
}

const News: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('latest');

  const categories = [
    { id: 'all', name: 'All News', icon: Globe, count: 0 },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, count: 0 },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, count: 0 },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, count: 0 },
    { id: 'security', name: 'Cybersecurity', icon: Shield, count: 0 },
    { id: 'innovation', name: 'Innovation', icon: Rocket, count: 0 },
    { id: 'company', name: 'Company Updates', icon: Building, count: 0 },
    { id: 'technology', name: 'Technology Trends', icon: Code, count: 0 }
  ];

  const newsArticles: NewsArticle[] = [
    {
      id: '1',
      title: 'Zion Tech Group Launches Revolutionary AI-Powered Quantum Computing Platform',
      excerpt: 'Our latest breakthrough combines artificial intelligence with quantum computing to solve previously unsolvable problems in cryptography, drug discovery, and financial modeling.',
      content: 'Full article content would go here...',
      author: 'Dr. Sarah Chen',
      date: '2024-08-27',
      category: 'ai',
      tags: ['AI', 'Quantum Computing', 'Innovation', 'Platform Launch'],
      image: '/images/news/ai-quantum-platform.jpg',
      featured: true,
      readTime: 8
    },
    {
      id: '2',
      title: 'New Micro SaaS Solutions Transforming Small Business Operations',
      excerpt: 'Discover how our innovative micro SaaS platform is helping small businesses compete with enterprise-level tools at a fraction of the cost.',
      content: 'Full article content would go here...',
      author: 'Michael Rodriguez',
      date: '2024-08-25',
      category: 'innovation',
      tags: ['Micro SaaS', 'Small Business', 'Digital Transformation'],
      image: '/images/news/micro-saas-solutions.jpg',
      featured: true,
      readTime: 6
    },
    {
      id: '3',
      title: 'Cybersecurity Breakthrough: AI-Powered Threat Detection Achieves 99.9% Accuracy',
      excerpt: 'Our advanced AI cybersecurity platform has achieved unprecedented accuracy in threat detection, setting new industry standards for enterprise security.',
      content: 'Full article content would go here...',
      author: 'Alex Thompson',
      date: '2024-08-23',
      category: 'security',
      tags: ['Cybersecurity', 'AI', 'Threat Detection', 'Enterprise Security'],
      image: '/images/news/ai-cybersecurity.jpg',
      featured: false,
      readTime: 7
    },
    {
      id: '4',
      title: 'Zion Tech Group Named Top 10 AI Companies by TechCrunch',
      excerpt: 'Recognition of our innovative AI solutions and commitment to pushing the boundaries of what\'s possible in artificial intelligence.',
      content: 'Full article content would go here...',
      author: 'Press Team',
      date: '2024-08-21',
      category: 'company',
      tags: ['Awards', 'Recognition', 'AI Leadership', 'Company News'],
      image: '/images/news/techcrunch-award.jpg',
      featured: false,
      readTime: 4
    },
    {
      id: '5',
      title: 'The Future of Edge Computing: IoT Solutions for Smart Cities',
      excerpt: 'Exploring how edge computing and IoT technologies are revolutionizing urban infrastructure and creating more sustainable, efficient cities.',
      content: 'Full article content would go here...',
      author: 'Dr. Emily Watson',
      date: '2024-08-19',
      category: 'technology',
      tags: ['Edge Computing', 'IoT', 'Smart Cities', 'Urban Technology'],
      image: '/images/news/edge-computing-iot.jpg',
      featured: false,
      readTime: 9
    },
    {
      id: '6',
      title: 'Quantum Machine Learning: The Next Frontier in AI',
      excerpt: 'How quantum computing is revolutionizing machine learning algorithms and opening new possibilities for AI applications.',
      content: 'Full article content would go here...',
      author: 'Dr. James Kim',
      date: '2024-08-17',
      category: 'quantum',
      tags: ['Quantum Computing', 'Machine Learning', 'AI', 'Research'],
      image: '/images/news/quantum-ml.jpg',
      featured: false,
      readTime: 10
    },
    {
      id: '7',
      title: 'Cloud FinOps: Optimizing Cloud Costs with AI',
      excerpt: 'Learn how our AI-powered FinOps solutions are helping enterprises reduce cloud costs by up to 40% while improving performance.',
      content: 'Full article content would go here...',
      author: 'Lisa Chang',
      date: '2024-08-15',
      category: 'cloud',
      tags: ['Cloud Computing', 'FinOps', 'Cost Optimization', 'AI'],
      image: '/images/news/cloud-finops.jpg',
      featured: false,
      readTime: 6
    },
    {
      id: '8',
      title: 'Digital Twin Technology: Revolutionizing Manufacturing and Healthcare',
      excerpt: 'Exploring the applications of digital twin technology across industries and how it\'s improving efficiency and outcomes.',
      content: 'Full article content would go here...',
      author: 'Robert Davis',
      date: '2024-08-13',
      category: 'innovation',
      tags: ['Digital Twin', 'Manufacturing', 'Healthcare', 'Innovation'],
      image: '/images/news/digital-twin.jpg',
      featured: false,
      readTime: 8
    }
  ];

  // Update category counts
  categories.forEach(category => {
    if (category.id === 'all') {
      category.count = newsArticles.length;
    } else {
      category.count = newsArticles.filter(article => article.category === category.id).length;
    }
  });

  const filteredArticles = newsArticles
    .filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === 'latest') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else if (sortBy === 'oldest') {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      } else if (sortBy === 'readTime') {
        return a.readTime - b.readTime;
      }
      return 0;
    });

  const featuredArticles = newsArticles.filter(article => article.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO 
        title="News & Updates - Zion Tech Group"
        description="Stay updated with the latest news, innovations, and insights from Zion Tech Group. Discover breakthroughs in AI, quantum computing, and emerging technologies."
        keywords="AI news, quantum computing updates, technology trends, Zion Tech Group news, AI innovations"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Latest News &
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Updates
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay informed about the latest breakthroughs in AI, quantum computing, and emerging technologies. 
              Discover how Zion Tech Group is shaping the future of technology.
            </p>
          </motion.div>

          {/* Search and Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-6">
              <div className="flex flex-col lg:flex-row gap-4">
                {/* Search */}
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search news and articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-cyan-400/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300"
                  />
                </div>

                {/* Category Filter */}
                <div className="flex-shrink-0">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-cyan-400/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id} className="bg-zion-slate-dark text-white">
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort */}
                <div className="flex-shrink-0">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-cyan-400/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300"
                  >
                    <option value="latest" className="bg-zion-slate-dark text-white">Latest First</option>
                    <option value="oldest" className="bg-zion-slate-dark text-white">Oldest First</option>
                    <option value="readTime" className="bg-zion-slate-dark text-white">Quick Reads</option>
                  </select>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5" />
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Don't miss our most important updates and breakthrough announcements
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl overflow-hidden hover:border-cyan-400/40 transition-all duration-300 group"
                >
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <div className="text-6xl text-cyan-400/40">
                      {article.category === 'ai' && <Brain />}
                      {article.category === 'quantum' && <Atom />}
                      {article.category === 'cloud' && <Cloud />}
                      {article.category === 'security' && <Shield />}
                      {article.category === 'innovation' && <Rocket />}
                      {article.category === 'company' && <Building />}
                      {article.category === 'technology' && <Code />}
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(article.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {article.readTime} min read
                      </span>
                      <span className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        {article.author}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {article.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-sm rounded-full border border-cyan-400/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <Link
                        to={`/news/${article.id}`}
                        className="flex items-center text-cyan-400 hover:text-white transition-colors duration-300 group"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All News Articles */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Latest News
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Stay updated with all our latest news, insights, and technology updates
            </p>
          </motion.div>

          {filteredArticles.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl text-gray-400 mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No articles found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-xl overflow-hidden hover:border-cyan-400/40 transition-all duration-300 group"
                >
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <div className="text-4xl text-cyan-400/40">
                      {article.category === 'ai' && <Brain />}
                      {article.category === 'quantum' && <Atom />}
                      {article.category === 'cloud' && <Cloud />}
                      {article.category === 'security' && <Shield />}
                      {article.category === 'innovation' && <Rocket />}
                      {article.category === 'company' && <Building />}
                      {article.category === 'technology' && <Code />}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(article.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.readTime} min
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {article.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full border border-cyan-400/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <Link
                        to={`/news/${article.id}`}
                        className="flex items-center text-cyan-400 hover:text-white transition-colors duration-300 text-sm"
                      >
                        Read
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated with Zion Tech Group
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the latest news, insights, and technology updates delivered directly to your inbox. 
              Never miss a breakthrough or innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white/10 backdrop-blur-sm border border-cyan-400/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
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
