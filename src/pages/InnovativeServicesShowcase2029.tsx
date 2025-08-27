import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Rocket, 
  Star, 
  TrendingUp, 
  Award,
  Globe,
  Cpu,
  Lock,
  BarChart3,
  Users,
  Target,
  CheckCircle,
  ArrowRight,
  ChevronRight,
  Search,
  Filter,
  Grid,
  List,
  Eye,
  Heart,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Zap as ZapIcon,
  Atom,
  Network,
  Server,
  Database,
  Smartphone,
  Code,
  Workflow,
  Sparkles,
  Lightbulb,
  Target as TargetIcon,
  Users as UsersIcon,
  Globe as GlobeIcon,
  Shield as ShieldIcon,
  Cloud as CloudIcon,
  Brain as BrainIcon,
  Zap as ZapIcon2,
  Rocket as RocketIcon,
  Star as StarIcon,
  TrendingUp as TrendingUpIcon,
  Award as AwardIcon,
  CheckCircle as CheckCircleIcon,
  ArrowRight as ArrowRightIcon,
  ChevronRight as ChevronRightIcon,
  Search as SearchIcon,
  Filter as FilterIcon,
  Grid as GridIcon,
  List as ListIcon,
  Eye as EyeIcon,
  Heart as HeartIcon,
  MessageCircle as MessageCircleIcon,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as MapPinIcon,
  Clock as ClockIcon,
  DollarSign as DollarSignIcon
} from 'lucide-react';
import { SEO } from '../components/SEO';
import INNOVATIVE_MICRO_SAAS_SERVICES_2029 from '../data/innovativeMicroSaasServices2029';
import EMERGING_TECH_SERVICES_2029 from '../data/emergingTechServices2029';

// Futuristic animated background component
const FuturisticBackground = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    {/* Animated grid with neon effect */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.15)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
    
    {/* Enhanced floating particles with neon glow */}
    <div className="absolute inset-0">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-80 shadow-lg shadow-cyan-400/50"
          animate={{
            x: [0, 200, 0],
            y: [0, -200, 0],
            opacity: [0.4, 1, 0.4],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 5 + i * 0.2,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut"
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
    
    {/* Enhanced gradient orbs with neon glow */}
    <motion.div 
      className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.2, 0.5, 0.2],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    
    <motion.div 
      className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.2, 0.4, 0.2],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    
    {/* Floating geometric shapes */}
    <motion.div 
      className="absolute top-1/3 right-1/4 w-32 h-32 border border-cyan-400/30 rotate-45"
      animate={{
        rotate: [45, 405],
        scale: [1, 1.1, 1],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }}
    />
    
    <motion.div 
      className="absolute bottom-1/3 left-1/4 w-24 h-24 border border-purple-400/30 rounded-full"
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  </div>
);

// Enhanced service card component
const ServiceCard = ({ service, index }: { service: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="group relative bg-gradient-to-br from-slate-800/80 via-slate-700/80 to-slate-800/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2"
  >
    {/* Glowing border effect */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    
    {/* Service header */}
    <div className="relative z-10">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            {service.description}
          </p>
        </div>
        <div className="ml-4 flex flex-col items-end">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-2">
            {service.aiScore}% AI
          </div>
          <div className="text-2xl font-bold text-cyan-400">
            ${service.price.toLocaleString()}
          </div>
        </div>
      </div>
      
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {service.tags.slice(0, 4).map((tag: string, tagIndex: number) => (
          <span
            key={tagIndex}
            className="bg-slate-700/50 text-cyan-300 px-2 py-1 rounded-md text-xs border border-cyan-500/20"
          >
            {tag}
          </span>
        ))}
      </div>
      
      {/* Key metrics */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="text-center">
          <div className="text-cyan-400 text-sm font-semibold">Market Price</div>
          <div className="text-white text-lg font-bold">{service.marketPrice}</div>
        </div>
        <div className="text-center">
          <div className="text-cyan-400 text-sm font-semibold">ROI</div>
          <div className="text-white text-lg font-bold">{service.roi}</div>
        </div>
      </div>
      
      {/* Contact info */}
      <div className="border-t border-slate-600 pt-4">
        <div className="flex items-center justify-between text-sm text-slate-400">
          <div className="flex items-center space-x-2">
            <PhoneIcon className="w-4 h-4" />
            <span>{service.contactInfo.phone}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MailIcon className="w-4 h-4" />
            <span>{service.contactInfo.email}</span>
          </div>
        </div>
      </div>
      
      {/* Action buttons */}
      <div className="flex space-x-3 mt-4">
        <Link
          to={`/services/${service.id}`}
          className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-center transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
        >
          Learn More
        </Link>
        <Link
          to="/contact"
          className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-300"
        >
          Contact
        </Link>
      </div>
    </div>
  </motion.div>
);

// Category filter component
const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }: any) => (
  <div className="flex flex-wrap gap-3 mb-8">
    <button
      onClick={() => onCategoryChange('all')}
      className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
        selectedCategory === 'all'
          ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
          : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 hover:text-white'
      }`}
    >
      All Services
    </button>
    {categories.map((category: string) => (
      <button
        key={category}
        onClick={() => onCategoryChange(category)}
        className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
          selectedCategory === category
            ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
            : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 hover:text-white'
        }`}
      >
        {category}
      </button>
    ))}
  </div>
);

