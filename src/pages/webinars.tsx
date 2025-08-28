import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  Users, 
  Calendar, 
  Clock, 
  Play, 
  ExternalLink, 
  ArrowRight,
  Star,
  Video,
  Mic,
  MessageCircle,
  Download,
  BookOpen,
  Zap,
  CheckCircle
} from 'lucide-react';

const WebinarsPage: React.FC = () => {
  const upcomingWebinars = [
    {
      title: 'AI in Healthcare: Implementation Strategies for 2025',
      description: 'Join our expert panel as they discuss the latest AI implementation strategies in healthcare, including case studies, best practices, and future trends.',
      date: 'December 15, 2024',
      time: '2:00 PM - 3:30 PM EST',
      duration: '90 minutes',
      speakers: ['Dr. Sarah Johnson', 'Dr. Michael Chen', 'Alex Rodriguez'],
      category: 'Healthcare AI',
      featured: true,
      registrationUrl: '/register',
      color: 'from-red-500 to-pink-500',
      attendees: 234,
      maxAttendees: 500
    },
    {
      title: 'Quantum Computing: The Future of Financial Services',
      description: 'Explore how quantum computing is revolutionizing financial services, from risk assessment to portfolio optimization and algorithmic trading.',
      date: 'December 20, 2024',
      time: '10:00 AM - 11:30 AM EST',
      duration: '90 minutes',
      speakers: ['Dr. Emily Thompson', 'Robert Martinez'],
      category: 'Quantum Computing',
      featured: true,
      registrationUrl: '/register',
      color: 'from-purple-500 to-indigo-500',
      attendees: 189,
      maxAttendees: 300
    },
    {
      title: 'Cybersecurity in the Age of AI: Threats and Solutions',
      description: 'Learn about emerging cybersecurity threats in the AI era and discover innovative solutions to protect your organization from sophisticated attacks.',
      date: 'January 10, 2025',
      time: '1:00 PM - 2:30 PM EST',
      duration: '90 minutes',
      speakers: ['Jennifer Williams', 'David Kim'],
      category: 'Cybersecurity',
      featured: false,
      registrationUrl: '/register',
      color: 'from-green-500 to-emerald-500',
      attendees: 156,
      maxAttendees: 400
    },
    {
      title: 'Digital Transformation: A Roadmap for Enterprise Success',
      description: 'Discover strategic frameworks and methodologies for successful digital transformation in enterprise organizations.',
      date: 'January 15, 2025',
      time: '3:00 PM - 4:30 PM EST',
      duration: '90 minutes',
      speakers: ['Lisa Chen', 'Dr. Sarah Johnson'],
      category: 'Digital Transformation',
      featured: false,
      registrationUrl: '/register',
      color: 'from-blue-500 to-cyan-500',
      attendees: 98,
      maxAttendees: 350
    }
  ];

  const pastWebinars = [
    {
      title: 'AI-Powered Business Intelligence: Transforming Decision Making',
      description: 'Learn how AI-powered business intelligence solutions can enhance decision-making processes and drive business growth.',
      date: 'November 25, 2024',
      duration: '75 minutes',
      speakers: ['Dr. Emily Thompson', 'Michael Chen'],
      category: 'Business Intelligence',
      recordingUrl: '/webinar-recording',
      slidesUrl: '/webinar-slides',
      attendees: 412,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'IoT and Edge Computing: Building the Connected Future',
      description: 'Explore IoT and edge computing technologies, their applications across industries, and implementation strategies.',
      date: 'November 15, 2024',
      duration: '80 minutes',
      speakers: ['David Kim', 'Alex Rodriguez'],
      category: 'IoT & Edge Computing',
      recordingUrl: '/webinar-recording',
      slidesUrl: '/webinar-slides',
      attendees: 356,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Blockchain and Web3: The Future of Digital Trust',
      description: 'Discover how blockchain technology and Web3 applications are reshaping industries and creating new opportunities.',
      date: 'November 5, 2024',
      duration: '70 minutes',
      speakers: ['Robert Martinez', 'Jennifer Williams'],
      category: 'Blockchain & Web3',
      recordingUrl: '/webinar-recording',
      slidesUrl: '/webinar-slides',
      attendees: 298,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const categories = [
    'All',
    'Healthcare AI',
    'Quantum Computing',
    'Cybersecurity',
    'Digital Transformation',
    'Business Intelligence',
    'IoT & Edge Computing',
    'Blockchain & Web3'
  ];

  const benefits = [
    'Expert-led sessions from industry leaders',
    'Real-world case studies and examples',
    'Interactive Q&A sessions',
    'Downloadable resources and materials',
    'Networking opportunities',
    'Continuing education credits'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Webinars - Zion Tech Group"
        description="Join our expert-led webinars and learning sessions on AI, quantum computing, cybersecurity, digital transformation, and emerging technologies."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10"></div>
        <div className="container-responsive relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Expert-Led Webinars
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join our live learning sessions and technology demonstrations led by industry experts. 
              Gain insights, ask questions, and stay updated on the latest trends and innovations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Request Custom Webinar
              </Link>
              <Link
                to="/resources"
                className="px-8 py-4 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                Browse All Resources
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Upcoming Webinars */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Upcoming Webinars
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't miss our most anticipated webinars featuring industry experts and cutting-edge topics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingWebinars.filter(webinar => webinar.featured).map((webinar, index) => (
              <div
                key={webinar.title}
                className="group relative p-8 rounded-2xl border border-blue-400/50 bg-gradient-to-br from-slate-800/50 to-slate-700/50 ring-2 ring-blue-400/20 transition-all duration-300 transform hover:scale-105"
              >
                <div className="absolute -top-3 -right-3">
                  <div className="bg-gradient-to-r from-blue-400 to-cyan-500 text-white text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Featured
                  </div>
                </div>
                
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${webinar.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Video className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {webinar.title}
                    </h3>
                    <p className="text-blue-400 font-semibold">{webinar.category}</p>
                    <p className="text-gray-400">{webinar.duration}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {webinar.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Calendar className="w-4 h-4" />
                    {webinar.date}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Clock className="w-4 h-4" />
                    {webinar.time}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Users className="w-4 h-4" />
                    {webinar.attendees} / {webinar.maxAttendees} registered
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Speakers:</h4>
                  <div className="flex flex-wrap gap-2">
                    {webinar.speakers.map((speaker, idx) => (
                      <span key={idx} className="px-3 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full">
                        {speaker}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" />
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Upcoming Webinars */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              All Upcoming Webinars
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Browse our complete schedule of upcoming webinars and register for the sessions that interest you most.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingWebinars.map((webinar, index) => (
              <div
                key={webinar.title}
                className="group p-6 rounded-2xl border border-slate-700/50 bg-slate-800/30 hover:border-slate-600/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${webinar.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Video className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">
                      {webinar.title}
                    </h3>
                    <p className="text-blue-400 font-medium text-sm">{webinar.category}</p>
                    <p className="text-gray-400 text-sm">{webinar.duration}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {webinar.description.substring(0, 120)}...
                </p>
                
                <div className="space-y-2 mb-4 text-xs text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    {webinar.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3 h-3" />
                    {webinar.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-3 h-3" />
                    {webinar.attendees} / {webinar.maxAttendees} registered
                  </div>
                </div>
                
                <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                  <Play className="w-4 h-4" />
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
              Past Webinars
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access recordings and materials from our previous webinars. 
              Catch up on sessions you missed or review content at your own pace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastWebinars.map((webinar, index) => (
              <div
                key={webinar.title}
                className="group p-6 rounded-2xl border border-slate-700/50 bg-slate-800/30 hover:border-slate-600/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${webinar.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Video className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">
                      {webinar.title}
                    </h3>
                    <p className="text-blue-400 font-medium text-sm">{webinar.category}</p>
                    <p className="text-gray-400 text-sm">{webinar.duration}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {webinar.description.substring(0, 120)}...
                </p>
                
                <div className="space-y-2 mb-4 text-xs text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    {webinar.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-3 h-3" />
                    {webinar.attendees} attendees
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button className="flex-1 px-3 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm">
                    <Play className="w-3 h-3" />
                    Watch
                  </button>
                  <button className="px-3 py-2 bg-slate-700/50 hover:bg-slate-600/50 text-gray-300 font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm">
                    <Download className="w-3 h-3" />
                    Slides
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Attend Our Webinars?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our webinars provide unique opportunities to learn from industry experts and gain practical insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={benefit} className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Learn from the Experts?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our community of learners and stay ahead of the curve with insights from industry leaders. 
              Register for upcoming webinars or request a custom session for your organization.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Request Custom Webinar
              </Link>
              <Link
                to="/resources"
                className="px-8 py-4 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                Browse All Resources
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebinarsPage;