import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import {
  Search,
  Filter,
  Calendar,
  Clock,
  User,
  Eye,
  Tag,
  ArrowRight,
  TrendingUp,
  Star,
  BookOpen,
  Newspaper,
  Globe,
  Zap,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Users,
  Award,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

export default function News() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All News', icon: Newspaper },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'innovation', name: 'Innovation', icon: Rocket },
    { id: 'company', name: 'Company Updates', icon: Users },
    { id: 'industry', name: 'Industry Insights', icon: Globe }
  ];

  const newsArticles = [
    {
      id: 1,
      title: 'Zion Tech Group Launches Revolutionary AI-Powered Cybersecurity Platform',
      excerpt: 'Our new AI-driven security solution detects threats with 99.9% accuracy, revolutionizing enterprise security.',
      content: 'Zion Tech Group is proud to announce the launch of our groundbreaking AI-powered cybersecurity platform. This revolutionary solution leverages advanced machine learning algorithms to detect and prevent cyber threats with unprecedented accuracy. The platform processes millions of security events per second, providing real-time threat intelligence and automated response capabilities.',
      author: 'Dr. Sarah Chen',
      authorRole: 'Chief Technology Officer',
      authorAvatar: '/images/team/sarah-chen.jpg',
      date: '2025-01-15',
      readTime: '5 min read',
      views: '12.5k',
      category: 'ai-ml',
      tags: ['AI', 'Cybersecurity', 'Machine Learning', 'Platform Launch'],
      featured: true,
      image: '/images/news/ai-cybersecurity-platform.jpg',
      url: '/news/ai-cybersecurity-platform-launch'
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthrough: Zion Tech Achieves 1000+ Qubit Processing',
      excerpt: 'Our research team has achieved a major milestone in quantum computing, reaching 1000+ qubit processing power.',
      content: 'In a groundbreaking achievement, Zion Tech Group\'s quantum computing research team has successfully developed a 1000+ qubit processing system. This breakthrough represents a significant step forward in quantum computing capabilities, enabling complex calculations that were previously impossible. The system demonstrates remarkable stability and error correction capabilities.',
      author: 'Dr. Emily Watson',
      authorRole: 'Chief Research Officer',
      authorAvatar: '/images/team/emily-watson.jpg',
      date: '2025-01-10',
      readTime: '7 min read',
      views: '8.9k',
      category: 'innovation',
      tags: ['Quantum Computing', 'Research', 'Breakthrough', 'Technology'],
      featured: true,
      image: '/images/news/quantum-computing-breakthrough.jpg',
      url: '/news/quantum-computing-breakthrough'
    },
    {
      id: 3,
      title: 'Zion Tech Group Named "Most Innovative Company" by TechCrunch',
      excerpt: 'We\'re honored to receive TechCrunch\'s prestigious "Most Innovative Company" award for 2024.',
      content: 'Zion Tech Group has been recognized as the "Most Innovative Company" by TechCrunch for our groundbreaking work in AI, cybersecurity, and emerging technologies. This prestigious award recognizes our commitment to pushing the boundaries of what\'s possible in technology and our dedication to solving complex challenges.',
      author: 'Lisa Thompson',
      authorRole: 'Chief Marketing Officer',
      authorAvatar: '/images/team/lisa-thompson.jpg',
      date: '2025-01-08',
      readTime: '3 min read',
      views: '15.2k',
      category: 'company',
      tags: ['Award', 'Recognition', 'Innovation', 'TechCrunch'],
      featured: false,
      image: '/images/news/techcrunch-award.jpg',
      url: '/news/techcrunch-innovation-award'
    },
    {
      id: 4,
      title: 'New Partnership with Fortune 500 Healthcare Provider',
      excerpt: 'We\'re excited to announce a strategic partnership to revolutionize healthcare technology solutions.',
      content: 'Zion Tech Group has entered into a strategic partnership with a leading Fortune 500 healthcare provider to develop next-generation healthcare technology solutions. This collaboration will focus on AI-powered diagnostic tools, patient care optimization, and healthcare data security.',
      author: 'Marcus Rodriguez',
      authorRole: 'Chief Technology Officer',
      authorAvatar: '/images/team/marcus-rodriguez.jpg',
      date: '2025-01-05',
      readTime: '4 min read',
      views: '6.7k',
      category: 'company',
      tags: ['Partnership', 'Healthcare', 'AI', 'Fortune 500'],
      featured: false,
      image: '/images/news/healthcare-partnership.jpg',
      url: '/news/healthcare-partnership-announcement'
    },
    {
      id: 5,
      title: 'Cloud Infrastructure Optimization: 40% Cost Reduction for Enterprise Clients',
      excerpt: 'Our cloud optimization solutions have delivered significant cost savings for enterprise clients.',
      content: 'Zion Tech Group\'s cloud infrastructure optimization services have achieved remarkable results for our enterprise clients, delivering an average of 40% cost reduction while improving performance and reliability. Our advanced algorithms analyze cloud usage patterns and automatically optimize resource allocation.',
      author: 'David Kim',
      authorRole: 'Chief Financial Officer',
      authorAvatar: '/images/team/david-kim.jpg',
      date: '2025-01-03',
      readTime: '6 min read',
      views: '9.3k',
      category: 'cloud',
      tags: ['Cloud Computing', 'Cost Optimization', 'Enterprise', 'Infrastructure'],
      featured: false,
      image: '/images/news/cloud-optimization.jpg',
      url: '/news/cloud-cost-optimization-results'
    },
    {
      id: 6,
      title: 'AI Ethics Framework: Setting Industry Standards for Responsible AI',
      excerpt: 'We\'re leading the industry in establishing comprehensive AI ethics and responsible development guidelines.',
      content: 'Zion Tech Group is proud to announce the release of our comprehensive AI Ethics Framework, setting new industry standards for responsible AI development and deployment. This framework addresses critical issues including bias prevention, transparency, accountability, and societal impact.',
      author: 'Dr. Alex Johnson',
      authorRole: 'Chief Security Officer',
      authorAvatar: '/images/team/alex-johnson.jpg',
      date: '2024-12-28',
      readTime: '8 min read',
      views: '11.8k',
      category: 'ai-ml',
      tags: ['AI Ethics', 'Responsible AI', 'Industry Standards', 'Framework'],
      featured: false,
      image: '/images/news/ai-ethics-framework.jpg',
      url: '/news/ai-ethics-framework-release'
    },
    {
      id: 7,
      title: 'Cybersecurity Threat Report: Q4 2024 Analysis',
      excerpt: 'Our latest cybersecurity threat report reveals emerging trends and provides actionable insights.',
      content: 'Zion Tech Group\'s Q4 2024 Cybersecurity Threat Report provides comprehensive analysis of emerging cyber threats, attack patterns, and security trends. The report includes detailed threat intelligence, vulnerability assessments, and recommended security measures for organizations.',
      author: 'Dr. Emily Watson',
      authorRole: 'Chief Research Officer',
      authorAvatar: '/images/team/emily-watson.jpg',
      date: '2024-12-25',
      readTime: '10 min read',
      views: '14.1k',
      category: 'cybersecurity',
      tags: ['Cybersecurity', 'Threat Report', 'Q4 2024', 'Security Analysis'],
      featured: false,
      image: '/images/news/cybersecurity-report.jpg',
      url: '/news/cybersecurity-threat-report-q4-2024'
    },
    {
      id: 8,
      title: 'Employee Growth: Zion Tech Welcomes 100+ New Team Members',
      excerpt: 'We\'re excited to welcome over 100 new talented professionals to our growing team.',
      content: 'Zion Tech Group is thrilled to announce the addition of over 100 new team members across our global offices. This significant growth reflects our commitment to expanding our capabilities and delivering even more innovative solutions to our clients.',
      author: 'Maria Garcia',
      authorRole: 'Chief People Officer',
      authorAvatar: '/images/team/maria-garcia.jpg',
      date: '2024-12-20',
      readTime: '4 min read',
      views: '7.6k',
      category: 'company',
      tags: ['Growth', 'Team Expansion', 'Hiring', 'Company Culture'],
      featured: false,
      image: '/images/news/team-growth.jpg',
      url: '/news/team-expansion-announcement'
    }
  ];

  const featuredArticles = newsArticles.filter(article => article.featured);
  const latestArticles = newsArticles.filter(article => !article.featured);

  const filteredArticles = latestArticles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <SEO
        title="News & Updates - Zion Tech Group"
        description="Stay updated with the latest news, innovations, and company updates from Zion Tech Group. Read about our breakthroughs, partnerships, and industry insights."
        keywords="news, updates, company news, technology news, AI news, cybersecurity news, Zion Tech Group"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Latest{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                News & Updates
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Stay informed about our latest innovations, company updates, industry insights, and breakthrough technologies
            </p>
            
            {/* Search and Filters */}
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search news articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl shadow-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-200"
                  />
                </div>
                
                <div className="flex items-center gap-2">
                  <Filter className="h-5 w-5 text-gray-400" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl shadow-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-200"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Stories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our most important and impactful news stories
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium rounded-full">
                      Featured
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-full">
                      {categories.find(cat => cat.id === article.category)?.name}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-2" />
                        {article.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {formatDate(article.date)}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        {article.readTime}
                      </div>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Eye className="h-4 w-4 mr-2" />
                      {article.views}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {article.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    to={article.url}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors duration-200"
                  >
                    Read Full Article
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Latest News
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Stay updated with our latest company news, industry insights, and technology developments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full">
                    {categories.find(cat => cat.id === article.category)?.name}
                  </span>
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <Eye className="h-3 w-3 mr-1" />
                    {article.views}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <User className="h-3 w-3 mr-2" />
                    {article.author}
                  </div>
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <Calendar className="h-3 w-3 mr-2" />
                    {formatDate(article.date)}
                  </div>
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <Clock className="h-3 w-3 mr-2" />
                    {article.readTime}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {article.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link
                  to={article.url}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium transition-colors duration-200"
                >
                  Read More
                  <ArrowRight className="h-3 w-3 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
          
          {filteredArticles.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <Newspaper className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                No articles found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your search terms or category filter
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest news, insights, and updates directly in your inbox
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/20"
                />
                <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-200">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-blue-200 mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
