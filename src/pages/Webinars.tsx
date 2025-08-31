import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, Clock, User, Users, Play, ExternalLink, 
  Download, BookOpen, Video, Mic, Star, Tag,
  Search, Filter, ArrowRight, Eye, Share2
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function Webinars() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const webinarCategories = [
    { id: 'all', name: 'All Webinars', count: 24 },
    { id: 'ai-ml', name: 'AI & Machine Learning', count: 8 },
    { id: 'quantum', name: 'Quantum Computing', count: 4 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 5 },
    { id: 'business', name: 'Business Transformation', count: 4 },
    { id: 'technology', name: 'Emerging Technology', count: 3 }
  ];

  const upcomingWebinars = [
    {
      id: 1,
      title: 'The Future of AI in Business: 2024 and Beyond',
      description: 'Join our AI experts as they discuss the latest trends, breakthroughs, and practical applications of artificial intelligence in modern business operations.',
      category: 'ai-ml',
      speaker: 'Dr. Emily Watson',
      speakerRole: 'Chief AI Officer',
      date: '2024-02-15',
      time: '2:00 PM EST',
      duration: '60 minutes',
      capacity: 500,
      registered: 342,
      featured: true,
      image: '/webinars/ai-future-business.jpg',
      tags: ['AI Trends', 'Business Applications', 'Future Technology']
    },
    {
      id: 2,
      title: 'Quantum Computing: Breaking Down the Hype',
      description: 'A practical exploration of quantum computing capabilities, current limitations, and real-world applications for businesses.',
      category: 'quantum',
      speaker: 'Marcus Rodriguez',
      speakerRole: 'Chief Technology Officer',
      date: '2024-02-22',
      time: '1:00 PM EST',
      duration: '45 minutes',
      capacity: 300,
      registered: 189,
      featured: true,
      image: '/webinars/quantum-computing-hype.jpg',
      tags: ['Quantum Computing', 'Technology Education', 'Business Applications']
    },
    {
      id: 3,
      title: 'AI-Powered Cybersecurity: Protecting Your Business',
      description: 'Learn how artificial intelligence is revolutionizing cybersecurity and how to implement AI-driven security solutions.',
      category: 'cybersecurity',
      speaker: 'David Kim',
      speakerRole: 'Chief Security Officer',
      date: '2024-03-01',
      time: '3:00 PM EST',
      duration: '75 minutes',
      capacity: 400,
      registered: 267,
      featured: false,
      image: '/webinars/ai-cybersecurity.jpg',
      tags: ['Cybersecurity', 'AI Security', 'Business Protection']
    }
  ];

  const pastWebinars = [
    {
      id: 4,
      title: 'Introduction to AI for Small Businesses',
      description: 'A beginner-friendly session covering the basics of AI implementation for small and medium-sized businesses.',
      category: 'ai-ml',
      speaker: 'Dr. Emily Watson',
      speakerRole: 'Chief AI Officer',
      date: '2024-01-20',
      duration: '45 minutes',
      views: 1247,
      rating: 4.8,
      featured: false,
      image: '/webinars/ai-small-business.jpg',
      recordingUrl: '/webinars/recordings/ai-small-business-recording.mp4',
      slidesUrl: '/webinars/slides/ai-small-business-slides.pdf',
      tags: ['AI Basics', 'Small Business', 'Implementation']
    },
    {
      id: 5,
      title: 'Digital Transformation Strategies for 2024',
      description: 'Comprehensive strategies for implementing digital transformation initiatives in your organization.',
      category: 'business',
      speaker: 'Lisa Thompson',
      speakerRole: 'Chief Financial Officer',
      date: '2024-01-15',
      duration: '60 minutes',
      views: 892,
      rating: 4.6,
      featured: false,
      image: '/webinars/digital-transformation.jpg',
      recordingUrl: '/webinars/recordings/digital-transformation-recording.mp4',
      slidesUrl: '/webinars/slides/digital-transformation-slides.pdf',
      tags: ['Digital Transformation', 'Strategy', 'Business']
    },
    {
      id: 6,
      title: 'Machine Learning for Data Analysis',
      description: 'Practical guide to implementing machine learning algorithms for business data analysis and insights.',
      category: 'ai-ml',
      speaker: 'Alex Johnson',
      speakerRole: 'Head of Research & Development',
      date: '2024-01-10',
      duration: '90 minutes',
      views: 1567,
      rating: 4.9,
      featured: false,
      image: '/webinars/ml-data-analysis.jpg',
      recordingUrl: '/webinars/recordings/ml-data-analysis-recording.mp4',
      slidesUrl: '/webinars/slides/ml-data-analysis-slides.pdf',
      tags: ['Machine Learning', 'Data Analysis', 'Business Intelligence']
    },
    {
      id: 7,
      title: 'IoT and Edge Computing: The Next Frontier',
      description: 'Exploring the intersection of Internet of Things and edge computing for business applications.',
      category: 'technology',
      speaker: 'Marcus Rodriguez',
      speakerRole: 'Chief Technology Officer',
      date: '2024-01-05',
      duration: '60 minutes',
      views: 734,
      rating: 4.7,
      featured: false,
      image: '/webinars/iot-edge-computing.jpg',
      recordingUrl: '/webinars/recordings/iot-edge-computing-recording.mp4',
      slidesUrl: '/webinars/slides/iot-edge-computing-slides.pdf',
      tags: ['IoT', 'Edge Computing', 'Emerging Technology']
    },
    {
      id: 8,
      title: 'AI Ethics and Responsible Development',
      description: 'Understanding the importance of ethical AI development and implementation in business contexts.',
      category: 'ai-ml',
      speaker: 'Dr. Emily Watson',
      speakerRole: 'Chief AI Officer',
      date: '2023-12-20',
      duration: '75 minutes',
      views: 1103,
      rating: 4.8,
      featured: false,
      image: '/webinars/ai-ethics.jpg',
      recordingUrl: '/webinars/recordings/ai-ethics-recording.mp4',
      slidesUrl: '/webinars/slides/ai-ethics-slides.pdf',
      tags: ['AI Ethics', 'Responsible AI', 'Business Ethics']
    }
  ];

  const filteredWebinars = [...upcomingWebinars, ...pastWebinars].filter(webinar => {
    const matchesSearch = webinar.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         webinar.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         webinar.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || webinar.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const isUpcoming = (webinar: any) => {
    return new Date(webinar.date) > new Date();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Webinars - Zion Tech Group"
        description="Join our educational webinars on AI, quantum computing, cybersecurity, and business transformation. Learn from industry experts and stay ahead of technology trends."
        keywords="webinars, AI education, quantum computing, cybersecurity, business transformation, Zion Tech Group"
        canonicalUrl="https://ziontechgroup.com/webinars"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Educational <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Webinars</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join our expert-led webinars to learn about the latest developments in AI, quantum computing, cybersecurity, and business transformation. Stay ahead of technology trends and gain practical insights for your organization.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search webinars..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex flex-wrap justify-center gap-2">
                {webinarCategories.map((category) => (
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

      {/* Upcoming Webinars */}
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
              Upcoming Webinars
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Register for our upcoming sessions and learn from industry experts in real-time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingWebinars.map((webinar, index) => (
              <motion.div
                key={webinar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 ${
                  webinar.featured ? 'ring-2 ring-blue-500/50' : ''
                }`}
              >
                <div className="flex items-center space-x-3 mb-4">
                  {webinar.featured && (
                    <span className="px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded-full">
                      Featured
                    </span>
                  )}
                  <span className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full">
                    {webinarCategories.find(cat => cat.id === webinar.category)?.name}
                  </span>
                  <span className="text-gray-400 text-sm">{webinar.duration}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 hover:text-blue-400 transition-colors cursor-pointer">
                  {webinar.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  {webinar.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">{webinar.speaker}</p>
                      <p className="text-gray-400 text-xs">{webinar.speakerRole}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-gray-400 text-sm">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(webinar.date)}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {webinar.time}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">
                      <Users className="w-4 h-4 inline mr-2" />
                      {webinar.registered}/{webinar.capacity} registered
                    </span>
                    <span className="text-blue-400 font-medium">
                      {Math.round((webinar.registered / webinar.capacity) * 100)}% full
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {webinar.tags.slice(0, 2).map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    Register Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Webinars */}
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
              Past Webinars
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Watch recordings of our previous sessions and download presentation materials.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastWebinars.map((webinar, index) => (
              <motion.div
                key={webinar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <span className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full">
                    {webinarCategories.find(cat => cat.id === webinar.category)?.name}
                  </span>
                  <span className="text-gray-400 text-sm">{webinar.duration}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 hover:text-blue-400 transition-colors cursor-pointer line-clamp-2">
                  {webinar.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed mb-6 line-clamp-3">
                  {webinar.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">{webinar.speaker}</p>
                      <p className="text-gray-400 text-xs">{webinar.speakerRole}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      {formatDate(webinar.date)}
                    </span>
                    <span className="text-yellow-400 font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      {webinar.rating}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">
                      <Eye className="w-4 h-4 inline mr-2" />
                      {webinar.views} views
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {webinar.tags.slice(0, 2).map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-2">
                    <a
                      href={webinar.recordingUrl}
                      className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                      title="Watch Recording"
                    >
                      <Play className="w-4 h-4 text-white" />
                    </a>
                    <a
                      href={webinar.slidesUrl}
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

      {/* Webinar Benefits */}
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
              Why Attend Our Webinars?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Gain valuable insights and practical knowledge from industry experts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: User,
                title: 'Expert Speakers',
                description: 'Learn from industry leaders and technology experts with decades of combined experience.'
              },
              {
                icon: BookOpen,
                title: 'Practical Knowledge',
                description: 'Get actionable insights and real-world examples you can apply to your business immediately.'
              },
              {
                icon: Video,
                title: 'Interactive Sessions',
                description: 'Engage with speakers and other participants through live Q&A and discussions.'
              },
              {
                icon: Download,
                title: 'Resource Access',
                description: 'Download presentation slides, recordings, and additional materials for future reference.'
              },
              {
                icon: Users,
                title: 'Networking',
                description: 'Connect with like-minded professionals and expand your industry network.'
              },
              {
                icon: Star,
                title: 'Stay Current',
                description: 'Keep up with the latest trends and developments in AI and technology.'
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
              Never miss a webinar announcement. Subscribe to our newsletter for updates on upcoming sessions and exclusive content.
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
