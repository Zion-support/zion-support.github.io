import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
  Share2,
  Heart,
  Rocket
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Webinars: React.FC = (): JSX.Element => {
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
    },
    {
      id: 6,
      title: 'Cloud Migration Best Practices: A Comprehensive Guide',
      category: 'cloud-devops',
      speaker: 'David Kim, Cloud Architecture Lead',
      date: '2024-01-29',
      time: '14:00 EST',
      duration: '60 minutes',
      attendees: 320,
      maxAttendees: 350,
      summary: 'Learn the best practices for successful cloud migration and optimization.',
      tags: ['Cloud Migration', 'DevOps', 'Best Practices', 'Architecture'],
      registrationUrl: null,
      watchUrl: '/webinars/cloud-migration-best-practices/watch',
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
                         (webinar.speakers && webinar.speakers.some(speaker => speaker.toLowerCase().includes(searchQuery.toLowerCase()))) ||
                         (webinar.speaker && webinar.speaker.toLowerCase().includes(searchQuery.toLowerCase())) ||
                         (webinar.tags && webinar.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
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
    } else if (webinar.currentAttendees && webinar.currentAttendees >= webinar.maxAttendees) {
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
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/30 mb-6">
                <Video className="w-5 h-5 text-cyan-400 mr-2" />
                <span className="text-cyan-400 font-medium">Expert Webinars</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Technology Webinars
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Join our expert-led webinars on AI, cybersecurity, cloud computing, and emerging technologies. 
                Learn from industry leaders and gain practical insights to transform your business.
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search webinars, speakers, or topics..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                      ? 'bg-cyan-500 text-white shadow-lg'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-700'
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
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-700'
                  }`}
                >
                  Upcoming
                </button>
                <button
                  onClick={() => setShowPast(true)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    showPast
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-700'
                  }`}
                >
                  Past Webinars
                </button>
              </div>
              
              <div className="text-gray-300">
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
                <Video className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No webinars found</h3>
                <p className="text-gray-400">
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
                      <Card className="h-full bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                        <CardHeader>
                          <div className="flex items-start justify-between mb-4">
                            <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/30">
                              <span className="text-cyan-400 text-sm font-medium">
                                {getCategoryName(webinar.category)}
                              </span>
                            </div>
                            <div className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${registrationStatus.color}`}>
                              {registrationStatus.status}
                            </div>
                          </div>
                          
                          <CardTitle className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 mb-3">
                            {webinar.title}
                          </CardTitle>
                          
                          <CardDescription className="text-gray-300 leading-relaxed mb-4">
                            {webinar.description || webinar.summary}
                          </CardDescription>
                          
                          <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                            <div className="flex items-center space-x-1">
                              <Users className="w-4 h-4" />
                              <span>{webinar.currentAttendees || webinar.attendees}/{webinar.maxAttendees}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{webinar.duration}</span>
                            </div>
                          </div>
                        </CardHeader>
                        
                        <CardContent>
                          <div className="space-y-3 mb-6 text-sm">
                            <div className="flex items-center justify-between">
                              <span className="text-gray-400">Speaker:</span>
                              <span className="text-white">{webinar.speakers ? webinar.speakers.join(', ') : webinar.speaker}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-gray-400">Date:</span>
                              <span className="text-white">{formatDate(webinar.date)}</span>
                            </div>
                            {webinar.time && (
                              <div className="flex items-center justify-between">
                                <span className="text-gray-400">Time:</span>
                                <span className="text-white">{webinar.time}</span>
                              </div>
                            )}
                          </div>
                          
                          <div className="mb-6">
                            <h4 className="text-white font-semibold mb-3">Tags:</h4>
                            <div className="flex flex-wrap gap-2">
                              {webinar.tags.map((tag, tagIndex) => (
                                <span
                                  key={tagIndex}
                                  className="px-2 py-1 bg-slate-700/50 rounded text-xs text-gray-300 border border-slate-600"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div className="flex space-x-2">
                            {webinar.registrationRequired ? (
                              <Button
                                className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
                              >
                                <CheckCircle className="w-4 h-4 mr-2" />
                                Register
                              </Button>
                            ) : webinar.watchUrl ? (
                              <Button
                                asChild
                                className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
                              >
                                <a href={webinar.watchUrl}>
                                  <Play className="w-4 h-4 mr-2" />
                                  Watch Now
                                </a>
                              </Button>
                            ) : null}
                            
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900"
                            >
                              <Share2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
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
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Have expertise to share? We're always looking for industry leaders and subject matter experts 
                to share their knowledge with our community.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white">
                  <Video className="w-5 h-5 mr-2" />
                  Propose a Webinar
                </Button>
                
                <Button
                  variant="outline"
                  className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View All Webinars
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Webinars;
