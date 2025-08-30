import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Star, 
  ArrowRight,
  Search,
  Filter,
  ExternalLink,
  Play,
  BookOpen,
  Award,
  TrendingUp,
  Globe,
  Building,
  Brain,
  Shield,
  Zap,
  Rocket,
  Cpu,
  Database,
  Network,
  Lock,
  Heart,
  Leaf,
  Sun,
  Moon,
  Star as StarIcon,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
  MapPin as MapPinIcon
} from 'lucide-react';

export default function Events() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('date');

  const categories = [
    'All',
    'AI & Machine Learning',
    'Cybersecurity',
    'Cloud Computing',
    'Digital Transformation',
    'IoT & Edge Computing',
    'Blockchain',
    'Quantum Computing',
    'Healthcare Technology',
    'Financial Technology',
    'Sustainability',
    'Emerging Technologies'
  ];

  const events = [
    {
      id: 1,
      title: 'AI Revolution Summit 2027',
      subtitle: 'The Future of Artificial Intelligence in Business',
      category: 'AI & Machine Learning',
      date: '2027-03-15',
      time: '09:00 AM - 05:00 PM',
      location: 'San Francisco Convention Center',
      virtual: true,
      inPerson: true,
      attendees: 2500,
      featured: true,
      description: 'Join industry leaders and AI experts for a comprehensive exploration of how artificial intelligence is transforming business operations and creating new opportunities.',
      speakers: [
        'Dr. Sarah Chen - AI Research Director',
        'Michael Rodriguez - Chief Technology Officer',
        'Lisa Park - AI Ethics Specialist'
      ],
      agenda: [
        'Keynote: The AI Revolution in 2027',
        'Panel: Ethical AI Implementation',
        'Workshop: Building AI-Powered Solutions',
        'Networking & Innovation Showcase'
      ],
      registrationUrl: '/events/ai-revolution-summit-2027',
      image: '/images/events/ai-summit-2027.jpg'
    },
    {
      id: 2,
      title: 'Quantum Computing Workshop',
      subtitle: 'Hands-on Experience with Quantum Technologies',
      category: 'Quantum Computing',
      date: '2027-02-28',
      time: '10:00 AM - 04:00 PM',
      location: 'Virtual Event',
      virtual: true,
      inPerson: false,
      attendees: 500,
      featured: false,
      description: 'Get hands-on experience with quantum computing technologies and learn how to implement quantum solutions in your organization.',
      speakers: [
        'Dr. James Thompson - Quantum Computing Expert',
        'Alex Johnson - Quantum Software Engineer'
      ],
      agenda: [
        'Introduction to Quantum Computing',
        'Quantum Algorithms Workshop',
        'Real-world Applications',
        'Q&A Session'
      ],
      registrationUrl: '/events/quantum-computing-workshop',
      image: '/images/events/quantum-workshop.jpg'
    },
    {
      id: 3,
      title: 'Cybersecurity Innovation Forum',
      subtitle: 'Next-Generation Security Solutions',
      category: 'Cybersecurity',
      date: '2027-03-22',
      time: '08:00 AM - 06:00 PM',
      location: 'New York Marriott Marquis',
      virtual: true,
      inPerson: true,
      attendees: 1800,
      featured: true,
      description: 'Explore cutting-edge cybersecurity solutions and learn from security experts about protecting your organization from emerging threats.',
      speakers: [
        'David Kim - Chief Security Officer',
        'Dr. Maria Garcia - Cybersecurity Researcher',
        'Robert Wilson - Threat Intelligence Analyst'
      ],
      agenda: [
        'Keynote: The Future of Cybersecurity',
        'Panel: Zero Trust Architecture',
        'Workshop: Incident Response',
        'Security Solutions Expo'
      ],
      registrationUrl: '/events/cybersecurity-innovation-forum',
      image: '/images/events/cybersecurity-forum.jpg'
    },
    {
      id: 4,
      title: 'Blockchain & Web3 Conference',
      subtitle: 'Decentralized Future of Technology',
      category: 'Blockchain',
      date: '2027-04-05',
      time: '09:00 AM - 05:00 PM',
      location: 'Austin Convention Center',
      virtual: true,
      inPerson: true,
      attendees: 1200,
      featured: false,
      description: 'Discover the latest developments in blockchain technology and Web3 applications that are reshaping industries.',
      speakers: [
        'Emily Watson - Blockchain Architect',
        'Chris Anderson - DeFi Specialist',
        'Sarah Mitchell - Web3 Developer'
      ],
      agenda: [
        'Keynote: Web3 Revolution',
        'Panel: DeFi & NFTs',
        'Workshop: Smart Contract Development',
        'Blockchain Solutions Showcase'
      ],
      registrationUrl: '/events/blockchain-web3-conference',
      image: '/images/events/blockchain-conference.jpg'
    },
    {
      id: 5,
      title: 'Edge Computing Symposium',
      subtitle: 'Computing at the Network Edge',
      category: 'IoT & Edge Computing',
      date: '2027-04-18',
      time: '10:00 AM - 03:00 PM',
      location: 'Virtual Event',
      virtual: true,
      inPerson: false,
      attendees: 800,
      featured: false,
      description: 'Learn about edge computing technologies and how they enable real-time processing and analytics for IoT applications.',
      speakers: [
        'Dr. Emily Watson - Edge Computing Researcher',
        'Mark Davis - IoT Solutions Architect'
      ],
      agenda: [
        'Introduction to Edge Computing',
        'Edge AI & Machine Learning',
        'IoT Integration Strategies',
        'Case Studies & Best Practices'
      ],
      registrationUrl: '/events/edge-computing-symposium',
      image: '/images/events/edge-computing.jpg'
    },
    {
      id: 6,
      title: 'Digital Transformation Summit',
      subtitle: 'Transforming Business Through Technology',
      category: 'Digital Transformation',
      date: '2027-05-10',
      time: '08:00 AM - 06:00 PM',
      location: 'Chicago McCormick Place',
      virtual: true,
      inPerson: true,
      attendees: 2200,
      featured: true,
      description: 'Explore strategies and technologies for successful digital transformation initiatives that drive business growth and innovation.',
      speakers: [
        'Jennifer Lee - Digital Transformation Consultant',
        'Dr. Robert Chen - Change Management Expert',
        'Amanda Rodriguez - Technology Strategist'
      ],
      agenda: [
        'Keynote: Digital Transformation Success',
        'Panel: Change Management',
        'Workshop: Technology Roadmapping',
        'Innovation & Transformation Expo'
      ],
      registrationUrl: '/events/digital-transformation-summit',
      image: '/images/events/digital-transformation.jpg'
    }
  ];

  const filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const sortedEvents = [...filteredEvents].sort((a, b) => {
    switch (sortBy) {
      case 'date':
        return new Date(a.date) - new Date(b.date);
      case 'attendees':
        return b.attendees - a.attendees;
      case 'title':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  const featuredEvents = events.filter(event => event.featured);

  const EventCard = ({ event }: { event: any }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
      >
        <div className="mb-4">
          <div className="flex items-center justify-between mb-3">
            <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
              {event.category}
            </span>
            {event.featured && (
              <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm rounded-full">
                Featured
              </span>
            )}
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-gray-400 mb-2">
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {new Date(event.date).toLocaleDateString()}
            </span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {event.time}
            </span>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-gray-400 mb-3">
            <span className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              {event.location}
            </span>
            <span className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              {event.attendees.toLocaleString()}
            </span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
        <p className="text-gray-300 text-sm mb-3">{event.subtitle}</p>
        <p className="text-gray-400 text-sm mb-4">{event.description}</p>
        
        <div className="mb-4">
          <h4 className="text-white font-semibold mb-2 text-sm">Featured Speakers:</h4>
          <ul className="space-y-1">
            {event.speakers.slice(0, 2).map((speaker: string, index: number) => (
              <li key={index} className="flex items-center text-gray-300 text-sm">
                <CheckCircle className="text-green-400 w-3 h-3 mr-2 flex-shrink-0" />
                {speaker}
              </li>
            ))}
            {event.speakers.length > 2 && (
              <li className="text-gray-400 text-sm">
                +{event.speakers.length - 2} more speakers
              </li>
            )}
          </ul>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-slate-700">
          <div className="flex items-center space-x-2">
            {event.virtual && (
              <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded border border-blue-500/30">
                Virtual
              </span>
            )}
            {event.inPerson && (
              <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded border border-green-500/30">
                In-Person
              </span>
            )}
          </div>
          
          <a
            href={event.registrationUrl}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 text-sm"
          >
            Register Now
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </motion.div>
    );
  };

  return (
    <>
      <SEO
        title="Events | Zion Tech Group"
        description="Join our technology events, conferences, and workshops. Learn from industry experts and discover the latest innovations in AI, cybersecurity, and emerging technologies."
        keywords="technology events, AI conferences, cybersecurity workshops, tech meetups, Zion Tech Group events"
        canonical="https://ziontechgroup.com/events"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Technology Events & Conferences
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Join our cutting-edge technology events, workshops, and conferences. Connect with industry experts and discover the latest innovations.
            </p>
            
            {/* Search and Filter Controls */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search events..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                
                {/* Category Filter */}
                <div>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                
                {/* Sort By */}
                <div>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="date">Sort by Date</option>
                    <option value="attendees">Sort by Attendees</option>
                    <option value="title">Sort by Title</option>
                  </select>
                </div>
                
                {/* Results Count */}
                <div className="flex items-center justify-center">
                  <span className="text-gray-300">
                    {filteredEvents.length} of {events.length} events
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Events */}
        {featuredEvents.length > 0 && (
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                Featured Events
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredEvents.map((event) => (
                  <div
                    key={event.id}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-2">
                        <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm rounded-full">
                          Featured
                        </span>
                        <span className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full">
                          {event.category}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3">{event.title}</h3>
                    <p className="text-gray-300 mb-4">{event.subtitle}</p>
                    <p className="text-gray-400 text-sm mb-6">{event.description}</p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(event.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {event.time}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {event.location}
                        </span>
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {event.attendees.toLocaleString()}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Agenda Highlights:</h4>
                      <ul className="space-y-2">
                        {event.agenda.slice(0, 3).map((item: string, index: number) => (
                          <li key={index} className="flex items-center text-gray-300 text-sm">
                            <CheckCircle className="text-green-400 w-4 h-4 mr-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                        {event.agenda.length > 3 && (
                          <li className="text-gray-400 text-sm">
                            +{event.agenda.length - 3} more sessions
                          </li>
                        )}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {event.virtual && (
                          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded border border-blue-500/30">
                            Virtual
                          </span>
                        )}
                        {event.inPerson && (
                          <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded border border-green-500/30">
                            In-Person
                          </span>
                        )}
                      </div>
                      
                      <a
                        href={event.registrationUrl}
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                      >
                        Register Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Events Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              All Events
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>

            {filteredEvents.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No events found</h3>
                <p className="text-gray-300">Try adjusting your search criteria or filters.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated with Our Events
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get notified about upcoming events, workshops, and conferences. Join our community of technology professionals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Contact Our Team
              </a>
              <a 
                href="/services"
                className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Explore Our Services
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
