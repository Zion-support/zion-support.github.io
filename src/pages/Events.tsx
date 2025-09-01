
import React, { useState } from 'react.ts';
import { motion  } from 'framer-motion.ts';
import { Link  } from 'react-router-dom.ts';
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

  Globe,
  Zap,
  Brain,
  Shield,
  Cloud,

  TrendingUp,
  MessageCircle,
  BookOpen,
  CheckCircle
 } from 'lucide-react.ts';

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

export default function Events(...args: unknown[]): any {
  const [selectedType, setSelectedType] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', icon: Calendar, count: 0 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 8 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 6 },
    { id: 'cloud-devops', name: 'Cloud & DevOps', icon: Cloud, count: 7 },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, count: 4 },
    { id: 'blockchain', name: 'Blockchain', icon: ShieldCheck, count: 3 },
    { id: 'iot', name: 'IoT & Edge Computing', icon: Cpu, count: 5 },
    { id: 'data-analytics', name: 'Data & Analytics', icon: BarChart, count: 6 },
    { id: 'digital-transformation', name: 'Digital Transformation', icon: TrendingUp, count: 9 },
    { id: 'startup-tech', name: 'Startup Technology', icon: Rocket, count: 3 }
  ];

  const eventTypes = [
    { id: 'all', name: 'All Types', icon: Calendar },
    { id: 'webinar', name: 'Webinar', icon: Video },
    { id: 'conference', name: 'Conference', icon: Users2 },
    { id: 'workshop', name: 'Workshop', icon: Settings },
    { id: 'hackathon', name: 'Hackathon', icon: Code },
    { id: 'meetup', name: 'Meetup', icon: Users },
    { id: 'summit', name: 'Summit', icon: Star }
  ];

  const events = [
    {
      id: 1,
      title: 'AI-Powered Cybersecurity Summit 2024',
      description: 'Join industry leaders and cybersecurity experts for a comprehensive exploration of AI-driven security solutions, threat intelligence, and next-generation protection strategies.',
      type: 'summit',
      category: 'cybersecurity',
      date: '2024-03-15',
      time: '09:00 AM - 05:00 PM',
      timezone: 'EST',
      location: 'Virtual + New York, NY',
      isVirtual: true,
      isInPerson: true,
      attendees: 500,
      price: '$299',
      isFree: false,
      featured: true,
      speakers: [
        'Dr. Sarah Chen - Chief Security Officer, Zion Tech Group',
        'Michael Rodriguez - Director of AI Security, Microsoft',
        'Lisa Park - Cybersecurity Researcher, MIT'
      ],
      agenda: [
        'Keynote: The Future of AI in Cybersecurity',
        'Panel: AI vs. AI - The Arms Race in Security',
        'Workshop: Implementing AI Security Solutions',
        'Networking & Demo Showcase'
      ],
      registrationUrl: '#',
      image: '/events/ai-cybersecurity-summit.jpg'
    },
    {
      id: 2,
      title: 'Quantum Computing Workshop: From Theory to Practice',
      description: 'Hands-on workshop exploring quantum computing fundamentals, algorithms, and real-world applications in finance, healthcare, and logistics.',
      type: 'workshop',
      category: 'quantum',
      date: '2024-03-20',
      time: '10:00 AM - 04:00 PM',
      timezone: 'EST',
      location: 'Virtual',
      isVirtual: true,
      isInPerson: false,
      attendees: 100,
      price: 'Free',
      isFree: true,
      featured: true,
      speakers: [
        'Dr. Emily Watson - Quantum Computing Lead, Zion Tech Group',
        'Alex Thompson - Quantum Algorithm Specialist'
      ],
      agenda: [
        'Introduction to Quantum Computing',
        'Quantum Algorithms Deep Dive',
        'Hands-on Quantum Programming',
        'Real-world Applications Discussion'
      ],
      registrationUrl: '#',
      image: '/events/quantum-computing-workshop.jpg'
    },
    {
      id: 3,
      title: 'Cloud-Native AI Development Webinar Series',
      description: 'Multi-part webinar series covering the latest trends in cloud-native AI development, MLOps, and scalable machine learning infrastructure.',
      type: 'webinar',
      category: 'cloud-devops',
      date: '2024-03-25',
      time: '02:00 PM - 03:30 PM',
      timezone: 'EST',
      location: 'Virtual',
      isVirtual: true,
      isInPerson: false,
      attendees: 250,
      price: 'Free',
      isFree: true,
      featured: false,
      speakers: [
        'David Kim - Cloud Architecture Lead, Zion Tech Group',
        'Sarah Johnson - MLOps Engineer, Google Cloud'
      ],
      agenda: [
        'Cloud-Native AI Architecture Patterns',
        'MLOps Best Practices',
        'Scaling AI Workloads in the Cloud',
        'Q&A Session'
      ],
      registrationUrl: '#',
      image: '/events/cloud-native-ai-webinar.jpg'
    },
    {
      id: 4,
      title: 'Blockchain Innovation Meetup',
      description: 'Local meetup for blockchain enthusiasts, developers, and entrepreneurs to discuss the latest developments and network with like-minded professionals.',
      type: 'meetup',
      category: 'blockchain',
      date: '2024-03-28',
      time: '06:00 PM - 08:00 PM',
      timezone: 'EST',
      location: 'Middletown, DE',
      isVirtual: false,
      isInPerson: true,
      attendees: 50,
      price: 'Free',
      isFree: true,
      featured: false,
      speakers: [
        'Local Blockchain Developers',
        'Startup Founders',
        'Industry Experts'
      ],
      agenda: [
        'Networking & Refreshments',
        'Lightning Talks',
        'Open Discussion',
        'Future Meetup Planning'
      ],
      registrationUrl: '#',
      image: '/events/blockchain-meetup.jpg'
    },
    {
      id: 5,
      title: 'Data Science & Analytics Conference',
      description: 'Comprehensive conference covering data science, analytics, and AI applications across various industries with hands-on workshops and expert presentations.',
      type: 'conference',
      category: 'data-analytics',
      date: '2024-04-05',
      time: '08:00 AM - 06:00 PM',
      timezone: 'EST',
      location: 'San Francisco, CA',
      isVirtual: true,
      isInPerson: true,
      attendees: 800,
      price: '$499',
      isFree: false,
      featured: true,
      speakers: [
        'Dr. Lisa Park - Chief Data Scientist, Zion Tech Group',
        'Dr. Robert Chen - VP of Analytics, Netflix',
        'Maria Garcia - Data Science Director, Uber'
      ],
      agenda: [
        'Keynote: The Future of Data-Driven Decision Making',
        'Track Sessions: ML, Analytics, Visualization',
        'Industry Case Studies',
        'Networking & Career Fair'
      ],
      registrationUrl: '#',
      image: '/events/data-science-conference.jpg'
    },
    {
      id: 6,
      title: 'IoT Edge Computing Hackathon',
      description: '24-hour hackathon focused on building innovative IoT solutions using edge computing and AI. Compete for prizes and recognition.',
      type: 'hackathon',
      category: 'iot',
      date: '2024-04-12',
      time: '09:00 AM - 09:00 AM (Next Day)',
      timezone: 'EST',
      location: 'Virtual + Multiple Cities',
      isVirtual: true,
      isInPerson: true,
      attendees: 200,
      price: 'Free',
      isFree: true,
      featured: false,
      speakers: [
        'IoT Experts from Zion Tech Group',
        'Industry Mentors',
        'Judges Panel'
      ],
      agenda: [
        'Opening Ceremony & Team Formation',
        '24-Hour Hacking Session',
        'Mentorship & Workshops',
        'Project Presentations & Judging'
      ],
      registrationUrl: '#',
      image: '/events/iot-hackathon.jpg'
    }
  ];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const matchesType = selectedType === 'all' || event.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  const upcomingEvents = events.filter(event => new Date(event.date) >= new Date()).slice(0, 3);
  const featuredEvents = events.filter(event => event.featured);

  const formatDate = (dateString: anystring)  => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };


  const getCategoryIcon = (category: anystring)  => {
    switch (category) {
      case 'AI & ML': return Brain;
      case 'Cybersecurity': return Shield;
      case 'Cloud & DevOps': return Cloud;
      case 'Data Analytics': return TrendingUp;
      case 'IoT & Edge': return Zap;
      case 'Digital Transformation': return Globe;
      default: return BookOpen;
    }
  };

  const getStatusBadge = (status: anystring)  => {
    if (status === 'upcoming') {
      return <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">Upcoming</span>;
    } else {
      return <span className="px-3 py-1 bg-gray-500/20 text-gray-400 text-xs rounded-full border border-gray-500/30">Past</span>;
    }

  };

  return (
    <div className="min-h-screen bg-zion-blue">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">
                {' '}Events
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Connect with industry experts, learn cutting-edge technologies, and network with 
              professionals at our curated events, webinars, and conferences.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search events, topics, or speakers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-zion-blue-dark border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none focus:ring-2 focus:ring-zion-cyan/20"
                />
              </div>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-zion-cyan">{events.length}</div>
                <div className="text-zion-slate-light text-sm">Total Events</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-zion-cyan">{events.filter(e => e.isFree).length}</div>
                <div className="text-zion-slate-light text-sm">Free Events</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-zion-cyan">{events.filter(e => e.isVirtual).length}</div>
                <div className="text-zion-slate-light text-sm">Virtual Events</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-zion-cyan">{events.filter(e => e.isInPerson).length}</div>
                <div className="text-zion-slate-light text-sm">In-Person Events</div>
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
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-lg focus: anyoutline-none focus:ring-2 focus:ring-zion-cyan"
                >
                  {eventTypes.map(type  => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-lg focus: anyoutline-none focus:ring-2 focus:ring-zion-cyan"
                >
                  {categories.map(category  => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Status Filter */}
              <div>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-lg focus: anyoutline-none focus:ring-2 focus:ring-zion-cyan"
                >
                  {statuses.map(status  => (
                    <option key={status} value={status}>
                      {status === 'upcoming' ? 'Upcoming' : status === 'past' ? 'Past' : status}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      {upcomingEvents.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured Events
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                Don't miss these must-attend events featuring industry leaders and cutting-edge topics.
              </p>
            </motion.div>


            <div className="grid grid-cols-1 lg: anygrid-cols-2 gap-8">
              {upcomingEvents.map((event, index)  => {
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
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{event.title}</h3>
                          <div className="flex items-center gap-2">
                            {getStatusBadge(event.status)}
                            <span className="text-sm text-zion-slate-light">{event.type}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-zion-cyan">{event.price}</div>
                        <div className="text-sm text-zion-slate-light">Registration</div>
                      </div>

                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs font-medium rounded-full">
                        {getTypeName(event.type)}
                      </span>
                      <span className="px-3 py-1 bg-zion-purple/20 text-zion-purple text-xs font-medium rounded-full">
                        {getCategoryName(event.category)}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                      {event.title}
                    </h3>
                    
                    <p className="text-zion-slate-light mb-4 line-clamp-3">
                      {event.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <Clock className="w-4 h-4" />
                        <span>{event.time} {event.timezone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <Users className="w-4 h-4" />
                        <span>{event.attendees} attendees</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-zion-cyan font-semibold">
                        {event.isFree ? 'Free' : event.price}
                      </div>
                      
                      <button className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2">
                        Register Now
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>;
              ))}
            </div>
          </div>
        </section>;
      )}

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Categories */}
                <div className="bg-zion-blue-dark border border-zion-purple/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Filter className="w-5 h-5 text-zion-cyan" />
                    Categories
                  </h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center justify-between ${
                          selectedCategory === category.id
                            ? 'bg-zion-cyan text-zion-blue'
                            : 'text-zion-slate-light hover:bg-zion-purple/20 hover:text-white'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <category.icon className="w-4 h-4" />
                          {category.name}
                        </span>
                        {category.count > 0 && (
                          <span className="text-xs opacity-75">({category.count})</span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>


            <div className="grid grid-cols-1 lg: anygrid-cols-2 gap-8">
              {pastEvents.map((event, index)  => {
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
                    Clear all filters
                  </button>
                </div>;
              )}

              {/* Load More Button */}
              {filteredEvents.length > 6 && (
                <div className="text-center mt-12">
                  <button className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 hover:-translate-y-1">
                    Load More Events
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Host Your Event with Us
            </h2>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              Have an idea for an event, webinar, or workshop? We'd love to collaborate! 
              Let's create amazing learning experiences together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 hover:-translate-y-1">
                Propose an Event
              </button>
              <button className="border border-zion-cyan text-zion-cyan px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Partner with Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}