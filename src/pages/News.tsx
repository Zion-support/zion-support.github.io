import React from 'react';
import SEOHead from '@/components/SEOHead';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  User, 
  Tag, 
  ArrowRight, 
  Search,
  Filter,
  Clock,
  TrendingUp,
  Globe,
  Brain,
  Shield,
  Cloud
} from 'lucide-react';

export default function News() {
  const newsArticles = [
    {
      id: 1,
      title: "Zion Tech Group Launches Revolutionary AI Autonomous Business Platform 2029",
      excerpt: "Our latest AI platform revolutionizes business operations with autonomous decision-making capabilities, setting new industry standards for intelligent automation.",
      content: "Zion Tech Group is proud to announce the launch of our groundbreaking AI Autonomous Business Platform 2029. This revolutionary platform represents a paradigm shift in how businesses approach automation and decision-making...",
      author: "Dr. Kleber Santos",
      date: "2025-01-15",
      category: "AI & Technology",
      tags: ["AI", "Business Platform", "Innovation", "Automation"],
      image: "/images/news/ai-platform-2029.jpg",
      featured: true,
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Cybersecurity Breakthrough: AI-Powered Threat Detection Achieves 99.9% Accuracy",
      excerpt: "Our AI autonomous security systems have achieved unprecedented accuracy in threat detection, providing enterprise-level protection for businesses worldwide.",
      content: "In a major breakthrough for cybersecurity, Zion Tech Group's AI autonomous security systems have achieved 99.9% accuracy in threat detection...",
      author: "Sarah Chen",
      date: "2025-01-10",
      category: "Cybersecurity",
      tags: ["Cybersecurity", "AI", "Threat Detection", "Security"],
      image: "/images/news/cybersecurity-breakthrough.jpg",
      featured: false,
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "Quantum Computing Partnership: Zion Tech Group Collaborates with Leading Research Institutions",
      excerpt: "Strategic partnerships with top research institutions accelerate our quantum technology initiatives and position us at the forefront of quantum computing innovation.",
      content: "Zion Tech Group is excited to announce strategic partnerships with leading research institutions to accelerate our quantum technology initiatives...",
      author: "Dr. Michael Rodriguez",
      date: "2025-01-08",
      category: "Research & Development",
      tags: ["Quantum Computing", "Research", "Partnerships", "Innovation"],
      image: "/images/news/quantum-partnership.jpg",
      featured: false,
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "5G Enterprise Solutions: Transforming Business Connectivity and Operations",
      excerpt: "Our 5G enterprise solutions are enabling businesses to achieve unprecedented levels of connectivity, speed, and operational efficiency.",
      content: "As 5G technology continues to evolve, Zion Tech Group is at the forefront of developing enterprise-grade solutions that leverage the full potential of this revolutionary connectivity standard...",
      author: "Alex Thompson",
      date: "2025-01-05",
      category: "Infrastructure",
      tags: ["5G", "Enterprise", "Connectivity", "Infrastructure"],
      image: "/images/news/5g-enterprise.jpg",
      featured: false,
      readTime: "4 min read"
    },
    {
      id: 5,
      title: "Micro SAAS Revolution: How Small Solutions Are Solving Big Business Problems",
      excerpt: "Our micro SAAS approach is democratizing enterprise software, making powerful business tools accessible to organizations of all sizes.",
      content: "The software-as-a-service landscape is evolving, and Zion Tech Group is leading the charge with our innovative micro SAAS approach...",
      author: "Jennifer Park",
      date: "2025-01-03",
      category: "Software Solutions",
      tags: ["SAAS", "Micro Services", "Business Solutions", "Innovation"],
      image: "/images/news/micro-saas.jpg",
      featured: false,
      readTime: "7 min read"
    },
    {
      id: 6,
      title: "Digital Transformation Success Story: Manufacturing Company Achieves 300% ROI",
      excerpt: "A comprehensive digital transformation initiative results in unprecedented efficiency gains and return on investment for a leading manufacturing company.",
      content: "Digital transformation isn't just about technology—it's about fundamentally changing how businesses operate and deliver value to their customers...",
      author: "David Kim",
      date: "2024-12-28",
      category: "Case Studies",
      tags: ["Digital Transformation", "ROI", "Manufacturing", "Success Story"],
      image: "/images/news/digital-transformation.jpg",
      featured: false,
      readTime: "8 min read"
    }
  ];

  const categories = [
    { name: "All", count: newsArticles.length, active: true },
    { name: "AI & Technology", count: 2, active: false },
    { name: "Cybersecurity", count: 1, active: false },
    { name: "Research & Development", count: 1, active: false },
    { name: "Infrastructure", count: 1, active: false },
    { name: "Software Solutions", count: 1, active: false },
    { name: "Case Studies", count: 1, active: false }
  ];

  const featuredArticle = newsArticles.find(article => article.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEOHead
        title="Latest News - Zion Tech Group"
        description="Stay updated with the latest developments in AI, cybersecurity, and technology innovation from Zion Tech Group and the industry."
        keywords="Zion Tech Group, AI, cybersecurity, technology, news, innovation"
      />
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Latest
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {" "}News
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Stay updated with the latest developments in AI, cybersecurity, 
              and technology innovation from Zion Tech Group and the industry.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search news articles..."
                  className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                category.active
                  ? 'bg-cyan-500 text-white'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </div>

      {/* Featured Article */}
      {featuredArticle && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Featured Article
          </h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-sm text-slate-400">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full">
                    {featuredArticle.category}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(featuredArticle.date).toLocaleDateString()}
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {featuredArticle.readTime}
                  </span>
                </div>
                
                <h3 className="text-3xl font-bold text-white leading-tight">
                  {featuredArticle.title}
                </h3>
                
                <p className="text-lg text-slate-300 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="flex items-center text-slate-400">
                    <User className="h-4 w-4 mr-2" />
                    {featuredArticle.author}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {featuredArticle.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link
                  to={`/news/${featuredArticle.id}`}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-medium"
                >
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              
              <div className="bg-slate-700/30 rounded-xl h-64 flex items-center justify-center">
                <div className="text-center text-slate-400">
                  <Globe className="h-16 w-16 mx-auto mb-4" />
                  <p>Article Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* News Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Latest Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.filter(article => !article.featured).map((article, index) => (
            <article
              key={article.id}
              className="bg-slate-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/30 hover:border-cyan-500/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="bg-slate-700/30 h-48 flex items-center justify-center">
                <div className="text-center text-slate-400">
                  <Globe className="h-12 w-12 mx-auto mb-2" />
                  <p className="text-sm">Article Image</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                    {article.category}
                  </span>
                  <span className="text-slate-400 text-sm">
                    {new Date(article.date).toLocaleDateString()}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-slate-300 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-slate-400 text-sm">
                    <User className="h-4 w-4 mr-1" />
                    {article.author}
                  </div>
                  <span className="text-slate-400 text-sm">
                    {article.readTime}
                  </span>
                </div>
                
                <div className="mt-4 pt-4 border-t border-slate-700/30">
                  <Link
                    to={`/news/${article.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-12 text-center border border-cyan-500/30">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights, industry updates, 
            and exclusive content from Zion Tech Group.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-lg transition-all duration-200 font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
