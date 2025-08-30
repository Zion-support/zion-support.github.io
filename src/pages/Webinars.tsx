import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Brain, 
  Shield, 
  Cloud, 
  Rocket, 
  Heart, 
  Zap, 
  Globe,
  Video,
  Database,
  Target,
  Calendar,
  Clock,
  Users,
  Play,
  ExternalLink,
  Search,
  Filter,
  Star,
  Eye,
  Download,
  Share2,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function Webinars() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showPast, setShowPast] = useState(false);

  const categories = [
    { id: 'all', name: 'All Categories', icon: BookOpen, count: 0 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 8 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 5 },
    { id: 'cloud-devops', name: 'Cloud & DevOps', icon: Cloud, count: 6 },
    { id: 'digital-transformation', name: 'Digital Transformation', icon: Rocket, count: 4 },
    { id: 'healthcare-tech', name: 'Healthcare Technology', icon: Heart, count: 3 },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Zap, count: 4 },
    { id: 'sustainability', name: 'Sustainability & Green IT', icon: Globe, count: 2 }
  ];

  const upcomingWebinars = [
    {
      id: 1,
      title: 'AI Autonomous Research Assistant: Revolutionizing Business Intelligence',
      description: 'Discover how our revolutionary AI Autonomous Research Assistant is transforming how businesses gather, analyze, and synthesize information across multiple sources.',
      category: 'ai-ml',
      type: 'upcoming',
      date: '2025-02-10T14:00:00Z',
      duration: '75 min',
      speakers: ['Dr. Sarah Chen', 'Dr. Michael Rodriguez', 'AI Research Team'],
      maxAttendees: 600,
      currentAttendees: 487,
      featured: true,
      tags: ['AI Research', 'Autonomous Systems', 'Business Intelligence', 'Innovation'],
      thumbnail: '/images/webinars/ai-autonomous-research-2025.jpg',
      registrationRequired: true,
      recordingAvailable: false
    },
    {
      id: 2,
      title: 'AI Supply Chain Optimization: Reducing Costs by Up to 30%',
      description: 'Learn how AI-powered supply chain optimization can predict demand, optimize inventory, and reduce costs significantly for your organization.',
      category: 'ai-ml',
      type: 'upcoming',
      date: '2025-02-12T15:00:00Z',
      duration: '60 min',
      speakers: ['Michael Rodriguez', 'Supply Chain Experts', 'AI Implementation Team'],
      maxAttendees: 400,
      currentAttendees: 298,
      featured: true,
      tags: ['Supply Chain', 'AI Optimization', 'Cost Reduction', 'Predictive Analytics'],
      thumbnail: '/images/webinars/ai-supply-chain-2025.jpg',
      registrationRequired: true,
      recordingAvailable: false
    },
    {
      id: 3,
      title: 'Zero-Trust Security Architecture: Implementation Best Practices',
      description: 'Deep dive into implementing zero-trust security principles across your organization with real-world examples and practical guidance.',
      category: 'cybersecurity',
      type: 'upcoming',
      date: '2025-02-15T13:00:00Z',
      duration: '90 min',
      speakers: ['James Wilson', 'Cybersecurity Team', 'Security Architects'],
      maxAttendees: 300,
      currentAttendees: 156,
      featured: false,
      tags: ['Cybersecurity', 'Zero Trust', 'Security Architecture', 'Best Practices'],
      thumbnail: '/images/webinars/zero-trust-security-2025.jpg',
      registrationRequired: true,
      recordingAvailable: false
    }
  ];

  const pastWebinars = [
    {
      id: 4,
      title: 'Cloud FinOps: Optimizing Cloud Costs with AI and Automation',
      description: 'Learn how to implement FinOps practices to optimize cloud spending and improve operational efficiency.',
      category: 'cloud-devops',
      type: 'past',
      date: '2024-12-15T14:00:00Z',
      duration: '60 min',
      speakers: ['Alex Thompson', 'Cloud Operations Team'],
      maxAttendees: 500,
      currentAttendees: 423,
      featured: false,
      tags: ['Cloud Computing', 'FinOps', 'Cost Optimization', 'DevOps'],
      thumbnail: '/images/webinars/cloud-finops-2024.jpg',
      registrationRequired: false,
      recordingAvailable: true,
      recordingUrl: '/webinars/cloud-finops-2024-recording'
    },
    {
      id: 5,
      title: 'Digital Twin Technology: Transforming Manufacturing and Operations',
      description: 'Discover how digital twin technology is revolutionizing manufacturing, healthcare, and infrastructure management.',
      category: 'digital-transformation',
      type: 'past',
      date: '2024-11-20T15:00:00Z',
      duration: '75 min',
      speakers: ['Dr. Emily Watson', 'Digital Twin Experts'],
      maxAttendees: 400,
      currentAttendees: 356,
      featured: false,
      tags: ['Digital Twin', 'Manufacturing', 'IoT', 'Digital Transformation'],
      thumbnail: '/images/webinars/digital-twin-2024.jpg',
      registrationRequired: false,
      recordingAvailable: true,
      recordingUrl: '/webinars/digital-twin-2024-recording'
    }
  ];

  const allWebinars = [...upcomingWebinars, ...pastWebinars];
  
  const filteredWebinars = allWebinars.filter(webinar => {
    if (selectedCategory !== 'all' && webinar.category !== selectedCategory) return false;
    if (searchQuery && !webinar.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !webinar.description.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    if (showPast && webinar.type !== 'past') return false;
    if (!showPast && webinar.type !== 'upcoming') return false;
    return true;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getTimeUntil = (dateString: string) => {
    const now = new Date();
    const webinarDate = new Date(dateString);
    const diff = webinarDate.getTime() - now.getTime();
    
    if (diff <= 0) return 'Past';
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    if (days > 0) return `${days} day${days > 1 ? 's' : ''} away`;
    if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} away`;
    return 'Starting soon';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Webinars - Zion Tech Group"
        description="Join our live webinars and access recorded sessions on AI, cybersecurity, cloud computing, and emerging technologies."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Live Webinars &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple"> Learning</span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Join our expert-led webinars on cutting-edge technologies, 
              industry insights, and practical implementation strategies.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search webinars..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-zion-blue-dark border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </div>
            </div>

            {/* Toggle Past/Upcoming */}
            <div className="flex justify-center mb-8">
              <div className="bg-zion-blue-dark border border-zion-purple/30 rounded-lg p-1">
                <button
                  onClick={() => setShowPast(false)}
                  className={`px-6 py-2 rounded-md transition-all duration-300 ${
                    !showPast
                      ? 'bg-zion-cyan text-white'
                      : 'text-zion-slate-light hover:text-white'
                  }`}
                >
                  Upcoming Webinars
                </button>
                <button
                  onClick={() => setShowPast(true)}
                  className={`px-6 py-2 rounded-md transition-all duration-300 ${
                    showPast
                      ? 'bg-zion-cyan text-white'
                      : 'text-zion-slate-light hover:text-white'
                  }`}
                >
                  Past Webinars
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-zion-cyan text-white border-zion-cyan'
                    : 'bg-transparent text-zion-slate-light border-zion-purple/30 hover:border-zion-cyan hover:text-zion-cyan'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                  <span className="text-xs opacity-75">({category.count})</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars Grid */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            {showPast ? 'Recorded Webinars' : 'Upcoming Webinars'}
          </h2>
          
          {filteredWebinars.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredWebinars.map((webinar) => (
                <motion.div
                  key={webinar.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-zion-blue-dark border border-zion-purple/30 rounded-xl overflow-hidden hover:border-zion-cyan/50 transition-all duration-300 group"
                >
                  {/* Thumbnail */}
                  <div className="relative h-48 bg-gradient-to-br from-zion-purple/20 to-zion-cyan/20 flex items-center justify-center">
                    <Video className="w-16 h-16 text-zion-cyan opacity-60" />
                    {webinar.featured && (
                      <div className="absolute top-4 left-4 px-3 py-1 bg-zion-cyan text-white text-sm rounded-full font-medium">
                        Featured
                      </div>
                    )}
                    {webinar.type === 'upcoming' && (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-green-500 text-white text-sm rounded-full font-medium">
                        Live
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-zion-purple/20 text-zion-purple text-sm rounded-full">
                        {categories.find(c => c.id === webinar.category)?.name}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4 text-zion-slate-light" />
                        <span className="text-sm text-zion-slate-light">{webinar.duration}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors line-clamp-2">
                      {webinar.title}
                    </h3>
                    
                    <p className="text-zion-slate-light mb-4 line-clamp-3">
                      {webinar.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-zion-slate-light mb-4">
                      <span>{formatDate(webinar.date)}</span>
                      {webinar.type === 'upcoming' && (
                        <span className="text-green-400 font-medium">
                          {getTimeUntil(webinar.date)}
                        </span>
                      )}
                    </div>

                    {/* Speakers */}
                    <div className="mb-4">
                      <div className="flex items-center space-x-2 text-sm text-zion-slate-light mb-2">
                        <Users className="w-4 h-4" />
                        <span>Speakers:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {webinar.speakers.slice(0, 3).map((speaker, index) => (
                          <span key={index} className="px-2 py-1 bg-zion-purple/10 text-zion-purple text-xs rounded">
                            {speaker}
                          </span>
                        ))}
                        {webinar.speakers.length > 3 && (
                          <span className="px-2 py-1 bg-zion-purple/10 text-zion-purple text-xs rounded">
                            +{webinar.speakers.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Attendance */}
                    {webinar.type === 'upcoming' && (
                      <div className="mb-4">
                        <div className="flex items-center justify-between text-sm text-zion-slate-light mb-2">
                          <span>Registration</span>
                          <span>{webinar.currentAttendees}/{webinar.maxAttendees}</span>
                        </div>
                        <div className="w-full bg-zion-purple/20 rounded-full h-2">
                          <div 
                            className="bg-zion-cyan h-2 rounded-full transition-all duration-300"
                            style={{ width: `${(webinar.currentAttendees / webinar.maxAttendees) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    )}

                    {/* Tags */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {webinar.tags.slice(0, 3).map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-zion-purple/10 text-zion-purple text-xs rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between">
                      {webinar.type === 'upcoming' ? (
                        <button className="px-6 py-3 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-dark transition-colors flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>Register Now</span>
                        </button>
                      ) : (
                        <button className="px-6 py-3 bg-zion-purple text-white rounded-lg hover:bg-zion-purple-dark transition-colors flex items-center space-x-2">
                          <Play className="w-4 h-4" />
                          <span>Watch Recording</span>
                        </button>
                      )}
                      
                      <button className="p-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-20 h-20 mx-auto mb-6 bg-zion-purple/20 rounded-full flex items-center justify-center">
                <Search className="w-10 h-10 text-zion-purple" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No webinars found</h3>
              <p className="text-zion-slate-light">Try adjusting your filters or search terms</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-2xl p-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Our Webinars
            </h2>
            <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Get notified about upcoming webinars, access to recordings, and exclusive content. 
              Join our community of technology professionals and thought leaders.
            </p>
            <button className="px-8 py-4 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-dark transition-colors text-lg font-semibold">
              Subscribe to Webinar Updates
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
