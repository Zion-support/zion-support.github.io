import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Calendar,
  Clock,
  User,
  Users,
  Play,
  Video,
  Search,
  Filter,
  Star,
  Eye,
  Heart,
  Share2,
  ArrowRight,
  CheckCircle,
  Zap,
  Brain,
  Server,
  Shield,
  Cloud,
  Target,
  Rocket,
  BarChart3,
  Atom,
  Network,
  Lock,
  Cpu,
  Wifi,
  Satellite,
  Handshake,
  FileText,
  GraduationCap,
  Lightbulb,
  Globe,
  Phone,
  Mail,
  MapPin,
  Settings,
  Tool,
  Wrench,
  Cog,
  Key,
  Unlock,
  Eye as EyeIcon,
  EyeOff,
  Copy,
  Check,
  X,
  Plus,
  Minus,
  SortAsc,
  SortDesc,
  Grid,
  List,
  Bookmark,
  Download,
  Upload,
  RefreshCw,
  Save,
  Edit,
  Trash2,
  Archive,
  Tag,
  Hash,
  Hash as HashIcon,
  Hash as HashIcon2,
  Hash as HashIcon3,
  Hash as HashIcon4,
  Hash as HashIcon5,
  Hash as HashIcon6,
  Hash as HashIcon7,
  Hash as HashIcon8,
  Hash as HashIcon9,
  Hash as HashIcon10
} from 'lucide-react';
<<<<<<< HEAD

export default function Webinars() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

=======
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
const Webinars: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showPast, setShowPast] = useState(false);
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  const categories = [
    { id: 'all', name: 'All Categories', icon: Video, count: 67 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 18 },
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: Cloud, count: 12 },
    { id: 'security', name: 'Security & Compliance', icon: Shield, count: 15 },
    { id: 'data', name: 'Data & Analytics', icon: BarChart3, count: 10 },
    { id: 'digital', name: 'Digital Transformation', icon: Rocket, count: 8 },
    { id: 'industry', name: 'Industry Solutions', icon: Target, count: 4 }
  ];
