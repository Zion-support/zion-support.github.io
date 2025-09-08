import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import {
  Search,
  Filter,
  Calendar,
  Clock,
  User,
  Tag,
  ArrowRight,
  Newspaper,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Atom,
  Leaf,
  TrendingUp,
  Lightbulb,
  Code,
  Server,
  Eye,
  Heart,
  Share2,
  ChevronLeft,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Award,
  Users,
  Globe,
  Zap,
  Target,
  CheckCircle
} from 'lucide-react';

export default function News() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All News', icon: Newspaper, count: 32 },
    { id: 'company', name: 'Company News', icon: Users, count: 12 },
    { id: 'industry', name: 'Industry Updates', icon: Globe, count: 8 },
    { id: 'awards', name: 'Awards & Recognition', icon: Award, count: 6 },
    { id: 'partnerships', name: 'Partnerships', icon: Handshake, count: 4 },
    { id: 'technology', name: 'Technology', icon: Code, count: 2 }
  ];

  const newsItems = [
    {
      id: 1,
      title: 'Zion Tech Group Named Top AI Company of 2025 by TechInsights',
      excerpt: 'Leading technology publication recognizes Zion Tech Group for innovative AI solutions and industry leadership.',
      content: 'Zion Tech Group has been recognized as the Top AI Company of 2025 by TechInsights, a leading technology publication...',
      author: 'Press Team',
      authorRole: 'Communications',
      publishDate: '2025-01-20',
      readTime: '5 min read',
      category: 'awards',
      tags: ['Awards', 'Recognition', 'AI Leadership', '2025'],
      featured: true,
      image: '/news/award-2025.jpg',
      views: 2156,
      likes: 189,
      external: false
    },
    {
      id: 2,
      title: 'Zion Tech Group Partners with Global Healthcare Consortium',
      excerpt: 'Strategic partnership to deliver AI-powered healthcare solutions across 25 countries.',
      content: 'Zion Tech Group has announced a strategic partnership with the Global Healthcare Consortium to deliver AI-powered...',
      author: 'Business Development',
      authorRole: 'Partnerships',
      publishDate: '2025-01-18',
      readTime: '7 min read',
      category: 'partnerships',
      tags: ['Partnership', 'Healthcare', 'Global', 'AI Solutions'],
      featured: true,
      image: '/news/healthcare-partnership.jpg',
      views: 1893,
      likes: 156,
      external: false
    },
    {
      id: 3,
      title: 'New Quantum Computing Research Lab Opens in Delaware',
      excerpt: 'State-of-the-art facility to advance quantum computing research and development.',
      content: 'Zion Tech Group has opened a new state-of-the-art quantum computing research laboratory in Delaware...',
      author: 'Research Team',
      authorRole: 'Quantum Research',
      publishDate: '2025-01-15',
      readTime: '6 min read',
      category: 'company',
      tags: ['Quantum Computing', 'Research', 'Delaware', 'Innovation'],
      featured: false,
      image: '/news/quantum-lab.jpg',
      views: 1678,
      likes: 134,
      external: false
    },
    {
      id: 4,
      title: 'AI Ethics Framework Launched for Responsible Technology Development',
      excerpt: 'New framework ensures AI development aligns with ethical principles and human values.',
      content: 'Zion Tech Group has launched a comprehensive AI Ethics Framework to guide responsible artificial intelligence...',
      author: 'AI Ethics Team',
      authorRole: 'AI Governance',
      publishDate: '2025-01-12',
      readTime: '8 min read',
      category: 'technology',
      tags: ['AI Ethics', 'Responsible AI', 'Governance', 'Framework'],
      featured: false,
      image: '/news/ai-ethics.jpg',
      views: 1432,
      likes: 98,
      external: false
    },
    {
      id: 5,
      title: 'Zion Tech Group Expands European Operations',
      excerpt: 'New office in Berlin to serve growing European market demand.',
      content: 'Zion Tech Group has announced the expansion of its European operations with the opening of a new office...',
      author: 'International Team',
      authorRole: 'Global Expansion',
      publishDate: '2025-01-10',
      readTime: '4 min read',
      category: 'company',
      tags: ['Expansion', 'Europe', 'Berlin', 'Global Growth'],
      featured: false,
      image: '/news/europe-expansion.jpg',
      views: 1987,
      likes: 145,
      external: false
    },
    {
      id: 6,
      title: 'Sustainable Technology Initiative Launched',
      excerpt: 'Commitment to carbon-neutral operations and green technology solutions.',
      content: 'Zion Tech Group has launched a comprehensive Sustainable Technology Initiative, committing to carbon-neutral...',
      author: 'Sustainability Team',
      authorRole: 'Green Technology',
      publishDate: '2025-01-08',
      readTime: '6 min read',
      category: 'company',
      tags: ['Sustainability', 'Green Tech', 'Carbon Neutral', 'Environment'],
      featured: false,
      image: '/news/sustainability-initiative.jpg',
      views: 1765,
      likes: 123,
      external: false
    }
  ];

  const industryNews = [
    {
      id: 'ind1',
      title: 'AI Regulation Framework Announced by Global Tech Council',
      source: 'TechCrunch',
      date: '2025-01-19',
      category: 'industry',
      external: true,
      url: 'https://techcrunch.com/ai-regulation-2025'
    },
    {
      id: 'ind2',
      title: 'Quantum Computing Breakthrough in Cryptography',
      source: 'Nature',
      date: '2025-01-17',
      category: 'industry',
      external: true,
      url: 'https://nature.com/quantum-crypto-2025'
    },
    {
      id: 'ind3',
      title: 'Cybersecurity Threats Increase 300% in 2024',
      source: 'Security Weekly',
      date: '2025-01-16',
      category: 'industry',
      external: true,
      url: 'https://securityweekly.com/threats-2024'
    }
  ];

  const filteredNews = newsItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredNews = newsItems.filter(item => item.featured);
  const regularNews = filteredNews.filter(item => !item.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="News - Zion Tech Group"
        description="Stay updated with the latest company news, industry updates, awards, and partnerships from Zion Tech Group. Read about our innovations and achievements."
        keywords="company news, industry updates, awards, partnerships, press releases, Zion Tech Group, technology news"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm font-medium mb-6">
              <Newspaper className="w-4 h-4 mr-2" />
              Latest News & Updates
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Stay <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Informed</span> with Zion Tech Group
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Get the latest updates on company news, industry insights, awards, partnerships, and technological innovations 
              from Zion Tech Group and the broader technology landscape.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search news, topics, or categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                  <span className="ml-1 text-xs opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews.length > 0 && (
        <section className="py-16 relative z-10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Featured</span> News
              </h2>
              <p className="text-lg text-gray-300">Top stories and announcements</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredNews.map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link to={`/news/${item.id}`}>
                    <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                      <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center">
                        <div className="text-center">
                          <Newspaper className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                          <p className="text-gray-400 text-sm">Featured News</p>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full">
                            {categories.find(c => c.id === item.category)?.name}
                          </span>
                          <span className="text-gray-400 text-sm">•</span>
                          <span className="text-gray-400 text-sm">{item.readTime}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                          {item.title}
                        </h3>
                        
                        <p className="text-gray-400 mb-4 leading-relaxed">
                          {item.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                              {item.author.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                              <div className="text-sm font-medium text-white">{item.author}</div>
                              <div className="text-xs text-gray-400">{item.authorRole}</div>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-4 text-gray-400 text-sm">
                            <div className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              {item.views}
                            </div>
                            <div className="flex items-center gap-1">
                              <Heart className="w-4 h-4" />
                              {item.likes}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Industry News Section */}
      <section className="py-16 bg-gradient-to-r from-slate-800/50 to-slate-900/50 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Industry <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Updates</span>
            </h2>
            <p className="text-lg text-gray-300">Latest developments from the technology world</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industryNews.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 h-full">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full">
                        {item.category}
                      </span>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>{item.source}</span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regular News */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Latest <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Updates</span>
            </h2>
            <p className="text-lg text-gray-300">Company news and announcements</p>
          </motion.div>

          {regularNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularNews.map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link to={`/news/${item.id}`}>
                    <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:scale-105 h-full">
                      <div className="aspect-video bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center">
                        <Newspaper className="w-12 h-12 text-gray-400" />
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full">
                            {categories.find(c => c.id === item.category)?.name}
                          </span>
                          <span className="text-gray-400 text-sm">•</span>
                          <span className="text-gray-400 text-sm">{item.readTime}</span>
                        </div>
                        
                        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                          {item.title}
                        </h3>
                        
                        <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                          {item.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                              {item.author.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div className="text-xs text-gray-400">{item.author}</div>
                          </div>
                          
                          <div className="flex items-center gap-3 text-gray-400 text-xs">
                            <div className="flex items-center gap-1">
                              <Eye className="w-3 h-3" />
                              {item.views}
                            </div>
                            <div className="flex items-center gap-1">
                              <Heart className="w-3 h-3" />
                              {item.likes}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Newspaper className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-white mb-2">No news found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let's discuss how our technology solutions can help you achieve your business goals and stay ahead of the competition.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center group"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link
                to="/services"
                className="px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 inline-flex items-center group"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>+1 (302) 464-0950</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Delaware, USA</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}