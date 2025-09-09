import React from 'react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, Play, ExternalLink, BookOpen } from 'lucide-react';

export default function Webinars() {
  const upcomingWebinars = [
    {
      id: 1,
      title: "AI-Powered Cybersecurity: Next-Generation Threat Detection",
      description: "Join our cybersecurity experts as they demonstrate cutting-edge AI technologies for threat detection and response.",
      date: "2025-01-15",
      time: "14:00 EST",
      duration: "60 min",
      speaker: "Dr. Sarah Chen",
      attendees: 1247,
      category: "Cybersecurity",
      isLive: true,
      registrationUrl: "#"
    },
    {
      id: 2,
      title: "Green IT Implementation: Sustainable Technology Solutions",
      description: "Learn practical strategies for implementing environmentally conscious IT practices in enterprise environments.",
      date: "2025-01-22",
      time: "15:30 EST",
      duration: "45 min",
      speaker: "Michael Rodriguez",
      attendees: 892,
      category: "Green IT",
      isLive: true,
      registrationUrl: "#"
    },
    {
      id: 3,
      title: "Micro SaaS Architecture: Building Scalable Solutions",
      description: "Deep dive into micro SaaS architecture patterns and best practices for building maintainable applications.",
      date: "2025-01-29",
      time: "13:00 EST",
      duration: "90 min",
      speaker: "Alex Thompson",
      attendees: 1567,
      category: "Micro SaaS",
      isLive: true,
      registrationUrl: "#"
    }
  ];

  const pastWebinars = [
    {
      id: 4,
      title: "5G Enterprise Solutions: Network Optimization Strategies",
      description: "Advanced strategies for optimizing 5G networks in enterprise environments with focus on performance and reliability.",
      date: "2024-12-15",
      time: "14:00 EST",
      duration: "75 min",
      speaker: "Dr. James Wilson",
      attendees: 1892,
      category: "5G Solutions",
      recordingUrl: "#",
      slidesUrl: "#"
    },
    {
      id: 5,
      title: "Data Privacy in AI Systems: Compliance and Best Practices",
      description: "Comprehensive overview of data privacy requirements and best practices for AI-powered systems in regulated industries.",
      date: "2024-12-08",
      time: "15:30 EST",
      duration: "60 min",
      speaker: "Lisa Park",
      attendees: 2987,
      category: "AI & Privacy",
      recordingUrl: "#",
      slidesUrl: "#"
    },
    {
      id: 6,
      title: "Edge Computing and IoT: Building the Connected Future",
      description: "Explore edge computing infrastructure and IoT integration for smart city and industrial applications.",
      date: "2024-11-30",
      time: "13:00 EST",
      duration: "80 min",
      speaker: "Dr. Emily Watson",
      attendees: 1654,
      category: "Edge Computing",
      recordingUrl: "#",
      slidesUrl: "#"
    }
  ];

  const categories = ["All", "AI", "Cybersecurity", "Green IT", "Micro SaaS", "5G Solutions", "Edge Computing"];

  return (
    <>
      <SEO 
        title="Webinars - Zion Tech Group Live & On-Demand Sessions" 
        description="Join our live webinars and access on-demand recordings covering AI, cybersecurity, green IT, and emerging technologies." 
        canonical="/webinars" 
        url="https://ziontechgroup.com/webinars"
      />

      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Webinars & Live Sessions
            </h1>
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
              Join our live webinars featuring industry experts and access on-demand recordings 
              covering the latest in technology and innovation.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 bg-zion-blue-dark border border-zion-blue-light rounded-lg text-white hover:border-zion-cyan transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Upcoming Webinars */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Upcoming Webinars
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingWebinars.map((webinar) => (
                <div key={webinar.id} className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6 hover:border-zion-cyan transition-all duration-300">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-block px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full">
                        {webinar.category}
                      </span>
                      {webinar.isLive && (
                        <span className="inline-block px-3 py-1 bg-red-500/20 text-red-400 text-sm rounded-full animate-pulse">
                          Live
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                      {webinar.title}
                    </h3>
                    <p className="text-zion-slate-light text-sm mb-4 line-clamp-3">
                      {webinar.description}
                    </p>
                  </div>

                  {/* Meta Information */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-zion-slate-light text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(webinar.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2 text-zion-slate-light text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{webinar.time} • {webinar.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-zion-slate-light text-sm">
                      <Users className="w-4 h-4" />
                      <span>{webinar.speaker}</span>
                    </div>
                    <div className="flex items-center gap-2 text-zion-slate-light text-sm">
                      <BookOpen className="w-4 h-4" />
                      <span>{webinar.attendees} registered</span>
                    </div>
                  </div>

                  {/* Registration Button */}
                  <button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-3 px-4 rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-medium flex items-center justify-center gap-2">
                    <Play className="w-5 h-5" />
                    Register Now
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Past Webinars */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Past Webinars
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastWebinars.map((webinar) => (
                <div key={webinar.id} className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6 hover:border-zion-cyan transition-all duration-300">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-zion-blue-light/30 text-zion-slate-light text-sm rounded-full mb-3">
                      {webinar.category}
                    </span>
                    <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                      {webinar.title}
                    </h3>
                    <p className="text-zion-slate-light text-sm mb-4 line-clamp-3">
                      {webinar.description}
                    </p>
                  </div>

                  {/* Meta Information */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-zion-slate-light text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(webinar.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2 text-zion-slate-light text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{webinar.time} • {webinar.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-zion-slate-light text-sm">
                      <Users className="w-4 h-4" />
                      <span>{webinar.speaker}</span>
                    </div>
                    <div className="flex items-center gap-2 text-zion-slate-light text-sm">
                      <BookOpen className="w-4 h-4" />
                      <span>{webinar.attendees} attended</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 bg-zion-cyan text-white py-3 px-4 rounded-lg hover:bg-zion-cyan-dark transition-all duration-300 font-medium flex items-center justify-center gap-2">
                      <Play className="w-4 h-4" />
                      Watch Recording
                    </button>
                    <button className="flex-1 bg-zion-blue-light/30 text-white py-3 px-4 rounded-lg hover:bg-zion-blue-light/50 transition-all duration-300 font-medium flex items-center justify-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Slides
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Stay Updated with Webinar Schedule
              </h2>
              <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
                Get notified about upcoming webinars and access to exclusive content. 
                Join our community of technology professionals and innovators.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="px-6 py-3 bg-zion-blue-light/30 border border-zion-blue-light/50 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent flex-1 max-w-md"
                />
                <button className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
