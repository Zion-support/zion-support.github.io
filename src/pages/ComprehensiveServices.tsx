/>;

export default function ComprehensiveServices(...args: unknown[]): unknown {;
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState('all');
  // Comprehensive service categories with real market prices;
  const serviceCategories = [;
    {;
      id: 'ai-ml',
      name: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-blue-600 to-cyan-600',
      description: 'Cutting-edge artificial intelligence and machine learning solutions',
      services: [;
        {;
          name: 'AI Business Intelligence Platform',
          description: 'Advanced analytics with ML insights and predictive modeling',
          price: '$2,500/month',
          marketPrice: '$3,000-5,000/month',
          features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards', 'API Integration'],
          benefits: ['40% faster decisions', '25% cost reduction', 'Real-time insights'],
          icon: BarChart3,
          category: 'ai-ml',
          badge: 'Popular',
          roi: '300%';
},
        {;
          name: 'AI Customer Experience Platform',
          description: 'Intelligent customer engagement with personalization',
          price: '$1,800/month',
          marketPrice: '$2,200-4,000/month',
          features: ['Customer Journey Mapping', 'Sentiment Analysis', 'Personalization Engine'],
          benefits: ['35% satisfaction increase', '28% higher conversions', '24/7 support'],
          icon: Users,
          category: 'ai-ml',
          badge: 'New',
          roi: '250%';
},
        {;
          name: 'AI Cybersecurity Threat Detection',
          description: 'ML-powered threat detection and response',
          price: '$3,200/month',
          marketPrice: '$4,000-7,000/month',
          features: ['Real-time Detection', 'Behavioral Analysis', 'Automated Response'],
          benefits: ['99.9% detection rate', '60% faster response', 'Reduced false positives'],
          icon: Shield,
          category: 'ai-ml',
          badge: 'Featured',
          roi: '400%';
}
      ];
},
    {;
      id: 'micro-saas',
      name: 'Micro SAAS Solutions',
      icon: Zap,
      color: 'from-purple-600 to-pink-600',
      description: 'Scalable software-as-a-service for specific business needs',
      services: [;
        {;
          name: 'AI Project Management Suite',
          description: 'Intelligent project planning and resource optimization',
          price: '$150/month',
          marketPrice: '$200-400/month',
          features: ['AI Resource Optimization', 'Risk Prediction', 'Team Collaboration'],
          benefits: ['30% faster completion', '20% resource optimization', 'Improved productivity'],
          icon: Workflow,
          category: 'micro-saas',
          badge: 'Best Value',
          roi: '200%';
},
        {;
          name: 'Smart Inventory Management',
          description: 'AI-driven inventory optimization and forecasting',
          price: '$200/month',
          marketPrice: '$250-500/month',
          features: ['Demand Forecasting', 'Automated Reordering', 'Multi-location Support'],
          benefits: ['25% cost reduction', '99% stock availability', 'Automated procurement'],
          icon: Truck,
          category: 'micro-saas',
          badge: 'Popular',
          roi: '180%';
},
        {;
          name: 'AI Content Creation Platform',
          description: 'Automated content generation with SEO optimization',
          price: '$120/month',
          marketPrice: '$150-300/month',
          features: ['Multi-format Content', 'SEO Optimization', 'Brand Consistency'],
          benefits: ['10x faster creation', 'Improved SEO rankings', 'Consistent brand voice'],
          icon: Brain,
          category: 'micro-saas',
          badge: 'New',
          roi: '150%';
}
      ];
},
    {;
      id: 'it-infrastructure',
      name: 'IT Infrastructure & Services',
      icon: Server,
      color: 'from-green-600 to-emerald-600',
      description: 'Comprehensive IT solutions for modern business infrastructure',
      services: [;
        {;
          name: 'Cloud Migration & Optimization',
          description: 'Seamless cloud migration with cost optimization',
          price: '$5,000/project',
          marketPrice: '$8,000-15,000/project',
          features: ['Multi-cloud Strategy', 'Cost Optimization', 'Performance Tuning'],
          benefits: ['40% cost reduction', '99.9% uptime', 'Scalable infrastructure'],
          icon: Cloud,
          category: 'it-infrastructure',
          badge: 'Featured',
          roi: '350%';
},
        {;
          name: 'DevOps Automation Platform',
          description: 'End-to-end DevOps automation with CI/CD pipelines',
          price: '$2,800/month',
          marketPrice: '$3,500-6,000/month',
          features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Automated Testing'],
          benefits: ['80% faster deployments', 'Reduced errors', 'Improved code quality'],
          icon: Code,
          category: 'it-infrastructure',
          badge: 'Popular',
          roi: '280%';
},
        {;
          name: 'Cybersecurity Compliance Suite',
          description: 'Comprehensive security compliance for industry standards',
          price: '$4,500/month',
          marketPrice: '$6,000-12,000/month',
          features: ['Compliance Automation', 'Risk Assessment', 'Audit Preparation'],
          benefits: ['100% compliance assurance', 'Reduced audit time', 'Risk mitigation'],
          icon: Lock,
          category: 'it-infrastructure',
          badge: 'Essential',
          roi: '500%';
}
      ];
},
    {;
      id: 'quantum-tech',
      name: 'Quantum & Emerging Tech',
      icon: Atom,
      color: 'from-indigo-600 to-purple-600',
      description: 'Next-generation technologies for future-ready businesses',
      services: [;
        {;
          name: 'Quantum Computing Solutions',
          description: 'Quantum algorithms for optimization and cryptography',
          price: '$15,000/month',
          marketPrice: '$20,000-50,000/month',
          features: ['Quantum Algorithms', 'Optimization Problems', 'Cryptography'],
          benefits: ['Exponential speed improvements', 'Unbreakable encryption', 'Complex problem solving'],
          icon: Atom,
          category: 'quantum-tech',
          badge: 'Future Tech',
          roi: '1000%';
},
        {;
          name: 'Blockchain Enterprise Platform',
          description: 'Secure blockchain for supply chain and digital identity',
          price: '$3,500/month',
          marketPrice: '$5,000-15,000/month',
          features: ['Smart Contracts', 'Supply Chain Tracking', 'Digital Identity'],
          benefits: ['Enhanced transparency', 'Reduced fraud', 'Automated processes'],
          icon: LinkIcon,
          category: 'quantum-tech',
          badge: 'Innovative',
          roi: '300%';
},
        {;
          name: 'IoT Edge Computing Platform',
          description: 'Real-time data processing at the edge',
          price: '$2,200/month',
          marketPrice: '$3,000-8,000/month',
          features: ['Edge Analytics', 'Real-time Processing', 'Device Management'],
          benefits: ['Ultra-low latency', 'Reduced bandwidth costs', 'Real-time insights'],
          icon: Cpu,
          category: 'quantum-tech',
          badge: 'Industrial',
          roi: '250%';
}
      ];
},
    {;
      id: 'green-tech',
      name: 'Green Technology',
      icon: Leaf,
      color: 'from-green-500 to-teal-600',
      description: 'Sustainable technology solutions for environmental responsibility',
      services: [;
        {;
          name: 'Carbon Footprint Analytics',
          description: 'AI-powered carbon tracking and sustainability reporting',
          price: '$800/month',
          marketPrice: '$1,000-2,500/month',
          features: ['Carbon Tracking', 'Sustainability Reporting', 'Goal Setting'],
          benefits: ['Reduced carbon footprint', 'Cost savings', 'Regulatory compliance'],
          icon: Leaf,
          category: 'green-tech',
          badge: 'Eco-Friendly',
          roi: '180%';
},
        {;
          name: 'Smart Energy Management',
          description: 'Intelligent energy optimization using IoT and AI',
          price: '$1,500/month',
          marketPrice: '$2,000-4,000/month',
          features: ['Energy Monitoring', 'AI Optimization', 'Predictive Maintenance'],
          benefits: ['30% energy cost reduction', 'Predictive maintenance', 'Real-time monitoring'],
          icon: Zap,
          category: 'green-tech',
          badge: 'Cost-Effective',
          roi: '220%';
}
      ];
},
    {;
      id: 'space-tech',
      name: 'Space Technology',
      icon: Satellite,
      color: 'from-blue-500 to-indigo-600',
      description: 'Satellite and space-based technology for global insights',
      services: [;
        {;
          name: 'Satellite Data Analytics',
          description: 'Earth observation data analysis for various industries',
          price: '$2,800/month',
          marketPrice: '$4,000-10,000/month',
          features: ['Satellite Imagery', 'AI Analysis', 'Real-time Monitoring'],
          benefits: ['Global coverage', 'Real-time insights', 'Cost-effective monitoring'],
          icon: Satellite,
          category: 'space-tech',
          badge: 'Global',
          roi: '350%';
}
      ];
}
  ];
  const contactInfo = {;
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709',
    website: 'https://ziontechgroup.com';
};
  const filteredServices = serviceCategories.flatMap(category => ;
    category.services.filter(service => {;
      const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
      const matchesSearch = searchQuery === '' || ;
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        service.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPrice = priceRange === 'all' || ;
        (priceRange === 'low' && parseFloat(service.price.replace(/[^0-9.]/g, '')) < 1000) ||;
        (priceRange === 'medium' && parseFloat(service.price.replace(/[^0-9.]/g, '')) >= 1000 && parseFloat(service.price.replace(/[^0-9.]/g, '')) < 5000) ||;
        (priceRange === 'high' && parseFloat(service.price.replace(/[^0-9.]/g, '')) >= 5000);
      return matchesCategory && matchesSearch && matchesPrice;
});
  );
  const containerVariants = {;
    hidden: { opacity: 0 },
    visible: {;
      opacity: 1,
      transition: {;
        staggerChildren: 0.1;
}
    }
  };
  const itemVariants = {;
    hidden: { opacity: 0, y: 20 },
    visible: {;
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  return (;
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">;
      <SEO ;
        title="Comprehensive Services - Zion Tech Group";
        description="Explore our complete portfolio of AI services, micro SAAS solutions, IT infrastructure, and emerging technologies. Real market prices and proven ROI.";
        keywords="AI services, micro SAAS, IT services, quantum computing, blockchain, IoT, green technology, space technology, comprehensive solutions";
        canonicalUrl="https://ziontechgroup.com/comprehensive-services";
      />;

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>        <div className="container mx-auto px-4 relative z-10">;
          <motion.div;
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}";
            transition={{ duration: 0.8 }}"";
            className="text-center max-w-4xl mx-auto"">"";
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">";
              Comprehensive"";
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">;
                {' '}
                Services;
              </span>";
            </h1>"";
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">;
              Discover our complete portfolio of innovative solutions across AI,
              micro SAAS, IT infrastructure, and emerging technologies. Real;
              market prices, proven ROI, and expert implementation.";
            </p>"";
            <div className="flex flex-col sm:flex-row gap-4 justify-center">";
              <Link"";
                to="/contact"";
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25">;
                Get Free Consultation;
              </Link>";
              <Link"";
                to="/pricing"";
                className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300">;
                View Pricing;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
";
      {/* Search and Filters */}"";
      <section className="py-8 bg-slate-800/30">"";
        <div className="container mx-auto px-4">"";
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">";
            {/* Search */}"";
            <div className="relative lg:col-span-2">";
              <input"";
                type="text"";
                placeholder="Search services...";
                value={searchQuery}";
                onChange={e => setSearchQuery(e.target.value)}"";
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"";
              />"";
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5"  />;
            </div>;
";
            {/* Category Filter */}"";
            <div className="relative">"";
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5"  />              <select;
                value={activeCategory}";
                onChange={e => setActiveCategory(e.target.value)}"";
                className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 appearance-none cursor-pointer"">"";
                <option value="all">All Categories</option>;
                {serviceCategories.map(category => (<option key={category.id} value={category.id}>;
                    {category.name}
                  </option>) ) }
              </select>;
            </div>;
";
            {/* Price Range Filter */}"";
            <div className="relative">"";
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5"  />              <select;
                value={priceRange}";
                onChange={e => setPriceRange(e.target.value)}"";
                className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 appearance-none cursor-pointer"">"";
                <option value="all">All Prices</option>"";
                <option value="low">Under $1,000/month</option>"";
                <option value="medium">$1,000 - $5,000/month</option>"";
                <option value="high">Over $5,000/month</option>;
              </select>;
            </div>;
          </div>;
        </div>;
      </section>;
";
      {/* Services Grid */}"";
      <section className="py-20">"";
        <div className="container mx-auto px-4">;
          {filteredServices.length === 0 ? (;
            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}";
              transition={{ duration: 0.8 }}"";
              className="text-center py-20"">"";
              <h3 className="text-2xl font-bold text-white mb-4">;
                No services found";
              </h3>"";
              <p className="text-slate-300 mb-6">;
                Try adjusting your search criteria or filters;
              </p>;
              <button;
                onClick={() => {}
';
                  setSearchQuery('');';
                  setActiveCategory('all');'";
                  setPriceRange('all')}}"                className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors duration-300">;
                Clear Filters;
              </button>;
            </motion.div>) : (<>;
              <motion.div;
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}";
                transition={{ duration: 0.8 }}"";
                className="text-center mb-12"">"";
                <h2 className="text-3xl font-bold text-white mb-4">;
                  {filteredServices.length} Services Found";
                </h2>"";
                <p className="text-slate-300">;
                  Showing results for your search criteria;
                </p>;
              </motion.div>;
";
              <motion.div"";
                className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"";
                variants={containerVariants}"";
                initial="hidden"";
                animate="visible">;
                {filteredServices.map ( (service, index) => (<motion.div;
                    key={index}";
                    variants={itemVariants}"";
                    className="group"">"";
                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 h-full hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">";
                      {/* Header */}"";
                      <div className="flex items-start justify-between mb-6">;
                        <div;
                          className={`w-16 h-16 bg-gradient-to-br ${serviceCategories.find(cat => cat.id === service.category)?.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}">"";
                          <service.icon className="w-8 h-8 text-white" />;
                        </div>;
                        {service.badge && (`;
                          <span``;
                            className={`px-3 py-1 text-xs font-semibold rounded-full ${}
';
'';
''';
                              service.badge === 'Popular''''';
                                ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30''''';
                                : service.badge === 'New''''';
                                  ? 'bg-green-500/20 text-green-400 border border-green-500/30''''';
                                  : service.badge === 'Featured''''';
                                    ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'''''`;
                                    : service.badge === 'Best Value''''`'`;
                                      ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'''`'`'`;
                                      : 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'````;
}`}
                          >;
                            {service.badge}
                          </span>) }
                      </div>;
";
                      {/* Content */}"";
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">;
                        {service.name}
                      </h3>";
"";
                      <p className="text-slate-300 mb-6 leading-relaxed">;
                        {service.description}
                      </p>;
";
                      {/* Pricing and ROI */}"";
                      <div className="mb-6 p-4 bg-slate-700/50 rounded-lg">"";
                        <div className="flex items-center justify-between mb-2">"";
                          <span className="text-slate-400 text-sm">;
                            Our Price:";
                          </span>"";
                          <span className="text-2xl font-bold text-cyan-400">;
                            {service.price}
                          </span>";
                        </div>"";
                        <div className="flex items-center justify-between mb-2">"";
                          <span className="text-slate-400 text-sm">;
                            Market Price:";
                          </span>"";
                          <span className="text-slate-300 text-sm line-through">;
                            {service.marketPrice}
                          </span>";
                        </div>"";
                        <div className="flex items-center justify-between">"";
                          <span className="text-slate-400 text-sm">;
                            Expected ROI:";
                          </span>"";
                          <span className="text-green-400 font-semibold">;
                            {service.roi}
                          </span>;
                        </div>;
                      </div>;
";
                      {/* Features */}"";
                      <div className="space-y-2 mb-6">"";
                        <h4 className="font-semibold text-cyan-400 mb-3">;
                          Key Features: unknown;
                        </h4>;
                        {service.features.map((feature, idx) => (;
                          <div";
                            key={idx}"";
                            className="flex items-center text-sm text-slate-400"">"";
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0"  />                            {feature}
                          </div>) ) }
                      </div>;
";
                      {/* Benefits */}"";
                      <div className="space-y-2 mb-6">"";
                        <h4 className="font-semibold text-green-400 mb-3">;
                          Business Benefits: unknown;
                        </h4>;
                        {service.benefits.map((benefit, idx) => (;
                          <div";
                            key={idx}"";
                            className="flex items-center text-sm text-slate-400"">"";
                            <TrendingUp className="w-4 h-4 text-green-400 mr-3 flex-shrink-0"  />                            {benefit}
                          </div>) ) }
                      </div>;

                      {/* CTA */}";
                      <Link"";
                        to="/contact"";
                        className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:scale-105 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25">";
                        Get Started"";
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"  />                      </Link>;
                    </div>;
                  </motion.div>) ) }
              </motion.div>;
            </>) }
        </div>;
      </section>;
";
      {/* Contact Section */}"";
      <section className="py-20 bg-gradient-to-r from-slate-800 to-blue-900">"";
        <div className="container mx-auto px-4">;
          <motion.div;
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}";
            viewport={{ once: true }}"";
            className="text-center mb-16"">"";
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Ready to Transform Your Business?";
            </h2>"";
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">;
              Get expert consultation, custom pricing, and implementation;
              support. Our team is ready to help you choose the right solutions;
              for your business needs.;
            </p>;
          </motion.div>";
"";
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">;
            {/* Contact Info */}
            <motion.div;
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}";
              viewport={{ once: true }}"";
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8"">"";
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">"";
                <Phone className="w-8 h-8 text-white"  />";
              </div>"";
              <h3 className="text-2xl font-bold text-white mb-4 text-center">;
                Call Us";
              </h3>"";
              <p className="text-slate-300 text-center mb-4">;
                Speak with our experts directly;
              </p>`;
              <a`"`;
                href={`tel:${contactInfo.phone}`}"                className="text-2xl font-bold text-cyan-400 text-center block hover:text-cyan-300 transition-colors duration-300">;
                {contactInfo.phone}
              </a>;
            </motion.div>;

            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}";
              viewport={{ once: true }}"";
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8"">"";
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">"";
                <Mail className="w-8 h-8 text-white"  />";
              </div>"";
              <h3 className="text-2xl font-bold text-white mb-4 text-center">;
                Email Us";
              </h3>"";
              <p className="text-slate-300 text-center mb-4">;
                Send us your requirements;
              </p>`;
              <a`"`;
                href={`mailto:${contactInfo.email}`}"                className="text-lg font-semibold text-cyan-400 text-center block hover:text-cyan-300 transition-colors duration-300 break-all">;
                {contactInfo.email}
              </a>;
            </motion.div>;

            <motion.div;
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}";
              viewport={{ once: true }}"";
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8"">"";
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">"";
                <MapPin className="w-8 h-8 text-white"  />";
              </div>"";
              <h3 className="text-2xl font-bold text-white mb-4 text-center">;
                Visit Us";
              </h3>"";
              <p className="text-slate-300 text-center mb-4">;
                Our headquarters location";
              </p>"              <p className="text-slate-300 text-center text-sm leading-relaxed">;
                {contactInfo.address}
              </p>;
            </motion.div>;
          </div>;

          {/* CTA Buttons */}
          <motion.div;
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}";
            viewport={{ once: true }}"";
            className="text-center mt-12"">"";
            <div className="flex flex-col sm:flex-row gap-4 justify-center">";
              <Link"";
                to="/contact"";
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25">;
                Get Free Consultation;
              </Link>";
              <Link"";
                to="/pricing"";
                className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300">;
                View Full Pricing;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
";
      {/* Why Choose Us */}"";
      <section className="py-20">"";
        <div className="container mx-auto px-4">;
          <motion.div;
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}";
            viewport={{ once: true }}"";
            className="text-center mb-16"">"";
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Why Choose Zion Tech Group?";
            </h2>"";
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">;
              We deliver innovative solutions with proven ROI, expert support,
              and competitive pricing.</p>;
          </motion.div>;
";
          <motion.div"";
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"";
            variants={containerVariants}"";
            initial="hidden"";
            whileInView="visible";
            viewport={{ once: true }}
          >;
            {[];
              {}
                icon: Award,';
                title: 'Proven Expertise',';
                description:'';
                  '500+ successful projects across industries with measurable results'},
              {}
                icon: Zap,';
                title: 'Innovation First',';
                description:'';
                  'Cutting-edge technologies and methodologies for competitive advantage'},
              {}
                icon: Shield,';
                title: 'Enterprise Security',';
                description:'';
                  'Bank-level security and compliance for enterprise-grade solutions'},
              {}
                icon: Heart,';
                title: '24/7 Support',';
                description:'';
                  'Round-the-clock technical support and maintenance services'}
            ].map((item, index) => (;
              <motion.div;
                key={index}";
                variants={itemVariants}"";
                className="text-center"">"";
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">"";
                  <item.icon className="w-10 h-10 text-white" />";
                </div>"";
                <h3 className="text-xl font-bold text-white mb-3">;
                  {item.title}";
                </h3>"";
                <p className="text-slate-300">{item.description}</p>;
              </motion.div>;
            ))}
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
}

export { ComprehensiveServices };
export { ComprehensiveServices };
export { ComprehensiveServices };
export { ComprehensiveServices };
export { ComprehensiveServices };
