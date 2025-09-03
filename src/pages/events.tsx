import React from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Video, 
  ExternalLink, 
  ArrowRight,
  Star,
  Tag,
  BookOpen,
  Zap,
  Lightbulb
} from 'lucide-react';

export default function EventsPage() {
  const upcomingEvents = [
    {
      title: "AI in Business: Future Trends & Implementation Strategies",
      type: "Webinar",
      date: "December 20, 2025",
      time: "2:00 PM - 3:30 PM EST",
      location: "Virtual Event",
      speaker: "Dr. Sarah Chen, CTO",
      description: "Join us for an insightful webinar exploring the latest AI trends and practical implementation strategies for businesses of all sizes.",
      attendees: "150+ registered",
      category: "AI & Technology",
      registrationUrl: "/events/ai-business-webinar-dec-20",
      featured: true
    },
    {
      title: "Cloud Cost Optimization Workshop",
      type: "Workshop",
      date: "December 22, 2025",
      time: "1:00 PM - 4:00 PM EST",
      location: "Virtual Event",
      speaker: "Marcus Rodriguez, COO",
      description: "Hands-on workshop to help you optimize your cloud spending and improve resource utilization with practical tools and strategies.",
      attendees: "75+ registered",
      category: "Cloud & Infrastructure",
      registrationUrl: "/events/cloud-cost-optimization-workshop",
      featured: true
    },
    {
      title: "Cybersecurity Best Practices for 2026",
      type: "Webinar",
      date: "January 5, 2026",
      time: "11:00 AM - 12:30 PM EST",
      location: "Virtual Event",
      speaker: "James Kim, Cybersecurity Advisor",
      description: "Learn about emerging cybersecurity threats and best practices to protect your organization in 2026.",
      attendees: "200+ registered",
      category: "Cybersecurity",
      registrationUrl: "/events/cybersecurity-best-practices-2026"
    },
    {
      title: "Digital Transformation Success Stories",
      type: "Panel Discussion",
      date: "January 12, 2026",
      time: "3:00 PM - 4:30 PM EST",
      location: "Virtual Event",
      speaker: "Multiple Industry Experts",
      description: "Hear from industry leaders about their digital transformation journeys and the lessons learned along the way.",
      attendees: "120+ registered",
      category: "Digital Transformation",
      registrationUrl: "/events/digital-transformation-panel"
    },
    {
      title: "AI Ethics & Responsible Development",
      type: "Conference Session",
      date: "January 20, 2026",
      time: "10:00 AM - 11:30 AM EST",
      location: "Tech Innovation Summit, San Francisco",
      speaker: "Dr. Emily Watson, AI Ethics Advisor",
      description: "Join us at the Tech Innovation Summit to discuss the importance of ethical AI development and responsible technology practices.",
      attendees: "300+ expected",
      category: "AI Ethics",
      registrationUrl: "/events/ai-ethics-conference-sf"
    },
    {
      title: "Quantum Computing Applications Workshop",
      type: "Workshop",
      date: "January 25, 2026",
      time: "2:00 PM - 5:00 PM EST",
      location: "Virtual Event",
      speaker: "Dr. Sarah Chen, CTO",
      description: "Explore practical applications of quantum computing in business and research with hands-on examples and case studies.",
      attendees: "50+ registered",
      category: "Quantum Computing",
      registrationUrl: "/events/quantum-computing-workshop"
    }
  ];

  const pastEvents = [
    {
      title: "AI-Powered Customer Experience Summit",
      date: "November 15, 2025",
      attendees: "250+",
      highlights: ["Keynote by Kleber Santos", "Interactive AI demos", "Networking sessions"],
      recordingUrl: "/events/recordings/ai-customer-experience-summit"
    },
    {
      title: "Cloud Migration Strategies Webinar",
      date: "November 8, 2025",
      attendees: "180+",
      highlights: ["Migration best practices", "Cost analysis tools", "Q&A session"],
      recordingUrl: "/events/recordings/cloud-migration-webinar"
    },
    {
      title: "Cybersecurity Threat Intelligence Workshop",
      date: "October 30, 2025",
      attendees: "120+",
      highlights: ["Threat landscape analysis", "Defense strategies", "Hands-on exercises"],
      recordingUrl: "/events/recordings/cybersecurity-workshop"
    }
  ];

  const eventCategories = ["All", "Webinar", "Workshop", "Conference", "Panel Discussion", "AI & Technology", "Cloud & Infrastructure", "Cybersecurity", "Digital Transformation", "AI Ethics", "Quantum Computing"];

  return (
    <div className="min-h-screen bg-zion-slate-dark text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm font-medium mb-6">
              <Calendar className="w-4 h-4 mr-2" />
              Upcoming Events
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Events & Webinars
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Join our expert-led events, webinars, and workshops to gain valuable insights, learn new skills, and connect with industry professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-darker">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Events
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Don't miss our most popular upcoming events featuring industry experts and cutting-edge topics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents.filter(event => event.featured).map((event, index) => (
              <div key={index} className="bg-zion-blue-dark rounded-lg border border-zion-purple/30 overflow-hidden hover:border-zion-cyan/50 transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">
                      {event.type}
                    </span>
                    <span className="px-3 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded-full">
                      {event.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{event.title}</h3>
                  <p className="text-zion-slate-light mb-4">{event.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-zion-slate-light">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date} at {event.time}
                    </div>
                    <div className="flex items-center text-sm text-zion-slate-light">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-zion-slate-light">
                      <Users className="w-4 h-4 mr-2" />
                      {event.attendees}
                    </div>
                    <div className="flex items-center text-sm text-zion-cyan">
                      <Star className="w-4 h-4 mr-2" />
                      {event.speaker}
                    </div>
                  </div>
                  
                  <a href={event.registrationUrl} className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue text-white text-center py-3 rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 flex items-center justify-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    Register Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Upcoming Events */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              All Upcoming Events
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Browse our complete calendar of events and find the perfect sessions for your interests and schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.filter(event => !event.featured).map((event, index) => (
              <div key={index} className="bg-zion-blue-dark rounded-lg border border-zion-purple/30 overflow-hidden hover:border-zion-cyan/50 transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">
                      {event.type}
                    </span>
                    <span className="px-3 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded-full">
                      {event.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-3">{event.title}</h3>
                  <p className="text-zion-slate-light text-sm mb-4">{event.description}</p>
                  
                  <div className="space-y-2 mb-4 text-sm text-zion-slate-light">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-3 h-3 mr-2" />
                      {event.attendees}
                    </div>
                  </div>
                  
                  <a href={event.registrationUrl} className="w-full border border-zion-cyan text-zion-cyan text-center py-2 rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 text-sm">
                    Register
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-darker">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Past Events
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Missed an event? Access recordings and highlights from our previous sessions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <div key={index} className="bg-zion-blue-dark rounded-lg border border-zion-purple/30 overflow-hidden hover:border-zion-cyan/50 transition-all duration-300">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{event.title}</h3>
                  
                  <div className="space-y-2 mb-4 text-sm text-zion-slate-light">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      {event.attendees}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Highlights:</h4>
                    <ul className="space-y-1">
                      {event.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="text-zion-slate-light text-sm flex items-center">
                          <Zap className="w-3 h-3 text-zion-cyan mr-2" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <a href={event.recordingUrl} className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light text-sm font-medium transition-colors">
                    <Video className="w-4 h-4 mr-2" />
                    Watch Recording
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Event Categories
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Find events that match your interests and professional development goals.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {eventCategories.map((category, index) => (
              <button
                key={index}
                className="bg-zion-blue-dark p-4 rounded-lg border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 text-center"
              >
                <span className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm font-medium">
                  {category}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Never Miss an Event
          </h2>
          <p className="text-lg text-zion-slate-light mb-8">
            Subscribe to our events newsletter to receive notifications about upcoming webinars, workshops, and conferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 bg-white text-zion-slate-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan"
            />
            <button className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 