import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Users, 
  Zap, 
  Shield, 
  BarChart3, 
  Globe, 
  Cpu, 
  Database, 
  Cloud,
  Brain,
  Network,
  Leaf,
  Heart,
  DollarSign,
  Eye,
  Target,
  CheckCircle,
  Clock,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Rocket,
  Lock,
  ChartBar,
  Cog,
  Lightbulb,
  Atom,
  Satellite,
  Car,
  Building,
  Wifi,
  Server,
  Search,
  Filter,
  Grid,
  List
} from 'lucide-react';
import { revolutionary2029MicroSAASServices } from '../../data/revolutionary-2029-micro-saas-expansion';
import { revolutionary2029ITInfrastructureServices } from '../../data/revolutionary-2029-it-infrastructure-cybersecurity';
import { revolutionary2029EmergingTechServices } from '../../data/revolutionary-2029-emerging-tech-ai-services';

export function Revolutionary2029ServicesOverview() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('revolutionary-2029-services-overview');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  // Combine all services
  const allServices = [
    ...revolutionary2029MicroSAASServices,
    ...revolutionary2029ITInfrastructureServices,
    ...revolutionary2029EmergingTechServices
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: <Sparkles className="h-5 w-5" />, color: 'from-zion-cyan to-zion-purple', count: allServices.length },
    { id: 'AI & Marketing', name: 'AI & Marketing', icon: <Brain className="h-5 w-5" />, color: 'from-purple-500 to-pink-500', count: allServices.filter(s => s.category === 'AI & Marketing').length },
    { id: 'AI & Customer Service', name: 'AI & Customer Service', icon: <Users className="h-5 w-5" />, color: 'from-blue-500 to-cyan-500', count: allServices.filter(s => s.category === 'AI & Customer Service').length },
    { id: 'AI & Sales', name: 'AI & Sales', icon: <TrendingUp className="h-5 w-5" />, color: 'from-green-500 to-emerald-500', count: allServices.filter(s => s.category === 'AI & Sales').length },
    { id: 'AI & Project Management', name: 'AI & Project Management', icon: <Cog className="h-5 w-5" />, color: 'from-orange-500 to-red-500', count: allServices.filter(s => s.category === 'AI & Project Management').length },
    { id: 'AI & Finance', name: 'AI & Finance', icon: <DollarSign className="h-5 w-5" />, color: 'from-yellow-500 to-amber-500', count: allServices.filter(s => s.category === 'AI & Finance').length },
    { id: 'AI & HR', name: 'AI & HR', icon: <Users className="h-5 w-5" />, color: 'from-indigo-500 to-purple-500', count: allServices.filter(s => s.category === 'AI & HR').length },
    { id: 'AI & E-commerce', name: 'AI & E-commerce', icon: <ShoppingCart className="h-5 w-5" />, color: 'from-teal-500 to-cyan-500', count: allServices.filter(s => s.category === 'AI & E-commerce').length },
    { id: 'AI & Education', name: 'AI & Education', icon: <GraduationCap className="h-5 w-5" />, color: 'from-emerald-500 to-green-500', count: allServices.filter(s => s.category === 'AI & Education').length },
    { id: 'AI & Legal Tech', name: 'AI & Legal Tech', icon: <Scale className="h-5 w-5" />, color: 'from-slate-500 to-gray-500', count: allServices.filter(s => s.category === 'AI & Legal Tech').length },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', icon: <Heart className="h-5 w-5" />, color: 'from-red-500 to-pink-500', count: allServices.filter(s => s.category === 'AI & Healthcare').length },
    { id: 'Cybersecurity & Quantum', name: 'Cybersecurity', icon: <Shield className="h-5 w-5" />, color: 'from-purple-500 to-indigo-500', count: allServices.filter(s => s.category === 'Cybersecurity & Quantum').length },
    { id: 'Cloud & Infrastructure', name: 'Cloud & Infrastructure', icon: <Cloud className="h-5 w-5" />, color: 'from-blue-500 to-cyan-500', count: allServices.filter(s => s.category === 'Cloud & Infrastructure').length },
    { id: 'IoT & Edge Computing', name: 'IoT & Edge', icon: <Zap className="h-5 w-5" />, color: 'from-green-500 to-emerald-500', count: allServices.filter(s => s.category === 'IoT & Edge Computing').length },
    { id: 'Blockchain & Web3', name: 'Blockchain & Web3', icon: <Network className="h-5 w-5" />, color: 'from-indigo-500 to-purple-500', count: allServices.filter(s => s.category === 'Blockchain & Web3').length },
    { id: 'Network Security', name: 'Network Security', icon: <Lock className="h-5 w-5" />, color: 'from-red-500 to-orange-500', count: allServices.filter(s => s.category === 'Network Security').length },
    { id: 'Quantum Computing', name: 'Quantum Computing', icon: <Atom className="h-5 w-5" />, color: 'from-purple-500 to-pink-500', count: allServices.filter(s => s.category === 'Quantum Computing').length },
    { id: 'Data Center & Infrastructure', name: 'Data Center', icon: <Server className="h-5 w-5" />, color: 'from-gray-500 to-slate-500', count: allServices.filter(s => s.category === 'Data Center & Infrastructure').length },
    { id: '5G & Telecommunications', name: '5G & Telecom', icon: <Wifi className="h-5 w-5" />, color: 'from-cyan-500 to-blue-500', count: allServices.filter(s => s.category === '5G & Telecommunications').length },
    { id: 'Autonomous Systems & Robotics', name: 'Autonomous Systems', icon: <Car className="h-5 w-5" />, color: 'from-blue-500 to-indigo-500', count: allServices.filter(s => s.category === 'Autonomous Systems & Robotics').length },
    { id: 'Space Technology', name: 'Space Technology', icon: <Satellite className="h-5 w-5" />, color: 'from-purple-500 to-pink-500', count: allServices.filter(s => s.category === 'Space Technology').length },
    { id: 'Biotechnology & Healthcare', name: 'Biotechnology', icon: <Dna className="h-5 w-5" />, color: 'from-green-500 to-emerald-500', count: allServices.filter(s => s.category === 'Biotechnology & Healthcare').length },
    { id: 'Climate Technology & Sustainability', name: 'Climate Tech', icon: <Leaf className="h-5 w-5" />, color: 'from-emerald-500 to-teal-500', count: allServices.filter(s => s.category === 'Climate Technology & Sustainability').length },
    { id: 'Metaverse & VR/AR', name: 'Metaverse & VR/AR', icon: <Eye className="h-5 w-5" />, color: 'from-indigo-500 to-purple-500', count: allServices.filter(s => s.category === 'Metaverse & VR/AR').length },
    { id: 'Quantum AI & Machine Learning', name: 'Quantum AI & ML', icon: <Brain className="h-5 w-5" />, color: 'from-purple-500 to-pink-500', count: allServices.filter(s => s.category === 'Quantum AI & Machine Learning').length },
    { id: 'Digital Twin & Simulation', name: 'Digital Twin', icon: <RefreshCw className="h-5 w-5" />, color: 'from-cyan-500 to-blue-500', count: allServices.filter(s => s.category === 'Digital Twin & Simulation').length },
    { id: 'Neuromorphic Computing', name: 'Neuromorphic', icon: <Brain className="h-5 w-5" />, color: 'from-pink-500 to-rose-500', count: allServices.filter(s => s.category === 'Neuromorphic Computing').length }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div id="revolutionary-2029-services-overview" className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-zion-slate-dark/80 via-zion-slate/60 to-zion-blue-dark/80">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Rocket className="h-12 w-12 text-zion-cyan" />
              <h1 className="text-5xl font-bold tracking-tight text-white">
                Revolutionary 2029 Services
              </h1>
            </div>
            <p className="text-xl text-zion-cyan/80 max-w-4xl mx-auto mb-8">
              Discover our comprehensive portfolio of cutting-edge micro SAAS, IT infrastructure, and AI services. 
              Each service is built with real technology, competitive pricing, and proven ROI to transform your business.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan mb-2">{allServices.length}+</div>
                <div className="text-zion-cyan/70">Services Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan mb-2">25+</div>
                <div className="text-zion-cyan/70">Technology Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan mb-2">$2.5T+</div>
                <div className="text-zion-cyan/70">Total Market Size</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan mb-2">24/7</div>
                <div className="text-zion-cyan/70">Expert Support</div>
              </div>
            </div>
          </motion.div>

          {/* Contact Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-2xl p-8"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-6">
                <div className="flex flex-col items-center gap-2">
                  <Phone className="h-8 w-8 text-zion-cyan" />
                  <span className="text-white font-semibold text-lg">+1 302 464 0950</span>
                  <span className="text-zion-cyan/70">24/7 Support</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Mail className="h-8 w-8 text-zion-cyan" />
                  <span className="text-white font-semibold text-lg">kleber@ziontechgroup.com</span>
                  <span className="text-zion-cyan/70">Expert Consultation</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <MapPin className="h-8 w-8 text-zion-cyan" />
                  <span className="text-white font-semibold text-lg">364 E Main St STE 1008</span>
                  <span className="text-zion-cyan/70">Middletown DE 19709</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  <Phone className="h-5 w-5" />
                  Call Now: +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center gap-2 bg-zion-slate-dark/50 border border-zion-cyan/30 text-zion-cyan px-8 py-4 rounded-xl font-semibold hover:bg-zion-slate-dark/70 transition-all duration-300"
                >
                  <Mail className="h-5 w-5" />
                  Email Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col lg:flex-row gap-6 items-center justify-between"
          >
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zion-cyan/50" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/30 rounded-xl text-white placeholder-zion-cyan/50 focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === 'grid' 
                    ? 'bg-zion-cyan text-white' 
                    : 'bg-zion-slate-dark/50 text-zion-cyan/70 hover:text-zion-cyan'
                }`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === 'list' 
                    ? 'bg-zion-cyan text-white' 
                    : 'bg-zion-slate-dark/50 text-zion-cyan/70 hover:text-zion-cyan'
                }`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} border-transparent text-white shadow-lg`
                    : 'border-zion-cyan/30 text-zion-cyan/70 hover:border-zion-cyan/50 hover:text-zion-cyan'
                }`}
              >
                {category.icon}
                <span className="text-sm font-medium">{category.name}</span>
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">{category.count}</span>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Display */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-4">
              {filteredServices.length} Services Found
            </h2>
            <p className="text-zion-cyan/70 text-center">
              {activeCategory !== 'all' ? `Showing ${activeCategory} services` : 'Showing all services'}
            </p>
          </motion.div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredServices.map((service, index) => (
                <ServiceListCard key={service.id} service={service} index={index} />
              ))}
            </div>
          )}

          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-zion-cyan/50 text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-zion-cyan/70">Try adjusting your search terms or category filter</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-2xl p-12">
              <h3 className="text-3xl font-bold text-white mb-6">
                Ready to Transform Your Business with Revolutionary 2029 Technology?
              </h3>
              <p className="text-zion-cyan/80 mb-8 max-w-3xl mx-auto text-lg">
                Join thousands of businesses already leveraging our cutting-edge AI, IT infrastructure, and micro SAAS solutions. 
                Get started with a free trial and see the difference today.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-10 py-5 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  <Phone className="h-6 w-6" />
                  Call Now: +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center gap-3 bg-zion-slate-dark/50 border border-zion-cyan/30 text-zion-cyan px-10 py-5 rounded-xl font-semibold text-lg hover:bg-zion-slate-dark/70 transition-all duration-300"
                >
                  <Mail className="h-6 w-6" />
                  Email Us
                </a>
              </div>
              <div className="text-sm text-zion-cyan/60">
                <p>Visit our headquarters: 364 E Main St STE 1008, Middletown DE 19709</p>
                <p>Website: <a href="https://ziontechgroup.com" className="text-zion-cyan hover:text-white transition-colors duration-300">https://ziontechgroup.com</a></p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Service Card Component for Grid View
