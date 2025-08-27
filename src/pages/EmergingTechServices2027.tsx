import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
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
  ExternalLink,
  CheckCircle,
  X,
  ChevronDown,
  ChevronUp,
  Info,
  Zap,
  Shield,
  Cpu,
  Brain,
  Rocket,
  Atom,
  Globe,
  Database,
  Eye,
  Lightbulb,
  Sparkles
} from 'lucide-react';
import { EMERGING_TECH_SERVICES_2027 } from '@/data/emergingTechServices2027';
import { SEO } from '@/components/SEO';

// Service category icons mapping
const categoryIcons: Record<string, React.ReactNode> = {
  'Quantum Technology': <Atom className="w-6 h-6" />,
  'Fusion Energy': <Zap className="w-6 h-6" />,
  'Neural Technology': <Brain className="w-6 h-6" />,
  'Metaverse & VR': <Globe className="w-6 h-6" />,
  'Materials Science': <Shield className="w-6 h-6" />
};

// Service category colors
const categoryColors: Record<string, string> = {
  'Quantum Technology': 'from-purple-500 to-cyan-500',
  'Fusion Energy': 'from-yellow-500 to-orange-500',
  'Neural Technology': 'from-pink-500 to-rose-500',
  'Metaverse & VR': 'from-indigo-500 to-purple-600',
  'Materials Science': 'from-teal-500 to-blue-600'
};

