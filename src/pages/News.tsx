import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Atom, 
  Rocket, 
  Code, 
  Globe, 
  Calendar,
  Clock,
  User,
  Tag,
  ArrowRight,
  Search,
  Filter,
  TrendingUp,
  Award,
  Star,
  Eye,
  Share2,
  Bookmark,
  ExternalLink
} from 'lucide-react';

interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
  imageUrl: string;
  featured: boolean;
  views: number;
  shares: number;
}

const News: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'latest' | 'popular' | 'featured'>('latest');

  const categories = [
    { id: 'all', name: 'All News', icon: Globe, count: 24 },
    { id: 'company', name: 'Company Updates', icon: Zap, count: 8 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 6 },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, count: 4 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 5 },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, count: 3 },
    { id: 'industry', name: 'Industry Insights', icon: TrendingUp, count: 8 }
  ];

  const newsArticles: NewsArticle[] = [
    {
      id: '1',
      title: 'Zion Tech Group Launches Revolutionary AI-Powered Cybersecurity Platform',
      excerpt: 'Our latest AI cybersecurity solution combines machine learning with advanced threat detection to provide enterprise-grade protection.',
      content: 'Zion Tech Group is excited to announce the launch of our revolutionary AI-powered cybersecurity platform. This cutting-edge solution leverages advanced machine learning algorithms to detect and prevent cyber threats in real-time, providing enterprise-grade protection for organizations of all sizes.',
      author: 'Sarah Chen',
      publishDate: '2025-01-15',
      readTime: '5 min read',
      category: 'company',
      tags: ['AI', 'Cybersecurity', 'Product Launch', 'Machine Learning'],
      imageUrl: '/api/placeholder/600/400',
      featured: true,
      views: 15420,
      shares: 892
    },
    {
      id: '2',
      title: 'The Future of Quantum Computing in Enterprise Applications',
      excerpt: 'Exploring how quantum computing is transforming business operations and what it means for the future of enterprise technology.',
      content: 'Quantum computing represents the next frontier in computational power, offering unprecedented capabilities for solving complex problems that are currently intractable for classical computers. From optimization challenges to cryptography, quantum computing is poised to revolutionize how businesses approach their most complex computational needs.',
      author: 'Dr. Michael Rodriguez',
      publishDate: '2025-01-12',
      readTime: '8 min read',
      category: 'quantum',
      tags: ['Quantum Computing', 'Enterprise', 'Technology Trends', 'Innovation'],
      imageUrl: '/api/placeholder/600/400',
      featured: true,
      views: 12850,
      shares: 756
    },
    {
      id: '3',
      title: 'AI Ethics and Responsible Development: A Comprehensive Guide',
      excerpt: 'Understanding the importance of ethical AI development and how organizations can implement responsible AI practices.',
      content: 'As artificial intelligence becomes increasingly integrated into our daily lives and business operations, the importance of ethical AI development cannot be overstated. This comprehensive guide explores the key principles of responsible AI and provides practical frameworks for organizations to implement ethical AI practices.',
      author: 'Dr. Emily Watson',
      publishDate: '2025-01-10',
      readTime: '12 min read',
      category: 'ai-ml',
      tags: ['AI Ethics', 'Responsible AI', 'Machine Learning', 'Best Practices'],
      imageUrl: '/api/placeholder/600/400',
      featured: false,
      views: 9870,
      shares: 543
    },
    {
      id: '4',
      title: 'Cloud-Native Architecture: Building for Scale and Resilience',
      excerpt: 'Best practices for designing cloud-native applications that can scale seamlessly and maintain high availability.',
      content: 'Cloud-native architecture represents a fundamental shift in how we design, build, and deploy applications. By embracing cloud-native principles, organizations can create systems that are inherently scalable, resilient, and maintainable. This article explores the key patterns and practices that define successful cloud-native applications.',
      author: 'Alex Thompson',
      publishDate: '2025-01-08',
      readTime: '10 min read',
      category: 'cloud',
      tags: ['Cloud Computing', 'Architecture', 'Scalability', 'DevOps'],
      imageUrl: '/api/placeholder/600/400',
      featured: false,
      views: 7650,
      shares: 432
    },
    {
      id: '5',
      title: 'Zion Tech Group Recognized as Top AI Solutions Provider',
      excerpt: 'Industry recognition for our innovative AI solutions and commitment to delivering exceptional value to clients.',
      content: 'We are proud to announce that Zion Tech Group has been recognized as a top AI solutions provider by the prestigious Technology Innovation Awards. This recognition reflects our commitment to developing cutting-edge AI solutions that drive real business value and our dedication to excellence in everything we do.',
      author: 'Marketing Team',
      publishDate: '2025-01-05',
      readTime: '3 min read',
      category: 'company',
      tags: ['Awards', 'Recognition', 'AI Solutions', 'Company News'],
      imageUrl: '/api/placeholder/600/400',
      featured: false,
      views: 6540,
      shares: 321
    },
    {
      id: '6',
      title: 'The Rise of Edge Computing: Bringing Intelligence Closer to Data',
      excerpt: 'How edge computing is transforming data processing and enabling new possibilities for IoT and real-time applications.',
      content: 'Edge computing is revolutionizing how we process and analyze data by bringing computational power closer to where data is generated. This paradigm shift is enabling new possibilities for IoT applications, real-time analytics, and autonomous systems. Explore how edge computing is shaping the future of technology.',
      author: 'David Kim',
      publishDate: '2025-01-03',
      readTime: '7 min read',
      category: 'industry',
      tags: ['Edge Computing', 'IoT', 'Real-time Analytics', 'Technology Trends'],
      imageUrl: '/api/placeholder/600/400',
      featured: false,
      views: 5430,
      shares: 298
    },
    {
      id: '7',
      title: 'Cybersecurity in the Age of AI: Threats and Defenses',
      excerpt: 'Understanding the evolving cybersecurity landscape and how AI is both a threat and a defense mechanism.',
      content: 'The cybersecurity landscape is evolving rapidly, with AI playing an increasingly important role in both attack and defense strategies. This comprehensive analysis explores the current state of AI-powered cybersecurity threats and the innovative defense mechanisms being developed to counter them.',
      author: 'Lisa Park',
      publishDate: '2024-12-30',
      readTime: '9 min read',
      category: 'cybersecurity',
      tags: ['Cybersecurity', 'AI Threats', 'Defense Strategies', 'Security Trends'],
      imageUrl: '/api/placeholder/600/400',
      featured: false,
      views: 8760,
      shares: 445
    },
    {
      id: '8',
      title: 'Digital Transformation Success Stories: Lessons from Industry Leaders',
      excerpt: 'Real-world examples of successful digital transformations and the key factors that contributed to their success.',
      content: 'Digital transformation is not just about technology—it\'s about fundamentally changing how organizations operate and deliver value. Through real-world case studies, this article explores the key factors that contribute to successful digital transformations and provides actionable insights for organizations embarking on their own journey.',
      author: 'Robert Chen',
      publishDate: '2024-12-28',
      readTime: '11 min read',
      category: 'industry',
      tags: ['Digital Transformation', 'Case Studies', 'Best Practices', 'Success Stories'],
      imageUrl: '/api/placeholder/600/400',
      featured: false,
      views: 7120,
      shares: 387
    }
  ];

  const filteredArticles = newsArticles.filter(article => {
    if (selectedCategory !== 'all' && article.category !== selectedCategory) return false;
    if (searchQuery && !article.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  const sortedArticles = [...filteredArticles].sort((a, b) => {
    switch (sortBy) {
      case 'latest':
        return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
      case 'popular':
        return b.views - a.views;
      case 'featured':
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      default:
        return 0;
    }
  });

  const featuredArticles = sortedArticles.filter(article => article.featured);
  const regularArticles = sortedArticles.filter(article => !article.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-slate-900/50 backdrop-blur-md border-b border-slate-700/50">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Latest <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">News & Insights</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Stay updated with the latest developments in AI, quantum computing, cybersecurity, 
                and digital transformation. Discover industry insights and company updates from Zion Tech Group.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-slate-800/30 backdrop-blur-md rounded-xl p-6 border border-slate-700/50"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search news..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort By */}
              <div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'latest' | 'popular' | 'featured')}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="latest">Latest First</option>
                  <option value="popular">Most Popular</option>
                  <option value="featured">Featured First</option>
                </select>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-white mb-8"
            >
              Featured Stories
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/30 backdrop-blur-md rounded-xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <div className="text-center">
                      <Globe className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                      <p className="text-gray-400">News Image</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30">
                        {categories.find(c => c.id === article.category)?.name}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(article.publishDate)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors cursor-pointer">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 line-clamp-3">{article.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {article.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {article.views.toLocaleString()}
                        </span>
                      </div>
                      
                      <button className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-colors flex items-center gap-2">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Articles */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-white mb-8"
          >
            Latest News
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/30 backdrop-blur-md rounded-xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                  <div className="text-center">
                    <Globe className="w-12 h-12 text-cyan-400 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">News Image</p>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                    <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30">
                      {categories.find(c => c.id === article.category)?.name}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {formatDate(article.publishDate)}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 hover:text-cyan-400 transition-colors cursor-pointer line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-3 line-clamp-3">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {article.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {article.views.toLocaleString()}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {regularArticles.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-400 text-lg">No articles match your current filters. Try adjusting your search criteria.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-slate-800/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Stay Updated</h2>
            <p className="text-xl text-gray-300 mb-8">
              Get the latest news, insights, and updates from Zion Tech Group delivered directly to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Subscribe
              </button>
            </div>
            
            <p className="text-sm text-gray-400 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default News;
