import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  ArrowRight, 
  Star,
  TrendingUp,
  Globe,
  Zap,
  Brain,
  Shield,
  Cloud
} from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'AI & Quantum Computing Summit 2024',
      date: 'March 15-17, 2024',
      time: '9:00 AM - 6:00 PM',
      location: 'San Francisco, CA',
      type: 'Conference',
      category: 'AI & Quantum',
      description: 'Join industry leaders and researchers for three days of cutting-edge discussions on AI and quantum computing.',
      attendees: '500+',
      price: 'Free',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: true
    },
    {
      id: 2,
      title: 'Cybersecurity Workshop Series',
      date: 'March 22, 2024',
      time: '2:00 PM - 5:00 PM',
      location: 'Virtual Event',
      type: 'Workshop',
      category: 'Cybersecurity',
      description: 'Hands-on workshop covering the latest cybersecurity threats and defense strategies.',
      attendees: '100',
      price: '$99',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false
    },
    {
      id: 3,
      title: 'Digital Transformation Webinar',
      date: 'March 28, 2024',
      time: '1:00 PM - 2:30 PM',
      location: 'Virtual Event',
      type: 'Webinar',
      category: 'Digital Transformation',
      description: 'Learn how to successfully navigate your organization through digital transformation.',
      attendees: '250',
      price: 'Free',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false
    },
    {
      id: 4,
      title: 'Cloud & DevOps Meetup',
      date: 'April 5, 2024',
      time: '6:00 PM - 9:00 PM',
      location: 'New York, NY',
      type: 'Meetup',
      category: 'Cloud & DevOps',
      description: 'Network with cloud and DevOps professionals while learning about the latest tools and practices.',
      attendees: '75',
      price: 'Free',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false
    }
  ];

  const eventCategories = [
    { name: 'All Events', icon: Calendar, count: upcomingEvents.length },
    { name: 'AI & Quantum', icon: Brain, count: upcomingEvents.filter(e => e.category === 'AI & Quantum').length },
    { name: 'Cybersecurity', icon: Shield, count: upcomingEvents.filter(e => e.category === 'Cybersecurity').length },
    { name: 'Digital Transformation', icon: TrendingUp, count: upcomingEvents.filter(e => e.category === 'Digital Transformation').length },
    { name: 'Cloud & DevOps', icon: Cloud, count: upcomingEvents.filter(e => e.category === 'Cloud & DevOps').length }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="px-4 mb-20">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/10 text-zion-cyan rounded-full text-sm font-medium mb-6">
              <Calendar className="w-4 h-4 mr-2"/>
              Events & Webinars
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our Technology Events
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Connect with industry experts, learn about cutting-edge technologies, and network with like-minded professionals
            </p>
          </motion.div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="px-4 mb-16">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {eventCategories.map((category, index) => (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center gap-3 px-6 py-3 bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-slate-light/20 rounded-xl text-zion-slate-light hover:text-zion-cyan hover:border-zion-cyan/30 transition-all duration-300"
              >
                <category.icon className="w-5 h-5" />
                <span className="font-medium">{category.name}</span>
                <span className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">
                  {category.count}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Event */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          {upcomingEvents.filter(event => event.featured).map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden rounded-3xl"
            >
              <div className="absolute inset-0">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
              </div>
              
              <div className="relative p-8 md:p-12 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-zion-cyan text-black text-sm font-medium rounded-full">
                    Featured Event
                  </span>
                  <span className="px-3 py-1 bg-zion-purple/80 text-white text-sm font-medium rounded-full">
                    {event.type}
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{event.title}</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-zion-cyan" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-zion-cyan" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-zion-cyan" />
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <p className="text-lg text-zion-slate-light mb-6 max-w-2xl">
                  {event.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-300 transform hover:scale-105"
                  >
                    Register Now
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <button className="inline-flex items-center gap-2 px-8 py-3 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-xl hover:border-zion-cyan hover:bg-zion-cyan/10 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* All Events Grid */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Upcoming Events</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover our upcoming events, webinars, and workshops designed to keep you ahead of the curve
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-slate-light/20 rounded-2xl overflow-hidden hover:border-zion-cyan/30 transition-all duration-300 group"
              >
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-zion-cyan/90 text-black text-sm font-medium rounded-full">
                      {event.category}
                    </span>
                  </div>
                  {event.featured && (
                    <div className="absolute top-4 right-4">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-zion-purple/20 text-zion-purple text-xs font-medium rounded-full">
                      {event.type}
                    </span>
                    <span className="text-zion-slate-light text-sm">{event.price}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-zion-slate-light text-sm">
                      <Calendar className="w-4 h-4 text-zion-cyan" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-zion-slate-light text-sm">
                      <Clock className="w-4 h-4 text-zion-cyan" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-zion-slate-light text-sm">
                      <MapPin className="w-4 h-4 text-zion-cyan" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-zion-slate-light text-sm">
                      <Users className="w-4 h-4 text-zion-cyan" />
                      <span>{event.attendees} attendees</span>
                    </div>
                  </div>
                  
                  <p className="text-zion-slate-light mb-4 line-clamp-3">
                    {event.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-zion-cyan hover:text-white transition-colors duration-300"
                    >
                      Register Now
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-zion-cyan/10 to-zion-blue/10 border border-zion-cyan/20 rounded-3xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated on Upcoming Events
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Get notified about new events, early bird discounts, and exclusive invitations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-zion-slate-dark border border-zion-slate-light/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Host Your Event */}
      <section className="px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Host Your Event With Us
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Interested in hosting a technology event, workshop, or conference? 
              We'd love to collaborate and help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-300 transform hover:scale-105"
              >
                Get in Touch
              </Link>
              <Link
                to="/services"
                className="px-8 py-3 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
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
