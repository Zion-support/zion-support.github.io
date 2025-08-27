<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Rocket, 
  Atom, 
  Globe, 
  Zap, 
  Shield, 
  Cpu, 
  Database,
  Search,
  Filter,
  Star,
  TrendingUp,
  DollarSign,
  Clock,
  Users,
  Target,
  Award,
  Phone,
  Mail,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { INNOVATIVE_SERVICES_2027 } from '@/data/innovativeServices2027';
import { EMERGING_TECH_SERVICES_2027 } from '@/data/emergingTechServices2027';
import { SEO } from '@/components/SEO';

// Service category icons mapping
const categoryIcons: Record<string, React.ReactNode> = {
  'Quantum Computing & AI': <Atom className="w-6 h-6" />,
  'Space Technology': <Rocket className="w-6 h-6" />,
  'Neural Technology': <Brain className="w-6 h-6" />,
  'Biotechnology': <Database className="w-6 h-6" />,
  'Robotics & Automation': <Cpu className="w-6 h-6" />,
  'Quantum Technology': <Atom className="w-6 h-6" />,
  'Fusion Energy': <Zap className="w-6 h-6" />,
  'Metaverse & VR': <Globe className="w-6 h-6" />,
  'Materials Science': <Shield className="w-6 h-6" />
};

// Service category colors
const categoryColors: Record<string, string> = {
  'Quantum Computing & AI': 'from-purple-500 to-cyan-500',
  'Space Technology': 'from-blue-500 to-indigo-600',
  'Neural Technology': 'from-pink-500 to-rose-500',
  'Biotechnology': 'from-green-500 to-emerald-600',
  'Robotics & Automation': 'from-orange-500 to-red-500',
  'Quantum Technology': 'from-purple-500 to-cyan-500',
  'Fusion Energy': 'from-yellow-500 to-orange-500',
  'Metaverse & VR': 'from-indigo-500 to-purple-600',
  'Materials Science': 'from-teal-500 to-blue-600'
};

const InnovativeServicesShowcase2027: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedInnovationLevel, setSelectedInnovationLevel] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');

  // Combine all services
  const allServices = [...INNOVATIVE_SERVICES_2027, ...EMERGING_TECH_SERVICES_2027];

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];

  // Get unique innovation levels
  const innovationLevels = ['all', ...Array.from(new Set(allServices.map(service => service.innovationLevel)))];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesInnovation = selectedInnovationLevel === 'all' || service.innovationLevel === selectedInnovationLevel;
      
      return matchesSearch && matchesCategory && matchesInnovation;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return b.price - a.price;
        case 'innovation':
          const innovationOrder = { 'Revolutionary': 3, 'Breakthrough': 2, 'Advanced': 1 };
          return (innovationOrder[b.innovationLevel as keyof typeof innovationOrder] || 0) - 
                 (innovationOrder[a.innovationLevel as keyof typeof innovationOrder] || 0);
        case 'roi':
          const roiA = parseInt(a.roi.replace('%', ''));
          const roiB = parseInt(b.roi.replace('%', ''));
          return roiB - roiA;
        default:
          return a.title.localeCompare(b.title);
      }
    });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
=======
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
>>>>>>> b146bf389fafde756de41032cd8eb59c97440d83