const EmergingTechServices2027: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedInnovationLevel, setSelectedInnovationLevel] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(EMERGING_TECH_SERVICES_2027.map(service => service.category)))];

  // Get unique innovation levels
  const innovationLevels = ['all', ...Array.from(new Set(EMERGING_TECH_SERVICES_2027.map(service => service.innovationLevel)))];

  // Filter and sort services
  const filteredServices = EMERGING_TECH_SERVICES_2027
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

  const toggleServiceExpansion = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  const getPriceRangeColor = (price: number) => {
    if (price < 20000) return 'text-green-400';
    if (price < 40000) return 'text-yellow-400';
    if (price < 60000) return 'text-orange-400';
    return 'text-red-400';
  };

  return (
    <>
      <SEO 
        title="Emerging Technology Services 2027 | Zion Tech Group"
        description="Discover our cutting-edge emerging technology services including Quantum Internet, Fusion Energy, Neural Interfaces, Metaverse Development, and Advanced Materials Discovery."
        keywords="emerging technology, quantum internet, fusion energy, neural interfaces, metaverse, materials science, breakthrough technology"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <Sparkles className="w-12 h-12 text-zion-cyan" />
                <h1 className="text-5xl md:text-7xl font-bold text-white">
                  <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                    Emerging
                  </span>
                  <br />
                  <span className="text-4xl md:text-5xl">Technology Services</span>
                </h1>
                <Sparkles className="w-12 h-12 text-zion-cyan" />
              </div>
              <p className="text-xl md:text-2xl text-zion-cyan/90 mb-8 max-w-4xl mx-auto">
                Pioneering the future with breakthrough technologies that will transform industries and redefine what's possible
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-zion-cyan/80">
                <span className="flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  Future-Proof Solutions
                </span>
                <span className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Breakthrough Innovation
                </span>
                <span className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  Industry Leadership
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Technology Overview Section */}
        <section className="py-16 bg-black/30">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Revolutionary Technologies
              </h2>
              <p className="text-zion-cyan/80 text-lg">
                Explore the cutting-edge technologies that will shape the future
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Atom className="w-12 h-12" />,
                  title: "Quantum Technology",
                  description: "Revolutionary quantum computing and communication systems",
                  color: "from-purple-500 to-cyan-500"
                },
                {
                  icon: <Zap className="w-12 h-12" />,
                  title: "Fusion Energy",
                  description: "Clean, unlimited energy for a sustainable future",
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  icon: <Brain className="w-12 h-12" />,
                  title: "Neural Technology",
                  description: "Brain-computer interfaces and cognitive enhancement",
                  color: "from-pink-500 to-rose-500"
                },
                {
                  icon: <Globe className="w-12 h-12" />,
                  title: "Metaverse & VR",
                  description: "Immersive digital worlds and experiences",
                  color: "from-indigo-500 to-purple-600"
                },
                {
                  icon: <Shield className="w-12 h-12" />,
                  title: "Materials Science",
                  description: "AI-powered discovery of breakthrough materials",
                  color: "from-teal-500 to-blue-600"
                }
              ].map((tech, index) => (
                <motion.div
                  key={tech.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-zion-slate/80 to-zion-slate-dark/80 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/50 transition-all duration-300 text-center"
                >
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${tech.color} rounded-full mb-4 mx-auto`}>
                    <div className="text-white">
                      {tech.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{tech.title}</h3>
                  <p className="text-zion-cyan/80 text-sm">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-black/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-cyan/60 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-zion-slate/50 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-cyan/60 focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                />
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-zion-slate/50 border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-zion-slate text-white">
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>

              {/* Innovation Level Filter */}
              <select
                value={selectedInnovationLevel}
                onChange={(e) => setSelectedInnovationLevel(e.target.value)}
                className="px-4 py-3 bg-zion-slate/50 border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
              >
                {innovationLevels.map(level => (
                  <option key={level} value={level} className="bg-zion-slate text-white">
                    {level === 'all' ? 'All Innovation Levels' : level}
                  </option>
                ))}
              </select>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-zion-slate/50 border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="innovation">Sort by Innovation Level</option>
                <option value="roi">Sort by ROI</option>
              </select>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Emerging Technology Services
              </h2>
              <p className="text-zion-cyan/80 text-lg">
                Discover our revolutionary services that are shaping the future
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <AnimatePresence>
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative bg-gradient-to-br from-zion-slate/80 to-zion-slate-dark/80 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20"
                  >
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${categoryColors[service.category]} text-white`}>
                        {categoryIcons[service.category]}
                        {service.category.split(' ')[0]}
                      </div>
                    </div>

                    {/* Innovation Level Badge */}
                    <div className="absolute top-4 left-4">
                      <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                        service.innovationLevel === 'Revolutionary' ? 'bg-gradient-to-r from-red-500 to-pink-500' :
                        service.innovationLevel === 'Breakthrough' ? 'bg-gradient-to-r from-purple-500 to-indigo-500' :
                        'bg-gradient-to-r from-blue-500 to-cyan-500'
                      } text-white`}>
                        {service.innovationLevel === 'Revolutionary' ? '🔥' : 
                         service.innovationLevel === 'Breakthrough' ? '⚡' : '🚀'}
                        {service.innovationLevel}
                      </div>
                    </div>

                    {/* Service Content */}
                    <div className="mt-8">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-zion-cyan/80 text-sm mb-4 line-clamp-3">
                        {service.description}
                      </p>

                      {/* Key Features */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features:</h4>
                        <div className="space-y-1">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-zion-cyan/70">
                              <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Pricing and ROI */}
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="text-center p-3 bg-zion-slate/50 rounded-lg">
                          <div className={`text-lg font-bold ${getPriceRangeColor(service.price)}`}>
                            ${service.price.toLocaleString()}
                          </div>
                          <div className="text-xs text-zion-cyan/70">
                            {service.pricingModel}
                          </div>
                        </div>
                        <div className="text-center p-3 bg-zion-slate/50 rounded-lg">
                          <div className="text-lg font-bold text-zion-cyan">
                            {service.roi}
                          </div>
                          <div className="text-xs text-zion-cyan/70">ROI</div>
                        </div>
                      </div>

                      {/* Benefits */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Benefits:</h4>
                        <div className="space-y-1">
                          {service.benefits.slice(0, 2).map((benefit, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-zion-cyan/70">
                              <Target className="w-3 h-3" />
                              {benefit}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Contact Information */}
                      <div className="border-t border-zion-cyan/20 pt-4">
                        <div className="flex items-center justify-between text-xs text-zion-cyan/70 mb-2">
                          <span>Contact for details:</span>
                          <span>{service.contactInfo.phone}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-zion-cyan/70">
                          <Mail className="w-3 h-3" />
                          {service.contactInfo.email}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="mt-4">
                        <a
                          href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-sm font-medium hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 transform hover:scale-105"
                        >
                          Get Started
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
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
                Ready to Shape the Future?
              </h2>
              <p className="text-xl text-zion-cyan/90 mb-8">
                Let's discuss how our emerging technologies can revolutionize your business and create unprecedented opportunities
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
                  href="mailto:kleber@ziontechgroup.com?subject=Emerging Technology Consultation"
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
  );
};

export default EmergingTechServices2027;