import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, ArrowRight } from 'lucide-react';

export default function Events() {
  const events = [
    {
      id: 1,
      title: 'AI & Quantum Computing Summit 2024',
      description: 'Join us for a comprehensive exploration of the latest developments in AI and quantum computing technologies.',
      date: '2024-03-15',
      time: '9:00 AM - 5:00 PM',
      location: 'San Francisco, CA',
      capacity: 500,
      registered: 342,
      price: '$299'
    },
    {
      id: 2,
      title: 'Cybersecurity Best Practices Webinar',
      description: 'Learn about the latest cybersecurity threats and best practices to protect your organization.',
      date: '2024-02-28',
      time: '2:00 PM - 3:30 PM',
      location: 'Online',
      capacity: 1000,
      registered: 756,
      price: 'Free'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Upcoming <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Events</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Join us for conferences, webinars, workshops, and meetups to learn about the latest 
              developments in AI, cybersecurity, cloud computing, and quantum technology.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-8">All Events</h2>
          <div className="grid gap-6">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="lg:w-48 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-center">
                      <Calendar className="w-12 h-12 text-cyan-400 mx-auto mb-2" />
                      <span className="text-xs text-gray-400">Event</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                    <p className="text-gray-300 mb-4">{event.description}</p>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Users className="w-4 h-4" />
                        <span>{event.registered}/{event.capacity}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-400">
                        Price: {event.price}
                      </div>
                      <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center gap-2">
                        Register
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}