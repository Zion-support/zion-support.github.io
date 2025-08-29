import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Video, 
  Calendar, 
  Clock, 
  Users, 
  Play, 
  ExternalLink,
  Search,
  Filter,
  Tag,
  Award,
  TrendingUp,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Globe
} from 'lucide-react';

export default function Webinars() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Webinars', count: 18, icon: Video },
    { id: 'ai-ml', name: 'AI & Machine Learning', count: 8, icon: Brain },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 5, icon: Shield },
    { id: 'cloud', name: 'Cloud & DevOps', count: 3, icon: Cloud },
    { id: 'quantum', name: 'Quantum Computing', count: 2, icon: Rocket }
  ];

  const webinars = [
    {
      id: 1,
      title: 'AI-Powered Business Intelligence: From Theory to Practice',
      category: 'ai-ml',
      presenter: 'Dr. Sarah Chen, CTO',
      date: '2024-09-15',
      time: '14:00 EST',
      duration: '60 minutes',
      summary: 'Learn how to implement AI-powered business intelligence solutions that deliver real business value. This webinar covers practical implementation strategies, common pitfalls, and success metrics.',
      keyTopics: [
        'AI analytics implementation strategies',
        'ROI measurement and success metrics',
        'Common challenges and solutions',
        'Real-world case studies'
      ],
      attendees: 1250,
      featured: true,
      status: 'upcoming',
      tags: ['AI', 'Business Intelligence', 'Analytics', 'Implementation'],
      image: '/api/placeholder/400/250',
      registrationLink: '#'
    },
    {
      id: 2,
      title: 'Zero-Trust Security: Building a Modern Security Architecture',
      category: 'cybersecurity',
      presenter: 'Alex Thompson, Cybersecurity Director',
      date: '2024-09-10',
      time: '15:00 EST',
      duration: '90 minutes',
      summary: 'Deep dive into zero-trust security principles and practical implementation strategies for enterprise organizations.',
      keyTopics: [
        'Zero-trust principles and architecture',
        'Implementation roadmap and timeline',
        'Integration with existing security tools',
        'Measuring security effectiveness'
      ],
      attendees: 980,
      featured: true,
      status: 'upcoming',
      tags: ['Cybersecurity', 'Zero-Trust', 'Enterprise Security', 'Architecture'],
      image: '/api/placeholder/400/250',
      registrationLink: '#'
    },
    {
      id: 3,
      title: 'Quantum Computing in AI: Breaking the Classical Barrier',
      category: 'quantum',
      presenter: 'Dr. James Kim, Quantum Computing Lead',
      date: '2024-08-25',
      time: '13:00 EST',
      duration: '75 minutes',
      summary: 'Explore the intersection of quantum computing and artificial intelligence, including current capabilities and future implications.',
      keyTopics: [
        'Quantum computing fundamentals',
        'Quantum AI algorithms and applications',
        'Current state of quantum advantage',
        'Future roadmap and predictions'
      ],
      attendees: 750,
      featured: false,
      status: 'past',
      tags: ['Quantum Computing', 'AI', 'Algorithms', 'Future Tech'],
      image: '/api/placeholder/400/250',
      recordingLink: '#'
    },
    {
      id: 4,
      title: 'Cloud-Native Architecture: Best Practices for Modern Applications',
      category: 'cloud',
      presenter: 'Marcus Rodriguez, VP of Engineering',
      date: '2024-08-20',
      time: '14:30 EST',
      duration: '60 minutes',
      summary: 'Learn how to design and build cloud-native applications that scale efficiently and deliver exceptional user experiences.',
      keyTopics: [
        'Microservices architecture design',
        'Containerization and orchestration',
        'DevOps automation practices',
        'Performance optimization strategies'
      ],
      attendees: 650,
      featured: false,
      status: 'past',
      tags: ['Cloud Computing', 'Microservices', 'DevOps', 'Architecture'],
      image: '/api/placeholder/400/250',
      recordingLink: '#'
    },
    {
      id: 5,
      title: 'AI Ethics and Governance: Building Trust in AI Systems',
      category: 'ai-ml',
      presenter: 'Dr. Emily Watson, Head of Data Science',
      date: '2024-08-15',
      time: '15:00 EST',
      duration: '60 minutes',
      summary: 'Framework for implementing ethical AI practices and governance structures that build trust and ensure compliance.',
      keyTopics: [
        'AI ethics principles and frameworks',
        'Bias detection and mitigation',
        'Transparency and explainability',
        'Regulatory compliance strategies'
      ],
      attendees: 890,
      featured: false,
      status: 'past',
      tags: ['AI Ethics', 'Governance', 'Compliance', 'Transparency'],
      image: '/api/placeholder/400/250',
      recordingLink: '#'
    },
    {
      id: 6,
      title: 'Edge Computing and IoT: The Future of Distributed Intelligence',
      category: 'cloud',
      presenter: 'IoT Team, Zion Tech Group',
      date: '2024-08-10',
      time: '14:00 EST',
      duration: '75 minutes',
      summary: 'Explore edge computing trends and IoT integration strategies that enable real-time analytics and new business models.',
      keyTopics: [
        'Edge computing architecture patterns',
        'IoT data processing strategies',
        'Real-time analytics implementation',
        'Business model innovation'
      ],
      attendees: 720,
      featured: false,
      status: 'past',
      tags: ['Edge Computing', 'IoT', 'Real-time Analytics', 'Innovation'],
      image: '/api/placeholder/400/250',
      recordingLink: '#'
    }
  ];

  const filteredWebinars = webinars.filter(webinar => {
    const matchesCategory = selectedCategory === 'all' || webinar.category === selectedCategory;
    const matchesSearch = webinar.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         webinar.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         webinar.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const upcomingWebinars = filteredWebinars.filter(webinar => webinar.status === 'upcoming');
  const pastWebinars = filteredWebinars.filter(webinar => webinar.status === 'past');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Webinars - Zion Tech Group"
        description="Join our educational webinars on AI, cybersecurity, cloud computing, and emerging technologies. Learn from industry experts and stay ahead of the curve."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Educational
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {' '}Webinars
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Join our expert-led webinars on cutting-edge AI, cybersecurity, and technology topics. 
              Learn practical strategies and stay ahead of industry trends.
            </p>
          </motion.div>

          {/* Stats Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">18+</div>
              <div className="text-slate-400">Webinars</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">5K+</div>
              <div className="text-slate-400">Attendees</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">5</div>
              <div className="text-slate-400">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">75</div>
              <div className="text-slate-400">Avg. Minutes</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search webinars..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-slate-800/50 text-slate-300 border border-slate-600 hover:border-cyan-400/50 hover:text-cyan-400'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                  <span className="px-2 py-1 bg-slate-700/50 rounded text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Upcoming
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {' '}Webinars
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Register for our upcoming educational sessions and learn from industry experts.
            </p>
          </motion.div>

          {upcomingWebinars.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {upcomingWebinars.map((webinar, index) => (
                <motion.div
                  key={webinar.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border ${
                    webinar.featured 
                      ? 'border-cyan-400/50 bg-gradient-to-br from-slate-800/50 to-cyan-900/20' 
                      : 'border-slate-700/50'
                  } hover:border-cyan-400/50 transition-all duration-300`}
                >
                  {webinar.featured && (
                    <div className="px-6 py-3 bg-cyan-500/20 border-b border-cyan-400/20">
                      <div className="flex items-center text-cyan-400 text-sm font-semibold">
                        <Award className="w-4 h-4 mr-2" />
                        Featured Webinar
                      </div>
                    </div>
                  )}

                  <div className="p-6">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                          Upcoming
                        </span>
                        <span className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full">
                          {categories.find(cat => cat.id === webinar.category)?.name}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3">{webinar.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-slate-400 mb-3">
                        <span className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{webinar.presenter}</span>
                        </span>
                      </div>
                    </div>

                    {/* Date & Time */}
                    <div className="mb-6 p-4 bg-slate-700/30 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2 text-cyan-400">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm font-medium">
                              {new Date(webinar.date).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2 text-blue-400">
                            <Clock className="w-4 h-4" />
                            <span className="text-sm font-medium">{webinar.time}</span>
                          </div>
                        </div>
                        <div className="text-slate-400 text-sm">
                          {webinar.duration}
                        </div>
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="text-slate-300 text-sm mb-6 leading-relaxed">{webinar.summary}</p>

                    {/* Key Topics */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Key Topics</h4>
                      <div className="space-y-2">
                        {webinar.keyTopics.map((topic, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-slate-300 text-sm">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {webinar.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <a
                      href={webinar.registrationLink}
                      className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Register Now</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-slate-400 text-lg mb-4">No upcoming webinars found</div>
              <p className="text-slate-500">Check back soon for new webinar announcements!</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Past Webinars */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Past
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {' '}Webinars
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Access recordings and materials from our previous educational sessions.
            </p>
          </motion.div>

          {pastWebinars.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastWebinars.map((webinar, index) => (
                <motion.div
                  key={webinar.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="p-6">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full">
                          Past
                        </span>
                        <span className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full">
                          {categories.find(cat => cat.id === webinar.category)?.name}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{webinar.title}</h3>
                      <div className="text-sm text-slate-400 mb-2">
                        By {webinar.presenter} • {new Date(webinar.date).toLocaleDateString()}
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="text-slate-300 text-sm mb-4 line-clamp-3">{webinar.summary}</p>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-slate-400 mb-4">
                      <span className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{webinar.duration}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{webinar.attendees.toLocaleString()}</span>
                      </span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {webinar.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded border border-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                      {webinar.tags.length > 3 && (
                        <span className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded border border-slate-600">
                          +{webinar.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* CTA */}
                    <a
                      href={webinar.recordingLink}
                      className="w-full px-4 py-2 bg-slate-700/50 text-slate-300 font-medium rounded-lg hover:bg-cyan-500/20 hover:text-cyan-400 hover:border-cyan-400/50 border border-slate-600 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <Play className="w-4 h-4" />
                      <span>Watch Recording</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-slate-400 text-lg mb-4">No past webinars found</div>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated with Our
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {' '}Latest Webinars
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              Get notified about upcoming webinars and access to exclusive content. 
              Join thousands of technology professionals expanding their knowledge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Subscribe to Updates
              </a>
              <a
                href="/blog"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Read Our Blog
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
