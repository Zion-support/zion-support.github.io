import React, { useState } from 'react.ts';
import { motion              } from 'framer-motion.ts';
import { Link              } from 'react-router-dom.ts';
import { Calendar,
  Clock,
  MapPin,
  Users,
  Video,
  ExternalLink,
  Filter,
  Search,
  ArrowRight,
  Star,
  Award,
  Zap,
  Brain,
  Shield,
  Cloud,
  TrendingUp,
  MessageCircle,
  BookOpen,
  CheckCircle,
  FileText
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const events = [
  {
    id: 1,
    title: "AI & Machine Learning Summit 2027",
    type: "Conference",
    date: "2027-03-15",
    time: "9:00 AM - 6:00 PM EST",
    location: "Virtual + New York City",
    status: "upcoming",
    category: "AI & ML",
    description: "Join industry leaders for a comprehensive exploration of AI and machine learning innovations, featuring keynote speakers, workshops, and networking opportunities.",
    speakers: ["Dr. Sarah Chen", "Prof. Michael Rodriguez", "AI Expert Lisa Wang"],
    attendees: 500,
    price: "$299",
    highlights: [
      "Keynote presentations from AI pioneers",
      "Hands-on workshops with real datasets",
      "Networking with industry professionals",
      "Latest AI research and applications"
    ],
    image: "/images/ai-summit-2027.jpg"
  },
  {
    id: 2,
    title: "Cybersecurity Best Practices Workshop",
    type: "Workshop",
    date: "2027-02-28",
    time: "2:00 PM - 5:00 PM EST",
    location: "Virtual",
    status: "upcoming",
    category: "Cybersecurity",
    description: "Learn essential cybersecurity practices for modern businesses, including threat detection, incident response, and compliance requirements.",
    speakers: ["Security Expert John Smith", "Compliance Officer Maria Garcia"],
    attendees: 150,
    price: "Free",
    highlights: [
      "Threat detection strategies",
      "Incident response protocols",
      "Compliance best practices",
      "Security tool demonstrations"
    ],
    image: "/images/cybersecurity-workshop.jpg"
  },
  {
    id: 3,
    title: "Cloud Computing & DevOps Conference",
    type: "Conference",
    date: "2027-01-20",
    time: "8:00 AM - 7:00 PM EST",
    location: "San Francisco, CA",
    status: "upcoming",
    category: "Cloud & DevOps",
    description: "Explore the latest trends in cloud computing, containerization, and DevOps practices with hands-on demonstrations and expert insights.",
    speakers: ["Cloud Architect David Lee", "DevOps Engineer Sarah Johnson"],
    attendees: 300,
    price: "$199",
    highlights: [
      "Cloud migration strategies",
      "Container orchestration",
      "CI/CD pipeline optimization",
      "Cost optimization techniques"
    ],
    image: "/images/cloud-devops-conference.jpg"
  },
  {
    id: 4,
    title: "Data Analytics & Business Intelligence",
    type: "Webinar",
    date: "2027-01-10",
    time: "1:00 PM - 3:00 PM EST",
    location: "Virtual",
    status: "upcoming",
    category: "Data Analytics",
    description: "Discover how data analytics can transform your business decisions with real-world case studies and practical implementation strategies.",
    speakers: ["Data Scientist Emily Chen", "BI Consultant Robert Wilson"],
    attendees: 200,
    price: "Free",
    highlights: [
      "Data visualization techniques",
      "Predictive analytics models",
      "Business intelligence tools",
      "ROI measurement strategies"
    ],
    image: "/images/data-analytics-webinar.jpg"
  },
  {
    id: 5,
    title: "IoT & Edge Computing Symposium",
    type: "Symposium",
    date: "2026-12-15",
    time: "10:00 AM - 4:00 PM EST",
    location: "Virtual",
    status: "past",
    category: "IoT & Edge",
    description: "Explore the future of IoT and edge computing with industry experts, featuring case studies and emerging technology trends.",
    speakers: ["IoT Specialist Dr. James Brown", "Edge Computing Expert Lisa Chen"],
    attendees: 180,
    price: "$149",
    highlights: [
      "IoT architecture design",
      "Edge computing optimization",
      "Security considerations",
      "Industry applications"
    ],
    image: "/images/iot-symposium.jpg"
  },
  {
    id: 6,
    title: "Digital Transformation Summit",
    type: "Conference",
    date: "2026-11-30",
    time: "9:00 AM - 6:00 PM EST",
    location: "Chicago, IL",
    status: "past",
    category: "Digital Transformation",
    description: "Learn from successful digital transformation stories and discover strategies to modernize your business operations and customer experience.",
    speakers: ["Digital Strategist Mark Davis", "Transformation Expert Anna Rodriguez"],
    attendees: 400,
    price: "$249",
    highlights: [
      "Transformation roadmaps",
      "Change management strategies",
      "Technology selection",
      "Success metrics"
    ],
    image: "/images/digital-transformation-summit.jpg"
  }
];

const eventTypes = ['All', 'Conference', 'Workshop', 'Webinar', 'Symposium'];
const categories = ['All', 'AI & ML', 'Cybersecurity', 'Cloud & DevOps', 'Data Analytics', 'IoT & Edge', 'Digital Transformation'];
const statuses = ['All', 'upcoming', 'past'];

export default function Events(...args: any[]): any {
  const [selectedType, setSelectedType] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const eventCategories = [
    { id: 'all', name: 'All Events', count: 12 },
    { id: 'conference', name: 'Conferences', count: 4 },
    { id: 'workshop', name: 'Workshops', count: 3 },
    { id: 'webinar', name: 'Webinars', count: 3 },
    { id: 'meetup', name: 'Meetups', count: 2 }
  ];

    return matchesType && matchesCategory && matchesStatus && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryIcon = (category: anyanyanyanyanyanyanyanyanyanyanyanyanystring)              => {
    switch (category) {
      case 'AI & ML': return Brain;
      case 'Cybersecurity': return Shield;
      case 'Cloud & DevOps': return Cloud;
      case 'Data Analytics': return TrendingUp;
      case 'IoT & Edge': return Zap;
      case 'Digital Transformation': return Globe;
      default: return BookOpen;
    }
  ];

  const getStatusBadge = (status: anyanyanyanyanyanyanyanyanyanyanyanyanystring)              => {
    if (status === 'upcoming') {
      return <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">Upcoming</span>;
    } else {
      return <span className="px-3 py-1 bg-gray-500/20 text-gray-400 text-xs rounded-full border border-gray-500/30">Past</span>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Events - Zion Tech Group"
        description="Join our upcoming conferences, webinars, workshops, and meetups. Connect with AI experts, learn about cutting-edge technology, and network with industry professionals."
        keywords="events, conferences, webinars, workshops, AI events, technology conferences, Zion Tech Group"
        canonicalUrl="https://ziontechgroup.com/events"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Events</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join our conferences, webinars, workshops, and meetups to learn from AI experts, discover cutting-edge technology, and connect with industry professionals.
            </p>

            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                {eventCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-blue-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {/* Search */}
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search events..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 text-white placeholder-zion-slate-light rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                  />
                </div>
              </div>

              {/* Event Type Filter */}
              <div>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-lg focus: anyanyanyanyanyanyanyanyanyanyanyanyanyoutline-none focus:ring-2 focus:ring-zion-cyan"
                >
                  {eventTypes.map(type              => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-lg focus: anyanyanyanyanyanyanyanyanyanyanyanyanyoutline-none focus:ring-2 focus:ring-zion-cyan"
                >
                  {categories.map(category              => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Status Filter */}
              <div>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-lg focus: anyanyanyanyanyanyanyanyanyanyanyanyanyoutline-none focus:ring-2 focus:ring-zion-cyan"
                >
                  {statuses.map(status              => (
                    <option key={status} value={status}>
                      {status === 'upcoming' ? 'Upcoming' : status === 'past' ? 'Past' : status}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {eventCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-cyan-500 text-white"
                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

      {/* Upcoming Events */}
      {upcomingEvents.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Upcoming Events</h2>
              <p className="text-zion-slate-light">Don't miss these exciting opportunities to learn and network</p>
            </motion.div>

            <div className="grid grid-cols-1 lg: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-8">
              {upcomingEvents.map((event, index)              => {
                const CategoryIcon = getCategoryIcon(event.category);
                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-zion-cyan/30 transition-all duration-300"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                          <CategoryIcon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex items-center space-x-2 text-gray-400">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">{event.time}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-gray-400">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{event.location}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-400">
                          <Users className="w-4 h-4" />
                          <span className="text-sm">{event.attendees} attendees</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {event.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                        <span>Register Now</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

      {/* Past Events */}
      {pastEvents.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Past Events</h2>
              <p className="text-zion-slate-light">Missed an event? Check out our past events and stay updated</p>
            </motion.div>

            <div className="grid grid-cols-1 lg: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-8">
              {pastEvents.map((event, index)              => {
                const CategoryIcon = getCategoryIcon(event.category);
                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 opacity-75"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                          <CategoryIcon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{event.title}</h3>
                          <div className="flex items-center gap-2">
                            {getStatusBadge(event.status)}
                            <span className="text-sm text-zion-slate-light">{event.type}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Event Details */}
                    <div className="mb-4 space-y-3">
                      <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-zion-slate-light mb-4">{event.description}</p>

                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <Link
                        href={`/events/${event.id}`}
                        className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300"
                      >
                        View Event Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                      <div className="text-right">
                        <div className="text-sm text-zion-slate-light">Contact us for future events</div>
                        <div className="text-zion-cyan font-medium">+1 302 464 0950</div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Events
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our flagship conferences and major events that bring together the AI community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents.filter(event => event.featured).map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <span className="px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded-full">
                    Featured
                  </span>
                  <span className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full">
                    {eventCategories.find(cat => cat.id === event.category)?.name}
                  </span>
                  <span className="text-gray-400 text-sm">
                    {event.registered}/{event.capacity} registered
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 hover:text-blue-400 transition-colors cursor-pointer">
                  {event.title}
                </h3>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {event.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-4 text-gray-400 text-sm">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(event.date)}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {event.time}
                    </span>
                  </div>

                  <div className="flex items-center space-x-4 text-gray-400 text-sm">
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">
                      <Users className="w-4 h-4 inline mr-2" />
                      {event.registered}/{event.capacity} registered
                    </span>
                    <span className="text-blue-400 font-medium">
                      {Math.round((event.registered / event.capacity) * 100)}% full
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {event.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={event.registrationUrl}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Register Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Upcoming Events */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              All Upcoming Events
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Browse our complete calendar of upcoming events, webinars, and workshops.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.filter(event => isUpcoming(event) && !event.featured).map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <span className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full">
                    {eventCategories.find(cat => cat.id === event.category)?.name}
                  </span>
                  <span className="text-gray-400 text-sm">
                    {event.registered}/{event.capacity} registered
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-4 hover:text-blue-400 transition-colors cursor-pointer line-clamp-2">
                  {event.title}
                </h3>

                <p className="text-gray-300 leading-relaxed mb-6 line-clamp-3">
                  {event.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-4 text-gray-400 text-sm">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(event.date)}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {event.time}
                    </span>
                  </div>

                  <div className="flex items-center space-x-4 text-gray-400 text-sm">
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {event.tags.slice(0, 2).map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={event.registrationUrl}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 inline-flex items-center"
                  >
                    Register
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredEvents.filter(event => isUpcoming(event) && !event.featured).length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-gray-400 text-lg">No upcoming events found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Past Events
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Watch recordings and download materials from our previous events.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <span className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full">
                    {eventCategories.find(cat => cat.id === event.category)?.name}
                  </span>
                  <span className="text-gray-400 text-sm">
                    {event.attendees} attendees
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-4 hover:text-blue-400 transition-colors cursor-pointer">
                  {event.title}
                </h3>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {event.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-4 text-gray-400 text-sm">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(event.date)}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <p className="text-gray-400 text-sm font-semibold">Highlights:</p>
                    <ul className="space-y-1">
                      {event.highlights.slice(0, 3).map((highlight, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-center">
                          <Star className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {event.tags.slice(0, 2).map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-2">
                    <a
                      href={event.recordingUrl}
                      className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                      title="Watch Recording"
                    >
                      <Video className="w-4 h-4 text-white" />
                    </a>
                    <a
                      href={event.slidesUrl}
                      download
                      className="p-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
                      title="Download Slides"
                    >
                      <FileText className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Attend Our Events?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover the benefits of joining our events and connecting with the AI community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: MessageCircle,
                title: 'Expert Speakers',
                description: 'Learn from industry leaders, researchers, and practitioners with deep expertise in AI and technology.'
              },
              {
                icon: Users,
                title: 'Networking',
                description: 'Connect with like-minded professionals, potential partners, and industry experts.'
              },
              {
                icon: BookOpen,
                title: 'Knowledge Sharing',
                description: 'Gain insights from real-world case studies, best practices, and cutting-edge research.'
              },
              {
                icon: Video,
                title: 'Interactive Sessions',
                description: 'Participate in workshops, Q&A sessions, and hands-on demonstrations.'
              },
              {
                icon: Award,
                title: 'Recognition',
                description: 'Get recognized for your contributions and achievements in the AI community.'
              },
              {
                icon: Globe,
                title: 'Global Reach',
                description: 'Connect with professionals from around the world and diverse industries.'
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed text-center">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Updated</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get notified about upcoming events, early bird registrations, and exclusive event content.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                Subscribe
              </button>
            </div>

            <p className="text-gray-400 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
