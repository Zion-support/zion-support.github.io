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

                <div className="space - y-2 mb - 4">
                  <p className="text - gray - 400 text - sm flex items - center">
                    <svg
                      className="w - 4 h - 4 mr - 2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m - 9 8h10M5 21h14a2 2 0 002 - 2V7a2 2 0 00 - 2-2H5a2 2 0 00 - 2 2v12a2 2 0 002 2z"
                            />
                    </svg>
                    {webinar.date}
                  </p>
                  <p className="text - gray - 400 text - sm flex items - center">
                    <svg
                      className="w - 4 h - 4 mr - 2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6 - 3a9 9 0 11 - 18 0 9 9 0 0118 0z"
                            />
                    </svg>
                    {webinar.duration}
                  </p>
                  <p className="text - gray - 400 text - sm flex items - center">
                    <svg
                      className="w - 4 h - 4 mr - 2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11 - 8 0 4 4 0 018 0zM12 14a7 7 0 00 - 7 7h14a7 7 0 00 - 7-7z"
                            />
                    </svg>
                    {webinar.speaker}
                  </p>
                </div>
            </section>

                <Link
                  to="/contact"
                  className="inline - flex items - center text - blue - 400 hover:text - blue - 300 transition - colors duration - 300"
                >
                  Register Now{' '}
                  <svg
                    className="ml - 2 h - 4 w - 4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7 - 7 7"
                          />
                  </svg>
                </Link>
              </div>) ) }
          </div>

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
