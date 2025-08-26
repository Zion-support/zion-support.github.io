import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Calendar, MapPin, Clock, Users, ArrowRight } from 'lucide-react';

export default function Events() {
  const upcomingEvents = [
    {
      id: 1,
      title: "AI & Business Transformation Summit 2025",
      date: "March 15-17, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "San Francisco Convention Center",
      description: "Join industry leaders for three days of insights into AI-driven business transformation, featuring keynote speakers, workshops, and networking opportunities.",
      attendees: "500+",
      category: "Conference"
    },
    {
      id: 2,
      title: "Cybersecurity Workshop Series",
      date: "March 22, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Virtual Event",
      description: "Learn about the latest cybersecurity threats and defense strategies in this interactive workshop led by security experts.",
      attendees: "100+",
      category: "Workshop"
    },
    {
      id: 3,
      title: "Digital Marketing Masterclass",
      date: "April 5, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "New York Tech Hub",
      description: "Master the latest digital marketing strategies and tools to grow your business in the digital age.",
      attendees: "150+",
      category: "Masterclass"
    },
    {
      id: 4,
      title: "Startup Pitch Competition",
      date: "April 12, 2025",
      time: "6:00 PM - 9:00 PM",
      location: "Austin Innovation Center",
      description: "Watch innovative startups pitch their ideas to a panel of investors and industry experts.",
      attendees: "200+",
      category: "Competition"
    }
  ];

  const pastEvents = [
    {
      id: 5,
      title: "Tech Innovation Forum 2024",
      date: "December 10, 2024",
      location: "Seattle Tech Center",
      description: "A comprehensive look at emerging technologies and their impact on various industries.",
      attendees: "300+",
      category: "Forum"
    },
    {
      id: 6,
      title: "Cloud Computing Symposium",
      date: "November 28, 2024",
      location: "Virtual Event",
      description: "Exploring the future of cloud computing and its role in digital transformation.",
      attendees: "250+",
      category: "Symposium"
    }
  ];

  return (
    <>
      <SEO
        title="Events | Zion Tech Group"
        description="Join us for upcoming technology events, workshops, and conferences. Stay updated on industry trends and network with professionals."
        keywords="tech events, conferences, workshops, networking, technology summit, AI events, cybersecurity workshops"
        canonicalUrl="https://ziontechgroup.com/events"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-900/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
                <Calendar className="w-4 h-4 mr-2" />
                Upcoming Events
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Join Us at Our
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Events</span>
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                Connect with industry leaders, learn from experts, and discover the latest 
                trends in technology at our curated events and conferences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact?type=event"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Host an Event
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="#upcoming"
                  className="inline-flex items-center px-8 py-4 border border-blue-500/30 text-blue-300 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300"
                >
                  View Events
                  <Calendar className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section id="upcoming" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Upcoming Events
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Mark your calendar for these exciting technology events and conferences.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-600/20 text-blue-300 text-sm font-medium rounded-full">
                      {event.category}
                    </span>
                    <span className="text-slate-400 text-sm">{event.attendees}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-slate-300">
                      <Calendar className="w-4 h-4 mr-3 text-blue-400" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-slate-300">
                      <Clock className="w-4 h-4 mr-3 text-blue-400" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-slate-300">
                      <MapPin className="w-4 h-4 mr-3 text-blue-400" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <Link
                    to={`/contact?event=${event.id}`}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium"
                  >
                    Register Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Past Events Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Past Events
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Relive the highlights from our previous successful events and conferences.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pastEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-slate-600/20 text-slate-300 text-sm font-medium rounded-full">
                      {event.category}
                    </span>
                    <span className="text-slate-400 text-sm">{event.attendees}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-slate-300">
                      <Calendar className="w-4 h-4 mr-3 text-slate-400" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-slate-300">
                      <MapPin className="w-4 h-4 mr-3 text-slate-400" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <span className="text-slate-500 text-sm">Event completed</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 p-12 rounded-2xl border border-blue-500/30">
              <h2 className="text-3xl font-bold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Never miss an important event. Subscribe to our newsletter and get notified about upcoming events, 
                webinars, and exclusive content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-3 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Host Your Event With Us
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Interested in hosting a technology event, workshop, or conference? 
              We'd love to collaborate and help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact?type=event-hosting" 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Get in Touch
              </Link>
              <Link 
                to="/services" 
                className="border-2 border-blue-500 text-blue-300 px-8 py-3 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Our Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
