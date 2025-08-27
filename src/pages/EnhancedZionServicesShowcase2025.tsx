import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Server, 
  Zap, 
  Globe, 
  Cpu, 
  Database,
  Network,
  Lock,
  Code,
  Rocket,
  Users,
  Search,
  Filter,
  Star,
  TrendingUp,
  DollarSign,
  Clock,
  CheckCircle,
  ArrowRight,
  Play,
  BookOpen,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Globe as GlobeIcon,
  Atom,
  Blockchain,
  Heart,
  Scale,
  Factory,
  Satellite,
  ShoppingCart,
  Building,
  Truck,
  Target,
  Award,
  Lightbulb,
  BarChart3,
  Users2,
  ShieldCheck,
  Zap as ZapIcon,
  Cpu as CpuIcon,
  Database as DatabaseIcon,
  Network as NetworkIcon,
  Lock as LockIcon,
  Code as CodeIcon,
  Rocket as RocketIcon,
  Users as UsersIcon,
  Search as SearchIcon,
  Filter as FilterIcon,
  Star as StarIcon,
  TrendingUp as TrendingUpIcon,
  DollarSign as DollarSignIcon,
  Clock as ClockIcon,
  CheckCircle as CheckCircleIcon,
  ArrowRight as ArrowRightIcon,
  Play as PlayIcon,
  BookOpen as BookOpenIcon,
  MessageCircle as MessageCircleIcon,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as MapPinIcon,
  Globe as GlobeIconIcon,
  Atom as AtomIcon,
  Blockchain as BlockchainIcon,
  Heart as HeartIcon,
  Scale as ScaleIcon,
  Factory as FactoryIcon,
  Satellite as SatelliteIcon,
  ShoppingCart as ShoppingCartIcon,
  Building as BuildingIcon,
  Truck as TruckIcon,
  Target as TargetIcon,
  Award as AwardIcon,
  Lightbulb as LightbulbIcon,
  BarChart3 as BarChart3Icon,
  Users2 as Users2Icon,
  ShieldCheck as ShieldCheckIcon
} from 'lucide-react';
import { SEO } from "../components/SEOHead";
import { enhancedZionServices2025, EnhancedServiceItem, EnhancedServiceCategory } from "@/data/enhancedZionServices2025";