// Hero section component
const HeroSection = () => (
  <section className="relative py-20 px-4 overflow-hidden">
    <FuturisticBackground />
    
    <div className="relative z-10 max-w-7xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
          2029 Services Showcase
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          Discover the future of technology with our cutting-edge AI, quantum computing, and emerging tech solutions. 
          Transform your business with intelligent automation and revolutionary innovations.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25 hover:-translate-y-1"
          >
            Get Started Today
          </Link>
          <Link
            to="/pricing"
            className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
          >
            View Pricing
          </Link>
        </div>
      </motion.div>
      
      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
      >
        <div className="text-center">
          <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
          <div className="text-slate-300">Innovative Services</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-blue-400 mb-2">99%</div>
          <div className="text-slate-300">AI Accuracy</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-purple-400 mb-2">500%</div>
          <div className="text-slate-300">Average ROI</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
          <div className="text-slate-300">Support Available</div>
        </div>
      </motion.div>
    </div>
  </section>
);

// Contact section component
const ContactSection = () => (
  <section className="relative py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <div className="max-w-6xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
          Let's discuss how our cutting-edge AI and emerging technology solutions can drive your business forward. 
          Our experts are ready to help you implement the future today.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <PhoneIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
            <p className="text-cyan-400 font-semibold">+1 302 464 0950</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <MailIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
            <p className="text-purple-400 font-semibold">kleber@ziontechgroup.com</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPinIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
            <p className="text-green-400 font-semibold text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25"
          >
            Schedule a Consultation
          </Link>
          <Link
            to="/request-quote"
            className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
          >
            Request a Quote
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

export default function InnovativeServicesShowcase2029() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');

  // Combine all services
  const allServices = [...INNOVATIVE_MICRO_SAAS_SERVICES_2029, ...EMERGING_TECH_SERVICES_2029];
  
  // Get unique categories
  const categories = Array.from(new Set(allServices.map(service => service.category)));
  
  // Filter services based on category and search
  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <SEO 
        title="2029 Innovative Services Showcase - Zion Tech Group"
        description="Discover cutting-edge AI, quantum computing, and emerging technology solutions. Transform your business with intelligent automation and revolutionary innovations."
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <HeroSection />
        
        {/* Services Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Search and Filters */}
            <div className="mb-8">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
                <div className="relative flex-1 max-w-md">
                  <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                  />
                </div>
                
                <div className="flex items-center space-x-4">
                  <CategoryFilter
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onCategoryChange={setSelectedCategory}
                  />
                  
                  <div className="flex bg-slate-800/50 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-md transition-colors duration-200 ${
                        viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <GridIcon className="w-5 h-5" />
                    </button>
                                          <button
                        onClick={() => setViewMode('list')}
                        className={`p-2 rounded-md transition-colors duration-200 ${
                          viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                      <ListIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {selectedCategory === 'all' ? 'All Services' : selectedCategory} Services
                </h2>
                <p className="text-slate-300 text-lg">
                  {filteredServices.length} services available
                </p>
              </div>
            </div>
            
            {/* Services Grid */}
            <div className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              <AnimatePresence>
                {filteredServices.map((service, index) => (
                  <ServiceCard key={service.id} service={service} index={index} />
                ))}
              </AnimatePresence>
            </div>
            
            {filteredServices.length === 0 && (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-slate-300">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </section>
        
        <ContactSection />
      </div>
    </>
  );
}