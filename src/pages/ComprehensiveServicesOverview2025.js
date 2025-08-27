import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { allEnhancedServices } from '../data/enhanced-2025-comprehensive-services';
const ComprehensiveServicesOverview2025 = () => {
    const [selectedService, setSelectedService] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const categories = [
        'all',
        'AI & Business Intelligence',
        'Cybersecurity & Quantum Computing',
        'DevOps & Infrastructure',
        'Blockchain & Supply Chain',
        'Healthcare & AI',
        'Quantum Computing & AI',
        'FinTech & AI',
        'IoT & Edge Computing',
        'Legal Tech & AI',
        'Marketing & AI',
        'Energy & Sustainability',
        'Logistics & Transportation'
    ];
    const filteredServices = allEnhancedServices.filter(service => selectedCategory === 'all' || service.category === selectedCategory);
    const getCategoryIcon = (category) => {
        const icons = {
            'AI & Business Intelligence': '🧠',
            'Cybersecurity & Quantum Computing': '🔒',
            'DevOps & Infrastructure': '⚙️',
            'Blockchain & Supply Chain': '⛓️',
            'Healthcare & AI': '🏥',
            'Quantum Computing & AI': '🔮',
            'FinTech & AI': '💰',
            'IoT & Edge Computing': '🌐',
            'Legal Tech & AI': '⚖️',
            'Marketing & AI': '📢',
            'Energy & Sustainability': '⚡',
            'Logistics & Transportation': '🚚'
        };
        return icons[category] || '🚀';
    };
    const getCategoryColor = (category) => {
        const colors = {
            'AI & Business Intelligence': 'from-blue-500 to-cyan-500',
            'Cybersecurity & Quantum Computing': 'from-red-500 to-pink-500',
            'DevOps & Infrastructure': 'from-green-500 to-emerald-500',
            'Blockchain & Supply Chain': 'from-purple-500 to-indigo-500',
            'Healthcare & AI': 'from-teal-500 to-cyan-500',
            'Quantum Computing & AI': 'from-violet-500 to-purple-500',
            'FinTech & AI': 'from-yellow-500 to-orange-500',
            'IoT & Edge Computing': 'from-indigo-500 to-blue-500',
            'Legal Tech & AI': 'from-gray-500 to-slate-500',
            'Marketing & AI': 'from-pink-500 to-rose-500',
            'Energy & Sustainability': 'from-green-500 to-teal-500',
            'Logistics & Transportation': 'from-orange-500 to-red-500'
        };
        return colors[category] || 'from-gray-500 to-slate-500';
    };
    return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Comprehensive Services
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}Overview 2025
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Explore our complete portfolio of innovative micro SAAS services, IT solutions, and AI platforms. 
            Each service is designed with cutting-edge technology and proven methodologies to drive business transformation.
          </p>
          
          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link to="/comprehensive-services-2025" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300">
              Landing Page
            </Link>
            <Link to="/enhanced-services-2025" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300">
              Services Showcase
            </Link>
            <a href="tel:+13024640950" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300">
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-blue-400 mb-4 text-center">Filter by Category</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {categories.map(category => (<button key={category} onClick={() => setSelectedCategory(category)} className={`p-3 rounded-lg border transition-all duration-300 text-center ${selectedCategory === category
                ? 'bg-blue-500/20 border-blue-400 text-blue-400'
                : 'bg-white/10 border-white/20 hover:border-blue-400 hover:text-blue-400'}`}>
                  <div className="text-2xl mb-1">{getCategoryIcon(category)}</div>
                  <div className="text-xs">{category === 'all' ? 'All Categories' : category}</div>
                </button>))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredServices.map((service) => (<div key={service.id} className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 overflow-hidden hover:border-blue-400 transition-all duration-300 hover:scale-105">
                {/* Service Header */}
                <div className={`p-6 bg-gradient-to-r ${getCategoryColor(service.category)}`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{getCategoryIcon(service.category)}</span>
                    <span className="text-sm bg-white/20 px-2 py-1 rounded-full">{service.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-white/90 text-sm">{service.tagline}</p>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>
                  
                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-400">{service.price}</div>
                      <div className="text-xs text-gray-400">{service.period}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-400">{service.rating}/5.0</div>
                      <div className="text-xs text-gray-400">{service.reviews} reviews</div>
                    </div>
                  </div>

                  {/* Technology Stack */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Technology Stack</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.technology.slice(0, 3).map((tech, index) => (<span key={index} className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full text-xs">
                          {tech}
                        </span>))}
                    </div>
                  </div>

                  {/* Market Info */}
                  <div className="grid grid-cols-2 gap-4 text-xs text-gray-400 mb-4">
                    <div>
                      <span className="text-blue-400">Market:</span> {service.marketSize}
                    </div>
                    <div>
                      <span className="text-blue-400">Customers:</span> {service.customers.toLocaleString()}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-2">
                    <button onClick={() => setSelectedService(service.id)} className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105">
                      View Details
                    </button>
                    <a href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.name}`} className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105">
                      Contact
                    </a>
                  </div>
                </div>
              </div>))}
          </div>

          {filteredServices.length === 0 && (<div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-300 mb-2">No services found</h3>
              <p className="text-gray-400">Try selecting a different category or contact us for custom solutions.</p>
            </div>)}
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (<div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 rounded-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {(() => {
                const service = allEnhancedServices.find(s => s.id === selectedService);
                if (!service)
                    return null;
                return (<>
                    {/* Modal Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <span className="text-4xl">{getCategoryIcon(service.category)}</span>
                        <div>
                          <h2 className="text-2xl font-bold text-white">{service.name}</h2>
                          <p className="text-blue-400">{service.category}</p>
                        </div>
                      </div>
                      <button onClick={() => setSelectedService(null)} className="text-gray-400 hover:text-white text-2xl">
                        ×
                      </button>
                    </div>

                    {/* Service Details */}
                    <div className="space-y-6">
                      {/* Overview */}
                      <div>
                        <h3 className="text-lg font-semibold text-blue-400 mb-2">Overview</h3>
                        <p className="text-gray-300 mb-2">{service.tagline}</p>
                        <p className="text-gray-300">{service.description}</p>
                      </div>

                      {/* Key Metrics Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="bg-slate-700 rounded-lg p-4 text-center">
                          <h4 className="text-sm font-semibold text-blue-400 mb-2">Pricing</h4>
                          <div className="text-2xl font-bold text-white">{service.price}</div>
                          <div className="text-gray-400 text-sm">{service.period}</div>
                        </div>
                        <div className="bg-slate-700 rounded-lg p-4 text-center">
                          <h4 className="text-sm font-semibold text-blue-400 mb-2">Rating</h4>
                          <div className="text-2xl font-bold text-white">{service.rating}/5.0</div>
                          <div className="text-gray-400 text-sm">{service.reviews} reviews</div>
                        </div>
                        <div className="bg-slate-700 rounded-lg p-4 text-center">
                          <h4 className="text-sm font-semibold text-blue-400 mb-2">Market Size</h4>
                          <div className="text-2xl font-bold text-white">{service.marketSize}</div>
                          <div className="text-gray-400 text-sm">Total Addressable Market</div>
                        </div>
                        <div className="bg-slate-700 rounded-lg p-4 text-center">
                          <h4 className="text-sm font-semibold text-blue-400 mb-2">Uptime</h4>
                          <div className="text-2xl font-bold text-white">{service.uptime}</div>
                          <div className="text-gray-400 text-sm">Guaranteed Uptime</div>
                        </div>
                      </div>

                      {/* Features and Use Cases */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-lg font-semibold text-blue-400 mb-3">Features</h3>
                          <div className="space-y-2">
                            {service.features.map((feature, index) => (<div key={index} className="flex items-center text-gray-300">
                                <span className="text-green-400 mr-2">✓</span>
                                {feature}
                              </div>))}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-blue-400 mb-3">Use Cases</h3>
                          <div className="space-y-2">
                            {service.useCases.map((useCase, index) => (<div key={index} className="text-gray-300">
                                • {useCase}
                              </div>))}
                          </div>
                        </div>
                      </div>

                      {/* Technology and Integrations */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-lg font-semibold text-blue-400 mb-3">Technology Stack</h3>
                          <div className="flex flex-wrap gap-2">
                            {service.technology.map((tech, index) => (<span key={index} className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                                {tech}
                              </span>))}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-blue-400 mb-3">Integrations</h3>
                          <div className="flex flex-wrap gap-2">
                            {service.integrations.slice(0, 8).map((integration, index) => (<span key={index} className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                                {integration}
                              </span>))}
                          </div>
                        </div>
                      </div>

                      {/* Technical Specifications */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-lg font-semibold text-blue-400 mb-3">Technical Specs</h3>
                          <div className="space-y-2 text-sm text-gray-300">
                            <div><span className="text-blue-400">API Endpoints:</span> {service.apiEndpoints}</div>
                            <div><span className="text-blue-400">Uptime:</span> {service.uptime}</div>
                            <div><span className="text-blue-400">Setup Time:</span> {service.setupTime}</div>
                            <div><span className="text-blue-400">Trial Period:</span> {service.trialDays} days</div>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-blue-400 mb-3">Security Features</h3>
                          <div className="space-y-2">
                            {service.securityFeatures.map((feature, index) => (<div key={index} className="flex items-center text-gray-300">
                                <span className="text-green-400 mr-2">🔒</span>
                                {feature}
                              </div>))}
                          </div>
                        </div>
                      </div>

                      {/* ROI and Benefits */}
                      <div>
                        <h3 className="text-lg font-semibold text-blue-400 mb-3">ROI & Benefits</h3>
                        <div className="bg-slate-700 rounded-lg p-4">
                          <p className="text-gray-300 mb-3">{service.roi}</p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-blue-400">Competitive Advantage:</span>
                              <p className="text-gray-300 mt-1">{service.competitiveAdvantage}</p>
                            </div>
                            <div>
                              <span className="text-blue-400">Target Audience:</span>
                              <p className="text-gray-300 mt-1">{service.targetAudience}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Compliance and Certifications */}
                      <div>
                        <h3 className="text-lg font-semibold text-blue-400 mb-3">Compliance & Certifications</h3>
                        <div className="flex flex-wrap gap-2">
                          {service.compliance.map((cert, index) => (<span key={index} className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm">
                              {cert}
                            </span>))}
                        </div>
                      </div>

                      {/* Contact and Next Steps */}
                      <div className="bg-slate-700 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-blue-400 mb-4">Get Started</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-sm font-semibold text-gray-400 mb-2">Contact Information</h4>
                            <p className="text-gray-300">Phone: {service.contact.phone}</p>
                            <p className="text-gray-300">Email: {service.contact.email}</p>
                            <p className="text-gray-300">Address: {service.contact.address}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-gray-400 mb-2">Next Steps</h4>
                            <div className="space-y-2">
                              <a href={service.website} target="_blank" rel="noopener noreferrer" className="block bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg transition-colors duration-300">
                                Visit Website
                              </a>
                              <a href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.name}`} className="block bg-green-600 hover:bg-green-700 text-white text-center py-2 px-4 rounded-lg transition-colors duration-300">
                                Request Demo
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>);
            })()}
            </div>
          </div>
        </div>)}

      {/* Footer CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Explore Our Services?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to learn more about our comprehensive services and how they can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13024640950" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
              Call Now: +1 302 464 0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
              Email: kleber@ziontechgroup.com
            </a>
          </div>
        </div>
      </section>
    </div>);
};
export default ComprehensiveServicesOverview2025;