const InnovativeServicesShowcase2027 = () => {
  return (
<<<<<<< HEAD
    <>
      <SEO 
        title="Innovative Services 2027 - Zion Tech Group"
        description="Discover cutting-edge micro SAAS, IT, and AI services that will revolutionize your business. From quantum computing to space technology."
        keywords="innovative services, micro SAAS, AI services, IT solutions, quantum computing, space technology, neural technology"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 via-zion-cyan/20 to-zion-blue/20"></div>
          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Innovative Services <span className="text-zion-cyan">2027</span>
              </h1>
              <p className="text-xl md:text-2xl text-zion-cyan/90 mb-8 max-w-4xl mx-auto">
                Revolutionary micro SAAS, IT, and AI solutions that will transform your business and create competitive advantages
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="px-6 py-3 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full text-zion-cyan">
                  <span className="font-semibold">{allServices.length}+</span> Services
                </div>
                <div className="px-6 py-3 bg-zion-purple/20 border border-zion-purple/30 rounded-full text-zion-purple">
                  <span className="font-semibold">Revolutionary</span> Innovation
                </div>
                <div className="px-6 py-3 bg-zion-blue/20 border border-zion-blue/30 rounded-full text-zion-blue">
                  <span className="font-semibold">Future-Proof</span> Solutions
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-zion-slate/50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Search */}
              <div className="lg:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-cyan/50 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services, features, or benefits..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-zion-slate border border-zion-cyan/30 rounded-lg text-white placeholder-zion-cyan/50 focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-zion-slate border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Innovation Level Filter */}
              <div>
                <select
                  value={selectedInnovationLevel}
                  onChange={(e) => setSelectedInnovationLevel(e.target.value)}
                  className="w-full px-4 py-3 bg-zion-slate border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                >
                  {innovationLevels.map(level => (
                    <option key={level} value={level}>
                      {level === 'all' ? 'All Innovation Levels' : level}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Sort Options */}
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => setSortBy('name')}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  sortBy === 'name' 
                    ? 'bg-zion-cyan text-white' 
                    : 'bg-zion-slate border border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan/10'
                }`}
              >
                Sort by Name
              </button>
              <button
                onClick={() => setSortBy('price')}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  sortBy === 'price' 
                    ? 'bg-zion-cyan text-white' 
                    : 'bg-zion-slate border border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan/10'
                }`}
              >
                Sort by Price
              </button>
              <button
                onClick={() => setSortBy('innovation')}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  sortBy === 'innovation' 
                    ? 'bg-zion-cyan text-white' 
                    : 'bg-zion-slate border border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan/10'
                }`}
              >
                Sort by Innovation
              </button>
              <button
                onClick={() => setSortBy('roi')}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  sortBy === 'roi' 
                    ? 'bg-zion-cyan text-white' 
                    : 'bg-zion-slate border border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan/10'
                }`}
              >
                Sort by ROI
              </button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-zion-slate border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 hover:shadow-2xl hover:shadow-zion-cyan/20 transition-all duration-300 transform hover:-translate-y-2"
                  >
                    {/* Service Header */}
                    <div className="mb-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${categoryColors[service.category] || 'from-gray-500 to-gray-600'}`}>
                          {categoryIcons[service.category] || <Star className="w-6 h-6 text-white" />}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">
                              {service.innovationLevel}
                            </span>
                            <span className="px-2 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded-full">
                              {service.category}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-zion-cyan/80 text-sm leading-relaxed">{service.description}</p>
                    </div>

                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                        <Target className="w-4 h-4 text-zion-cyan" />
                        Key Features
                      </h4>
                      <div className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-zion-cyan/70">
                            <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                            {feature}
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <div className="text-xs text-zion-cyan/50">
                            +{service.features.length - 3} more features
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Pricing & ROI */}
                    <div className="mb-4 p-4 bg-zion-slate-light rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-semibold">Starting Price</span>
                        <span className="text-2xl font-bold text-zion-cyan">${service.price.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white font-semibold">Expected ROI</span>
                        <span className="text-lg font-bold text-zion-purple">{service.roi}</span>
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                        <Award className="w-4 h-4 text-zion-cyan" />
                        Key Benefits
                      </h4>
                      <div className="space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-zion-cyan/70">
                            <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="mb-4 p-3 bg-zion-slate-light rounded-lg">
                      <div className="text-center text-sm text-zion-cyan/70 mb-2">Ready to get started?</div>
                      <div className="flex items-center justify-center gap-2 text-xs text-zion-cyan/60">
                        <Phone className="w-3 h-3" />
                        <span>+1 302 464 0950</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-xs text-zion-cyan/60">
                        <Mail className="w-3 h-3" />
                        <span>kleber@ziontechgroup.com</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <a
                      href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}`}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 transform hover:scale-105"
                    >
                      Get Started
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* No Results Message */}
            {filteredServices.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-zion-cyan/70">Try adjusting your search criteria or filters</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-zion-cyan/90 mb-8">
                Let's discuss how our innovative services can drive your success and create competitive advantages
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Phone className="w-8 h-8 text-zion-cyan mx-auto mb-2" />
                  <div className="text-white font-semibold">Call Us</div>
                  <div className="text-zion-cyan/80">+1 302 464 0950</div>
                </div>
                <div className="text-center">
                  <Mail className="w-8 h-8 text-zion-cyan mx-auto mb-2" />
                  <div className="text-white font-semibold">Email Us</div>
                  <div className="text-zion-cyan/80">kleber@ziontechgroup.com</div>
                </div>
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-zion-cyan mx-auto mb-2" />
                  <div className="text-white font-semibold">Visit Us</div>
                  <div className="text-zion-cyan/80">364 E Main St STE 1008<br />Middletown DE 19709</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=Innovative Services Consultation"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Consultation
                  <ExternalLink className="w-5 h-5" />
                </a>
                <a
                  href="https://ziontechgroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  Visit Website
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
=======
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-20"
      >
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Innovative Services 2027
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Cutting-edge solutions for the future of business
          </p>
        </div>
      </motion.div>
    </div>
>>>>>>> b146bf389fafde756de41032cd8eb59c97440d83
  );
};

export default InnovativeServicesShowcase2027;