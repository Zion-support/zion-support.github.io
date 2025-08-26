import React, { useState } from 'react';
import { ULTIMATE_MICRO_SAAS_SERVICES_2025 } from '../data/ultimateMicroSaasServices2025';
import { INNOVATIVE_ENTERPRISE_SOLUTIONS_2025 } from '../data/innovativeEnterpriseSolutions2025';
import { EMERGING_TECHNOLOGY_SOLUTIONS_2025 } from '../data/emergingTechnologySolutions2025';

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  tags: string[];
  estimatedDelivery: string;
  supportLevel: string;
  marketPrice: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  websiteUrl: string;
  technologyStack: string[];
  complianceStandards: string[];
  integrationCapabilities: string[];
  roiMetrics: string[];
  competitiveAdvantages: string[];
  industryApplications?: string[];
  futurePotential?: string[];
}

const UltimatePricing2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSupportLevel, setSelectedSupportLevel] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('price');

  // Combine all services
  const allServices: Service[] = [
    ...ULTIMATE_MICRO_SAAS_SERVICES_2025,
    ...INNOVATIVE_ENTERPRISE_SOLUTIONS_2025,
    ...EMERGING_TECHNOLOGY_SOLUTIONS_2025
  ];

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const categoryMatch = selectedCategory === 'all' || service.category === selectedCategory;
      const supportMatch = selectedSupportLevel === 'all' || service.supportLevel === selectedSupportLevel;
      return categoryMatch && supportMatch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price;
        case 'name':
          return a.title.localeCompare(b.title);
        case 'category':
          return a.category.localeCompare(b.category);
        case 'support':
          return a.supportLevel.localeCompare(b.supportLevel);
        default:
          return 0;
      }
    });

  const formatPrice = (price: number) => {
    if (price >= 1000) {
      return `$${(price / 1000).toFixed(1)}K`;
    }
    return `$${price}`;
  };

  const getSupportLevelColor = (level: string) => {
    switch (level) {
      case 'enterprise':
        return 'bg-purple-600';
      case 'premium':
        return 'bg-blue-600';
      default:
        return 'bg-green-600';
    }
  };

  const getSupportLevelIcon = (level: string) => {
    switch (level) {
      case 'enterprise':
        return '🏢';
      case 'premium':
        return '⭐';
      default:
        return '✅';
    }
  };

  const calculateSavings = (service: Service) => {
    const marketPriceRange = service.marketPrice;
    const ourPrice = service.price;
    
    // Extract the lower bound of market price
    const marketPriceMatch = marketPriceRange.match(/\$([\d,]+)/);
    if (marketPriceMatch) {
      const marketPrice = parseInt(marketPriceMatch[1].replace(/,/g, ''));
      const savings = marketPrice - ourPrice;
      const savingsPercent = ((savings / marketPrice) * 100).toFixed(0);
      return { savings, savingsPercent };
    }
    return { savings: 0, savingsPercent: 0 };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Ultimate Pricing 2025
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Transparent pricing for our comprehensive portfolio of innovative technology solutions. 
            Compare features, benefits, and ROI across all our services to find the perfect solution for your business.
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-6 mb-8 border border-blue-500/30">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Get Custom Pricing & Consultation</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="text-lg font-semibold text-blue-300 mb-2">Phone</h3>
                <p className="text-lg">+1 302 464 0950</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-300 mb-2">Email</h3>
                <p className="text-lg">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-300 mb-2">Address</h3>
                <p className="text-lg">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-gray-800/50 rounded-xl p-6 mb-8 border border-gray-600/30">
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Support Level</label>
              <select
                value={selectedSupportLevel}
                onChange={(e) => setSelectedSupportLevel(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Support Levels</option>
                <option value="premium">Premium</option>
                <option value="enterprise">Enterprise</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="price">Price (Low to High)</option>
                <option value="name">Name (A-Z)</option>
                <option value="category">Category</option>
                <option value="support">Support Level</option>
              </select>
            </div>
            <div className="flex items-end">
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedSupportLevel('all');
                  setSortBy('price');
                }}
                className="w-full bg-gray-600 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
              >
                Reset Filters
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Table */}
        <div className="bg-gray-800/30 rounded-2xl p-6 mb-8 border border-gray-600/30">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-600">
                  <th className="text-left py-4 px-4 text-cyan-400 font-bold">Service</th>
                  <th className="text-left py-4 px-4 text-cyan-400 font-bold">Category</th>
                  <th className="text-left py-4 px-4 text-cyan-400 font-bold">Our Price</th>
                  <th className="text-left py-4 px-4 text-cyan-400 font-bold">Market Price</th>
                  <th className="text-left py-4 px-4 text-cyan-400 font-bold">Savings</th>
                  <th className="text-left py-4 px-4 text-cyan-400 font-bold">Support</th>
                  <th className="text-left py-4 px-4 text-cyan-400 font-bold">Delivery</th>
                  <th className="text-left py-4 px-4 text-cyan-400 font-bold">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredServices.map((service, index) => {
                  const savings = calculateSavings(service);
                  return (
                    <tr key={service.id} className={`border-b border-gray-700/50 ${index % 2 === 0 ? 'bg-gray-800/20' : ''} hover:bg-gray-700/30 transition-colors duration-200`}>
                      <td className="py-4 px-4">
                        <div>
                          <h3 className="font-bold text-white text-sm mb-1">{service.title}</h3>
                          <p className="text-gray-400 text-xs line-clamp-2">{service.description}</p>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className="px-2 py-1 bg-blue-900/50 text-blue-300 text-xs rounded-full border border-blue-700/50">
                          {service.category}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-cyan-400">
                            {formatPrice(service.price)}
                          </div>
                          <div className="text-xs text-gray-400">/{service.pricingModel}</div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="text-center">
                          <div className="text-sm text-gray-300">{service.marketPrice}</div>
                          <div className="text-xs text-gray-400">market rate</div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="text-center">
                          {savings.savings > 0 ? (
                            <>
                              <div className="text-lg font-bold text-green-400">
                                ${savings.savings.toLocaleString()}
                              </div>
                              <div className="text-xs text-green-300">
                                {savings.savingsPercent}% off
                              </div>
                            </>
                          ) : (
                            <div className="text-xs text-gray-400">Competitive</div>
                          )}
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center justify-center">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getSupportLevelColor(service.supportLevel)}`}>
                            {getSupportLevelIcon(service.supportLevel)} {service.supportLevel}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="text-center">
                          <div className="text-sm text-gray-300">{service.estimatedDelivery}</div>
                          <div className="text-xs text-gray-400">estimated</div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex flex-col space-y-2">
                          <a
                            href={`mailto:${service.contactInfo.email}?subject=Pricing Inquiry for ${service.title}`}
                            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white text-xs font-semibold py-2 px-3 rounded-lg transition-all duration-300 text-center"
                          >
                            Get Quote
                          </a>
                          <a
                            href={`tel:${service.contactInfo.phone}`}
                            className="bg-gray-700 hover:bg-gray-600 text-white text-xs font-semibold py-2 px-3 rounded-lg transition-all duration-300 text-center"
                          >
                            Call Now
                          </a>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pricing Tiers Summary */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Premium Tier */}
          <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/50 rounded-2xl p-6 border border-blue-500/30">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-blue-300 mb-2">Premium Tier</h3>
              <div className="text-4xl font-bold text-white mb-2">
                $3.8K - $6.8K
                <span className="text-lg text-gray-400">/month</span>
              </div>
              <p className="text-gray-300">Advanced solutions for growing businesses</p>
            </div>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Premium support and consultation
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Advanced features and capabilities
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Integration support
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Training and onboarding
              </li>
            </ul>
          </div>

          {/* Enterprise Tier */}
          <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/50 rounded-2xl p-6 border border-purple-500/30 transform scale-105">
            <div className="text-center mb-6">
              <div className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold text-purple-300 mb-2">Enterprise Tier</h3>
              <div className="text-4xl font-bold text-white mb-2">
                $9.5K - $22K
                <span className="text-lg text-gray-400">/month</span>
              </div>
              <p className="text-gray-300">Comprehensive solutions for large organizations</p>
            </div>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Enterprise-grade support
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Full feature access
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Custom integrations
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Dedicated account manager
              </li>
            </ul>
          </div>

          {/* Advanced Tier */}
          <div className="bg-gradient-to-br from-cyan-900/50 to-cyan-800/50 rounded-2xl p-6 border border-cyan-500/30">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-cyan-300 mb-2">Advanced Tier</h3>
              <div className="text-4xl font-bold text-white mb-2">
                $25K - $45K
                <span className="text-lg text-gray-400">/month</span>
              </div>
              <p className="text-gray-300">Cutting-edge technology for innovators</p>
            </div>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Priority support and consultation
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Latest technology access
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Research and development
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Strategic partnership
              </li>
            </ul>
          </div>
        </div>

        {/* ROI Calculator */}
        <div className="bg-gradient-to-r from-green-900/50 to-blue-900/50 rounded-2xl p-8 border border-green-500/30 mb-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-4 text-green-400">ROI Calculator</h2>
            <p className="text-xl text-gray-300">
              Calculate your potential return on investment with our services
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">85%</div>
              <div className="text-gray-300">Average Time Savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">60%</div>
              <div className="text-gray-300">Average Cost Reduction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">200%</div>
              <div className="text-gray-300">Average Performance Improvement</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">6-12</div>
              <div className="text-gray-300">Months to Break Even</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 rounded-2xl p-8 border border-cyan-500/30">
            <h2 className="text-3xl font-bold mb-4 text-cyan-400">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
              Our team of experts is ready to help you choose the right solution and provide custom pricing 
              based on your specific needs and requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Custom Pricing Consultation"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Custom Quote
              </a>
              <a
                href="tel:+13024640950"
                className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimatePricing2025;