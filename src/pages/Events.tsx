import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  Search, 
  Filter, 
  Star,
  ArrowRight,
  Play,
  Globe,
  Zap,
  Shield,
  Brain,
  Cloud,
  MessageCircle
} from 'lucide-react';

const Events: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const eventCategories = [
    { id: 'all', name: 'All Events', count: 45 },
    { id: 'conferences', name: 'Conferences', count: 12 },
    { id: 'webinars', name: 'Webinars', count: 18 },
    { id: 'workshops', name: 'Workshops', count: 8 },
    { id: 'hackathons', name: 'Hackathons', count: 4 },
    { id: 'networking', name: 'Networking', count: 3 }
  ];

  const events = [
    {
      id: 1,
      title: 'AI & Machine Learning Summit 2024',
      category: 'conferences',
      date: 'March 15-17, 2024',
      time: '9:00 AM - 6:00 PM',
      location: 'San Francisco Convention Center',
      description: 'Join industry leaders and experts for three days of cutting-edge AI insights, workshops, and networking opportunities.',
      attendees: 500,
      price: '$299',
      featured: true,
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'Cybersecurity Best Practices Webinar',
      category: 'webinars',
      date: 'March 22, 2024',
      time: '2:00 PM - 4:00 PM',
      location: 'Virtual Event',
      description: 'Learn about the latest cybersecurity threats and best practices to protect your organization.',
      attendees: 150,
      price: 'Free',
      featured: false,
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'Cloud Infrastructure Workshop',
      category: 'workshops',
      date: 'March 28, 2024',
      time: '10:00 AM - 5:00 PM',
      location: 'Zion Tech Group HQ',
      description: 'Hands-on workshop covering cloud architecture, deployment strategies, and optimization techniques.',
      attendees: 25,
      price: '$199',
      featured: false,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      title: 'Innovation Hackathon 2024',
      category: 'hackathons',
      date: 'April 5-7, 2024',
      time: '48 Hours',
      location: 'Tech Innovation Center',
      description: 'Build innovative solutions in AI, IoT, and blockchain. Compete for prizes and recognition.',
      attendees: 100,
      price: '$49',
      featured: true,
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop'
    },
    {
      id: 5,
      title: 'Digital Transformation Conference',
      category: 'conferences',
      date: 'April 12-14, 2024',
      time: '9:00 AM - 6:00 PM',
      location: 'New York Marriott Marquis',
      description: 'Explore strategies for successful digital transformation in the modern business landscape.',
      attendees: 400,
      price: '$399',
      featured: false,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop'
    },
    {
      id: 6,
      title: 'Tech Networking Mixer',
      category: 'networking',
      date: 'April 18, 2024',
      time: '6:00 PM - 9:00 PM',
      location: 'Downtown Tech Hub',
      description: 'Connect with fellow tech professionals, entrepreneurs, and industry leaders in a relaxed setting.',
      attendees: 75,
      price: '$25',
      featured: false,
      image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop'
    }
  ];

  const pastEvents = [
    {
      id: 7,
      title: 'Blockchain Revolution Summit 2023',
      category: 'conferences',
      date: 'December 10-12, 2023',
      attendees: 350,
      highlights: ['Keynote by Vitalik Buterin', '50+ expert speakers', 'Interactive workshops']
    },
    {
      id: 8,
      title: 'DevOps Masterclass Series',
      category: 'workshops',
      date: 'November 15-17, 2023',
      attendees: 60,
      highlights: ['CI/CD pipeline optimization', 'Container orchestration', 'Monitoring & observability']
    },
    {
      id: 9,
      title: 'Future of Work Tech Forum',
      category: 'conferences',
      date: 'October 20-22, 2023',
      attendees: 280,
      highlights: ['Remote work technologies', 'AI in HR', 'Digital collaboration tools']
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic
    console.log('Searching for:', searchQuery);
  };

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    // Handle category filtering
    console.log('Selected category:', categoryId);
  };

  const filteredEvents = selectedCategory === 'all' 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-600/20 rounded-full">
              <Calendar className="h-16 w-16 text-blue-400" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Events &
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}Webinars
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join us for cutting-edge technology events, workshops, and webinars. 
            Connect with industry experts and stay ahead of the latest trends.
          </p>
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search events, topics, or speakers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-200"
              >
                Search
              </button>
            </div>
          </form>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {eventCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-4 py-2 rounded-full border transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 border-blue-500 text-white'
                    : 'bg-white/10 border-gray-600 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Events */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Featured Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.filter(event => event.featured).map((event, index) => (
              <motion.div
                key={event.id}
                className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden hover:border-blue-500/50 transition-all duration-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      event.category === 'conferences' ? 'bg-purple-600/20 text-purple-400' :
                      event.category === 'webinars' ? 'bg-blue-600/20 text-blue-400' :
                      event.category === 'workshops' ? 'bg-green-600/20 text-green-400' :
                      event.category === 'hackathons' ? 'bg-orange-600/20 text-orange-400' :
                      'bg-gray-600/20 text-gray-400'
                    }`}>
                      {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{event.title}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Clock className="h-4 w-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Users className="h-4 w-4 mr-2" />
                      {event.attendees} attendees
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4">{event.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-xl font-bold text-blue-400">{event.price}</div>
                    <a
                      href="/contact"
                      className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200"
                    >
                      Register Now →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* All Events */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">All Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden hover:border-blue-500/50 transition-all duration-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      event.category === 'conferences' ? 'bg-purple-600/20 text-purple-400' :
                      event.category === 'webinars' ? 'bg-blue-600/20 text-blue-400' :
                      event.category === 'workshops' ? 'bg-green-600/20 text-green-400' :
                      event.category === 'hackathons' ? 'bg-orange-600/20 text-orange-400' :
                      'bg-gray-600/20 text-gray-400'
                    }`}>
                      {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                    </span>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">{event.title}</h3>
                  
                  <div className="space-y-1 mb-3">
                    <div className="flex items-center text-gray-400 text-xs">
                      <Calendar className="h-3 w-3 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-gray-400 text-xs">
                      <MapPin className="h-3 w-3 mr-2" />
                      {event.location}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold text-blue-400">{event.price}</div>
                    <a
                      href="/contact"
                      className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200"
                    >
                      Details →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Past Events */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Past Events Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.id}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <Calendar className="h-8 w-8 text-blue-400 mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{event.title}</h3>
                    <p className="text-gray-400 text-sm">{event.date}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center text-gray-300 text-sm mb-2">
                    <Users className="h-4 w-4 mr-2" />
                    {event.attendees} attendees
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {event.highlights.map((highlight, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-center">
                        <Star className="h-3 w-3 text-yellow-400 mr-2" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Event Types */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Types of Events We Host</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-purple-600/20 rounded-full">
                  <Globe className="h-12 w-12 text-purple-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Conferences</h3>
              <p className="text-gray-300 text-sm">
                Multi-day events featuring keynote speakers, panel discussions, and networking opportunities.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-blue-600/20 rounded-full">
                  <Play className="h-12 w-12 text-blue-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Webinars</h3>
              <p className="text-gray-300 text-sm">
                Online sessions covering specific topics with expert presenters and interactive Q&A.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-green-600/20 rounded-full">
                  <Zap className="h-12 w-12 text-green-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Workshops</h3>
              <p className="text-gray-300 text-sm">
                Hands-on learning sessions with practical exercises and real-world applications.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-orange-600/20 rounded-full">
                  <Brain className="h-12 w-12 text-orange-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Hackathons</h3>
              <p className="text-gray-300 text-sm">
                Competitive coding events where teams build innovative solutions in limited time.
              </p>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl p-12 border border-blue-500/30">
            <h2 className="text-3xl font-bold text-white mb-6">Host Your Event With Us</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Interested in hosting a technology event, workshop, or conference? 
              We'd love to collaborate and help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-200"
              >
                Get in Touch
              </a>
              <a
                href="/services"
                className="px-8 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg font-semibold transition-colors duration-200"
              >
                Our Services
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white rounded-lg font-semibold transition-colors duration-200"
              >
                <MessageCircle className="inline mr-2 h-5 w-5" />
                Discuss Partnership
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Events;