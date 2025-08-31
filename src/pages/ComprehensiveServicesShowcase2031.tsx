import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Globe, 
  Zap, 
  Cpu, 
  Network, 
  Database, 
  Lock, 
  TrendingUp, 
  Users, 
  Star,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  CheckCircle,
  ArrowRight,
  Rocket,
  Target,
  Award
} from 'lucide-react';
import { allExpandedServices2028 } from '../data/expandedInnovativeServices2028';
import { allRevolutionaryServices2031 } from '../data/revolutionaryServices2031';

const ComprehensiveServicesShowcase2031: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, count: 0 },
    { id: 'micro-saas', name: 'Micro SaaS', icon: Zap, count: 0 },
    { id: 'it-services', name: 'IT Services', icon: Cpu, count: 0 },
    { id: 'ai-services', name: 'AI Solutions', icon: Brain, count: 0 },
    { id: 'quantum', name: 'Quantum Tech', icon: Atom, count: 0 },
    { id: 'blockchain', name: 'Blockchain', icon: Database, count: 0 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 0 },
    { id: 'sustainability', name: 'Sustainability', icon: Leaf, count: 0 }
  ];

  // Combine all services
  const allServices = [
    ...allExpandedServices2028.microSaas.map(s => ({ ...s, type: 'micro-saas' })),
    ...allExpandedServices2028.itServices.map(s => ({ ...s, type: 'it-services' })),
    ...allExpandedServices2028.aiServices.map(s => ({ ...s, type: 'ai-services' })),
    ...allRevolutionaryServices2031.microSaas.map(s => ({ ...s, type: 'micro-saas' })),
    ...allRevolutionaryServices2031.itServices.map(s => ({ ...s, type: 'it-services' })),
    ...allRevolutionaryServices2031.aiServices.map(s => ({ ...s, type: 'ai-services' }))
  ];

  // Update category counts
  useEffect(() => {
    categories.forEach(cat => {
      if (cat.id === 'all') {
        cat.count = allServices.length;
      } else {
        cat.count = allServices.filter(s => s.type === cat.id).length;
      }
    });
  }, []);

  const filteredServices = allServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.type === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Legal Tech': return <Shield className="w-6 h-6" />;
      case 'Cybersecurity': return <Lock className="w-6 h-6" />;
      case 'Supply Chain': return <Network className="w-6 h-6" />;
      case 'Sustainability': return <Leaf className="w-6 h-6" />;
      case 'Healthcare': return <Heart className="w-6 h-6" />;
      case 'Quantum Computing': return <Atom className="w-6 h-6" />;
      case 'Edge Computing': return <Zap className="w-6 h-6" />;
      case 'Blockchain': return <Database className="w-6 h-6" />;
      case 'Autonomous Systems': return <Car className="w-6 h-6" />;
      case 'Quantum AI': return <Brain className="w-6 h-6" />;
      case 'Space Technology': return <Rocket className="w-6 h-6" />;
      case 'Metaverse & AR/VR': return <Glasses className="w-6 h-6" />;
      case 'BioTech & Health': return <Dna className="w-6 h-6" />;
      case 'FinTech & DeFi': return <TrendingUp className="w-6 h-6" />;
      case 'Neuromorphic Computing': return <Cpu className="w-6 h-6" />;
      case 'Neurotechnology': return <Brain className="w-6 h-6" />;
      case 'Consciousness AI': return <Eye className="w-6 h-6" />;
      case 'Predictive AI': return <TrendingUp className="w-6 h-6" />;
      case 'Autonomous AI': return <Bot className="w-6 h-6" />;
      default: return <Zap className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Revolutionary Services
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                {' '}2031
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover Zion Tech Group's cutting-edge micro SAAS, IT services, and AI solutions 
              that are shaping the future of technology and business innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-6 h-6 text-blue-300 mb-2" />
              <p className="text-blue-300 text-sm">Phone</p>
              <p className="text-white font-semibold">+1 302 464 0950</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-6 h-6 text-purple-300 mb-2" />
              <p className="text-purple-300 text-sm">Email</p>
              <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-6 h-6 text-green-300 mb-2" />
              <p className="text-green-300 text-sm">Address</p>
              <p className="text-white font-semibold text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-gray-600'
                }`}
              >
                <category.icon className="w-5 h-5 mr-2" />
                {category.name}
                <span className="ml-2 bg-white/20 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                {/* Service Header */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      {getCategoryIcon(service.category)}
                      <span className="ml-2 text-sm text-gray-400 bg-gray-700 px-2 py-1 rounded">
                        {service.type.replace('-', ' ').toUpperCase()}
                      </span>
                    </div>
                    {service.featured && (
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Pricing */}
                <div className="mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-400">
                      {service.pricing}
                    </span>
                    {service.marketPrice && (
                      <span className="text-gray-400 line-through text-sm">
                        {service.marketPrice}
                      </span>
                    )}
                  </div>
                  {service.roi && (
                    <p className="text-green-300 text-sm mt-1">
                      ROI: {service.roi}
                    </p>
                  )}
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {service.features.length > 4 && (
                    <p className="text-gray-400 text-xs mt-2">
                      +{service.features.length - 4} more features
                    </p>
                  )}
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 text-sm">
                        <Target className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {service.tags.slice(0, 5).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-blue-900/50 text-blue-300 text-xs rounded-full border border-blue-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Service Details */}
                <div className="mb-4 space-y-2 text-sm text-gray-400">
                  {service.setupTime && (
                    <div className="flex justify-between">
                      <span>Setup Time:</span>
                      <span className="text-white">{service.setupTime}</span>
                    </div>
                  )}
                  {service.freeTier && (
                    <div className="flex justify-between">
                      <span>Free Tier:</span>
                      <span className="text-green-400">Available</span>
                    </div>
                  )}
                  {service.trialPeriod && (
                    <div className="flex justify-between">
                      <span>Trial Period:</span>
                      <span className="text-white">{service.trialPeriod}</span>
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <div className="flex gap-2">
                  <a
                    href="https://ziontechgroup.com/contact"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Get Started
                  </a>
                  <a
                    href="https://ziontechgroup.com"
                    className="px-4 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-white/10 transition-all duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No services found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're at the forefront of technological innovation, delivering cutting-edge solutions 
              that give your business a competitive advantage in the digital age.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Industry Leadership",
                description: "Pioneering the future with revolutionary AI, quantum computing, and blockchain solutions."
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "World-class engineers, scientists, and business strategists with decades of experience."
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "SOC2, ISO27001, and GDPR compliant with military-grade security protocols."
              },
              {
                icon: TrendingUp,
                title: "Proven Results",
                description: "Consistent delivery of 200-1000% ROI for our clients across all industries."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the future of technology with Zion Tech Group's revolutionary services. 
              Contact us today to discuss how we can accelerate your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Your Journey
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Icon components for categories
const Atom = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3"/>
    <path d="M12 1v6m0 6v6"/>
    <path d="M3 12h6m6 0h6"/>
  </svg>
);

const Leaf = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 3c5.5 2.5 5.5 10.5 0 13"/>
    <path d="M18 3c-5.5 2.5-5.5 10.5 0 13"/>
    <path d="M3 21l18-18"/>
  </svg>
);

const Heart = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);

const Car = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 16H9m11 0h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2h-1m-4 0H9m4 0V8a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v6"/>
    <circle cx="6" cy="16" r="2"/>
    <circle cx="18" cy="16" r="2"/>
  </svg>
);

const Glasses = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="6" cy="12" r="4"/>
    <circle cx="18" cy="12" r="4"/>
    <path d="M10 12l4 0"/>
  </svg>
);

const Dna = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2"/>
    <path d="M15 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2"/>
    <path d="M9 9h6"/>
    <path d="M9 15h6"/>
  </svg>
);

const Eye = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const Bot = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"/>
    <path d="M7 7h.01"/>
  </svg>
);

const Search = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8"/>
    <path d="m21 21-4.35-4.35"/>
  </svg>
);

export default ComprehensiveServicesShowcase2031;