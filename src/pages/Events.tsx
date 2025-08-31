import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Video, 
  ExternalLink,
  Filter,
  Search,
  Globe,
  Award,
  Rocket,
  Brain,
  Shield,
  Building2,
  Handshake
} from 'lucide-react';

export default function Events() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [timeFilter, setTimeFilter] = useState('upcoming');

  const categories = [
    { id: 'all', name: 'All Events', icon: Globe },
    { id: 'webinars', name: 'Webinars', icon: Video },
    { id: 'conferences', name: 'Conferences', icon: Building2 },
    { id: 'workshops', name: 'Workshops', icon: Brain },
    { id: 'networking', name: 'Networking', icon: Handshake },
    { id: 'awards', name: 'Awards & Recognition', icon: Award }
  ];

  const timeFilters = [
    { id: 'upcoming', name: 'Upcoming' },
    { id: 'past', name: 'Past Events' },
    { id: 'this-month', name: 'This Month' }
  ];

  const events = [
    {
      id: 1,
      title: 'AI Innovation Summit 2025',
      description: 'Join industry leaders and AI experts for a comprehensive exploration of the latest developments in artificial intelligence and their business applications.',
      category: 'conferences',
      type: 'Conference',
      date: '2025-02-15',
      time: '09:00 AM - 06:00 PM',
      location: 'San Francisco Convention Center',
      virtual: false,
      attendees: '500+',
      price: '$299',
      featured: true,
      image: '/events/ai-summit-2025.jpg',
      speakers: ['Kleber Santos', 'Dr. Sarah Chen', 'Dr. Emily Watson'],
      tags: ['AI Innovation', 'Business Applications', 'Networking']
    },
    {
      id: 2,
      title: 'Quantum Computing Workshop Series',
      description: 'Deep dive into quantum computing fundamentals and practical applications for business problem-solving.',
      category: 'workshops',
      type: 'Workshop Series',
      date: '2025-02-20',
      time: '02:00 PM - 05:00 PM',
      location: 'Virtual Event',
      virtual: true,
      attendees: '100',
      price: 'Free',
      featured: true,
      image: '/events/quantum-workshop.jpg',
      speakers: ['Dr. Emily Watson'],
      tags: ['Quantum Computing', 'Workshop', 'Free']
    },
    {
      id: 3,
      title: 'Cybersecurity in the AI Era',
      description: 'Explore the intersection of AI and cybersecurity, understanding new threats and defense strategies.',
      category: 'webinars',
      type: 'Webinar',
      date: '2025-02-25',
      time: '01:00 PM - 02:30 PM',
      location: 'Virtual Event',
      virtual: true,
      attendees: '200+',
      price: 'Free',
      featured: false,
      image: '/events/cybersecurity-webinar.jpg',
      speakers: ['Dr. Sarah Chen'],
      tags: ['Cybersecurity', 'AI Security', 'Webinar']
    },
    {
      id: 4,
      title: 'Startup Innovation Challenge',
      description: 'Annual competition showcasing the most innovative AI startups and providing mentorship opportunities.',
      category: 'awards',
      type: 'Competition',
      date: '2025-03-10',
      time: '10:00 AM - 08:00 PM',
      location: 'Zion Tech Group HQ',
      virtual: false,
      attendees: '150',
      price: '$99',
      featured: false,
      image: '/events/startup-challenge.jpg',
      speakers: ['Kleber Santos', 'Michael Rodriguez'],
      tags: ['Startups', 'Innovation', 'Competition']
    },
    {
      id: 5,
      title: 'AI for Healthcare Symposium',
      description: 'Specialized event focusing on AI applications in healthcare, featuring case studies and expert panels.',
      category: 'conferences',
      type: 'Symposium',
      date: '2025-03-20',
      time: '09:00 AM - 05:00 PM',
      location: 'Boston Marriott Copley Place',
      virtual: false,
      attendees: '300+',
      price: '$199',
      featured: false,
      image: '/events/healthcare-symposium.jpg',
      speakers: ['Dr. Sarah Chen', 'Healthcare Experts'],
      tags: ['Healthcare AI', 'Symposium', 'Expert Panels']
    },
    {
      id: 6,
      title: 'Digital Transformation Masterclass',
      description: 'Comprehensive workshop on implementing AI-driven digital transformation strategies.',
      category: 'workshops',
      type: 'Masterclass',
      date: '2025-03-25',
      time: '10:00 AM - 04:00 PM',
      location: 'Virtual Event',
      virtual: true,
      attendees: '75',
      price: '$149',
      featured: false,
      image: '/events/digital-transformation.jpg',
      speakers: ['Michael Rodriguez'],
      tags: ['Digital Transformation', 'Strategy', 'Workshop']
    },
    {
      id: 7,
      title: 'Tech Leaders Networking Mixer',
      description: 'Exclusive networking event for technology leaders and executives in the AI space.',
      category: 'networking',
      type: 'Networking',
      date: '2025-04-05',
      time: '06:00 PM - 09:00 PM',
      location: 'Private Venue, New York',
      virtual: false,
      attendees: '50',
      price: '$75',
      featured: false,
      image: '/events/networking-mixer.jpg',
      speakers: ['Kleber Santos'],
      tags: ['Networking', 'Executive', 'Exclusive']
    },
    {
      id: 8,
      title: 'AI Ethics and Responsible Development',
      description: 'Panel discussion on ethical AI development and responsible deployment practices.',
      category: 'webinars',
      type: 'Panel Discussion',
      date: '2025-04-15',
      time: '02:00 PM - 03:30 PM',
      location: 'Virtual Event',
      virtual: true,
      attendees: '150+',
      price: 'Free',
      featured: false,
      image: '/events/ai-ethics.jpg',
      speakers: ['Dr. Emily Watson', 'AI Ethics Experts'],
      tags: ['AI Ethics', 'Responsible AI', 'Panel Discussion']
    }
  ];

  const filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    let matchesTime = true;
    if (timeFilter === 'upcoming') {
      matchesTime = new Date(event.date) >= new Date();
    } else if (timeFilter === 'past') {
      matchesTime = new Date(event.date) < new Date();
    } else if (timeFilter === 'this-month') {
      const eventDate = new Date(event.date);
      const now = new Date();
      matchesTime = eventDate.getMonth() === now.getMonth() && eventDate.getFullYear() === now.getFullYear();
    }
    
    return matchesCategory && matchesSearch && matchesTime;
  });

  const featuredEvents = filteredEvents.filter(event => event.featured);
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

  const isUpcoming = (dateString: string) => {
    return new Date(dateString) >= new Date();
  };

  return (
    <div className="min-h-screen bg-zion-slate-dark text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-zion-cyan mb-6">
              Events & Webinars
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              Join us for cutting-edge conferences, workshops, and webinars that showcase the latest innovations in AI, technology, and business transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-zion-slate-darker">
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
                className="w-full pl-10 pr-4 py-3 bg-zion-slate-dark border border-zion-purple/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-1 focus:ring-zion-cyan"
              />
            </div>

            {/* Time Filter */}
            <div className="flex flex-wrap gap-2">
              {timeFilters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setTimeFilter(filter.id)}
                  className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                    timeFilter === filter.id
                      ? 'border-zion-cyan bg-zion-cyan/20 text-zion-cyan'
                      : 'border-zion-purple/20 text-zion-slate-light hover:border-zion-cyan/40 hover:text-zion-cyan'
                  }`}
                >
                  {filter.name}
                </button>
              ))}
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'border-zion-cyan bg-zion-cyan/20 text-zion-cyan'
                      : 'border-zion-purple/20 text-zion-slate-light hover:border-zion-cyan/40 hover:text-zion-cyan'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
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
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-zion-cyan mb-4">
                Featured Events
              </h2>
              <p className="text-xl text-zion-slate-light">
                Don't miss these must-attend events featuring industry leaders and cutting-edge insights
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredEvents.map((event, index) => (
                <motion.article
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-darker rounded-2xl overflow-hidden border border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-xl hover:shadow-zion-cyan/10"
                >
                  <div className="h-48 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 flex items-center justify-center">
                    <Rocket className="w-16 h-16 text-zion-cyan" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-3">
                      <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full">
                        {event.type}
                      </span>
                      <span className={`px-3 py-1 text-sm rounded-full ${
                        isUpcoming(event.date) 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-zion-slate-light/20 text-zion-slate-light'
                      }`}>
                        {isUpcoming(event.date) ? 'Upcoming' : 'Past'}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 hover:text-zion-cyan transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-zion-slate-light mb-4 line-clamp-3">
                      {event.description}
                    </p>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center space-x-2 text-sm text-zion-slate-light">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-zion-slate-light">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-zion-slate-light">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-zion-slate-light">
                        <Users className="w-4 h-4" />
                        <span>{event.attendees}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-zion-cyan font-semibold">{event.price}</span>
                      <button className="bg-zion-cyan hover:bg-zion-cyan/80 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">
                        Register Now
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Events */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-slate-darker">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zion-cyan mb-4">
              All Events
            </h2>
            <p className="text-xl text-zion-slate-light">
              Browse our complete calendar of events, webinars, and workshops
            </p>
          </motion.div>

          {regularEvents.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularEvents.map((event, index) => (
                <motion.article
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark rounded-xl overflow-hidden border border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/10"
                >
                  <div className="h-40 bg-gradient-to-br from-zion-purple/20 to-zion-cyan/20 flex items-center justify-center">
                    <Brain className="w-12 h-12 text-zion-purple" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-3">
                      <span className="px-3 py-1 bg-zion-purple/20 text-zion-purple text-sm rounded-full">
                        {event.type}
                      </span>
                      <span className={`px-3 py-1 text-sm rounded-full ${
                        isUpcoming(event.date) 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-zion-slate-light/20 text-zion-slate-light'
                      }`}>
                        {isUpcoming(event.date) ? 'Upcoming' : 'Past'}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 hover:text-zion-cyan transition-colors line-clamp-2">
                      {event.title}
                    </h3>
                    <p className="text-zion-slate-light mb-4 line-clamp-3 text-sm">
                      {event.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2 text-sm text-zion-slate-light">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-zion-slate-light">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-zion-cyan font-semibold text-sm">{event.price}</span>
                      <button className="bg-zion-cyan hover:bg-zion-cyan/80 text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300">
                        Details
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-zion-slate-light/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-12 h-12 text-zion-slate-light" />
              </div>
              <h3 className="text-xl font-semibold text-zion-slate-light mb-2">
                No events found
              </h3>
              <p className="text-zion-slate-light">
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zion-cyan mb-6">
              Host Your Event With Us
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Interested in hosting an event, webinar, or workshop? We'd love to collaborate and create impactful experiences together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-zion-cyan hover:bg-zion-cyan/80 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                Host an Event
              </button>
              <button className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
