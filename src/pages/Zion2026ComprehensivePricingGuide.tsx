import React, { useState } from 'react';
import { zion2026InnovativeMicroSAASServices } from '../../data/zion-2026-innovative-micro-saas-services';
const Zion2026ComprehensivePricingGuide: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>('monthly');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const categories = [
    'all',
    'AI & Automation',
    'Cybersecurity & Quantum',
    'Healthcare & AI',
    'Blockchain & Supply Chain',
    'Fintech & AI',
    'IoT & Edge Computing',
    'AI & Content Creation',
    'Quantum & Machine Learning',
    'AI & Customer Service',
    'Space Technology'
  ];
  const filteredServices = zion2026InnovativeMicroSAASServices.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  );
  const getAnnualPrice = (monthlyPrice: string) => {
    const price = parseFloat(monthlyPrice.replace('$', '').replace(',', ''));
    return (price * 12 * 0.8).toFixed(0); // 20% discount for annual
  };
  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'AI & Automation': 'from-purple-600 to-indigo-700',
      'Cybersecurity & Quantum': 'from-green-600 to-emerald-700',
      'Healthcare & AI': 'from-blue-600 to-cyan-700',
      'Blockchain & Supply Chain': 'from-orange-600 to-red-700',
      'Fintech & AI': 'from-yellow-600 to-orange-700',
      'IoT & Edge Computing': 'from-indigo-600 to-purple-700',
      'AI & Content Creation': 'from-pink-600 to-rose-700',
      'Quantum & Machine Learning': 'from-cyan-600 to-blue-700',
      'AI & Customer Service': 'from-teal-600 to-green-700',
      'Space Technology': 'from-gray-600 to-slate-700'
    };
    return colors[category] || 'from-gray-600 to-slate-700';
  };
  const totalMonthlyRevenue = filteredServices.reduce((sum, service) => {
    const price = parseFloat(service.price.replace('$', '').replace(',', ''));
    return sum + (price * service.customers);
  }, 0);
  const totalAnnualRevenue = totalMonthlyRevenue * 12;
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Zion Tech Group
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-zion-cyan mb-8">
              2026 Comprehensive Pricing Guide
            </h2>
            <p className="text-xl md:text-2xl text-zion-cyan-light max-w-4xl mx-auto mb-12">
              Complete pricing information for all our innovative micro SAAS services with ROI analysis and competitive positioning
            </p>
            
            {/* Pricing Toggle */}
            <div className="flex justify-center mb-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-2">
                <div className="flex">
                  <button
                    onClick={() => setSelectedPlan('monthly')}
                    className={`px-6 py-3 rounded-xl font-bold transition-all duration-200 ${
                      selectedPlan === 'monthly'
                        ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white'
                        : 'text-zion-cyan-light hover:text-white'
                    }`}
                  >
                    Monthly Billing
                  </button>
                  <button
                    onClick={() => setSelectedPlan('annual')}
                    className={`px-6 py-3 rounded-xl font-bold transition-all duration-200 ${
                      selectedPlan === 'annual'
                        ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white'
                        : 'text-zion-cyan-light hover:text-white'
                    }`}
                  >
                    Annual Billing (20% Off)
                  </button>
                </div>
              </div>
            </div>
            {/* Revenue Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                <div className="text-3xl font-bold text-zion-cyan mb-2">
                  ${(totalMonthlyRevenue / 1000000).toFixed(1)}M
                </div>
                <div className="text-zion-cyan-light">Monthly Revenue</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                <div className="text-3xl font-bold text-zion-cyan mb-2">
                  ${(totalAnnualRevenue / 1000000).toFixed(1)}M
                </div>
                <div className="text-zion-cyan-light">Annual Revenue</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                <div className="text-3xl font-bold text-zion-cyan mb-2">
                  {filteredServices.length}
                </div>
                <div className="text-zion-cyan-light">Active Services</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Information Banner */}
      <div className="bg-gradient-to-r from-zion-cyan to-zion-purple py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-2xl font-bold mb-2">Contact Us</div>
              <div className="text-lg">Mobile: +1 302 464 0950</div>
              <div className="text-lg">Email: kleber@ziontechgroup.com</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">Address</div>
              <div className="text-lg">364 E Main St STE 1008</div>
              <div className="text-lg">Middletown DE 19709</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">Website</div>
              <div className="text-lg">
                <a href="https://ziontechgroup.com" className="underline hover:text-zion-cyan-light">
                  ziontechgroup.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-zion-cyan mb-2">Filter by Category</h3>
            <p className="text-zion-cyan-light">Select a category to view specific service pricing</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl font-bold transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white'
                    : 'bg-white/10 text-zion-cyan-light hover:bg-white/20 hover:text-white'
                }`}
              >
                {category === 'all' ? 'All Categories' : category}
              </button>
            ))}
          </div>
        </div>
        {/* Pricing Table */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-zion-cyan/30">
                <th className="text-left py-4 px-4 text-zion-cyan font-bold">Service</th>
                <th className="text-center py-4 px-4 text-zion-cyan font-bold">Category</th>
                <th className="text-center py-4 px-4 text-zion-cyan font-bold">
                  {selectedPlan === 'monthly' ? 'Monthly Price' : 'Annual Price (20% Off)'}
                </th>
                <th className="text-center py-4 px-4 text-zion-cyan font-bold">Trial Days</th>
                <th className="text-center py-4 px-4 text-zion-cyan font-bold">Setup Time</th>
                <th className="text-center py-4 px-4 text-zion-cyan font-bold">Rating</th>
                <th className="text-center py-4 px-4 text-zion-cyan font-bold">Customers</th>
                <th className="text-center py-4 px-4 text-zion-cyan font-bold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredServices.map((service, index) => (
                <tr key={service.id} className={`border-b border-zion-cyan/20 ${index % 2 === 0 ? 'bg-white/5' : ''}`}>
                  <td className="py-4 px-4">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{service.icon}</span>
                      <div>
                        <div className="font-bold text-white">{service.name}</div>
                        <div className="text-sm text-zion-cyan-light">{service.tagline}</div>
                        {service.popular && (
                          <span className="inline-block bg-gradient-to-r from-zion-cyan to-zion-purple text-white text-xs font-bold px-2 py-1 rounded-full mt-1">
                            ⭐ POPULAR
                          </span>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>
                      {service.category}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="text-2xl font-bold text-zion-cyan">
                      {selectedPlan === 'monthly' 
                        ? service.price 
                        : `$${getAnnualPrice(service.price)}`
                      }
                    </div>
                    <div className="text-sm text-zion-cyan-light">
                      {selectedPlan === 'monthly' ? '/month' : '/year'}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center text-white">{service.trialDays} days</td>
                  <td className="py-4 px-4 text-center text-white">{service.setupTime}</td>
                  <td className="py-4 px-4 text-center">
                    <div className="flex items-center justify-center">
                      <span className="text-zion-cyan font-bold">{service.rating}</span>
                      <span className="text-yellow-400 ml-1">★</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center text-white">{service.customers.toLocaleString()}</td>
                  <td className="py-4 px-4 text-center">
                    <div className="space-y-2">
                      <a
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white text-xs font-bold py-2 px-3 rounded-lg hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-200"
                      >
                        Learn More
                      </a>
                      <a
                        href={`mailto:kleber@ziontechgroup.com?subject=Quote for ${service.name}`}
                        className="block w-full border border-zion-cyan text-zion-cyan text-xs font-bold py-2 px-3 rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-200"
                      >
                        Get Quote
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* ROI Analysis */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8">
          <h3 className="text-2xl font-bold text-zion-cyan mb-6 text-center">ROI Analysis & Market Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map(service => (
              <div key={service.id} className="bg-white/5 rounded-xl p-4">
                <h4 className="font-bold text-white mb-3">{service.name}</h4>
                <div className="space-y-2 text-sm">
                  <div className="text-zion-cyan-light">
                    <strong>Market Size:</strong> {service.marketSize}
                  </div>
                  <div className="text-zion-cyan-light">
                    <strong>Growth Rate:</strong> {service.growthRate}
                  </div>
                  <div className="text-zion-cyan-light">
                    <strong>Expected ROI:</strong> {service.roi}
                  </div>
                  <div className="text-zion-cyan-light">
                    <strong>Competitors:</strong> {service.competitors.slice(0, 3).join(', ')}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Pricing Comparison */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8">
          <h3 className="text-2xl font-bold text-zion-cyan mb-6 text-center">Pricing Comparison by Category</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.filter(cat => cat !== 'all').map(category => {
              const categoryServices = filteredServices.filter(service => service.category === category);
              if (categoryServices.length === 0) return null;
              
              const avgPrice = categoryServices.reduce((sum, service) => {
                const price = parseFloat(service.price.replace('$', '').replace(',', ''));
                return sum + price;
              }, 0) / categoryServices.length;
              const avgRating = categoryServices.reduce((sum, service) => sum + service.rating, 0) / categoryServices.length;
              return (
                <div key={category} className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-bold text-white mb-3">{category}</h4>
                  <div className="space-y-2 text-sm">
                    <div className="text-zion-cyan-light">
                      <strong>Services:</strong> {categoryServices.length}
                    </div>
                    <div className="text-zion-cyan-light">
                      <strong>Avg Price:</strong> ${avgPrice.toFixed(0)}/month
                    </div>
                    <div className="text-zion-cyan-light">
                      <strong>Avg Rating:</strong> {avgRating.toFixed(1)} ★
                    </div>
                    <div className="text-zion-cyan-light">
                      <strong>Total Customers:</strong> {categoryServices.reduce((sum, service) => sum + service.customers, 0).toLocaleString()}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Call to Action */}
      <div className="bg-gradient-to-r from-zion-cyan to-zion-purple py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-zion-cyan-light mb-8">
            Contact us today for personalized pricing and implementation support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=Pricing Inquiry"
              className="inline-flex items-center px-8 py-4 bg-white text-zion-cyan font-bold rounded-lg hover:bg-zion-cyan-light transition-colors duration-200"
            >
              📧 Request Custom Quote
            </a>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-zion-cyan transition-colors duration-200"
            >
              📞 Call +1 302 464 0950
            </a>
          </div>
          <div className="mt-8 text-zion-cyan-light">
            <p className="text-lg">All prices include:</p>
            <p className="text-sm">✓ Free trial period ✓ Setup assistance ✓ 24/7 support ✓ Regular updates</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Zion2026ComprehensivePricingGuide;