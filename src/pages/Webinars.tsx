import React from 'react';
import { Link } from 'react-router-dom';


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Video, Calendar, Clock, Users, Play, Search, ExternalLink, Brain, Cloud, Shield, Database, Zap, Target } from 'lucide-react';

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
      title: "AI-Powered Cybersecurity: Next-Gen Threat Detection",
      category: "Cybersecurity",
      date: "January 20, 2025",
      duration: "90 minutes",
      speaker: "Dr. Sarah Chen",
      description: "Learn about advanced AI algorithms for detecting and preventing sophisticated cyber threats in real-time."
    },
    {
      title: "Cloud-Native Architecture: Best Practices for 2025",
      category: "Cloud Computing",
      date: "January 25, 2025",
      duration: "75 minutes",
      speaker: "Marcus Rodriguez",
      description: "Discover the latest patterns and practices for building scalable, resilient cloud-native applications."
    },
    {
      title: "Digital Transformation: From Strategy to Execution",
      category: "Digital Strategy",
      date: "February 1, 2025",
      duration: "60 minutes",
      speaker: "Lisa Thompson",
      description: "Practical insights on implementing successful digital transformation initiatives across your organization."
    },
    {
      title: "Quantum Computing: Business Applications & Opportunities",
      category: "Emerging Tech",
      date: "February 8, 2025",
      duration: "120 minutes",
      speaker: "Dr. James Wilson",
      description: "Explore how quantum computing will revolutionize industries and create new business opportunities."
    },
    {
      title: "DevOps Excellence: Automation & Continuous Delivery",
      category: "DevOps",
      date: "February 15, 2025",
      duration: "90 minutes",
      speaker: "David Kim",
      description: "Master the art of DevOps automation and implement robust continuous delivery pipelines."
    },
    {
      title: "Data Privacy & Compliance in the AI Era",
      category: "Compliance",
      date: "February 22, 2025",
      duration: "75 minutes",
      speaker: "Alex Thompson",
      description: "Navigate the complex landscape of data privacy regulations while leveraging AI technologies."
    }
  ];

  // Update counts
  React.useEffect(() => {
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
  }, []);

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
      day: 'numeric'
    });
  };

