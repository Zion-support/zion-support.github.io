import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  ExternalLink, 
  Search, 
  Filter, 
  Star, 
  Award, 
  Globe, 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Rocket, 
  Heart, 
  Video, 
  Play,
  ArrowRight,
  Phone,
  Mail
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Events() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const eventCategories = [
    { id: 'all', name: 'All Events', count: 0 },
    { id: 'conferences', name: 'Conferences', count: 8 },
    { id: 'webinars', name: 'Webinars', count: 24 },
    { id: 'workshops', name: 'Workshops', count: 16 },
    { id: 'meetups', name: 'Meetups', count: 12 },
    { id: 'hackathons', name: 'Hackathons', count: 4 }
  ];

  const eventTypes = [
    { id: 'all', name: 'All Types', count: 0 },
    { id: 'virtual', name: 'Virtual', count: 32 },
    { id: 'in-person', name: 'In-Person', count: 18 },
    { id: 'hybrid', name: 'Hybrid', count: 14 }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'AI Innovation Summit 2025',
      description: 'Join industry leaders for insights on the future of AI in business',
      category: 'conferences',
      type: 'hybrid',
      date: '2025-03-15',
      time: '09:00 - 17:00 EST',
      duration: '8 hours',
      location: 'San Francisco, CA + Virtual',
      attendees: 500,
      maxAttendees: 600,
      price: '$299',
      featured: true,
      image: '/events/ai-innovation-summit-2025.jpg',
      speakers: [
        'Dr. Sarah Chen - Chief AI Scientist',
        'Marcus Rodriguez - Head of Cybersecurity',
        'Dr. Emily Watson - VP of Healthcare Technology'
      ],
      tags: ['AI', 'Machine Learning', 'Innovation', 'Business'],
      registrationUrl: '/events/ai-innovation-summit-2025/register',
      agenda: [
        '09:00 - Keynote: The Future of AI',
        '10:30 - AI in Healthcare Panel',
        '12:00 - Networking Lunch',
        '13:30 - AI Ethics Workshop',
        '15:00 - Startup Showcase',
        '16:30 - Closing Remarks'
      ]
    },
    {
      id: 2,
      title: 'Cloud Security Workshop',
      description: 'Hands-on workshop on securing cloud infrastructure',
      category: 'workshops',
      type: 'virtual',
      date: '2025-02-22',
      time: '14:00 - 17:00 EST',
      duration: '3 hours',
      location: 'Virtual Event',
      attendees: 150,
      maxAttendees: 200,
      price: 'Free',
      featured: false,
      image: '/events/cloud-security-workshop.jpg',
      speakers: [
        'Alex Thompson - Director of Cloud Operations',
        'Marcus Rodriguez - Head of Cybersecurity'
      ],
      tags: ['Cloud Security', 'DevOps', 'Cybersecurity'],
      registrationUrl: '/events/cloud-security-workshop/register',
      agenda: [
        '14:00 - Cloud Security Fundamentals',
        '14:45 - Hands-on Lab: AWS Security',
        '15:30 - Break',
        '15:45 - Advanced Security Patterns',
        '16:30 - Q&A and Discussion'
      ]
    },
    {
      id: 3,
      title: 'Digital Transformation Forum',
      description: 'Learn strategies for leading organizational digital transformation',
      category: 'conferences',
      type: 'in-person',
      date: '2025-04-10',
      time: '08:00 - 16:00 EST',
      duration: '8 hours',
      location: 'New York, NY',
      attendees: 300,
      maxAttendees: 400,
      price: '$199',
      featured: true,
      image: '/events/digital-transformation-forum.jpg',
      speakers: [
        'Dr. Emily Watson - VP of Healthcare Technology',
        'Sarah Johnson - Digital Strategy Director',
        'Michael Chen - Transformation Consultant'
      ],
      tags: ['Digital Transformation', 'Strategy', 'Change Management'],
      registrationUrl: '/events/digital-transformation-forum/register',
      agenda: [
        '08:00 - Registration & Breakfast',
        '09:00 - Opening Keynote',
        '10:30 - Transformation Case Studies',
        '12:00 - Networking Lunch',
        '13:30 - Strategy Workshops',
        '15:00 - Technology Showcase',
        '16:00 - Closing & Networking'
      ]
    },
    {
      id: 4,
      title: 'AI for Healthcare Webinar Series',
      description: 'Monthly webinar series on AI applications in healthcare',
      category: 'webinars',
      type: 'virtual',
      date: '2025-02-28',
      time: '15:00 - 16:00 EST',
      duration: '1 hour',
      location: 'Virtual Event',
      attendees: 75,
      maxAttendees: 100,
      price: 'Free',
      featured: false,
      image: '/events/ai-healthcare-webinar.jpg',
      speakers: [
        'Dr. Emily Watson - VP of Healthcare Technology',
        'Dr. Sarah Chen - Chief AI Scientist'
      ],
      tags: ['AI', 'Healthcare', 'Machine Learning'],
      registrationUrl: '/events/ai-healthcare-webinar/register',
      agenda: [
        '15:00 - Introduction to AI in Healthcare',
        '15:15 - Case Study: Diagnostic AI',
        '15:30 - Q&A Session',
        '15:45 - Next Month Preview',
        '16:00 - Close'
      ]
    }
  ];

  const pastEvents = [
    {
      id: 5,
      title: 'Cybersecurity Conference 2024',
      description: 'Annual cybersecurity conference with industry experts',
      category: 'conferences',
      type: 'hybrid',
      date: '2024-11-15',
      time: '09:00 - 17:00 EST',
      duration: '8 hours',
      location: 'Boston, MA + Virtual',
      attendees: 450,
      maxAttendees: 500,
      price: '$249',
      featured: false,
      image: '/events/cybersecurity-conference-2024.jpg',
      speakers: [
        'Marcus Rodriguez - Head of Cybersecurity',
        'Dr. Sarah Chen - Chief AI Scientist'
      ],
      tags: ['Cybersecurity', 'AI', 'Threat Detection'],
      recordingUrl: '/events/cybersecurity-conference-2024/recording',
      slidesUrl: '/events/cybersecurity-conference-2024/slides'
    },
    {
      id: 6,
      title: 'Cloud DevOps Workshop',
      description: 'Hands-on workshop on cloud infrastructure and DevOps',
      category: 'workshops',
      type: 'virtual',
      date: '2024-10-20',
      time: '14:00 - 17:00 EST',
      duration: '3 hours',
      location: 'Virtual Event',
      attendees: 120,
      maxAttendees: 150,
      price: 'Free',
      featured: false,
      image: '/events/cloud-devops-workshop.jpg',
      speakers: [
        'Alex Thompson - Director of Cloud Operations'
      ],
      tags: ['Cloud', 'DevOps', 'Infrastructure'],
      recordingUrl: '/events/cloud-devops-workshop/recording',
      slidesUrl: '/events/cloud-devops-workshop/slides'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Events - Zion Tech Group"
        description="Join our upcoming events, webinars, and conferences. Learn from industry experts and network with technology professionals."
      />
      
      {/* Header */}
      <div className="bg-slate-800/50 border-b border-slate-700">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Upcoming Events
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Join our events to learn from industry experts, network with professionals, 
              and stay ahead of technology trends.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for events, topics, or speakers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-4 justify-center">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            {eventCategories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name} {category.count > 0 && `(${category.count})`}
              </option>
            ))}
          </select>
          
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-4 py-2 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            {eventTypes.map((type) => (
              <option key={type.id} value={type.id}>
                {type.type} {type.count > 0 && `(${type.count})`}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Featured Events */}
      <div className="container mx-auto px-4 py-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white text-center mb-12"
        >
          Featured Events
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {upcomingEvents.filter(event => event.featured).map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-800/50 border border-cyan-400/30 rounded-lg p-6 hover:border-cyan-400/50 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                    Featured
                  </span>
                  <span className="px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-full">
                    {event.category}
                  </span>
                </div>
                <span className="text-2xl font-bold text-cyan-400">{event.price}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3">{event.title}</h3>
              <p className="text-slate-300 mb-4">{event.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center space-x-2 text-sm text-slate-400">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(event.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-slate-400">
                  <Clock className="w-4 h-4" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-slate-400">
                  <MapPin className="w-4 h-4" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-slate-400">
                  <Users className="w-4 h-4" />
                  <span>{event.attendees}/{event.maxAttendees}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {event.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">
                    {tag}
                  </span>
                ))}
              </div>
              
              <button className="w-full px-4 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors font-medium">
                Register Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* All Upcoming Events */}
      <div className="container mx-auto px-4 py-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white text-center mb-12"
        >
          All Upcoming Events
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-cyan-400/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-full">
                  {event.category}
                </span>
                <span className="text-lg font-bold text-cyan-400">{event.price}</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
              <p className="text-slate-300 mb-4 line-clamp-3">{event.description}</p>
              
              <div className="space-y-2 mb-4 text-sm text-slate-400">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(event.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>{event.location}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {event.tags.slice(0, 2).map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">
                    {tag}
                  </span>
                ))}
              </div>
              
              <button className="w-full px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Past Events */}
      <div className="container mx-auto px-4 py-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white text-center mb-12"
        >
          Past Events
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pastEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-full">
                  {event.category}
                </span>
                <span className="text-sm text-slate-400">
                  {new Date(event.date).toLocaleDateString()}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
              <p className="text-slate-300 mb-4">{event.description}</p>
              
              <div className="flex items-center space-x-4 mb-4 text-sm text-slate-400">
                <span className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>{event.attendees} attendees</span>
                </span>
                <span className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{event.duration}</span>
                </span>
              </div>
              
              <div className="flex space-x-2">
                <button className="flex-1 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors text-sm">
                  Watch Recording
                </button>
                <button className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors text-sm">
                  Download Slides
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Host Your Event with Us
          </h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Interested in hosting an event or webinar? We provide the platform, 
            technology, and support to make your event a success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors font-medium">
              Host an Event
            </button>
            <button className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors font-medium">
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}