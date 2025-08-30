
import React, { useState } from 'react';
import { motion  } from 'framer-motion';
import { SEO  } from "../components/SEO";
import { Video, 
  Calendar, 
  Clock, 
  Users, 
  Search,
  Filter,
  Play,
  ExternalLink,
  Download,
  BookOpen,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Heart,
  Globe,
  Star,
  TrendingUp,
  Award,
  Zap,
  Clock3,
  MapPin,
  Mail,
  Phone
 } from 'lucide-react';

export default function Webinars() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showPast, setShowPast] = useState(false);

  const categories = [
<<<<<<< HEAD
    { id: 'all', name: 'All Categories', icon: BookOpen, count: 0 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 0 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 0 },
    { id: 'cloud-devops', name: 'Cloud & DevOps', icon: Cloud, count: 0 },
    { id: 'digital-transformation', name: 'Digital Transformation', icon: Rocket, count: 0 },
    { id: 'healthcare-tech', name: 'Healthcare Technology', icon: Heart, count: 0 },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Zap, count: 0 },;
    { id: 'sustainability', name: 'Sustainability & Green IT', icon: Globe, count: 0 };
  ];

  const upcomingWebinars = [
=======
    { id: 'all', name: 'All Categories', icon: <Video className="w-5 h-5" />, count: 0 },;
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: <Brain className="w-5 h-5" />, count: 6 },;
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: <Cloud className="w-5 h-5" />, count: 4 },;
    { id: 'security', name: 'Cybersecurity', icon: <Shield className="w-5 h-5" />, count: 3 },;
    { id: 'data', name: 'Data & Analytics', icon: <Database className="w-5 h-5" />, count: 5 },;
    { id: 'emerging', name: 'Emerging Technologies', icon: <Zap className="w-5 h-5" />, count: 2 },;
    { id: 'strategy', name: 'Digital Strategy', icon: <Target className="w-5 h-5" />, count: 4 };
  ];

  const filterTypes = [;
    { id: 'all', name: 'All Webinars', count: 0 },;
    { id: 'upcoming', name: 'Upcoming', count: 0 },;
    { id: 'on-demand', name: 'On-Demand', count: 0 },;
    { id: 'live', name: 'Live Now', count: 0 };
  ];

  const webinars = [
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
    {
      id: 1,
      title: 'AI Autonomous Research Assistant: Revolutionizing Business Intelligence',
      description: 'Discover how our revolutionary AI Autonomous Research Assistant is transforming how businesses gather, analyze, and synthesize information across multiple sources.',
      category: 'ai-ml',
      type: 'upcoming',
      date: '2025-02-10T14:00:00Z',
      duration: '75 min',
      speakers: ['Dr. Sarah Chen', 'Dr. Michael Rodriguez', 'AI Research Team'],
      maxAttendees: 600,
      currentAttendees: 487,
      featured: true,
      tags: ['AI Research', 'Autonomous Systems', 'Business Intelligence', 'Innovation'],
      thumbnail: '/images/webinars/ai-autonomous-research-2025.jpg',
      registrationRequired: true,
      recordingAvailable: false
    },
    {
      id: 2,
      title: 'AI Supply Chain Optimization: Reducing Costs by Up to 30%',
      description: 'Learn how AI-powered supply chain optimization can predict demand, optimize inventory, and reduce costs significantly for your organization.',
      category: 'ai-ml',
      type: 'upcoming',
      date: '2025-02-12T15:00:00Z',
      duration: '60 min',
      speakers: ['Michael Rodriguez', 'Supply Chain Experts', 'AI Implementation Team'],
      maxAttendees: 400,
      currentAttendees: 298,
      featured: true,
      tags: ['Supply Chain', 'AI Optimization', 'Cost Reduction', 'Predictive Analytics'],
      thumbnail: '/images/webinars/ai-supply-chain-2025.jpg',
      registrationRequired: true,
      recordingAvailable: false
    },
    {
      id: 3,
      title: 'AI-Powered Business Transformation: Real-World Success Stories',
      description: 'Join industry experts as they share real-world case studies of successful AI implementations and the lessons learned along the way.',
      category: 'ai-ml',
      speaker: 'Dr. Sarah Chen, Chief AI Scientist',
      date: '2024-02-15',
      time: '14:00 EST',
      duration: '60 minutes',
      attendees: 450,
      maxAttendees: 500,
      summary: 'Learn how to implement AI-powered compliance automation to reduce manual work and improve accuracy.',
      tags: ['AI', 'Compliance', 'Automation', 'Best Practices'],
      registrationUrl: '/webinars/ai-compliance-automation-2024/register',
      watchUrl: null,
      isLive: false
    },
    {
      id: 5,
      title: 'Zero-Trust Security: Implementation Strategies for 2025',
      description: 'Learn practical strategies for implementing zero-trust security architecture in your organization.',
      category: 'security',
      type: 'upcoming',
      date: '2025-02-20T15:00:00Z',
      duration: '45 min',
      speakers: ['Alex Thompson', 'Dr. James Wilson'],
      maxAttendees: 300,
<<<<<<< HEAD
      summary: 'Explore practical applications of digital twin technology and how to measure return on investment.',
      tags: ['Digital Twin', 'IoT', 'ROI', 'Digital Transformation'],
      registrationUrl: '/webinars/digital-twin-applications-roi/register',
      watchUrl: null,
      isLive: false;
    };
  ];

  const pastWebinars = [
    {
      id: 5,
      title: 'The Future of AI in Healthcare: Opportunities and Challenges',
      category: 'healthcare-tech',
      speaker: 'Dr. Emily Watson, VP of Healthcare Technology',
      date: '2024-01-20',
      time: '14:00 EST',
      duration: '75 minutes',
      attendees: 520,
      maxAttendees: 500,
      summary: 'Comprehensive overview of AI applications in healthcare, including ethical considerations and regulatory compliance.',
      tags: ['Healthcare AI', 'Ethics', 'Regulatory Compliance', 'Medical Technology'],
      registrationUrl: null,
      watchUrl: '/webinars/ai-healthcare-future-2024/watch',
      isLive: false,
      recordingUrl: '/webinars/ai-healthcare-future-2024/recording',
      slidesUrl: '/webinars/ai-healthcare-future-2024/slides'
    },
    {
      id: 6,
      title: 'Quantum Computing: Preparing Your Organization for the Future',
      category: 'quantum-computing',
      speaker: 'Dr. Sarah Chen, Chief AI Scientist',
      date: '2024-01-15',
      time: '15:00 EST',
      duration: '90 minutes',
      attendees: 480,
      maxAttendees: 450,
      summary: 'Understanding quantum computing fundamentals and preparing organizations for quantum advantage.',
      tags: ['Quantum Computing', 'Future Technology', 'Innovation', 'Strategic Planning'],
      registrationUrl: null,
      watchUrl: '/webinars/quantum-computing-future-2024/watch',
      isLive: false,
      recordingUrl: '/webinars/quantum-computing-future-2024/recording',
      slidesUrl: '/webinars/quantum-computing-future-2024/slides'
    },
    {
      id: 7,
      title: 'Sustainable Technology: Green IT Solutions for Enterprise',
      category: 'sustainability',
      speaker: 'Priya Patel, Head of Data Science',
      date: '2024-01-10',
      time: '13:30 EST',
      duration: '60 minutes',
      attendees: 320,
      maxAttendees: 300,
      summary: 'Implementing sustainable technology practices to reduce environmental impact and operational costs.',
      tags: ['Sustainability', 'Green IT', 'Environmental Impact', 'Cost Reduction'],
      registrationUrl: null,
      watchUrl: '/webinars/sustainable-technology-enterprise-2024/watch',
      isLive: false,
      recordingUrl: '/webinars/sustainable-technology-enterprise-2024/recording',
      slidesUrl: '/webinars/sustainable-technology-enterprise-2024/slides'
    },
    {
      id: 8,
      title: 'Edge Computing and IoT: Building the Connected Enterprise',
      category: 'digital-transformation',
      speaker: 'Alex Thompson, Director of Cloud Operations',
      date: '2024-01-05',
      time: '14:00 EST',
      duration: '80 minutes',
      attendees: 410,
      maxAttendees: 400,
      summary: 'Strategies for implementing edge computing and IoT solutions in enterprise environments.',
      tags: ['Edge Computing', 'IoT', 'Enterprise', 'Digital Transformation'],
      registrationUrl: null,
      watchUrl: '/webinars/edge-computing-iot-enterprise-2024/watch',
      isLive: false,
      recordingUrl: '/webinars/edge-computing-iot-enterprise-2024/recording',
      slidesUrl: '/webinars/edge-computing-iot-enterprise-2024/slides';
    };
  ];

  // Calculate category counts
  React.useEffect(()  => {
    const allWebinars = [...upcomingWebinars, ...pastWebinars];
    const categoryCounts = categories.map(cat => ({
      ...cat,;
      count: cat.id === 'all' ? allWebinars.length: allWebinars.filter(wp  => wp.category === cat.id).length;
    }))}, []);

  const filteredWebinars = (showPast ? pastWebinars: upcomingWebinars).filter(webinar  => {;
    const matchesSearch = webinar.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
                         webinar.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||;
                         webinar.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch});

  const stats = [
    { label: 'Webinars Delivered', value: '100+', icon: Video },
    { label: 'Attendees Served', value: '25K+', icon: Users },
    { label: 'Expert Speakers', value: '15+', icon: Star },;
    { label: 'Topics Covered', value: '20+', icon: BookOpen };
  ];

  const contactInfo = {
  email: 'webinars@ziontechgroup.com',
    phone: '+1 302 464 0950',
    address: '364 E Main St STE 1008,
  Middletown DE 19709';
  ;

};

  return (
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Webinars - Zion Tech Group"
        description="Join our educational webinars on AI, cybersecurity, cloud computing, and emerging technologies. Learn from industry experts."
      />
      
=======
      currentAttendees: 189,;
      featured: false,;
      tags: ['Cybersecurity', 'Zero-Trust', 'Security Architecture', 'Implementation'],;
      thumbnail: '/images/webinars/zero-trust-security-2025.jpg',;
      registrationRequired: true,;
      recordingAvailable: false;
    };
  ];

  // Update counts
  React.useEffect(() => {
    categories.forEach(cat = > {;
      cat.count = webinars.filter(w => w.category === cat.id).length;
    });

    filterTypes.forEach(type = > {;
      if (type.id === 'all') {;
        type.count = webinars.length;
      } else {
        type.count = webinars.filter(w => w.type === type.id).length;
      }
    });
  }, []);

  const filteredWebinars = webinars.filter(webinar => {;
    const matchesSearch = webinar.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
                         webinar.description.toLowerCase().includes(searchQuery.toLowerCase()) ||;
                         webinar.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = activeCategory === 'all' || webinar.category === activeCategory;
    const matchesType = filterType === 'all' || webinar.type === filterType;

    return matchesSearch && matchesCategory && matchesType;
  });

  const formatDate = (dateString: string) => {;
    return new Date(dateString).toLocaleDateString('en-US', {;
      weekday: 'long',;
      year: 'numeric',;
      month: 'long',;
      day: 'numeric';
    });
  };

  const formatTimeUntil = (dateString: string) => {;
    const now = new Date();
    const webinarDate = new Date(dateString);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) return 'Past';
    if (diffDays === 0) return 'Today';
    if (diffDays < 7) return `${diffDays} days`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks`;
    return `${Math.ceil(diffDays / 30)} months`;
  };

  const getCategoryIcon = (categoryId: string) => {;
    return categories.find(c => c.id === categoryId)?.icon || <Video className="w-5 h-5" />;
  };

  return (
    <div className = "min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
<<<<<<< HEAD
            initial = {
  { opacity: 0,
  y: 20 

}}
            animate = {
  { opacity: 1,
  y: 0 

}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl mb-8"
=======
            initial = {
  { opacity: 0,
  y: 30 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay Informed and Inspired
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Subscribe to our webinar series and never miss an opportunity to learn
              from industry experts and technology leaders. Get notified about upcoming
              sessions and access to exclusive content.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-zion-cyan/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </a>
              <a 
                href="/white-papers"
                className="px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Read Our Research
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-zion-slate">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search webinars by title, description, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-zion-slate-dark border border-zion-slate-light/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 mb-6">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-zion-cyan border-zion-cyan text-white'
                      : 'bg-zion-slate-dark border-zion-slate-light/20 text-zion-slate-light hover:border-zion-cyan/50'
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                  <span className="text-sm opacity-75">({category.count})</span>
                </button>
              ))}
            </div>

            {/* Type Filters */}
            <div className="flex flex-wrap gap-3">
              {filterTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setFilterType(type.id)}
                  className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                    filterType === type.id
                      ? 'bg-zion-purple border-zion-purple text-white'
                      : 'bg-zion-slate-dark border-zion-slate-light/20 text-zion-slate-light hover:border-zion-purple/50'
                  }`}
                >
                  {type.name} ({type.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Webinars Grid */}
      <section className="py-16 bg-zion-slate-light">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {filteredWebinars.length === 0 ? (;
              <div className="text-center py-20">;
                <Video className="w-24 h-24 text-zion-slate-light mx-auto mb-6" />;
                <h3 className="text-2xl font-semibold text-zion-slate mb-4">No webinars found</h3>;
                <p className="text-zion-slate-light mb-8">Try adjusting your search criteria or check back later for new webinars.</p>;
                <button;
                  onClick={() => {;
                    setSearchQuery('');
                    setActiveCategory('all');
                    setFilterType('all');
                  }}
                  className = "px-6 py-3 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/90 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredWebinars.map((webinar) => (
                  <motion.div
                    key={webinar.id}
                    initial = {
  { opacity: 0,
  y: 20 






}}
                    whileInView = {
  { opacity: 1,
  y: 0 






}}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-zion-slate-dark rounded-2xl overflow-hidden border border-zion-slate-light/20 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/25"
                  >
                    {/* Thumbnail */}
                    <div className="relative h-48 bg-gradient-to-br from-zion-slate to-zion-slate-light">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Play className="w-16 h-16 text-zion-cyan" />
                      </div>
                      {webinar.featured && (
                        <div className="absolute top-4 right-4 bg-zion-purple text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Featured
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        {getCategoryIcon(webinar.category)}
                        <span className="text-sm text-zion-slate-light">
                          {categories.find(c => c.id === webinar.category)?.name}
                        </span>
                      </div>

                      <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                        {webinar.title}
                      </h3>

                      <p className="text-zion-slate-light mb-4 line-clamp-3">
                        {webinar.description}
                      </p>

                      {/* Meta Info */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(webinar.date)}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                          <Clock className="w-4 h-4" />
                          <span>{webinar.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                          <Users className="w-4 h-4" />
                          <span>{webinar.currentAttendees}/{webinar.maxAttendees} attendees</span>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {webinar.tags.slice(0, 3).map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-zion-slate text-zion-slate-light text-xs rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3">
                        {webinar.registrationRequired ? (
                          <button className="flex-1 bg-zion-cyan text-white py-2 px-4 rounded-lg hover:bg-zion-cyan/90 transition-colors font-semibold">
                            Register Now
                          </button>
                        ) : (
                          <button className="flex-1 bg-zion-purple text-white py-2 px-4 rounded-lg hover:bg-zion-purple/90 transition-colors font-semibold">
                            Join Now
                          </button>
                        )}
                        <button className="p-2 border border-zion-slate-light/20 text-zion-slate-light rounded-lg hover:border-zion-cyan hover:text-zion-cyan transition-colors">
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
<<<<<<< HEAD
            )}
          </div>
        </div>
      </section>
    </div>
  )};
=======;
            )};
          </div>;
        </div>;
      </section>;
    </div>;
  );
}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
