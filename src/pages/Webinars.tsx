import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Video, 
  Calendar, 
  Clock, 
  Users, 
  Star, 
  Play,
  ExternalLink,
  Download,
  BookOpen,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Zap,
  Globe,
  Award,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export default function Webinars() {
  const upcomingWebinars = [
    {
      id: 'ai-business-strategy-2025',
      title: 'AI-Powered Business Strategy: From Vision to Implementation',
      description: 'Join industry experts as they discuss how to develop and execute AI strategies that drive real business value. Learn from successful case studies and practical implementation frameworks.',
      date: '2025-01-15',
      time: '2:00 PM EST',
      duration: '90 minutes',
      speakers: [
        { name: 'Dr. Sarah Chen', role: 'Chief AI Scientist', company: 'Zion Tech Group' },
        { name: 'Marcus Rodriguez', role: 'CTO', company: 'Global Tech Corp' }
      ],
      category: 'AI & Business Strategy',
      maxAttendees: 500,
      registered: 342,
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      featured: true,
      topics: ['AI Strategy Development', 'ROI Measurement', 'Change Management', 'Implementation Best Practices']
    },
    {
      id: 'quantum-computing-future-2025',
      title: 'The Future of Quantum Computing in Enterprise',
      description: 'Explore the cutting-edge developments in quantum computing and how they will transform enterprise applications. Understand the timeline, investment strategies, and competitive advantages.',
      date: '2025-01-22',
      time: '1:00 PM EST',
      duration: '75 minutes',
      speakers: [
        { name: 'Dr. James Kim', role: 'Chief Innovation Officer', company: 'Zion Tech Group' },
        { name: 'Dr. Emily Watson', role: 'Quantum Researcher', company: 'MIT' }
      ],
      category: 'Emerging Technology',
      maxAttendees: 300,
      registered: 189,
      icon: Rocket,
      color: 'from-indigo-600 to-purple-600',
      featured: true,
      topics: ['Quantum Algorithms', 'Enterprise Applications', 'Investment Strategy', 'Timeline Projections']
    },
    {
      id: 'cybersecurity-ai-2025',
      title: 'AI-Enhanced Cybersecurity: Threat Detection and Response',
      description: 'Learn how AI is revolutionizing cybersecurity with advanced threat detection, automated response systems, and predictive security analytics.',
      date: '2025-01-29',
      time: '3:00 PM EST',
      duration: '60 minutes',
      speakers: [
        { name: 'Lisa Thompson', role: 'Chief Security Officer', company: 'Zion Tech Group' },
        { name: 'Alex Chen', role: 'Security Architect', company: 'Fortune 500 Bank' }
      ],
      category: 'Cybersecurity',
      maxAttendees: 400,
      registered: 267,
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      featured: false,
      topics: ['AI Threat Detection', 'Automated Response', 'Predictive Analytics', 'Compliance']
    }
  ];

  const pastWebinars = [
    {
      id: 'cloud-finops-2024',
      title: 'Cloud FinOps Optimization: Maximizing ROI',
      date: '2024-12-10',
      duration: '75 minutes',
      speakers: ['David Park', 'Sarah Johnson'],
      category: 'Cloud & DevOps',
      attendees: 456,
      rating: 4.8,
      recording: '/webinars/cloud-finops-2024',
      slides: '/webinars/cloud-finops-2024-slides.pdf',
      icon: Cloud,
      color: 'from-blue-600 to-cyan-600'
    },
    {
      id: 'healthcare-ai-2024',
      title: 'AI Implementation in Healthcare: Best Practices',
      date: '2024-11-28',
      duration: '90 minutes',
      speakers: ['Dr. Emily Watson', 'Dr. Michael Chen'],
      category: 'Healthcare Technology',
      attendees: 389,
      rating: 4.9,
      recording: '/webinars/healthcare-ai-2024',
      slides: '/webinars/healthcare-ai-2024-slides.pdf',
      icon: Brain,
      color: 'from-green-600 to-emerald-600'
    },
    {
      id: 'blockchain-enterprise-2024',
      title: 'Blockchain Solutions for Enterprise',
      date: '2024-11-15',
      duration: '60 minutes',
      speakers: ['Marcus Rodriguez', 'Priya Patel'],
      category: 'Blockchain & DLT',
      attendees: 312,
      rating: 4.7,
      recording: '/webinars/blockchain-enterprise-2024',
      slides: '/webinars/blockchain-enterprise-2024-slides.pdf',
      icon: Shield,
      color: 'from-yellow-600 to-orange-600'
    },
    {
      id: 'iot-edge-computing-2024',
      title: 'Edge Computing and IoT: Building the Future',
      date: '2024-10-30',
      duration: '80 minutes',
      speakers: ['Alex Thompson', 'David Kim'],
      category: 'IoT & Edge Computing',
      attendees: 445,
      rating: 4.8,
      recording: '/webinars/iot-edge-computing-2024',
      slides: '/webinars/iot-edge-computing-2024-slides.pdf',
      icon: Zap,
      color: 'from-teal-600 to-green-600'
    }
  ];

  const categories = [
    { name: 'AI & Business Strategy', count: 8, icon: Brain, color: 'from-purple-600 to-pink-600' },
    { name: 'Cybersecurity', count: 6, icon: Shield, color: 'from-red-600 to-orange-600' },
    { name: 'Cloud & DevOps', count: 5, icon: Cloud, color: 'from-blue-600 to-cyan-600' },
    { name: 'Healthcare Technology', count: 4, icon: Brain, color: 'from-green-600 to-emerald-600' },
    { name: 'Emerging Technology', count: 4, icon: Rocket, color: 'from-indigo-600 to-purple-600' },
    { name: 'Blockchain & DLT', count: 3, icon: Shield, color: 'from-yellow-600 to-orange-600' },
    { name: 'IoT & Edge Computing', count: 3, icon: Zap, color: 'from-teal-600 to-green-600' },
    { name: 'Data & Analytics', count: 3, icon: Brain, color: 'from-purple-600 to-blue-600' }
  ];

  const stats = [
    { label: 'Webinars Hosted', value: '50+', icon: Video },
    { label: 'Total Attendees', value: '25K+', icon: Users },
    { label: 'Average Rating', value: '4.8', icon: Star },
    { label: 'Countries Reached', value: '30+', icon: Globe }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Webinars - Zion Tech Group"
        description="Join our expert-led webinars on AI, cybersecurity, cloud computing, and emerging technologies. Register for upcoming sessions and access past recordings."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Expert <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Webinars</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join industry experts and thought leaders for in-depth discussions on cutting-edge technologies, 
              business strategies, and implementation best practices. Learn from the best in the field.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                View Upcoming Webinars
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Access Past Recordings
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Upcoming Webinars
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Register for our upcoming sessions and secure your spot to learn from industry experts.
            </p>
          </motion.div>

          <div className="space-y-8">
            {upcomingWebinars.map((webinar, index) => (
              <motion.div
                key={webinar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 rounded-2xl p-8 border border-cyan-400/30"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left Column - Content */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${webinar.color} flex items-center justify-center`}>
                        <webinar.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-sm text-gray-400">{webinar.category}</span>
                        <h3 className="text-2xl font-bold text-white">{webinar.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">{webinar.description}</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-sm text-gray-400">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{webinar.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{webinar.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Video className="w-4 h-4" />
                        <span>{webinar.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4" />
                        <span>{webinar.registered}/{webinar.maxAttendees}</span>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Topics</h4>
                      <div className="flex flex-wrap gap-2">
                        {webinar.topics.map((topic) => (
                          <span key={topic} className="px-3 py-1 bg-slate-700/50 text-cyan-400 text-sm rounded-full">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                        Register Now
                      </button>
                      <button className="px-6 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300">
                        Add to Calendar
                      </button>
                    </div>
                  </div>
                  
                  {/* Right Column - Speakers & Registration */}
                  <div className="lg:col-span-1">
                    <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                      <h4 className="text-lg font-semibold text-white mb-4 text-center">Featured Speakers</h4>
                      <div className="space-y-4">
                        {webinar.speakers.map((speaker, idx) => (
                          <div key={idx} className="text-center">
                            <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center">
                              <Users className="w-8 h-8 text-gray-400" />
                            </div>
                            <div className="text-white font-semibold">{speaker.name}</div>
                            <div className="text-cyan-400 text-sm">{speaker.role}</div>
                            <div className="text-gray-400 text-xs">{speaker.company}</div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-6 pt-6 border-t border-slate-700/50">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-cyan-400 mb-2">
                            {Math.round((webinar.registered / webinar.maxAttendees) * 100)}%
                          </div>
                          <div className="text-sm text-gray-400">Registration Filled</div>
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

      {/* Categories */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our webinars organized by technology domain and business focus areas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{category.name}</h3>
                    <span className="text-sm text-gray-400">{category.count} webinars</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 text-sm font-medium">View Webinars</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Webinars */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Past Webinars
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Access recordings and materials from our previous webinars. Learn at your own pace.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastWebinars.map((webinar, index) => (
              <motion.div
                key={webinar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/20"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${webinar.color} flex items-center justify-center`}>
                    <webinar.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400">{webinar.category}</span>
                    <h3 className="text-lg font-bold text-white line-clamp-2">{webinar.title}</h3>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4 text-xs text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-3 h-3" />
                    <span>{webinar.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Video className="w-3 h-3" />
                    <span>{webinar.duration}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4 text-xs text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Users className="w-3 h-3" />
                    <span>{webinar.attendees} attendees</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-3 h-3 text-yellow-400" />
                    <span>{webinar.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <button className="px-3 py-2 bg-slate-700/50 text-cyan-400 text-xs rounded hover:bg-slate-600/50 transition-colors">
                      <Play className="w-3 h-3 inline mr-1" />
                      Watch
                    </button>
                    <button className="px-3 py-2 bg-slate-700/50 text-cyan-400 text-xs rounded hover:bg-slate-600/50 transition-colors">
                      <Download className="w-3 h-3 inline mr-1" />
                      Slides
                    </button>
                  </div>
                  <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated with Our Webinars
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Get notified about upcoming webinars and access to exclusive content. 
              Join thousands of technology professionals and thought leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white placeholder-gray-400"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
