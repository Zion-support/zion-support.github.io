import React, { useState, useMemo } from &apos;
import { motion } from &apos;framer-motion';;react';
import { motion, AnimatePresence } from &apos;framer-motion';
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
  // Blockchain icon removed - not available in lucide-react
  Heart,
  Scale,
  Factory,
  Satellite,
  ShoppingCart,
  Building,
  Truck,
  Eye,
  Download,
  ExternalLink,
  Award,
  Target,
  Lightbulb,
  BarChart3,
  PieChart,
  Activity,
  Gauge,
  ShieldCheck,
  X
} from &apos;lucide-react';

// Import our existing service data
import { ULTIMATE_INNOVATIVE_SERVICES_2026 } from &apos;../data/ultimateInnovativeServices2026';
import { comprehensiveServices } from &apos;../data/comprehensiveServices';

interface Service {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  benefits: string[];
  pricing: {
    starter: number;
    professional: number;
    enterprise: number;
    currency: string;
    billingCycl,e: string;
  };
  rating: number;
  reviewCount: number;
  launchDate: string;
  status: string;
  marketPrice: string;
  estimatedDelivery: string;
  website?: string;
  contactInfo?: {
    phone: string;
    email: string;
    addres,s: string;
  };
}&apos;&apos;

const ComprehensiveServicesShowcase2027: React.FC = () => {}
  const;const;const [searchTerm, setSearchTerm] = useState(&apos;&apos;);&apos;&apos;
  const [selectedCategory, setSelectedCategory] = useState<;<;<string>(&apos;All&apos;);&apos;
  const [sortBy, setSortBy] = useState<;<;<&apos;name&apos; | &apos;price&apos; | &apos;rating&apos; | &apos;newest&apos;>(&apos;name&apos;);&apos;
  const [selectedService, setSelectedService] = useState<;<;<Service | null>(null);

  // Combine services from multiple sources
  const allServices: Service[] = useMemo(() => {}
    const;const;const services: Service[] = [];
    
    // Add services from ULTIMATE_INNOVATIVE_SERVICES_2026
    ULTIMATE_INNOVATIVE_SERVICES_2026.forEach(service => {
      services.push({
        i,d: service.id,
        name: service.name,
        category: service.category,
        description: service.description,
        features: service.features,
        benefits: service.benefits,
        pricing: {
          starte,r: service.pricing.starter,
          professional: service.pricing.professional,
          enterprise: service.pricing.enterprise,
          currency: service.pricing.currency,
          billingCycle: service.pricing.billingCycle
        },
        rating: service.rating,
        reviewCount: service.reviewCount,
        launchDate: service.launchDate,
        status: service.status,
        marketPrice: service.marketPrice,
        estimatedDelivery: service.estimatedDelivery,
        website: service.website,
        contactInfo: service.contactInfo
      });
    });

    // Add services from comprehensiveServices
    comprehensiveServices.forEach(service => {
      services.push({
        id: service.id,
        name: service.name,
        category: service.category,
        description: service.description,
        features: service.features,
        benefits: service.benefits,
        pricing: {
          starte,r: service.pricing.starter,
          professional: service.pricing.professional,
          enterprise: service.pricing.enterprise,
          currency: service.pricing.currency,
          billingCycle: service.pricing.billingCycle
        },
        rating: service.rating,
        reviewCount: service.reviewCount,
        launchDate: service.launchDate,
        status: service.status,
        marketPrice: service.marketPrice,
        estimatedDelivery: service.estimatedDelivery,
        website: service.website,
        contactInfo: service.contactInfo
      });
    });

    return services;
  }, []);

  const categories = useMemo(() => {}
    const;const;const cats = [&apos;All&apos;, ...Array.from(new Set(allServices.map(s => s.category)))];
    return cats.sort();
  }, [allServices]);&apos;

  const filteredServices = useMemo(() => {}
    const filtered = allServices.filter(service => {}
      const;const;const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          service.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === &apos;All&apos; || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // Sort services
    switch (sortBy) {
      case &apos;name&apos;:
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case &apos;price&apos;:
        filtered.sort((a, b) => a.pricing.starter - b.pricing.starter);
        break;
      case &apos;rating&apos;:
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case &apos;newest&apos;:
        filtered.sort((a, b) => new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime());
        break;
    }

    return filtered;
  }, [allServices, searchTerm, selectedCategory, sortBy]);&apos;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case &apos;Artificial Intelligence&apos;:
        return&apos;}} <;<Brain className=&quot;w-6 h-6&quot; />;
      case &apos;Quantum Computing&apos;:
        return&apos; <Atom className=&quot;w-6 h-6&quot; />;
      case &apos;Neuromorphic Computing&apos;:
        return&apos; <Cpu className=&quot;w-6 h-6&quot; />;
      case &apos;Synthetic Biology&apos;:
        return&apos; <Heart className=&quot;w-6 h-6&quot; />;
      case &apos;Blockchain&apos;:
        return&apos; <Blockchain className=&quot;w-6 h-6&quot; />;
      case &apos;Cybersecurity&apos;:
        return&apos; <Shield className=&quot;w-6 h-6&quot; />;
      case &apos;Internet of Things&apos;:
        return&apos; <Network className=&quot;w-6 h-6&quot; />;
      case &apos;Metaverse&apos;:
        return&apos; <Globe className=&quot;w-6 h-6&quot; />;
      case &apos;Robotics&apos;:
        return&apos; <Factory className=&quot;w-6 h-6&quot; />;
      case &apos;Space Technology&apos;:
        return&apos; <Satellite className=&quot;w-6 h-6&quot; />;
      default:
        return&quot; <Lightbulb className=&quot;w-6 h-6&quot; />;
    }
  };&quot;

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case &apos;live&apos;:
        return &apos;bg-green-100 text-green-800';
      case &apos;beta&apos;:
        return &apos;bg-blue-100 text-blue-800';
      case &apos;coming soon&apos;:
        return &apos;bg-yellow-100 text-yellow-800';
      case &apos;preview&apos;:
        return &apos;bg-purple-100 text-purple-800';
      defaul,t:
        return &apos;bg-gray-100 text-gray-800';
    }
  };

  return (&apos;&apos;
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white&quot;>
      {/* Header */}&quot;
      <div className=&quot;relative overflow-hidden&quot;>&quot;"
        <div className=&quot;absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20&quot; />&quot;
        <div className=&quot;relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24&quot;>&quot;"
          <motion.div
            initial={{ opacit,y: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=&quot;text-center&quot;
          >&quot;
            <h1 className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6&quot;>
              Comprehensive Services 2027&quot;
            </h1>
            <p className=&quot;text-xl m,d:text-2xl text-gray-300 max-w-4xl mx-auto mb-8&quot;>
              Discover our complete portfolio of cutting-edge micro SAAS, IT services, and AI solutions. 
              From quantum computing to autonomous business operations.&quot;
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>&quot;"
              <motion.button
                whileHover={{ scal,e: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className=&quot;bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2&quot;
              >&quot;
                <Play className=&quot;w-5 h-5&quot; />
                Watch Demo&quot;
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className=&quot;border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2&quot;
              >&quot;
                <BookOpen className=&quot;w-5 h-5&quot; />
                View Documentation&quot;
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8&quot;>&quot;"
        <div className=&quot;bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20&quot;>&quot;"
          <div className=&quot;flex flex-col l,g:flex-row gap-6&quot;>
            {/* Search */}&quot;
            <div className=&quot;flex-1&quot;>&quot;"
              <div className=&quot;relative&quot;>&quot;"
                <Search className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5&quot; />&quot;
                <input
                  type=&quot;text&quot;
                  placeholder=&quot;Search services...&quot;
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className=&quot;w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focu,s:ring-purple-500&quot;
                />&quot;
              </div>
            </div>

            {/* Category Filter */}
            <div className=&quot;flex-shrink-0&quot;>&quot;"
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className=&quot;px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focu,s:ring-purple-500&quot;
              >
                {categories.map(category => (&quot;}
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className=&quot;flex-shrink-0&quot;>&quot;"
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className=&quot;px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focu,s:ring-purple-500&quot;
              >&quot;
                <option value=&quot;name&quot;>Sort by Name&quot;</option>
                <option value=&quot;price&quot;>Sort by Price&quot;</option>
                <option value=&quot;rating&quot;>Sort by Rating&quot;</option>
                <option value=&quot;newest&quot;>Sort by Newest&quot;</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8&quot;>&quot;"
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 l,g:grid-cols-3 gap-6&quot;>&quot;"
          <AnimatePresence>
            {filteredServices.map((service, index) => (}
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className=&quot;bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 cursor-pointer&quot;
                onClick={() => setSelectedService(service)}
              >
                {/* Service Header */}&quot;
                <div className=&quot;flex items-start justify-between mb-4&quot;>&quot;"
                  <div className=&quot;flex items-center gap-3&quot;>
                    {getCategoryIcon(service.category)}&quot;
                    <div>
                      <h3 className=&quot;text-xl font-semibold text-white mb-1&quot;>{service.name}&quot;</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(service.status)}`}>
                        {service.status}
                      </span>
                    </div>
                  </div>
                  <div className=&quot;flex items-center gap-1&quot;>&quot;"
                    <Star className=&quot;w-4 h-4 text-yellow-400 fill-current&quot; />&quot;
                    <span className=&quot;text-sm text-gray-300&quot;>{service.rating}&quot;</span>
                    <span className=&quot;text-xs text-gray-400&quot;>({service.reviewCount})&quot;</span>
                  </div>
                </div>

                {/* Description */}
                <p className=&quot;text-gray-300 text-sm mb-4 line-clamp-3&quot;>{service.description}&quot;</p>

                {/* Pricing */}
                <div className=&quot;mb-4&quot;>&quot;"
                  <div className=&quot;flex items-center gap-2 mb-2&quot;>&quot;"
                    <DollarSign className=&quot;w-4 h-4 text-green-400&quot; />&quot;
                    <span className=&quot;text-sm text-gray-300&quot;>Starting from&quot;</span>
                    <span className=&quot;text-lg font-bold text-green-400&quot;>
                      {service.pricing.currency}{service.pricing.starter.toLocaleString()}&quot;
                    </span>
                    <span className=&quot;text-xs text-gray-400&quot;>/{service.pricing.billingCycle}&quot;</span>
                  </div>
                  <div className=&quot;text-xs text-gray-400&quot;>
                    Market price: {service.marketPrice}&quot;
                  </div>
                </div>

                {/* Features Preview */}
                <div className=&quot;mb-4&quot;>&quot;"
                  <div className=&quot;flex flex-wrap gap-2&quot;>
                    {service.features.slice(0, 3).map((feature, idx) => (&quot;}
                      <span
                        key={idx}
                        className=&quot;px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full&quot;
                      >
                        {feature}&quot;
                      </span>
                    ))}
                    {service.features.length > 3 && (}
                      <span className=&quot;px-2 py-1 bg-gray-500/20 text-gray-300 text-xs rounded-full&quot;>
                        +{service.features.length - 3} more&quot;
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className=&quot;flex gap-2&quot;>&quot;"
                  <button className=&quot;flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200&quot;>
                    Get Started&quot;
                  </button>
                  <button className=&quot;px-4 py-2 border border-white/20 text-white rounded-lg text-sm font-medium hove,r:bg-white/10 transition-all duration-200&quot;>&quot;"
                    <Eye className=&quot;w-4 h-4&quot; />&quot;
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className=&quot;text-center py-16&quot;
          >&quot;
            <Search className=&quot;w-16 h-16 text-gray-400 mx-auto mb-4&quot; />&quot;
            <h3 className=&quot;text-xl font-semibold text-gray-300 mb-2&quot;>No services found&quot;</h3>
            <p className=&quot;text-gray-400&quot;>Try adjusting your search or filter criteria&quot;</p>
          </motion.div>
        )}
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className=&quot;fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4&quot;
            onClick={() => setSelectedService(null)}
          >&quot;
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className=&quot;bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto&quot;
              onClick={(e) => e.stopPropagation()}
            >&quot;
              <div className=&quot;p-6&quot;>&quot;"
                <div className=&quot;flex items-start justify-between mb-6&quot;>&quot;"
                  <div className=&quot;flex items-center gap-4&quot;>
                    {getCategoryIcon(selectedService.category)}&quot;
                    <div>
                      <h2 className=&quot;text-3xl font-bold text-white mb-2&quot;>{selectedService.name}&quot;</h2>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedService.status)}`}>
                        {selectedService.status}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className=&quot;p-2 hover:bg-white/10 rounded-lg transition-colors&quot;
                  >&quot;
                    <X className=&quot;w-6 h-6 text-gray-400&quot; />&quot;
                  </button>
                </div>

                <div className=&quot;grid grid-cols-1 l,g:grid-cols-2 gap-8&quot;>
                  {/* Left Column */}&quot;
                  <div>
                    <h3 className=&quot;text-xl font-semibold text-white mb-4&quot;>Description&quot;</h3>
                    <p className=&quot;text-gray-300 mb-6&quot;>{selectedService.description}&quot;</p>

                    <h3 className=&quot;text-xl font-semibold text-white mb-4&quot;>Features&quot;</h3>
                    <ul className=&quot;space-y-2 mb-6&quot;>
                      {selectedService.features.map((feature, idx) => (&quot;}
                        <li key={idx} className=&quot;flex items-center gap-2 text-gray-300&quot;>&quot;"
                          <CheckCircle className=&quot;w-4 h-4 text-green-400 flex-shrink-0&quot; />
                          {feature}&quot;
                        </li>
                      ))}
                    </ul>

                    <h3 className=&quot;text-xl font-semibold text-white mb-4&quot;>Benefits&quot;</h3>
                    <ul className=&quot;space-y-2 mb-6&quot;>
                      {selectedService.benefits.map((benefit, idx) => (&quot;}
                        <li key={idx} className=&quot;flex items-center gap-2 text-gray-300&quot;>&quot;"
                          <Star className=&quot;w-4 h-4 text-yellow-400 flex-shrink-0&quot; />
                          {benefit}&quot;
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column */}
                  <div>
                    <h3 className=&quot;text-xl font-semibold text-white mb-4&quot;>Pricing Plans&quot;</h3>
                    <div className=&quot;space-y-4 mb-6&quot;>&quot;"
                      <div className=&quot;bg-white/10 rounded-lg p-4&quot;>&quot;"
                        <div className=&quot;flex justify-between items-center mb-2&quot;>&quot;"
                          <span className=&quot;font-medium text-white&quot;>Starter&quot;</span>
                          <span className=&quot;text-2xl font-bold text-green-400&quot;>
                            {selectedService.pricing.currency}{selectedService.pricing.starter.toLocaleString()}&quot;
                          </span>
                        </div>
                        <span className=&quot;text-sm text-gray-400&quot;>/{selectedService.pricing.billingCycle}&quot;</span>
                      </div>

                      <div className=&quot;bg-white/10 rounded-lg p-4&quot;>&quot;"
                        <div className=&quot;flex justify-between items-center mb-2&quot;>&quot;"
                          <span className=&quot;font-medium text-white&quot;>Professional&quot;</span>
                          <span className=&quot;text-2xl font-bold text-blue-400&quot;>
                            {selectedService.pricing.currency}{selectedService.pricing.professional.toLocaleString()}&quot;
                          </span>
                        </div>
                        <span className=&quot;text-sm text-gray-400&quot;>/{selectedService.pricing.billingCycle}&quot;</span>
                      </div>

                      <div className=&quot;bg-white/10 rounded-lg p-4&quot;>&quot;"
                        <div className=&quot;flex justify-between items-center mb-2&quot;>&quot;"
                          <span className=&quot;font-medium text-white&quot;>Enterprise&quot;</span>
                          <span className=&quot;text-2xl font-bold text-purple-400&quot;>
                            {selectedService.pricing.currency}{selectedService.pricing.enterprise.toLocaleString()}&quot;
                          </span>
                        </div>
                        <span className=&quot;text-sm text-gray-400&quot;>/{selectedService.pricing.billingCycle}&quot;</span>
                      </div>
                    </div>

                    <div className=&quot;bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-4 mb-6&quot;>&quot;"
                      <h4 className=&quot;text-white font-semibold mb-2&quot;>Market Information&quot;</h4>
                      <div className=&quot;space-y-2 text-sm&quot;>&quot;"
                        <div className=&quot;flex justify-between&quot;>&quot;"
                          <span className=&quot;text-blue-200&quot;>Market Price:&quot;</span>
                          <span className=&quot;text-white&quot;>{selectedService.marketPrice}&quot;</span>
                        </div>
                        <div className=&quot;flex justify-between&quot;>&quot;"
                          <span className=&quot;text-blue-200&quot;>Launch Date:&quot;</span>
                          <span className=&quot;text-white&quot;>{selectedService.launchDate}&quot;</span>
                        </div>
                        <div className=&quot;flex justify-between&quot;>&quot;"
                          <span className=&quot;text-blue-200&quot;>Delivery:&quot;</span>
                          <span className=&quot;text-white&quot;>{selectedService.estimatedDelivery}&quot;</span>
                        </div>
                      </div>
                    </div>

                    {selectedService.contactInfo && (}
                      <div className=&quot;bg-white/10 rounded-lg p-4&quot;>&quot;"
                        <h4 className=&quot;text-white font-semibold mb-3&quot;>Contact Information&quot;</h4>
                        <div className=&quot;space-y-2 text-sm&quot;>&quot;"
                          <div className=&quot;flex items-center gap-2 text-gray-300&quot;>&quot;"
                            <Phone className=&quot;w-4 h-4&quot; />
                            {selectedService.contactInfo.phone}&quot;
                          </div>
                          <div className=&quot;flex items-center gap-2 text-gray-300&quot;>&quot;"
                            <Mail className=&quot;w-4 h-4&quot; />
                            {selectedService.contactInfo.email}&quot;
                          </div>
                          <div className=&quot;flex items-center gap-2 text-gray-300&quot;>&quot;"
                            <MapPin className=&quot;w-4 h-4&quot; />
                            {selectedService.contactInfo.address}&quot;
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className=&quot;flex gap-4 mt-8 pt-6 border-t border-white/20&quot;>&quot;"
                  <button className=&quot;flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200&quot;>
                    Get Started Now&quot;
                  </button>
                  <button className=&quot;px-6 py-3 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-200&quot;>
                    Schedule Demo&quot;
                  </button>
                  <button className=&quot;px-6 py-3 border border-white/20 text-white rounded-lg font-semibold hove,r:bg-white/10 transition-all duration-200&quot;>
                    Download Brochure&quot;
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Section */}
      <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16&quot;>&quot;"
        <div className=&quot;bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/20 text-center&quot;>&quot;"
          <h2 className=&quot;text-3xl font-bold text-white mb-4&quot;>Ready to Get Started?&quot;</h2>
          <p className=&quot;text-xl text-gray-300 mb-8 max-w-2xl mx-auto&quot;>
            Contact our team to learn more about our comprehensive services and how they can transform your business.&quot;
          </p>
          <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>&quot;"
            <motion.button
              whileHover={{ scal,e: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=&quot;bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 justify-center&quot;
            >&quot;
              <Phone className=&quot;w-5 h-5&quot; />
              Call +1 302 464 0950&quot;
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=&quot;border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 justify-center&quot;
            >&quot;
              <Mail className=&quot;w-5 h-5&quot; />
              Email kleber@ziontechgroup.com&quot;
            </motion.button>
          </div>
          <div className=&quot;mt-6 text-gray-400&quot;>&quot;"
            <p>364 E Main St STE 1008, Middletown DE 19709</p>
            <p>Visit us at: <a href=&quot;https://ziontechgroup.com&quot; className=&quot;text-purple-400 hover:underline&quot;>http,s://ziontechgroup.com&quot;</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveServicesShowcase2027;