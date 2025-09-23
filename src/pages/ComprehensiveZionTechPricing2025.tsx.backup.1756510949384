import React, { useState } from 'react';
import { ENHANCED_ZION_TECH_SERVICES_2025, getEnhancedServiceCategories } from '../data/enhancedZionTechServices2025';

const ComprehensiveZionTechPricing2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const categories = ['All', ...getEnhancedServiceCategories()];
  
  const filteredServices = ENHANCED_ZION_TECH_SERVICES_2025.filter(service => 
    selectedCategory === 'All' || service.category === selectedCategory
  );

  const getPrice = (service: any) => {
    if (billingCycle === 'yearly' && service.pricing?.yearly) {
      return service.pricing.yearly;
    }
    return service.price;
  };

  const getSavings = (service: any) => {
    if (billingCycle === 'yearly' && service.pricing?.yearly) {
      return (service.price * 12 - service.pricing.yearly).toLocaleString();
    }
    return 0;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Zion Tech Group
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Comprehensive Pricing 2025
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transparent pricing for cutting-edge micro SAAS, IT services, and AI solutions. 
              Choose the plan that fits your business needs and budget.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${
                  billingCycle === 'yearly' ? 'bg-blue-600' : 'bg-gray-600'
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'yearly' ? 'translate-x-9' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly
                {billingCycle === 'yearly' && (
                  <span className="ml-2 text-sm text-green-400">Save up to 20%</span>
                )}
              </span>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">+1 302 464 0950</div>
                <div className="text-gray-400">24/7 Support</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-semibold text-purple-400">kleber@ziontechgroup.com</div>
                <div className="text-gray-400">Sales Inquiries</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-green-400">364 E Main St STE 1008</div>
                <div className="text-gray-400">Middletown DE 19709</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Pricing Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              {/* Service Header */}
              <div className="text-center mb-6">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full mb-3 inline-block">
                  {service.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm">{service.description}</p>
              </div>

              {/* Pricing */}
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-white mb-1">
                  ${getPrice(service).toLocaleString()}
                </div>
                <div className="text-gray-400 mb-2">
                  per {billingCycle === 'monthly' ? 'month' : 'year'}
                </div>
                {billingCycle === 'yearly' && getSavings(service) > 0 && (
                  <div className="text-green-400 text-sm font-semibold">
                    Save ${getSavings(service)} annually
                  </div>
                )}
              </div>

              {/* AI Score */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">AI Intelligence Score</span>
                  <span className="text-lg font-bold text-green-400">{service.aiScore}/100</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${service.aiScore}%` }}
                  ></div>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="text-sm text-gray-300 flex items-start">
                      <span className="text-green-400 mr-2 mt-0.5">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Key Benefits:</h4>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="text-sm text-gray-300 flex items-start">
                      <span className="text-blue-400 mr-2 mt-0.5">→</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing Details */}
              {service.pricing && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Plan Includes:</h4>
                  <ul className="space-y-2">
                    {service.pricing.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-300 flex items-start">
                        <span className="text-purple-400 mr-2 mt-0.5">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tags */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Rating */}
              <div className="mb-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-yellow-400">★</span>
                  <span className="text-white font-semibold">{service.rating}</span>
                  <span className="text-gray-400">({service.reviewCount} reviews)</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-semibold"
                >
                  Get Started
                </a>
                <a
                  href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                  className="block w-full text-center px-4 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enterprise Solutions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-6">
            Enterprise Solutions & Custom Pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Need a custom solution or enterprise deployment? We offer tailored pricing and dedicated support for large organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">🏢</div>
            <h3 className="text-xl font-bold text-white mb-2">Enterprise Plans</h3>
            <p className="text-gray-400">Custom pricing for large organizations with dedicated support and SLAs</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="text-xl font-bold text-white mb-2">Custom Development</h3>
            <p className="text-gray-400">Tailored solutions built specifically for your business requirements</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-white mb-2">Volume Discounts</h3>
            <p className="text-gray-400">Special pricing for multiple service subscriptions and long-term contracts</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our sales team to discuss your needs, get a custom quote, or schedule a demo of any service.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-2">Call Us</div>
              <div className="text-white text-lg">+1 302 464 0950</div>
              <div className="text-gray-400 text-sm">Available 24/7</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400 mb-2">Email Us</div>
              <div className="text-white text-lg">kleber@ziontechgroup.com</div>
              <div className="text-gray-400 text-sm">Quick response guaranteed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-2">Visit Us</div>
              <div className="text-white text-lg">364 E Main St STE 1008</div>
              <div className="text-gray-400 text-sm">Middletown DE 19709</div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Request Custom Quote</h3>
            <p className="text-gray-300 mb-6">
              Tell us about your requirements and we'll provide a personalized quote within 24 hours.
            </p>
            <a
              href="mailto:kleber@ziontechgroup.com?subject=Custom Quote Request"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-semibold text-lg"
            >
              Request Quote
            </a>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-6">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-3">What payment methods do you accept?</h3>
            <p className="text-gray-300">We accept all major credit cards, bank transfers, and can arrange custom payment terms for enterprise clients.</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-3">Can I cancel my subscription at any time?</h3>
            <p className="text-gray-300">Yes, all subscriptions can be cancelled at any time with no penalties. We offer month-to-month and annual billing options.</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-3">Do you offer free trials?</h3>
            <p className="text-gray-300">Yes, most services offer a 14-day free trial. Contact us to arrange a trial period for any service.</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-3">What kind of support do you provide?</h3>
            <p className="text-gray-300">We provide 24/7 technical support, dedicated account managers for enterprise clients, and comprehensive documentation and training resources.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveZionTechPricing2025;