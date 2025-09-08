import { Link } from 'react-router-dom';
import { Cloud, Server, Shield, Cpu, Cable, LifeBuoy, DollarSign, ExternalLink, Wrench, Database} from 'lucide-react';

const ITServices: React.FC = () => {
  const offerings = [
    { icon: Cloud, title: 'Cloud & DevOps', desc: 'CI/CD, IaC, Kubernetes, cost optimization and SRE with 24/7 runbooks.', price: '$6,000 - $80,000+' },
    { icon: Server, title: 'Migrations & Modernization', desc: 'On-prem to cloud, containerization, monolith-to-microservices, and zero-downtime cutovers.', price: '$10,000 - $120,000+' },
    { icon: Shield, title: 'Security & Compliance', desc: 'SOC2/ISO readiness, zero-trust, vulnerability management, and incident response plans.', price: '$3,000 - $40,000+' },
    { icon: Cpu, title: 'Networking & Edge', desc: 'SD-WAN, VPN, edge compute, IoT, and observability for distributed sites.', price: '$5,000 - $50,000+' },
    { icon: Cable, title: 'IT Onsite & Managed Services', desc: 'Hands-on deployment, device lifecycle, patching, help desk, and inventory.', price: '$1,500 - $15,000/mo' },
    { icon: LifeBuoy, title: 'Business Continuity', desc: 'Backups, DR plans, tabletop exercises, and RTO/RPO aligned architecture.', price: '$2,500 - $30,000+' },
    // New items
    { icon: Wrench, title: 'Platform Engineering', desc: 'Golden paths, internal developer platforms, Backstage portals, and paved-road governance.', price: '$8,000 - $90,000+' },
    { icon: Database, title: 'Data Platforms & MLOps', desc: 'Lakehouse setups, ELT pipelines, feature stores, and ML deployment with observability.', price: '$7,000 - $95,000+' },
    { icon: Building, title: 'Enterprise SaaS Rollouts', desc: 'Okta SSO, RBAC, tenant provisioning, and SOC2-aligned configuration baselines at scale.', price: '$5,000 - $70,000+' },
    { icon: Cloud, title: 'Cloud Landing Zones', desc: 'Secure multi-account landing zones with guardrails, budgets, CI/CD and golden patterns.', price: '$8,000 - $65,000+' },
    { icon: Server, title: 'Database Reliability Engineering', desc: 'HA/DR, performance tuning, migrations and observability for Postgres, MySQL and SQL Server.', price: '$4,000 - $45,000+' },
    { icon: Shield, title: 'Zero Trust Enablement', desc: 'Network segmentation, identity-aware proxies, device posture and continuous verification.', price: '$6,000 - $60,000+' }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: itServices.length, icon: '🚀' },
    { id: 'Cloud & DevOps', name: 'Cloud & DevOps', count: itServices.filter(s => s.category === 'Cloud & DevOps').length, icon: '☁️' },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: itServices.filter(s => s.category === 'Cybersecurity').length, icon: '🛡️' },
    { id: 'Data & Analytics', name: 'Data & Analytics', count: itServices.filter(s => s.category === 'Data & Analytics').length, icon: '📊' },
    { id: 'Networking', name: 'Networking', count: itServices.filter(s => s.category === 'Networking').length, icon: '🌐' },
    { id: 'Data Management', name: 'Data Management', count: itServices.filter(s => s.category === 'Data Management').length, icon: '💾' },
    { id: 'Development', name: 'Development', count: itServices.filter(s => s.category === 'Development').length, icon: '💻' },
    { id: 'AI & ML', name: 'AI & ML', count: itServices.filter(s => s.category === 'AI & ML').length, icon: '🤖' },
    { id: 'IoT', name: 'IoT', count: itServices.filter(s => s.category === 'IoT').length, icon: '🔌' },
    { id: 'Blockchain', name: 'Blockchain', count: itServices.filter(s => s.category === 'Blockchain').length, icon: '🔗' }
  ];

  const filteredServices = itServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Cloud & DevOps': return '☁️';
      case 'Cybersecurity': return '🛡️';
      case 'Data & Analytics': return '📊';
      case 'Networking': return '🌐';
      case 'Data Management': return '💾';
      case 'Development': return '💻';
      case 'AI & ML': return '🤖';
      case 'IoT': return '🔌';
      case 'Blockchain': return '🔗';
      default: return '🚀';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="IT Services - Zion Tech Group"
        description="Comprehensive IT services including cloud infrastructure, cybersecurity, data analytics, and custom development solutions. Transform your business with enterprise-grade technology."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Enterprise
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> IT Services</span>
              <br />
              & Solutions
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            >
              Comprehensive IT infrastructure, cybersecurity, cloud solutions, and custom development services. 
              Transform your business with enterprise-grade technology and expert support.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                View Pricing
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search IT services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-64">
              <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.icon} {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{getCategoryIcon(service.category)}</span>
                    <span className="text-sm text-cyan-400 bg-cyan-400/20 px-2 py-1 rounded-full">
                      {service.subcategory}
                    </span>
                    {service.featured && (
                      <span className="text-sm text-yellow-400 bg-yellow-400/20 px-2 py-1 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 text-sm line-clamp-3">{service.description}</p>
                </div>
              </div>

              {/* Service Stats */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-white font-medium">{service.rating}</span>
                  <span className="text-gray-400">({service.reviewCount})</span>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-cyan-400">{service.currency}{service.price}</div>
                  <div className="text-sm text-gray-400">one-time</div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-2 mb-4">
                {service.features.slice(0, 3).map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>{feature}</span>
                  </div>
                ))}
                {service.features.length > 3 && (
                  <div className="text-sm text-cyan-400">
                    +{service.features.length - 3} more features
                  </div>
                )}
              </div>

              {/* Technologies */}
              <div className="mb-4">
                <div className="text-sm text-gray-400 mb-2">Technologies:</div>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {service.technologies.length > 4 && (
                    <span className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full">
                      +{service.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Service Details */}
              <div className="space-y-2 mb-4 text-sm text-gray-300">
                <div className="flex justify-between">
                  <span>Delivery:</span>
                  <span className="text-white">{service.delivery}</span>
                </div>
                <div className="flex justify-between">
                  <span>Support:</span>
                  <span className="text-white">{service.support}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedService(service);
                  }}
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                >
                  Learn More
                </button>
                <Link
                  to="/contact"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 bg-white/10 text-white py-2 px-4 rounded-lg font-medium hover:bg-white/20 transition-all duration-300 text-center"
                >
                  Get Quote
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-3xl p-12 text-center border border-cyan-400/30">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of enterprises already leveraging our IT services. 
            Get started today and experience enterprise-grade technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              View All Pricing
            </Link>
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-800 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-4xl">{getCategoryIcon(selectedService.category)}</span>
                    <span className="text-cyan-400 bg-cyan-400/20 px-3 py-1 rounded-full text-sm">
                      {selectedService.subcategory}
                    </span>
                    {selectedService.featured && (
                      <span className="text-yellow-400 bg-yellow-400/20 px-3 py-1 rounded-full text-sm">
                        Featured
                      </span>
                    )}
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedService.title}</h2>
                  <p className="text-gray-300 text-lg">{selectedService.description}</p>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Service Details</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Price:</span>
                      <span className="text-white font-semibold">{selectedService.currency}{selectedService.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Delivery:</span>
                      <span className="text-white">{selectedService.delivery}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Support:</span>
                      <span className="text-white">{selectedService.support}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Rating:</span>
                      <span className="text-yellow-400 font-semibold">{selectedService.rating}/5</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Features & Benefits</h3>
                  <div className="space-y-3">
                    {selectedService.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-white mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedService.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-white mb-4">Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedService.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-300">
                      <TrendingUp className="h-4 w-4 text-green-400" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <Link
                  to="/contact"
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                >
                  Get Started Today
                </Link>
                <Link
                  to="/pricing"
                  className="flex-1 bg-white/10 text-white py-3 px-6 rounded-lg font-semibold text-center hover:bg-white/20 transition-all duration-300"
                >
                  View Pricing
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ITServices;