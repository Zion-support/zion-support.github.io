import React from 'react';
import { Link } from 'react-router-dom';

const Events: React.FC = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "AI Autonomous Systems Summit 2024",
      type: "Conference",
      date: "2024-09-15",
      time: "9:00 AM - 5:00 PM PST",
      location: "San Francisco, CA & Virtual",
      description: "Join industry leaders and AI experts for a comprehensive exploration of autonomous AI systems, their applications, and future implications.",
      speakers: ["Dr. Sarah Chen", "Dr. Michael Rodriguez", "AI Industry Leaders"],
      topics: ["Autonomous AI", "Machine Learning", "Industry Applications", "Future Trends"],
      registration: "Open",
      image: "🎯",
      featured: true
    },
    {
      id: 2,
      title: "Cybersecurity in the AI Era",
      type: "Webinar",
      date: "2024-09-20",
      time: "2:00 PM - 3:30 PM PST",
      location: "Virtual",
      description: "Learn how AI is revolutionizing cybersecurity and discover best practices for protecting your organization in the digital age.",
      speakers: ["Cybersecurity Experts", "AI Security Specialists"],
      topics: ["AI Security", "Threat Detection", "Compliance", "Best Practices"],
      registration: "Open",
      image: "🔒",
      featured: false
    },
    {
      id: 3,
      title: "Digital Transformation Workshop",
      type: "Workshop",
      date: "2024-09-25",
      time: "10:00 AM - 4:00 PM PST",
      location: "New York, NY",
      description: "Hands-on workshop covering digital transformation strategies, AI implementation, and change management best practices.",
      speakers: ["Digital Transformation Consultants", "Change Management Experts"],
      topics: ["Digital Strategy", "AI Implementation", "Change Management", "ROI Measurement"],
      registration: "Limited",
      image: "🔄",
      featured: false
    },
    {
      id: 4,
      title: "Quantum Computing & AI Symposium",
      type: "Symposium",
      date: "2024-10-05",
      time: "1:00 PM - 6:00 PM PST",
      location: "Boston, MA & Virtual",
      description: "Explore the intersection of quantum computing and artificial intelligence, featuring cutting-edge research and practical applications.",
      speakers: ["Quantum Computing Researchers", "AI Scientists", "Industry Experts"],
      topics: ["Quantum AI", "Quantum Algorithms", "Research Applications", "Industry Use Cases"],
      registration: "Open",
      image: "⚛️",
      featured: false
    },
    {
      id: 5,
      title: "Edge AI & IoT Solutions",
      type: "Webinar",
      date: "2024-10-12",
      time: "11:00 AM - 12:30 PM PST",
      location: "Virtual",
      description: "Discover how Edge AI and IoT technologies are transforming industries and enabling real-time intelligent decision-making.",
      speakers: ["IoT Specialists", "Edge Computing Experts"],
      topics: ["Edge AI", "IoT Solutions", "Real-time Processing", "Industry Applications"],
      registration: "Open",
      image: "🌐",
      featured: false
    },
    {
      id: 6,
      title: "AI Ethics & Governance Forum",
      type: "Forum",
      date: "2024-10-20",
      time: "9:00 AM - 3:00 PM PST",
      location: "Washington, DC",
      description: "Critical discussion on AI ethics, governance frameworks, and responsible AI development practices.",
      speakers: ["AI Ethics Researchers", "Policy Makers", "Industry Leaders"],
      topics: ["AI Ethics", "Governance", "Policy", "Responsible AI"],
      registration: "Open",
      image: "⚖️",
      featured: false
    }
  ];

  const eventTypes = ["All Events", "Conference", "Webinar", "Workshop", "Symposium", "Forum"];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Upcoming
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Events
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join us for exclusive events, webinars, and conferences featuring industry experts, 
              cutting-edge insights, and networking opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Event Type Filter */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {eventTypes.map((type, index) => (
              <button
                key={index}
                className="px-6 py-3 rounded-lg border border-white/20 text-white hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300"
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {upcomingEvents.filter(event => event.featured).map((event) => (
            <div 
              key={event.id}
              className="bg-slate-700/50 p-8 rounded-xl border border-white/10 hover:border-blue-400/50 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full border border-blue-400/30">
                      {event.type}
                    </span>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full border border-green-400/30">
                      {event.registration}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">{event.title}</h2>
                  <p className="text-gray-300 text-lg mb-6">{event.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {formatDate(event.date)} • {event.time}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 mr-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {event.location}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-yellow-400 mb-2">Featured Speakers</h4>
                    <div className="flex flex-wrap gap-2">
                      {event.speakers.map((speaker, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-slate-600/50 text-gray-300 text-xs rounded-full border border-white/10"
                        >
                          {speaker}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    to={`/events/${event.id}`}
                    className="inline-flex items-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Register Now
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                <div className="text-center">
                  <div className="text-8xl mb-4">{event.image}</div>
                  <div className="text-2xl font-bold text-white">{event.type}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.filter(event => !event.featured).map((event) => (
              <div 
                key={event.id}
                className="bg-slate-700/50 p-6 rounded-xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{event.image}</div>
                
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-slate-600/50 text-blue-400 text-xs rounded-full border border-white/10">
                    {event.type}
                  </span>
                  <span className="px-3 py-1 bg-slate-600/50 text-green-400 text-xs rounded-full border border-white/10">
                    {event.registration}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{event.description}</p>
                
                <div className="space-y-2 mb-4 text-sm text-gray-400">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {formatDate(event.date)}
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {event.location}
                  </div>
                </div>
                
                <Link
                  to={`/events/${event.id}`}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300 text-sm"
                >
                  Learn More
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Past Events</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Missed an event? Access recordings and materials from our previous events and webinars.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-700/30 p-6 rounded-lg border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-2">AI Trends 2024</h3>
              <p className="text-gray-300 text-sm mb-4">Comprehensive overview of AI trends and their business impact.</p>
              <Link to="#" className="text-blue-400 hover:text-blue-300 text-sm">Watch Recording →</Link>
            </div>
            
            <div className="bg-slate-700/30 p-6 rounded-lg border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-2">Cybersecurity Best Practices</h3>
              <p className="text-gray-300 text-sm mb-4">Essential cybersecurity strategies for modern organizations.</p>
              <Link to="#" className="text-blue-400 hover:text-blue-300 text-sm">Watch Recording →</Link>
            </div>
            
            <div className="bg-slate-700/30 p-6 rounded-lg border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-2">Digital Transformation Workshop</h3>
              <p className="text-gray-300 text-sm mb-4">Practical strategies for successful digital transformation.</p>
              <Link to="#" className="text-blue-400 hover:text-blue-300 text-sm">Watch Recording →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Stay Connected
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Never miss an important event. Subscribe to our events newsletter and get notified about upcoming webinars, conferences, and workshops.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Contact Us
            </Link>
            <Link
              to="/news"
              className="border-2 border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Latest News
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;