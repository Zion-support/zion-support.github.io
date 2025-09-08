import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Video, 
  Search,
  Calendar,
  Clock,
  User,
  Users,
  Play,
  ArrowRight,
  Filter,
  BookOpen,
  Star,
  Tag,
  ExternalLink,
  ChevronDown,
  ChevronRight,
  Eye,
  Download,
  Share2,
  Bookmark,
  MessageCircle
} from 'lucide-react';

const Webinars: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');

  const categories = ['All', 'AI & Machine Learning', 'Cloud Computing', 'Cybersecurity', 'Digital Transformation', 'Emerging Technologies', 'Industry Solutions'];
  const statuses = ['All', 'Upcoming', 'Live', 'Recorded'];

  const webinars = [
    {
      id: 1,
      title: 'The Future of AI-Powered Business Intelligence',
      description: 'Join us for an in-depth exploration of how artificial intelligence is transforming business intelligence and decision-making processes across industries.',
      category: 'AI & Machine Learning',
      status: 'Upcoming',
      host: 'Dr. Sarah Chen',
      date: '2025-01-25',
      time: '14:00 EST',
      duration: '60 min',
      attendees: 0,
      maxAttendees: 500,
      rating: 0,
      featured: true,
      tags: ['AI', 'Business Intelligence', 'Machine Learning', 'Analytics'],
      abstract: 'This webinar will explore the revolutionary impact of AI-powered business intelligence systems...',
      agenda: [
        'Introduction to AI in Business Intelligence',
        'Real-world Implementation Examples',
        'ROI and Success Metrics',
        'Q&A Session'
      ]
    },
    {
      id: 2,
      title: 'Zero Trust Security Architecture Implementation',
      description: 'Learn how to implement comprehensive zero trust security frameworks to protect against evolving cyber threats.',
      category: 'Cybersecurity',
      status: 'Upcoming',
      host: 'Michael Rodriguez',
      date: '2025-01-28',
      time: '15:00 EST',
      duration: '75 min',
      attendees: 0,
      maxAttendees: 300,
      rating: 0,
      featured: true,
      tags: ['Cybersecurity', 'Zero Trust', 'Enterprise Security', 'Risk Management'],
      abstract: 'This comprehensive session covers zero trust security implementation...',
      agenda: [
        'Zero Trust Principles and Framework',
        'Implementation Strategies',
        'Best Practices and Common Pitfalls',
        'Live Demo and Q&A'
      ]
    },
    {
      id: 3,
      title: 'Cloud-Native Transformation Strategies',
      description: 'Strategic roadmap for organizations transitioning to cloud-native architectures and microservices-based systems.',
      category: 'Cloud Computing',
      status: 'Upcoming',
      host: 'Dr. Emily Watson',
      date: '2025-02-02',
      time: '13:00 EST',
      duration: '90 min',
      attendees: 0,
      maxAttendees: 400,
      rating: 0,
      featured: false,
      tags: ['Cloud Computing', 'Microservices', 'Digital Transformation', 'Architecture'],
      abstract: 'Strategic guide for cloud-native transformation...',
      agenda: [
        'Cloud-Native Architecture Overview',
        'Migration Planning and Strategy',
        'Implementation Best Practices',
        'Case Studies and Success Stories'
      ]
    },
    {
      id: 4,
      title: 'AI in Healthcare: Revolutionizing Patient Care',
      description: 'Discover how artificial intelligence is transforming healthcare delivery, diagnosis, and patient outcomes.',
      category: 'AI & Machine Learning',
      status: 'Upcoming',
      host: 'Dr. James Thompson',
      date: '2025-02-05',
      time: '16:00 EST',
      duration: '60 min',
      attendees: 0,
      maxAttendees: 350,
      rating: 0,
      featured: false,
      tags: ['AI', 'Healthcare', 'Medical Technology', 'Patient Care'],
      abstract: 'Exploring AI applications in healthcare...',
      agenda: [
        'AI Applications in Healthcare',
        'Ethical Considerations',
        'Implementation Challenges',
        'Future Trends and Opportunities'
      ]
    },
    {
      id: 5,
      title: 'Blockchain Solutions for Financial Services',
      description: 'Implementing blockchain technology to enhance security, transparency, and efficiency in financial operations.',
      category: 'Emerging Technologies',
      status: 'Recorded',
      host: 'Lisa Chang',
      date: '2024-12-15',
      time: '14:00 EST',
      duration: '75 min',
      attendees: 280,
      maxAttendees: 300,
      rating: 4.8,
      featured: false,
      tags: ['Blockchain', 'Financial Services', 'Security', 'Transparency'],
      abstract: 'Recorded session on blockchain in financial services...',
      agenda: [
        'Blockchain Fundamentals',
        'Financial Services Applications',
        'Implementation Case Studies',
        'Regulatory Considerations'
      ]
    },
    {
      id: 6,
      title: 'Digital Transformation in Manufacturing',
      description: 'Leveraging Industry 4.0 technologies to create smart, connected, and efficient manufacturing operations.',
      category: 'Digital Transformation',
      status: 'Recorded',
      host: 'Robert Kim',
      date: '2024-12-10',
      time: '13:00 EST',
      duration: '80 min',
      attendees: 195,
      maxAttendees: 250,
      rating: 4.7,
      featured: false,
      tags: ['Industry 4.0', 'Manufacturing', 'IoT', 'Automation'],
      abstract: 'Recorded session on manufacturing digital transformation...',
      agenda: [
        'Industry 4.0 Overview',
        'Technology Implementation',
        'ROI and Success Metrics',
        'Future Trends'
      ]
    },
    {
      id: 7,
      title: 'Quantum Computing: The Next Frontier',
      description: 'Exploring the potential applications and implications of quantum computing for enterprise technology.',
      category: 'Emerging Technologies',
      status: 'Recorded',
      host: 'Dr. Alex Johnson',
      date: '2024-11-28',
      time: '15:00 EST',
      duration: '70 min',
      attendees: 320,
      maxAttendees: 350,
      rating: 4.9,
      featured: true,
      tags: ['Quantum Computing', 'Emerging Tech', 'Research', 'Future Tech'],
      abstract: 'Recorded session on quantum computing...',
      agenda: [
        'Quantum Computing Basics',
        'Enterprise Applications',
        'Current State and Limitations',
        'Future Outlook'
      ]
    },
    {
      id: 8,
      title: 'Sustainable Technology Solutions',
      description: 'Implementing green technology solutions to reduce environmental impact while maintaining business efficiency.',
      category: 'Industry Solutions',
      status: 'Recorded',
      host: 'Maria Garcia',
      date: '2024-11-20',
      time: '14:00 EST',
      duration: '65 min',
      attendees: 180,
      maxAttendees: 200,
      rating: 4.6,
      featured: false,
      tags: ['Sustainability', 'Green Tech', 'Energy Efficiency', 'ESG'],
      abstract: 'Recorded session on sustainable technology...',
      agenda: [
        'Sustainability in Technology',
        'Green IT Implementation',
        'Cost-Benefit Analysis',
        'Industry Best Practices'
      ]
    }
  ];

  const filteredWebinars = webinars.filter(webinar => {
    const matchesSearch = webinar.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         webinar.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         webinar.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All' || webinar.category === selectedCategory;
    const matchesStatus = selectedStatus === 'All' || webinar.status === selectedStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const upcomingWebinars = webinars.filter(webinar => webinar.status === 'Upcoming');
  const recordedWebinars = webinars.filter(webinar => webinar.status === 'Recorded');

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Upcoming': return 'bg-blue-500/20 text-blue-400';
      case 'Live': return 'bg-red-500/20 text-red-400';
      case 'Recorded': return 'bg-green-500/20 text-green-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <Video className="w-16 h-16 text-cyan-400 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Webinars
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Join our expert-led webinars on cutting-edge technology topics and industry insights
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Search */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                <input
                  type="text"
                  placeholder="Search webinars..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors text-lg"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-4 bg-slate-800/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-400 transition-colors"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Status Filter */}
            <div>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full px-4 py-4 bg-slate-800/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-400 transition-colors"
              >
                {statuses.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Upcoming Webinars */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Featured Upcoming Webinars</h2>
            <p className="text-gray-300">Don't miss these highly anticipated sessions</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingWebinars.filter(w => w.featured).map((webinar, index) => (
              <motion.div
                key={webinar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-400 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-yellow-400 text-sm font-medium">Featured</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(webinar.status)}`}>
                    {webinar.status}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{webinar.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{webinar.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {webinar.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-slate-700/50 text-cyan-400 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {webinar.host}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(webinar.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {webinar.time} ({webinar.duration})
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {webinar.attendees}/{webinar.maxAttendees} registered
                    </span>
                  </div>
                  <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition-colors flex items-center gap-2">
                    <Play className="w-4 h-4" />
                    Register Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Webinars */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">All Webinars</h2>
            <p className="text-gray-300">
              {filteredWebinars.length} webinars found
              {searchQuery && ` for "${searchQuery}"`}
            </p>
          </motion.div>

          {filteredWebinars.length > 0 ? (
            <div className="space-y-6">
              {filteredWebinars.map((webinar, index) => (
                <motion.div
                  key={webinar.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          {webinar.featured && (
                            <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full font-medium">
                              Featured
                            </span>
                          )}
                          <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full font-medium">
                            {webinar.category}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(webinar.status)}`}>
                            {webinar.status}
                          </span>
                        </div>
                        {webinar.rating > 0 && (
                          <div className="flex items-center gap-1 text-yellow-400">
                            <Star className="w-4 h-4 fill-current" />
                            <span className="text-sm font-medium">{webinar.rating}</span>
                          </div>
                        )}
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3">{webinar.title}</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">{webinar.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {webinar.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {webinar.host}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {formatDate(webinar.date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {webinar.time} ({webinar.duration})
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col justify-between">
                      <div className="text-right mb-4">
                        {webinar.status === 'Recorded' ? (
                          <>
                            <div className="text-2xl font-bold text-white mb-1">
                              {webinar.attendees}
                            </div>
                            <div className="text-gray-400 text-sm">Attendees</div>
                          </>
                        ) : (
                          <>
                            <div className="text-2xl font-bold text-white mb-1">
                              {webinar.attendees}/{webinar.maxAttendees}
                            </div>
                            <div className="text-gray-400 text-sm">Registered</div>
                          </>
                        )}
                      </div>

                      <div className="space-y-3">
                        {webinar.status === 'Upcoming' ? (
                          <button className="w-full px-4 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                            <Play className="w-4 h-4" />
                            Register Now
                          </button>
                        ) : (
                          <button className="w-full px-4 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                            <Play className="w-4 h-4" />
                            Watch Recording
                          </button>
                        )}
                        
                        {webinar.status === 'Recorded' && (
                          <button className="w-full px-4 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                            <Download className="w-4 h-4" />
                            Download Slides
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center py-16"
            >
              <Video className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No webinars found</h3>
              <p className="text-gray-300 mb-6">
                Try adjusting your search terms or filters
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                  setSelectedStatus('All');
                }}
                className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Stay Connected with Our Webinars
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get notified about upcoming webinars and access to exclusive content
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              >
                Subscribe to Updates
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Webinars;