// Removed unused:   const formatTimeUntil = (dateString: string) => {
    const now = new Date();
    const webinarDate = new Date(dateString);
    const diffTime = webinarDate.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return 'Past';
    if (diffDays === 0) return 'Today';
    if (diffDays < 7) return `${diffDays} days`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks`;
    return `${Math.ceil(diffDays / 30)} months`;
  };

  const getCategoryIcon = (categoryId: string) => {
    return categories.find(c => c.id === categoryId)?.icon || <Video className="w-5 h-5" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Tech
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}Webinars
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join industry experts for in-depth discussions on technology trends, 
            best practices, and innovative solutions
          </p>
        </div>
      </section>

      {/* Webinars Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {webinars.map((webinar, index) => (<div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                <div className="mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">{webinar.category}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{webinar.title}</h3>
                <p className="text-gray-300 mb-4">{webinar.description}</p>
                
                <div className="space-y-2 mb-4">
                  <p className="text-gray-400 text-sm flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    {webinar.date}
                  </p>
                  <p className="text-gray-400 text-sm flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    {webinar.duration}
                  </p>
                  <p className="text-gray-400 text-sm flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                    </svg>
                    {webinar.speaker}
                  </p>
                </div>
                
                <Link to="/contact" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300">
                  Register Now
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>))}
          </div>
          
          <div className="grid grid-cols-1 lg: grid-cols-2 gap-8">
            {filteredWebinars.map((webinar, index)  => (
              <motion.article
                key={webinar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded-full">
                      {categories.find(c => c.id === webinar.category)?.name}
                    </span>
                    <div className="flex items-center space-x-2 text-sm text-slate-400">
                      <Clock3 className="w-4 h-4" />
                      <span>{webinar.duration}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 line-clamp-2">
                    {webinar.title}
                  </h3>
                  
                  <div className="flex items-center space-x-4 text-sm text-slate-400 mb-4">
                    <span>By {webinar.speaker}</span>
                    <span>•</span>
                    <time>{new Date(webinar.date).toLocaleDateString()}</time>
                    <span>•</span>
                    <span>{webinar.time}</span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  {webinar.summary}
                </p>

                {/* Tags */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {webinar.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Attendance Info */}
                {!showPast && (
                  <div className="mb-6">
                    <div className="flex items-center justify-between text-sm text-slate-400 mb-2">
                      <span>Registration</span>
                      <span>{webinar.attendees}/{webinar.maxAttendees} registered</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-cyan-400 to-purple-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(webinar.attendees / webinar.maxAttendees) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                  {showPast ? (
                    <React.Fragment>
                      <a 
                        href={webinar.watchUrl}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                      >
                        <Play className="w-4 h-4 mr-1" />
                        Watch Recording
                      </a>
                      
                      <div className="flex items-center space-x-4">
                        <a 
                          href={webinar.recordingUrl}
                          className="inline-flex items-center text-slate-400 hover:text-white transition-colors text-sm"
                        >
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </a>
                        <a 
                          href={webinar.slidesUrl}
                          className="inline-flex items-center text-slate-400 hover:text-white transition-colors text-sm"
                        >
                          <BookOpen className="w-4 h-4 mr-1" />
                          Slides
                        </a>
                      </div>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <div className="text-sm text-slate-400">
                        {webinar.maxAttendees - webinar.attendees} spots remaining
                      </div>
                      
                      <a 
                        href={webinar.registrationUrl}
                        className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                      >
                        Register Now
                      </a>
                    </React.Fragment>
                  )}
                </div>
              </motion.article>
            ))}
          </div>

          {filteredWebinars.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-slate-700/50 rounded-full flex items-center justify-center">
                <Search className="w-10 h-10 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No webinars found</h3>
              <p className="text-slate-400">Try adjusting your filters or search terms</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-16 text-white"
          >
            Webinar Categories
          </motion.h2>
          
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.slice(1).map((category, index)  => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group cursor-pointer"
                onClick={() => setSelectedCategory(category.id)}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{category.name}</h3>
                <p className="text-slate-300 text-sm">
                  {[...upcomingWebinars, ...pastWebinars].filter(wp => wp.category === category.id).length} webinars available
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Interested in Speaking?</h2>
            <p className="text-slate-300 mb-8">
              Are you an industry expert interested in sharing your knowledge? 
              We're always looking for speakers to join our webinar series.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Mail className="w-8 h-8 mx-auto mb-3 text-cyan-400" />
                <h3 className="font-semibold text-white mb-2">Email Us</h3>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                >
                  {contactInfo.email}
                </a>
              </div>
              
              <div className="text-center">
                <Phone className="w-8 h-8 mx-auto mb-3 text-cyan-400" />
                <h3 className="font-semibold text-white mb-2">Call Us</h3>
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                >
                  {contactInfo.phone}
                </a>
              </div>
              
              <div className="text-center">
                <MapPin className="w-8 h-8 mx-auto mb-3 text-cyan-400" />
                <h3 className="font-semibold text-white mb-2">Visit Us</h3>
                <span className="text-slate-300 text-sm">{contactInfo.address}</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="/contact"
                className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </a>
              <a 
                href="/white-papers"
                className="px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Read Our Research
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-zion-slate">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search webinars by title, description, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-zion-slate-dark border border-zion-slate-light/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 mb-6">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-zion-cyan border-zion-cyan text-white'
                      : 'bg-zion-slate-dark border-zion-slate-light/20 text-zion-slate-light hover:border-zion-cyan/50'
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                  <span className="text-sm opacity-75">({category.count})</span>
                </button>
              ))}
            </div>

            {/* Type Filters */}
            <div className="flex flex-wrap gap-3">
              {filterTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setFilterType(type.id)}
                  className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                    filterType === type.id
                      ? 'bg-zion-purple border-zion-purple text-white'
                      : 'bg-zion-slate-dark border-zion-slate-light/20 text-zion-slate-light hover:border-zion-purple/50'
                  }`}
                >
                  {type.name} ({type.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Get Early Access</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Be the first to know about upcoming webinars, exclusive content, and special events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Webinars;