function ServiceCard({ service, index }: { service: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-gradient-to-br from-zion-slate/50 to-zion-slate-dark/50 border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20"
    >
      {/* Popular Badge */}
      {service.popular && (
        <div className="absolute -top-3 left-6 bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-3 py-1 rounded-full text-xs font-bold">
          Popular
        </div>
      )}

      {/* Service Header */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
          <span className="text-3xl">{service.icon}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
          {service.name}
        </h3>
        <p className="text-zion-cyan/70 text-sm leading-relaxed">
          {service.tagline}
        </p>
      </div>

      {/* Price */}
      <div className="text-center mb-6">
        <div className="text-3xl font-bold text-white mb-1">
          {service.price}
          <span className="text-lg text-zion-cyan/70">{service.period}</span>
        </div>
        <div className="text-sm text-zion-cyan/60">
          {service.trialDays}-day free trial • Setup in {service.setupTime}
        </div>
      </div>

      {/* Features */}
      <div className="mb-6">
        <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
          <CheckCircle className="h-4 w-4 text-zion-cyan" />
          Key Features
        </h4>
        <ul className="space-y-2">
          {service.features.slice(0, 4).map((feature: string, idx: number) => (
            <li key={idx} className="text-sm text-zion-cyan/80 flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0" />
              {feature}
            </li>
          ))}
          {service.features.length > 4 && (
            <li className="text-sm text-zion-cyan/60 text-center">
              +{service.features.length - 4} more features
            </li>
          )}
        </ul>
      </div>

      {/* Market Position */}
      <div className="mb-6 p-4 bg-zion-slate-dark/30 rounded-xl border border-zion-cyan/10">
        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
          <Target className="h-4 w-4 text-zion-cyan" />
          Market Position
        </h4>
        <p className="text-sm text-zion-cyan/80 leading-relaxed">
          {service.marketPosition}
        </p>
      </div>

      {/* ROI & Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center p-3 bg-zion-slate-dark/30 rounded-xl border border-zion-cyan/10">
          <div className="text-lg font-bold text-zion-cyan">{service.customers.toLocaleString()}+</div>
          <div className="text-xs text-zion-cyan/70">Customers</div>
        </div>
        <div className="text-center p-3 bg-zion-slate-dark/30 rounded-xl border border-zion-cyan/10">
          <div className="text-lg font-bold text-zion-cyan">{service.rating}</div>
          <div className="text-xs text-zion-cyan/70">Rating ({service.reviews.toLocaleString()})</div>
        </div>
      </div>

      {/* ROI Statement */}
      <div className="mb-6 p-4 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 rounded-xl border border-zion-cyan/20">
        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-zion-cyan" />
          ROI Impact
        </h4>
        <p className="text-sm text-zion-cyan/90 leading-relaxed">
          {service.roi}
        </p>
      </div>

      {/* CTA Button */}
      <div className="text-center">
        <Link
          to={service.link}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 group-hover:scale-105"
        >
          Get Started
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>

      {/* Contact Info */}
      <div className="mt-6 pt-4 border-t border-zion-cyan/20">
        <div className="text-center text-sm text-zion-cyan/60">
          <p>Questions? Contact our experts</p>
          <div className="flex items-center justify-center gap-4 mt-2">
            <a
              href={`tel:${service.contactInfo.mobile}`}
              className="flex items-center gap-1 text-zion-cyan hover:text-white transition-colors duration-300"
            >
              <Phone className="h-3 w-3" />
              {service.contactInfo.mobile}
            </a>
            <a
              href={`mailto:${service.contactInfo.email}`}
              className="flex items-center gap-1 text-zion-cyan hover:text-white transition-colors duration-300"
            >
              <Mail className="h-3 w-3" />
              {service.contactInfo.email}
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Service List Card Component for List View
function ServiceListCard({ service, index }: { service: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-gradient-to-r from-zion-slate/50 to-zion-slate-dark/50 border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20"
    >
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Side - Icon and Basic Info */}
        <div className="flex-shrink-0 text-center lg:text-left">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
            <span className="text-4xl">{service.icon}</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
            {service.name}
          </h3>
          <p className="text-zion-cyan/70 text-lg leading-relaxed mb-4">
            {service.tagline}
          </p>
          <div className="text-center lg:text-left">
            <div className="text-4xl font-bold text-white mb-1">
              {service.price}
              <span className="text-xl text-zion-cyan/70">{service.period}</span>
            </div>
            <div className="text-sm text-zion-cyan/60">
              {service.trialDays}-day free trial • Setup in {service.setupTime}
            </div>
          </div>
        </div>

        {/* Right Side - Details */}
        <div className="flex-1">
          {/* Features */}
          <div className="mb-6">
            <h4 className="text-white font-semibold mb-3 flex items-center gap-2 text-lg">
              <CheckCircle className="h-5 w-5 text-zion-cyan" />
              Key Features
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {service.features.map((feature: string, idx: number) => (
                <div key={idx} className="text-sm text-zion-cyan/80 flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Market Position and ROI */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="p-4 bg-zion-slate-dark/30 rounded-xl border border-zion-cyan/10">
              <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                <Target className="h-4 w-4 text-zion-cyan" />
                Market Position
              </h4>
              <p className="text-sm text-zion-cyan/80 leading-relaxed">
                {service.marketPosition}
              </p>
            </div>
            <div className="p-4 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 rounded-xl border border-zion-cyan/20">
              <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-zion-cyan" />
                ROI Impact
              </h4>
              <p className="text-sm text-zion-cyan/90 leading-relaxed">
                {service.roi}
              </p>
            </div>
          </div>

          {/* Stats and CTA */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-zion-slate-dark/30 rounded-xl border border-zion-cyan/10">
                <div className="text-lg font-bold text-zion-cyan">{service.customers.toLocaleString()}+</div>
                <div className="text-xs text-zion-cyan/70">Customers</div>
              </div>
              <div className="text-center p-3 bg-zion-slate-dark/30 rounded-xl border border-zion-cyan/10">
                <div className="text-lg font-bold text-zion-cyan">{service.rating}</div>
                <div className="text-xs text-zion-cyan/70">Rating ({service.reviews.toLocaleString()})</div>
              </div>
            </div>
            <div className="text-center">
              <Link
                to={service.link}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 group-hover:scale-105"
              >
                Get Started
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-6 pt-4 border-t border-zion-cyan/20">
            <div className="text-center text-sm text-zion-cyan/60">
              <p>Questions? Contact our experts</p>
              <div className="flex items-center justify-center gap-6 mt-2">
                <a
                  href={`tel:${service.contactInfo.mobile}`}
                  className="flex items-center gap-1 text-zion-cyan hover:text-white transition-colors duration-300"
                >
                  <Phone className="h-4 w-4" />
                  {service.contactInfo.mobile}
                </a>
                <a
                  href={`mailto:${service.contactInfo.email}`}
                  className="flex items-center gap-1 text-zion-cyan hover:text-white transition-colors duration-300"
                >
                  <Mail className="h-4 w-4" />
                  {service.contactInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Missing icon components
const ShoppingCart = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
  </svg>
);

const GraduationCap = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-1.998 12.078 12.078 0 01.665-6.479L12 14z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-1.998 12.078 12.078 0 01.665-6.479L12 14z" />
  </svg>
);

const Scale = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
  </svg>
);

const Dna = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const RefreshCw = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);