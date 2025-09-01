<<<<<<< HEAD
import React, { useState } from 'react.ts';
import { motion              } from 'framer-motion.ts';
import { Link              } from 'react-router-dom.ts';
import { Calendar,
  Clock,
  MapPin,
  Users,
  Video,
  ExternalLink,
  Filter,
  Search,
  ArrowRight,
  Star,
  Award,
  Zap,
  Brain,
  Shield,
  Cloud,
  TrendingUp,
  MessageCircle,
  BookOpen,
  CheckCircle,
  FileText
} from 'lucide-react';
import { SEO } from '@/components/SEO';
=======
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
>>>>>>> 10d85f3b3670bc7145df6b26a320a41cd8913f2f

export default function Events() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [timeFilter, setTimeFilter] = useState('upcoming');

<<<<<<< HEAD
const eventTypes = ['All', 'Conference', 'Workshop', 'Webinar', 'Symposium'];
const categories = ['All', 'AI & ML', 'Cybersecurity', 'Cloud & DevOps', 'Data Analytics', 'IoT & Edge', 'Digital Transformation'];
const statuses = ['All', 'upcoming', 'past'];

export default function Events(...args: any[]): any {
  const [selectedType, setSelectedType] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const eventCategories = [
    { id: 'all', name: 'All Events', count: 12 },
    { id: 'conference', name: 'Conferences', count: 4 },
    { id: 'workshop', name: 'Workshops', count: 3 },
    { id: 'webinar', name: 'Webinars', count: 3 },
    { id: 'meetup', name: 'Meetups', count: 2 }
  ];

    return matchesType && matchesCategory && matchesStatus && matchesSearch;
  });

=======
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

>>>>>>> 10d85f3b3670bc7145df6b26a320a41cd8913f2f
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