<<<<<<< HEAD

  const webinarTypes = [
    { id: 'all', name: 'All Types', count: 67 },
    { id: 'upcoming', name: 'Upcoming', count: 12 },
    { id: 'live', name: 'Live Now', count: 3 },
    { id: 'recorded', name: 'Recorded', count: 45 },
    { id: 'series', name: 'Series', count: 7 }
  ];

  const webinars = [
=======
  const upcomingWebinars = [
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
    {
      id: 1,
      title: 'AI-Powered Business Intelligence: Transforming Decision Making',
      description: 'Learn how AI is revolutionizing business intelligence and enabling data-driven decision making across organizations. Discover practical implementation strategies and real-world success stories.',
      category: 'ai-ml',
      type: 'upcoming',
      host: 'Dr. Sarah Chen',
      date: '2025-01-25',
      time: '14:00',
      duration: '60 min',
      attendees: 0,
      maxAttendees: 500,
      rating: 4.8,
      featured: true,
      tags: ['AI', 'Business Intelligence', 'Decision Making', 'Analytics'],
      thumbnail: '/images/webinars/ai-business-intelligence.jpg',
      isLive: false,
      registrationRequired: true,
      series: null,
      abstract: 'This webinar explores how artificial intelligence is transforming traditional business intelligence systems, enabling organizations to make faster, more accurate decisions based on real-time data insights.',
      keyTopics: [
        'AI-powered analytics and reporting',
        'Real-time decision support systems',
        'Implementation strategies and best practices',
        'ROI measurement and success metrics'
      ]
    },
    {
      id: 2,
      title: 'Zero Trust Security: Implementation Best Practices',
      description: 'Join our security experts as they walk through the implementation of Zero Trust security architecture, covering design principles, deployment strategies, and real-world case studies.',
      category: 'security',
      type: 'live',
      host: 'Michael Rodriguez',
      date: '2025-01-20',
      time: '15:30',
      duration: '90 min',
      attendees: 342,
      maxAttendees: 1000,
      rating: 4.9,
      featured: true,
      tags: ['Security', 'Zero Trust', 'Cybersecurity', 'Implementation'],
      thumbnail: '/images/webinars/zero-trust-security.jpg',
      isLive: true,
      registrationRequired: false,
      series: null,
      abstract: 'This live webinar provides hands-on guidance for implementing Zero Trust security architecture in enterprise environments, with real-time Q&A and interactive demonstrations.',
      keyTopics: [
        'Zero Trust design principles',
        'Implementation roadmap and phases',
        'Technology selection and integration',
        'Monitoring and compliance considerations'
      ]
    },
    {
      id: 3,
<<<<<<< HEAD
      title: 'Cloud-Native Application Development: From Theory to Practice',
      description: 'Master cloud-native development practices with hands-on examples and real-world case studies. Learn microservices architecture, containerization, and DevOps integration.',
      category: 'cloud',
      type: 'recorded',
      host: 'Jennifer Kim',
      date: '2025-01-15',
      time: '13:00',
      duration: '75 min',
      attendees: 1250,
      maxAttendees: 2000,
      rating: 4.7,
      featured: false,
      tags: ['Cloud', 'Development', 'Microservices', 'DevOps'],
      thumbnail: '/images/webinars/cloud-native-development.jpg',
      isLive: false,
      registrationRequired: false,
      series: 'Cloud Development Series',
      abstract: 'This recorded webinar covers the fundamentals of cloud-native application development, including practical examples and implementation guidance for modern software development.',
      keyTopics: [
        'Microservices architecture patterns',
        'Container orchestration strategies',
        'CI/CD pipeline optimization',
        'Performance monitoring and scaling'
      ]
    },
    {
      id: 4,
      title: 'Data Analytics for Business Leaders: Making Sense of Big Data',
      description: 'Business leaders will learn how to leverage data analytics to drive strategic decisions, improve operational efficiency, and gain competitive advantages.',
      category: 'data',
      type: 'upcoming',
      host: 'David Thompson',
      date: '2025-01-30',
      time: '10:00',
      duration: '45 min',
      attendees: 0,
      maxAttendees: 300,
      rating: 4.6,
      featured: false,
      tags: ['Analytics', 'Business Intelligence', 'Leadership', 'Strategy'],
      thumbnail: '/images/webinars/data-analytics-leaders.jpg',
      isLive: false,
      registrationRequired: true,
      series: 'Business Leadership Series',
      abstract: 'This executive-focused webinar provides business leaders with the knowledge and tools needed to harness the power of data analytics for strategic decision making.',
      keyTopics: [
        'Understanding data analytics fundamentals',
        'Building a data-driven culture',
        'Measuring analytics ROI',
        'Future trends in business analytics'
      ]
=======
      title: 'AI-Powered Business Transformation: Real-World Success Stories',
      description: 'Join industry experts as they share real-world case studies of successful AI implementations and the lessons learned along the way.',
      category: 'ai-ml',
      speaker: 'Dr. Sarah Chen, Chief AI Scientist',
      date: '2024-02-15',
      time: '14:00 EST',
      duration: '60 minutes',
      attendees: 450,
      maxAttendees: 500,
      summary: 'Learn how to implement AI-powered compliance automation to reduce manual work and improve accuracy.',
      tags: ['AI', 'Compliance', 'Automation', 'Best Practices'],
      registrationUrl: '/webinars/ai-compliance-automation-2024/register',
      watchUrl: null,
      isLive: false
    },
    {
      id: 5,
      title: 'Zero-Trust Security: Implementation Strategies for 2025',
      description: 'Learn practical strategies for implementing zero-trust security architecture in your organization.',
      category: 'security',
      type: 'upcoming',
      date: '2025-02-20T15:00:00Z',
      duration: '45 min',
      speakers: ['Alex Thompson', 'Dr. James Wilson'],
      maxAttendees: 300,
      summary: 'Explore practical applications of digital twin technology and how to measure return on investment.',
      tags: ['Digital Twin', 'IoT', 'ROI', 'Digital Transformation'],
      registrationUrl: '/webinars/digital-twin-technology-roi/register',
      watchUrl: null,
      isLive: false
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
    },
    {
      id: 5,
      title: 'Digital Transformation in Healthcare: Technology Trends and Implementation',
      description: 'Explore the latest technology trends transforming healthcare delivery and patient care in the digital age.',
      category: 'industry',
      type: 'recorded',
      host: 'Dr. Emily Watson',
      date: '2025-01-10',
      time: '11:00',
      duration: '60 min',
      attendees: 890,
      maxAttendees: 1500,
      rating: 4.8,
      featured: false,
      tags: ['Healthcare', 'Digital Health', 'Technology', 'Innovation'],
      thumbnail: '/images/webinars/healthcare-digital-transformation.jpg',
      isLive: false,
      registrationRequired: false,
      series: 'Healthcare Technology Series',
      abstract: 'This webinar examines the digital transformation of healthcare, covering emerging technologies, implementation challenges, and future trends in patient care.',
      keyTopics: [
        'Emerging healthcare technologies',
        'Implementation challenges and solutions',
        'Patient experience and engagement',
        'Regulatory compliance considerations'
      ]
    },
    {
      id: 6,
<<<<<<< HEAD
      title: 'Machine Learning Operations (MLOps): Scaling AI in Enterprise',
      description: 'Learn how to implement MLOps practices to streamline machine learning model development, deployment, and monitoring in enterprise environments.',
      category: 'ai-ml',
      type: 'upcoming',
      host: 'Alex Johnson',
      date: '2025-02-05',
      time: '16:00',
      duration: '90 min',
      attendees: 0,
      maxAttendees: 600,
      rating: 4.7,
      featured: false,
      tags: ['MLOps', 'Machine Learning', 'DevOps', 'AI Operations'],
      thumbnail: '/images/webinars/mlops-enterprise.jpg',
      isLive: false,
      registrationRequired: true,
      series: 'AI Operations Series',
      abstract: 'This comprehensive webinar covers MLOps implementation strategies, tools, and best practices for organizations looking to scale their machine learning operations.',
      keyTopics: [
        'MLOps principles and methodologies',
        'Tool selection and integration',
        'Model lifecycle management',
        'Performance monitoring and optimization'
      ]
    },
=======
      title: 'Sustainable IT: Green Computing Strategies for Enterprise',
      category: 'sustainability',
      speaker: 'Lisa Park, Sustainability Director',
      date: '2024-03-22',
      time: '14:00 EST',
      duration: '60 minutes',
      attendees: 220,
      maxAttendees: 300,
      summary: 'Learn practical strategies for implementing sustainable IT practices and reducing carbon footprint.',
      tags: ['Sustainability', 'Green IT', 'Enterprise', 'Carbon Footprint'],
      registrationUrl: '/webinars/sustainable-it-enterprise/register',
      watchUrl: null,
      isLive: false
    }
  ];
  const pastWebinars = [
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
    {
      id: 7,
      title: 'Edge Computing: Transforming IoT and Mobile Applications',
      description: 'Discover how edge computing is revolutionizing IoT deployments and mobile applications through distributed computing architectures.',
      category: 'cloud',
      type: 'recorded',
      host: 'Rachel Green',
      date: '2025-01-08',
      time: '14:30',
      duration: '70 min',
      attendees: 567,
      maxAttendees: 800,
      rating: 4.5,
      featured: false,
      tags: ['Edge Computing', 'IoT', 'Mobile', 'Distributed Systems'],
      thumbnail: '/images/webinars/edge-computing-iot.jpg',
      isLive: false,
      registrationRequired: false,
      series: 'Cloud Infrastructure Series',
      abstract: 'This webinar explores edge computing technologies and their applications in IoT and mobile computing, providing implementation guidance for modern applications.',
      keyTopics: [
        'Edge computing architectures and models',
        'IoT integration strategies',
        'Performance optimization techniques',
        'Security and privacy considerations'
      ]
    },
    {
      id: 8,
      title: 'Blockchain in Supply Chain: Transparency and Traceability Solutions',
      description: 'Learn how blockchain technology is revolutionizing supply chain management through enhanced transparency, traceability, and trust.',
      category: 'industry',
      type: 'upcoming',
      host: 'Marcus Chen',
      date: '2025-02-10',
      time: '13:00',
      duration: '60 min',
      attendees: 0,
      maxAttendees: 400,
      rating: 4.4,
      featured: false,
      tags: ['Blockchain', 'Supply Chain', 'Transparency', 'Traceability'],
      thumbnail: '/images/webinars/blockchain-supply-chain.jpg',
      isLive: false,
      registrationRequired: true,
      series: 'Supply Chain Innovation Series',
      abstract: 'This webinar examines blockchain applications in supply chain management, covering implementation strategies, use cases, and business benefits for modern organizations.',
      keyTopics: [
        'Blockchain fundamentals and applications',
        'Supply chain use cases and benefits',
        'Implementation challenges and solutions',
        'ROI analysis and business case development'
      ]
    }
  ];
