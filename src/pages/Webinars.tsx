
import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { 
  Calendar, 
  Clock, 
  Users, 
  Play, 
  Download, 
  Share2, 
  Bookmark, 
  Search,
  Filter,
  ArrowRight,
  ExternalLink,
  Video,
  Headphones,
  FileText,
  Award,
  Star,
  TrendingUp,
  Clock3,
  UserCheck,
  Globe,
  Zap,
  Brain,
  Shield,
  Cloud,
  Rocket
} from 'lucide-react';

const Webinars: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', icon: Globe },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'quantum', name: 'Quantum Computing', icon: Rocket },
    { id: 'iot', name: 'IoT & Edge Computing', icon: Zap }
  ];

  const upcomingWebinars = [
    {
      id: 1,
      title: 'AI-Powered Business Intelligence: The Future of Decision Making',
      category: 'ai',
      date: '2024-02-15',
      time: '14:00 EST',
      duration: '60 min',
      speakers: ['Dr. Sarah Chen', 'Prof. Michael Rodriguez'],
      attendees: 1250,
      thumbnail: '/images/webinars/ai-bi-future.jpg',
      description: 'Discover how AI is revolutionizing business intelligence and transforming the way organizations make critical decisions.',
      tags: ['AI', 'Business Intelligence', 'Decision Making', 'Analytics']
    },
    {
      id: 2,
      title: 'Quantum Computing in Cybersecurity: Breaking and Building Encryption',
      category: 'quantum',
      date: '2024-02-20',
      time: '15:30 EST',
      duration: '90 min',
      speakers: ['Dr. James Wilson', 'Dr. Elena Petrova'],
      attendees: 890,
      thumbnail: '/images/webinars/quantum-cybersecurity.jpg',
      description: 'Explore the dual nature of quantum computing in cybersecurity and how to prepare for the quantum future.',
      tags: ['Quantum Computing', 'Cybersecurity', 'Encryption', 'Future Tech']
    },
    {
      id: 3,
      title: 'Cloud-Native Security: Zero Trust Architecture Implementation',
      category: 'security',
      date: '2024-02-25',
      time: '13:00 EST',
      duration: '75 min',
      speakers: ['Alex Thompson', 'Maria Santos'],
      attendees: 1100,
      thumbnail: '/images/webinars/cloud-security-zero-trust.jpg',
      description: 'Learn practical strategies for implementing zero trust architecture in cloud-native environments.',
      tags: ['Cloud Security', 'Zero Trust', 'Architecture', 'Implementation']
    }
  ];

  const pastWebinars = [
    {
      id: 4,
      title: 'The Future of AI in Healthcare: From Diagnosis to Treatment',
      category: 'ai',
      date: '2024-01-30',
      duration: '60 min',
      speakers: ['Dr. Emily Johnson', 'Dr. Robert Kim'],
      attendees: 2100,
      views: 8500,
      thumbnail: '/images/webinars/ai-healthcare-future.jpg',
      description: 'Explore how AI is transforming healthcare delivery and improving patient outcomes.',
      tags: ['AI', 'Healthcare', 'Diagnosis', 'Treatment'],
      recording: true,
      slides: true,
      certificate: true
    },
    {
      id: 5,
      title: 'DevOps Transformation: Building High-Performance Teams',
      category: 'cloud',
      date: '2024-01-25',
      duration: '75 min',
      speakers: ['David Chen', 'Lisa Rodriguez'],
      attendees: 1800,
      views: 7200,
      thumbnail: '/images/webinars/devops-transformation.jpg',
      description: 'Learn the key principles and practices for transforming your organization into a high-performance DevOps team.',
      tags: ['DevOps', 'Transformation', 'Team Building', 'Performance'],
      recording: true,
      slides: true,
      certificate: true
    },
    {
      id: 6,
      title: 'IoT Security: Protecting the Connected World',
      category: 'iot',
      date: '2024-01-20',
      duration: '60 min',
      speakers: ['Dr. Mark Stevens', 'Sarah Williams'],
      attendees: 1600,
      views: 6800,
      thumbnail: '/images/webinars/iot-security-connected.jpg',
      description: 'Discover the latest strategies for securing IoT devices and protecting connected ecosystems.',
      tags: ['IoT', 'Security', 'Connected Devices', 'Protection'],
      recording: true,
      slides: true,
      certificate: true
    }
  ];

  const filteredUpcoming = upcomingWebinars.filter(webinar => 
    (selectedCategory === 'all' || webinar.category === selectedCategory) &&
    webinar.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredPast = pastWebinars.filter(webinar => 
    (selectedCategory === 'all' || webinar.category === selectedCategory) &&
    webinar.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : Globe;
  };

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'Other';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Webinars - Zion Tech Group"
        description="Join our expert-led webinars on AI, cybersecurity, cloud computing, quantum computing, and emerging technologies. Learn from industry leaders and stay ahead of the curve."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
        <div className="container-responsive relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-cyan-400/10 border border-cyan-400/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Video className="w-4 h-4 mr-2" />
              Expert Knowledge Sharing
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Expert Webinars
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join industry experts and thought leaders for in-depth discussions on cutting-edge 
              technologies, industry trends, and practical insights that will transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg">
                Register for Upcoming
              </button>
              <button className="px-8 py-4 bg-slate-800/50 border border-slate-600 text-white font-semibold rounded-lg hover:bg-slate-700/50 transition-all duration-200">
                Browse Past Webinars
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-slate-800/20">
        <div className="container-responsive">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search webinars..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-lg border transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-400/20 border-cyan-400/40 text-cyan-400'
                      : 'bg-slate-700/50 border-slate-600/50 text-gray-300 hover:bg-slate-600/50 hover:border-cyan-400/30'
                  }`}
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Webinars Section */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Upcoming Webinars
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't miss these exclusive sessions with industry experts. Register now to secure your spot.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredUpcoming.map((webinar) => {
              const CategoryIcon = getCategoryIcon(webinar.category);
              return (
                <div key={webinar.id} className="group bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden hover:bg-slate-700/50 hover:border-cyan-400/30 transition-all duration-200 hover:scale-105">
                  {/* Thumbnail */}
                  <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                    <Play className="w-16 h-16 text-cyan-400 opacity-80 group-hover:opacity-100 transition-opacity duration-200" />
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center px-2 py-1 bg-cyan-400/20 border border-cyan-400/30 rounded-full text-cyan-400 text-xs font-medium">
                        <CategoryIcon className="w-3 h-3 mr-1" />
                        {getCategoryName(webinar.category)}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {webinar.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {webinar.description}
                    </p>
                    
                    {/* Details */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-400">
                        <Calendar className="w-4 h-4 mr-2" />
                        {formatDate(webinar.date)}
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <Clock className="w-4 h-4 mr-2" />
                        {webinar.time} • {webinar.duration}
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <Users className="w-4 h-4 mr-2" />
                        {webinar.attendees} registered
                      </div>
                    </div>
                    
                    {/* Speakers */}
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 mb-2">Speakers:</p>
                      <div className="flex flex-wrap gap-2">
                        {webinar.speakers.map((speaker, index) => (
                          <span key={index} className="inline-flex items-center px-2 py-1 bg-slate-700/50 rounded text-xs text-gray-300">
                            {speaker}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Tags */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {webinar.tags.map((tag, index) => (
                          <span key={index} className="inline-flex items-center px-2 py-1 bg-cyan-400/10 border border-cyan-400/20 rounded text-xs text-cyan-400">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* CTA */}
                    <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105">
                      Register Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          
          {filteredUpcoming.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No upcoming webinars match your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Past Webinars Section */}
      <section className="py-20 bg-slate-800/20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Past Webinars
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access recordings, slides, and resources from our previous webinars. 
              Learn at your own pace and earn certificates.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPast.map((webinar) => {
              const CategoryIcon = getCategoryIcon(webinar.category);
              return (
                <div key={webinar.id} className="group bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden hover:bg-slate-700/50 hover:border-cyan-400/30 transition-all duration-200 hover:scale-105">
                  {/* Thumbnail */}
                  <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                    <Play className="w-16 h-16 text-cyan-400 opacity-80 group-hover:opacity-100 transition-opacity duration-200" />
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center px-2 py-1 bg-cyan-400/20 border border-cyan-400/30 rounded-full text-cyan-400 text-xs font-medium">
                        <CategoryIcon className="w-3 h-3 mr-1" />
                        {getCategoryName(webinar.category)}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-flex items-center px-2 py-1 bg-green-400/20 border border-green-400/30 rounded-full text-green-400 text-xs font-medium">
                        Available
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {webinar.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {webinar.description}
                    </p>
                    
                    {/* Details */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-400">
                        <Calendar className="w-4 h-4 mr-2" />
                        {formatDate(webinar.date)}
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <Clock className="w-4 h-4 mr-2" />
                        {webinar.duration}
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <Users className="w-4 h-4 mr-2" />
                        {webinar.attendees} attended • {webinar.views} views
                      </div>
                    </div>
                    
                    {/* Speakers */}
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 mb-2">Speakers:</p>
                      <div className="flex flex-wrap gap-2">
                        {webinar.speakers.map((speaker, index) => (
                          <span key={index} className="inline-flex items-center px-2 py-1 bg-slate-700/50 rounded text-xs text-gray-300">
                            {speaker}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Tags */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {webinar.tags.map((tag, index) => (
                          <span key={index} className="inline-flex items-center px-2 py-1 bg-cyan-400/10 border border-cyan-400/20 rounded text-xs text-cyan-400">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Resources */}
                    <div className="flex gap-2">
                      {webinar.recording && (
                        <button className="flex-1 flex items-center justify-center px-3 py-2 bg-slate-700/50 text-gray-300 text-sm rounded-lg hover:bg-slate-600/50 transition-colors">
                          <Play className="w-4 h-4 mr-2" />
                          Watch
                        </button>
                      )}
                      {webinar.slides && (
                        <button className="flex-1 flex items-center justify-center px-3 py-2 bg-slate-700/50 text-gray-300 text-sm rounded-lg hover:bg-slate-600/50 transition-colors">
                          <FileText className="w-4 h-4 mr-2" />
                          Slides
                        </button>
                      )}
                      {webinar.certificate && (
                        <button className="flex-1 flex items-center justify-center px-3 py-2 bg-slate-700/50 text-gray-300 text-sm rounded-lg hover:bg-slate-600/50 transition-colors">
                          <Award className="w-4 h-4 mr-2" />
                          Certificate
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {filteredPast.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No past webinars match your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-cyan-900/20">
        <div className="container-responsive text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay Updated with Expert Knowledge
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Never miss an opportunity to learn from industry experts. Subscribe to our webinar 
            notifications and be the first to know about upcoming sessions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg">
              Subscribe to Notifications
            </button>
            <button className="px-8 py-4 bg-slate-800/50 border border-slate-600 text-white font-semibold rounded-lg hover:bg-slate-700/50 transition-all duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Webinars;
