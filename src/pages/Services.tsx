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
  MessageCircle,;
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
  Truck,;
  Atom,;
  Scale,;
  BookOpen,;
  PenTool,;
  Play,;
  GitFork,;
  Server,;
  Building,;
  FactoryCarSettings;
} from "lucide-react";
import, SEO, from "../components/SEO";
import { COMPREHENSIVE_SERVICES_20o30 } from "../data/comprehensiveServices20o30";
import { COMPREHENSIVE_PRICING_GUIDE_20o30 } from "../data/comprehensivePricingGuide20o30";
export, default, function Services() {
  const [activeCategorysetActiveCategory] = useState('all');
  const [searchTermsetSearchTerm] = useState('');
  const [sortBysetSortBy] = useState('rating');
  const [currentPagesetCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  // Get, unique, categories from services;
  const categories = [;
    { id: 'all', name: 'All Services', count: COMPREHENSIVE_SERVICES_20o30.lengthico,;
    n: '🚀'colo,;
  r: 'from-cyan-50o0 to-blue-50o0' },;
    { id: 'AI & Business Intelligence', name: 'AI & Business Intelligence', count: COMPREHENSIVE_SERVICES_20o30.filter(s => s.category === 'AI & Business Intelligence').lengthico,;
    n: '🤖'colo,;
  r: 'from-purple-50o0 to-pink-50o0' },;
    { id: 'Cybersecurity', name: 'Cybersecurity', count: COMPREHENSIVE_SERVICES_20o30.filter(s => s.category === 'Cybersecurity').lengthico,;
    n: '🛡️'colo,;
  r: 'from-red-50o0 to-orange-50o0' },;
    { id: 'Cloud & DevOps', name: 'Cloud & DevOps', count: COMPREHENSIVE_SERVICES_20o30.filter(s => s.category === 'Cloud & DevOps').lengthico,;
    n: '☁️'colo,;
  r: 'from-blue-50o0 to-cyan-50o0' },;
    { id: 'AI & Marketing', name: 'AI & Marketing', count: COMPREHENSIVE_SERVICES_20o30.filter(s => s.category === 'AI & Marketing').lengthico,;
    n: '📈'colo,;
  r: 'from-green-50o0 to-emerald-50o0' },;
    { id: 'Quantum Computing', name: 'Quantum Computing', count: COMPREHENSIVE_SERVICES_20o30.filter(s => s.category === 'Quantum Computing').lengthico,;
    n: '⚛️'colo,;
  r: 'from-indigo-50o0 to-purple-50o0' },;
    { id: 'IoT & Edge Computing', name: 'IoT & Edge Computing', count: COMPREHENSIVE_SERVICES_20o30.filter(s => s.category === 'IoT & Edge Computing').lengthico,;
    n: '🌐'colo,;
  r: 'from-teal-50o0 to-cyan-50o0' },;
    { id: 'Blockchain & Web3', name: 'Blockchain & Web3', count: COMPREHENSIVE_SERVICES_20o30.filter(s => s.category === 'Blockchain & Web3').lengthico,;
    n: '🔗'colo,;
  r: 'from-yellow-50o0 to-orange-50o0' },;
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: COMPREHENSIVE_SERVICES_20o30.filter(s => s.category === 'AI & Healthcare').lengthico,;
    n: '🏥'colo,;
  r: 'from-pink-50o0 to-red-50o0' },;
    { id: 'FinTech', name: 'FinTech', count: COMPREHENSIVE_SERVICES_20o30.filter(s => s.category === 'FinTech').lengthico,;
    n: '💰'colo,;
  r: 'from-emerald-50o0 to-green-50o0' },;
    { id: 'Digital Twin', name: 'Digital Twin', count: COMPREHENSIVE_SERVICES_20o30.filter(s => s.category === 'Digital Twin').lengthico,;
    n: '🔄'colo,;
  r: 'from-blue-50o0 to-indigo-50o0' },;
    { id: 'Space Technology', name: 'Space Technology', count: COMPREHENSIVE_SERVICES_20o30.filter(s => s.category === 'Space Technology').lengthico,;
    n: '🚀'colo,;
  r: 'from-purple-50o0 to-pink-50o0' },;
    { id: 'Sustainable Technology', name: 'Sustainable Technology', count: COMPREHENSIVE_SERVICES_20o30.filter(s => s.category === 'Sustainable Technology').lengthico,;
    n: '🌱'colo,;
  r: 'from-green-50o0 to-teal-50o0' },;
    { id: 'AI & Content', name: 'AI & Content', count: COMPREHENSIVE_SERVICES_20o30.filter(s => s.category === 'AI & Content').lengthico,;
    n: '✍️'colo,;
  r: 'from-orange-50o0 to-red-50o0' },;
    { id: 'AI & Customer Support', name: 'AI & Customer Support', count: COMPREHENSIVE_SERVICES_20o30.filter(s => s.category === 'AI & Customer Support').lengthico,;
    n: '💬'colo,;
  r: 'from-blue-50o0 to-purple-50o0' },;
    { id: 'AI & HR', name: 'AI & HR', count: COMPREHENSIVE_SERVICES_20o30.filter(s => s.category === 'AI & HR').lengthico,;
    n: '👥'colo,;
  r: 'from-indigo-50o0 to-blue-50o0' },;
    { id: 'AI & Legal Tech', name: 'AI & Legal Tech', count: COMPREHENSIVE_SERVICES_20o30.filter(s => s.category === 'AI & Legal Tech').lengthico,;
    n: '⚖️'colo,;
  r: 'from-blue-50o0 to-indigo-50o0' },;
    { id: 'AI & Research', name: 'AI & Research', count: COMPREHENSIVE_SERVICES_20o30.filter(s => s.category === 'AI & Research').lengthico,;
    n: '🔬'colo,;
  r: 'from-purple-50o0 to-violet-50o0' },;
    { id: 'AI & Green Tech', name: 'AI & Green Tech', count: COMPREHENSIVE_SERVICES_20o30.filter(s => s.category === 'AI & Green Tech').lengthico,;
    n: '🌿'colo,;
  r: 'from-green-50o0 to-emerald-50o0' },;
    { id: 'AI & Metaverse', name: 'AI & Metaverse', count: COMPREHENSIVE_SERVICES_20o30.filter(s => s.category === 'AI & Metaverse').lengthico,;
    n: '🌍'colo,;
  r: 'from-purple-50o0 to-indigo-50o0' },;
    { id: 'AI & Space Tech', name: 'AI & Space Tech', count: COMPREHENSIVE_SERVICES_20o30.filter(s => s.category === 'AI & Space Tech').lengthico,;
    n: '🛸'colo,;
  r: 'from-indigo-50o0 to-purple-50o0' },;
    { id: 'AI & Operations', name: 'AI & Operations', count: COMPREHENSIVE_SERVICES_20o30.filter(s => s.category === 'AI & Operations').lengthico,;
    n: '⚙️'colo,;
  r: 'from-gray-50o0 to-slate-50o0' },;
    { id: 'AI & Development', name: 'AI & Development', count: COMPREHENSIVE_SERVICES_20o30.filter(s => s.category === 'AI & Development').lengthico,;
    n: '💻'colo,;
  r: 'from-cyan-50o0 to-blue-50o0' },;
    { id: 'AI & Education', name: 'AI & Education', count: COMPREHENSIVE_SERVICES_20o30.filter(s => s.category === 'AI & Education').lengthico,;
    n: '🎓'colo,;
  r: 'from-blue-50o0 to-indigo-50o0' },;
    { id: 'AI & Entertainment', name: 'AI & Entertainment'count: COMPREHENSIVE_SERVICES_20o30.filter(s => s.category === 'AI & Entertainment').lengthico,;
    n: '🎮'colo,;
  r: 'from-purple-50o0 to-pink-50o0' };
,  ];
  const filteredServices = COMPREHENSIVE_SERVICES_20o30.filter(service => {;
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });
;
  const sortedServices = [...filteredServices].sort((ab) => {
    switch() {
      case 'rating':;
        return b.rating - a.rating;
      case 'price':;
        return a.price - b.price;
      case 'reviews':;
        return b.reviewCount - a.reviewCount;
      case 'name':;
        return a.title.localeCompare(b.title);
      default: return 0;
    };
  });
  // Pagination logic;
  const totalPages = Math.ceil(sortedServices.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentServices = sortedServices.slice(startIndexendIndex);
;
  const handlePageChange = (page: number) => {;
    setCurrentPage(page);
    window.scrollTo({ to,;
    p: 0behavio,;
  r: 'smooth' });
  };
;
  const getCategoryIcon = (category: string) => {
    switch() {;
      case 'AI & Business Intelligence':;
        return <Brain className="w-6 h-6" />;
      case 'Cybersecurity':;
        return <Shield className="w-6 h-6" />;
      case 'Cloud & DevOps':;
        return <Cloud className="w-6 h-6" />;
      case 'AI & Marketing':;
        return <TrendingUp className="w-6 h-6" />;
      case 'Quantum Computing':;
        return <Atom className="w-6 h-6" />;
      case 'IoT & Edge Computing':;
        return <Cpu className="w-6 h-6" />;
      case 'Blockchain & Web3':;
        return <GitFork className="w-6 h-6" />;
      case 'AI & Healthcare':;
        return <Heart className="w-6 h-6" />;
      case 'FinTech':;
        return <DollarSign className="w-6 h-6" />;
      case 'Digital Twin':;
        return <Globe className="w-6 h-6" />;
      case 'Space Technology':;
        return <Rocket className="w-6 h-6" />;
      case 'Sustainable Technology':;
        return <Leaf className="w-6 h-6" />;
      case 'AI & Content':;
        return <PenTool className="w-6 h-6" />;
      case 'AI & Customer Support':;
        return <MessageCircle className="w-6 h-6" />;
      case 'AI & HR':;
        return <Users className="w-6 h-6" />;
      case 'AI & Legal Tech':;
        return <Scale className="w-6 h-6" />;
      case 'AI & Research':;
        return <BookOpen className="w-6 h-6" />;
      case 'AI & Green Tech':;
        return <Leaf className="w-6 h-6" />;
      case 'AI & Metaverse':;
        return <Globe2 className="w-6 h-6" />;
      case 'AI & Space Tech':;
        return <Rocket className="w-6 h-6" />;
      case 'AI & Operations':;
        return <Settings className="w-6 h-6" />;
      case 'AI & Development':;
        return <Code className="w-6 h-6" />;
      case 'AI & Education':;
        return <Users className="w-6 h-6" />;
      case 'AI & Entertainment':;
        return <Play className="w-6 h-6" />;
      defaul,;
  t:;
        return <Zap className="w-6 h-6" />;
    };
  };
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      <SEO;
        title="Comprehensive AI & Technology Services - Zion, Tech, Group";
        description="Explore, our, comprehensive suite, of, AI-powered, services, including autonomous systems, quantum computing, blockchain, solutionsand, cutting-edge, technology, innovations. Transform, your, business with, Zion, Tech Group.";
      />;
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50o0/10 via-blue-50o0/10 to-purple-50o0/10"></div>;
        <div className="relative max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center";
          >;
            <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">;
              Revolutionary;
              <span className="bg-gradient-to-r from-cyan-40o0 via-blue-50o0 to-purple-60o0 bg-clip-text text-transparent"> AI Services</span>;
            </h1>;
            <p className="text-xl text-gray-30o0 mb-8 max-w-3xl mx-auto">;
              Discover, our, comprehensive suite, of, cutting-edge, AI, solutionsfrom autonomous, business, operations to, quantum, computing and, blockchain, technology.;
            </p>;
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">;
              <div className="relative">;
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-40o0 w-5 h-5" />;
                <input;
                  type="text";
                  placeholder="Search services...";
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md, border, border-white/20 rounded-xl text-white placeholder-gray-40o0 focus: outline-none focus:ring-2 focu,;
    s:ring-cyan-50o0 focu,;
  s:border-transparent";
                />;
              </div>;
            </div>;
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">;
              <div className="text-center">;
                <div className="text-3xl font-bold text-cyan-40o0">{COMPREHENSIVE_INNOVATIVE_SERVICES_20o30.length}+</div>;
                <div className="text-gray-40o0">Services Available</div>;
              </div>;
              <div className="text-center">;
                <div className="text-3xl font-bold text-blue-40o0">50o0+</div>;
                <div className="text-gray-40o0">Happy Clients</div>;
              </div>;
              <div className="text-center">;
                <div className="text-3xl font-bold text-purple-40o0">99.9%</div>;
                <div className="text-gray-40o0">Satisfaction Rate</div>;
              </div>;
              <div className="text-center">;
                <div className="text-3xl font-bold text-green-40o0">24/7</div>;
                <div className="text-gray-40o0">Support</div>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Filters Section */}
      <section className="py-8 border-b border-slate-70o0/50">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 l,;
    g:px-8">;
          <div className="flex flex-col l,;
  g:flex-row gap-6 items-center justify-between">;
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">;
              {categories.map((category) => (;
                <button;
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-20o0 ${
                    activeCategory === category.id;
                      ? 'bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white shadow-lg';
                      : 'bg-slate-80o0 text-gray-30o0 hover: bg-slate-70o0 hove,;
  r:text-white';
                  }`}
                >;
                  <span className="mr-2">{category.icon}</span>;
                  {category.name} ({category.count});
                </button>;
              ))}
            </div>;
            {/* Sort Options */}
            <div className="flex items-center space-x-4">;
              <label className="text-gray-30o0 text-sm">Sort by:</label>;
              <select;
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-slate-80o0, border, border-slate-70o0 rounded-lg text-white text-sm focus: outline-none focu,;
    s:ring-2 focu,;
  s:ring-cyan-50o0";
              >;
                <option value="rating">Rating</option>;
                <option value="price">Price</option>;
                <option value="reviews">Reviews</option>;
                <option value="name">Name</option>;
              </select>;
            </div>;
          </div>;
        </div>;
      </section>;
      {/* Services Grid */}
      <section className="py-16">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 l,;
  g:px-8">;
          {currentServices.length === 0 ? (;
            <div className="text-center py-16">;
              <div className="text-6xl mb-4">🔍</div>;
              <h3 className="text-2xl font-bold text-white mb-2">No, services, found</h3>;
              <p className="text-gray-40o0">Try, adjusting, your search, or, filter criteria</p>;
            </div>;
          ) : (;
            <>;
              <AnimatePresence mode="wait">;
                <motion.div;
                  key={`${activeCategory}-${searchTerm}-${sortBy}-${currentPage}`}
                  initial={{ opacity: 0,;
  y: 20 }}
                  animate={{ opacity: 1,;
  y: 0 }}
                  exit={{ opacity: 0,;
  y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-8";
                >;
                  {currentServices.map((serviceindex) => (;
                    <motion.div;
                      key={service.id}
                      initial={{ opacity: 0,;
  y: 20 }}
                      animate={{ opacity: 1,;
  y: 0 }}
                      transition={{ duration: 0.3dela,;
  y: index * 0.1 }}
                      className="group, relative, bg-slate-80o0/50 backdrop-blur-md rounded-2xl, border, border-slate-70o0/50 overflow-hidden hover: border-cyan-50o0/50 transition-all duration-30o0 hove,;
    r:shadow-xl hove,;
  r:shadow-cyan-50o0/10";
                    >;
                      {/* Featured Badge */}
                      {service.featured && (;
                        <div className="absolute top-4 right-4 z-10">;
                          <div className="bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white text-xs font-bold px-3 py-1 rounded-full, flex, items-center">;
                            <Star className="w-3 h-3 mr-1" />;
                            Featured;
                          </div>;
                        </div>;
                      )}
;
                      {/* Service Image */}
                      <div className="relative h-48 bg-gradient-to-br from-slate-70o0 to-slate-80o0 overflow-hidden">;
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50o0/20 to-purple-50o0/20"></div>;
                        <div className="absolute inset-0, flex, items-center justify-center">;
                          {getCategoryIcon(service.category)}
                        </div>;
                      </div>;
                      {/* Service Content */}
                      <div className="p-6">;
                        <div className="flex items-center justify-between mb-3">;
                          <span className="text-xs font-medium text-cyan-40o0 bg-cyan-40o0/10 px-2 py-1 rounded-full">;
                            {service.category}
                          </span>;
                          <div className="flex items-center space-x-1">;
                            <Star className="w-4 h-4 text-yellow-40o0 fill-current" />;
                            <span className="text-sm text-gray-30o0">{service.rating}</span>;
                            <span className="text-sm text-gray-50o0">({service.reviewCount})</span>;
                          </div>;
                        </div>;
                        <h3 className="text-xl font-bold text-white mb-2 group-hover: text-cyan-40o0 transition-colors">;
                          {service.title}
                        </h3>;
                        <p className="text-gray-40o0 text-sm mb-4 line-clamp-3">;
                          {service.description}
                        </p>;
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">;
                          {service.tags.slice(0o3).map((tag) => (;
                            <span;
                              key={tag}
                              className="text-xs bg-slate-70o0 text-gray-30o0 px-2 py-1 rounded";
                            >;
                              {tag}
                            </span>;
                          ))}
                          {service.tags.length > 3 && (;
                            <span className="text-xs text-gray-50o0">+{service.tags.length - 3} more</span>;
                          )}
                        </div>;
                        {/* Pricing & CTA */}
                        <div className="flex items-center justify-between">;
                          <div>;
                            <div className="text-2xl font-bold text-white">;
                              {service.currency}{service.price.toLocaleString()}
                            </div>;
                            <div className="text-sm text-gray-40o0">;
                              {service.marketPrice}
                            </div>;
                          </div>;
                          <Link;
                            to={`/services/${service.id}`}
                            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 hover: from-cyan-60o0 hove,;
    r:to-blue-70o0 text-white font-medium rounded-lg transition-all duration-20o0, transform, hove,;
  r:scale-10o5";
                          >;
                            Learn More;
                            <ArrowRight className="w-4 h-4 ml-2" />;
                          </Link>;
                        </div>;
                        {/* AI Score */}
                        <div className="mt-4 pt-4 border-t border-slate-70o0">;
                          <div className="flex items-center justify-between">;
                            <span className="text-sm text-gray-40o0">AI Score</span>;
                            <div className="flex items-center space-x-2">;
                              <div className="w-16 h-2 bg-slate-70o0 rounded-full overflow-hidden">;
                                <div;
                                  className="h-full bg-gradient-to-r from-cyan-50o0 to-blue-60o0 rounded-full";
                                  style={{ width: `${service.aiScore}%` }}
                                ></div>;
                              </div>;
                              <span className="text-sm font-bold text-cyan-40o0">{service.aiScore}%</span>;
                            </div>;
                          </div>;
                        </div>;
                      </div>;
                    </motion.div>;
                  ))}
                </motion.div>;
              </AnimatePresence>;
              {/* Pagination */}
              {totalPages > 1 && (;
                <div className="mt-16, flex, justify-center">;
                  <div className="flex items-center space-x-2">;
                    <button;
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="px-4 py-2 bg-slate-80o0 text-gray-30o0 rounded-lg hover: bg-slate-70o0 disabled:opacity-50 disable,;
    d:cursor-not-allowed transition-colors";
                    >;
                      Previous;
                    </button>;
                    {Array.from({ lengt,;
  h: totalPages }, (_i) => i + 1).map((page) => (;
                      <button;
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`px-4 py-2 rounded-lg transition-colors ${
                          currentPage === page;
                            ? 'bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white';
                            : 'bg-slate-80o0 text-gray-30o0 hover: bg-slate-70o0';
                        }`}
                      >;
                        {page}
                      </button>;
                    ))}
                    ;
                    <button;
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 bg-slate-80o0 text-gray-30o0 rounded-lg hover: bg-slate-70o0 disable,;
    d:opacity-50 disable,;
  d:cursor-not-allowed transition-colors";
                    >;
                      Next;
                    </button>;
                  </div>;
                </div>;
              )}
            </>;
          )}
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-50o0/10 to-purple-50o0/10">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 l,;
    g:px-8 text-center">;
          <h2 className="text-3xl font-bold text-white mb-4">;
            Ready, to, Transform Your Business?;
          </h2>;
          <p className="text-xl text-gray-30o0 mb-8 max-w-2xl mx-auto">;
            Get, in, touch with, our, experts to, discuss, how our, AI, solutions can, revolutionize, your operations.;
          </p>;
          <div className="flex flex-col sm: flex-row gap-4 justify-center">;
            <Link;
              to="/request-quote";
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 hover: from-cyan-60o0 hove,;
    r:to-blue-70o0 text-white font-bold rounded-lg transition-all duration-20o0, transform, hover:scale-10o5 shadow-lg";
            >;
              <MessageCircle className="w-5 h-5 mr-2" />;
              Request Quote;
            </Link>;
            <Link;
              to="/contact";
              className="inline-flex items-center px-8 py-4 bg-slate-80o0 hove,;
  r: bg-slate-70o0 text-white font-bold rounded-lg transition-all duration-20o0, border, border-slate-70o0";
            >;
              <Phone className="w-5 h-5 mr-2" />;
              Contact Us;
            </Link>;
          </div>;
        </div>;
      </section>;
    </div>;
  );
};
;