import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import {
  Video,
  Calendar,
  Clock,
  Users,
  Play,
  Download,
  Search,
  Filter,
  Star,
  ExternalLink,
  ArrowRight,
  BookOpen,
  Brain,
  Cloud,
  Shield,
  Database,
  Zap,
  Globe,
  Target,
  TrendingUp,
  Award,
  CheckCircle,
  BarChart,
  PieChart,
  LineChart,
  Settings,
  Tool,
  Briefcase,
  Home,
  Building,
  Car,
  Truck,
  Plane,
  Ship,
  Leaf,
  Gauge,
  ShieldAlert,
  UserCheck,
  Users2,
  UserPlus,
  UserMinus,
  UserX,
  UserCog,
  UserEdit,
  UserSearch,
  UserVoice,
  UserCheck2,
  UserClock,
  UserStar,
  UserHeart,
  UserShield,
  UserZap,
  UserTrendingUp,
  UserTrendingDown,
  UserPlus2,
  UserMinus2,
  UserX2,
  UserCog2,
  UserEdit2,
  UserSearch2,
  UserVoice2,
  UserCheck3,
  UserClock2,
  UserStar2,
  UserHeart2,
  UserShield2,
  UserZap2,
  UserTrendingUp2,
  UserTrendingDown2
} from 'lucide-react';

interface Webinar {
  id: number;
  title: string;
  description: string;
  category: string;
  speaker: string;
  speakerTitle: string;
  speakerAvatar: string;
  date: string;
  time: string;
  duration: string;
  attendees: number;
  rating: number;
  reviewCount: number;
  featured: boolean;
  live: boolean;
  upcoming: boolean;
  recordingUrl?: string;
  slidesUrl?: string;
  tags: string[];
  image: string;
}