export default function EnhancedZionServicesShowcase2025() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const priceRanges = [
    { id: 'all', name: 'All Prices', min: 0, max: Infinity },
    { id: 'budget', name: 'Budget ($0 - $2,000)', min: 0, max: 2000 },
    { id: 'mid-range', name: 'Mid-Range ($2,000 - $8,000)', min: 2000, max: 8000 },
    { id: 'enterprise', name: 'Enterprise ($8,000+)', min: 8000, max: Infinity }
  ];

  const sortOptions = [
    { id: 'featured', name: 'Featured', icon: Star },
    { id: 'price-low', name: 'Price: Low to High', icon: DollarSign },
    { id: 'price-high', name: 'Price: High to Low', icon: DollarSign },
    { id: 'trending', name: 'Trending', icon: TrendingUp },
    { id: 'newest', name: 'Newest', icon: Clock }
  ];

  const getCategoryIcon = (categorySlug: string) => {
    const iconMap: { [key: string]: any } = {
      'advanced-ai-autonomous-systems': Brain,
      'quantum-advanced-computing': Atom,
      'advanced-cybersecurity-zero-trust': Shield,
      'advanced-iot-edge-intelligence': Cpu,
      'advanced-fintech-solutions': DollarSign,
      'advanced-healthcare-biotechnology': Heart,
      'advanced-manufacturing-robotics': Factory,
      'advanced-transportation-mobility': Truck,
      'advanced-communication-networking': Network,
      'advanced-gaming-entertainment': Code,
      'advanced-materials-energy': Zap,
      'advanced-space-technology': Satellite
    };
    return iconMap[categorySlug] || Globe;
  };

  const getCategoryColor = (categorySlug: string) => {
    const colorMap: { [key: string]: string } = {
      'advanced-ai-autonomous-systems': 'from-zion-cyan to-zion-purple',
      'quantum-advanced-computing': 'from-zion-blue to-zion-cyan',
      'advanced-cybersecurity-zero-trust': 'from-zion-purple to-zion-red',
      'advanced-iot-edge-intelligence': 'from-zion-green to-zion-cyan',
      'advanced-fintech-solutions': 'from-zion-green to-zion-blue',
      'advanced-healthcare-biotechnology': 'from-zion-pink to-zion-purple',
      'advanced-manufacturing-robotics': 'from-zion-orange to-zion-blue',
      'advanced-transportation-mobility': 'from-zion-blue to-zion-purple',
      'advanced-communication-networking': 'from-zion-cyan to-zion-blue',
      'advanced-gaming-entertainment': 'from-zion-purple to-zion-pink',
      'advanced-materials-energy': 'from-zion-yellow to-zion-orange',
      'advanced-space-technology': 'from-zion-purple to-zion-cyan'
    };
    return colorMap[categorySlug] || 'from-zion-cyan to-zion-blue';
  };

  const filteredServices = enhancedZionServices2025
    .flatMap(category => category.items)
    .filter(service => {
      const matchesSearch = searchQuery === '' || 
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.features.some(feature => feature.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || 
        enhancedZionServices2025.find(cat => cat.slug === selectedCategory)?.items.includes(service);
      
      const matchesPrice = selectedPriceRange === 'all' || 
        (() => {
          const priceRange = priceRanges.find(pr => pr.id === selectedPriceRange);
          if (!priceRange) return true;
          const servicePrice = parseInt(service.price.replace(/[^0-9]/g, ''));
          return servicePrice >= priceRange.min && servicePrice <= priceRange.max;
        })();
      
      return matchesSearch && matchesCategory && matchesPrice;
    });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''));
      case 'price-high':
        return parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, ''));
      case 'trending':
        return Math.random() - 0.5; // Simulate trending
      case 'newest':
        return Math.random() - 0.5; // Simulate newest
      default:
        return 0;
    }
  });

  const toggleServiceExpansion = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <>
      <SEO 
        title="Zion Tech Group - Enhanced 2025 Services Showcase | Cutting-Edge AI, Quantum & Autonomous Solutions"
        description="Discover Zion Tech Group's revolutionary 2025 services portfolio featuring autonomous AI systems, quantum computing platforms, advanced cybersecurity, and next-generation technology solutions. Transform your business with the future of technology."
        keywords="Zion Tech Group, AI services, quantum computing, autonomous systems, cybersecurity, IoT solutions, fintech, healthcare AI, manufacturing automation, space technology, 2025 technology services"
        ogImage="https://ziontechgroup.com/og-enhanced-services-2025.jpg"
        ogUrl="https://ziontechgroup.com/enhanced-services-2025"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-pink bg-clip-text text-transparent mb-6">
                Zion Tech Group
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Enhanced 2025 Services Showcase
              </h2>
              <p className="text-xl md:text-2xl text-zion-gray-light mb-8 max-w-4xl mx-auto">
                Revolutionary technology solutions that define the future. From autonomous AI systems to quantum computing platforms, 
                discover the cutting-edge services that will transform your business and propel you into the next decade of innovation.
              </p>
              
              {/* Contact Information */}
              <div className="bg-zion-slate-dark/50 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold text-zion-cyan mb-4">Ready to Transform Your Business?</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2 text-zion-gray-light">
                    <PhoneIcon className="w-4 h-4 text-zion-cyan" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center gap-2 text-zion-gray-light">
                    <MailIcon className="w-4 h-4 text-zion-cyan" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-zion-gray-light md:col-span-2">
                    <MapPinIcon className="w-4 h-4 text-zion-cyan" />
                    <span>364 E Main St STE 1008, Middletown DE 19709</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-zion-slate-dark/50 backdrop-blur-sm rounded-2xl p-6">
              <div className="grid md:grid-cols-4 gap-4">
                {/* Search */}
                <div className="relative">
                  <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-gray-light w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-zion-slate rounded-lg border border-zion-slate-light focus:border-zion-cyan focus:outline-none text-white placeholder-zion-gray-light"
                  />
                </div>

                {/* Category Filter */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-zion-slate rounded-lg border border-zion-slate-light focus:border-zion-cyan focus:outline-none text-white"
                >
                  <option value="all">All Categories</option>
                  {enhancedZionServices2025.map(category => (
                    <option key={category.slug} value={category.slug}>
                      {category.name}
                    </option>
                  ))}
                </select>

                {/* Price Filter */}
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="px-4 py-3 bg-zion-slate rounded-lg border border-zion-slate-light focus:border-zion-cyan focus:outline-none text-white"
                >
                  {priceRanges.map(range => (
                    <option key={range.id} value={range.id}>
                      {range.name}
                    </option>
                  ))}
                </select>

                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-zion-slate rounded-lg border border-zion-slate-light focus:border-zion-cyan focus:outline-none text-white"
                >
                  {sortOptions.map(option => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-8">
              {enhancedZionServices2025.map((category) => (
                <motion.div
                  key={category.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-zion-slate-dark/30 backdrop-blur-sm rounded-2xl p-8"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${getCategoryColor(category.slug)}`}>
                      {React.createElement(getCategoryIcon(category.slug), { 
                        className: "w-8 h-8 text-white" 
                      })}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white">{category.name}</h3>
                      <p className="text-zion-gray-light text-lg">{category.description}</p>
                    </div>
                  </div>

                  {/* Services in Category */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {category.items
                      .filter(service => 
                        selectedCategory === 'all' || selectedCategory === category.slug
                      )
                      .map((service) => (
                        <motion.div
                          key={service.id}
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5 }}
                          viewport={{ once: true }}
                          className="bg-zion-slate-dark/50 backdrop-blur-sm rounded-xl p-6 border border-zion-slate-light hover:border-zion-cyan transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20"
                        >
                          {/* Service Header */}
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <h4 className="text-xl font-bold text-white mb-2">{service.title}</h4>
                              <p className="text-zion-gray-light text-sm mb-3">{service.description}</p>
                              <div className="flex items-center gap-2 mb-3">
                                <span className="text-zion-cyan font-semibold">{service.price}</span>
                                <span className="text-zion-gray-light text-sm">• {service.billing}</span>
                              </div>
                            </div>
                            <button
                              onClick={() => toggleServiceExpansion(service.id)}
                              className="p-2 rounded-lg bg-zion-slate hover:bg-zion-slate-light transition-colors"
                            >
                              <ArrowRightIcon 
                                className={`w-5 h-5 text-zion-cyan transition-transform duration-300 ${
                                  expandedService === service.id ? 'rotate-90' : ''
                                }`} 
                              />
                            </button>
                          </div>

                          {/* Features Preview */}
                          <div className="mb-4">
                            <h5 className="text-sm font-semibold text-zion-cyan mb-2">Key Features:</h5>
                            <div className="grid grid-cols-2 gap-2">
                              {service.features.slice(0, 4).map((feature, index) => (
                                <div key={index} className="flex items-center gap-2 text-sm text-zion-gray-light">
                                  <CheckCircleIcon className="w-4 h-4 text-zion-green" />
                                  <span>{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* CTA Button */}
                          <a
                            href={service.href}
                            target={service.external ? "_blank" : "_self"}
                            rel={service.external ? "noopener noreferrer" : ""}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 transform hover:scale-105"
                          >
                            {service.ctaLabel}
                            <ArrowRightIcon className="w-4 h-4" />
                          </a>

                          {/* Expanded Details */}
                          <AnimatePresence>
                            {expandedService === service.id && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="mt-6 pt-6 border-t border-zion-slate-light"
                              >
                                {/* Benefits */}
                                <div className="mb-4">
                                  <h5 className="text-sm font-semibold text-zion-green mb-2 flex items-center gap-2">
                                    <TargetIcon className="w-4 h-4" />
                                    Key Benefits:
                                  </h5>
                                  <ul className="space-y-1">
                                    {service.benefits.map((benefit, index) => (
                                      <li key={index} className="text-sm text-zion-gray-light flex items-start gap-2">
                                        <span className="text-zion-green mt-1">•</span>
                                        <span>{benefit}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                {/* Use Cases */}
                                <div className="mb-4">
                                  <h5 className="text-sm font-semibold text-zion-purple mb-2 flex items-center gap-2">
                                    <LightbulbIcon className="w-4 h-4" />
                                    Use Cases:
                                  </h5>
                                  <ul className="space-y-1">
                                    {service.useCases.map((useCase, index) => (
                                      <li key={index} className="text-sm text-zion-gray-light flex items-start gap-2">
                                        <span className="text-zion-purple mt-1">•</span>
                                        <span>{useCase}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                {/* Market Trend & Competitive Advantage */}
                                <div className="grid md:grid-cols-2 gap-4">
                                  <div>
                                    <h5 className="text-sm font-semibold text-zion-yellow mb-2 flex items-center gap-2">
                                      <TrendingUpIcon className="w-4 h-4" />
                                      Market Trend:
                                    </h5>
                                    <p className="text-sm text-zion-gray-light">{service.marketTrend}</p>
                                  </div>
                                  <div>
                                    <h5 className="text-sm font-semibold text-zion-pink mb-2 flex items-center gap-2">
                                      <AwardIcon className="w-4 h-4" />
                                      Competitive Advantage:
                                    </h5>
                                    <p className="text-sm text-zion-gray-light">{service.competitiveAdvantage}</p>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Lead the Future?
              </h2>
              <p className="text-xl text-zion-gray-light mb-8">
                Join the elite group of forward-thinking organizations that are already leveraging Zion Tech Group's 
                revolutionary 2025 services to gain unprecedented competitive advantages.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://ziontechgroup.com/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 transform hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5" />
                  Get Started Today
                </a>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-zion-slate-dark text-white font-semibold rounded-lg border border-zion-cyan hover:bg-zion-cyan hover:text-zion-slate-dark transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Call +1 302 464 0950
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}