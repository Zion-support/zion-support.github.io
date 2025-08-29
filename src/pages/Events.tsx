import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Users, ArrowRight, ExternalLink } from 'lucide-react';

export default function Events() {
  const upcomingEvents = [
    {
      id: 1,
      title: 'AI Innovation Summit 2024',
      description: 'Join industry leaders and AI experts for a comprehensive exploration of the latest artificial intelligence innovations and their business applications.',
      date: '2024-12-20',
      time: '9:00 AM - 5:00 PM',
      location: 'San Francisco Convention Center',
      type: 'Conference',
      attendees: '500+',
      image: '/images/events/ai-summit.jpg',
      href: '/events/ai-innovation-summit-2024'
    },
    {
      id: 2,
      title: 'Quantum Computing Workshop',
      description: 'Hands-on workshop exploring quantum computing fundamentals and practical applications in cryptography and optimization.',
      date: '2024-12-25',
      time: '10:00 AM - 3:00 PM',
      location: 'Zion Tech HQ, Austin',
      type: 'Workshop',
      attendees: '50',
      image: '/images/events/quantum-workshop.jpg',
      href: '/events/quantum-computing-workshop'
    },
    {
      id: 3,
      title: 'Healthcare Tech Symposium',
      description: 'Discover how AI is transforming healthcare delivery, from diagnostics to patient care optimization.',
      date: '2025-01-10',
      time: '8:00 AM - 6:00 PM',
      location: 'Boston Marriott Copley Place',
      type: 'Symposium',
      attendees: '300+',
      image: '/images/events/healthcare-symposium.jpg',
      href: '/events/healthcare-tech-symposium'
    },
    {
      id: 4,
      title: 'Edge Computing & IoT Summit',
      description: 'Explore the future of edge computing and IoT technologies for enterprise applications.',
      date: '2025-01-20',
      time: '9:00 AM - 5:00 PM',
      location: 'Seattle Convention Center',
      type: 'Summit',
      attendees: '400+',
      image: '/images/events/edge-computing-summit.jpg',
      href: '/events/edge-computing-iot-summit'
    }
  ];

  const pastEvents = [
    {
      id: 5,
      title: 'AI Business Transformation Conference',
      description: 'Successfully completed with 600+ attendees exploring AI-driven business transformation strategies.',
      date: '2024-11-15',
      location: 'New York Hilton',
      type: 'Conference',
      attendees: '600+',
      status: 'Completed'
    },
    {
      id: 6,
      title: 'Cybersecurity & AI Workshop',
      description: 'Interactive workshop on AI-powered cybersecurity solutions for enterprise protection.',
      date: '2024-11-05',
      location: 'Zion Tech HQ, Austin',
      type: 'Workshop',
      attendees: '75',
      status: 'Completed'
    }
  ];

  const eventTypes = [
    'All Events',
    'Conference',
    'Workshop',
    'Symposium',
    'Summit',
    'Webinar'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Events - Zion Tech Group"
        description="Join us at upcoming events, conferences, and workshops. Discover the latest in AI, quantum computing, and emerging technologies."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Upcoming Events &
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                {' '}Workshops
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join us at industry-leading events, conferences, and workshops to discover 
              the latest innovations in AI, quantum computing, and emerging technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#upcoming-events"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                View Events
              </a>
              <a
                href="/contact"
                className="border border-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:border-gray-500 transition-all duration-300"
              >
                Host an Event
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="upcoming-events" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Mark your calendar for these exciting events featuring industry experts, 
              hands-on workshops, and cutting-edge technology demonstrations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {event.type}
                  </span>
                  <span className="text-gray-400 text-sm">{event.attendees} attendees</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {event.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {event.description}
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <a
                  href={event.href}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  Register Now <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Past Events
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Relive the success of our previous events and discover insights 
              from industry leaders and technology experts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {event.status}
                  </span>
                  <span className="text-gray-400 text-sm">{event.attendees} attendees</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {event.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {event.description}
                </p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Event Types
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We host various types of events to meet different learning needs 
              and industry requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {eventTypes.slice(1).map((type, index) => (
              <motion.div
                key={type}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 text-center border border-slate-700 hover:border-slate-600 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white">{type}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Join Our Events?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Connect with industry experts, learn about cutting-edge technologies, 
              and network with like-minded professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#upcoming-events"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                View All Events
              </a>
              <a
                href="/contact"
                className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:border-gray-500 transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}