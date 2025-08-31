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
  BookOpen,
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
  MapPin
} from 'lucide-react';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', icon: BookOpen, count: 24 },
    { id: 'ai', name: 'Artificial Intelligence', icon: Brain, count: 8 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 6 },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, count: 5 },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, count: 3 },
    { id: 'sustainability', name: 'Sustainable Tech', icon: Leaf, count: 2 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: 2025 Trends and Predictions',
      excerpt: 'Discover how artificial intelligence is reshaping business operations and what to expect in the coming year.',
      content: 'Artificial intelligence continues to revolutionize how businesses operate, from customer service automation to predictive analytics...',
      author: 'Kleber Santos',
      authorRole: 'CEO & Founder',
      authorImage: '/team/kleber-santos.jpg',
      publishDate: '2025-01-15',
      readTime: '8 min read',
      category: 'ai',
      tags: ['AI', 'Business', 'Trends', '2025'],
      featured: true,
      image: '/blog/ai-business-trends-2025.jpg',
      views: 1247,
      likes: 89
    },
    {
      id: 2,
      title: 'Cybersecurity in the Age of AI: Threats and Solutions',
      excerpt: 'Explore the evolving cybersecurity landscape and how AI is both a threat and a solution.',
      content: 'As artificial intelligence becomes more sophisticated, cybersecurity threats are evolving at an unprecedented pace...',
      author: 'AI Research Team',
      authorRole: 'Security Specialists',
      authorImage: '/team/ai-team.jpg',
      publishDate: '2025-01-12',
      readTime: '12 min read',
      category: 'cybersecurity',
      tags: ['Cybersecurity', 'AI', 'Threats', 'Security'],
      featured: true,
      image: '/blog/ai-cybersecurity-threats.jpg',
      views: 2156,
      likes: 156
    },
    {
      id: 3,
      title: 'Quantum Computing: Breaking Down the Hype vs. Reality',
      excerpt: 'Separate fact from fiction in the quantum computing revolution and understand its real business applications.',
      content: 'Quantum computing has been hailed as the next technological revolution, but what does it really mean for businesses...',
      author: 'Quantum Research Team',
      authorRole: 'Quantum Specialists',
      authorImage: '/team/quantum-team.jpg',
      publishDate: '2025-01-10',
      readTime: '15 min read',
      category: 'quantum',
      tags: ['Quantum Computing', 'Technology', 'Innovation', 'Business'],
      featured: false,
      image: '/blog/quantum-computing-reality.jpg',
      views: 1893,
      likes: 134
    },
    {
      id: 4,
      title: 'Cloud-Native Development: Best Practices for 2025',
      excerpt: 'Learn the essential practices for building scalable, resilient cloud applications in the modern era.',
      content: 'Cloud-native development has become the standard for modern applications, but implementing it correctly requires...',
      author: 'DevOps Engineers',
      authorRole: 'Cloud Specialists',
      authorImage: '/team/devops-team.jpg',
      publishDate: '2025-01-08',
      readTime: '10 min read',
      category: 'cloud',
      tags: ['Cloud', 'DevOps', 'Best Practices', '2025'],
      featured: false,
      image: '/blog/cloud-native-best-practices.jpg',
      views: 1678,
      likes: 98
    },
    {
      id: 5,
      title: 'Sustainable Technology: Green Solutions for Business Growth',
      excerpt: 'How sustainable technology can drive business growth while reducing environmental impact.',
      content: 'Sustainability is no longer just a corporate responsibility—it\'s a business imperative that can drive growth...',
      author: 'Sustainability Team',
      authorRole: 'Green Tech Specialists',
      authorImage: '/team/sustainability-team.jpg',
      publishDate: '2025-01-05',
      readTime: '7 min read',
      category: 'sustainability',
      tags: ['Sustainability', 'Green Tech', 'Business Growth', 'Environment'],
      featured: false,
      image: '/blog/sustainable-technology-business.jpg',
      views: 1432,
      likes: 76
    },
    {
      id: 6,
      title: 'AI-Powered Customer Experience: The New Competitive Advantage',
      excerpt: 'Transform your customer experience with AI-driven personalization and automation.',
      content: 'Customer experience has become the primary differentiator in today\'s competitive market, and AI is the key...',
      author: 'AI Research Team',
      authorRole: 'AI Specialists',
      authorImage: '/team/ai-team.jpg',
      publishDate: '2025-01-03',
      readTime: '9 min read',
      category: 'ai',
      tags: ['AI', 'Customer Experience', 'Personalization', 'Automation'],
      featured: false,
      image: '/blog/ai-customer-experience.jpg',
      views: 1987,
      likes: 145
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Blog - Zion Tech Group"
        description="Stay updated with the latest insights on AI, cybersecurity, quantum computing, and technology trends. Expert analysis and industry insights from Zion Tech Group."
        keywords="technology blog, AI insights, cybersecurity trends, quantum computing, cloud development, sustainable technology, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4 mr-2" />
              Technology Insights
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Technology <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Insights</span> & Trends
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Stay ahead of the curve with expert analysis, industry insights, and cutting-edge technology trends 
              from our team of specialists and thought leaders.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles, topics, or authors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                      ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30'
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

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
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
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Featured</span> Articles
              </h2>
              <p className="text-lg text-gray-300">Must-read insights from our experts</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link to={`/blog/${post.id}`}>
                    <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                      <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                        <div className="text-center">
                          <BookOpen className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                          <p className="text-gray-400 text-sm">Featured Article</p>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                            {categories.find(c => c.id === post.category)?.name}
                          </span>
                          <span className="text-gray-400 text-sm">•</span>
                          <span className="text-gray-400 text-sm">{post.readTime}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-400 mb-4 leading-relaxed">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                              {post.author.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                              <div className="text-sm font-medium text-white">{post.author}</div>
                              <div className="text-xs text-gray-400">{post.authorRole}</div>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-4 text-gray-400 text-sm">
                            <div className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              {post.views}
                            </div>
                            <div className="flex items-center gap-1">
                              <Heart className="w-4 h-4" />
                              {post.likes}
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

      {/* Regular Posts */}
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
              Latest <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Articles</span>
            </h2>
            <p className="text-lg text-gray-300">Stay updated with the latest technology insights</p>
          </motion.div>

          {regularPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link to={`/blog/${post.id}`}>
                    <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 h-full">
                      <div className="aspect-video bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center">
                        <BookOpen className="w-12 h-12 text-gray-400" />
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                            {categories.find(c => c.id === post.category)?.name}
                          </span>
                          <span className="text-gray-400 text-sm">•</span>
                          <span className="text-gray-400 text-sm">{post.readTime}</span>
                        </div>
                        
                        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                              {post.author.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div className="text-xs text-gray-400">{post.author}</div>
                          </div>
                          
                          <div className="flex items-center gap-3 text-gray-400 text-xs">
                            <div className="flex items-center gap-1">
                              <Eye className="w-3 h-3" />
                              {post.views}
                            </div>
                            <div className="flex items-center gap-1">
                              <Heart className="w-3 h-3" />
                              {post.likes}
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
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-white mb-2">No articles found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-900/50 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Stay <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Updated</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Get the latest technology insights and industry trends delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </motion.div>
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
              Ready to <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let's discuss how our technology solutions can help you achieve your business goals and stay ahead of the competition.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center group"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link
                to="/services"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 inline-flex items-center group"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>+1 (302) 464-0950</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>Delaware, USA</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}