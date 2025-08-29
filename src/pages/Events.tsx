import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  ArrowRight,
  Filter,
  Search,
  Star,
  Tag,
  Video,
  Globe,
  Building2,
  Cpu,
  Shield,
  Cloud,
  Brain,
  Network,
  Database,
  Zap,
  TrendingUp,
  CheckCircle,
  Eye,
  Bookmark,
  Share2,
  ExternalLink,
  Filter as FilterIcon,
  CalendarDays,
  Clock2,
  MapPin2,
  User,
  Users2,
  Award,
  Trophy,
  Gift,
  Coffee,
  Wifi,
  Car,
  Plane,
  Train,
  Bus,
  Bike,
  Walk,
  Home,
  Building,
  Factory,
  City,
  Mountain,
  Tree,
  Leaf,
  Flower,
  Sun,
  Moon,
  Cloud as CloudIcon,
  Rain,
  Snow,
  Wind,
  Thermometer,
  Droplets,
  Umbrella,
  Sunglasses,
  Snowflake,
  CloudRain,
  CloudLightning,
  CloudSnow,
  CloudFog,
  CloudDrizzle,
  CloudHail,
  CloudSleet,
  CloudRainWind,
  CloudLightningRain,
  CloudSnowRain,
  CloudFogRain,
  CloudDrizzleRain,
  CloudHailRain,
  CloudSleetRain,
  CloudRainWindRain,
  CloudLightningRainWind,
  CloudSnowRainWind,
  CloudFogRainWind,
  CloudDrizzleRainWind,
  CloudHailRainWind,
  CloudSleetRainWind
} from 'lucide-react';

