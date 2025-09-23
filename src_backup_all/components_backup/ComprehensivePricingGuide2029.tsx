import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check,
  Star,
  Zap,
  Shield,
  Users,
  Globe,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ArrowRight,
  Brain,
  Code,
  BarChart3,
  Target,
  Calendar,
  Dna,
  Lock,
  Server,
  Monitor,
  CheckCircle,
  Award,
  Clock,
  DollarSign,
  TrendingUp,
  Atom,
  Rocket,
  Microscope,
  Cpu,
  Database,
  Cloud,
  Smartphone,
  Key,
  Eye,
  Network,
  FileText,
  Search,
  Filter,
  SortAsc,
  SortDesc
} from 'lucide-react';
import { innovativeServices2029, serviceCategories2029, getServicesByCategory2029 } from '../data/innovativeServices2029';

const pricingTiers = [
  {
    name: 'Starter',
    price: '$199',
    description: 'Perfect for small businesses and startups',
    features: ['Basic AI features', 'Email support', 'Standard integrations', 'Basic analytics'],
    color: 'from-green-500 to-emerald-500',
    popular: false
  },
  {
    name: 'Professional',
    price: '$599',
    description: 'Ideal for growing businesses',
    features: ['Advanced AI capabilities', 'Priority support', 'Advanced integrations', 'Custom workflows', 'Performance analytics'],
    color: 'from-blue-500 to-cyan-500',
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$1,999',
    description: 'For large organizations',
    features: ['Full AI suite', '24/7 dedicated support', 'Custom development', 'Advanced security', 'SLA guarantees', 'On-premise options'],
    color: 'from-purple-500 to-pink-500',
    popular: false
  },
  {
    name: 'Quantum',
    price: '$4,999',
    description: 'Cutting-edge quantum solutions',
    features: ['Quantum computing access', 'AI research collaboration', 'Custom algorithms', 'Dedicated infrastructure', 'White-label options'],
    color: 'from-indigo-500 to-purple-500',
    popular: false
  }
];

