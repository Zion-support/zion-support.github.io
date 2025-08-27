import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Play, ArrowRight, Video } from 'lucide-react';

const Webinars = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    const webinars = [
        {
            id: 1,
            title: "AI-Powered Digital Transformation: Strategies for Success",
            category: "AI & Machine Learning",
            date: "February 25, 2025",
            time: "2:00 PM - 3:30 PM EST",
            duration: "90 minutes",
            speaker: "Dr. Sarah Chen, CTO",
            description: "Learn how to successfully implement AI-driven digital transformation in your organization with proven strategies and real-world case studies.",
            isLive: true,
            registrationUrl: "/contact",
            recordingUrl: "#"
        },
        {
            id: 2,
            title: "Cybersecurity in the Age of AI: Threats and Defenses",
            category: "Cybersecurity",
            date: "February 20, 2025",
            time: "1:00 PM - 2:30 PM EST",
            duration: "90 minutes",
            speaker: "Alex Thompson, Security Expert",
            description: "Discover how AI is both enhancing cybersecurity threats and providing innovative defense mechanisms for modern organizations.",
            isLive: false,
            registrationUrl: "/contact",
            recordingUrl: "#"
        },
        {
            id: 3,
            title: "Cloud Migration Best Practices: From Planning to Execution",
            category: "Cloud & Infrastructure",
            date: "February 15, 2025",
            time: "3:00 PM - 4:30 PM EST",
            duration: "90 minutes",
            speaker: "David Kim, Cloud Architect",
            description: "Comprehensive guide to successful cloud migration, including cost optimization, security considerations, and performance tuning.",
            isLive: true,
            registrationUrl: "/contact",
            recordingUrl: "#"
        },
        {
            id: 4,
            title: "Quantum Computing: Enterprise Applications and Opportunities",
            category: "Emerging Technology",
            date: "February 10, 2025",
            time: "11:00 AM - 12:30 PM EST",
            duration: "90 minutes",
            speaker: "Dr. James Wilson, Quantum Researcher",
            description: "Explore the potential of quantum computing in enterprise environments and learn about early adoption strategies.",
            isLive: false,
            registrationUrl: "/contact",
            recordingUrl: "#"
        },
        {
            id: 5,
            title: "Data Analytics & AI: Driving Business Intelligence",
            category: "Data & Analytics",
            date: "February 5, 2025",
            time: "2:00 PM - 3:30 PM EST",
            duration: "90 minutes",
            speaker: "Marcus Rodriguez, Data Scientist",
            description: "Learn how to leverage data analytics and AI to gain actionable business insights and drive strategic decision-making.",
            isLive: true,
            registrationUrl: "/contact",
            recordingUrl: "#"
        },
        {
            id: 6,
            title: "DevOps & Automation: Building Efficient Development Pipelines",
            category: "DevOps",
            date: "January 30, 2025",
            time: "1:00 PM - 2:30 PM EST",
            duration: "90 minutes",
            speaker: "Lisa Anderson, DevOps Engineer",
            description: "Master the principles of DevOps and automation to build efficient, scalable development and deployment pipelines.",
            isLive: false,
            registrationUrl: "/contact",
            recordingUrl: "#"
        }
    ];

    const categories = [
        { name: "All", count: webinars.length },
        { name: "AI & Machine Learning", count: webinars.filter(w => w.category === "AI & Machine Learning").length },
        { name: "Cybersecurity", count: webinars.filter(w => w.category === "Cybersecurity").length },
        { name: "Cloud & Infrastructure", count: webinars.filter(w => w.category === "Cloud & Infrastructure").length },
        { name: "Emerging Technology", count: webinars.filter(w => w.category === "Emerging Technology").length },
        { name: "Data & Analytics", count: webinars.filter(w => w.category === "Data & Analytics").length },
        { name: "DevOps", count: webinars.filter(w => w.category === "DevOps").length }
    ];

    const filteredWebinars = webinars.filter(webinar => {
        const matchesSearch = webinar.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            webinar.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            webinar.speaker.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || webinar.category === selectedCategory;
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
                            <Video className="w-10 h-10 text-white" />
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                            Expert Webinars
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                            Join industry experts for in-depth discussions on technology trends, best practices, and innovative solutions
                        </p>

                        {/* Search and Filters */}
                        <div className="max-w-4xl mx-auto mb-8">
                            <div className="flex flex-col lg:flex-row gap-4">
                                <div className="relative flex-1">
                                    <Video className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type="text"
                                        placeholder="Search webinars..."
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

            {/* Webinars Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Upcoming & Recorded Webinars
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Access our library of expert-led webinars and register for upcoming live sessions
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredWebinars.map((webinar, index) => (
                            <motion.div
                                key={webinar.id}
                                className="bg-slate-800/50 rounded-xl border border-slate-700 p-6 hover:border-blue-500/50 transition-all duration-300 group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                                        {webinar.category}
                                    </span>
                                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                        webinar.isLive 
                                            ? 'bg-green-500/20 text-green-400' 
                                            : 'bg-gray-500/20 text-gray-400'
                                    }`}>
                                        {webinar.isLive ? 'Live' : 'Recorded'}
                                    </span>
                                </div>
                                
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                                    {webinar.title}
                                </h3>
                                
                                <p className="text-gray-300 mb-4 line-clamp-3">{webinar.description}</p>
                                
                                <div className="space-y-3 mb-4">
                                    <div className="flex items-center text-gray-300 text-sm">
                                        <Calendar className="w-4 h-4 mr-2 text-blue-400" />
                                        {webinar.date}
                                    </div>
                                    <div className="flex items-center text-gray-300 text-sm">
                                        <Clock className="w-4 h-4 mr-2 text-blue-400" />
                                        {webinar.time} ({webinar.duration})
                                    </div>
                                    <div className="flex items-center text-gray-300 text-sm">
                                        <User className="w-4 h-4 mr-2 text-blue-400" />
                                        {webinar.speaker}
                                    </div>
                                </div>
                                
                                <div className="flex items-center justify-between">
                                    {webinar.isLive ? (
                                        <Link
                                            to={webinar.registrationUrl}
                                            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-colors duration-300"
                                        >
                                            <Play className="w-4 h-4 mr-2" />
                                            Register
                                        </Link>
                                    ) : (
                                        <Link
                                            to={webinar.recordingUrl}
                                            className="inline-flex items-center px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg text-white font-medium transition-colors duration-300"
                                        >
                                            <Video className="w-4 h-4 mr-2" />
                                            Watch Recording
                                        </Link>
                                    )}
                                    <Link
                                        to={webinar.registrationUrl}
                                        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group-hover:underline"
                                    >
                                        Learn More
                                        <ArrowRight className="w-4 h-4 ml-1" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    
                    {filteredWebinars.length === 0 && (
                        <div className="text-center py-12">
                            <Video className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-300 mb-2">No webinars found</h3>
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
                            Stay Informed
                        </h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Subscribe to our webinar series and never miss an opportunity to learn from industry experts and technology leaders.
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
                        Request Custom Webinar
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Looking for a specific topic or have a particular area of interest? We can create custom webinars tailored to your needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg font-semibold text-white hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                        >
                            Request Custom Webinar
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                        <Link
                            to="/events"
                            className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
                        >
                            View All Events
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Webinars;
