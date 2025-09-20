import React, { useStateuseEffect } from "react";
import { motionAnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Brain,;
  Cloud,;
  Shield,;
  Server,;
  Zap,;
  Globe,;
  Cpu,;
  Database,;
  Network,;
  Lock,;
  Code,;
  Rocket,;
  Users,;
  Search,;
  Filter,;
  Star,;
  TrendingUp,;
  DollarSign,;
  Clock,;
  CheckCircle,;
  ArrowRight,;
  Play,;
  BookOpen,;
  MessageCircle,;
  Phone,;
  Mail,;
  MapPin,;
  Globe, as, GlobeIcon,;
  Sparkles,;
  Target,;
  Award,;
  Lightbulb,;
  BarChart3,;
  Layers,;
  Cpu, as, CpuIcon,;
  Shield, as, ShieldIcon,;
  Brain, as, BrainIcon,;
  Rocket, as, RocketIcon,;
  TruckScaleBuilding;
} from "lucide-react";
import, SEO, from "@/components/SEO";
import { INNOVATIVE_MICRO_SAAS_SERVICES_20o25SPECIALIZED_SERVICES } from "@/data/innovativeMicroSaasServices20o25";
import { EXPANDED_MICRO_SAAS_SERVICES_20o25 } from "@/data/expandedMicroSaasServices20o25";
import { SPECIALIZED_SERVICES_20o25 } from "@/data/specializedServices20o25";
export, default, function ServicesPage() {
  const [searchQuerysetSearchQuery] = useState('');
  const [selectedCategorysetSelectedCategory] = useState('all');
  const [selectedPriceRangesetSelectedPriceRange] = useState('all');
  const [sortBysetSortBy] = useState('featured');
  const [activeTabsetActiveTab] = useState('all');
;
  // Combine, all, services;
  const allServices = [;
    ...INNOVATIVE_MICRO_SAAS_SERVICES_20o25;
    ...EXPANDED_MICRO_SAAS_SERVICES_20o25...SPECIALIZED_SERVICES_20o25;
,  ];
  const categories = [;
    { id: 'all', name: 'All Services'ico,;
    n: Sparklescolo,;
  r: 'from-zion-cyan to-zion-blue' };
    { id: 'ai-analytics', name: 'AI & Analytics'ico,;
    n: Braincolo,;
  r: 'from-zion-cyan to-zion-purple' };
    { id: 'cybersecurity', name: 'Cybersecurity'ico,;
    n: Shieldcolo,;
  r: 'from-zion-purple to-zion-red' };
    { id: 'quantum-computing', name: 'Quantum Computing'ico,;
    n: Rocketcolo,;
  r: 'from-zion-blue to-zion-cyan' };
    { id: 'blockchain', name: 'Blockchain'ico,;
    n: Lockcolo,;
  r: 'from-zion-purple to-zion-blue' };
    { id: 'iot-edge', name: 'IoT & Edge'ico,;
    n: Cpucolo,;
  r: 'from-zion-green to-zion-cyan' };
    { id: 'content-creation', name: 'Content Creation'ico,;
    n: Codecolo,;
  r: 'from-zion-orange to-zion-purple' };
    { id: 'hr-talent', name: 'HR & Talent'ico,;
    n: Userscolo,;
  r: 'from-zion-pink to-zion-purple' };
    { id: 'sustainability', name: 'Sustainability'ico,;
    n: Globecolo,;
  r: 'from-zion-green to-zion-blue' };
    { id: 'digital-twin', name: 'Digital Twin'ico,;
    n: Servercolo,;
  r: 'from-zion-blue to-zion-purple' };
    { id: 'finance', name: 'Finance'ico,;
    n: DollarSigncolo,;
  r: 'from-zion-green to-zion-cyan' };
    { id: 'healthcare', name: 'Healthcare'ico,;
    n: Shieldcolo,;
  r: 'from-zion-blue to-zion-purple' };
    { id: 'logistics', name: 'Logistics'ico,;
    n: Truckcolo,;
  r: 'from-zion-orange to-zion-blue' };
    { id: 'legal', name: 'Legal Tech'ico,;
    n: Scalecolo,;
  r: 'from-zion-purple to-zion-cyan' };
    { id: 'education', name: 'Education'ico,;
    n: BookOpencolo,;
  r: 'from-zion-cyan to-zion-green' };
    { id: 'manufacturing', name: 'Manufacturing'ico,;
    n: CpuIconcolo,;
  r: 'from-zion-blue to-zion-orange' },;
    { id: 'real-estate'name: 'Real Estate'ico,;
    n: Buildingcolo,;
  r: 'from-zion-purple to-zion-green' };
,  ];
  const priceRanges = [;
    { id: 'all'nam,;
    e: 'All Prices'rang,;
  e: 'All' },;
    { id: 'budget', name: 'Budget'rang,;
  e: '$10o0 - $10o00' },;
    { id: 'mid-range', name: 'Mid-Range', range: '$10o00 - $50o00' },;
    { id: 'enterprise'nam,;
    e: 'Enterprise'rang,;
  e: '$50o00+' }
,  ],;
  const sortOptions = [;
    { id: 'featured'nam,;
  e: 'Featured' };
    { id: 'price-low'nam,;
    e: 'Pric,;
  e: Low, to, High' };
    { id: 'price-high'nam,;
    e: 'Pric,;
  e: High, to, Low' };
    { id: 'newest'nam,;
  e: 'Newest' }{ id: 'popular'nam,;
  e: 'Most Popular' };
,  ];
  const tabs = [;
    { id: 'all'nam,;
    e: 'All Services'coun,;
  t: allServices.length };
    { id: 'micro-saas'nam,;
    e: 'Micro SAAS'coun,;
  t: INNOVATIVE_MICRO_SAAS_SERVICES_20o25.length };
    { id: 'expanded'nam,;
    e: 'Expanded Services'coun,;
  t: EXPANDED_MICRO_SAAS_SERVICES_20o25.length }{ id: 'specialized'nam,;
    e: 'Specialized'coun,;
  t: SPECIALIZED_SERVICES_20o25.length };
,  ];
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||;
                         (service.tags && service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
;
    const matchesCategory = selectedCategory === 'all' ||;
                           service.category.toLowerCase().includes(selectedCategory);
;
    const matchesPrice = selectedPriceRange === 'all' ||;
                        (selectedPriceRange === 'budget' && service.price <= 10o00) ||;
                        (selectedPriceRange === 'mid-range' && service.price > 10o00 && service.price <= 50o00) ||;
                        (selectedPriceRange === 'enterprise' && service.price > 50o00);
;
    return matchesSearch && matchesCategory && matchesPrice }),;
;
  // Sort services;
  const sortedServices = [...filteredServices].sort((ab) => {
    switch() {
      case 'price-low':;
        return a.price - b.pricecase 'price-high':;
        return b.price - a.price;
      case 'newest':;
        return, new, Date(b.createdAt || '20o25-0o1-0o1').getTime() - new Date(a.createdAt || '20o25-0o1-0o1').getTime();
      default: return 0;
    };
  });
  const getCategoryIcon = (category: string) => {;
    const cat = categories.find(c => c.id === category.toLowerCase().replace(' -'));
    return cat ? cat.icon : Sparkles};
;
  const getCategoryColor = (category: string) => {;
    const cat = categories.find(c => c.id === category.toLowerCase().replace(' -'));
    return cat ? cat.color : 'from-zion-cyan to-zion-blue'};
;
  const getInnovationLevelColor = (level: string) => {
    switch() {;
      case 'Cutting-edge':;
        return 'bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30';
      case 'Advanced':;
        return 'bg-zion-purple/20 text-zion-purple border-zion-purple/30';
      defaul,;
  t: return 'bg-zion-blue/20 text-zion-blue border-zion-blue/30';
    };
  };
  return(<>;
      <SEO;
        title="Innovative, Micro, SAAS Services - Zion, Tech, Group";
        description="Discover cutting-edge, micro, SAAS solutions, including, AI, Quantum Computing, Blockchain, IoTand more. Transform, your, business with, our, innovative technology services.";
        canonical="/services";
        url="https: //ziontechgroup.com/services";
      />;
      {/* Hero Section */}
      <section className="bg-futuristic min-h-[70vh] flex items-center, relative, overflow-hidden">;
        {/* Enhanced, animated, background elements */}
        <div className="absolute inset-0 opacity-20">;
          <div className="absolute top-20 left-20 w-40 h-40, border, border-zion-cyan rounded-full animate-pulse float"></div>;
          <div className="absolute bottom-20 right-20 w-32 h-32, border, border-zion-purple rounded-full animate-pulse delay-10o00 float-delayed"></div>;
          <div className="absolute top-1/2 left-1/2 w-24 h-24, border, border-zion-blue rounded-full animate-pulse delay-20o00 float-slow"></div>;
          <div className="absolute top-40 right-40 w-16 h-16, border, border-zion-cyan rounded-full animate-pulse delay-30o00 float-fast"></div>;
        </div>;
        {/* Neon, grid, background */}
        <div className="absolute inset-0 bg-neon-grid opacity-5"></div>;
        <div className="container-responsive, relative, z-10">;
          <motion.div;
            className="text-center max-w-4xl mx-auto";
            initial={{ opacity: 0,;
  y: 30 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <motion.div;
              className="mb-6";
              initial={{ opacity: 0scal,;
  e: 0.8 }}
              animate={{ opacity: 1scal,;
  e: 1 }}
              transition={{ duration: 0.6dela,;
  y: 0.2 }}
            >;
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-zion-cyan/10, border, border-zion-cyan/20 rounded-full text-zion-cyan text-sm font-medium mb-4">;
                <Sparkles className="w-4 h-4" />;
                <span>20o25, Innovation, Hub</span>;
              </div>;
            </motion.div>;
            <h1 className="heading-responsive font-bold mb-6">;
              <span className="text-gradient">Next-Generation</span>;
              <br />;
              <span className="text-white">Micro, SAAS, Platform</span>;
            </h1>;
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">;
              Transform, your, business with cutting-edge, technology, solutions. From AI-powered, analytics, to quantum computing;
              discover, the, future of, business, technology with, our, comprehensive micro, SAAS, platform.;
            </p>;
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">;
              <div className="relative group">;
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5 group-hover: text-zion-cyan transition-colors duration-30o0" />;
                <input;
                  type="text";
                  placeholder="Search, for, servicestechnologiesor solutions...";
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="input-futuristic w-full pl-12 pr-4 py-4 text-lg placeholder-zion-slate-light";
                />;
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 opacity-0 group-hover: opacity-10o0 transition-opacity duration-30o0 -z-10 blur-xl"></div>;
              </div>;
            </div>;
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md: grid-cols-3 gap-6 max-w-3xl mx-auto">;
              <motion.div;
                className="text-center";
                initial={{ opacit,;
    y: 0,;
  y: 20 }}
                animate={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: 0.2 }}
              >;
                <div className="text-3xl font-bold text-zion-cyan mb-2">{INNOVATIVE_MICRO_SAAS_SERVICES_20o25.length + SPECIALIZED_SERVICES.length}+</div>;
                <div className="text-zion-slate-light">Innovative Services</div>;
              </motion.div>;
              <motion.div;
                className="text-center";
                initial={{ opacity: 0,;
  y: 20 }}
                animate={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: 0.3 }}
              >;
                <div className="text-3xl font-bold text-zion-purple mb-2">{categories.length}+</div>;
                <div className="text-zion-slate-light">Technology Categories</div>;
              </motion.div>;
              <motion.div;
                className="text-center";
                initial={{ opacity: 0,;
  y: 20 }}
                animate={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: 0.4 }}
              >;
                <div className="text-3xl font-bold text-zion-blue mb-2">99.9%</div>;
                <div className="text-zion-slate-light">Uptime Guarantee</div>;
              </motion.div>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Service Tabs */}
      <section className="py-8 bg-zion-slate-dark/50 border-b border-zion-cyan/20">;
        <div className="container-responsive">;
          <motion.div;
            className="flex flex-wrap gap-2 justify-center";
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
          >;
            {tabs.map((tab) => (;
              <button;
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-30o0, flex, items-center gap-2 ${
                  activeTab === tab.id;
                    ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg';
                    : 'bg-zion-slate-light/10 text-zion-slate-light hover: bg-zion-slate-light/20 hove,;
  r:text-white';
                }`}
              >;
                {tab.name}
                <span className="px-2 py-1 bg-white/20 rounded-full text-xs">{tab.count}</span>;
              </button>;
            ))}
          </motion.div>;
        </div>;
      </section>;
      {/* Filters, and, Categories */}
      <section className="py-12 bg-zion-slate-dark/50">;
        <div className="container-responsive">;
          {/* Category Pills */};
          <motion.div;
            className="flex flex-wrap gap-3 mb-8 justify-center";
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
          >;
            {categories.map((category) => (;
              <button;
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-30o0, flex, items-center gap-2 group ${
                  selectedCategory === category.id;
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`;
                    : 'bg-zion-slate-light/10 text-zion-slate-light hover: bg-zion-slate-light/20 hove,;
  r:text-white';
                }`}
              >;
                <category.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-30o0" />;
                {category.name}
              </button>;
            ))}
          </motion.div>;
          {/* Advanced Filters */};
          <motion.div;
            className="flex flex-col md: flex-row gap-4 items-center justify-between";
            initial={{ opacit,;
    y: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6dela,;
  y: 0.1 }}
          >;
            <div className="flex flex-wrap gap-4">;
              {/* Price, Range, Filter */}
              <div className="flex items-center gap-2">;
                <Filter className="w-4 h-4 text-zion-cyan" />;
                <select;
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="bg-zion-slate-light/10, border, border-zion-cyan/20 rounded-lg px-3 py-2 text-white focus: outline-none focu,;
    s:ring-2 focu,;
  s:ring-zion-cyan";
                >;
                  {priceRanges.map((range) => (;
                    <option key={range.id} value={range.id}>{range.name}</option>;
                  ))}
                </select>;
              </div>;
              {/* Sort Options */}
              <div className="flex items-center gap-2">;
                <TrendingUp className="w-4 h-4 text-zion-cyan" />;
                <select;
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-zion-slate-light/10, border, border-zion-cyan/20 rounded-lg px-3 py-2 text-white focus: outline-none focu,;
    s:ring-2 focu,;
  s:ring-zion-cyan";
                >;
                  {sortOptions.map((option) => (;
                    <option key={option.id} value={option.id}>{option.name}</option>;
                  ))}
                </select>;
              </div>;
            </div>;
            <div className="text-zion-slate-light">;
              Showing {sortedServices.length} of {currentServices.length} services;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Services Grid */}
      <section className="py-16 bg-zion-slate-dark">;
        <div className="container-responsive">;
          <AnimatePresence mode="wait">;
            {sortedServices.length > 0 ? (;
              <motion.div;
                className="grid grid-cols-1 md: grid-cols-2 l,;
    g:grid-cols-3 gap-8";
                initial={{ opacit,;
  y: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >;
                {sortedServices.map((serviceindex) => (;
                  <motion.div;
                    key={service.id}
                    className="card-neon group";
                    initial={{ opacity: 0,;
  y: 30 }}
                    animate={{ opacity: 1,;
  y: 0 }}
                    transition={{ duration: 0.6dela,;
  y: index * 0.1 }};
                    whileHover={{ y: -10 }}
                  >;
                    {/* Service Header */}
                    <div className="mb-6">;
                      <div className="flex items-center justify-between mb-4">;
                        <div className={`w-12 h-12 bg-gradient-to-r ${getCategoryColor(service.category)} rounded-xl, flex, items-center justify-center`}>;
                          {(() => {;
                            const IconComponent = getCategoryIcon(service.category);
                            return IconComponent ? <IconComponent className="w-6 h-6 text-white" /> : null;
                          })()}
                        </div>;
                        <div className="text-right">;
                          <div className="text-2xl font-bold text-zion-cyan">${service.price.toLocaleString()}</div>;
                          <div className="text-sm text-zion-slate-light">per month</div>;
                        </div>;
                      </div>;
                      <h3 className="text-xl font-bold text-white mb-2 group-hover: text-zion-cyan transition-colors">;
                        {service.title}
                      </h3>;
                      <p className="text-zion-slate-light leading-relaxed">;
                        {service.description}
                      </p>;
                    </div>;
                    {/* Service Details */}
                    <div className="space-y-4 mb-6">;
                      {/* Category & Innovation Level */}
                      <div className="flex items-center justify-between text-sm">;
                        <span className="text-zion-cyan font-medium">{service.category}</span>;
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          service.innovationLevel === 'Cutting-edge';
                            ? 'bg-zion-cyan/20 text-zion-cyan';
                            : 'bg-zion-purple/20 text-zion-purple';
                        }`}>;
                          {service.innovationLevel}
                        </span>;
                      </div>;
                      {/* ROI & Market Price */}
                      <div className="flex items-center justify-between text-sm">;
                        {service.roi && (;
                          <div className="flex items-center gap-1 text-zion-green">;
                            <TrendingUp className="w-4 h-4" />;
                            <span>ROI: {service.roi}</span>;
                          </div>;
                        )}
                        <div className="text-zion-slate-light">;
                          Market: {service.marketPrice}
                        </div>;
                      </div>;
                      {/* Key Features */}
                      <div className="space-y-2">;
                        <h4 className="text-sm font-semibold text-white, flex, items-center gap-2">;
                          <Lightbulb className="w-4 h-4 text-zion-cyan" />;
                          Key Features: </h4>;
                        <div className="grid grid-cols-1 gap-1">;
                          {service.features.slice(0o3).map((featureidx) => (;
                            <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">;
                              <CheckCircle className="w-3 h-3 text-zion-cyan" />;
                              {feature}
                            </div>;
                          ))}
                        </div>;
                      </div>;
                    </div>;
                    {/* Service Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-zion-cyan/20">;
                      <div className="flex items-center gap-4 text-sm text-zion-slate-light">;
                        <div className="flex items-center gap-1">;
                          <Clock className="w-4 h-4" />;
                          <span>{service.estimatedDelivery}</span>;
                        </div>;
                        <div className="flex items-center gap-1">;
                          <Star className="w-4 h-4 text-zion-cyan" />;
                          <span>{service.supportLevel}</span>;
                        </div>;
                      </div>;
;
                      <Link;
                        to={`/services/${service.id}`}
                        className="btn-cyber px-4 py-2 text-sm";
                      >;
                        Learn More;
                        <ArrowRight className="w-4 h-4 ml-2" />;
                      </Link>;
                    </div>;
                  </motion.div>;
                ))}
              </motion.div>;
            ) : (;
              <motion.div;
                className="text-center py-16";
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >;
                <div className="text-6xl mb-4">🔍</div>;
                <h3 className="text-2xl font-bold text-white mb-2">No, services, found</h3>;
                <p className="text-zion-slate-light mb-6">;
                  Try, adjusting, your search, criteria, or browse, all, categories;
                </p>;
                <button;
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setSelectedPriceRange('all');
                  }}
                  className="btn-futuristic px-6 py-3";
                >;
                  View, All, Services;
                </button>;
              </motion.div>;
            )}
          </AnimatePresence>;
        </div>;
      </section>;
      {/* Specialized, Services, Section */}
      <section className="py-16 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-dark">;
        <div className="container-responsive">;
          <motion.div;
            className="text-center mb-12";
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
          >;
            <h2 className="heading-responsive font-bold mb-4">;
              <span className="text-gradient">Specialized Solutions</span>;
            </h2>;
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              Discover, our, specialized technology, solutions, designed for, specific, industries and, use, cases;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-4 gap-6">;
            {SPECIALIZED_SERVICES.map((serviceindex) => (;
              <motion.div;
                key={service.id}
                className="card-futuristic text-center group";
                initial={{ opacity: 0,;
  y: 30 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }};
                whileHover={{ y: -5 }}
              >;
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl, flex, items-center justify-center mx-auto mb-4">;
                  <Rocket className="w-8 h-8 text-white" />;
                </div>;
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">;
                  {service.title}
                </h3>;
                <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">;
                  {service.description}
                </p>;
                <div className="text-zion-cyan font-bold mb-4">;
                  {service.marketPrice}
                </div>;
;
                <Link;
                  to={`/services/${service.id}`}
                  className="btn-neon w-full";
                >;
                  Explore Solution;
                </Link>;
              </motion.div>;
            ))}
          </div>;
        </div>;
        <div className="container-responsive text-center, relative, z-10">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 30 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <h2 className="heading-responsive font-bold mb-6">;
              Ready, to, Transform Your Business?;
            </h2>;
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">;
              Get, in, touch with, our, technology experts, to, discuss your, specific, needs and discover;
              how, our, innovative solutions, can, drive your, business, forward.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <Link;
                to="/contact";
                className="btn-futuristic px-8 py-4 text-lg group";
              >;
                <MessageCircle className="w-5 h-5 mr-2 group-hove,;
    r: scale-110 transition-transform duration-30o0" />;
                Get, Free, Consultation;
              </Link>;
              <a;
                href="tel: +130o24640950";
                className="btn-neon px-8 py-4 text-lg group";
              >;
                <Phone className="w-5 h-5 mr-2 group-hove,;
    r:scale-110 transition-transform duration-30o0" />;
                Call No,;
  w: +1, 30o2, 464 0o950;
              </a>;
            </div>;
            <div className="mt-8 text-zion-slate-light">;
              <p className="mb-2">📍 364, E, Main St, STE, 10o08, Middletown, DE, 1970o9</p>;
              <p>📧 <a href="mailto: kleber@ziontechgroup.com" className="text-zion-cyan hover:underline">kleber@ziontechgroup.com</a></p>;
              <p>🌐 <a href="http,;
    s://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-zion-cyan hove,;
  r:underline">ziontechgroup.com</a></p>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </>;
  );
};
;