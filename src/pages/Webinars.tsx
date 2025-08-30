

import React, { useState } from 'react';
import { motion  } from 'framer-motion';
import { SEO  } from '../components/SEO';
import { Video, 
  Calendar, 
  Clock, 
  Users, 
  Search,
  Filter,
  Play,
  ExternalLink,
  Download,
  BookOpen,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Heart,
  Globe,
  Star,
  TrendingUp,
  Award,
  Zap,
  Clock3,
  MapPin,
  Mail,
  Phone
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
    { id: 'digital-transformation', name: 'Digital Transformation', icon: Rocket, count: 0 },
    { id: 'healthcare-tech', name: 'Healthcare Technology', icon: Heart, count: 0 },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Zap, count: 0 },
    { id: 'sustainability', name: 'Sustainability & Green IT', icon: Globe, count: 0 }
  ];

  const upcomingWebinars = [
    {
      id: 1,
      title: 'AI-Powered Compliance Automation: Best Practices for 2024',
      category: 'ai-ml',
      speaker: 'Dr. Sarah Chen, Chief AI Scientist',
      date: '2024-02-15',
      time: '14:00 EST',
      duration: '60 minutes',
      attendees: 450,
      maxAttendees: 500,
      summary: 'Learn how to implement AI-powered compliance automation to reduce manual work and improve accuracy.',
      tags: ['AI', 'Compliance', 'Automation', 'Best Practices'],
      registrationUrl: '/webinars/ai-compliance-automation-2024/register',
      watchUrl: null,
      isLive: false
    },
    {
      id: 2,
      title: 'Zero Trust Security: Implementation Strategies for Enterprise',
      category: 'cybersecurity',
      speaker: 'Marcus Rodriguez, Head of Cybersecurity',
      date: '2024-02-22',
      time: '15:00 EST',
      duration: '90 minutes',
      attendees: 320,
      maxAttendees: 400,
      summary: 'Deep dive into implementing zero trust security architecture in large enterprise environments.',
      tags: ['Cybersecurity', 'Zero Trust', 'Enterprise', 'Security Architecture'],
      registrationUrl: '/webinars/zero-trust-security-enterprise/register',
      watchUrl: null,
      isLive: false
    },
    {
      id: 3,
      title: 'Cloud FinOps: Optimizing Costs in Multi-Cloud Environments',
      category: 'cloud-devops',
      speaker: 'Alex Thompson, Director of Cloud Operations',
      date: '2024-03-01',
      time: '13:00 EST',
      duration: '75 minutes',
      attendees: 280,
      maxAttendees: 350,
      summary: 'Discover strategies for optimizing cloud costs across multiple cloud providers using FinOps principles.',
      tags: ['Cloud Computing', 'FinOps', 'Cost Optimization', 'Multi-Cloud'],
      registrationUrl: '/webinars/cloud-finops-multi-cloud/register',
      watchUrl: null,
      isLive: false
    },
    {
      id: 4,
      title: 'Digital Twin Technology: Real-World Applications and ROI',
      category: 'digital-transformation',
      speaker: 'Dr. Emily Watson, VP of Healthcare Technology',
      date: '2024-03-08',
      time: '14:30 EST',
      duration: '60 minutes',
      attendees: 195,
      maxAttendees: 300,
      summary: 'Explore practical applications of digital twin technology and how to measure return on investment.',
      tags: ['Digital Twin', 'IoT', 'ROI', 'Digital Transformation'],
      registrationUrl: '/webinars/digital-twin-applications-roi/register',
      watchUrl: null,
      isLive: false
    }
  ];

  const pastWebinars = [
    {
      id: 5,
      title: 'The Future of AI in Healthcare: Opportunities and Challenges',
      category: 'healthcare-tech',
      speaker: 'Dr. Emily Watson, VP of Healthcare Technology',
      date: '2024-01-20',
      time: '14:00 EST',
      duration: '75 minutes',
      attendees: 520,
      maxAttendees: 500,
      summary: 'Comprehensive overview of AI applications in healthcare, including ethical considerations and regulatory compliance.',
      tags: ['Healthcare AI', 'Ethics', 'Regulatory Compliance', 'Medical Technology'],
      registrationUrl: null,
      watchUrl: '/webinars/ai-healthcare-future-2024/watch',
      isLive: false,
      recordingUrl: '/webinars/ai-healthcare-future-2024/recording',
      slidesUrl: '/webinars/ai-healthcare-future-2024/slides'
    },
    {
      id: 6,
      title: 'Quantum Computing: Preparing Your Organization for the Future',
      category: 'quantum-computing',
      speaker: 'Dr. Sarah Chen, Chief AI Scientist',
      date: '2024-01-15',
      time: '15:00 EST',
      duration: '90 minutes',
      attendees: 480,
      maxAttendees: 450,
      summary: 'Understanding quantum computing fundamentals and preparing organizations for quantum advantage.',
      tags: ['Quantum Computing', 'Future Technology', 'Innovation', 'Strategic Planning'],
      registrationUrl: null,
      watchUrl: '/webinars/quantum-computing-future-2024/watch',
      isLive: false,
      recordingUrl: '/webinars/quantum-computing-future-2024/recording',
      slidesUrl: '/webinars/quantum-computing-future-2024/slides'
    },
    {
      id: 7,
      title: 'Sustainable Technology: Green IT Solutions for Enterprise',
      category: 'sustainability',
      speaker: 'Priya Patel, Head of Data Science',
      date: '2024-01-10',
      time: '13:30 EST',
      duration: '60 minutes',
      attendees: 320,
      maxAttendees: 300,
      summary: 'Implementing sustainable technology practices to reduce environmental impact and operational costs.',
      tags: ['Sustainability', 'Green IT', 'Environmental Impact', 'Cost Reduction'],
      registrationUrl: null,
      watchUrl: '/webinars/sustainable-technology-enterprise-2024/watch',
      isLive: false,
      recordingUrl: '/webinars/sustainable-technology-enterprise-2024/recording',
      slidesUrl: '/webinars/sustainable-technology-enterprise-2024/slides'
    },
    {
      id: 8,
      title: 'Edge Computing and IoT: Building the Connected Enterprise',
      category: 'digital-transformation',
      speaker: 'Alex Thompson, Director of Cloud Operations',
      date: '2024-01-05',
      time: '14:00 EST',
      duration: '80 minutes',
      attendees: 410,
      maxAttendees: 400,
      summary: 'Strategies for implementing edge computing and IoT solutions in enterprise environments.',
      tags: ['Edge Computing', 'IoT', 'Enterprise', 'Digital Transformation'],
      registrationUrl: null,
      watchUrl: '/webinars/edge-computing-iot-enterprise-2024/watch',
      isLive: false,
      recordingUrl: '/webinars/edge-computing-iot-enterprise-2024/recording',
      slidesUrl: '/webinars/edge-computing-iot-enterprise-2024/slides'
    }
  ];

  // Calculate category counts
  React.useEffect(()  => {
    const allWebinars = [...upcomingWebinars, ...pastWebinars];
    const categoryCounts = categories.map(cat => ({
      ...cat,
      count: cat.id === 'all' ? allWebinars.length: allWebinars.filter(wp  => wp.category === cat.id).length
    }))}, []);

  const filteredWebinars = (showPast ? pastWebinars: upcomingWebinars).filter(webinar  => {
    const matchesCategory = selectedCategory === 'all' || webinar.category === selectedCategory;
    const matchesSearch = webinar.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         webinar.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         webinar.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch});

  const stats = [
    { label: 'Webinars Delivered', value: '100+', icon: Video },
    { label: 'Attendees Served', value: '25K+', icon: Users },
    { label: 'Expert Speakers', value: '15+', icon: Star },
    { label: 'Topics Covered', value: '20+', icon: BookOpen }
  ];

  const contactInfo = {
    email: 'webinars@ziontechgroup.com',
    phone: '+1 302 464 0950',
    address: '364 E Main St STE 1008, Middletown DE 19709'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Webinars - Zion Tech Group"
        description="Join our educational webinars on AI, cybersecurity, cloud computing, and emerging technologies. Learn from industry experts."
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl mb-8"
          >
            <Video className="w-10 h-10 text-white" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
          >
            Educational Webinars
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto mb-12"
          >
            Join our expert-led webinars to stay ahead of the curve in AI, cybersecurity, 
            cloud computing, and emerging technologies. Learn from industry leaders.
          </motion.p>
          
          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md: grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, index)  => (
              <div key={stat.label} className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-slate-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-12 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search webinars..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-800 border border-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white placeholder-slate-400"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              {/* Category Filter */}
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none px-4 py-3 pr-10 rounded-lg bg-slate-800 border border-slate-600 focus: border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white text-sm"
                >
                  {categories.map((category)  => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
                <Filter className="absolute right-3 top-1/2 -translate-y-1/2 h-4 h-4 text-slate-400 pointer-events-none" />
              </div>

              {/* Toggle Past/Upcoming */}
              <div className="flex bg-slate-800 rounded-lg p-1 border border-slate-600">
                <button
                  onClick={() => setShowPast(false)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    !showPast
                      ? 'bg-cyan-400 text-slate-900'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Upcoming
                </button>
                <button
                  onClick={() => setShowPast(true)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    showPast
                      ? 'bg-cyan-400 text-slate-900'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Past
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Webinars Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-16 text-white"
          >
            {showPast ? 'Past Webinars' : 'Upcoming Webinars'}
          </motion.h2>
          
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
                    <div>
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
                    </div>
                  ) : (
                    <div>
                      <div className="text-sm text-slate-400">
                        {webinar.maxAttendees - webinar.attendees} spots remaining
                      </div>
                      
                      <a 
                        href={webinar.registrationUrl}
                        className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                      >
                        Register Now
                      </a>
                    </div>
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

      {/* Webinars Grid */}
      <section className="py-16 bg-zion-slate-light">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {filteredWebinars.length === 0 ? (
              <div className="text-center py-20">
                <Video className="w-24 h-24 text-zion-slate-light mx-auto mb-6" />
                <h3 className="text-2xl font-semibold text-zion-slate mb-4">No webinars found</h3>
                <p className="text-zion-slate-light mb-8">Try adjusting your search criteria or check back later for new webinars.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                    setFilterType('all');
                  }}
                  className="px-6 py-3 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/90 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredWebinars.map((webinar) => (
                  <motion.div
                    key={webinar.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-zion-slate-dark rounded-2xl overflow-hidden border border-zion-slate-light/20 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/25"
                  >
                    {/* Thumbnail */}
                    <div className="relative h-48 bg-gradient-to-br from-zion-slate to-zion-slate-light">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Play className="w-16 h-16 text-zion-cyan" />
                      </div>
                      {webinar.featured && (
                        <div className="absolute top-4 right-4 bg-zion-purple text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Featured
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        {getCategoryIcon(webinar.category)}
                        <span className="text-sm text-zion-slate-light">
                          {categories.find(c => c.id === webinar.category)?.name}
                        </span>
                      </div>

                      <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                        {webinar.title}
                      </h3>

                      <p className="text-zion-slate-light mb-4 line-clamp-3">
                        {webinar.description}
                      </p>

                      {/* Meta Info */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(webinar.date)}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                          <Clock className="w-4 h-4" />
                          <span>{webinar.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                          <Users className="w-4 h-4" />
                          <span>{webinar.currentAttendees}/{webinar.maxAttendees} attendees</span>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {webinar.tags.slice(0, 3).map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-zion-slate text-zion-slate-light text-xs rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3">
                        {webinar.registrationRequired ? (
                          <button className="flex-1 bg-zion-cyan text-white py-2 px-4 rounded-lg hover:bg-zion-cyan/90 transition-colors font-semibold">
                            Register Now
                          </button>
                        ) : (
                          <button className="flex-1 bg-zion-purple text-white py-2 px-4 rounded-lg hover:bg-zion-purple/90 transition-colors font-semibold">
                            Join Now
                          </button>
                        )}
                        <button className="p-2 border border-zion-slate-light/20 text-zion-slate-light rounded-lg hover:border-zion-cyan hover:text-zion-cyan transition-colors">
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )}
