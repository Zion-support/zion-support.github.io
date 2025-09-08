import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  Video, 
  ExternalLink,
  Star,
  TrendingUp,
  Brain,
  Shield,
  Cloud
} from 'lucide-react';

const Events: React.FC = () => {
  const upcomingEvents = [
    {
      title: "AI Innovation Summit 2025",
      date: "March 15-17, 2025",
      time: "9:00 AM - 6:00 PM EST",
      location: "Virtual + New York City",
      type: "Conference",
      description: "Join industry leaders and AI experts for three days of cutting-edge insights, workshops, and networking opportunities.",
      speakers: ["Dr. Sarah Chen", "Prof. Michael Rodriguez", "AI Pioneer Lisa Thompson"],
      topics: ["Machine Learning", "AI Ethics", "Enterprise AI", "Quantum Computing"],
      registration: "Open",
      price: "Free - $1,200",
      icon: Brain
    },
    {
      title: "Cybersecurity Workshop Series",
      date: "April 8-10, 2025",
      time: "2:00 PM - 5:00 PM EST",
      location: "Virtual",
      type: "Workshop",
      description: "Hands-on cybersecurity training covering threat detection, incident response, and security best practices.",
      speakers: ["Security Expert James Wilson", "CISO Maria Garcia"],
      topics: ["Threat Detection", "Incident Response", "Security Architecture", "Compliance"],
      registration: "Open",
      price: "$299",
      icon: Shield
    },
    {
      title: "Cloud Migration Masterclass",
      date: "May 12, 2025",
      time: "10:00 AM - 4:00 PM EST",
      location: "Virtual",
      type: "Masterclass",
      description: "Learn the best practices for migrating your infrastructure to the cloud with real-world case studies.",
      speakers: ["Cloud Architect David Kim", "DevOps Specialist Emma Davis"],
      topics: ["Migration Strategy", "Cost Optimization", "Security", "Performance"],
      registration: "Open",
      price: "$199",
      icon: Cloud
    }
  ];

  const pastEvents = [
    {
      title: "Digital Transformation Forum",
      date: "January 20, 2025",
      type: "Forum",
      attendees: "500+",
      highlights: ["Keynote presentations", "Panel discussions", "Networking sessions"],
      recording: "Available",
      icon: TrendingUp
    },
    {
      title: "AI in Healthcare Symposium",
      date: "December 15, 2024",
      type: "Symposium",
      attendees: "300+",
      highlights: ["Healthcare AI innovations", "Regulatory compliance", "Patient outcomes"],
      recording: "Available",
      icon: Brain
    }
  ];

  const eventTypes = [
    {
      type: "Conferences",
      description: "Multi-day events with keynote speakers, panels, and networking",
      icon: Users
    },
    {
      type: "Workshops",
      description: "Hands-on training sessions with practical exercises",
      icon: Video
    },
    {
      type: "Webinars",
      description: "Online presentations and Q&A sessions",
      icon: Video
    },
    {
      type: "Networking",
      description: "Industry meetups and professional networking events",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <SEOHead 
        title="Events - Zion Tech Group"
        description="Join Zion Tech Group at industry events, conferences, workshops, and webinars. Learn from experts and network with professionals in AI, cybersecurity, and technology."
        keywords="events, conferences, workshops, webinars, AI summit, cybersecurity, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Calendar className="h-12 w-12 text-cyan-400 mr-3" />
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Events & Conferences
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            Join us at industry-leading events, workshops, and conferences. Learn from experts, 
            network with professionals, and discover the latest in AI and technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              View All Events
            </button>
            <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Subscribe to Updates
            </button>
          </div>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Types of Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventTypes.map((eventType, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                <div className="bg-cyan-500/20 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <eventType.icon className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{eventType.type}</h3>
                <p className="text-gray-300">{eventType.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div className="bg-cyan-500/20 w-16 h-16 rounded-lg flex items-center justify-center">
                    <event.icon className="h-8 w-8 text-cyan-400" />
                  </div>
                  <div className="text-right">
                    <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                      {event.type}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-4">{event.title}</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-300">
                    <Calendar className="h-5 w-5 mr-3 text-cyan-400" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Clock className="h-5 w-5 mr-3 text-cyan-400" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="h-5 w-5 mr-3 text-cyan-400" />
                    {event.location}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{event.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Featured Speakers:</h4>
                  <div className="flex flex-wrap gap-2">
                    {event.speakers.map((speaker, idx) => (
                      <span key={idx} className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">
                        {speaker}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Topics:</h4>
                  <div className="flex flex-wrap gap-2">
                    {event.topics.map((topic, idx) => (
                      <span key={idx} className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="text-sm">
                    <span className="text-gray-400">Registration: </span>
                    <span className="text-green-400 font-semibold">{event.registration}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-400">Price: </span>
                    <span className="text-white font-semibold">{event.price}</span>
                  </div>
                </div>
                
                <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center">
                  Register Now
                  <ExternalLink className="h-5 w-5 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Past Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-cyan-500/20 w-16 h-16 rounded-lg flex items-center justify-center">
                    <event.icon className="h-8 w-8 text-cyan-400" />
                  </div>
                  <span className="bg-gray-600 text-gray-300 px-3 py-1 rounded-full text-sm">
                    {event.type}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                <p className="text-gray-400 mb-4">{event.date}</p>
                
                <div className="mb-4">
                  <span className="text-sm text-gray-400">Attendees: </span>
                  <span className="text-white font-semibold">{event.attendees}</span>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Highlights:</h4>
                  <ul className="space-y-1">
                    {event.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-gray-300">• {highlight}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <span className="text-gray-400">Recording: </span>
                    <span className="text-green-400 font-semibold">{event.recording}</span>
                  </div>
                  <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    Watch Recording
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Connected
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Don't miss out on our latest events and industry insights. Subscribe to our newsletter for updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Subscribe to Newsletter
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact Event Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;