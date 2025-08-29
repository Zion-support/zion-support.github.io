import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Tag, 
  Search, 
  Filter,
  ArrowRight,
  ExternalLink,
  Video,
  Globe,
  Building,
  Zap,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Star,
  Award,
  TrendingUp,
  BookOpen,
  GraduationCap,
  Briefcase,
  Heart
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Events() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Categories', icon: Tag, color: 'from-blue-600 to-cyan-600' },
    { id: 'ai', name: 'AI & Analytics', icon: Brain, color: 'from-purple-600 to-pink-600' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-600 to-orange-600' },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, color: 'from-blue-600 to-cyan-600' },
    { id: 'innovation', name: 'Innovation', icon: Rocket, color: 'from-yellow-600 to-orange-600' },
    { id: 'business', name: 'Business', icon: Briefcase, color: 'from-green-600 to-emerald-600' }
  ];

  const eventTypes = [
    { id: 'all', name: 'All Types', icon: Calendar },
    { id: 'webinar', name: 'Webinar', icon: Video },
    { id: 'conference', name: 'Conference', icon: Building },
    { id: 'workshop', name: 'Workshop', icon: GraduationCap },
    { id: 'meetup', name: 'Meetup', icon: Users },
    { id: 'training', name: 'Training', icon: BookOpen }
  ];

  const events = [
    {
      id: 1,
      title: 'AI-Powered Cybersecurity: The Future of Threat Detection',
      description: 'Join us for an in-depth exploration of how artificial intelligence is revolutionizing cybersecurity and threat detection capabilities.',
      category: 'cybersecurity',
      type: 'webinar',
      date: '2024-12-20',
      time: '14:00 EST',
      duration: '90 minutes',
      location: 'Virtual Event',
      attendees: 250,
      maxAttendees: 500,
      price: 'Free',
      featured: true,
      tags: ['AI', 'Cybersecurity', 'Threat Detection', 'Webinar'],
      speakers: [
        { name: 'Dr. Michael Rodriguez', title: 'Head of Cybersecurity', company: 'Zion Tech Group' },
        { name: 'Sarah Chen', title: 'AI Security Specialist', company: 'MIT' }
      ],
      agenda: [
        'Introduction to AI in Cybersecurity',
        'Real-time Threat Detection',
        'Machine Learning for Security',
        'Q&A Session'
      ],
      registrationUrl: '/events/register/1',
      image: '/images/events/ai-cybersecurity.jpg'
    },
    {
      id: 2,
      title: 'Quantum Computing Workshop: Hands-on Experience',
      description: 'Get hands-on experience with quantum computing concepts and learn how to implement quantum algorithms for real-world problems.',
      category: 'innovation',
      type: 'workshop',
      date: '2024-12-25',
      time: '10:00 EST',
      duration: '4 hours',
      location: 'Zion Tech Group HQ, New York',
      attendees: 45,
      maxAttendees: 50,
      price: '$299',
      featured: true,
      tags: ['Quantum Computing', 'Workshop', 'Hands-on', 'Advanced'],
      speakers: [
        { name: 'Dr. David Kim', title: 'Quantum Computing Lead', company: 'Zion Tech Group' },
        { name: 'Prof. Lisa Thompson', title: 'Quantum Physics', company: 'Stanford University' }
      ],
      agenda: [
        'Quantum Computing Fundamentals',
        'Quantum Algorithms',
        'Hands-on Lab Session',
        'Real-world Applications'
      ],
      registrationUrl: '/events/register/2',
      image: '/images/events/quantum-workshop.jpg'
    },
    {
      id: 3,
      title: 'Cloud FinOps Summit 2024',
      description: 'Join industry leaders for a comprehensive discussion on cloud financial operations, cost optimization, and best practices.',
      category: 'cloud',
      type: 'conference',
      date: '2025-01-15',
      time: '09:00 EST',
      duration: '8 hours',
      location: 'Marriott Marquis, New York',
      attendees: 180,
      maxAttendees: 300,
      price: '$599',
      featured: false,
      tags: ['Cloud Computing', 'FinOps', 'Cost Optimization', 'Conference'],
      speakers: [
        { name: 'Jennifer Lee', title: 'Cloud Solutions Architect', company: 'Zion Tech Group' },
        { name: 'Robert Martinez', title: 'FinOps Expert', company: 'Cloud Financial Institute' }
      ],
      agenda: [
        'FinOps Fundamentals',
        'Cost Optimization Strategies',
        'Industry Best Practices',
        'Networking & Collaboration'
      ],
      registrationUrl: '/events/register/3',
      image: '/images/events/cloud-finops.jpg'
    },
    {
      id: 4,
      title: 'Edge Computing & IoT Meetup',
      description: 'Network with professionals in edge computing and IoT while learning about the latest developments and use cases.',
      category: 'innovation',
      type: 'meetup',
      date: '2025-01-20',
      time: '18:00 EST',
      duration: '3 hours',
      location: 'Tech Hub, San Francisco',
      attendees: 75,
      maxAttendees: 100,
      price: 'Free',
      featured: false,
      tags: ['Edge Computing', 'IoT', 'Networking', 'Meetup'],
      speakers: [
        { name: 'Emily Zhang', title: 'IoT Solutions Lead', company: 'Zion Tech Group' },
        { name: 'James Wilson', title: 'Edge Computing Specialist', company: 'Edge Tech Corp' }
      ],
      agenda: [
        'Edge Computing Overview',
        'IoT Use Cases',
        'Networking Session',
        'Light Refreshments'
      ],
      registrationUrl: '/events/register/4',
      image: '/images/events/edge-iot-meetup.jpg'
    },
    {
      id: 5,
      title: 'AI for Healthcare: Transforming Patient Care',
      description: 'Discover how AI is revolutionizing healthcare delivery, improving patient outcomes, and optimizing medical operations.',
      category: 'ai',
      type: 'webinar',
      date: '2025-01-25',
      time: '15:00 EST',
      duration: '60 minutes',
      location: 'Virtual Event',
      attendees: 320,
      maxAttendees: 1000,
      price: 'Free',
      featured: false,
      tags: ['AI', 'Healthcare', 'Patient Care', 'Webinar'],
      speakers: [
        { name: 'Dr. Lisa Thompson', title: 'Healthcare AI Specialist', company: 'Zion Tech Group' },
        { name: 'Dr. Sarah Johnson', title: 'Chief Medical Officer', company: 'MedTech Solutions' }
      ],
      agenda: [
        'AI in Healthcare Overview',
        'Patient Care Optimization',
        'Case Studies',
        'Q&A Session'
      ],
      registrationUrl: '/events/register/5',
      image: '/images/events/ai-healthcare.jpg'
    },
    {
      id: 6,
      title: 'Digital Transformation Leadership Training',
      description: 'Comprehensive training program for executives and leaders on driving successful digital transformation initiatives.',
      category: 'business',
      type: 'training',
      date: '2025-02-01',
      time: '09:00 EST',
      duration: '2 days',
      location: 'Zion Tech Group Training Center',
      attendees: 25,
      maxAttendees: 30,
      price: '$1,299',
      featured: false,
      tags: ['Digital Transformation', 'Leadership', 'Training', 'Executive'],
      speakers: [
        { name: 'David Thompson', title: 'Digital Transformation Lead', company: 'Zion Tech Group' },
        { name: 'Dr. Emily Rodriguez', title: 'Change Management Expert', company: 'Change Institute' }
      ],
      agenda: [
        'Digital Strategy Development',
        'Change Management',
        'Technology Selection',
        'Implementation Planning'
      ],
      registrationUrl: '/events/register/6',
      image: '/images/events/digital-transformation.jpg'
    }
  ];

  const filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const matchesType = selectedType === 'all' || event.type === selectedType;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesType && matchesSearch;
  });

  const featuredEvents = events.filter(event => event.featured);
  const regularEvents = filteredEvents.filter(event => !event.featured);

  const upcomingEvents = events.filter(event => new Date(event.date) > new Date()).slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Events - Zion Tech Group"
        description="Join Zion Tech Group's upcoming events, webinars, workshops, and conferences to learn about the latest technology trends and innovations."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 mb-6"
          >
            <Calendar className="w-12 h-12 text-white" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Upcoming Events
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-4xl mx-auto mb-8"
          >
            Join us for exciting events, webinars, workshops, and conferences 
            to learn about the latest technology trends and innovations.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/events/calendar"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View Calendar
            </Link>
            <Link
              to="/events/register"
              className="border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Register for Events
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Search */}
              <div>
                <label className="block text-sm font-medium text-white mb-3">Search Events</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search events..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-white mb-3">Filter by Category</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-gradient-to-r ' + category.color + ' text-white'
                          : 'bg-slate-700/50 text-gray-300 hover:bg-slate-700 hover:text-white'
                      }`}
                    >
                      <category.icon className="w-4 h-4" />
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Event Type Filter */}
              <div>
                <label className="block text-sm font-medium text-white mb-3">Filter by Type</label>
                <div className="flex flex-wrap gap-2">
                  {eventTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setSelectedType(type.id)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        selectedType === type.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-700/50 text-gray-300 hover:bg-slate-700 hover:text-white'
                      }`}
                    >
                      <type.icon className="w-4 h-4" />
                      {type.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      {featuredEvents.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-white mb-12"
            >
              Featured Events
            </motion.h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredEvents.map((event, index) => (
                <motion.article
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-slate-600 transition-all duration-300 overflow-hidden group"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-yellow-600 to-orange-600 text-white text-xs font-medium rounded-full">
                        Featured
                      </span>
                      <span className="text-gray-400 text-sm">{event.date}</span>
                      <span className="text-gray-400 text-sm">{event.time}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                      {event.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">{event.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Clock className="w-4 h-4" />
                        {event.duration}
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <MapPin className="w-4 h-4" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Users className="w-4 h-4" />
                        {event.attendees}/{event.maxAttendees} attendees
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Tag className="w-4 h-4" />
                        {event.price}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {event.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        to={event.registrationUrl}
                        className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200 flex items-center gap-2"
                      >
                        Register Now
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Events */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-white mb-12"
          >
            All Events
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularEvents.map((event, index) => (
              <motion.article
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-slate-600 transition-all duration-300 overflow-hidden group"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-400 text-sm">{event.date}</span>
                    <span className="text-gray-400 text-sm">{event.time}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200 line-clamp-2">
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{event.description}</p>
                  
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Clock className="w-4 h-4" />
                      {event.duration}
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Users className="w-4 h-4" />
                      {event.attendees}/{event.maxAttendees} attendees
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {event.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={event.registrationUrl}
                      className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200 flex items-center gap-2"
                    >
                      Register
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Event Statistics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            Event Impact
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Events This Year', icon: Calendar, color: 'from-blue-600 to-cyan-600' },
              { number: '5,000+', label: 'Total Attendees', icon: Users, color: 'from-green-600 to-emerald-600' },
              { number: '95%', label: 'Satisfaction Rate', icon: Star, color: 'from-yellow-600 to-orange-600' },
              { number: '25+', label: 'Expert Speakers', icon: Award, color: 'from-purple-600 to-pink-600' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${stat.color} mb-4`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white mb-6"
          >
            Host Your Event with Us
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            Want to host an event, webinar, or workshop? Partner with Zion Tech Group 
            to reach our engaged audience of technology professionals.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Partner with Us
            </Link>
            <Link
              to="/events/calendar"
              className="border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              View Calendar
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}