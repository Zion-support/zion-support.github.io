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
  Download, 
  Bookmark,
  Share2,
  Mail,
  Linkedin,
  Twitter,
  Facebook,
  Copy,
  CheckCircle,
  Star,
  Award,
  Zap,
  Crown,
  Sparkles,
  Lightbulb,
  Target,
  BarChart3,
  PieChart,
  Activity,
  TrendingDown,
  Cpu,
  Database,
  Network,
  Lock,
  Key,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Server,
  HardDrive,
  Wifi,
  Bluetooth,
  Satellite,
  Radio,
  Antenna,
  GraduationCap,
  Briefcase,
  Industry,
  Code,
  GitBranch,
  RefreshCw,
  BarChart,
  ShieldCheck,
  Atom,
  BrainCircuit,
  BrainCircuit2,
  Search,
  Filter,
  Tag,
  Eye,
  TrendingUp,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Heart,
  Globe,
  Building,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Clock3,
  User,
  FileText,
  Camera,
  Mic,
  Headphones,
  Settings,
  Wifi,
  Signal,
  Battery,
  Power,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  RotateCcw,
  RotateCw,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  Pause,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Octagon,
  Diamond,
  Heart as HeartIcon,
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  Send,
  Edit,
  Trash2,
  Plus,
  Minus,
  X,
  Check,
  AlertCircle,
  Info,
  HelpCircle,
  LifeBuoy,
  Phone,
  MapPin,
  Mail as MailIcon,
  PhoneCall,
  MessageSquare,
  Voicemail,
  PhoneOff,
  PhoneIncoming,
  PhoneOutgoing,
  PhoneMissed,
  PhoneForwarded,
  PhoneCallIncoming,
  PhoneCallOutgoing,
  PhoneCallMissed,
  PhoneCallForwarded
} from 'lucide-react';

