import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Globe, 
  Zap, 
  Cloud, 
  Building2, 
  ArrowRight, 
  Star, 
  Users, 
  TrendingUp,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Rocket,
  Atom,
  Lock,
  Leaf
} from 'lucide-react';
import { zion2027AdvancedServices } from '../data/zion-2027-advanced-services';

const Zion2027AdvancedServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All Services', icon: Rocket, color: 'from-purple-500 to-pink-500' },
    { id: 'AI & Automation', name: 'AI & Automation', icon: Brain, color: 'from-blue-500 to-cyan-500' },
    { id: 'Quantum Computing', name: 'Quantum Computing', icon: Atom, color: 'from-indigo-500 to-purple-500' },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-500' },
    { id: 'Digital Transformation', name: 'Digital Transformation', icon: Globe, color: 'from-green-500 to-teal-500' },
    { id: 'Industry Solutions', name: 'Industry Solutions', icon: Building2, color: 'from-yellow-500 to-orange-500' }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? zion2027AdvancedServices 
    : zion2027AdvancedServices.filter(service => service.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category);
    return categoryData?.icon || Building2;
  };

  const getCategoryColor = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category);
    return categoryData?.color || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Zion 2027
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Advanced Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience the future of technology with our cutting-edge 2027 service portfolio. 
              From quantum AI fusion to autonomous ecosystems, we're redefining what's possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Explore Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                <category.icon className="w-5 h-5" />
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${getCategoryColor(service.category)}`}>
                    {React.createElement(getCategoryIcon(service.category), { className: 'w-6 h-6 text-white' })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-white font-semibold">{service.rating}</span>
                    <span className="text-gray-400 text-sm">({service.reviews})</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                <p className="text-cyan-400 font-medium mb-3">{service.tagline}</p>
                <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>

                <div className="mb-4">
                  <span className="text-2xl font-bold text-white">{service.price}</span>
                  <span className="text-gray-400 text-sm">/month</span>
                </div>

                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedService(service.id)}
                    className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  >
                    Learn More
                  </motion.button>
                  <div className="text-right">
                    <div className="text-white font-semibold">{service.customers}+ customers</div>
                    <div className="text-cyan-400 text-sm">{service.launchDate}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the future with Zion Tech Group's cutting-edge 2027 services. 
              Our team of experts is ready to help you implement these revolutionary solutions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex items-center justify-center gap-3 text-white">
                <Phone className="w-6 h-6 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-white">
                <Mail className="w-6 h-6 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-white">
                <MapPin className="w-6 h-6 text-cyan-400" />
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-lg"
            >
              Schedule a Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Service Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-slate-800 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            {(() => {
              const service = zion2027AdvancedServices.find(s => s.id === selectedService);
              if (!service) return null;

              return (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl font-bold text-white">{service.name}</h2>
                    <button
                      onClick={() => setSelectedService(null)}
                      className="text-gray-400 hover:text-white text-2xl"
                    >
                      ×
                    </button>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-cyan-400 mb-3">Description</h3>
                      <p className="text-gray-300 mb-6">{service.description}</p>

                      <h3 className="text-xl font-semibold text-cyan-400 mb-3">Features</h3>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-300">
                            <CheckCircle className="w-5 h-5 text-cyan-400" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <h3 className="text-xl font-semibold text-cyan-400 mb-3">Use Cases</h3>
                      <ul className="space-y-2 mb-6">
                        {service.useCases.map((useCase, idx) => (
                          <li key={idx} className="text-gray-300">• {useCase}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="bg-slate-700/50 rounded-xl p-6 mb-6">
                        <h3 className="text-xl font-semibold text-white mb-4">Service Details</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Price:</span>
                            <span className="text-white font-semibold">{service.price}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">ROI:</span>
                            <span className="text-green-400 font-semibold">{service.roi}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Market Size:</span>
                            <span className="text-white font-semibold">{service.marketSize}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Growth Rate:</span>
                            <span className="text-cyan-400 font-semibold">{service.growthRate}</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-slate-700/50 rounded-xl p-6 mb-6">
                        <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 text-gray-300">
                            <Phone className="w-5 h-5 text-cyan-400" />
                            {service.contactInfo.mobile}
                          </div>
                          <div className="flex items-center gap-3 text-gray-300">
                            <Mail className="w-5 h-5 text-cyan-400" />
                            {service.contactInfo.email}
                          </div>
                          <div className="flex items-center gap-3 text-gray-300">
                            <MapPin className="w-5 h-5 text-cyan-400" />
                            {service.contactInfo.address}
                          </div>
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                      >
                        Get Started
                      </motion.button>
                    </div>
                  </div>
                </div>
              );
            })()}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Zion2027AdvancedServicesShowcase;