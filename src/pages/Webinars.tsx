import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Video, Calendar, Clock, Users, Tag, ArrowRight, Play, ExternalLink, Search, Filter, Star, TrendingUp, Brain, Shield, Cloud, Zap, Globe, BookOpen, Award, CheckCircle } from 'lucide-react';

export default function Webinars() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Webinars', icon: Video },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'digital-transformation', name: 'Digital Transformation', icon: TrendingUp },
    { id: 'industry', name: 'Industry Insights', icon: Globe }
  ];

  const webinars = [
    {
      id: 1,
      title: 'AI-Powered Cybersecurity: The Future of Threat Detection',
      description: 'Learn how artificial intelligence is revolutionizing cybersecurity and providing real-time threat detection capabilities.',
      category: 'cybersecurity',
      date: '2024-09-15',
      time: '2:00 PM - 3:30 PM EST',
      duration: '90 minutes',
      speaker: 'Dr. Emily Watson',
      speakerTitle: 'Cybersecurity Director',
      speakerAvatar: '/images/team/emily-watson.jpg',
      attendees: 1250,
      featured: true,
      tags: ['AI', 'Cybersecurity', 'Threat Detection'],
      image: '🔒',
      registrationUrl: '/webinars/ai-cybersecurity-2024',
      recordingUrl: null
    },
    {
      id: 2,
      title: 'Cloud Migration Strategies for Enterprise Success',
      description: 'Discover proven strategies for migrating legacy systems to the cloud while minimizing downtime and maximizing ROI.',
      category: 'cloud',
      date: '2024-09-20',
      time: '1:00 PM - 2:30 PM EST',
      duration: '90 minutes',
      speaker: 'Marcus Rodriguez',
      speakerTitle: 'Head of Cloud & DevOps',
      speakerAvatar: '/images/team/marcus-rodriguez.jpg',
      attendees: 980,
      featured: true,
      tags: ['Cloud Migration', 'DevOps', 'Enterprise'],
      image: '☁️',
      registrationUrl: '/webinars/cloud-migration-2024',
      recordingUrl: null
    },
    {
      id: 3,
      title: 'Machine Learning in Healthcare: Transforming Patient Care',
      description: 'Explore how ML algorithms are improving diagnostic accuracy and patient outcomes in modern healthcare.',
      category: 'ai-ml',
      date: '2024-09-25',
      time: '3:00 PM - 4:30 PM EST',
      duration: '90 minutes',
      speaker: 'Dr. Sarah Chen',
      speakerTitle: 'CTO & AI Research Lead',
      speakerAvatar: '/images/team/sarah-chen.jpg',
      attendees: 750,
      featured: false,
      tags: ['Machine Learning', 'Healthcare', 'AI'],
      image: '🏥',
      registrationUrl: '/webinars/ml-healthcare-2024',
      recordingUrl: null
    },
    {
      id: 4,
      title: 'Digital Transformation: From Strategy to Implementation',
      description: 'A comprehensive guide to planning and executing successful digital transformation initiatives.',
      category: 'digital-transformation',
      date: '2024-10-02',
      time: '2:00 PM - 3:30 PM EST',
      duration: '90 minutes',
      speaker: 'Kleber Santos',
      speakerTitle: 'CEO & Founder',
      speakerAvatar: '/images/team/kleber-santos.jpg',
      attendees: 1100,
      featured: false,
      tags: ['Digital Transformation', 'Strategy', 'Implementation'],
      image: '🚀',
      registrationUrl: '/webinars/digital-transformation-2024',
      recordingUrl: null
    },
    {
      id: 5,
      title: 'Edge Computing: The Next Frontier of Technology',
      description: 'Learn about edge computing technologies and their applications in IoT, AI, and real-time processing.',
      category: 'industry',
      date: '2024-10-08',
      time: '1:00 PM - 2:30 PM EST',
      duration: '90 minutes',
      speaker: 'Alex Thompson',
      speakerTitle: 'IoT & Edge Computing Specialist',
      speakerAvatar: '/images/team/alex-thompson.jpg',
      attendees: 650,
      featured: false,
      tags: ['Edge Computing', 'IoT', 'Real-time Processing'],
      image: '🌐',
      registrationUrl: '/webinars/edge-computing-2024',
      recordingUrl: null
    }
  ];

  const filteredWebinars = webinars.filter(webinar => {
    const matchesSearch = webinar.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         webinar.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         webinar.speaker.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || webinar.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : Video;
  };

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'General';
  };

  return (
    <>
      <SEO
        title="Webinars - Zion Tech Group"
        description="Join our expert-led webinars on AI, cybersecurity, cloud computing, and digital transformation. Gain insights from industry leaders and stay ahead of technology trends."
        keywords="webinars, technology education, AI webinars, cybersecurity training, cloud computing, digital transformation, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-red-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <Video className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Expert{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                Webinars
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Join our expert-led sessions on cutting-edge technologies, industry insights,
              and practical strategies for digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 border-b border-slate-700/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search webinars..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400/50 focus:ring-1 focus:ring-purple-400/20"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-purple-500/20 border-purple-400/50 text-purple-400'
                      : 'bg-slate-800/50 border-slate-600/50 text-gray-300 hover:border-purple-400/30 hover:text-purple-300'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Webinars */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Featured Webinars</h2>
            <p className="text-gray-300">Don't miss these upcoming expert-led sessions</p>
          </motion.div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredWebinars.filter(w => w.featured).map((webinar, index) => (
              <motion.article
                key={webinar.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{webinar.image}</div>
                  <div className="text-right">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs font-medium rounded-full border border-purple-500/30">
                      Featured
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-white mb-2">{webinar.title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{webinar.description}</p>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{formatDate(webinar.date)}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{webinar.duration}</span>
                    </span>
                  </div>
                </div>

                {/* Speaker Info */}
                <div className="mb-4 p-3 bg-slate-800/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">{webinar.speaker}</div>
                      <div className="text-gray-400 text-xs">{webinar.speakerTitle}</div>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {webinar.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                  <div className="text-sm text-gray-400">
                    <span className="flex items-center space-x-1">
                      <Users className="w-3 h-3" />
                      <span>{webinar.attendees} registered</span>
                    </span>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center space-x-2">
                    <Play className="w-4 h-4" />
                    <span>Register Now</span>
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* All Webinars */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">All Webinars</h2>
            <p className="text-gray-300">Browse our complete collection of expert-led sessions</p>
          </motion.div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredWebinars.map((webinar, index) => (
              <motion.article
                key={webinar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-400/30 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{webinar.image}</div>
                  <div className="text-right">
                    <span className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full">
                      {getCategoryName(webinar.category)}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-white mb-2">{webinar.title}</h3>
                  <p className="text-gray-300 text-sm mb-3 line-clamp-3">{webinar.description}</p>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{formatDate(webinar.date)}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{webinar.duration}</span>
                    </span>
                  </div>
                </div>

                {/* Speaker Info */}
                <div className="mb-4 p-3 bg-slate-800/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">{webinar.speaker}</div>
                      <div className="text-gray-400 text-xs">{webinar.speakerTitle}</div>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {webinar.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                  <div className="text-sm text-gray-400">
                    <span className="flex items-center space-x-1">
                      <Users className="w-3 h-3" />
                      <span>{webinar.attendees} registered</span>
                    </span>
                  </div>
                  <button className="px-3 py-2 bg-purple-500/20 border border-purple-400/50 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-all duration-300 text-sm">
                    Register
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredWebinars.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">No webinars found</h3>
              <p className="text-gray-400">Try adjusting your search criteria or browse all categories.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated with Technology Trends
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our community of technology professionals and gain insights from industry experts.
              Never miss an important webinar or learning opportunity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
              >
                Subscribe to Updates
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-purple-400/50 text-purple-400 font-semibold rounded-lg hover:bg-purple-400/10 transition-all duration-300"
              >
                Request Custom Webinar
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}