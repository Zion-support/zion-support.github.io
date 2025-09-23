import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  Cloud,
  Shield,
  Globe,
  Code,
  BarChart3,
  Users,
  ShoppingCart,
  MessageSquare,
  FileText,
  Settings,
  Zap,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

// Import the new services
import { ultimateInnovativeServices2025 } from '../../data/2025-ultimate-innovative-services-expansion';
import { enterpriseITInfrastructureServices2025 } from '../../data/2025-enterprise-it-infrastructure-services';
import { innovativeMicroSaasSolutions2025 } from '../../data/2025-innovative-micro-saas-solutions';

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
  innovationLevel: 'Revolutionary' | 'Breakthrough' | 'Advanced' | 'Emerging';
  patentStatus: 'Patented' | 'Patent Pending' | 'Trade Secret' | 'Open Source';
  aiCapabilities: string[];
  marketDisruption: string;
}

const contact = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const categories = [
  {
    id: 'ai-services',
    name: 'AI & Autonomous Systems',
    description: 'Revolutionary AI solutions that transform business operations',
    icon: <Brain className="w-8 h-8" />,
    color: 'from-purple-600 to-pink-700',
    services: ultimateInnovativeServices2025.filter(s => s.category.includes('AI'))
  },
  {
    id: 'it-infrastructure',
    name: 'IT Infrastructure & Enterprise',
    description: 'Cutting-edge infrastructure solutions for modern businesses',
    icon: <Cloud className="w-8 h-8" />,
    color: 'from-blue-600 to-cyan-700',
    services: enterpriseITInfrastructureServices2025
  },
  {
    id: 'micro-saas',
    name: 'Micro SAAS Solutions',
    description: 'Innovative software solutions for small businesses',
    icon: <Code className="w-8 h-8" />,
    color: 'from-green-600 to-emerald-700',
    services: innovativeMicroSaasSolutions2025
  }
];

const innovationLevelColors = {
  'Revolutionary': 'from-red-600 to-pink-700',
  'Breakthrough': 'from-purple-600 to-violet-700',
  'Advanced': 'from-blue-600 to-cyan-700',
  'Emerging': 'from-green-600 to-emerald-700'
};

const patentStatusColors = {
  'Patented': 'from-green-600 to-emerald-700',
  'Patent Pending': 'from-yellow-600 to-orange-700',
  'Trade Secret': 'from-blue-600 to-indigo-700',
  'Open Source': 'from-purple-600 to-violet-700'
};