<<<<<<< HEAD

  const filteredWebinars = webinars.filter(webinar => {
=======
  const allWebinars = [...upcomingWebinars, ...pastWebinars];
      currentAttendees: 189,;
      featured: false,;
      tags: ['Cybersecurity', 'Zero-Trust', 'Security Architecture', 'Implementation'],;
      thumbnail: '/images/webinars/zero-trust-security-2025.jpg',;
      registrationRequired: true,;
      recordingAvailable: false;
    };
  ];
  // Update counts
  React.useEffect(() => {
    categories.forEach(cat = > {;
      cat.count = webinars.filter(w => w.category === cat.id).length;
    });
    filterTypes.forEach(type = > {;
      if (type.id === 'all') {;
        type.count = webinars.length;
      } else {
        type.count = webinars.filter(w => w.type === type.id).length;
    });
  }, []);
  const filteredWebinars = webinars.filter(webinar => {;
    const matchesSearch = webinar.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
                         webinar.description.toLowerCase().includes(searchQuery.toLowerCase()) ||;
                         webinar.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = activeCategory === 'all' || webinar.category === activeCategory;
    const matchesType = filterType === 'all' || webinar.type === filterType;
    return matchesSearch && matchesCategory && matchesType;
=======
  // Update category counts
  categories.forEach(category => {
    if (category.id === 'all') {
      category.count = allWebinars.length;
    } else {
      category.count = allWebinars.filter(webinar => webinar.category === category.id).length;
    }
  });
  const filteredWebinars = allWebinars.filter(webinar => {
    const matchesCategory = selectedCategory === 'all' || webinar.category === selectedCategory;
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
    const matchesSearch = webinar.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         webinar.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         webinar.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
<<<<<<< HEAD
    const matchesCategory = selectedCategory === 'all' || webinar.category === selectedCategory;
    const matchesType = selectedType === 'all' || webinar.type === selectedType;
    return matchesSearch && matchesCategory && matchesType;
  });

  const upcomingWebinars = filteredWebinars.filter(w => w.type === 'upcoming');
  const liveWebinars = filteredWebinars.filter(w => w.type === 'live');
  const recordedWebinars = filteredWebinars.filter(w => w.type === 'recorded');

=======
    const matchesTimeFilter = showPast ? true : !pastWebinars.includes(webinar);
    return matchesCategory && matchesSearch && matchesTimeFilter;
  });
  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : BookOpen;
  };
  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'General';
  };
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
<<<<<<< HEAD

  const formatTime = (timeString: string) => {
    return timeString;
  };

  const handleRegister = (webinarId: number, title: string) => {
    // Simulate registration
    console.log(`Registering for: ${title}`);
    // In a real app, this would open a registration form
  };

  const handleJoin = (webinarId: number, title: string) => {
    // Simulate joining
    console.log(`Joining: ${title}`);
    // In a real app, this would redirect to the live webinar
  };

  const handleWatch = (webinarId: number, title: string) => {
    // Simulate watching
    console.log(`Watching: ${title}`);
    // In a real app, this would open the recorded webinar
=======
  const getRegistrationStatus = (webinar: any) => {
    if (webinar.isLive) {
      return { status: 'Live Now', color: 'from-red-500 to-pink-500', icon: Play };
    } else if (webinar.attendees >= webinar.maxAttendees) {
      return { status: 'Full', color: 'from-gray-500 to-slate-500', icon: Users };
    } else if (webinar.watchUrl) {
      return { status: 'Watch Now', color: 'from-blue-500 to-cyan-500', icon: Play };
    } else {
      return { status: 'Register Now', color: 'from-green-500 to-emerald-500', icon: CheckCircle };
    }
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  };
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark to-zion-purple opacity-20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Webinars
=======
    <>
      <SEO 
        title="Webinars - Zion Tech Group"
        description="Join our expert-led webinars on AI, cybersecurity, cloud computing, and emerging technologies. Learn from industry leaders and gain practical insights."
        keywords="webinars, AI webinars, cybersecurity webinars, cloud computing, technology education, Zion Tech Group, online learning"
      />
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-blue/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-purple/20 border border-zion-purple/30 mb-6">
                <Video className="w-5 h-5 text-zion-purple mr-2" />
                <span className="text-zion-purple font-medium">Expert Webinars</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Technology Webinars
              </h1>
              <p className="text-xl md:text-2xl text-zion-cyan-light max-w-4xl mx-auto leading-relaxed mb-8">
                Join our expert-led webinars on AI, cybersecurity, cloud computing, and emerging technologies. 
                Learn from industry leaders and gain practical insights to transform your business.
              </p>
            initial = {
  { opacity: 0,
  y: 30 
}}
            whileInView = {
  { opacity: 1,
  y: 0 
}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay Informed and Inspired
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
            </h1>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto mb-8">
              Join our expert-led webinars to learn about the latest technology trends, 
              best practices, and innovative solutions from Zion Tech Group.
            </p>
<<<<<<< HEAD
            <div className="flex flex-wrap justify-center gap-4 text-zinc-300">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-zion-cyan" />
                <span>Live & Recorded</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-zion-cyan" />
                <span>Expert Speakers</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-zion-cyan" />
                <span>Free Access</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Live Webinars Banner */}
      {liveWebinars.length > 0 && (
        <div className="bg-red-600/20 border-y border-red-500/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center space-x-3 text-red-400"
            >
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="font-semibold">
                {liveWebinars.length} webinar{liveWebinars.length > 1 ? 's' : ''} live now!
              </span>
              <Link
                to="#live-webinars"
                className="text-red-300 hover:text-white transition-colors underline"
              >
                Join now
              </Link>
            </motion.div>
          </div>
        </div>
      )}

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-6"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400" />
=======
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-zion-cyan/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </a>
              <a 
                href="/white-papers"
                className="px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Read Our Research
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Search and Filters */}
      <section className="py-12 bg-zion-slate">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
              <input
                type="text"
                placeholder="Search webinars..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>
