import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  ExternalLink, 
  Filter,
  Search,
  Tag,
  Video,
  Globe,
  Building,
  TrendingUp,
  Award,
  Shield
} from 'lucide-react';

const Events: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Categories', icon: Globe, color: 'from-zion-purple to-zion-cyan' },
    { id: 'ai', name: 'AI & Machine Learning', icon: TrendingUp, color: 'from-blue-500 to-cyan-500' },
    { id: 'quantum', name: 'Quantum Computing', icon: Globe, color: 'from-purple-500 to-pink-500' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-500' },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Building, color: 'from-green-500 to-blue-500' },
    { id: 'enterprise', name: 'Enterprise Solutions', icon: Building, color: 'from-gray-500 to-gray-700' }
  ];

  const eventTypes = [
    { id: 'all', name: 'All Types', icon: Calendar },
    { id: 'conference', name: 'Conference', icon: Users },
    { id: 'workshop', name: 'Workshop', icon: TrendingUp },
    { id: 'webinar', name: 'Webinar', icon: Video },
    { id: 'meetup', name: 'Meetup', icon: Users },
    { id: 'hackathon', name: 'Hackathon', icon: Award }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'AI Innovation Summit 2024',
      description: 'Join industry leaders and AI experts for a comprehensive exploration of cutting-edge AI technologies and their business applications.',
      date: 'December 15, 2024',
      time: '9:00 AM - 5:00 PM',
      location: 'San Francisco, CA',
      type: 'conference',
      category: 'ai',
      attendees: 250,
      maxAttendees: 300,
      price: '$299',
      isFree: false,
      isVirtual: false,
      speakers: ['Dr. Sarah Chen', 'Prof. Michael Rodriguez', 'Alex Thompson'],
      tags: ['AI', 'Machine Learning', 'Enterprise', 'Innovation'],
      registrationUrl: 'https://ai-summit-2024.eventbrite.com',
      image: '/events/ai-summit-2024.jpg'
    },
    {
      id: 2,
      title: 'Quantum Computing Workshop',
      description: 'Hands-on workshop exploring quantum algorithms, quantum machine learning, and practical applications in finance and cryptography.',
      date: 'December 20, 2024',
      time: '2:00 PM - 6:00 PM',
      location: 'Virtual Event',
      type: 'workshop',
      category: 'quantum',
      attendees: 75,
      maxAttendees: 100,
      price: 'Free',
      isFree: true,
      isVirtual: true,
      speakers: ['Dr. Elena Petrova', 'Dr. James Wilson'],
      tags: ['Quantum Computing', 'Algorithms', 'Finance', 'Cryptography'],
      registrationUrl: 'https://quantum-workshop-2024.zoom.us',
      image: '/events/quantum-workshop-2024.jpg'
    },
    {
      id: 3,
      title: 'Cybersecurity Best Practices Meetup',
      description: 'Network with security professionals and learn about the latest threats, defense strategies, and compliance requirements.',
      date: 'January 10, 2025',
      time: '6:00 PM - 8:00 PM',
      location: 'New York, NY',
      type: 'meetup',
      category: 'cybersecurity',
      attendees: 45,
      maxAttendees: 60,
      price: 'Free',
      isFree: true,
      isVirtual: false,
      speakers: ['Maria Garcia', 'David Kim'],
      tags: ['Cybersecurity', 'Threat Detection', 'Compliance', 'Networking'],
      registrationUrl: 'https://cyber-meetup-nyc.eventbrite.com',
      image: '/events/cyber-meetup-2025.jpg'
    },
    {
      id: 4,
      title: 'Cloud-Native Development Conference',
      description: 'Explore modern cloud architectures, microservices, Kubernetes, and DevOps best practices for scalable applications.',
      date: 'January 25, 2025',
      time: '9:00 AM - 6:00 PM',
      location: 'Austin, TX',
      type: 'conference',
      category: 'cloud',
      attendees: 180,
      maxAttendees: 250,
      price: '$199',
      isFree: false,
      isVirtual: false,
      speakers: ['Dr. Lisa Chang', 'Robert Martinez', 'Jennifer Lee'],
      tags: ['Cloud Computing', 'Microservices', 'Kubernetes', 'DevOps'],
      registrationUrl: 'https://cloud-conf-austin.eventbrite.com',
      image: '/events/cloud-conf-2025.jpg'
    },
    {
      id: 5,
      title: 'Enterprise AI Implementation Webinar',
      description: 'Learn practical strategies for implementing AI solutions in enterprise environments, including change management and ROI measurement.',
      date: 'February 5, 2025',
      time: '1:00 PM - 3:00 PM',
      location: 'Virtual Event',
      type: 'webinar',
      category: 'ai',
      attendees: 120,
      maxAttendees: 200,
      price: 'Free',
      isFree: true,
      isVirtual: true,
      speakers: ['Dr. Sarah Chen', 'Tom Anderson'],
      tags: ['AI Implementation', 'Enterprise', 'Change Management', 'ROI'],
      registrationUrl: 'https://enterprise-ai-webinar.zoom.us',
      image: '/events/enterprise-ai-webinar-2025.jpg'
    },
    {
      id: 6,
      title: 'AI Hackathon: Autonomous Systems',
      description: '24-hour hackathon focused on building autonomous systems using AI, IoT, and edge computing technologies.',
      date: 'February 15-16, 2025',
      time: '9:00 AM - 9:00 AM (24 hours)',
      location: 'Boston, MA',
      type: 'hackathon',
      category: 'ai',
      attendees: 80,
      maxAttendees: 120,
      price: '$49',
      isFree: false,
      isVirtual: false,
      speakers: ['Hackathon Mentors', 'Industry Judges'],
      tags: ['Hackathon', 'Autonomous Systems', 'AI', 'IoT', 'Edge Computing'],
      registrationUrl: 'https://ai-hackathon-boston.eventbrite.com',
      image: '/events/ai-hackathon-2025.jpg'
    }
  ];

  const pastEvents = [
    {
      id: 7,
      title: 'Digital Transformation Summit 2024',
      date: 'November 10, 2024',
      location: 'Chicago, IL',
      attendees: 200,
      type: 'conference',
      category: 'enterprise',
      recordingUrl: 'https://youtube.com/watch?v=digital-transformation-2024'
    },
    {
      id: 8,
      title: 'Blockchain in Enterprise Workshop',
      date: 'October 25, 2024',
      location: 'Virtual Event',
      attendees: 150,
      type: 'workshop',
      category: 'enterprise',
      recordingUrl: 'https://youtube.com/watch?v=blockchain-enterprise-2024'
    }
  ];

  const filteredEvents = upcomingEvents.filter(event => {
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const matchesType = selectedType === 'all' || event.type === selectedType;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesType && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Events & <span className="text-gradient">Conferences</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">
              Join us for cutting-edge technology events, workshops, and conferences. 
              Network with industry experts and stay ahead of the innovation curve.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => document.getElementById('upcoming-events')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/30 transform hover:scale-105"
              >
                View Upcoming Events
              </button>
              <Link
                to="/contact"
                className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Host an Event
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-zion-slate/20 rounded-2xl p-6 backdrop-blur-sm">
            <div className="grid md:grid-cols-4 gap-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-zion-slate/30 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-zion-slate/30 border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 appearance-none"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id} className="bg-zion-slate text-white">
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Type Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-zion-slate/30 border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 appearance-none"
                >
                  {eventTypes.map(type => (
                    <option key={type.id} value={type.id} className="bg-zion-slate text-white">
                      {type.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Results Count */}
              <div className="flex items-center justify-center">
                <span className="text-zion-slate-light">
                  {filteredEvents.length} events found
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="upcoming-events" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Upcoming Events</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Don't miss out on these exciting opportunities to learn, network, and discover 
              the latest in AI, quantum computing, and emerging technologies.
            </p>
          </motion.div>

          {filteredEvents.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate/20 rounded-2xl p-6 backdrop-blur-sm border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:transform hover:scale-105 group"
                >
                  {/* Event Header */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 bg-gradient-to-r ${categories.find(c => c.id === event.category)?.color} text-white text-xs rounded-full font-medium`}>
                        {categories.find(c => c.id === event.category)?.name}
                      </span>
                      <span className={`px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full font-medium border border-zion-cyan/30`}>
                        {eventTypes.find(t => t.id === event.type)?.name}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-zion-slate-light text-sm leading-relaxed mb-4">
                      {event.description}
                    </p>
                  </div>

                  {/* Event Details */}
                  <div className="space-y-3 text-sm text-zion-slate-light mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-zion-cyan" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-zion-cyan" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-zion-cyan" />
                      <span className={event.isVirtual ? 'text-zion-cyan' : ''}>
                        {event.isVirtual ? '🌐 ' : ''}{event.location}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-zion-cyan" />
                      <span>{event.attendees}/{event.maxAttendees} registered</span>
                    </div>
                  </div>

                  {/* Speakers */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-zion-cyan mb-2">Featured Speakers</h4>
                    <div className="flex flex-wrap gap-2">
                      {event.speakers.map((speaker, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded border border-zion-cyan/20"
                        >
                          {speaker}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {event.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-zion-slate/30 text-zion-slate-light text-xs rounded border border-zion-slate/40"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price and Registration */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-lg font-semibold ${event.isFree ? 'text-green-400' : 'text-white'}`}>
                      {event.price}
                    </span>
                    <span className="text-sm text-zion-slate-light">
                      {Math.round((event.attendees / event.maxAttendees) * 100)}% full
                    </span>
                  </div>

                  <a
                    href={event.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <span>Register Now</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 bg-zion-slate/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-12 h-12 text-zion-slate-light" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">No Events Found</h3>
              <p className="text-zion-slate-light mb-8">
                Try adjusting your filters or search terms to find relevant events.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedType('all');
                  setSearchTerm('');
                }}
                className="bg-gradient-to-r from-zion-purple to-zion-cyan text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-zion-slate/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Past Events</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Missed an event? Catch up with recordings and presentations from our previous events.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate/20 rounded-xl p-6 backdrop-blur-sm border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="mb-4">
                  <span className={`px-3 py-1 bg-gradient-to-r ${categories.find(c => c.id === event.category)?.color} text-white text-xs rounded-full font-medium`}>
                    {categories.find(c => c.id === event.category)?.name}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{event.title}</h3>
                <div className="space-y-2 text-sm text-zion-slate-light mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-zion-cyan" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-zion-cyan" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-zion-cyan" />
                    <span>{event.attendees} attendees</span>
                  </div>
                </div>
                <a
                  href={event.recordingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-zion-cyan/20 text-zion-cyan hover:bg-zion-cyan hover:text-white py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Video className="w-4 h-4" />
                  Watch Recording
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Want to Host an Event?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Partner with us to host workshops, meetups, or conferences. 
              Let's create amazing learning experiences together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/30 transform hover:scale-105"
              >
                Partner With Us
              </Link>
              <Link
                to="/community"
                className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Join Community
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Events;