export default function Webinars() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Categories', icon: Video, count: 24 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 8 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 6 },
    { id: 'cloud-devops', name: 'Cloud & DevOps', icon: Cloud, count: 5 },
    { id: 'digital-transformation', name: 'Digital Transformation', icon: Rocket, count: 3 },
    { id: 'iot-edge', name: 'IoT & Edge Computing', icon: Network, count: 2 }
  ];

  const statuses = [
    { id: 'all', name: 'All Webinars', count: 24 },
    { id: 'upcoming', name: 'Upcoming', count: 8 },
    { id: 'live', name: 'Live Now', count: 2 },
    { id: 'recorded', name: 'Recorded', count: 14 }
  ];

  const webinars = [
    {
      id: 1,
      title: 'The Future of AI in Healthcare: Implementation Strategies and Best Practices',
      presenter: 'Dr. Sarah Chen, Chief AI Scientist',
      date: '2024-12-20',
      time: '14:00 EST',
      duration: '60 minutes',
      category: 'ai-ml',
      status: 'upcoming',
      description: 'Join us for an in-depth exploration of AI implementation strategies in healthcare. Learn about current trends, challenges, and best practices for deploying AI solutions in medical environments.',
      topics: [
        'AI diagnostic accuracy improvements',
        'Regulatory compliance considerations',
        'Integration with existing systems',
        'ROI measurement and success metrics'
      ],
      registrationUrl: '/webinars/register/ai-healthcare-future',
      recordingUrl: null,
      slidesUrl: null,
      featured: true,
      tags: ['AI Healthcare', 'Digital Health', 'Machine Learning', 'Healthcare Innovation'],
      attendees: 0,
      maxAttendees: 500,
      isLive: false,
      thumbnail: '/api/placeholder/400/250'
    },
    {
      id: 2,
      title: 'Zero-Trust Security Architecture: Live Implementation Demo',
      presenter: 'Marcus Rodriguez, Head of Cybersecurity',
      date: '2024-12-18',
      time: '15:30 EST',
      duration: '90 minutes',
      category: 'cybersecurity',
      status: 'upcoming',
      description: 'Watch a live demonstration of zero-trust security architecture implementation. See real-time configuration, testing, and deployment of enterprise-grade security solutions.',
      topics: [
        'Zero-trust principles and architecture',
        'Live configuration demonstration',
        'Security testing and validation',
        'Integration with existing infrastructure'
      ],
      registrationUrl: '/webinars/register/zero-trust-demo',
      recordingUrl: null,
      slidesUrl: null,
      featured: true,
      tags: ['Zero Trust', 'Cybersecurity', 'Live Demo', 'Enterprise Security'],
      attendees: 0,
      maxAttendees: 300,
      isLive: false,
      thumbnail: '/api/placeholder/400/250'
    },
    {
      id: 3,
      title: 'Cloud-Native Microservices: Architecture Patterns and Best Practices',
      presenter: 'Dr. Emily Watson, VP of Cloud & DevOps',
      date: '2024-12-15',
      time: '13:00 EST',
      duration: '75 minutes',
      category: 'cloud-devops',
      status: 'recorded',
      description: 'Learn about cloud-native microservices architecture patterns, deployment strategies, and operational best practices for modern software development.',
      topics: [
        'Microservices design patterns',
        'Container orchestration strategies',
        'CI/CD pipeline optimization',
        'Monitoring and observability'
      ],
      registrationUrl: null,
      recordingUrl: '/webinars/recordings/cloud-native-microservices',
      slidesUrl: '/webinars/slides/cloud-native-microservices',
      featured: false,
      tags: ['Microservices', 'Cloud Native', 'DevOps', 'Software Architecture'],
      attendees: 342,
      maxAttendees: 400,
      isLive: false,
      thumbnail: '/api/placeholder/400/250'
    },
    {
      id: 4,
      title: 'Digital Transformation in Manufacturing: Industry 4.0 Success Stories',
      presenter: 'Alex Thompson, Head of IoT & Edge Computing',
      date: '2024-12-12',
      time: '14:30 EST',
      duration: '60 minutes',
      category: 'digital-transformation',
      status: 'recorded',
      description: 'Discover real-world success stories of digital transformation in manufacturing. Learn how companies are leveraging IoT, AI, and edge computing for competitive advantage.',
      topics: [
        'Industry 4.0 implementation strategies',
        'IoT sensor deployment and data collection',
        'AI-powered predictive maintenance',
        'ROI measurement and business impact'
      ],
      registrationUrl: null,
      recordingUrl: '/webinars/recordings/manufacturing-digital-transformation',
      slidesUrl: '/webinars/slides/manufacturing-digital-transformation',
      featured: false,
      tags: ['Industry 4.0', 'IoT', 'Manufacturing', 'Digital Transformation'],
      attendees: 287,
      maxAttendees: 350,
      isLive: false,
      thumbnail: '/api/placeholder/400/250'
    },
    {
      id: 5,
      title: 'Quantum Computing Applications in Financial Services',
      presenter: 'Dr. Sarah Chen, Chief AI Scientist',
      date: '2024-12-10',
      time: '16:00 EST',
      duration: '80 minutes',
      category: 'ai-ml',
      status: 'recorded',
      description: 'Explore the potential applications of quantum computing in financial services, including risk assessment, portfolio optimization, and fraud detection.',
      topics: [
        'Quantum computing fundamentals',
        'Financial modeling applications',
        'Risk assessment algorithms',
        'Implementation timeline and challenges'
      ],
      registrationUrl: null,
      recordingUrl: '/webinars/recordings/quantum-financial-services',
      slidesUrl: '/webinars/slides/quantum-financial-services',
      featured: false,
      tags: ['Quantum Computing', 'Financial Services', 'AI', 'Risk Assessment'],
      attendees: 198,
      maxAttendees: 250,
      isLive: false,
      thumbnail: '/api/placeholder/400/250'
    },
    {
      id: 6,
      title: 'Edge Computing and AI: Real-Time Decision Making at the Network Edge',
      presenter: 'Alex Thompson, Head of IoT & Edge Computing',
      date: '2024-12-08',
      time: '15:00 EST',
      duration: '70 minutes',
      category: 'iot-edge',
      status: 'recorded',
      description: 'Learn how edge computing and AI can enable real-time decision making at the network edge, reducing latency and improving operational efficiency.',
      topics: [
        'Edge computing architecture',
        'AI model deployment strategies',
        'Real-time data processing',
        'Privacy and security considerations'
      ],
      registrationUrl: null,
      recordingUrl: '/webinars/recordings/edge-computing-ai',
      slidesUrl: '/webinars/slides/edge-computing-ai',
      featured: false,
      tags: ['Edge Computing', 'AI', 'IoT', 'Real-time Processing'],
      attendees: 156,
      maxAttendees: 200,
      isLive: false,
      thumbnail: '/api/placeholder/400/250'
    },
    {
      id: 7,
      title: 'AI Ethics and Governance: Building Trust in Artificial Intelligence',
      presenter: 'Dr. Sarah Chen, Chief AI Scientist',
      date: '2024-12-05',
      time: '14:00 EST',
      duration: '65 minutes',
      category: 'ai-ml',
      status: 'recorded',
      description: 'Explore the critical importance of AI ethics and governance in building trustworthy artificial intelligence systems.',
      topics: [
        'AI ethics principles and frameworks',
        'Bias detection and mitigation',
        'Transparency and explainability',
        'Regulatory compliance strategies'
      ],
      registrationUrl: null,
      recordingUrl: '/webinars/recordings/ai-ethics-governance',
      slidesUrl: '/webinars/slides/ai-ethics-governance',
      featured: false,
      tags: ['AI Ethics', 'Governance', 'Trust', 'Responsible AI'],
      attendees: 234,
      maxAttendees: 300,
      isLive: false,
      thumbnail: '/api/placeholder/400/250'
    },
    {
      id: 8,
      title: 'Blockchain Technology in Supply Chain Management',
      presenter: 'Marcus Rodriguez, Head of Cybersecurity',
      date: '2024-12-03',
      time: '15:30 EST',
      duration: '55 minutes',
      category: 'digital-transformation',
      status: 'recorded',
      description: 'Discover how blockchain technology can revolutionize supply chain management with unprecedented transparency and efficiency.',
      topics: [
        'Blockchain fundamentals and applications',
        'Supply chain transparency and traceability',
        'Smart contract implementation',
        'Cost-benefit analysis and ROI'
      ],
      registrationUrl: null,
      recordingUrl: '/webinars/recordings/blockchain-supply-chain',
      slidesUrl: '/webinars/slides/blockchain-supply-chain',
      featured: false,
      tags: ['Blockchain', 'Supply Chain', 'Transparency', 'Efficiency'],
      attendees: 189,
      maxAttendees: 250,
      isLive: false,
      thumbnail: '/api/placeholder/400/250'
    }
  ];

  const filteredWebinars = webinars.filter(webinar => {
    const matchesCategory = selectedCategory === 'all' || webinar.category === selectedCategory;
    const matchesStatus = selectedStatus === 'all' || webinar.status === selectedStatus;
    const matchesSearch = webinar.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         webinar.presenter.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         webinar.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesStatus && matchesSearch;
  });

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : Video;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'from-blue-500 to-cyan-500';
      case 'live':
        return 'from-green-500 to-emerald-500';
      case 'recorded':
        return 'from-purple-500 to-pink-500';
      default:
        return 'from-gray-500 to-slate-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'Upcoming';
      case 'live':
        return 'Live Now';
      case 'recorded':
        return 'Recorded';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Webinars - Zion Tech Group"
        description="Join our educational webinars on AI, cybersecurity, cloud computing, and digital transformation. Learn from industry experts and stay ahead of technology trends."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-purple-600/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-8">
              <Video className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Educational <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Webinars</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Join our expert-led webinars on cutting-edge technology topics. 
              Learn from industry leaders and stay ahead of the curve with AI, cybersecurity, and digital transformation.
            </p>
            <div className="flex items-center justify-center space-x-6 text-slate-400">
              <div className="flex items-center space-x-2">
                <Video className="w-5 h-5" />
                <span>{webinars.length} Webinars</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span>Expert Presenters</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>Live & Recorded</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search webinars..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-800 border border-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white placeholder-slate-400"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <span className="text-slate-300 font-medium">Category:</span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>

            {/* Status Filter */}
            <div className="flex items-center space-x-4">
              <span className="text-slate-300 font-medium">Status:</span>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
              >
                {statuses.map((status) => (
                  <option key={status.id} value={status.id}>
                    {status.name} ({status.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Webinars */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Featured Webinars</h2>
            <p className="text-lg text-slate-300">Don't miss our most popular upcoming and recent sessions</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredWebinars.filter(webinar => webinar.featured).map((webinar, index) => (
              <motion.div
                key={webinar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center">
                      <getCategoryIcon(webinar.category) className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{webinar.presenter}</h3>
                      <p className="text-slate-400 text-sm">{formatDate(webinar.date)}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className={`px-3 py-1 bg-gradient-to-r ${getStatusColor(webinar.status)} text-white text-xs rounded-full font-medium`}>
                      {getStatusText(webinar.status)}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-2xl font-bold text-white mb-4 leading-tight">
                  {webinar.title}
                </h4>

                {/* Description */}
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {webinar.description}
                </p>

                {/* Topics */}
                <div className="mb-6">
                  <h5 className="text-white font-semibold mb-3">What You'll Learn</h5>
                  <div className="grid grid-cols-1 gap-2">
                    {webinar.topics.map((topic, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-300 text-sm">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Details and Tags */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-slate-400">
                      <span className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{webinar.time} EST</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock3 className="w-4 h-4" />
                        <span>{webinar.duration}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{webinar.attendees}/{webinar.maxAttendees}</span>
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {webinar.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-700">
                  <div className="flex items-center space-x-4">
                    {webinar.status === 'upcoming' && (
                      <span className="text-cyan-400 text-sm font-medium">
                        Registration Open
                      </span>
                    )}
                    {webinar.status === 'recorded' && (
                      <span className="text-purple-400 text-sm font-medium">
                        Available Now
                      </span>
                    )}
                  </div>
                  {webinar.status === 'upcoming' && webinar.registrationUrl && (
                    <a
                      href={webinar.registrationUrl}
                      className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center space-x-2"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Register Now</span>
                    </a>
                  )}
                  {webinar.status === 'recorded' && webinar.recordingUrl && (
                    <a
                      href={webinar.recordingUrl}
                      className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center space-x-2"
                    >
                      <Play className="w-4 h-4" />
                      <span>Watch Recording</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Webinars Grid */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">All Webinars</h2>
            <p className="text-lg text-slate-300">Complete collection of our educational sessions</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWebinars.filter(webinar => !webinar.featured).map((webinar, index) => (
              <motion.div
                key={webinar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/30 backdrop-blur-xl rounded-xl p-6 border border-slate-700/30 hover:border-cyan-400/20 transition-all duration-300 group"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                      <getCategoryIcon(webinar.category) className="w-4 h-4 text-cyan-400" />
                    </div>
                    <span className="text-slate-400 text-xs font-medium">
                      {webinar.category.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                  <div className={`px-2 py-1 bg-gradient-to-r ${getStatusColor(webinar.status)} text-white text-xs rounded-full font-medium`}>
                    {getStatusText(webinar.status)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-3 leading-tight group-hover:text-cyan-400 transition-colors line-clamp-2">
                  {webinar.title}
                </h3>

                {/* Presenter and Date */}
                <p className="text-cyan-400 font-semibold text-sm mb-2">{webinar.presenter}</p>
                <p className="text-slate-400 text-xs mb-3">{formatDate(webinar.date)}</p>

                {/* Description Preview */}
                <p className="text-slate-300 text-sm mb-4 leading-relaxed line-clamp-3">
                  {webinar.description}
                </p>

                {/* Topics Preview */}
                <div className="mb-4">
                  <h4 className="text-white font-semibold text-sm mb-2">Topics Covered</h4>
                  <div className="space-y-1">
                    {webinar.topics.slice(0, 2).map((topic, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-300 text-xs">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {webinar.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats and Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                  <div className="flex items-center space-x-3 text-xs text-slate-400">
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{webinar.duration}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Users className="w-3 h-3" />
                      <span>{webinar.attendees}</span>
                    </span>
                  </div>
                  {webinar.status === 'upcoming' && webinar.registrationUrl && (
                    <a
                      href={webinar.registrationUrl}
                      className="px-4 py-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-semibold flex items-center space-x-1"
                    >
                      <Calendar className="w-3 h-3" />
                      <span>Register</span>
                    </a>
                  )}
                  {webinar.status === 'recorded' && webinar.recordingUrl && (
                    <a
                      href={webinar.recordingUrl}
                      className="px-4 py-2 text-purple-400 hover:text-purple-300 transition-colors text-sm font-semibold flex items-center space-x-1"
                    >
                      <Play className="w-3 h-3" />
                      <span>Watch</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-purple-600/20 rounded-3xl p-12 text-center border border-cyan-400/30"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Updated</span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Get notified about upcoming webinars, new recordings, and exclusive content. 
              Never miss an opportunity to learn from our technology experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-slate-400 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
