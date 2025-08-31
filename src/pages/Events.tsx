import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, Clock, MapPin, Users, Search, Filter, 
  Star, ExternalLink, ArrowRight, Play, Download,
  BookOpen, Video, Mic, Award, Globe, Building
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function Events() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const eventCategories = [
    { id: 'all', name: 'All Events', count: 18 },
    { id: 'conferences', name: 'Conferences', count: 6 },
    { id: 'webinars', name: 'Webinars', count: 8 },
    { id: 'workshops', name: 'Workshops', count: 3 },
    { id: 'meetups', name: 'Meetups', count: 1 }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'AI Innovation Summit 2024',
      description: 'Join us for our flagship annual conference where industry leaders, researchers, and innovators come together to explore the future of artificial intelligence and its impact on business and society.',
      category: 'conferences',
      date: '2024-03-15',
      time: '9:00 AM - 6:00 PM EST',
      location: 'San Francisco, CA',
      venue: 'Moscone Center',
      capacity: 2000,
      registered: 1847,
      featured: true,
      image: '/events/ai-innovation-summit-2024.jpg',
      registrationUrl: 'https://ziontechgroup.com/events/ai-innovation-summit-2024',
      speakers: [
        { name: 'Dr. Sarah Chen', role: 'CEO, Zion Tech Group', topic: 'The Future of AI in Enterprise' },
        { name: 'Marcus Rodriguez', role: 'CTO, Zion Tech Group', topic: 'Quantum-AI Hybrid Computing' },
        { name: 'Dr. Emily Watson', role: 'Chief AI Officer, Zion Tech Group', topic: 'Ethical AI Development' }
      ],
      highlights: [
        'Keynote presentations from AI industry leaders',
        'Interactive workshops and hands-on sessions',
        'Networking opportunities with AI professionals',
        'Exhibition of latest AI technologies and solutions'
      ],
      tags: ['AI', 'Innovation', 'Enterprise', 'Networking']
    },
    {
      id: 2,
      title: 'Quantum Computing Conference',
      description: 'Explore the revolutionary potential of quantum computing and its applications in AI, cryptography, and scientific research. Learn from experts about the latest breakthroughs and practical implementations.',
      category: 'conferences',
      date: '2024-04-20',
      time: '10:00 AM - 5:00 PM EST',
      location: 'New York, NY',
      venue: 'Javits Center',
      capacity: 800,
      registered: 623,
      featured: true,
      image: '/events/quantum-computing-conference-2024.jpg',
      registrationUrl: 'https://ziontechgroup.com/events/quantum-computing-conference-2024',
      speakers: [
        { name: 'Marcus Rodriguez', role: 'CTO, Zion Tech Group', topic: 'Quantum-AI Integration' },
        { name: 'Dr. Alex Johnson', role: 'Head of R&D, Zion Tech Group', topic: 'Quantum Machine Learning' }
      ],
      highlights: [
        'Technical deep-dives into quantum algorithms',
        'Real-world quantum computing applications',
        'Panel discussions on quantum supremacy',
        'Hands-on quantum programming workshops'
      ],
      tags: ['Quantum Computing', 'AI', 'Research', 'Technology']
    },
    {
      id: 3,
      title: 'European Tech Tour 2024',
      description: 'Join our multi-city European tour to learn about Zion Tech Group\'s expansion into European markets. Meet our team and discover how we\'re bringing AI innovation to European businesses.',
      category: 'conferences',
      date: '2024-05-10',
      time: 'Various times',
      location: 'London, Berlin, Paris',
      venue: 'Multiple venues',
      capacity: 1500,
      registered: 892,
      featured: false,
      image: '/events/european-tech-tour-2024.jpg',
      registrationUrl: 'https://ziontechgroup.com/events/european-tech-tour-2024',
      speakers: [
        { name: 'Lisa Thompson', role: 'CFO, Zion Tech Group', topic: 'European Market Strategy' },
        { name: 'Dr. Emily Watson', role: 'Chief AI Officer, Zion Tech Group', topic: 'AI Solutions for European Businesses' }
      ],
      highlights: [
        'Multi-city tour across major European tech hubs',
        'Local market insights and business opportunities',
        'Networking with European tech professionals',
        'Showcase of localized AI solutions'
      ],
      tags: ['Europe', 'Expansion', 'Networking', 'Business']
    }
  ];

  const webinars = [
    {
      id: 4,
      title: 'AI Ethics in Business: A Practical Guide',
      description: 'Learn how to implement ethical AI practices in your organization. This webinar covers bias detection, transparency, and responsible AI governance.',
      category: 'webinars',
      date: '2024-02-28',
      time: '2:00 PM - 3:30 PM EST',
      location: 'Virtual',
      capacity: 500,
      registered: 387,
      featured: false,
      image: '/events/ai-ethics-webinar-2024.jpg',
      registrationUrl: 'https://ziontechgroup.com/events/ai-ethics-webinar-2024',
      speaker: 'Dr. Emily Watson',
      speakerRole: 'Chief AI Officer, Zion Tech Group',
      tags: ['AI Ethics', 'Responsible AI', 'Business', 'Webinar']
    },
    {
      id: 5,
      title: 'Building AI-Powered Cybersecurity Solutions',
      description: 'Discover how artificial intelligence is revolutionizing cybersecurity through advanced threat detection and automated response systems.',
      category: 'webinars',
      date: '2024-03-05',
      time: '1:00 PM - 2:30 PM EST',
      location: 'Virtual',
      capacity: 400,
      registered: 298,
      featured: false,
      image: '/events/ai-cybersecurity-webinar-2024.jpg',
      registrationUrl: 'https://ziontechgroup.com/events/ai-cybersecurity-webinar-2024',
      speaker: 'David Kim',
      speakerRole: 'Chief Security Officer, Zion Tech Group',
      tags: ['Cybersecurity', 'AI Security', 'Threat Detection', 'Webinar']
    }
  ];

  const workshops = [
    {
      id: 6,
      title: 'Hands-on AI Model Training Workshop',
      description: 'Get practical experience training AI models using our platform. This workshop covers data preparation, model selection, training, and deployment.',
      category: 'workshops',
      date: '2024-03-22',
      time: '10:00 AM - 4:00 PM EST',
      location: 'Austin, TX',
      venue: 'Zion Tech Group Austin Office',
      capacity: 50,
      registered: 42,
      featured: false,
      image: '/events/ai-model-training-workshop-2024.jpg',
      registrationUrl: 'https://ziontechgroup.com/events/ai-model-training-workshop-2024',
      instructor: 'Alex Johnson',
      instructorRole: 'Head of Research & Development, Zion Tech Group',
      requirements: ['Basic Python knowledge', 'Laptop with internet access'],
      tags: ['AI Training', 'Machine Learning', 'Hands-on', 'Workshop']
    }
  ];

  const pastEvents = [
    {
      id: 7,
      title: 'AI for Small Business Summit 2023',
      description: 'Our inaugural summit focused on making AI accessible to small and medium-sized businesses.',
      category: 'conferences',
      date: '2023-11-15',
      location: 'Virtual',
      attendees: 1200,
      highlights: [
        'Success stories from small businesses using AI',
        'Practical implementation strategies',
        'Cost-effective AI solutions',
        'Q&A sessions with AI experts'
      ],
      recordingUrl: '/events/recordings/ai-small-business-summit-2023.mp4',
      slidesUrl: '/events/slides/ai-small-business-summit-2023.pdf',
      tags: ['Small Business', 'AI Implementation', 'Success Stories']
    },
    {
      id: 8,
      title: 'Quantum Computing Workshop Series 2023',
      description: 'A series of workshops introducing quantum computing concepts and applications.',
      category: 'workshops',
      date: '2023-10-20',
      location: 'Boston, MA',
      attendees: 150,
      highlights: [
        'Introduction to quantum computing principles',
        'Quantum programming basics',
        'Real-world applications and use cases',
        'Hands-on quantum simulator experience'
      ],
      recordingUrl: '/events/recordings/quantum-workshop-series-2023.mp4',
      slidesUrl: '/events/slides/quantum-workshop-series-2023.pdf',
      tags: ['Quantum Computing', 'Workshop', 'Education', 'Hands-on']
    }
  ];

  const allEvents = [...upcomingEvents, ...webinars, ...workshops];
  const filteredEvents = allEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
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

  const isUpcoming = (event: any) => {
    return new Date(event.date) > new Date();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Events - Zion Tech Group"
        description="Join our upcoming conferences, webinars, workshops, and meetups. Connect with AI experts, learn about cutting-edge technology, and network with industry professionals."
        keywords="events, conferences, webinars, workshops, AI events, technology conferences, Zion Tech Group"
        canonicalUrl="https://ziontechgroup.com/events"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Events</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join our conferences, webinars, workshops, and meetups to learn from AI experts, discover cutting-edge technology, and connect with industry professionals.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex flex-wrap justify-center gap-2">
                {eventCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-blue-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
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
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our flagship conferences and major events that bring together the AI community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents.filter(event => event.featured).map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <span className="px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded-full">
                    Featured
                  </span>
                  <span className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full">
                    {eventCategories.find(cat => cat.id === event.category)?.name}
                  </span>
                  <span className="text-gray-400 text-sm">
                    {event.registered}/{event.capacity} registered
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 hover:text-blue-400 transition-colors cursor-pointer">
                  {event.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  {event.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-4 text-gray-400 text-sm">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(event.date)}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {event.time}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-gray-400 text-sm">
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </span>
                    {event.venue && (
                      <span className="flex items-center">
                        <Building className="w-4 h-4 mr-2" />
                        {event.venue}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">
                      <Users className="w-4 h-4 inline mr-2" />
                      {event.registered}/{event.capacity} registered
                    </span>
                    <span className="text-blue-400 font-medium">
                      {Math.round((event.registered / event.capacity) * 100)}% full
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {event.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={event.registrationUrl}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Register Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Upcoming Events */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              All Upcoming Events
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Browse our complete calendar of upcoming events, webinars, and workshops.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.filter(event => isUpcoming(event) && !event.featured).map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <span className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full">
                    {eventCategories.find(cat => cat.id === event.category)?.name}
                  </span>
                  <span className="text-gray-400 text-sm">
                    {event.registered}/{event.capacity} registered
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 hover:text-blue-400 transition-colors cursor-pointer line-clamp-2">
                  {event.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed mb-6 line-clamp-3">
                  {event.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-4 text-gray-400 text-sm">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(event.date)}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {event.time}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-gray-400 text-sm">
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </span>
                    {event.venue && (
                      <span className="flex items-center">
                        <Building className="w-4 h-4 mr-2" />
                        {event.venue}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {event.tags.slice(0, 2).map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={event.registrationUrl}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 inline-flex items-center"
                  >
                    Register
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredEvents.filter(event => isUpcoming(event) && !event.featured).length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-gray-400 text-lg">No upcoming events found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Past Events
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Watch recordings and download materials from our previous events.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <span className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full">
                    {eventCategories.find(cat => cat.id === event.category)?.name}
                  </span>
                  <span className="text-gray-400 text-sm">
                    {event.attendees} attendees
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 hover:text-blue-400 transition-colors cursor-pointer">
                  {event.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  {event.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-4 text-gray-400 text-sm">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(event.date)}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-gray-400 text-sm font-semibold">Highlights:</p>
                    <ul className="space-y-1">
                      {event.highlights.slice(0, 3).map((highlight, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-center">
                          <Star className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {event.tags.slice(0, 2).map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-2">
                    <a
                      href={event.recordingUrl}
                      className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                      title="Watch Recording"
                    >
                      <Play className="w-4 h-4 text-white" />
                    </a>
                    <a
                      href={event.slidesUrl}
                      download
                      className="p-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
                      title="Download Slides"
                    >
                      <Download className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Attend Our Events?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover the benefits of joining our events and connecting with the AI community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Mic,
                title: 'Expert Speakers',
                description: 'Learn from industry leaders, researchers, and practitioners with deep expertise in AI and technology.'
              },
              {
                icon: Users,
                title: 'Networking',
                description: 'Connect with like-minded professionals, potential partners, and industry experts.'
              },
              {
                icon: BookOpen,
                title: 'Knowledge Sharing',
                description: 'Gain insights from real-world case studies, best practices, and cutting-edge research.'
              },
              {
                icon: Video,
                title: 'Interactive Sessions',
                description: 'Participate in workshops, Q&A sessions, and hands-on demonstrations.'
              },
              {
                icon: Award,
                title: 'Recognition',
                description: 'Get recognized for your contributions and achievements in the AI community.'
              },
              {
                icon: Globe,
                title: 'Global Reach',
                description: 'Connect with professionals from around the world and diverse industries.'
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed text-center">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Updated</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get notified about upcoming events, early bird registrations, and exclusive event content.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                Subscribe
              </button>
            </div>
            
            <p className="text-gray-400 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