<<<<<<< HEAD
  const getCategoryIcon = (category: anyanyanyanyanyanyanyanyanyanyanyanyanystring)              => {
    switch (category) {
      case 'AI & ML': return Brain;
      case 'Cybersecurity': return Shield;
      case 'Cloud & DevOps': return Cloud;
      case 'Data Analytics': return TrendingUp;
      case 'IoT & Edge': return Zap;
      case 'Digital Transformation': return Globe;
      default: return BookOpen;
    }
  ];

  const getStatusBadge = (status: anyanyanyanyanyanyanyanyanyanyanyanyanystring)              => {
    if (status === 'upcoming') {
      return <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">Upcoming</span>;
    } else {
      return <span className="px-3 py-1 bg-gray-500/20 text-gray-400 text-xs rounded-full border border-gray-500/30">Past</span>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Events - Zion Tech Group"
        description="Join our upcoming conferences, webinars, workshops, and meetups. Connect with AI experts, learn about cutting-edge technology, and network with industry professionals."
        keywords="events, conferences, webinars, workshops, AI events, technology conferences, Zion Tech Group"
        canonicalUrl="https://ziontechgroup.com/events"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Events</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join our conferences, webinars, workshops, and meetups to learn from AI experts, discover cutting-edge technology, and connect with industry professionals.
            </p>

            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                {eventCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-blue-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
=======
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
>>>>>>> 10d85f3b3670bc7145df6b26a320a41cd8913f2f
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Filters Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {/* Search */}
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search events..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 text-white placeholder-zion-slate-light rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                  />
                </div>
              </div>

              {/* Event Type Filter */}
              <div>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-lg focus: anyanyanyanyanyanyanyanyanyanyanyanyanyoutline-none focus:ring-2 focus:ring-zion-cyan"
                >
                  {eventTypes.map(type              => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-lg focus: anyanyanyanyanyanyanyanyanyanyanyanyanyoutline-none focus:ring-2 focus:ring-zion-cyan"
                >
                  {categories.map(category              => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Status Filter */}
              <div>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-lg focus: anyanyanyanyanyanyanyanyanyanyanyanyanyoutline-none focus:ring-2 focus:ring-zion-cyan"
                >
                  {statuses.map(status              => (
                    <option key={status} value={status}>
                      {status === 'upcoming' ? 'Upcoming' : status === 'past' ? 'Past' : status}
                    </option>
                  ))}
                </select>
              </div>
=======
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
>>>>>>> 10d85f3b3670bc7145df6b26a320a41cd8913f2f
            </div>

<<<<<<< HEAD
      {/* Upcoming Events */}
      {upcomingEvents.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Upcoming Events</h2>
              <p className="text-zion-slate-light">Don't miss these exciting opportunities to learn and network</p>
            </motion.div>

            <div className="grid grid-cols-1 lg: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-8">
              {upcomingEvents.map((event, index)              => {
                const CategoryIcon = getCategoryIcon(event.category);
                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-zion-cyan/30 transition-all duration-300"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                          <CategoryIcon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex items-center space-x-2 text-gray-400">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">{event.time}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-gray-400">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{event.location}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-400">
                          <Users className="w-4 h-4" />
                          <span className="text-sm">{event.attendees} attendees</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {event.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                        <span>Register Now</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

      {/* Past Events */}
      {pastEvents.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Past Events</h2>
              <p className="text-zion-slate-light">Missed an event? Check out our past events and stay updated</p>
            </motion.div>

            <div className="grid grid-cols-1 lg: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-8">
              {pastEvents.map((event, index)              => {
                const CategoryIcon = getCategoryIcon(event.category);
                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 opacity-75"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                          <CategoryIcon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{event.title}</h3>
                          <div className="flex items-center gap-2">
                            {getStatusBadge(event.status)}
                            <span className="text-sm text-zion-slate-light">{event.type}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Event Details */}
                    <div className="mb-4 space-y-3">
                      <div className="flex items-center gap-2 text-sm text-zion-slate-light">
=======
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
>>>>>>> 10d85f3b3670bc7145df6b26a320a41cd8913f2f
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
<<<<<<< HEAD
                  </motion.div>
                );
              })}
=======
                  </div>
                </motion.article>
              ))}
>>>>>>> 10d85f3b3670bc7145df6b26a320a41cd8913f2f
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
<<<<<<< HEAD
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Events
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our flagship conferences and major events that bring together the AI community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents.filter(event => event.featured).map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <span className="px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded-full">
                    Featured
                  </span>
                  <span className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full">
                    {eventCategories.find(cat => cat.id === event.category)?.name}
                  </span>
                  <span className="text-gray-400 text-sm">
                    {event.registered}/{event.capacity} registered
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 hover:text-blue-400 transition-colors cursor-pointer">
                  {event.title}
                </h3>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {event.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-4 text-gray-400 text-sm">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(event.date)}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {event.time}
                    </span>
                  </div>

                  <div className="flex items-center space-x-4 text-gray-400 text-sm">
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">
                      <Users className="w-4 h-4 inline mr-2" />
                      {event.registered}/{event.capacity} registered
                    </span>
                    <span className="text-blue-400 font-medium">
                      {Math.round((event.registered / event.capacity) * 100)}% full
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {event.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={event.registrationUrl}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Register Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Upcoming Events */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              All Upcoming Events
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Browse our complete calendar of upcoming events, webinars, and workshops.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.filter(event => isUpcoming(event) && !event.featured).map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <span className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full">
                    {eventCategories.find(cat => cat.id === event.category)?.name}
                  </span>
                  <span className="text-gray-400 text-sm">
                    {event.registered}/{event.capacity} registered
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-4 hover:text-blue-400 transition-colors cursor-pointer line-clamp-2">
                  {event.title}
                </h3>

                <p className="text-gray-300 leading-relaxed mb-6 line-clamp-3">
                  {event.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-4 text-gray-400 text-sm">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(event.date)}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {event.time}
                    </span>
                  </div>

                  <div className="flex items-center space-x-4 text-gray-400 text-sm">
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {event.tags.slice(0, 2).map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={event.registrationUrl}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 inline-flex items-center"
                  >
                    Register
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredEvents.filter(event => isUpcoming(event) && !event.featured).length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-gray-400 text-lg">No upcoming events found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Past Events
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Watch recordings and download materials from our previous events.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <span className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full">
                    {eventCategories.find(cat => cat.id === event.category)?.name}
                  </span>
                  <span className="text-gray-400 text-sm">
                    {event.attendees} attendees
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-4 hover:text-blue-400 transition-colors cursor-pointer">
                  {event.title}
                </h3>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {event.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-4 text-gray-400 text-sm">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(event.date)}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <p className="text-gray-400 text-sm font-semibold">Highlights:</p>
                    <ul className="space-y-1">
                      {event.highlights.slice(0, 3).map((highlight, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-center">
                          <Star className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {event.tags.slice(0, 2).map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-2">
                    <a
                      href={event.recordingUrl}
                      className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                      title="Watch Recording"
                    >
                      <Video className="w-4 h-4 text-white" />
                    </a>
                    <a
                      href={event.slidesUrl}
                      download
                      className="p-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
                      title="Download Slides"
                    >
                      <FileText className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Attend Our Events?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover the benefits of joining our events and connecting with the AI community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: MessageCircle,
                title: 'Expert Speakers',
                description: 'Learn from industry leaders, researchers, and practitioners with deep expertise in AI and technology.'
              },
              {
                icon: Users,
                title: 'Networking',
                description: 'Connect with like-minded professionals, potential partners, and industry experts.'
              },
              {
                icon: BookOpen,
                title: 'Knowledge Sharing',
                description: 'Gain insights from real-world case studies, best practices, and cutting-edge research.'
              },
              {
                icon: Video,
                title: 'Interactive Sessions',
                description: 'Participate in workshops, Q&A sessions, and hands-on demonstrations.'
              },
              {
                icon: Award,
                title: 'Recognition',
                description: 'Get recognized for your contributions and achievements in the AI community.'
              },
              {
                icon: Globe,
                title: 'Global Reach',
                description: 'Connect with professionals from around the world and diverse industries.'
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed text-center">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Updated</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get notified about upcoming events, early bird registrations, and exclusive event content.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                Subscribe
=======
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
>>>>>>> 10d85f3b3670bc7145df6b26a320a41cd8913f2f
              </button>
            </div>

            <p className="text-gray-400 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
