
import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
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
    },
    {
      id: 7,
      title: "AI in Healthcare: Transforming Patient Care and Medical Research",
      description: "Discover how AI is revolutionizing healthcare delivery, from diagnostic imaging to personalized treatment plans.",
      category: "AI & Healthcare",
      speaker: "Dr. Michael Chang",
      date: "December 20, 2024",
      time: "2:00 PM EST",
      duration: "85 minutes",
      attendees: 2341,
      featured: false,
      icon: Brain,
      color: "from-green-500 to-blue-500",
      status: "recorded"
    },
    {
      id: 8,
      title: "Blockchain and Web3: The Future of Decentralized Applications",
      description: "Learn about blockchain technology, smart contracts, and the emerging Web3 ecosystem that's reshaping the internet.",
      category: "Blockchain & Web3",
      speaker: "Alexandra Torres",
      date: "December 15, 2024",
      time: "1:30 PM EST",
      duration: "70 minutes",
      attendees: 1892,
      featured: false,
      icon: Globe,
      color: "from-purple-500 to-pink-500",
      status: "recorded"
    }
  ];

  const categories = [
    { name: "All", count: webinars.length, active: true },
    { name: "AI & Business", count: webinars.filter(w => w.category === "AI & Business").length, active: false },
    { name: "Quantum Technology", count: webinars.filter(w => w.category === "Quantum Technology").length, active: false },
    { name: "Cybersecurity", count: webinars.filter(w => w.category === "Cybersecurity").length, active: false },
    { name: "Cloud Computing", count: webinars.filter(w => w.category === "Cloud Computing").length, active: false },
    { name: "Data Analytics", count: webinars.filter(w => w.category === "Data Analytics").length, active: false },
    { name: "Digital Twin", count: webinars.filter(w => w.category === "Digital Twin").length, active: false },
    { name: "AI & Healthcare", count: webinars.filter(w => w.category === "AI & Healthcare").length, active: false },
    { name: "Blockchain & Web3", count: webinars.filter(w => w.category === "Blockchain & Web3").length, active: false }
  ];

  const upcomingWebinars = webinars.filter(w => w.status === "upcoming");
  const recordedWebinars = webinars.filter(w => w.status === "recorded");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Webinars - Zion Tech Group"
        description="Join our expert-led webinars on AI, quantum computing, cybersecurity, cloud computing, and emerging technologies. Learn from industry leaders and gain practical insights."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Expert-Led Webinars
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Join industry experts and thought leaders for in-depth learning sessions on cutting-edge 
              technologies and business strategies that are shaping the future.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center text-gray-300">
                <Video className="w-5 h-5 mr-2" />
                <span>{upcomingWebinars.length} Upcoming Sessions</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Play className="w-5 h-5 mr-2" />
                <span>{recordedWebinars.length} Recorded Sessions</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Users className="w-5 h-5 mr-2" />
                <span>Expert Speakers</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-slate-700/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  category.active
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {category.name} ({category.count})
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Upcoming Webinars */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            Featured Upcoming Sessions
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingWebinars.filter(w => w.featured).map((webinar, index) => (
              <motion.div
                key={webinar.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="group relative"
              >
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 h-full hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${webinar.color} flex items-center justify-center`}>
                      <webinar.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xs text-cyan-400 font-medium bg-cyan-400/10 px-3 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {webinar.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {webinar.description}
                  </p>
                  
                  <div className="space-y-2 mb-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      {webinar.speaker}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {webinar.date} at {webinar.time}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {webinar.duration}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {webinar.attendees.toLocaleString()} registered
                    </div>
                    <span className="text-xs text-green-400 font-medium bg-green-400/10 px-3 py-1 rounded-full">
                      {webinar.status}
                    </span>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                    Register Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Upcoming Webinars */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            All Upcoming Sessions
          </motion.h2>
          
          <div className="space-y-6">
            {upcomingWebinars.map((webinar, index) => (
              <motion.div
                key={webinar.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${webinar.color} flex items-center justify-center flex-shrink-0`}>
                    <webinar.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 hover:text-cyan-400 transition-colors duration-300">
                          {webinar.title}
                        </h3>
                        <p className="text-gray-400 mb-3">
                          {webinar.description}
                        </p>
                      </div>
                      
                      <div className="flex flex-col items-end gap-2">
                        <span className="text-xs text-cyan-400 font-medium bg-cyan-400/10 px-3 py-1 rounded-full">
                          {webinar.category}
                        </span>
                        {webinar.featured && (
                          <span className="text-xs text-yellow-400 font-medium bg-yellow-400/10 px-3 py-1 rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        {webinar.speaker}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {webinar.date} at {webinar.time}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {webinar.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        {webinar.attendees.toLocaleString()} registered
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                      Register
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recorded Webinars */}
      <section className="py-16 bg-slate-800/20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            Recorded Sessions
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recordedWebinars.map((webinar, index) => (
              <motion.div
                key={webinar.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="group relative"
              >
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 h-full hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${webinar.color} flex items-center justify-center`}>
                      <webinar.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xs text-green-400 font-medium bg-green-400/10 px-3 py-1 rounded-full">
                      Available
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {webinar.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {webinar.description}
                  </p>
                  
                  <div className="space-y-2 mb-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      {webinar.speaker}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {webinar.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {webinar.duration}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {webinar.attendees.toLocaleString()} attendees
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-yellow-400" />
                      <span className="text-yellow-400">4.8</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25 flex items-center justify-center">
                    <Play className="w-4 h-4 mr-2" />
                    Watch Recording
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
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
              Get notified about upcoming webinars, access to recorded sessions, and exclusive 
              content from industry experts. Join thousands of technology professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-slate-800 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
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
