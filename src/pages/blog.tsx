import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  Search, 
  Filter, 
  Calendar, 
  User, 
  Clock, 
  ArrowRight, 
  ChevronDown, 
  Brain, 
  Cpu, 
  Database, 
  Network, 
  Shield, 
  Rocket, 
  Users, 
  BarChart3, 
  Code, 
  Server, 
  Chip, 
  Globe, 
  Zap, 
  Lock, 
  ShieldCheck,
  TrendingUp,
  CheckCircle,
  Target,
  Handshake,
  Lightbulb,
  Atom,
  Cloud,
  Smartphone,
  Building,
  Heart,
  ShoppingCart,
  Eye,
  PenTool,
  Leaf,
  Satellite,
  FileText,
  Sparkles,
  Tag,
  BookOpen,
  MessageCircle
} from 'lucide-react';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Posts', icon: BookOpen, count: 24 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 8 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 6 },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, count: 5 },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, count: 3 },
    { id: 'iot', name: 'IoT & Edge Computing', icon: Cpu, count: 4 },
    { id: 'blockchain', name: 'Blockchain & Web3', icon: Database, count: 3 },
    { id: 'industry', name: 'Industry Insights', icon: Building, count: 5 }
  ];

  const featuredPosts = [
    {
      id: 1,
      title: 'The Future of AI in Healthcare: Transforming Patient Care',
      excerpt: 'Discover how artificial intelligence is revolutionizing healthcare delivery, from diagnostic accuracy to personalized treatment plans.',
      category: 'ai-ml',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      views: '2.4k',
      image: '/images/blog/ai-healthcare.jpg',
      tags: ['AI', 'Healthcare', 'Machine Learning', 'Digital Health'],
      featured: true
    },
    {
      id: 2,
      title: 'Zero Trust Security: The New Standard for Enterprise Protection',
      excerpt: 'Learn why Zero Trust architecture is becoming essential for modern organizations and how to implement it effectively.',
      category: 'cybersecurity',
      author: 'Michael Rodriguez',
      date: '2024-01-12',
      readTime: '6 min read',
      views: '1.8k',
      image: '/images/blog/zero-trust.jpg',
      tags: ['Cybersecurity', 'Zero Trust', 'Enterprise Security', 'Compliance'],
      featured: true
    },
    {
      id: 3,
      title: 'Quantum Computing: Breaking Down the Hype vs. Reality',
      excerpt: 'Separate fact from fiction in the quantum computing landscape and understand what\'s possible today vs. tomorrow.',
      category: 'quantum',
      author: 'Dr. James Wilson',
      date: '2024-01-10',
      readTime: '10 min read',
      views: '3.1k',
      image: '/images/blog/quantum-computing.jpg',
      tags: ['Quantum Computing', 'Technology Trends', 'Research', 'Innovation'],
      featured: true
    }
  ];

  const recentPosts = [
    {
      id: 4,
      title: 'Building Scalable Microservices with Kubernetes',
      excerpt: 'A comprehensive guide to designing and deploying microservices architecture using Kubernetes.',
      category: 'cloud',
      author: 'Alex Thompson',
      date: '2024-01-08',
      readTime: '12 min read',
      views: '1.2k',
      image: '/images/blog/microservices.jpg',
      tags: ['Microservices', 'Kubernetes', 'Cloud Native', 'DevOps']
    },
    {
      id: 5,
      title: 'IoT Security: Protecting Connected Devices in 2024',
      excerpt: 'Essential security practices for IoT deployments and how to mitigate emerging threats.',
      category: 'iot',
      author: 'Lisa Park',
      date: '2024-01-05',
      readTime: '7 min read',
      views: '956',
      image: '/images/blog/iot-security.jpg',
      tags: ['IoT', 'Security', 'Connected Devices', 'Threats']
    },
    {
      id: 6,
      title: 'Blockchain in Supply Chain: Real-World Applications',
      excerpt: 'How blockchain technology is transforming supply chain transparency and traceability.',
      category: 'blockchain',
      author: 'David Kim',
      date: '2024-01-03',
      readTime: '9 min read',
      views: '1.1k',
      image: '/images/blog/blockchain-supply-chain.jpg',
      tags: ['Blockchain', 'Supply Chain', 'Transparency', 'Traceability']
    },
    {
      id: 7,
      title: 'Data Analytics for Manufacturing: Industry 4.0 Insights',
      excerpt: 'Leveraging big data and analytics to optimize manufacturing processes and improve efficiency.',
      category: 'industry',
      author: 'Maria Garcia',
      date: '2024-01-01',
      readTime: '11 min read',
      views: '892',
      image: '/images/blog/manufacturing-analytics.jpg',
      tags: ['Manufacturing', 'Data Analytics', 'Industry 4.0', 'Efficiency']
    },
    {
      id: 8,
      title: 'The Rise of Edge Computing: Processing Data Where It Matters',
      excerpt: 'Understanding edge computing architecture and its applications in modern technology.',
      category: 'iot',
      author: 'Robert Chen',
      date: '2023-12-28',
      readTime: '8 min read',
      views: '1.3k',
      image: '/images/blog/edge-computing.jpg',
      tags: ['Edge Computing', 'IoT', 'Data Processing', 'Architecture']
    },
    {
      id: 9,
      title: 'AI Ethics: Building Responsible AI Systems',
      excerpt: 'Key considerations for developing AI systems that are fair, transparent, and accountable.',
      category: 'ai-ml',
      author: 'Dr. Emily Watson',
      date: '2023-12-25',
      readTime: '9 min read',
      views: '1.7k',
      image: '/images/blog/ai-ethics.jpg',
      tags: ['AI Ethics', 'Responsible AI', 'Transparency', 'Accountability']
    }
  ];

  const allPosts = [...featuredPosts, ...recentPosts];

  const filteredPosts = allPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : BookOpen;
  };

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'General';
  };

  return (
    <>
      <SEO 
        title="Blog - Zion Tech Group"
        description="Stay updated with the latest insights in AI, cybersecurity, quantum computing, and emerging technologies. Expert analysis and industry trends from Zion Tech Group."
        keywords="technology blog, AI insights, cybersecurity trends, quantum computing, IoT, blockchain, Zion Tech Group blog"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Technology{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Insights
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Stay ahead of the curve with expert analysis, industry trends, and deep insights 
              into the technologies shaping our future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 border-b border-slate-700/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-400'
                      : 'bg-slate-800/50 border-slate-600/50 text-gray-300 hover:border-cyan-400/30 hover:text-cyan-300'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                  <span className="text-xs bg-slate-700/50 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Featured Articles</h2>
            <p className="text-gray-300">In-depth analysis and expert insights on cutting-edge technologies</p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/blog/${post.id}`} className="block">
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl overflow-hidden border border-slate-600/50 group-hover:border-cyan-400/50 transition-all duration-300 group-hover:scale-105">
                    {/* Image Placeholder */}
                    <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                      <div className="text-center">
                        <FileText className="w-16 h-16 text-cyan-400/50 mx-auto mb-2" />
                        <span className="text-cyan-400/50 text-sm">Article Image</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Category and Date */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2 text-sm text-cyan-400">
                          <getCategoryIcon categoryId={post.category} className="w-4 h-4" />
                          {getCategoryName(post.category)}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Calendar className="w-4 h-4" />
                          {formatDate(post.date)}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-300 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-slate-700/50 text-gray-300 px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Meta */}
                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {post.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </span>
                        </div>
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {post.views}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Latest Articles</h2>
            <p className="text-gray-300">Stay updated with our newest insights and analysis</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(3, 9).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/blog/${post.id}`} className="block">
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl overflow-hidden border border-slate-600/50 group-hover:border-cyan-400/50 transition-all duration-300 group-hover:scale-105">
                    {/* Image Placeholder */}
                    <div className="h-40 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                      <div className="text-center">
                        <FileText className="w-12 h-12 text-cyan-400/50 mx-auto mb-2" />
                        <span className="text-cyan-400/50 text-xs">Article Image</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      {/* Category and Date */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2 text-sm text-cyan-400">
                          <getCategoryIcon categoryId={post.category} className="w-4 h-4" />
                          {getCategoryName(post.category)}
                        </div>
                        <div className="text-sm text-gray-400">
                          {formatDate(post.date)}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-300 mb-4 line-clamp-2 text-sm">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {post.views}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 border border-cyan-400/20">
              <h2 className="text-3xl font-bold text-white mb-4">
                Stay Updated with Our Insights
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get the latest technology insights, industry trends, and expert analysis 
                delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}