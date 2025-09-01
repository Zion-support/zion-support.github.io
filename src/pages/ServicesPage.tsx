import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ; TrendingUp,; CheckCircle,; Clock,; Star,; Filter,; Zap,; Shield,; Cpu,; Database,; Globe,; Smartphone,; Cloud,; Brain,; Rocket,; Target; } from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/revolutionaryMicroSaasServices2025';
;
const ServicesPage: React.FC = () => {;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
;
  const categories = [;
    { id: 'all', name: 'All Services', color: 'from-zion-cyan to-zion-blue', icon: Zap },;
    { id: 'ai-ml', name: 'AI & ML', color: 'from-zion-purple to-zion-cyan', icon: Brain },;
    { id: 'blockchain', name: 'Blockchain', color: 'from-zion-blue to-zion-purple', icon: Shield },;
    { id: 'cloud', name: 'Cloud & DevOps', color: 'from-zion-cyan to-zion-green', icon: Cloud },;
    { id: 'iot', name: 'IoT & Edge', color: 'from-zion-orange to-zion-red', icon: Cpu },;
    { id: 'data', name: 'Data & Analytics', color: 'from-zion-blue to-zion-indigo', icon: Database },;
    { id: 'web', name: 'Web & Mobile', color: 'from-zion-green to-zion-teal', icon: Globe },;
    { id: 'quantum', name: 'Quantum Computing', color: 'from-zion-purple to-zion-pink', icon: Rocket },;
    { id: 'cybersecurity', name: 'Cybersecurity', color: 'from-zion-red to-zion-orange', icon: Shield },;
    { id: 'automation', name: 'Automation', color: 'from-zion-teal to-zion-cyan', icon: Target };
  ];
;
  const priceRanges = [;
    { id: 'all', name: 'All Prices' },;
    { id: 'low', name: 'Under $100/month' },;
    { id: 'medium', name: '$100-$500/month' },;
    { id: 'high', name: 'Over $500/month' };
  ];
;
  const sortOptions = [;
    { id: 'name', name: 'Name A-Z' },;
    { id: 'price-low', name: 'Price Low-High' },;
    { id: 'price-high', name: 'Price High-Low' },;
    { id: 'roi', name: 'ROI' },;
    { id: 'innovation', name: 'Innovation Level' };
  ];
;
  const filteredServices = useMemo(() => {;
    let filtered = INNOVATIVE_MICRO_SAAS_SERVICES_2025;
;
    // Filter by category;
    if (selectedCategory !== 'all') {;
      filtered = filtered.filter(service => service.category === selectedCategory);
    };
    // Filter by price range;
    if (selectedPriceRange !== 'all') {;
      filtered = filtered.filter(service => {;
        const price = service.price;
        switch (selectedPriceRange) {;
          case 'low':;
            return price < 100;
          case 'medium':;
            return price >= 100 && price <= 500;
          case 'high':;
            return price > 500;
          default:;
            return true;
        };
      });
    };
    return filtered;
  }, [selectedCategory, selectedPriceRange]);
;
  const sortedServices = useMemo(() => {;
    const sorted = [...filteredServices];
;
    switch (sortBy) {;
      case 'name':;
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
      case 'price-low':;
        return sorted.sort((a, b) => a.price - b.price);
      case 'price-high':;
        return sorted.sort((a, b) => b.price - a.price);
      case 'roi':;
        return sorted.sort((a, b) => parseFloat(b.roi) - parseFloat(a.roi));
      case 'innovation':;
        const innovationOrder = { 'Cutting-edge': 3, 'Advanced': 2, 'Standard': 1 };
        return sorted.sort((a, b) =>;
          (innovationOrder[b.innovationLevel as keyof typeof innovationOrder] || 0) -;
          (innovationOrder[a.innovationLevel as keyof typeof innovationOrder] || 0);
        );
      default:;
        return sorted;
    };
  }, [filteredServices, sortBy]);
;
  const getCategoryColor = (category: string) => {;
    const cat = categories.find(c => c.id === category);
    return cat ? cat.color : 'from-zion-cyan to-zion-blue';
  };
;
  const getCategoryIcon = (category: string) => {;
    const cat = categories.find(c => c.id === category);
    return cat ? cat.icon : Zap;
  };
;
  return (;
    <div className="min-h-screen bg-zion-slate-dark text-white">;""
      {/* Hero Section */}";""
      <section className="py-20 bg-gradient-to-r from-zion-slate-dark via-zion-slate to-zion-slate-dark">";""
        <div className="container-responsive text-center">;
          <motion.div;
            initial={{ opacity: 0, y: 30 }};
            animate={{ opacity: 1, y: 0 }};"
            transition={{ duration: 0.8 }};""
          >";""
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">;"
              Revolutionary Micro-SaaS Services;""
            </h1>";""
            <p className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto leading-relaxed">;
              Discover cutting-edge AI-powered solutions that transform businesses and drive innovation across industries;
            </p>;"
          </motion.div>;""
          {/* Stats */}";""
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">;""
            <motion.div";""
              className="text-center";
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};"
              transition={{ duration: 0.6, delay: 0.2 }};""
            >";""
              <div className="text-3xl font-bold text-zion-cyan mb-2">;"
                500+;""
              </div>";""
              <div className="text-zion-slate-light">;
                AI-Powered Services;
              </div>;"
            </motion.div>;""
            <motion.div";""
              className="text-center";
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};"
              transition={{ duration: 0.6, delay: 0.3 }};""
            >";""
              <div className="text-3xl font-bold text-zion-blue mb-2">;"
                99.9%;""
              </div>";""
              <div className="text-zion-slate-light">Uptime Guarantee</div>;"
            </motion.div>;""
            <motion.div";""
              className="text-center";
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};"
              transition={{ duration: 0.6, delay: 0.4 }};""
            >";""
              <div className="text-3xl font-bold text-zion-purple mb-2">;"
                24/7;""
              </div>";""
              <div className="text-zion-slate-light">AI Support</div>;
            </motion.div>;
          </div>;
        </div>;"
      </section>;""
      {/* Filters and Categories */}";""
      <section className="py-12 bg-zion-slate-dark/50">";""
        <div className="container-responsive">;"
          {/* Category Pills */};""
          <motion.div";""
            className="flex flex-wrap gap-3 mb-8 justify-center";
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
          >;
            {categories.map(category => (;
              <button;
                key={category.id};
                onClick={() => setSelectedCategory(category.id)};
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${;
                  selectedCategory === category.id;
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`;
                    : 'bg-zion-slate-light/10 text-zion-slate-light hover:bg-zion-slate-light/20 hover:text-white';"
                }`};""
              >";""
                <category.icon className="w-4 h-4" />;
                {category.name};
              </button>;
            ))};
          </motion.div>;"
          {/* Advanced Filters */};""
          <motion.div";""
            className="flex flex-col md:flex-row gap-4 items-center justify-between";
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};"
            transition={{ duration: 0.6, delay: 0.1 }};""
          >";""
            <div className="flex flex-wrap gap-4">;""
              {/* Price Range Filter */}";""
              <div className="flex items-center gap-2">";""
                <Filter className="w-4 h-4 text-zion-cyan" />;
                <select;"
                  value={selectedPriceRange};""
                  onChange={e => setSelectedPriceRange(e.target.value)}";""
                  className="bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan";
                >;
                  {priceRanges.map(range => (;
                    <option key={range.id} value={range.id}>;
                      {range.name};
                    </option>;
                  ))};
                </select>;"
              </div>;""
              {/* Sort Options */}";""
              <div className="flex items-center gap-2">";""
                <TrendingUp className="w-4 h-4 text-zion-cyan" />;
                <select;"
                  value={sortBy};""
                  onChange={e => setSortBy(e.target.value)}";""
                  className="bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan";
                >;
                  {sortOptions.map(option => (;
                    <option key={option.id} value={option.id}>;
                      {option.name};
                    </option>;
                  ))};
                </select>;
              </div>;"
            </div>;";""
            <div className="text-zion-slate-light">;
              Showing {sortedServices.length} of{' '};
              {INNOVATIVE_MICRO_SAAS_SERVICES_2025.length} services;
            </div>;
          </motion.div>;
        </div>;"
      </section>;""
      {/* Services Grid */}";""
      <section className="py-16 bg-zion-slate-dark">";""
        <div className="container-responsive">";""
          <AnimatePresence mode="wait">;"
            {sortedServices.length > 0 ? (;""
              <motion.div";""
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8";
                initial={{ opacity: 0 }};
                animate={{ opacity: 1 }};
                transition={{ duration: 0.6 }};
              >;
                {sortedServices.map((service, index) => (;"
                  <motion.div;""
                    key={service.id}";""
                    className="bg-zion-slate-light/5 border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group hover:shadow-2xl hover:shadow-zion-cyan/20";
                    initial={{ opacity: 0, y: 20 }};
                    animate={{ opacity: 1, y: 0 }};
                    transition={{ duration: 0.6, delay: index * 0.1 }};
                    whileHover={{ y: -5 }};"
                  >;""
                    {/* Service Header */}";""
                    <div className="flex items-start justify-between mb-4">;
                      <div;
                        className={`w-12 h-12 bg-gradient-to-r ${getCategoryColor(service.category)} rounded-xl flex items-center justify-center`};
                      >;"
                        {(() => {;""
                          const IconComponent = getCategoryIcon(service.category);";""
                          return IconComponent ? <IconComponent className="w-6 h-6 text-white" /> : null;"
                        })()};""
                      </div>";""
                      <div className="text-right">";""
                        <div className="text-2xl font-bold text-zion-cyan">;"
                          ${service.price.toLocaleString()};""
                        </div>";""
                        <div className="text-sm text-zion-slate-light">;
                          per month;
                        </div>;
                      </div>;"
                    </div>;";""
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">;"
                      {service.title};""
                    </h3>";""
                    <p className="text-zion-slate-light leading-relaxed">;
                      {service.description};"
                    </p>;""
                    {/* Service Details */}";""
                    <div className="space-y-4 mb-6">;""
                      {/* Category & Innovation Level */}";""
                      <div className="flex items-center justify-between text-sm">";""
                        <span className="text-zion-cyan font-medium">;
                          {service.category};
                        </span>;
                        <span;
                          className={`px-2 py-1 rounded-full text-xs font-medium ${;
                            service.innovationLevel === 'Cutting-edge';
                              ? 'bg-zion-cyan/20 text-zion-cyan';
                              : 'bg-zion-purple/20 text-zion-purple';
                          }`};
                        >;
                          {service.innovationLevel};
                        </span>;"
                      </div>;""
                      {/* ROI & Market Price */}";""
                      <div className="flex items-center justify-between text-sm">";""
                        <div className="flex items-center gap-1 text-zion-green">";""
                          <TrendingUp className="w-4 h-4" />;"
                          <span>ROI: {service.roi}</span>;""
                        </div>";""
                        <div className="text-zion-slate-light">;
                          Market: {service.marketPrice};
                        </div>;"
                      </div>;""
                      {/* Key Features */}";""
                      <div className="space-y-2">";""
                        <h4 className="text-sm font-semibold text-white">;"
                          Key Features:;""
                        </h4>";""
                        <div className="grid grid-cols-1 gap-1">;
                          {service.features.slice(0, 3).map((feature, idx) => (;"
                            <div;""
                              key={idx}";""
                              className="flex items-center gap-2 text-sm text-zion-slate-light";""
                            >";""
                              <CheckCircle className="w-3 h-3 text-zion-cyan" />;
                              {feature};
                            </div>;
                          ))};
                        </div>;
                      </div>;"
                    </div>;""
                    {/* Service Actions */}";""
                    <div className="flex items-center justify-between pt-4 border-t border-zion-cyan/20">";""
                      <div className="flex items-center gap-4 text-sm text-zion-slate-light">";""
                        <div className="flex items-center gap-1">";""
                          <Clock className="w-4 h-4" />;"
                          <span>{service.deploymentTime}</span>;""
                        </div>";""
                        <div className="flex items-center gap-1">";""
                          <Star className="w-4 h-4 text-zion-cyan" />;
                          <span>{service.supportLevel}</span>;
                        </div>;
                      </div>;"
                      <Link;""
                        to={`/services/${service.id}`}";""
                        className="px-6 py-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-medium hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 transform hover:scale-105";
                      >;
                        Explore Solution;
                      </Link>;
                    </div>;
                  </motion.div>;
                ))};
              </motion.div>;"
            ) : (;""
              <motion.div";""
                className="text-center py-20";
                initial={{ opacity: 0 }};
                animate={{ opacity: 1 }};"
                transition={{ duration: 0.6 }};""
              >";""
                <div className="text-6xl mb-4">🔍</div>";""
                <h3 className="text-2xl font-bold text-white mb-2">No Services Found</h3>";""
                <p className="text-zion-slate-light mb-6">;
                  Try adjusting your filters to see more services;
                </p>;
                <button;
                  onClick={() => {;
                    setSelectedCategory('all');
                    setSelectedPriceRange('all');"
                    setSortBy('name');""
                  }}";""
                  className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-medium hover:from-zion-blue hover:to-zion-cyan transition-all duration-300";
                >;
                  Reset Filters;
                </button>;
              </motion.div>;
            )};
          </AnimatePresence>;
        </div>;"
      </section>;""
      {/* CTA Section */}";""
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10">";""
        <div className="container-responsive text-center">;
          <motion.div;
            initial={{ opacity: 0, y: 30 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};"
            viewport={{ once: true }};""
          >";""
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">;"
              Ready to Transform Your Business?;""
            </h2>";""
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto leading-relaxed">;"
              Join thousands of businesses already leveraging our AI-powered micro-SaaS solutions to drive growth, efficiency, and innovation;""
            </p>";""
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;""
              <Link";""
                to="/contact";""
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-xl font-bold text-lg hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-zion-cyan/25";
              >;
                Get Started Today;"
              </Link>;""
              <Link";""
                to="/pricing";""
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-xl font-bold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 transform hover:scale-105";
              >;
                View Pricing;"
              </Link>;""
            </div>";""
            <div className="mt-12 text-zion-slate-light">";""
              <p className="mb-4">;"
                Need help choosing? Our AI consultants are available 24/7 to guide you to the perfect solution.;""
              </p>";""
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">;""
                <a";""
                  href="mailto:consulting@zion.tech";""
                  className="text-zion-cyan hover:text-zion-blue transition-colors";
                >;"
                  consulting@zion.tech;""
                </a>";""
                <span className="hidden sm:inline">•</span>;""
                <a";""
                  href="tel:+1-800-ZION-TECH";""
                  className="text-zion-cyan hover:text-zion-blue transition-colors";
                >;
                  +1-800-ZION-TECH;
                </a>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};"
;""
export default ServicesPage;";""