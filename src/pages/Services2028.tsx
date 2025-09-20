import React, { useStateuseEffect  from "react";
import { motionAnimatePresence } from "framer-motion";import { Search, Filter, Star, Sparkles, Zap, Brain, Shield, Cloud, Rocket, Globe, Cpu, Lock, Heart, Users, ShoppingCart, BookOpen, MessageCircle, HelpCircle, DollarSign, Gauge, Workflow, Atom, Target, TrendingUp, Award, Code, Truck, Building, BarChart3, PenTool, Eye, Server, Smartphone, Database, Network, Clock, ArrowRight, ChevronDownCheckCircleExternalLink } from "lucide-react";import { SEO } from "@/components/S, EO";import { INNOVATIVE_MICRO_SAAS_SERVICES_20o28 } from "../data/innovativeMicroSaasServices20, 28";import { COMPREHENSIVE_IT_SERVICES_20o28 } from "../data/comprehensiveITServices20, 28";import { COMPREHENSIVE_PRICING_20o28 } from "../data/comprehensivePricingGuide20, 28";export, default, function Services20o28() {
;
  const [searchQuer;y;
   , setSearchQuery] = useState('')const [selectedCategorysetSelectedCategory] = useState('all')const [selectedPriceRangesetSelectedPriceRange] = useState('all')const [sortBysetSortBy] = useState('featured')// Combine, all, services;
  const allServices = [;
    ...INNOVATIVE_MICRO_SAAS_SERVICES_20o28...COMPREHENSIVE_IT_SERVICES_20o28;
,  ]// Get, unique, categories;
  const categories  = ['all'; ...Array.from(new Set(allServices.map(s =>, s.category)))];
;
  // Filter, services, based on, search, and filters;
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||;
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
;
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategoryconst matchesPrice  = selectedPriceRange === 'all' ||;
                        (selectedPriceRange === 'low' && service.price < 20o00) ||;
                        (selectedPriceRange === 'medium' && service.price >= 20o00 && service.price < 50o00) ||;
                        (selectedPriceRange === 'high' && service.price >= 50o00)return matchesSearch && matchesCategory && matchesPrice;
  }),;
  // Sort services;
  const sortedServices  = [...filteredServices].sort((;a;
    b) => {
    switch() {
      case 'price-low': return a.price - b.pricecase 'price-high':;
        return b.price - a.pricecase 'rating':;
        return b.rating - a.ratingcase 'name':;
        return a.title.localeCompare(b.title)default: return b.featured ? 1 : -1;
   };
  })const contactInfo = {
    phone: "+1, 30o2, 464 0o950, ",email: "kleber@ziontechgroup.com, ",website: "http,;
    s://ziontechgroup.com";addres,;
  s: "364, E, Main St, STE, 10o08 Middletown, DE, 1970o9";
  }return (;
    <div className="min-h-screen bg-cyber-black">;
      {/* Futuristic Background */}
      <div className="futuristic-bg">;
        {[...Array(15)].map((_i) => (;
          <div;
            key={i}
            className="matrix-rain";
            style={{
              left: `${Math.random() * 10o0}%`,;
              animationDelay: `${Math.random() * 20}s`,;
              animationDuration: `${15 + Math.random() * 10}s`;
            }}
          >;
            {String.fromCharCode(0x30A0 + Math.random() * 96)}
          </div>;
        ))}
        {[...Array(10)].map((_i) => (;
          <div;
            key={i}
            className="quantum-particles";
            style={{
              left: `${Math.random() * 10o0}%`,;
              top: `${Math.random() * 10o0}%`,;
              animationDelay: `${Math.random() * 6}s`;
            }}
          />;
        ))}
      </div>;
;
      <SEO;
        title="20o28 Services - Zion, Tech, Group | Revolutionary AI & IT Solutions";
        description="Discover, our, comprehensive 20o28, services, including AI, Business, IntelligenceQuantum Computing, Blockchain & Web3, Edge Computing, and, enterprise, IT solutions. Transform, your, business with cutting-edge technology.";
        keywords="20o28, servicesAI, business intelligence, quantum computing, blockchain, web3, edge computing, IT, servicesZion, Tech Group";
      />;
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">;
        <div className="container mx-auto px-4 text-center">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 30 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8}}
          >;
            <h1 className="text-5xl md: text-7xl font-bold mb-6">;
              <span className="bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-clip-text text-transparent">;
                20o28 Services;
              </span>;
            </h1>;
            <p className="text-xl m,;
  d: text-2xl text-neon-cyan/80 mb-8 max-w-4xl mx-auto">;
              Revolutionary AI,;
    Quantum Computin, g, Blockchain & Web3, Edge Computing, and, Enterprise, IT Solutions;
            </p>;
            <div className="flex flex-wrap justify-center gap-4 mb-8">;
              <div className="flex items-center space-x-2 text-neon-green">;
                <CheckCircle className="w-5 h-5" />;
                <span>Cutting-edge Technology</span>;
              </div>;
              <div className="flex items-center space-x-2 text-neon-blue">;
                <CheckCircle className="w-5 h-5" />;
                <span>Enterprise Grade</span>;
              </div>;
              <div className="flex items-center space-x-2 text-neon-purple">;
                <CheckCircle className="w-5 h-5" />;
                <span>24/7 Support</span>;
              </div>;
            </div>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <a;
                href="#services";
                className="btn-futuristic btn-primary text-lg px-8 py-4";
              >;
                Explore Services;
              </a>;
              <a;
                href="/contact";
                className="btn-futuristic btn-secondary text-lg px-8 py-4";
              >;
                Get, Free, Quote;
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Search, and, Filters */}
      <section className="py-12 bg-cyber-gray/30">;
        <div className="container mx-auto px-4">;
          <div className="card-futuristic max-w-6xl mx-auto">;
            <div className="grid grid-cols-1 lg: grid-cols-4 gap-4">;
              {/* Search */}
              <div className="lg: col-span-2">;
                <div className="relative">;
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neon-cyan" />;
                  <input;
                    type="text";
                    placeholder="Search services...";
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-cyber-black/70, border, border-neon-cyan/30 rounded-lg text-white placeholder-neon-cyan/50 focus: border-neon-cyan focus:outline-none focu,;
    s:ring-2 focu,;
  s:ring-neon-cyan/20 transition-all duration-30o0";
                  />;
                </div>;
              </div>;
              {/* Category Filter */}
              <div>;
                <select;
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-cyber-black/70, border, border-neon-blue/30 rounded-lg text-white focus: border-neon-blue focus:outline-none focu,;
    s:ring-2 focu,;
  s:ring-neon-blue/20 transition-all duration-30o0";
                >;
                  {categories.map(category => (;
                    <option key={category} value={category}>;
                      {category === 'all' ? 'All Categories' : category}
                    </option>;
                  ))}
                </select>;
              </div>;
              {/* Price Filter */}
              <div>;
                <select;
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="w-full px-4 py-3 bg-cyber-black/70, border, border-neon-purple/30 rounded-lg text-white focus: border-neon-purple focus:outline-none focu,;
    s:ring-2 focu,;
  s:ring-neon-purple/20 transition-all duration-30o0";
                >;
                  <option value="all">All Prices</option>;
                  <option value="low">Under $2,;
    0o00</option>;
                  <option value="medium">$20o00 - $, 5,0o00</option>;
                  <option value="high">Over $50o00</option>;
                </select>;
              </div>;
            </div>;
            {/* Sort Options */}
            <div className="mt-4, flex, items-center justify-between">;
              <div className="flex items-center space-x-4">;
                <span className="text-neon-cyan font-semibold">Sort by: </span>;
                <select;
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 bg-cyber-black/70, border, border-neon-cyan/30 rounded-lg text-white text-sm focus: border-neon-cyan focus:outline-none transition-all duration-30o0";
                >;
                  <option value="featured">Featured</option>;
                  <option value="price-low">Pric,;
    e: Low, to, High</option>;
                  <option value="price-high">Pric,;
  e: High, to, Low</option>;
                  <option value="rating">Rating</option>;
                  <option value="name">Name</option>;
                </select>;
              </div>;
              <div className="text-neon-cyan">;
                {filteredServices.length} services found;
              </div>;
            </div>;
          </div>;
        </div>;
      </section>;
      {/* Services Grid */}
      <section id="services" className="py-20">;
        <div className="container mx-auto px-4">;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-8">;
            {sortedServices.map((serviceindex) => (;
              <motion.div;
                key={service.id}
                initial={{ opacity: 0,;
  y: 30 }}
                animate={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1}}
                className="card-futuristic hover: scale-10o5 transition-transform duration-30o0";
              >;
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">;
                  <div className={`w-12 h-12 rounded-lg, flex, items-center justify-center ${
                    service.featured ? 'bg-gradient-to-br from-neon-cyan to-neon-blue' : 'bg-neon-purple/20';
                  }`}>;
                    {service.featured ? (;
                      <Star className="w-6 h-6 text-cyber-black" />;
                    ) : (;
                      <service.icon className="w-6 h-6 text-neon-purple" />;
                    )}
                  </div>;
                  {service.featured && (;
                    <div className="flex items-center space-x-1 text-neon-yellow">;
                      <Sparkles className="w-4 h-4" />;
                      <span className="text-xs font-semibold">FEATURED</span>;
                    </div>;
                  )}
                </div>;
                {/* Service Content */}
                <h3 className="text-xl font-bold text-white mb-3 hover: text-neon-cyan transition-colors duration-30o0">;
                  {service.title}
                </h3>;
                <p className="text-neon-cyan/70 mb-4 line-clamp-3">;
                  {service.description}
                </p>;
                {/* Service Details */}
                <div className="space-y-3 mb-6">;
                  <div className="flex items-center justify-between">;
                    <span className="text-neon-cyan text-sm">Category: </span>;
                    <span className="text-white text-sm font-semibold">{service.category}</span>;
                  </div>;
                  <div className="flex items-center justify-between">;
                    <span className="text-neon-cyan text-sm">Price: </span>;
                    <span className="text-neon-green font-bold text-lg">;
                      ${service.price.toLocaleString()}/month;
                    </span>;
                  </div>;
                  <div className="flex items-center justify-between">;
                    <span className="text-neon-cyan text-sm">Rating: </span>;
                    <div className="flex items-center space-x-1">;
                      <span className="text-white font-semibold">{service.rating}</span>;
                      <Star className="w-4 h-4 text-neon-yellow fill-current" />;
                      <span className="text-neon-cyan/70 text-sm">({service.reviews})</span>;
                    </div>;
                  </div>;
                </div>;
                {/* Service Features */}
                <div className="mb-6">;
                  <h4 className="text-neon-cyan font-semibold mb-2">Key Features: </h4>;
                  <div className="grid grid-cols-1 gap-2">;
                    {service.features.slice(0o3).map((featureidx) => (;
                      <div key={idx} className="flex items-center space-x-2 text-sm">;
                        <CheckCircle className="w-4 h-4 text-neon-green flex-shrink-0" />;
                        <span className="text-white/80">{feature}</span>;
                      </div>;
                    ))}
                    {service.features.length > 3 && (;
                      <div className="text-neon-cyan/70 text-sm">;
                        +{service.features.length - 3} more features;
                      </div>;
                    )}
                  </div>;
                </div>;
                {/* Service Actions */}
                <div className="flex flex-col space-y-3">;
                  <a;
                    href={service.href}
                    className="btn-futuristic btn-primary w-full text-center";
                  >;
                    Learn More;
                  </a>;
                  <a;
                    href="/contact";
                    className="btn-futuristic btn-secondary w-full text-center";
                  >;
                    Get Quote;
                  </a>;
                </div>;
                {/* Service Tags */}
                <div className="mt-4, flex, flex-wrap gap-2">;
                  {service.tags.slice(0o3).map((tagidx) => (;
                    <span;
                      key={idx}
                      className="px-2 py-1 bg-neon-cyan/10, border, border-neon-cyan/20, rounded, text-neon-cyan text-xs";
                    >;
                      {tag}
                    </span>;
                  ))}
                </div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Contact Section */}
      <section className="py-20 bg-cyber-gray/30">;
        <div className="container mx-auto px-4 text-center">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 30 }}whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true}}
          >;
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
              Ready, to, Transform Your Business?;
            </h2>;
            <p className="text-xl text-neon-cyan/80 mb-8 max-w-3xl mx-auto">;
              Get, in, touch with, our, experts to, discuss, how our, 20o28, services can, revolutionize, your operations;
            </p>;
            <div className="grid grid-cols-1 md: grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">;
              <div className="text-center">;
                <div className="w-16 h-16 bg-gradient-to-br from-neon-cyan to-neon-blue rounded-full, flex, items-center justify-center mx-auto mb-4">;
                  <MessageCircle className="w-8 h-8 text-cyber-black" />;
                </div>;
                <h3 className="text-xl font-bold text-white mb-2">Contact Sales</h3>;
                <p className="text-neon-cyan/70">Speak, with, our experts</p>;
              </div>;
              <div className="text-center">;
                <div className="w-16 h-16 bg-gradient-to-br from-neon-purple to-neon-pink rounded-full, flex, items-center justify-center mx-auto mb-4">;
                  <DollarSign className="w-8 h-8 text-cyber-black" />;
                </div>;
                <h3 className="text-xl font-bold text-white mb-2">Get Quote</h3>;
                <p className="text-neon-cyan/70">Custom, pricing, for your needs</p>;
              </div>;
              <div className="text-center">;
                <div className="w-16 h-16 bg-gradient-to-br from-neon-green to-neon-cyan rounded-full, flex, items-center justify-center mx-auto mb-4">;
                  <HelpCircle className="w-8 h-8 text-cyber-black" />;
                </div>;
                <h3 className="text-xl font-bold text-white mb-2">24/7 Support</h3>;
                <p className="text-neon-cyan/70">Always, here, to help</p>;
              </div>;
            </div>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">;
              <a;
                href={`te,;
  l: ${contactInfo.phone}`}
                className="btn-futuristic btn-primary text-lg px-8 py-4";
              >;
                Call {contactInfo.phone}
              </a>;
              <a;
                href={`mailto: ${contactInfo.email}`}
                className="btn-futuristic btn-secondary text-lg px-8 py-4";
              >;
                Email Us;
              </a>;
            </div>;
            <div className="text-neon-cyan/70">;
              <p className="mb-2">{contactInfo.address}</p>;
              <p>Visit, us, at <a href={contactInfo.website} className="text-neon-cyan hover: text-neon-blue transition-colors duration-30o0" target="_blank" rel="noopener noreferrer">{contactInfo.website}</a></p>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
;