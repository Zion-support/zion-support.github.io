import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Tag, 
  Search, 
  Filter,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  Eye,
  Heart,
  MessageCircle,
  Share2,
  Zap,
  Brain,
  Shield,
  Rocket,
  Cpu,
  Database,
  Lock,
  Cloud,
  Code,
  Server,
  Cpu,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Sparkles,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  TrendingUp,
  CheckCircle,
  Star,
  Target,
  Handshake,
  Lightbulb,
  Globe,
  Award,
  MessageSquare,
  FileText,
  BarChart3,
  ExternalLink,
  Video,
  Mic,
  Camera,
  Headphones,
  BookOpen,
  GraduationCap,
  Building2,
  Briefcase,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Youtube,
  Play,
  Pause,
  Stop
} from 'lucide-react';

export default function Events() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  const categories = [
    { id: 'all', name: 'All Categories', icon: Calendar, count: 0 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 15 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 12 },
    { id: 'cloud-devops', name: 'Cloud & DevOps', icon: Cloud, count: 10 },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Atom, count: 8 },
    { id: 'data-science', name: 'Data Science', icon: BarChart3, count: 14 },
    { id: 'blockchain', name: 'Blockchain', icon: Chip, count: 6 },
    { id: 'iot', name: 'IoT & Edge Computing', icon: Wifi, count: 5 },
    { id: 'industry-insights', name: 'Industry Insights', icon: TrendingUp, count: 12 },
    { id: 'networking', name: 'Networking', icon: Users, count: 8 }
  ];

  const eventTypes = [
    { id: 'all', name: 'All Types', icon: Calendar, count: 0 },
    { id: 'conference', name: 'Conference', icon: Building2, count: 25 },
    { id: 'webinar', name: 'Webinar', icon: Video, count: 40 },
    { id: 'workshop', name: 'Workshop', icon: GraduationCap, count: 20 },
    { id: 'hackathon', name: 'Hackathon', icon: Code, count: 8 },
    { id: 'meetup', name: 'Meetup', icon: Users, count: 15 },
    { id: 'summit', name: 'Summit', icon: Award, count: 12 },
    { id: 'training', name: 'Training', icon: BookOpen, count: 18 }
  ];

  const events = [
    {
      id: 1,
      title: 'AI Innovation Summit 2025',
      description: 'Join industry leaders and AI experts for a comprehensive exploration of the latest artificial intelligence technologies and their business applications.',
      category: 'ai-ml',
      type: 'conference',
      startDate: '2025-03-15T09:00:00',
      endDate: '2025-03-17T18:00:00',
      location: 'San Francisco, CA',
      venue: 'Moscone Center',
      capacity: 2000,
      registered: 1850,
      price: '$1,299',
      featured: true,
      image: '/images/events/ai-innovation-summit-2025.jpg',
      speakers: [
        'Dr. Sarah Chen - CTO, Zion Tech Group',
        'Dr. Andrew Ng - Founder, DeepLearning.AI',
        'Yann LeCun - Chief AI Scientist, Meta',
        'Fei-Fei Li - Co-Director, Stanford HAI'
      ],
      agenda: [
        'Keynote: The Future of AI in Enterprise',
        'Panel: AI Ethics and Responsible Development',
        'Workshop: Building Production AI Systems',
        'Networking Reception'
      ],
      tags: ['AI', 'Machine Learning', 'Enterprise', 'Innovation'],
      registrationUrl: 'https://ai-innovation-summit-2025.eventbrite.com',
      liveStream: true,
      recording: true
    },
    {
      id: 2,
      title: 'Cybersecurity Threat Intelligence Workshop',
      description: 'Hands-on workshop covering advanced threat detection, incident response, and security automation using AI-powered tools.',
      category: 'cybersecurity',
      type: 'workshop',
      startDate: '2025-02-28T10:00:00',
      endDate: '2025-02-28T17:00:00',
      location: 'New York, NY',
      venue: 'Zion Tech Group HQ',
      capacity: 50,
      registered: 45,
      price: '$299',
      featured: true,
      image: '/images/events/cybersecurity-workshop.jpg',
      speakers: [
        'David Kim - Cybersecurity Specialist, Zion Tech Group',
        'Marcus Rodriguez - VP of Engineering, Zion Tech Group'
      ],
      agenda: [
        'Threat Intelligence Fundamentals',
        'AI-Powered Threat Detection',
        'Incident Response Simulation',
        'Security Automation Tools'
      ],
      tags: ['Cybersecurity', 'Threat Intelligence', 'AI Security', 'Workshop'],
      registrationUrl: 'https://cybersecurity-workshop.eventbrite.com',
      liveStream: false,
      recording: true
    },
    {
      id: 3,
      title: 'Cloud-Native Architecture Webinar Series',
      description: 'Multi-part webinar series exploring modern cloud architecture patterns, microservices, and DevOps best practices.',
      category: 'cloud-devops',
      type: 'webinar',
      startDate: '2025-02-20T14:00:00',
      endDate: '2025-02-20T15:30:00',
      location: 'Virtual',
      venue: 'Zoom Webinar',
      capacity: 500,
      registered: 320,
      price: 'Free',
      featured: false,
      image: '/images/events/cloud-architecture-webinar.jpg',
      speakers: [
        'Priya Patel - Cloud Solutions Architect, Zion Tech Group',
        'Alex Thompson - Senior AI Engineer, Zion Tech Group'
      ],
      agenda: [
        'Introduction to Cloud-Native Architecture',
        'Microservices Design Patterns',
        'DevOps and CI/CD Pipelines',
        'Q&A Session'
      ],
      tags: ['Cloud Computing', 'Microservices', 'DevOps', 'Webinar'],
      registrationUrl: 'https://cloud-architecture-webinar.eventbrite.com',
      liveStream: true,
      recording: true
    },
    {
      id: 4,
      title: 'Quantum Computing Meetup',
      description: 'Monthly meetup for quantum computing enthusiasts, researchers, and developers to discuss latest developments and applications.',
      category: 'quantum-computing',
      type: 'meetup',
      startDate: '2025-02-15T18:00:00',
      endDate: '2025-02-15T20:00:00',
      location: 'London, UK',
      venue: 'Tech Hub London',
      capacity: 100,
      registered: 85,
      price: 'Free',
      featured: false,
      image: '/images/events/quantum-computing-meetup.jpg',
      speakers: [
        'Dr. Emily Watson - Quantum Research Lead, Zion Tech Group',
        'Local Quantum Computing Researchers'
      ],
      agenda: [
        'Networking and Refreshments',
        'Lightning Talks on Quantum Topics',
        'Open Discussion and Q&A',
        'Future Meetup Planning'
      ],
      tags: ['Quantum Computing', 'Research', 'Networking', 'Meetup'],
      registrationUrl: 'https://quantum-computing-meetup.eventbrite.com',
      liveStream: false,
      recording: false
    },
    {
      id: 5,
      title: 'Data Science Bootcamp',
      description: 'Intensive 3-day bootcamp covering data analysis, machine learning, and statistical modeling for business applications.',
      category: 'data-science',
      type: 'training',
      startDate: '2025-03-10T09:00:00',
      endDate: '2025-03-12T17:00:00',
      location: 'Middletown, DE',
      venue: 'Zion Tech Group Training Center',
      capacity: 30,
      registered: 28,
      price: '$899',
      featured: false,
      image: '/images/events/data-science-bootcamp.jpg',
      speakers: [
        'Dr. Sarah Chen - CTO, Zion Tech Group',
        'Data Science Team, Zion Tech Group'
      ],
      agenda: [
        'Day 1: Data Analysis Fundamentals',
        'Day 2: Machine Learning Algorithms',
        'Day 3: Real-World Projects and Applications'
      ],
      tags: ['Data Science', 'Machine Learning', 'Training', 'Bootcamp'],
      registrationUrl: 'https://data-science-bootcamp.eventbrite.com',
      liveStream: false,
      recording: false
    },
    {
      id: 6,
      title: 'Blockchain Innovation Summit',
      description: 'Explore the latest developments in blockchain technology, DeFi, NFTs, and enterprise blockchain solutions.',
      category: 'blockchain',
      type: 'summit',
      startDate: '2025-04-05T09:00:00',
      endDate: '2025-04-06T18:00:00',
      location: 'Singapore',
      venue: 'Marina Bay Sands',
      capacity: 800,
      registered: 650,
      price: '$799',
      featured: true,
      image: '/images/events/blockchain-innovation-summit.jpg',
      speakers: [
        'Dr. Sarah Chen - CTO, Zion Tech Group',
        'Vitalik Buterin - Founder, Ethereum',
        'Changpeng Zhao - CEO, Binance',
        'Industry Blockchain Leaders'
      ],
      agenda: [
        'Keynote: The Future of Blockchain',
        'Panel: DeFi and Financial Innovation',
        'Workshop: Building Smart Contracts',
        'Networking and Exhibition'
      ],
      tags: ['Blockchain', 'DeFi', 'NFTs', 'Enterprise', 'Summit'],
      registrationUrl: 'https://blockchain-innovation-summit.eventbrite.com',
      liveStream: true,
      recording: true
    }
  ];

  const filteredEvents = events.filter(event => {
    const categoryMatch = selectedCategory === 'all' || event.category === selectedCategory;
    const typeMatch = selectedType === 'all' || event.type === selectedType;
    const searchMatch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       event.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return categoryMatch && typeMatch && searchMatch;
  });

  const eventsPerPage = 6;
  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);
  const startIndex = (currentPage - 1) * eventsPerPage;
  const endIndex = startIndex + eventsPerPage;
  const currentEvents = filteredEvents.slice(startIndex, endIndex);

  const featuredEvents = events.filter(event => event.featured);
  const upcomingEvents = events.filter(event => new Date(event.startDate) > new Date()).slice(0, 3);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatDateRange = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    if (start.toDateString() === end.toDateString()) {
      return start.toLocaleDateString('en-US', { 
        weekday: 'long',
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
      });
    }
    
    return `${start.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${end.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`;
  };

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : Calendar;
  };

  const getTypeIcon = (typeId: string) => {
    const type = eventTypes.find(t => t.id === typeId);
    return type ? type.icon : Calendar;
  };

  const isEventUpcoming = (eventDate: string) => {
    return new Date(eventDate) > new Date();
  };

  const isEventToday = (eventDate: string) => {
    const today = new Date();
    const eventDateObj = new Date(eventDate);
    return today.toDateString() === eventDateObj.toDateString();
  };

  return (
    <div className="min-h-screen bg-zion-blue">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Upcoming <span className="text-zion-cyan">Events</span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Join us for conferences, workshops, webinars, and networking events 
              featuring the latest in technology innovation.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search events, topics, or locations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-zion-blue-dark border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none"
                />
              </div>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex flex-wrap justify-center gap-2">
                <span className="text-zion-slate-light text-sm mr-2">Category:</span>
                {categories.slice(0, 6).map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-zion-cyan text-white'
                        : 'bg-zion-blue-dark text-zion-slate-light hover:bg-zion-purple/20 hover:text-white'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
              
              <div className="flex flex-wrap justify-center gap-2">
                <span className="text-zion-slate-light text-sm mr-2">Type:</span>
                {eventTypes.slice(0, 5).map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                      selectedType === type.id
                        ? 'bg-zion-cyan text-white'
                        : 'bg-zion-blue-dark text-zion-slate-light hover:bg-zion-purple/20 hover:text-white'
                    }`}
                  >
                    {type.name}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Events */}
      {featuredEvents.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured Events
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                Don't miss these must-attend technology events and conferences.
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
                  className="bg-zion-blue-dark border border-zion-cyan/30 rounded-xl overflow-hidden hover:border-zion-cyan/50 transition-all duration-300 hover:-translate-y-2 shadow-lg shadow-zion-cyan/25"
                >
                  <div className="h-48 bg-gradient-to-r from-zion-cyan to-zion-purple flex items-center justify-center relative">
                    <Calendar className="w-16 h-16 text-white" />
                    {isEventToday(event.startDate) && (
                      <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Happening Today!
                      </div>
                    )}
                    {isEventUpcoming(event.startDate) && (
                      <div className="absolute top-4 right-4 bg-zion-cyan text-white px-3 py-1 rounded-full text-sm font-medium">
                        Upcoming
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full font-medium">
                        Featured
                      </span>
                      <span className="text-zion-slate-light text-sm">
                        {(() => {
                          const IconComponent = getCategoryIcon(event.category);
                          return IconComponent ? <IconComponent className="w-4 h-4 inline mr-1" /> : null;
                        })()}
                        {categories.find(cat => cat.id === event.category)?.name}
                      </span>
                      <span className="text-zion-slate-light text-sm">
                        {(() => {
                          const IconComponent = getTypeIcon(event.type);
                          return IconComponent ? <IconComponent className="w-4 h-4 inline mr-1" /> : null;
                        })()}
                        {eventTypes.find(t => t.id === event.type)?.name}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 hover:text-zion-cyan transition-colors">
                      {event.title}
                    </h3>
                    
                    <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">
                      {event.description}
                    </p>
                    
                    <div className="space-y-2 mb-4 text-sm text-zion-slate-light">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-zion-cyan" />
                        {formatDateRange(event.startDate, event.endDate)}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-zion-cyan" />
                        {event.location} • {event.venue}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2 text-zion-cyan" />
                        {event.registered}/{event.capacity} registered
                      </div>
                      <div className="flex items-center">
                        <Tag className="w-4 h-4 mr-2 text-zion-cyan" />
                        {event.price}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-2">
                        {event.liveStream && (
                          <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                            Live Stream
                          </span>
                        )}
                        {event.recording && (
                          <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">
                            Recording Available
                          </span>
                        )}
                      </div>
                      
                      <a
                        href={event.registrationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-2 rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-zion-cyan/25"
                      >
                        Register Now
                        <ArrowRight className="w-4 h-4 inline ml-2" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Events */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              All Events
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Browse our complete calendar of technology events and activities.
            </p>
          </motion.div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {currentEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-blue-dark border border-zion-purple/30 rounded-xl overflow-hidden hover:border-zion-cyan/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-40 bg-gradient-to-r from-zion-purple to-zion-blue flex items-center justify-center relative">
                  <Calendar className="w-12 h-12 text-white" />
                  {isEventToday(event.startDate) && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Today!
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-zion-slate-light text-sm">
                      {(() => {
                        const IconComponent = getCategoryIcon(event.category);
                        return IconComponent ? <IconComponent className="w-4 h-4 inline mr-1" /> : null;
                      })()}
                      {categories.find(cat => cat.id === event.category)?.name}
                    </span>
                    <span className="text-zion-slate-light text-sm">
                      {(() => {
                        const IconComponent = getTypeIcon(event.type);
                        return IconComponent ? <IconComponent className="w-4 h-4 inline mr-1" /> : null;
                      })()}
                      {eventTypes.find(t => t.id === event.type)?.name}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 hover:text-zion-cyan transition-colors line-clamp-2">
                    {event.title}
                  </h3>
                  
                  <p className="text-zion-slate-light text-sm mb-4 leading-relaxed line-clamp-3">
                    {event.description}
                  </p>
                  
                  <div className="space-y-2 mb-4 text-sm text-zion-slate-light">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-2 text-zion-cyan" />
                      {formatDateRange(event.startDate, event.endDate)}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-3 h-3 mr-2 text-zion-cyan" />
                      {event.location}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-3 h-3 mr-2 text-zion-cyan" />
                      {event.registered}/{event.capacity}
                    </div>
                    <div className="flex items-center">
                      <Tag className="w-3 h-3 mr-2 text-zion-cyan" />
                      {event.price}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      {event.liveStream && (
                        <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                          Live
                        </span>
                      )}
                      {event.recording && (
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">
                          Recorded
                        </span>
                      )}
                    </div>
                    
                    <a
                      href={event.registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm"
                    >
                      Register <ArrowRight className="w-3 h-3 inline ml-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="p-2 text-zion-slate-light hover:text-zion-cyan disabled:text-zion-slate-light/50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    currentPage === page
                      ? 'bg-zion-cyan text-white'
                      : 'text-zion-slate-light hover:bg-zion-purple/20 hover:text-white'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="p-2 text-zion-slate-light hover:text-zion-cyan disabled:text-zion-slate-light/50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {filteredEvents.length === 0 && (
            <div className="text-center py-16">
              <Calendar className="w-16 h-16 text-zion-slate-light mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No events found</h3>
              <p className="text-zion-slate-light mb-4">
                Try adjusting your search or filters to find events.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedType('all');
                }}
                className="text-zion-cyan hover:text-zion-cyan-light transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Host an Event with Us
            </h2>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              Interested in hosting a technology event, workshop, or conference? 
              Let's collaborate to create something amazing together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-medium rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-zion-cyan/25"
              >
                Contact Us
                <MessageCircle className="w-5 h-5 ml-2" />
              </a>
              <a
                href="mailto:events@ziontechgroup.com"
                className="inline-flex items-center justify-center px-8 py-3 border border-zion-cyan text-zion-cyan font-medium rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Send Proposal
                <Mail className="w-5 h-5 ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
