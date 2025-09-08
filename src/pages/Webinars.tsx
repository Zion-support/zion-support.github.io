
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Calendar, 
  Clock, 
  Play, 
  Star, 
  ArrowRight,
  Search,
  Filter,
  Video,
  Headphones,
  BookOpen,
  Award,
  Globe,
  Zap,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Leaf,
  TrendingUp
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Webinars() {
  const webinars = [
    {
      id: 1,
      title: 'AI Implementation Best Practices',
      subtitle: 'Learn from industry experts about successful AI deployment strategies',
      description: 'Join our panel of AI experts as they share real-world insights and best practices for implementing AI solutions in enterprise environments. Learn about common pitfalls, success strategies, and ROI optimization.',
      duration: '60 minutes',
      date: '2025-01-20',
      time: '2:00 PM EST',
      type: 'Panel Discussion',
      category: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      speakers: ['Dr. Sarah Chen', 'Mark Johnson', 'Dr. Emily Watson'],
      featured: true,
      registration: 'Open',
      maxAttendees: 500,
      currentAttendees: 342,
      tags: ['AI Implementation', 'Best Practices', 'Enterprise', 'ROI']
    },
    {
      id: 2,
      title: 'Quantum Computing for Business',
      subtitle: 'Understanding quantum computing applications in business contexts',
      description: 'Explore how quantum computing will transform various industries and what business leaders need to know to prepare for this revolutionary technology.',
      duration: '45 minutes',
      date: '2025-01-25',
      time: '11:00 AM EST',
      type: 'Expert Presentation',
      category: 'Quantum Computing',
      icon: Rocket,
      color: 'from-indigo-500 to-purple-500',
      speakers: ['Dr. Michael Rodriguez'],
      featured: true,
      registration: 'Limited Spots',
      maxAttendees: 300,
      currentAttendees: 298,
      tags: ['Quantum Computing', 'Business Impact', 'Future Tech', 'Strategy']
    },
    {
      id: 3,
      title: 'Cybersecurity Roundtable',
      subtitle: 'Expert panel on emerging cybersecurity challenges and solutions',
      description: 'Join cybersecurity experts for a comprehensive discussion on the latest threats, emerging technologies, and best practices for protecting your organization.',
      duration: '75 minutes',
      date: '2025-02-01',
      time: '3:00 PM EST',
      type: 'Panel Discussion',
      category: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      speakers: ['Marcus Johnson', 'Alex Thompson', 'Dr. James Wilson'],
      featured: false,
      registration: 'Open',
      maxAttendees: 400,
      currentAttendees: 156,
      tags: ['Cybersecurity', 'Threat Detection', 'Best Practices', 'Emerging Threats']
    },
    {
      id: 4,
      title: 'Cloud Migration Strategies',
      subtitle: 'Comprehensive guide to successful cloud migration',
      description: 'Learn proven strategies for migrating your infrastructure to the cloud, including planning, execution, and optimization phases.',
      duration: '50 minutes',
      date: '2025-02-05',
      time: '1:00 PM EST',
      type: 'Workshop',
      category: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      speakers: ['David Chen', 'Sarah Kim'],
      featured: false,
      registration: 'Open',
      maxAttendees: 250,
      currentAttendees: 89,
      tags: ['Cloud Migration', 'DevOps', 'Infrastructure', 'Strategy']
    },
    {
      id: 5,
      title: 'Digital Transformation Workshop',
      subtitle: 'Interactive workshop on digital transformation planning',
      description: 'Participate in an interactive workshop where you\'ll develop a digital transformation roadmap for your organization.',
      duration: '90 minutes',
      date: '2025-02-10',
      time: '10:00 AM EST',
      type: 'Interactive Workshop',
      category: 'Digital Transformation',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
      speakers: ['Digital Transformation Team'],
      featured: false,
      registration: 'Limited Spots',
      maxAttendees: 100,
      currentAttendees: 95,
      tags: ['Digital Transformation', 'Workshop', 'Strategy', 'Planning']
    },
    {
      id: 6,
      title: 'IoT Edge Computing Deep Dive',
      subtitle: 'Technical exploration of IoT and edge computing architectures',
      description: 'Deep technical session covering IoT edge computing architectures, implementation strategies, and real-world deployment considerations.',
      duration: '65 minutes',
      date: '2025-02-15',
      time: '2:30 PM EST',
      type: 'Technical Session',
      category: 'IoT & Edge Computing',
      icon: Globe,
      color: 'from-teal-500 to-green-500',
      speakers: ['Dr. Emily Watson', 'Technical Team'],
      featured: false,
      registration: 'Open',
      maxAttendees: 200,
      currentAttendees: 67,
      tags: ['IoT', 'Edge Computing', 'Technical', 'Architecture']
    },
    {
      id: 7,
      title: 'AI in Healthcare: Current State and Future',
      subtitle: 'Comprehensive overview of AI applications in healthcare',
      description: 'Explore the current state of AI in healthcare, including diagnostic tools, treatment planning, and the future of personalized medicine.',
      duration: '55 minutes',
      date: '2025-02-20',
      time: '12:00 PM EST',
      type: 'Expert Presentation',
      category: 'Healthcare AI',
      icon: Brain,
      color: 'from-pink-500 to-rose-500',
      speakers: ['Dr. Jennifer Kim', 'Healthcare AI Team'],
      featured: false,
      registration: 'Open',
      maxAttendees: 350,
      currentAttendees: 123,
      tags: ['Healthcare AI', 'Medical Technology', 'Diagnostics', 'Personalized Medicine']
    },
    {
      id: 8,
      title: 'Sustainable Technology Solutions',
      subtitle: 'Green technology approaches for environmental impact reduction',
      description: 'Learn about innovative technology solutions that help organizations reduce their environmental footprint while improving operational efficiency.',
      duration: '40 minutes',
      date: '2025-02-25',
      time: '11:30 AM EST',
      type: 'Expert Presentation',
      category: 'Sustainability',
      icon: Leaf,
      color: 'from-emerald-500 to-teal-500',
      speakers: ['Sustainability Team'],
      featured: false,
      registration: 'Open',
      maxAttendees: 200,
      currentAttendees: 78,
      tags: ['Sustainability', 'Green Tech', 'Environmental Impact', 'Efficiency']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Webinars', count: webinars.length, icon: Video },
    { id: 'ai-ml', name: 'AI & Machine Learning', count: webinars.filter(w => w.category === 'AI & Machine Learning').length, icon: Brain },
    { id: 'quantum', name: 'Quantum Computing', count: webinars.filter(w => w.category === 'Quantum Computing').length, icon: Rocket },
    { id: 'cybersecurity', name: 'Cybersecurity', count: webinars.filter(w => w.category === 'Cybersecurity').length, icon: Shield },
    { id: 'cloud', name: 'Cloud & DevOps', count: webinars.filter(w => w.category === 'Cloud & DevOps').length, icon: Cloud },
    { id: 'digital-transformation', name: 'Digital Transformation', count: webinars.filter(w => w.category === 'Digital Transformation').length, icon: TrendingUp },
    { id: 'iot-edge', name: 'IoT & Edge', count: webinars.filter(w => w.category === 'IoT & Edge Computing').length, icon: Globe },
    { id: 'healthcare', name: 'Healthcare AI', count: webinars.filter(w => w.category === 'Healthcare AI').length, icon: Brain },
    { id: 'sustainability', name: 'Sustainability', count: webinars.filter(w => w.category === 'Sustainability').length, icon: Leaf }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredWebinars = webinars.filter(webinar => {
    const matchesCategory = selectedCategory === 'all' || webinar.category.toLowerCase().includes(selectedCategory.replace('-', ' '));
    const matchesSearch = webinar.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         webinar.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         webinar.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredWebinars = filteredWebinars.filter(webinar => webinar.featured);
  const regularWebinars = filteredWebinars.filter(webinar => !webinar.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getRegistrationStatus = (webinar: any) => {
    if (webinar.registration === 'Limited Spots') {
      const remaining = webinar.maxAttendees - webinar.currentAttendees;
      return remaining <= 10 ? 'Almost Full' : 'Limited Spots';
    }
    return webinar.registration;
  };

  const getRegistrationColor = (status: string) => {
    switch (status) {
      case 'Open':
        return 'bg-green-500/20 text-green-400';
      case 'Limited Spots':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'Almost Full':
        return 'bg-red-500/20 text-red-400';
      default:
        return 'bg-slate-500/20 text-slate-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Webinars & Workshops - Zion Tech Group"
        description="Join our expert-led webinars, workshops, and learning sessions on AI, quantum computing, cybersecurity, and emerging technologies. Interactive learning experiences for professionals."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-red-500/20 to-pink-500/20"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Webinars & Workshops
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join our expert-led learning sessions and interactive workshops on cutting-edge 
              technologies. Learn from industry leaders and gain practical insights.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search webinars, topics, or speakers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-lg"
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25"
              >
                Request Custom Session
              </a>
              <a
                href="/resources"
                className="px-8 py-4 border border-orange-400/50 text-orange-400 font-semibold rounded-lg hover:bg-orange-400/10 transition-all duration-300"
              >
                Browse All Resources
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8">
        <div className="container-responsive">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                  selectedCategory === category.id
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-orange-500/10 hover:text-orange-400 border border-slate-600'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
                <span className="text-xs opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Webinars */}
      {featuredWebinars.length > 0 && (
        <section className="py-20">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Featured Webinars
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our most popular and highly-anticipated learning sessions.
              </p>
            </motion.div>

            <div className="space-y-8">
              {featuredWebinars.map((webinar, index) => (
                <motion.div
                  key={webinar.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-xl rounded-3xl border border-orange-400/30 p-8 hover:border-orange-400/50 transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Overview */}
                    <div className="lg:col-span-1">
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-br ${webinar.color} rounded-xl flex items-center justify-center`}>
                          <webinar.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-sm font-medium rounded-full">
                            {webinar.category}
                          </span>
                          <h3 className="text-2xl font-bold text-white mt-2">{webinar.title}</h3>
                          <p className="text-gray-400 text-sm">{webinar.subtitle}</p>
                        </div>
                      </div>

                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="text-lg font-semibold text-orange-400 mb-2">Description</h4>
                          <p className="text-gray-300 text-sm">{webinar.description}</p>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-orange-400 mb-2">Speakers</h4>
                          <div className="flex flex-wrap gap-2">
                            {webinar.speakers.map((speaker, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full border border-slate-600"
                              >
                                {speaker}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {webinar.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full border border-slate-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Middle Column - Details */}
                    <div className="lg:col-span-1">
                      <h4 className="text-xl font-bold text-white mb-4">Session Details</h4>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <Calendar className="w-5 h-5 text-orange-400" />
                          <span className="text-gray-300">{formatDate(webinar.date)}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Clock className="w-5 h-5 text-orange-400" />
                          <span className="text-gray-300">{webinar.time}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Users className="w-5 h-5 text-orange-400" />
                          <span className="text-gray-300">{webinar.type}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Clock className="w-5 h-5 text-orange-400" />
                          <span className="text-gray-300">{webinar.duration}</span>
                        </div>
                      </div>

                      <div className="mt-6">
                        <h4 className="text-lg font-semibold text-orange-400 mb-3">Registration Status</h4>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-300">Attendees</span>
                            <span className="text-white">{webinar.currentAttendees}/{webinar.maxAttendees}</span>
                          </div>
                          <div className="w-full bg-slate-700 rounded-full h-2">
                            <div 
                              className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${(webinar.currentAttendees / webinar.maxAttendees) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Registration */}
                    <div className="lg:col-span-1">
                      <div className="space-y-4 mb-6">
                        <div className="bg-slate-700/30 rounded-lg p-4">
                          <div className="text-3xl font-bold text-orange-400">{webinar.duration}</div>
                          <div className="text-sm text-gray-400">Duration</div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-slate-700/30 rounded-lg p-3">
                            <div className="text-lg font-bold text-white">{webinar.type}</div>
                            <div className="text-xs text-gray-400">Format</div>
                          </div>
                          <div className="bg-slate-700/30 rounded-lg p-3">
                            <div className="text-lg font-bold text-white">{webinar.speakers.length}</div>
                            <div className="text-xs text-gray-400">Speakers</div>
                          </div>
                        </div>
                      </div>

                      <div className="mb-6">
                        <span className={`px-4 py-2 rounded-lg text-sm font-medium ${getRegistrationColor(getRegistrationStatus(webinar))}`}>
                          {getRegistrationStatus(webinar)}
                        </span>
                      </div>

                      <a
                        href="#"
                        className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Register Now
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Webinars Grid */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              All Webinars
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Browse our complete collection of learning sessions and workshops.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularWebinars.map((webinar, index) => (
              <motion.div
                key={webinar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6 hover:border-orange-400/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${webinar.color} rounded-lg flex items-center justify-center`}>
                    <webinar.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs font-medium rounded-full">
                      {webinar.category}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                  {webinar.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{webinar.subtitle}</p>

                <div className="space-y-3 mb-6">
                  <div className="text-sm">
                    <span className="text-gray-500">Date: </span>
                    <span className="text-white">{formatDate(webinar.date)}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-500">Time: </span>
                    <span className="text-white">{webinar.time}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-500">Duration: </span>
                    <span className="text-orange-400 font-semibold">{webinar.duration}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-500">Type: </span>
                    <span className="text-white">{webinar.type}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {webinar.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getRegistrationColor(getRegistrationStatus(webinar))}`}>
                    {getRegistrationStatus(webinar)}
                  </span>
                  <span className="text-sm text-gray-400">
                    {webinar.currentAttendees}/{webinar.maxAttendees}
                  </span>
                </div>

                <a
                  href="#"
                  className="inline-flex items-center text-orange-400 hover:text-orange-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                >
                  Register Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl border border-orange-400/30 p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Need a Custom Session?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our experts can create tailored webinars and workshops specifically 
              for your organization's needs and challenges.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25"
              >
                Request Custom Session
              </a>
              <a
                href="/resources"
                className="px-8 py-4 border border-orange-400 text-orange-400 font-semibold rounded-lg hover:bg-orange-400/10 transition-all duration-300"
              >
                Explore All Resources
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
