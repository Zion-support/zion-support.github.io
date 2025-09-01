import React, { useState } from 'react';
import { Check, X, Star, TrendingUp, Shield, Brain, Cloud, Zap, Heart, Building, ShoppingCart, Globe, Lock, Cpu, Rocket, Leaf, DollarSign, Users, Target, FileText, MessageCircle, Settings, BarChart3, GraduationCap, LifeBuoy } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceTier {
  name: string;
  description: string;
  price: string;
  features: string[];
  notIncluded: string[];
  icon: React.ComponentType<any>;
  color: string;
  popular?: boolean;
  category: string;
}

const serviceTiers: ServiceTier[] = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses and startups',
    price: '$2,500',
    features: [
      'Basic AI consultation',
      'Service implementation',
      'Email support',
      'Basic documentation',
      '30-day warranty'
    ],
    notIncluded: [
      'Advanced customization',
      'Priority support',
      'Training sessions',
      'Custom integrations'
    ],
    icon: Rocket,
    color: 'from-blue-500 to-cyan-500',
    category: 'AI Services'
  },
  {
    name: 'Professional',
    description: 'Ideal for growing businesses',
    price: '$7,500',
    features: [
      'Advanced AI implementation',
      'Custom solution design',
      'Priority email support',
      'Comprehensive documentation',
      '90-day warranty',
      'Basic training',
      'Integration support'
    ],
    notIncluded: [
      'Enterprise features',
      '24/7 support',
      'Custom development',
      'Advanced analytics'
    ],
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
    popular: true,
    category: 'AI Services'
  },
  {
    name: 'Enterprise',
    description: 'For large organizations with complex needs',
    price: '$25,000+',
    features: [
      'Full AI transformation',
      'Custom development',
      '24/7 priority support',
      'Comprehensive training',
      'Custom integrations',
      'Advanced analytics',
      'Dedicated account manager',
      'SLA guarantees'
    ],
    notIncluded: [
      'None - full service included'
    ],
    icon: Building,
    color: 'from-green-500 to-emerald-500',
    category: 'AI Services'
  }
];

const serviceCategories = [
  {
    name: 'AI & Machine Learning',
    icon: Brain,
    color: 'from-purple-600 to-pink-600',
    services: [
      'AI Business Intelligence',
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics'
    ]
  },
  {
    name: 'Cloud & Infrastructure',
    icon: Cloud,
    color: 'from-blue-500 to-cyan-500',
    services: [
      'Cloud Migration',
      'DevOps Automation',
      'Infrastructure as Code',
      'Container Orchestration',
      'Serverless Architecture'
    ]
  },
  {
    name: 'Cybersecurity',
    icon: Shield,
    color: 'from-red-500 to-orange-500',
    services: [
      'Threat Detection',
      'Zero Trust Architecture',
      'Compliance Management',
      'Security Audits',
      'Incident Response'
    ]
  },
  {
    name: 'Emerging Technologies',
    icon: Zap,
    color: 'from-green-500 to-emerald-500',
    services: [
      'Quantum Computing',
      'Blockchain Solutions',
      'IoT Platforms',
      'Edge Computing',
      'Space Technology'
    ]
  }
];

const comparisonFeatures = [
  {
    category: 'Core Features',
    features: [
      'AI Implementation',
      'Custom Development',
      'Support Level',
      'Training Included',
      'Warranty Period',
      'Integration Support'
    ]
  },
  {
    category: 'Advanced Features',
    features: [
      'Custom Analytics',
      'API Access',
      'White-label Options',
      'Multi-tenant Support',
      'Advanced Security',
      'Performance Monitoring'
    ]
  },
  {
    category: 'Business Support',
    features: [
      'Account Management',
      'SLA Guarantees',
      'Priority Support',
      'Custom Contracts',
      'ROI Analysis',
      'Success Metrics'
    ]
  }
];

