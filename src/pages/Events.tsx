import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  ArrowRight,
  Search,
  Filter,
  Globe,
  Brain,
  Shield,
  Cloud,
  Zap,
  TrendingUp,
  Award,
  Building,
  Lightbulb,
  BookOpen,
  ExternalLink,
  Video,
  Play,
  Download,
  Share2,
  Heart,
  Star,
  CheckCircle,
  Clock3
} from 'lucide-react';

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTimeframe, setSelectedTimeframe] = useState('upcoming');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Events', icon: Globe, count: 18 },
    { id: 'conferences', name: 'Conferences', icon: Building, count: 6 },
    { id: 'workshops', name: 'Workshops', icon: Lightbulb, count: 8 },
    { id: 'webinars', name: 'Webinars', icon: Video, count: 4 }
  ];

  const timeframes = [
    { id: 'upcoming', name: 'Upcoming', count: 12 },
    { id: 'past', name: 'Past Events', count: 6 }
  ];

  const events = [
    {
      id: 1,
      title: 'AI Innovation Summit 2024',
      description: 'Join industry leaders and AI experts for a comprehensive exploration of the latest developments in artificial intelligence, machine learning, and their transformative impact on business.',
      category: 'conferences',
      date: '2024-03-15',
      time: '09:00 AM - 06:00 PM',
      location: 'San Francisco Convention Center',
      virtual: false,
      capacity: 500,
      registered: 450,
      price: '$299',
      featured: true,
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      speakers: [
        { name: 'Dr. Sarah Chen', role: 'Chief Research Officer, Zion Tech Group' },
        { name: 'Michael Rodriguez', role: 'CEO, Zion Tech Group' },
        { name: 'Dr. Emily Watson', role: 'VP of Research, Zion Tech Group' }
      ],
      agenda: [
        '09:00 AM - Keynote: The Future of AI in Enterprise',
        '10:30 AM - Panel: AI Ethics and Responsible Development',
        '02:00 PM - Workshop: Implementing AI Solutions',
        '04:30 PM - Networking and Demo Showcase'
      ],
      tags: ['AI', 'Machine Learning', 'Innovation', 'Enterprise'],
      registrationUrl: 'https://ai-summit-2024.ziontechgroup.com',
      recordingUrl: null,
      materialsUrl: null
    },
    {
      id: 2,
      title: 'Cybersecurity Best Practices Workshop',
      description: 'Learn essential cybersecurity strategies and best practices to protect your organization from evolving threats in this hands-on workshop.',
      category: 'workshops',
      date: '2024-03-20',
      time: '10:00 AM - 04:00 PM',
      location: 'Zion Tech Group HQ, New York',
      virtual: true,
      capacity: 100,
      registered: 75,
      price: '$149',
      featured: false,
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      speakers: [
        { name: 'Alex Thompson', role: 'VP of Cybersecurity, Zion Tech Group' },
        { name: 'Dr. Robert Kim', role: 'Security Research Lead' }
      ],
      agenda: [
        '10:00 AM - Threat Landscape Overview',
        '11:30 AM - Zero-Trust Architecture',
        '01:30 PM - Hands-on Security Tools',
        '03:00 PM - Incident Response Planning'
      ],
      tags: ['Cybersecurity', 'Workshop', 'Best Practices', 'Security'],
      registrationUrl: 'https://cyber-workshop.ziontechgroup.com',
      recordingUrl: null,
      materialsUrl: null
    },
    {
      id: 3,
      title: 'Quantum Computing Webinar Series',
      description: 'Explore the revolutionary potential of quantum computing and its applications in solving complex computational problems.',
      category: 'webinars',
      date: '2024-03-25',
      time: '02:00 PM - 03:30 PM',
      location: 'Virtual Event',
      virtual: true,
      capacity: 200,
      registered: 180,
      price: 'Free',
      featured: false,
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      speakers: [
        { name: 'Dr. Sarah Chen', role: 'Chief Research Officer, Zion Tech Group' },
        { name: 'Dr. Emily Watson', role: 'VP of Research, Zion Tech Group' }
      ],
      agenda: [
        '02:00 PM - Introduction to Quantum Computing',
        '02:30 PM - Quantum Algorithms and Applications',
        '03:00 PM - Q&A and Discussion'
      ],
      tags: ['Quantum Computing', 'Webinar', 'Research', 'Technology'],
      registrationUrl: 'https://quantum-webinar.ziontechgroup.com',
      recordingUrl: null,
      materialsUrl: null
    },
    {
      id: 4,
      title: 'Digital Transformation Conference',
      description: 'Discover how organizations are leveraging technology to transform their operations and achieve competitive advantage.',
      category: 'conferences',
      date: '2024-04-10',
      time: '08:00 AM - 05:00 PM',
      location: 'Chicago Marriott Downtown',
      virtual: false,
      capacity: 300,
      registered: 220,
      price: '$199',
      featured: false,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      speakers: [
        { name: 'Jennifer Lee', role: 'VP of International Operations, Zion Tech Group' },
        { name: 'David Chen', role: 'Technology Analyst, Zion Tech Group' }
      ],
      agenda: [
        '08:00 AM - Registration and Networking',
        '09:00 AM - Keynote: Digital Transformation Trends',
        '10:30 AM - Case Studies and Success Stories',
        '02:00 PM - Technology Showcase',
        '04:00 PM - Networking Reception'
      ],
      tags: ['Digital Transformation', 'Conference', 'Technology', 'Business'],
      registrationUrl: 'https://digital-transformation.ziontechgroup.com',
      recordingUrl: null,
      materialsUrl: null
    },
    {
      id: 5,
      title: 'Machine Learning Fundamentals Workshop',
      description: 'Master the basics of machine learning with hands-on exercises and real-world examples in this comprehensive workshop.',
      category: 'workshops',
      date: '2024-04-15',
      time: '09:00 AM - 05:00 PM',
      location: 'Zion Tech Group HQ, Boston',
      virtual: true,
      capacity: 80,
      registered: 65,
      price: '$199',
      featured: false,
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      speakers: [
        { name: 'Dr. Emily Watson', role: 'VP of Research, Zion Tech Group' },
        { name: 'Dr. Robert Kim', role: 'Industry Analyst, Zion Tech Group' }
      ],
      agenda: [
        '09:00 AM - ML Fundamentals and Concepts',
        '10:30 AM - Data Preprocessing and Feature Engineering',
        '01:30 PM - Model Training and Evaluation',
        '03:30 PM - Practical Applications and Projects'
      ],
      tags: ['Machine Learning', 'Workshop', 'Fundamentals', 'AI'],
      registrationUrl: 'https://ml-workshop.ziontechgroup.com',
      recordingUrl: null,
      materialsUrl: null
    },
    {
      id: 6,
      title: 'Cloud Architecture Best Practices',
      description: 'Learn how to design and implement scalable, secure, and cost-effective cloud solutions for your organization.',
      category: 'webinars',
      date: '2024-04-20',
      time: '01:00 PM - 02:30 PM',
      location: 'Virtual Event',
      virtual: true,
      capacity: 150,
      registered: 120,
      price: 'Free',
      featured: false,
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      speakers: [
        { name: 'Alex Thompson', role: 'VP of Cybersecurity, Zion Tech Group' },
        { name: 'David Chen', role: 'Technology Analyst, Zion Tech Group' }
      ],
      agenda: [
        '01:00 PM - Cloud Architecture Principles',
        '01:30 PM - Security and Compliance',
        '02:00 PM - Cost Optimization Strategies',
        '02:30 PM - Q&A and Discussion'
      ],
      tags: ['Cloud Computing', 'Architecture', 'Best Practices', 'Webinar'],
      registrationUrl: 'https://cloud-architecture.ziontechgroup.com',
      recordingUrl: null,
      materialsUrl: null
    },
    {
      id: 7,
      title: 'AI Ethics and Responsible Development',
      description: 'Explore the critical importance of ethical AI development and learn frameworks for responsible technology deployment.',
      category: 'workshops',
      date: '2024-05-05',
      time: '10:00 AM - 04:00 PM',
      location: 'Zion Tech Group HQ, Seattle',
      virtual: true,
      capacity: 60,
      registered: 45,
      price: '$179',
      featured: false,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      speakers: [
        { name: 'Dr. Sarah Chen', role: 'Chief Research Officer, Zion Tech Group' },
        { name: 'Maria Garcia', role: 'HR Director, Zion Tech Group' }
      ],
      agenda: [
        '10:00 AM - AI Ethics Fundamentals',
        '11:30 AM - Bias Detection and Mitigation',
        '01:30 PM - Responsible AI Frameworks',
        '03:00 PM - Implementation Strategies'
      ],
      tags: ['AI Ethics', 'Responsible AI', 'Workshop', 'Ethics'],
      registrationUrl: 'https://ai-ethics.ziontechgroup.com',
      recordingUrl: null,
      materialsUrl: null
    },
    {
      id: 8,
      title: 'Future of Technology Symposium',
      description: 'Join thought leaders and innovators for a forward-looking discussion on emerging technologies and their societal impact.',
      category: 'conferences',
      date: '2024-05-15',
      time: '09:00 AM - 06:00 PM',
      location: 'Austin Convention Center',
      virtual: false,
      capacity: 400,
      registered: 280,
      price: '$399',
      featured: true,
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      speakers: [
        { name: 'Michael Rodriguez', role: 'CEO, Zion Tech Group' },
        { name: 'Dr. Sarah Chen', role: 'Chief Research Officer, Zion Tech Group' },
        { name: 'Dr. Emily Watson', role: 'VP of Research, Zion Tech Group' }
      ],
      agenda: [
        '09:00 AM - Opening Keynote: Technology Trends',
        '10:30 AM - AI and Society Panel',
        '02:00 PM - Emerging Technologies Showcase',
        '04:00 PM - Future Workforce Discussion',
        '05:30 PM - Networking Reception'
      ],
      tags: ['Future Technology', 'Symposium', 'Innovation', 'Society'],
      registrationUrl: 'https://future-tech.ziontechgroup.com',
      recordingUrl: null,
      materialsUrl: null
    }
  ];

  const pastEvents = [
    {
      id: 9,
      title: 'AI in Healthcare Conference 2023',
      description: 'Exploring the transformative impact of artificial intelligence on healthcare delivery and patient outcomes.',
      category: 'conferences',
      date: '2023-12-15',
      time: '09:00 AM - 05:00 PM',
      location: 'Virtual Event',
      virtual: true,
      capacity: 300,
      registered: 250,
      price: '$199',
      featured: false,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      speakers: [
        { name: 'Dr. Sarah Chen', role: 'Chief Research Officer, Zion Tech Group' },
        { name: 'Dr. Robert Kim', role: 'Industry Analyst, Zion Tech Group' }
      ],
      agenda: [
        '09:00 AM - AI in Medical Imaging',
        '10:30 AM - Predictive Analytics in Healthcare',
        '02:00 PM - Ethical Considerations',
        '04:00 PM - Future Outlook'
      ],
      tags: ['AI', 'Healthcare', 'Conference', 'Medical'],
      registrationUrl: null,
      recordingUrl: 'https://healthcare-ai-2023.ziontechgroup.com/recording',
      materialsUrl: 'https://healthcare-ai-2023.ziontechgroup.com/materials'
    },
    {
      id: 10,
      title: 'Cybersecurity Threat Intelligence Workshop',
      description: 'Advanced workshop on threat intelligence and proactive cybersecurity strategies.',
      category: 'workshops',
      date: '2023-11-20',
      time: '10:00 AM - 04:00 PM',
      location: 'Zion Tech Group HQ, New York',
      virtual: true,
      capacity: 80,
      registered: 70,
      price: '$149',
      featured: false,
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      speakers: [
        { name: 'Alex Thompson', role: 'VP of Cybersecurity, Zion Tech Group' }
      ],
      agenda: [
        '10:00 AM - Threat Intelligence Fundamentals',
        '11:30 AM - Advanced Threat Detection',
        '01:30 PM - Incident Response Planning',
        '03:00 PM - Future Threat Landscape'
      ],
      tags: ['Cybersecurity', 'Threat Intelligence', 'Workshop', 'Security'],
      registrationUrl: null,
      recordingUrl: 'https://threat-intel-2023.ziontechgroup.com/recording',
      materialsUrl: 'https://threat-intel-2023.ziontechgroup.com/materials'
    }
  ];

  const allEvents = [...events, ...pastEvents];
  
  const filteredEvents = allEvents.filter(event => {
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const matchesTimeframe = selectedTimeframe === 'upcoming' 
      ? new Date(event.date) >= new Date()
      : new Date(event.date) < new Date();
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesTimeframe && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const isEventFull = (event: any) => event.registered >= event.capacity;
  const isEventPast = (event: any) => new Date(event.date) < new Date();

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="px-4 mb-20">
        <div className="container mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent"
          >
            Events & Workshops
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed"
          >
            Join us for cutting-edge conferences, hands-on workshops, and insightful webinars. 
            Connect with industry experts and discover the latest innovations in technology.
          </motion.p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
                <input
                  type="text"
                  placeholder="Search events and workshops..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-zion-slate-darker border border-zion-slate-light/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan/50 transition-colors duration-300"
                />
              </div>
            </div>

            {/* Timeframe Filter */}
            <div className="flex gap-3">
              {timeframes.map((timeframe) => (
                <button
                  key={timeframe.id}
                  onClick={() => setSelectedTimeframe(timeframe.id)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedTimeframe === timeframe.id
                      ? 'bg-zion-cyan text-white shadow-lg shadow-zion-cyan/30'
                      : 'bg-zion-slate-darker text-zion-slate-light hover:bg-zion-slate-light hover:text-white border border-zion-slate-light/20'
                  }`}
                >
                  <Clock3 className="w-4 h-4" />
                  <span>{timeframe.name}</span>
                  <span className="text-sm opacity-75">({timeframe.count})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-zion-cyan text-white shadow-lg shadow-zion-cyan/30'
                    : 'bg-zion-slate-darker text-zion-slate-light hover:bg-zion-slate-light hover:text-white border border-zion-slate-light/20'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
                <span className="text-sm opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events */}
      {filteredEvents.filter(event => event.featured && selectedTimeframe === 'upcoming').length > 0 && (
        <section className="px-4 mb-20">
          <div className="container mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-bold text-white mb-8 text-center"
            >
              Featured Events
            </motion.h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredEvents.filter(event => event.featured && selectedTimeframe === 'upcoming').map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-r from-zion-cyan-dark to-zion-blue-dark rounded-2xl overflow-hidden"
                >
                  {/* Event Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zion-cyan-dark/80 to-zion-blue-dark/80" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full border border-white/30">
                        Featured
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm font-medium rounded-full border border-zion-cyan/30">
                        {categories.find(cat => cat.id === event.category)?.name}
                      </span>
                    </div>
                  </div>
                  
                  {/* Event Content */}
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-sm text-zion-slate-light mb-4">
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {formatDate(event.date)}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {event.time}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                      {event.title}
                    </h3>
                    
                    <p className="text-zion-slate-light mb-6 leading-relaxed">
                      {event.description}
                    </p>
                    
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-zion-cyan" />
                        <span className="text-white text-sm">
                          {event.virtual ? 'Virtual Event' : event.location}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-zion-cyan" />
                        <span className="text-white text-sm">
                          {event.registered}/{event.capacity} registered
                        </span>
                      </div>
                    </div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {event.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-white/20 text-white text-sm rounded-full border border-white/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* CTA */}
                    {isEventFull(event) ? (
                      <div className="text-center py-3 bg-red-500/20 text-red-400 rounded-xl border border-red-500/30">
                        Event Full
                      </div>
                    ) : (
                      <a
                        href={event.registrationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white text-zion-blue-dark hover:bg-zion-slate-light font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        Register Now
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Events Grid */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-white mb-8 text-center"
          >
            {selectedTimeframe === 'upcoming' ? 'Upcoming Events' : 'Past Events'}
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.filter(event => !event.featured).map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-darker rounded-2xl border border-zion-slate-light/20 hover:border-zion-cyan/50 transition-all duration-300 overflow-hidden group"
              >
                {/* Event Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm font-medium rounded-full border border-zion-cyan/30">
                      {categories.find(cat => cat.id === event.category)?.name}
                    </span>
                  </div>
                  {event.virtual && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm font-medium rounded-full border border-purple-500/30">
                        Virtual
                      </span>
                    </div>
                  )}
                </div>
                
                {/* Event Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-zion-slate-light mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(event.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {event.time}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-zion-cyan transition-colors duration-300 line-clamp-2">
                    {event.title}
                  </h3>
                  
                  <p className="text-zion-slate-light mb-4 line-clamp-3">
                    {event.description}
                  </p>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-zion-cyan" />
                      <span className="text-white text-sm">
                        {event.virtual ? 'Virtual' : event.location}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-zion-cyan" />
                      <span className="text-white text-sm">
                        {event.registered}/{event.capacity}
                      </span>
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {event.tags.slice(0, 2).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-zion-slate-light/10 text-zion-slate-light text-xs rounded-full border border-zion-slate-light/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-zion-cyan font-bold">{event.price}</span>
                    {isEventPast(event) && (
                      <span className="text-zion-slate-light text-sm">Past Event</span>
                    )}
                  </div>
                  
                  {/* CTA */}
                  {isEventPast(event) ? (
                    <div className="flex gap-2">
                      {event.recordingUrl && (
                        <a
                          href={event.recordingUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 bg-zion-cyan text-white hover:bg-zion-cyan-dark font-medium py-2 px-4 rounded-xl transition-colors duration-300"
                        >
                          <Play className="w-4 h-4" />
                          Watch Recording
                        </a>
                      )}
                      {event.materialsUrl && (
                        <a
                          href={event.materialsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white font-medium py-2 px-4 rounded-xl transition-colors duration-300"
                        >
                          <Download className="w-4 h-4" />
                          Materials
                        </a>
                      )}
                    </div>
                  ) : isEventFull(event) ? (
                    <div className="text-center py-2 bg-red-500/20 text-red-400 rounded-xl border border-red-500/30">
                      Event Full
                    </div>
                  ) : (
                    <a
                      href={event.registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-zion-cyan text-white hover:bg-zion-cyan-dark font-medium py-3 px-4 rounded-xl transition-colors duration-300 transform hover:scale-105"
                    >
                      Register Now
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredEvents.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">📅</div>
              <h3 className="text-2xl font-bold text-white mb-2">No events found</h3>
              <p className="text-zion-slate-light mb-6">
                No events match your selected criteria
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedTimeframe('upcoming');
                  setSearchQuery('');
                }}
                className="px-6 py-3 bg-zion-cyan text-white font-bold rounded-xl hover:bg-zion-cyan-dark transition-colors duration-300"
              >
                View All Events
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4">
        <div className="container mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-zion-cyan-dark to-zion-blue-dark p-12 rounded-2xl"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Host Your Event With Us
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Interested in hosting a technology event, workshop, or conference? 
              Let's collaborate to create impactful learning experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-white text-zion-blue-dark hover:bg-zion-slate-light font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get in Touch
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white hover:bg-white hover:text-zion-blue-dark font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Events;