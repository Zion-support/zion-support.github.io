import React, { useState, useEffect } from 'react';
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

const Zion2026ServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('name');

  const allServices = [...zion2026UltimateServices, ...zion2026EmergingTechServices];

  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
      case 'rating':
        return b.rating - a.rating;
      case 'customers':
        return b.customers - a.customers;
      case 'launchDate':
        return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
      default:
        return a.name.localeCompare(b.name);
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
              Ultimate Services Showcase
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Discover our cutting-edge micro SAAS services, IT solutions, and AI innovations that are shaping the future of technology.
            </p>
            
            {/* Contact Information */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-12 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-blue-400">Contact Zion Tech Group</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl mb-2">📱</div>
                  <h4 className="font-semibold text-blue-300">Mobile</h4>
                  <p className="text-white">+1 302 464 0950</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">✉️</div>
                  <h4 className="font-semibold text-blue-300">Email</h4>
                  <p className="text-white">kleber@ziontechgroup.com</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">📍</div>
                  <h4 className="font-semibold text-blue-300">Address</h4>
                  <p className="text-white">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              <div className="mt-6 text-center">
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
          </motion.div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            {/* Search */}
            <div>
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-gray-800 text-white">
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="name" className="bg-gray-800 text-white">Sort by Name</option>
                <option value="price" className="bg-gray-800 text-white">Sort by Price</option>
                <option value="rating" className="bg-gray-800 text-white">Sort by Rating</option>
                <option value="customers" className="bg-gray-800 text-white">Sort by Customers</option>
                <option value="launchDate" className="bg-gray-800 text-white">Sort by Launch Date</option>
              </select>
            </div>

            {/* Results Count */}
            <div className="flex items-center justify-center">
              <span className="text-gray-300">
                {sortedServices.length} services found
              </span>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {sortedServices.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20"
            >
              {/* Service Header */}
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{service.name}</h3>
                <p className="text-gray-300 text-sm mb-3">{service.tagline}</p>
                {service.popular && (
                  <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-xs font-semibold">
                    Popular
                  </span>
                )}
              </div>

              {/* Price */}
              <div className="text-center mb-4">
                <span className="text-3xl font-bold text-blue-400">{service.price}</span>
                <span className="text-gray-300">{service.period}</span>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>

              {/* Key Features */}
              <div className="mb-4">
                <h4 className="font-semibold text-blue-300 mb-2">Key Features:</h4>
                <ul className="text-xs text-gray-300 space-y-1">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-blue-400 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-4 text-center text-xs">
                <div>
                  <div className="text-blue-400 font-semibold">{service.customers}</div>
                  <div className="text-gray-400">Customers</div>
                </div>
                <div>
                  <div className="text-green-400 font-semibold">{service.rating}/5</div>
                  <div className="text-gray-400">Rating</div>
                </div>
                <div>
                  <div className="text-purple-400 font-semibold">{service.reviews}</div>
                  <div className="text-gray-400">Reviews</div>
                </div>
              </div>

              {/* Market Info */}
              <div className="mb-4 text-xs">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-400">Market Size:</span>
                  <span className="text-white">{service.marketSize}</span>
                </div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-400">Growth Rate:</span>
                  <span className="text-green-400">{service.growthRate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Setup Time:</span>
                  <span className="text-white">{service.setupTime}</span>
                </div>
              </div>

              {/* ROI */}
              <div className="mb-4 p-3 bg-green-500/20 rounded-lg">
                <h4 className="font-semibold text-green-400 mb-1">ROI Impact:</h4>
                <p className="text-xs text-gray-300">{service.roi}</p>
              </div>

              {/* Technology Stack */}
              <div className="mb-4">
                <h4 className="font-semibold text-blue-300 mb-2 text-xs">Technology:</h4>
                <div className="flex flex-wrap gap-1">
                  {service.technology.slice(0, 4).map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-500/20 rounded text-xs text-blue-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center py-2 px-4 rounded-lg text-sm font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                >
                  Learn More
                </a>
                <button className="px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white text-sm hover:bg-white/30 transition-all duration-300">
                  Contact
                </button>
              </div>

              {/* Trial Info */}
              <div className="text-center mt-4 text-xs text-gray-400">
                <span className="text-blue-400 font-semibold">{service.trialDays} days free trial</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {sortedServices.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-300 mb-2">No services found</h3>
            <p className="text-gray-400">Try adjusting your search criteria or category filter.</p>
          </div>
        )}
      </div>

      {/* Footer CTA */}
      <div className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-12 text-center">
          <h3 className="text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies already leveraging Zion Tech Group's cutting-edge solutions to stay ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
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
    </div>
  );
};

export default Zion2026ServicesShowcase;