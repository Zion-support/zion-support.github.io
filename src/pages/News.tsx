import React from 'react';
import { motion } from 'framer-motion';
import { 
  CalendarIcon,
  ClockIcon,
  UserIcon,
  TagIcon,
  ArrowRightIcon,
  NewspaperIcon
} from '@heroicons/react/24/outline';

const News: React.FC = () => {
  const breakingNews = [
    {
      id: 1,
      title: 'Zion Tech Group Announces Breakthrough in Quantum AI Integration',
      excerpt: 'Revolutionary new platform combines quantum computing with artificial intelligence to solve previously intractable problems.',
      author: 'Press Team',
      date: '2025-01-20',
      time: '2 hours ago',
      category: 'Company News',
      priority: 'breaking',
      image: '/images/news/quantum-ai-breakthrough.jpg'
    },
    {
      id: 2,
      title: 'Major Partnership with Fortune 500 Company Announced',
      excerpt: 'Strategic collaboration to deploy AI-powered solutions across enterprise operations.',
      author: 'Business Development',
      date: '2025-01-19',
      time: '1 day ago',
      category: 'Partnerships',
      priority: 'high',
      image: '/images/news/partnership-announcement.jpg'
    }
  ];

  const latestNews = [
    {
      id: 3,
      title: 'New AI Research Lab Opens in Silicon Valley',
      excerpt: 'State-of-the-art facility to focus on next-generation AI algorithms and autonomous systems.',
      author: 'Research Team',
      date: '2025-01-18',
      time: '2 days ago',
      category: 'Research & Development',
      image: '/images/news/research-lab-opening.jpg'
    },
    {
      id: 4,
      title: 'Cybersecurity Division Receives Industry Recognition',
      excerpt: 'Award-winning security solutions recognized for innovation and effectiveness.',
      author: 'Security Team',
      date: '2025-01-17',
      time: '3 days ago',
      category: 'Awards & Recognition',
      image: '/images/news/cybersecurity-award.jpg'
    },
    {
      id: 5,
      title: 'Expansion into European Markets Announced',
      excerpt: 'Strategic move to serve growing demand for AI solutions in European markets.',
      author: 'International Team',
      date: '2025-01-16',
      time: '4 days ago',
      category: 'Business Expansion',
      image: '/images/news/european-expansion.jpg'
    },
    {
      id: 6,
      title: 'New AI Ethics Advisory Board Formed',
      excerpt: 'Leading experts to guide responsible AI development and deployment.',
      author: 'Ethics Team',
      date: '2025-01-15',
      time: '5 days ago',
      category: 'AI Ethics',
      image: '/images/news/ethics-advisory-board.jpg'
    },
    {
      id: 7,
      title: 'Quantum Computing Milestone Achieved',
      excerpt: 'Successfully demonstrated quantum advantage in complex optimization problems.',
      author: 'Quantum Team',
      date: '2025-01-14',
      time: '6 days ago',
      category: 'Quantum Technology',
      image: '/images/news/quantum-milestone.jpg'
    },
    {
      id: 8,
      title: 'AI-Powered Healthcare Solutions Launch',
      excerpt: 'Revolutionary diagnostic tools now available for healthcare providers.',
      author: 'Healthcare Team',
      date: '2025-01-13',
      time: '1 week ago',
      category: 'Healthcare AI',
      image: '/images/news/healthcare-solutions.jpg'
    }
  ];

  const pressReleases = [
    {
      id: 9,
      title: 'Q4 2024 Financial Results Exceed Expectations',
      excerpt: 'Strong performance driven by AI solutions adoption and market expansion.',
      author: 'Finance Team',
      date: '2025-01-12',
      category: 'Financial Results',
      type: 'Press Release'
    },
    {
      id: 10,
      title: 'New Board Member Appointment',
      excerpt: 'Industry veteran joins board to strengthen strategic direction.',
      author: 'Board of Directors',
      date: '2025-01-11',
      category: 'Corporate Governance',
      type: 'Press Release'
    }
  ];

  const categories = [
    'All News',
    'Company News',
    'Partnerships',
    'Research & Development',
    'Awards & Recognition',
    'Business Expansion',
    'AI Ethics',
    'Quantum Technology',
    'Healthcare AI',
    'Financial Results',
    'Corporate Governance'
  ];

  const featuredNews = newsArticles.filter(article => article.featured);
  const recentNews = newsArticles.slice(0, 3);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
    { id: 'all', name: 'All News', icon: Newspaper, count: 18 },
    { id: 'ai', name: 'AI & ML', icon: Brain, count: 6 },
    { id: 'innovation', name: 'Innovation', icon: Rocket, count: 4 },
    { id: 'security', name: 'Security', icon: Shield, count: 3 },
    { id: 'cloud', name: 'Cloud Tech', icon: Cloud, count: 3 },
    { id: 'business', name: 'Business', icon: TrendingUp, count: 2 }
  ];

  const newsArticles = [
    {
      id: 1,
      title: "Zion Tech Group Launches Revolutionary AI-Powered Business Intelligence Platform",
      excerpt: "The new platform combines advanced machine learning algorithms with real-time data analytics to provide unprecedented business insights...",
      author: "Zion Tech Press",
      date: "2024-01-20",
      readTime: "5 min read",
      views: "5.2k",
      category: "ai",
      tags: ["AI Platform", "Business Intelligence", "Product Launch", "Machine Learning"],
      image: "/api/placeholder/400/250",
      featured: true,
      breaking: true
    },
    {
      id: 2,
      title: "Major Breakthrough in Quantum Computing Research Announced",
      excerpt: "Scientists at Zion Tech Group have achieved a significant milestone in quantum error correction, bringing practical quantum computing closer to reality...",
      author: "Research Team",
      date: "2024-01-18",
      readTime: "7 min read",
      views: "3.8k",
      category: "innovation",
      tags: ["Quantum Computing", "Research", "Breakthrough", "Technology"],
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Newspaper, 
  Calendar, 
  Tag, 
  ArrowRight, 
  Clock, 
  User,
  TrendingUp,
  Lightbulb,
  Globe,
  Zap,
  Award,
  Users
} from 'lucide-react';

const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Zion Tech Group Launches Revolutionary AI Autonomous Business Platform",
      excerpt: "Our latest AI platform transforms how businesses operate with autonomous decision-making and process optimization.",
      category: "Product Launch",
      date: "2024-01-15",
      author: "Zion Tech Team",
      readTime: "5 min read",
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: 2,
      title: "Quantum Computing Breakthrough: New Algorithm Achieves 100x Speed Improvement",
      excerpt: "Our quantum research team has developed a groundbreaking algorithm that significantly outperforms classical computing methods.",
      category: "Research & Development",
      date: "2024-01-10",
      author: "Dr. Sarah Chen",
      readTime: "8 min read",
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-9620
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
<<<<<<< HEAD
=======
<<<<<<< HEAD
      title: "Zion Tech Group Expands Global Operations with New European Office",
      excerpt: "The company opens its first European headquarters in Berlin, Germany, to better serve clients across the European Union...",
      author: "Corporate Communications",
      date: "2024-01-16",
      readTime: "4 min read",
      views: "2.9k",
      category: "business",
      tags: ["Global Expansion", "European Market", "Business Growth", "International"],
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
      title: "Cybersecurity in the AI Era: New Threats and Solutions",
      excerpt: "As AI becomes more prevalent, we explore the evolving cybersecurity landscape and our innovative defense strategies.",
      category: "Cybersecurity",
      date: "2024-01-08",
      author: "Michael Rodriguez",
      readTime: "6 min read",
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-9620
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
<<<<<<< HEAD
=======
<<<<<<< HEAD
      title: "New Cybersecurity Framework Released for Enterprise Clients",
      excerpt: "Zion Tech Group introduces comprehensive security framework designed to protect against emerging cyber threats...",
      author: "Security Team",
      date: "2024-01-14",
      readTime: "6 min read",
      views: "4.1k",
      category: "security",
      tags: ["Cybersecurity", "Enterprise", "Security Framework", "Threat Protection"],
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
      title: "The Future of Work: How AI is Reshaping Industries",
      excerpt: "Discover how artificial intelligence is transforming traditional industries and creating new opportunities for growth.",
      category: "Industry Insights",
      date: "2024-01-05",
      author: "Jennifer Kim",
      readTime: "7 min read",
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-9620
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
<<<<<<< HEAD
=======
<<<<<<< HEAD
      title: "Partnership Announced with Leading Cloud Infrastructure Provider",
      excerpt: "Strategic collaboration to deliver enhanced cloud solutions and accelerate digital transformation for enterprise clients...",
      author: "Partnership Team",
      date: "2024-01-12",
      readTime: "5 min read",
      views: "3.3k",
      category: "cloud",
      tags: ["Partnership", "Cloud Infrastructure", "Digital Transformation", "Enterprise"],
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
      title: "Zion Tech Group Named Top AI Company by Tech Innovators Association",
      excerpt: "We're honored to be recognized for our contributions to AI innovation and technological advancement.",
      category: "Company News",
      date: "2024-01-03",
      author: "Zion Tech Team",
      readTime: "3 min read",
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-9620
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
<<<<<<< HEAD
=======
<<<<<<< HEAD
      title: "Zion Tech Group Recognized as Top AI Solutions Provider",
      excerpt: "Industry recognition for excellence in artificial intelligence solutions and innovative technology implementations...",
      author: "Awards Team",
      date: "2024-01-10",
      readTime: "4 min read",
      views: "2.7k",
      category: "ai",
      tags: ["Awards", "Recognition", "AI Solutions", "Industry Leadership"],
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
      title: "Micro SAAS Revolution: Democratizing Technology for Small Businesses",
      excerpt: "Learn how our micro SAAS solutions are making enterprise-grade technology accessible to businesses of all sizes.",
      category: "Product Updates",
      date: "2024-01-01",
      author: "David Thompson",
      readTime: "5 min read",
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-9620
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
      image: "/api/placeholder/400/250"
    }
  ];

