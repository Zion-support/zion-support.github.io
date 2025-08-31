import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Video,
  Calendar,
  Clock,
  Users,
  Play,
  Search,
  Filter,
  Star,
  Eye,
  Heart,
  Share2,
  ArrowRight,
  CheckCircle,
  Zap,
  Brain,
  Server,
  Shield,
  Cloud,
  Target,
  Rocket,
  BarChart3,
  User,
  Grid,
  List
} from 'lucide-react';

const Webinars: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    { id: 'all', name: 'All Categories', icon: Video, count: 67 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 18 },
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: Cloud, count: 12 },
    { id: 'security', name: 'Security & Compliance', icon: Shield, count: 15 },
    { id: 'data', name: 'Data & Analytics', icon: BarChart3, count: 10 },
    { id: 'digital', name: 'Digital Transformation', icon: Rocket, count: 8 },
    { id: 'industry', name: 'Industry Solutions', icon: Target, count: 4 }
  ];

  const webinarTypes = [
    { id: 'all', name: 'All Types', count: 67 },
    { id: 'upcoming', name: 'Upcoming', count: 12 },
    { id: 'live', name: 'Live Now', count: 3 },
    { id: 'recorded', name: 'Recorded', count: 45 },
    { id: 'series', name: 'Series', count: 7 }
  ];

  const webinars = [
    {
      id: 1,
      title: 'AI-Powered Business Intelligence: Transforming Decision Making',
      description: 'Learn how AI is revolutionizing business intelligence and enabling data-driven decision making across organizations. Discover practical implementation strategies and real-world success stories.',
      category: 'ai-ml',
      type: 'upcoming',
      host: 'Dr. Sarah Chen',
      date: '2025-01-25',
      time: '14:00',
      duration: '60 min',
      attendees: 0,
      maxAttendees: 500,
      rating: 4.8,
      featured: true,
      tags: ['AI', 'Business Intelligence', 'Decision Making', 'Analytics'],
      thumbnail: '/images/webinars/ai-business-intelligence.jpg',
      isLive: false,
      registrationRequired: true,
      series: null
    },
    {
      id: 2,
      title: 'Zero Trust Security: Implementation Best Practices',
      description: 'Join our security experts as they walk through the implementation of Zero Trust security architecture, covering design principles, deployment strategies, and real-world case studies.',
      category: 'security',
      type: 'live',
      host: 'Michael Rodriguez',
      date: '2025-01-20',
      time: '15:30',
      duration: '90 min',
      attendees: 342,
      maxAttendees: 1000,
      rating: 4.9,
      featured: true,
      tags: ['Security', 'Zero Trust', 'Cybersecurity', 'Implementation'],
      thumbnail: '/images/webinars/zero-trust-security.jpg',
      isLive: true,
      registrationRequired: false,
      series: null
    },
    {
      id: 3,
      title: 'Cloud-Native Application Development: From Theory to Practice',
      description: 'Master cloud-native development practices with hands-on examples and real-world case studies. Learn microservices architecture, containerization, and DevOps integration.',
      category: 'cloud',
      type: 'recorded',
      host: 'Jennifer Kim',
      date: '2025-01-15',
      time: '13:00',
      duration: '75 min',
      attendees: 1250,
      maxAttendees: 2000,
      rating: 4.7,
      featured: false,
      tags: ['Cloud', 'Development', 'Microservices', 'DevOps'],
      thumbnail: '/images/webinars/cloud-native-development.jpg',
      isLive: false,
      registrationRequired: false,
      series: 'Cloud Development Series'
    },
    {
      id: 4,
      title: 'Data Analytics for Business Leaders: Making Sense of Big Data',
      description: 'Business leaders will learn how to leverage data analytics to drive strategic decisions, improve operational efficiency, and gain competitive advantages.',
      category: 'data',
      type: 'upcoming',
      host: 'David Thompson',
      date: '2025-01-30',
      time: '10:00',
      duration: '45 min',
      attendees: 0,
      maxAttendees: 300,
      rating: 4.6,
      featured: false,
      tags: ['Analytics', 'Business Intelligence', 'Leadership', 'Strategy'],
      thumbnail: '/images/webinars/data-analytics-leaders.jpg',
      isLive: false,
      registrationRequired: true,
      series: 'Business Leadership Series'
    },
    {
      id: 5,
      title: 'Digital Transformation in Healthcare: Technology Trends and Implementation',
      description: 'Explore the latest technology trends transforming healthcare delivery and patient care in the digital age.',
      category: 'industry',
      type: 'recorded',
      host: 'Dr. Emily Watson',
      date: '2025-01-10',
      time: '11:00',
      duration: '60 min',
      attendees: 890,
      maxAttendees: 1500,
      rating: 4.8,
      featured: false,
      tags: ['Healthcare', 'Digital Health', 'Technology', 'Innovation'],
      thumbnail: '/images/webinars/healthcare-digital-transformation.jpg',
      isLive: false,
      registrationRequired: false,
      series: 'Healthcare Technology Series'
    },
    {
      id: 6,
      title: 'Machine Learning Operations (MLOps): Scaling AI in Enterprise',
      description: 'Learn how to implement MLOps practices to streamline machine learning model development, deployment, and monitoring in enterprise environments.',
      category: 'ai-ml',
      type: 'upcoming',
      host: 'Alex Johnson',
      date: '2025-02-05',
      time: '16:00',
      duration: '90 min',
      attendees: 0,
      maxAttendees: 600,
      rating: 4.7,
      featured: false,
      tags: ['MLOps', 'Machine Learning', 'DevOps', 'AI Operations'],
      thumbnail: '/images/webinars/mlops-enterprise.jpg',
      isLive: false,
      registrationRequired: true,
      series: 'AI Operations Series'
    }
  ];

  const filteredWebinars = webinars.filter(webinar => {
    const matchesSearch = webinar.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         webinar.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         webinar.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || webinar.category === selectedCategory;
    const matchesType = selectedType === 'all' || webinar.type === selectedType;
    return matchesSearch && matchesCategory && matchesType;
  });

  const upcomingWebinars = filteredWebinars.filter(w => w.type === 'upcoming');
  const liveWebinars = filteredWebinars.filter(w => w.type === 'live');
  const recordedWebinars = filteredWebinars.filter(w => w.type === 'recorded');

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleRegister = (webinarId: number, title: string) => {
    console.log(`Registering for: ${title}`);
  };

  const handleJoin = (webinarId: number, title: string) => {
    console.log(`Joining: ${title}`);
  };

  const handleWatch = (webinarId: number, title: string) => {
    console.log(`Watching: ${title}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Webinars
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Join our expert-led webinars to learn about the latest technology trends, 
              best practices, and innovative solutions from Zion Tech Group.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-slate-300">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                <span>Live & Recorded</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                <span>Expert Speakers</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                <span>Free Access</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Live Webinars Banner */}
      {liveWebinars.length > 0 && (
        <div className="bg-red-600/20 border-y border-red-500/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center space-x-3 text-red-400"
            >
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="font-semibold">
                {liveWebinars.length} webinar{liveWebinars.length > 1 ? 's' : ''} live now!
              </span>
              <Link
                to="#live-webinars"
                className="text-red-300 hover:text-white transition-colors underline"
              >
                Join now
              </Link>
            </motion.div>
          </div>
        </div>
      )}

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search webinars..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>

            {/* Type Filter */}
            <div>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                {webinarTypes.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.name} ({type.count})
                  </option>
                ))}
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex-1 px-4 py-3 rounded-lg transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                    : 'bg-slate-700/50 text-slate-400 border border-slate-600 hover:bg-slate-700/70'
                }`}
              >
                <Grid className="w-4 h-4 mx-auto" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`flex-1 px-4 py-3 rounded-lg transition-colors ${
                  viewMode === 'list'
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                    : 'bg-slate-700/50 text-slate-400 border border-slate-600 hover:bg-slate-700/70'
                }`}
              >
                <List className="w-4 h-4 mx-auto" />
              </button>
            </div>

            {/* Quick Actions */}
            <div className="flex space-x-3">
              <button className="flex-1 px-4 py-3 bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/30 transition-colors flex items-center justify-center">
                <Calendar className="w-4 h-4 mr-2" />
                My Webinars
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Results Count */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-slate-400"
        >
          Showing {filteredWebinars.length} of {webinars.length} webinars
        </motion.div>
      </div>

      {/* Live Webinars Section */}
      {liveWebinars.length > 0 && (
        <div id="live-webinars" className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse mr-3"></div>
              Live Now
            </h2>
            <p className="text-slate-300">Join these webinars happening right now!</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {liveWebinars.map((webinar, index) => (
              <motion.div
                key={webinar.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="bg-gradient-to-r from-red-600/20 to-red-500/10 border border-red-500/30 rounded-2xl p-6 relative overflow-hidden"
              >
                <div className="absolute top-4 right-4">
                  <div className="flex items-center space-x-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span>LIVE</span>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Video className="w-8 h-8 text-red-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {webinar.title}
                    </h3>
                    <p className="text-slate-300 text-sm mb-3 line-clamp-2">
                      {webinar.description}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-slate-400 mb-4">
                      <span className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{webinar.host}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{webinar.attendees} watching</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{webinar.duration}</span>
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleJoin(webinar.id, webinar.title)}
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Play className="w-4 h-4" />
                  <span>Join Now</span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Upcoming Webinars Section */}
      {upcomingWebinars.length > 0 && (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Upcoming Webinars</h2>
            <p className="text-slate-300">Register for these upcoming sessions</p>
          </motion.div>

          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-6'}>
            {upcomingWebinars.map((webinar, index) => (
              <motion.div
                key={webinar.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300 ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
              >
                {viewMode === 'grid' ? (
                  // Grid View
                  <div className="p-6">
                    {webinar.featured && (
                      <div className="inline-block bg-cyan-500 text-slate-900 px-3 py-1 rounded-full text-xs font-medium mb-4">
                        Featured
                      </div>
                    )}
                    
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-2 text-slate-400 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(webinar.date)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-slate-300">{webinar.rating}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {webinar.title}
                    </h3>
                    
                    <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                      {webinar.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {webinar.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                      <span className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{webinar.host}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{webinar.time} • {webinar.duration}</span>
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-400">
                        {webinar.attendees} registered
                      </span>
                      <button
                        onClick={() => handleRegister(webinar.id, webinar.title)}
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 flex items-center space-x-2"
                      >
                        <Calendar className="w-4 h-4" />
                        <span>Register</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  // List View
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        {webinar.featured && (
                          <div className="inline-block bg-cyan-500 text-slate-900 px-3 py-1 rounded-full text-xs font-medium mb-3">
                            Featured
                          </div>
                        )}
                        
                        <h3 className="text-xl font-bold text-white mb-2">
                          {webinar.title}
                        </h3>
                        
                        <p className="text-slate-400 text-sm mb-3 line-clamp-2">
                          {webinar.description}
                        </p>

                        <div className="flex items-center space-x-6 text-sm text-slate-500 mb-3">
                          <span className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{webinar.host}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(webinar.date)}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{webinar.time} • {webinar.duration}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{webinar.attendees} registered</span>
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {webinar.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col items-end space-y-3 ml-6">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-slate-300">{webinar.rating}</span>
                        </div>
                        
                        <button
                          onClick={() => handleRegister(webinar.id, webinar.title)}
                          className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 flex items-center space-x-2"
                        >
                          <Calendar className="w-4 h-4" />
                          <span>Register</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Recorded Webinars Section */}
      {recordedWebinars.length > 0 && (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Recorded Webinars</h2>
            <p className="text-slate-300">Watch past webinars on-demand</p>
          </motion.div>

          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-6'}>
            {recordedWebinars.map((webinar, index) => (
              <motion.div
                key={webinar.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300 ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
              >
                {viewMode === 'grid' ? (
                  // Grid View
                  <div className="p-6">
                    {webinar.featured && (
                      <div className="inline-block bg-cyan-500 text-slate-900 px-3 py-1 rounded-full text-xs font-medium mb-4">
                        Featured
                      </div>
                    )}
                    
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-2 text-slate-400 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(webinar.date)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-slate-300">{webinar.rating}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {webinar.title}
                    </h3>
                    
                    <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                      {webinar.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {webinar.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                      <span className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{webinar.host}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{webinar.duration}</span>
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-400">
                        {webinar.attendees} views
                      </span>
                      <button
                        onClick={() => handleWatch(webinar.id, webinar.title)}
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 flex items-center space-x-2"
                      >
                        <Play className="w-4 h-4" />
                        <span>Watch</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  // List View
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        {webinar.featured && (
                          <div className="inline-block bg-cyan-500 text-slate-900 px-3 py-1 rounded-full text-xs font-medium mb-3">
                            Featured
                          </div>
                        )}
                        
                        <h3 className="text-xl font-bold text-white mb-2">
                          {webinar.title}
                        </h3>
                        
                        <p className="text-slate-400 text-sm mb-3 line-clamp-2">
                          {webinar.description}
                        </p>

                        <div className="flex items-center space-x-6 text-sm text-slate-500 mb-3">
                          <span className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{webinar.host}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(webinar.date)}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{webinar.duration}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>{webinar.attendees} views</span>
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {webinar.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col items-end space-y-3 ml-6">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-slate-300">{webinar.rating}</span>
                        </div>
                        
                        <button
                          onClick={() => handleWatch(webinar.id, webinar.title)}
                          className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 flex items-center space-x-2"
                        >
                          <Play className="w-4 h-4" />
                          <span>Watch</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="bg-slate-800/30 border-t border-slate-700/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Our Webinars
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Get notified about upcoming webinars, new recordings, and exclusive content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Webinars;
