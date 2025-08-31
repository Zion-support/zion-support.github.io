import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
import { SEO } from '../components/SEO';

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
      title: 'Cybersecurity in the Age of AI: Advanced Threat Detection',
      description: 'Explore cutting-edge cybersecurity solutions that leverage AI to detect and respond to sophisticated threats in real-time.',
      category: 'cybersecurity',
      type: 'upcoming',
      date: '2025-02-15T13:00:00Z',
      duration: '90 min',
      speakers: ['Dr. Emily Watson', 'Security Experts', 'AI Security Team'],
      maxAttendees: 500,
      currentAttendees: 342,
      featured: false,
      tags: ['Cybersecurity', 'AI Security', 'Threat Detection', 'Real-time Response'],
      thumbnail: '/images/webinars/cybersecurity-ai-2025.jpg',
      registrationRequired: true,
      recordingAvailable: false
    }
  ];

  const pastWebinars = [
    {
      id: 4,
      title: 'Cloud Migration Strategies for Enterprise Success',
      description: 'Learn proven strategies for migrating legacy systems to the cloud while minimizing downtime and maximizing ROI.',
      category: 'cloud-devops',
      type: 'past',
      date: '2024-12-15T14:00:00Z',
      duration: '75 min',
      speakers: ['Cloud Architecture Team', 'DevOps Experts'],
      maxAttendees: 450,
      currentAttendees: 450,
      featured: false,
      tags: ['Cloud Migration', 'Enterprise', 'DevOps', 'ROI'],
      thumbnail: '/images/webinars/cloud-migration-2024.jpg',
      registrationRequired: false,
      recordingAvailable: true,
      recordingUrl: '/recordings/cloud-migration-2024',
      views: 1247,
      rating: 4.8
    },
    {
      id: 5,
      title: 'Digital Transformation Roadmap: From Strategy to Execution',
      description: 'A comprehensive guide to planning and executing successful digital transformation initiatives.',
      category: 'digital-transformation',
      type: 'past',
      date: '2024-11-20T15:00:00Z',
      duration: '60 min',
      speakers: ['Digital Strategy Team', 'Change Management Experts'],
      maxAttendees: 600,
      currentAttendees: 600,
      featured: false,
      tags: ['Digital Transformation', 'Strategy', 'Change Management', 'Execution'],
      thumbnail: '/images/webinars/digital-transformation-2024.jpg',
      registrationRequired: false,
      recordingAvailable: true,
      recordingUrl: '/recordings/digital-transformation-2024',
      views: 2156,
      rating: 4.9
    }
  ];

  const allWebinars = [...upcomingWebinars, ...pastWebinars];

  // Update category counts
  categories.forEach(category => {
    category.count = allWebinars.filter(webinar => 
      category.id === 'all' || webinar.category === category.id
    ).length;
  });

  const filteredWebinars = allWebinars.filter(webinar => {
    const matchesCategory = selectedCategory === 'all' || webinar.category === selectedCategory;
    const matchesSearch = webinar.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         webinar.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         webinar.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesTime = showPast ? webinar.type === 'past' : webinar.type === 'upcoming';
    
    return matchesCategory && matchesSearch && matchesTime;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getTimeUntil = (dateString: string) => {
    const now = new Date();
    const webinarDate = new Date(dateString);
    const diff = webinarDate.getTime() - now.getTime();
    
    if (diff <= 0) return 'Past';
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    if (days > 0) return `${days} day${days > 1 ? 's' : ''} away`;
    if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} away`;
    return 'Starting soon';
  };

  const getCategoryColor = (categoryId: string) => {
    switch (categoryId) {
      case 'ai-ml': return 'from-purple-500 to-pink-500';
      case 'cybersecurity': return 'from-red-500 to-orange-500';
      case 'cloud-devops': return 'from-blue-500 to-cyan-500';
      case 'digital-transformation': return 'from-emerald-500 to-teal-500';
      case 'healthcare-tech': return 'from-green-500 to-emerald-500';
      case 'quantum-computing': return 'from-indigo-500 to-purple-500';
      case 'sustainability': return 'from-yellow-500 to-orange-500';
      default: return 'from-slate-500 to-gray-500';
    }
  };

  return (
    <>
      <SEO 
        title="Webinars - Zion Tech Group"
        description="Join our expert-led webinars on AI, cybersecurity, cloud computing, and digital transformation. Learn from industry leaders and stay ahead of technology trends."
        keywords="webinars, AI, cybersecurity, cloud computing, digital transformation, technology education, Zion Tech Group"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium text-white mb-6">
                <Video className="w-4 h-4 mr-2" />
                Expert-Led Webinars
              </div>
              <h1 className="text-5xl font-bold text-white mb-6">
                Learn from Industry Leaders
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Join our comprehensive webinars on cutting-edge technologies, best practices, and industry insights. 
                Stay ahead of the curve with expert knowledge and practical strategies.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="py-8 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-6 items-start">
              {/* Search Bar */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search webinars by title, description, or tags..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Time Filter */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowPast(false)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    !showPast 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  <Calendar className="w-4 h-4 mr-2 inline" />
                  Upcoming
                </button>
                <button
                  onClick={() => setShowPast(true)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    showPast 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  <Clock className="w-4 h-4 mr-2 inline" />
                  Past
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                  <span className="text-xs opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Webinars Grid */}
        <div className="py-12">
          <div className="container mx-auto px-4">
            {filteredWebinars.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <Video className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No webinars found</h3>
                <p className="text-slate-400">
                  Try adjusting your search terms or category filter.
                </p>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredWebinars.map((webinar, index) => (
                  <motion.div
                    key={webinar.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:scale-105">
                      {/* Thumbnail */}
                      <div className="relative">
                        <div className="w-full h-48 bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center">
                          <Video className="w-16 h-16 text-slate-400" />
                        </div>
                        {webinar.featured && (
                          <div className="absolute top-2 left-2 bg-yellow-500 text-slate-900 px-2 py-1 rounded-full text-xs font-bold">
                            Featured
                          </div>
                        )}
                        {webinar.type === 'upcoming' ? (
                          <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                            Live
                          </div>
                        ) : (
                          <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                            Recorded
                          </div>
                        )}
                      </div>
                      
                      <div className="p-6">
                        {/* Category */}
                        <div className="flex items-center gap-2 mb-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(webinar.category)} text-white`}>
                            {categories.find(c => c.id === webinar.category)?.name}
                          </span>
                        </div>
                        
                        {/* Title */}
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                          {webinar.title}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                          {webinar.description}
                        </p>
                        
                        {/* Meta Info */}
                        <div className="space-y-2 mb-4 text-sm">
                          <div className="flex items-center gap-2 text-slate-400">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(webinar.date)}</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-400">
                            <Clock className="w-4 h-4" />
                            <span>{webinar.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-400">
                            <Users className="w-4 h-4" />
                            <span>{webinar.currentAttendees}/{webinar.maxAttendees} attendees</span>
                          </div>
                          {webinar.type === 'upcoming' && (
                            <div className="flex items-center gap-2 text-green-400">
                              <Clock className="w-4 h-4" />
                              <span>{getTimeUntil(webinar.date)}</span>
                            </div>
                          )}
                          {webinar.type === 'past' && webinar.recordingAvailable && (
                            <div className="flex items-center gap-2 text-blue-400">
                              <Eye className="w-4 h-4" />
                              <span>{webinar.views} views</span>
                            </div>
                          )}
                        </div>
                        
                        {/* Speakers */}
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-white mb-2">Speakers:</h4>
                          <div className="flex flex-wrap gap-2">
                            {webinar.speakers.slice(0, 3).map((speaker, idx) => (
                              <span key={idx} className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">
                                {speaker}
                              </span>
                            ))}
                            {webinar.speakers.length > 3 && (
                              <span className="px-2 py-1 bg-slate-700 text-slate-400 text-xs rounded">
                                +{webinar.speakers.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>
                        
                        {/* Tags */}
                        <div className="mb-6">
                          <div className="flex flex-wrap gap-2">
                            {webinar.tags.slice(0, 3).map((tag, idx) => (
                              <span key={idx} className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="flex gap-2">
                          {webinar.type === 'upcoming' ? (
                            <button className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
                              <Calendar className="w-4 h-4" />
                              Register Now
                            </button>
                          ) : (
                            <button className="flex-1 bg-green-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-600 transition-colors flex items-center justify-center gap-2">
                              <Play className="w-4 h-4" />
                              Watch Recording
                            </button>
                          )}
                          <button className="p-2 border border-slate-600 text-slate-400 rounded-lg hover:bg-slate-700 hover:text-white transition-colors">
                            <Share2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-24 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Stay Updated with Our Latest Webinars
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Get notified about upcoming webinars, access to exclusive content, and early registration opportunities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-blue-500 text-white rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors hover:scale-105">
                  Subscribe to Updates
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-lg font-semibold text-lg hover:bg-blue-400 hover:text-slate-900 transition-colors">
                  Request Custom Webinar
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
