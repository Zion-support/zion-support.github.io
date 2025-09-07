import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { zion2026UltimateServices } from '../../data/zion-2026-ultimate-services';
import { zion2026EmergingTechServices } from '../../data/zion-2026-emerging-tech-services';

interface Service {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  icon: string;
  color: string;
  textColor: string;
  link: string;
  marketPosition: string;
  targetAudience: string;
  trialDays: number;
  setupTime: string;
  category: string;
  realService: boolean;
  technology: string[];
  integrations: string[];
  useCases: string[];
  roi: string;
  competitors: string[];
  marketSize: string;
  growthRate: string;
  variant: string;
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
    website: string;
  };
  realImplementation: boolean;
  implementationDetails: string;
  launchDate: string;
  customers: number;
  rating: number;
  reviews: number;
}

const Zion2026Pricing: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

  const allServices = [...zion2026UltimateServices, ...zion2026EmergingTechServices];
  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];

  const filteredServices = allServices.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  );

  const getDiscountedPrice = (price: string) => {
    if (!price || typeof price !== 'string') return 0;
    const monthlyPrice = parseFloat(price.replace('$', '').replace(',', '')) || 0;
    if (billingPeriod === 'annual') {
      return (monthlyPrice * 12 * 0.8).toFixed(0); // 20% discount for annual
    }
    return monthlyPrice;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Zion Tech Group 2026
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
              Comprehensive Pricing
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Transparent pricing for our cutting-edge micro SAAS services, IT solutions, and AI innovations.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-8">
              <span className={`mr-4 text-lg ${billingPeriod === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'annual' : 'monthly')}
                className={`relative w-16 h-8 bg-white/20 rounded-full p-1 transition-colors duration-300 ${
                  billingPeriod === 'annual' ? 'bg-blue-500' : ''
                }`}
              >
                <motion.div
                  className="w-6 h-6 bg-white rounded-full shadow-md"
                  animate={{ x: billingPeriod === 'annual' ? 32 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </button>
              <span className={`ml-4 text-lg ${billingPeriod === 'annual' ? 'text-white' : 'text-gray-400'}`}>
                Annual
                <span className="ml-2 text-sm text-green-400">(20% off)</span>
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                    : 'bg-white/20 text-gray-300 hover:bg-white/30'
                }`}
              >
                {category === 'all' ? 'All Categories' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20 ${
                service.popular ? 'ring-2 ring-yellow-400' : ''
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Service Header */}
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-white">{service.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>
              </div>

              {/* Pricing */}
              <div className="text-center mb-6">
                <div className="mb-2">
                  <span className="text-4xl font-bold text-blue-400">
                    ${getDiscountedPrice(service.price)}
                  </span>
                  <span className="text-gray-300 text-lg">
                    {billingPeriod === 'annual' ? '/year' : service.period}
                  </span>
                </div>
                {billingPeriod === 'annual' && (
                  <p className="text-sm text-green-400">
                    Save ${((parseFloat(service.price.replace('$', '').replace(',', '')) || 0) * 12 * 0.2).toFixed(0)} annually
                  </p>
                )}
                <p className="text-xs text-gray-400 mt-2">
                  {service.trialDays} days free trial • {service.setupTime} setup
                </p>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-6 text-center">{service.description}</p>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="font-semibold text-blue-300 mb-3 text-center">Key Features</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-300">
                      <span className="text-green-400 mr-2 mt-1">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technology Stack */}
              <div className="mb-6">
                <h4 className="font-semibold text-blue-300 mb-3 text-center">Technology Stack</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {service.technology.slice(0, 5).map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-500/20 rounded-full text-xs text-blue-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Market Info */}
              <div className="mb-6 p-4 bg-white/5 rounded-lg">
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-gray-400">Market Size:</span>
                    <div className="text-white font-semibold">{service.marketSize}</div>
                  </div>
                  <div>
                    <span className="text-gray-400">Growth Rate:</span>
                    <div className="text-green-400 font-semibold">{service.growthRate}</div>
                  </div>
                  <div>
                    <span className="text-gray-400">Customers:</span>
                    <div className="text-blue-400 font-semibold">{service.customers}</div>
                  </div>
                  <div>
                    <span className="text-gray-400">Rating:</span>
                    <div className="text-yellow-400 font-semibold">{service.rating}/5</div>
                  </div>
                </div>
              </div>

              {/* ROI Impact */}
              <div className="mb-6 p-4 bg-green-500/20 rounded-lg">
                <h4 className="font-semibold text-green-400 mb-2 text-center">ROI Impact</h4>
                <p className="text-xs text-gray-300 text-center">{service.roi}</p>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                >
                  Get Started
                </a>
                <button className="w-full bg-white/20 border border-white/30 text-white py-3 px-6 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300">
                  Contact Sales
                </button>
              </div>

              {/* Additional Info */}
              <div className="mt-6 text-center text-xs text-gray-400">
                <p>Launch Date: {new Date(service.launchDate).toLocaleDateString()}</p>
                <p>Category: {service.category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-300 mb-2">No services found</h3>
            <p className="text-gray-400">Try selecting a different category.</p>
          </div>
        )}
      </div>

      {/* Enterprise Solutions */}
      <div className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-12 text-center">
          <h3 className="text-4xl font-bold mb-6 text-white">
            Need Enterprise Solutions?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We offer custom enterprise packages with dedicated support, custom integrations, and volume discounts.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
              <div className="text-3xl mb-3">🏢</div>
              <h4 className="text-xl font-bold mb-2 text-white">Custom Solutions</h4>
              <p className="text-gray-300 text-sm">Tailored to your specific business needs</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
              <div className="text-3xl mb-3">👥</div>
              <h4 className="text-xl font-bold mb-2 text-white">Dedicated Support</h4>
              <p className="text-gray-300 text-sm">24/7 priority support and account management</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
              <div className="text-3xl mb-3">💰</div>
              <h4 className="text-xl font-bold mb-2 text-white">Volume Discounts</h4>
              <p className="text-gray-300 text-sm">Significant savings for large deployments</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=Enterprise%20Solutions%20Inquiry"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Contact Enterprise Sales
            </a>
            <a
              href="tel:+13024640950"
              className="bg-white/20 backdrop-blur-lg text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="container mx-auto px-4 py-20">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 text-center">
          <h3 className="text-4xl font-bold mb-8 text-white">
            Get in Touch
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
            <div>
              <div className="text-4xl mb-4">📱</div>
              <h4 className="text-xl font-bold mb-2 text-blue-400">Phone</h4>
              <p className="text-white text-lg">+1 302 464 0950</p>
              <p className="text-gray-300 text-sm">Available Mon-Fri 9AM-6PM EST</p>
            </div>
            <div>
              <div className="text-4xl mb-4">✉️</div>
              <h4 className="text-xl font-bold mb-2 text-blue-400">Email</h4>
              <p className="text-white text-lg">kleber@ziontechgroup.com</p>
              <p className="text-gray-300 text-sm">Response within 24 hours</p>
            </div>
            <div>
              <div className="text-4xl mb-4">📍</div>
              <h4 className="text-xl font-bold mb-2 text-blue-400">Address</h4>
              <p className="text-white text-lg">364 E Main St STE 1008</p>
              <p className="text-white text-lg">Middletown DE 19709</p>
            </div>
          </div>
          <div className="text-center">
            <a 
              href="https://ziontechgroup.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Visit ZionTechGroup.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Zion2026Pricing;