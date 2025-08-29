import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Play, ExternalLink, ArrowRight, Video, Mic, Star } from 'lucide-react';

export default function Webinars() {
  const upcomingWebinars = [
    {
      title: 'AI-Powered Business Intelligence: A Complete Guide',
      description: 'Learn how to implement AI-driven business intelligence solutions that transform your data into actionable insights.',
      date: 'January 15, 2025',
      time: '2:00 PM - 3:30 PM EST',
      duration: '90 minutes',
      speaker: 'Dr. Sarah Chen',
      speakerTitle: 'AI Research Lead',
      attendees: '150+ registered',
      category: 'AI & Analytics',
      featured: true
    },
    {
      title: 'Zero Trust Security Implementation',
      description: 'Master the principles and practical implementation of zero trust architecture in enterprise environments.',
      date: 'January 22, 2025',
      time: '1:00 PM - 2:30 PM EST',
      duration: '90 minutes',
      speaker: 'Michael Rodriguez',
      speakerTitle: 'Cybersecurity Expert',
      attendees: '120+ registered',
      category: 'Cybersecurity',
      featured: false
    },
    {
      title: 'IoT Edge Computing: Real-World Applications',
      description: 'Explore practical IoT edge computing implementations and their business impact across various industries.',
      date: 'January 29, 2025',
      time: '3:00 PM - 4:30 PM EST',
      duration: '90 minutes',
      speaker: 'Emily Watson',
      speakerTitle: 'IoT Solutions Architect',
      attendees: '80+ registered',
      category: 'IoT & Edge Computing',
      featured: false
    }
  ];

  const pastWebinars = [
    {
      title: 'The Future of Quantum Computing in Business',
      description: 'Understanding the potential impact of quantum computing on business operations and strategy.',
      date: 'December 18, 2024',
      duration: '75 minutes',
      speaker: 'Dr. Alex Thompson',
      speakerTitle: 'Quantum Research Lead',
      attendees: '200+ attended',
      category: 'Emerging Tech',
      recording: true,
      slides: true
    },
    {
      title: 'Blockchain Beyond Cryptocurrency',
      description: 'Real-world enterprise applications of blockchain technology in supply chain, healthcare, and finance.',
      date: 'December 11, 2024',
      duration: '80 minutes',
      speaker: 'David Kim',
      speakerTitle: 'Blockchain Solutions Architect',
      attendees: '180+ attended',
      category: 'Blockchain',
      recording: true,
      slides: true
    },
    {
      title: 'Cloud-Native Development Best Practices',
      description: 'Learn the essential practices for building scalable, resilient cloud-native applications.',
      date: 'December 4, 2024',
      duration: '85 minutes',
      speaker: 'Alex Rodriguez',
      speakerTitle: 'Cloud Architecture Lead',
      attendees: '160+ attended',
      category: 'Cloud & DevOps',
      recording: true,
      slides: true
    }
  ];

  const webinarCategories = [
    { name: 'All Webinars', count: 45, active: true },
    { name: 'AI & Analytics', count: 18, active: false },
    { name: 'Cybersecurity', count: 12, active: false },
    { name: 'Cloud & DevOps', count: 10, active: false },
    { name: 'IoT & Edge', count: 8, active: false },
    { name: 'Emerging Tech', count: 7, active: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Webinars - Zion Tech Group"
        description="Join our expert-led webinars on AI, cybersecurity, cloud computing, and emerging technologies. Learn from industry leaders and gain practical insights."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Video className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Expert-Led
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Webinars
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Join our live webinars featuring industry experts sharing insights on AI, 
              cybersecurity, cloud computing, and emerging technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {webinarCategories.map((category) => (
              <button
                key={category.name}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  category.active
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 hover:text-white'
                }`}
              >
                {category.name} ({category.count})
              </button>
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
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Upcoming Webinars
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Register for our upcoming live sessions and gain insights from industry experts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {upcomingWebinars.map((webinar, index) => (
              <motion.div
                key={webinar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
              >
                {webinar.featured && (
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 text-center">
                    <span className="text-white font-semibold text-sm">Featured Webinar</span>
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                      {webinar.category}
                    </span>
                    <span className="text-slate-400 text-sm">{webinar.duration}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">{webinar.title}</h3>
                  <p className="text-slate-300 text-sm mb-4">{webinar.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      <span className="text-white">{webinar.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-slate-400" />
                      <span className="text-white">{webinar.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Mic className="w-4 h-4 text-slate-400" />
                      <span className="text-white">{webinar.speaker}</span>
                      <span className="text-slate-400">• {webinar.speakerTitle}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-slate-400" />
                      <span className="text-cyan-400">{webinar.attendees}</span>
                    </div>
                  </div>
                  
                  <button className="w-full py-3 px-6 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300">
                    Register Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Webinars */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Past Webinars
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Access recordings and materials from our previous webinars.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastWebinars.map((webinar, index) => (
              <motion.div
                key={webinar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 h-48 flex items-center justify-center">
                  <Play className="w-16 h-16 text-cyan-400" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                      {webinar.category}
                    </span>
                    <span className="text-slate-400 text-sm">{webinar.duration}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">{webinar.title}</h3>
                  <p className="text-slate-300 text-sm mb-4">{webinar.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      <span className="text-white">{webinar.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Mic className="w-4 h-4 text-slate-400" />
                      <span className="text-white">{webinar.speaker}</span>
                      <span className="text-slate-400">• {webinar.speakerTitle}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-slate-400" />
                      <span className="text-cyan-400">{webinar.attendees}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    {webinar.recording && (
                      <button className="flex-1 py-2 px-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2">
                        <Play className="w-4 h-4" />
                        Watch Recording
                      </button>
                    )}
                    {webinar.slides && (
                      <button className="flex-1 py-2 px-4 border border-cyan-400/30 text-cyan-400 text-sm font-medium rounded-lg hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        Download Slides
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Webinar Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Attend Our Webinars?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Gain valuable insights and practical knowledge from industry experts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Expert Insights',
                description: 'Learn from industry leaders and subject matter experts',
                icon: Star,
                color: 'from-yellow-500 to-orange-500'
              },
              {
                title: 'Practical Knowledge',
                description: 'Get actionable insights you can apply immediately',
                icon: Play,
                color: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'Interactive Q&A',
                description: 'Ask questions and get real-time answers',
                icon: Mic,
                color: 'from-purple-500 to-pink-500'
              },
              {
                title: 'Networking',
                description: 'Connect with peers and industry professionals',
                icon: Users,
                color: 'from-green-500 to-emerald-500'
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 text-center hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-slate-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Never miss our upcoming webinars. Subscribe to get notified about new sessions 
              and access to past recordings.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300">
                  Subscribe
                </button>
              </div>
              <p className="text-slate-400 text-sm mt-3">
                Get notified about upcoming webinars and access to past recordings.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
