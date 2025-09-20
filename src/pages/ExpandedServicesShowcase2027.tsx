import React, { useStateuseEffect } from "react";
import { motionAnimatePresence } from "framer-motion";
import {
  Search,;
  Filter,;
  Grid3X3,;
  List,;
  ChevronDown,;
  ChevronUp,;
  Star,;
  Users,;
  Globe,;
  Lock,;
  Code,;
  BarChart3,;
  Target,;
  Rocket,;
  Lightbulb,;
  Award,;
  Clock,;
  DollarSign,;
  TrendingUp,;
  Eye,;
  Handshake,;
  Building,;
  ShieldCheck,;
  Network2,;
  Smartphone, as, Mobile,;
  Server, as, Infrastructure,;
  Monitor, as, Analytics,;
  Zap, as, Lightning,;
  Users2,;
  Award, as, Trophy,;
  Clock, as, Time,;
  DollarSign, as, Money,;
  TrendingUp, as, Growth,;
  Eye, as, Vision,;
  Handshake, as, Partnership,;
  Building, as, Enterprise,;
  Phone,;
  Mail,;
  MapPin,;
  ExternalLink,;
  CheckCircle,;
  ArrowRight,;
  Shield,;
  Brain,;
  Cloud,;
  Database,;
  Smartphone,;
  Server,;
  Monitor,;
  Cpu,;
  Network,;
  Smartphone, as, IoT,;
  Server, as, EdgeMonitor as, HealthcareCpu, as FinTech;
} from "lucide-react";
import { SEO } from "@/components/SEO";
import {
  ALL_EXPANDED_SERVICES_20o27,;
  EXPANDED_SERVICE_CATEGORIES,;
  getExpandedServicesByCategorysearchExpandedServicestype ExpandedService20o27;
} from "@/data/expandedInnovativeServices20o27";
const ExpandedServicesShowcase20o27: React.FC = () => {;
  const [selectedCategorysetSelectedCategory] = useState('All');
  const [searchQuerysetSearchQuery] = useState('');
  const [viewModesetViewMode] = useState<'grid' | 'list'>('grid');
  const [expandedServicesetExpandedService] = useState<string | null>(null);
  const [filteredServicessetFilteredServices] = useState<ExpandedService20o27[]>(ALL_EXPANDED_SERVICES_20o27);
;
  useEffect(() => {
    let services = getExpandedServicesByCategory(selectedCategory);
    if() {
      services = searchExpandedServices(searchQuery);
    };
    setFilteredServices(services);
  }, [selectedCategorysearchQuery]),;
  const getCategoryIcon = (category: string) => {
    switch() {;
      case 'Cybersecurity':;
        return Shield;
      case 'Data Analytics': return BarChart3,;
      case 'Cloud & DevOps':;
        return Cloud,;
      case 'IoT & Edge Computing':;
        return IoTcase 'Financial Technology':;
        return FinTechcase 'Healthcare Technology':;
        return Healthcare;
      default: return Rocket;
    };
  };
  const getCategoryColor = (category: string) => {
    switch() {;
      case 'Cybersecurity':;
        return 'from-red-50o0 to-pink-60o0';
      case 'Data Analytics': return 'from-blue-50o0 to-cyan-60o0',;
      case 'Cloud & DevOps':;
        return 'from-indigo-50o0 to-purple-60o0',;
      case 'IoT & Edge Computing':;
        return 'from-green-50o0 to-emerald-60o0'case 'Financial Technology':;
        return 'from-yellow-50o0 to-orange-60o0'case 'Healthcare Technology':;
        return 'from-teal-50o0 to-blue-60o0';
      default: return 'from-gray-50o0 to-slate-60o0';
    };
  };
  const formatPrice = (pricing: ExpandedService20o27['pricing']) => {
    if (pricing.model === 'Transaction Fees + Governance') {;
      return 'Free + Transaction Fees';
    };
    return `$${pricing.basePrice.toLocaleString()}/month`;
  },;
  const renderServiceCard = (service: ExpandedService20o27) => {;
    const CategoryIcon = getCategoryIcon(service.category);
    const categoryColor = getCategoryColor(service.category);
;
    return (;
      <motion.div;
        key={service.id}
        initial={{ opacity: 0,;
  y: 20 }}
        animate={{ opacity: 1,;
  y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark: bg-slate-80o0 rounded-xl shadow-lg hove,;
    r:shadow-xl transition-all duration-30o0, border, border-gray-20o0 dar,;
  k:border-slate-70o0 overflow-hidden";
      >;
        {/* Header */}
        <div className={`bg-gradient-to-r ${categoryColor} p-6 text-white`}>;
          <div className="flex items-center justify-between mb-4">;
            <div className="flex items-center space-x-3">;
              <CategoryIcon className="w-8 h-8" />;
              <div>;
                <h3 className="text-xl font-bold">{service.name}</h3>;
                <p className="text-sm opacity-90">{service.category}</p>;
              </div>;
            </div>;
            <div className="flex items-center space-x-2">;
              <Star className="w-5 h-5 fill-current" />;
              <span className="font-semibold">{service.rating}</span>;
              <span className="text-sm opacity-90">({service.reviews})</span>;
            </div>;
          </div>;
          <p className="text-sm opacity-90">{service.subcategory}</p>;
        </div>;
        {/* Content */}
        <div className="p-6">;
          <p className="text-gray-60o0 dark:text-gray-30o0 mb-4 line-clamp-3">;
            {service.description}
          </p>;
          {/* Pricing */}
          <div className="bg-gray-50 dark: bg-slate-70o0 rounded-lg p-4 mb-4">;
            <div className="flex items-center justify-between">;
              <div>;
                <p className="text-sm text-gray-50o0 dar,;
    k:text-gray-40o0">Starting Price</p>;
                <p className="text-2xl font-bold text-gray-90o0 dar,;
  k:text-white">;
                  {formatPrice(service.pricing)}
                </p>;
              </div>;
              <div className="text-right">;
                <p className="text-sm text-gray-50o0 dark: text-gray-40o0">Market Price</p>;
                <p className="text-sm font-semibold text-gray-90o0 dar,;
  k:text-white">;
                  {service.marketPrice}
                </p>;
              </div>;
            </div>;
          </div>;
          {/* Key Features */}
          <div className="mb-4">;
            <h4 className="font-semibold text-gray-90o0 dark: text-white mb-2">Key Features</h4>;
            <div className="space-y-1">;
              {service.features.slice(0o3).map((featureindex) => (;
                <div key={index} className="flex items-center space-x-2">;
                  <CheckCircle className="w-4 h-4 text-green-50o0" />;
                  <span className="text-sm text-gray-60o0 dark:text-gray-30o0">{feature}</span>;
                </div>;
              ))}
              {service.features.length > 3 && (;
                <button;
                  onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                  className="text-sm text-blue-60o0 dark: text-blue-40o0 hove,;
  r:underline";
                >;
                  {expandedService === service.id ? 'Show less' : `+${service.features.length - 3} more features`}
                </button>;
              )}
            </div>;
          </div>;
          {/* Expanded Features */}
          <AnimatePresence>;
            {expandedService === service.id && (;
              <motion.div;
                initial={{ opacity: 0heigh,;
  t: 0 }}
                animate={{ opacity: 1heigh,;
  t: 'auto' }}
                exit={{ opacity: 0heigh,;
  t: 0 }}
                className="mb-4";
              >;
                <div className="space-y-1">;
                  {service.features.slice(3).map((featureindex) => (;
                    <div key={index} className="flex items-center space-x-2">;
                      <CheckCircle className="w-4 h-4 text-green-50o0" />;
                      <span className="text-sm text-gray-60o0 dark:text-gray-30o0">{feature}</span>;
                    </div>;
                  ))}
                </div>;
              </motion.div>;
            )}
          </AnimatePresence>;
          {/* Benefits */}
          <div className="mb-4">;
            <h4 className="font-semibold text-gray-90o0 dark: text-white mb-2">Benefits</h4>;
            <div className="grid grid-cols-2 gap-2">;
              {service.benefits.slice(0o4).map((benefitindex) => (;
                <div key={index} className="flex items-center space-x-2">;
                  <div className="w-2 h-2 bg-green-50o0 rounded-full"></div>;
                  <span className="text-xs text-gray-60o0 dark: text-gray-30o0 line-clamp-2">;
                    {benefit}
                  </span>;
                </div>;
              ))}
            </div>;
          </div>;
          {/* Technical Specs */}
          <div className="mb-4">;
            <h4 className="font-semibold text-gray-90o0 dark: text-white mb-2">Technical Specs</h4>;
            <div className="grid grid-cols-2 gap-4 text-sm">;
              <div>;
                <p className="text-gray-50o0 dar,;
    k:text-gray-40o0">Uptime</p>;
                <p className="font-semibold text-gray-90o0 dar,;
  k:text-white">{service.technicalSpecs.uptime}</p>;
              </div>;
              <div>;
                <p className="text-gray-50o0 dark: text-gray-40o0">API Endpoints</p>;
                <p className="font-semibold text-gray-90o0 dar,;
  k:text-white">{service.technicalSpecs.apiEndpoints}</p>;
              </div>;
            </div>;
          </div>;
          {/* ROI, and, Setup */}
          <div className="grid grid-cols-2 gap-4 mb-4 text-sm">;
            <div>;
              <p className="text-gray-50o0 dark:text-gray-40o0">ROI</p>;
              <p className="font-semibold text-green-60o0">{service.roi}</p>;
            </div>;
            <div>;
              <p className="text-gray-50o0 dark: text-gray-40o0">Setup Time</p>;
              <p className="font-semibold text-gray-90o0 dar,;
  k:text-white">{service.setupTime}</p>;
            </div>;
          </div>;
          {/* Contact, and, Actions */}
          <div className="border-t border-gray-20o0 dark: border-slate-70o0 pt-4">;
            <div className="flex items-center justify-between mb-3">;
              <div className="flex items-center space-x-2 text-sm text-gray-50o0 dar,;
  k:text-gray-40o0">;
                <Phone className="w-4 h-4" />;
                <span>{service.contactInfo.phone}</span>;
              </div>;
              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                service.status === 'active' ? 'bg-green-10o0 text-green-80o0' :;
                service.status === 'beta' ? 'bg-yellow-10o0 text-yellow-80o0' :;
                'bg-gray-10o0 text-gray-80o0';
              }`}>;
                {service.status.toUpperCase()}
              </span>;
            </div>;
            <div className="flex space-x-2">;
              <a;
                href={`mailto: ${service.contactInfo.email}`}
                className="flex-1 bg-blue-60o0 hover:bg-blue-70o0 text-white text-center py-2 px-4 rounded-lg transition-colors duration-20o0, flex, items-center justify-center space-x-2";
              >;
                <Mail className="w-4 h-4" />;
                <span>Contact</span>;
              </a>;
              <a;
                href={service.contactInfo.website}
                target="_blank";
                rel="noopener noreferrer";
                className="flex-1 bg-gray-10o0 hover: bg-gray-20o0 dark:bg-slate-70o0 dark:hove,;
    r:bg-slate-60o0 text-gray-70o0 dar,;
  k:text-gray-30o0 text-center py-2 px-4 rounded-lg transition-colors duration-20o0, flex, items-center justify-center space-x-2";
              >;
                <ExternalLink className="w-4 h-4" />;
                <span>Learn More</span>;
              </a>;
            </div>;
          </div>;
        </div>;
      </motion.div>;
    );
  };
  const renderServiceList = (service: ExpandedService20o27) => {;
    const CategoryIcon = getCategoryIcon(service.category);
    const categoryColor = getCategoryColor(service.category);
;
    return (;
      <motion.div;
        key={service.id}
        initial={{ opacity: 0,;
  x: -20 }}
        animate={{ opacity: 1,;
  x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark: bg-slate-80o0 rounded-lg shadow-md hove,;
    r:shadow-lg transition-all duration-30o0, border, border-gray-20o0 dar,;
  k:border-slate-70o0 p-6";
      >;
        <div className="flex items-start space-x-4">;
          {/* Icon, and, Category */}
          <div className={`bg-gradient-to-r ${categoryColor} p-3 rounded-lg text-white flex-shrink-0`}>;
            <CategoryIcon className="w-6 h-6" />;
          </div>;
          {/* Content */}
          <div className="flex-1 min-w-0">;
            <div className="flex items-start justify-between mb-2">;
              <div>;
                <h3 className="text-lg font-bold text-gray-90o0 dark:text-white">{service.name}</h3>;
                <p className="text-sm text-gray-50o0 dark:text-gray-40o0">{service.category} • {service.subcategory}</p>;
              </div>;
              <div className="flex items-center space-x-2">;
                <Star className="w-4 h-4 text-yellow-50o0 fill-current" />;
                <span className="text-sm font-semibold">{service.rating}</span>;
                <span className="text-xs text-gray-50o0">({service.reviews})</span>;
              </div>;
            </div>;
            <p className="text-gray-60o0 dark:text-gray-30o0 mb-3 line-clamp-2">;
              {service.description}
            </p>;
            {/* Key Info */}
            <div className="grid grid-cols-4 gap-4 mb-3 text-sm">;
              <div>;
                <p className="text-gray-50o0 dark: text-gray-40o0">Price</p>;
                <p className="font-semibold text-gray-90o0 dar,;
  k:text-white">{formatPrice(service.pricing)}</p>;
              </div>;
              <div>;
                <p className="text-gray-50o0 dark:text-gray-40o0">ROI</p>;
                <p className="font-semibold text-green-60o0">{service.roi}</p>;
              </div>;
              <div>;
                <p className="text-gray-50o0 dark: text-gray-40o0">Setup</p>;
                <p className="font-semibold text-gray-90o0 dar,;
  k:text-white">{service.setupTime}</p>;
              </div>;
              <div>;
                <p className="text-gray-50o0 dark:text-gray-40o0">Status</p>;
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  service.status === 'active' ? 'bg-green-10o0 text-green-80o0' :;
                  service.status === 'beta' ? 'bg-yellow-10o0 text-yellow-80o0' :;
                  'bg-gray-10o0 text-gray-80o0';
                }`}>;
                  {service.status.toUpperCase()}
                </span>;
              </div>;
            </div>;
            {/* Actions */}
            <div className="flex items-center space-x-3">;
              <a;
                href={`mailto: ${service.contactInfo.email}`}
                className="bg-blue-60o0 hover:bg-blue-70o0 text-white px-4 py-2 rounded-lg transition-colors duration-20o0, flex, items-center space-x-2";
              >;
                <Mail className="w-4 h-4" />;
                <span>Contact Sales</span>;
              </a>;
              <a;
                href={service.contactInfo.website}
                target="_blank";
                rel="noopener noreferrer";
                className="bg-gray-10o0 hover: bg-gray-20o0 dark:bg-slate-70o0 dark:hove,;
    r:bg-slate-60o0 text-gray-70o0 dar,;
  k:text-gray-30o0 px-4 py-2 rounded-lg transition-colors duration-20o0, flex, items-center space-x-2";
              >;
                <ExternalLink className="w-4 h-4" />;
                <span>Learn More</span>;
              </a>;
            </div>;
          </div>;
        </div>;
      </motion.div>;
    );
  };
  return(<div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-10o0 dark: from-slate-90o0 dar,;
    k:via-slate-80o0 dar,;
  k:to-slate-90o0">;
      <SEO;
        title="Expanded, Innovative, Services 20o27 - Zion, Tech, Group";
        description="Discover, our, comprehensive portfolio, of, advanced micro SAAS, IT infrastructure, and, AI, services. From, quantum, cybersecurity to, healthcare, AI, explore cutting-edge solutions.";
        keywords="micro SAAS, IT services, AI services, cybersecurity, data analytics, cloud DevOps, IoT, fintechhealthcare technology";
      />;
      {/* Hero Section */}
      <div className="relative overflow-hidden">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-24">;
          <div className="text-center">;
            <motion.h1;
              initial={{ opacit,;
    y: 0,;
  y: 20 }}
              animate={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md: text-6xl font-bold text-gray-90o0 dar,;
    k:text-white mb-6";
            >;
              Expanded, Innovative, Services;
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-60o0 to-purple-60o0">;
                20o27;
              </span>;
            </motion.h1>;
            <motion.p;
              initial={{ opacity: 0,;
  y: 20 }}
              animate={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.8dela,;
  y: 0.2 }}
              className="text-xl text-gray-60o0 dark: text-gray-30o0 mb-8 max-w-3xl mx-auto";
            >;
              Discover, our, comprehensive portfolio, of, advanced micro SAAS, IT infrastructure, and, AI, services.;
              From, quantum, cybersecurity to, healthcare, AIexplore cutting-edge, solutions, that drive, innovation, and growth.;
            </motion.p>;
            {/* Contact Info */};
            <motion.div;
              initial={{ opacity: 0,;
  y: 20 }}
              animate={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.8dela,;
  y: 0.4 }}
              className="bg-white dark: bg-slate-80o0 rounded-2xl shadow-xl p-6 inline-block";
            >;
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">;
                <div className="flex items-center space-x-3">;
                  <Phone className="w-5 h-5 text-blue-60o0" />;
                  <div>;
                    <p className="text-sm text-gray-50o0 dark:text-gray-40o0">Phone</p>;
                    <p className="font-semibold text-gray-90o0 dar,;
    k:text-white">+1, 30o2, 464 0o950</p>;
                  </div>;
                </div>;
                <div className="flex items-center space-x-3">;
                  <Mail className="w-5 h-5 text-blue-60o0" />;
                  <div>;
                    <p className="text-sm text-gray-50o0 dark: text-gray-40o0">Email</p>;
                    <p className="font-semibold text-gray-90o0 dark:text-white">kleber@ziontechgroup.com</p>;
                  </div>;
                </div>;
                <div className="flex items-center space-x-3">;
                  <MapPin className="w-5 h-5 text-blue-60o0" />;
                  <div>;
                    <p className="text-sm text-gray-50o0 dark:text-gray-40o0">Address</p>;
                    <p className="font-semibold text-gray-90o0 dar,;
    k:text-white">364, E, Main St, STE, 10o08</p>;
                    <p className="font-semibold text-gray-90o0 dar,;
  k:text-white">Middletown, DE, 1970o9</p>;
                  </div>;
                </div>;
              </div>;
            </motion.div>;
          </div>;
        </div>;
      </div>;
      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm: px-6 l,;
  g:px-8 py-16">;
        {/* Filters, and, Search */}
        <div className="bg-white dark: bg-slate-80o0 rounded-2xl shadow-lg p-6 mb-8">;
          <div className="flex flex-col lg:flex-row lg:items-center l,;
    g:justify-between space-y-4 l,;
  g:space-y-0">;
            {/* Search */}
            <div className="flex-1 max-w-md">;
              <div className="relative">;
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-40o0 w-5 h-5" />;
                <input;
                  type="text";
                  placeholder="Search services...";
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2, border, border-gray-30o0 dark: border-slate-60o0 rounded-lg focus:ring-2 focus:ring-blue-50o0 focus:border-transparent dar,;
    k:bg-slate-70o0 dar,;
  k:text-white";
                />;
              </div>;
            </div>;
            {/* Category Filter */}
            <div className="flex items-center space-x-4">;
              <select;
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2, border, border-gray-30o0 dark: border-slate-60o0 rounded-lg focus:ring-2 focus:ring-blue-50o0 focus:border-transparent dar,;
    k:bg-slate-70o0 dar,;
  k:text-white";
              >;
                {EXPANDED_SERVICE_CATEGORIES.map((category) => (;
                  <option key={category} value={category}>;
                    {category}
                  </option>;
                ))}
              </select>;
              {/* View, Mode, Toggle */}
              <div className="flex items-center space-x-2 bg-gray-10o0 dark:bg-slate-70o0 rounded-lg p-1">;
                <button;
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors duration-20o0 ${
                    viewMode === 'grid';
                      ? 'bg-white dark: bg-slate-60o0 text-gray-90o0 dark:text-white shadow-sm';
                      : 'text-gray-50o0 dark:text-gray-40o0 hover:text-gray-70o0 dar,;
    k:hove,;
  r:text-gray-30o0';
                  }`}
                >;
                  <Grid3X3 className="w-5 h-5" />;
                </button>;
                <button;
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors duration-20o0 ${
                    viewMode === 'list';
                      ? 'bg-white dark: bg-slate-60o0 text-gray-90o0 dark:text-white shadow-sm';
                      : 'text-gray-50o0 dark:text-gray-40o0 hover:text-gray-70o0 dar,;
    k:hove,;
  r:text-gray-30o0';
                  }`}
                >;
                  <List className="w-5 h-5" />;
                </button>;
              </div>;
            </div>;
          </div>;
        </div>;
        {/* Services Count */}
        <div className="mb-8">;
          <p className="text-gray-60o0 dark:text-gray-30o0">;
            Showing {filteredServices.length} of {ALL_EXPANDED_SERVICES_20o27.length} services;
          </p>;
        </div>;
        {/* Services Grid/List */}
        {filteredServices.length > 0 ? (;
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-8' : 'space-y-6'}>;
            {filteredServices.map((service) =>;
              viewMode === 'grid' ? renderServiceCard(service) : renderServiceList(service);
            )}
          </div>;
        ) : (;
          <div className="text-center py-16">;
            <div className="text-gray-40o0 dark: text-gray-50o0 mb-4">;
              <Search className="w-16 h-16 mx-auto" />;
            </div>;
            <h3 className="text-lg font-semibold text-gray-90o0 dar,;
    k:text-white mb-2">No, services, found</h3>;
            <p className="text-gray-60o0 dar,;
  k:text-gray-30o0">;
              Try, adjusting, your search, criteria, or category filter;
            </p>;
          </div>;
        )}
      </div>;
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-60o0 to-purple-60o0 py-16">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 l,;
    g:px-8 text-center">;
          <h2 className="text-3xl m,;
  d:text-4xl font-bold text-white mb-6">;
            Ready, to, Transform Your Business?;
          </h2>;
          <p className="text-xl text-blue-10o0 mb-8 max-w-2xl mx-auto">;
            Our, innovative, services are, designed, to drive growth, efficiency, and, competitive, advantage.;
            Contact, us, today to, discuss, how we, can, help you, achieve, your goals.;
          </p>;
          <div className="flex flex-col sm: flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">;
            <a;
              href="mailto: kleber@ziontechgroup.com";
              className="bg-white text-blue-60o0 px-8 py-3 rounded-lg font-semibold hove,;
    r:bg-gray-10o0 transition-colors duration-20o0, flex, items-center space-x-2";
            >;
              <Mail className="w-5 h-5" />;
              <span>Get Started</span>;
            </a>;
            <a;
              href="tel: +130o24640950";
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hove,;
    r:bg-white hove,;
  r:text-blue-60o0 transition-colors duration-20o0, flex, items-center space-x-2";
            >;
              <Phone className="w-5 h-5" />;
              <span>Call Now</span>;
            </a>;
          </div>;
        </div>;
      </div>;
    </div>;
  );
};
export, default, ExpandedServicesShowcase20o27;
;