export default function Events() {
  const upcomingEvents = [
    {
      id: 1,
      title: 'AI Development Summit 2025',
      date: 'March 25-27, 2025',
      time: '9:00 AM - 6:00 PM EST',
      location: 'San Francisco, CA',
      venue: 'Moscone Center',
      type: 'Conference',
      category: 'AI & Machine Learning',
      attendees: 500,
      price: '$899',
      featured: true,
      description: 'Join industry leaders for three days of cutting-edge AI discussions, workshops, and networking opportunities.',
      speakers: ['Dr. Sarah Chen', 'Mike Rodriguez', 'Lisa Thompson'],
      tags: ['AI', 'Machine Learning', 'Deep Learning', 'Neural Networks'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Cybersecurity Workshop Series',
      date: 'April 5-9, 2025',
      time: '2:00 PM - 5:00 PM EST',
      location: 'New York, NY',
      venue: 'Tech Hub NYC',
      type: 'Workshop',
      category: 'Cybersecurity',
      attendees: 50,
      price: '$299',
      featured: false,
      description: 'Hands-on cybersecurity training covering threat detection, incident response, and security best practices.',
      speakers: ['Mike Rodriguez', 'David Kim'],
      tags: ['Security', 'Threat Detection', 'Incident Response'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 3,
      title: 'Cloud Architecture Masterclass',
      date: 'April 15, 2025',
      time: '9:00 AM - 5:00 PM EST',
      location: 'Austin, TX',
      venue: 'Austin Convention Center',
      type: 'Masterclass',
      category: 'Cloud Computing',
      attendees: 100,
      price: '$599',
      featured: true,
      description: 'Learn advanced cloud architecture patterns, cost optimization, and best practices from cloud experts.',
      speakers: ['Lisa Thompson', 'Alex Johnson'],
      tags: ['Cloud', 'AWS', 'Azure', 'Architecture'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 4,
      title: 'Data Science Hackathon',
      date: 'April 20-22, 2025',
      time: '48 hours',
      location: 'Virtual',
      venue: 'Online Platform',
      type: 'Hackathon',
      category: 'Data Analytics',
      attendees: 200,
      price: 'Free',
      featured: false,
      description: 'Build innovative data science solutions in this 48-hour virtual hackathon with prizes and mentorship.',
      speakers: ['Dr. Emily Watson', 'Data Science Team'],
      tags: ['Data Science', 'Hackathon', 'Machine Learning'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 5,
      title: 'IoT & Edge Computing Expo',
      date: 'May 10-12, 2025',
      time: '10:00 AM - 6:00 PM EST',
      location: 'Seattle, WA',
      venue: 'Seattle Convention Center',
      type: 'Expo',
      category: 'IoT & Edge Computing',
      attendees: 300,
      price: '$199',
      featured: false,
      description: 'Explore the latest in IoT devices, edge computing solutions, and connected technology innovations.',
      speakers: ['David Chen', 'IoT Experts'],
      tags: ['IoT', 'Edge Computing', 'Connected Devices'],
      color: 'from-teal-500 to-blue-500'
    },
    {
      id: 6,
      title: 'Quantum Computing Symposium',
      date: 'May 20-21, 2025',
      time: '9:00 AM - 5:00 PM EST',
      location: 'Boston, MA',
      venue: 'MIT Media Lab',
      type: 'Symposium',
      category: 'Quantum Computing',
      attendees: 150,
      price: '$799',
      featured: true,
      description: 'Deep dive into quantum computing research, applications, and future implications for technology.',
      speakers: ['Dr. James Wilson', 'Quantum Researchers'],
      tags: ['Quantum Computing', 'Research', 'Future Tech'],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const eventCategories = [
    { name: 'All Events', count: upcomingEvents.length, active: true },
    { name: 'AI & Machine Learning', count: upcomingEvents.filter(e => e.category === 'AI & Machine Learning').length, active: false },
    { name: 'Cybersecurity', count: upcomingEvents.filter(e => e.category === 'Cybersecurity').length, active: false },
    { name: 'Cloud Computing', count: upcomingEvents.filter(e => e.category === 'Cloud Computing').length, active: false },
    { name: 'Data Analytics', count: upcomingEvents.filter(e => e.category === 'Data Analytics').length, active: false },
    { name: 'IoT & Edge Computing', count: upcomingEvents.filter(e => e.category === 'IoT & Edge Computing').length, active: false },
    { name: 'Quantum Computing', count: upcomingEvents.filter(e => e.category === 'Quantum Computing').length, active: false }
  ];

  const eventTypes = [
    { name: 'All Types', count: upcomingEvents.length, active: true },
    { name: 'Conference', count: upcomingEvents.filter(e => e.type === 'Conference').length, active: false },
    { name: 'Workshop', count: upcomingEvents.filter(e => e.type === 'Workshop').length, active: false },
    { name: 'Masterclass', count: upcomingEvents.filter(e => e.type === 'Masterclass').length, active: false },
    { name: 'Hackathon', count: upcomingEvents.filter(e => e.type === 'Hackathon').length, active: false },
    { name: 'Expo', count: upcomingEvents.filter(e => e.type === 'Expo').length, active: false },
    { name: 'Symposium', count: upcomingEvents.filter(e => e.type === 'Symposium').length, active: false }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All Events');
  const [selectedType, setSelectedType] = React.useState('All Types');
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredEvents = upcomingEvents.filter(event => {
    const matchesCategory = selectedCategory === 'All Events' || event.category === selectedCategory;
    const matchesType = selectedType === 'All Types' || event.type === selectedType;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesType && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-green-900/20"></div>
        <div className="container-responsive relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-6">
              <Calendar className="w-4 h-4" />
              Events & Conferences
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Join Our
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
                {' '}Tech Events
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Discover upcoming conferences, workshops, and networking events 
              in AI, cybersecurity, cloud computing, and emerging technologies.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search events, topics, or locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 border-b border-slate-700/50">
        <div className="container-responsive">
          {/* Category Filters */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-white mb-4">Filter by Category</h3>
            <div className="flex flex-wrap gap-3">
              {eventCategories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'border-purple-500 bg-purple-500/20 text-purple-300'
                      : 'border-slate-600 text-gray-400 hover:border-slate-500 hover:text-gray-300'
                  }`}
                >
                  {category.name}
                  <span className="ml-2 text-sm opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Type Filters */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Filter by Type</h3>
            <div className="flex flex-wrap gap-3">
              {eventTypes.map((type) => (
                <button
                  key={type.name}
                  onClick={() => setSelectedType(type.name)}
                  className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                    selectedType === type.name
                      ? 'border-blue-500 bg-blue-500/20 text-blue-300'
                      : 'border-slate-600 text-gray-400 hover:border-slate-500 hover:text-gray-300'
                  }`}
                >
                  {type.name}
                  <span className="ml-2 text-sm opacity-75">({type.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {filteredEvents.length} Events Found
            </h2>
            <p className="text-gray-400">
              {selectedCategory !== 'All Events' && `Showing ${selectedCategory} events`}
              {selectedType !== 'All Types' && ` • ${selectedType} format`}
              {searchQuery && ` • Matching "${searchQuery}"`}
            </p>
          </div>

          {filteredEvents.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-gray-400 text-xl mb-4">
                No events found matching your criteria.
              </div>
              <button
                onClick={() => {
                  setSelectedCategory('All Events');
                  setSelectedType('All Types');
                  setSearchQuery('');
                }}
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                Clear all filters
              </button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-slate-800/50 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:bg-slate-800/70"
                >
                  {/* Event Header */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${event.color} w-fit`}>
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex items-center gap-2">
                        {event.featured && (
                          <span className="inline-flex items-center gap-1 px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full">
                            <Star className="w-3 h-3" />
                            Featured
                          </span>
                        )}
                        <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 text-xs font-medium rounded-full">
                          {event.type}
                        </span>
                      </div>
                    </div>

                    {/* Event Title & Category */}
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {event.title}
                    </h3>
                    <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full mb-4">
                      {event.category}
                    </span>

                    {/* Event Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {event.description}
                    </p>

                    {/* Event Details */}
                    <div className="space-y-2 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{event.venue}, {event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{event.attendees} attendees</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {event.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Speakers */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-white mb-2">Featured Speakers:</h4>
                      <div className="flex flex-wrap gap-2">
                        {event.speakers.map((speaker, speakerIndex) => (
                          <span
                            key={speakerIndex}
                            className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full"
                          >
                            {speaker}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-purple-400">{event.price}</div>
                      <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105">
                        Register Now
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
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Can't Find the Right Event?
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Let us know what type of event you're looking for, and we'll 
              help you find the perfect match or create a custom event.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/community"
                className="inline-flex items-center gap-2 px-8 py-4 border border-purple-500/30 text-purple-300 hover:bg-purple-500/10 font-semibold rounded-xl transition-all duration-300"
              >
                Join Community
                <Users className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