const Webinars: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filterType, setFilterType] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', icon: Video, count: 0 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 6 },
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: Cloud, count: 4 },
    { id: 'security', name: 'Cybersecurity', icon: Shield, count: 3 },
    { id: 'data', name: 'Data & Analytics', icon: Database, count: 5 },
    { id: 'emerging', name: 'Emerging Technologies', icon: Zap, count: 2 },
    { id: 'strategy', name: 'Digital Strategy', icon: Target, count: 4 }
  ];

  const filterTypes = [
    { id: 'all', name: 'All Webinars', count: 0 },
    { id: 'upcoming', name: 'Upcoming', count: 0 },
    { id: 'on-demand', name: 'On-Demand', count: 0 },
    { id: 'live', name: 'Live Now', count: 0 }
  ];

  const webinars: Webinar[] = [
    {
      id: 1,
      title: 'AI-Powered Business Intelligence: Transforming Data into Actionable Insights',
      description: 'Learn how to leverage AI and machine learning to transform your business data into actionable insights that drive growth and innovation.',
      category: 'ai-ml',
      speaker: 'Dr. Sarah Chen',
      speakerTitle: 'AI Research Director',
      speakerAvatar: '/avatars/sarah-chen.jpg',
      date: '2024-02-15',
      time: '2:00 PM EST',
      duration: '60 min',
      attendees: 1247,
      rating: 4.8,
      reviewCount: 89,
      featured: true,
      live: false,
      upcoming: true,
      tags: ['AI', 'Business Intelligence', 'Machine Learning', 'Data Analytics'],
      image: '/webinars/ai-business-intelligence.jpg'
    },
    {
      id: 2,
      title: 'Cloud Security Best Practices for Enterprise Organizations',
      description: 'Discover the latest cloud security strategies and best practices to protect your organization\'s data and infrastructure.',
      category: 'security',
      speaker: 'Michael Rodriguez',
      speakerTitle: 'Cybersecurity Expert',
      speakerAvatar: '/avatars/michael-rodriguez.jpg',
      date: '2024-02-10',
      time: '1:00 PM EST',
      duration: '45 min',
      attendees: 892,
      rating: 4.9,
      reviewCount: 67,
      featured: false,
      live: false,
      upcoming: false,
      recordingUrl: 'https://webinar.ziontechgroup.com/cloud-security',
      slidesUrl: 'https://slides.ziontechgroup.com/cloud-security',
      tags: ['Cloud Security', 'Enterprise', 'Best Practices', 'Compliance'],
      image: '/webinars/cloud-security.jpg'
    },
    {
      id: 3,
      title: 'Real-time Data Analytics with Modern Cloud Platforms',
      description: 'Explore how to build scalable real-time analytics solutions using modern cloud platforms and streaming technologies.',
      category: 'data',
      speaker: 'Emily Watson',
      speakerTitle: 'Data Engineering Lead',
      speakerAvatar: '/avatars/emily-watson.jpg',
      date: '2024-02-08',
      time: '3:00 PM EST',
      duration: '75 min',
      attendees: 567,
      rating: 4.7,
      reviewCount: 45,
      featured: false,
      live: false,
      upcoming: false,
      recordingUrl: 'https://webinar.ziontechgroup.com/real-time-analytics',
      slidesUrl: 'https://slides.ziontechgroup.com/real-time-analytics',
      tags: ['Real-time Analytics', 'Cloud Platforms', 'Streaming', 'Big Data'],
      image: '/webinars/real-time-analytics.jpg'
    },
    {
      id: 4,
      title: 'Quantum Computing: The Future of Problem Solving',
      description: 'An introduction to quantum computing and its potential applications in solving complex business problems.',
      category: 'emerging',
      speaker: 'Dr. Robert Kim',
      speakerTitle: 'Quantum Computing Researcher',
      speakerAvatar: '/avatars/robert-kim.jpg',
      date: '2024-02-20',
      time: '4:00 PM EST',
      duration: '90 min',
      attendees: 0,
      rating: 0,
      reviewCount: 0,
      featured: true,
      live: false,
      upcoming: true,
      tags: ['Quantum Computing', 'Future Technology', 'Problem Solving', 'Innovation'],
      image: '/webinars/quantum-computing.jpg'
    }
  ];

  const filteredWebinars = webinars.filter(webinar => {
    const matchesSearch = webinar.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         webinar.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         webinar.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || webinar.category === selectedCategory;
    
    let matchesFilter = true;
    if (filterType === 'upcoming') matchesFilter = webinar.upcoming;
    else if (filterType === 'on-demand') matchesFilter = !webinar.upcoming && !webinar.live;
    else if (filterType === 'live') matchesFilter = webinar.live;
    
    return matchesSearch && matchesCategory && matchesFilter;
  });

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.icon : Video;
  };

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.name : 'General';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Webinars - Zion Tech Group"
        description="Join our expert-led webinars on AI, cloud computing, cybersecurity, data analytics, and emerging technologies. Learn from industry leaders and gain valuable insights."
        keywords="webinars, online learning, AI webinars, cloud computing, cybersecurity, Zion Tech Group"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, currentColor 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Webinars
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Join our expert-led webinars and learn from industry leaders about the latest 
              trends in AI, cloud computing, cybersecurity, and emerging technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/20 mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Search Webinars</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search webinars..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Type</label>
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {filterTypes.map(type => (
                    <option key={type.id} value={type.id}>
                      {type.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Webinar */}
      {filteredWebinars.filter(w => w.featured).length > 0 && (
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Featured Webinar</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Don't miss our featured webinar with industry experts sharing valuable insights and practical knowledge.
              </p>
            </motion.div>

            {filteredWebinars.filter(w => w.featured).map((webinar, index) => (
              <motion.div
                key={webinar.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-8 border border-blue-500/30"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-yellow-500 text-yellow-900 text-sm font-medium rounded-full">
                        Featured
                      </span>
                      <span className="px-3 py-1 bg-blue-500 text-white text-sm font-medium rounded-full">
                        {getCategoryName(webinar.category)}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-4">{webinar.title}</h3>
                    <p className="text-gray-300 text-lg mb-6">{webinar.description}</p>
                    
                    <div className="flex items-center gap-6 mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-blue-400" />
                        <span className="text-gray-300">{new Date(webinar.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-blue-400" />
                        <span className="text-gray-300">{webinar.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-blue-400" />
                        <span className="text-gray-300">{webinar.attendees} attendees</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 mb-6">
                      <img
                        src={webinar.speakerAvatar}
                        alt={webinar.speaker}
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <div className="text-white font-semibold">{webinar.speaker}</div>
                        <div className="text-gray-400 text-sm">{webinar.speakerTitle}</div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {webinar.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-slate-700/50 text-gray-300 text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      {webinar.upcoming ? (
                        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors">
                          <Calendar className="w-5 h-5 inline mr-2" />
                          Register Now
                        </button>
                      ) : (
                        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors">
                          <Play className="w-5 h-5 inline mr-2" />
                          Watch Recording
                        </button>
                      )}
                      <button className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-xl transition-colors">
                        <Download className="w-5 h-5 inline mr-2" />
                        Download Slides
                      </button>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Play className="w-16 h-16 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* All Webinars */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">All Webinars</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Browse our complete collection of webinars covering various technology topics and industry insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWebinars.map((webinar, index) => (
              <motion.div
                key={webinar.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-600/20 hover:border-slate-500/40 transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-800">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
                  <div className="absolute top-4 left-4">
                    {webinar.featured && (
                      <span className="px-2 py-1 bg-yellow-500 text-yellow-900 text-xs font-medium rounded-full">
                        Featured
                      </span>
                    )}
                    {webinar.live && (
                      <span className="px-2 py-1 bg-red-500 text-white text-xs font-medium rounded-full ml-2">
                        Live Now
                      </span>
                    )}
                    {webinar.upcoming && (
                      <span className="px-2 py-1 bg-green-500 text-white text-xs font-medium rounded-full ml-2">
                        Upcoming
                      </span>
                    )}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded">
                      {getCategoryName(webinar.category)}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{webinar.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{webinar.description}</p>

                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(webinar.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{webinar.duration}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <img
                        src={webinar.speakerAvatar}
                        alt={webinar.speaker}
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <div className="text-white text-sm font-medium">{webinar.speaker}</div>
                        <div className="text-gray-400 text-xs">{webinar.speakerTitle}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white text-sm">{webinar.rating}</span>
                      <span className="text-gray-400 text-sm">({webinar.reviewCount})</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    {webinar.upcoming ? (
                      <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                        <Calendar className="w-4 h-4 inline mr-2" />
                        Register
                      </button>
                    ) : (
                      <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                        <Play className="w-4 h-4 inline mr-2" />
                        Watch
                      </button>
                    )}
                    <button className="bg-slate-700 hover:bg-slate-600 text-white p-2 rounded-lg transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredWebinars.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center py-12"
            >
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-300 text-lg">No webinars found matching your criteria.</p>
              <p className="text-gray-400 text-sm">Try adjusting your search terms or filters.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Our Webinars
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to get notified about upcoming webinars and access 
              exclusive content from industry experts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors">
                <Users className="w-5 h-5 inline mr-2" />
                Subscribe to Newsletter
              </button>
              <Link
                to="/contact"
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-colors"
              >
                <ExternalLink className="w-5 h-5 inline mr-2" />
                Request Custom Webinar
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Webinars;
