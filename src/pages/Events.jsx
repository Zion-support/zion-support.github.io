import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  ExternalLink, 
  Filter,
  Search,
  Star,
  TrendingUp,
  Award,
  Globe,
  Building
} from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'AI & Quantum Computing Summit 2025',
    description: 'Join industry leaders for a comprehensive exploration of AI and quantum computing technologies.',
    category: 'Conference',
    date: 'March 15-17, 2025',
    time: '9:00 AM - 6:00 PM EST',
    location: 'Middletown, DE & Virtual',
    capacity: '500 attendees',
    price: '$299',
    earlyBirdPrice: '$199',
    earlyBirdDeadline: 'February 15, 2025',
    speakers: ['Dr. Kleber Santos', 'Dr. Sarah Chen', 'Dr. James Kim'],
    tags: ['AI', 'Quantum Computing', 'Technology Summit'],
    image: '/api/placeholder/400/250',
    isFeatured: true,
    isVirtual: true,
    isInPerson: true
  },
  {
    id: 2,
    title: 'Cybersecurity Workshop Series',
    description: 'Hands-on workshops covering the latest cybersecurity threats and defense strategies.',
    category: 'Workshop',
    date: 'April 5, 2025',
    time: '10:00 AM - 4:00 PM EST',
    location: 'Virtual',
    capacity: '100 attendees',
    price: '$99',
    earlyBirdPrice: '$79',
    earlyBirdDeadline: 'March 20, 2025',
    speakers: ['Alex Thompson', 'Dr. Emily Watson'],
    tags: ['Cybersecurity', 'Workshop', 'Hands-on'],
    image: '/api/placeholder/400/250',
    isFeatured: true,
    isVirtual: true,
    isInPerson: false
  },
  {
    id: 3,
    title: 'Cloud & DevOps Bootcamp',
    description: 'Intensive 3-day bootcamp covering cloud architecture and DevOps best practices.',
    category: 'Bootcamp',
    date: 'May 10-12, 2025',
    time: '9:00 AM - 5:00 PM EST',
    location: 'Middletown, DE',
    capacity: '50 attendees',
    price: '$599',
    earlyBirdPrice: '$499',
    earlyBirdDeadline: 'April 25, 2025',
    speakers: ['Marcus Rodriguez', 'David Kim'],
    tags: ['Cloud Computing', 'DevOps', 'Bootcamp'],
    image: '/api/placeholder/400/250',
    isFeatured: false,
    isVirtual: false,
    isInPerson: true
  },
  {
    id: 4,
    title: 'Digital Transformation Forum',
    description: 'Panel discussions and case studies on successful digital transformation initiatives.',
    category: 'Forum',
    date: 'June 20, 2025',
    time: '1:00 PM - 6:00 PM EST',
    location: 'Virtual',
    capacity: '200 attendees',
    price: 'Free',
    earlyBirdPrice: 'Free',
    earlyBirdDeadline: 'N/A',
    speakers: ['Dr. Kleber Santos', 'Lisa Thompson', 'Robert Wilson'],
    tags: ['Digital Transformation', 'Panel Discussion', 'Free Event'],
    image: '/api/placeholder/400/250',
    isFeatured: false,
    isVirtual: true,
    isInPerson: false
  },
  {
    id: 5,
    title: 'IoT & Edge Computing Symposium',
    description: 'Explore the future of IoT and edge computing with industry experts and researchers.',
    category: 'Symposium',
    date: 'July 15, 2025',
    time: '9:00 AM - 5:00 PM EST',
    location: 'Middletown, DE',
    capacity: '150 attendees',
    price: '$149',
    earlyBirdPrice: '$119',
    earlyBirdDeadline: 'June 30, 2025',
    speakers: ['Dr. Emily Watson', 'Alex Martinez'],
    tags: ['IoT', 'Edge Computing', 'Research'],
    image: '/api/placeholder/400/250',
    isFeatured: false,
    isVirtual: false,
    isInPerson: true
  },
  {
    id: 6,
    title: 'Startup Technology Accelerator',
    description: 'A 2-week intensive program helping startups leverage cutting-edge technology.',
    category: 'Accelerator',
    date: 'August 1-14, 2025',
    time: 'Full-time program',
    location: 'Middletown, DE',
    capacity: '20 startups',
    price: '$2,999',
    earlyBirdPrice: '$2,499',
    earlyBirdDeadline: 'July 15, 2025',
    speakers: ['Dr. Kleber Santos', 'Jennifer Lee', 'Startup Mentors'],
    tags: ['Startup', 'Accelerator', 'Technology'],
    image: '/api/placeholder/400/250',
    isFeatured: true,
    isVirtual: false,
    isInPerson: true
  }
];

