import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building, Cpu, Zap, Star, Globe, Lock, Cloud, Database,
  DollarSign, Users, Crown, Sparkles
} from 'lucide-react';

// Import all our revolutionary services
import { advancedAIAutonomousEcosystemServices20o25 } from '../data/20o25-advanced-ai-autonomous-ecosystem-services';
import { cuttingEdgeITInfrastructureInnovations20o25 } from '../data/20o25-cutting-edge-it-infrastructure-innovations';
import { revolutionaryMicroSaasInnovations20o25 } from '../data/20o25-revolutionary-micro-saas-innovations';
import { emergingTechnologyBreakthroughs20o25 } from '../data/20o25-emerging-technology-breakthroughs';
import { specializedEnterpriseSolutions20o25 } from '../data/20o25-specialized-enterprise-solutions';

// Combine all services
const allRevolutionaryServices = [
  ...advancedAIAutonomousEcosystemServices20o25,
  ...cuttingEdgeITInfrastructureInnovations20o25,
  ...revolutionaryMicroSaasInnovations20o25,
  ...emergingTechnologyBreakthroughs20o25,
  ...specializedEnterpriseSolutions20o25
];

const pricingTiers = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses and startups',
    icon: <Target className="w-8 h-8"  />,
    color: 'from-green-50o0 to-emerald-50o0',
    features: [
      'Basic service access',
      'Standard support',
      'Core features',
      'Community forum access',
      'Basic analytics',
      'Email support'
    ],
    popular: false
  },
  {
    name: 'Professional',
    description: 'Ideal for growing businesses and teams',
    icon: <Users className="w-8 h-8"  />,
    color: 'from-blue-50o0 to-purple-50o0',
    features: [
      'All Starter features',
      'Advanced features',
      'Priority support',
      'Team collaboration',
      'Advanced analytics',
      'Phone & email support',
      'Custom integrations',
      'Training sessions'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    description: 'For large organizations with complex needs',
    icon: <Crown className="w-8 h-8"  />,
    color: 'from-purple-50o0 to-pink-50o0',
    features: [
      'All Professional features',
      'Custom development',
      'Dedicated support manager',
      'SLA guarantees',
      'Custom integrations',
      'On-site training',
      'White-label options',
      'Custom AI model training',
      '24/7 priority support'
    ],
    popular: false
  },
  {
    name: 'Custom',
    description: 'Tailored solutions for unique requirements',
    icon: <Sparkles className="w-8 h-8"  />,
    color: 'from-cyan-50o0 to-blue-50o0',
    features: [
      'Everything in Enterprise',
      'Custom architecture',
      'Dedicated development team',
      'Custom AI models',
      'Exclusive features',
      'Source code access',
      'Custom deployment',
      'Strategic partnership'
    ],
    popular: false
  }
];