<<<<<<< HEAD

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>

            {/* Type Filter */}
            <div>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                {webinarTypes.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.name} ({type.count})
                  </option>
                ))}
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex-1 px-4 py-3 rounded-lg transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30'
                    : 'bg-zinc-700/50 text-zinc-400 border border-zinc-600 hover:bg-zinc-700/70'
                }`}
              >
                <Grid className="w-4 h-4 mx-auto" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`flex-1 px-4 py-3 rounded-lg transition-colors ${
                  viewMode === 'list'
                    ? 'bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30'
                    : 'bg-zinc-700/50 text-zinc-400 border border-zinc-600 hover:bg-zinc-700/70'
                }`}
              >
                <List className="w-4 h-4 mx-auto" />
              </button>
            </div>

            {/* Quick Actions */}
            <div className="flex space-x-3">
              <button className="flex-1 px-4 py-3 bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30 rounded-lg hover:bg-zion-cyan/30 transition-colors flex items-center justify-center">
                <Calendar className="w-4 h-4 mr-2" />
                My Webinars
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Results Count */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-zinc-400"
        >
          Showing {filteredWebinars.length} of {webinars.length} webinars
        </motion.div>
      </div>

      {/* Live Webinars Section */}
      {liveWebinars.length > 0 && (
        <div id="live-webinars" className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse mr-3"></div>
              Live Now
            </h2>
            <p className="text-zinc-300">Join these webinars happening right now!</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {liveWebinars.map((webinar, index) => (
              <motion.div
                key={webinar.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="bg-gradient-to-r from-red-600/20 to-red-500/10 border border-red-500/30 rounded-2xl p-6 relative overflow-hidden"
              >
                <div className="absolute top-4 right-4">
                  <div className="flex items-center space-x-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span>LIVE</span>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Video className="w-8 h-8 text-red-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {webinar.title}
                    </h3>
                    <p className="text-zinc-300 text-sm mb-3 line-clamp-2">
                      {webinar.description}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-zinc-400 mb-4">
                      <span className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{webinar.host}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{webinar.attendees} watching</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{webinar.duration}</span>
                      </span>
                    </div>
                  </div>
                </div>

=======
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 mb-6">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-zion-cyan border-zion-cyan text-white'
                      : 'bg-zion-slate-dark border-zion-slate-light/20 text-zion-slate-light hover:border-zion-cyan/50'
                  }`}
                  {category.icon}
