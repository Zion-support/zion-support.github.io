import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Check, 
  Star, 
  Zap, 
  Shield, 
  Brain, 
  Rocket, 
  Heart, 
  Cpu,
  TrendingUp,
  Users,
  Globe,
  Award
} from 'lucide-react';

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const contactInfo = {
    mobile: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    website: "https://ziontechgroup.com"
  };

  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for small businesses and startups",
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: [
        "Basic AI automation",
        "Standard integrations",
        "Email support",
        "Basic analytics",
        "5 user accounts"
      ],
      popular: false,
      icon: Zap,
      color: "from-blue-600 to-cyan-600"
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses and teams",
      monthlyPrice: 299,
      yearlyPrice: 2990,
      features: [
        "Advanced AI capabilities",
        "Priority integrations",
        "Phone & email support",
        "Advanced analytics",
        "Unlimited users",
        "Custom workflows",
        "API access"
      ],
      popular: true,
      icon: Star,
      color: "from-purple-600 to-indigo-600"
    },
    {
      name: "Enterprise",
      description: "For large organizations with complex needs",
      monthlyPrice: 799,
      yearlyPrice: 7990,
      features: [
        "Full AI suite",
        "Custom integrations",
        "24/7 dedicated support",
        "Enterprise analytics",
        "Unlimited everything",
        "Custom development",
        "SLA guarantees",
        "On-premise options"
      ],
      popular: false,
      icon: Award,
      color: "from-emerald-600 to-teal-600"
    }
  ];

  const serviceCategories = [
    {
      id: 'all',
      name: 'All Services',
      icon: Globe,
      count: 12
    },
    {
      id: 'ai-ml',
      name: 'AI & Machine Learning',
      icon: Brain,
      count: 3
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      icon: Shield,
      count: 2
    },
    {
      id: 'fintech',
      name: 'Fintech & Blockchain',
      icon: TrendingUp,
      count: 2
    },
    {
      id: 'healthcare',
      name: 'Healthcare & Biotech',
      icon: Heart,
      count: 1
    },
    {
      id: 'emerging-tech',
      name: 'Emerging Technology',
      icon: Rocket,
      count: 2
    },
    {
      id: 'it-infrastructure',
      name: 'IT Infrastructure',
      icon: Cpu,
      count: 1
    },
    {
      id: 'green-tech',
      name: 'Green Technology',
      icon: Zap,
      count: 1
    }
  ];

  const allServices = [
    // AI & Machine Learning
    {
      id: 'quantum-ai-optimization',
      name: 'Quantum AI Optimization Platform',
      category: 'ai-ml',
      description: 'Quantum-powered AI optimization for complex business problems',
      monthlyPrice: 299,
      yearlyPrice: 2990,
      features: [
        'Quantum annealing algorithms',
        'AI-driven optimization',
        'Real-time problem solving',
        'Multi-objective optimization',
        'Performance analytics',
        'Enterprise integration',
        'Custom algorithm development'
      ],
      marketPosition: 'First-to-market quantum AI optimization',
      competitors: ['D-Wave', 'IBM Quantum', 'Google Quantum AI'],
      competitiveAdvantage: 'Quantum computing integration with custom algorithms',
      icon: '⚛️',
      popular: true
    },
    {
      id: 'ai-autonomous-research-assistant',
      name: 'AI Autonomous Research Assistant',
      category: 'ai-ml',
      description: 'Fully autonomous research and analysis platform',
      monthlyPrice: 199,
      yearlyPrice: 1990,
      features: [
        'Autonomous data collection',
        'Real-time market monitoring',
        'Competitive intelligence',
        'Automated report generation',
        'Custom research workflows',
        'API integrations',
        'Custom data sources'
      ],
      marketPosition: 'Next-generation autonomous research platform',
      competitors: ['Crayon', 'Kompyte', 'Brandwatch'],
      competitiveAdvantage: 'Fully autonomous operation with custom workflows',
      icon: '🔍',
      popular: false
    },
    {
      id: 'ai-powered-cybersecurity-suite',
      name: 'AI-Powered Cybersecurity Suite',
      category: 'cybersecurity',
      description: 'Intelligent threat detection and response',
      monthlyPrice: 399,
      yearlyPrice: 3990,
      features: [
        'AI threat detection',
        'Behavioral analysis',
        'Automated incident response',
        'Threat intelligence',
        'Compliance reporting',
        'Enterprise integration',
        'Custom threat models'
      ],
      marketPosition: 'Enterprise-grade AI cybersecurity',
      competitors: ['CrowdStrike', 'SentinelOne', 'Darktrace'],
      competitiveAdvantage: 'AI-powered detection with autonomous response',
      icon: '🛡️',
      popular: true
    },
    {
      id: 'quantum-cryptography-platform',
      name: 'Quantum Cryptography Platform',
      category: 'cybersecurity',
      description: 'Unbreakable encryption using quantum mechanics',
      monthlyPrice: 1299,
      yearlyPrice: 12990,
      features: [
        'Quantum key distribution',
        'Quantum-resistant algorithms',
        'Real-time encryption',
        'Network security',
        'Compliance certification',
        'Hardware integration',
        'Custom protocols'
      ],
      marketPosition: 'Enterprise quantum cryptography solution',
      competitors: ['ID Quantique', 'Qrypt', 'Quantum Xchange'],
      competitiveAdvantage: 'Quantum hardware integration with custom protocols',
      icon: '🔐',
      popular: false
    },
    {
      id: 'ai-powered-trading-algorithm',
      name: 'AI-Powered Trading Algorithm Platform',
      category: 'fintech',
      description: 'Intelligent algorithmic trading with machine learning',
      monthlyPrice: 599,
      yearlyPrice: 5990,
      features: [
        'AI market analysis',
        'Automated trading execution',
        'Risk management',
        'Performance analytics',
        'Multi-asset support',
        'Exchange integrations',
        'Custom algorithms'
      ],
      marketPosition: 'Professional-grade AI trading platform',
      competitors: ['QuantConnect', 'Alpaca', 'Interactive Brokers'],
      competitiveAdvantage: 'Custom algorithms with exchange integrations',
      icon: '📈',
      popular: false
    },
    {
      id: 'blockchain-supply-chain-tracking',
      name: 'Blockchain Supply Chain Tracking',
      category: 'fintech',
      description: 'Transparent and secure supply chain verification',
      monthlyPrice: 149,
      yearlyPrice: 1490,
      features: [
        'Blockchain verification',
        'Real-time tracking',
        'Smart contracts',
        'Compliance reporting',
        'Supplier management',
        'IoT integration',
        'Custom networks'
      ],
      marketPosition: 'Enterprise blockchain supply chain solution',
      competitors: ['IBM Food Trust', 'VeChain', 'OriginTrail'],
      competitiveAdvantage: 'Custom blockchain networks with IoT integration',
      icon: '🔗',
      popular: false
    },
    {
      id: 'ai-medical-imaging-analysis',
      name: 'AI Medical Imaging Analysis Platform',
      category: 'healthcare',
      description: 'Advanced medical imaging with AI-powered diagnostics',
      monthlyPrice: 799,
      yearlyPrice: 7990,
      features: [
        'AI image analysis',
        'Multi-modality support',
        'Diagnostic assistance',
        'Report generation',
        'PACS integration',
        'FDA compliance',
        'Clinical validation'
      ],
      marketPosition: 'FDA-cleared AI medical imaging platform',
      competitors: ['Aidoc', 'Zebra Medical', 'Enlitic'],
      competitiveAdvantage: 'FDA compliance with clinical validation',
      icon: '🏥',
      popular: true
    },
    {
      id: 'space-tech-data-analytics',
      name: 'Space Technology Data Analytics Platform',
      category: 'emerging-tech',
      description: 'Advanced analytics for space technology and satellite data',
      monthlyPrice: 499,
      yearlyPrice: 4990,
      features: [
        'Satellite data processing',
        'Space weather monitoring',
        'Predictive analytics',
        'Custom algorithms',
        'API access',
        'Research partnerships',
        'Custom analytics'
      ],
      marketPosition: 'Leading space technology analytics platform',
      competitors: ['Planet Labs', 'Maxar', 'SpaceNet'],
      competitiveAdvantage: 'Satellite data integration with custom analytics',
      icon: '🚀',
      popular: false
    },
    {
      id: 'ai-powered-it-asset-management',
      name: 'AI-Powered IT Asset Management',
      category: 'it-infrastructure',
      description: 'Intelligent IT asset lifecycle management',
      monthlyPrice: 89,
      yearlyPrice: 890,
      features: [
        'Asset discovery and tracking',
        'Predictive maintenance',
        'Cost optimization',
        'Compliance management',
        'Integration capabilities',
        'Custom integrations',
        'Predictive models'
      ],
      marketPosition: 'Next-generation IT asset management',
      competitors: ['ServiceNow', 'BMC Helix', 'Ivanti'],
      competitiveAdvantage: 'Custom integrations with predictive models',
      icon: '💻',
      popular: false
    },
    {
      id: 'ai-energy-optimization-platform',
      name: 'AI Energy Optimization Platform',
      category: 'green-tech',
      description: 'Intelligent energy management and optimization',
      monthlyPrice: 179,
      yearlyPrice: 1790,
      features: [
        'Real-time energy monitoring',
        'AI optimization algorithms',
        'Predictive analytics',
        'Sustainability reporting',
        'Cost analysis',
        'IoT deployment',
        'Custom algorithms'
      ],
      marketPosition: 'Leading AI energy optimization platform',
      competitors: ['Verdigris', 'GridPoint', 'Enel X'],
      competitiveAdvantage: 'IoT deployment with custom algorithms',
      icon: '⚡',
      popular: true
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === selectedCategory);

  const getYearlyDiscount = (monthlyPrice: number) => {
    const yearlyTotal = monthlyPrice * 12;
    const yearlyPrice = yearlyTotal * 0.9; // 10% discount
    return Math.round(yearlyPrice);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
          >
            Transparent Pricing
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
          >
            Competitive pricing for cutting-edge AI, blockchain, quantum computing, and emerging technology solutions. 
            Choose the plan that fits your business needs and scale as you grow.
          </motion.p>
          
          {/* Billing Toggle */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                billingCycle === 'yearly' ? 'bg-zion-cyan' : 'bg-gray-600'
              }`}
            >
              <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-1'
              }`} />
            </button>
            <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
              Yearly
              <span className="ml-2 text-sm text-zion-cyan">(Save 10%)</span>
            </span>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="py-8 bg-black/30 border-y border-zion-cyan/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-zion-cyan mb-4">Need Custom Pricing?</h3>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-gray-300">
              <div className="flex items-center gap-2">
                <span className="text-zion-cyan">📱</span>
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-zion-cyan">✉️</span>
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-zion-cyan">📍</span>
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Choose Your Plan</h2>
            <p className="text-xl text-gray-300">Flexible pricing options for businesses of all sizes</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular 
                    ? 'border-zion-cyan/50 bg-zion-cyan/10' 
                    : 'border-zion-cyan/20 hover:border-zion-cyan/40'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-zion-cyan to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${plan.color} rounded-full mb-4`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <div className="text-center mb-8">
                  <div className="text-4xl font-bold text-zion-cyan mb-2">
                    ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                  </div>
                  <div className="text-gray-400">
                    {billingCycle === 'monthly' ? '/month' : '/year'}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-gray-300">
                      <Check className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-zion-cyan to-blue-600 text-white hover:from-zion-cyan/80 hover:to-blue-600/80'
                      : 'border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories Filter */}
      <section className="py-12 px-6 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Explore Our Services</h2>
            <p className="text-xl text-gray-300">Filter by category to find the perfect solution for your business</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-zion-cyan text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <category.icon className="w-5 h-5" />
                {category.name}
                <span className="text-sm opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="text-4xl">{service.icon}</div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-zion-cyan">
                      ${billingCycle === 'monthly' ? service.monthlyPrice : getYearlyDiscount(service.monthlyPrice)}
                    </div>
                    <div className="text-sm text-gray-400">
                      {billingCycle === 'monthly' ? '/month' : '/year'}
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-zion-cyan mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-gray-300">
                        <Check className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-zion-cyan mb-3">Market Position</h4>
                  <p className="text-gray-300 text-sm">{service.marketPosition}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-zion-cyan mb-3">Competitive Advantage</h4>
                  <p className="text-gray-300 text-sm">{service.competitiveAdvantage}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to={`/services/${service.id}`}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-zion-cyan to-blue-600 rounded-lg font-semibold text-white text-center hover:from-zion-cyan/80 hover:to-blue-600/80 transition-all duration-300"
                  >
                    Learn More
                  </Link>
                  <Link
                    to="/contact"
                    className="flex-1 px-6 py-3 border border-zion-cyan text-zion-cyan rounded-lg font-semibold text-center hover:bg-zion-cyan hover:text-white transition-all duration-300"
                  >
                    Get Quote
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-black/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our team to discuss your specific needs and get a customized quote for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-blue-600 rounded-lg font-semibold hover:from-zion-cyan/80 hover:to-blue-600/80 transition-all duration-300 transform hover:scale-105"
            >
              Schedule a Consultation
            </Link>
            <a
              href={`tel:${contactInfo.mobile}`}
              className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              Call Now
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p>All prices include setup, training, and ongoing support</p>
            <p>Custom enterprise solutions available upon request</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
