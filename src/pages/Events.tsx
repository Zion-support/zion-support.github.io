import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Users, 
  MapPin, 
  Clock, 
  ExternalLink, 
  Video,
  Globe,
  ArrowRight,
  Play,
  BookOpen,
  Tag,
  Star
} from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "AI Innovation Summit 2025",
      description: "Join industry leaders for a comprehensive exploration of AI's impact on business transformation.",
      date: "2025-02-15",
      time: "9:00 AM - 6:00 PM EST",
      location: "Virtual + New York City",
      type: "Conference",
      attendees: "500+",
      price: "Free",
      featured: true,
      image: "/images/events/ai-summit-2025.jpg"
    },
    {
      id: 2,
      title: "Quantum Computing Workshop",
      description: "Hands-on workshop exploring quantum computing applications in enterprise environments.",
      date: "2025-02-20",
      time: "2:00 PM - 5:00 PM EST",
      location: "Virtual",
      type: "Workshop",
      attendees: "100",
      price: "$299",
      featured: false,
      image: "/images/events/quantum-workshop.jpg"
    },
    {
      id: 3,
      title: "Cybersecurity Webinar Series",
      description: "Monthly webinars covering the latest cybersecurity threats and AI-powered defense strategies.",
      date: "2025-02-25",
      time: "1:00 PM - 2:30 PM EST",
      location: "Virtual",
      type: "Webinar",
      attendees: "200+",
      price: "Free",
      featured: false,
      image: "/images/events/cybersecurity-webinar.jpg"
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: "Digital Transformation Conference 2024",
      description: "Successfully hosted 300+ attendees exploring digital transformation strategies.",
      date: "2024-12-10",
      type: "Conference",
      attendees: "300+",
      recording: true,
      highlights: ["Keynote from industry experts", "Interactive workshops", "Networking sessions"]
    },
    {
      id: 5,
      title: "AI in Healthcare Symposium",
      description: "Deep dive into AI applications transforming healthcare delivery and patient outcomes.",
      date: "2024-11-28",
      type: "Symposium",
      attendees: "150+",
      recording: true,
      highlights: ["Healthcare AI case studies", "Regulatory compliance", "Future trends"]
    }
  ];

  const eventTypes = [
    "All Events",
    "Conference",
    "Workshop",
    "Webinar",
    "Symposium",
    "Networking"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-blue-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-full">
                <Calendar className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Events &
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                Conferences
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join us at industry-leading events, workshops, and conferences 
              to discover the latest in technology innovation and business transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                Register for Events
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <button className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-gray-500 transition-colors">
                <Play className="mr-2 w-5 h-5" />
                Watch Past Events
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Event Type Filter */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {eventTypes.map((type) => (
              <button
                key={type}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  type === "All Events"
                    ? "bg-gradient-to-r from-green-500 to-blue-600 text-white"
                    : "bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Don't miss out on these exciting opportunities to learn, network, 
              and discover the future of technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                  event.featured 
                    ? "border-green-500/50 shadow-lg shadow-green-500/20" 
                    : "border-slate-700 hover:border-green-500/50"
                }`}
              >
                {/* Featured Badge */}
                {event.featured && (
                  <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white text-center py-2 text-sm font-medium">
                    <Star className="w-4 h-4 inline mr-2" />
                    Featured Event
                  </div>
                )}

                {/* Event Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-green-900/50 to-blue-900/50 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <Calendar className="w-12 h-12 mx-auto mb-2" />
                    <span className="text-sm">Event Image</span>
                  </div>
                </div>

                {/* Event Content */}
                <div className="p-6">
                  {/* Event Type and Price */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full">
                      {event.type}
                    </span>
                    <span className="text-green-400 font-semibold">
                      {event.price}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {event.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {event.description}
                  </p>

                  {/* Event Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-300 text-sm">
                      <Calendar className="w-4 h-4 mr-2 text-green-400" />
                      {new Date(event.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    <div className="flex items-center text-gray-300 text-sm">
                      <Clock className="w-4 h-4 mr-2 text-green-400" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-gray-300 text-sm">
                      <MapPin className="w-4 h-4 mr-2 text-green-400" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-gray-300 text-sm">
                      <Users className="w-4 h-4 mr-2 text-green-400" />
                      {event.attendees} attendees
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 text-sm font-medium">
                      Register Now
                    </button>
                    <button className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-gray-500 transition-colors text-sm">
                      <BookOpen className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-slate-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Past Events
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Relive the highlights from our previous events and access 
              recordings and materials from past conferences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map((event) => (
              <div
                key={event.id}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full">
                    {event.type}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {new Date(event.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {event.title}
                </h3>

                <p className="text-gray-400 mb-4">
                  {event.description}
                </p>

                <div className="flex items-center text-gray-300 text-sm mb-4">
                  <Users className="w-4 h-4 mr-2 text-blue-400" />
                  {event.attendees} attendees
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <h4 className="text-white font-medium mb-2">Highlights:</h4>
                  <ul className="space-y-1">
                    {event.highlights.map((highlight, index) => (
                      <li key={index} className="text-gray-400 text-sm flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {event.recording && (
                    <button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-sm font-medium">
                      <Video className="w-4 h-4 inline mr-2" />
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
      <section className="py-20 bg-gradient-to-r from-green-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Host Your Own Event
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Interested in hosting a technology event or workshop? 
            Let's collaborate to create an impactful learning experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1"
            >
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <button className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-gray-500 transition-colors">
              <Globe className="mr-2 w-5 h-5" />
              Partner With Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