=======
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-cyan-light" />
                  <input
                    type="text"
                    placeholder="Search webinars, speakers, or topics..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-zion-cyan-light focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Categories Filter */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
                <button
                  onClick={() => handleJoin(webinar.id, webinar.title)}
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
<<<<<<< HEAD
                  <Play className="w-4 h-4" />
                  <span>Join Now</span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Upcoming Webinars Section */}
      {upcomingWebinars.length > 0 && (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Upcoming Webinars</h2>
            <p className="text-zinc-300">Register for these upcoming sessions</p>
          </motion.div>

          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-6'}>
            {upcomingWebinars.map((webinar, index) => (
=======
                  <category.icon className="w-5 h-5" />
                  <span>{category.name}</span>
                  <span className="text-sm opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
                  className = "px-6 py-3 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/90 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
=======
          </div>
        </section>
        {/* Time Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <span className="text-white font-medium">Show:</span>
                <button
                  onClick={() => setShowPast(false)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    !showPast
                      ? 'bg-zion-purple text-white'
                      : 'bg-white/10 text-zion-cyan-light hover:bg-white/20 border border-white/20'
                  }`}
                >
                  Upcoming
                </button>
                <button
                  onClick={() => setShowPast(true)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    showPast
                      ? 'bg-zion-purple text-white'
                      : 'bg-white/10 text-zion-cyan-light hover:bg-white/20 border border-white/20'
                  }`}
                >
                  Past Webinars
                </button>
              </div>
              <div className="text-zion-cyan-light">
                {filteredWebinars.length} webinars found
              </div>
            </div>
          </div>
        </section>
        {/* Webinars Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {filteredWebinars.length === 0 ? (
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
              <motion.div
                key={webinar.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                className={`bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl overflow-hidden hover:border-zion-cyan/30 transition-all duration-300 ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
              >
<<<<<<< HEAD
                {viewMode === 'grid' ? (
                  // Grid View
                  <div className="p-6">
                    {webinar.featured && (
                      <div className="inline-block bg-zion-cyan text-zion-slate-dark px-3 py-1 rounded-full text-xs font-medium mb-4">
                        Featured
                      </div>
                    )}
                    
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-2 text-zinc-400 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(webinar.date)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-zinc-300">{webinar.rating}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {webinar.title}
                    </h3>
                    
                    <p className="text-zinc-400 text-sm mb-4 line-clamp-3">
                      {webinar.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {webinar.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-zinc-700/50 text-zinc-300 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-zinc-500 mb-4">
                      <span className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{webinar.host}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{webinar.time} • {webinar.duration}</span>
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-zinc-400">
                        {webinar.attendees} registered
                      </span>
                      <button
                        onClick={() => handleRegister(webinar.id, webinar.title)}
                        className="bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 flex items-center space-x-2"
                      >
                        <Calendar className="w-4 h-4" />
                        <span>Register</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  // List View
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        {webinar.featured && (
                          <div className="inline-block bg-zion-cyan text-zion-slate-dark px-3 py-1 rounded-full text-xs font-medium mb-3">
                            Featured
                          </div>
                        )}
                        
                        <h3 className="text-xl font-bold text-white mb-2">
                          {webinar.title}
                        </h3>
                        
                        <p className="text-zinc-400 text-sm mb-3 line-clamp-2">
                          {webinar.description}
                        </p>

                        <div className="flex items-center space-x-6 text-sm text-zinc-500 mb-3">
                          <span className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{webinar.host}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(webinar.date)}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{webinar.time} • {webinar.duration}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{webinar.attendees} registered</span>
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {webinar.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-1 bg-zinc-700/50 text-zinc-300 text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col items-end space-y-3 ml-6">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-zinc-300">{webinar.rating}</span>
                        </div>
                        
                        <button
                          onClick={() => handleRegister(webinar.id, webinar.title)}
                          className="bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 flex items-center space-x-2"
                        >
                          <Calendar className="w-4 h-4" />
                          <span>Register</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Recorded Webinars Section */}
      {recordedWebinars.length > 0 && (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Recorded Webinars</h2>
            <p className="text-zinc-300">Watch past webinars on-demand</p>
          </motion.div>

          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-6'}>
            {recordedWebinars.map((webinar, index) => (
              <motion.div
                key={webinar.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                className={`bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl overflow-hidden hover:border-zion-cyan/30 transition-all duration-300 ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
              >
                {viewMode === 'grid' ? (
                  // Grid View
                  <div className="p-6">
                    {webinar.featured && (
                      <div className="inline-block bg-zion-cyan text-zion-slate-dark px-3 py-1 rounded-full text-xs font-medium mb-4">
                        Featured
                      </div>
                    )}
                    
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-2 text-zinc-400 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(webinar.date)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-zinc-300">{webinar.rating}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {webinar.title}
                    </h3>
                    
                    <p className="text-zinc-400 text-sm mb-4 line-clamp-3">
                      {webinar.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {webinar.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-zinc-700/50 text-zinc-300 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-zinc-500 mb-4">
                      <span className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{webinar.host}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{webinar.duration}</span>
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-zinc-400">
                        {webinar.attendees} views
                      </span>
                      <button
                        onClick={() => handleWatch(webinar.id, webinar.title)}
                        className="bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 flex items-center space-x-2"
                      >
                        <Play className="w-4 h-4" />
                        <span>Watch</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  // List View
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        {webinar.featured && (
                          <div className="inline-block bg-zion-cyan text-zion-slate-dark px-3 py-1 rounded-full text-xs font-medium mb-3">
                            Featured
                          </div>
                        )}
                        
                        <h3 className="text-xl font-bold text-white mb-2">
                          {webinar.title}
                        </h3>
                        
                        <p className="text-zinc-400 text-sm mb-3 line-clamp-2">
                          {webinar.description}
                        </p>

                        <div className="flex items-center space-x-6 text-sm text-zinc-500 mb-3">
                          <span className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{webinar.host}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(webinar.date)}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{webinar.duration}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>{webinar.attendees} views</span>
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {webinar.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-1 bg-zinc-700/50 text-zinc-300 text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col items-end space-y-3 ml-6">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-zinc-300">{webinar.rating}</span>
                        </div>
                        
                        <button
                          onClick={() => handleWatch(webinar.id, webinar.title)}
                          className="bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 flex items-center space-x-2"
                        >
                          <Play className="w-4 h-4" />
                          <span>Watch</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
=======
                <Video className="w-16 h-16 text-zion-cyan-light mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No webinars found</h3>
                <p className="text-zion-cyan-light">
                  Try adjusting your search terms or category filter.
                </p>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredWebinars.map((webinar, index) => {
                  const registrationStatus = getRegistrationStatus(webinar);
                  return (
                    <motion.div
                      key={webinar.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <Card className="h-full bg-white/5 backdrop-blur-sm border-white/20 hover:border-zion-purple/50 transition-all duration-300 hover:scale-105">
                        <CardHeader>
                          <div className="flex items-start justify-between mb-4">
                            <div className="inline-flex items-center px-3 py-1 rounded-full bg-zion-purple/20 border border-zion-purple/30">
                              <span className="text-zion-purple text-sm font-medium">
                                {getCategoryName(webinar.category)}
                              </span>
                            </div>
                            <div className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${registrationStatus.color}`}>
                              {registrationStatus.status}
                            </div>
                          </div>
                          <CardTitle className="text-xl font-bold text-white group-hover:text-zion-purple transition-colors duration-300 mb-3">
                            {webinar.title}
                          </CardTitle>
                          <CardDescription className="text-zion-cyan-light leading-relaxed mb-4">
                            {webinar.summary}
                          </CardDescription>
                          <div className="flex items-center space-x-4 text-sm text-zion-cyan-light mb-4">
                            <div className="flex items-center space-x-1">
                              <Users className="w-4 h-4" />
                              <span>{webinar.attendees}/{webinar.maxAttendees}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{webinar.duration}</span>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3 mb-6 text-sm">
                            <div className="flex items-center justify-between">
                              <span className="text-zion-cyan-light">Speaker:</span>
                              <span className="text-white">{webinar.speaker}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-zion-cyan-light">Date:</span>
                              <span className="text-white">{formatDate(webinar.date)}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-zion-cyan-light">Time:</span>
                              <span className="text-white">{webinar.time}</span>
                            </div>
                          </div>
                          <div className="mb-6">
                            <h4 className="text-white font-semibold mb-3">Tags:</h4>
                            <div className="flex flex-wrap gap-2">
                              {webinar.tags.map((tag, tagIndex) => (
                                <span
                                  key={tagIndex}
                                  className="px-2 py-1 bg-white/10 rounded text-xs text-zion-cyan-light border border-white/20"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            {webinar.registrationUrl ? (
                              <Button
                                asChild
                                className="flex-1 bg-gradient-to-r from-zion-purple to-zion-blue hover:from-zion-purple/80 hover:to-zion-blue/80 text-white"
                              >
                                <a href={webinar.registrationUrl}>
                                  <CheckCircle className="w-4 h-4 mr-2" />
                                  Register
                                </a>
                              </Button>
                            ) : webinar.watchUrl ? (
                              <Button
                                asChild
                                className="flex-1 bg-gradient-to-r from-zion-purple to-zion-blue hover:from-zion-purple/80 hover:to-zion-blue/80 text-white"
                              >
                                <a href={webinar.watchUrl}>
                                  <Play className="w-4 h-4 mr-2" />
                                  Watch Now
                                </a>
                              </Button>
                            ) : null}
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-slate-dark"
                            >
                              <Share2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Want to Host a Webinar?
              </h2>
              <p className="text-xl text-zion-cyan-light mb-8 max-w-3xl mx-auto">
                Have expertise to share? We're always looking for industry leaders and subject matter experts 
                to share their knowledge with our community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-zion-purple to-zion-blue hover:from-zion-purple/80 hover:to-zion-blue/80 text-white">
                  <Video className="w-5 h-5 mr-2" />
                  Propose a Webinar
                </Button>
                <Button
                  variant="outline"
                  className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-slate-dark"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View All Webinars
                </Button>
              </div>
            </motion.div>
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="bg-zinc-800/30 border-t border-zinc-700/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Our Webinars
            </h2>
            <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
              Get notified about upcoming webinars, new recordings, and exclusive content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
};
export default Webinars;
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