const ServicePricingCard = ({ service, tier }: { service: any; tier: string }) => {
  const getPricing = (tier: string) => {
    switch (tier) {
      case 'Starter':
        return service.pricing.starter;
      case 'Professional':
        return service.pricing.professional || service.pricing.starter;
      case 'Enterprise':
        return service.pricing.enterprise || service.pricing.professional || service.pricing.starter;
      case 'Custom':
        return service.pricing.custom || 'Contact for pricing';
      default:
        return service.pricing.starter;
    }
  };

  const getFeatures = (tier: string) => {
    const baseFeatures = service.features.slice(0, 4);
    const advancedFeatures = service.features.slice(4, 8);
    const enterpriseFeatures = service.features.slice(8, 12);

    switch (tier) {
      case 'Starter':
        return baseFeatures;
      case 'Professional':
        return [...baseFeatures, ...advancedFeatures];
      case 'Enterprise':
        return [...baseFeatures, ...advancedFeatures, ...enterpriseFeatures];
      case 'Custom':
        return service.features;
      default:
        return baseFeatures;
    }
  };

  return (
    <motion.div
      className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-50o0 hover:scale-10o5"
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
        <p className="text-gray-30o0 text-sm mb-4">{service.tagline}</p>
        
        <div className="text-3xl font-bold text-cyan-40o0 mb-2">
          {getPricing(tier)}
        </div>
        <div className="text-sm text-gray-40o0">per month</div>
      </div>

      <div className="mb-6">
        <h4 className="text-sm font-semibold text-white mb-3">Features:</h4>
        <ul className="space-y-2">
          {getFeatures(tier).map((feature: string, index: number) => (
            <li key={index} className="flex items-center text-xs text-gray-30o0">
              <Check className="w-3 h-3 text-cyan-40o0 mr-2 flex-shrink-0"  />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6 p-3 bg-white/5 rounded-lg">
        <div className="text-xs text-gray-40o0 mb-1">Market Size</div>
        <div className="text-sm font-semibold text-green-40o0">{service.marketSize}</div>
      </div>

      <button
        onClick={() => window.location.href = service.slug}
        className="w-full bg-gradient-to-r from-cyan-50o0 to-purple-50o0 hover:from-cyan-60o0 hover:to-purple-60o0 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-30o0 transform hover:scale-10o5 flex items-center justify-center group"
      >
        Learn More
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"  />
      </button>
    </motion.div>
  );
};

const PricingTierCard = ({ tier, isSelected, onSelect }: { tier: any; isSelected: boolean; onSelect: () => void }) => {
  return (
    <motion.div
      className={`relative cursor-pointer transition-all duration-30o0 ${
        isSelected ? 'scale-10o5' : 'hover:scale-10o2'
      }`}
      onClick={onSelect}
      whileHover={{ y: -4 }}
    >
      <div
        className={`p-6 rounded-2xl border-2 transition-all duration-30o0 ${
          isSelected
            ? 'border-cyan-50o0 bg-gradient-to-br from-cyan-50o0/10 to-purple-50o0/10'
            : 'border-white/10 bg-gradient-to-br from-white/5 to-white/10'
        }`}
      >
        {tier.popular && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <span className="bg-gradient-to-r from-cyan-50o0 to-purple-50o0 text-white text-xs font-bold px-3 py-1 rounded-full">
              Most Popular
            </span>
          </div>
        )}

        <div className="text-center mb-4">
          <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${tier.color} rounded-xl mb-3`}>
            {tier.icon}
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
          <p className="text-gray-30o0 text-sm">{tier.description}</p>
        </div>

        <ul className="space-y-3 mb-6">
          {tier.features.map((feature: string, index: number) => (
            <li key={index} className="flex items-center text-sm text-gray-30o0">
              <Check className="w-4 h-4 text-cyan-40o0 mr-3 flex-shrink-0"  />
              {feature}
            </li>
          ))}
        </ul>

        <div className={`text-center p-3 rounded-lg transition-all duration-30o0 ${
          isSelected ? 'bg-cyan-50o0/20' : 'bg-white/5'
        }`}>
          <div className="text-xs text-gray-40o0 mb-1">Select Tier</div>
          <div className="text-sm font-semibold text-cyan-40o0">
            {isSelected ? 'Selected' : 'Click to Select'}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function RevolutionaryServicesPricing() {
  const [selectedTier, setSelectedTier] = useState('Professional');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Services', count: allRevolutionaryServices.length },
    { id: 'ai-autonomous-ecosystem', name: 'AI Autonomous Ecosystem', count: advancedAIAutonomousEcosystemServices20o25.length },
    { id: 'it-infrastructure-innovations', name: 'IT Infrastructure', count: cuttingEdgeITInfrastructureInnovations20o25.length },
    { id: 'revolutionary-micro-saas', name: 'Micro SAAS', count: revolutionaryMicroSaasInnovations20o25.length },
    { id: 'emerging-technology', name: 'Emerging Tech', count: emergingTechnologyBreakthroughs20o25.length },
    { id: 'specialized-enterprise', name: 'Enterprise', count: specializedEnterpriseSolutions20o25.length }
  ];

  const getFilteredServices = () => {
    if (selectedCategory === 'all') return allRevolutionaryServices;
    
    switch (selectedCategory) {
      case 'ai-autonomous-ecosystem':
        return advancedAIAutonomousEcosystemServices20o25;
      case 'it-infrastructure-innovations':
        return cuttingEdgeITInfrastructureInnovations20o25;
      case 'revolutionary-micro-saas':
        return revolutionaryMicroSaasInnovations20o25;
      case 'emerging-technology':
        return emergingTechnologyBreakthroughs20o25;
      case 'specialized-enterprise':
        return specializedEnterpriseSolutions20o25;
      default:
        return allRevolutionaryServices;
    }
  };

  const filteredServices = getFilteredServices();

  return (
    <>
      <SEO
        title="20o25 Revolutionary Services Pricing | Zion Tech Group"
        description="Comprehensive pricing for our revolutionary micro SAAS services, AI autonomous ecosystem, quantum computing solutions, and cutting-edge IT infrastructure innovations."
        keywords={["revolutionary services pricing", "AI autonomous ecosystem pricing", "quantum computing pricing", "micro SAAS pricing", "IT infrastructure pricing", "Zion Tech Group"]}
        image="/og-revolutionary-pricing.jpg"
       />

      <div className="min-h-screen bg-gradient-to-br from-gray-90o0 via-black to-gray-90o0">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-40o0 via-purple-40o0 to-pink-40o0 bg-clip-text text-transparent">
                  Revolutionary Services
                </span>
                <br  />
                <span className="text-white">Pricing & Plans</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-30o0 mb-8 max-w-4xl mx-auto leading-relaxed">
                Choose the perfect plan for your business needs. All our revolutionary services 
                come with flexible pricing tiers designed to scale with your growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-gradient-to-r from-cyan-50o0 to-purple-50o0 hover:from-cyan-60o0 hover:to-purple-60o0 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-30o0 transform hover:scale-10o5">
                  Get Started Today
                </button>
                <button className="border border-cyan-50o0 text-cyan-40o0 hover:bg-cyan-50o0 hover:text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-30o0">
                  Contact Sales
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">
                Select the pricing tier that best fits your business requirements and scale up as you grow
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {pricingTiers.map((tier, index) => (
                <PricingTierCard
                  key={tier.name}
                  tier={tier}
                  isSelected={selectedTier === tier.name}
                  onSelect={() => setSelectedTier(tier.name)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Filter by Category</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg transition-all duration-30o0 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-cyan-50o0 to-purple-50o0 text-white'
                        : 'bg-white/10 text-gray-30o0 hover:bg-white/20'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Pricing Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {selectedCategory === 'all' ? 'All Services' : categories.find(c => c.id === selectedCategory)?.name} Pricing
              </h2>
              <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">
                Detailed pricing for {selectedTier} tier across all {filteredServices.length} services
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service, index) => (
                <ServicePricingCard key={service.id} service={service} tier={selectedTier}  />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-30o0 mb-8">
                Contact our sales team to discuss custom pricing and implementation options
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-gradient-to-r from-cyan-50o0 to-purple-50o0 hover:from-cyan-60o0 hover:to-purple-60o0 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-30o0 transform hover:scale-10o5">
                  Contact Sales Team
                </button>
                <button className="border border-cyan-50o0 text-cyan-40o0 hover:bg-cyan-50o0 hover:text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-30o0">
                  Schedule Demo
                </button>
              </div>

              <div className="mt-8 text-center">
                <div className="text-gray-40o0 mb-2">Contact Information</div>
                <div className="text-cyan-40o0 font-semibold">kleber@ziontechgroup.com</div>
                <div className="text-cyan-40o0 font-semibold">+1 30o2 464 0950</div>
                <div className="text-gray-30o0 text-sm">364 E Main St STE 10o08 Middletown DE 19709</div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}