import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { COMPREHENSIVE_SERVICES_EXPANSION_2025 } from '../data/comprehensiveServicesExpansion2025';
import { EMERGING_TECH_SPECIALIZED_SERVICES_2025 } from '../data/emergingTechSpecializedServices2025';

const ComprehensiveServicesShowcase2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const allServices = [
    ...COMPREHENSIVE_SERVICES_EXPANSION_2025,
    ...EMERGING_TECH_SPECIALIZED_SERVICES_2025
  ];

  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category))];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Comprehensive Services Showcase 2025 - Zion Tech Group"
        description="Explore our comprehensive portfolio of cutting-edge AI, quantum, blockchain, and emerging technology services. Real solutions with proven ROI and market-leading innovation."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Zion Tech Group
          </motion.h1>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-blue-400 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive Services Showcase 2025
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover our portfolio of 15+ cutting-edge micro SAAS services, IT solutions, and AI platforms. 
            Real solutions with proven ROI, market-leading innovation, and enterprise-grade support.
          </motion.p>
          
          {/* Contact Information */}
          <motion.div 
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Zion Tech Group</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-blue-400 text-lg font-semibold mb-2">Phone</div>
                <div className="text-white text-lg">+1 302 464 0950</div>
              </div>
              <div>
                <div className="text-blue-400 text-lg font-semibold mb-2">Email</div>
                <div className="text-white text-lg">kleber@ziontechgroup.com</div>
              </div>
              <div>
                <div className="text-blue-400 text-lg font-semibold mb-2">Address</div>
                <div className="text-white text-lg">364 E Main St STE 1008<br />Middletown DE 19709</div>
              </div>
            </div>
            <div className="mt-6">
              <a 
                href="https://ziontechgroup.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Visit Our Website
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category === 'all' ? 'All Services' : category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
                variants={itemVariants}
              >
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    service.innovationLevel === 'Revolutionary' 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-blue-600 text-white'
                  }`}>
                    {service.innovationLevel}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>
                
                <div className="mb-4">
                  <div className="text-2xl font-bold text-blue-400 mb-1">
                    ${service.pricing?.monthly || service.price?.toLocaleString()}/month
                  </div>
                  <div className="text-sm text-gray-400">
                    Market Price: {service.pricing?.marketPrice || service.marketPrice}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm text-gray-400 mb-2">ROI: {service.pricing?.roi || service.roi}</div>
                  <div className="text-sm text-gray-400 mb-2">Delivery: {service.pricing?.estimatedDelivery || service.estimatedDelivery}</div>
                  <div className="text-sm text-gray-400">Support: {service.pricing?.supportLevel || service.supportLevel}</div>
                </div>

                <div className="mb-4">
                  <div className="text-sm text-gray-400 mb-2">Category: {service.category}</div>
                  <div className="text-sm text-gray-400">Subcategory: {service.subcategory}</div>
                </div>

                <div className="mb-4">
                  <div className="text-sm text-gray-400 mb-2">Key Benefits:</div>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {(service.benefits || []).slice(0, 3).map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <div className="text-sm text-gray-400 mb-2">Use Cases:</div>
                  <div className="flex flex-wrap gap-2">
                    {(service.useCases || []).slice(0, 3).map((useCase, index) => (
                      <span key={index} className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm text-gray-400 mb-2">Technologies:</div>
                  <div className="flex flex-wrap gap-2">
                    {(service.technologies || service.technicalSpecs?.technology || []).slice(0, 4).map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-600/20 rounded text-xs text-blue-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-sm text-gray-400 mb-2">Tags:</div>
                  <div className="flex flex-wrap gap-2">
                    {(service.tags || []).slice(0, 5).map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <a
                    href={service.website || `https://ziontechgroup.com/services/${service.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg text-center transition-colors"
                  >
                    Learn More
                  </a>
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}`}
                    className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-4 rounded-lg text-center transition-colors"
                  >
                    Request Quote
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              Our team of experts is ready to help you implement these cutting-edge solutions. 
              Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Call Now: +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-white/20 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/30 transition-colors"
              >
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServicesShowcase2025;
