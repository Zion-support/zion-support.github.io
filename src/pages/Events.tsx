import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
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
    }
  ];

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

  return (
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
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-cyan-400" />
              <span className="text-gray-300">Filter by:</span>
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

          {searchFilteredEvents.length === 0 && (
            <div className="text-center py-12">
              <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-400 text-lg">No events found matching your criteria.</p>
              <p className="text-gray-500 mt-2">Try adjusting your filters or search terms.</p>
            </div>
          )}
        </div>
      </section>

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
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

