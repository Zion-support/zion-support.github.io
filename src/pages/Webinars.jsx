import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Play, ExternalLink, Search, Filter } from 'lucide-react';

export default function Webinars() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', count: 45 },
    { id: 'ai', name: 'AI & Machine Learning', count: 12 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 8 },
    { id: 'cloud', name: 'Cloud Computing', count: 10 },
    { id: 'iot', name: 'IoT & Edge Computing', count: 6 },
    { id: 'quantum', name: 'Quantum Computing', count: 4 },
    { id: 'blockchain', name: 'Blockchain & Web3', count: 5 }
  ];

  const types = [
    { id: 'all', name: 'All Types' },
    { id: 'live', name: 'Live Webinars' },
    { id: 'recorded', name: 'Recorded Sessions' },
    { id: 'series', name: 'Webinar Series' }
  ];

  const webinars = [
    {
      id: 1,
      title: 'AI-Powered Cybersecurity: Next-Gen Threat Detection',
      description: 'Learn how artificial intelligence is revolutionizing cybersecurity with advanced threat detection and automated response systems.',
      category: 'ai',
      type: 'live',
      date: 'March 15, 2025',
      time: '2:00 PM EST',
      duration: '90 minutes',
      speaker: 'Dr. Sarah Chen',
      company: 'Zion Tech Group',
      image: '/api/placeholder/400/250',
      attendees: 1247,
      isLive: true
    },
    {
      id: 2,
      title: 'Quantum Computing in Enterprise: Practical Applications',
      description: 'Explore real-world applications of quantum computing in enterprise environments and how to prepare your organization.',
      category: 'quantum',
      type: 'recorded',
      date: 'March 10, 2025',
      time: '1:00 PM EST',
      duration: '75 minutes',
      speaker: 'Prof. Michael Rodriguez',
      company: 'Quantum Solutions Inc.',
      image: '/api/placeholder/400/250',
      attendees: 892,
      isLive: false
    },
    {
      id: 3,
      title: 'Building Resilient Cloud Infrastructure',
      description: 'Best practices for designing and implementing cloud infrastructure that can withstand failures and scale efficiently.',
      category: 'cloud',
      type: 'live',
      date: 'March 20, 2025',
      time: '3:00 PM EST',
      duration: '60 minutes',
      speaker: 'Alex Thompson',
      company: 'Cloud Architects LLC',
      image: '/api/placeholder/400/250',
      attendees: 1563,
      isLive: true
    },
    {
      id: 4,
      title: 'IoT Security: Protecting Connected Devices',
      description: 'Comprehensive guide to securing IoT devices and networks in enterprise and industrial environments.',
      category: 'iot',
      type: 'series',
      date: 'March 25, 2025',
      time: '11:00 AM EST',
      duration: '120 minutes',
      speaker: 'Lisa Park',
      company: 'IoT Security Experts',
      image: '/api/placeholder/400/250',
      attendees: 734,
      isLive: true
    },
    {
      id: 5,
      title: 'Blockchain for Enterprise: Beyond Cryptocurrency',
      description: 'Discover how blockchain technology is transforming supply chain management, identity verification, and more.',
      category: 'blockchain',
      type: 'recorded',
      date: 'March 8, 2025',
      time: '2:30 PM EST',
      duration: '80 minutes',
      speaker: 'David Kim',
      company: 'Blockchain Solutions',
      image: '/api/placeholder/400/250',
      attendees: 1102,
      isLive: false
    },
    {
      id: 6,
      title: 'Zero-Trust Security Architecture Implementation',
      description: 'Step-by-step guide to implementing zero-trust security principles in your organization.',
      category: 'cybersecurity',
      type: 'live',
      date: 'March 22, 2025',
      time: '1:30 PM EST',
      duration: '90 minutes',
      speaker: 'Rachel Green',
      company: 'Security First',
      image: '/api/placeholder/400/250',
      attendees: 945,
      isLive: true
    }
  ];

  const filteredWebinars = webinars.filter(webinar => {
    const matchesSearch = webinar.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         webinar.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         webinar.speaker.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || webinar.category === selectedCategory;
    const matchesType = selectedType === 'all' || webinar.type === selectedType;
    return matchesSearch && matchesCategory && matchesType;
  });

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-zion-blue to-zion-purple text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-lg rounded-full mb-6">
              <Play className="w-10 h-10 text-zion-cyan" />
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl font-bold mb-6"
          >
            Expert Webinars & Tech Talks
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-zion-cyan mb-8 max-w-3xl mx-auto"
          >
            Join industry experts for in-depth discussions on cutting-edge technology trends, 
            best practices, and innovative solutions that drive business transformation.
          </motion.p>
          
          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search webinars, speakers, or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl border-2 transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'border-zion-cyan bg-zion-cyan/10 text-zion-cyan'
                    : 'border-zion-slate-light text-zion-slate-light hover:border-zion-cyan hover:text-zion-cyan'
                }`}
              >
                <span className="font-medium">{category.name}</span>
                <span className="bg-zion-slate-light/20 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </motion.button>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            {types.map((type) => (
              <motion.button
                key={type.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedType(type.id)}
                className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                  selectedType === type.id
                    ? 'border-zion-cyan bg-zion-cyan/10 text-zion-cyan'
                    : 'border-zion-slate-light text-zion-slate-light hover:border-zion-cyan hover:text-zion-cyan'
                }`}
              >
                {type.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Webinars Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredWebinars.map((webinar, index) => (
            <motion.div
              key={webinar.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-zion-slate-dark border border-zion-slate-light rounded-xl overflow-hidden hover:border-zion-cyan transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20"
            >
              <div className="aspect-video bg-zion-slate-light/20 flex items-center justify-center relative">
                <Play className="w-16 h-16 text-zion-slate-light" />
                {webinar.isLive && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium animate-pulse">
                    LIVE
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-zion-cyan/20 text-zion-cyan px-3 py-1 rounded-full text-xs font-medium">
                    {categories.find(c => c.id === webinar.category)?.name}
                  </span>
                  <span className="bg-zion-slate-light/20 text-zion-slate-light px-3 py-1 rounded-full text-xs">
                    {webinar.type}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">{webinar.title}</h3>
                <p className="text-zion-slate-light text-sm mb-4 line-clamp-3">{webinar.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-zion-slate-light text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{webinar.date} at {webinar.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-zion-slate-light text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{webinar.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-zion-slate-light text-sm">
                    <User className="w-4 h-4" />
                    <span>{webinar.speaker} • {webinar.company}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-zion-slate-light text-sm">
                    {webinar.attendees.toLocaleString()} attendees
                  </span>
                  <button className="px-4 py-2 bg-zion-cyan text-futuristic font-medium rounded-lg hover:bg-zion-cyan/90 transition-colors">
                    {webinar.isLive ? 'Join Live' : 'Watch Now'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated with Our Webinar Series</h2>
          <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss an opportunity to learn from industry experts 
            and technology leaders. Get early access to upcoming webinars and exclusive content.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-futuristic font-semibold rounded-xl hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-300 transform hover:scale-105">
            Subscribe to Webinar Updates
          </button>
        </motion.div>
      </div>
    </div>
  );
}
