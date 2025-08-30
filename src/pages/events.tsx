import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  ExternalLink, 
  Play,
  Video,
  Mic,
  Users2,
  Globe,
  Zap,
  Brain,
  Shield,
  Cloud,
  Database,
  Rocket,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  MessageCircle,
  BarChart,
  Settings,
  Palette,
  Code,
  Server,
  Cpu,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Star,
  CheckCircle,
  ArrowRight,
  Filter,
  Search
} from 'lucide-react';

export default function Events() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', icon: Calendar, count: 0 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 8 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 6 },
    { id: 'cloud-devops', name: 'Cloud & DevOps', icon: Cloud, count: 7 },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, count: 4 },
    { id: 'blockchain', name: 'Blockchain', icon: ShieldCheck, count: 3 },
    { id: 'iot', name: 'IoT & Edge Computing', icon: Cpu, count: 5 },
    { id: 'data-analytics', name: 'Data & Analytics', icon: BarChart, count: 6 },
    { id: 'digital-transformation', name: 'Digital Transformation', icon: TrendingUp, count: 9 },
    { id: 'startup-tech', name: 'Startup Technology', icon: Rocket, count: 3 }
  ];

  const eventTypes = [
    { id: 'all', name: 'All Types', icon: Calendar },
    { id: 'webinar', name: 'Webinar', icon: Video },
    { id: 'conference', name: 'Conference', icon: Users2 },
    { id: 'workshop', name: 'Workshop', icon: Settings },
    { id: 'hackathon', name: 'Hackathon', icon: Code },
    { id: 'meetup', name: 'Meetup', icon: Users },
    { id: 'summit', name: 'Summit', icon: Star }
  ];

  const events = [
    {
      id: 1,
      title: 'AI-Powered Cybersecurity Summit 2024',
      description: 'Join industry leaders and cybersecurity experts for a comprehensive exploration of AI-driven security solutions, threat intelligence, and next-generation protection strategies.',
      type: 'summit',
      category: 'cybersecurity',
      date: '2024-03-15',
      time: '09:00 AM - 05:00 PM',
      timezone: 'EST',
      location: 'Virtual + New York, NY',
      isVirtual: true,
      isInPerson: true,
      attendees: 500,
      price: '$299',
      isFree: false,
      featured: true,
      speakers: [
        'Dr. Sarah Chen - Chief Security Officer, Zion Tech Group',
        'Michael Rodriguez - Director of AI Security, Microsoft',
        'Lisa Park - Cybersecurity Researcher, MIT'
      ],
      agenda: [
        'Keynote: The Future of AI in Cybersecurity',
        'Panel: AI vs. AI - The Arms Race in Security',
        'Workshop: Implementing AI Security Solutions',
        'Networking & Demo Showcase'
      ],
      registrationUrl: '#',
      image: '/events/ai-cybersecurity-summit.jpg'
    },
    {
      id: 2,
      title: 'Quantum Computing Workshop: From Theory to Practice',
      description: 'Hands-on workshop exploring quantum computing fundamentals, algorithms, and real-world applications in finance, healthcare, and logistics.',
      type: 'workshop',
      category: 'quantum',
      date: '2024-03-20',
      time: '10:00 AM - 04:00 PM',
      timezone: 'EST',
      location: 'Virtual',
      isVirtual: true,
      isInPerson: false,
      attendees: 100,
      price: 'Free',
      isFree: true,
      featured: true,
      speakers: [
        'Dr. Emily Watson - Quantum Computing Lead, Zion Tech Group',
        'Alex Thompson - Quantum Algorithm Specialist'
      ],
      agenda: [
        'Introduction to Quantum Computing',
        'Quantum Algorithms Deep Dive',
        'Hands-on Quantum Programming',
        'Real-world Applications Discussion'
      ],
      registrationUrl: '#',
      image: '/events/quantum-computing-workshop.jpg'
    },
    {
      id: 3,
      title: 'Cloud-Native AI Development Webinar Series',
      description: 'Multi-part webinar series covering the latest trends in cloud-native AI development, MLOps, and scalable machine learning infrastructure.',
      type: 'webinar',
      category: 'cloud-devops',
      date: '2024-03-25',
      time: '02:00 PM - 03:30 PM',
      timezone: 'EST',
      location: 'Virtual',
      isVirtual: true,
      isInPerson: false,
      attendees: 250,
      price: 'Free',
      isFree: true,
      featured: false,
      speakers: [
        'David Kim - Cloud Architecture Lead, Zion Tech Group',
        'Sarah Johnson - MLOps Engineer, Google Cloud'
      ],
      agenda: [
        'Cloud-Native AI Architecture Patterns',
        'MLOps Best Practices',
        'Scaling AI Workloads in the Cloud',
        'Q&A Session'
      ],
      registrationUrl: '#',
      image: '/events/cloud-native-ai-webinar.jpg'
    },
    {
      id: 4,
      title: 'Blockchain Innovation Meetup',
      description: 'Local meetup for blockchain enthusiasts, developers, and entrepreneurs to discuss the latest developments and network with like-minded professionals.',
      type: 'meetup',
      category: 'blockchain',
      date: '2024-03-28',
      time: '06:00 PM - 08:00 PM',
      timezone: 'EST',
      location: 'Middletown, DE',
      isVirtual: false,
      isInPerson: true,
      attendees: 50,
      price: 'Free',
      isFree: true,
      featured: false,
      speakers: [
        'Local Blockchain Developers',
        'Startup Founders',
        'Industry Experts'
      ],
      agenda: [
        'Networking & Refreshments',
        'Lightning Talks',
        'Open Discussion',
        'Future Meetup Planning'
      ],
      registrationUrl: '#',
      image: '/events/blockchain-meetup.jpg'
    },
    {
      id: 5,
      title: 'Data Science & Analytics Conference',
      description: 'Comprehensive conference covering data science, analytics, and AI applications across various industries with hands-on workshops and expert presentations.',
      type: 'conference',
      category: 'data-analytics',
      date: '2024-04-05',
      time: '08:00 AM - 06:00 PM',
      timezone: 'EST',
      location: 'San Francisco, CA',
      isVirtual: true,
      isInPerson: true,
      attendees: 800,
      price: '$499',
      isFree: false,
      featured: true,
      speakers: [
        'Dr. Lisa Park - Chief Data Scientist, Zion Tech Group',
        'Dr. Robert Chen - VP of Analytics, Netflix',
        'Maria Garcia - Data Science Director, Uber'
      ],
      agenda: [
        'Keynote: The Future of Data-Driven Decision Making',
        'Track Sessions: ML, Analytics, Visualization',
        'Industry Case Studies',
        'Networking & Career Fair'
      ],
      registrationUrl: '#',
      image: '/events/data-science-conference.jpg'
    },
    {
      id: 6,
      title: 'IoT Edge Computing Hackathon',
      description: '24-hour hackathon focused on building innovative IoT solutions using edge computing and AI. Compete for prizes and recognition.',
      type: 'hackathon',
      category: 'iot',
      date: '2024-04-12',
      time: '09:00 AM - 09:00 AM (Next Day)',
      timezone: 'EST',
      location: 'Virtual + Multiple Cities',
      isVirtual: true,
      isInPerson: true,
      attendees: 200,
      price: 'Free',
      isFree: true,
      featured: false,
      speakers: [
        'IoT Experts from Zion Tech Group',
        'Industry Mentors',
        'Judges Panel'
      ],
      agenda: [
        'Opening Ceremony & Team Formation',
        '24-Hour Hacking Session',
        'Mentorship & Workshops',
        'Project Presentations & Judging'
      ],
      registrationUrl: '#',
      image: '/events/iot-hackathon.jpg'
    }
  ];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const matchesType = selectedType === 'all' || event.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  const upcomingEvents = events.filter(event => new Date(event.date) >= new Date()).slice(0, 3);
  const featuredEvents = events.filter(event => event.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : Calendar;
  };

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'General';
  };

  const getTypeIcon = (typeId: string) => {
    const type = eventTypes.find(t => t.id === typeId);
    return type ? type.icon : Calendar;
  };

  const getTypeName = (typeId: string) => {
    const type = eventTypes.find(t => t.id === typeId);
    return type ? type.name : 'Event';
  };

  const isUpcoming = (dateString: string) => {
    return new Date(dateString) >= new Date();
  };

  return (
    <div className="min-h-screen bg-zion-blue">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">
                {' '}Events
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Connect with industry experts, learn cutting-edge technologies, and network with 
              professionals at our curated events, webinars, and conferences.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search events, topics, or speakers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-zion-blue-dark border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none focus:ring-2 focus:ring-zion-cyan/20"
                />
              </div>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-zion-cyan">{events.length}</div>
                <div className="text-zion-slate-light text-sm">Total Events</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-zion-cyan">{events.filter(e => e.isFree).length}</div>
                <div className="text-zion-slate-light text-sm">Free Events</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-zion-cyan">{events.filter(e => e.isVirtual).length}</div>
                <div className="text-zion-slate-light text-sm">Virtual Events</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-zion-cyan">{events.filter(e => e.isInPerson).length}</div>
                <div className="text-zion-slate-light text-sm">In-Person Events</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Events */}
      {featuredEvents.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured Events
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                Don't miss these must-attend events featuring industry leaders and cutting-edge topics.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zion-blue-darker border border-zion-purple/20 rounded-lg overflow-hidden hover:border-zion-cyan/40 transition-all duration-300 group"
                >
                  <div className="aspect-video bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 flex items-center justify-center">
                    <div className="text-center p-8">
                      <Calendar className="w-16 h-16 text-zion-cyan mx-auto mb-4" />
                      <p className="text-zion-slate-light">Featured Event</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs font-medium rounded-full">
                        {getTypeName(event.type)}
                      </span>
                      <span className="px-3 py-1 bg-zion-purple/20 text-zion-purple text-xs font-medium rounded-full">
                        {getCategoryName(event.category)}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                      {event.title}
                    </h3>
                    
                    <p className="text-zion-slate-light mb-4 line-clamp-3">
                      {event.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <Clock className="w-4 h-4" />
                        <span>{event.time} {event.timezone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <Users className="w-4 h-4" />
                        <span>{event.attendees} attendees</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-zion-cyan font-semibold">
                        {event.isFree ? 'Free' : event.price}
                      </div>
                      
                      <button className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2">
                        Register Now
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Categories */}
                <div className="bg-zion-blue-dark border border-zion-purple/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Filter className="w-5 h-5 text-zion-cyan" />
                    Categories
                  </h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center justify-between ${
                          selectedCategory === category.id
                            ? 'bg-zion-cyan text-zion-blue'
                            : 'text-zion-slate-light hover:bg-zion-purple/20 hover:text-white'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <category.icon className="w-4 h-4" />
                          {category.name}
                        </span>
                        {category.count > 0 && (
                          <span className="text-xs opacity-75">({category.count})</span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Event Types */}
                <div className="bg-zion-blue-dark border border-zion-purple/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-zion-cyan" />
                    Event Types
                  </h3>
                  <div className="space-y-2">
                    {eventTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setSelectedType(type.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center gap-2 ${
                          selectedType === type.id
                            ? 'bg-zion-cyan text-zion-blue'
                            : 'text-zion-slate-light hover:bg-zion-purple/20 hover:text-white'
                        }`}
                      >
                        <type.icon className="w-4 h-4" />
                        {type.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Upcoming Events */}
                <div className="bg-zion-blue-dark border border-zion-purple/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-zion-cyan" />
                    Upcoming
                  </h3>
                  <div className="space-y-3">
                    {upcomingEvents.map((event) => (
                      <div key={event.id} className="border-b border-zion-purple/20 pb-3 last:border-b-0">
                        <h4 className="text-sm font-medium text-white mb-1 line-clamp-2 hover:text-zion-cyan transition-colors cursor-pointer">
                          {event.title}
                        </h4>
                        <p className="text-xs text-zion-slate-light">{formatDate(event.date)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Results Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    {searchTerm ? `Search Results for "${searchTerm}"` : 'All Events'}
                  </h2>
                  <p className="text-zion-slate-light">
                    {filteredEvents.length} event{filteredEvents.length !== 1 ? 's' : ''} found
                  </p>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-zion-slate-light text-sm">Sort by:</span>
                  <select className="px-3 py-2 bg-zion-blue-dark border border-zion-purple/30 rounded-lg text-white text-sm focus:border-zion-cyan focus:outline-none">
                    <option value="date">Date</option>
                    <option value="popularity">Popularity</option>
                    <option value="price">Price</option>
                  </select>
                </div>
              </div>

              {/* Events Grid */}
              {filteredEvents.length > 0 ? (
                <div className="space-y-6">
                  {filteredEvents.map((event, index) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-zion-blue-dark border border-zion-purple/20 rounded-lg overflow-hidden hover:border-zion-cyan/40 transition-all duration-300"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Event Image */}
                        <div className="aspect-video lg:aspect-square bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 flex items-center justify-center">
                          <div className="text-center p-6">
                            <Calendar className="w-12 h-12 text-zion-cyan mx-auto mb-3" />
                            <p className="text-zion-slate-light text-sm">Event</p>
                          </div>
                        </div>
                        
                        {/* Event Details */}
                        <div className="lg:col-span-2 p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="px-2 py-1 bg-zion-purple/20 text-zion-purple text-xs font-medium rounded-full">
                              {getTypeName(event.type)}
                            </span>
                            <span className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs font-medium rounded-full">
                              {getCategoryName(event.category)}
                            </span>
                            {event.isFree && (
                              <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full">
                                Free
                              </span>
                            )}
                          </div>
                          
                          <h3 className="text-xl font-bold text-white mb-3 hover:text-zion-cyan transition-colors">
                            {event.title}
                          </h3>
                          
                          <p className="text-zion-slate-light mb-4 line-clamp-3">
                            {event.description}
                          </p>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            <div className="space-y-2">
                              <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                                <Calendar className="w-4 h-4" />
                                <span>{formatDate(event.date)}</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                                <Clock className="w-4 h-4" />
                                <span>{event.time} {event.timezone}</span>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                                <MapPin className="w-4 h-4" />
                                <span>{event.location}</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                                <Users className="w-4 h-4" />
                                <span>{event.attendees} attendees</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="text-zion-cyan font-semibold text-lg">
                              {event.isFree ? 'Free' : event.price}
                            </div>
                            
                            <div className="flex items-center gap-3">
                              <button className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm">
                                View Details
                              </button>
                              <button className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2">
                                Register
                                <ArrowRight className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <Calendar className="w-16 h-16 text-zion-slate-light mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">No events found</h3>
                  <p className="text-zion-slate-light mb-4">
                    Try adjusting your search terms or filters to find events.
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                      setSelectedType('all');
                    }}
                    className="text-zion-cyan hover:text-zion-cyan-light transition-colors"
                  >
                    Clear all filters
                  </button>
                </div>
              )}

              {/* Load More Button */}
              {filteredEvents.length > 6 && (
                <div className="text-center mt-12">
                  <button className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 hover:-translate-y-1">
                    Load More Events
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Host Your Event with Us
            </h2>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              Have an idea for an event, webinar, or workshop? We'd love to collaborate! 
              Let's create amazing learning experiences together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 hover:-translate-y-1">
                Propose an Event
              </button>
              <button className="border border-zion-cyan text-zion-cyan px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Partner with Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