export const ComprehensivePricingGuide2029: React.FC = (): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'price' | 'aiScore' | 'rating' | 'name'>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPricingTier, setSelectedPricingTier] = useState<string>('Professional');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('comprehensive-pricing-2029');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const filteredServices = selectedCategory === 'All' 
    ? innovativeServices2029 
    : getServicesByCategory2029(selectedCategory);

  const sortedServices = [...filteredServices].sort((a, b) => {
    let aValue: any, bValue: any;
    
    switch (sortBy) {
      case 'price':
        aValue = parseInt(a.price.replace(/[^0-9]/g, ''));
        bValue = parseInt(b.price.replace(/[^0-9]/g, ''));
        break;
      case 'aiScore':
        aValue = a.aiScore;
        bValue = b.aiScore;
        break;
      case 'rating':
        aValue = a.rating;
        bValue = b.rating;
        break;
      case 'name':
        aValue = a.name.toLowerCase();
        bValue = b.name.toLowerCase();
        break;
      default:
        aValue = a.name.toLowerCase();
        bValue = b.name.toLowerCase();
    }

    if (sortOrder === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  const getPriceColor = (price: string) => {
    const priceNum = parseInt(price.replace(/[^0-9]/g, ''));
    if (priceNum < 500) return 'text-green-600';
    if (priceNum < 1000) return 'text-blue-600';
    if (priceNum < 3000) return 'text-orange-600';
    return 'text-purple-600';
  };

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      'AI Development': Code,
      'AI Customer Service': Users,
      'AI Finance': BarChart3,
      'AI Marketing': Target,
      'AI Project Management': Calendar,
      'AI HR': Users,
      'AI Research': Microscope,
      'AI Operations': Server,
      'AI Security': Shield,
      'AI Healthcare': Dna,
      'Cybersecurity': Shield,
      'IT Support': Monitor,
      'Compliance': CheckCircle,
      'Web Security': Lock,
      'Quantum Finance': TrendingUp,
      'Quantum AI': Atom
    };
    return iconMap[category] || Globe;
  };

  return (
    <section id="comprehensive-pricing-2029" className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-zion-purple/20 to-zion-cyan/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Comprehensive Pricing Guide 2029
            </span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Transparent Pricing for All Our AI & IT Services
          </h2>
          <p className="text-xl text-zion-gray-light max-w-4xl mx-auto leading-relaxed">
            Choose the perfect plan for your business needs. From affordable micro SAAS solutions to enterprise-grade AI platforms, 
            we offer flexible pricing options designed to scale with your growth.
          </p>

          {/* Contact Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 backdrop-blur-sm rounded-2xl p-6 border border-zion-cyan/30"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-white">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-zion-cyan" />
                <span className="font-semibold">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-zion-cyan" />
                <span className="font-semibold">{contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-zion-cyan" />
                <span className="font-semibold">{contactInfo.address}</span>
              </div>
            </div>
            <div className="mt-4 text-center">
              <a 
                href="https://ziontechgroup.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-zion-cyan hover:text-zion-purple transition-colors font-semibold"
              >
                Visit Our Website <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Pricing Tiers Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Choose Your Plan</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 hover:scale-105 ${
                  tier.popular 
                    ? 'border-zion-cyan/50 shadow-2xl shadow-zion-cyan/20' 
                    : 'border-zion-cyan/20 hover:border-zion-cyan/40'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-white mb-2">{tier.name}</h4>
                  <div className="text-3xl font-bold text-zion-cyan mb-2">{tier.price}</div>
                  <p className="text-zion-gray-light text-sm">{tier.description}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-zion-gray-light">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setSelectedPricingTier(tier.name)}
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:from-zion-purple hover:to-zion-cyan'
                      : 'bg-white/10 text-zion-cyan border border-zion-cyan/30 hover:bg-white/20'
                  }`}
                >
                  {tier.popular ? 'Get Started' : 'Learn More'}
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Filter and Sort */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {serviceCategories2029.map((category) => {
                const Icon = getCategoryIcon(category);
                const isSelected = selectedCategory === category;
                
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      isSelected
                        ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg'
                        : 'bg-white/10 backdrop-blur-sm text-zion-gray-light hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {category}
                  </button>
                );
              })}
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-4">
              <label className="text-white font-medium">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3 py-2 bg-white/10 backdrop-blur-sm border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
              >
                <option value="name">Name</option>
                <option value="price">Price</option>
                <option value="aiScore">AI Score</option>
                <option value="rating">Rating</option>
              </select>
              <button
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                className="p-2 bg-white/10 backdrop-blur-sm border border-zion-cyan/30 rounded-lg text-zion-cyan hover:bg-white/20 transition-colors"
              >
                {sortOrder === 'asc' ? <SortAsc className="w-4 h-4" /> : <SortDesc className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {sortedServices.map((service, index) => {
            const Icon = getCategoryIcon(service.category);
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="group relative"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-6 h-full transition-all duration-300 hover:bg-white/10 hover:border-zion-cyan/40 hover:shadow-2xl hover:shadow-zion-cyan/20">
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-zion-cyan to-zion-purple">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-zion-cyan transition-colors">
                          {service.name}
                        </h3>
                        <span className="text-sm text-zion-gray-light">{service.category}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="text-white font-semibold">{service.rating}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-zion-gray-light mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Price and AI Score */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`text-2xl font-bold ${getPriceColor(service.price)}`}>
                      {service.price}
                    </div>
                    <div className="flex items-center gap-2">
                      <Brain className="w-5 h-5 text-zion-cyan" />
                      <span className="text-white font-semibold">AI Score: {service.aiScore}</span>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-zion-gray-light">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Benefits:</h4>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-zion-gray-light">
                          <Zap className="w-4 h-4 text-yellow-400" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-3">
                    <a
                      href={service.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:from-zion-purple hover:to-zion-cyan transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </a>
                    
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="w-full px-4 py-2 bg-white/10 backdrop-blur-sm border border-zion-cyan/30 text-zion-cyan rounded-lg font-medium hover:bg-white/20 hover:border-zion-cyan/50 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      Contact Sales
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 backdrop-blur-sm rounded-2xl p-8 border border-zion-cyan/30">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-xl text-zion-gray-light mb-8 max-w-3xl mx-auto">
              Our team of experts is ready to help you choose the perfect solution and get you up and running quickly. 
              Contact us today for a personalized consultation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`tel:${contactInfo.phone}`}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-bold text-lg hover:from-zion-purple hover:to-zion-cyan transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              
              <a
                href={`mailto:${contactInfo.email}`}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-zion-cyan/30 text-zion-cyan rounded-xl font-bold text-lg hover:bg-white/20 hover:border-zion-cyan/50 transition-all duration-300 flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Award className="w-12 h-12 text-zion-cyan mb-3" />
                <h4 className="text-white font-semibold mb-2">Proven Track Record</h4>
                <p className="text-zion-gray-light text-sm">500+ successful implementations</p>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="w-12 h-12 text-zion-cyan mb-3" />
                <h4 className="text-white font-semibold mb-2">Fast Implementation</h4>
                <p className="text-zion-gray-light text-sm">Get started in as little as 24 hours</p>
              </div>
              <div className="flex flex-col items-center">
                <Shield className="w-12 h-12 text-zion-cyan mb-3" />
                <h4 className="text-white font-semibold mb-2">Enterprise Security</h4>
                <p className="text-zion-gray-light text-sm">Bank-level security and compliance</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComprehensivePricingGuide2029;