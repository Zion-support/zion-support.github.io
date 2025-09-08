import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Video, 
  Calendar, 
  Users, 
  Clock,
  ArrowRight,
  Search,
  Play,
  BookOpen
} from 'lucide-react';

const Webinars = () => {
  const upcomingWebinars = [
    {
      id: 1,
      title: "AI in Healthcare: Transforming Patient Care",
      description: "Discover how artificial intelligence is revolutionizing healthcare delivery and improving patient outcomes.",
      date: "2025-02-20",
      time: "2:00 PM - 3:30 PM EST",
      speaker: "Dr. Sarah Chen",
      attendees: "500+",
      category: "Healthcare AI",
      featured: true
    },
    {
      id: 2,
      title: "Quantum Computing: Real-World Applications",
      description: "Explore practical applications of quantum computing in finance, logistics, and scientific research.",
      date: "2025-02-25",
      time: "1:00 PM - 2:30 PM EST",
      speaker: "Prof. Michael Rodriguez",
      attendees: "300+",
      category: "Quantum Computing",
      featured: false
    },
    {
      id: 3,
      title: "Cybersecurity Trends 2025",
      description: "Stay ahead of emerging cybersecurity threats and learn about the latest defense strategies.",
      date: "2025-03-01",
      time: "3:00 PM - 4:30 PM EST",
      speaker: "Alex Thompson",
      attendees: "400+",
      category: "Cybersecurity",
      featured: false
    }
  ];

  const pastWebinars = [
    {
      id: 4,
      title: "Digital Transformation Success Stories",
      description: "Real-world examples of successful digital transformation initiatives and lessons learned.",
      date: "2025-01-15",
      speaker: "Lisa Wang",
      recording: true,
      highlights: ["Case studies", "Best practices", "ROI analysis"]
    },
    {
      id: 5,
      title: "Cloud Migration Strategies",
      description: "Comprehensive guide to migrating your infrastructure to the cloud efficiently and securely.",
      date: "2025-01-10",
      speaker: "David Kim",
      recording: true,
      highlights: ["Migration planning", "Cost optimization", "Security considerations"]
    }
  ];

  const categories = [
    "All Webinars",
    "AI & Machine Learning",
    "Quantum Computing",
    "Cybersecurity",
    "Cloud Computing",
    "Digital Transformation",
    "Healthcare Tech"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full">
                <Video className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Live Webinars &
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Virtual Events
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our interactive webinars featuring industry experts, 
              thought leaders, and technology innovators.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search webinars..."
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  category === "All Webinars"
                    ? "bg-gradient-to-r from-purple-500 to-blue-600 text-white"
                    : "bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Upcoming Webinars
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Register for our upcoming live webinars and secure your spot 
              for these exclusive learning opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingWebinars.map((webinar) => (
              <div
                key={webinar.id}
                className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                  webinar.featured 
                    ? "border-purple-500/50 shadow-lg shadow-purple-500/20" 
                    : "border-slate-700 hover:border-purple-500/50"
                }`}
              >
                {/* Featured Badge */}
                {webinar.featured && (
                  <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white text-center py-2 text-sm font-medium">
                    Featured Webinar
                  </div>
                )}

                {/* Webinar Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-purple-900/50 to-blue-900/50 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <Video className="w-12 h-12 mx-auto mb-2" />
                    <span className="text-sm">Webinar Image</span>
                  </div>
                </div>

                {/* Webinar Content */}
                <div className="p-6">
                  {/* Category */}
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs font-medium rounded-full mb-3 inline-block">
                    {webinar.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {webinar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {webinar.description}
                  </p>

                  {/* Webinar Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-300 text-sm">
                      <Calendar className="w-4 h-4 mr-2 text-purple-400" />
                      {new Date(webinar.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    <div className="flex items-center text-gray-300 text-sm">
                      <Clock className="w-4 h-4 mr-2 text-purple-400" />
                      {webinar.time}
                    </div>
                    <div className="flex items-center text-gray-300 text-sm">
                      <Users className="w-4 h-4 mr-2 text-purple-400" />
                      {webinar.speaker}
                    </div>
                    <div className="flex items-center text-gray-300 text-sm">
                      <BookOpen className="w-4 h-4 mr-2 text-purple-400" />
                      {webinar.attendees} registered
                    </div>
                  </div>

                  {/* Register Button */}
                  <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-3 rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                    <Play className="w-5 h-5 mr-2" />
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Webinars */}
      <section className="py-20 bg-slate-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Past Webinars
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Missed a webinar? Access recordings and materials from our 
              previous sessions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastWebinars.map((webinar) => (
              <div
                key={webinar.id}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full">
                    Past Webinar
                  </span>
                  <span className="text-gray-500 text-sm">
                    {new Date(webinar.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {webinar.title}
                </h3>

                <p className="text-gray-400 mb-4">
                  {webinar.description}
                </p>

                <div className="flex items-center text-gray-300 text-sm mb-4">
                  <Users className="w-4 h-4 mr-2 text-blue-400" />
                  {webinar.speaker}
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <h4 className="text-white font-medium mb-2">Key Topics:</h4>
                  <ul className="space-y-1">
                    {webinar.highlights.map((highlight, index) => (
                      <li key={index} className="text-gray-400 text-sm flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {webinar.recording && (
                    <button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-sm font-medium">
                      <Play className="w-4 h-4 inline mr-2" />
                      Watch Recording
                    </button>
                  )}
                  <button className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-gray-500 transition-colors text-sm">
                    View Materials
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Host Your Own Webinar
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Interested in sharing your expertise? Partner with us to host 
            webinars and reach our global audience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1"
            >
              Become a Speaker
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <button className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-gray-500 transition-colors">
              <BookOpen className="mr-2 w-5 h-5" />
              Speaker Guidelines
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Webinars;