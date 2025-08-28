
<<<<<<< HEAD
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Video, Calendar, Clock, Users, Play, ExternalLink, BookOpen, Brain, Rocket, Shield, Cloud, Database, Globe, Star, TrendingUp } from 'lucide-react';

const Webinars: React.FC = () => {
  const webinars = [
    {
      id: 1,
      title: "AI-Powered Business Transformation: From Strategy to Implementation",
      description: "Learn how to successfully implement AI solutions in your organization, from initial strategy development to full-scale deployment and optimization.",
      category: "AI & Business",
      speaker: "Dr. Sarah Chen",
      date: "February 15, 2025",
      time: "2:00 PM EST",
      duration: "90 minutes",
      attendees: 1247,
      featured: true,
      icon: Brain,
      color: "from-purple-500 to-cyan-500",
      status: "upcoming"
    },
    {
      id: 2,
      title: "Quantum Computing Fundamentals: Understanding the Next Computing Revolution",
      description: "Explore the basics of quantum computing, its potential applications, and how it will transform various industries in the coming decade.",
      category: "Quantum Technology",
      speaker: "Dr. James Wilson",
      date: "February 22, 2025",
      time: "1:00 PM EST",
      duration: "75 minutes",
      attendees: 892,
      featured: true,
      icon: Rocket,
      color: "from-indigo-500 to-purple-500",
      status: "upcoming"
    },
    {
      id: 3,
      title: "Cybersecurity in the AI Era: Threats, Solutions, and Best Practices",
      description: "Discover how AI is both creating new security challenges and providing innovative solutions to protect your digital assets.",
      category: "Cybersecurity",
      speaker: "Marcus Rodriguez",
      date: "February 8, 2025",
      time: "3:00 PM EST",
      duration: "60 minutes",
      attendees: 1567,
      featured: true,
      icon: Shield,
      color: "from-red-500 to-pink-500",
      status: "upcoming"
    },
    {
      id: 4,
      title: "Cloud-Native Architecture: Building Scalable and Resilient Systems",
      description: "Master the principles of cloud-native design and learn how to build systems that automatically scale and recover from failures.",
      category: "Cloud Computing",
      speaker: "Jennifer Kim",
      date: "January 25, 2025",
      time: "2:30 PM EST",
      duration: "80 minutes",
      attendees: 743,
      featured: false,
      icon: Cloud,
      color: "from-blue-500 to-cyan-500",
      status: "upcoming"
    },
    {
      id: 5,
      title: "Data Analytics and Business Intelligence: Driving Growth Through Insights",
      description: "Learn how to leverage data analytics and BI tools to make informed decisions and drive sustainable business growth.",
      category: "Data Analytics",
      speaker: "David Thompson",
      date: "January 18, 2025",
      time: "1:30 PM EST",
      duration: "70 minutes",
      attendees: 634,
      featured: false,
      icon: Database,
      color: "from-green-500 to-emerald-500",
      status: "upcoming"
    },
    {
      id: 6,
      title: "Digital Twin Technology: Revolutionizing Industry 4.0",
      description: "Explore how digital twin technology is transforming manufacturing, healthcare, and urban planning through real-time simulation.",
      category: "Digital Twin",
      speaker: "Dr. Emily Watson",
      date: "January 11, 2025",
      time: "2:00 PM EST",
      duration: "65 minutes",
      attendees: 567,
      featured: false,
      icon: Globe,
      color: "from-orange-500 to-red-500",
      status: "upcoming"
    }
  ];

  const categories = ['All', 'AI & Business', 'Quantum Technology', 'Cybersecurity', 'Cloud Computing', 'Data Analytics', 'Digital Twin'];
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredWebinars = webinars.filter(webinar => {
    const matchesCategory = selectedCategory === 'All' || webinar.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      webinar.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      webinar.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      webinar.speaker.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const featuredWebinars = webinars.filter(webinar => webinar.featured);
  const upcomingWebinars = webinars.filter(webinar => webinar.status === 'upcoming');

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
=======
import React from 'react';
import { SEO } from '../components/SEO';
import { Users, Calendar, Clock, Play, ExternalLink, Bookmark, Share2, TrendingUp, Brain, Shield, Cloud, Rocket, Globe, Zap } from 'lucide-react';

export default function Webinars() {
  const upcomingWebinars = [
    {
      id: 1,
      title: 'AI-Powered Business Transformation: Real-World Case Studies',
      description: 'Learn how leading enterprises are leveraging AI to transform their operations and achieve unprecedented growth.',
      speaker: 'Dr. Sarah Chen',
      speakerTitle: 'Chief AI Officer',
      date: 'February 15, 2025',
      time: '2:00 PM EST',
      duration: '60 minutes',
      category: 'Artificial Intelligence',
      icon: Brain,
      color: 'from-purple-500 to-cyan-500',
      featured: true,
      attendees: 1247,
      spots: 2000
    },
    {
      id: 2,
      title: 'Cybersecurity in the Age of AI: Threats and Defenses',
      description: 'Explore emerging cybersecurity challenges and how AI is both a threat and a solution in modern security.',
      speaker: 'Michael Rodriguez',
      speakerTitle: 'Head of Cybersecurity',
      date: 'February 22, 2025',
      time: '1:00 PM EST',
      duration: '45 minutes',
      category: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      featured: true,
      attendees: 892,
      spots: 1500
    },
    {
      id: 3,
      title: 'Cloud-Native Architecture: Building for Scale',
      description: 'Discover best practices for designing and implementing cloud-native applications that scale effortlessly.',
      speaker: 'Lisa Thompson',
      speakerTitle: 'Cloud Solutions Architect',
      date: 'March 1, 2025',
      time: '3:00 PM EST',
      duration: '75 minutes',
      category: 'Cloud Computing',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      featured: false,
      attendees: 567,
      spots: 1000
    }
  ];

  const pastWebinars = [
    {
      id: 4,
      title: 'Quantum Computing: The Future of Problem Solving',
      description: 'An in-depth exploration of quantum computing principles and their applications in business.',
      speaker: 'Dr. James Wilson',
      speakerTitle: 'Quantum Research Lead',
      date: 'January 20, 2025',
      duration: '90 minutes',
      category: 'Emerging Technology',
      icon: Rocket,
      color: 'from-indigo-500 to-purple-500',
      views: 3240,
      rating: 4.8,
      recording: true
    },
    {
      id: 5,
      title: 'Digital Twin Technology: Bridging Physical and Digital Worlds',
      description: 'How digital twin technology is revolutionizing industries from manufacturing to healthcare.',
      speaker: 'David Kim',
      speakerTitle: 'Digital Innovation Director',
      date: 'January 15, 2025',
      duration: '60 minutes',
      category: 'Digital Transformation',
      icon: Globe,
      color: 'from-green-500 to-blue-500',
      views: 2890,
      rating: 4.7,
      recording: true
    },
    {
      id: 6,
      title: 'Micro SaaS Success Stories: From Idea to Market',
      description: 'Real entrepreneurs share their journey building successful micro SaaS businesses.',
      speaker: 'Alex Johnson',
      speakerTitle: 'Startup Advisor',
      date: 'January 10, 2025',
      duration: '45 minutes',
      category: 'Business Strategy',
      icon: TrendingUp,
      color: 'from-emerald-500 to-teal-500',
      views: 2150,
      rating: 4.9,
      recording: true
    }
  ];

  const categories = ['All', 'Artificial Intelligence', 'Cybersecurity', 'Cloud Computing', 'Digital Transformation', 'Emerging Technology', 'Business Strategy'];
>>>>>>> dfd8eabcb463241298fb940805e3298c0c707787

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Webinars - Zion Tech Group"
<<<<<<< HEAD
        description="Join our expert-led webinars on AI, quantum computing, cybersecurity, cloud computing, and emerging technologies"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Video className="w-4 h-4" />
              Live Learning
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Expert Webinars on
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Emerging Technologies
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join industry experts and thought leaders for in-depth discussions on AI, 
              quantum computing, cybersecurity, and the technologies shaping our future.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 text-gray-400">
                <Video className="w-5 h-5" />
                <span>Live Sessions</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Users className="w-5 h-5" />
                <span>Expert Speakers</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Star className="w-5 h-5" />
                <span>Free Registration</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 border-b border-slate-700/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Video className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search webinars..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
=======
        description="Join our expert-led webinars on AI, cybersecurity, cloud computing, and emerging technologies. Learn from industry leaders and gain practical insights."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20"></div>
        <div className="relative container-responsive py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-6">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Expert-Led Learning Sessions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our live webinars featuring industry experts, thought leaders, and technology innovators. 
              Gain practical insights, learn best practices, and stay ahead of industry trends.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-gray-300">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>Monthly Sessions</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span>Expert Speakers</span>
              </div>
              <div className="flex items-center">
                <Play className="w-5 h-5 mr-2" />
                <span>Live & Recorded</span>
              </div>
>>>>>>> dfd8eabcb463241298fb940805e3298c0c707787
            </div>
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Featured Webinars */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Featured Webinars</h2>
            <p className="text-gray-400">Don't miss these highly anticipated sessions with industry experts</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredWebinars.map((webinar, index) => (
              <motion.div
                key={webinar.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-slate-800/50 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 hover:bg-slate-800/70"
              >
                {/* Header */}
                <div className={`h-32 bg-gradient-to-br ${webinar.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <webinar.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-cyan-400 font-medium bg-cyan-400/10 px-2 py-1 rounded">
                      {webinar.category}
                    </span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-gray-400">{webinar.duration}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                    {webinar.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {webinar.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Users className="w-4 h-4" />
                      <span>{webinar.attendees.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(webinar.date)}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-300">
                      <span className="font-medium">{webinar.speaker}</span>
                    </div>
                    <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 flex items-center gap-2">
                      <Play className="w-4 h-4" />
                      Register
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Upcoming Webinars */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">All Upcoming Webinars</h2>
            <p className="text-gray-400">Browse our complete schedule of upcoming webinars and events</p>
          </div>
          
          <div className="space-y-6">
            {filteredWebinars.map((webinar, index) => (
              <motion.div
                key={webinar.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group bg-slate-800/30 border border-slate-700/30 rounded-xl overflow-hidden hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Left: Icon and Category */}
                  <div className="lg:w-24 p-6 flex lg:flex-col items-center justify-center">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${webinar.color} flex items-center justify-center mb-3`}>
                      <webinar.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-xs text-cyan-400 font-medium bg-cyan-400/10 px-2 py-1 rounded text-center">
                      {webinar.category}
                    </span>
                  </div>
                  
                  {/* Center: Content */}
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {webinar.title}
                      </h3>
                      {webinar.featured && (
                        <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-medium rounded-full ml-4">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <p className="text-gray-400 mb-4 line-clamp-2">
                      {webinar.description}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{webinar.attendees.toLocaleString()} registered</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{webinar.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(webinar.date)} at {webinar.time}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-300">
                        <span className="font-medium">Speaker:</span> {webinar.speaker}
                      </div>
                      <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 flex items-center gap-2">
                        <Play className="w-4 h-4" />
                        Register Now
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredWebinars.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-gray-400 text-lg mb-4">
                No webinars found matching your criteria.
              </div>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Stay Updated with Our Webinars
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get notified about upcoming webinars, exclusive content, and early access 
              to registration for our most popular sessions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Subscribe
              </button>
            </div>
          </motion.div>
=======
      {/* Upcoming Webinars */}
      <div className="container-responsive py-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Upcoming Webinars</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {upcomingWebinars.map((webinar) => (
            <div key={webinar.id} className="group relative">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${webinar.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <webinar.icon className="w-8 h-8 text-white" />
                </div>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-slate-700/50 text-purple-400 text-sm rounded-full mb-3">
                    {webinar.category}
                  </span>
                  {webinar.featured && (
                    <span className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-400 text-sm rounded-full ml-2">
                      Featured
                    </span>
                  )}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {webinar.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {webinar.description}
                  </p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{webinar.speaker} - {webinar.speakerTitle}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{webinar.date} at {webinar.time}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{webinar.duration}</span>
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <span>{webinar.attendees} registered</span>
                    <span>{webinar.spots - webinar.attendees} spots left</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(webinar.attendees / webinar.spots) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 group-hover:scale-105">
                  Register Now
                  <ExternalLink className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Past Webinars */}
        <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Past Webinars</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastWebinars.map((webinar) => (
              <div key={webinar.id} className="bg-slate-700/30 rounded-xl p-4 hover:bg-slate-700/50 transition-colors">
                <div className="flex items-start space-x-3 mb-3">
                  <div className={`w-12 h-12 bg-gradient-to-br ${webinar.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <webinar.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">{webinar.title}</h3>
                    <p className="text-gray-400 text-xs mb-2">{webinar.speaker}</p>
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <span>{webinar.date}</span>
                      <span>•</span>
                      <span>{webinar.duration}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-3 line-clamp-2">{webinar.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span>👁️ {webinar.views}</span>
                    <span>⭐ {webinar.rating}</span>
                  </div>
                  {webinar.recording && (
                    <button className="inline-flex items-center px-3 py-1 bg-slate-600 hover:bg-slate-500 text-white text-xs font-medium rounded-lg transition-colors">
                      <Play className="w-3 h-3 mr-1" />
                      Watch Recording
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
>>>>>>> dfd8eabcb463241298fb940805e3298c0c707787
        </div>
      </div>

      {/* Webinar Categories */}
      <div className="container-responsive py-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Webinar Categories</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl mb-4">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">AI & Machine Learning</h3>
            <p className="text-gray-400 text-sm mb-4">
              Learn about the latest AI technologies, implementation strategies, and business applications
            </p>
            <div className="text-sm text-gray-500">
              <div className="flex items-center justify-center space-x-4">
                <span>📅 Monthly</span>
                <span>👥 500+ attendees</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Cybersecurity</h3>
            <p className="text-gray-400 text-sm mb-4">
              Stay updated on security threats, best practices, and emerging defense strategies
            </p>
            <div className="text-sm text-gray-500">
              <div className="flex items-center justify-center space-x-4">
                <span>📅 Bi-weekly</span>
                <span>👥 300+ attendees</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl mb-4">
              <Cloud className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Cloud & DevOps</h3>
            <p className="text-gray-400 text-sm mb-4">
              Master cloud architecture, deployment strategies, and DevOps best practices
            </p>
            <div className="text-sm text-gray-500">
              <div className="flex items-center justify-center space-x-4">
                <span>📅 Monthly</span>
                <span>👥 400+ attendees</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl mb-4">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Emerging Technology</h3>
            <p className="text-gray-400 text-sm mb-4">
              Explore quantum computing, blockchain, IoT, and other cutting-edge technologies
            </p>
            <div className="text-sm text-gray-500">
              <div className="flex items-center justify-center space-x-4">
                <span>📅 Quarterly</span>
                <span>👥 200+ attendees</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl mb-4">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Digital Transformation</h3>
            <p className="text-gray-400 text-sm mb-4">
              Learn strategies for digital transformation and organizational change
            </p>
            <div className="text-sm text-gray-500">
              <div className="flex items-center justify-center space-x-4">
                <span>📅 Bi-monthly</span>
                <span>👥 350+ attendees</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Business Strategy</h3>
            <p className="text-gray-400 text-sm mb-4">
              Strategic insights for technology leaders and business decision makers
            </p>
            <div className="text-sm text-gray-500">
              <div className="flex items-center justify-center space-x-4">
                <span>📅 Monthly</span>
                <span>👥 250+ attendees</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container-responsive py-16">
        <div className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 border border-purple-400/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Stay Updated with Our Webinars</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get notified about upcoming webinars, receive session materials, and never miss an opportunity 
            to learn from industry experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
