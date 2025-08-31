import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  Video, 
  Calendar, 
  Clock, 
  Users, 
  Tag, 
  ArrowRight, 
  Play, 
  ExternalLink,
  Search,
  Filter,
  Star,
  TrendingUp,
  Brain,
  Shield,
  Cloud,
  Zap,
  Globe,
  BookOpen,
  Award,
  CheckCircle
} from 'lucide-react';

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
      speaker: 'Technology Team',
      speakerTitle: 'Innovation Lab',
      speakerAvatar: '/images/team/tech-team.jpg',
      attendees: 650,
      featured: false,
      tags: ['Edge Computing', 'IoT', 'Real-time Processing'],
      image: '🌐',
      registrationUrl: '/webinars/edge-computing-2024',
      recordingUrl: null
    },
    {
      id: 6,
      title: 'Zero Trust Security Architecture: Implementation Guide',
      description: 'Step-by-step guide to implementing zero trust security principles in your organization.',
      category: 'cybersecurity',
      date: '2024-10-15',
      time: '2:00 PM - 3:30 PM EST',
      duration: '90 minutes',
      speaker: 'Security Team',
      speakerTitle: 'Cybersecurity Experts',
      speakerAvatar: '/images/team/security-team.jpg',
      attendees: 890,
      featured: false,
      tags: ['Zero Trust', 'Security', 'Architecture'],
      image: '🛡️',
      registrationUrl: '/webinars/zero-trust-2024',
      recordingUrl: null
    }
  ];

  const upcomingWebinars = webinars.filter(webinar => new Date(webinar.date) > new Date());
  const pastWebinars = webinars.filter(webinar => new Date(webinar.date) <= new Date());

  const filteredWebinars = upcomingWebinars.filter(webinar => {
    const matchesCategory = selectedCategory === 'all' || webinar.category === selectedCategory;
    const matchesSearch = webinar.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         webinar.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         webinar.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <SEO 
        title="Webinars - Zion Tech Group"
        description="Join our expert-led webinars on AI, cybersecurity, cloud computing, and digital transformation. Learn from industry leaders and gain valuable insights."
        keywords="webinars, online training, AI, cybersecurity, cloud computing, digital transformation, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Expert
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Webinars</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
            >
              Join our expert-led webinars to learn about the latest technology trends, 
              best practices, and innovative solutions from industry leaders.
            </motion.p>
            
            {/* Search and Filter */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search webinars..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-200 whitespace-nowrap ${
                        selectedCategory === category.id
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400'
                      }`}
                    >
                      <category.icon className="w-4 h-4" />
                      <span>{category.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Webinars */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Webinars
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Don't miss these upcoming expert-led sessions on cutting-edge technology topics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {webinars.filter(w => w.featured).map((webinar, index) => (
              <motion.div
                key={webinar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="p-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">
                      Featured
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm font-medium rounded-full">
                      {categories.find(c => c.id === webinar.category)?.name}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {webinar.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {webinar.description}
                  </p>
                  
                  <div className="flex items-center space-x-4 mb-6 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(webinar.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{webinar.time}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{webinar.attendees} registered</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          {webinar.speaker.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">
                          {webinar.speaker}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {webinar.speakerTitle}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {webinar.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={webinar.registrationUrl}
                      className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Register Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Upcoming Webinars */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Upcoming Webinars
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {filteredWebinars.length} webinars found
            </p>
          </div>

          {filteredWebinars.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredWebinars.map((webinar, index) => (
                <motion.div
                  key={webinar.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">
                        {categories.find(c => c.id === webinar.category)?.name}
                      </span>
                      <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                        <Users className="w-4 h-4" />
                        <span>{webinar.attendees}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors line-clamp-2">
                      {webinar.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3">
                      {webinar.description}
                    </p>
                    
                    <div className="space-y-2 mb-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(webinar.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{webinar.time} ({webinar.duration})</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {webinar.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded"
                          >
                            {tag}
                          </span>
                        ))}
                        {webinar.tags.length > 2 && (
                          <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded">
                            +{webinar.tags.length - 2}
                          </span>
                        )}
                      </div>
                      <Link
                        to={webinar.registrationUrl}
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors text-sm"
                      >
                        Register
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No webinars found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your search terms or category filters.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Attend Our Webinars?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Gain valuable insights and practical knowledge from industry experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Brain,
                title: 'Expert Knowledge',
                description: 'Learn from industry leaders and technology experts'
              },
              {
                icon: Clock,
                title: 'Time Efficient',
                description: '90-minute sessions packed with actionable insights'
              },
              {
                icon: Users,
                title: 'Interactive Q&A',
                description: 'Get your questions answered by experts'
              },
              {
                icon: Award,
                title: 'Certificates',
                description: 'Receive certificates of completion for your records'
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Ready to Learn?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            Register for our upcoming webinars and stay ahead of the technology curve. 
            Join thousands of professionals learning from our experts.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/training"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              View Training
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}