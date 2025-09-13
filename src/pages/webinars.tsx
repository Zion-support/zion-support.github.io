import React from 'react';
import { motion } from 'framer-motion';
import { 
  Video, 
  Calendar, 
  Clock, 
  Users, 
  Play, 
  BookOpen, 
  Search,
  Filter,
  ArrowRight,
  Brain,
  Shield,
  Cloud,
  Atom,
  Zap,
  TrendingUp,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

export default function Webinars() {
  const webinars = [
    {
      id: 1,
      title: "AI-Powered Cybersecurity: Protecting Your Digital Assets",
      description: "Join our cybersecurity experts as they demonstrate how AI is revolutionizing threat detection and response in real-time.",
      date: "2024-02-15",
      time: "2:00 PM EST",
      duration: "60 min",
      attendees: 1247,
      category: "Cybersecurity",
      speaker: "Dr. Sarah Chen",
      tags: ["AI", "Cybersecurity", "Live Demo"],
      icon: Shield,
      color: "text-red-400",
      isLive: false,
      isUpcoming: true
    },
    {
      id: 2,
      title: "Quantum Computing: From Theory to Practice",
      description: "Explore the practical applications of quantum computing in enterprise environments and see real-world use cases.",
      date: "2024-02-10",
      time: "1:00 PM EST",
      duration: "90 min",
      attendees: 892,
      category: "Quantum Computing",
      speaker: "Prof. Michael Rodriguez",
      tags: ["Quantum Computing", "Enterprise", "Use Cases"],
      icon: Atom,
      color: "text-purple-400",
      isLive: false,
      isUpcoming: false
    },
    {
      id: 3,
      title: "Edge AI: Real-Time Intelligence at the Network Edge",
      description: "Discover how edge computing combined with AI is enabling next-generation applications with ultra-low latency.",
      date: "2024-02-05",
      time: "3:00 PM EST",
      duration: "75 min",
      attendees: 1567,
      category: "Edge Computing",
      speaker: "Dr. Emily Watson",
      tags: ["Edge Computing", "AI", "Real-time"],
      icon: Zap,
      color: "text-green-400",
      isLive: false,
      isUpcoming: false
    },
    {
      id: 4,
      title: "Digital Twins: Transforming Asset Management",
      description: "Learn how digital twin technology is revolutionizing industries from manufacturing to healthcare.",
      date: "2024-01-30",
      time: "2:30 PM EST",
      duration: "60 min",
      attendees: 1103,
      category: "Digital Twins",
      speaker: "Dr. James Thompson",
      tags: ["Digital Twins", "IoT", "Asset Management"],
      icon: Cloud,
      color: "text-blue-400",
      isLive: false,
      isUpcoming: false
    },
    {
      id: 5,
      title: "AI in Healthcare: The Future of Patient Care",
      description: "Explore the latest developments in AI-powered healthcare solutions and their impact on patient outcomes.",
      date: "2024-01-25",
      time: "1:30 PM EST",
      duration: "80 min",
      attendees: 1345,
      category: "Healthcare",
      speaker: "Dr. Lisa Park",
      tags: ["AI", "Healthcare", "Patient Care"],
      icon: Brain,
      color: "text-cyan-400",
      isLive: false,
      isUpcoming: false
    },
    {
      id: 6,
      title: "Micro SaaS Solutions: Scaling Your Business",
      description: "Learn how micro SaaS solutions can help businesses scale efficiently while maintaining quality.",
      date: "2024-01-20",
      time: "2:00 PM EST",
      duration: "70 min",
      attendees: 978,
      category: "Micro SaaS",
      speaker: "Mark Stevens",
      tags: ["Micro SaaS", "Scaling", "Business"],
      icon: TrendingUp,
      color: "text-orange-400",
      isLive: false,
      isUpcoming: false
    }
  ];

  const categories = [
    "All",
    "AI & Machine Learning",
    "Cybersecurity",
    "Quantum Computing",
    "Edge Computing",
    "Digital Twins",
    "Healthcare",
    "Micro SaaS"
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredWebinars = webinars.filter(webinar => {
    const matchesCategory = selectedCategory === "All" || webinar.category === selectedCategory;
    const matchesSearch = webinar.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         webinar.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         webinar.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const upcomingWebinars = filteredWebinars.filter(w => w.isUpcoming);
  const pastWebinars = filteredWebinars.filter(w => !w.isUpcoming);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-8">
                <Video className="w-4 h-4 mr-2" />
                Webinars
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Learn from
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Industry Experts</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                Join our interactive webinars featuring leading experts in AI, quantum computing, 
                cybersecurity, and emerging technologies. Gain practical insights and stay ahead 
                of the curve.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search webinars..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-blue-500 text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      {upcomingWebinars.length > 0 && (
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Upcoming Webinars
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Don't miss these live sessions with industry experts. Register now to secure your spot.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingWebinars.map((webinar, index) => (
                <motion.div
                  key={webinar.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-blue-500/50 rounded-xl p-6 hover:border-blue-400 transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 ${webinar.color.replace('text-', 'bg-').replace('-400', '-400/20')} rounded-lg flex items-center justify-center`}>
                      <webinar.icon className={`w-6 h-6 ${webinar.color}`} />
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-blue-400 font-medium">Upcoming</div>
                      <div className="text-xs text-gray-400">{webinar.date}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                    {webinar.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {webinar.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {webinar.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Details */}
                  <div className="space-y-2 mb-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      Speaker: {webinar.speaker}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {webinar.time} • {webinar.duration}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {webinar.date}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <button className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Register Now
                    </button>
                    <button className="px-4 py-2 border border-blue-500/30 text-blue-400 rounded-lg font-medium hover:bg-blue-500/10 transition-all duration-300">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Past Webinars */}
      <section className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Past Webinars
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Missed a session? Watch recordings of our previous webinars and learn at your own pace.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastWebinars.map((webinar, index) => (
              <motion.div
                key={webinar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 ${webinar.color.replace('text-', 'bg-').replace('-400', '-400/20')} rounded-lg flex items-center justify-center`}>
                    <webinar.icon className={`w-6 h-6 ${webinar.color}`} />
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-400">{webinar.category}</div>
                    <div className="text-xs text-gray-400">{webinar.date}</div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                  {webinar.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {webinar.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {webinar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Details */}
                <div className="space-y-2 mb-4 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    Speaker: {webinar.speaker}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {webinar.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    {webinar.attendees} attendees
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <button className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                    <Play className="w-4 h-4 mr-2" />
                    Watch Recording
                  </button>
                  <button className="px-4 py-2 border border-blue-500/30 text-blue-400 rounded-lg font-medium hover:bg-blue-500/10 transition-all duration-300">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredWebinars.length === 0 && (
            <div className="text-center py-12">
              <Video className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No webinars found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated with Our Webinars
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Never miss an important session. Subscribe to receive notifications about 
              upcoming webinars and access to recordings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                Subscribe to Updates
              </button>
              <button className="px-8 py-4 border border-blue-500/30 text-blue-400 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300">
                Suggest Topics
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}