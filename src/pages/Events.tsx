import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, MapPin, Clock, Users, ExternalLink, 
  Filter, Search, Tag, ArrowRight 
} from 'lucide-react';

const Events: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Events', count: 12 },
    { id: 'conferences', name: 'Conferences', count: 4 },
    { id: 'workshops', name: 'Workshops', count: 3 },
    { id: 'webinars', name: 'Webinars', count: 3 },
    { id: 'hackathons', name: 'Hackathons', count: 2 }
  ];

  const events = [
    {
      id: 1,
      title: 'AI & Quantum Computing Summit 2025',
      category: 'conferences',
      date: '2025-03-15',
      time: '09:00 AM - 06:00 PM',
      location: 'San Francisco, CA',
      type: 'In-Person',
      attendees: '500+',
      price: '$299',
      description: 'Join industry leaders and researchers for a comprehensive exploration of AI and quantum computing convergence.',
      tags: ['AI', 'Quantum Computing', 'Research', 'Networking'],
      image: '/events/ai-quantum-summit.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Cybersecurity Workshop Series',
      category: 'workshops',
      date: '2025-03-20',
      time: '10:00 AM - 04:00 PM',
      location: 'Virtual',
      type: 'Online',
      attendees: '100',
      price: 'Free',
      description: 'Hands-on cybersecurity training covering threat detection, incident response, and security best practices.',
      tags: ['Cybersecurity', 'Training', 'Hands-on', 'Free'],
      image: '/events/cybersecurity-workshop.jpg',
      featured: false
    },
    {
      id: 3,
      title: 'Digital Transformation Webinar',
      category: 'webinars',
      date: '2025-03-25',
      time: '02:00 PM - 03:30 PM',
      location: 'Virtual',
      type: 'Online',
      attendees: '200',
      price: 'Free',
      description: 'Learn how to successfully navigate digital transformation in your organization.',
      tags: ['Digital Transformation', 'Strategy', 'Business', 'Free'],
      image: '/events/digital-transformation.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'Green IT Innovation Conference',
      category: 'conferences',
      date: '2025-04-10',
      time: '08:00 AM - 05:00 PM',
      location: 'Seattle, WA',
      type: 'In-Person',
      attendees: '300+',
      price: '$199',
      description: 'Explore sustainable technology solutions and green IT practices for a better future.',
      tags: ['Green IT', 'Sustainability', 'Innovation', 'Networking'],
      image: '/events/green-it-conference.jpg',
      featured: true
    },
    {
      id: 5,
      title: 'AI Hackathon 2025',
      category: 'hackathons',
      date: '2025-04-15',
      time: '48 Hours',
      location: 'Virtual',
      type: 'Online',
      attendees: '150',
      price: 'Free',
      description: 'Build innovative AI solutions and compete for prizes in this exciting hackathon.',
      tags: ['AI', 'Hackathon', 'Competition', 'Free'],
      image: '/events/ai-hackathon.jpg',
      featured: false
    },
    {
      id: 6,
      title: 'Cloud & DevOps Masterclass',
      category: 'workshops',
      date: '2025-04-20',
      time: '09:00 AM - 05:00 PM',
      location: 'Austin, TX',
      type: 'In-Person',
      attendees: '75',
      price: '$149',
      description: 'Master cloud infrastructure and DevOps practices with hands-on training.',
      tags: ['Cloud', 'DevOps', 'Training', 'Hands-on'],
      image: '/events/cloud-devops.jpg',
      featured: false
    }
  ];

  const filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      conferences: 'bg-blue-100 text-blue-800',
      workshops: 'bg-green-100 text-green-800',
      webinars: 'bg-purple-100 text-purple-800',
      hackathons: 'bg-orange-100 text-orange-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Events & Conferences
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
          >
            Join us for cutting-edge technology events, workshops, and conferences 
            that will transform your business and career.
          </motion.p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-20">
              <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No events found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${
                    event.featured ? 'ring-2 ring-blue-500' : ''
                  }`}
                >
                  {/* Event Image */}
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Calendar className="h-16 w-16 text-white" />
                  </div>

                  {/* Event Content */}
                  <div className="p-6">
                    {/* Featured Badge */}
                    {event.featured && (
                      <div className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                        Featured Event
                      </div>
                    )}

                    {/* Category */}
                    <div className={`inline-block ${getCategoryColor(event.category)} text-xs font-semibold px-3 py-1 rounded-full mb-3`}>
                      {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {event.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {event.description}
                    </p>

                    {/* Event Details */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-2" />
                        {formatDate(event.date)}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-2" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="h-4 w-4 mr-2" />
                        {event.attendees} attendees
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {event.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-bold text-blue-600">
                        {event.price}
                      </div>
                      <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                        Register Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Host Your Event With Us
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Looking to host a technology event, conference, or workshop? 
              Partner with Zion Tech Group to create an unforgettable experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Host an Event
                <ExternalLink className="ml-2 h-5 w-5" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Stay Updated on Upcoming Events
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Get notified about new events, early bird discounts, and exclusive invitations.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;