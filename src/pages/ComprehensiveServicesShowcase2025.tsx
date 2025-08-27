import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  ArrowRight, 
  DollarSign, 
  ExternalLink, 
  Workflow, 
  MessageSquare, 
  Globe, 
  TrendingUp, 
  Sparkles, 
  Bot, 
  Shield, 
  FileText, 
  Users, 
  BarChart3, 
  Cloud, 
  ShieldCheck,
  Brain,
  Cpu,
  Atom,
  Network,
  Eye,
  Leaf,
  Lock,
  Satellite,
  Zap,
  Target,
  CheckCircle,
  Star,
  Phone,
  Mail,
  MapPin,
  Clock,
  Award,
  Rocket,
  Lightbulb,
  BarChart,
  Database,
  Code,
  Palette,
  Globe2,
  Smartphone,
  Monitor,
  Server,
  Wifi,
  Camera,
  Car,
  Building,
  Factory,
  Hospital,
  School,
  Bank,
  ShoppingCart,
  Truck,
  Plane,
  Ship,
  Train,
  Bus,
  Bike,
  Walk,
  Run,
  Swim,
  Gamepad2,
  Music,
  Video,
  Image,
  File,
  Folder,
  Archive,
  Download,
  Upload,
  Share,
  Link,
  Unlink,
  Lock,
  Unlock,
  Eye,
  EyeOff,
  Settings,
  Tool,
  Wrench,
  Hammer,
  Screwdriver,
  Drill,
  Saw,
  Paintbrush,
  Pen,
  Pencil,
  Marker,
  Highlighter,
  Eraser,
  Scissors,
  Ruler,
  Compass,
  Calculator,
  Calendar,
  Clock,
  Timer,
  Stopwatch,
  Alarm,
  Bell,
  Volume,
  Mute,
  Play,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  Rewind,
  FastForward,
  Shuffle,
  Repeat,
  Shuffle2,
  Repeat1,
  SkipBack2,
  SkipForward2,
  Rewind2,
  FastForward2,
  Shuffle3,
  Repeat2,
  SkipBack3,
  SkipForward3,
  Rewind3,
  FastForward3,
  Shuffle4,
  Repeat3,
  SkipBack4,
  SkipForward4,
  Rewind4,
  FastForward4,
  Shuffle5,
  Repeat4,
  SkipBack5,
  SkipForward5,
  Rewind5,
  FastForward5,
  Shuffle6,
  Repeat5,
  SkipBack6,
  SkipForward6,
  Rewind6,
  FastForward6,
  Shuffle7,
  Repeat6,
  SkipBack7,
  SkipForward7,
  Rewind7,
  FastForward7,
  Shuffle8,
  Repeat7,
  SkipBack8,
  SkipForward8,
  Rewind8,
  FastForward8,
  Shuffle9,
  Repeat8,
  SkipBack9,
  SkipForward9,
  Rewind9,
  FastForward9,
  Shuffle10,
  Repeat9,
  SkipBack10,
  SkipForward10,
  Rewind10,
  FastForward10
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { COMPREHENSIVE_REAL_SERVICES_2025 } from '../data/comprehensiveRealServices2025';
import { Link } from 'react-router-dom';

