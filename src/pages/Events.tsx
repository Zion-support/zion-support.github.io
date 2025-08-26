import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, ExternalLink, Play, ArrowRight } from 'lucide-react';

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const upcomingEvents = [
    {
      id: 1,
      title: "AI in Enterprise: 2025 Trends & Strategies",
      type: "Webinar",
      date: "2025-01-15",
      time: "2:00 PM EST",
      duration: "60 minutes",
      description: "Join our AI experts as they discuss the latest trends in enterprise AI adoption, implementation strategies, and ROI measurement.",
      speakers: ["Dr. Sarah Chen", "Marcus Rodriguez"],
      category: "AI & Machine Learning",
      registrationUrl: "#",
      isFree: true,
      maxAttendees: 500,
      location: "Virtual"
    },
    {
      id: 2,
      title: "Cybersecurity Summit 2025",
      type: "Conference",
      date: "2025-02-20",
      time: "9:00 AM EST",
      duration: "Full Day",
      description: "A comprehensive one-day conference covering the latest cybersecurity threats, defense strategies, and compliance requirements.",
      speakers: ["Alex Thompson", "Dr. Emily Watson", "David Kim"],
      category: "Cybersecurity",
      registrationUrl: "#",
      isFree: false,
      price: "$299",
      maxAttendees: 200,
      location: "San Francisco, CA"
    },
    {
      id: 3,
      title: "Cloud Migration Best Practices",
      type: "Workshop",
      date: "2025-01-28",
      time: "1:00 PM EST",
      duration: "3 hours",
      description: "Hands-on workshop covering cloud migration strategies, cost optimization, and security best practices.",
      speakers: ["David Kim", "Lisa Thompson"],
      category: "Cloud & Infrastructure",
      registrationUrl: "#",
      isFree: false,
      price: "$149",
      maxAttendees: 50,
      location: "Virtual"
    },
    {
      id: 4,
      title: "Digital Transformation Roadmap",
      type: "Webinar",
      date: "2025-02-05",
      time: "3:00 PM EST",
      duration: "90 minutes",
      description: "Learn how to create and execute a successful digital transformation strategy for your organization.",
      speakers: ["Lisa Thompson", "Dr. Sarah Chen"],
      category: "Digital Transformation",
      registrationUrl: "#",
      isFree: true,
      maxAttendees: 300,
      location: "Virtual"
    }
  ];

  const pastEvents = [
    {
      id: 5,
      title: "AI Ethics & Responsible Development",
      type: "Panel Discussion",
      date: "2024-12-10",
      description: "Expert panel discussion on ethical AI development, bias mitigation, and responsible AI deployment.",
      speakers: ["Dr. Emily Watson", "Dr. James Wilson"],
      category: "AI Ethics",
      recordingUrl: "#",
      location: "Virtual"
    },
    {
      id: 6,
      title: "Quantum Computing Workshop",
      type: "Workshop",
      date: "2024-11-25",
      description: "Introduction to quantum computing principles and their applications in AI and cryptography.",
      speakers: ["Dr. James Wilson", "Marcus Rodriguez"],
      category: "Quantum Computing",
      recordingUrl: "#",
      location: "Virtual"
    }
  ];

  const eventCategories = [
    { name: "AI & Machine Learning", count: 8, color: "from-purple-500 to-pink-500" },
    { name: "Cybersecurity", count: 6, color: "from-red-500 to-orange-500" },
    { name: "Cloud & Infrastructure", count: 5, color: "from-blue-500 to-cyan-500" },
    { name: "Digital Transformation", count: 4, color: "from-green-500 to-emerald-500" },
    { name: "Quantum Computing", count: 3, color: "from-indigo-500 to-purple-500" }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const filteredEvents = activeTab === 'upcoming' ? upcomingEvents : pastEvents;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Technology
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Events
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join us for cutting-edge technology events, webinars, workshops, and conferences. 
              Connect with industry experts and stay ahead of the curve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Event Categories</h2>
            <p className="text-lg text-gray-300">Explore events by technology area</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {eventCategories.map((category, index) => (
              <motion.div
                key={category.name}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedCategory(category.name === 'all' ? 'all' : category.name)}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white text-center mb-2">{category.name}</h3>
                <p className="text-cyan-400 text-center font-medium">{category.count} events</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Tabs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-1 border border-white/20">
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  activeTab === 'upcoming'
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Upcoming Events
              </button>
              <button
                onClick={() => setActiveTab('past')}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  activeTab === 'past'
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Past Events
              </button>
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {event.type}
                  </span>
                  {!event.isFree && event.price && (
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium ml-2">
                      {event.price}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">{event.title}</h3>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 mr-2 text-blue-400" />
                    {formatDate(event.date)}
                  </div>
                  {event.time && (
                    <div className="flex items-center text-gray-400 text-sm">
                      <Clock className="w-4 h-4 mr-2 text-cyan-400" />
                      {event.time} ({event.duration})
                    </div>
                  )}
                  <div className="flex items-center text-gray-400 text-sm">
                    <MapPin className="w-4 h-4 mr-2 text-purple-400" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Users className="w-4 h-4 mr-2 text-green-400" />
                    {event.speakers.join(', ')}
                  </div>
                </div>

                <p className="text-gray-300 mb-6 line-clamp-3">{event.description}</p>

                {activeTab === 'upcoming' ? (
                  <Link 
                    to={event.registrationUrl}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium"
                  >
                    Register Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                ) : (
                  <Link 
                    to={event.recordingUrl}
                    className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors duration-300 font-medium"
                  >
                    <Play className="mr-2 h-4 w-4" />
                    Watch Recording
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-white">Stay Updated</h3>
              <p className="text-gray-300 mb-6">
                Subscribe to our newsletter to receive updates about upcoming events, 
                industry insights, and exclusive content.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Subscribe Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Host Your Event With Us</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Interested in hosting a technology event, workshop, or conference? 
              We'd love to collaborate and help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Get in Touch
              </Link>
              <Link 
                to="/services" 
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Events;