<<<<<<< HEAD
=======
<<<<<<< HEAD
  const filteredArticles = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

<<<<<<< HEAD
  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : Newspaper;
  };

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'General';
  };

  const toggleBookmark = (articleId: number) => {
    // This would typically update a state or make an API call
    console.log('Toggle bookmark for article:', articleId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header Section */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Latest News & Updates
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Stay informed about our latest developments, partnerships, innovations, 
            and the impact we're making in the world of technology.
          </motion.p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  index === 0
                    ? 'bg-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Breaking News */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Breaking News
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {breakingNews.map((news, index) => (
              <motion.article
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <div className="text-6xl text-purple-400/30">📰</div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      news.priority === 'breaking' 
                        ? 'bg-red-500/20 text-red-400' 
                        : 'bg-purple-500/20 text-purple-400'
                    }`}>
                      {news.priority === 'breaking' ? 'BREAKING' : 'HIGH PRIORITY'}
                    </span>
                    <span className="text-gray-400 text-xs">•</span>
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">
                      {news.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors duration-200">
                    {news.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {news.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <UserIcon className="h-4 w-4" />
                      <span>{news.author}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <ClockIcon className="h-4 w-4" />
                      <span>{news.time}</span>
                    </div>
                  </div>
                  
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                    <span>Read Full Story</span>
                    <ArrowRightIcon className="h-4 w-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* Latest News */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Latest News
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestNews.map((news, index) => (
              <motion.article
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <div className="text-4xl text-purple-400/30">📰</div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">
                      {news.category}
                    </span>
                    <span className="text-gray-400 text-xs">•</span>
                    <span className="text-gray-400 text-xs">{news.time}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors duration-200 line-clamp-2">
                    {news.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {news.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span>{news.author}</span>
                    <span>{new Date(news.date).toLocaleDateString()}</span>
                  </div>
                  
                  <button className="w-full px-4 py-2 bg-white/10 border border-white/20 text-white font-medium rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2">
                    <span>Read More</span>
                    <ArrowRightIcon className="h-4 w-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* Press Releases */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Press Releases
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pressReleases.map((release, index) => (
              <motion.article
                key={release.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <NewspaperIcon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">
                        {release.type}
                      </span>
                      <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">
                        {release.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {release.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {release.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>{release.author}</span>
                      <span>{new Date(release.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
                
                <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                  <span>Read Press Release</span>
                  <ArrowRightIcon className="h-4 w-4" />
                </button>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* Media Contact */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Media Inquiries
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              For press inquiries, media interviews, or additional information about our company and services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                Contact Media Relations
              </button>
              <button className="px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300">
                Download Press Kit
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation Links */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Explore More</h3>
            <p className="text-gray-300">Discover our services, team, and company information</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/services" className="group">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-green-400/50 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors">Our Services</h4>
                    <p className="text-gray-300 text-sm">Explore our AI and technology solutions</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors" />
                </div>
              </div>
            </Link>
            
            <Link to="/about" className="group">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-green-400/50 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors">About Us</h4>
                    <p className="text-gray-300 text-sm">Learn about our company and mission</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors" />
                </div>
              </div>
            </Link>
            
            <Link to="/contact" className="group">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-green-400/50 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors">Contact Us</h4>
                    <p className="text-gray-300 text-sm">Get in touch with our team</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-9620
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
=======
      title: 'Zion Tech Group Named Top AI Company by Tech Innovation Awards',
      excerpt: 'Recognition for our groundbreaking work in autonomous AI systems and machine learning solutions that are transforming industries worldwide.',
      date: '2025-01-10',
      category: 'Awards',
      image: '/images/news/ai-awards.jpg'
    },
    {
      id: 3,
      title: 'Partnership Announced with Leading Healthcare Provider',
      excerpt: 'Strategic collaboration to deploy AI-powered diagnostic tools across multiple healthcare facilities, improving patient outcomes and operational efficiency.',
      date: '2025-01-05',
      category: 'Partnerships',
      image: '/images/news/healthcare-partnership.jpg'
    },
    {
      id: 4,
      title: 'New Research Paper on Quantum Machine Learning Published',
      excerpt: 'Our research team publishes groundbreaking findings on the intersection of quantum computing and machine learning algorithms.',
      date: '2024-12-28',
      category: 'Research',
      image: '/images/news/quantum-ml-research.jpg'
    },
    {
      id: 5,
      title: 'Zion Tech Group Expands Global Operations',
      excerpt: 'Opening new offices in Europe and Asia to better serve our growing international client base and accelerate global innovation.',
      date: '2024-12-20',
      category: 'Company News',
      image: '/images/news/global-expansion.jpg'
    },
    {
      id: 6,
      title: 'Cybersecurity Solutions Achieve Industry Certification',
      excerpt: 'Our advanced cybersecurity platform receives SOC2 Type II certification, demonstrating the highest standards of security and compliance.',
      date: '2024-12-15',
      category: 'Security',
      image: '/images/news/cybersecurity-certification.jpg'
    }
  ];

  const categories = ['All', 'Product Launch', 'Awards', 'Partnerships', 'Research', 'Company News', 'Security'];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="News & Updates - Zion Tech Group" 
        description="Stay updated with the latest news, press releases, and announcements from Zion Tech Group"
        keywords="news, updates, press releases, announcements, Zion Tech Group"
        canonical="https://ziontechgroup.com/news"
      />

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            News & Updates
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Stay informed about the latest developments, product launches, partnerships, 
            and innovations from Zion Tech Group as we continue to shape the future of technology.
          </p>
        </div>

        {/* Featured News */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Featured News</h2>
          {newsItems.filter(item => item.featured).map((item) => (
            <div key={item.id} className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-3xl p-8 border border-cyan-500/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-cyan-500 text-white text-sm font-medium rounded-full">
                      {item.category}
                    </span>
                    <span className="text-gray-400 text-sm">
                      {new Date(item.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">{item.excerpt}</p>
                  <Link 
                    to={`/news/${item.id}`}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-medium"
                  >
                    Read Full Article
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                <div className="w-full h-64 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center">
                  <svg className="w-16 h-16 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Latest News Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.filter(item => !item.featured).map((item) => (
              <div key={item.id} className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 group">
                <div className="w-full h-48 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-t-2xl flex items-center justify-center">
                  <svg className="w-12 h-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs font-medium rounded-full">
                      {item.category}
                    </span>
                    <span className="text-gray-400 text-xs">
                      {new Date(item.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>
                  <Link 
                    to={`/news/${item.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium group"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Press Kit & Media */}
        <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-3xl p-8 border border-purple-500/20 mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Press Kit & Media Resources</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Journalists and media professionals can access our press kit, company logos, 
              high-resolution images, and executive bios for media coverage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/press-kit.zip"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-medium"
              >
                Download Press Kit
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
              <Link 
                to="/contact"
                className="inline-flex items-center px-6 py-3 border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500/10 transition-all duration-300 font-medium"
              >
                Contact PR Team
              </Link>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Stay Updated</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Subscribe to our newsletter to receive the latest news, product updates, 
            and insights directly in your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-r-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-medium">
                Subscribe
=======
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-3ce5
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-b7ac
=======
}
>>>>>>> origin/cursor/website-audit-and-enhancement-3ce5
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
