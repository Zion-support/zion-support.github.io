import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { ULTIMATE_MICRO_SAAS_SERVICES_2025 } from '../data/ultimateMicroSaasServices2025';

const Pricing: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('price');

  const categories = [
    'all',
    'AI & Analytics',
    'AI & Customer Experience',
    'AI & Supply Chain',
    'AI & FinTech',
    'AI & Healthcare',
    'AI & Education',
    'AI & Marketing',
    'AI & Human Resources',
    'AI & Legal Technology',
    'AI & Real Estate',
    'AI & Manufacturing',
    'AI & Energy',
    'AI & Transportation',
    'AI & Agriculture',
    'AI & Environment'
  ];

  const filteredServices = ULTIMATE_MICRO_SAAS_SERVICES_2025.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  );

  const sortedServices = [...filteredServices].sort((a, b) => {
    if (sortBy === 'price') return a.price - b.price;
    if (sortBy === 'name') return a.title.localeCompare(b.title);
    if (sortBy === 'category') return a.category.localeCompare(b.category);
    return 0;
  });

  const getPriceTier = (price: number) => {
    if (price < 1000) return 'starter';
    if (price < 3000) return 'professional';
    if (price < 5000) return 'enterprise';
    return 'premium';
  };

  const getPriceTierColor = (tier: string) => {
    switch (tier) {
      case 'starter': return 'text-green-400 bg-green-400/20';
      case 'professional': return 'text-blue-400 bg-blue-400/20';
      case 'enterprise': return 'text-purple-400 bg-purple-400/20';
      case 'premium': return 'text-yellow-400 bg-yellow-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getPriceTierLabel = (tier: string) => {
    switch (tier) {
      case 'starter': return 'Starter';
      case 'professional': return 'Professional';
      case 'enterprise': return 'Enterprise';
      case 'premium': return 'Premium';
      default: return 'Custom';
    }
  };

  return (
    <>
      <Helmet>
        <title>Pricing - Ultimate Micro SAAS Services 2025 - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for our comprehensive portfolio of AI-powered micro SAAS services. Find the perfect solution for your business needs and budget." />
        <meta name="keywords" content="pricing, micro SAAS pricing, AI services pricing, business intelligence pricing, customer experience pricing, supply chain pricing, fintech pricing, healthcare pricing, education pricing, marketing pricing, HR pricing, legal tech pricing, real estate pricing, manufacturing pricing, energy pricing, transportation pricing, agriculture pricing, environmental monitoring pricing" />
        <meta property="og:title" content="Pricing - Ultimate Micro SAAS Services 2025 - Zion Tech Group" />
        <meta property="og:description" content="Transparent pricing for our AI-powered micro SAAS services. Find the perfect solution for your business." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/pricing" />
        <link rel="canonical" href="https://ziontechgroup.com/pricing" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transparent
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Choose the perfect AI-powered micro SAAS solution for your business. 
              Our transparent pricing ensures you get maximum value for your investment.
            </p>
            
            {/* Pricing Tiers Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
              <div className="text-center p-4 bg-white/5 rounded-lg border border-white/20">
                <div className="text-2xl font-bold text-green-400 mb-2">Starter</div>
                <div className="text-sm text-gray-300">Under $1,000/month</div>
                <div className="text-xs text-gray-400 mt-1">Perfect for small businesses</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg border border-white/20">
                <div className="text-2xl font-bold text-blue-400 mb-2">Professional</div>
                <div className="text-sm text-gray-300">$1,000 - $3,000/month</div>
                <div className="text-xs text-gray-400 mt-1">Ideal for growing companies</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg border border-white/20">
                <div className="text-2xl font-bold text-purple-400 mb-2">Enterprise</div>
                <div className="text-sm text-gray-300">$3,000 - $5,000/month</div>
                <div className="text-xs text-gray-400 mt-1">Built for large organizations</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg border border-white/20">
                <div className="text-2xl font-bold text-yellow-400 mb-2">Premium</div>
                <div className="text-sm text-gray-300">$5,000+/month</div>
                <div className="text-xs text-gray-400 mt-1">Custom enterprise solutions</div>
              </div>
            </div>

            {/* Filters */}
            <div className="max-w-4xl mx-auto mb-8">
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-slate-800">
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400"
                >
                  <option value="price" className="bg-slate-800">Sort by Price</option>
                  <option value="name" className="bg-slate-800">Sort by Name</option>
                  <option value="category" className="bg-slate-800">Sort by Category</option>
                </select>
              </div>
              
              <div className="text-sm text-gray-400 mt-4">
                <p>Showing {filteredServices.length} services • {selectedCategory === 'all' ? 'All categories' : selectedCategory}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedServices.map((service, index) => {
                const priceTier = getPriceTier(service.price);
                const tierColor = getPriceTierColor(priceTier);
                const tierLabel = getPriceTierLabel(priceTier);
                
                return (
                  <div
                    key={service.id}
                    className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 group"
                  >
                    {/* Service Header */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${tierColor}`}>
                          {tierLabel}
                        </span>
                        <span className="text-xs font-semibold text-blue-400 bg-blue-400/20 px-2 py-1 rounded-full">
                          {service.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Pricing */}
                    <div className="mb-6 p-4 bg-white/5 rounded-lg">
                      <div className="text-center mb-4">
                        <div className="text-3xl font-bold text-white mb-1">
                          {service.currency}{service.price.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-400">
                          per {service.pricingModel}
                        </div>
                      </div>
                      
                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Market Range:</span>
                          <span className="text-white">{service.marketPrice}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Expected ROI:</span>
                          <span className="text-yellow-400">{service.roi}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Innovation Level:</span>
                          <span className="text-green-400">{service.innovationLevel}</span>
                        </div>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-blue-400 mb-3">Key Features</h4>
                      <div className="space-y-2">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-300">
                            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 flex-shrink-0"></span>
                            <span className="line-clamp-2">{feature}</span>
                          </div>
                        ))}
                        {service.features.length > 4 && (
                          <div className="text-xs text-gray-500 text-center">
                            +{service.features.length - 4} more features
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Key Benefits */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-green-400 mb-3">Key Benefits</h4>
                      <div className="space-y-2">
                        {service.benefits.slice(0, 3).map((benefit, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-300">
                            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 flex-shrink-0"></span>
                            <span className="line-clamp-2">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Delivery & Support */}
                    <div className="mb-6 p-4 bg-white/5 rounded-lg">
                      <div className="grid grid-cols-2 gap-4 text-xs">
                        <div>
                          <span className="text-gray-400">Delivery:</span>
                          <div className="text-white font-semibold">{service.estimatedDelivery}</div>
                        </div>
                        <div>
                          <span className="text-gray-400">Support:</span>
                          <div className="text-white font-semibold capitalize">{service.supportLevel}</div>
                        </div>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="space-y-3">
                      <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                        Get Started
                      </button>
                      <div className="flex gap-2">
                        <a
                          href={`tel:${service.contactInfo.phone}`}
                          className="flex-1 bg-white/10 text-white text-center py-2 px-3 rounded-lg hover:bg-white/20 transition-colors text-sm"
                        >
                          Call Now
                        </a>
                        <a
                          href={`mailto:${service.contactInfo.email}`}
                          className="flex-1 bg-white/10 text-white text-center py-2 px-3 rounded-lg hover:bg-white/20 transition-colors text-sm"
                        >
                          Email
                        </a>
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-6 pt-4 border-t border-white/20 text-xs text-gray-400">
                      <div className="space-y-1">
                        <div>📞 {service.contactInfo.phone}</div>
                        <div>✉️ {service.contactInfo.email}</div>
                        <div>🌐 <a href={service.contactInfo.website} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                          {service.contactInfo.website}
                        </a></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="py-20 bg-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Pricing Comparison
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Compare our pricing tiers to find the perfect solution for your business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-white/10 rounded-xl border border-white/20">
                <div className="text-2xl font-bold text-green-400 mb-4">Starter</div>
                <div className="text-4xl font-bold text-white mb-2">$999</div>
                <div className="text-sm text-gray-400 mb-6">per month</div>
                <ul className="text-left space-y-3 text-sm text-gray-300 mb-8">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    Basic features
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    Standard support
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    Up to 5 users
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    Basic integrations
                  </li>
                </ul>
                <button className="w-full bg-green-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-green-700 transition-colors">
                  Choose Starter
                </button>
              </div>

              <div className="text-center p-6 bg-white/10 rounded-xl border border-blue-400/40 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-400 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
                <div className="text-2xl font-bold text-blue-400 mb-4">Professional</div>
                <div className="text-4xl font-bold text-white mb-2">$2,499</div>
                <div className="text-sm text-gray-400 mb-6">per month</div>
                <ul className="text-left space-y-3 text-sm text-gray-300 mb-8">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    All Starter features
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    Advanced features
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    Up to 25 users
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    Priority support
                  </li>
                </ul>
                <button className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Choose Professional
                </button>
              </div>

              <div className="text-center p-6 bg-white/10 rounded-xl border border-white/20">
                <div className="text-2xl font-bold text-purple-400 mb-4">Enterprise</div>
                <div className="text-4xl font-bold text-white mb-2">$3,999</div>
                <div className="text-sm text-gray-400 mb-6">per month</div>
                <ul className="text-left space-y-3 text-sm text-gray-300 mb-8">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                    All Professional features
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                    Enterprise features
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                    Unlimited users
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                    24/7 support
                  </li>
                </ul>
                <button className="w-full bg-purple-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors">
                  Choose Enterprise
                </button>
              </div>

              <div className="text-center p-6 bg-white/10 rounded-xl border border-white/20">
                <div className="text-2xl font-bold text-yellow-400 mb-4">Premium</div>
                <div className="text-4xl font-bold text-white mb-2">Custom</div>
                <div className="text-sm text-gray-400 mb-6">pricing</div>
                <ul className="text-left space-y-3 text-sm text-gray-300 mb-8">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                    All Enterprise features
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                    Custom development
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                    Dedicated support
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                    SLA guarantees
                  </li>
                </ul>
                <button className="w-full bg-yellow-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-yellow-700 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our team is ready to help you choose the perfect solution and get you up and running quickly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                📞 Call: +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                ✉️ Email: kleber@ziontechgroup.com
              </a>
            </div>
            
            <div className="mb-6">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-2 text-blue-400 hover:text-blue-300 border border-blue-400 rounded-lg transition-all duration-300"
              >
                Schedule a Consultation →
              </Link>
            </div>
            
            <div className="text-sm text-gray-400">
              <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>🌐 Website: <a href="https://ziontechgroup.com" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">https://ziontechgroup.com</a></p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Pricing;