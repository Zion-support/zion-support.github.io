import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Calendar,
  Clock,
  MapPin,
  Users,
  Star,
  ArrowRight,
  Search,
  Filter,
  BookOpen,
  Video,
  Globe,
  TrendingUp,
  Zap,
  Brain,
  Shield,
  Cloud,
  CheckCircle
} from 'lucide-react';

export default function Events() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDate, setSelectedDate] = useState('all');

  const eventCategories = [
    { id: 'all', name: 'All Events', count: 24 },
    { id: 'webinars', name: 'Webinars', count: 8 },
    { id: 'workshops', name: 'Workshops', count: 6 },
    { id: 'conferences', name: 'Conferences', count: 4 },
    { id: 'networking', name: 'Networking', count: 3 },
    { id: 'training', name: 'Training', count: 3 }
  ];

  const dateFilters = [
    { id: 'all', name: 'All Dates' },
    { id: 'this-week', name: 'This Week' },
    { id: 'this-month', name: 'This Month' },
    { id: 'next-month', name: 'Next Month' }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "AI & Machine Learning Workshop",
      category: "workshops",
      date: "December 15, 2024",
      time: "10:00 AM - 2:00 PM EST",
      location: "Virtual Event",
      description: "Learn the fundamentals of AI and machine learning with hands-on exercises and real-world applications.",
      attendees: 45,
      maxAttendees: 50,
      featured: true,
      image: "/images/events/ai-workshop.jpg",
      speakers: ["Dr. Sarah Chen", "Prof. Michael Rodriguez"],
      tags: ["AI", "Machine Learning", "Workshop", "Beginner"]
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices Webinar",
      category: "webinars",
      date: "December 18, 2024",
      time: "2:00 PM - 3:30 PM EST",
      location: "Virtual Event",
      description: "Discover essential cybersecurity practices to protect your business from evolving threats.",
      attendees: 120,
      maxAttendees: 200,
      featured: false,
      image: "/images/events/cybersecurity-webinar.jpg",
      speakers: ["Alex Thompson", "Lisa Park"],
      tags: ["Cybersecurity", "Best Practices", "Webinar", "Intermediate"]
    },
    {
      id: 3,
      title: "Cloud Migration Strategies Conference",
      category: "conferences",
      date: "December 22-23, 2024",
      time: "9:00 AM - 5:00 PM EST",
      location: "New York, NY",
      description: "Two-day conference covering cloud migration strategies, best practices, and case studies.",
      attendees: 85,
      maxAttendees: 150,
      featured: true,
      image: "/images/events/cloud-conference.jpg",
      speakers: ["Dr. James Wilson", "Maria Garcia", "David Kim"],
      tags: ["Cloud Computing", "Migration", "Conference", "Advanced"]
    },
    {
      id: 4,
      title: "Digital Marketing Masterclass",
      category: "training",
      date: "December 25, 2024",
      time: "11:00 AM - 4:00 PM EST",
      location: "Virtual Event",
      description: "Master digital marketing strategies including SEO, social media, and content marketing.",
      attendees: 65,
      maxAttendees: 80,
      featured: false,
      image: "/images/events/marketing-masterclass.jpg",
      speakers: ["Jennifer Lee", "Robert Davis"],
      tags: ["Digital Marketing", "SEO", "Social Media", "Training"]
    },
    {
      id: 5,
      title: "Blockchain Technology Summit",
      category: "conferences",
      date: "January 5-6, 2025",
      time: "9:00 AM - 6:00 PM EST",
      location: "San Francisco, CA",
      description: "Explore the future of blockchain technology with industry leaders and innovators.",
      attendees: 200,
      maxAttendees: 300,
      featured: true,
      image: "/images/events/blockchain-summit.jpg",
      speakers: ["Dr. Elena Rodriguez", "Mark Johnson", "Sarah Chen"],
      tags: ["Blockchain", "Technology", "Summit", "Advanced"]
    },
    {
      id: 6,
      title: "Data Science Networking Mixer",
      category: "networking",
      date: "January 8, 2025",
      time: "6:00 PM - 9:00 PM EST",
      location: "Boston, MA",
      description: "Connect with fellow data scientists, researchers, and industry professionals.",
      attendees: 40,
      maxAttendees: 60,
      featured: false,
      image: "/images/events/data-science-mixer.jpg",
      speakers: [],
      tags: ["Networking", "Data Science", "Professional Development"]
    }
  ];

  const filteredEvents = upcomingEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    
    // Simple date filtering logic
    let matchesDate = true;
    if (selectedDate === 'this-week') {
      // Logic for this week filtering
      matchesDate = true; // Simplified for now
    } else if (selectedDate === 'this-month') {
      // Logic for this month filtering
      matchesDate = true; // Simplified for now
    } else if (selectedDate === 'next-month') {
      // Logic for next month filtering
      matchesDate = true; // Simplified for now
    }
    
    return matchesSearch && matchesCategory && matchesDate;
  });

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'webinars': return Video;
      case 'workshops': return BookOpen;
      case 'conferences': return Users;
      case 'networking': return Globe;
      case 'training': return TrendingUp;
      default: return Calendar;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'webinars': return 'from-blue-500 to-cyan-500';
      case 'workshops': return 'from-purple-500 to-pink-500';
      case 'conferences': return 'from-green-500 to-emerald-500';
      case 'networking': return 'from-orange-500 to-red-500';
      case 'training': return 'from-indigo-500 to-purple-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 rounded-full">
                <Calendar className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Upcoming <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Events</span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Join us for exciting webinars, workshops, conferences, and networking events. Learn from industry experts and connect with fellow professionals.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search events, topics, or speakers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md border border-blue-400/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {eventCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-500 text-white'
                      : 'bg-white/10 text-zion-slate-light hover:bg-white/20'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Date Filter */}
            <div className="flex items-center gap-4">
              <select
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="bg-zinc-700/50 text-white border border-blue-400/20 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {dateFilters.map(filter => (
                  <option key={filter.id} value={filter.id}>
                    {filter.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-16">
              <Calendar className="w-16 h-16 text-zion-slate-light mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No events found</h3>
              <p className="text-zion-slate-light mb-4">Try adjusting your search criteria or browse all events</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedDate('all');
                }}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  className="bg-zinc-800/50 rounded-lg border border-zinc-700/50 overflow-hidden hover:border-blue-400/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Event Header */}
                  <div className={`bg-gradient-to-r ${getCategoryColor(event.category)} p-6 text-center`}>
                    <div className="flex justify-center mb-3">
                      <div className="bg-white/20 p-3 rounded-full">
                        {React.createElement(getCategoryIcon(event.category), { className: "w-8 h-8 text-white" })}
                      </div>
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2">{event.title}</h3>
                    {event.featured && (
                      <span className="bg-yellow-500/20 text-yellow-300 text-xs px-2 py-1 rounded-full">
                        Featured Event
                      </span>
                    )}
                  </div>
                  
                  {/* Event Details */}
                  <div className="p-6">
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-zion-slate-light">
                        <Calendar className="w-4 h-4 mr-2 text-blue-400" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center text-zion-slate-light">
                        <Clock className="w-4 h-4 mr-2 text-blue-400" />
                        <span className="text-sm">{event.time}</span>
                      </div>
                      <div className="flex items-center text-zion-slate-light">
                        <MapPin className="w-4 h-4 mr-2 text-blue-400" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                      <div className="flex items-center text-zion-slate-light">
                        <Users className="w-4 h-4 mr-2 text-blue-400" />
                        <span className="text-sm">{event.attendees}/{event.maxAttendees} attendees</span>
                      </div>
                    </div>
                    
                    <p className="text-zion-slate-light text-sm mb-4">{event.description}</p>
                    
                    {/* Speakers */}
                    {event.speakers.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-zion-cyan font-semibold text-sm mb-2">Speakers:</h4>
                        <div className="flex flex-wrap gap-2">
                          {event.speakers.map((speaker, idx) => (
                            <span key={idx} className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">
                              {speaker}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Tags */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {event.tags.map((tag, idx) => (
                          <span key={idx} className="text-xs bg-zinc-700/50 text-zion-slate-light px-2 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Action Button */}
                    <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-2 px-4 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center gap-2">
                      Register Now
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated on Upcoming Events
            </h2>
            <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Get notified about new events, early bird discounts, and exclusive invitations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-4 py-3 bg-white/10 border border-blue-400/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Host Your Event With Us
            </h2>
            <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Interested in hosting a technology event, workshop, or conference? 
              We'd love to collaborate and help bring your vision to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:scale-105 transition-transform">
                Get in Touch
              </Link>
              <Link to="/services" className="px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-colors">
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}