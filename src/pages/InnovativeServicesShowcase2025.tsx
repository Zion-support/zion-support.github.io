import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Star, 
  Zap, 
  Shield, 
  TrendingUp, 
  Brain, 
  Server, 
  Globe, 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  DollarSign,
  CreditCard,
  Wallet,
  Coins,
  PiggyBank,
  Calculator,
  BarChart3,
  Target,
  Award,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  ChevronUp,
  Atom,
  Rocket,
  Heart,
  ShoppingCart,
  MessageCircle,
  BookOpen,
  Workflow,
  Shield as ShieldIcon
} from 'lucide-react';
import { SEO } from '../components/SEO';
import INNOVATIVE_SERVICES_2025 from '../data/innovativeServices2025';

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  marketPrice: string;
  roi: string;
  innovationLevel: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
}

const InnovativeServicesShowcase2025: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [expandedServices, setExpandedServices] = useState<Set<string>>(new Set());

  // Get unique categories
  const categories = useMemo(() => {
    const cats = [...new Set(INNOVATIVE_SERVICES_2025.map(service => service.category))];
    return cats.sort();
  }, []);

  // Filter services
  const filteredServices = useMemo(() => {
    let filtered = INNOVATIVE_SERVICES_2025.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.subcategory.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      
      let matchesPrice = true;
      if (selectedPriceRange !== 'all') {
        const [min, max] = selectedPriceRange.split('-').map(Number);
        if (max) {
          matchesPrice = service.price >= min && service.price <= max;
        } else {
          matchesPrice = service.price >= min;
        }
      }
      
      return matchesSearch && matchesCategory && matchesPrice;
    });
    
    return filtered;
  }, [searchTerm, selectedCategory, selectedPriceRange]);

  const toggleServiceExpansion = (serviceId: string) => {
    const newExpanded = new Set(expandedServices);
    if (newExpanded.has(serviceId)) {
      newExpanded.delete(serviceId);
    } else {
      newExpanded.add(serviceId);
    }
    setExpandedServices(newExpanded);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI Solutions': return Brain;
      case 'IT Services': return Server;
      case 'Micro SaaS': return ShoppingCart;
      case 'Cybersecurity': return ShieldIcon;
      case 'Data Analytics': return BarChart3;
      case 'Cloud Services': return Cloud;
      case 'Emerging Tech': return Rocket;
      default: return Zap;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI Solutions': return 'from-purple-600 to-pink-600';
      case 'IT Services': return 'from-blue-600 to-cyan-600';
      case 'Micro SaaS': return 'from-green-600 to-emerald-600';
      case 'Cybersecurity': return 'from-red-600 to-orange-600';
      case 'Data Analytics': return 'from-indigo-600 to-purple-600';
      case 'Cloud Services': return 'from-cyan-600 to-blue-600';
      case 'Emerging Tech': return 'from-yellow-600 to-orange-600';
      default: return 'from-gray-600 to-slate-600';
    }
  };

  const priceRanges = [
    { label: 'All Prices', value: 'all' },
    { label: 'Under $500', value: '0-500' },
    { label: '$500 - $1,000', value: '500-1000' },
    { label: '$1,000 - $2,500', value: '1000-2500' },
    { label: '$2,500 - $5,000', value: '2500-5000' },
    { label: 'Over $5,000', value: '5000-999999' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Innovative Services Showcase 2025 - Zion Tech Group"
        description="Discover our cutting-edge AI, IT, and Micro SaaS services designed to transform your business. Explore innovative solutions with proven ROI and competitive pricing."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Innovative Services
              </span>
              <span className="block text-white">Showcase 2025</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            >
              Discover cutting-edge AI, IT, and Micro SaaS solutions designed to transform your business. 
              Our innovative services deliver proven ROI and competitive advantages in today's digital landscape.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <div className="flex items-center space-x-2 text-cyan-400">
                <CheckCircle className="w-5 h-5" />
                <span>20+ Innovative Services</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-400">
                <TrendingUp className="w-5 h-5" />
                <span>Proven ROI</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-400">
                <Star className="w-5 h-5" />
                <span>Cutting-edge Technology</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent appearance-none"
              >
                <option value="all">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>

            {/* Price Range Filter */}
            <div className="relative">
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent appearance-none"
              >
                {priceRanges.map(range => (
                  <option key={range.value} value={range.value}>{range.label}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => {
            const CategoryIcon = getCategoryIcon(service.category);
            const categoryColor = getCategoryColor(service.category);
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                {/* Service Header */}
                <div className={`bg-gradient-to-r ${categoryColor} p-6`}>
                  <div className="flex items-center justify-between mb-4">
                    <CategoryIcon className="w-8 h-8 text-white" />
                    <span className="px-3 py-1 bg-white/20 rounded-full text-white text-sm font-medium">
                      {service.innovationLevel}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-white/90 text-sm">{service.subcategory}</p>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>
                  
                  {/* Pricing */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-white">${service.price.toLocaleString()}</span>
                      <span className="text-gray-400 ml-2">/{service.pricingModel}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">Market Price</div>
                      <div className="text-sm text-cyan-400">{service.marketPrice}</div>
                    </div>
                  </div>

                  {/* ROI */}
                  <div className="bg-slate-700/50 rounded-lg p-3 mb-4">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-green-400 font-medium">ROI: {service.roi}</span>
                    </div>
                  </div>

                  {/* Expandable Content */}
                  <div className="space-y-4">
                    {/* Features Preview */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features</h4>
                      <div className="grid grid-cols-1 gap-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                            <CheckCircle className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <button
                            onClick={() => toggleServiceExpansion(service.id)}
                            className="text-cyan-400 text-sm hover:text-cyan-300 transition-colors"
                          >
                            {expandedServices.has(service.id) ? 'Show less' : `+${service.features.length - 3} more features`}
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Expanded Content */}
                    {expandedServices.has(service.id) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-4 pt-4 border-t border-slate-700"
                      >
                        {/* All Features */}
                        <div>
                          <h4 className="text-sm font-semibold text-gray-300 mb-2">All Features</h4>
                          <div className="grid grid-cols-1 gap-1">
                            {service.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                                <CheckCircle className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Benefits */}
                        <div>
                          <h4 className="text-sm font-semibold text-gray-300 mb-2">Benefits</h4>
                          <div className="grid grid-cols-1 gap-1">
                            {service.benefits.map((benefit, idx) => (
                              <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                                <Star className="w-3 h-3 text-yellow-400 flex-shrink-0" />
                                <span>{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Use Cases */}
                        <div>
                          <h4 className="text-sm font-semibold text-gray-300 mb-2">Use Cases</h4>
                          <div className="grid grid-cols-1 gap-1">
                            {service.useCases.map((useCase, idx) => (
                              <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                                <Target className="w-3 h-3 text-blue-400 flex-shrink-0" />
                                <span>{useCase}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Target Audience */}
                        <div>
                          <h4 className="text-sm font-semibold text-gray-300 mb-2">Target Audience</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.targetAudience.map((audience, idx) => (
                              <span key={idx} className="px-2 py-1 bg-slate-700 rounded-full text-xs text-gray-300">
                                {audience}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* CTA Button */}
                    <div className="pt-4">
                      <a
                        href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center space-x-2"
                      >
                        <span>Get Started</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 text-xl mb-4">No services found matching your criteria</div>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedPriceRange('all');
              }}
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* Contact CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-cyan-100 mb-6">
            Let's discuss how our innovative services can drive growth and efficiency for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="flex items-center space-x-2 bg-white text-cyan-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>+1 302 464 0950</span>
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="flex items-center space-x-2 bg-white text-cyan-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>kleber@ziontechgroup.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovativeServicesShowcase2025;