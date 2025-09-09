import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Users, ExternalLink, ArrowRight } from 'lucide-react';

const Events = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    const events = [
        {
            id: 1,
            title: "AI & Digital Transformation Summit 2025",
            category: "Conference",
            date: "March 15-17, 2025",
            time: "9:00 AM - 6:00 PM",
            location: "San Francisco Convention Center",
            description: "Join industry leaders and experts for three days of insights on AI-driven digital transformation strategies, implementation best practices, and future trends.",
            attendees: "500+",
            price: "Free",
            isVirtual: false,
            registrationUrl: "/contact"
        },
        {
            id: 2,
            title: "Cybersecurity Workshop: Zero-Trust Architecture",
            category: "Workshop",
            date: "February 28, 2025",
            time: "1:00 PM - 5:00 PM",
            location: "Virtual Event",
            description: "Learn about implementing zero-trust security architecture in your organization with hands-on exercises and real-world case studies.",
            attendees: "100",
            price: "$99",
            isVirtual: true,
            registrationUrl: "/contact"
        },
        {
            id: 3,
            title: "Cloud Migration Best Practices Webinar",
            category: "Webinar",
            date: "February 15, 2025",
            time: "2:00 PM - 3:30 PM",
            location: "Virtual Event",
            description: "Discover proven strategies for successful cloud migration, including planning, execution, and optimization techniques.",
            attendees: "250",
            price: "Free",
            isVirtual: true,
            registrationUrl: "/contact"
        },
        {
            id: 4,
            title: "Quantum Computing in Enterprise",
            category: "Seminar",
            date: "January 30, 2025",
            time: "10:00 AM - 12:00 PM",
            location: "New York Tech Hub",
            description: "Explore the potential of quantum computing in enterprise environments and learn about early adoption strategies.",
            attendees: "75",
            price: "$149",
            isVirtual: false,
            registrationUrl: "/contact"
        },
        {
            id: 5,
            title: "Data Analytics & AI Implementation",
            category: "Training",
            date: "January 20-22, 2025",
            time: "9:00 AM - 4:00 PM",
            location: "Austin Innovation Center",
            description: "Comprehensive training on implementing data analytics and AI solutions in your business operations.",
            attendees: "50",
            price: "$599",
            isVirtual: false,
            registrationUrl: "/contact"
        },
        {
            id: 6,
            title: "Future of Work: AI & Automation",
            category: "Panel Discussion",
            date: "January 10, 2025",
            time: "3:00 PM - 5:00 PM",
            location: "Virtual Event",
            description: "Join industry experts for a discussion on how AI and automation are reshaping the future of work.",
            attendees: "300",
            price: "Free",
            isVirtual: true,
            registrationUrl: "/contact"
        }
    ];

    const categories = [
        { name: "All", count: events.length },
        { name: "Conference", count: events.filter(e => e.category === "Conference").length },
        { name: "Workshop", count: events.filter(e => e.category === "Workshop").length },
        { name: "Webinar", count: events.filter(e => e.category === "Webinar").length },
        { name: "Seminar", count: events.filter(e => e.category === "Seminar").length },
        { name: "Training", count: events.filter(e => e.category === "Training").length },
        { name: "Panel Discussion", count: events.filter(e => e.category === "Panel Discussion").length }
    ];

    const filteredEvents = events.filter(event => {
        const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            event.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-slate-900">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full mb-6">
                            <Calendar className="w-10 h-10 text-white" />
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                            Events & Webinars
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                            Join us for insightful events, workshops, and webinars on the latest technology trends and innovations
                        </p>

                        {/* Search and Filters */}
                        <div className="max-w-4xl mx-auto mb-8">
                            <div className="flex flex-col lg:flex-row gap-4">
                                <div className="relative flex-1">
                                    <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type="text"
                                        placeholder="Search events..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="px-6 py-4 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                >
                                    {categories.map((category) => (
                                        <option key={category.name} value={category.name}>
                                            {category.name} ({category.count})
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Events Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Upcoming Events
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Discover our upcoming events and register to secure your spot
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredEvents.map((event, index) => (
                            <motion.div
                                key={event.id}
                                className="bg-slate-800/50 rounded-xl border border-slate-700 p-6 hover:border-blue-500/50 transition-all duration-300 group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                                        {event.category}
                                    </span>
                                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                        event.isVirtual 
                                            ? 'bg-green-500/20 text-green-400' 
                                            : 'bg-orange-500/20 text-orange-400'
                                    }`}>
                                        {event.isVirtual ? 'Virtual' : 'In-Person'}
                                    </span>
                                </div>
                                
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                                    {event.title}
                                </h3>
                                
                                <div className="space-y-3 mb-4">
                                    <div className="flex items-center text-gray-300 text-sm">
                                        <Calendar className="w-4 h-4 mr-2 text-blue-400" />
                                        {event.date}
                                    </div>
                                    <div className="flex items-center text-gray-300 text-sm">
                                        <Clock className="w-4 h-4 mr-2 text-blue-400" />
                                        {event.time}
                                    </div>
                                    <div className="flex items-center text-gray-300 text-sm">
                                        <MapPin className="w-4 h-4 mr-2 text-blue-400" />
                                        {event.location}
                                    </div>
                                    <div className="flex items-center text-gray-300 text-sm">
                                        <Users className="w-4 h-4 mr-2 text-blue-400" />
                                        {event.attendees} attendees
                                    </div>
                                </div>
                                
                                <p className="text-gray-300 mb-4 line-clamp-3">{event.description}</p>
                                
                                <div className="flex items-center justify-between">
                                    <span className="text-lg font-semibold text-blue-400">{event.price}</span>
                                    <Link
                                        to={event.registrationUrl}
                                        className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-colors duration-300"
                                    >
                                        Register
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    
                    {filteredEvents.length === 0 && (
                        <div className="text-center py-12">
                            <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-300 mb-2">No events found</h3>
                            <p className="text-gray-400">Try adjusting your search terms or category filter</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter Signup */}
            <section className="py-20 bg-gradient-to-r from-blue-900/20 to-cyan-900/20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Stay Updated
                        </h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Never miss an important event. Subscribe to our newsletter for updates on upcoming events, webinars, and exclusive content.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-4 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg font-semibold text-white hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                                Subscribe
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Host Your Event With Us
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Interested in hosting a technology event, workshop, or conference? We'd love to collaborate and help bring your vision to life.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg font-semibold text-white hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                        >
                            Get in Touch
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                        <Link
                            to="/services"
                            className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
                        >
                            Our Services
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Events;
