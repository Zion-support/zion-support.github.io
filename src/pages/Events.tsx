import React from 'react';
import { Link } from 'react-router-dom';
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
            initial={{ opacity: 0, y: 30 }}
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

interface Speaker {
  id: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
  bio: string;
}

const Events: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('upcoming');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null);

  const eventTypes = [
    { id: 'all', name: 'All Events', icon: Calendar, count: 24 },
    { id: 'conference', name: 'Conferences', icon: Users2, count: 8 },
    { id: 'webinar', name: 'Webinars', icon: Video, count: 12 },
    { id: 'workshop', name: 'Workshops', icon: BookOpen, count: 3 },
    { id: 'meetup', name: 'Meetups', icon: Network, count: 1 }
  ];

  const eventCategories = [
    { id: 'all', name: 'All Categories', icon: Tag, count: 24 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 10 },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, count: 4 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 6 },
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: Cloud, count: 4 }
  ];

  const events: Event[] = [
    {
      id: '1',
      title: 'AI Enterprise Summit 2025',
      description: 'Join industry leaders and AI experts for a comprehensive exploration of enterprise AI adoption, implementation strategies, and future trends.',
      date: '2025-03-15',
      time: '9:00 AM - 5:00 PM',
      location: 'San Francisco, CA',
      type: 'conference',
      category: 'ai-ml',
      speakers: [
        {
          id: '1',
          name: 'Dr. Sarah Chen',
          title: 'Chief AI Officer',
          company: 'Zion Tech Group',
          avatar: '/api/placeholder/60/60',
          bio: 'Leading expert in enterprise AI strategy and implementation'
        },
        {
          id: '2',
          name: 'Michael Rodriguez',
          title: 'VP of Technology',
          company: 'TechCorp Inc.',
          avatar: '/api/placeholder/60/60',
          bio: 'Pioneer in AI-driven business transformation'
        }
      ],
      attendees: 450,
      maxAttendees: 500,
      price: '$299',
      status: 'upcoming',
      featured: true,
      image: '/api/placeholder/400/250',
      tags: ['AI', 'Enterprise', 'Strategy', 'Innovation'],
      registrationUrl: 'https://events.ziontechgroup.com/ai-summit-2025'
    },
    {
      id: '2',
      title: 'Quantum Computing Workshop Series',
      description: 'Hands-on workshop covering quantum algorithms, quantum machine learning, and practical applications in business.',
      date: '2025-02-28',
      time: '2:00 PM - 6:00 PM',
      location: 'Virtual',
      type: 'workshop',
      category: 'quantum',
      speakers: [
        {
          id: '3',
          name: 'Dr. James Wilson',
          title: 'Quantum Research Lead',
          company: 'Zion Tech Group',
          avatar: '/api/placeholder/60/60',
          bio: 'Quantum computing researcher with 15+ years of experience'
        }
      ],
      attendees: 75,
      maxAttendees: 100,
      price: '$99',
      status: 'upcoming',
      featured: true,
      image: '/api/placeholder/400/250',
      tags: ['Quantum', 'Workshop', 'Hands-on', 'ML'],
      registrationUrl: 'https://events.ziontechgroup.com/quantum-workshop'
    },
    {
      id: '3',
      title: 'Cybersecurity in the AI Era',
      description: 'Explore the intersection of AI and cybersecurity, covering threats, defenses, and emerging security paradigms.',
      date: '2025-02-20',
      time: '1:00 PM - 3:00 PM',
      location: 'Virtual',
      type: 'webinar',
      category: 'cybersecurity',
      speakers: [
        {
          id: '4',
          name: 'Lisa Thompson',
          title: 'Security Architect',
          company: 'Zion Tech Group',
          avatar: '/api/placeholder/60/60',
          bio: 'Cybersecurity expert specializing in AI-powered security solutions'
        }
      ],
      attendees: 200,
      maxAttendees: 300,
      price: 'Free',
      status: 'upcoming',
      featured: false,
      image: '/api/placeholder/400/250',
      tags: ['Cybersecurity', 'AI', 'Security', 'Webinar'],
      registrationUrl: 'https://events.ziontechgroup.com/cyber-ai-webinar'
    },
    {
      id: '4',
      title: 'Cloud Infrastructure Best Practices',
      description: 'Learn about modern cloud architecture, scalability, and cost optimization strategies for enterprise applications.',
      date: '2025-02-15',
      time: '10:00 AM - 12:00 PM',
      location: 'Virtual',
      type: 'webinar',
      category: 'cloud',
      speakers: [
        {
          id: '5',
          name: 'David Kim',
          title: 'Cloud Solutions Architect',
          company: 'Zion Tech Group',
          avatar: '/api/placeholder/60/60',
          bio: 'Expert in cloud architecture and infrastructure optimization'
        }
      ],
      attendees: 150,
      maxAttendees: 200,
      price: 'Free',
      status: 'upcoming',
      featured: false,
      image: '/api/placeholder/400/250',
      tags: ['Cloud', 'Infrastructure', 'Architecture', 'Best Practices'],
      registrationUrl: 'https://events.ziontechgroup.com/cloud-webinar'
    },
    {
      id: '5',
      title: 'AI for Financial Services',
      description: 'Discover how AI is transforming financial services, from algorithmic trading to risk assessment and customer service.',
      date: '2025-02-10',
      time: '3:00 PM - 5:00 PM',
      location: 'New York, NY',
      type: 'meetup',
      category: 'ai-ml',
      speakers: [
        {
          id: '6',
          name: 'Dr. Robert Johnson',
          title: 'AI Solutions Director',
          company: 'Zion Tech Group',
          avatar: '/api/placeholder/60/60',
          bio: 'Specialist in AI applications for financial services'
        }
      ],
      attendees: 45,
      maxAttendees: 60,
      price: '$25',
      status: 'upcoming',
      featured: false,
      image: '/api/placeholder/400/250',
      tags: ['AI', 'Finance', 'Trading', 'Risk Management'],
      registrationUrl: 'https://events.ziontechgroup.com/ai-finance-meetup'
    },
    {
      id: '6',
      title: 'Machine Learning Fundamentals',
      description: 'Comprehensive introduction to machine learning concepts, algorithms, and practical implementation.',
      date: '2025-01-30',
      time: '9:00 AM - 4:00 PM',
      location: 'Virtual',
      type: 'workshop',
      category: 'ai-ml',
      speakers: [
        {
          id: '7',
          name: 'Dr. Emily Davis',
          title: 'ML Research Scientist',
          company: 'Zion Tech Group',
          avatar: '/api/placeholder/60/60',
          bio: 'Machine learning researcher with expertise in deep learning and NLP'
        }
      ],
      attendees: 120,
      maxAttendees: 120,
      price: '$149',
      status: 'completed',
      featured: false,
      image: '/api/placeholder/400/250',
      tags: ['Machine Learning', 'Fundamentals', 'Workshop', 'Education'],
      recordingUrl: 'https://events.ziontechgroup.com/ml-fundamentals-recording'
    }
  ];

  const filteredEvents = events.filter(event => {
    if (selectedType !== 'all' && event.type !== selectedType) return false;
    if (selectedCategory !== 'all' && event.category !== selectedCategory) return false;
    if (selectedStatus !== 'all' && event.status !== selectedStatus) return false;
    if (searchQuery) {
      return event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
             event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
             event.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    return true;
  });

  const upcomingEvents = filteredEvents.filter(event => event.status === 'upcoming');
  const completedEvents = filteredEvents.filter(event => event.status === 'completed');

  const toggleEventExpansion = (eventId: string) => {
    setExpandedEvent(expandedEvent === eventId ? null : eventId);
  };

  const getEventTypeIcon = (type: string) => {
    switch (type) {
      case 'conference': return Users2;
      case 'webinar': return Video;
      case 'workshop': return BookOpen;
      case 'meetup': return Network;
      case 'hackathon': return Code;
      default: return Calendar;
    }
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'conference': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'webinar': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'workshop': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'meetup': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'hackathon': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'ai-ml': return Brain;
      case 'quantum': return Atom;
      case 'cybersecurity': return Shield;
      case 'cloud': return Cloud;
      default: return Tag;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-slate-900/50 backdrop-blur-md border-b border-slate-700/50">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Events & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Conferences</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Join us for cutting-edge conferences, workshops, and webinars. 
                Connect with industry experts and stay ahead of technology trends.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-800/30 backdrop-blur-md rounded-xl p-6 border border-slate-700/50"
          >
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Search */}
              <div className="lg:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-2">Search Events</label>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by title, description, or tags..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
              </div>

              {/* Event Type Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Event Type</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  {eventTypes.map(type => (
                    <option key={type.id} value={type.id}>
                      {type.name} ({type.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Status Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Status</label>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="upcoming">Upcoming</option>
                  <option value="ongoing">Ongoing</option>
                  <option value="completed">Completed</option>
                  <option value="all">All</option>
                </select>
              </div>
            </div>

            {/* Category Filter */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-300 mb-3">Categories</label>
              <div className="flex flex-wrap gap-3">
                {eventCategories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg border transition-all duration-300 flex items-center gap-2 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500/50'
                        : 'bg-slate-700/50 text-gray-300 border-slate-600 hover:border-cyan-500/30'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Events */}
      {upcomingEvents.filter(event => event.featured).length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Featured Events</h2>
              <p className="text-xl text-gray-300">Don't miss these upcoming highlights</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {upcomingEvents.filter(event => event.featured).map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/30 backdrop-blur-md rounded-xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <div className="text-center">
                      <Calendar className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                      <p className="text-gray-400">Event Image</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getEventTypeColor(event.type)}`}>
                        {eventTypes.find(t => t.id === event.type)?.name}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                        Featured
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3">{event.title}</h3>
                    <p className="text-gray-300 mb-4">{event.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Users className="w-4 h-4" />
                        <span>{event.attendees}/{event.maxAttendees}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-cyan-400">{event.price}</span>
                      <a
                        href={event.registrationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center gap-2"
                      >
                        Register Now
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Upcoming Events */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-300">Explore our calendar of upcoming events</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.filter(event => !event.featured).map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/30 backdrop-blur-md rounded-xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                  <div className="text-center">
                    <Calendar className="w-12 h-12 text-cyan-400 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">Event Image</p>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getEventTypeColor(event.type)}`}>
                      {eventTypes.find(t => t.id === event.type)?.name}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-gray-300 text-sm mb-3 line-clamp-2">{event.description}</p>
                  
                  <div className="space-y-2 mb-4 text-xs text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-cyan-400">{event.price}</span>
                    <button
                      onClick={() => toggleEventExpansion(event.id)}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      {expandedEvent === event.id ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  
                  {expandedEvent === event.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-slate-600/50"
                    >
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-white mb-2">Speakers:</h4>
                        <div className="space-y-2">
                          {event.speakers.map(speaker => (
                            <div key={speaker.id} className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center">
                                <Users className="w-4 h-4 text-cyan-400" />
                              </div>
                              <div>
                                <p className="text-sm font-medium text-white">{speaker.name}</p>
                                <p className="text-xs text-gray-400">{speaker.title} at {speaker.company}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-white mb-2">Tags:</h4>
                        <div className="flex flex-wrap gap-1">
                          {event.tags.map(tag => (
                            <span key={tag} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <a
                        href={event.registrationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                      >
                        Register Now
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {upcomingEvents.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-400 text-lg">No upcoming events match your current filters. Try adjusting your search criteria.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Past Events */}
      {completedEvents.length > 0 && (
        <section className="py-20 bg-slate-800/20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Past Events</h2>
              <p className="text-xl text-gray-300">Missed an event? Check out recordings and materials</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {completedEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/30 backdrop-blur-md rounded-xl overflow-hidden border border-slate-700/50"
                >
                  <div className="aspect-video bg-gradient-to-br from-gray-500/20 to-gray-600/20 flex items-center justify-center">
                    <div className="text-center">
                      <Play className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-400 text-sm">Event Recording</p>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getEventTypeColor(event.type)}`}>
                        {eventTypes.find(t => t.id === event.type)?.name}
                      </span>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-500/20 text-gray-400 border border-gray-500/30">
                        Completed
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-2">{event.title}</h3>
                    <p className="text-gray-300 text-sm mb-3">{event.description}</p>
                    
                    <div className="space-y-2 mb-4 text-xs text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-3 h-3" />
                        <span>{event.attendees} attendees</span>
                      </div>
                    </div>
                    
                    {event.recordingUrl && (
                      <a
                        href={event.recordingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full px-4 py-2 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                      >
                        <Play className="w-4 h-4" />
                        Watch Recording
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Stay Updated</h2>
            <p className="text-xl text-gray-300 mb-8">
              Never miss an important event. Subscribe to our newsletter and get notified about upcoming events, 
              early bird discounts, and exclusive content.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Subscribe to Newsletter
              </a>
              <a
                href="mailto:events@ziontechgroup.com"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Events Team
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-300">events@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-gray-300">+1 (302) 464-0950</p>
              </div>
              <div className="text-center">
                <MapPinIcon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-gray-300">Middletown, DE</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Events;
