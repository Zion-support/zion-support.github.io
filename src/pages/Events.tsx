import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  ArrowRight,
  Mail,
  Globe,
  Star
} from 'lucide-react';

export default function Events() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Events', count: 12 },
    { id: 'webinars', name: 'Webinars', count: 5 },
    { id: 'conferences', name: 'Conferences', count: 3 },
    { id: 'workshops', name: 'Workshops', count: 4 }
  ];

  const events = [
    {
      id: 1,
      title: "AI & Machine Learning Summit 2025",
      description: "Join industry leaders and experts for a comprehensive exploration of the latest developments in AI and machine learning technologies.",
      date: "March 15-17, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "San Francisco, CA",
      category: "conferences",
      attendees: "500+",
      price: "Free",
      featured: true,
      image: "/images/events/ai-summit.jpg"
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices Workshop",
      description: "Learn essential cybersecurity strategies and best practices to protect your organization from evolving threats.",
      date: "February 28, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Virtual Event",
      category: "workshops",
      attendees: "100",
      price: "$99",
      featured: false,
      image: "/images/events/cybersecurity-workshop.jpg"
    },
    {
      id: 3,
      title: "Cloud Migration Strategies Webinar",
      description: "Discover proven strategies for successful cloud migration and optimization for your business infrastructure.",
      date: "February 20, 2025",
      time: "1:00 PM - 2:30 PM",
      location: "Virtual Event",
      category: "webinars",
      attendees: "250",
      price: "Free",
      featured: false,
      image: "/images/events/cloud-migration.jpg"
    },
    {
      id: 4,
      title: "Blockchain & Web3 Innovation Conference",
      description: "Explore the future of blockchain technology and Web3 innovations with industry pioneers and thought leaders.",
      date: "April 10-12, 2025",
      time: "10:00 AM - 7:00 PM",
      location: "New York, NY",
      category: "conferences",
      attendees: "300+",
      price: "$299",
      featured: true,
      image: "/images/events/blockchain-conference.jpg"
    },
    {
      id: 5,
      title: "Data Science & Analytics Workshop",
      description: "Hands-on workshop covering data analysis, visualization, and machine learning techniques for business intelligence.",
      date: "March 8, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "Austin, TX",
      category: "workshops",
      attendees: "75",
      price: "$149",
      featured: false,
      image: "/images/events/data-science-workshop.jpg"
    },
    {
      id: 6,
      title: "Digital Transformation Strategies",
      description: "Learn how to successfully navigate digital transformation and leverage technology for business growth.",
      date: "February 25, 2025",
      time: "11:00 AM - 12:30 PM",
      location: "Virtual Event",
      category: "webinars",
      attendees: "200",
      price: "Free",
      featured: false,
      image: "/images/events/digital-transformation.jpg"
    }
  ];

  const filteredEvents = selectedCategory === 'all' 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full mb-6">
            <Calendar className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Upcoming Events
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Join us for exclusive events, webinars, workshops, and conferences 
            featuring industry experts and cutting-edge technology insights.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg'
                    : 'bg-zinc-800/50 text-zion-slate-light hover:bg-zinc-700/50 hover:text-white'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </motion.div>

        {/* Events Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              className="bg-zinc-800/50 backdrop-blur-sm border border-zion-cyan/20 rounded-lg overflow-hidden hover:border-zion-cyan/40 transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
            >
              {/* Event Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 flex items-center justify-center">
                <Calendar className="w-16 h-16 text-zion-cyan/50" />
              </div>

              {/* Event Content */}
              <div className="p-6">
                {event.featured && (
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-xs text-yellow-400 font-medium">Featured Event</span>
                  </div>
                )}

                <h3 className="text-xl font-semibold text-white mb-3">{event.title}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-zion-slate-light text-sm">
                    <Calendar className="w-4 h-4 mr-2 text-zion-cyan" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-zion-slate-light text-sm">
                    <Clock className="w-4 h-4 mr-2 text-zion-cyan" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-zion-slate-light text-sm">
                    <MapPin className="w-4 h-4 mr-2 text-zion-cyan" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-zion-slate-light text-sm">
                    <Users className="w-4 h-4 mr-2 text-zion-cyan" />
                    {event.attendees} attendees
                  </div>
                </div>

                <p className="text-zion-slate-light text-sm mb-4 line-clamp-3">
                  {event.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-zion-cyan font-semibold">{event.price}</span>
                  <Link 
                    to={`/events/${event.id}`}
                    className="inline-flex items-center text-zion-cyan hover:text-white transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Never miss an important event. Subscribe to our newsletter and get notified about upcoming events, 
              webinars, and exclusive content.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg bg-zinc-800/50 border border-zion-cyan/20 text-white placeholder-zion-slate-light focus:border-zion-cyan/40 focus:outline-none"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-medium rounded-lg hover:scale-105 transition-transform">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <div className="bg-zinc-800/30 backdrop-blur-sm border border-zion-cyan/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Host Your Event With Us</h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Interested in hosting a technology event, workshop, or conference? 
              We'd love to collaborate and help bring your vision to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:scale-105 transition-transform"
              >
                Get in Touch
              </Link>
              <Link 
                to="/services" 
                className="inline-flex items-center px-6 py-3 bg-zinc-800/50 text-white rounded-lg font-medium hover:bg-zinc-700/50 transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
