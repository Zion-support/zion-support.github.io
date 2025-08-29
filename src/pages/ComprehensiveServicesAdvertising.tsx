import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  TrendingUp, 
  Shield, 
  Zap,
  Brain,
  Rocket,
  Atom,
  Cpu,
  Database,
  Cloud,
  Lock,
  Eye,
  Heart,
  Leaf,
  Car,
  Building,
  GraduationCap,
  Gamepad2,
  Workflow,
  Wrench,
  Satellite,
  Microscope,
  DollarSign,
  City
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { COMPREHENSIVE_SERVICES_INDEX_2030 } from '../data/comprehensiveServicesIndex2030';

export default function ComprehensiveServicesAdvertising() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, color: 'from-blue-500 to-cyan-500' },
    { id: 'AI & Business Intelligence', name: 'AI & Business Intelligence', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'AI & Marketing', name: 'AI & Marketing', icon: TrendingUp, color: 'from-green-500 to-emerald-500' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', icon: Heart, color: 'from-pink-500 to-red-500' },
    { id: 'AI & Legal Tech', name: 'AI & Legal Tech', icon: Shield, color: 'from-blue-500 to-indigo-500' },
    { id: 'AI & Real Estate', name: 'AI & Real Estate', icon: Building, color: 'from-yellow-500 to-orange-500' },
    { id: 'AI & Operations', name: 'AI & Operations', icon: Workflow, color: 'from-gray-500 to-slate-500' },
    { id: 'AI & Green Tech', name: 'AI & Green Tech', icon: Leaf, color: 'from-green-500 to-teal-500' },
    { id: 'AI & Autonomous Systems', name: 'AI & Autonomous Systems', icon: Car, color: 'from-cyan-500 to-blue-500' },
    { id: 'AI & FinTech', name: 'AI & FinTech', icon: DollarSign, color: 'from-emerald-500 to-green-500' },
    { id: 'AI & Environmental Tech', name: 'AI & Environmental Tech', icon: Leaf, color: 'from-teal-500 to-green-500' },
    { id: 'AI & Content', name: 'AI & Content', icon: Eye, color: 'from-orange-500 to-red-500' },
    { id: 'AI & Customer Support', name: 'AI & Customer Support', icon: Zap, color: 'from-blue-500 to-purple-500' },
    { id: 'AI & HR', name: 'AI & HR', icon: GraduationCap, color: 'from-indigo-500 to-blue-500' },
    { id: 'AI & Research', name: 'AI & Research', icon: Microscope, color: 'from-purple-500 to-violet-500' },
    { id: 'AI & Metaverse', name: 'AI & Metaverse', icon: Globe, color: 'from-purple-500 to-indigo-500' },
    { id: 'AI & Space Tech', name: 'AI & Space Tech', icon: Satellite, color: 'from-indigo-500 to-purple-500' },
    { id: 'AI & Development', name: 'AI & Development', icon: Cpu, color: 'from-cyan-500 to-blue-500' },
    { id: 'AI & Education', name: 'AI & Education', icon: GraduationCap, color: 'from-blue-500 to-indigo-500' },
    { id: 'AI & Entertainment', name: 'AI & Entertainment', icon: Gamepad2, color: 'from-purple-500 to-pink-500' },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: Lock, color: 'from-red-500 to-orange-500' },
    { id: 'Cloud & DevOps', name: 'Cloud & DevOps', icon: Cloud, color: 'from-blue-500 to-cyan-500' },
    { id: 'Quantum Computing', name: 'Quantum Computing', icon: Atom, color: 'from-indigo-500 to-purple-500' },
    { id: 'IoT & Edge Computing', name: 'IoT & Edge Computing', icon: Database, color: 'from-teal-500 to-cyan-500' },
    { id: 'Blockchain & Web3', name: 'Blockchain & Web3', icon: Zap, color: 'from-yellow-500 to-orange-500' },
    { id: 'Digital Twin', name: 'Digital Twin', icon: Eye, color: 'from-blue-500 to-indigo-500' },
    { id: 'Space Technology', name: 'Space Technology', icon: Rocket, color: 'from-purple-500 to-pink-500' },
    { id: 'Sustainable Technology', name: 'Sustainable Technology', icon: Leaf, color: 'from-green-500 to-teal-500' },
    { id: 'IT Infrastructure', name: 'IT Infrastructure', icon: Building, color: 'from-slate-500 to-gray-500' },
    { id: 'Emerging Technology', name: 'Emerging Technology', icon: Rocket, color: 'from-violet-500 to-purple-500' }
  ];

  const filteredServices = COMPREHENSIVE_SERVICES_INDEX_2030.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (categoryName: string) => {
    const category = categories.find(cat => cat.id === categoryName);
    return category ? category.icon : Globe;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Comprehensive AI & Technology Services 2030 | Zion Tech Group"
        description="Discover our comprehensive portfolio of cutting-edge AI, micro SAAS, IT infrastructure, and emerging technology services. Transform your business with innovative solutions."
        keywords="AI services, micro SAAS, IT infrastructure, emerging technology, quantum computing, blockchain, cybersecurity, Zion Tech Group"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Revolutionary
              </span>
              <br />
              <span className="text-white">Technology Services 2030</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with our comprehensive portfolio of cutting-edge AI, micro SAAS, 
              IT infrastructure, and emerging technology solutions. Stay ahead of the curve with 
              Zion Tech Group's innovative services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2 text-green-400">
                <CheckCircle className="w-5 h-5" />
                <span>100+ Innovative Services</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-400">
                <Star className="w-5 h-5" />
                <span>4.8+ Average Rating</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-400">
                <TrendingUp className="w-5 h-5" />
                <span>500%+ Average ROI</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-white">
            <div className="flex flex-col items-center space-y-2">
              <Phone className="w-6 h-6" />
              <span className="font-semibold">+1 302 464 0950</span>
              <span className="text-sm text-blue-100">Call Us Today</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Mail className="w-6 h-6" />
              <span className="font-semibold">kleber@ziontechgroup.com</span>
              <span className="text-sm text-blue-100">Email Us</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <MapPin className="w-6 h-6" />
              <span className="font-semibold">364 E Main St STE 1008</span>
              <span className="text-sm text-blue-100">Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Service Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From AI-powered business solutions to cutting-edge quantum computing, our services 
              span the entire technology spectrum, delivering measurable results and competitive advantages.
            </p>
          </motion.div>

          {/* Service Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { label: 'Total Services', value: COMPREHENSIVE_SERVICES_INDEX_2030.length, icon: Rocket, color: 'from-blue-500 to-cyan-500' },
              { label: 'AI Services', value: COMPREHENSIVE_SERVICES_INDEX_2030.filter(s => s.category.includes('AI')).length, icon: Brain, color: 'from-purple-500 to-pink-500' },
              { label: 'Emerging Tech', value: COMPREHENSIVE_SERVICES_INDEX_2030.filter(s => s.category === 'Emerging Technology').length, icon: Atom, color: 'from-green-500 to-emerald-500' },
              { label: 'Average ROI', value: '500%+', icon: TrendingUp, color: 'from-yellow-500 to-orange-500' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-6 text-center"
              >
                <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${stat.color} mb-4`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <motion.button
                    key={category.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full border-2 transition-all duration-300 ${
                      activeCategory === category.id
                        ? `bg-gradient-to-r ${category.color} text-white border-transparent`
                        : 'border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span className="text-sm font-medium">{category.name}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Search Bar */}
          <div className="mb-12">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services by name, description, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 bg-slate-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <div className="w-5 h-5 border-2 border-gray-400 rounded-full border-t-transparent animate-spin"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => {
              const IconComponent = getCategoryIcon(service.category);
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
                >
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`inline-flex p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500`}>
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-300">{service.rating}</span>
                    </div>
                  </div>

                  {/* Service Title & Category */}
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full">
                      {service.category}
                    </span>
                    <span className="text-xs px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full">
                      {service.subcategory}
                    </span>
                  </div>

                  {/* Service Description */}
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>

                  {/* Service Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-2 py-1 bg-gray-600 text-gray-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {service.tags.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-gray-600 text-gray-300 rounded-full">
                        +{service.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Service Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-400">{service.currency}{service.price.toLocaleString()}</div>
                      <div className="text-xs text-gray-400">Starting Price</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-400">{service.aiScore}%</div>
                      <div className="text-xs text-gray-400">AI Score</div>
                    </div>
                  </div>

                  {/* Market Price & ROI */}
                  <div className="bg-slate-700/50 rounded-lg p-3 mb-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-400">Market Price:</span>
                      <span className="text-yellow-400 font-semibold">{service.marketPrice}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm mt-1">
                      <span className="text-gray-400">Expected ROI:</span>
                      <span className="text-green-400 font-semibold">{service.roi}</span>
                    </div>
                  </div>

                  {/* Setup Time & Availability */}
                  <div className="flex justify-between items-center text-sm mb-4">
                    <span className="text-gray-400">Setup Time:</span>
                    <span className="text-white">{service.setupTime}</span>
                  </div>

                  {/* Contact & Learn More */}
                  <div className="flex space-x-3">
                    <a
                      href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                      className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center py-2 px-4 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 text-sm font-medium"
                    >
                      Get Quote
                    </a>
                    <a
                      href={service.contactInfo.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-slate-600 text-white text-center py-2 px-4 rounded-lg hover:bg-slate-500 transition-all duration-300 text-sm font-medium"
                    >
                      Learn More
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* No Results Message */}
          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-gray-400 text-lg mb-4">No services found matching your criteria</div>
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setSearchTerm('');
                }}
                className="text-blue-400 hover:text-blue-300 underline"
              >
                View all services
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven business expertise to deliver 
              solutions that drive real results and competitive advantages.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI-First Approach",
                description: "All our services leverage the latest AI technologies to deliver intelligent, adaptive, and scalable solutions.",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: TrendingUp,
                title: "Proven ROI",
                description: "Our services deliver measurable results with an average ROI of 500%+ within the first year of implementation.",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Built-in security features and compliance standards ensure your data and operations remain protected.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Zap,
                title: "Rapid Deployment",
                description: "Quick setup times ranging from 2-32 weeks depending on complexity, with ongoing support and optimization.",
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: Globe,
                title: "Global Reach",
                description: "Services available worldwide with 24/7 support and localized solutions for international markets.",
                color: "from-teal-500 to-green-500"
              },
              {
                icon: Rocket,
                title: "Future-Ready",
                description: "Stay ahead with emerging technologies like quantum computing, blockchain, and space technology.",
                color: "from-indigo-500 to-purple-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${feature.color} mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of companies already leveraging our innovative technology services 
              to gain competitive advantages and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Service Consultation Request"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center space-x-2"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-blue-500 text-blue-400 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 inline-flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}