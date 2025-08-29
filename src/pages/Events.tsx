import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Star, 
  ArrowRight,
  Search,
  Filter,
  ExternalLink,
  Play,
  BookOpen,
  Award,
  TrendingUp,
  Globe,
  Building,
  Brain,
  Shield,
  Zap,
  Rocket,
  Cpu,
  Database,
  Network,
  Lock,
  Heart,
  Leaf,
  Sun,
  Moon,
  Star as StarIcon,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
  MapPin as MapPinIcon
} from 'lucide-react';

export default function Events() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('date');

  const categories = [
    'All',
    'AI & Machine Learning',
    'Cybersecurity',
    'Cloud Computing',
    'Digital Transformation',
    'IoT & Edge Computing',
    'Blockchain',
    'Quantum Computing',
    'Healthcare Technology',
    'Financial Technology',
    'Sustainability',
    'Emerging Technologies'
  ];

  const events = [
    {
      id: 1,
      title: 'AI Revolution Summit 2027',
      subtitle: 'The Future of Artificial Intelligence in Business',
      category: 'AI & Machine Learning',
      date: '2027-03-15',
      time: '09:00 AM - 05:00 PM',
      location: 'San Francisco Convention Center',
      virtual: true,
      inPerson: true,
      attendees: 2500,
      featured: true,
      description: 'Join industry leaders and AI experts for a comprehensive exploration of how artificial intelligence is transforming business operations and creating new opportunities.',
      speakers: [
        'Dr. Sarah Chen - AI Research Director',
        'Michael Rodriguez - Chief Technology Officer',
        'Lisa Park - AI Ethics Specialist'
      ],
      agenda: [
        'Keynote: The AI Revolution in 2027',
        'Panel: Ethical AI Implementation',
        'Workshop: Building AI-Powered Solutions',
        'Networking & Innovation Showcase'
      ],
      registrationUrl: '/events/ai-revolution-summit-2027',
      image: '/images/events/ai-summit-2027.jpg'
    },
    {
      id: 2,
      title: 'Quantum Computing Workshop',
      subtitle: 'Hands-on Quantum Computing Fundamentals',
      category: 'Quantum Computing',
      date: '2027-03-22',
      time: '10:00 AM - 04:00 PM',
      location: 'Zion Tech HQ, Austin',
      virtual: false,
      inPerson: true,
      attendees: 75,
      featured: false,
      description: 'Interactive workshop exploring quantum computing fundamentals and practical applications in cryptography and optimization.',
      speakers: [
        'Dr. James Wilson - Quantum Physicist',
        'Dr. Maria Garcia - Quantum Algorithm Specialist'
      ],
      agenda: [
        'Introduction to Quantum Computing',
        'Quantum Algorithms & Applications',
        'Hands-on Lab Sessions',
        'Future of Quantum Technology'
      ],
      registrationUrl: '/events/quantum-computing-workshop-2027',
      image: '/images/events/quantum-workshop-2027.jpg'
    },
    {
      id: 3,
      title: 'Cybersecurity Innovation Conference',
      subtitle: 'Next-Generation Security Solutions',
      category: 'Cybersecurity',
      date: '2027-04-05',
      time: '09:00 AM - 06:00 PM',
      location: 'Las Vegas Convention Center',
      virtual: true,
      inPerson: true,
      attendees: 1800,
      featured: true,
      description: 'Discover cutting-edge cybersecurity solutions and strategies for protecting digital assets in an evolving threat landscape.',
      speakers: [
        'Alex Thompson - Chief Security Officer',
        'Dr. Emily Chen - Threat Intelligence Expert',
        'Robert Kim - Zero Trust Architecture Specialist'
      ],
      agenda: [
        'Keynote: Future of Cybersecurity',
        'AI-Powered Threat Detection',
        'Zero Trust Implementation',
        'Incident Response Strategies'
      ],
      registrationUrl: '/events/cybersecurity-innovation-2027',
      image: '/images/events/cybersecurity-conference-2027.jpg'
    },
    {
      id: 4,
      title: 'Cloud & DevOps Summit',
      subtitle: 'Modern Infrastructure & Deployment',
      category: 'Cloud Computing',
      date: '2027-04-12',
      time: '08:00 AM - 05:00 PM',
      location: 'Seattle Convention Center',
      virtual: true,
      inPerson: true,
      attendees: 1200,
      featured: false,
      description: 'Explore the latest trends in cloud computing, DevOps practices, and infrastructure automation.',
      speakers: [
        'Sarah Johnson - Cloud Architecture Lead',
        'David Lee - DevOps Engineer',
        'Jennifer Wang - Infrastructure Specialist'
      ],
      agenda: [
        'Cloud-Native Architecture',
        'DevOps Best Practices',
        'Infrastructure as Code',
        'Monitoring & Observability'
      ],
      registrationUrl: '/events/cloud-devops-summit-2027',
      image: '/images/events/cloud-summit-2027.jpg'
    },
    {
      id: 5,
      title: 'Digital Transformation Forum',
      subtitle: 'Accelerating Business Innovation',
      category: 'Digital Transformation',
      date: '2027-04-19',
      time: '09:00 AM - 05:00 PM',
      location: 'New York Hilton Midtown',
      virtual: true,
      inPerson: true,
      attendees: 900,
      featured: true,
      description: 'Learn strategies for successful digital transformation and how to navigate organizational change.',
      speakers: [
        'Dr. Robert Smith - Digital Transformation Expert',
        'Lisa Chang - Change Management Specialist',
        'Michael Brown - Innovation Director'
      ],
      agenda: [
        'Digital Strategy Development',
        'Change Management',
        'Technology Integration',
        'Measuring Success'
      ],
      registrationUrl: '/events/digital-transformation-forum-2027',
      image: '/images/events/digital-transformation-2027.jpg'
    },
    {
      id: 6,
      title: 'IoT & Edge Computing Expo',
      subtitle: 'Connected Devices & Real-time Processing',
      category: 'IoT & Edge Computing',
      date: '2027-04-26',
      time: '10:00 AM - 06:00 PM',
      location: 'Austin Convention Center',
      virtual: false,
      inPerson: true,
      attendees: 800,
      featured: false,
      description: 'Discover the latest innovations in IoT devices, edge computing, and real-time data processing.',
      speakers: [
        'Dr. Carlos Rodriguez - IoT Researcher',
        'Amanda Foster - Edge Computing Engineer',
        'Kevin Zhang - Data Processing Specialist'
      ],
      agenda: [
        'IoT Device Innovation',
        'Edge Computing Architecture',
        'Real-time Analytics',
        'Security & Privacy'
      ],
      registrationUrl: '/events/iot-edge-expo-2027',
      image: '/images/events/iot-expo-2027.jpg'
    },
    {
      id: 7,
      title: 'Blockchain & Web3 Symposium',
      subtitle: 'Decentralized Future',
      category: 'Blockchain',
      date: '2027-05-03',
      time: '09:00 AM - 05:00 PM',
      location: 'Miami Beach Convention Center',
      virtual: true,
      inPerson: true,
      attendees: 1100,
      featured: false,
      description: 'Explore the future of blockchain technology, Web3 applications, and decentralized systems.',
      speakers: [
        'Dr. Elena Petrova - Blockchain Researcher',
        'Marcus Johnson - Web3 Developer',
        'Sophia Chen - DeFi Specialist'
      ],
      agenda: [
        'Blockchain Fundamentals',
        'Web3 Applications',
        'DeFi & Smart Contracts',
        'Regulatory Landscape'
      ],
      registrationUrl: '/events/blockchain-web3-symposium-2027',
      image: '/images/events/blockchain-symposium-2027.jpg'
    },
    {
      id: 8,
      title: 'Healthcare Technology Summit',
      subtitle: 'AI & Innovation in Healthcare',
      category: 'Healthcare Technology',
      date: '2027-05-10',
      time: '08:00 AM - 06:00 PM',
      location: 'Boston Convention & Exhibition Center',
      virtual: true,
      inPerson: true,
      attendees: 1500,
      featured: true,
      description: 'Discover how AI and emerging technologies are transforming healthcare delivery and patient outcomes.',
      speakers: [
        'Dr. Jennifer Adams - Healthcare AI Specialist',
        'Dr. Michael Chen - Medical Technology Expert',
        'Sarah Williams - Patient Experience Director'
      ],
      agenda: [
        'AI in Medical Diagnostics',
        'Digital Health Platforms',
        'Patient Data Security',
        'Future of Telemedicine'
      ],
      registrationUrl: '/events/healthcare-tech-summit-2027',
      image: '/images/events/healthcare-summit-2027.jpg'
    }
  ];

  const filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedEvents = [...filteredEvents].sort((a, b) => {
    switch (sortBy) {
      case 'date':
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case 'attendees':
        return b.attendees - a.attendees;
      case 'title':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  const getCategoryIcon = (category: string) => {
    const iconMap: Record<string, any> = {
      'AI & Machine Learning': Brain,
      'Cybersecurity': Shield,
      'Cloud Computing': Cpu,
      'Digital Transformation': Rocket,
      'IoT & Edge Computing': Network,
      'Blockchain': Lock,
      'Quantum Computing': Zap,
      'Healthcare Technology': Heart,
      'Financial Technology': TrendingUp,
      'Sustainability': Leaf,
      'Emerging Technologies': Star
    };
    return iconMap[category] || Star;
  };

  const getCategoryColor = (category: string) => {
    const colorMap: Record<string, string> = {
      'AI & Machine Learning': 'from-indigo-600 to-purple-600',
      'Cybersecurity': 'from-red-600 to-pink-600',
      'Cloud Computing': 'from-blue-600 to-cyan-600',
      'Digital Transformation': 'from-purple-600 to-indigo-600',
      'IoT & Edge Computing': 'from-green-600 to-teal-600',
      'Blockchain': 'from-yellow-600 to-orange-600',
      'Quantum Computing': 'from-purple-600 to-indigo-600',
      'Healthcare Technology': 'from-red-600 to-pink-600',
      'Financial Technology': 'from-emerald-600 to-teal-600',
      'Sustainability': 'from-green-600 to-emerald-600',
      'Emerging Technologies': 'from-purple-600 to-pink-600'
    };
    return colorMap[category] || 'from-gray-600 to-gray-700';
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

  return (
    <>
      <SEO
        title="Events - Zion Tech Group"
        description="Join us at upcoming events, conferences, and workshops. Discover the latest in AI, quantum computing, and emerging technologies."
        keywords={['events', 'conferences', 'workshops', 'AI summit', 'quantum computing', 'cybersecurity conference']}
        type="website"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(56,189,248,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1),transparent_50%)]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Events & Workshops
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Join us at industry-leading events, conferences, and workshops to discover 
                the latest innovations in AI, quantum computing, and emerging technologies.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Controls Section */}
        <section className="py-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Search */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Search Events</label>
                <input
                  type="text"
                  placeholder="Search by title or description..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>

              {/* Sort By */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="date">Date (Earliest First)</option>
                  <option value="attendees">Attendees (Most First)</option>
                  <option value="title">Title (A-Z)</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {sortedEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:bg-slate-800/70 overflow-hidden">
                    {/* Header */}
                    <div className={`bg-gradient-to-r ${getCategoryColor(event.category)} p-6 text-white`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                          {React.createElement(getCategoryIcon(event.category), { className: 'w-6 h-6' })}
                        </div>
                        <div className="flex items-center space-x-2">
                          {event.featured && (
                            <span className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-300 text-xs font-medium rounded-full">
                              Featured
                            </span>
                          )}
                          <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-full">
                            {event.category}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <p className="text-white/80 text-sm leading-relaxed">{event.subtitle}</p>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Event Details */}
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-cyan-400" />
                          <span className="text-slate-300 text-sm">{formatDate(event.date)}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-green-400" />
                          <span className="text-slate-300 text-sm">{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-red-400" />
                          <span className="text-slate-300 text-sm">{event.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-purple-400" />
                          <span className="text-slate-300 text-sm">{event.attendees.toLocaleString()}+ attendees</span>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="mb-6">
                        <p className="text-slate-400 text-sm leading-relaxed">{event.description}</p>
                      </div>

                      {/* Event Type Badges */}
                      <div className="flex items-center space-x-2 mb-6">
                        {event.virtual && (
                          <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full">
                            Virtual
                          </span>
                        )}
                        {event.inPerson && (
                          <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full">
                            In-Person
                          </span>
                        )}
                      </div>

                      {/* CTA */}
                      <a
                        href={event.registrationUrl}
                        className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                      >
                        <span>Register Now</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {sortedEvents.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No events found</h3>
                <p className="text-slate-400">Try adjusting your search criteria or filters.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-bold text-white">
                Host Your Own Event?
              </h2>
              <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
                Interested in hosting a technology event or workshop? Let's discuss how we can help 
                you create an engaging and informative experience for your audience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-cyan-600 font-semibold rounded-xl hover:bg-slate-100 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white hover:bg-white hover:text-cyan-600 transition-all duration-300 transform hover:scale-105"
                >
                  Explore Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
