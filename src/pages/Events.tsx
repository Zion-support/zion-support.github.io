import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  ExternalLink, 
  Video,
  Globe,
  Building,
  Brain,
  Cpu,
  Shield,
  Zap,
  Rocket,
  Star,
  CheckCircle,
  ArrowRight,
  Filter,
  Search
} from 'lucide-react';

export default function Events() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTimeframe, setSelectedTimeframe] = useState('all');

  const categories = [
    { id: 'all', name: 'All Events', icon: Calendar },
    { id: 'webinars', name: 'Webinars', icon: Video },
    { id: 'conferences', name: 'Conferences', icon: Building },
    { id: 'workshops', name: 'Workshops', icon: Users },
    { id: 'ai-summit', name: 'AI Summit', icon: Brain },
    { id: 'quantum', name: 'Quantum Tech', icon: Cpu },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Zap }
  ];

  const timeframes = [
    { id: 'all', name: 'All Time' },
    { id: 'upcoming', name: 'Upcoming' },
    { id: 'this-month', name: 'This Month' },
    { id: 'next-month', name: 'Next Month' },
    { id: 'past', name: 'Past Events' }
  ];

  const events = [
    {
      id: 1,
      title: 'AI Autonomous Systems Summit 2025',
      category: 'ai-summit',
      type: 'conference',
      date: '2025-03-15',
      time: '09:00 AM - 05:00 PM EST',
      location: 'Virtual + New York City',
      description: 'Join industry leaders and AI experts for a comprehensive exploration of autonomous AI systems, business automation, and the future of intelligent operations.',
      speakers: [
        { name: 'Dr. Sarah Chen', title: 'Chief AI Officer, Zion Tech Group', avatar: '/api/placeholder/60/60' },
        { name: 'Prof. Michael Rodriguez', title: 'AI Research Director, MIT', avatar: '/api/placeholder/60/60' },
        { name: 'Lisa Thompson', title: 'VP of Innovation, TechCorp', avatar: '/api/placeholder/60/60' }
      ],
      topics: ['AI Autonomous Systems', 'Business Process Automation', 'Machine Learning', 'Future of Work'],
      capacity: 500,
      registered: 342,
      price: 'Free',
      isVirtual: true,
      hasRecording: false,
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Computing in Enterprise: A Practical Guide',
      category: 'quantum',
      type: 'webinar',
      date: '2025-02-28',
      time: '02:00 PM - 03:30 PM EST',
      location: 'Virtual',
      description: 'Learn how quantum computing is transforming enterprise operations, from financial modeling to drug discovery and optimization problems.',
      speakers: [
        { name: 'Dr. James Wilson', title: 'Quantum Computing Lead, Zion Tech Group', avatar: '/api/placeholder/60/60' },
        { name: 'Dr. Emily Zhang', title: 'Quantum Researcher, IBM', avatar: '/api/placeholder/60/60' }
      ],
      topics: ['Quantum Computing', 'Enterprise Applications', 'Quantum Algorithms', 'Implementation Strategy'],
      capacity: 200,
      registered: 156,
      price: 'Free',
      isVirtual: true,
      hasRecording: true,
      featured: false
    },
    {
      id: 3,
      title: 'Cybersecurity Compliance Workshop: SOC2 & Beyond',
      category: 'cybersecurity',
      type: 'workshop',
      date: '2025-03-05',
      time: '10:00 AM - 04:00 PM EST',
      location: 'San Francisco, CA',
      description: 'Hands-on workshop covering SOC2 compliance, security best practices, and implementing robust cybersecurity frameworks in your organization.',
      speakers: [
        { name: 'Alex Johnson', title: 'Security Compliance Director, Zion Tech Group', avatar: '/api/placeholder/60/60' },
        { name: 'Maria Garcia', title: 'Cybersecurity Consultant, SecureNet', avatar: '/api/placeholder/60/60' }
      ],
      topics: ['SOC2 Compliance', 'Cybersecurity Frameworks', 'Risk Assessment', 'Security Implementation'],
      capacity: 50,
      registered: 48,
      price: '$299',
      isVirtual: false,
      hasRecording: false,
      featured: false
    },
    {
      id: 4,
      title: 'Cloud Infrastructure & DevOps Masterclass',
      category: 'cloud',
      type: 'workshop',
      date: '2025-02-20',
      time: '09:00 AM - 05:00 PM EST',
      location: 'Virtual',
      description: 'Master cloud infrastructure management, DevOps practices, and automation strategies for scalable, reliable systems.',
      speakers: [
        { name: 'David Kim', title: 'Cloud Architecture Lead, Zion Tech Group', avatar: '/api/placeholder/60/60' },
        { name: 'Rachel Green', title: 'DevOps Engineer, CloudScale', avatar: '/api/placeholder/60/60' }
      ],
      topics: ['Cloud Architecture', 'DevOps Practices', 'Infrastructure as Code', 'Automation'],
      capacity: 100,
      registered: 89,
      price: '$199',
      isVirtual: true,
      hasRecording: true,
      featured: false
    },
    {
      id: 5,
      title: 'AI-Powered Marketing Automation Deep Dive',
      category: 'webinars',
      type: 'webinar',
      date: '2025-02-15',
      time: '01:00 PM - 02:30 PM EST',
      location: 'Virtual',
      description: 'Explore advanced AI marketing automation techniques, customer segmentation, and personalized campaign optimization strategies.',
      speakers: [
        { name: 'Jennifer Lee', title: 'AI Marketing Specialist, Zion Tech Group', avatar: '/api/placeholder/60/60' },
        { name: 'Tom Anderson', title: 'Marketing Technology Consultant', avatar: '/api/placeholder/60/60' }
      ],
      topics: ['AI Marketing', 'Marketing Automation', 'Customer Segmentation', 'Campaign Optimization'],
      capacity: 300,
      registered: 267,
      price: 'Free',
      isVirtual: true,
      hasRecording: true,
      featured: false
    },
    {
      id: 6,
      title: 'Future of Work: AI & Human Collaboration',
      category: 'conferences',
      type: 'conference',
      date: '2025-04-10',
      time: '08:00 AM - 06:00 PM EST',
      location: 'Austin, TX',
      description: 'A forward-looking conference exploring how AI and humans will collaborate in the workplace of the future.',
      speakers: [
        { name: 'Dr. Robert Chen', title: 'AI Ethics Researcher, Zion Tech Group', avatar: '/api/placeholder/60/60' },
        { name: 'Dr. Amanda Foster', title: 'Workplace Psychology Expert, Stanford', avatar: '/api/placeholder/60/60' },
        { name: 'Carlos Rodriguez', title: 'HR Innovation Director, FutureCorp', avatar: '/api/placeholder/60/60' }
      ],
      topics: ['AI Ethics', 'Human-AI Collaboration', 'Workplace Innovation', 'Future of Work'],
      capacity: 300,
      registered: 189,
      price: '$399',
      isVirtual: false,
      hasRecording: false,
      featured: true
    }
  ];

  const filteredEvents = events.filter(event => {
    const categoryMatch = selectedCategory === 'all' || event.category === selectedCategory;
    const searchMatch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       event.topics.some(topic => topic.toLowerCase().includes(searchQuery.toLowerCase()));
    
    let timeframeMatch = true;
    if (selectedTimeframe === 'upcoming') {
      timeframeMatch = new Date(event.date) > new Date();
    } else if (selectedTimeframe === 'this-month') {
      const now = new Date();
      const eventDate = new Date(event.date);
      timeframeMatch = eventDate.getMonth() === now.getMonth() && eventDate.getFullYear() === now.getFullYear();
    } else if (selectedTimeframe === 'next-month') {
      const now = new Date();
      const eventDate = new Date(event.date);
      const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
      timeframeMatch = eventDate.getMonth() === nextMonth.getMonth() && eventDate.getFullYear() === nextMonth.getFullYear();
    } else if (selectedTimeframe === 'past') {
      timeframeMatch = new Date(event.date) < new Date();
    }
    
    return categoryMatch && searchMatch && timeframeMatch;
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

  const getTimeUntilEvent = (dateString: string) => {
    const eventDate = new Date(dateString);
    const now = new Date();
    const diffTime = eventDate.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return 'Past Event';
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Tomorrow';
    if (diffDays < 7) return `${diffDays} days`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks`;
    return `${Math.ceil(diffDays / 30)} months`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Events & Webinars
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Join us for cutting-edge insights, hands-on workshops, and networking opportunities 
              with industry leaders and technology experts.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search events, topics, or speakers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-lg"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400'
                        : 'border-gray-600 text-gray-400 hover:border-cyan-500/50 hover:text-cyan-400'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Timeframe Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {timeframes.map((timeframe) => (
                <button
                  key={timeframe.id}
                  onClick={() => setSelectedTimeframe(timeframe.id)}
                  className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedTimeframe === timeframe.id
                      ? 'border-purple-500 bg-purple-500/20 text-purple-400'
                      : 'border-gray-600 text-gray-400 hover:border-purple-500/50 hover:text-purple-400'
                  }`}
                >
                  {timeframe.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Featured Events
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredEvents.filter(event => event.featured).map((event) => (
              <div key={event.id} className="bg-gray-800/50 rounded-xl border border-cyan-500/30 overflow-hidden hover:border-cyan-500/50 transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                      Featured
                    </span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full border border-purple-500/30">
                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-cyan-400" />
                      <span className="text-gray-300">{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-purple-400" />
                      <span className="text-gray-300">{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">{event.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-300 text-sm">
                        {event.registered}/{event.capacity} registered
                      </span>
                    </div>
                    <div className="text-2xl font-bold text-cyan-400">
                      {event.price}
                    </div>
                  </div>
                  
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Events Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            All Events
          </h2>
          
          {filteredEvents.length === 0 ? (
            <div className="text-center py-20">
              <Calendar className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">
                No events found
              </h3>
              <p className="text-gray-500">
                Try adjusting your filters or search terms to see more events.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.filter(event => !event.featured).map((event) => (
                <div key={event.id} className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden hover:border-cyan-500/50 transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full border border-purple-500/30">
                        {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                      </span>
                      <span className="text-sm text-cyan-400 font-medium">
                        {getTimeUntilEvent(event.date)}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-white line-clamp-2">
                      {event.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {event.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2 text-sm">
                        <Calendar className="w-4 h-4 text-cyan-400" />
                        <span className="text-gray-300">{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <MapPin className="w-4 h-4 text-purple-400" />
                        <span className="text-gray-300">{event.location}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm text-gray-400">
                        {event.registered}/{event.capacity} spots
                      </div>
                      <div className="font-semibold text-cyan-400">
                        {event.price}
                      </div>
                    </div>
                    
                    <button className="w-full px-4 py-2 bg-cyan-500/20 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300">
                      Register
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Host Your Own Event
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Want to share your expertise or host a workshop? Partner with us to create 
            engaging events that benefit the technology community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Partner With Us
            </Link>
            <Link
              to="/webinars"
              className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              <Video className="w-5 h-5 mr-2" />
              View Webinars
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}