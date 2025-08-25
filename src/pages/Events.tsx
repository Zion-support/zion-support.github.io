import React from 'react';
import { Calendar, MapPin, Clock, Users, ExternalLink, ArrowRight, Star, Zap, Globe, Building, Brain, Shield } from 'lucide-react';

export default function Events() {
  const upcomingEvents = [
    {
      id: 1,
      title: "AI & Quantum Computing Summit 2025",
      date: "March 15-17, 2025",
      time: "9:00 AM - 6:00 PM EST",
      location: "Virtual Event + New York City",
      type: "Conference",
      category: "AI & Technology",
      description: "Join industry leaders and researchers for three days of cutting-edge discussions on AI, quantum computing, and their impact on business transformation.",
      speakers: ["Dr. Sarah Chen", "Prof. Michael Rodriguez", "Kleber Santos"],
      capacity: "500+ attendees",
      price: "Free - $1,200",
      status: "Registration Open",
      featured: true
    },
    {
      id: 2,
      title: "Cybersecurity & Compliance Workshop",
      date: "April 8, 2025",
      time: "10:00 AM - 4:00 PM EST",
      location: "Virtual Event",
      type: "Workshop",
      category: "Security",
      description: "Hands-on workshop covering SOC2 compliance, threat detection, and cybersecurity best practices for enterprise organizations.",
      speakers: ["Alex Thompson", "Maria Garcia"],
      capacity: "100 attendees",
      price: "$299",
      status: "Early Bird Pricing",
      featured: false
    },
    {
      id: 3,
      title: "Digital Transformation Roundtable",
      date: "April 22, 2025",
      time: "2:00 PM - 5:00 PM EST",
      location: "Washington DC + Virtual",
      type: "Roundtable",
      category: "Business",
      description: "Executive roundtable discussion on digital transformation strategies, challenges, and success stories from industry leaders.",
      speakers: ["CEO Panel", "Industry Experts"],
      capacity: "50 executives",
      price: "By Invitation",
      status: "Limited Seats",
      featured: true
    },
    {
      id: 4,
      title: "Blockchain & Web3 Innovation Lab",
      date: "May 10-12, 2025",
      time: "9:00 AM - 5:00 PM EST",
      location: "San Francisco + Virtual",
      type: "Innovation Lab",
      category: "Emerging Tech",
      description: "Three-day intensive lab focused on blockchain development, DeFi solutions, and Web3 innovation for enterprise applications.",
      speakers: ["Blockchain Pioneers", "DeFi Experts"],
      capacity: "200 developers",
      price: "$799",
      status: "Registration Open",
      featured: false
    }
  ];

  const pastEvents = [
    {
      id: 5,
      title: "AI Autonomous Systems Conference 2024",
      date: "December 10-12, 2024",
      location: "Virtual Event",
      attendees: "800+",
      highlights: ["Keynote by Kleber Santos", "50+ presentations", "Networking sessions", "Live demos"]
    },
    {
      id: 6,
      title: "Quantum Technology Symposium",
      date: "November 15, 2024",
      location: "Boston, MA",
      attendees: "300+",
      highlights: ["Industry partnerships announced", "Research collaborations", "Technology showcases"]
    },
    {
      id: 7,
      title: "Enterprise IT Infrastructure Summit",
      date: "October 20-22, 2024",
      location: "Chicago, IL + Virtual",
      attendees: "600+",
      highlights: ["Cloud migration strategies", "5G implementation", "Security frameworks"]
    }
  ];

  const eventCategories = [
    {
      name: "AI & Machine Learning",
      icon: Brain,
      color: "text-cyan-400",
      count: 8
    },
    {
      name: "Cybersecurity",
      icon: Shield,
      color: "text-red-400",
      count: 5
    },
    {
      name: "Digital Transformation",
      icon: Zap,
      color: "text-yellow-400",
      count: 6
    },
    {
      name: "Emerging Technologies",
      icon: Globe,
      color: "text-purple-400",
      count: 4
    },
    {
      name: "Enterprise Solutions",
      icon: Building,
      color: "text-green-400",
      count: 7
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <Calendar className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Events & Conferences
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join us for cutting-edge technology events, workshops, and conferences. Connect with industry leaders, 
            learn about the latest innovations, and discover how AI and emerging technologies are transforming business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-200">
              View All Events
            </button>
            <button className="border border-cyan-500 text-cyan-400 px-6 py-3 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all duration-200">
              Subscribe to Updates
            </button>
          </div>
        </div>
      </div>

      {/* Event Categories */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Event Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {eventCategories.map((category) => (
            <div key={category.name} className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-500/50 transition-all duration-200 cursor-pointer group">
              <div className="text-center">
                <div className={`w-16 h-16 bg-gray-800/50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-500/20 transition-all duration-200`}>
                  <category.icon className={`w-8 h-8 ${category.color}`} />
                </div>
                <h3 className="text-white font-semibold mb-2">{category.name}</h3>
                <p className="text-gray-400 text-sm">{category.count} events</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Events */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-3xl font-bold mb-12 text-white">Featured Events</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {upcomingEvents.filter(event => event.featured).map((event) => (
            <div key={event.id} className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-cyan-500/50 transition-all duration-200">
              <div className="flex items-start justify-between mb-4">
                <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {event.type}
                </span>
                <Star className="w-5 h-5 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{event.title}</h3>
              <p className="text-gray-300 mb-6">{event.description}</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-300">
                  <Calendar className="w-4 h-4 mr-3 text-cyan-400" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Clock className="w-4 h-4 mr-3 text-cyan-400" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-4 h-4 mr-3 text-cyan-400" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Users className="w-4 h-4 mr-3 text-cyan-400" />
                  <span>{event.capacity}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-cyan-400 font-semibold">{event.price}</span>
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-200">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Upcoming Events */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-3xl font-bold mb-12 text-white">All Upcoming Events</h2>
        <div className="space-y-6">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-500/50 transition-all duration-200">
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      event.type === 'Conference' ? 'bg-blue-500/20 text-blue-400' :
                      event.type === 'Workshop' ? 'bg-green-500/20 text-green-400' :
                      event.type === 'Roundtable' ? 'bg-purple-500/20 text-purple-400' :
                      'bg-orange-500/20 text-orange-400'
                    }`}>
                      {event.type}
                    </span>
                    {event.featured && <Star className="w-4 h-4 text-yellow-400" />}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{event.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center text-gray-400">
                      <Calendar className="w-4 h-4 mr-2 text-cyan-400" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Clock className="w-4 h-4 mr-2 text-cyan-400" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <MapPin className="w-4 h-4 mr-2 text-cyan-400" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Users className="w-4 h-4 mr-2 text-cyan-400" />
                      <span>{event.capacity}</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="mb-4">
                    <p className="text-cyan-400 font-bold text-lg">{event.price}</p>
                    <p className="text-gray-400 text-sm">{event.status}</p>
                  </div>
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-200">
                    Register
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Past Events */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-3xl font-bold mb-12 text-white">Past Events</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {pastEvents.map((event) => (
            <div key={event.id} className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
              <h3 className="text-lg font-bold text-white mb-3">{event.title}</h3>
              <div className="space-y-2 mb-4 text-sm text-gray-400">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-cyan-400" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-cyan-400" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-cyan-400" />
                  <span>{event.attendees}</span>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="text-cyan-400 font-semibold mb-2">Highlights:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  {event.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center">
                      <ArrowRight className="w-3 h-3 mr-2 text-cyan-400" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              
              <button className="w-full border border-cyan-500 text-cyan-400 px-4 py-2 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all duration-200">
                View Summary
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-500/20 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated on Our Events</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive updates about upcoming events, early bird pricing, and exclusive content from our conferences and workshops.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
            />
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 text-center">
          <h2 className="text-2xl font-bold mb-6 text-white">Interested in Hosting an Event?</h2>
          <p className="text-gray-300 mb-8">
            We're always looking for partners and venues to host technology events. Whether you want to sponsor an event, 
            host a workshop, or collaborate on a conference, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-200">
              Partner With Us
            </button>
            <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all duration-200">
              Contact Events Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}