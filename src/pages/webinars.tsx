import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Video, 
  Calendar, 
  Users, 
  Clock, 
  Star, 
  Play, 
  ExternalLink,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export default function Webinars() {
  const upcomingWebinars = [
    {
      title: 'AI-Powered Business Transformation',
      date: 'December 15, 2024',
      time: '2:00 PM EST',
      duration: '60 minutes',
      speaker: 'Dr. Sarah Chen',
      description: 'Learn how AI is revolutionizing business operations and how to implement AI solutions in your organization.',
      featured: true
    },
    {
      title: 'Quantum Computing: The Future is Now',
      date: 'December 22, 2024',
      time: '1:00 PM EST',
      duration: '45 minutes',
      speaker: 'Prof. Michael Rodriguez',
      description: 'Explore the latest developments in quantum computing and their practical applications.',
      featured: false
    },
    {
      title: 'Cybersecurity in the AI Era',
      date: 'January 5, 2025',
      time: '3:00 PM EST',
      duration: '75 minutes',
      speaker: 'Alex Thompson',
      description: 'Understand the evolving cybersecurity landscape and how AI is both a threat and a solution.',
      featured: false
    }
  ];

  const pastWebinars = [
    {
      title: 'Digital Twin Technology Implementation',
      date: 'November 30, 2024',
      duration: '90 minutes',
      speaker: 'Dr. Emily Watson',
      description: 'Comprehensive guide to implementing digital twin technology in manufacturing and infrastructure.',
      recording: true
    },
    {
      title: 'Micro SaaS: Building Profitable Products',
      date: 'November 15, 2024',
      duration: '60 minutes',
      speaker: 'Mark Johnson',
      description: 'Learn the strategies for building and scaling successful micro SaaS products.',
      recording: true
    }
  ];

  const benefits = [
    'Expert insights from industry leaders',
    'Practical implementation strategies',
    'Q&A sessions with presenters',
    'Access to presentation materials',
    'Networking opportunities',
    'Continuing education credits'
  ];

  return (
    <>
      <SEO 
        title="Webinars - Zion Tech Group"
        description="Join our expert-led webinars on AI, quantum computing, cybersecurity, and emerging technologies. Gain insights and practical knowledge from industry leaders."
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-purple-400/10 border border-purple-400/20 rounded-full text-purple-400 text-sm font-medium mb-6">
                <Video className="w-4 h-4 mr-2" />
                Expert Webinars
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Expert Webinars
                <span className="block bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-600 bg-clip-text text-transparent">
                  & Insights
                </span>
              </h1>
              
              <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                Join our expert-led webinars to gain deep insights into AI, quantum computing, 
                cybersecurity, and emerging technologies. Learn from industry leaders and get 
                practical implementation strategies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                  Register Now
                </button>
                <button className="px-8 py-4 border border-purple-400/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-400/10 transition-all duration-200">
                  View Past Webinars
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Upcoming Webinars Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Upcoming Webinars
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Register for our upcoming expert-led sessions and gain valuable insights 
                into cutting-edge technologies and business strategies.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingWebinars.map((webinar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-slate-800/50 border rounded-xl p-6 hover:scale-105 transition-all duration-200 ${
                    webinar.featured 
                      ? 'border-purple-400/30 bg-gradient-to-br from-purple-500/10 to-blue-500/10' 
                      : 'border-slate-700/50 hover:border-purple-400/30'
                  }`}
                >
                  {webinar.featured && (
                    <div className="flex items-center mb-4">
                      <Star className="w-5 h-5 text-yellow-400 mr-2" />
                      <span className="text-yellow-400 text-sm font-medium">Featured</span>
                    </div>
                  )}
                  
                  <h3 className="text-xl font-semibold text-white mb-3">{webinar.title}</h3>
                  <p className="text-slate-300 mb-4">{webinar.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-slate-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      {webinar.date}
                    </div>
                    <div className="flex items-center text-sm text-slate-400">
                      <Clock className="w-4 h-4 mr-2" />
                      {webinar.time} ({webinar.duration})
                    </div>
                    <div className="flex items-center text-sm text-slate-400">
                      <Users className="w-4 h-4 mr-2" />
                      {webinar.speaker}
                    </div>
                  </div>
                  
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200">
                    Register Now
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Past Webinars Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Past Webinars
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Access recordings and materials from our previous webinars to continue 
                learning at your own pace.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {pastWebinars.map((webinar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-purple-400/30 transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{webinar.title}</h3>
                    {webinar.recording && (
                      <div className="flex items-center text-green-400 text-sm">
                        <Play className="w-4 h-4 mr-1" />
                        Recording Available
                      </div>
                    )}
                  </div>
                  
                  <p className="text-slate-300 mb-4">{webinar.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-slate-400 mb-4">
                    <span>{webinar.date}</span>
                    <span>{webinar.duration}</span>
                    <span>{webinar.speaker}</span>
                  </div>
                  
                  <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                    <Play className="w-4 h-4 mr-2" />
                    Watch Recording
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Attend Our Webinars?
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Our webinars provide valuable insights, practical knowledge, and networking 
                opportunities with industry experts and peers.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0" />
                  <span className="text-slate-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-500/10 to-blue-500/10">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Stay Updated with Expert Insights
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                Don't miss out on valuable knowledge and insights. Register for our upcoming 
                webinars and gain a competitive edge in your industry.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                  Register for Webinars
                </button>
                <button className="px-8 py-4 border border-purple-400/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-400/10 transition-all duration-200">
                  Subscribe to Updates
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}