export default function ServicesComparisonPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const filteredServices = selectedCategory === 'all' 
    ? serviceTiers 
    : serviceTiers.filter(service => service.category === selectedCategory);

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''));
      case 'name':
        return a.name.localeCompare(b.name);
      case 'popularity':
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Service Comparison
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Compare our service tiers and find the perfect solution for your business needs. 
              From starter packages to enterprise solutions, we have you covered.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === 'all'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Services
              </button>
              {serviceCategories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category.name
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          {/* Table Header */}
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Service Tiers Comparison</h2>
              <div className="flex items-center space-x-4">
                <label className="text-sm font-medium text-gray-700">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="name">Name</option>
                  <option value="price">Price</option>
                  <option value="popularity">Popularity</option>
                </select>
              </div>
            </div>
          </div>

          {/* Comparison Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {sortedServices.map((tier, index) => (
              <div
                key={tier.name}
                className={`relative p-6 border-r border-gray-200 last:border-r-0 ${
                  tier.popular ? 'bg-gradient-to-b from-blue-50 to-white ring-2 ring-blue-500' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Tier Header */}
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${tier.color} flex items-center justify-center`}>
                    <tier.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-600 mb-4">{tier.description}</p>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{tier.price}</div>
                  <p className="text-sm text-gray-500">Starting price</p>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">What's Included:</h4>
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <h4 className="font-semibold text-gray-900 mt-6">Not Included:</h4>
                  <ul className="space-y-3">
                    {tier.notIncluded.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-500">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="mt-8">
                  <Link
                    to="/request-quote"
                    className={`block w-full text-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                      tier.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Categories Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Categories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive range of technology services across different domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCategories.map((category) => (
            <div
              key={category.name}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{category.name}</h3>
              <ul className="space-y-2">
                {category.services.map((service, index) => (
                  <li key={index} className="text-sm text-gray-600 flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Feature Comparison */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">Detailed Feature Comparison</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Feature</th>
                  {sortedServices.map((tier) => (
                    <th key={tier.name} className="px-6 py-4 text-center text-sm font-medium text-gray-900">
                      {tier.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {comparisonFeatures.map((category) => (
                  <React.Fragment key={category.category}>
                    <tr className="bg-gray-50">
                      <td colSpan={sortedServices.length + 1} className="px-6 py-3">
                        <h3 className="font-semibold text-gray-900">{category.category}</h3>
                      </td>
                    </tr>
                    {category.features.map((feature) => (
                      <tr key={feature} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm text-gray-700 font-medium">{feature}</td>
                        {sortedServices.map((tier) => (
                          <td key={tier.name} className="px-6 py-4 text-center">
                            {tier.features.includes(feature) ? (
                              <Check className="w-5 h-5 text-green-500 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-red-500 mx-auto" />
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact our team to discuss your specific needs and get a customized quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-quote"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              Request Quote
            </Link>
            <Link
              to="/schedule-demo"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Get answers to common questions about our services</p>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              What's the difference between the service tiers?
            </h3>
            <p className="text-gray-600">
              Our service tiers differ in scope, customization level, support quality, and included features. 
              The Starter tier provides essential services, Professional adds customization and priority support, 
              while Enterprise offers full transformation with dedicated resources.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Can I upgrade or downgrade my service tier?
            </h3>
            <p className="text-gray-600">
              Yes, you can upgrade or downgrade your service tier at any time. We'll work with you to 
              ensure a smooth transition and adjust your contract accordingly.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Do you offer custom pricing for enterprise clients?
            </h3>
            <p className="text-gray-600">
              Absolutely! Enterprise clients often have unique requirements, and we provide custom pricing 
              based on your specific needs, scale, and project scope.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              What kind of support is included?
            </h3>
            <p className="text-gray-600">
              Support varies by tier: Starter includes email support, Professional adds priority email support, 
              and Enterprise provides 24/7 priority support with dedicated account management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}