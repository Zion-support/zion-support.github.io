import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Award, 
  Star, 
  Zap, 
  Brain, 
  Shield, 
  Rocket, 
  Heart,
  Linkedin,
  Github,
  Mail,
  Globe,
  Cpu,
  Lock,
  Cloud,
  Atom,
  Crown,
  Sparkles,
  Flame,
  Thunder,
  Lightning,
  Sun,
  Moon,
  Planet,
  Galaxy,
  Universe,
  Infinity,
  Alpha,
  Beta,
  Gamma,
  Delta,
  Epsilon,
  Zeta,
  Eta,
  Theta,
  Iota,
  Kappa,
  Lambda,
  Mu,
  Nu,
  Xi,
  Omicron,
  Pi,
  Rho,
  Sigma,
  Tau,
  Upsilon,
  Phi,
  Chi,
  Psi,
  Omega,
  Clock,
  TrendingUp,
  CheckCircle,
  Building,
  BookOpen,
  MessageCircle,
  HelpCircle,
  DollarSign,
  Settings,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  Calendar,
  User,
  Tag,
  FileText,
  Image,
  Video,
  Search,
  Filter,
  ArrowRight,
  Eye,
  Clock as ClockIcon,
  Users as UsersIcon,
  BarChart3,
  Play,
  CalendarDays,
  Clock,
  Users,
  Mic,
  Camera,
  Headphones,
  CalendarCheck,
  CalendarX,
  CalendarPlus
} from 'lucide-react';

