import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Star, 
  Clock, 
  Shield, 
  Zap, 
  Brain, 
  Bot, 
  Rocket, 
  Globe,
  Award,
  CheckCircle,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { NEW_SERVICES_2026 } from '../data/newContent2026';
const NewServices2026: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI Automation': return Brain;
      case 'Quantum Computing': return Zap;
      case 'Neural Interfaces': return Bot;
      case 'Sustainable AI': return Globe;
      case 'Edge AI': return Rocket;
      default: return Award;
    }
  };
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI Automation': return 'from-purple-500 to-pink-500';
      case 'Quantum Computing': return 'from-blue-500 to-cyan-500';
      case 'Neural Interfaces': return 'from-green-500 to-emerald-500';
      case 'Sustainable AI': return 'from-orange-500 to-red-500';
      case 'Edge AI': return 'from-indigo-500 to-purple-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-lg font-semibold mb-6"
          >
            <Award className="h-6 w-6" />
            <span>NEW SERVICES 2026</span>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Revolutionary AI Services
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Discover cutting-edge AI solutions, quantum computing platforms, and innovative technologies 
            that are transforming industries and reshaping the future of business.
          </p>
        </div>
        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {NEW_SERVICES_2026.map((service, index) => {
            const CategoryIcon = getCategoryIcon(service.category);
            const categoryColor = getCategoryColor(service.category);
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                {/* Service Header */}
                <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${categoryColor} opacity-20`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <CategoryIcon className="h-24 w-24 text-gray-400" />
                  </div>
                  {service.featured && (
                    <div className="absolute top-6 left-6 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-2 rounded-full text-sm font-bold">
                      FEATURED
                    </div>
                  )}
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full text-lg font-bold">
                    {service.price}
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${categoryColor} text-white`}>
                        <CategoryIcon className="h-5 w-5" />
                      </div>
                      <span className="text-sm font-semibold text-gray-600">{service.category}</span>
                      <div className="flex items-center space-x-1 ml-auto">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-semibold">{service.reviews.rating}</span>
                        <span className="text-xs text-gray-500">({service.reviews.count})</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Service Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    {service.description}
                  </p>
                  {/* Key Benefits */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Benefits</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.benefits.slice(0, 4).map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Service Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600">Delivery: {service.deliveryTime}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600">{service.support}</span>
                    </div>
                  </div>
                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <motion.button
                      onClick={() => setSelectedService(service.id)}
                      className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4" />
                    </motion.button>
                    <motion.button
                      className="flex-1 flex items-center justify-center space-x-2 bg-transparent border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Get Quote</span>
                      <ExternalLink className="h-4 w-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
};
          })}
        </div>
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Our revolutionary AI services are designed to deliver measurable results and 
              competitive advantages. Contact our experts to discuss your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Schedule Consultation</span>
                <ChevronRight className="h-5 w-5" />
              </motion.button>
              <motion.button
                className="inline-flex items-center space-x-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Download Brochure</span>
                <ExternalLink className="h-5 w-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );



export default NewServices2026;
