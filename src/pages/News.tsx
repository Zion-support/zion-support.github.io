<<<<<<< HEAD
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search, 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  ArrowRight,
  Newspaper,
  TrendingUp,
  Lightbulb,
  Code,
  Shield,
  Cloud,
  Brain,
  Cpu,
  Zap,
  Building,
  Users,
  Globe,
  Star,
  Eye,
  Heart,
  Share2,
  ExternalLink,
  Filter,
  Bookmark,
  BookmarkPlus,
  Rocket,
  Database,
  Award
} from 'lucide-react';

export default function News() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSource, setSelectedSource] = useState('all');
  const [selectedTimeframe, setSelectedTimeframe] = useState('all');

  const categories = [
    { id: 'all', name: 'All News', icon: Newspaper, count: 45 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 12 },
    { id: 'quantum', name: 'Quantum Technology', icon: Cpu, count: 6 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 8 },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, count: 7 },
    { id: 'business', name: 'Business & Industry', icon: Building, count: 9 },
    { id: 'innovation', name: 'Innovation & Trends', icon: Lightbulb, count: 8 },
    { id: 'development', name: 'Development', icon: Code, count: 5 }
  ];

  const sources = [
    'All Sources',
    'Company Press Releases',
    'Industry Reports',
    'Technology News',
    'Research Papers',
    'Partner Updates',
    'Customer Success Stories'
  ];

  const timeframes = [
    'All Time',
    'Last 24 Hours',
    'Last Week',
    'Last Month',
    'Last Quarter',
    'Last Year'
  ];

  const newsData = [
    {
      id: 1,
      title: "Zion Tech Group Launches Revolutionary AI-Powered Business Platform",
      excerpt: "New autonomous business management solution transforms how companies operate with AI-driven decision making and process automation.",
      category: "ai-ml",
      source: "Company Press Release",
      author: "Zion Tech Group",
      date: "2025-01-15",
      readTime: "5 min read",
      image: "/images/news/ai-business-platform.jpg",
      featured: true,
      tags: ["AI", "Business Automation", "Innovation"]
    },
    {
      id: 2,
      title: "Quantum Computing Breakthrough: Zion's New Research Platform",
      excerpt: "Advanced quantum neural network platform demonstrates unprecedented computational capabilities for complex problem solving.",
      category: "quantum",
      source: "Research Papers",
      author: "Dr. Sarah Chen",
      date: "2025-01-14",
      readTime: "8 min read",
      image: "/images/news/quantum-breakthrough.jpg",
      featured: true,
      tags: ["Quantum Computing", "Research", "Neural Networks"]
    },
    {
      id: 3,
      title: "Cybersecurity Evolution: Zero-Trust Architecture Implementation",
      excerpt: "Comprehensive security framework provides enterprise-grade protection with autonomous threat detection and response.",
      category: "cybersecurity",
      source: "Technology News",
      author: "Security Team",
      date: "2025-01-13",
      readTime: "6 min read",
      image: "/images/news/cybersecurity.jpg",
      featured: false,
      tags: ["Cybersecurity", "Zero-Trust", "Enterprise"]
    },
    {
      id: 4,
      title: "Cloud Infrastructure Revolution: Multi-Cloud Management Platform",
      excerpt: "Unified cloud management solution optimizes costs and performance across multiple cloud providers.",
      category: "cloud",
      source: "Industry Reports",
      author: "Cloud Solutions Team",
      date: "2025-01-12",
      readTime: "4 min read",
      image: "/images/news/cloud-platform.jpg",
      featured: false,
      tags: ["Cloud Computing", "DevOps", "Cost Optimization"]
    },
    {
      id: 5,
      title: "AI-Powered Content Generation: Revolutionizing Digital Marketing",
      excerpt: "Advanced content creation platform uses AI to generate engaging, SEO-optimized content at scale.",
      category: "ai-ml",
      source: "Technology News",
      author: "Marketing Team",
      date: "2025-01-11",
      readTime: "7 min read",
      image: "/images/news/ai-content.jpg",
      featured: false,
      tags: ["AI", "Content Marketing", "SEO"]
    }
  ];

  const filteredNews = newsData.filter(news => {
    const matchesSearch = news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         news.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || news.category === selectedCategory;
    const matchesSource = selectedSource === 'All Sources' || news.source === selectedSource;
    
    return matchesSearch && matchesCategory && matchesSource;
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search functionality implementation
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Latest News & Updates
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Stay informed about the latest developments in AI, quantum computing, cybersecurity, and technology innovation from Zion Tech Group.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
        >
          <form onSubmit={handleSearch} className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search news articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id} className="bg-gray-800 text-white">
                  {category.name} ({category.count})
                </option>
              ))}
            </select>
            
            <select
              value={selectedSource}
              onChange={(e) => setSelectedSource(e.target.value)}
              className="px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {sources.map(source => (
                <option key={source} value={source} className="bg-gray-800 text-white">
                  {source}
                </option>
              ))}
            </select>
            
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Search className="h-5 w-5" />
              Search
            </button>
          </form>
        </motion.div>
      </div>

      {/* News Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((news, index) => (
            <motion.article
              key={news.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="relative">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-48 object-cover"
                />
                {news.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
                <div className="absolute top-4 right-4 flex gap-2">
                  <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                    <Bookmark className="h-4 w-4 text-white" />
                  </button>
                  <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                    <Share2 className="h-4 w-4 text-white" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-300 text-xs font-medium rounded-full">
                    {categories.find(c => c.id === news.category)?.name}
                  </span>
                  <span className="text-gray-400 text-sm">{news.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                  {news.title}
                </h3>
                
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {news.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {news.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {new Date(news.date).toLocaleDateString()}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {news.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-white/10 text-white text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link
                  to={`/news/${news.id}`}
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
        
        {filteredNews.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Newspaper className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl text-white mb-2">No news found</h3>
            <p className="text-gray-400">Try adjusting your search criteria or filters.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
=======
import React from 'react';
import { Link } from 'react-router-dom';

const News: React.FC = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Zion Tech Group Named Top AI Solutions Provider by Tech Industry Report",
      category: "Company News",
      date: "2025-01-15",
      author: "Zion Tech Group",
      excerpt: "We're proud to announce that Zion Tech Group has been recognized as a top AI solutions provider in the latest industry report, highlighting our innovative approach to enterprise AI implementation.",
      content: "The comprehensive industry analysis evaluated over 200 technology companies across multiple criteria including innovation, client success, technical expertise, and market impact. Zion Tech Group scored exceptionally well in all categories, particularly in AI implementation success rates and client satisfaction scores.",
      image: "/images/news/ai-award.jpg",
      tags: ["AI", "Awards", "Industry Recognition", "Innovation"],
      isFeatured: true,
      readTime: "3 min read"
    },
    {
      id: 2,
      title: "New Partnership with CloudTech Solutions Expands Our Global Reach",
      category: "Partnerships",
      date: "2025-01-12",
      author: "Business Development Team",
      excerpt: "Strategic partnership with CloudTech Solutions will enable us to deliver enhanced cloud infrastructure and DevOps services to clients worldwide.",
      content: "This partnership combines Zion Tech Group's AI expertise with CloudTech Solutions' global cloud infrastructure capabilities, creating a powerful combination that will benefit clients across all industries. The collaboration will focus on delivering integrated AI-powered cloud solutions.",
      image: "/images/news/partnership.jpg",
      tags: ["Partnerships", "Cloud", "Global Expansion", "DevOps"],
      isFeatured: false,
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "AI Ethics Framework Launched to Guide Responsible Technology Development",
      category: "Innovation",
      date: "2025-01-10",
      author: "AI Ethics Team",
      excerpt: "Our new AI Ethics Framework establishes guidelines for responsible AI development, ensuring our solutions prioritize human well-being and ethical considerations.",
      content: "The framework addresses critical issues such as bias prevention, transparency, privacy protection, and accountability in AI systems. It will be applied to all our AI development projects and shared with the broader technology community.",
      image: "/images/news/ai-ethics.jpg",
      tags: ["AI Ethics", "Responsible AI", "Innovation", "Transparency"],
      isFeatured: true,
      readTime: "5 min read"
    },
    {
      id: 4,
      title: "Cybersecurity Division Achieves ISO 27001 Certification",
      category: "Security",
      date: "2025-01-08",
      author: "Cybersecurity Team",
      excerpt: "Our cybersecurity division has achieved ISO 27001 certification, demonstrating our commitment to the highest standards of information security management.",
      content: "This certification validates our comprehensive approach to information security, covering all aspects of our cybersecurity services from risk assessment to incident response. It provides our clients with confidence in our security practices.",
      image: "/images/news/iso-certification.jpg",
      tags: ["Cybersecurity", "Certification", "ISO 27001", "Security Standards"],
      isFeatured: false,
      readTime: "3 min read"
    },
    {
      id: 5,
      title: "New Research Paper: 'The Future of AI in Healthcare'",
      category: "Research",
      date: "2025-01-05",
      author: "Dr. Sarah Chen",
      excerpt: "Our latest research paper explores the transformative potential of AI in healthcare, examining current applications and future possibilities.",
      content: "The paper analyzes successful AI implementations in healthcare, identifies key challenges and opportunities, and provides a roadmap for healthcare organizations looking to adopt AI technologies. It's based on real-world case studies and industry research.",
      image: "/images/news/healthcare-research.jpg",
      tags: ["Research", "Healthcare", "AI", "Innovation"],
      isFeatured: false,
      readTime: "8 min read"
    },
    {
      id: 6,
      title: "Zion Tech Group Expands European Operations with New Office in Berlin",
      category: "Company News",
      date: "2025-01-03",
      author: "International Expansion Team",
      excerpt: "New Berlin office will serve as our European headquarters, strengthening our presence in the region and expanding our service capabilities.",
      content: "The Berlin office will focus on serving European clients with localized expertise while maintaining our global standards. This expansion reflects the growing demand for our services in the European market.",
      image: "/images/news/berlin-office.jpg",
      tags: ["Expansion", "Europe", "International Growth", "Berlin"],
      isFeatured: false,
      readTime: "3 min read"
    },
    {
      id: 7,
      title: "Industry Webinar: 'Digital Transformation in Manufacturing'",
      category: "Events",
      date: "2025-01-01",
      author: "Events Team",
      excerpt: "Join our manufacturing experts for an insightful webinar on digital transformation strategies and implementation best practices.",
      content: "This webinar will cover key topics including Industry 4.0 implementation, IoT integration, AI-powered predictive maintenance, and change management strategies. Industry leaders will share their experiences and insights.",
      image: "/images/news/manufacturing-webinar.jpg",
      tags: ["Webinar", "Manufacturing", "Digital Transformation", "Industry 4.0"],
      isFeatured: false,
      readTime: "2 min read"
    },
    {
      id: 8,
      title: "Client Success Story: Financial Services Giant Achieves 60% Cost Reduction",
      category: "Client Success",
      date: "2024-12-28",
      author: "Client Success Team",
      excerpt: "Major financial institution achieves remarkable cost savings through our AI-powered process automation solution.",
      content: "The implementation involved automating complex financial processes, reducing manual errors, and improving operational efficiency. The results exceeded initial projections and have set new industry benchmarks.",
      image: "/images/news/financial-success.jpg",
      tags: ["Client Success", "Financial Services", "Cost Reduction", "AI Automation"],
      isFeatured: true,
      readTime: "4 min read"
    }
  ];

  const categories = [
    { name: "All News", count: 8, active: true },
    { name: "Company News", count: 2, active: false },
    { name: "Partnerships", count: 1, active: false },
    { name: "Innovation", count: 1, active: false },
    { name: "Security", count: 1, active: false },
    { name: "Research", count: 1, active: false },
    { name: "Events", count: 1, active: false },
    { name: "Client Success", count: 1, active: false }
  ];

  const featuredNews = newsArticles.filter(article => article.isFeatured);
  const regularNews = newsArticles.filter(article => !article.isFeatured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              News & Updates
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay informed about our latest developments, industry insights, client successes, 
              and technological innovations that are shaping the future of business.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  category.active
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Featured Stories</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredNews.map((article) => (
                <div key={article.id} className="bg-slate-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="h-64 bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-2xl font-bold mb-2">{article.category}</div>
                      <div className="text-sm opacity-90">Featured Story</div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium">
                        {article.category}
                      </span>
                      <span className="ml-3 text-sm text-gray-500">{article.date}</span>
                      <span className="ml-3 text-sm text-gray-500">•</span>
                      <span className="ml-3 text-sm text-gray-500">{article.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-slate-900 mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300">
                      Read Full Article →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular News Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularNews.map((article) => (
              <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-lg font-bold mb-1">{article.category}</div>
                    <div className="text-xs opacity-90">News</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium">
                      {article.category}
                    </span>
                    <span className="ml-2 text-xs text-gray-500">{article.date}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-slate-900 mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">{article.readTime}</div>
                    <button className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors duration-300">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Press Releases</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Official announcements and media resources for journalists and stakeholders.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Zion Tech Group Announces Q4 2024 Financial Results
              </h3>
              <p className="text-gray-600 mb-4">
                Strong performance driven by AI solutions growth and international expansion.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">January 15, 2025</span>
                <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors duration-300">
                  Download PDF →
                </button>
              </div>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                New Executive Appointments Strengthen Leadership Team
              </h3>
              <p className="text-gray-600 mb-4">
                Strategic hires bring deep expertise in AI, cybersecurity, and international markets.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">January 10, 2025</span>
                <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors duration-300">
                  Download PDF →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Media Resources</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Access our media kit, company logos, executive photos, and other resources for journalists and media professionals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Company Logos</h3>
              <p className="text-gray-600 text-sm mb-4">
                High-resolution logos in various formats for print and digital use.
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-300">
                Download Logos
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Executive Photos</h3>
              <p className="text-gray-600 text-sm mb-4">
                Professional headshots of our executive team for media use.
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-300">
                Download Photos
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Company Fact Sheet</h3>
              <p className="text-gray-600 text-sm mb-4">
                Key facts, statistics, and company information for media reference.
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-300">
                Download Fact Sheet
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl text-blue-100 mb-8">
            Subscribe to our newsletter for the latest news, insights, and updates from Zion Tech Group.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Contact Media */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Media Inquiries</h2>
          <p className="text-lg text-gray-600 mb-8">
            For press inquiries, interviews, or media requests, please contact our communications team.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Press Contact</h3>
              <p className="text-gray-600">press@ziontechgroup.com</p>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Media Relations</h3>
              <p className="text-gray-600">media@ziontechgroup.com</p>
              <p className="text-gray-600">+1 (555) 123-4568</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
>>>>>>> origin/cursor/website-audit-and-enhancement-cf0c
