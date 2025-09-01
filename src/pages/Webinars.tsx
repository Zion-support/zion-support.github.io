import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  BookOpen, 
  Brain, 
  Shield, 
  Cloud, 
  Rocket, 
  Heart, 
  Zap, 
  Globe, 
  Video, 
  Database, 
  Target, 
  Calendar, 
  Clock, 
  Users, 
  Play, 
  ExternalLink, 
  Search, 
  Filter, 
  Star, 
  Eye, 
  Download, 
  Share2, 
  ArrowRight, 
  CheckCircle 
} from 'lucide-react';

const Webinars: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [filterType, setFilterType] = useState('all');

  const categories = [
    {
      id: 'all',
      name: 'All Categories',
      count: 156,
      icon: Globe
    },
    {
      id: 'ai',
      name: 'Artificial Intelligence',
      count: 42,
      icon: Brain
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      count: 35,
      icon: Shield
    },
    {
      id: 'cloud',
      name: 'Cloud Computing',
      count: 38,
      icon: Cloud
    },
    {
      id: 'emerging',
      name: 'Emerging Tech',
      count: 28,
      icon: Rocket
    },
    {
      id: 'data',
      name: 'Data & Analytics',
      count: 31,
      icon: Database
    }
  ];

  const filterTypes = [
    {
      id: 'all',
      name: 'All Types',
      count: 156
    },
    {
      id: 'upcoming',
      name: 'Upcoming',
      count: 45
    },
    {
      id: 'on-demand',
      name: 'On-Demand',
      count: 89
    },
    {
      id: 'live',
      name: 'Live',
      count: 22
    }
  ];

  const webinars = [
    {
      id: '1',
      title: 'AI-Powered Cybersecurity: The Future of Threat Detection',
      description: 'Learn how artificial intelligence is revolutionizing cybersecurity and helping organizations stay ahead of evolving threats.',
      type: 'upcoming',
      duration: '60 min',
      speakers: ['Dr. Sarah Chen', 'Michael Rodriguez'],
      tags: ['AI', 'Cybersecurity', 'Machine Learning'],
      featured: true,
      category: 'cybersecurity',
      date: '2024-02-15T14:00:00Z'
    },
    {
      id: '2',
      title: 'Cloud-Native Architecture: Building Scalable Applications',
      description: 'Discover best practices for designing and implementing cloud-native applications that scale with your business needs.',
      type: 'on-demand',
      duration: '75 min',
      speakers: ['Alex Thompson'],
      tags: ['Cloud Computing', 'Architecture', 'Scalability'],
      featured: false,
      category: 'cloud',
      date: '2024-01-20T10:00:00Z'
    },
    {
      id: '3',
      title: 'Quantum Computing: Breaking Down the Hype',
      description: 'An honest look at quantum computing developments and their practical applications in the near future.',
      type: 'on-demand',
      duration: '90 min',
      speakers: ['Dr. Elena Rodriguez', 'David Wilson'],
      tags: ['Quantum Computing', 'Emerging Tech', 'Research'],
      featured: true,
      category: 'emerging',
      date: '2024-01-15T15:00:00Z'
    },
    {
      id: '4',
      title: 'Data-Driven Decision Making: From Insights to Action',
      description: 'Transform your business intelligence capabilities and turn data into actionable insights.',
      type: 'upcoming',
      duration: '45 min',
      speakers: ['Jennifer Kim'],
      tags: ['Data Analytics', 'Business Intelligence', 'Decision Making'],
      featured: false,
      category: 'data',
      date: '2024-02-20T11:00:00Z'
    },
    {
      id: '5',
      title: 'Zero Trust Security: Implementation Strategies',
      description: 'Practical approaches to implementing zero trust security principles in your organization.',
      type: 'on-demand',
      duration: '60 min',
      speakers: ['Michael Rodriguez', 'Sarah Chen'],
      tags: ['Cybersecurity', 'Zero Trust', 'Implementation'],
      featured: true,
      category: 'cybersecurity',
      date: '2024-01-10T13:00:00Z'
    },
    {
      id: '6',
      title: 'AI Ethics and Responsible Development',
      description: 'Understanding the ethical implications of AI development and how to build responsible AI systems.',
      type: 'upcoming',
      duration: '75 min',
      speakers: ['Dr. Sarah Chen', 'Dr. Elena Rodriguez'],
      tags: ['AI Ethics', 'Responsible AI', 'Governance'],
      featured: false,
      category: 'ai',
      date: '2024-02-25T16:00:00Z'
    }
  ];

  const filteredWebinars = webinars.filter(webinar => {
    const matchesSearch = webinar.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         webinar.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         webinar.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = activeCategory === 'all' || webinar.category === activeCategory;
    const matchesType = filterType === 'all' || webinar.type === filterType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : Globe;
  };

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'General';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'upcoming': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'on-demand': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'live': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <>
      <SEO 
        title="Webinars - Zion Tech Group"
        description="Join our expert-led webinars on AI, cybersecurity, cloud computing, and emerging technologies. Learn from industry leaders and stay ahead of the curve."
        keywords="webinars, online learning, AI, cybersecurity, cloud computing, technology education, expert insights"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        {/* Header */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Video className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Webinars</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join our expert-led webinars on AI, cybersecurity, cloud computing, and emerging technologies. 
                Learn from industry leaders and stay ahead of the curve.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search webinars..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Filters */}
              <div className="flex items-center gap-4">
                <select
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                  className="px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>

                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {filterTypes.map((type) => (
                    <option key={type.id} value={type.id}>
                      {type.name} ({type.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Webinars */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Webinars</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most popular and highly-rated webinars that provide deep insights 
                into critical technology trends and business challenges.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {webinars.filter(w => w.featured).map((webinar, index) => (
                <motion.div
                  key={webinar.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                        <getCategoryIcon categoryId={webinar.category} className="w-6 h-6 text-white" />
                      </div>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium border border-blue-500/30">
                        Featured
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {webinar.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {webinar.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300">{webinar.speakers.join(', ')}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300">{webinar.duration}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm">
                        <Target className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300">{getCategoryName(webinar.category)}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {webinar.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-slate-700/50 text-cyan-400 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(webinar.type)}`}>
                        {webinar.type === 'upcoming' ? 'Upcoming' : 
                         webinar.type === 'on-demand' ? 'On-Demand' : 'Live'}
                      </span>
                      <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                        {webinar.type === 'upcoming' ? 'Register' : 'Watch Now'}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All Webinars */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">
                {searchQuery ? `Search Results for "${searchQuery}"` : 'All Webinars'}
              </h2>
              <p className="text-gray-400">
                {filteredWebinars.length} webinars found
              </p>
            </div>

            <div className="space-y-4">
              {filteredWebinars.map((webinar, index) => (
                <motion.div
                  key={webinar.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <getCategoryIcon categoryId={webinar.category} className="w-10 h-10 text-blue-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{webinar.title}</h3>
                          <p className="text-gray-300 mb-3">{webinar.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-400 mb-1">{webinar.duration}</div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(webinar.type)}`}>
                            {webinar.type === 'upcoming' ? 'Upcoming' : 
                             webinar.type === 'on-demand' ? 'On-Demand' : 'Live'}
                          </span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-300">{webinar.speakers.join(', ')}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-300">{formatDate(webinar.date)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Target className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-300">{getCategoryName(webinar.category)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-300">{webinar.duration}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {webinar.tags.map((tag, idx) => (
                          <span key={idx} className="px-3 py-1 bg-slate-700/50 text-cyan-400 rounded-full text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <span className="text-sm text-gray-400">
                            {getCategoryName(webinar.category)}
                          </span>
                          {webinar.featured && (
                            <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs border border-blue-500/30">
                              Featured
                            </span>
                          )}
                        </div>
                        <div className="flex gap-2">
                          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                            {webinar.type === 'upcoming' ? 'Register' : 'Watch Now'}
                          </button>
                          <button className="px-4 py-2 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-lg font-medium transition-colors">
                            <Share2 className="w-4 h-4 mr-2 inline" />
                            Share
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Stay Updated with Latest Webinars
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Get notified when we schedule new webinars and expert sessions. 
                Never miss an opportunity to learn from industry leaders.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                />
                <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Webinars;