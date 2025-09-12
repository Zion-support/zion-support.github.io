import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, Shield, Rocket, Cpu, Database, Atom, Users, 
  CheckCircle, TrendingUp, Clock, Star, Filter, ChevronDown
} from 'lucide-react';
import { enhancedMicroSaasServices } from '../data/enhanced-micro-saas-services-2025';

export default function EnhancedServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedService, setSelectedService] = useState<string | null>(null);

=======
const EnhancedServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const services: Service[] = [
    {
      id: 'ai-bi',
      name: 'AI Business Intelligence',
      tagline: 'Transform data into actionable insights with AI-powered analytics',
      category: 'AI & Analytics',
      price: '$499',
      period: '/month',
      setupTime: '2-3 weeks',
      customers: '150+',
      features: ['AI-powered dashboards', 'Predictive analytics', 'Real-time insights', 'Custom reporting'],
      benefits: ['30% faster decision making', 'Improved data accuracy', 'Cost reduction'],
      roi: 'Average 3.2x ROI within 6 months',
      marketSize: '$25B',
      growthRate: '25% YoY',
      popular: true,
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'quantum-cyber',
      name: 'Quantum Cybersecurity',
      tagline: 'Future-proof security with quantum-resistant encryption and AI threat detection',
      category: 'Security',
      price: '$799',
      period: '/month',
      setupTime: '4-6 weeks',
      customers: '75+',
      features: ['Quantum-resistant encryption', 'AI threat detection', 'Zero-trust architecture', '24/7 monitoring'],
      benefits: ['99.99% threat prevention', 'Compliance ready', 'Reduced security incidents'],
      roi: 'Average 4.1x ROI within 8 months',
      marketSize: '$18B',
      growthRate: '32% YoY',
      popular: false,
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 'edge-computing',
      name: 'Edge Computing Orchestration',
      tagline: 'Deploy and manage applications at the edge with intelligent orchestration',
      category: 'Infrastructure',
      price: '$349',
      period: '/month',
      setupTime: '1-2 weeks',
      customers: '200+',
      features: ['Edge node management', 'IoT device management', 'Real-time monitoring', 'Auto-scaling'],
      benefits: ['50% latency reduction', 'Improved reliability', 'Cost optimization'],
      roi: 'Average 2.8x ROI within 4 months',
      marketSize: '$12B',
      growthRate: '28% YoY',
      popular: false,
      icon: Cpu,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      id: 'space-tech',
      name: 'Space Technology Innovation',
      tagline: 'Accelerate space exploration with cutting-edge technology solutions',
      category: 'Space Tech',
      price: '$2,499',
      period: '/month',
      setupTime: '8-12 weeks',
      customers: '25+',
      features: ['Satellite management', 'AI mission planning', 'Quantum communication', 'Space analytics'],
      benefits: ['Mission success rate 95%+', 'Reduced launch costs', 'Advanced capabilities'],
      roi: 'Average 5.2x ROI within 12 months',
      marketSize: '$8B',
      growthRate: '45% YoY',
      popular: true,
      icon: Rocket,
      color: 'from-violet-500 to-purple-500'
    },
    {
      id: 'neural-interface',
      name: 'Neural Interface Development',
      tagline: 'Build the future of human-computer interaction with neural interfaces',
      category: 'Emerging Tech',
      price: '$899',
      period: '/month',
      setupTime: '6-8 weeks',
      customers: '40+',
      features: ['BCI development tools', 'Neural signal processing', 'AI pattern recognition', 'Safety protocols'],
      benefits: ['Revolutionary UX', 'Accessibility improvements', 'Research advancement'],
      roi: 'Average 6.8x ROI within 18 months',
      marketSize: '$3B',
      growthRate: '67% YoY',
      popular: false,
      icon: Brain,
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 'quantum-ai',
      name: 'Quantum AI Neural Networks',
      tagline: 'Quantum-powered AI with advanced consciousness capabilities',
      category: 'Quantum AI',
      price: '$1,299',
      period: '/month',
      setupTime: '10-14 weeks',
      customers: '15+',
      features: ['Quantum neural networks', 'Consciousness simulation', 'Advanced learning', 'Quantum optimization'],
      benefits: ['Unprecedented AI capabilities', 'Breakthrough research', 'Competitive advantage'],
      roi: 'Average 8.5x ROI within 24 months',
      marketSize: '$2B',
      growthRate: '89% YoY',
      popular: true,
      icon: Atom,
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? enhancedMicroSaasServices 
    : enhancedMicroSaasServices.filter(service => service.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category);
    return categoryData?.icon || '🚀';
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Revolutionary Micro SAAS Services
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Discover our cutting-edge micro SAAS solutions that are transforming industries and driving the future of technology
          </p>
          <div className="mt-8 flex items-center justify-center gap-2 text-white/60">
            <Shield className="w-5 h-5" />
            <span>Enterprise-grade security</span>
            <span>•</span>
            <Zap className="w-5 h-5" />
            <span>AI-powered optimization</span>
            <span>•</span>
            <Globe className="w-5 h-5" />
            <span>Global deployment</span>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                }`}
              >
                <span>{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
=======
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Popular
                  </div>
                )}

                {/* Service Content */}
                <div className="p-8">
                  {/* Icon and Category */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 flex items-center justify-center text-2xl`}>
                      {service.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-white/60 mb-1">{getCategoryIcon(service.category)}</div>
                      <div className="text-xs text-white/40">{service.category}</div>
                    </div>
                  </div>

                  {/* Service Info */}
                  <h3 className="text-xl font-bold mb-3 text-white">{service.name}</h3>
                  <p className="text-white/70 text-sm mb-4 leading-relaxed">{service.tagline}</p>

                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-3xl font-bold text-white">{service.price}</span>
                      <span className="text-white/60">{service.period}</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-white/50">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {service.setupTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {service.customers} customers
                      </span>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <div className="space-y-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-white/70">
                          <CheckCircle className="w-3 h-3 text-green-400" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Benefits:</h4>
                    <div className="space-y-2">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-white/70">
                          <TrendingUp className="w-3 h-3 text-blue-400" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ROI and Market Info */}
                  <div className="mb-6 p-4 bg-white/5 rounded-lg">
                    <div className="text-xs text-white/60 mb-2">ROI & Market Position</div>
                    <div className="text-xs text-white/80 leading-relaxed">{service.roi}</div>
                    <div className="mt-2 text-xs text-white/60">
                      Market: {service.marketSize} • Growth: {service.growthRate}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => setSelectedService(service.id)}
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-medium text-sm transition-all duration-300 transform hover:scale-105"
                    >
                      Learn More
                    </button>
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-white/20 hover:border-cyan-400/30 rounded-lg font-medium text-sm transition-all duration-300 flex items-center gap-2 hover:bg-white/5"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Visit
                    </a>
                  </div>

                  {/* Contact Info */}
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <div className="text-xs text-white/50 mb-2">Ready to get started?</div>
                    <div className="text-xs text-white/70">
                      Contact: {service.contactInfo.email}
                    </div>
                    <div className="text-xs text-white/70">
                      Phone: {service.contactInfo.mobile}
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-cyan-400/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Let's discuss how our cutting-edge technology solutions can accelerate your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
              >
                Schedule Consultation
                <ChevronRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10"
              >
                Call Now: +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-white/60">
              <p>Address: 364 E Main St STE 1008 Middletown DE 19709</p>
              <p>Website: <a href="https://ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">https://ziontechgroup.com</a></p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-900 rounded-2xl border border-white/10 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const service = enhancedMicroSaasServices.find(s => s.id === selectedService);
                if (!service) return null;

                return (
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} p-5 flex items-center justify-center text-4xl`}>
                          {service.icon}
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-white mb-2">{service.name}</h2>
                          <p className="text-xl text-white/70">{service.tagline}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedService(null)}
                        className="text-white/60 hover:text-white text-2xl"
                      >
                        ×
                      </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-4">Service Overview</h3>
                        <p className="text-white/80 leading-relaxed mb-6">{service.description}</p>
                        
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-white mb-3">Key Benefits</h4>
                          <div className="space-y-2">
                            {service.benefits.map((benefit, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-white/70">
                                <CheckCircle className="w-4 h-4 text-green-400" />
                                {benefit}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-white mb-3">Capabilities</h4>
                          <div className="space-y-2">
                            {service.capabilities.map((capability, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-white/70">
                                <Zap className="w-4 h-4 text-blue-400" />
                                {capability}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="bg-white/5 rounded-lg p-6 mb-6">
                          <h4 className="text-lg font-semibold text-white mb-4">Pricing & Details</h4>
                          <div className="text-3xl font-bold text-white mb-2">{service.price}{service.period}</div>
                          <div className="space-y-3 text-sm text-white/70">
                            <div className="flex justify-between">
                              <span>Trial Period:</span>
                              <span>{service.trialDays} days</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Setup Time:</span>
                              <span>{service.setupTime}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Current Customers:</span>
                              <span>{service.customers}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Rating:</span>
                              <span className="flex items-center gap-1">
                                {service.rating}/5 <Star className="w-4 h-4 text-yellow-400" />
                                ({service.reviews} reviews)
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white/5 rounded-lg p-6 mb-6">
                          <h4 className="text-lg font-semibold text-white mb-4">Market Information</h4>
                          <div className="space-y-3 text-sm text-white/70">
                            <div>
                              <span className="font-medium">Market Size:</span> {service.marketSize}
                            </div>
                            <div>
                              <span className="font-medium">Growth Rate:</span> {service.growthRate}
                            </div>
                            <div>
                              <span className="font-medium">ROI:</span> {service.roi}
                            </div>
                          </div>
                        </div>

                        <div className="bg-white/5 rounded-lg p-6">
                          <h4 className="text-lg font-semibold text-white mb-4">Contact Information</h4>
                          <div className="space-y-3 text-sm text-white/70">
                            <div>
                              <span className="font-medium">Email:</span> {service.contactInfo.email}
                            </div>
                            <div>
                              <span className="font-medium">Phone:</span> {service.contactInfo.mobile}
                            </div>
                            <div>
                              <span className="font-medium">Address:</span> {service.contactInfo.address}
                            </div>
                            <div>
                              <span className="font-medium">Website:</span> {service.contactInfo.website}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 flex gap-4">
                      <a
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold text-center transition-all duration-300 transform hover:scale-105"
                      >
                        Visit Service Page
                      </a>
                      <a
                        href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.name}`}
                        className="flex-1 px-6 py-3 border border-white/20 hover:border-cyan-400/30 rounded-lg font-semibold text-center transition-all duration-300 hover:bg-white/5"
                      >
                        Contact Sales
                      </a>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}