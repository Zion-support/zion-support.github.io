<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-advertise-them-650b
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
<<<<<<< HEAD
  MapPin, 
  Clock, 
  Users, 
  ExternalLink, 
  Filter,
  Search,
  Tag,
  ArrowRight,
  Video,
  Globe,
  Building
} from 'lucide-react';

const Events: React.FC = () => {
=======
import React, { useState } from 'react.ts';
import { motion              } from 'framer-motion.ts';
import { Link              } from 'react-router-dom.ts';
import { Calendar,
  Clock,
  MapPin,
  Users,
  Video,
=======
  Clock, 
  MapPin, 
  Users, 
  Video, 
>>>>>>> cursor/add-new-services-and-advertise-them-650b
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

<<<<<<< HEAD
export default function Events(...args: any[]): any {
  const [selectedType, setSelectedType] = useState('All');
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const eventCategories = [
    'All',
    'AI & Machine Learning',
    'Cybersecurity',
    'Cloud & DevOps',
    'Digital Transformation',
    'Quantum Computing',
    'Blockchain',
    'Webinars',
    'Conferences',
    'Workshops'
  ];

<<<<<<< HEAD
  const events = [
    {
      id: 1,
      title: "AI in Enterprise: 2025 Trends & Predictions",
      category: "AI & Machine Learning",
      date: "2025-02-15",
      time: "10:00 AM - 12:00 PM EST",
      location: "Virtual Event",
      type: "Webinar",
      attendees: 150,
      description: "Join industry experts as we explore the latest trends in AI adoption across enterprise organizations and what to expect in 2025.",
      speakers: ["Dr. Sarah Chen", "Mark Johnson", "Dr. Alex Rodriguez"],
      tags: ["AI", "Enterprise", "Trends", "2025"],
      registrationUrl: "#",
      isVirtual: true
    },
    {
      id: 2,
      title: "Cybersecurity Summit 2025",
      category: "Cybersecurity",
      date: "2025-03-20",
      time: "9:00 AM - 5:00 PM EST",
      location: "Middletown, DE",
      type: "Conference",
      attendees: 300,
      description: "A comprehensive one-day summit covering the latest cybersecurity threats, defense strategies, and compliance requirements.",
      speakers: ["Chief Security Officers", "Threat Intelligence Experts", "Compliance Specialists"],
      tags: ["Cybersecurity", "Threats", "Compliance", "Defense"],
      registrationUrl: "#",
      isVirtual: false
    },
    {
      id: 3,
      title: "Cloud-Native Architecture Workshop",
      category: "Cloud & DevOps",
      date: "2025-02-28",
      time: "1:00 PM - 4:00 PM EST",
      location: "Virtual Event",
      type: "Workshop",
      attendees: 75,
      description: "Hands-on workshop covering cloud-native design patterns, microservices architecture, and DevOps best practices.",
      speakers: ["Cloud Architects", "DevOps Engineers"],
      tags: ["Cloud", "DevOps", "Microservices", "Architecture"],
      registrationUrl: "#",
      isVirtual: true
    },
    {
      id: 4,
      title: "Digital Transformation Success Stories",
      category: "Digital Transformation",
      date: "2025-04-10",
      time: "2:00 PM - 3:30 PM EST",
      location: "Virtual Event",
      type: "Webinar",
      attendees: 200,
      description: "Learn from real-world case studies of successful digital transformation initiatives and the lessons learned along the way.",
      speakers: ["Transformation Leaders", "Industry Experts"],
      tags: ["Digital Transformation", "Case Studies", "Success Stories"],
      registrationUrl: "#",
      isVirtual: true
    },
    {
      id: 5,
      title: "Quantum Computing in Business",
      category: "Quantum Computing",
      date: "2025-05-15",
      time: "11:00 AM - 1:00 PM EST",
      location: "New York, NY",
      type: "Conference",
      attendees: 250,
      description: "Explore how quantum computing is revolutionizing business applications and what organizations need to prepare for.",
      speakers: ["Quantum Researchers", "Business Strategists"],
      tags: ["Quantum Computing", "Business Applications", "Innovation"],
      registrationUrl: "#",
      isVirtual: false
    },
    {
      id: 6,
      title: "Blockchain for Enterprise Solutions",
      category: "Blockchain",
      date: "2025-06-20",
      time: "10:00 AM - 4:00 PM EST",
      location: "Virtual Event",
      type: "Workshop",
      attendees: 100,
      description: "Comprehensive workshop on implementing blockchain solutions for enterprise use cases and supply chain management.",
      speakers: ["Blockchain Experts", "Enterprise Architects"],
      tags: ["Blockchain", "Enterprise", "Supply Chain", "Implementation"],
      registrationUrl: "#",
      isVirtual: true
=======
    return matchesType && matchesCategory && matchesStatus && matchesSearch;
=======
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
>>>>>>> cursor/add-new-services-and-advertise-them-650b
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
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
    }
  ];

<<<<<<< HEAD
  const upcomingEvents = events.filter(event => new Date(event.date) >= new Date());
  const filteredEvents = selectedCategory === 'All' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.category === selectedCategory);

  const searchFilteredEvents = searchTerm 
    ? filteredEvents.filter(event => 
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : filteredEvents;
=======
  const getStatusBadge = (status: anyanyanyanyanyanyanyanyanyanyanyanyanystring)              => {
    if (status === 'upcoming') {
      return <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">Upcoming</span>;
    } else {
      return <span className="px-3 py-1 bg-gray-500/20 text-gray-400 text-xs rounded-full border border-gray-500/30">Past</span>;
    }
=======
  const isUpcoming = (dateString: string) => {
    return new Date(dateString) >= new Date();
>>>>>>> cursor/add-new-services-and-advertise-them-650b
  };
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Zion Tech
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}Events
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Join us for cutting-edge technology events, workshops, and conferences. Learn from experts and connect with industry leaders.
          </motion.p>
          
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto relative"
          >
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-cyan-500/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
            />
=======
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
>>>>>>> cursor/add-new-services-and-advertise-them-650b
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-cyan-400" />
              <span className="text-gray-300">Filter by:</span>
=======
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
            </div>
>>>>>>> cursor/add-new-services-and-advertise-them-650b

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
<<<<<<< HEAD
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
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
=======
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              ))}
>>>>>>> cursor/add-new-services-and-advertise-them-650b
            </div>
            {eventCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-cyan-500 text-white"
                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

<<<<<<< HEAD
<<<<<<< HEAD
          {/* Events Grid */}
          <div className="grid gap-8">
            {searchFilteredEvents.map((event, index) => (
              <motion.article
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/3">
                    <div className={`h-48 lg:h-full flex items-center justify-center ${
                      event.isVirtual 
                        ? "bg-gradient-to-br from-blue-500/20 to-cyan-500/20" 
                        : "bg-gradient-to-br from-purple-500/20 to-pink-500/20"
                    }`}>
                      <div className="text-center">
                        {event.isVirtual ? (
                          <Video className="w-12 h-12 text-blue-400 mx-auto mb-2" />
                        ) : (
                          <Building className="w-12 h-12 text-purple-400 mx-auto mb-2" />
                        )}
                        <span className={`text-sm font-medium ${
                          event.isVirtual ? "text-blue-400" : "text-purple-400"
                        }`}>
                          {event.isVirtual ? "Virtual Event" : "In-Person Event"}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:w-2/3 p-6">
                    <div className="flex items-center space-x-4 mb-3">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                        {event.category}
                      </span>
                      <span className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs font-medium rounded-full">
                        {event.type}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors cursor-pointer">
                      {event.title}
                    </h2>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {event.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-gray-400">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{new Date(event.date).toLocaleDateString()}</span>
=======
      {/* Upcoming Events */}
      {upcomingEvents.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
=======
      {/* Featured Events */}
      {featuredEvents.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
>>>>>>> cursor/add-new-services-and-advertise-them-650b
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

<<<<<<< HEAD
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
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
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
=======
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
>>>>>>> cursor/add-new-services-and-advertise-them-650b
          </div>

<<<<<<< HEAD
<<<<<<< HEAD
          {searchFilteredEvents.length === 0 && (
            <div className="text-center py-12">
              <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-400 text-lg">No events found matching your criteria.</p>
              <p className="text-gray-500 mt-2">Try adjusting your filters or search terms.</p>
=======
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
=======
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
>>>>>>> cursor/add-new-services-and-advertise-them-650b

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
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
            </div>
=======
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
>>>>>>> cursor/add-new-services-and-advertise-them-650b
          )}
        </div>
      </section>

<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Host Your Event With Us
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Looking to host a technology event, workshop, or conference? We provide the platform and support to make your event a success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Host an Event
              </button>
              <button className="px-8 py-4 bg-gray-800/50 text-white rounded-lg font-medium hover:bg-gray-700/50 transition-all duration-300 border border-gray-600">
=======
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
>>>>>>> cursor/add-new-services-and-advertise-them-650b
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
};

export default Events;
=======
}
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
=======
}
>>>>>>> cursor/add-new-services-and-advertise-them-650b
