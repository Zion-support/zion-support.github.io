import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  User, 
  Clock, 
  ArrowRight,
  Tag,
  BookOpen,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Code,
  Network,
  Atom,
  TrendingUp,
  Lightbulb,
  Zap,
  Globe,
  Database,
  Server,
  Cpu,
  Lock,
  Eye,
  Heart,
  Share2,
  MessageCircle,
  ExternalLink,
  Filter,
  Search,
  Newspaper,
  Award,
  Star,
  Users,
  Building,
  DollarSign,
  BarChart3
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function News() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');

  const categories = [
    { id: 'all', name: 'All News', icon: Newspaper, count: 45 },
    { id: 'company', name: 'Company Updates', icon: Building, count: 12 },
    { id: 'ai', name: 'AI & Technology', icon: Brain, count: 15 },
    { id: 'partnerships', name: 'Partnerships', icon: Users, count: 8 },
    { id: 'awards', name: 'Awards & Recognition', icon: Award, count: 5 },
    { id: 'industry', name: 'Industry Insights', icon: TrendingUp, count: 5 }
  ];

  const years = [
    { id: 'all', name: 'All Years', count: 45 },
    { id: '2025', name: '2025', count: 18 },
    { id: '2024', name: '2024', count: 20 },
    { id: '2023', name: '2023', count: 7 }
  ];

  const newsArticles = [
    {
      id: 1,
      title: "Zion Tech Group Launches Revolutionary AI Quantum Hybrid Platform",
      excerpt: "Our latest innovation combines artificial intelligence with quantum computing capabilities, opening new possibilities for complex problem-solving and data analysis.",
      content: "Zion Tech Group is proud to announce the launch of our groundbreaking AI Quantum Hybrid Platform, a revolutionary solution that combines the power of artificial intelligence with quantum computing capabilities. This platform represents a significant leap forward in computational power and opens new possibilities for industries ranging from pharmaceuticals to financial services.",
      author: "Kleber",
      authorRole: "CEO & Founder",
      date: "2025-01-15",
      publishDate: "January 15, 2025",
      readTime: "3 min read",
      category: "company",
      tags: ["AI", "Quantum Computing", "Innovation", "Platform Launch"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=400",
      featured: true,
      views: 2847,
      shares: 156
    },
    {
      id: 2,
      title: "Zion Tech Group Named Top AI Company by Tech Innovation Awards 2025",
      excerpt: "We're honored to receive recognition for our contributions to artificial intelligence and technological innovation in the business sector.",
      content: "Zion Tech Group has been recognized as one of the top AI companies of 2025 by the prestigious Tech Innovation Awards. This recognition highlights our commitment to pushing the boundaries of artificial intelligence and our success in delivering innovative solutions that transform businesses.",
      author: "Dr. Sarah Chen",
      authorRole: "CTO & Head of AI Research",
      date: "2025-01-10",
      publishDate: "January 10, 2025",
      readTime: "2 min read",
      category: "awards",
      tags: ["Awards", "Recognition", "AI", "Innovation"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&h=400",
      featured: false,
      views: 1892,
      shares: 89
    },
    {
      id: 3,
      title: "Strategic Partnership with Microsoft Azure Announced",
      excerpt: "New collaboration will provide enhanced cloud infrastructure and AI capabilities for our enterprise clients.",
      content: "Zion Tech Group is excited to announce a strategic partnership with Microsoft Azure that will provide our enterprise clients with enhanced cloud infrastructure and AI capabilities. This partnership represents a significant milestone in our mission to deliver cutting-edge technology solutions.",
      author: "Alex Rodriguez",
      authorRole: "VP of Engineering",
      date: "2025-01-08",
      publishDate: "January 8, 2025",
      readTime: "4 min read",
      category: "partnerships",
      tags: ["Partnership", "Microsoft Azure", "Cloud", "Enterprise"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=400",
      featured: false,
      views: 2341,
      shares: 134
    },
    {
      id: 4,
      title: "New AI-Powered Cybersecurity Solutions Released",
      excerpt: "Advanced threat detection and response capabilities powered by machine learning algorithms.",
      content: "We've released our latest AI-powered cybersecurity solutions that provide advanced threat detection and response capabilities. These solutions leverage machine learning algorithms to identify and neutralize threats in real-time, providing unprecedented protection for our clients.",
      author: "Zion Team",
      authorRole: "Security Team",
      date: "2025-01-05",
      publishDate: "January 5, 2025",
      readTime: "5 min read",
      category: "ai",
      tags: ["Cybersecurity", "AI", "Threat Detection", "Machine Learning"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&h=400",
      featured: false,
      views: 1678,
      shares: 92
    },
    {
      id: 5,
      title: "Zion Tech Group Expands to European Market",
      excerpt: "New office in London marks our expansion into the European market, bringing our innovative solutions to more businesses.",
      content: "Zion Tech Group is expanding into the European market with the opening of our new office in London. This expansion represents our commitment to bringing innovative technology solutions to businesses worldwide and marks an important milestone in our global growth strategy.",
      author: "Kleber",
      authorRole: "CEO & Founder",
      date: "2024-12-20",
      publishDate: "December 20, 2024",
      readTime: "3 min read",
      category: "company",
      tags: ["Expansion", "Europe", "London", "Global Growth"],
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&h=400",
      featured: false,
      views: 1456,
      shares: 78
    },
    {
      id: 6,
      title: "Quantum Computing Breakthrough in Financial Modeling",
      excerpt: "Our research team achieves significant breakthrough in quantum computing applications for financial modeling and risk assessment.",
      content: "Our research team has achieved a significant breakthrough in quantum computing applications for financial modeling and risk assessment. This advancement demonstrates the potential of quantum computing to revolutionize complex financial calculations and risk analysis.",
      author: "Dr. Sarah Chen",
      authorRole: "CTO & Head of AI Research",
      date: "2024-12-15",
      publishDate: "December 15, 2024",
      readTime: "6 min read",
      category: "ai",
      tags: ["Quantum Computing", "Financial Modeling", "Research", "Breakthrough"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=400",
      featured: false,
      views: 2134,
      shares: 145
    },
    {
      id: 7,
      title: "New Micro SaaS Solutions Platform Launched",
      excerpt: "Comprehensive platform for developing and deploying micro SaaS solutions for niche business needs.",
      content: "We've launched our new Micro SaaS Solutions Platform, a comprehensive platform for developing and deploying micro SaaS solutions for niche business needs. This platform enables businesses to quickly create and deploy specialized software solutions.",
      author: "Alex Rodriguez",
      authorRole: "VP of Engineering",
      date: "2024-12-10",
      publishDate: "December 10, 2024",
      readTime: "4 min read",
      category: "company",
      tags: ["Micro SaaS", "Platform", "Software Development", "Innovation"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=400",
      featured: false,
      views: 1890,
      shares: 112
    },
    {
      id: 8,
      title: "Industry Report: The Future of AI in Healthcare",
      excerpt: "Comprehensive analysis of how artificial intelligence is transforming healthcare delivery and patient outcomes.",
      content: "Our latest industry report explores how artificial intelligence is transforming healthcare delivery and patient outcomes. The report provides comprehensive analysis of current trends, challenges, and opportunities in AI-powered healthcare solutions.",
      author: "Zion Research Team",
      authorRole: "Research Team",
      date: "2024-12-05",
      publishDate: "December 5, 2024",
      readTime: "8 min read",
      category: "industry",
      tags: ["Healthcare", "AI", "Industry Report", "Research"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&h=400",
      featured: false,
      views: 2678,
      shares: 189
    }
  ];

  const filteredNews = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesYear = selectedYear === 'all' || article.date.startsWith(selectedYear);
    
    return matchesSearch && matchesCategory && matchesYear;
  });

  const featuredArticle = newsArticles.find(article => article.featured);
  const regularArticles = filteredNews.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-futuristic">
      <SEO 
        title="Latest News - Zion Tech Group"
        description="Stay updated with the latest news, company updates, and industry insights from Zion Tech Group. Discover our innovations, partnerships, and achievements."
      />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue to-zion-slate-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Latest <span className="text-zion-cyan">News</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto"
          >
            Stay updated with our latest innovations, company updates, partnerships, 
            and industry insights.
          </motion.p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-zion-slate-dark border-b border-zion-slate-light/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
              <input
                type="text"
                placeholder="Search news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zion-slate-light/10 border border-zion-slate-light/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-200"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-zion-cyan" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-zion-slate-light/10 border border-zion-slate-light/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-zion-cyan"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Year Filter */}
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-zion-cyan" />
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="bg-zion-slate-light/10 border border-zion-slate-light/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-zion-cyan"
                >
                  {years.map((year) => (
                    <option key={year.id} value={year.id}>
                      {year.name} ({year.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-16 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-8">
                <span className="inline-flex items-center px-4 py-2 bg-zion-cyan text-white text-sm font-medium rounded-full mb-4">
                  <Star className="w-4 h-4 mr-2" />
                  Featured Article
                </span>
                <h2 className="text-3xl font-bold text-white mb-4">Featured Story</h2>
              </div>
              
              <div className="bg-zion-slate-dark/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative">
                    <img 
                      src={featuredArticle.image} 
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover min-h-[300px]"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 bg-zion-cyan text-white text-xs font-medium rounded-full">
                        {featuredArticle.category.charAt(0).toUpperCase() + featuredArticle.category.slice(1)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-sm text-zion-slate-light mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {featuredArticle.publishDate}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredArticle.readTime}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                      {featuredArticle.title}
                    </h3>
                    
                    <p className="text-zion-slate-light mb-6 leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-medium">{featuredArticle.author}</div>
                          <div className="text-zion-slate-light text-sm">{featuredArticle.authorRole}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 text-zion-slate-light text-sm">
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {featuredArticle.views}
                        </span>
                        <span className="flex items-center gap-1">
                          <Share2 className="w-4 h-4" />
                          {featuredArticle.shares}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredArticle.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-300 hover:scale-105">
                      Read Full Article
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Latest Updates
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-zion-slate-dark/50 to-zion-blue/10 backdrop-blur-sm rounded-xl overflow-hidden border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:scale-105 group"
              >
                <div className="relative">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 bg-zion-cyan text-white text-xs font-medium rounded-full">
                      {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-zion-slate-light mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {article.publishDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-zion-cyan transition-colors duration-200">
                    {article.title}
                  </h3>
                  
                  <p className="text-zion-slate-light mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-white" />
                      </div>
                      <div className="text-white text-sm font-medium">{article.author}</div>
                    </div>
                    
                    <div className="flex items-center gap-3 text-zion-slate-light text-xs">
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {article.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <Share2 className="w-4 h-4" />
                        {article.shares}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full inline-flex items-center justify-center px-4 py-2 border border-zion-cyan text-zion-cyan font-medium rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 group-hover:scale-105">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
          
          {filteredNews.length === 0 && (
            <div className="text-center py-16">
              <Newspaper className="w-16 h-16 text-zion-slate-light mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No news found</h3>
              <p className="text-zion-slate-light">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-zion-slate-light mb-8">
              Subscribe to our newsletter to receive the latest news, updates, and insights directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-zion-slate-light/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
