import React from 'react';
import SEO from '../components/SEO';
import Layout from '../components/layout/Layout';
import {_Star, _Brain, _Atom, _Shield, _Zap, _TrendingUp, _Globe, _Rocket, _Lock, _Palette, _Factory, _Database, _Cloud, _Cpu, _Eye, _Target, _Users, _BarChart3} from 'lucide-react';

const Comprehensive2025InnovativeServicesShowcase: React.FC = () => {_const _categories = [
    { name: 'AI & Marketing', _icon: Brain, _color: 'from-purple-500 to-pink-500'},
    {_name: 'Quantum & Finance', _icon: Atom, _color: 'from-cyan-500 to-blue-500'},
    {_name: 'Space Technology', _icon: Rocket, _color: 'from-indigo-500 to-purple-500'},
    {_name: 'Metaverse & AI', _icon: Globe, _color: 'from-green-500 to-teal-500'},
    {_name: 'Cybersecurity', _icon: Shield, _color: 'from-red-500 to-orange-500'},
    {_name: 'Supply Chain & AI', _icon: Factory, _color: 'from-yellow-500 to-orange-500'},
    {_name: 'Quantum & Healthcare', _icon: Cpu, _color: 'from-violet-500 to-purple-500'},
    {_name: 'AI & Creativity', _icon: Palette, _color: 'from-pink-500 to-rose-500'},
    {_name: 'AI & Robotics', _icon: Database, _color: 'from-emerald-500 to-green-500'}
  ];

// Import existing services for comprehensive showcase

// Combine all services
const _allServices = [
  ...innovativeMicroSaas2025ExpansionV2,
  ...emergingTechInnovations2025,
  ...realMicroSaasServices2025
];

// Service categories
const _serviceCategories = [
  'All Services',
  'AI & Machine Learning',
  'Quantum Computing',
  'Cybersecurity',
  'Healthcare & Biotech',
  'Finance & Investment',
  'Supply Chain & Logistics',
  'Manufacturing & Industry 4.0',
  'Space Technology',
  'Blockchain & Web3',
  'Education & Learning',
  'Legal & Compliance',
  'Energy & Sustainability',
  'Autonomous Vehicles',
  'IoT & Edge Computing',
  'Metaverse & VR',
  'Neuroscience & BCI'
];

// Helper function to get service category
const _getServiceCategory = (_service: unknown) => {_if (service.category) return service.category;
  if (service.type) return service.type;
  return 'Other';};

// Helper function to get service pricing
const _getServicePricing = (_service: unknown) => {_if (service.pricing?.starter) return service.pricing.starter;
  if (service.pricing?.monthly) return `$${service.pricing.monthly}/month`;
  if (service.price?.monthly) return `$${_service.price.monthly}/month`;
  return 'Contact for pricing';
};

// Helper function to get service features
const _getServiceFeatures = (_service: unknown) => {_if (service.features) return service.features;
  if (service.keyFeatures) return service.keyFeatures;
  return [];};

// Helper function to get service description
const _getServiceDescription = (_service: unknown) => {_if (service.description) return service.description;
  if (service.tagline) return service.tagline;
  return '';};

export default function Comprehensive2025InnovativeServicesShowcase() {_const [searchTerm, _setSearchTerm] = useState('');
  const [selectedCategory, _setSelectedCategory] = useState('All Services');
  const [viewMode, _setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, _setSortBy] = useState<'name' | 'price' | 'rating' | 'popularity'>('popularity');

  // Filter and sort services
  const _filteredServices = allServices
    .filter(service => {
      const _serviceName = (service as any).title || (service as any).name || '';
      const _matchesSearch = serviceName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           (service as any).tagline?.toLowerCase().includes(searchTerm.toLowerCase()) || false;
      const _matchesCategory = selectedCategory === 'All Services' || 
                             getServiceCategory(service).includes(selectedCategory.split(' ')[0]);
      return matchesSearch && matchesCategory;})
    .sort(_(a, _b) => {_const _aName = (a as any).title || (a as any).name || '';
      const _bName = (b as any).title || (b as any).name || '';
      switch (sortBy) {
        case 'name':
          return aName.localeCompare(bName);
        case 'price':
          return ((a as any).price?.monthly || 0) - ((b as any).price?.monthly || 0);
        case 'rating':
          return ((b as any).rating || 0) - ((a as any).rating || 0);
        case 'popularity':
        default:
          return ((b as any).customers || 0) - ((a as any).customers || 0);}
    });

  const _containerVariants = {_hidden: { opacity: 0},
    visible: {_opacity: 1, _transition: {
        staggerChildren: 0.1}
    }
  const _getCategoryIcon = (_category: string) => {_const _cat = categories.find(c => c.name === category);
    return cat ? cat.icon : Star;};

  const _getCategoryColor = (_category: string) => {_const _cat = categories.find(c => c.name === category);
    return cat ? cat.color : 'from-gray-500 to-gray-600';};

  return (_<Layout>
      <SEO 
        title="2025 Comprehensive Innovative Services Showcase | Zion Tech Group"
        description="Discover our comprehensive portfolio of innovative micro SAAS services, _AI solutions, _and cutting-edge technology platforms. From quantum computing to healthcare AI, _explore the future of business technology."
        keywords={_["innovative micro SAAS", _"AI services", _"quantum computing", _"healthcare AI", _"cybersecurity", _"blockchain", _"space technology", _"autonomous vehicles", _"IoT", _"metaverse", _"Zion Tech Group"]}
        ogImage="https://ziontechgroup.com/og-innovative-services-2025.jpg"
        title="2025 Innovative Services Showcase | Zion Tech Group"
        description="Discover our cutting-edge 2025 innovative micro SAAS services, _IT solutions, _and AI platforms. Quantum computing, _space technology, _and autonomous systems."
        keywords={_[
          'innovative services 2025', _'micro SAAS', _'quantum computing', _'space technology', _'AI platforms', _'autonomous systems'
        ]}
      />
      
      {_/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        {_/* Enhanced Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45 animate-pulse delay-2000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-blue-400/20 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-1/3 right-1/4 w-20 h-20 border border-green-400/20 transform rotate-12 animate-pulse delay-1500"></div>
        </div>
        
        <div className="text-center max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            className="space-y-6"
          >
            {_/* Enhanced Company Badge */}
            <motion.div
              initial={_{ opacity: 0, _scale: 0.8}}
              animate={_{ opacity: 1, _scale: 1}}
              transition={_{ duration: 0.6, _delay: 0.2}}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-lg font-medium backdrop-blur-sm"
            >
              <Star className="w-5 h-5" />
              <span>Innovation Leader 2025</span>
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              2025 Innovative Services
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
              Pioneering the future with cutting-edge micro SAAS services, _quantum computing solutions, _and autonomous AI platforms
            </p>
            
            {_/* Enhanced Stats */}
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8, _delay: 0.4}}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              <div className="p-4 group hover:bg-white/5 rounded-xl transition-all duration-300 border border-cyan-400/20">
                <div className="text-3xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">50+</div>
                <div className="text-gray-300 text-sm">Innovative Services</div>
              </div>
              <div className="p-4 group hover:bg-white/5 rounded-xl transition-all duration-300 border border-blue-400/20">
                <div className="text-3xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors">100+</div>
                <div className="text-gray-300 text-sm">Quantum Solutions</div>
              </div>
              <div className="p-4 group hover:bg-white/5 rounded-xl transition-all duration-300 border border-purple-400/20">
                <div className="text-3xl font-bold text-purple-400 mb-2 group-hover:text-purple-300 transition-colors">24/7</div>
                <div className="text-gray-300 text-sm">Autonomous Operations</div>
              </div>
              <div className="p-4 group hover:bg-white/5 rounded-xl transition-all duration-300 border border-green-400/20">
                <div className="text-3xl font-bold text-green-400 mb-2 group-hover:text-green-300 transition-colors">∞</div>
                <div className="text-gray-300 text-sm">Future Possibilities</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {_/* Services Categories */}
      <section className="py-20 px-4 bg-black/30 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Explore our comprehensive range of innovative services across cutting-edge technology domains
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {_categories.map((category, _index) => {
              const _IconComponent = category.icon;
              return (
                <motion.div
                  key={category.name}
                  initial={_{ opacity: 0, _y: 20}}
                  whileInView={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.6, _delay: index * 0.1}}
                  viewport={_{ once: true}}
                  className="group relative"
                >
                  <div className={_`p-8 rounded-2xl bg-gradient-to-br ${category.color} bg-opacity-10 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl`}>
                    <div className="text-center">
                      <div className={_`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${category.color} bg-opacity-20 flex items-center justify-center border border-white/20`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{_category.name}</h3>
                      <div className="text-gray-300 text-sm">
                        {_innovative2025MicroSaasBatch.filter(service => service.category === category.name).length} Services
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {_/* Featured Services */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Featured Services
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Our most popular and innovative services that are transforming industries
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {_innovative2025MicroSaasBatch.filter(service => service.popular).map(_(service, _index) => {
              const _IconComponent = getCategoryIcon(service.category);
              return (
                <motion.div
                  key={service.id}
                  initial={_{ opacity: 0, _y: 20}}
                  whileInView={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.6, _delay: index * 0.1}}
                  viewport={_{ once: true}}
                  className="group relative"
                >
                  <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm">
                    {_/* Popular Badge */}
                    {_service.popular && (
                      <div className="absolute -top-3 left-6 px-4 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-sm font-bold rounded-full">
                        Popular
                      </div>
                    )}
                    
                    <div className="text-center mb-6">
                      <div className={_`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${getCategoryColor(service.category)} bg-opacity-20 flex items-center justify-center border border-white/20 text-4xl`}>
                        {_service.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{_service.name}</h3>
                      <p className="text-gray-300 text-sm mb-4">{_service.tagline}</p>
                      <div className="text-3xl font-bold text-cyan-400 mb-2">
                        {_service.price}<span className="text-lg text-gray-400">/{_service.period}</span>
                      </div>
                    </div>
                    <span className="text-gray-300 text-sm">
                      {_(service as any).rating || 0} ({_(service as any).reviews || 0} reviews)
                    </span>
                  </div>
                </div>

                {_/* Service Details */}
                <div className={_`p-6 bg-white/5 ${viewMode === 'list' ? 'lg:w-2/3' : ''}`}>
                  <p className="text-gray-300 mb-4">{_service.description}</p>
                  
                  {_/* Key Benefits */}
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      Key Benefits
                    </h4>
                    <ul className="space-y-1">
                      {_(service as any).benefits?.slice(0, _3)?.map(_(benefit: string, _idx: number) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                          <Check className="w-3 h-3 text-green-400 mt-1 flex-shrink-0" />
                          {_benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {_/* Features */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-blue-400" />
                      Key Features
                    </h4>
                    <div className="flex flex-wrap gap-2">
                    
                    <div className="space-y-3 mb-6">
                      {_service.features.slice(0, _4).map(_(feature, _idx) => (
                        <div key={idx} className="flex items-center space-x-3 text-sm text-gray-300">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                          <span>{_feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {_/* Market Info */}
                    <div className="border-t border-white/10 pt-4 space-y-2">
                      <div className="text-xs text-gray-400">
                        Market Price: <span className="text-green-400">{_service.marketPrice}</span>
                      </div>
                      <div className="text-xs text-gray-400">
                        Category: <span className="text-cyan-400">{_service.category}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {_/* All Services Grid */}
      <section className="py-20 px-4 bg-black/30 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
              Complete Service Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Explore our entire collection of innovative services designed for the future
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {_innovative2025MicroSaasBatch.map(_(service, _index) => {
              const _IconComponent = getCategoryIcon(service.category);
              return (
                <motion.div
                  key={service.id}
                  initial={_{ opacity: 0, _y: 20}}
                  whileInView={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.6, _delay: index * 0.05}}
                  viewport={_{ once: true}}
                  className="group relative"
                >
                  <div className="p-6 rounded-xl bg-gradient-to-br from-gray-900/30 to-gray-800/30 border border-white/5 hover:border-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-xl backdrop-blur-sm">
                    <div className="flex items-start space-x-4">
                      <div className={_`w-12 h-12 rounded-lg bg-gradient-to-br ${getCategoryColor(service.category)} bg-opacity-20 flex items-center justify-center border border-white/20 text-2xl flex-shrink-0`}>
                        {_service.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-white mb-1 truncate">{_service.name}</h3>
                        <p className="text-gray-400 text-sm mb-2 line-clamp-2">{_service.tagline}</p>
                        <div className="text-cyan-400 font-semibold text-sm">
                          {_service.price}<span className="text-gray-400">/{_service.period}</span>
                        </div>
                        <div className="text-xs text-gray-500 mt-2">
                          {_service.category}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {_/* Contact CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get in touch with our team to discuss how our innovative services can drive your success
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 flex items-center justify-center space-x-2"
              >
                <Zap className="w-5 h-5" />
                <span>Call Now: +1 302 464 0950</span>
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                Email Us
              </a>
            </div>
            
            <div className="text-sm text-gray-400">
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>Website: <a href="https://ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">https://ziontechgroup.com</a></p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Comprehensive2025InnovativeServicesShowcase;
