import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Clock, 
  ArrowRight,
  Video,
  Building,
  Globe,
  Mail,
  Phone
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const Events: React.FC = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "AI Innovation Summit 2025",
      date: "March 15-16, 2025",
      location: "Virtual Event",
      description: "Join industry leaders for insights on AI transformation and business innovation. Learn about the latest AI technologies and their practical applications.",
      type: "Conference",
      attendees: "500+",
      duration: "2 days",
      price: "Free",
      featured: true
    },
    {
      id: 2,
      title: "Cybersecurity Workshop",
      date: "April 5, 2025",
      location: "Delaware Tech Hub",
      description: "Hands-on workshop on modern cybersecurity threats and defense strategies. Perfect for IT professionals and security enthusiasts.",
      type: "Workshop",
      attendees: "50",
      duration: "1 day",
      price: "$299",
      featured: false
    },
    {
      id: 3,
      title: "Cloud Migration Webinar",
      date: "April 20, 2025",
      location: "Online",
      description: "Learn best practices for successful cloud migration and optimization. Expert insights on AWS, Azure, and Google Cloud.",
      type: "Webinar",
      attendees: "200+",
      duration: "2 hours",
      price: "Free",
      featured: false
    },
    {
      id: 4,
      title: "Data Science Bootcamp",
      date: "May 10-12, 2025",
      location: "New York, NY",
      description: "Intensive 3-day bootcamp covering machine learning, data analysis, and AI applications. Hands-on projects included.",
      type: "Bootcamp",
      attendees: "30",
      duration: "3 days",
      price: "$1,299",
      featured: true
    },
    {
      id: 5,
      title: "DevOps Best Practices",
      date: "May 25, 2025",
      location: "Online",
      description: "Comprehensive overview of DevOps methodologies, tools, and best practices for modern software development teams.",
      type: "Workshop",
      attendees: "150",
      duration: "1 day",
      price: "$199",
      featured: false
    },
    {
      id: 6,
      title: "Blockchain & Web3 Summit",
      date: "June 15-16, 2025",
      location: "San Francisco, CA",
      description: "Explore the future of blockchain technology, DeFi, NFTs, and Web3 applications. Network with industry pioneers.",
      type: "Conference",
      attendees: "300+",
      duration: "2 days",
      price: "$599",
      featured: true
    }
  ];

  const eventTypes = [
    { id: 'all', name: 'All Events', icon: Calendar, count: upcomingEvents.length },
    { id: 'conference', name: 'Conferences', icon: Users, count: upcomingEvents.filter(e => e.type === 'Conference').length },
    { id: 'workshop', name: 'Workshops', icon: Building, count: upcomingEvents.filter(e => e.type === 'Workshop').length },
    { id: 'webinar', name: 'Webinars', icon: Video, count: upcomingEvents.filter(e => e.type === 'Webinar').length },
    { id: 'bootcamp', name: 'Bootcamps', icon: Globe, count: upcomingEvents.filter(e => e.type === 'Bootcamp').length }
  ];

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'Conference':
        return Users;
      case 'Workshop':
        return Building;
      case 'Webinar':
        return Video;
      case 'Bootcamp':
        return Globe;
      default:
        return Calendar;
    }
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case 'Conference':
        return 'from-blue-500 to-cyan-500';
      case 'Workshop':
        return 'from-green-500 to-emerald-500';
      case 'Webinar':
        return 'from-purple-500 to-pink-500';
      case 'Bootcamp':
        return 'from-orange-500 to-red-500';
      default:
        return 'from-gray-500 to-slate-500';
    }
  };

  return (
    <>
      <SEO 
        title="Upcoming Events | Zion Tech Group"
        description="Join us for industry insights, networking opportunities, and hands-on learning experiences. Register for our upcoming AI, cybersecurity, and technology events."
        keywords="technology events, AI conference, cybersecurity workshop, cloud migration webinar, data science bootcamp, DevOps workshop"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Upcoming
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  {" "}Events
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join us for industry insights, networking opportunities, and hands-on learning experiences
              </p>
            </motion.div>
            
            {/* Event Type Filter */}
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              {eventTypes.map((eventType) => (
                <motion.button
                  key={eventType.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 hover:border-blue-400/50 transition-all duration-300"
                >
                  <eventType.icon className="w-5 h-5" />
                  <span>{eventType.name}</span>
                  <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                    {eventType.count}
                  </span>
                </motion.button>
              ))}
            </div>
            
            {/* Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => {
                const EventIcon = getEventIcon(event.type);
                const eventColor = getEventColor(event.type);
                
                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 ${
                      event.featured ? 'ring-2 ring-blue-400/50' : ''
                    }`}
                  >
                    {event.featured && (
                      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
                        Featured Event
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className={`bg-gradient-to-r ${eventColor} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                        {event.type}
                      </span>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Users className="w-4 h-4 mr-1" />
                        {event.attendees}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3">{event.title}</h3>
                    
                    <div className="space-y-2 mb-4">
                      <p className="text-gray-400 text-sm flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {event.date}
                      </p>
                      <p className="text-gray-400 text-sm flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {event.location}
                      </p>
                      <p className="text-gray-400 text-sm flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {event.duration}
                      </p>
                    </div>
                    
                    <p className="text-gray-300 mb-4 line-clamp-3">{event.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-lg font-bold text-blue-400">{event.price}</span>
                      <EventIcon className="w-6 h-6 text-gray-400" />
                    </div>
                    
                    <Link 
                      to="/contact" 
                      className="inline-flex items-center w-full justify-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                    >
                      Register Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Never miss an important event. Subscribe to our newsletter and get notified about upcoming events, 
              webinars, and exclusive content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        {/* Host Your Event Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Host Your Event With Us</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Interested in hosting a technology event, workshop, or conference? 
              We'd love to collaborate and help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Contact Us
              </Link>
              <a 
                href="mailto:events@ziontechgroup.com" 
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Email Events Team
              </a>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-blue-400 mb-4" />
                <h4 className="text-white font-semibold mb-2">Email</h4>
                <p className="text-gray-300">events@ziontechgroup.com</p>
              </div>
              
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-blue-400 mb-4" />
                <h4 className="text-white font-semibold mb-2">Phone</h4>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-blue-400 mb-4" />
                <h4 className="text-white font-semibold mb-2">Address</h4>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Events;