const categories = [
  'All Categories',
  'Conference',
  'Workshop',
  'Bootcamp',
  'Forum',
  'Symposium',
  'Accelerator'
];

const locations = [
  'All Locations',
  'Middletown, DE',
  'Virtual',
  'Hybrid'
];

export default function Events() {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory === 'All Categories' || event.category === selectedCategory;
    const matchesLocation = selectedLocation === 'All Locations' || 
      (selectedLocation === 'Virtual' && event.isVirtual) ||
      (selectedLocation === 'Middletown, DE' && event.isInPerson) ||
      (selectedLocation === 'Hybrid' && event.isVirtual && event.isInPerson);
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesLocation && matchesSearch;
  });

  const featuredEvents = filteredEvents.filter(e => e.isFeatured);
  const regularEvents = filteredEvents.filter(e => !e.isFeatured);

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-zion-purple/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl mb-8"
            >
              <Calendar className="w-10 h-10 text-white" />
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Technology
              <span className="text-gradient block">Events</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light leading-relaxed mb-8">
              Join us for cutting-edge technology events, workshops, and conferences. 
              Learn from industry experts, network with peers, and discover the latest innovations.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-zion-cyan">
                <Calendar className="w-4 h-4" />
                <span>6+ Events Annually</span>
              </div>
              <div className="flex items-center gap-2 text-zion-purple">
                <Users className="w-4 h-4" />
                <span>1000+ Attendees</span>
              </div>
              <div className="flex items-center gap-2 text-zion-blue">
                <Globe className="w-4 h-4" />
                <span>Virtual & In-Person</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-zion-blue-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none transition-colors duration-300"
                />
              </div>
              
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 bg-zion-blue-dark/50 border border-zion-cyan/20 rounded-lg text-white focus:border-zion-cyan focus:outline-none transition-colors duration-300"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-4 py-2 bg-zion-blue-dark/50 border border-zion-cyan/20 rounded-lg text-white focus:border-zion-cyan focus:outline-none transition-colors duration-300"
              >
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>
            
            <div className="text-zion-slate-light text-sm">
              Showing {filteredEvents.length} of {events.length} events
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      {featuredEvents.length > 0 && (
        <section className="py-20">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Featured Events</h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Don't miss these highlighted events featuring industry leaders and cutting-edge topics.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl overflow-hidden hover:border-zion-cyan/40 transition-all duration-300 group"
                >
                  <div className="h-48 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 flex items-center justify-center">
                    <div className="text-center">
                      <Calendar className="w-16 h-16 text-zion-cyan mx-auto mb-2" />
                      <p className="text-zion-slate-light text-sm">Event Preview</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                        {event.category}
                      </span>
                      <span className="px-3 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded-full border border-zion-purple/30">
                        Featured
                      </span>
                      {event.isVirtual && (
                        <span className="px-3 py-1 bg-zion-blue/20 text-zion-blue text-xs rounded-full border border-zion-blue/30">
                          Virtual
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                      {event.title}
                    </h3>
                    
                    <p className="text-zion-slate-light mb-6 leading-relaxed">
                      {event.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
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
                        <span>{event.capacity}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <span className="text-zion-cyan font-semibold text-lg">{event.price}</span>
                        {event.earlyBirdPrice !== event.price && (
                          <span className="text-zion-slate-light text-sm line-through ml-2">{event.earlyBirdPrice}</span>
                        )}
                      </div>
                      <div className="text-right">
                        <p className="text-zion-slate-light text-xs">Early Bird until</p>
                        <p className="text-zion-purple text-sm font-medium">{event.earlyBirdDeadline}</p>
                      </div>
                    </div>
                    
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
                    >
                      Register Now
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Events */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">All Events</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Browse through all our upcoming events and find the perfect opportunity 
              to learn, network, and grow your expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                    {event.category}
                  </span>
                  {event.isVirtual && (
                    <span className="px-3 py-1 bg-zion-blue/20 text-zion-blue text-xs rounded-full border border-zion-blue/30">
                      Virtual
                    </span>
                  )}
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3">{event.title}</h3>
                <p className="text-zion-slate-light text-sm mb-4 leading-relaxed line-clamp-3">
                  {event.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-zion-slate-light text-xs">
                    <Calendar className="w-3 h-3 text-zion-cyan" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-zion-slate-light text-xs">
                    <MapPin className="w-3 h-3 text-zion-cyan" />
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-zion-cyan font-semibold">{event.price}</span>
                  <span className="text-zion-slate-light text-xs">{event.capacity}</span>
                </div>
                
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-zion-cyan/20 text-zion-cyan font-medium rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  Learn More
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Host Your Event With Us</h2>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Interested in hosting a technology event, workshop, or conference? 
              We'd love to collaborate and help bring your vision to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
              >
                Get in Touch
              </a>
              <a
                href="/services"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Our Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
