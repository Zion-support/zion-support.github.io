import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Database, 
  Users, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Cpu,
  Lock,
  Network,
  Server,
  Globe,
  Rocket,
  Target,
  BarChart3,
  Workflow,
  Leaf,
  Satellite,
  Link as LinkIcon,
  MessageCircle,
  HelpCircle,
  Smartphone,
  ShoppingCart,
  FileText,
  Video,
  GraduationCap,
  TestTube,
  Building2,
  Car,
  Factory,
  Heart,
  DollarSign,
  ShoppingBag,
  Plane,
  Ship,
  Truck,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Star,
  Clock,
  Zap,
  Award,
  Users2,
  Globe2,
  ShieldCheck,
  TrendingDown,
  PieChart,
  LineChart,
  Activity,
  Monitor,
  Smartphone as Mobile,
  Laptop,
  Tablet,
  Watch,
  Camera,
  Microphone,
  Headphones,
  Printer,
  Router,
  HardDrive,
  Memory,
  Battery,
  Wifi,
  Bluetooth,
  Usb,
  Hdmi,
  Vga,
  Dvi,
  DisplayPort,
  Thunderbolt,
  Ethernet,
  Fiber,
  Coaxial,
  Wireless,
  Cellular,
  Satellite2,
  Radar,
  Sonar,
  Lidar,
  Infrared,
  Ultraviolet,
  Xray,
  Gamma,
  Neutron,
  Proton,
  Electron,
  Atom2,
  Molecule,
  Dna,
  Virus,
  Bacteria,
  Cell,
  Tissue,
  Organ,
  System,
  Ecosystem,
  Biosphere,
  Geosphere,
  Hydrosphere,
  Atmosphere,
  Cosmos,
  Universe,
  Galaxy,
  SolarSystem,
  Planet,
  Star2,
  Moon,
  Asteroid,
  Comet,
  Meteor,
  Nebula,
  BlackHole,
  Wormhole,
  TimeMachine,
  Teleporter,
  Portal,
  Gateway,
  Bridge,
  Tunnel,
  Highway,
  Road,
  Street,
  Avenue,
  Boulevard,
  Lane,
  Drive,
  Court,
  Place,
  Square,
  Circle,
  Triangle,
  Rectangle,
  Pentagon,
  Hexagon,
  Octagon,
  Sphere,
  Cube,
  Pyramid,
  Cone,
  Cylinder,
  Prism,
  Torus,
  Mobius,
  Klein,
  Riemann,
  Euler,
  Newton,
  Einstein,
  Tesla,
  Edison,
  Bell,
  Morse,
  Marconi,
  Tesla2,
  Edison2,
  Bell2,
  Morse2,
  Marconi2
} from 'lucide-react';

import { ENHANCED_INNOVATIVE_SERVICES_2025 } from '../data/enhancedInnovativeServices2025';

