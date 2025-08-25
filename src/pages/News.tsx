import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  User, 
  Tag, 
  ArrowRight, 
  Search, 
  Filter,
  Clock,
  Eye,
  ExternalLink,
  TrendingUp,
  Award,
  Globe
} from 'lucide-react';

export default function News() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Company News',
    'Product Updates',
    'Industry Insights',
    'Awards & Recognition',
    'Partnerships',
    'Research & Development',
    'Market Trends'
  ];

  const newsItems = [
    {
      id: 1,
      title: "Zion Tech Group Named Top AI Solutions Provider 2025",
      excerpt: "Leading technology research firm recognizes Zion Tech Group for excellence in AI-powered business solutions and innovation.",
      content: "Zion Tech Group has been recognized as a Top AI Solutions Provider for 2025 by TechResearch Insights, a leading technology research and advisory firm. This recognition highlights our commitment to delivering cutting-edge AI solutions that drive real business value...",
      author: "Zion Tech Group",
      publishDate: "2025-01-20",
      readTime: "3 min read",
      views: "5.2k",
      category: "Awards & Recognition",
      tags: ["Award", "AI Solutions", "Recognition", "2025"],
      featured: true,
      image: "/images/news/award-2025.jpg",
      externalLink: null,
      isPressRelease: true
    },
    {
      id: 2,
      title: "New Quantum Neural Network Platform Launch",
      excerpt: "Revolutionary quantum computing platform now available for enterprise customers, offering unprecedented computational power.",
      content: "Zion Tech Group is excited to announce the launch of our revolutionary Quantum Neural Network Platform, a breakthrough in quantum computing technology that combines the power of quantum mechanics with advanced neural network architectures...",
      author: "Dr. Sarah Chen",
      publishDate: "2025-01-18",
      readTime: "5 min read",
      views: "3.8k",
      category: "Product Updates",
      tags: ["Quantum Computing", "Neural Networks", "Product Launch", "Innovation"],
      featured: true,
      image: "/images/news/quantum-platform-launch.jpg",
      externalLink: null,
      isPressRelease: true
    },
    {
      id: 3,
      title: "Partnership with Global Tech Leaders Announced",
      excerpt: "Strategic collaboration to accelerate AI adoption across enterprise markets and drive innovation in emerging technologies.",
      content: "Zion Tech Group is pleased to announce a strategic partnership with leading global technology companies to accelerate the adoption of AI solutions across enterprise markets. This collaboration will focus on developing next-generation AI technologies...",
      author: "James Wilson",
      publishDate: "2025-01-15",
      readTime: "4 min read",
      views: "2.9k",
      category: "Partnerships",
      tags: ["Partnership", "AI Adoption", "Enterprise", "Collaboration"],
      featured: false,
      image: "/images/news/partnership-announcement.jpg",
      externalLink: null,
      isPressRelease: true
    },
    {
      id: 4,
      title: "AI Research Breakthrough in Autonomous Systems",
      excerpt: "New research demonstrates significant improvements in AI autonomous decision-making capabilities and operational efficiency.",
      content: "Our research team has achieved a major breakthrough in AI autonomous systems, demonstrating significant improvements in decision-making capabilities and operational efficiency. The research, published in leading AI journals, shows...",
      author: "Dr. Michael Rodriguez",
      publishDate: "2025-01-12",
      readTime: "6 min read",
      views: "4.1k",
      category: "Research & Development",
      tags: ["Research", "AI", "Autonomous Systems", "Breakthrough"],
      featured: false,
      image: "/images/news/ai-research-breakthrough.jpg",
      externalLink: null,
      isPressRelease: false
    },
    {
      id: 5,
      title: "Industry Report: AI Adoption in Manufacturing 2025",
      excerpt: "Comprehensive analysis of AI adoption trends in manufacturing sector reveals significant growth opportunities and challenges.",
      content: "Zion Tech Group has released a comprehensive industry report analyzing AI adoption trends in the manufacturing sector for 2025. The report, based on data from over 500 manufacturing companies worldwide, reveals significant growth opportunities...",
      author: "Lisa Thompson",
      publishDate: "2025-01-10",
      readTime: "7 min read",
      views: "3.3k",
      category: "Industry Insights",
      tags: ["Industry Report", "Manufacturing", "AI Adoption", "Trends"],
      featured: false,
      image: "/images/news/manufacturing-ai-report.jpg",
      externalLink: null,
      isPressRelease: false
    },
    {
      id: 6,
      title: "SOC2 Compliance Automation Tool Update",
      excerpt: "Enhanced compliance automation platform now supports additional regulatory frameworks and improved reporting capabilities.",
      content: "We're excited to announce a major update to our SOC2 Compliance Automation Tool, which now supports additional regulatory frameworks and provides enhanced reporting capabilities. The update includes...",
      author: "Alex Kim",
      publishDate: "2025-01-08",
      readTime: "4 min read",
      views: "2.7k",
      category: "Product Updates",
      tags: ["SOC2", "Compliance", "Automation", "Update"],
      featured: false,
      image: "/images/news/soc2-update.jpg",
      externalLink: null,
      isPressRelease: true
    },
    {
      id: 7,
      title: "Market Analysis: Quantum Computing Investment Trends",
      excerpt: "Analysis of global quantum computing investment patterns shows accelerating growth and emerging market opportunities.",
      content: "Our market analysis team has released a comprehensive report on global quantum computing investment trends, revealing accelerating growth and emerging market opportunities. The analysis covers...",
      author: "David Park",
      publishDate: "2025-01-05",
      readTime: "8 min read",
      views: "2.4k",
      category: "Market Trends",
      tags: ["Market Analysis", "Quantum Computing", "Investment", "Trends"],
      featured: false,
      image: "/images/news/quantum-investment-trends.jpg",
      externalLink: null,
      isPressRelease: false
    },
    {
      id: 8,
      title: "Customer Success Story: Fortune 500 Digital Transformation",
      excerpt: "How a Fortune 500 company achieved 40% operational efficiency improvement using our AI solutions.",
      content: "We're proud to share the success story of how one of our Fortune 500 clients achieved a 40% improvement in operational efficiency using our AI-powered digital transformation solutions. The project involved...",
      author: "Emily Johnson",
      publishDate: "2025-01-03",
      readTime: "5 min read",
      views: "3.6k",
      category: "Company News",
      tags: ["Customer Success", "Digital Transformation", "AI Solutions", "Case Study"],
      featured: false,
      image: "/images/news/fortune500-success.jpg",
      externalLink: null,
      isPressRelease: false
    },
    {
      id: 9,
      title: "New Office Opening in Silicon Valley",
      excerpt: "Expansion into Silicon Valley strengthens our presence in the heart of technology innovation and talent acquisition.",
      content: "Zion Tech Group is excited to announce the opening of our new office in Silicon Valley, strengthening our presence in the heart of technology innovation and talent acquisition. The new facility will serve as...",
      author: "Zion Tech Group",
      publishDate: "2024-12-30",
      readTime: "3 min read",
      views: "2.1k",
      category: "Company News",
      tags: ["Expansion", "Silicon Valley", "Office Opening", "Growth"],
      featured: false,
      image: "/images/news/silicon-valley-office.jpg",
      externalLink: null,
      isPressRelease: true
    },
    {
      id: 10,
      title: "AI Ethics and Responsible AI Development",
      excerpt: "Commitment to ethical AI development and responsible technology deployment in all our solutions.",
      content: "Zion Tech Group reaffirms our commitment to ethical AI development and responsible technology deployment. We believe that AI technology should be developed and deployed in ways that benefit humanity while minimizing potential risks...",
      author: "Dr. Sarah Chen",
      publishDate: "2024-12-28",
      readTime: "6 min read",
      views: "2.8k",
      category: "Company News",
      tags: ["AI Ethics", "Responsible AI", "Technology", "Commitment"],
      featured: false,
      image: "/images/news/ai-ethics-commitment.jpg",
      externalLink: null,
      isPressRelease: false
    }
  ];

  const filteredNews = newsItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredNews = newsItems.filter(item => item.featured);
  const regularNews = filteredNews.filter(item => !item.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Latest News & Updates
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Stay informed about our latest developments, product updates, industry insights, 
              and company milestones as we continue to innovate and grow.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search news, updates, or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured News */}
      {featuredNews.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured News</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredNews.map((item) => (
              <article
                key={item.id}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-cyan-500"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-medium rounded-full">
                      Featured
                    </span>
                    <span className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                      {item.category}
                    </span>
                    {item.isPressRelease && (
                      <span className="px-3 py-1 bg-red-600 text-white text-xs rounded-full">
                        Press Release
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {item.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        {item.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {formatDate(item.publishDate)}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {item.readTime}
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Eye className="w-4 h-4 mr-2" />
                      {item.views}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center group">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}

      {/* Regular News */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Latest Updates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularNews.map((item) => (
            <article
              key={item.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-cyan-500"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                    {item.category}
                  </span>
                  {item.isPressRelease && (
                    <span className="px-3 py-1 bg-red-600 text-white text-xs rounded-full">
                      Press Release
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                  {item.title}
                </h3>
                
                <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                  {item.excerpt}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      {item.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(item.publishDate)}
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Clock className="w-4 h-4 mr-2" />
                    {item.readTime}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.slice(0, 2).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center group">
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Press Room CTA */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 border-t border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Press & Media Inquiries
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Journalists and media representatives can access our press kit, 
              high-resolution images, and contact our media relations team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Contact Media Relations
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button className="inline-flex items-center justify-center px-8 py-4 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-medium rounded-lg transition-all duration-200">
                Download Press Kit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}