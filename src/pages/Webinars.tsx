
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Webinars - Zion Tech Group"
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
            </div>
          </div>
        </div>
      </section>

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
        </div>
      </section>
    </div>
  );
};

export default Webinars;
