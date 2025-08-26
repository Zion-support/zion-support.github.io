<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search, 
  Calendar, 
  Clock, 
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
>>>>>>> origin/cursor/website-audit-and-enhancement-5c03
  User, 
  Tag, 
  ArrowRight,
  Newspaper,
  TrendingUp,
<<<<<<< HEAD
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
=======
import React from 'react';
import { Newspaper, Calendar, User, Tag, ArrowRight, ExternalLink, Award, Users, Globe, Zap } from 'lucide-react';
>>>>>>> origin/cursor/website-audit-and-enhancement-438b

=======
  Award,
  Globe
} from 'lucide-react';

>>>>>>> origin/cursor/website-audit-and-enhancement-5c03
const News: React.FC = () => {
  const newsArticles = [
    {
      id: 1,
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
      title: "Zion Tech Group Launches Revolutionary AI-Powered Autonomous Business Platform",
      excerpt: "Our latest innovation combines quantum computing with advanced AI to create the world's first truly autonomous business decision-making system.",
      category: "Product Launch",
      author: "Dr. Sarah Chen",
      date: "January 15, 2025",
      readTime: "5 min read",
      image: "/images/news/ai-platform-launch.jpg",
      featured: true,
      tags: ["AI", "Quantum Computing", "Autonomous Systems"]
    },
    {
      id: 2,
      title: "Zion Tech Group Recognized as Top 10 AI Company by Tech Innovators Magazine",
      excerpt: "We're honored to be recognized for our groundbreaking work in artificial intelligence and quantum computing solutions.",
      category: "Company News",
      author: "Michael Rodriguez",
      date: "January 12, 2025",
      readTime: "3 min read",
      image: "/images/news/award-recognition.jpg",
      featured: false,
      tags: ["Awards", "AI", "Recognition"]
    },
    {
      id: 3,
      title: "New Partnership with Global Tech Consortium Announced",
      excerpt: "Strategic collaboration to accelerate quantum computing research and development across multiple industries.",
      category: "Partnerships",
      author: "Lisa Thompson",
      date: "January 10, 2025",
      readTime: "4 min read",
      image: "/images/news/partnership-announcement.jpg",
      featured: false,
      tags: ["Partnerships", "Quantum Computing", "Research"]
    },
    {
      id: 4,
      title: "Cybersecurity Breakthrough: Zero-Day Threat Detection System",
      excerpt: "Our security team has developed an AI-powered system that can detect and neutralize zero-day threats before they become active.",
      category: "Innovation",
      author: "David Park",
      date: "January 8, 2025",
      readTime: "6 min read",
      image: "/images/news/cybersecurity-breakthrough.jpg",
      featured: false,
      tags: ["Cybersecurity", "AI", "Threat Detection"]
    },
    {
      id: 5,
      title: "Zion Tech Group Expands to European Markets",
      excerpt: "Strategic expansion brings our cutting-edge AI and quantum solutions to European enterprises and research institutions.",
      category: "Company News",
      author: "Amanda Foster",
      date: "January 5, 2025",
      readTime: "4 min read",
      image: "/images/news/european-expansion.jpg",
      featured: false,
      tags: ["Expansion", "Europe", "Global Growth"]
    },
    {
      id: 6,
      title: "Research Paper: Quantum Neural Networks for Financial Modeling",
      excerpt: "Our research team publishes groundbreaking findings on applying quantum computing to complex financial modeling and risk assessment.",
      category: "Research",
      author: "Dr. James Kim",
      date: "January 3, 2025",
      readTime: "8 min read",
      image: "/images/news/quantum-research.jpg",
      featured: false,
      tags: ["Research", "Quantum Computing", "Finance"]
    }
  ];

  const pressReleases = [
    {
      title: "Zion Tech Group Announces Q4 2024 Financial Results",
      date: "January 20, 2025",
      summary: "Strong growth in AI solutions and quantum computing services drives record quarterly revenue."
    },
    {
      title: "New Board of Directors Appointments",
      date: "January 18, 2025",
      summary: "Industry leaders join to guide company's strategic direction and global expansion."
    },
    {
      title: "Major Contract Win with Fortune 500 Company",
      date: "January 16, 2025",
      summary: "Multi-year agreement to implement AI-powered business transformation solutions."
>>>>>>> origin/cursor/website-audit-and-enhancement-438b
=======
      title: "Zion Tech Group Launches Revolutionary AI-Powered Cybersecurity Platform",
      excerpt: "Our new AI-driven security solution combines machine learning with advanced threat detection to provide enterprise-grade protection for businesses of all sizes.",
      category: "Product Launch",
      author: "Zion Tech Group",
      date: "2025-01-15",
      readTime: "3 min read",
      tags: ["AI", "Cybersecurity", "Product Launch"],
      featured: true
    },
    {
      id: 2,
      title: "Zion Tech Group Recognized as Top 10 AI Companies in 2025",
      excerpt: "We're proud to announce that Zion Tech Group has been named one of the top 10 AI companies by TechInsights Magazine for our innovative solutions and industry impact.",
      category: "Awards",
      author: "Zion Tech Group",
      date: "2025-01-10",
      readTime: "2 min read",
      tags: ["Awards", "AI", "Recognition"],
      featured: false
    },
    {
      id: 3,
      title: "Partnership Announcement: Zion Tech Group and Microsoft Azure",
      excerpt: "We're excited to announce a strategic partnership with Microsoft Azure to deliver enhanced cloud solutions and AI services to our enterprise clients.",
      category: "Partnerships",
      author: "Zion Tech Group",
      date: "2025-01-05",
      readTime: "4 min read",
      tags: ["Partnerships", "Microsoft", "Azure", "Cloud"],
      featured: false
    },
    {
      id: 4,
      title: "Zion Tech Group Expands to European Market",
      excerpt: "We're expanding our global presence with new offices in London and Berlin, bringing our innovative technology solutions to European businesses.",
      category: "Company News",
      author: "Zion Tech Group",
      date: "2024-12-20",
      readTime: "3 min read",
      tags: ["Expansion", "Europe", "Global Growth"],
      featured: false
    },
    {
      id: 5,
      title: "New Research: The Future of AI in Healthcare",
      excerpt: "Our research team has published groundbreaking findings on the application of AI in healthcare, showcasing potential improvements in patient care and medical diagnostics.",
      category: "Research",
      author: "Dr. Sarah Chen",
      date: "2024-12-15",
      readTime: "5 min read",
      tags: ["Research", "AI", "Healthcare", "Innovation"],
      featured: false
    },
    {
      id: 6,
      title: "Zion Tech Group Achieves SOC 2 Type II Certification",
      excerpt: "We're proud to announce that Zion Tech Group has achieved SOC 2 Type II certification, demonstrating our commitment to the highest standards of security and compliance.",
      category: "Compliance",
      author: "Zion Tech Group",
      date: "2024-12-10",
      readTime: "2 min read",
      tags: ["Compliance", "Security", "SOC 2", "Certification"],
      featured: false
>>>>>>> origin/cursor/website-audit-and-enhancement-5c03
    }
  ];

  const categories = [
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
    "All News",
    "Product Launch",
    "Company News",
    "Partnerships",
    "Innovation",
    "Research",
    "Press Releases"
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("All News");
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredArticles = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === "All News" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6">
              <Newspaper className="w-4 h-4 mr-2" />
              Latest News
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Stay Updated with
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Get the latest updates on our innovations, partnerships, research breakthroughs, 
              and company milestones as we continue to push the boundaries of technology.
>>>>>>> origin/cursor/website-audit-and-enhancement-438b
            </p>
          </div>
        </div>
      </section>

<<<<<<< HEAD
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
=======
      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search news and articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 bg-slate-700/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-700/50 text-gray-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-438b
          </div>
        </div>
      </section>

<<<<<<< HEAD
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
=======
      {/* Featured Article */}
      {filteredArticles.filter(article => article.featured).length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-white/10 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12">
                  <div className="mb-4">
                    <span className="inline-flex items-center px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-full">
                      {filteredArticles.filter(article => article.featured)[0]?.category}
                    </span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    {filteredArticles.filter(article => article.featured)[0]?.title}
                  </h2>
                  <p className="text-gray-300 mb-6">
                    {filteredArticles.filter(article => article.featured)[0]?.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-400 mb-6">
                    <User className="w-4 h-4 mr-2" />
                    {filteredArticles.filter(article => article.featured)[0]?.author}
                    <span className="mx-2">•</span>
                    <Calendar className="w-4 h-4 mr-2" />
                    {filteredArticles.filter(article => article.featured)[0]?.date}
                    <span className="mx-2">•</span>
                    <span>{filteredArticles.filter(article => article.featured)[0]?.readTime}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {filteredArticles.filter(article => article.featured)[0]?.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-slate-700/50 text-gray-300 text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={`/news/${filteredArticles.filter(article => article.featured)[0]?.id}`}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
                <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center p-8">
                  <div className="text-center">
                    <Newspaper className="w-32 h-32 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Featured Story</h3>
                    <p className="text-gray-300">Latest breakthrough in AI and quantum computing</p>
                  </div>
                </div>
              </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-438b
            </div>
          </div>
        </section>
      )}

<<<<<<< HEAD
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
=======
      {/* News Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.filter(article => !article.featured).map((article) => (
              <article
                key={article.id}
                className="bg-slate-800/50 border border-white/10 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-flex items-center px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-400 mb-4">
                    <User className="w-4 h-4 mr-2" />
                    {article.author}
                    <span className="mx-2">•</span>
                    <Calendar className="w-4 h-4 mr-2" />
                    {article.date}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={`/news/${article.id}`}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Press Releases
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Official announcements and company updates from Zion Tech Group.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pressReleases.map((release, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-3">
                  {release.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {release.summary}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">{release.date}</span>
                  <a
                    href={`/press-releases/${index + 1}`}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200"
                  >
                    Read Release
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
>>>>>>> origin/cursor/website-audit-and-enhancement-438b
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
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
=======
      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-blue-500/30">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay in the Loop
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              Subscribe to our newsletter for the latest updates, research insights, 
              and technology breakthroughs delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-slate-700/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Have questions about our latest news or want to learn more about our innovations? 
            Our team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Us
            </a>
            <a
              href="/about"
              className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Learn More
            </a>
>>>>>>> origin/cursor/website-audit-and-enhancement-438b
=======
    { name: "All", count: newsArticles.length, active: true },
    { name: "Product Launch", count: 1, active: false },
    { name: "Awards", count: 1, active: false },
    { name: "Partnerships", count: 1, active: false },
    { name: "Company News", count: 1, active: false },
    { name: "Research", count: 1, active: false },
    { name: "Compliance", count: 1, active: false }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

=======
import React from 'react';
import { Link } from 'react-router-dom';

const News: React.FC = () => {
  const newsArticles = [
    {
      title: "Zion Tech Group Launches AI-Powered Business Operations Platform",
      excerpt: "New platform revolutionizes how businesses manage operations with autonomous AI systems and intelligent automation.",
      date: "March 15, 2024",
      category: "Company News",
      readTime: "3 min read"
    },
    {
      title: "Partnership with Microsoft Azure Expands Cloud Solutions Portfolio",
      excerpt: "Strategic collaboration brings advanced cloud infrastructure and AI services to enterprise clients worldwide.",
      date: "March 10, 2024",
      category: "Partnerships",
      readTime: "2 min read"
    },
    {
      title: "Cybersecurity Innovation: Zero-Trust Architecture Implementation",
      excerpt: "Breakthrough security framework provides comprehensive protection against evolving cyber threats.",
      date: "March 5, 2024",
      category: "Technology",
      readTime: "4 min read"
    },
    {
      title: "Quantum Computing Research Breakthrough Announced",
      excerpt: "Research team achieves significant milestone in quantum algorithm optimization for financial modeling.",
      date: "February 28, 2024",
      category: "Research",
      readTime: "5 min read"
    }
  ];

>>>>>>> origin/cursor/website-audit-and-enhancement-67e4
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
          {/* Hero Section */}
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-67e4
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Latest
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}News
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
<<<<<<< HEAD
              Stay updated with the latest company news, product launches, industry insights, and technological breakthroughs from Zion Tech Group.
            </p>
          </div>

          {/* Featured Article */}
          {newsArticles.filter(article => article.featured).map(article => (
            <div key={article.id} className="mb-16">
              <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-lg rounded-xl p-8 border border-blue-500/30">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full font-medium">
                    Featured
                  </span>
                  <span className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full">
                    {article.category}
                  </span>
                </div>
                <h2 className="text-3xl font-bold mb-4">{article.title}</h2>
                <p className="text-xl text-gray-300 mb-6">{article.excerpt}</p>
                <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {article.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {formatDate(article.date)}
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4" />
                    {article.readTime}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {article.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/10 text-blue-300 text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/news/${article.id}`}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                >
                  Read Full Article
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}

          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map(category => (
                <button
                  key={category.name}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    category.active
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.filter(article => !article.featured).map(article => (
              <article key={article.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-400">{article.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 line-clamp-2">{article.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3">{article.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {article.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {formatDate(article.date)}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="px-2 py-1 bg-white/10 text-blue-300 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/news/${article.id}`}
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors"
                >
                  Read More
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-lg rounded-xl p-8 border border-blue-500/30">
              <Newspaper className="w-16 h-16 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter to receive the latest news, product updates, and industry insights directly in your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-5c03
=======
              Stay updated with the latest developments, innovations, and insights from Zion Tech Group
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {newsArticles.map((article, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                <div className="mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">{article.category}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{article.title}</h3>
                <p className="text-gray-300 mb-4">{article.excerpt}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
                
                <div className="mt-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    Read More
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
              <p className="text-gray-300 mb-6">
                Subscribe to our newsletter for the latest news, insights, and updates 
                from Zion Tech Group.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Subscribe to Newsletter
              </Link>
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-67e4
          </div>
        </div>
      </section>
    </div>
  );
};

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export default News;
>>>>>>> origin/cursor/website-audit-and-enhancement-cf0c
=======
export default News;
>>>>>>> origin/cursor/website-audit-and-enhancement-438b
=======
export default News;
>>>>>>> origin/cursor/website-audit-and-enhancement-5c03
=======
export default News;
>>>>>>> origin/cursor/website-audit-and-enhancement-67e4
