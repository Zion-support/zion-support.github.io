import React from 'react';
import SEO from '../components/SEO';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Star, Brain, Atom, Shield, Zap, TrendingUp, Globe, 
  Rocket, Lock, Palette, Factory, Database, Cloud, 
  Cpu, Eye, Target, Users, BarChart3
} from 'lucide-react';
import { innovative2025MicroSaasBatch } from '../data/innovative-2025-micro-saas-batch';

const Comprehensive2025InnovativeServicesShowcase: React.FC = () => {
  const categories = [
    { name: 'AI & Marketing', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { name: 'Quantum & Finance', icon: Atom, color: 'from-cyan-500 to-blue-500' },
    { name: 'Space Technology', icon: Rocket, color: 'from-indigo-500 to-purple-500' },
    { name: 'Metaverse & AI', icon: Globe, color: 'from-green-500 to-teal-500' },
    { name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-500' },
    { name: 'Supply Chain & AI', icon: Factory, color: 'from-yellow-500 to-orange-500' },
    { name: 'Quantum & Healthcare', icon: Cpu, color: 'from-violet-500 to-purple-500' },
    { name: 'AI & Creativity', icon: Palette, color: 'from-pink-500 to-rose-500' },
    { name: 'AI & Robotics', icon: Database, color: 'from-emerald-500 to-green-500' }
  ];

// Import existing services for comprehensive showcase
import { realMicroSaasServices2025 } from '../data/2025-real-micro-saas-services';

// Combine all services
const allServices = [
  ...innovativeMicroSaas2025ExpansionV2,
  ...emergingTechInnovations2025,
  ...realMicroSaasServices2025
];

// Service categories
const serviceCategories = [
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
const getServiceCategory = (service: any) => {
  if (service.category) return service.category;
  if (service.type) return service.type;
  return 'Other';
};

// Helper function to get service pricing
const getServicePricing = (service: any) => {
  if (service.pricing?.starter) return service.pricing.starter;
  if (service.pricing?.monthly) return `$${service.pricing.monthly}/month`;
  if (service.price?.monthly) return `$${service.price.monthly}/month`;
  return 'Contact for pricing';
};

// Helper function to get service features
const getServiceFeatures = (service: any) => {
  if (service.features) return service.features;
  if (service.keyFeatures) return service.keyFeatures;
  return [];
};

// Helper function to get service description
const getServiceDescription = (service: any) => {
  if (service.description) return service.description;
  if (service.tagline) return service.tagline;
  return '';
};

export default function Comprehensive2025InnovativeServicesShowcase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Services');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'popularity'>('popularity');

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const serviceName = (service as any).title || (service as any).name || '';
      const matchesSearch = serviceName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           (service as any).tagline?.toLowerCase().includes(searchTerm.toLowerCase()) || false;
      const matchesCategory = selectedCategory === 'All Services' || 
                             getServiceCategory(service).includes(selectedCategory.split(' ')[0]);
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      const aName = (a as any).title || (a as any).name || '';
      const bName = (b as any).title || (b as any).name || '';
      switch (sortBy) {
        case 'name':
          return aName.localeCompare(bName);
        case 'price':
          return ((a as any).price?.monthly || 0) - ((b as any).price?.monthly || 0);
        case 'rating':
          return ((b as any).rating || 0) - ((a as any).rating || 0);
        case 'popularity':
        default:
          return ((b as any).customers || 0) - ((a as any).customers || 0);
      }
    });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.name === category);
    return cat ? cat.icon : Star;
  };

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.name === category);
    return cat ? cat.color : 'from-gray-500 to-gray-600';
  };

  return (
    <Layout>
      <SEO 
        title=&quot;2025 Comprehensive Innovative Services Showcase | Zion Tech Group&quot;
        description=&quot;Discover our comprehensive portfolio of innovative micro SAAS services, AI solutions, and cutting-edge technology platforms. From quantum computing to healthcare AI, explore the future of business technology.&quot;
        keywords={[&quot;innovative micro SAAS&quot;, &quot;AI services&quot;, &quot;quantum computing&quot;, &quot;healthcare AI&quot;, &quot;cybersecurity&quot;, &quot;blockchain&quot;, &quot;space technology&quot;, &quot;autonomous vehicles&quot;, &quot;IoT&quot;, &quot;metaverse&quot;, &quot;Zion Tech Group&quot;]}
        ogImage=&quot;https://ziontechgroup.com/og-innovative-services-2025.jpg&quot;
        title=&quot;2025 Innovative Services Showcase | Zion Tech Group&quot;
        description=&quot;Discover our cutting-edge 2025 innovative micro SAAS services, IT solutions, and AI platforms. Quantum computing, space technology, and autonomous systems.&quot;
        keywords={[
          'innovative services 2025',
          'micro SAAS',
          'quantum computing',
          'space technology',
          'AI platforms',
          'autonomous systems'
        ]}
      />
      
      {/* Hero Section */}
      <section className=&quot;min-h-screen flex items-center justify-center px-4 relative overflow-hidden&quot;>
        {/* Enhanced Background Elements */}
        <div className=&quot;absolute inset-0 pointer-events-none&quot;>
          <div className=&quot;absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg animate-pulse&quot;></div>
          <div className=&quot;absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full animate-pulse delay-1000&quot;></div>
          <div className=&quot;absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45 animate-pulse delay-2000&quot;></div>
          <div className=&quot;absolute top-1/2 left-1/4 w-16 h-16 border border-blue-400/20 rounded-full animate-pulse delay-500&quot;></div>
          <div className=&quot;absolute top-1/3 right-1/4 w-20 h-20 border border-green-400/20 transform rotate-12 animate-pulse delay-1500&quot;></div>
        </div>
        
        <div className=&quot;text-center max-w-6xl mx-auto relative z-10&quot;>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=&quot;space-y-6&quot;
          >
            {/* Enhanced Company Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className=&quot;inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-lg font-medium backdrop-blur-sm&quot;
            >
              <Star className=&quot;w-5 h-5&quot; />
              <span>Innovation Leader 2025</span>
            </motion.div>
            
            <h1 className=&quot;text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent&quot;>
              2025 Innovative Services
            </h1>
            <p className=&quot;text-2xl md:text-3xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed&quot;>
              Pioneering the future with cutting-edge micro SAAS services, quantum computing solutions, and autonomous AI platforms
            </p>
            
            {/* Enhanced Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className=&quot;grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto&quot;
            >
              <div className=&quot;p-4 group hover:bg-white/5 rounded-xl transition-all duration-300 border border-cyan-400/20&quot;>
                <div className=&quot;text-3xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors&quot;>50+</div>
                <div className=&quot;text-gray-300 text-sm&quot;>Innovative Services</div>
              </div>
              <div className=&quot;p-4 group hover:bg-white/5 rounded-xl transition-all duration-300 border border-blue-400/20&quot;>
                <div className=&quot;text-3xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors&quot;>100+</div>
                <div className=&quot;text-gray-300 text-sm&quot;>Quantum Solutions</div>
              </div>
              <div className=&quot;p-4 group hover:bg-white/5 rounded-xl transition-all duration-300 border border-purple-400/20&quot;>
                <div className=&quot;text-3xl font-bold text-purple-400 mb-2 group-hover:text-purple-300 transition-colors&quot;>24/7</div>
                <div className=&quot;text-gray-300 text-sm&quot;>Autonomous Operations</div>
              </div>
              <div className=&quot;p-4 group hover:bg-white/5 rounded-xl transition-all duration-300 border border-green-400/20&quot;>
                <div className=&quot;text-3xl font-bold text-green-400 mb-2 group-hover:text-green-300 transition-colors&quot;>∞</div>
                <div className=&quot;text-gray-300 text-sm&quot;>Future Possibilities</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Categories */}
      <section className=&quot;py-20 px-4 bg-black/30 relative&quot;>
        <div className=&quot;absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5&quot;></div>
        <div className=&quot;max-w-7xl mx-auto relative z-10&quot;>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
          >
            <h2 className=&quot;text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent&quot;>
              Service Categories
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-4xl mx-auto&quot;>
              Explore our comprehensive range of innovative services across cutting-edge technology domains
            </p>
          </motion.div>
          
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className=&quot;group relative&quot;
                >
                  <div className={`p-8 rounded-2xl bg-gradient-to-br ${category.color} bg-opacity-10 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl`}>
                    <div className=&quot;text-center&quot;>
                      <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${category.color} bg-opacity-20 flex items-center justify-center border border-white/20`}>
                        <IconComponent className=&quot;w-8 h-8 text-white&quot; />
                      </div>
                      <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>{category.name}</h3>
                      <div className=&quot;text-gray-300 text-sm&quot;>
                        {innovative2025MicroSaasBatch.filter(service => service.category === category.name).length} Services
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className=&quot;py-20 px-4&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
          >
            <h2 className=&quot;text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent&quot;>
              Featured Services
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-4xl mx-auto&quot;>
              Our most popular and innovative services that are transforming industries
            </p>
          </motion.div>
          
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {innovative2025MicroSaasBatch.filter(service => service.popular).map((service, index) => {
              const IconComponent = getCategoryIcon(service.category);
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className=&quot;group relative&quot;
                >
                  <div className=&quot;p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm&quot;>
                    {/* Popular Badge */}
                    {service.popular && (
                      <div className=&quot;absolute -top-3 left-6 px-4 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-sm font-bold rounded-full&quot;>
                        Popular
                      </div>
                    )}
                    
                    <div className=&quot;text-center mb-6&quot;>
                      <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${getCategoryColor(service.category)} bg-opacity-20 flex items-center justify-center border border-white/20 text-4xl`}>
                        {service.icon}
                      </div>
                      <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>{service.name}</h3>
                      <p className=&quot;text-gray-300 text-sm mb-4&quot;>{service.tagline}</p>
                      <div className=&quot;text-3xl font-bold text-cyan-400 mb-2&quot;>
                        {service.price}<span className=&quot;text-lg text-gray-400&quot;>/{service.period}</span>
                      </div>
                    </div>
                    <span className=&quot;text-gray-300 text-sm&quot;>
                      {(service as any).rating || 0} ({(service as any).reviews || 0} reviews)
                    </span>
                  </div>
                </div>

                {/* Service Details */}
                <div className={`p-6 bg-white/5 ${viewMode === 'list' ? 'lg:w-2/3' : ''}`}>
                  <p className=&quot;text-gray-300 mb-4&quot;>{service.description}</p>
                  
                  {/* Key Benefits */}
                  <div className=&quot;mb-4&quot;>
                    <h4 className=&quot;text-white font-semibold mb-2 flex items-center gap-2&quot;>
                      <TrendingUp className=&quot;w-4 h-4 text-green-400&quot; />
                      Key Benefits
                    </h4>
                    <ul className=&quot;space-y-1&quot;>
                      {(service as any).benefits?.slice(0, 3)?.map((benefit: string, idx: number) => (
                        <li key={idx} className=&quot;text-gray-300 text-sm flex items-start gap-2&quot;>
                          <Check className=&quot;w-3 h-3 text-green-400 mt-1 flex-shrink-0&quot; />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Features */}
                  <div className=&quot;mb-6&quot;>
                    <h4 className=&quot;text-white font-semibold mb-2 flex items-center gap-2&quot;>
                      <Zap className=&quot;w-4 h-4 text-blue-400&quot; />
                      Key Features
                    </h4>
                    <div className=&quot;flex flex-wrap gap-2&quot;>
                    
                    <div className=&quot;space-y-3 mb-6&quot;>
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className=&quot;flex items-center space-x-3 text-sm text-gray-300&quot;>
                          <div className=&quot;w-2 h-2 bg-cyan-400 rounded-full&quot;></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Market Info */}
                    <div className=&quot;border-t border-white/10 pt-4 space-y-2&quot;>
                      <div className=&quot;text-xs text-gray-400&quot;>
                        Market Price: <span className=&quot;text-green-400&quot;>{service.marketPrice}</span>
                      </div>
                      <div className=&quot;text-xs text-gray-400&quot;>
                        Category: <span className=&quot;text-cyan-400&quot;>{service.category}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className=&quot;py-20 px-4 bg-black/30 relative&quot;>
        <div className=&quot;absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5&quot;></div>
        <div className=&quot;max-w-7xl mx-auto relative z-10&quot;>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
          >
            <h2 className=&quot;text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent&quot;>
              Complete Service Portfolio
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-4xl mx-auto&quot;>
              Explore our entire collection of innovative services designed for the future
            </p>
          </motion.div>
          
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;>
            {innovative2025MicroSaasBatch.map((service, index) => {
              const IconComponent = getCategoryIcon(service.category);
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className=&quot;group relative&quot;
                >
                  <div className=&quot;p-6 rounded-xl bg-gradient-to-br from-gray-900/30 to-gray-800/30 border border-white/5 hover:border-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-xl backdrop-blur-sm&quot;>
                    <div className=&quot;flex items-start space-x-4&quot;>
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${getCategoryColor(service.category)} bg-opacity-20 flex items-center justify-center border border-white/20 text-2xl flex-shrink-0`}>
                        {service.icon}
                      </div>
                      <div className=&quot;flex-1 min-w-0&quot;>
                        <h3 className=&quot;text-lg font-bold text-white mb-1 truncate&quot;>{service.name}</h3>
                        <p className=&quot;text-gray-400 text-sm mb-2 line-clamp-2&quot;>{service.tagline}</p>
                        <div className=&quot;text-cyan-400 font-semibold text-sm&quot;>
                          {service.price}<span className=&quot;text-gray-400&quot;>/{service.period}</span>
                        </div>
                        <div className=&quot;text-xs text-gray-500 mt-2&quot;>
                          {service.category}
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

      {/* Contact CTA */}
      <section className=&quot;py-20 px-4&quot;>
        <div className=&quot;max-w-4xl mx-auto text-center&quot;>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;space-y-8&quot;
          >
            <h2 className=&quot;text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent&quot;>
              Ready to Transform Your Business?
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-2xl mx-auto&quot;>
              Get in touch with our team to discuss how our innovative services can drive your success
            </p>
            
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <a 
                href=&quot;tel:+13024640950&quot;
                className=&quot;px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 flex items-center justify-center space-x-2&quot;
              >
                <Zap className=&quot;w-5 h-5&quot; />
                <span>Call Now: +1 302 464 0950</span>
              </Link>
              <a 
                href=&quot;mailto:kleber@ziontechgroup.com&quot;
                className=&quot;px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105&quot;
              >
                Email Us
              </Link>
            </div>
            
            <div className=&quot;text-sm text-gray-400&quot;>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>Website: <a href=&quot;https://ziontechgroup.com&quot; className=&quot;text-cyan-400 hover:text-cyan-300&quot;>https://ziontechgroup.com</Link></p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Comprehensive2025InnovativeServicesShowcase;
