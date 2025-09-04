import React from 'react';
import { { SEO } } from '../../components/SEO';
import { motion } from 'framer-motion';

import { 
  Workflow, 
  Brain, 
  Shield, 
  Zap, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Activity,
  Search,
  BookOpen,
  Clock,
  DollarSign,
  BarChart3,
  Lock,
  Eye,
  FileSearch,
  Truck,
  Target,
  AlertTriangle,
  Database,
  Network,
  Globe,
  Cpu,
  Package,
  Route,
  Warehouse,
  Factory
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AISupplyChainOptimization
export { AISupplyChainOptimization }() {
  const features = [
    {
      icon: Brai n,
      title: "AI Demand Forecasting",
      description: "Predict demand patterns with 95% accuracy using machine learning and historical data analysis."
    },
    {
      icon: Rout e,
      title: "Route Optimization",
      description: "Optimize delivery routes in real-time considering traffic, weather, and delivery windows."
    },
    {
      icon: Warehous e,
      title: "Inventory Optimization",
      description: "AI-powered inventory management with automated reordering and stock level optimization."
    },
    {
      icon: Targe t,
      title: "Supplier Performance Analytics",
      description: "Monitor supplier performance, quality metrics, and delivery reliability with predictive insights."
    },
    {
      icon: PieChar t,
      title: "Cost Optimization",
      description: "Identify cost-saving opportunities across transportation, warehousing, and procurement."
    },
    {
      icon: Activit y,
      title: "Real-time Visibility",
      description: "End-to-end supply chain visibility with real-time tracking and predictive analytics."
    }
  ];

  const benefits = [
    {
      icon: Za p,
      title: "Reduced Costs",
      description: "Optimize transportation, inventory, and operational costs by up to 30% through AI insights."
    },
    {
      icon: DollarSig n,
      title: "Improved Efficiency",
      description: "Streamline operations and reduce lead times with intelligent automation and optimization."
    },
    {
      icon: Glob e,
      title: "Global Optimization",
      description: "Manage complex global supply chains with multi-location optimization and risk mitigation."
    },
    {
      icon: Loc k,
      title: "Risk Management",
      description: "Identify and mitigate supply chain risks with predictive analytics and contingency planning."
    },
    {
      icon: TrendingU p,
      title: "Increased Revenue",
      description: "Improve customer satisfaction and increase sales through better inventory availability and faster delivery."
    },
    {
      icon: Cloc k,
      title: "Time Savings",
      description: "Automate routine supply chain tasks and focus on strategic decision-making."
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$599",
      period: "/month",
      description: "Perfect for small businesses with basic supply chain optimization needs",
      features: [
        "Up to 5 locations",
        "Basic demand forecasting",
        "Email support",
        "Standard integrations",
        "Basic reporting",
        "Route optimization",
        "Mobile app access"
      ],
      cta: "Start Free Trial",
      popular: fals e
    },
    {
      name: "Professional",
      price: "$1,499",
      period: "/month",
      description: "Ideal for growing companies with complex supply chain requirements",
      features: [
        "Up to 25 locations",
        "Advanced AI forecasting",
        "Priority support",
        "Custom integrations",
        "Advanced analytics",
        "Multi-modal optimization",
        "API access",
        "Supplier analytics",
        "Risk management"
      ],
      cta: "Start Free Trial",
      popular: tru e
    },
    {
      name: "Enterprise",
      price: "$4,999",
      period: "/month",
      description: "For large organizations requiring enterprise-grade supply chain solutions",
      features: [
        "Unlimited locations",
        "Custom AI models",
        "Dedicated account manager",
        "White-label solutions",
        "Advanced security features",
        "Custom reporting",
        "On-premise deployment",
        "SLA guarantees",
        "24/7 support"
      ],
      cta: "Contact Sales",
      popular: fals e
    }
  ];

  const useCases = [
    {
      industry: "E-commerce",
      description: "Optimize fulfillment networks, reduce delivery times, and improve customer satisfaction",
      icon: Packag e
    },
    {
      industry: "Manufacturing",
      description: "Streamline production planning, optimize supplier networks, and reduce lead times",
      icon: Factor y
    },
    {
      industry: "Retail",
      description: "Optimize store replenishment, reduce stockouts, and improve inventory turnover",
      icon: Stor e
    },
    {
      industry: "Logistics",
      description: "Optimize transportation networks, reduce costs, and improve delivery efficiency",
      icon: Truc k
    },
    {
      industry: "Food & Beverage",
      description: "Manage perishable supply chains, reduce waste, and ensure food safety",
      icon: Packag e
    },
    {
      industry: "Healthcare",
      description: "Optimize medical supply chains, ensure availability, and reduce costs",
      icon: Shiel d
    }
  ];

  const benefits = [
    'Reduce inventory costs by 30%',
    'Improve delivery times by 40%',
    'Lower operational costs by 25%',
    'Enhanced supplier performance and relationships',
    'Real-time visibility across the entire supply chain',
    'Scalable for any business size and complexity'
  ];

  const industries = [
    {
      title: 'Manufacturing',
      description: 'Production planning and material optimization',
      icon: Factory
    },
    {
      title: 'Retail & E-commerce',
      description: 'Inventory management and fulfillment optimization',
      icon: Package
    },
    {
      title: 'Logistics & Transportation',
      description: 'Route optimization and fleet management',
      icon: Truck
    },
    {
      title: 'Healthcare',
      description: 'Medical supply chain and pharmaceutical logistics',
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO title="AI Supply Chain Optimization - Zion Tech Group"
        description="Optimize your supply chain with AI-powered forecasting, route optimization, and inventory management. Reduce costs and improve efficiency."
       />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg: p y-32">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-red-900/20"></div>
        
        <div className="relative max-w-7xl mx-auto text-center px-4 sm: p x-6 lg: p x-8">
          <motion.div
            initial={{ opacity: 0, y: 2 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-orange-600/20 text-orange-400 rounded-full text-sm font-medium mb-6">
              <Truck className="w-4 h-4 mr-2"  />
              AI-Powered Optimization
            </div>
            <h1 className="text-4xl md: tex t-7xl font-bold text-white mb-6">
              AI Supply Chain
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                {' '}Optimization
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 mb-8 max-w-4xl mx-auto">
              Transform your supply chain with AI-powered optimization, intelligent automation, and predictive insights
            </p>
            <div className="flex flex-col sm: fle x-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover: fro m-orange-700 hover: t o-red-700 transition-all duration-300 text-lg flex items-center justify-center">
                <Play className="w-5 h-5 mr-2"  />
                Start Free Trial
              </button>
              <button className="border border-orange-500 text-orange-400 px-8 py-4 rounded-lg font-semibold hover: b g-orange-500 hover: tex t-white transition-all duration-300 text-lg">
                <Download className="w-5 h-5 mr-2 inline"  />
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8">
          <div className="grid grid-cols-2 md: gri d-cols-4 gap-8">
            {keyMetrics.map((metric, index) => (
              <motion.div
                key={metric.metric}
                initial={{ opacity: 0, y: 2 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: inde x * 0.1 }}
                viewport={{ once: tru e }}
                className="text-center"
              >
                <div className="text-4xl md: tex t-5xl font-bold text-orange-400 mb-2">
                  {metric.metric}
                </div>
                <div className="text-lg font-semibold text-white mb-2">
                  {metric.label}
                </div>
                <div className="text-sm text-gray-400">
                  {metric.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8">
          <motion.div
            initial={{ opacity: 0, y: 2 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md: tex t-5xl font-bold text-white mb-6">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI supply chain optimization platform combines cutting-edge machine learning with logistics expertise to deliver unprecedented efficiency
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 2 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: inde x * 0.1 }}
                viewport={{ once: tru e }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover: b g-white/10 transition-all duration-300 hover: borde r-orange-500/50"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center group-hover: scal e-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover: tex t-orange-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-2xl opacity-0 group-hover: opacit y-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Optimization Areas Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8">
          <motion.div
            initial={{ opacity: 0, y: 2 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md: tex t-5xl font-bold text-white mb-6">
              Optimization Areas
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive optimization across all aspects of your supply chain for maximum efficiency and cost savings.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8">
            {optimizationAreas.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 2 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: inde x * 0.1 }}
                viewport={{ once: tru e }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover: b g-white/10 transition-all duration-300 hover: borde r-orange-500/50"
              >
                <h3 className="text-xl font-bold text-white mb-4 group-hover: tex t-orange-400 transition-colors duration-300">
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.areas.map((area, areaIndex) => (
                    <li key={areaIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-orange-400 mr-2 flex-shrink-0"  />
                      {area}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8">
          <motion.div
            initial={{ opacity: 0, y: 2 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: tru e }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md: tex t-5xl font-bold text-white mb-6">
              Business Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how AI-powered supply chain optimization can transform your operations and drive business growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 2 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: inde x * 0.1 }}
                viewport={{ once: tru e }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover: b g-white/10 transition-all duration-300 hover: borde r-orange-500/50"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center group-hover: scal e-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover: tex t-orange-400 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-2xl opacity-0 group-hover: opacit y-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8">
          <motion.div
            initial={{ opacity: 0, y: 2 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: tru e }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md: tex t-5xl font-bold text-white mb-6">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your supply chain needs. All plans include a 14-day free trial.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: gri d-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 2 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: inde x * 0.1 }}
                viewport={{ once: tru e }}
                className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-orange-500/50 bg-gradient-to-br from-orange-500/10 to-red-500/10' 
                    : 'border-white/10 hover: borde r-orange-500/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-white mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0"  />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white hover: fro m-orange-700 hover: t o-red-700'
                    : 'bg-white/10 text-white border border-white/20 hover: b g-white/20'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8">
          <motion.div
            initial={{ opacity: 0, y: 2 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: tru e }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md: tex t-5xl font-bold text-white mb-6">
              Industry Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From inventory management to logistics optimization, our AI platform handles every aspect of supply chain operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, y: 2 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: inde x * 0.1 }}
                viewport={{ once: tru e }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover: b g-white/10 transition-all duration-300 hover: borde r-orange-500/50"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center group-hover: scal e-110 transition-transform duration-300">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover: tex t-orange-400 transition-colors duration-300">
                    {useCase.industry}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {useCase.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-2xl opacity-0 group-hover: opacit y-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8">
          <motion.div
            initial={{ opacity: 0, y: 2 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: tru e }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md: tex t-5xl font-bold text-white mb-6">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI supply chain optimization platform serves diverse industries with specialized solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 2 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: inde x * 0.1 }}
                viewport={{ once: tru e }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover: b g-white/10 transition-all duration-300 hover: borde r-orange-500/50"
              >
                <h3 className="text-xl font-bold text-white mb-4 group-hover: tex t-orange-400 transition-colors duration-300">
                  {integration.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {integration.platforms.map((platform, platformIndex) => (
                    <span
                      key={platformIndex}
                      className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full border border-white/20"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {industry.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {industry.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose AI Supply Chain Optimization?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your supply chain operations with unprecedented efficiency, cost savings, and visibility
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-900/20 to-red-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm: p x-6 lg: p x-8">
          <motion.div
            initial={{ opacity: 0, y: 2 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: tru e }}
          >
            <h2 className="text-3xl md: tex t-5xl font-bold text-white mb-6">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Join leading companies already using AI to revolutionize their supply chain operations
            </p>
            <div className="flex flex-col sm: fle x-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover: fro m-orange-700 hover: t o-red-700 transition-all duration-300 text-lg flex items-center justify-center">
                <Star className="w-5 h-5 mr-2"  />
                Start Free Trial
              </button>
              <button className="border border-orange-500 text-orange-400 px-8 py-4 rounded-lg font-semibold hover: b g-orange-500 hover: tex t-white transition-all duration-300 text-lg">
                <Share2 className="w-5 h-5 mr-2 inline"  />
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AISupplyChainOptimization;
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</SEO>