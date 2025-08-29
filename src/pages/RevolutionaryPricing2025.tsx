import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Star, 
  Zap, 
  Shield, 
  TrendingUp, 
  Brain, 
  Server, 
  Globe, 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  DollarSign,
  CreditCard,
  Wallet,
  Coins,
  PiggyBank,
  Calculator,
  BarChart3,
  Target,
  Award,
  Users,
  Clock,
  Calendar,
  Check,
  X,
  Crown,
  Sparkles,
  Flame,
  Thunder,
  Lightning,
  Cpu,
  Heart,
  Lock,
  Rocket
} from 'lucide-react';
import { REVOLUTIONARY_SERVICES_2025, getRevolutionaryServicesByCategory, getRevolutionaryServicesByInnovationLevel } from '@/data/revolutionaryServices2025';
import { SEO } from '@/components/SEO';

const RevolutionaryPricing2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedInnovationLevel, setSelectedInnovationLevel] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  const categories = ['all', ...Array.from(new Set(REVOLUTIONARY_SERVICES_2025.map(s => s.category)))];
  const innovationLevels = ['all', 'Revolutionary', 'Advanced'];

  const filteredServices = useMemo(() => {
    let filtered = REVOLUTIONARY_SERVICES_2025;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    if (selectedInnovationLevel !== 'all') {
      filtered = filtered.filter(service => service.innovationLevel === selectedInnovationLevel);
    }

    return filtered;
  }, [selectedCategory, selectedInnovationLevel]);

  const formatPrice = (price: number) => {
    if (price >= 1000) {
      return `$${(price / 1000).toFixed(0)}k`;
    }
    return `$${price}`;
  };

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'AI & Quantum Computing': <Brain className="w-5 h-5" />,
      'Cybersecurity': <Shield className="w-5 h-5" />,
      'AI Sales & Marketing': <TrendingUp className="w-5 h-5" />,
      'IoT & Edge Computing': <Cpu className="w-5 h-5" />,
      'Healthcare AI': <Heart className="w-5 h-5" />,
      'Blockchain & AI': <Lock className="w-5 h-5" />,
      'Sustainability & Green Tech': <Globe className="w-5 h-5" />,
      'Autonomous Systems': <Rocket className="w-5 h-5" />,
      'Legal Tech': <Shield className="w-5 h-5" />
    };
    return iconMap[category] || <Zap className="w-5 h-5" />;
  };

  const getInnovationLevelIcon = (level: string) => {
    switch (level) {
      case 'Revolutionary':
        return <Crown className="w-5 h-5 text-yellow-400" />;
      case 'Advanced':
        return <Star className="w-5 h-5 text-blue-400" />;
      default:
        return <Zap className="w-5 h-5 text-slate-400" />;
    }
  };

  const pricingTiers = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: 2999,
      features: [
        'Basic AI implementation',
        'Standard integrations',
        'Email support',
        'Community forum access',
        'Basic analytics'
      ],
      color: 'from-cyan-400 to-blue-500',
      popular: false
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses and teams',
      price: 9999,
      features: [
        'Advanced AI features',
        'Priority support',
        'Custom integrations',
        'API access',
        'Advanced analytics',
        'Training & onboarding',
        'Performance optimization'
      ],
      color: 'from-purple-400 to-cyan-500',
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with complex needs',
      price: 29999,
      features: [
        'Custom AI solutions',
        '24/7 dedicated support',
        'White-label options',
        'Advanced security',
        'SLA guarantees',
        'Dedicated account manager',
        'Custom development',
        'On-premise deployment'
      ],
      color: 'from-blue-400 to-purple-500',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO 
        title="Revolutionary Services Pricing 2025 - Zion Tech Group" 
        description="Comprehensive pricing for our revolutionary AI, IT, and Micro SaaS services. Transparent pricing with flexible plans for every business size."
      />

      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Revolutionary Pricing 2025
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 mb-8 leading-relaxed">
              Transparent, competitive pricing for cutting-edge AI, IT, and Micro SaaS solutions that transform your business.
            </p>
            
            {/* Pricing Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">10+</div>
                <div className="text-sm text-slate-400">Service Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">$3k-$50k</div>
                <div className="text-sm text-slate-400">Price Range</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">200-1000%</div>
                <div className="text-sm text-slate-400">ROI Potential</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">24/7</div>
                <div className="text-sm text-slate-400">Support Available</div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-slate-800/50 backdrop-blur border border-cyan-400/20 rounded-2xl p-6 max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href="tel:+13024640950" className="text-cyan-300 hover:text-cyan-200">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-300 hover:text-cyan-200">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span className="text-slate-300">364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Standard Pricing Tiers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Flexible Pricing Plans</h2>
            <p className="text-xl text-slate-300">Choose the plan that fits your business needs and budget</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-slate-800/60 backdrop-blur border rounded-2xl p-8 ${
                  tier.popular 
                    ? 'border-cyan-400/50 shadow-2xl shadow-cyan-400/20' 
                    : 'border-slate-700/50'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-slate-400 mb-6">{tier.description}</p>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-white">{formatPrice(tier.price)}</span>
                    <span className="text-slate-400">/month</span>
                  </div>
                  <p className="text-sm text-slate-400">Billed annually</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/request-quote"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all ${
                    tier.popular
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:opacity-90'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 border-b border-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex flex-wrap gap-4 justify-center">
              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-cyan-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-slate-800 border border-cyan-400/20 rounded-lg px-3 py-2 text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Innovation Level Filter */}
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-cyan-400" />
                <select
                  value={selectedInnovationLevel}
                  onChange={(e) => setSelectedInnovationLevel(e.target.value)}
                  className="bg-slate-800 border border-cyan-400/20 rounded-lg px-3 py-2 text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
                >
                  {innovationLevels.map(level => (
                    <option key={level} value={level}>
                      {level === 'all' ? 'All Levels' : level}
                    </option>
                  ))}
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-cyan-400" />
                <div className="flex bg-slate-800 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                      viewMode === 'grid' 
                        ? 'bg-cyan-400 text-white' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Grid
                  </button>
                  <button
                    onClick={() => setViewMode('table')}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                      viewMode === 'table' 
                        ? 'bg-cyan-400 text-white' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Table
                  </button>
                </div>
              </div>
            </div>

            <div className="text-center text-sm text-slate-400">
              Showing {filteredServices.length} revolutionary services
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid/Table View */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Revolutionary Services Pricing</h2>
            <p className="text-xl text-slate-300">Detailed pricing for all our cutting-edge solutions</p>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group bg-slate-800/60 backdrop-blur border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 rounded-2xl p-6 hover:scale-105"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                        {getCategoryIcon(service.category)}
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-wide text-cyan-300/70">{service.category}</div>
                        <div className="text-xs text-slate-400">{service.subcategory}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {getInnovationLevelIcon(service.innovationLevel)}
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        service.innovationLevel === 'Revolutionary' 
                          ? 'bg-yellow-400/20 text-yellow-400' 
                          : 'bg-blue-400/20 text-blue-400'
                      }`}>
                        {service.innovationLevel}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Pricing Details */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Price:</span>
                      <span className="text-2xl font-bold text-cyan-400">{formatPrice(service.price)}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Billing:</span>
                      <span className="text-slate-300 capitalize">{service.pricingModel}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">ROI:</span>
                      <span className="text-green-400 font-semibold">{service.roi}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Delivery:</span>
                      <span className="text-slate-300">{service.estimatedDelivery}</span>
                    </div>
                  </div>

                  {/* Features Preview */}
                  <div className="mb-4">
                    <div className="text-xs text-slate-400 mb-2">Key Features:</div>
                    <div className="flex flex-wrap gap-1">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <span key={featureIndex} className="text-xs px-2 py-1 bg-slate-700/50 rounded-full text-slate-300">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Market Info */}
                  <div className="text-xs text-slate-400 mb-4">
                    Market Price: {service.marketPrice}
                  </div>

                  <div className="flex items-center justify-between">
                    <Link
                      to={`/services/${service.id}`}
                      className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      to="/request-quote"
                      className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
                    >
                      Get Quote
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full bg-slate-800/40 backdrop-blur rounded-xl overflow-hidden">
                <thead className="bg-slate-700/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">Service</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">Price</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">ROI</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">Delivery</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/50">
                  {filteredServices.map((service, index) => (
                    <tr key={service.id} className="hover:bg-slate-700/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                            {getCategoryIcon(service.category)}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-white">{service.title}</div>
                            <div className="text-xs text-slate-400">{service.description.substring(0, 60)}...</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-slate-300">{service.category}</div>
                        <div className="text-xs text-slate-400">{service.subcategory}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-lg font-semibold text-cyan-400">{formatPrice(service.price)}</div>
                        <div className="text-xs text-slate-400">per {service.pricingModel}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-medium text-green-400">{service.roi}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-slate-300">{service.estimatedDelivery}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Link
                            to={`/services/${service.id}`}
                            className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                          >
                            Details
                          </Link>
                          <Link
                            to="/request-quote"
                            className="px-3 py-1 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs font-medium rounded hover:opacity-90 transition-opacity"
                          >
                            Quote
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Our revolutionary services are designed to give you a competitive edge. 
              Get a custom quote tailored to your specific needs and budget.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Get Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
              <a
                href="https://ziontechgroup.com/services"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 rounded-xl border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 transition-colors"
              >
                Explore All Services
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">
                  +1 302 464 0950
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                  kleber@ziontechgroup.com
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Visit Our Site</h3>
                <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
                  ziontechgroup.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RevolutionaryPricing2025;