export function UltimateServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const allServices = [
    ...ultimateInnovativeServices2025,
    ...enterpriseITInfrastructureServices2025,
    ...innovativeMicroSaasSolutions2025
  ];

  const filteredServices = selectedCategory === 'all'
    ? allServices
    : categories.find(cat => cat.id === selectedCategory)?.services || [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">
              Ultimate Innovation
            </span>
            <br />
            <span className="text-white">Services Showcase</span>
          </h1>
          <p className="text-xl text-zion-gray-light max-w-4xl mx-auto leading-relaxed">
            Discover our revolutionary AI, IT infrastructure, and micro SAAS solutions that are transforming industries worldwide.
            Each service is backed by cutting-edge technology and proven results.
          </p>

          {/* Contact Information */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-zion-gray-light">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-zion-cyan" />
              <span>{contact.mobile}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-zion-cyan" />
              <span>{contact.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-zion-cyan" />
              <span>{contact.address}</span>
            </div>
          </div>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white shadow-lg shadow-zion-cyan/25'
                : 'bg-zion-slate-light text-zion-gray-light hover:bg-zion-slate hover:text-white'
            }`}
          >
            All Services ({allServices.length})
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white shadow-lg shadow-zion-cyan/25'
                  : 'bg-zion-slate-light text-zion-gray-light hover:bg-zion-slate hover:text-white'
              }`}
            >
              {category.name} ({category.services.length})
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group relative"
            >
              <div className="bg-zion-slate-light rounded-2xl p-6 h-full border border-zion-slate hover:border-zion-cyan transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20">
                {/* Service Header */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-3xl">{service.icon}</div>
                    {service.popular && (
                      <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                        Popular
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-zion-gray-light text-sm leading-relaxed">
                    {service.tagline}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-zion-cyan">
                      {service.price}
                    </span>
                    <span className="text-zion-gray-light">
                      {service.period}
                    </span>
                  </div>
                  <p className="text-zion-gray-light text-sm">
                    {service.trialDays} days free trial • Setup in {service.setupTime}
                  </p>
                </div>

                {/* Innovation Level & Patent Status */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className={`bg-gradient-to-r ${innovationLevelColors[service.innovationLevel]} text-white text-xs px-3 py-1 rounded-full font-semibold`}>
                    {service.innovationLevel}
                  </span>
                  <span className={`bg-gradient-to-r ${patentStatusColors[service.patentStatus]} text-white text-xs px-3 py-1 rounded-full font-semibold`}>
                    {service.patentStatus}
                  </span>
                </div>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-zion-gray-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ROI & Market Info */}
                <div className="mb-4 p-3 bg-zion-slate rounded-lg">
                  <p className="text-zion-cyan text-sm font-semibold mb-1">ROI & Market:</p>
                  <p className="text-zion-gray-light text-xs leading-relaxed">
                    {service.roi}
                  </p>
                  <p className="text-zion-gray-light text-xs mt-1">
                    Market: {service.marketSize} • Growth: {service.growthRate}
                  </p>
                </div>

                {/* Customer Stats */}
                <div className="flex items-center justify-between mb-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-white">{service.rating}</span>
                    <span className="text-zion-gray-light">({service.reviews} reviews)</span>
                  </div>
                  <span className="text-zion-cyan font-semibold">
                    {service.customers} customers
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-4 py-2 rounded-lg font-semibold hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <Link
                    to={service.link}
                    className="bg-zion-slate-light border border-zion-cyan text-zion-cyan px-4 py-2 rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center justify-center"
                  >
                    <Zap className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-zion-slate to-zion-slate-light rounded-2xl p-8 border border-zion-cyan">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-zion-gray-light text-lg mb-6 max-w-2xl mx-auto">
              Join hundreds of companies already using our innovative solutions to gain competitive advantages and achieve breakthrough results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-8 py-3 rounded-lg font-semibold hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 flex items-center gap-2"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`tel:${contact.mobile}`
                  .replace(/\s/g, '')
                  .replace(/[^\d+]/g, '')}
                className="bg-zion-slate-light border border-zion-cyan text-zion-cyan px-8 py-3 rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-zion-slate-light rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="text-4xl mb-2">{selectedService.icon}</div>
                  <h2 className="text-3xl font-bold text-white mb-2">
                    {selectedService.name}
                  </h2>
                  <p className="text-zion-gray-light text-lg">
                    {selectedService.tagline}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-zion-gray-light hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Description</h3>
                  <p className="text-zion-gray-light leading-relaxed mb-4">
                    {selectedService.description}
                  </p>

                  <h3 className="text-xl font-bold text-white mb-3">Features</h3>
                  <ul className="space-y-2 mb-4">
                    {selectedService.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-zion-gray-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-bold text-white mb-3">AI Capabilities</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedService.aiCapabilities.map((capability, index) => (
                      <span key={index} className="bg-zion-cyan text-white text-sm px-3 py-1 rounded-full">
                        {capability}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Market Information</h3>
                  <div className="space-y-3 mb-4">
                    <div>
                      <span className="text-zion-cyan font-semibold">Market Position:</span>
                      <p className="text-zion-gray-light text-sm">{selectedService.marketPosition}</p>
                    </div>
                    <div>
                      <span className="text-zion-cyan font-semibold">Target Audience:</span>
                      <p className="text-zion-gray-light text-sm">{selectedService.targetAudience}</p>
                    </div>
                    <div>
                      <span className="text-zion-cyan font-semibold">ROI:</span>
                      <p className="text-zion-gray-light text-sm">{selectedService.roi}</p>
                    </div>
                    <div>
                      <span className="text-zion-cyan font-semibold">Market Disruption:</span>
                      <p className="text-zion-gray-light text-sm">{selectedService.marketDisruption}</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">Technology & Integrations</h3>
                  <div className="space-y-3 mb-4">
                    <div>
                      <span className="text-zion-cyan font-semibold">Technology:</span>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {selectedService.technology.map((tech, index) => (
                          <span key={index} className="bg-zion-slate text-zion-cyan text-xs px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-zion-cyan font-semibold">Integrations:</span>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {selectedService.integrations.map((integration, index) => (
                          <span key={index} className="bg-zion-slate text-zion-cyan text-xs px-2 py-1 rounded">
                            {integration}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Link
                      to={selectedService.link}
                      className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-6 py-3 rounded-lg font-semibold hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 text-center"
                    >
                      Get Started
                    </Link>
                    <a
                      href={`tel:${contact.mobile}`
                        .replace(/\s/g, '')
                        .replace(/[^\d+]/g, '')}
                      className="bg-zion-slate border border-zion-cyan text-zion-cyan px-6 py-3 rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center justify-center"
                    >
                      <Phone className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default UltimateServicesShowcase;