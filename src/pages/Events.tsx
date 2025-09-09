import React, { useState } from 'react';
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
  Award,
  Rocket,
  Brain,
  Shield,
  Cloud,
  Zap,
  Video,
  ExternalLink,
  BookOpen,
  Microphone,
  Network,
  Lightbulb
} from 'lucide-react';

const Events: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeTab, setActiveTab] = useState('upcoming');

  const filters = [
    { id: 'all', label: 'All Events', icon: Globe, count: 18 },
    { id: 'conference', label: 'Conferences', icon: Microphone, count: 6 },
    { id: 'workshop', label: 'Workshops', icon: BookOpen, count: 8 },
    { id: 'webinar', label: 'Webinars', icon: Video, count: 4 }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'AI & Machine Learning Summit 2025',
      description: 'Join industry leaders and experts for a comprehensive exploration of AI and ML technologies, featuring keynote speakers, technical sessions, and networking opportunities.',
      category: 'conference',
      date: '2025-02-15',
      time: '09:00 AM - 06:00 PM',
      location: 'San Francisco Convention Center',
      type: 'In-Person',
      capacity: 500,
      price: '$299',
      featured: true,
      tags: ['AI/ML', 'Summit', 'Networking', 'Keynotes'],
      speakers: ['Dr. Sarah Chen', 'Prof. Michael Rodriguez', 'Lisa Wang'],
      image: '🤖'
    },
    {
      id: 2,
      title: 'Cybersecurity Workshop Series',
      description: 'Hands-on workshop covering advanced cybersecurity techniques, threat detection, and incident response strategies for enterprise environments.',
      category: 'workshop',
      date: '2025-02-20',
      time: '10:00 AM - 04:00 PM',
      location: 'Zion Tech Group HQ',
      type: 'In-Person',
      capacity: 50,
      price: '$199',
      featured: false,
      tags: ['Cybersecurity', 'Hands-on', 'Enterprise', 'Threat Detection'],
      speakers: ['Rachel Green', 'Alex Chen'],
      image: '🔒'
    },
    {
      id: 3,
      title: 'Quantum Computing Webinar',
      description: 'Virtual session exploring the future of quantum computing and its applications in solving complex business problems.',
      category: 'webinar',
      date: '2025-02-25',
      time: '02:00 PM - 04:00 PM',
      location: 'Virtual Event',
      type: 'Online',
      capacity: 200,
      price: 'Free',
      featured: false,
      tags: ['Quantum Computing', 'Virtual', 'Future Tech', 'Business Applications'],
      speakers: ['Dr. James Wilson'],
      image: '⚛️'
    },
    {
      id: 4,
      title: 'Digital Transformation Conference',
      description: 'Learn how organizations are leveraging technology to transform their operations and achieve competitive advantages.',
      category: 'conference',
      date: '2025-03-05',
      time: '08:00 AM - 05:00 PM',
      location: 'New York Marriott Marquis',
      type: 'In-Person',
      capacity: 300,
      price: '$399',
      featured: true,
      tags: ['Digital Transformation', 'Strategy', 'Case Studies', 'Leadership'],
      speakers: ['Jennifer Kim', 'David Thompson', 'Mark Stevens'],
      image: '🚀'
    },
    {
      id: 5,
      title: 'Cloud Infrastructure Workshop',
      description: 'Practical workshop on designing and implementing scalable cloud infrastructure solutions for modern applications.',
      category: 'workshop',
      date: '2025-03-10',
      time: '09:00 AM - 05:00 PM',
      location: 'Zion Tech Group Training Center',
      type: 'In-Person',
      capacity: 40,
      price: '$249',
      featured: false,
      tags: ['Cloud Computing', 'Infrastructure', 'Scalability', 'Hands-on'],
      speakers: ['Alex Chen', 'Sarah Johnson'],
      image: '☁️'
    },
    {
      id: 6,
      title: 'AI Ethics & Responsible Development',
      description: 'Interactive webinar discussing the importance of ethical AI development and best practices for responsible technology deployment.',
      category: 'webinar',
      date: '2025-03-15',
      time: '01:00 PM - 03:00 PM',
      location: 'Virtual Event',
      type: 'Online',
      capacity: 150,
      price: 'Free',
      featured: false,
      tags: ['AI Ethics', 'Responsible AI', 'Best Practices', 'Virtual'],
      speakers: ['Dr. Emily Watson'],
      image: '⚖️'
    }
  ];

  const pastEvents = [
    {
      id: 7,
      title: 'Tech Innovation Summit 2024',
      description: 'Our flagship event showcasing cutting-edge technologies and innovations that are shaping the future of business.',
      category: 'conference',
      date: '2024-12-10',
      time: '09:00 AM - 06:00 PM',
      location: 'Las Vegas Convention Center',
      type: 'In-Person',
      capacity: 800,
      price: '$399',
      featured: true,
      tags: ['Innovation', 'Technology', 'Networking', 'Keynotes'],
      speakers: ['Dr. Sarah Chen', 'Prof. Michael Rodriguez', 'Lisa Wang', 'David Thompson'],
      image: '💡',
      attendees: 750,
      rating: 4.8
    },
    {
      id: 8,
      title: 'Cybersecurity Best Practices Workshop',
      description: 'Comprehensive workshop covering essential cybersecurity practices for small and medium businesses.',
      category: 'workshop',
      date: '2024-11-28',
      time: '10:00 AM - 04:00 PM',
      location: 'Zion Tech Group HQ',
      type: 'In-Person',
      capacity: 60,
      price: '$179',
      featured: false,
      tags: ['Cybersecurity', 'SMB', 'Best Practices', 'Hands-on'],
      speakers: ['Rachel Green', 'Alex Chen'],
      image: '🛡️',
      attendees: 55,
      rating: 4.9
    },
    {
      id: 9,
      title: 'AI in Healthcare Webinar',
      description: 'Exploring the transformative impact of AI technologies in healthcare and medical applications.',
      category: 'webinar',
      date: '2024-11-20',
      time: '02:00 PM - 04:00 PM',
      location: 'Virtual Event',
      type: 'Online',
      capacity: 300,
      price: 'Free',
      featured: false,
      tags: ['AI', 'Healthcare', 'Medical', 'Virtual'],
      speakers: ['Dr. Robert Johnson'],
      image: '🏥',
      attendees: 280,
      rating: 4.7
    }
  ];

  const filteredEvents = (activeTab === 'upcoming' ? upcomingEvents : pastEvents).filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = activeFilter === 'all' || event.category === activeFilter;
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

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'In-Person':
        return 'bg-zion-cyan text-zion-slate-dark';
      case 'Online':
        return 'bg-purple-500 text-white';
      case 'Hybrid':
        return 'bg-orange-500 text-white';
      default:
        return 'bg-zion-slate/50 text-zion-cyan';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Events & Conferences
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-zion-cyan/80 max-w-4xl mx-auto leading-relaxed"
          >
            Join us for cutting-edge conferences, hands-on workshops, and insightful webinars 
            featuring industry experts and the latest technology innovations.
          </motion.p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-cyan/60" />
              <input
                type="text"
                placeholder="Search events, topics, or speakers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-zion-slate/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl text-white placeholder-zion-cyan/60 focus:outline-none focus:border-zion-cyan/40 transition-all duration-300"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-zion-cyan text-zion-slate-dark'
                    : 'bg-zion-slate/30 text-zion-cyan hover:bg-zion-slate/50 border border-zion-cyan/20'
                }`}
              >
                <filter.icon className="w-5 h-5" />
                {filter.label}
                <span className="bg-zion-slate/20 text-zion-slate-dark px-2 py-1 rounded-full text-xs font-bold">
                  {filter.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center">
            <div className="bg-zion-slate/30 backdrop-blur-sm rounded-2xl p-2 border border-zion-cyan/20">
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === 'upcoming'
                    ? 'bg-zion-cyan text-zion-slate-dark'
                    : 'text-zion-cyan hover:text-zion-cyan/80'
                }`}
              >
                Upcoming Events
              </button>
              <button
                onClick={() => setActiveTab('past')}
                className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === 'past'
                    ? 'bg-zion-cyan text-zion-slate-dark'
                    : 'text-zion-cyan hover:text-zion-cyan/80'
                }`}
              >
                Past Events
              </button>
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

      {/* Featured Events */}
      {filteredEvents.filter(event => event.featured).length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Featured Events</h2>
              <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto">
                Don't miss our most anticipated events featuring industry leaders and cutting-edge insights.
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {filteredEvents.filter(event => event.featured).map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate/30 backdrop-blur-sm rounded-2xl p-8 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-zion-cyan/20 text-zion-cyan px-3 py-1 rounded-full text-sm font-medium">
                      {filters.find(f => f.id === event.category)?.label}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getEventTypeColor(event.type)}`}>
                      {event.type}
                    </span>
                  </div>
                  
                  <div className="text-6xl mb-6">{event.image}</div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{event.title}</h3>
                  <p className="text-zion-cyan/80 text-lg leading-relaxed mb-6">{event.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-zion-cyan/80">
                      <Calendar className="w-5 h-5" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center gap-3 text-zion-cyan/80">
                      <Clock className="w-5 h-5" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-zion-cyan/80">
                      <MapPin className="w-5 h-5" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-zion-cyan/80">
                      <Users className="w-5 h-5" />
                      <span>Capacity: {event.capacity} • Price: {event.price}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {event.tags.map((tag, idx) => (
                      <span key={idx} className="bg-zion-slate/50 text-zion-cyan/80 px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-zion-cyan/20">
                    <div className="text-sm text-zion-cyan/60">
                      Speakers: {event.speakers.join(', ')}
                    </div>
                    <button className="bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105">
                      Register Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Events Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              {activeTab === 'upcoming' ? 'All Upcoming Events' : 'Past Events'}
            </h2>
            <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto">
              {activeTab === 'upcoming' 
                ? 'Browse our complete calendar of upcoming events and secure your spot.'
                : 'Explore our previous events and access recorded content where available.'
              }
            </p>
          </motion.div>
          
          {filteredEvents.filter(event => !event.featured).length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.filter(event => !event.featured).map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate/30 backdrop-blur-sm rounded-2xl p-6 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-zion-cyan/20 text-zion-cyan px-3 py-1 rounded-full text-sm font-medium">
                      {filters.find(f => f.id === event.category)?.label}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getEventTypeColor(event.type)}`}>
                      {event.type}
                    </span>
                  </div>
                  
                  <div className="text-4xl mb-4">{event.image}</div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                  <p className="text-zion-cyan/80 text-sm leading-relaxed mb-4">{event.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-xs text-zion-cyan/60">
                      <Calendar className="w-3 h-3" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zion-cyan/60">
                      <MapPin className="w-3 h-3" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zion-cyan/60">
                      <Users className="w-3 h-3" />
                      <span>{event.capacity} • {event.price}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {event.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="bg-zion-slate/50 text-zion-cyan/80 px-2 py-1 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {activeTab === 'past' && 'attendees' in event && (
                    <div className="flex items-center justify-between text-xs text-zion-cyan/60 mb-4">
                      <span>{event.attendees} attendees</span>
                      <span className="flex items-center gap-1">
                        <span>★</span>
                        {event.rating}
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between pt-4 border-t border-zion-cyan/20">
                    <div className="text-xs text-zion-cyan/60">
                      {event.speakers.slice(0, 2).join(', ')}
                      {event.speakers.length > 2 && ' + more'}
                    </div>
                    {activeTab === 'upcoming' ? (
                      <button className="text-zion-cyan hover:text-zion-cyan/80 font-medium flex items-center gap-1 transition-colors duration-300 text-sm">
                        Register
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    ) : (
                      <button className="text-zion-cyan hover:text-zion-cyan/80 font-medium flex items-center gap-1 transition-colors duration-300 text-sm">
                        View Recording
                        <Video className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-zion-cyan/80 mb-2">No Events Found</h3>
              <p className="text-zion-cyan/60">Try adjusting your search or filters to see more results.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-zion-slate/30 backdrop-blur-sm rounded-2xl p-12 border border-zion-cyan/20 text-center"
          >
            <div className="text-6xl mb-6">🎯</div>
            <h2 className="text-4xl font-bold text-white mb-6">Host Your Event With Us</h2>
            <p className="text-xl text-zion-cyan/80 mb-8 max-w-2xl mx-auto">
              Looking to host a technology conference, workshop, or networking event? 
              Partner with Zion Tech Group to create impactful experiences for your audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark px-8 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105">
                Partner With Us
              </button>
              <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-slate-dark px-8 py-4 rounded-2xl font-bold transition-all duration-300">
                Contact Events Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Events;