
import React from 'react';
import { SEO } from '../components/SEO';
import { Users, Calendar, Clock, Play, ExternalLink, Bookmark, Share2, TrendingUp, Brain, Shield, Cloud, Rocket, Globe, Zap } from 'lucide-react';

export default function Webinars() {
  const upcomingWebinars = [
    {
      id: 1,
      title: 'AI-Powered Business Transformation: Real-World Case Studies',
      description: 'Learn how leading enterprises are leveraging AI to transform their operations and achieve unprecedented growth.',
      speaker: 'Dr. Sarah Chen',
      speakerTitle: 'Chief AI Officer',
      date: 'February 15, 2025',
      time: '2:00 PM EST',
      duration: '60 minutes',
      category: 'Artificial Intelligence',
      icon: Brain,
      color: 'from-purple-500 to-cyan-500',
      featured: true,
      attendees: 1247,
      spots: 2000
    },
    {
      id: 2,
      title: 'Cybersecurity in the Age of AI: Threats and Defenses',
      description: 'Explore emerging cybersecurity challenges and how AI is both a threat and a solution in modern security.',
      speaker: 'Michael Rodriguez',
      speakerTitle: 'Head of Cybersecurity',
      date: 'February 22, 2025',
      time: '1:00 PM EST',
      duration: '45 minutes',
      category: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      featured: true,
      attendees: 892,
      spots: 1500
    },
    {
      id: 3,
      title: 'Cloud-Native Architecture: Building for Scale',
      description: 'Discover best practices for designing and implementing cloud-native applications that scale effortlessly.',
      speaker: 'Lisa Thompson',
      speakerTitle: 'Cloud Solutions Architect',
      date: 'March 1, 2025',
      time: '3:00 PM EST',
      duration: '75 minutes',
      category: 'Cloud Computing',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      featured: false,
      attendees: 567,
      spots: 1000
    }
  ];

  const pastWebinars = [
    {
      id: 4,
      title: 'Quantum Computing: The Future of Problem Solving',
      description: 'An in-depth exploration of quantum computing principles and their applications in business.',
      speaker: 'Dr. James Wilson',
      speakerTitle: 'Quantum Research Lead',
      date: 'January 20, 2025',
      duration: '90 minutes',
      category: 'Emerging Technology',
      icon: Rocket,
      color: 'from-indigo-500 to-purple-500',
      views: 3240,
      rating: 4.8,
      recording: true
    },
    {
      id: 5,
      title: 'Digital Twin Technology: Bridging Physical and Digital Worlds',
      description: 'How digital twin technology is revolutionizing industries from manufacturing to healthcare.',
      speaker: 'David Kim',
      speakerTitle: 'Digital Innovation Director',
      date: 'January 15, 2025',
      duration: '60 minutes',
      category: 'Digital Transformation',
      icon: Globe,
      color: 'from-green-500 to-blue-500',
      views: 2890,
      rating: 4.7,
      recording: true
    },
    {
      id: 6,
      title: 'Micro SaaS Success Stories: From Idea to Market',
      description: 'Real entrepreneurs share their journey building successful micro SaaS businesses.',
      speaker: 'Alex Johnson',
      speakerTitle: 'Startup Advisor',
      date: 'January 10, 2025',
      duration: '45 minutes',
      category: 'Business Strategy',
      icon: TrendingUp,
      color: 'from-emerald-500 to-teal-500',
      views: 2150,
      rating: 4.9,
      recording: true
    }
  ];

  const categories = ['All', 'Artificial Intelligence', 'Cybersecurity', 'Cloud Computing', 'Digital Transformation', 'Emerging Technology', 'Business Strategy'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Webinars - Zion Tech Group"
        description="Join our expert-led webinars on AI, cybersecurity, cloud computing, and emerging technologies. Learn from industry leaders and gain practical insights."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20"></div>
        <div className="relative container-responsive py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-6">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Expert-Led Learning Sessions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our live webinars featuring industry experts, thought leaders, and technology innovators. 
              Gain practical insights, learn best practices, and stay ahead of industry trends.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-gray-300">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>Monthly Sessions</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span>Expert Speakers</span>
              </div>
              <div className="flex items-center">
                <Play className="w-5 h-5 mr-2" />
                <span>Live & Recorded</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Webinars */}
      <div className="container-responsive py-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Upcoming Webinars</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {upcomingWebinars.map((webinar) => (
            <div key={webinar.id} className="group relative">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${webinar.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <webinar.icon className="w-8 h-8 text-white" />
                </div>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-slate-700/50 text-purple-400 text-sm rounded-full mb-3">
                    {webinar.category}
                  </span>
                  {webinar.featured && (
                    <span className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-400 text-sm rounded-full ml-2">
                      Featured
                    </span>
                  )}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {webinar.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {webinar.description}
                  </p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{webinar.speaker} - {webinar.speakerTitle}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{webinar.date} at {webinar.time}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{webinar.duration}</span>
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <span>{webinar.attendees} registered</span>
                    <span>{webinar.spots - webinar.attendees} spots left</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(webinar.attendees / webinar.spots) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 group-hover:scale-105">
                  Register Now
                  <ExternalLink className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Past Webinars */}
        <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Past Webinars</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastWebinars.map((webinar) => (
              <div key={webinar.id} className="bg-slate-700/30 rounded-xl p-4 hover:bg-slate-700/50 transition-colors">
                <div className="flex items-start space-x-3 mb-3">
                  <div className={`w-12 h-12 bg-gradient-to-br ${webinar.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <webinar.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">{webinar.title}</h3>
                    <p className="text-gray-400 text-xs mb-2">{webinar.speaker}</p>
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <span>{webinar.date}</span>
                      <span>•</span>
                      <span>{webinar.duration}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-3 line-clamp-2">{webinar.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span>👁️ {webinar.views}</span>
                    <span>⭐ {webinar.rating}</span>
                  </div>
                  {webinar.recording && (
                    <button className="inline-flex items-center px-3 py-1 bg-slate-600 hover:bg-slate-500 text-white text-xs font-medium rounded-lg transition-colors">
                      <Play className="w-3 h-3 mr-1" />
                      Watch Recording
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Webinar Categories */}
      <div className="container-responsive py-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Webinar Categories</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl mb-4">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">AI & Machine Learning</h3>
            <p className="text-gray-400 text-sm mb-4">
              Learn about the latest AI technologies, implementation strategies, and business applications
            </p>
            <div className="text-sm text-gray-500">
              <div className="flex items-center justify-center space-x-4">
                <span>📅 Monthly</span>
                <span>👥 500+ attendees</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Cybersecurity</h3>
            <p className="text-gray-400 text-sm mb-4">
              Stay updated on security threats, best practices, and emerging defense strategies
            </p>
            <div className="text-sm text-gray-500">
              <div className="flex items-center justify-center space-x-4">
                <span>📅 Bi-weekly</span>
                <span>👥 300+ attendees</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl mb-4">
              <Cloud className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Cloud & DevOps</h3>
            <p className="text-gray-400 text-sm mb-4">
              Master cloud architecture, deployment strategies, and DevOps best practices
            </p>
            <div className="text-sm text-gray-500">
              <div className="flex items-center justify-center space-x-4">
                <span>📅 Monthly</span>
                <span>👥 400+ attendees</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl mb-4">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Emerging Technology</h3>
            <p className="text-gray-400 text-sm mb-4">
              Explore quantum computing, blockchain, IoT, and other cutting-edge technologies
            </p>
            <div className="text-sm text-gray-500">
              <div className="flex items-center justify-center space-x-4">
                <span>📅 Quarterly</span>
                <span>👥 200+ attendees</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl mb-4">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Digital Transformation</h3>
            <p className="text-gray-400 text-sm mb-4">
              Learn strategies for digital transformation and organizational change
            </p>
            <div className="text-sm text-gray-500">
              <div className="flex items-center justify-center space-x-4">
                <span>📅 Bi-monthly</span>
                <span>👥 350+ attendees</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Business Strategy</h3>
            <p className="text-gray-400 text-sm mb-4">
              Strategic insights for technology leaders and business decision makers
            </p>
            <div className="text-sm text-gray-500">
              <div className="flex items-center justify-center space-x-4">
                <span>📅 Monthly</span>
                <span>👥 250+ attendees</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container-responsive py-16">
        <div className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 border border-purple-400/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Stay Updated with Our Webinars</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get notified about upcoming webinars, receive session materials, and never miss an opportunity 
            to learn from industry experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
