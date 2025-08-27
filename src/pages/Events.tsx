import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Video, 
  Globe, 
  Search,
  Filter,
  ArrowRight,
  Star,
  TrendingUp,
  Award,
  Rocket,
  Brain,
  Shield,
  Code,
  Zap,
  Lightbulb,
  Target,
  Building,
  Clock3,
  ExternalLink,
  Play,
  Pause,
  Stop,
  FileText
} from 'lucide-react';

const Events: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Events', count: 15, icon: Calendar },
    { id: 'webinars', name: 'Webinars', count: 8, icon: Video },
    { id: 'conferences', name: 'Conferences', count: 4, icon: Users },
    { id: 'workshops', name: 'Workshops', count: 3, icon: Code },
    { id: 'meetups', name: 'Meetups', count: 2, icon: Building }
  ];

  const events = [
    {
      id: 1,
      title: 'AI Consciousness Simulation: Breakthroughs & Applications',
      description: 'Join us for an exclusive webinar exploring our revolutionary AI consciousness simulator technology and its real-world applications.',
      category: 'webinars',
      date: '2025-02-15',
      time: '14:00',
      timezone: 'EST',
      duration: '90 minutes',
      type: 'Virtual',
      location: 'Online',
      speaker: 'Dr. Sarah Chen',
      speakerTitle: 'Chief Executive Officer',
      image: '/events/ai-consciousness-webinar.jpg',
      tags: ['AI', 'Consciousness', 'Webinar', 'Breakthrough'],
      featured: true,
      attendees: 1250,
      maxAttendees: 2000,
      registrationRequired: true,
      registrationUrl: 'https://ziontechgroup.com/events/ai-consciousness-webinar',
      recording: false
    },
    {
      id: 2,
      title: 'Zion Tech Summit 2025: Future of Technology',
      description: 'Our flagship annual conference bringing together industry leaders, innovators, and technology enthusiasts for three days of insights and networking.',
      category: 'conferences',
      date: '2025-03-20',
      time: '09:00',
      timezone: 'EST',
      duration: '3 days',
      type: 'Hybrid',
      location: 'New York City + Virtual',
      speaker: 'Multiple Speakers',
      speakerTitle: 'Industry Experts',
      image: '/events/zion-summit-2025.jpg',
      tags: ['Conference', 'Technology', 'Networking', 'Innovation'],
      featured: true,
      attendees: 850,
      maxAttendees: 1200,
      registrationRequired: true,
      registrationUrl: 'https://ziontechgroup.com/events/summit-2025',
      recording: false
    },
    {
      id: 3,
      title: 'Quantum Computing Workshop: Hands-on Experience',
      description: 'Interactive workshop where participants will learn about quantum computing fundamentals and work with our quantum algorithms.',
      category: 'workshops',
      date: '2025-02-28',
      time: '10:00',
      timezone: 'EST',
      duration: '4 hours',
      type: 'In-Person',
      location: 'San Francisco, CA',
      speaker: 'Dr. James Kim',
      speakerTitle: 'Head of AI Research',
      image: '/events/quantum-workshop.jpg',
      tags: ['Quantum Computing', 'Workshop', 'Hands-on', 'Education'],
      featured: false,
      attendees: 45,
      maxAttendees: 50,
      registrationRequired: true,
      registrationUrl: 'https://ziontechgroup.com/events/quantum-workshop',
      recording: false
    },
    {
      id: 4,
      title: 'Cybersecurity in the AI Era: Threats & Solutions',
      description: 'Expert panel discussion on emerging cybersecurity challenges and AI-powered security solutions.',
      category: 'webinars',
      date: '2025-02-22',
      time: '15:00',
      timezone: 'EST',
      duration: '60 minutes',
      type: 'Virtual',
      location: 'Online',
      speaker: 'Marcus Rodriguez',
      speakerTitle: 'Chief Technology Officer',
      image: '/events/cybersecurity-webinar.jpg',
      tags: ['Cybersecurity', 'AI', 'Panel Discussion', 'Security'],
      featured: false,
      attendees: 890,
      maxAttendees: 1000,
      registrationRequired: true,
      registrationUrl: 'https://ziontechgroup.com/events/cybersecurity-webinar',
      recording: false
    },
    {
      id: 5,
      title: 'Tech Leaders Meetup: Amsterdam Chapter',
      description: 'Monthly meetup for technology leaders in Amsterdam to discuss industry trends and share insights.',
      category: 'meetups',
      date: '2025-02-25',
      time: '18:00',
      timezone: 'CET',
      duration: '3 hours',
      type: 'In-Person',
      location: 'Amsterdam, Netherlands',
      speaker: 'Emily Watson',
      speakerTitle: 'VP of Business Development',
      image: '/events/amsterdam-meetup.jpg',
      tags: ['Meetup', 'Networking', 'Amsterdam', 'Tech Leaders'],
      featured: false,
      attendees: 35,
      maxAttendees: 60,
      registrationRequired: false,
      registrationUrl: null,
      recording: false
    },
    {
      id: 6,
      title: 'Blockchain & DeFi: Enterprise Applications',
      description: 'Deep dive into enterprise blockchain solutions and decentralized finance applications for businesses.',
      category: 'webinars',
      date: '2025-03-05',
      time: '13:00',
      timezone: 'EST',
      duration: '75 minutes',
      type: 'Virtual',
      location: 'Online',
      speaker: 'Alex Thompson',
      speakerTitle: 'VP of Engineering',
      image: '/events/blockchain-webinar.jpg',
      tags: ['Blockchain', 'DeFi', 'Enterprise', 'Finance'],
      featured: false,
      attendees: 650,
      maxAttendees: 1000,
      registrationRequired: true,
      registrationUrl: 'https://ziontechgroup.com/events/blockchain-webinar',
      recording: false
    },
    {
      id: 7,
      title: 'AI for Healthcare: Diagnosis & Treatment',
      description: 'Exploring how AI is revolutionizing healthcare diagnosis and treatment planning.',
      category: 'webinars',
      date: '2025-03-12',
      time: '16:00',
      timezone: 'EST',
      duration: '60 minutes',
      type: 'Virtual',
      location: 'Online',
      speaker: 'Dr. Emily Johnson',
      speakerTitle: 'VP of Healthcare Solutions',
      image: '/events/ai-healthcare-webinar.jpg',
      tags: ['AI', 'Healthcare', 'Diagnosis', 'Treatment'],
      featured: false,
      attendees: 720,
      maxAttendees: 1000,
      registrationRequired: true,
      registrationUrl: 'https://ziontechgroup.com/events/ai-healthcare-webinar',
      recording: false
    },
    {
      id: 8,
      title: 'Startup Innovation Lab: AI Edition',
      description: 'Intensive 2-day workshop for startups looking to integrate AI into their products and services.',
      category: 'workshops',
      date: '2025-03-15',
      time: '09:00',
      timezone: 'EST',
      duration: '2 days',
      type: 'In-Person',
      location: 'Austin, TX',
      speaker: 'Lisa Park',
      speakerTitle: 'VP of Business Development',
      image: '/events/startup-innovation-lab.jpg',
      tags: ['Startup', 'AI', 'Workshop', 'Innovation'],
      featured: false,
      attendees: 28,
      maxAttendees: 40,
      registrationRequired: true,
      registrationUrl: 'https://ziontechgroup.com/events/startup-innovation-lab',
      recording: false
    }
  ];

  const filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredEvents = events.filter(event => event.featured);
  const regularEvents = filteredEvents.filter(event => !event.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getEventStatus = (event: any) => {
    const eventDate = new Date(event.date);
    const now = new Date();
    
    if (eventDate < now) {
      return { status: 'Past', color: 'text-zion-slate-light' };
    } else if (event.attendees >= event.maxAttendees) {
      return { status: 'Full', color: 'text-red-400' };
    } else {
      return { status: 'Open', color: 'text-zion-green' };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-6">
              Upcoming
              <span className="block text-zion-cyan">Events</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">
              Join us for exclusive webinars, workshops, conferences, and meetups. 
              Connect with industry experts and discover the future of technology.
            </p>
            <div className="flex items-center justify-center space-x-8 text-zion-slate-light">
              <div className="flex items-center">
                <Calendar className="w-6 h-6 mr-2 text-zion-cyan" />
                <span>15+ Events</span>
              </div>
              <div className="flex items-center">
                <Users className="w-6 h-6 mr-2 text-zion-cyan" />
                <span>5K+ Attendees</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-6 h-6 mr-2 text-zion-cyan" />
                <span>Global Reach</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan/40 focus:ring-2 focus:ring-zion-cyan/20"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                    selectedCategory === category.id
                      ? 'bg-zion-cyan text-white shadow-lg shadow-zion-cyan/20'
                      : 'bg-zion-slate-dark/50 text-zion-slate-light hover:bg-zion-cyan/10 hover:text-zion-cyan border border-zion-cyan/20'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                  <span className="text-xs opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      {featuredEvents.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Featured Events</h2>
              <p className="text-zion-slate-light">Don't miss our most important and exciting events</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredEvents.map((event, index) => {
                const eventStatus = getEventStatus(event);
                return (
                  <motion.article
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl overflow-hidden hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20">
                      {/* Event Image Placeholder */}
                      <div className="h-48 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 flex items-center justify-center relative">
                        <Calendar className="w-16 h-16 text-zion-cyan" />
                        <div className="absolute top-4 right-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${eventStatus.color} bg-zion-slate-dark/80`}>
                            {eventStatus.status}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center space-x-4 text-sm text-zion-slate-light mb-4">
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            {formatDate(event.date)}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            {event.time} {event.timezone}
                          </span>
                          <span className="flex items-center">
                            <Clock3 className="w-4 h-4 mr-2" />
                            {event.duration}
                          </span>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                          {event.title}
                        </h3>
                        
                        <p className="text-zion-slate-light mb-4 leading-relaxed">
                          {event.description}
                        </p>

                        <div className="flex items-center space-x-4 text-sm text-zion-slate-light mb-4">
                          <span className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            {event.type}: {event.location}
                          </span>
                          <span className="flex items-center">
                            <Users className="w-4 h-4 mr-2" />
                            {event.attendees}/{event.maxAttendees} attendees
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {event.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded-full border border-zion-cyan/20"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="text-sm">
                            <p className="text-zion-cyan font-semibold">{event.speaker}</p>
                            <p className="text-zion-slate-light">{event.speakerTitle}</p>
                          </div>
                          {event.registrationRequired ? (
                            <a
                              href={event.registrationUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 group"
                            >
                              Register Now
                              <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                            </a>
                          ) : (
                            <span className="text-zion-green font-semibold">Free Entry</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Regular Events Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">All Events</h2>
            <p className="text-zion-slate-light">Browse our complete calendar of upcoming events</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularEvents.map((event, index) => {
              const eventStatus = getEventStatus(event);
              return (
                <motion.article
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl overflow-hidden hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 h-full">
                    {/* Event Image Placeholder */}
                    <div className="h-40 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 flex items-center justify-center relative">
                      <Calendar className="w-12 h-12 text-zion-cyan" />
                      <div className="absolute top-3 right-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${eventStatus.color} bg-zion-slate-dark/80`}>
                          {eventStatus.status}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6 flex-1">
                      <div className="flex items-center space-x-4 text-sm text-zion-slate-light mb-3">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {formatDate(event.date)}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {event.time} {event.timezone}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300 line-clamp-2">
                        {event.title}
                      </h3>
                      
                      <p className="text-zion-slate-light mb-4 leading-relaxed line-clamp-3">
                        {event.description}
                      </p>

                      <div className="flex items-center space-x-4 text-sm text-zion-slate-light mb-4">
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {event.type}
                        </span>
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          {event.attendees}/{event.maxAttendees}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {event.tags.slice(0, 2).map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded-full border border-zion-cyan/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between mt-auto">
                        <div className="text-sm">
                          <p className="text-zion-cyan font-semibold">{event.speaker}</p>
                        </div>
                        {event.registrationRequired ? (
                          <a
                            href={event.registrationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-zion-cyan hover:text-zion-cyan/80 transition-colors duration-300 group"
                          >
                            Register
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                          </a>
                        ) : (
                          <span className="text-zion-green font-semibold text-sm">Free Entry</span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Past Events & Recordings */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Past Events & Recordings</h2>
            <p className="text-zion-slate-light">Missed an event? Watch recordings and access materials from our past events</p>
          </motion.div>

          <div className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Video className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Event Recordings</h3>
                <p className="text-zion-slate-light mb-4">Access recordings from our past webinars and conferences</p>
                <button className="px-6 py-3 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-xl hover:bg-gradient-to-r hover:from-zion-cyan/30 hover:to-zion-purple/30 transition-all duration-300">
                  Browse Recordings
                </button>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Event Materials</h3>
                <p className="text-zion-slate-light mb-4">Download presentations, slides, and resources</p>
                <button className="px-6 py-3 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-xl hover:bg-gradient-to-r hover:from-zion-cyan/30 hover:to-zion-purple/30 transition-all duration-300">
                  Access Materials
                </button>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Event Community</h3>
                <p className="text-zion-slate-light mb-4">Connect with fellow attendees and speakers</p>
                <button className="px-6 py-3 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-xl hover:bg-gradient-to-r hover:from-zion-cyan/30 hover:to-zion-purple/30 transition-all duration-300">
                  Join Community
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Get notified about upcoming events, early registration opportunities, and exclusive content. 
              Never miss an important event from Zion Tech Group.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan/40 focus:ring-2 focus:ring-zion-cyan/20"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Events;
