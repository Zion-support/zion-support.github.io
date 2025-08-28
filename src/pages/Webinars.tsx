
import React from 'react';
import { SEO } from '../components/SEO';
<<<<<<< HEAD
import { Users, Calendar, Clock, Play, ExternalLink, ArrowRight, Star, Eye, Tag, Search, Filter, TrendingUp, Brain, Shield, Cloud, Zap, Video, Mic, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Webinars() {
  const webinars = [
    {
      title: 'AI Implementation Strategies for SMBs',
      description: 'Learn practical approaches to implementing AI solutions in small and medium businesses. Discover cost-effective strategies and real-world success stories.',
      host: 'Dr. Emily Johnson',
      date: '2024-02-15',
      time: '10:00 AM EST',
      duration: '60 minutes',
      category: 'AI & Machine Learning',
      tags: ['AI', 'SMB', 'Implementation', 'Strategy'],
      featured: true,
      color: 'from-purple-500 to-pink-500',
      spots: '100 remaining',
      type: 'Live Webinar',
      thumbnail: '/webinars/ai-smb-implementation.jpg'
    },
    {
      title: 'Future of Cloud Computing and DevOps',
      description: 'Explore emerging trends in cloud infrastructure and development operations. Learn about the latest tools, practices, and strategies for modern development teams.',
      host: 'Cloud Architecture Team',
      date: '2024-02-20',
      time: '2:00 PM EST',
      duration: '90 minutes',
      category: 'Cloud & DevOps',
      tags: ['Cloud', 'DevOps', 'Infrastructure', 'Trends'],
      featured: true,
      color: 'from-blue-500 to-cyan-500',
      spots: '75 remaining',
      type: 'Workshop',
      thumbnail: '/webinars/cloud-devops-future.jpg'
    },
    {
      title: 'Cybersecurity in the AI Era: Threats & Solutions',
      description: 'Expert analysis of emerging cybersecurity challenges and AI-powered security solutions. Learn how to protect your organization in the age of intelligent threats.',
      host: 'Marcus Rodriguez',
      date: '2024-02-25',
      time: '11:00 AM EST',
      duration: '75 minutes',
      category: 'Cybersecurity',
      tags: ['Security', 'AI', 'Threats', 'Protection'],
      featured: true,
      color: 'from-red-500 to-orange-500',
      spots: '50 remaining',
      type: 'Expert Panel',
      thumbnail: '/webinars/cybersecurity-ai-era.jpg'
    },
    {
      title: 'Digital Transformation Workshop: Complete Guide',
      description: 'Step-by-step guide to successful digital transformation implementation. Learn from real-world case studies and expert insights.',
      host: 'Digital Transformation Team',
      date: '2024-03-01',
      time: '9:00 AM EST',
      duration: '120 minutes',
      category: 'Digital Transformation',
      tags: ['Digital Transformation', 'Strategy', 'Implementation', 'Workshop'],
      featured: false,
      color: 'from-green-500 to-emerald-500',
      spots: '25 remaining',
      type: 'Interactive Workshop',
      thumbnail: '/webinars/digital-transformation-workshop.jpg'
    },
    {
      title: 'Quantum Computing for Business Leaders',
      description: 'Understand the business implications of quantum computing and how to prepare your organization for the quantum future.',
      host: 'Dr. James Kim',
      date: '2024-03-05',
      time: '1:00 PM EST',
      duration: '60 minutes',
      category: 'Quantum Computing',
      tags: ['Quantum Computing', 'Business', 'Strategy', 'Future'],
      featured: false,
      color: 'from-indigo-500 to-purple-500',
      spots: '80 remaining',
      type: 'Executive Briefing',
      thumbnail: '/webinars/quantum-computing-business.jpg'
    },
    {
      title: 'IoT and Edge Computing: Real-World Applications',
      description: 'Explore practical applications of IoT and edge computing across industries. See how organizations are leveraging these technologies for competitive advantage.',
      host: 'IoT Solutions Team',
      date: '2024-03-10',
      time: '10:00 AM EST',
      duration: '90 minutes',
      category: 'IoT & Edge Computing',
      tags: ['IoT', 'Edge Computing', 'Applications', 'Case Studies'],
      featured: false,
      color: 'from-emerald-500 to-green-500',
      spots: '60 remaining',
      type: 'Technical Deep-Dive',
      thumbnail: '/webinars/iot-edge-applications.jpg'
    }
  ];

  const categories = [
    { name: 'All', count: webinars.length, active: true },
    { name: 'AI & Machine Learning', count: webinars.filter(w => w.category === 'AI & Machine Learning').length, active: false },
    { name: 'Cloud & DevOps', count: webinars.filter(w => w.category === 'Cloud & DevOps').length, active: false },
    { name: 'Cybersecurity', count: webinars.filter(w => w.category === 'Cybersecurity').length, active: false },
    { name: 'Digital Transformation', count: webinars.filter(w => w.category === 'Digital Transformation').length, active: false },
    { name: 'Quantum Computing', count: webinars.filter(w => w.category === 'Quantum Computing').length, active: false },
    { name: 'IoT & Edge Computing', count: webinars.filter(w => w.category === 'IoT & Edge Computing').length, active: false }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredWebinars = webinars.filter(webinar => {
    const matchesCategory = selectedCategory === 'All' || webinar.category === selectedCategory;
    const matchesSearch = webinar.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         webinar.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         webinar.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });
=======
import { motion } from 'framer-motion';
import { 
  Users, 
  Calendar, 
  Clock, 
  Play, 
  ExternalLink, 
  ArrowRight,
  Brain,
  Cloud,
  Shield,
  Database,
  Globe,
  Rocket,
  Atom,
  Heart,
  Lock,
  TrendingUp,
  Target,
  Zap,
  BookOpen,
  Video,
  Mic,
  Star,
  Clock3,
  MapPin,
  Tag,
  Filter,
  Search
} from 'lucide-react';

const Webinars: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const webinars = [
    {
      id: 'ai-business-intelligence-2024',
      title: 'AI Business Intelligence: Transforming Decision Making in 2024',
      description: 'Learn how AI is revolutionizing business intelligence with real-time analytics, predictive insights, and automated reporting.',
      category: 'AI & Analytics',
      date: '2024-12-15',
      time: '14:00 EST',
      duration: '60 min',
      speaker: 'Dr. Sarah Chen',
      speakerTitle: 'AI Research Director',
      speakerAvatar: '/images/speakers/sarah-chen.jpg',
      featured: true,
      icon: Brain,
      color: 'from-purple-500 to-cyan-500',
      tags: ['AI', 'Business Intelligence', 'Analytics', 'Decision Making'],
      attendees: 1247,
      recording: true,
      slides: true
    },
    {
      id: 'quantum-computing-applications',
      title: 'Quantum Computing Applications: Beyond the Hype',
      description: 'Explore practical applications of quantum computing in optimization, cryptography, and machine learning.',
      category: 'Quantum Technology',
      date: '2024-12-10',
      time: '15:30 EST',
      duration: '90 min',
      speaker: 'Dr. James Wilson',
      speakerTitle: 'Quantum Computing Lead',
      speakerAvatar: '/images/speakers/james-wilson.jpg',
      featured: true,
      icon: Atom,
      color: 'from-blue-500 to-indigo-500',
      tags: ['Quantum Computing', 'Optimization', 'Cryptography', 'ML'],
      attendees: 892,
      recording: true,
      slides: true
    },
    {
      id: 'cybersecurity-ai-defense',
      title: 'AI-Powered Cybersecurity: Defending Against Modern Threats',
      description: 'Discover how AI is enhancing cybersecurity with threat detection, automated response, and predictive security.',
      category: 'Cybersecurity',
      date: '2024-12-08',
      time: '13:00 EST',
      duration: '75 min',
      speaker: 'Alex Thompson',
      speakerTitle: 'Cybersecurity Architect',
      speakerAvatar: '/images/speakers/alex-thompson.jpg',
      featured: true,
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      tags: ['Cybersecurity', 'AI Security', 'Threat Detection', 'Automation'],
      attendees: 1567,
      recording: true,
      slides: true
    },
    {
      id: 'cloud-native-architecture',
      title: 'Building Cloud-Native Applications for Scale',
      description: 'Learn best practices for designing and deploying cloud-native applications with microservices and containers.',
      category: 'Cloud & DevOps',
      date: '2024-12-05',
      time: '16:00 EST',
      duration: '60 min',
      speaker: 'David Chen',
      speakerTitle: 'Cloud Solutions Architect',
      speakerAvatar: '/images/speakers/david-chen.jpg',
      featured: false,
      icon: Cloud,
      color: 'from-cyan-500 to-blue-500',
      tags: ['Cloud Native', 'Microservices', 'DevOps', 'Scalability'],
      attendees: 734,
      recording: true,
      slides: true
    },
    {
      id: 'digital-twin-implementation',
      title: 'Digital Twin Implementation: From Concept to Reality',
      description: 'Step-by-step guide to implementing digital twins in manufacturing, healthcare, and smart cities.',
      category: 'IoT & Digital Twins',
      date: '2024-12-03',
      time: '14:30 EST',
      duration: '80 min',
      speaker: 'Dr. Emily Johnson',
      speakerTitle: 'IoT Research Lead',
      speakerAvatar: '/images/speakers/emily-johnson.jpg',
      featured: false,
      icon: Globe,
      color: 'from-green-500 to-emerald-500',
      tags: ['Digital Twin', 'IoT', 'Manufacturing', 'Smart Cities'],
      attendees: 623,
      recording: true,
      slides: true
    },
    {
      id: 'ai-healthcare-diagnostics',
      title: 'AI in Healthcare Diagnostics: Clinical Applications',
      description: 'Explore AI applications in medical imaging, disease prediction, and clinical decision support systems.',
      category: 'AI & Healthcare',
      date: '2024-11-30',
      time: '15:00 EST',
      duration: '70 min',
      speaker: 'Dr. Michael Brown',
      speakerTitle: 'Healthcare AI Specialist',
      speakerAvatar: '/images/speakers/michael-brown.jpg',
      featured: false,
      icon: Heart,
      color: 'from-pink-500 to-rose-500',
      tags: ['AI Healthcare', 'Medical Imaging', 'Diagnostics', 'Clinical AI'],
      attendees: 445,
      recording: true,
      slides: true
    },
    {
      id: 'blockchain-business-applications',
      title: 'Blockchain Beyond Cryptocurrency: Business Applications',
      description: 'Discover practical blockchain applications in supply chain, identity management, and decentralized finance.',
      category: 'Blockchain & Web3',
      date: '2024-11-28',
      time: '16:30 EST',
      duration: '65 min',
      speaker: 'Lisa Rodriguez',
      speakerTitle: 'Blockchain Solutions Lead',
      speakerAvatar: '/images/speakers/lisa-rodriguez.jpg',
      featured: false,
      icon: Lock,
      color: 'from-orange-500 to-red-500',
      tags: ['Blockchain', 'Supply Chain', 'Identity', 'DeFi'],
      attendees: 567,
      recording: true,
      slides: true
    },
    {
      id: 'edge-computing-iot',
      title: 'Edge Computing & IoT: Real-Time Processing at Scale',
      description: 'Learn about edge computing architectures and IoT deployment strategies for real-time applications.',
      category: 'Edge Computing & IoT',
      date: '2024-11-25',
      time: '14:00 EST',
      duration: '55 min',
      speaker: 'Robert Kim',
      speakerTitle: 'Edge Computing Engineer',
      speakerAvatar: '/images/speakers/robert-kim.jpg',
      featured: false,
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      tags: ['Edge Computing', 'IoT', 'Real-time', 'Distributed Systems'],
      attendees: 389,
      recording: true,
      slides: true
    },
    {
      id: 'sustainable-technology-practices',
      title: 'Sustainable Technology: Green Computing Practices',
      description: 'Implement energy-efficient computing, sustainable software development, and ESG technology practices.',
      category: 'Sustainability',
      date: '2024-11-22',
      time: '15:30 EST',
      duration: '60 min',
      speaker: 'Dr. Amanda Green',
      speakerTitle: 'Sustainability Technology Lead',
      speakerAvatar: '/images/speakers/amanda-green.jpg',
      featured: false,
      icon: Target,
      color: 'from-emerald-500 to-green-500',
      tags: ['Sustainability', 'Green Computing', 'ESG', 'Energy Efficiency'],
      attendees: 234,
      recording: true,
      slides: true
    },
    {
      id: 'ai-workflow-automation',
      title: 'AI Workflow Automation: Streamlining Business Processes',
      description: 'Learn how to automate complex business workflows using AI and machine learning technologies.',
      category: 'AI & Automation',
      date: '2024-11-20',
      time: '16:00 EST',
      duration: '70 min',
      speaker: 'Chris Anderson',
      speakerTitle: 'Automation Solutions Architect',
      speakerAvatar: '/images/speakers/chris-anderson.jpg',
      featured: false,
      icon: TrendingUp,
      color: 'from-indigo-500 to-purple-500',
      tags: ['AI Automation', 'Workflow', 'Business Processes', 'ML'],
      attendees: 456,
      recording: true,
      slides: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Categories', count: webinars.length, active: true },
    { id: 'ai', name: 'AI & Analytics', count: webinars.filter(w => w.category.includes('AI')).length, active: false },
    { id: 'quantum', name: 'Quantum Technology', count: webinars.filter(w => w.category.includes('Quantum')).length, active: false },
    { id: 'security', name: 'Cybersecurity', count: webinars.filter(w => w.category.includes('Cybersecurity')).length, active: false },
    { id: 'cloud', name: 'Cloud & DevOps', count: webinars.filter(w => w.category.includes('Cloud')).length, active: false },
    { id: 'iot', name: 'IoT & Digital Twins', count: webinars.filter(w => w.category.includes('IoT')).length, active: false },
    { id: 'healthcare', name: 'AI & Healthcare', count: webinars.filter(w => w.category.includes('Healthcare')).length, active: false },
    { id: 'blockchain', name: 'Blockchain & Web3', count: webinars.filter(w => w.category.includes('Blockchain')).length, active: false },
    { id: 'edge', name: 'Edge Computing & IoT', count: webinars.filter(w => w.category.includes('Edge')).length, active: false },
    { id: 'sustainability', name: 'Sustainability', count: webinars.filter(w => w.category.includes('Sustainability')).length, active: false },
    { id: 'automation', name: 'AI & Automation', count: webinars.filter(w => w.category.includes('Automation')).length, active: false }
  ];

  const filteredWebinars = webinars.filter(webinar => {
    const matchesCategory = selectedCategory === 'all' || 
      (selectedCategory === 'ai' && webinar.category.includes('AI')) ||
      (selectedCategory === 'quantum' && webinar.category.includes('Quantum')) ||
      (selectedCategory === 'security' && webinar.category.includes('Cybersecurity')) ||
      (selectedCategory === 'cloud' && webinar.category.includes('Cloud')) ||
      (selectedCategory === 'iot' && webinar.category.includes('IoT')) ||
      (selectedCategory === 'healthcare' && webinar.category.includes('Healthcare')) ||
      (selectedCategory === 'blockchain' && webinar.category.includes('Blockchain')) ||
      (selectedCategory === 'edge' && webinar.category.includes('Edge')) ||
      (selectedCategory === 'sustainability' && webinar.category.includes('Sustainability')) ||
      (selectedCategory === 'automation' && webinar.category.includes('Automation'));
    
    const matchesSearch = webinar.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         webinar.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         webinar.speaker.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         webinar.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const upcomingWebinars = filteredWebinars.filter(w => new Date(w.date) >= new Date());
  const pastWebinars = filteredWebinars.filter(w => new Date(w.date) < new Date());
>>>>>>> cursor/website-audit-content-update-and-deployment-6ffe

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Webinars - Zion Tech Group"
<<<<<<< HEAD
        description="Join our expert-led webinars, workshops, and learning sessions. Gain insights into AI, cybersecurity, cloud computing, and emerging technologies from industry experts."
=======
        description="Join our expert-led webinars on AI, quantum computing, cybersecurity, and emerging technologies. Learn from industry leaders and gain practical insights."
        keywords="webinars, AI, quantum computing, cybersecurity, technology learning, expert sessions, Zion Tech Group"
>>>>>>> cursor/website-audit-content-update-and-deployment-6ffe
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
<<<<<<< HEAD
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10"></div>
        <div className="container-responsive relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Expert-Led
              <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent"> Learning</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our live webinars, workshops, and expert panels to learn from industry leaders 
              about the latest trends in technology and business transformation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25"
              >
                Request Custom Session
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                Schedule Consultation
              </Link>
=======
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Expert-Led Webinars
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Learn from industry leaders about cutting-edge technologies and practical applications
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Video className="w-4 h-4" />
                <span>{webinars.length} Expert Sessions</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>Live & Recorded</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span>Free Resources</span>
              </div>
>>>>>>> cursor/website-audit-content-update-and-deployment-6ffe
            </div>
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Search and Filter Section */}
      <section className="py-12">
        <div className="container-responsive">
=======
      {/* Search and Filter */}
      <section className="py-12 border-b border-slate-700/50">
        <div className="container mx-auto px-4">
>>>>>>> cursor/website-audit-content-update-and-deployment-6ffe
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search webinars..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
<<<<<<< HEAD
                className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
=======
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200"
>>>>>>> cursor/website-audit-content-update-and-deployment-6ffe
              />
            </div>

            {/* Category Filter */}
<<<<<<< HEAD
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                    selectedCategory === category.name
                      ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20'
                      : 'bg-slate-700/50 text-slate-300 hover:bg-orange-500/10 hover:text-orange-400 border border-slate-600'
                  }`}
                >
                  <span>{category.name}</span>
                  <span className="text-xs opacity-75">({category.count})</span>
                </button>
=======
            <div className="flex flex-wrap gap-3">
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white'
                  }`}
                >
                  {category.name} ({category.count})
                </motion.button>
>>>>>>> cursor/website-audit-content-update-and-deployment-6ffe
              ))}
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Featured Webinars */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Sessions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most popular and highly anticipated webinars and workshops
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredWebinars.filter(w => w.featured).map((webinar, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 hover:scale-105 border border-slate-700/50"
              >
                <div className="absolute -top-3 -right-3">
                  <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Featured
                  </div>
                </div>
                
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${webinar.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Video className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    webinar.type === 'Live Webinar' ? 'bg-blue-500/20 text-blue-400' :
                    webinar.type === 'Workshop' ? 'bg-green-500/20 text-green-400' :
                    webinar.type === 'Expert Panel' ? 'bg-purple-500/20 text-purple-400' :
                    webinar.type === 'Interactive Workshop' ? 'bg-orange-500/20 text-orange-400' :
                    webinar.type === 'Executive Briefing' ? 'bg-indigo-500/20 text-indigo-400' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {webinar.type}
                  </span>
                  <span className="text-sm text-gray-400">{webinar.spots}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{webinar.title}</h3>
                <p className="text-gray-300 mb-6">{webinar.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Users className="w-4 h-4" />
                    <span>Hosted by {webinar.host}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{webinar.date} at {webinar.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>{webinar.duration}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {webinar.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-slate-700 text-gray-300 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Webinars */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              All Upcoming Sessions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Browse our complete calendar of webinars, workshops, and learning events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWebinars.map((webinar, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 hover:scale-105 border border-slate-700/50"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${webinar.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Video className="w-6 h-6 text-white" />
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    webinar.type === 'Live Webinar' ? 'bg-blue-500/20 text-blue-400' :
                    webinar.type === 'Workshop' ? 'bg-green-500/20 text-green-400' :
                    webinar.type === 'Expert Panel' ? 'bg-purple-500/20 text-purple-400' :
                    webinar.type === 'Interactive Workshop' ? 'bg-orange-500/20 text-orange-400' :
                    webinar.type === 'Executive Briefing' ? 'bg-indigo-500/20 text-indigo-400' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {webinar.type}
                  </span>
                  <span className="text-xs text-gray-400">{webinar.spots}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{webinar.title}</h3>
                <p className="text-gray-300 mb-4 text-sm line-clamp-3">{webinar.description}</p>
                
                <div className="space-y-2 mb-4 text-xs text-gray-400">
                  <div className="flex items-center gap-2">
                    <Users className="w-3 h-3" />
                    <span>{webinar.host}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    <span>{webinar.date} • {webinar.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3 h-3" />
                    <span>{webinar.duration}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {webinar.tags.slice(0, 2).map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="w-full px-4 py-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-medium rounded-lg transition-all duration-300 text-sm">
                  Register
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Webinars */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Past Sessions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access recordings and materials from our previous webinars and workshops
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'AI in Healthcare: Current State and Future Outlook',
                host: 'Dr. Sarah Chen',
                date: '2024-01-15',
                duration: '75 minutes',
                views: 2847,
                category: 'AI & Machine Learning'
              },
              {
                title: 'Cybersecurity Best Practices for Remote Work',
                host: 'Security Team',
                date: '2024-01-10',
                duration: '60 minutes',
                views: 2156,
                category: 'Cybersecurity'
              },
              {
                title: 'Cloud Migration Strategies and Best Practices',
                host: 'Cloud Architecture Team',
                date: '2024-01-05',
                duration: '90 minutes',
                views: 1892,
                category: 'Cloud & DevOps'
              }
            ].map((webinar, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 hover:scale-105 border border-slate-700/50"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-500 to-slate-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{webinar.title}</h3>
                <p className="text-sm text-gray-400 mb-3">{webinar.category}</p>
                
                <div className="space-y-2 mb-4 text-xs text-gray-400">
                  <div className="flex items-center gap-2">
                    <Users className="w-3 h-3" />
                    <span>{webinar.host}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    <span>{webinar.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3 h-3" />
                    <span>{webinar.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="w-3 h-3" />
                    <span>{webinar.views.toLocaleString()} views</span>
                  </div>
                </div>

                <button className="w-full px-4 py-2 bg-gradient-to-r from-gray-500 to-slate-600 hover:from-gray-600 hover:to-slate-700 text-white font-medium rounded-lg transition-all duration-300 text-sm">
                  Watch Recording
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated with New Sessions
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Subscribe to our newsletter and get notified about upcoming webinars, workshops, 
              and learning opportunities delivered directly to your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-medium rounded-lg transition-all duration-300">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-400 mt-3">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Need Custom Learning Sessions?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our team can create custom webinars, workshops, and training sessions 
              tailored to your organization's specific needs and challenges.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25"
              >
                Request Custom Session
              </Link>
              <Link
                to="/resources"
                className="px-8 py-4 border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                Browse All Resources
              </Link>
            </div>
=======
      {/* Upcoming Webinars */}
      {upcomingWebinars.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Upcoming Webinars
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingWebinars.map((webinar, index) => (
                <motion.div
                  key={webinar.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
                >
                  <div className="absolute top-4 right-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${webinar.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <webinar.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-slate-700/50 text-cyan-400 text-xs font-medium rounded-full">
                      {webinar.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {webinar.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {webinar.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {webinar.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-slate-700/30 text-gray-300 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(webinar.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock3 className="w-3 h-3" />
                      {webinar.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {webinar.duration}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center">
                      <Users className="w-4 h-4 text-gray-400" />
                    </div>
                    <div>
                      <p className="text-sm text-white font-medium">{webinar.speaker}</p>
                      <p className="text-xs text-gray-400">{webinar.speakerTitle}</p>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-2 group">
                    <Play className="w-4 h-4" />
                    Register Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Past Webinars */}
      {pastWebinars.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Past Webinars
            </h2>
            <div className="space-y-6">
              {pastWebinars.map((webinar, index) => (
                <motion.div
                  key={webinar.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group bg-slate-800/30 rounded-xl p-6 border border-slate-700/30 hover:border-cyan-500/30 transition-all duration-300 hover:bg-slate-800/50"
                >
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${webinar.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <webinar.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <span className="inline-block px-3 py-1 bg-slate-700/50 text-cyan-400 text-sm font-medium rounded-full mb-3">
                            {webinar.category}
                          </span>
                          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 mb-2">
                            {webinar.title}
                          </h3>
                        </div>
                        <div className="text-right text-sm text-gray-500">
                          <div className="flex items-center gap-1 mb-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(webinar.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            {webinar.attendees.toLocaleString()}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-400 mb-4">
                        {webinar.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {webinar.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-slate-700/30 text-gray-300 text-xs rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center">
                          <Users className="w-3 h-3 text-gray-400" />
                        </div>
                        <div className="text-sm text-gray-400">
                          <span className="text-white font-medium">{webinar.speaker}</span> • {webinar.speakerTitle}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        {webinar.recording && (
                          <button className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300 group">
                            <Play className="w-4 h-4" />
                            Watch Recording
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                          </button>
                        )}
                        {webinar.slides && (
                          <button className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300 group">
                            <BookOpen className="w-4 h-4" />
                            Download Slides
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl p-12 text-center border border-cyan-500/20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Stay Updated with Expert Insights
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get notified about upcoming webinars, new recordings, and exclusive content from industry experts. Join thousands of technology professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                />
                <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
                  Subscribe
                </button>
              </div>
            </motion.div>
>>>>>>> cursor/website-audit-content-update-and-deployment-6ffe
          </div>
        </div>
      </section>
    </div>
  );
}
