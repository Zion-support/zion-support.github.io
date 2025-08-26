import React, { useState } from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { advancedInnovativeServices2025V3, advancedITServices2025, advancedAIServices2025 } from '../../data/2025-advanced-innovative-services-expansion-v3';

const ComprehensiveServicesMarketing2025: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const allServices = [
    ...advancedInnovativeServices2025V3.map(service => ({ ...service, type: 'Micro SAAS' })),
    ...advancedITServices2025.map(service => ({ ...service, type: 'IT Service' })),
    ...advancedAIServices2025.map(service => ({ ...service, type: 'AI Service' }))
  ];

  const getServiceTypeColor = (type: string) => {
    switch (type) {
      case 'Micro SAAS':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'IT Service':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'AI Service':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: string } = {
      'Legal Tech & Compliance': '⚖️',
      'Quantum Computing & Security': '🔐',
      'Healthcare & Biotech': '🏥',
      'Energy & Sustainability': '🌱',
      'Cybersecurity': '🛡️',
      'Fintech & Trading': '📈',
      'Quantum Computing & AI': '🔮',
      'Supply Chain & Logistics': '🚚',
      'Edge Computing & IoT': '🌐',
      'Marketing & Automation': '📢',
      'Quantum Technology': '🔮',
      'AI & Machine Learning': '🧠',
      'AI & Analytics': '📊',
      'AI & Customer Experience': '💬'
=======
import { advancedInnovativeServicesExpansionV3 } from '../data/2025-advanced-innovative-services-expansion-v3';
import { specializedEnterpriseSolutions2025 } from '../data/2025-specialized-enterprise-solutions';

const ComprehensiveServicesMarketing2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const allServices = [
    ...advancedInnovativeServicesExpansionV3,
    ...specializedEnterpriseSolutions2025
  ];
  
  const categories = Array.from(new Set(allServices.map(service => service.category)));

  const filteredServices = allServices.filter(service =>
    selectedCategory === 'all' || service.category === selectedCategory
  );

  const toggleServiceExpansion = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  const getCategoryIcon = (categoryName: string) => {
    const iconMap: { [key: string]: string } = {
      'AI & Machine Learning': '🤖',
      'Cybersecurity': '🔐',
      'Cloud & DevOps': '☁️',
      'Blockchain & Web3': '⛓️',
      'IoT & Edge Computing': '🌐',
      'Digital Twin & Simulation': '🔄',
      'Testing & Quality Assurance': '🧪',
      'Compliance & Privacy': '📋',
      'Fintech & Digital Banking': '💰',
      'Healthcare & Biotech': '🏥',
      'Space Technology': '🚀',
      'Automotive & Transportation': '🚗',
      'Energy & Sustainability': '⚡',
      'Manufacturing & Industrial': '🏭'
    };
    return iconMap[categoryName] || '⚡';
  };

  const getCategoryColor = (categoryName: string) => {
    const colorMap: { [key: string]: string } = {
      'AI & Machine Learning': 'from-blue-600 to-purple-700',
      'Cybersecurity': 'from-red-600 to-orange-700',
      'Cloud & DevOps': 'from-green-600 to-teal-700',
      'Blockchain & Web3': 'from-purple-600 to-indigo-700',
      'IoT & Edge Computing': 'from-cyan-600 to-blue-700',
      'Digital Twin & Simulation': 'from-orange-600 to-red-700',
      'Testing & Quality Assurance': 'from-emerald-600 to-green-700',
      'Compliance & Privacy': 'from-indigo-600 to-purple-700',
      'Fintech & Digital Banking': 'from-green-600 to-emerald-700',
      'Healthcare & Biotech': 'from-blue-600 to-cyan-700',
      'Space Technology': 'from-purple-600 to-pink-700',
      'Automotive & Transportation': 'from-orange-600 to-red-700',
      'Energy & Sustainability': 'from-green-600 to-teal-700',
      'Manufacturing & Industrial': 'from-gray-600 to-slate-700'
    };
    return colorMap[categoryName] || 'from-blue-600 to-cyan-700';
  };

  const getCategoryStats = (categoryName: string) => {
    const servicesInCategory = allServices.filter(service => service.category === categoryName);
    const totalPrice = servicesInCategory.reduce((sum, service) => {
      const price = parseInt(service.price.replace(/[^0-9]/g, ''));
      return sum + price;
    }, 0);
    const avgPrice = totalPrice / servicesInCategory.length;
    
    return {
      count: servicesInCategory.length,
      avgPrice: Math.round(avgPrice),
      totalValue: totalPrice
>>>>>>> origin/cursor/expand-services-and-deploy-updates-00d5
    };
    return icons[category] || '🚀';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Zion Tech Group
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
<<<<<<< HEAD
              {" "}Comprehensive Services 2025
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover our revolutionary collection of 25+ cutting-edge micro SAAS services, IT solutions, and AI platforms. 
            Each service is designed to give your business a competitive edge in the digital marketplace.
          </p>
          
          {/* Contact Information */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">Contact Zion Tech Group</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-gray-300">📱 Mobile</p>
                <p className="text-white font-semibold">+1 302 464 0950</p>
              </div>
              <div>
                <p className="text-gray-300">✉️ Email</p>
                <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <p className="text-gray-300">📍 Address</p>
                <p className="text-white font-semibold">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            <div className="mt-4">
              <a 
                href="https://ziontechgroup.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Visit our website: ziontechgroup.com
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link
              to="/advanced-innovative-services-showcase-2025"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
            >
              🚀 Advanced Services
            </Link>
            <Link
              to="/comprehensive-services-showcase-2025"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
            >
              💡 All Services
            </Link>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
            >
              📞 Get Quote
            </Link>
=======
              {" "}2025 Service Portfolio
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Leading the future of technology with cutting-edge micro SAAS solutions, AI-powered platforms, and innovative digital transformation services. 
            Transform your business with our comprehensive suite of intelligent solutions.
          </p>
          
          {/* Company Overview */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 max-w-4xl mx-auto mb-8 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="text-2xl mr-2">🌐</span>
                  About Zion Tech Group
                </h3>
                <p className="text-gray-300 mb-4">
                  We are a revolutionary technology company specializing in AI-powered solutions, 
                  micro SAAS services, and cutting-edge digital transformation. Our mission is to 
                  democratize advanced technology and make it accessible to businesses of all sizes.
                </p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-center">
                    <span className="w-4 h-4 text-green-400 mr-2">✓</span>
                    Founded in 2024
                  </div>
                  <div className="flex items-center">
                    <span className="w-4 h-4 text-green-400 mr-2">✓</span>
                    Global reach and expertise
                  </div>
                  <div className="flex items-center">
                    <span className="w-4 h-4 text-green-400 mr-2">✓</span>
                    24/7 support and monitoring
                  </div>
                </div>
              </div>
              
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="text-2xl mr-2">🚀</span>
                  Our Mission
                </h3>
                <p className="text-gray-300 mb-4">
                  To accelerate digital transformation and innovation across industries by providing 
                  cutting-edge technology solutions that drive measurable business value and competitive advantage.
                </p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-center">
                    <span className="w-4 h-4 text-blue-400 mr-2">•</span>
                    AI-first approach to problem solving
                  </div>
                  <div className="flex items-center">
                    <span className="w-4 h-4 text-blue-400 mr-2">•</span>
                    Enterprise-grade security and compliance
                  </div>
                  <div className="flex items-center">
                    <span className="w-4 h-4 text-blue-400 mr-2">•</span>
                    Rapid deployment and time-to-value
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Portfolio Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Service Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
                <div className="text-4xl font-bold text-blue-400 mb-2">{allServices.length}</div>
                <div className="text-gray-400 mb-2">Total Services</div>
                <div className="text-sm text-gray-500">Comprehensive solutions</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
                <div className="text-4xl font-bold text-cyan-400 mb-2">{categories.length}</div>
                <div className="text-gray-400 mb-2">Categories</div>
                <div className="text-sm text-gray-500">Technology domains</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
                <div className="text-4xl font-bold text-green-400 mb-2">99%</div>
                <div className="text-gray-400 mb-2">Client Satisfaction</div>
                <div className="text-sm text-gray-500">Proven results</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
                <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-400 mb-2">Support Available</div>
                <div className="text-sm text-gray-500">Always there for you</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Filter by Category</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                    : 'bg-white/10 backdrop-blur-lg border border-white/20 text-gray-300 hover:bg-white/20'
                }`}
              >
                All Categories ({allServices.length})
              </button>
              {categories.map((category) => {
                const stats = getCategoryStats(category);
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                        : 'bg-white/10 backdrop-blur-lg border border-white/20 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category} ({stats.count})
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {selectedCategory === 'all' ? 'All Services' : selectedCategory}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {selectedCategory === 'all' 
                ? 'Browse our complete portfolio of innovative services'
                : `Explore our ${selectedCategory} solutions`
              }
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.name}</h3>
                <p className="text-gray-300 mb-4 line-clamp-2">{service.description}</p>
                
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-600/20 text-blue-400 text-sm rounded-full border border-blue-600/30">
                    {service.category}
                  </span>
                </div>

                <div className="mb-6">
                  <div className="text-3xl font-bold text-green-400 mb-2">{service.price}</div>
                  <div className="text-gray-400">{service.period}</div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="text-sm text-gray-400 flex items-center">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                        +{service.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="space-y-3">
                  <a
                    href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.name}`}
                    className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                  >
                    Get Started
                  </a>
                  <a
                    href={`tel:${service.contactInfo.mobile}`}
                    className="block w-full text-center px-6 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
                  >
                    Call for Demo
                  </a>
                </div>

                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Rating:</span>
                    <div className="flex items-center space-x-1">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'fill-current' : 'fill-gray-600'}`} viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                          </svg>
                        ))}
                      </div>
                      <span className="text-gray-400">({service.reviews})</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-00d5
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Services Overview */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Our Revolutionary Service Portfolio
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {allServices.map((service) => (
              <div
                key={service.id}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 group cursor-pointer"
                onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
              >
                {/* Service Type Badge */}
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getServiceTypeColor((service as any).type)}`}>
                    {(service as any).type}
                  </span>
                  <span className="text-3xl">{service.icon || '🚀'}</span>
                </div>

                {/* Service Name and Category */}
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-400 mb-3 flex items-center">
                  {getCategoryIcon(service.category)} {service.category}
                </p>

                {/* Tagline */}
                {(service as any).tagline && (
                  <p className="text-gray-300 mb-4 italic">{(service as any).tagline}</p>
                )}

                {/* Description */}
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {service.description}
                </p>

                {/* Pricing */}
                <div className="mb-4">
                  {(service as any).price ? (
                    <div className="text-2xl font-bold text-blue-400">
                      {(service as any).price}
                      {(service as any).period && (
                        <span className="text-sm text-gray-400 font-normal">{(service as any).period}</span>
                      )}
                    </div>
                  ) : (service as any).hourlyRate ? (
                    <div className="text-2xl font-bold text-green-400">
                      ${(service as any).hourlyRate}
                      <span className="text-sm text-gray-400 font-normal">/hour</span>
                    </div>
                  ) : (
                    <div className="text-2xl font-bold text-purple-400">
                      {(service as any).pricing}
                    </div>
                  )}
                  
                  {(service as any).projectRate && (
                    <p className="text-sm text-gray-400 mt-1">{(service as any).projectRate}</p>
                  )}
                </div>

                {/* Market Position */}
                {(service as any).marketPosition && (
                  <div className="mb-4 p-3 bg-white/5 rounded-lg">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Market Position:</h4>
                    <p className="text-xs text-gray-400">{(service as any).marketPosition}</p>
                  </div>
                )}

                {/* ROI and Benefits */}
                <div className="mb-4">
                  {(service as any).roi && (
                    <div className="mb-2">
                      <span className="text-xs font-semibold text-green-400">ROI: </span>
                      <span className="text-xs text-gray-300">{(service as any).roi}</span>
                    </div>
                  )}
                  {(service as any).benefits && (
                    <div>
                      <span className="text-xs font-semibold text-blue-400">Benefits: </span>
                      <span className="text-xs text-gray-300">
                        {(service as any).benefits.slice(0, 2).join(', ')}
                        {(service as any).benefits.length > 2 && '...'}
                      </span>
                    </div>
                  )}
                </div>

                {/* Contact and Action */}
                <div className="border-t border-white/20 pt-4">
                  <div className="flex justify-between items-center">
                    <div className="text-xs text-gray-400">
                      <p>📧 {(service as any).contactInfo?.email || 'kleber@ziontechgroup.com'}</p>
                      <p>📱 {(service as any).contactInfo?.mobile || '+1 302 464 0950'}</p>
                    </div>
                    <a
                      href={(service as any).link || 'https://ziontechgroup.com'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                    >
                      Learn More
                    </a>
                  </div>
                </div>

                {/* Expanded Details */}
                {selectedService === service.id && (
                  <div className="mt-6 pt-6 border-t border-white/20">
                    {/* Features */}
                    {(service as any).features && (
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {(service as any).features.map((feature: string, index: number) => (
                            <li key={index} className="text-xs text-gray-400 flex items-center">
                              <span className="text-blue-400 mr-2">✓</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Technology */}
                    {(service as any).technology && (
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-300 mb-2">Technology Stack:</h4>
                        <div className="flex flex-wrap gap-2">
                          {(service as any).technology.map((tech: string, index: number) => (
                            <span key={index} className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Integrations */}
                    {(service as any).integrations && (
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-300 mb-2">Integrations:</h4>
                        <div className="flex flex-wrap gap-2">
                          {(service as any).integrations.map((integration: string, index: number) => (
                            <span key={index} className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300">
                              {integration}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Use Cases */}
                    {(service as any).useCases && (
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-300 mb-2">Use Cases:</h4>
                        <div className="flex flex-wrap gap-2">
                          {(service as any).useCases.map((useCase: string, index: number) => (
                            <span key={index} className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300">
                              {useCase}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Market Information */}
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      {(service as any).marketSize && (
                        <div>
                          <span className="text-gray-400">Market Size:</span>
                          <p className="text-gray-300">{(service as any).marketSize}</p>
                        </div>
                      )}
                      {(service as any).growthRate && (
                        <div>
                          <span className="text-gray-400">Growth Rate:</span>
                          <p className="text-gray-300">{(service as any).growthRate}</p>
                        </div>
                      )}
                      {(service as any).competitors && (
                        <div className="col-span-2">
                          <span className="text-gray-400">Competitors:</span>
                          <p className="text-gray-300">{(service as any).competitors.join(', ')}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Our comprehensive suite of innovative services is designed to give you a competitive edge in the digital marketplace. 
              Contact us today to discuss your specific needs and discover how we can help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-colors"
              >
                📞 Call Now: +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-800 transition-colors"
              >
                ✉️ Email Us
              </a>
            </div>
            <div className="mt-6 text-blue-100">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>🌐 <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">ziontechgroup.com</a></p>
            </div>
=======
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our innovative services can help drive your digital transformation and competitive advantage
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=Service Portfolio Inquiry"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Get Custom Quote
            </a>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
            >
              Schedule Consultation
            </a>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-00d5
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServicesMarketing2025;