export default function ComprehensiveServicesShowcase2025() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedInnovationLevel, setSelectedInnovationLevel] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', icon: Globe },
    { id: 'AI & Analytics', name: 'AI & Analytics', icon: Brain },
    { id: 'AI & Marketing', name: 'AI & Marketing', icon: Target },
    { id: 'AI & Support', name: 'AI & Support', icon: MessageSquare },
    { id: 'AI & Sales', name: 'AI & Sales', icon: Users },
    { id: 'AI & Security', name: 'AI & Security', icon: Shield },
    { id: 'IT & Infrastructure', name: 'IT & Infrastructure', icon: Server },
    { id: 'IT & Security', name: 'IT & Security', icon: ShieldCheck },
    { id: 'Emerging Technology', name: 'Emerging Technology', icon: Rocket },
    { id: 'Sustainability', name: 'Sustainability', icon: Leaf }
  ];

  const innovationLevels = [
    { id: 'all', name: 'All Levels', icon: Star },
    { id: 'Advanced', name: 'Advanced', icon: Zap },
    { id: 'Revolutionary', name: 'Revolutionary', icon: Rocket }
  ];

  const filteredServices = COMPREHENSIVE_REAL_SERVICES_2025.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesInnovationLevel = selectedInnovationLevel === 'all' || service.innovationLevel === selectedInnovationLevel;
    
    return matchesSearch && matchesCategory && matchesInnovationLevel;
  });

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category);
    return categoryData ? categoryData.icon : Globe;
  };

  const getInnovationLevelColor = (level: string) => {
    switch (level) {
      case 'Revolutionary':
        return 'from-purple-500 to-pink-500';
      case 'Advanced':
        return 'from-cyan-500 to-blue-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com',
    hours: 'Monday - Friday: 9:00 AM - 6:00 PM EST',
    responseTime: 'Within 2 hours during business hours'
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const ServiceCard = ({ service, index }: { service: any; index: number }) => {
    const CategoryIcon = getCategoryIcon(service.category);
    
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
      >
        <div className="flex items-center mb-4">
          <div className={`w-12 h-12 bg-gradient-to-r ${getInnovationLevelColor(service.innovationLevel)}/20 rounded-lg flex items-center justify-center mr-4`}>
            <CategoryIcon className="w-6 h-6 text-cyan-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white">{service.title}</h3>
            <div className="flex items-center gap-2">
              <span className="text-sm text-cyan-400">{service.category}</span>
              <span className="text-xs px-2 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 rounded-full">
                {service.innovationLevel}
              </span>
            </div>
          </div>
        </div>
        
        <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>
        
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-2xl font-bold text-cyan-400">{service.currency}{service.price.toLocaleString()}/month</span>
            <span className="text-sm text-gray-400">{service.pricingModel}</span>
          </div>
          <div className="text-sm text-gray-400">
            Market Price: {service.marketPrice}
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm text-green-400">ROI: {service.roi}</span>
            <span className="text-sm text-gray-400">•</span>
            <span className="text-sm text-blue-400">Delivery: {service.estimatedDelivery}</span>
          </div>
        </div>

        <div className="mb-4">
          <div className="text-sm text-gray-400 mb-2">Key Features:</div>
          <div className="flex flex-wrap gap-1">
            {service.features.slice(0, 4).map((feature: string, idx: number) => (
              <span key={idx} className="text-xs px-2 py-1 bg-slate-700/50 text-cyan-300 rounded-full">
                {feature}
              </span>
            ))}
            {service.features.length > 4 && (
              <span className="text-xs px-2 py-1 bg-slate-700/50 text-gray-400 rounded-full">
                +{service.features.length - 4} more
              </span>
            )}
          </div>
        </div>

        <div className="mb-4">
          <div className="text-sm text-gray-400 mb-2">Use Cases:</div>
          <div className="flex flex-wrap gap-1">
            {service.useCases.slice(0, 3).map((useCase: string, idx: number) => (
              <span key={idx} className="text-xs px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full">
                {useCase}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">Support:</span>
            <span className="text-sm text-yellow-400 capitalize">{service.supportLevel}</span>
          </div>
          <Link
            to={`/services/${service.id}`}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 text-sm font-medium"
          >
            Learn More
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        {service.demoUrl && (
          <div className="mt-3 pt-3 border-t border-slate-700/50">
            <div className="flex items-center gap-2">
              <a
                href={service.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1"
              >
                <ExternalLink className="w-3 h-3" />
                Live Demo
              </a>
              {service.documentationUrl && (
                <>
                  <span className="text-gray-600">•</span>
                  <a
                    href={service.documentationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
                  >
                    <FileText className="w-3 h-3" />
                    Documentation
                  </a>
                </>
              )}
            </div>
          </div>
        )}
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Comprehensive Services Showcase 2025 - Zion Tech Group" 
        description="Discover our comprehensive range of real, innovative micro SAAS services, IT solutions, and AI services designed to transform your business operations and drive growth."
        keywords="AI services, micro SAAS, IT solutions, cybersecurity, cloud infrastructure, quantum computing, blockchain, IoT, digital twin, space technology"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              2025 Revolutionary Services
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Comprehensive Services Showcase
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Experience the future of technology with our comprehensive suite of real, innovative micro SAAS services, 
              cutting-edge AI solutions, and revolutionary IT services designed to transform your business operations.
            </p>
            
            {/* Contact Information */}
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 max-w-4xl mx-auto mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center justify-center">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="text-left">
                      <div className="text-sm text-gray-400">Phone</div>
                      <div className="text-white font-medium">{contactInfo.phone}</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="text-left">
                      <div className="text-sm text-gray-400">Email</div>
                      <div className="text-white font-medium">{contactInfo.email}</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="text-left">
                      <div className="text-sm text-gray-400">Address</div>
                      <div className="text-white font-medium text-sm">{contactInfo.address}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-lg rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Get Started Today
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold text-lg rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                <DollarSign className="w-5 h-5 mr-2" />
                Request Custom Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:border-cyan-400/50"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>

              <select
                value={selectedInnovationLevel}
                onChange={(e) => setSelectedInnovationLevel(e.target.value)}
                className="px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:border-cyan-400/50"
              >
                {innovationLevels.map((level) => (
                  <option key={level.id} value={level.id}>
                    {level.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Showing <span className="text-cyan-400 font-semibold">{filteredServices.length}</span> of{' '}
              <span className="text-cyan-400 font-semibold">{COMPREHENSIVE_REAL_SERVICES_2025.length}</span> services
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredServices.length > 0 ? (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredServices.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-6 bg-slate-800/50 rounded-full flex items-center justify-center">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-gray-400 mb-6">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedInnovationLevel('all');
                }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your <span className="text-cyan-400">Business</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our comprehensive services can help you achieve your business goals, 
              drive innovation, and stay ahead of the competition in 2025 and beyond.
            </p>
            
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Why Choose Zion Tech Group?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium mb-1">Real, Market-Tested Solutions</h4>
                    <p className="text-gray-400 text-sm">All our services are based on real market needs and proven technologies</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium mb-1">Competitive Pricing</h4>
                    <p className="text-gray-400 text-sm">Market-competitive pricing with clear ROI and value propositions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium mb-1">Expert Support</h4>
                    <p className="text-gray-400 text-sm">Dedicated support teams and comprehensive documentation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium mb-1">Future-Ready Technology</h4>
                    <p className="text-gray-400 text-sm">Cutting-edge solutions that prepare you for tomorrow's challenges</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-lg rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Start Your Transformation
              </Link>
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold text-lg rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
