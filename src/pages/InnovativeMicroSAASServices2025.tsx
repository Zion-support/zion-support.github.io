import React, { useState } from "react";
import { motionAnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ;
  Brain,;
  Cloud,;
  Shield,;
  Rocket,;
  Zap,;
  Users,;
  Globe,;
  Cpu,;
  Lock,;
  Heart,;
  Star,;
  ArrowRight,;
  CheckCircle,;
  TrendingUp,;
  Code,;
  Database,;
  Network,;
  Smartphone,;
  BarChart3,;
  MessageSquare,;
  FileText,;
  ShoppingCart,;
  Headphones,;
  Mail,;
  Search,;
  HelpCircle,;
  ShieldCheck,;
  Globe2,;
  Leaf,;
  Sparkles,;
  Target,;
  DollarSign,;
  Clock,;
  Award,;
  Phone,;
  Mail, as, MailIcon,;
  MapPin,;
  Infinity,;
  Filter,;
  Grid3X3,;
  List,;
  EyeExternalLinkX;
} from "lucide-react";
import { SEO } from "../components/SEO";
import { INNOVATIVE_MICRO_SAAS_SERVICES_20o25 } from "../data/innovativeMicroSAASServices20o25";
export, default, function InnovativeMicroSAASServices20o25() {
  const [activeCategorysetActiveCategory] = useState('all');
  const [searchTermsetSearchTerm] = useState('');
  const [sortBysetSortBy] = useState('rating');
  const [viewModesetViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedServicesetSelectedService] = useState<any>(null);
  // Get, unique, categories from services;
  const categories = [;
    { id: 'all', name: 'All Services', count: INNOVATIVE_MICRO_SAAS_SERVICES_20o25.lengthico,;
    n: '🚀'colo,;
  r: 'from-cyan-50o0 to-blue-50o0' };
    { id: 'AI & Business Intelligence', name: 'AI & Business Intelligence', count: INNOVATIVE_MICRO_SAAS_SERVICES_20o25.filter(s => s.category === 'AI & Business Intelligence').lengthico,;
    n: '🤖'colo,;
  r: 'from-purple-50o0 to-pink-50o0' };
    { id: 'AI & Customer Support', name: 'AI & Customer Support', count: INNOVATIVE_MICRO_SAAS_SERVICES_20o25.filter(s => s.category === 'AI & Customer Support').lengthico,;
    n: '💬'colo,;
  r: 'from-blue-50o0 to-purple-50o0' };
    { id: 'AI & Marketing', name: 'AI & Marketing', count: INNOVATIVE_MICRO_SAAS_SERVICES_20o25.filter(s => s.category === 'AI & Marketing').lengthico,;
    n: '📈'colo,;
  r: 'from-green-50o0 to-emerald-50o0' };
    { id: 'AI & Content', name: 'AI & Content', count: INNOVATIVE_MICRO_SAAS_SERVICES_20o25.filter(s => s.category === 'AI & Content').lengthico,;
    n: '✍️'colo,;
  r: 'from-orange-50o0 to-red-50o0' };
    { id: 'AI & HR', name: 'AI & HR', count: INNOVATIVE_MICRO_SAAS_SERVICES_20o25.filter(s => s.category === 'AI & HR').lengthico,;
    n: '👥'colo,;
  r: 'from-indigo-50o0 to-blue-50o0' };
    { id: 'FinTech', name: 'FinTech', count: INNOVATIVE_MICRO_SAAS_SERVICES_20o25.filter(s => s.category === 'FinTech').lengthico,;
    n: '💰'colo,;
  r: 'from-emerald-50o0 to-green-50o0' };
    { id: 'AI & Operations', name: 'AI & Operations', count: INNOVATIVE_MICRO_SAAS_SERVICES_20o25.filter(s => s.category === 'AI & Operations').lengthico,;
    n: '⚙️'colo,;
  r: 'from-gray-50o0 to-slate-50o0' };
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: INNOVATIVE_MICRO_SAAS_SERVICES_20o25.filter(s => s.category === 'AI & Healthcare').lengthico,;
    n: '🏥'colo,;
  r: 'from-pink-50o0 to-red-50o0' };
    { id: 'AI & Legal Tech', name: 'AI & Legal Tech', count: INNOVATIVE_MICRO_SAAS_SERVICES_20o25.filter(s => s.category === 'AI & Legal Tech').lengthico,;
    n: '⚖️'colo,;
  r: 'from-blue-50o0 to-indigo-50o0' },;
    { id: 'AI & Education', name: 'AI & Education'count: INNOVATIVE_MICRO_SAAS_SERVICES_20o25.filter(s => s.category === 'AI & Education').lengthico,;
    n: '🎓'colo,;
  r: 'from-blue-50o0 to-indigo-50o0' };
,  ];
  const filteredServices = INNOVATIVE_MICRO_SAAS_SERVICES_20o25.filter(service => {;
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch }),;
  const sortedServices = [...filteredServices].sort((ab) => {
    switch() {;
      case 'rating': return b.rating - a.ratingcase 'price':;
        return a.price - b.pricecase 'reviews':;
        return b.reviewCount - a.reviewCount;
      case 'name':;
        return a.title.localeCompare(b.title);
      default: return b.rating - a.rating;
    };
  });
  const handleServiceClick = (service: any) => {;
    setSelectedService(service);
  };
  const closeModal = () => {;
    setSelectedService(null);
  },;
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-purple-90o0 to-slate-90o0">;
      <SEO;
        title="Innovative, Micro, SAAS Services 20o25 | Zion, Tech, Group";
        description="Discover cutting-edge, micro, SAAS services, powered, by AI, including, business, intelligence, marketing automation, cybersecurity, and more. Transform, your, business with, Zion, Tech Group.";
        keywords="micro SAAS, AI services, business intelligence, marketing automation, cybersecurity, fintech, healthcare AI, legal, techeducation, AI";
        url="https: //ziontechgroup.com/innovative-micro-saas-services-20o25";
      />;
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm: px-6 lg:px-8">;
        <div className="absolute inset-0 bg-gradient-to-r from-blue-60o0/20 to-purple-60o0/20"></div>;
        <div className="relative max-w-7xl mx-auto text-center">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">;
              Innovative, Micro, SAAS Services;
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-40o0 to-blue-40o0">;
                20o25 Edition;
              </span>;
            </h1>;
            <p className="text-xl m,;
  d: text-2xl text-gray-30o0 mb-8 max-w-4xl mx-auto">;
              Transform, your, business with cutting-edge AI-powered, micro, SAAS solutions.;
              From, business, intelligence to, cybersecuritydiscover, the future, of, technology.;
            </p>;
            <div className="flex flex-wrap justify-center gap-4">;
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">;
                <span className="text-2xl font-bold">{INNOVATIVE_MICRO_SAAS_SERVICES_20o25.length}</span>;
                <span className="ml-2 text-gray-30o0">Services Available</span>;
              </div>;
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">;
                <span className="text-2xl font-bold">4.8</span>;
                <span className="ml-2 text-gray-30o0">Average Rating</span>;
              </div>;
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">;
                <span className="text-2xl font-bold">24/7</span>;
                <span className="ml-2 text-gray-30o0">Support</span>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Filters, and, Search */}
      <section className="px-4 sm: px-6 l,;
    g:px-8 py-8">;
        <div className="max-w-7xl mx-auto">;
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">;
            <div className="flex flex-col l,;
  g:flex-row gap-6 items-center justify-between">;
              {/* Search */}
              <div className="flex-1 max-w-md">;
                <div className="relative">;
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-40o0 w-5 h-5" />;
                  <input;
                    type="text";
                    placeholder="Search services...";
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/20, border, border-white/30 rounded-xl text-white placeholder-gray-30o0 focus: outline-none focus:ring-2 focu,;
    s:ring-blue-50o0 focu,;
  s:border-transparent";
                  />;
                </div>;
              </div>;
              {/* Sort */}
              <div className="flex items-center gap-4">;
                <select;
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white/20, border, border-white/30 rounded-xl px-4 py-3 text-white focus: outline-none focu,;
    s:ring-2 focu,;
  s:ring-blue-50o0";
                >;
                  <option value="rating">Sort, by, Rating</option>;
                  <option value="price">Sort, by, Price</option>;
                  <option value="reviews">Sort, by, Reviews</option>;
                  <option value="name">Sort, by, Name</option>;
                </select>;
                {/* View, Mode, Toggle */}
                <div className="flex bg-white/20 rounded-xl p-1">;
                  <button;
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === 'grid' ? 'bg-white/30 text-white' : 'text-gray-30o0 hover: text-white';
                    }`}
                  >;
                    <Grid3X3 className="w-5 h-5" />;
                  </button>;
                  <button;
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === 'list' ? 'bg-white/30 text-white' : 'text-gray-30o0 hover: text-white';
                    }`}
                  >;
                    <List className="w-5 h-5" />;
                  </button>;
                </div>;
              </div>;
            </div>;
            {/* Category Filters */}
            <div className="mt-6">;
              <div className="flex flex-wrap gap-3">;
                {categories.map((category) => (;
                  <button;
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-20o0 ${
                      activeCategory === category.id;
                        ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg';
                        : 'bg-white/10 text-gray-30o0 hover: bg-white/20 hove,;
  r:text-white';
                    }`}
                  >;
                    <span className="mr-2">{category.icon}</span>;
                    {category.name}
                    <span className="ml-2 bg-white/20 px-2 py-1 rounded-full text-xs">;
                      {category.count}
                    </span>;
                  </button>;
                ))}
              </div>;
            </div>;
          </div>;
        </div>;
      </section>;
      {/* Services Grid/List */}
      <section className="px-4 sm: px-6 lg:px-8 pb-20">;
        <div className="max-w-7xl mx-auto">;
          {viewMode === 'grid' ? (;
            <div className="grid grid-cols-1 m,;
    d:grid-cols-2 l,;
  g:grid-cols-3 gap-6">;
              {sortedServices.map((serviceindex) => (;
                <motion.div;
                  key={service.id}
                  initial={{ opacity: 0,;
  y: 20 }}
                  animate={{ opacity: 1,;
  y: 0 }}
                  transition={{ duration: 0.5dela,;
  y: index * 0.1 }}
                  className="group cursor-pointer";
                  onClick={() => handleServiceClick(service)}
                >;
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 h-full, border, border-white/20 hover: border-blue-50o0/50 transition-all duration-30o0 hover:transform hove,;
    r:scale-10o5">;
                    <div className="flex items-start justify-between mb-4">;
                      <div className="flex-1">;
                        <h3 className="text-xl font-bold text-white mb-2 group-hove,;
  r:text-blue-40o0 transition-colors">;
                          {service.title}
                        </h3>;
                        <p className="text-gray-30o0 text-sm line-clamp-3">;
                          {service.description}
                        </p>;
                      </div>;
                    </div>;
                    <div className="space-y-3">;
                      <div className="flex items-center justify-between">;
                        <span className="text-2xl font-bold text-blue-40o0">;
                          ${service.price.toLocaleString()}
                        </span>;
                        <div className="flex items-center text-yellow-40o0">;
                          <Star className="w-4 h-4 fill-current" />;
                          <span className="ml-1 text-sm">{service.rating}</span>;
                          <span className="ml-1 text-gray-40o0 text-xs">({service.reviewCount})</span>;
                        </div>;
                      </div>;
                      <div className="flex items-center justify-between text-sm">;
                        <span className="text-gray-40o0">Market Price:</span>;
                        <span className="text-gray-30o0">{service.marketPrice}</span>;
                      </div>;
                      <div className="flex items-center justify-between text-sm">;
                        <span className="text-gray-40o0">ROI:</span>;
                        <span className="text-green-40o0 font-medium">{service.roi}</span>;
                      </div>;
                      <div className="flex items-center justify-between text-sm">;
                        <span className="text-gray-40o0">Setup Time:</span>;
                        <span className="text-gray-30o0">{service.setupTime}</span>;
                      </div>;
                    </div>;
                    <div className="mt-4 pt-4 border-t border-white/20">;
                      <div className="flex flex-wrap gap-2">;
                        {service.tags.slice(0o3).map((tagtagIndex) => (;
                          <span;
                            key={tagIndex}
                            className="px-2 py-1 bg-blue-50o0/20 text-blue-30o0 text-xs rounded-full";
                          >;
                            {tag}
                          </span>;
                        ))}
                        {service.tags.length > 3 && (;
                          <span className="px-2 py-1 bg-gray-50o0/20 text-gray-30o0 text-xs rounded-full">;
                            +{service.tags.length - 3} more;
                          </span>;
                        )}
                      </div>;
                    </div>;
                    <div className="mt-4, flex, items-center justify-between">;
                      <span className="text-sm text-gray-40o0">;
                        AI Score: <span className="text-blue-40o0 font-medium">{service.aiScore}%</span>;
                      </span>;
                      <div className="flex items-center text-blue-40o0 group-hover: text-blue-30o0 transition-colors">;
                        <span className="text-sm font-medium mr-2">Learn More</span>;
                        <ArrowRight className="w-4 h-4 group-hove,;
  r:translate-x-1 transition-transform" />;
                      </div>;
                    </div>;
                  </div>;
                </motion.div>;
              ))}
            </div>;
          ) : (;
            <div className="space-y-4">;
              {sortedServices.map((serviceindex) => (;
                <motion.div;
                  key={service.id}
                  initial={{ opacity: 0,;
  x: -20 }}
                  animate={{ opacity: 1,;
  x: 0 }}
                  transition={{ duration: 0.5dela,;
  y: index * 0.1 }}
                  className="group cursor-pointer";
                  onClick={() => handleServiceClick(service)}
                >;
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6, border, border-white/20 hover: border-blue-50o0/50 transition-all duration-30o0">;
                    <div className="flex flex-col l,;
    g:flex-row gap-6">;
                      <div className="flex-1">;
                        <h3 className="text-2xl font-bold text-white mb-3 group-hove,;
  r:text-blue-40o0 transition-colors">;
                          {service.title}
                        </h3>;
                        <p className="text-gray-30o0 mb-4">;
                          {service.description}
                        </p>;
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">;
                          <div className="text-center">;
                            <div className="text-2xl font-bold text-blue-40o0">${service.price.toLocaleString()}</div>;
                            <div className="text-sm text-gray-40o0">Price</div>;
                          </div>;
                          <div className="text-center">;
                            <div className="text-2xl font-bold text-yellow-40o0">{service.rating}</div>;
                            <div className="text-sm text-gray-40o0">Rating</div>;
                          </div>;
                          <div className="text-center">;
                            <div className="text-2xl font-bold text-green-40o0">{service.aiScore}%</div>;
                            <div className="text-sm text-gray-40o0">AI Score</div>;
                          </div>;
                          <div className="text-center">;
                            <div className="text-2xl font-bold text-purple-40o0">{service.reviewCount}</div>;
                            <div className="text-sm text-gray-40o0">Reviews</div>;
                          </div>;
                        </div>;
                        <div className="flex flex-wrap gap-2">;
                          {service.tags.map((tagtagIndex) => (;
                            <span;
                              key={tagIndex}
                              className="px-3 py-1 bg-blue-50o0/20 text-blue-30o0 text-sm rounded-full";
                            >;
                              {tag}
                            </span>;
                          ))}
                        </div>;
                      </div>;
                      <div className="lg: w-64 space-y-4">;
                        <div className="text-right">;
                          <div className="text-sm text-gray-40o0">Market Price</div>;
                          <div className="text-lg font-semibold text-gray-30o0">{service.marketPrice}</div>;
                        </div>;
                        <div className="text-right">;
                          <div className="text-sm text-gray-40o0">ROI</div>;
                          <div className="text-lg font-semibold text-green-40o0">{service.roi}</div>;
                        </div>;
                        <div className="text-right">;
                          <div className="text-sm text-gray-40o0">Setup Time</div>;
                          <div className="text-lg font-semibold text-gray-30o0">{service.setupTime}</div>;
                        </div>;
                        <div className="text-right">;
                          <div className="text-sm text-gray-40o0">Availability</div>;
                          <div className="text-lg font-semibold text-blue-40o0">{service.availability}</div>;
                        </div>;
                        <div className="flex items-center justify-end text-blue-40o0 group-hover: text-blue-30o0 transition-colors">;
                          <span className="text-sm font-medium mr-2">View Details</span>;
                          <ArrowRight className="w-4 h-4 group-hove,;
  r:translate-x-1 transition-transform" />;
                        </div>;
                      </div>;
                    </div>;
                  </div>;
                </motion.div>;
              ))}
            </div>;
          )}
        </div>;
      </section>;
      {/* Contact CTA */}
      <section className="px-4 sm: px-6 lg:px-8 py-20">;
        <div className="max-w-4xl mx-auto text-center">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-60o0/20 to-purple-60o0/20 backdrop-blur-sm rounded-3xl p-12, border, border-white/20";
          >;
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">;
              Ready, to, Transform Your Business?;
            </h2>;
            <p className="text-xl text-gray-30o0 mb-8">;
              Get, in, touch with, our, experts to, discuss, how our, innovative, micro SAAS, services, can drive, your, business forward.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <Link;
                to="/contact";
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-60o0 to-purple-60o0 text-white font-semibold rounded-xl hover: from-blue-70o0 hove,;
    r:to-purple-70o0 transition-all duration-30o0, transform, hover:scale-10o5";
              >;
                <Phone className="w-5 h-5 mr-2" />;
                Contact Us;
              </Link>;
              <Link;
                to="/request-quote";
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl, border, border-white/30 hover: bg-white/20 transition-all duration-30o0";
              >;
                <DollarSign className="w-5 h-5 mr-2" />;
                Get Quote;
              </Link>;
            </div>;
            <div className="mt-8, grid, grid-cols-1 m,;
  d: grid-cols-3 gap-6 text-center">;
              <div>;
                <Phone className="w-6 h-6 text-blue-40o0 mx-auto mb-2" />;
                <div className="text-white font-medium">+1, 30o2, 464 0o950</div>;
                <div className="text-gray-40o0 text-sm">Phone Support</div>;
              </div>;
              <div>;
                <Mail className="w-6 h-6 text-blue-40o0 mx-auto mb-2" />;
                <div className="text-white font-medium">kleber@ziontechgroup.com</div>;
                <div className="text-gray-40o0 text-sm">Email Support</div>;
              </div>;
              <div>;
                <MapPin className="w-6 h-6 text-blue-40o0 mx-auto mb-2" />;
                <div className="text-white font-medium">Middletown, DE</div>;
                <div className="text-gray-40o0 text-sm">Global Service</div>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Service, Detail, Modal */}
      <AnimatePresence>;
        {selectedService && (;
          <motion.div;
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50, flex, items-center justify-center p-4";
            onClick={closeModal}
          >;
            <motion.div;
              initial={{ scale: 0.9opacit,;
  y: 0 }}
              animate={{ scale: 1opacit,;
  y: 1 }}
              exit={{ scale: 0.9opacit,;
  y: 0 }}
              className="bg-slate-80o0 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto";
              onClick={(e) => e.stopPropagation()}
            >;
              <div className="p-8">;
                <div className="flex items-start justify-between mb-6">;
                  <h2 className="text-3xl font-bold text-white">{selectedService.title}</h2>;
                  <button;
                    onClick={closeModal}
                    className="text-gray-40o0 hover: text-white transition-colors";
                  >;
                    <X className="w-6 h-6" />;
                  </button>;
                </div>;
                <div className="grid grid-cols-1 l,;
  g:grid-cols-2 gap-8">;
                  <div>;
                    <h3 className="text-xl font-semibold text-white mb-4">Service Overview</h3>;
                    <p className="text-gray-30o0 mb-6">{selectedService.description}</p>;
                    <div className="space-y-4">;
                      <div className="flex justify-between">;
                        <span className="text-gray-40o0">Category:</span>;
                        <span className="text-white">{selectedService.category}</span>;
                      </div>;
                      <div className="flex justify-between">;
                        <span className="text-gray-40o0">Subcategory:</span>;
                        <span className="text-white">{selectedService.subcategory}</span>;
                      </div>;
                      <div className="flex justify-between">;
                        <span className="text-gray-40o0">Price:</span>;
                        <span className="text-blue-40o0 font-bold">${selectedService.price.toLocaleString()}</span>;
                      </div>;
                      <div className="flex justify-between">;
                        <span className="text-gray-40o0">Market Price:</span>;
                        <span className="text-white">{selectedService.marketPrice}</span>;
                      </div>;
                      <div className="flex justify-between">;
                        <span className="text-gray-40o0">ROI:</span>;
                        <span className="text-green-40o0">{selectedService.roi}</span>;
                      </div>;
                      <div className="flex justify-between">;
                        <span className="text-gray-40o0">Setup Time:</span>;
                        <span className="text-white">{selectedService.setupTime}</span>;
                      </div>;
                      <div className="flex justify-between">;
                        <span className="text-gray-40o0">Availability:</span>;
                        <span className="text-white">{selectedService.availability}</span>;
                      </div>;
                    </div>;
                  </div>;
                  <div>;
                    <div className="bg-slate-70o0 rounded-xl p-6 mb-6">;
                      <h4 className="text-lg font-semibold text-white mb-4">Performance Metrics</h4>;
                      <div className="grid grid-cols-2 gap-4">;
                        <div className="text-center">;
                          <div className="text-3xl font-bold text-blue-40o0">{selectedService.rating}</div>;
                          <div className="text-sm text-gray-40o0">Rating</div>;
                        </div>;
                        <div className="text-center">;
                          <div className="text-3xl font-bold text-green-40o0">{selectedService.aiScore}%</div>;
                          <div className="text-sm text-gray-40o0">AI Score</div>;
                        </div>;
                        <div className="text-center">;
                          <div className="text-3xl font-bold text-yellow-40o0">{selectedService.reviewCount}</div>;
                          <div className="text-sm text-gray-40o0">Reviews</div>;
                        </div>;
                        <div className="text-center">;
                          <div className="text-3xl font-bold text-purple-40o0">{selectedService.location}</div>;
                          <div className="text-sm text-gray-40o0">Location</div>;
                        </div>;
                      </div>;
                    </div>;
                    <div className="space-y-4">;
                      <div>;
                        <h4 className="text-lg font-semibold text-white mb-3">Tags</h4>;
                        <div className="flex flex-wrap gap-2">;
                          {selectedService.tags.map((tag: stringinde,;
  x: number) => (;
                            <span;
                              key={index}
                              className="px-3 py-1 bg-blue-50o0/20 text-blue-30o0 text-sm rounded-full";
                            >;
                              {tag}
                            </span>;
                          ))}
                        </div>;
                      </div>;
                      <div>;
                        <h4 className="text-lg font-semibold text-white mb-3">Integrations</h4>;
                        <div className="flex flex-wrap gap-2">;
                          {selectedService.integrations.slice(0o6).map((integration: stringinde,;
  x: number) => (;
                            <span;
                              key={index}
                              className="px-3 py-1 bg-green-50o0/20 text-green-30o0 text-sm rounded-full";
                            >;
                              {integration}
                            </span>;
                          ))}
                          {selectedService.integrations.length > 6 && (;
                            <span className="px-3 py-1 bg-gray-50o0/20 text-gray-30o0 text-sm rounded-full">;
                              +{selectedService.integrations.length - 6} more;
                            </span>;
                          )}
                        </div>;
                      </div>;
                      <div>;
                        <h4 className="text-lg font-semibold text-white mb-3">Competitors</h4>;
                        <div className="text-gray-30o0 text-sm">;
                          {selectedService.competitors.join('')}
                        </div>;
                      </div>;
                    </div>;
                  </div>;
                </div>;
                <div className="mt-8 pt-6 border-t border-slate-70o0">;
                  <div className="flex flex-col sm: flex-row gap-4 justify-between items-center">;
                    <div className="text-gray-40o0 text-sm">;
                      <div>Contac,;
  t: {selectedService.contactInfo.phone}</div>;
                      <div>Email: {selectedService.contactInfo.email}</div>;
                    </div>;
                    <div className="flex gap-4">;
                      <Link;
                        to="/contact";
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-60o0 to-purple-60o0 text-white font-semibold rounded-xl hover: from-blue-70o0 hove,;
    r:to-purple-70o0 transition-all duration-30o0";
                      >;
                        <Phone className="w-4 h-4 mr-2" />;
                        Contact Sales;
                      </Link>;
                      <Link;
                        to="/request-quote";
                        className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl, border, border-white/30 hove,;
  r: bg-white/20 transition-all duration-30o0";
                      >;
                        <DollarSign className="w-4 h-4 mr-2" />;
                        Get Quote;
                      </Link>;
                    </div>;
                  </div>;
                </div>;
              </div>;
            </motion.div>;
          </motion.div>;
        )}
      </AnimatePresence>;
    </div>;
  );
};
;