export default function EnhancedServicesShowcase2025() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Zap, count: ENHANCED_INNOVATIVE_SERVICES_2025.length },
    { id: 'AI Development', name: 'AI Development', icon: Brain, count: ENHANCED_INNOVATIVE_SERVICES_2025.filter(s => s.category === 'AI Development').length },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: Shield, count: ENHANCED_INNOVATIVE_SERVICES_2025.filter(s => s.category === 'Cybersecurity').length },
    { id: 'Cloud Services', name: 'Cloud Services', icon: Cloud, count: ENHANCED_INNOVATIVE_SERVICES_2025.filter(s => s.category === 'Cloud Services').length },
    { id: 'Data Analytics', name: 'Data Analytics', icon: Database, count: ENHANCED_INNOVATIVE_SERVICES_2025.filter(s => s.category === 'Data Analytics').length },
    { id: 'Digital Transformation', name: 'Digital Transformation', icon: Rocket, count: ENHANCED_INNOVATIVE_SERVICES_2025.filter(s => s.category === 'Digital Transformation').length },
    { id: 'IT Infrastructure', name: 'IT Infrastructure', icon: Server, count: ENHANCED_INNOVATIVE_SERVICES_2025.filter(s => s.category === 'IT Infrastructure').length },
    { id: 'Emerging Technologies', name: 'Emerging Technologies', icon: TestTube, count: ENHANCED_INNOVATIVE_SERVICES_2025.filter(s => s.category === 'Emerging Technologies').length }
  ];

  const filteredServices = ENHANCED_INNOVATIVE_SERVICES_2025.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI Development': return Brain;
      case 'Cybersecurity': return Shield;
      case 'Cloud Services': return Cloud;
      case 'Data Analytics': return Database;
      case 'Digital Transformation': return Rocket;
      case 'IT Infrastructure': return Server;
      case 'Emerging Technologies': return TestTube;
      default: return Zap;
    }
  };

  const formatPrice = (price: number) => {
    if (price >= 1000) {
      return `$${(price / 1000).toFixed(0)}K`;
    }
    return `$${price}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Enhanced Innovative Services 2025 - Zion Tech Group"
        description="Discover Zion Tech Group's comprehensive range of enhanced innovative AI, cybersecurity, cloud, and digital transformation services. Transform your business with cutting-edge technology solutions."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Enhanced <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Innovative Services</span> 2025
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Discover our comprehensive portfolio of cutting-edge AI, cybersecurity, cloud, and digital transformation services. 
              Each solution is designed to deliver measurable business value with industry-leading ROI and rapid implementation.
            </p>
            
            {/* Contact Information Banner */}
            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl p-6 border border-cyan-500/30 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-cyan-400" />
                  <div>
                    <p className="text-sm text-gray-300">Phone</p>
                    <p className="text-white font-semibold">+1 302 464 0950</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-6 h-6 text-cyan-400" />
                  <div>
                    <p className="text-sm text-gray-300">Email</p>
                    <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                  <div>
                    <p className="text-sm text-gray-300">Address</p>
                    <p className="text-white font-semibold">364 E Main St STE 1008<br />Middletown DE 19709</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {serviceCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-lg border transition-all duration-300 flex items-center space-x-2 ${
                    activeCategory === category.id
                      ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400'
                      : 'border-slate-600/30 bg-slate-800/50 text-gray-300 hover:border-cyan-500/50 hover:bg-cyan-500/10'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{category.name}</span>
                  <span className="text-xs bg-slate-700 px-2 py-1 rounded-full">{category.count}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              {activeCategory === 'all' ? 'All Enhanced Services' : `${activeCategory} Services`}
            </h2>
            <p className="text-xl text-gray-300">
              {filteredServices.length} innovative solutions designed to transform your business
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/30 hover:border-cyan-500/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                {/* Service Header */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    {React.createElement(getCategoryIcon(service.category), { className: "w-6 h-6 text-white" })}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-400">{service.subcategory}</p>
                  </div>
                </div>
                
                {/* Service Description */}
                <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                
                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2 flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {service.tags.slice(0, 4).map((tag, idx) => (
                      <span key={idx} className="inline-block bg-slate-700/50 text-gray-300 text-xs px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Pricing and ROI */}
                <div className="mb-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Investment:</span>
                    <span className="text-lg font-bold text-cyan-400">{formatPrice(service.price)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Market Price:</span>
                    <span className="text-sm text-gray-300">{service.marketPrice}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">ROI:</span>
                    <span className="text-sm text-green-400 font-semibold">{service.roi}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Setup Time:</span>
                    <span className="text-sm text-gray-300">{service.setupTime}</span>
                  </div>
                </div>

                {/* AI Score and Rating */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Brain className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm text-gray-400">AI Score:</span>
                    <span className="text-sm font-semibold text-cyan-400">{service.aiScore}/100</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-400">{service.rating}</span>
                    <span className="text-xs text-gray-500">({service.reviewCount})</span>
                  </div>
                </div>
                
                {/* Contact and Learn More */}
                <div className="space-y-3">
                  <a
                    href={service.contactInfo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-3 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center justify-center group-hover:scale-105"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                  
                  <div className="flex space-x-2">
                    <a
                      href={`tel:${service.contactInfo.phone}`}
                      className="flex-1 bg-slate-700/50 text-gray-300 px-3 py-2 rounded-lg text-center hover:bg-slate-600/50 transition-colors text-sm flex items-center justify-center"
                    >
                      <Phone className="w-4 h-4 mr-1" />
                      Call
                    </a>
                    <a
                      href={`mailto:${service.contactInfo.email}`}
                      className="flex-1 bg-slate-700/50 text-gray-300 px-3 py-2 rounded-lg text-center hover:bg-slate-600/50 transition-colors text-sm flex items-center justify-center"
                    >
                      <Mail className="w-4 h-4 mr-1" />
                      Email
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-300">Leading the way in innovative technology solutions</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Proven Excellence",
                description: "4.8+ average rating across all services with thousands of satisfied clients worldwide"
              },
              {
                icon: Zap,
                title: "Rapid Implementation",
                description: "Fastest setup times in the industry with most solutions ready in 6-16 weeks"
              },
              {
                icon: TrendingUp,
                title: "Exceptional ROI",
                description: "Average 400%+ ROI within 12-18 months across all our service categories"
              },
              {
                icon: ShieldCheck,
                title: "Enterprise Security",
                description: "Bank-level security with SOC2, ISO27001, and industry-specific compliance certifications"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Global Presence & Expertise</h2>
            <p className="text-xl text-gray-300">Serving clients across 50+ countries with localized expertise</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe2,
                title: "Global Reach",
                description: "50+ countries served with 24/7 support across all time zones"
              },
              {
                icon: Users2,
                title: "Expert Team",
                description: "200+ certified professionals with 10+ years average experience"
              },
              {
                icon: Monitor,
                title: "Technology Stack",
                description: "Cutting-edge AI, cloud, and security technologies from industry leaders"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of successful businesses that have transformed their operations with Zion Tech Group's innovative solutions. 
              Get started today and experience the future of technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center group"
              >
                Start Your Transformation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+13024640950"
                className="bg-transparent border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Call Now: +1 302 464 0950
              </a>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/30 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Get in Touch</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-300">Phone</p>
                  <p className="text-white font-semibold">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-300">Email</p>
                  <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-300">Address</p>
                  <p className="text-white font-semibold">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <a
                  href="https://ziontechgroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Visit our website</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Search icon component
const Search = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);