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
  Mic,
  Network,
  Lightbulb
} from 'lucide-react';

const Events: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeTab, setActiveTab] = useState('upcoming');

  const filters = [
    { id: 'all', label: 'All Events', icon: Globe, count: 18 },
    { id: 'conference', label: 'Conferences', icon: Mic, count: 6 },
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