export default function Webinars() {
  const upcomingWebinars = [
    {
      id: 'ai-enterprise-2024',
      title: 'AI-Powered Enterprise Transformation: Strategies for 2024',
      date: '2024-12-20',
      time: '2:00 PM - 3:30 PM EST',
      duration: '90 minutes',
      speaker: 'Dr. Sarah Chen, Chief AI Officer',
      category: 'Artificial Intelligence',
      summary: 'Join us for an in-depth exploration of how AI is transforming enterprise operations. Learn practical strategies for implementation, ROI measurement, and overcoming common challenges.',
      topics: ['AI Strategy', 'Implementation Roadmap', 'ROI Measurement', 'Change Management'],
      maxAttendees: 500,
      registeredAttendees: 342,
      featured: true,
      thumbnail: '/webinars/ai-enterprise-2024.jpg',
      registrationUrl: '#',
      addToCalendar: '#'
    },
    {
      id: 'quantum-computing-business',
      title: 'Quantum Computing in Business: Real-World Applications',
      date: '2024-12-27',
      time: '1:00 PM - 2:30 PM EST',
      duration: '90 minutes',
      speaker: 'David Kim, Head of Quantum Computing',
      category: 'Quantum Computing',
      summary: 'Discover how quantum computing is solving real business problems today. Explore use cases in optimization, cryptography, and machine learning.',
      topics: ['Quantum Algorithms', 'Business Applications', 'Implementation Timeline', 'ROI Analysis'],
      maxAttendees: 300,
      registeredAttendees: 189,
      featured: false,
      thumbnail: '/webinars/quantum-computing-business.jpg',
      registrationUrl: '#',
      addToCalendar: '#'
    },
    {
      id: 'cybersecurity-zero-trust',
      title: 'Zero Trust Cybersecurity: Building Unbreakable Defenses',
      date: '2025-01-03',
      time: '3:00 PM - 4:30 PM EST',
      duration: '90 minutes',
      speaker: 'Alex Thompson, Head of Cybersecurity',
      category: 'Cybersecurity',
      summary: 'Learn how to implement a comprehensive zero-trust security framework that protects your organization from modern threats.',
      topics: ['Zero Trust Architecture', 'Identity Management', 'Network Security', 'Threat Detection'],
      maxAttendees: 400,
      registeredAttendees: 267,
      featured: false,
      thumbnail: '/webinars/cybersecurity-zero-trust.jpg',
      registrationUrl: '#',
      addToCalendar: '#'
    }
  ];

  const pastWebinars = [
    {
      id: 'edge-computing-iot',
      title: 'Edge Computing and IoT: Revolutionizing Data Processing',
      date: '2024-11-15',
      duration: '75 minutes',
      speaker: 'Marcus Rodriguez, Chief Technology Officer',
      category: 'Edge Computing',
      summary: 'Explore how edge computing and IoT technologies are transforming data processing and enabling real-time analytics.',
      topics: ['Edge Computing', 'IoT', 'Real-time Analytics', 'Data Processing'],
      attendees: 456,
      recordingUrl: '#',
      slidesUrl: '#',
      transcriptUrl: '#',
      thumbnail: '/webinars/edge-computing-iot.jpg'
    },
    {
      id: 'ai-healthcare-revolution',
      title: 'The AI Revolution in Healthcare: Improving Patient Outcomes',
      date: '2024-10-28',
      duration: '80 minutes',
      speaker: 'Dr. Priya Patel, Head of Healthcare Technology',
      category: 'Healthcare Technology',
      summary: 'Discover how AI is revolutionizing healthcare delivery, from diagnostic accuracy to personalized treatment plans.',
      topics: ['Healthcare AI', 'Medical Diagnostics', 'Personalized Medicine', 'Operational Efficiency'],
      attendees: 523,
      recordingUrl: '#',
      slidesUrl: '#',
      transcriptUrl: '#',
      thumbnail: '/webinars/ai-healthcare-revolution.jpg'
    },
    {
      id: 'blockchain-enterprise',
      title: 'Blockchain in Enterprise: Beyond Cryptocurrency',
      date: '2024-09-20',
      duration: '70 minutes',
      speaker: 'Priya Patel, Head of Emerging Technologies',
      category: 'Blockchain',
      summary: 'Learn how blockchain technology is transforming enterprise operations, from supply chain management to digital identity.',
      topics: ['Blockchain', 'Supply Chain', 'Smart Contracts', 'Digital Identity'],
      attendees: 389,
      recordingUrl: '#',
      slidesUrl: '#',
      transcriptUrl: '#',
      thumbnail: '/webinars/blockchain-enterprise.jpg'
    },
    {
      id: 'sustainability-green-it',
      title: 'Sustainability in IT: Green Computing Solutions',
      date: '2024-08-15',
      duration: '65 minutes',
      speaker: 'Sustainability Team, Zion Tech Group',
      category: 'Sustainability',
      summary: 'Discover how organizations can implement green IT solutions to reduce environmental impact while improving efficiency.',
      topics: ['Green IT', 'Sustainability', 'Energy Efficiency', 'Environmental Impact'],
      attendees: 312,
      recordingUrl: '#',
      slidesUrl: '#',
      transcriptUrl: '#',
      thumbnail: '/webinars/sustainability-green-it.jpg'
    }
  ];

  const categories = [
    { name: 'All Categories', count: upcomingWebinars.length + pastWebinars.length, color: 'from-gray-500 to-gray-600' },
    { name: 'Artificial Intelligence', count: upcomingWebinars.filter(w => w.category === 'Artificial Intelligence').length + pastWebinars.filter(w => w.category === 'Healthcare Technology').length, color: 'from-purple-500 to-pink-500' },
    { name: 'Quantum Computing', count: upcomingWebinars.filter(w => w.category === 'Quantum Computing').length, color: 'from-indigo-500 to-purple-500' },
    { name: 'Cybersecurity', count: upcomingWebinars.filter(w => w.category === 'Cybersecurity').length, color: 'from-red-500 to-orange-500' },
    { name: 'Edge Computing', count: pastWebinars.filter(w => w.category === 'Edge Computing').length, color: 'from-blue-500 to-cyan-500' },
    { name: 'Blockchain', count: pastWebinars.filter(w => w.category === 'Blockchain').length, color: 'from-yellow-500 to-orange-500' },
    { name: 'Sustainability', count: pastWebinars.filter(w => w.category === 'Sustainability').length, color: 'from-emerald-500 to-teal-500' }
  ];

  const stats = [
    { number: '25+', label: 'Webinars Delivered', icon: Video },
    { number: '15K+', label: 'Attendees', icon: Users },
    { number: '90 min', label: 'Average Duration', icon: Clock },
    { number: '50+', label: 'Expert Speakers', icon: Mic },
    { number: '100%', label: 'Free Access', icon: CheckCircle },
    { number: '24/7', label: 'On-Demand', icon: Play }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Webinars - Zion Tech Group"
        description="Join our expert-led webinars on AI, quantum computing, cybersecurity, and emerging technologies. Free educational sessions with industry leaders."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Expert-Led Webinars
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto mb-8"
          >
            Join industry experts for in-depth discussions on AI, quantum computing, cybersecurity, and emerging technologies. Free educational sessions to keep you ahead of the curve.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center space-x-4"
          >
            <a 
              href="#upcoming-webinars" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
            >
              View Upcoming
            </a>
            <a 
              href="#past-webinars" 
              className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Watch Past Webinars
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-3">
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Upcoming Webinar */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Featured Upcoming Webinar
          </motion.h2>
          
          {upcomingWebinars.filter(w => w.featured).map((webinar, index) => (
            <motion.div
              key={webinar.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 border border-cyan-500/30"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="px-4 py-2 bg-cyan-500 text-white text-sm font-semibold rounded-full">
                      {webinar.category}
                    </span>
                    <span className="text-slate-400 text-sm">{webinar.duration}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{webinar.title}</h3>
                  <p className="text-slate-300 text-lg mb-6 leading-relaxed">{webinar.summary}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Topics:</h4>
                    <div className="flex flex-wrap gap-2">
                      {webinar.topics.map((topic) => (
                        <span 
                          key={topic}
                          className="px-3 py-1 bg-slate-700 text-cyan-400 text-sm rounded-full"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6 mb-6 text-slate-400 text-sm">
                    <div className="flex items-center space-x-2">
                      <CalendarDays className="w-4 h-4" />
                      <span>{webinar.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{webinar.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>{webinar.registeredAttendees}/{webinar.maxAttendees} registered</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <a 
                      href={webinar.registrationUrl}
                      className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                    >
                      <CalendarPlus className="w-4 h-4" />
                      <span>Register Now</span>
                    </a>
                    <a 
                      href={webinar.addToCalendar}
                      className="flex items-center space-x-2 border border-cyan-500 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
                    >
                      <CalendarCheck className="w-4 h-4" />
                      <span>Add to Calendar</span>
                    </a>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                    <h4 className="text-white font-semibold mb-4">Speaker</h4>
                    <div className="flex items-center space-x-3">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                        <User className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h5 className="text-white font-semibold">{webinar.speaker}</h5>
                        <p className="text-slate-400 text-sm">Expert in {webinar.category}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                    <h4 className="text-white font-semibold mb-4">Webinar Details</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Date:</span>
                        <span className="text-white">{webinar.date}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Time:</span>
                        <span className="text-white">{webinar.time}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Duration:</span>
                        <span className="text-white">{webinar.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Category:</span>
                        <span className="text-white">{webinar.category}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section id="upcoming-webinars" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Upcoming Webinars
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingWebinars.filter(w => !w.featured).map((webinar, index) => (
              <motion.div
                key={webinar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-slate-700 text-cyan-400 text-xs font-semibold rounded-full">
                    {webinar.category}
                  </span>
                  <span className="text-slate-400 text-sm">{webinar.duration}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{webinar.title}</h3>
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">{webinar.summary}</p>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Key Topics:</h4>
                  <div className="flex flex-wrap gap-2">
                    {webinar.topics.slice(0, 3).map((topic) => (
                      <span 
                        key={topic}
                        className="px-2 py-1 bg-slate-700 text-cyan-400 text-xs rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-slate-400 text-sm">
                    <div className="flex items-center space-x-1">
                      <CalendarDays className="w-4 h-4" />
                      <span>{webinar.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{webinar.time}</span>
                    </div>
                  </div>
                  <span className="text-slate-400 text-sm">By {webinar.speaker}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-slate-400 text-sm">
                    <Users className="w-4 h-4" />
                    <span>{webinar.registeredAttendees}/{webinar.maxAttendees} registered</span>
                  </div>
                  <a 
                    href={webinar.registrationUrl}
                    className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 text-sm transition-colors"
                  >
                    <span>Register Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Browse by Category
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl mx-auto mb-4 flex items-center justify-center`}>
                  <Video className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white text-center mb-2">{category.name}</h3>
                <p className="text-slate-400 text-center">{category.count} webinars</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Webinars */}
      <section id="past-webinars" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Past Webinars
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastWebinars.map((webinar, index) => (
              <motion.div
                key={webinar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-slate-700 text-cyan-400 text-xs font-semibold rounded-full">
                    {webinar.category}
                  </span>
                  <span className="text-slate-400 text-sm">{webinar.duration}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{webinar.title}</h3>
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">{webinar.summary}</p>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Key Topics:</h4>
                  <div className="flex flex-wrap gap-2">
                    {webinar.topics.slice(0, 3).map((topic) => (
                      <span 
                        key={topic}
                        className="px-2 py-1 bg-slate-700 text-cyan-400 text-xs rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-slate-400 text-sm">
                    <div className="flex items-center space-x-1">
                      <CalendarDays className="w-4 h-4" />
                      <span>{webinar.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{webinar.attendees} attendees</span>
                    </div>
                  </div>
                  <span className="text-slate-400 text-sm">By {webinar.speaker}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <a 
                      href={webinar.recordingUrl}
                      className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors"
                      title="Watch Recording"
                    >
                      <Play className="w-4 h-4" />
                    </a>
                    <a 
                      href={webinar.slidesUrl}
                      className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors"
                      title="Download Slides"
                    >
                      <FileText className="w-4 h-4" />
                    </a>
                    <a 
                      href={webinar.transcriptUrl}
                      className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors"
                      title="Read Transcript"
                    >
                      <BookOpen className="w-4 h-4" />
                    </a>
                  </div>
                  <a 
                    href={webinar.recordingUrl}
                    className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 text-sm transition-colors"
                  >
                    <span>Watch Recording</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-white mb-6"
          >
            Stay Updated with Our Webinars
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto mb-8"
          >
            Get notified about upcoming webinars and access to our library of past sessions. Never miss an opportunity to learn from industry experts.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
            >
              Subscribe to Updates
            </a>
            <a 
              href="/contact" 
              className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Request Custom Webinar
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
