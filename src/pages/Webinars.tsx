import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
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
  Share2
} from 'lucide-react';

export default function Webinars() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showPast, setShowPast] = useState(false);

  const categories = [
    { id: 'all', name: 'All Categories', icon: BookOpen, count: 0 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 0 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 0 },
    { id: 'cloud-devops', name: 'Cloud & DevOps', icon: Cloud, count: 0 },
    { id: 'digital-transformation', name: 'Digital Transformation', icon: Target, count: 0 },
    { id: 'healthcare-tech', name: 'Healthcare Technology', icon: Award, count: 0 },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Zap, count: 0 },
    { id: 'sustainability', name: 'Sustainability & Green IT', icon: Globe, count: 0 }
  ];

  const upcomingWebinars = [
    {
      id: 1,
      title: 'AI Autonomous Research Assistant: Revolutionizing Business Intelligence',
      description: 'Discover how our revolutionary AI Autonomous Research Assistant is transforming how businesses gather, analyze, and synthesize information across multiple sources.',
      category: 'ai-ml',
      type: 'upcoming',
      date: '2025-02-10T14:00:00Z',
      duration: '75 min',
      speakers: ['Dr. Sarah Chen', 'Dr. Michael Rodriguez', 'AI Research Team'],
      maxAttendees: 600,
      currentAttendees: 487,
      featured: true,
      tags: ['AI Research', 'Autonomous Systems', 'Business Intelligence', 'Innovation'],
      thumbnail: '/images/webinars/ai-autonomous-research-2025.jpg',
      registrationRequired: true,
      recordingAvailable: false
    },
    {
      id: 2,
      title: 'AI Supply Chain Optimization: Reducing Costs by Up to 30%',
      description: 'Learn how AI-powered supply chain optimization can predict demand, optimize inventory, and reduce costs significantly for your organization.',
      category: 'ai-ml',
      type: 'upcoming',
      date: '2025-02-12T15:00:00Z',
      duration: '60 min',
      speakers: ['Michael Rodriguez', 'Supply Chain Experts', 'AI Implementation Team'],
      maxAttendees: 400,
      currentAttendees: 298,
      featured: true,
      tags: ['Supply Chain', 'AI Optimization', 'Cost Reduction', 'Predictive Analytics'],
      thumbnail: '/images/webinars/ai-supply-chain-2025.jpg',
      registrationRequired: true,
      recordingAvailable: false
    },
    {
      id: 3,
      title: 'Zero-Trust Security: Implementation Strategies for 2025',
      description: 'Learn practical strategies for implementing zero-trust security architecture in your organization.',
      category: 'cybersecurity',
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
    }
  ];

  const pastWebinars = [
    {
      id: 4,
      title: 'AI Ethics in Enterprise: Building Responsible AI Systems',
      category: 'ai-ml',
      speaker: 'Dr. James Wilson, AI Ethics Specialist',
      date: '2024-01-15',
      time: '14:00 EST',
      duration: '75 minutes',
      attendees: 380,
      maxAttendees: 400,
      summary: 'Comprehensive guide to implementing ethical AI practices in enterprise environments.',
      tags: ['AI Ethics', 'Responsible AI', 'Enterprise', 'Governance'],
      registrationUrl: null,
      watchUrl: '/webinars/ai-ethics-enterprise/watch',
      isLive: false
    },
    {
      id: 5,
      title: 'Cybersecurity Threat Intelligence: Staying Ahead of Attacks',
      category: 'cybersecurity',
      speaker: 'Rachel Green, Threat Intelligence Lead',
      date: '2024-01-22',
      time: '15:00 EST',
      duration: '90 minutes',
      attendees: 420,
      maxAttendees: 450,
      summary: 'Advanced threat intelligence strategies for proactive cybersecurity defense.',
      tags: ['Threat Intelligence', 'Cybersecurity', 'Proactive Defense', 'Security'],
      registrationUrl: null,
      watchUrl: '/webinars/cybersecurity-threat-intelligence/watch',
      isLive: false
    }
  ];

  const allWebinars = [...upcomingWebinars, ...pastWebinars];

  // Update category counts
  categories.forEach(category => {
    if (category.id === 'all') {
      category.count = allWebinars.length;
    } else {
      category.count = allWebinars.filter(webinar => webinar.category === category.id).length;
    }
  });

  const filteredWebinars = allWebinars.filter(webinar => {
    const matchesCategory = selectedCategory === 'all' || webinar.category === selectedCategory;
    const matchesSearch = webinar.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         (webinar.description && webinar.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
                         (webinar.summary && webinar.summary.toLowerCase().includes(searchQuery.toLowerCase())) ||
                         webinar.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesTimeFilter = showPast ? pastWebinars.includes(webinar) : upcomingWebinars.includes(webinar);
    
    return matchesCategory && matchesSearch && matchesTimeFilter;
  });

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : BookOpen;
  };

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'General';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getRegistrationStatus = (webinar: any) => {
    if (webinar.isLive) {
      return { status: 'Live Now', color: 'from-red-500 to-pink-500', icon: Play };
    } else if (webinar.attendees >= webinar.maxAttendees) {
      return { status: 'Full', color: 'from-gray-500 to-slate-500', icon: Users };
    } else if (webinar.watchUrl) {
      return { status: 'Watch Now', color: 'from-blue-500 to-cyan-500', icon: Play };
    } else {
      return { status: 'Register Now', color: 'from-green-500 to-emerald-500', icon: CheckCircle };
    }
  };

  return (
    <>
      <SEO 
        title="Webinars - Zion Tech Group"
        description="Join our expert-led webinars on AI, cybersecurity, cloud computing, and emerging technologies. Learn from industry leaders and gain practical insights."
        keywords="webinars, AI webinars, cybersecurity webinars, cloud computing, technology education, Zion Tech Group, online learning"
        canonicalUrl="https://ziontechgroup.com/webinars"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-6">
                <Video className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-purple-400 font-medium">Expert Webinars</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Technology Webinars
              </h1>
              
              <p className="text-xl md:text-2xl text-cyan-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Join our expert-led webinars on AI, cybersecurity, cloud computing, and emerging technologies. 
                Learn from industry leaders and gain practical insights to transform your business.
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-300" />
                  <input
                    type="text"
                    placeholder="Search webinars, speakers, or topics..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-cyan-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-purple-500 text-white shadow-lg'
                      : 'bg-white/10 text-cyan-300 hover:bg-white/20 border border-white/20'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  <span>{category.name}</span>
                  <span className="text-sm opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Time Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <span className="text-white font-medium">Show:</span>
                <button
                  onClick={() => setShowPast(false)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    !showPast
                      ? 'bg-purple-500 text-white'
                      : 'bg-white/10 text-cyan-300 hover:bg-white/20 border border-white/20'
                  }`}
                >
                  Upcoming
                </button>
                <button
                  onClick={() => setShowPast(true)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    showPast
                      ? 'bg-purple-500 text-white'
                      : 'bg-white/10 text-cyan-300 hover:bg-white/20 border border-white/20'
                  }`}
                >
                  Past Webinars
                </button>
              </div>
              
              <div className="text-cyan-300">
                {filteredWebinars.length} webinars found
              </div>
            </div>
          </div>
        </section>

        {/* Webinars Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {filteredWebinars.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <Video className="w-16 h-16 text-cyan-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No webinars found</h3>
                <p className="text-cyan-300">
                  Try adjusting your search terms or category filter.
                </p>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredWebinars.map((webinar, index) => {
                  const registrationStatus = getRegistrationStatus(webinar);
                  
                  return (
                    <motion.div
                      key={webinar.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className="h-full bg-white/5 backdrop-blur-sm border border-white/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 rounded-xl p-6">
                        <div className="mb-4">
                          <div className="flex items-start justify-between mb-4">
                            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30">
                              <span className="text-purple-400 text-sm font-medium">
                                {getCategoryName(webinar.category)}
                              </span>
                            </div>
                            <div className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${registrationStatus.color}`}>
                              {registrationStatus.status}
                            </div>
                          </div>
                          
                          <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300 mb-3">
                            {webinar.title}
                          </h3>
                          
                          <p className="text-cyan-300 leading-relaxed mb-4">
                            {webinar.description || webinar.summary}
                          </p>
                          
                          <div className="flex items-center space-x-4 text-sm text-cyan-300 mb-4">
                            <div className="flex items-center space-x-1">
                              <Users className="w-4 h-4" />
                              <span>{webinar.currentAttendees || webinar.attendees}/{webinar.maxAttendees}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{webinar.duration}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-3 mb-6 text-sm">
                          <div className="flex items-center justify-between">
                            <span className="text-cyan-300">Date:</span>
                            <span className="text-white">{formatDate(webinar.date)}</span>
                          </div>
                          {webinar.time && (
                            <div className="flex items-center justify-between">
                              <span className="text-cyan-300">Time:</span>
                              <span className="text-white">{webinar.time}</span>
                            </div>
                          )}
                        </div>
                        
                        <div className="mb-6">
                          <h4 className="text-white font-semibold mb-3">Tags:</h4>
                          <div className="flex flex-wrap gap-2">
                            {webinar.tags.slice(0, 4).map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-2 py-1 bg-white/10 rounded text-xs text-cyan-300 border border-white/20"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex space-x-2">
                          {webinar.registrationRequired ? (
                            <button className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300">
                              <CheckCircle className="w-4 h-4 mr-2 inline" />
                              Register
                            </button>
                          ) : webinar.watchUrl ? (
                            <a 
                              href={webinar.watchUrl}
                              className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 text-center inline-flex items-center justify-center"
                            >
                              <Play className="w-4 h-4 mr-2" />
                              Watch Now
                            </a>
                          ) : null}
                          
                          <button className="p-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                            <Share2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Want to Host a Webinar?
              </h2>
              <p className="text-xl text-cyan-300 mb-8 max-w-3xl mx-auto">
                Have expertise to share? We're always looking for industry leaders and subject matter experts 
                to share their knowledge with our community.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300">
                  <Video className="w-5 h-5 mr-2 inline" />
                  Propose a Webinar
                </button>
                
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-6 py-3 rounded-lg font-medium transition-all duration-300">
                  <ExternalLink className="w-5 h-5 mr-2 inline" />
                  View All Webinars
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
