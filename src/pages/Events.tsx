import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Search, Brain, Shield, Cloud, TrendingUp, Zap, Globe, BookOpen, MapPin, Clock, Users, ArrowRight } from 'lucide-react';

const Events = () => {
  const [selectedType, setSelectedType] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const events = [
    {
      id: 1,
      title: "AI & Machine Learning Summit 2025",
      description: "Join industry leaders for insights into the latest AI developments and their business applications.",
      type: "Conference",
      category: "AI & ML",
      status: "upcoming",
      date: "2025-03-15",
      time: "09:00 AM",
      location: "San Francisco, CA",
      speakers: ["Dr. Sarah Chen", "Marcus Rodriguez", "Dr. Elena Petrova"],
      attendees: 250,
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "Cybersecurity Workshop Series",
      description: "Hands-on workshops covering the latest cybersecurity threats and defense strategies.",
      type: "Workshop",
      category: "Cybersecurity",
      status: "upcoming",
      date: "2025-02-28",
      time: "02:00 PM",
      location: "Virtual",
      speakers: ["Alex Thompson", "Dr. Michael Chang"],
      attendees: 75,
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Quantum Computing Innovation Forum",
      description: "Explore the future of quantum computing and its potential impact on various industries.",
      type: "Forum",
      category: "AI & ML",
      status: "upcoming",
      date: "2025-04-10",
      time: "10:00 AM",
      location: "Boston, MA",
      speakers: ["Dr. Sarah Chen", "James Wilson"],
      attendees: 120,
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "Cloud & DevOps Best Practices",
      description: "Learn from experts about modern cloud architecture and DevOps methodologies.",
      type: "Webinar",
      category: "Cloud & DevOps",
      status: "past",
      date: "2025-01-20",
      time: "01:00 PM",
      location: "Virtual",
      speakers: ["Marcus Rodriguez", "Alex Thompson"],
      attendees: 200,
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "Data Analytics & Business Intelligence",
      description: "Discover how data analytics can drive business decisions and create competitive advantages.",
      type: "Conference",
      category: "Data Analytics",
      status: "past",
      date: "2025-01-10",
      time: "09:00 AM",
      location: "New York, NY",
      speakers: ["Dr. Elena Petrova", "James Wilson"],
      attendees: 180,
      image: "/api/placeholder/400/250"
    }
  ];

  const filteredEvents = events.filter(event => {
    const matchesType = selectedType === 'All' || event.type === selectedType;
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    const matchesStatus = selectedStatus === 'All' || event.status === selectedStatus;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.speakers.some(speaker => speaker.toLowerCase().includes(searchTerm.toLowerCase()));

    return matchesType && matchesCategory && matchesStatus && matchesSearch;
  });

  const upcomingEvents = filteredEvents.filter(event => event.status === 'upcoming');
  const pastEvents = filteredEvents.filter(event => event.status === 'past');

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & ML': return Brain;
      case 'Cybersecurity': return Shield;
      case 'Cloud & DevOps': return Cloud;
      case 'Data Analytics': return TrendingUp;
      case 'IoT & Edge': return Zap;
      case 'Digital Transformation': return Globe;
      default: return BookOpen;
    }
  };

  const getStatusBadge = (status: string) => {
    if (status === 'upcoming') {
      return <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">Upcoming</span>;
    } else {
      return <span className="px-3 py-1 bg-gray-500/20 text-gray-400 text-xs rounded-full border border-gray-500/30">Past</span>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-cyan-500/20 text-cyan-400 px-6 py-3 rounded-full border border-cyan-500/30 mb-6">
              <Calendar className="w-5 h-5" />
              <span className="font-medium">Events & Webinars</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our Events
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Discover the latest technology trends, learn from industry experts, and network with
              professionals at our comprehensive events, workshops, and webinars.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-2xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {/* Search */}
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search events..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
              </div>

              {/* Event Type Filter */}
              <div>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-3 py-3 bg-gray-700/50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="All">All Types</option>
                  <option value="Conference">Conference</option>
                  <option value="Workshop">Workshop</option>
                  <option value="Webinar">Webinar</option>
                  <option value="Forum">Forum</option>
                </select>
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-3 bg-gray-700/50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="All">All Categories</option>
                  <option value="AI & ML">AI & ML</option>
                  <option value="Cybersecurity">Cybersecurity</option>
                  <option value="Cloud & DevOps">Cloud & DevOps</option>
                  <option value="Data Analytics">Data Analytics</option>
                  <option value="IoT & Edge">IoT & Edge</option>
                  <option value="Digital Transformation">Digital Transformation</option>
                </select>
              </div>

              {/* Status Filter */}
              <div>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="w-full px-3 py-3 bg-gray-700/50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="All">All Status</option>
                  <option value="upcoming">Upcoming</option>
                  <option value="past">Past</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      {upcomingEvents.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
            >
              Upcoming Events
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => {
                const CategoryIcon = getCategoryIcon(event.category);
                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gray-800/50 rounded-xl overflow-hidden hover:bg-gray-800/70 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
                  >
                    {/* Event Image */}
                    <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                      <CategoryIcon className="w-16 h-16 text-cyan-400" />
                    </div>

                    {/* Event Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        {getStatusBadge(event.status)}
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                          {event.type}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-2">{event.description}</p>

                      {/* Event Details */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(event.date)}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Clock className="w-4 h-4" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Users className="w-4 h-4" />
                          <span>{event.attendees} attendees</span>
                        </div>
                      </div>

                      {/* Speakers */}
                      <div className="mb-4">
                        <p className="text-sm text-gray-400 mb-2">Speakers:</p>
                        <div className="flex flex-wrap gap-2">
                          {event.speakers.map((speaker, speakerIndex) => (
                            <span
                              key={speakerIndex}
                              className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                            >
                              {speaker}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Register Button */}
                      <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2">
                        Register Now
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Past Events */}
      {pastEvents.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
            >
              Past Events
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event, index) => {
                const CategoryIcon = getCategoryIcon(event.category);
                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gray-800/50 rounded-xl overflow-hidden opacity-75"
                  >
                    {/* Event Image */}
                    <div className="h-48 bg-gradient-to-br from-gray-500/20 to-gray-600/20 flex items-center justify-center">
                      <CategoryIcon className="w-16 h-16 text-gray-400" />
                    </div>

                    {/* Event Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        {getStatusBadge(event.status)}
                        <span className="px-3 py-1 bg-gray-500/20 text-gray-400 text-xs rounded-full">
                          {event.type}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-2">{event.description}</p>

                      {/* Event Details */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(event.date)}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Clock className="w-4 h-4" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Users className="w-4 h-4" />
                          <span>{event.attendees} attendees</span>
                        </div>
                      </div>

                      {/* Speakers */}
                      <div className="mb-4">
                        <p className="text-sm text-gray-400 mb-2">Speakers:</p>
                        <div className="flex flex-wrap gap-2">
                          {event.speakers.map((speaker, speakerIndex) => (
                            <span
                              key={speakerIndex}
                              className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                            >
                              {speaker}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* View Recording Button */}
                      <button className="w-full bg-gray-600 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300 flex items-center justify-center gap-2">
                        View Recording
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Stay Updated with Our Events
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-300 mb-8"
          >
            Get notified about upcoming events, workshops, and webinars
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button className="px-6 py-3 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition-colors">
              Subscribe
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Events;
