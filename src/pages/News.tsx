import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  User, 
  Tag, 
  ArrowRight, 
  Search, 
  Filter,
  Clock,
  Eye,
  Share2,
  Bookmark,
  TrendingUp,
  Lightbulb,
  Code,
  Brain,
  Shield,
  Cloud,
  Globe,
  Zap,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Newspaper,
  Megaphone,
  Award,
  Users,
  Building,
  Rocket,
  Target,
  CheckCircle
} from 'lucide-react';

const News: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All News', icon: <Newspaper className="w-4 h-4" /> },
    { id: 'company', name: 'Company News', icon: <Building className="w-4 h-4" /> },
    { id: 'press', name: 'Press Releases', icon: <Megaphone className="w-4 h-4" /> },
    { id: 'awards', name: 'Awards & Recognition', icon: <Award className="w-4 h-4" /> },
    { id: 'partnerships', name: 'Partnerships', icon: <Users className="w-4 h-4" /> },
    { id: 'innovation', name: 'Innovation', icon: <Lightbulb className="w-4 h-4" /> },
    { id: 'industry', name: 'Industry Updates', icon: <TrendingUp className="w-4 h-4" /> }
  ];

  const newsItems = [
    {
      id: 1,
      title: "Zion Tech Group Named Top AI Innovation Company 2024",
      excerpt: "We're proud to announce that Zion Tech Group has been recognized as one of the top AI innovation companies of 2024 by Tech Innovation Awards.",
      content: "Zion Tech Group has been honored with the prestigious 'Top AI Innovation Company 2024' award, recognizing our groundbreaking work in artificial intelligence and autonomous business solutions. This recognition highlights our commitment to pushing the boundaries of what's possible with AI technology...",
      author: "Zion Tech Group",
      authorRole: "Press Release",
      authorAvatar: "/avatars/zion-tech.jpg",
      date: "2024-01-20",
      readTime: "3 min read",
      category: "awards",
      tags: ["Awards", "AI Innovation", "Recognition", "2024"],
      featured: true,
      views: 25420,
      image: "/news/top-ai-company-2024.jpg",
      type: "press-release"
    },
    {
      id: 2,
      title: "New Partnership with Microsoft Azure for Enhanced AI Solutions",
      excerpt: "Strategic partnership announced to deliver enterprise-grade AI solutions powered by Microsoft Azure's advanced cloud infrastructure.",
      content: "Zion Tech Group is excited to announce a strategic partnership with Microsoft Azure to deliver enhanced AI solutions to enterprise clients. This partnership combines our expertise in AI development with Azure's robust cloud infrastructure...",
      author: "Zion Tech Group",
      authorRole: "Partnership Announcement",
      authorAvatar: "/avatars/zion-tech.jpg",
      date: "2024-01-18",
      readTime: "4 min read",
      category: "partnerships",
      tags: ["Partnership", "Microsoft Azure", "AI Solutions", "Enterprise"],
      featured: false,
      views: 18920,
      image: "/news/microsoft-azure-partnership.jpg",
      type: "partnership"
    },
    {
      id: 3,
      title: "Launch of Revolutionary AI-Powered Business Platform",
      excerpt: "Introducing our latest AI platform that transforms how businesses operate with autonomous decision-making capabilities.",
      content: "Today marks a significant milestone in business technology as we launch our revolutionary AI-powered business platform. This platform represents the culmination of years of research and development in artificial intelligence...",
      author: "Zion Tech Group",
      authorRole: "Product Launch",
      authorAvatar: "/avatars/zion-tech.jpg",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "innovation",
      tags: ["Product Launch", "AI Platform", "Business Automation", "Innovation"],
      featured: false,
      views: 15680,
      image: "/news/ai-business-platform-launch.jpg",
      type: "product-launch"
    },
    {
      id: 4,
      title: "Expansion to European Market with New Office in London",
      excerpt: "Zion Tech Group expands its global presence with a new European headquarters in London, UK.",
      content: "Zion Tech Group is expanding its global footprint with the opening of our new European headquarters in London, UK. This expansion represents our commitment to serving clients across Europe and strengthening our international presence...",
      author: "Zion Tech Group",
      authorRole: "Company Expansion",
      authorAvatar: "/avatars/zion-tech.jpg",
      date: "2024-01-12",
      readTime: "3 min read",
      category: "company",
      tags: ["Expansion", "Europe", "London", "Global Growth"],
      featured: false,
      views: 12450,
      image: "/news/london-office-expansion.jpg",
      type: "company-news"
    },
    {
      id: 5,
      title: "Cybersecurity Excellence Award for Zero-Trust Implementation",
      excerpt: "Recognized for outstanding cybersecurity practices and innovative zero-trust security implementation.",
      content: "Zion Tech Group has been awarded the Cybersecurity Excellence Award for our innovative implementation of zero-trust security frameworks. This recognition highlights our commitment to protecting client data and systems...",
      author: "Zion Tech Group",
      authorRole: "Security Achievement",
      authorAvatar: "/avatars/zion-tech.jpg",
      date: "2024-01-10",
      readTime: "4 min read",
      category: "awards",
      tags: ["Cybersecurity", "Zero-Trust", "Award", "Security"],
      featured: false,
      views: 9870,
      image: "/news/cybersecurity-award.jpg",
      type: "award"
    },
    {
      id: 6,
      title: "New AI Research Lab Opening in Silicon Valley",
      excerpt: "State-of-the-art AI research facility to accelerate innovation in artificial intelligence and machine learning.",
      content: "Zion Tech Group is proud to announce the opening of our new AI research lab in Silicon Valley. This state-of-the-art facility will serve as our primary research and development center for artificial intelligence...",
      author: "Zion Tech Group",
      authorRole: "Research & Development",
      authorAvatar: "/avatars/zion-tech.jpg",
      date: "2024-01-08",
      readTime: "3 min read",
      category: "innovation",
      tags: ["AI Research", "Silicon Valley", "R&D", "Innovation"],
      featured: false,
      views: 8760,
      image: "/news/silicon-valley-lab.jpg",
      type: "company-news"
    },
    {
      id: 7,
      title: "Strategic Investment from Leading Venture Capital Firms",
      excerpt: "Major investment round to accelerate growth and expand AI capabilities across all business lines.",
      content: "Zion Tech Group has secured a significant investment round from leading venture capital firms, including Sequoia Capital and Andreessen Horowitz. This investment will accelerate our growth and expand our AI capabilities...",
      author: "Zion Tech Group",
      authorRole: "Investment News",
      authorAvatar: "/avatars/zion-tech.jpg",
      date: "2024-01-05",
      readTime: "4 min read",
      category: "company",
      tags: ["Investment", "Venture Capital", "Growth", "Funding"],
      featured: false,
      views: 7650,
      image: "/news/venture-capital-investment.jpg",
      type: "company-news"
    },
    {
      id: 8,
      title: "Industry Recognition for Sustainable Technology Practices",
      excerpt: "Acknowledged for commitment to green computing and sustainable technology development.",
      content: "Zion Tech Group has been recognized by the Green Technology Association for our commitment to sustainable technology practices. Our green computing initiatives and sustainable development approach have set new industry standards...",
      author: "Zion Tech Group",
      authorRole: "Sustainability Achievement",
      authorAvatar: "/avatars/zion-tech.jpg",
      date: "2024-01-03",
      readTime: "3 min read",
      category: "awards",
      tags: ["Sustainability", "Green Technology", "Recognition", "Environment"],
      featured: false,
      views: 6540,
      image: "/news/sustainable-tech-award.jpg",
      type: "award"
    }
  ];

  const featuredNews = newsItems.find(item => item.featured);
  const filteredNews = newsItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
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

  const getNewsTypeIcon = (type: string) => {
    switch (type) {
      case 'press-release':
        return <Megaphone className="w-4 h-4" />;
      case 'partnership':
        return <Users className="w-4 h-4" />;
      case 'product-launch':
        return <Rocket className="w-4 h-4" />;
      case 'company-news':
        return <Building className="w-4 h-4" />;
      case 'award':
        return <Award className="w-4 h-4" />;
      default:
        return <Newspaper className="w-4 h-4" />;
    }
  };

  const getNewsTypeLabel = (type: string) => {
    switch (type) {
      case 'press-release':
        return 'Press Release';
      case 'partnership':
        return 'Partnership';
      case 'product-launch':
        return 'Product Launch';
      case 'company-news':
        return 'Company News';
      case 'award':
        return 'Award';
      default:
        return 'News';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Latest News & Updates
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Stay informed about Zion Tech Group's latest developments, 
              achievements, and industry insights.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <Newspaper className="w-4 h-4" />
                <span>Company News</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <Award className="w-4 h-4" />
                <span>Awards & Recognition</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <Rocket className="w-4 h-4" />
                <span>Innovation Updates</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews && (
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Featured News
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Our most important announcements and updates
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 lg:p-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full flex items-center space-x-2">
                      {getNewsTypeIcon(featuredNews.type)}
                      <span>{getNewsTypeLabel(featuredNews.type)}</span>
                    </span>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">
                      {formatDate(featuredNews.date)}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    {featuredNews.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                    {featuredNews.excerpt}
                  </p>
                  
                  <div className="flex items-center space-x-6 mb-6">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {featuredNews.readTime}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Eye className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {featuredNews.views.toLocaleString()} views
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2">
                      <span>Read Full Article</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      <Bookmark className="w-5 h-5" />
                    </button>
                    <button className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Newspaper className="w-8 h-8" />
                      </div>
                      <p className="text-sm opacity-80">News Image</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Latest News
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Stay updated with our latest announcements, achievements, and industry insights
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
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                >
                  <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Newspaper className="w-6 h-6" />
                      </div>
                      <p className="text-xs opacity-80">News Image</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-3">
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full flex items-center space-x-1">
                        {getNewsTypeIcon(item.type)}
                        <span>{getNewsTypeLabel(item.type)}</span>
                      </span>
                      <span className="text-gray-500 text-sm">
                        {formatDate(item.date)}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                      {item.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                          <Building className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {item.author}
                          </p>
                          <p className="text-xs text-gray-500">
                            {item.authorRole}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span>{item.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {item.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <button className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
                        <ArrowUpRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No news found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Press Contact */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Press & Media Inquiries
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              For press inquiries, media interviews, or additional information about Zion Tech Group, 
              please contact our communications team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Contact Press Team
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Download Press Kit
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated with Zion Tech Group
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get the latest company news, product updates, and industry insights 
              delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm opacity-80 mt-4">
              No spam, unsubscribe at any time
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default News;
