import React from 'react';

export default function Webinars() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-white mb-4">Webinars</h1>
      <p className="text-zion-slate-light">Join our upcoming webinars and watch past sessions.</p>
    </div>
  );
}

import React from 'react';
import { SEO } from '../components/SEO';

export default function Webinars() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
      <SEO title="Webinars - Zion Tech Group" description="Educational webinars and sessions." />
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-2">Webinars</h1>
        <p className="text-slate-300">Upcoming webinars will be listed here.</p>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Video, 
  Calendar, 
  Clock, 
  Users, 
  Play, 
  Download,
  ArrowRight,
  Search,
  Filter,
  Brain,
  Cloud,
  Shield,
  Rocket,
  Target,
  Star,
  TrendingUp,
  Award,
  BookOpen,
  ExternalLink,
  Clock3,
  UserCheck,
  Zap
} from 'lucide-react';

export default function Webinars() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Categories', icon: BookOpen },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'digital-transformation', name: 'Digital Transformation', icon: Rocket },
    { id: 'emerging-tech', name: 'Emerging Technologies', icon: TrendingUp }
  ];

  const types = [
    { id: 'all', name: 'All Types' },
    { id: 'upcoming', name: 'Upcoming' },
    { id: 'on-demand', name: 'On-Demand' },
    { id: 'live', name: 'Live Events' }
  ];

  const webinars = [
    {
      id: 1,
      title: 'AI-Powered Business Intelligence: From Strategy to Implementation',
      speaker: 'Dr. Sarah Chen, CTO',
      date: '2024-02-15',
      time: '14:00 EST',
      duration: '60 min',
      category: 'ai-ml',
      type: 'upcoming',
      summary: 'Learn how to implement AI-powered business intelligence solutions that drive real business value. This session covers strategy, technology selection, and practical implementation steps.',
      keyTopics: [
        'AI strategy development and ROI measurement',
        'Technology stack selection and architecture',
        'Data preparation and quality assurance',
        'Change management and user adoption'
      ],
      attendees: 0,
      featured: true,
      registrationUrl: '/webinars/ai-business-intelligence-feb-2024',
      tags: ['AI', 'Business Intelligence', 'Strategy', 'Implementation']
    },
    {
      id: 2,
      title: 'Zero-Trust Security: Building Resilient Enterprise Defense',
      speaker: 'Alex Kim, VP of Cybersecurity',
      date: '2024-02-10',
      time: '15:00 EST',
      duration: '75 min',
      category: 'cybersecurity',
      type: 'upcoming',
      summary: 'Comprehensive overview of zero-trust security principles and implementation strategies for enterprise organizations.',
      keyTopics: [
        'Zero-trust architecture fundamentals',
        'Identity and access management',
        'Network segmentation strategies',
        'Implementation roadmap and best practices'
      ],
      attendees: 0,
      featured: true,
      registrationUrl: '/webinars/zero-trust-security-feb-2024',
      tags: ['Cybersecurity', 'Zero-Trust', 'Enterprise Security', 'Best Practices']
    },
    {
      id: 3,
      title: 'Digital Twin Technology: Transforming Manufacturing Operations',
      speaker: 'Marcus Rodriguez, VP of Engineering',
      date: '2024-01-25',
      time: '13:00 EST',
      duration: '90 min',
      category: 'digital-transformation',
      type: 'on-demand',
      summary: 'Explore how digital twin technology is revolutionizing manufacturing, predictive maintenance, and operational efficiency.',
      keyTopics: [
        'Digital twin fundamentals and use cases',
        'IoT integration and data collection',
        'Predictive maintenance implementation',
        'ROI measurement and success metrics'
      ],
      attendees: 1247,
      featured: false,
      recordingUrl: '/webinars/digital-twin-manufacturing-jan-2024',
      tags: ['Digital Twin', 'Manufacturing', 'IoT', 'Predictive Maintenance']
    },
    {
      id: 4,
      title: 'Cloud-Native Architecture: Building Scalable Applications',
      speaker: 'Dr. Emily Watson, Head of Cloud Architecture',
      date: '2024-01-20',
      time: '14:30 EST',
      duration: '60 min',
      category: 'cloud',
      type: 'on-demand',
      summary: 'Learn how to design and implement cloud-native architectures that scale automatically and provide high availability.',
      keyTopics: [
        'Microservices architecture design',
        'Container orchestration with Kubernetes',
        'Auto-scaling and load balancing',
        'Monitoring and observability'
      ],
      attendees: 892,
      featured: false,
      recordingUrl: '/webinars/cloud-native-architecture-jan-2024',
      tags: ['Cloud Computing', 'Microservices', 'Kubernetes', 'Scalability']
    },
    {
      id: 5,
      title: 'Quantum Computing: Preparing Your Business for the Future',
      speaker: 'Dr. James Kim, Head of Quantum Research',
      date: '2024-01-15',
      time: '15:00 EST',
      duration: '75 min',
      category: 'emerging-tech',
      type: 'on-demand',
      summary: 'Forward-looking analysis of quantum computing\'s potential impact on business operations and competitive advantage.',
      keyTopics: [
        'Quantum computing fundamentals',
        'Business applications and use cases',
        'Investment strategies and readiness assessment',
        'Timeline and competitive implications'
      ],
      attendees: 1567,
      featured: false,
      recordingUrl: '/webinars/quantum-computing-business-jan-2024',
      tags: ['Quantum Computing', 'Emerging Technology', 'Strategy', 'Innovation']
    },
    {
      id: 6,
      title: 'AI Ethics and Responsible Development in Enterprise',
      speaker: 'Priya Patel, Head of AI Ethics',
      date: '2024-01-10',
      time: '14:00 EST',
      duration: '60 min',
      category: 'ai-ml',
      type: 'on-demand',
      summary: 'Essential guidelines for implementing AI ethics and responsible development practices in enterprise environments.',
      keyTopics: [
        'AI ethics frameworks and principles',
        'Bias detection and mitigation',
        'Transparency and explainability',
        'Governance and compliance structures'
      ],
      attendees: 743,
      featured: false,
      recordingUrl: '/webinars/ai-ethics-enterprise-jan-2024',
      tags: ['AI Ethics', 'Responsible AI', 'Governance', 'Compliance']
    },
    {
      id: 7,
      title: 'Edge Computing and IoT: Real-Time Decision Making',
      speaker: 'Dr. Michael Chen, IoT Research Lead',
      date: '2024-01-05',
      time: '13:30 EST',
      duration: '90 min',
      category: 'emerging-tech',
      type: 'on-demand',
      summary: 'Comprehensive analysis of edge computing and IoT technologies for real-time business decision making.',
      keyTopics: [
        'Edge computing architecture and benefits',
        'IoT device management and security',
        'Real-time analytics and decision making',
        'Implementation strategies and cost optimization'
      ],
      attendees: 1123,
      featured: false,
      recordingUrl: '/webinars/edge-computing-iot-jan-2024',
      tags: ['Edge Computing', 'IoT', 'Real-time Analytics', 'Decision Making']
    },
    {
      id: 8,
      title: 'Blockchain in Enterprise: Beyond Cryptocurrency',
      speaker: 'Alex Thompson, Blockchain Solutions Architect',
      date: '2024-01-01',
      time: '14:00 EST',
      duration: '75 min',
      category: 'emerging-tech',
      type: 'on-demand',
      summary: 'Explore how blockchain technology is transforming enterprise operations, supply chains, and business processes.',
      keyTopics: [
        'Blockchain fundamentals and business value',
        'Supply chain transparency and traceability',
        'Smart contracts and automation',
        'Implementation challenges and solutions'
      ],
      attendees: 678,
      featured: false,
      recordingUrl: '/webinars/blockchain-enterprise-jan-2024',
      tags: ['Blockchain', 'Smart Contracts', 'Supply Chain', 'Enterprise']
    }
  ];

  const filteredWebinars = webinars.filter(webinar => {
    const matchesCategory = selectedCategory === 'all' || webinar.category === selectedCategory;
    const matchesType = selectedType === 'all' || webinar.type === selectedType;
    const matchesSearch = webinar.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         webinar.speaker.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         webinar.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesType && matchesSearch;
  });

  const upcomingWebinars = filteredWebinars.filter(webinar => webinar.type === 'upcoming');
  const onDemandWebinars = filteredWebinars.filter(webinar => webinar.type === 'on-demand');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Webinars - Zion Tech Group"
        description="Join our expert-led webinars on AI, cybersecurity, digital transformation, and emerging technologies. Access on-demand content and register for upcoming sessions."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Video className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Expert-Led
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {' '}Webinars
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Learn from industry experts through our comprehensive webinars on AI, 
              cybersecurity, digital transformation, and emerging technologies.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">{webinars.length}+</div>
              <div className="text-slate-400">Webinars</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">8K+</div>
              <div className="text-slate-400">Total Attendees</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">6</div>
              <div className="text-slate-400">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">75+</div>
              <div className="text-slate-400">Avg. Minutes</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
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
              <span className="text-slate-300 text-sm">Category:</span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Type Filter */}
            <div className="flex items-center space-x-4">
              <span className="text-slate-300 text-sm">Type:</span>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
              >
                {types.map(type => (
                  <option key={type.id} value={type.id}>
                    {type.name}
                  </option>
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
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {upcomingWebinars.map((webinar, index) => (
                <motion.div
                  key={webinar.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full">
                      {categories.find(c => c.id === webinar.category)?.name}
                    </span>
                    <span className="px-3 py-1 bg-green-400/20 text-green-400 text-sm rounded-full">
                      {webinar.type}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{webinar.title}</h3>
                  <p className="text-cyan-400 font-semibold mb-4">By {webinar.speaker}</p>
                  
                  <div className="flex items-center space-x-6 mb-6 text-sm text-slate-300">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(webinar.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock3 className="w-4 h-4" />
                      <span>{webinar.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{webinar.duration}</span>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 mb-6 leading-relaxed">{webinar.summary}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Topics:</h4>
                    <ul className="space-y-2">
                      {webinar.keyTopics.slice(0, 3).map((topic, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm">
                          <Star className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-300">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {webinar.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={webinar.registrationUrl}
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
                    >
                      <UserCheck className="w-4 h-4" />
                      <span>Register Now</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* On-Demand Webinars */}
      {onDemandWebinars.length > 0 && (
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-white text-center mb-16"
            >
              On-Demand Webinars
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {onDemandWebinars.map((webinar, index) => (
                <motion.div
                  key={webinar.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded-full">
                      {categories.find(c => c.id === webinar.category)?.name}
                    </span>
                    <span className="px-2 py-1 bg-purple-400/20 text-purple-400 text-xs rounded-full">
                      {webinar.type}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3">{webinar.title}</h3>
                  <p className="text-cyan-400 font-semibold mb-3 text-sm">By {webinar.speaker}</p>
                  
                  <div className="flex items-center space-x-4 mb-4 text-xs text-slate-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(webinar.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{webinar.duration}</span>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 text-sm mb-4 line-clamp-3">{webinar.summary}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2 text-sm">Key Topics:</h4>
                    <ul className="space-y-1">
                      {webinar.keyTopics.slice(0, 2).map((topic, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-xs">
                          <Star className="w-3 h-3 text-yellow-400 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-300 line-clamp-2">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="text-center p-2 bg-slate-700/50 rounded-lg">
                      <div className="text-sm font-bold text-cyan-400">{webinar.attendees.toLocaleString()}</div>
                      <div className="text-slate-400 text-xs">Attendees</div>
                    </div>
                    <div className="text-center p-2 bg-slate-700/50 rounded-lg">
                      <div className="text-sm font-bold text-green-400">{webinar.duration}</div>
                      <div className="text-slate-400 text-xs">Duration</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {webinar.tags.slice(0, 2).map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={webinar.recordingUrl}
                      className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                    >
                      <Play className="w-4 h-4" />
                      <span>Watch Now</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Ahead with Our
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {' '}Expert Insights
              </span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Get notified about upcoming webinars, access exclusive content, 
              and join our community of technology professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                <span>Subscribe to Updates</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/blog"
                className="inline-flex items-center space-x-2 border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                <span>Read Our Blog</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
