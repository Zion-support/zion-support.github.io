import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Calendar, 
  User, 
  Tag, 
  ArrowRight,
  Clock,
  Eye,
  Newspaper,
  TrendingUp,
  Lightbulb,
  Code,
  Shield,
  Cloud,
  Brain,
  Zap,
  ExternalLink,
  Play,
  Award,
  Users,
  Globe,
  Building2,
  FileText
} from 'lucide-react';

const News: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All News', icon: Newspaper },
    { id: 'company', name: 'Company News', icon: Building2 },
    { id: 'product', name: 'Product Updates', icon: Code },
    { id: 'partnership', name: 'Partnerships', icon: Users },
    { id: 'awards', name: 'Awards & Recognition', icon: Award },
    { id: 'industry', name: 'Industry Insights', icon: Globe }
  ];

  const newsItems = [
    {
      id: 1,
      title: 'Zion Tech Group Named Leader in AI Solutions by Industry Analyst',
      excerpt: 'Company recognized for innovative AI-powered business solutions and exceptional customer success.',
      category: 'awards',
      author: 'Zion Tech Group',
      date: '2025-01-20',
      readTime: '5 min read',
      views: '3.2k',
      image: '/api/placeholder/400/250',
      tags: ['Awards', 'AI Solutions', 'Industry Recognition'],
      featured: true,
      type: 'press-release'
    },
    {
      id: 2,
      title: 'New Partnership with Global Tech Leader Announced',
      excerpt: 'Strategic collaboration to deliver enhanced cloud and AI solutions to enterprise customers.',
      category: 'partnership',
      author: 'Zion Tech Group',
      date: '2025-01-18',
      readTime: '4 min read',
      views: '2.8k',
      image: '/api/placeholder/400/250',
      tags: ['Partnership', 'Cloud', 'AI', 'Enterprise'],
      featured: false,
      type: 'announcement'
    },
    {
      id: 3,
      title: 'Major Product Launch: AI-Powered Cybersecurity Suite',
      excerpt: 'Revolutionary cybersecurity platform combining AI and machine learning for advanced threat detection.',
      category: 'product',
      author: 'Product Team',
      date: '2025-01-15',
      readTime: '6 min read',
      views: '4.1k',
      image: '/api/placeholder/400/250',
      tags: ['Product Launch', 'Cybersecurity', 'AI', 'Machine Learning'],
      featured: false,
      type: 'product-update'
    },
    {
      id: 4,
      title: 'Zion Tech Group Expands Global Operations',
      excerpt: 'Company opens new offices in Europe and Asia to better serve international customers.',
      category: 'company',
      author: 'Zion Tech Group',
      date: '2025-01-12',
      readTime: '3 min read',
      views: '2.3k',
      image: '/api/placeholder/400/250',
      tags: ['Global Expansion', 'International', 'Growth'],
      featured: false,
      type: 'company-news'
    },
    {
      id: 5,
      title: 'Industry Report: AI Adoption Trends in 2025',
      excerpt: 'Comprehensive analysis of artificial intelligence adoption across different industries.',
      category: 'industry',
      author: 'Research Team',
      date: '2025-01-10',
      readTime: '8 min read',
      views: '3.7k',
      image: '/api/placeholder/400/250',
      tags: ['Industry Report', 'AI Trends', 'Research', '2025'],
      featured: false,
      type: 'research'
    },
    {
      id: 6,
      title: 'Customer Success Story: Healthcare Provider Transformation',
      excerpt: 'How a leading healthcare provider achieved 40% efficiency improvement with our AI solutions.',
      category: 'company',
      author: 'Customer Success Team',
      date: '2025-01-08',
      readTime: '7 min read',
      views: '2.9k',
      image: '/api/placeholder/400/250',
      tags: ['Customer Success', 'Healthcare', 'AI', 'Case Study'],
      featured: false,
      type: 'case-study'
    }
  ];

  const pressReleases = [
    {
      id: 'pr1',
      title: 'Zion Tech Group Announces Q4 2024 Financial Results',
      date: '2025-01-25',
      summary: 'Strong performance driven by AI solutions growth and expanding customer base.',
      link: '#'
    },
    {
      id: 'pr2',
      title: 'New Executive Appointments Strengthen Leadership Team',
      date: '2025-01-22',
      summary: 'Strategic hires to accelerate product development and market expansion.',
      link: '#'
    },
    {
      id: 'pr3',
      title: 'Zion Tech Group Secures $50M in Series C Funding',
      date: '2025-01-20',
      summary: 'Investment to fuel innovation and accelerate global market presence.',
      link: '#'
    }
  ];

  const mediaResources = [
    {
      title: 'Company Logo & Brand Assets',
      description: 'High-resolution logos, brand guidelines, and visual assets.',
      icon: Building2,
      link: '#'
    },
    {
      title: 'Executive Biographies',
      description: 'Professional photos and biographies of key leadership team.',
      icon: Users,
      link: '#'
    },
    {
      title: 'Product Screenshots',
      description: 'High-quality images of our products and solutions.',
      icon: Code,
      link: '#'
    },
    {
      title: 'Company Fact Sheet',
      description: 'Key facts and figures about Zion Tech Group.',
      icon: FileText,
      link: '#'
    }
  ];

  const filteredNews = newsItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'press-release':
        return Newspaper;
      case 'announcement':
        return TrendingUp;
      case 'product-update':
        return Code;
      case 'company-news':
        return Building2;
      case 'research':
        return Lightbulb;
      case 'case-study':
        return Users;
      default:
        return Newspaper;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
              <Newspaper className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-medium">News & Updates</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Zion Tech Group
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                News
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay updated with the latest company news, product announcements, 
              partnerships, and industry insights from Zion Tech Group.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-700'
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

      {/* Featured News */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8"
          >
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center space-x-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full px-3 py-1 mb-4">
                  <TrendingUp className="w-4 h-4 text-cyan-400" />
                  <span className="text-cyan-400 text-sm font-medium">Featured News</span>
                </div>
                
                <h2 className="text-3xl font-bold text-white mb-4">
                  Zion Tech Group Named Leader in AI Solutions by Industry Analyst
                </h2>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Company recognized for innovative AI-powered business solutions and exceptional customer success. 
                  This recognition validates our commitment to delivering cutting-edge technology solutions.
                </p>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>Zion Tech Group</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>January 20, 2025</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>5 min read</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Awards', 'AI Solutions', 'Industry Recognition'].map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-slate-700/50 text-cyan-400 text-sm rounded-full border border-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              
              <div className="lg:w-1/2">
                <div className="w-full h-64 lg:h-80 bg-slate-700 rounded-xl flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <Newspaper className="w-16 h-16 mx-auto mb-4" />
                    <p>Featured News Image</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Latest News
            </h2>
            <p className="text-gray-300">
              Stay updated with our latest announcements, product updates, and company news.
            </p>
          </motion.div>

          {filteredNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300 group"
                >
                  <div className="w-full h-48 bg-slate-700 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <Newspaper className="w-12 h-12 mx-auto mb-2" />
                      <p className="text-sm">News Image</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full border border-cyan-500/30">
                        {item.category.toUpperCase()}
                      </span>
                      <div className="flex items-center space-x-1 text-gray-400">
                        {(() => {
                          const IconComponent = getTypeIcon(item.type);
                          return <IconComponent className="w-4 h-4" />;
                        })()}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {item.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-3 h-3" />
                        <span>{item.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{formatDate(item.date)}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <button className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 transition-transform">
                      <span className="font-medium">Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Newspaper className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No news found</h3>
              <p className="text-gray-300">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Press Releases Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Press Releases
            </h2>
            <p className="text-gray-300">
              Official company announcements and press releases.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pressReleases.map((release, index) => (
              <motion.div
                key={release.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-3">
                  {release.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {release.summary}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">
                    {formatDate(release.date)}
                  </span>
                  <a
                    href={release.link}
                    className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span className="text-sm">Read More</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Resources Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Media Resources
            </h2>
            <p className="text-gray-300">
              Downloadable assets and resources for media and press inquiries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaResources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <resource.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{resource.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{resource.description}</p>
                <a
                  href={resource.link}
                  className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span className="text-sm">Download</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Media Inquiries?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              For press inquiries, media interviews, or additional information, 
              please contact our media relations team.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Contact Media Team
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Download Press Kit
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default News;
