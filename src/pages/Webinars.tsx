import React, { useState } from 'react';
      <section className="py-20 bg-gradient-to-r from-zion-slate-dark to-zion-blue-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay Informed and Inspired
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Subscribe to our webinar series and never miss an opportunity to learn 
              from industry experts and technology leaders. Get notified about upcoming 
              sessions and access to exclusive content.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-zion-cyan/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe to Webinars
              </motion.button>
              <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Contact Us
              </button>
            </div>
          </motion.div>
=======
import { Video, Calendar, Clock, Users, Play, Download, Search, Filter, Star, ExternalLink, ArrowRight, BookOpen, Brain, Cloud, Shield, Database, Zap, Globe, Target, TrendingUp, Award, CheckCircle } from 'lucide-react';

export default function Webinars() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [filterType, setFilterType] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', icon: <Video className="w-5 h-5" />, count: 0 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: <Brain className="w-5 h-5" />, count: 6 },
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: <Cloud className="w-5 h-5" />, count: 4 },
    { id: 'security', name: 'Cybersecurity', icon: <Shield className="w-5 h-5" />, count: 3 },
    { id: 'data', name: 'Data & Analytics', icon: <Database className="w-5 h-5" />, count: 5 },
    { id: 'emerging', name: 'Emerging Technologies', icon: <Zap className="w-5 h-5" />, count: 2 },
    { id: 'strategy', name: 'Digital Strategy', icon: <Target className="w-5 h-5" />, count: 4 }
  ];

  const filterTypes = [
    { id: 'all', name: 'All Webinars', count: 0 },
    { id: 'upcoming', name: 'Upcoming', count: 0 },
    { id: 'on-demand', name: 'On-Demand', count: 0 },
    { id: 'live', name: 'Live Now', count: 0 }
  ];

  const webinars = [
    {
      id: 1,
      title: 'AI-Powered Business Transformation: Real-World Success Stories',
      description: 'Join industry experts as they share real-world case studies of successful AI implementations and the lessons learned along the way.',
      category: 'ai-ml',
      type: 'upcoming',
      date: '2025-02-15T14:00:00Z',
      duration: '60 min',
      speakers: ['Dr. Sarah Chen', 'Michael Rodriguez', 'Jennifer Park'],
      maxAttendees: 500,
      currentAttendees: 342,
      featured: true,
      tags: ['AI', 'Digital Transformation', 'Case Studies', 'Enterprise'],
      thumbnail: '/images/webinars/ai-transformation-2025.jpg',
      registrationRequired: true,
      recordingAvailable: false
    },
    {
      id: 2,
      title: 'Zero-Trust Security: Implementation Strategies for 2025',
      description: 'Learn practical strategies for implementing zero-trust security architecture in your organization.',
      category: 'security',
      type: 'upcoming',
      date: '2025-02-20T15:00:00Z',
      duration: '45 min',
      speakers: ['Alex Thompson', 'Dr. James Wilson'],
      maxAttendees: 300,
      currentAttendees: 189,
      featured: false,
      tags: ['Cybersecurity', 'Zero-Trust', 'Security Architecture', 'Implementation'],
      thumbnail: '/images/webinars/zero-trust-security-2025.jpg',
      registrationRequired: true,
      recordingAvailable: false
    },
    {
      id: 3,
      title: 'Cloud Migration Best Practices: Lessons from the Field',
      description: 'Expert insights on successful cloud migration strategies and common pitfalls to avoid.',
      category: 'cloud',
      type: 'on-demand',
      date: '2025-01-10T14:00:00Z',
      duration: '75 min',
      speakers: ['David Kim', 'Lisa Anderson'],
      maxAttendees: 0,
      currentAttendees: 0,
      featured: true,
      tags: ['Cloud Computing', 'Migration', 'Best Practices', 'Strategy'],
      thumbnail: '/images/webinars/cloud-migration-2025.jpg',
      registrationRequired: false,
      recordingAvailable: true,
      views: 2840,
      rating: 4.8
    },
    {
      id: 4,
      title: 'Data Analytics for Business Intelligence: From Insights to Action',
      description: 'Transform your data into actionable business intelligence with proven analytics strategies.',
      category: 'data',
      type: 'on-demand',
      date: '2025-01-05T13:00:00Z',
      duration: '60 min',
      speakers: ['Dr. Robert Kim', 'Sarah Johnson'],
      maxAttendees: 0,
      currentAttendees: 0,
      featured: false,
      tags: ['Data Analytics', 'Business Intelligence', 'Strategy', 'Implementation'],
      thumbnail: '/images/webinars/data-analytics-2025.jpg',
      registrationRequired: false,
      recordingAvailable: true,
      views: 1950,
      rating: 4.6
    },
    {
      id: 5,
      title: 'Quantum Computing: Preparing Your Organization for the Future',
      description: 'Understanding quantum computing fundamentals and preparing for quantum advantage.',
      category: 'emerging',
      type: 'upcoming',
      date: '2025-02-25T16:00:00Z',
      duration: '90 min',
      speakers: ['Dr. Elena Vasquez', 'Marcus Rodriguez'],
      maxAttendees: 200,
      currentAttendees: 156,
      featured: true,
      tags: ['Quantum Computing', 'Emerging Tech', 'Future Computing', 'Innovation'],
      thumbnail: '/images/webinars/quantum-computing-2025.jpg',
      registrationRequired: true,
      recordingAvailable: false
    },
    {
      id: 6,
      title: 'Digital Transformation ROI: Measuring and Maximizing Success',
      description: 'Learn how to measure, track, and maximize ROI from your digital transformation initiatives.',
      category: 'strategy',
      type: 'on-demand',
      date: '2024-12-20T14:00:00Z',
      duration: '50 min',
      speakers: ['David Thompson', 'Emily Watson'],
      maxAttendees: 0,
      currentAttendees: 0,
      featured: false,
      tags: ['Digital Transformation', 'ROI', 'Strategy', 'Measurement'],
      thumbnail: '/images/webinars/digital-transformation-roi-2024.jpg',
      registrationRequired: false,
      recordingAvailable: true,
      views: 2340,
      rating: 4.7
    }
  ];

  const upcomingWebinars = webinars.filter(w => w.type === 'upcoming');
  const onDemandWebinars = webinars.filter(w => w.type === 'on-demand');

  // Update counts
  categories.forEach(cat => {
    cat.count = webinars.filter(w => w.category === cat.id).length;
  });

  filterTypes.forEach(type => {
    if (type.id === 'all') {
      type.count = webinars.length;
    } else {
      type.count = webinars.filter(w => w.type === type.id).length;
    }
  });

  const filteredWebinars = webinars.filter(webinar => {
    const matchesSearch = webinar.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         webinar.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         webinar.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = activeCategory === 'all' || webinar.category === activeCategory;
    const matchesType = filterType === 'all' || webinar.type === filterType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatTimeUntil = (dateString: string) => {
    const now = new Date();
    const webinarDate = new Date(dateString);
    const diffTime = webinarDate.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return 'Past';
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Tomorrow';
    if (diffDays < 7) return `${diffDays} days`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks`;
    return `${Math.ceil(diffDays / 30)} months`;
  };

  const getCategoryIcon = (categoryId: string) => {
    return categories.find(c => c.id === categoryId)?.icon || <Video className="w-5 h-5" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-blue-dark to-zion-purple py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-zion-cyan/20 rounded-full">
              <Video className="w-16 h-16 text-zion-cyan" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            Webinars & Events
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Join our expert-led webinars to gain insights into the latest technology trends, best practices, and industry innovations.
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search webinars..."
                className="w-full pl-12 pr-4 py-4 bg-zion-slate border border-zion-slate-light rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-col lg:flex-row gap-6 mb-8">
              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                      activeCategory === category.id
                        ? 'bg-zion-cyan text-zion-slate-dark'
                        : 'bg-zion-slate text-zion-slate-light hover:bg-zion-slate-light hover:text-white'
                    }`}
                  >
                    {category.icon}
                    {category.name}
                    <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* Type Filters */}
              <div className="flex flex-wrap gap-2">
                {filterTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setFilterType(type.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      filterType === type.id
                        ? 'bg-zion-purple text-white'
                        : 'bg-zion-slate text-zion-slate-light hover:bg-zion-slate-light hover:text-white'
                    }`}
                  >
                    {type.name} ({type.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Upcoming Webinars */}
      {upcomingWebinars.length > 0 && (
        <div className="py-12 bg-zion-slate-dark">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Featured Upcoming Webinars
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {upcomingWebinars.slice(0, 3).map((webinar) => (
                <div
                  key={webinar.id}
                  className="bg-zion-slate border border-zion-slate-light rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48 bg-gradient-to-br from-zion-blue to-zion-purple">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-zion-cyan text-zion-slate-dark rounded-full text-xs font-medium">
                        {formatTimeUntil(webinar.date)}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-zion-purple/20 text-zion-purple rounded-full text-xs font-medium">
                        {webinar.currentAttendees}/{webinar.maxAttendees}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-white">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{formatDate(webinar.date)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      {getCategoryIcon(webinar.category)}
                      <span className="text-sm text-zion-slate-light bg-zion-slate-light/20 px-2 py-1 rounded-full">
                        {categories.find(c => c.id === webinar.category)?.name}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white mb-2">{webinar.title}</h3>
                    <p className="text-zion-slate-light text-sm mb-4 line-clamp-2">{webinar.description}</p>
                    
                    <div className="flex items-center justify-between mb-4 text-sm text-zion-slate-light">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {webinar.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {webinar.speakers.length} speakers
                      </div>
                    </div>
                    
                    <button className="w-full bg-zion-cyan text-zion-slate-dark py-2 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors">
                      Register Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* All Webinars */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            All Webinars
          </h2>
          
          {filteredWebinars.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {filteredWebinars.map((webinar) => (
                <div
                  key={webinar.id}
                  className={`bg-zion-slate border border-zion-slate-light rounded-lg p-6 hover:shadow-lg transition-shadow ${
                    webinar.featured ? 'ring-2 ring-zion-cyan' : ''
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      {getCategoryIcon(webinar.category)}
                      <span className="text-sm text-zion-slate-light bg-zion-slate-light/20 px-2 py-1 rounded-full">
                        {categories.find(c => c.id === webinar.category)?.name}
                      </span>
                      {webinar.featured && (
                        <span className="px-2 py-1 bg-zion-cyan text-zion-slate-dark rounded-full text-xs font-medium">
                          Featured
                        </span>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-zion-slate-light">
                        {webinar.type === 'upcoming' ? (
                          <span className="text-green-400">Upcoming</span>
                        ) : webinar.type === 'on-demand' ? (
                          <span className="text-blue-400">On-Demand</span>
                        ) : (
                          <span className="text-purple-400">Live</span>
                        )}
                      </div>
                      {webinar.type === 'upcoming' && (
                        <div className="text-xs text-zion-slate-light">
                          {formatTimeUntil(webinar.date)}
                        </div>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3">{webinar.title}</h3>
                  <p className="text-zion-slate-light mb-4">{webinar.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {webinar.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-zion-slate-light/20 text-zion-slate-light text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-4 text-sm text-zion-slate-light">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(webinar.date)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {webinar.duration}
                      </div>
                    </div>
                    {webinar.type === 'on-demand' && (
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        {webinar.rating}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-zion-slate-light">
                      <div className="flex items-center gap-1 mb-1">
                        <Users className="w-4 h-4" />
                        Speakers: {webinar.speakers.join(', ')}
                      </div>
                      {webinar.type === 'upcoming' && (
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {webinar.currentAttendees}/{webinar.maxAttendees} registered
                        </div>
                      )}
                      {webinar.type === 'on-demand' && (
                        <div className="flex items-center gap-1">
                          <Play className="w-4 h-4" />
                          {webinar.views} views
                        </div>
                      )}
                    </div>

                    {webinar.type === 'upcoming' ? (
                      <button className="bg-zion-cyan text-zion-slate-dark px-6 py-2 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors">
                        Register
                      </button>
                    ) : (
                      <button className="bg-zion-purple text-white px-6 py-2 rounded-lg font-semibold hover:bg-zion-purple-light transition-colors inline-flex items-center gap-2">
                        <Play className="w-4 h-4" />
                        Watch Now
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Video className="w-16 h-16 text-zion-slate-light mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No webinars found</h3>
              <p className="text-zion-slate-light">
                Try adjusting your search terms or browse all categories
              </p>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Stay Connected
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Subscribe to our webinar notifications and never miss an opportunity to learn from industry experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan"
            />
            <button className="bg-zion-cyan text-zion-slate-dark px-6 py-3 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
