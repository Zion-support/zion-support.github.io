import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  ExternalLink, 
  Search, 
  Filter,
  Star,
  TrendingUp,
  Award,
  Globe,
  Zap,
  Building,
  Video,
  BookOpen,
  Shield
} from 'lucide-react';

const Events = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', icon: Globe, count: 45 },
    { id: 'technology', name: 'Technology', icon: Zap, count: 18 },
    { id: 'ai', name: 'AI & Machine Learning', icon: TrendingUp, count: 12 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 8 },
    { id: 'business', name: 'Business & Strategy', icon: Building, count: 7 }
  ];

  const eventTypes = [
    { id: 'all', name: 'All Types', icon: Calendar },
    { id: 'conference', name: 'Conferences', icon: Users },
    { id: 'webinar', name: 'Webinars', icon: Video },
    { id: 'workshop', name: 'Workshops', icon: BookOpen },
    { id: 'networking', name: 'Networking', icon: Globe }
  ];

  const events = [
    {
      id: 1,
      title: "AI Innovation Summit 2024",
      description: "Join industry leaders and AI experts for a comprehensive exploration of artificial intelligence trends, breakthroughs, and future applications.",
      category: "ai",
      type: "conference",
      date: "2024-03-15",
      time: "9:00 AM - 6:00 PM",
      location: "San Francisco, CA",
      attendees: "500+",
      price: "Free",
      featured: true,
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices Workshop",
      description: "Hands-on workshop covering the latest cybersecurity threats, defense strategies, and compliance requirements for modern businesses.",
      category: "cybersecurity",
      type: "workshop",
      date: "2024-03-20",
      time: "2:00 PM - 5:00 PM",
      location: "Virtual",
      attendees: "100",
      price: "$99",
      featured: true,
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Digital Transformation Strategies",
      description: "Learn how leading companies are leveraging technology to transform their operations and gain competitive advantages.",
      category: "business",
      type: "webinar",
      date: "2024-03-25",
      time: "1:00 PM - 2:30 PM",
      location: "Virtual",
      attendees: "250",
      price: "Free",
      featured: false,
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "Tech Networking Mixer",
      description: "Connect with fellow technology professionals, entrepreneurs, and industry experts in a relaxed networking environment.",
      category: "technology",
      type: "networking",
      date: "2024-04-01",
      time: "6:00 PM - 9:00 PM",
      location: "New York, NY",
      attendees: "150",
      price: "$25",
      featured: false,
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "Quantum Computing Applications",
      description: "Explore the practical applications of quantum computing in finance, healthcare, and scientific research.",
      category: "technology",
      type: "webinar",
      date: "2024-04-05",
      time: "3:00 PM - 4:30 PM",
      location: "Virtual",
      attendees: "300",
      price: "Free",
      featured: false,
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "Startup Pitch Competition",
      description: "Watch innovative startups pitch their ideas to a panel of investors and industry experts.",
      category: "business",
      type: "conference",
      date: "2024-04-10",
      time: "10:00 AM - 4:00 PM",
      location: "Austin, TX",
      attendees: "200",
      price: "$50",
      featured: false,
      image: "/api/placeholder/400/250"
    }
  ];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const matchesType = selectedType === 'all' || event.type === selectedType;
    return matchesSearch && matchesCategory && matchesType;
  });

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Header */}
      <div className="bg-gradient-to-r from-zion-blue via-zion-purple to-zion-cyan text-white py-20">
        <div className="container-responsive text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Events & Webinars
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zion-cyan/90 max-w-3xl mx-auto"
          >
            Join us for exclusive events, workshops, and webinars featuring industry experts and cutting-edge insights
          </motion.p>
        </div>
      </div>

      <div className="container-responsive py-16">
        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-cyan w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-cyan/60 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-zion-cyan text-futuristic border-zion-cyan'
                      : 'bg-white/5 text-white border-zion-cyan/30 hover:bg-white/10'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                  <span className="text-xs opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Event Type Filter */}
          <div className="mt-6 flex flex-wrap gap-2">
            {eventTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
                  selectedType === type.id
                    ? 'bg-zion-cyan text-futuristic border-zion-cyan'
                    : 'bg-white/5 text-white border-zion-cyan/30 hover:bg-white/10'
                }`}
              >
                <type.icon className="w-4 h-4" />
                <span>{type.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Events */}
        {searchTerm === '' && selectedCategory === 'all' && selectedType === 'all' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Featured Events</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {events.filter(event => event.featured).map((event) => (
                <motion.div
                  key={event.id}
                  whileHover={{ y: -5 }}
                  className="bg-white/5 backdrop-blur-sm border border-zion-cyan/20 rounded-xl overflow-hidden hover:bg-white/10 transition-colors"
                >
                  <div className="w-full h-48 bg-gradient-to-br from-zion-blue/20 to-zion-purple/20 flex items-center justify-center">
                    <Calendar className="w-16 h-16 text-zion-cyan" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full capitalize">
                        {event.type}
                      </span>
                      <span className="px-2 py-1 bg-zion-blue/20 text-zion-blue text-xs rounded-full capitalize">
                        {event.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                    <p className="text-zion-cyan/80 mb-4">{event.description}</p>
                    
                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex items-center gap-2 text-zion-cyan/70">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-zion-cyan/70">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-zion-cyan/70">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-zion-cyan/70">
                        <Users className="w-4 h-4" />
                        <span>{event.attendees}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-zion-cyan font-semibold">{event.price}</span>
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-zion-cyan text-futuristic font-semibold rounded-lg hover:bg-zion-cyan/90 transition-colors"
                      >
                        Register Now
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* All Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">
              {searchTerm ? `Search Results (${filteredEvents.length})` : 'All Events'}
            </h2>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="text-zion-cyan hover:text-zion-cyan/80 transition-colors"
              >
                Clear Search
              </button>
            )}
          </div>

          {filteredEvents.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-white/5 backdrop-blur-sm border border-zion-cyan/20 rounded-xl overflow-hidden hover:bg-white/10 transition-colors"
                >
                  <div className="w-full h-40 bg-gradient-to-br from-zion-blue/20 to-zion-purple/20 flex items-center justify-center">
                    <Calendar className="w-12 h-12 text-zion-cyan" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full capitalize">
                        {event.type}
                      </span>
                      <span className="px-2 py-1 bg-zion-blue/20 text-zion-blue text-xs rounded-full capitalize">
                        {event.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{event.title}</h3>
                    <p className="text-zion-cyan/80 text-sm mb-4">{event.description}</p>
                    
                    <div className="space-y-2 mb-4 text-xs">
                      <div className="flex items-center gap-2 text-zion-cyan/70">
                        <Calendar className="w-3 h-3" />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-zion-cyan/70">
                        <MapPin className="w-3 h-3" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-zion-cyan font-semibold text-sm">{event.price}</span>
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-3 py-2 bg-zion-cyan text-futuristic font-semibold rounded-lg hover:bg-zion-cyan/90 transition-colors text-sm"
                      >
                        Register
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Calendar className="w-16 h-16 text-zion-cyan/60 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">No events found</h3>
              <p className="text-zion-cyan/80 mb-6">
                Try adjusting your search terms or browse all categories
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedType('all');
                }}
                className="px-6 py-3 bg-zion-cyan text-futuristic font-semibold rounded-lg hover:bg-zion-cyan/90 transition-colors"
              >
                Browse All Events
              </button>
            </div>
          )}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-zion-blue/20 to-zion-purple/20 border border-zion-cyan/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated on Events
            </h3>
            <p className="text-zion-cyan/90 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive updates about upcoming events, 
              early bird discounts, and exclusive invitations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-cyan/60 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
              <button className="px-6 py-3 bg-zion-cyan text-futuristic font-semibold rounded-lg hover:bg-zion-cyan/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Host Your Event */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Host Your Event With Us
            </h3>
            <p className="text-zion-cyan/90 mb-6 max-w-2xl mx-auto">
              Interested in hosting a technology event, workshop, or conference? 
              We'd love to collaborate and help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-zion-cyan text-futuristic font-semibold rounded-lg hover:bg-zion-cyan/90 transition-colors"
              >
                Get in Touch
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-3 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-futuristic transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Events;
