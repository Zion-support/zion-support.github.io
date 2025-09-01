import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import {

  DollarSign, 
  Calendar, 
  TrendingUp, 
  CheckCircle, 
  X, 
  Info, 
  ArrowRight, 
  Star,
  Zap,
  Shield,
  Cloud,
  Bot,
  Database,
  Users,
  Globe,
  Lock,
  BarChart3,
  Target,
  Cpu,
  Workflow
} from 'lucide-react';

const ExpandedServicesPricing2027: React.FC = () => {

  const [selectedPlan, setSelectedPlan] = useState('starter');
  const [selectedBilling, setSelectedBilling] = useState('monthly');
  const [selectedRegion, setSelectedRegion] = useState('global');

  const billingOptions = [
    { id: 'monthly', name: 'Monthly', discount: 0 },
    { id: 'annual', name: 'Annual', discount: 20 },
    { id: 'biennial', name: 'Biennial', discount: 30 }
  ];

  const regions = [
    { id: 'global', name: 'Global', currency: '$', multiplier: 1.0 },
    { id: 'north-america', name: 'North America', currency: '$', multiplier: 1.0 },
    { id: 'europe', name: 'Europe', currency: '€', multiplier: 0.85 },
    { id: 'asia-pacific', name: 'Asia Pacific', currency: '¥', multiplier: 0.75 },
    { id: 'latin-america', name: 'Latin America', currency: '$', multiplier: 0.90 }
  ];

  const serviceCategories = [
    {

      id: 'ai-solutions',
      name: 'AI Solutions',
      icon: <Bot className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      description: 'Advanced artificial intelligence and machine learning services'
    },
    {

      id: 'cloud-platforms',
      name: 'Cloud Platforms',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      description: 'Scalable cloud infrastructure and platform services'
    },
    {

      id: 'cybersecurity',
      name: 'Cybersecurity',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-orange-500',
      description: 'Comprehensive security solutions for enterprise protection'
    },
    {

      id: 'data-analytics',
      name: 'Data Analytics',
      icon: <Database className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      description: 'Business intelligence and data analysis tools'
    },
    {

      id: 'automation-tools',
      name: 'Automation Tools',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500',
      description: 'Intelligent automation and workflow optimization'
    },
    {

      id: 'consulting',
      name: 'Consulting Services',
      icon: <Users className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500',
      description: 'Expert consulting and strategic advisory services'
    }
  ];

  const pricingPlans = {

    starter: {

      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: { monthly: 99, annual: 79, biennial: 69 },
      features: [
        'AI Content Generator (100 credits/month)',
        'Basic Cloud Storage (50GB)',
        'Standard Security Features',
        'Basic Analytics Dashboard',
        'Email Support',
        '5 Automation Workflows'
      ],
      limitations: [
        'Limited API calls',
        'Basic reporting',
        'Standard SLA (99.5%)'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    professional: {

      name: 'Professional',
      description: 'Ideal for growing businesses and teams',
      price: { monthly: 299, annual: 239, biennial: 209 },
      features: [
        'AI Content Generator (500 credits/month)',
        'Advanced Cloud Platform',
        'Enhanced Security Suite',
        'Advanced Analytics & BI',
        'Priority Support',
        '25 Automation Workflows',
        'Custom Integrations',
        'Advanced Reporting'
      ],
      limitations: [
        'Limited custom AI models',
        'Standard compliance features'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    enterprise: {

      name: 'Enterprise',
      description: 'Comprehensive solution for large organizations',
      price: { monthly: 799, annual: 639, biennial: 559 },
      features: [
        'Unlimited AI Credits',
        'Enterprise Cloud Platform',
        'Advanced Threat Protection',
        'Custom AI Models',
        'Dedicated Support Team',
        'Unlimited Automation',
        'Custom Development',
        'Enterprise SLA (99.9%)',
        'Advanced Compliance',
        'White-label Solutions'
      ],
      limitations: [
        'Custom pricing for large deployments',
        'Annual commitment required'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    custom: {

      name: 'Custom',
      description: 'Tailored solutions for unique requirements',
      price: { monthly: 'Custom', annual: 'Custom', biennial: 'Custom' },
      features: [
        'Fully Customized Solutions',
        'Dedicated Infrastructure',
        'Custom AI Development',
        'On-premise Deployment',
        '24/7 Dedicated Support',
        'Custom SLA Agreements',
        'Industry-specific Compliance',
        'Training & Certification'
      ],
      limitations: [
        'Requires consultation',
        'Minimum contract terms apply'
      ],
      color: 'from-orange-500 to-red-500'
    }
  };

  const addOnServices = [
    {

      name: 'AI Model Training',
      description: 'Custom AI model development and training',
      price: { monthly: 199, annual: 159, biennial: 139 },
      category: 'ai-solutions'
    },
    {

      name: 'Advanced Security',
      description: 'Enhanced security features and compliance',
      price: { monthly: 149, annual: 119, biennial: 99 },
      category: 'cybersecurity'
    },
    {

      name: 'Data Migration',
      description: 'Professional data migration and setup',
      price: { monthly: 299, annual: 239, biennial: 209 },
      category: 'data-analytics'
    },
    {

      name: 'Custom Integration',
      description: 'Custom API integrations and connectors',
      price: { monthly: 399, annual: 319, biennial: 279 },
      category: 'automation-tools'
    },
    {

      name: 'Training & Support',
      description: 'Comprehensive training and support packages',
      price: { monthly: 99, annual: 79, biennial: 69 },
      category: 'consulting'
    }
  ];

  const calculatePrice = (basePrice: number, billing: string, region: string) => {

    const regionData = regions.find(r => r.id === region);
    const billingData = billingOptions.find(b => b.id === billing);
    
    if (!regionData || !billingData) return basePrice;
    
    const discountedPrice = basePrice * (1 - billingData.discount / 100);
    const regionalPrice = discountedPrice * regionData.multiplier;
    
    return Math.round(regionalPrice);
  };

  const getCurrencySymbol = (region: string) => {

    const regionData = regions.find(r => r.id === region);
    return regionData?.currency || '$';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Expanded Services Pricing 2027 - Zion Tech Group"
        description="Explore our comprehensive pricing for 2027 with expanded AI solutions, cloud platforms, cybersecurity, and more. Choose the perfect plan for your business needs."
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Calendar className="w-4 h-4 mr-2" />
              2027 Pricing
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Expanded Services Pricing 2027
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Discover our comprehensive pricing for 2027 with expanded AI solutions, 
              cloud platforms, cybersecurity, and more. Choose the perfect plan for your business.
            </p>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Billing Cycle Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">Billing Cycle</label>
                <select
                  value={selectedBilling}
                  onChange={(e) => setSelectedBilling(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200"
                >
                  {billingOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name} {option.discount > 0 && `(${option.discount}% off)`}
                    </option>
                  ))}
                </select>
              </div>

              {/* Region Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">Region</label>
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200"
                >
                  {regions.map((region) => (
                    <option key={region.id} value={region.id}>
                      {region.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Plan Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">Plan</label>
                <select
                  value={selectedPlan}
                  onChange={(e) => setSelectedPlan(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200"
                >
                  {Object.entries(pricingPlans).map(([id, plan]) => (
                    <option key={id} value={id}>
                      {plan.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive portfolio of technology services designed to meet every business need
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{category.name}</h3>
                <p className="text-gray-400 mb-6">{category.description}</p>
                
                <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-4 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing plans designed to scale with your business growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {Object.entries(pricingPlans).map(([id, plan]) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 ${

                  selectedPlan === id ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' : ''
                } hover:border-cyan-500/30 transition-all duration-300`}
              >
                {selectedPlan === id && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-cyan-500 text-white text-sm font-medium rounded-full">
                    Selected
                  </div>
                )}
                
                <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center text-white mb-6`}>
                  <Star className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="text-4xl font-bold text-white mb-2">
                    {typeof plan.price[selectedBilling as keyof typeof plan.price] === 'number' 
                      ? `${getCurrencySymbol(selectedRegion)}${calculatePrice(
                          plan.price[selectedBilling as keyof typeof plan.price] as number,
                          selectedBilling,
                          selectedRegion
                        )}`
                      : plan.price[selectedBilling as keyof typeof plan.price]
                    }
                    {typeof plan.price[selectedBilling as keyof typeof plan.price] === 'number' && (
                      <span className="text-lg text-gray-400">/{selectedBilling === 'monthly' ? 'mo' : selectedBilling === 'annual' ? 'mo' : 'mo'}</span>
                    )}
                  </div>
                  {selectedBilling !== 'monthly' && typeof plan.price[selectedBilling as keyof typeof plan.price] === 'number' && (
                    <p className="text-sm text-green-400">
                      Save {billingOptions.find(b => b.id === selectedBilling)?.discount}% with {billingOptions.find(b => b.id === selectedBilling)?.name} billing
                    </p>
                  )}
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Features:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {plan.limitations.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Limitations:</h4>
                    <ul className="space-y-3">
                      {plan.limitations.map((limitation, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-400">
                          <X className="w-5 h-5 text-red-400 mr-3 flex-shrink-0 mt-0.5" />
                          {limitation}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <button 
                  onClick={() => setSelectedPlan(id)}
                  className={`w-full px-6 py-3 font-semibold rounded-xl transition-all duration-300 ${

                    selectedPlan === id
                      ? 'bg-cyan-500 text-white hover:bg-cyan-600'
                      : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 shadow-lg shadow-cyan-500/25'
                  }`}
                >
                  {selectedPlan === id ? 'Current Plan' : 'Choose Plan'}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Add-on Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enhance your plan with additional services tailored to your specific needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {addOnServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-4">{service.name}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <div className="text-3xl font-bold text-white mb-2">
                    {getCurrencySymbol(selectedRegion)}{calculatePrice(
                      service.price[selectedBilling as keyof typeof service.price] as number,
                      selectedBilling,
                      selectedRegion
                    )}/{selectedBilling === 'monthly' ? 'mo' : selectedBilling === 'annual' ? 'mo' : 'mo'}
                  </div>
                  {selectedBilling !== 'monthly' && (
                    <p className="text-sm text-green-400">
                      Save {billingOptions.find(b => b.id === selectedBilling)?.discount}% with {billingOptions.find(b => b.id === selectedBilling)?.name} billing
                    </p>
                  )}
                </div>
                
                <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                  Add Service
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-slate-800/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose the perfect plan for your business and start transforming your operations 
              with cutting-edge technology solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl border border-slate-600 hover:bg-slate-700 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ExpandedServicesPricing2027;