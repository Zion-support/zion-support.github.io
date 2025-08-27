import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  ArrowRight,
  Filter,
  Search,
  Star,
  Video,
  Globe,
  Building,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Code,
  Network,
  Atom,
  TrendingUp,
  Zap,
  Heart,
  MessageCircle,
  ExternalLink,
  BookOpen,
  Award,
  Briefcase,
  GraduationCap,
  DollarSign,
  BarChart3,
  Eye,
  Share2,
  Tag,
  CheckCircle,
  XCircle,
  Play,
  Pause
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Events() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [viewMode, setViewMode] = useState<'upcoming' | 'past'>('upcoming');

  const categories = [
    { id: 'all', name: 'All Events', icon: Calendar, count: 24 },
    { id: 'conferences', name: 'Conferences', icon: Building, count: 8 },
    { id: 'webinars', name: 'Webinars', icon: Video, count: 12 },
    { id: 'workshops', name: 'Workshops', icon: Code, count: 6 },
    { id: 'networking', name: 'Networking', icon: Users, count: 4 },
    { id: 'awards', name: 'Awards & Recognition', icon: Award, count: 2 }
  ];

  const events = [
    {
      id: 1,
      title: "Zion Tech Summit 2025: AI & Quantum Computing",
      description: "Join us for our flagship technology summit featuring cutting-edge AI innovations, quantum computing breakthroughs, and networking opportunities with industry leaders.",
      longDescription: "The Zion Tech Summit 2025 is our premier annual event that brings together technology leaders, innovators, and industry experts to explore the future of AI and quantum computing. This year's summit will feature keynote presentations, interactive workshops, live demonstrations, and networking sessions.",
      date: "2025-03-15",
      time: "09:00 AM - 06:00 PM EST",
      location: "New York Marriott Marquis, New York, NY",
      virtual: false,
      category: "conferences",
      status: "upcoming",
      capacity: 500,
      registered: 342,
      price: "$299",
      earlyBirdPrice: "$199",
      earlyBirdDeadline: "2025-02-15",
      featured: true,
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&h=400",
      speakers: [
        { name: "Kleber", role: "CEO & Founder, Zion Tech Group", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100" },
        { name: "Dr. Sarah Chen", role: "CTO & Head of AI Research", image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=100&h=100" },
        { name: "Alex Rodriguez", role: "VP of Engineering", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100" }
      ],
      agenda: [
        { time: "09:00 AM", session: "Registration & Welcome Coffee" },
        { time: "09:30 AM", session: "Opening Keynote: The Future of AI" },
        { time: "10:30 AM", session: "Quantum Computing Breakthroughs" },
        { time: "11:30 AM", session: "Networking Break" },
        { time: "12:00 PM", session: "Lunch & Networking" },
        { time: "01:30 PM", session: "AI in Healthcare Panel" },
        { time: "02:30 PM", session: "Cybersecurity & AI" },
        { time: "03:30 PM", session: "Afternoon Break" },
        { time: "04:00 PM", session: "Startup Showcase" },
        { time: "05:00 PM", session: "Closing Remarks & Networking" }
      ],
      tags: ["AI", "Quantum Computing", "Technology", "Networking", "Innovation"]
    },
    {
      id: 2,
      title: "AI-Powered Cybersecurity Webinar Series",
      description: "Learn about the latest AI-driven security solutions and how they're protecting businesses from evolving cyber threats.",
      longDescription: "This comprehensive webinar series covers the intersection of artificial intelligence and cybersecurity, exploring how AI is revolutionizing threat detection, response, and prevention. Each session includes practical demonstrations and real-world case studies.",
      date: "2025-02-20",
      time: "02:00 PM - 04:00 PM EST",
      location: "Virtual Event",
      virtual: true,
      category: "webinars",
      status: "upcoming",
      capacity: 200,
      registered: 156,
      price: "Free",
      earlyBirdPrice: null,
      earlyBirdDeadline: null,
      featured: false,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&h=400",
      speakers: [
        { name: "Zion Security Team", role: "Cybersecurity Experts", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100" }
      ],
      agenda: [
        { time: "02:00 PM", session: "Introduction to AI in Cybersecurity" },
        { time: "02:30 PM", session: "Threat Detection with Machine Learning" },
        { time: "03:00 PM", session: "AI-Powered Incident Response" },
        { time: "03:30 PM", session: "Q&A and Discussion" }
      ],
      tags: ["Cybersecurity", "AI", "Webinar", "Security", "Machine Learning"]
    },
    {
      id: 3,
      title: "Quantum Computing Workshop for Developers",
      description: "Hands-on workshop introducing quantum computing concepts and practical applications for software developers.",
      longDescription: "This intensive workshop is designed for software developers who want to understand and work with quantum computing. Participants will learn quantum algorithms, quantum programming languages, and real-world applications through hands-on exercises.",
      date: "2025-02-10",
      time: "10:00 AM - 05:00 PM EST",
      location: "Zion Tech Group HQ, Middletown, DE",
      virtual: false,
      category: "workshops",
      status: "upcoming",
      capacity: 50,
      registered: 48,
      price: "$199",
      earlyBirdPrice: "$149",
      earlyBirdDeadline: "2025-01-20",
      featured: false,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=400",
      speakers: [
        { name: "Dr. Sarah Chen", role: "CTO & Head of AI Research", image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=100&h=100" }
      ],
      agenda: [
        { time: "10:00 AM", session: "Quantum Computing Fundamentals" },
        { time: "11:00 AM", session: "Quantum Algorithms" },
        { time: "12:00 PM", session: "Lunch Break" },
        { time: "01:00 PM", session: "Quantum Programming Languages" },
        { time: "02:00 PM", session: "Hands-on Exercises" },
        { time: "03:00 PM", session: "Real-world Applications" },
        { time: "04:00 PM", session: "Q&A and Networking" }
      ],
      tags: ["Quantum Computing", "Workshop", "Development", "Programming", "AI"]
    },
    {
      id: 4,
      title: "Tech Innovation Awards 2025",
      description: "Celebrating excellence in technology innovation and recognizing outstanding achievements in the industry.",
      longDescription: "The Tech Innovation Awards 2025 celebrates the most innovative companies, products, and individuals in the technology industry. Join us for an evening of recognition, networking, and celebration of technological achievements.",
      date: "2025-01-25",
      time: "06:00 PM - 10:00 PM EST",
      location: "The Ritz-Carlton, Washington, DC",
      virtual: false,
      category: "awards",
      status: "past",
      capacity: 300,
      registered: 300,
      price: "$150",
      earlyBirdPrice: null,
      earlyBirdDeadline: null,
      featured: false,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&h=400",
      speakers: [
        { name: "Industry Leaders", role: "Various", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100" }
      ],
      agenda: [
        { time: "06:00 PM", session: "Cocktail Reception" },
        { time: "07:00 PM", session: "Welcome & Opening Remarks" },
        { time: "07:30 PM", session: "Awards Ceremony" },
        { time: "09:00 PM", session: "Networking & Celebration" }
      ],
      tags: ["Awards", "Innovation", "Recognition", "Networking", "Technology"]
    },
    {
      id: 5,
      title: "AI in Healthcare Symposium",
      description: "Exploring the transformative impact of artificial intelligence on healthcare delivery and patient outcomes.",
      longDescription: "This symposium brings together healthcare professionals, AI researchers, and technology experts to discuss how artificial intelligence is revolutionizing healthcare. Topics include diagnostic AI, treatment optimization, and ethical considerations.",
      date: "2025-01-15",
      time: "09:00 AM - 05:00 PM EST",
      location: "Johns Hopkins University, Baltimore, MD",
      virtual: true,
      category: "conferences",
      status: "past",
      capacity: 400,
      registered: 400,
      price: "$199",
      earlyBirdPrice: null,
      earlyBirdDeadline: null,
      featured: false,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&h=400",
      speakers: [
        { name: "Healthcare AI Experts", role: "Various", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100" }
      ],
      agenda: [
        { time: "09:00 AM", session: "AI in Medical Imaging" },
        { time: "10:00 AM", session: "Predictive Analytics in Healthcare" },
        { time: "11:00 AM", session: "AI Ethics in Medicine" },
        { time: "12:00 PM", session: "Lunch Break" },
        { time: "01:00 PM", session: "Case Studies & Demonstrations" },
        { time: "02:00 PM", session: "Panel Discussion" },
        { time: "03:00 PM", session: "Future of AI in Healthcare" },
        { time: "04:00 PM", session: "Networking & Q&A" }
      ],
      tags: ["Healthcare", "AI", "Medical", "Symposium", "Innovation"]
    }
  ];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const matchesStatus = selectedStatus === 'all' || event.status === selectedStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const upcomingEvents = filteredEvents.filter(event => event.status === 'upcoming');
  const pastEvents = filteredEvents.filter(event => event.status === 'past');

  const displayEvents = viewMode === 'upcoming' ? upcomingEvents : pastEvents;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const isEarlyBird = (event: any) => {
    if (!event.earlyBirdDeadline) return false;
    const deadline = new Date(event.earlyBirdDeadline);
    const now = new Date();
    return now < deadline;
  };

  return (
    <div className="min-h-screen bg-futuristic">
      <SEO 
        title="Events - Zion Tech Group"
        description="Join us at our upcoming events, webinars, and workshops. Discover the latest in AI, quantum computing, and technology innovation."
      />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue to-zion-slate-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Upcoming <span className="text-zion-cyan">Events</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto"
          >
            Join us for conferences, webinars, workshops, and networking events 
            that showcase the latest in technology innovation.
          </motion.p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-zion-slate-dark border-b border-zion-slate-light/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zion-slate-light/10 border border-zion-slate-light/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-200"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-zion-cyan" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-zion-slate-light/10 border border-zion-slate-light/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-zion-cyan"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Status Filter */}
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-zion-cyan" />
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="bg-zion-slate-light/10 border border-zion-slate-light/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-zion-cyan"
                >
                  <option value="all">All Events</option>
                  <option value="upcoming">Upcoming</option>
                  <option value="past">Past Events</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* View Mode Toggle */}
      <section className="py-6 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="bg-zion-slate-light/10 rounded-lg p-1 border border-zion-slate-light/20">
              <button
                onClick={() => setViewMode('upcoming')}
                className={`px-6 py-2 rounded-md transition-all duration-200 ${
                  viewMode === 'upcoming'
                    ? 'bg-zion-cyan text-white'
                    : 'text-zion-slate-light hover:text-white'
                }`}
              >
                Upcoming Events ({upcomingEvents.length})
              </button>
              <button
                onClick={() => setViewMode('past')}
                className={`px-6 py-2 rounded-md transition-all duration-200 ${
                  viewMode === 'past'
                    ? 'bg-zion-cyan text-white'
                    : 'text-zion-slate-light hover:text-white'
                }`}
              >
                Past Events ({pastEvents.length})
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Event */}
      {viewMode === 'upcoming' && upcomingEvents.find(e => e.featured) && (
        <section className="py-16 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-8">
                <span className="inline-flex items-center px-4 py-2 bg-zion-cyan text-white text-sm font-medium rounded-full mb-4">
                  <Star className="w-4 h-4 mr-2" />
                  Featured Event
                </span>
                <h2 className="text-3xl font-bold text-white mb-4">Don't Miss Out</h2>
              </div>
              
              {(() => {
                const featuredEvent = upcomingEvents.find(e => e.featured);
                if (!featuredEvent) return null;
                
                return (
                  <div className="bg-zion-slate-dark/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      <div className="relative">
                        <img 
                          src={featuredEvent.image} 
                          alt={featuredEvent.title}
                          className="w-full h-full object-cover min-h-[300px]"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="inline-flex items-center px-3 py-1 bg-zion-cyan text-white text-xs font-medium rounded-full">
                            {featuredEvent.category.charAt(0).toUpperCase() + featuredEvent.category.slice(1)}
                          </span>
                        </div>
                        {featuredEvent.virtual && (
                          <div className="absolute top-4 right-4">
                            <span className="inline-flex items-center px-3 py-1 bg-purple-500 text-white text-xs font-medium rounded-full">
                              <Globe className="w-3 h-3 mr-1" />
                              Virtual
                            </span>
                          </div>
                        )}
                      </div>
                      
                      <div className="p-8 flex flex-col justify-center">
                        <div className="flex items-center gap-4 text-sm text-zion-slate-light mb-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {formatDate(featuredEvent.date)}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {featuredEvent.time}
                          </span>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                          {featuredEvent.title}
                        </h3>
                        
                        <p className="text-zion-slate-light mb-6 leading-relaxed">
                          {featuredEvent.description}
                        </p>
                        
                        <div className="flex items-center gap-4 mb-6">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-zion-cyan" />
                            <span className="text-zion-slate-light text-sm">
                              {featuredEvent.virtual ? 'Virtual Event' : featuredEvent.location}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-zion-cyan" />
                            <span className="text-zion-slate-light text-sm">
                              {featuredEvent.registered}/{featuredEvent.capacity} registered
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between mb-6">
                          <div className="text-2xl font-bold text-white">
                            {isEarlyBird(featuredEvent) && featuredEvent.earlyBirdPrice ? (
                              <div>
                                <span className="text-zion-cyan">{featuredEvent.earlyBirdPrice}</span>
                                <span className="text-zion-slate-light text-lg line-through ml-2">{featuredEvent.price}</span>
                              </div>
                            ) : (
                              featuredEvent.price
                            )}
                          </div>
                          
                          {isEarlyBird(featuredEvent) && featuredEvent.earlyBirdDeadline && (
                            <div className="text-right">
                              <div className="text-zion-cyan text-sm font-medium">Early Bird Ends</div>
                              <div className="text-zion-slate-light text-sm">
                                {formatDate(featuredEvent.earlyBirdDeadline)}
                              </div>
                            </div>
                          )}
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {featuredEvent.tags.map((tag) => (
                            <span key={tag} className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-300 hover:scale-105">
                          Register Now
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </div>
        </section>
      )}

      {/* Events Grid */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            {viewMode === 'upcoming' ? 'Upcoming Events' : 'Past Events'}
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayEvents.map((event, index) => (
              <motion.article
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-zion-slate-dark/50 to-zion-blue/10 backdrop-blur-sm rounded-xl overflow-hidden border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:scale-105 group"
              >
                <div className="relative">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 bg-zion-cyan text-white text-xs font-medium rounded-full">
                      {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                    </span>
                  </div>
                  {event.virtual && (
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center px-3 py-1 bg-purple-500 text-white text-xs font-medium rounded-full">
                        <Globe className="w-3 h-3 mr-1" />
                        Virtual
                      </span>
                    </div>
                  )}
                  {event.featured && (
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 bg-yellow-500 text-white text-xs font-medium rounded-full">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-zion-slate-light mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(event.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {event.time}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-zion-cyan transition-colors duration-200">
                    {event.title}
                  </h3>
                  
                  <p className="text-zion-slate-light mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-zion-cyan" />
                      <span className="text-zion-slate-light text-sm">
                        {event.virtual ? 'Virtual Event' : event.location}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-zion-cyan" />
                      <span className="text-zion-slate-light text-sm">
                        {event.registered}/{event.capacity}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-lg font-bold text-white">
                      {isEarlyBird(event) && event.earlyBirdPrice ? (
                        <div>
                          <span className="text-zion-cyan">{event.earlyBirdPrice}</span>
                          <span className="text-zion-slate-light text-sm line-through ml-2">{event.price}</span>
                        </div>
                      ) : (
                        event.price
                      )}
                    </div>
                    
                    {event.status === 'upcoming' && (
                      <div className="flex items-center gap-2">
                        {event.registered >= event.capacity ? (
                          <span className="inline-flex items-center px-3 py-1 bg-red-500 text-white text-xs font-medium rounded-full">
                            <XCircle className="w-3 h-3 mr-1" />
                            Sold Out
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-3 py-1 bg-green-500 text-white text-xs font-medium rounded-full">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Available
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {event.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {event.status === 'upcoming' ? (
                    <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-medium rounded-lg hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-300 group-hover:scale-105">
                      {event.registered >= event.capacity ? 'Join Waitlist' : 'Register Now'}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  ) : (
                    <button className="w-full inline-flex items-center justify-center px-4 py-2 border border-zion-cyan text-zion-cyan font-medium rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 group-hover:scale-105">
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
          
          {displayEvents.length === 0 && (
            <div className="text-center py-16">
              <Calendar className="w-16 h-16 text-zion-slate-light mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No events found</h3>
              <p className="text-zion-slate-light">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Host Your Event With Us
            </h2>
            <p className="text-zion-slate-light mb-8">
              Interested in hosting a technology event, workshop, or conference? 
              Let's discuss how we can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Get in Touch
              </a>
              <a
                href="/partners"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                <Users className="w-5 h-5 mr-2" />
                Partnership Opportunities
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}