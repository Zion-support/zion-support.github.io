import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Video, 
  Calendar, 
  Clock, 
  Users, 
  Play, 
  ExternalLink,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Filter,
  Search,
  Star,
  Award,
  CheckCircle,
  Zap,
  Brain,
  Rocket,
  Shield,
  Heart,
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
  Clock as ClockIcon,
  Globe,
  Building,
  Industry,
  ChartBar,
  BarChart3,
  PieChart,
  Activity,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
  Minus,
  Plus,
  Eye,
  Download,
  Share2,
  BookOpen,
  Lightbulb,
  Target,
  TrendingUp as TrendingUpIcon,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Github
} from 'lucide-react';

export const Webinars: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'AI & Machine Learning', 'Cloud & DevOps', 'Cybersecurity', 'Digital Transformation', 'IoT & Edge', 'Blockchain', 'Healthcare Tech', 'Sustainability'];
  const statuses = ['All', 'Upcoming', 'Past', 'Live'];

  const webinars = [
    {
      id: 1,
      title: 'The Future of AI-Powered Business Intelligence: Trends and Strategies for 2025',
      speaker: 'Dr. Sarah Chen, CTO',
      date: '2025-02-15',
      time: '14:00 EST',
      duration: '60 minutes',
      category: 'AI & Machine Learning',
      status: 'Upcoming',
      description: 'Join us for an in-depth exploration of emerging AI trends and how they will reshape business intelligence in 2025. Learn practical strategies for implementing AI-powered analytics in your organization.',
      keyTopics: [
        'Emerging AI algorithms and their business applications',
        'Integration strategies for legacy systems',
        'ROI measurement frameworks for AI initiatives',
        'Ethical considerations in AI deployment'
      ],
      attendees: 0,
      maxAttendees: 500,
      featured: true,
      image: '/images/webinars/ai-bi-2025.jpg',
      registrationUrl: '/webinars/ai-bi-2025/register',
      recordingUrl: null,
      slidesUrl: null
    },
    {
      id: 2,
      title: 'Zero-Trust Security Architecture: Implementation Best Practices',
      speaker: 'Lisa Thompson, Head of Cybersecurity',
      date: '2025-01-28',
      time: '15:00 EST',
      duration: '90 minutes',
      category: 'Cybersecurity',
      status: 'Upcoming',
      description: 'Learn how to implement zero-trust security architecture in your organization. This comprehensive session covers practical implementation strategies, common pitfalls, and success metrics.',
      keyTopics: [
        'Core principles of zero-trust architecture',
        'Implementation roadmap and best practices',
        'Integration with existing security infrastructure',
        'Cost-benefit analysis and ROI metrics'
      ],
      attendees: 0,
      maxAttendees: 300,
      featured: true,
      image: '/images/webinars/zero-trust-security.jpg',
      registrationUrl: '/webinars/zero-trust-security/register',
      recordingUrl: null,
      slidesUrl: null
    },
    {
      id: 3,
      title: 'Digital Transformation in Healthcare: Leveraging AI for Patient Outcomes',
      speaker: 'Dr. Emily Watson, Head of AI Research',
      date: '2024-12-15',
      time: '13:00 EST',
      duration: '75 minutes',
      category: 'Healthcare Tech',
      status: 'Past',
      description: 'Discover how AI and digital technologies are transforming healthcare delivery, improving patient outcomes, and reducing operational costs.',
      keyTopics: [
        'AI applications in medical diagnostics',
        'Digital health platform architectures',
        'Regulatory compliance considerations',
        'Success metrics and outcome measurement'
      ],
      attendees: 423,
      maxAttendees: 500,
      featured: false,
      image: '/images/webinars/healthcare-digital.jpg',
      registrationUrl: null,
      recordingUrl: '/webinars/healthcare-digital/recording',
      slidesUrl: '/webinars/healthcare-digital/slides'
    },
    {
      id: 4,
      title: 'Cloud FinOps Optimization: Strategies for Cost Management and Efficiency',
      speaker: 'David Kim, Head of Cloud & DevOps',
      date: '2024-11-20',
      time: '14:30 EST',
      duration: '60 minutes',
      category: 'Cloud & DevOps',
      status: 'Past',
      description: 'A comprehensive guide to implementing FinOps practices in cloud environments, optimizing costs while maintaining performance and scalability.',
      keyTopics: [
        'FinOps framework implementation',
        'Cost optimization strategies',
        'Performance monitoring and alerting',
        'Team collaboration and governance models'
      ],
      attendees: 387,
      maxAttendees: 400,
      featured: false,
      image: '/images/webinars/cloud-finops.jpg',
      registrationUrl: null,
      recordingUrl: '/webinars/cloud-finops/recording',
      slidesUrl: '/webinars/cloud-finops/slides'
    },
    {
      id: 5,
      title: 'IoT and Edge Computing: Building the Foundation for Smart Cities',
      speaker: 'Michael Rodriguez, COO',
      date: '2024-10-25',
      time: '15:00 EST',
      duration: '80 minutes',
      category: 'IoT & Edge',
      status: 'Past',
      description: 'Exploring the role of IoT and edge computing in creating sustainable, efficient, and intelligent urban environments for the future.',
      keyTopics: [
        'Smart city infrastructure design',
        'Edge computing deployment strategies',
        'Data privacy and security considerations',
        'Public-private partnership models'
      ],
      attendees: 298,
      maxAttendees: 350,
      featured: false,
      image: '/images/webinars/smart-cities.jpg',
      registrationUrl: null,
      recordingUrl: '/webinars/smart-cities/recording',
      slidesUrl: '/webinars/smart-cities/slides'
    },
    {
      id: 6,
      title: 'Blockchain in Supply Chain: Transparency, Traceability, and Trust',
      speaker: 'Dr. Sarah Chen, CTO',
      date: '2024-09-18',
      time: '14:00 EST',
      duration: '70 minutes',
      category: 'Blockchain',
      status: 'Past',
      description: 'A comprehensive analysis of blockchain technology applications in supply chain management, focusing on transparency, traceability, and building trust across global networks.',
      keyTopics: [
        'Blockchain supply chain architectures',
        'Smart contract implementation',
        'Integration with existing ERP systems',
        'Regulatory compliance and standards'
      ],
      attendees: 456,
      maxAttendees: 500,
      featured: false,
      image: '/images/webinars/blockchain-supply.jpg',
      registrationUrl: null,
      recordingUrl: '/webinars/blockchain-supply/recording',
      slidesUrl: '/webinars/blockchain-supply/slides'
    },
    {
      id: 7,
      title: 'Sustainable Technology: Green IT Solutions for Environmental Impact',
      speaker: 'Lisa Thompson, Head of Sustainability',
      date: '2024-08-22',
      time: '13:30 EST',
      duration: '65 minutes',
      category: 'Sustainability',
      status: 'Past',
      description: 'Examining how technology can drive sustainability initiatives, reduce environmental impact, and create value for organizations committed to ESG principles.',
      keyTopics: [
        'Green IT infrastructure design',
        'Energy-efficient computing strategies',
        'Carbon footprint measurement',
        'Sustainability reporting frameworks'
      ],
      attendees: 234,
      maxAttendees: 300,
      featured: false,
      image: '/images/webinars/sustainable-tech.jpg',
      registrationUrl: null,
      recordingUrl: '/webinars/sustainable-tech/recording',
      slidesUrl: '/webinars/sustainable-tech/slides'
    },
    {
      id: 8,
      title: 'The Future of Work: AI-Augmented Human Collaboration',
      speaker: 'Dr. Emily Watson, Head of AI Research',
      date: '2024-07-15',
      time: '15:00 EST',
      duration: '75 minutes',
      category: 'AI & Machine Learning',
      status: 'Past',
      description: 'Exploring the evolving relationship between humans and AI in the workplace, focusing on collaboration, productivity enhancement, and job transformation.',
      keyTopics: [
        'AI-human collaboration models',
        'Skills development and training',
        'Change management strategies',
        'Productivity measurement frameworks'
      ],
      attendees: 567,
      maxAttendees: 600,
      featured: false,
      image: '/images/webinars/ai-collaboration.jpg',
      registrationUrl: null,
      recordingUrl: '/webinars/ai-collaboration/recording',
      slidesUrl: '/webinars/ai-collaboration/slides'
    }
  ];

  const filteredWebinars = webinars.filter(webinar => {
    const matchesCategory = selectedCategory === 'All' || webinar.category === selectedCategory;
    const matchesStatus = selectedStatus === 'All' || webinar.status === selectedStatus;
    const matchesSearch = webinar.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         webinar.speaker.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         webinar.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesStatus && matchesSearch;
  });

  const upcomingWebinars = webinars.filter(webinar => webinar.status === 'Upcoming');
  const pastWebinars = webinars.filter(webinar => webinar.status === 'Past');

  const stats = [
    { number: '8+', label: 'Webinars', icon: Video },
    { number: '2.5K+', label: 'Attendees', icon: Users },
    { number: '60-90', label: 'Minutes Duration', icon: Clock },
    { number: '100%', label: 'Free Access', icon: Star }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Webinars - Zion Tech Group"
        description="Join our expert-led webinars on AI, cybersecurity, digital transformation, and emerging technologies. Register for upcoming sessions or access recordings of past webinars."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-purple-600/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mr-4">
                <Video className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Expert
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"> Webinars</span>
              </h1>
            </div>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Join our technology experts for in-depth webinars on AI, cybersecurity, digital transformation, 
              and emerging technologies. Learn from industry leaders and gain practical insights.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full mb-3">
                    <stat.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Search */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search webinars..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-800 border border-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white placeholder-slate-400"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
              >
                {statuses.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      {upcomingWebinars.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-white text-center mb-16"
            >
              Upcoming Webinars
            </motion.h2>
            
            <div className="space-y-12">
              {upcomingWebinars.map((webinar, index) => (
                <motion.div
                  key={webinar.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-purple-600/10 rounded-2xl p-8 border border-cyan-400/20"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Content */}
                    <div className="lg:col-span-2">
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="px-3 py-1 bg-green-400/20 text-green-400 text-sm font-medium rounded-full">
                          Upcoming
                        </span>
                        <span className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full">
                          {webinar.category}
                        </span>
                        <span className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full">
                          {webinar.duration}
                        </span>
                      </div>
                      
                      <h3 className="text-3xl font-bold text-white mb-4">{webinar.title}</h3>
                      <p className="text-slate-300 mb-6 leading-relaxed">{webinar.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-cyan-400" />
                          <span className="text-slate-300 text-sm">{webinar.speaker}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-cyan-400" />
                          <span className="text-slate-300 text-sm">
                            {new Date(webinar.date).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-cyan-400" />
                          <span className="text-slate-300 text-sm">{webinar.time} EST</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-cyan-400" />
                          <span className="text-slate-300 text-sm">
                            {webinar.attendees}/{webinar.maxAttendees} registered
                          </span>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Key Topics</h4>
                        <ul className="space-y-2">
                          {webinar.keyTopics.map((topic, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-300">{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <a
                          href={webinar.registrationUrl}
                          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
                        >
                          <Calendar className="w-5 h-5 mr-2" />
                          Register Now
                        </a>
                        <div className="text-sm text-slate-400">
                          <span className="text-green-400 font-medium">
                            {Math.max(0, webinar.maxAttendees - webinar.attendees)}
                          </span> spots remaining
                        </div>
                      </div>
                    </div>
                    
                    {/* Webinar Details */}
                    <div className="space-y-6">
                      <div className="bg-slate-800/50 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-white mb-4">Webinar Details</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-slate-400">Category:</span>
                            <span className="text-white">{webinar.category}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Duration:</span>
                            <span className="text-white">{webinar.duration}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Date:</span>
                            <span className="text-white">
                              {new Date(webinar.date).toLocaleDateString('en-US', { 
                                month: 'short', 
                                day: 'numeric',
                                year: 'numeric'
                              })}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Time:</span>
                            <span className="text-white">{webinar.time} EST</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-slate-800/50 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-white mb-4">Registration</h4>
                        <div className="space-y-3">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-cyan-400 mb-1">{webinar.attendees}</div>
                            <div className="text-slate-400 text-sm">Registered</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-blue-400 mb-1">{webinar.maxAttendees}</div>
                            <div className="text-slate-400 text-sm">Capacity</div>
                          </div>
                          <div className="w-full bg-slate-700 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${(webinar.attendees / webinar.maxAttendees) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Past Webinars Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-between mb-12"
          >
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">Past Webinars</h2>
              <p className="text-slate-300 text-lg">
                Access recordings and materials from our previous webinars
              </p>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWebinars.filter(webinar => webinar.status === 'Past').map((webinar, index) => (
              <motion.div
                key={webinar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full">
                      {webinar.category}
                    </span>
                    <span className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full">
                      {webinar.duration}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">{webinar.title}</h3>
                  <p className="text-slate-400 text-sm mb-4">
                    <strong>Speaker:</strong> {webinar.speaker}
                  </p>
                  
                  <div className="flex items-center space-x-4 mb-4 text-sm text-slate-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(webinar.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{webinar.attendees} attendees</span>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 text-sm mb-4 line-clamp-3">{webinar.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-2">Key Topics:</h4>
                    <ul className="space-y-1">
                      {webinar.keyTopics.slice(0, 2).map((topic, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-300 text-sm">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                    <div className="flex items-center space-x-4">
                      {webinar.recordingUrl && (
                        <a
                          href={webinar.recordingUrl}
                          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                        >
                          <Play className="w-4 h-4 mr-1" />
                          Recording
                        </a>
                      )}
                      {webinar.slidesUrl && (
                        <a
                          href={webinar.slidesUrl}
                          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm"
                        >
                          <Download className="w-4 h-4 mr-1" />
                          Slides
                        </a>
                      )}
                    </div>
                    <div className="text-slate-400 text-sm">
                      {webinar.attendees} attendees
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-purple-600/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated with Our Webinars
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Get notified about upcoming webinars and access to exclusive content. Join thousands of 
              technology professionals who learn from our expert-led sessions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="mr-2 w-5 h-5" />
                Subscribe to Updates
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Request Custom Webinar
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Webinars;
