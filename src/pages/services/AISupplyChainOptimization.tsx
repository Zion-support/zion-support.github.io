import React from 'react';
import { SEO } from '../../components/SEO';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import {

  Truck,
  TrendingUp,
  BarChart3,
  Users,
  Zap,
  Globe,
  Lock,  Eye,
  Star,
  Cpu,
  Database,
  Search,
  Filter,
  Download,
  Share2,
  Play,
  ArrowRight,
  CheckCircle,
  Play,
  Star,
  DollarSign,
  Settings,
  BarChart3,
  Target,
  Clock,
  Shield,
  Rocket,
  Package,
  Route,
  Warehouse,
  Factory,
  Ship,
  Plane,
  Store} from 'lucide-react';

export default function AISupplyChainOptimization() {
  const features = [
    {

      icon: Brain,
      title: 'AI Demand Forecasting',
      description:'
        'Predict demand patterns with 95% accuracy using machine learning and historical data analysis.'},
    {

      icon: Route,
      title: 'Route Optimization',
      description:'
        'Optimize delivery routes in real-time considering traffic, weather, and delivery windows.'},
    {

      icon: Warehouse,
      title: 'Inventory Optimization',
      description:'
        'AI-powered inventory management with automated reordering and stock level optimization.'},
    {

      icon: Target,
      title: 'Supplier Performance Analytics',
      description:'
        'Monitor supplier performance, quality metrics, and delivery reliability with predictive insights.'},
    {

      icon: PieChart,
      title: 'Cost Optimization',
      description:'
        'Identify cost-saving opportunities across transportation, warehousing, and procurement.'},
    {

      icon: Activity,
      title: 'Real-time Visibility',
      description:'
        'End-to-end supply chain visibility with real-time tracking and predictive analytics.'},
  ];

  const benefits = [
    {

      icon: Zap,
      title: 'Reduced Costs',
      description:'
        'Optimize transportation, inventory, and operational costs by up to 30% through AI insights.'},
    {

      icon: DollarSign,
      title: 'Improved Efficiency',
      description:'
        'Streamline operations and reduce lead times with intelligent automation and optimization.'},
    {

      icon: Globe,
      title: 'Global Optimization',
      description:'
        'Manage complex global supply chains with multi-location optimization and risk mitigation.'},
    {

      icon: Lock,
      title: 'Risk Management',
      description:'
        'Identify and mitigate supply chain risks with predictive analytics and contingency planning.'},
    {

      icon: TrendingUp,
      title: 'Increased Revenue',
      description:'
        'Improve customer satisfaction and increase sales through better inventory availability and faster delivery.'},
    {

      icon: Clock,
      title: 'Time Savings',
      description:'
        'Automate routine supply chain tasks and focus on strategic decision-making.'},
  ];

  const pricingPlans = [
    {

      name: 'Starter',
      price: '$599',
      period: '/month',
      description:'
        'Perfect for small businesses with basic supply chain optimization needs',
      features: ['
        'Up to 5 locations',Basic demand forecasting',Email support',Standard integrations',Basic reporting',Route optimization',Mobile app access',
      ],
      cta: 'Start Free Trial',
      popular: false},
    {

      name: 'Professional',
      price: '$1,499',
      period: '/month',
      description:'
        'Ideal for growing companies with complex supply chain requirements',
      features: ['
        'Up to 25 locations',Advanced AI forecasting',Priority support',Custom integrations',Advanced analytics',Multi-modal optimization',API access',Supplier analytics',Risk management',
      ],
      cta: 'Start Free Trial',
      popular: true},
    {

      name: 'Enterprise',
      price: '$4,999',
      period: '/month',
      description:'
        'For large organizations requiring enterprise-grade supply chain solutions',
      features: ['
        'Unlimited locations',Custom AI models',Dedicated account manager',White-label solutions',Advanced security features',Custom reporting',On-premise deployment',SLA guarantees',24/7 support',
      ],
      cta: 'Contact Sales',
      popular: false},
  ];

  const useCases = [
    {

      industry: 'E-commerce',
      description:'
        'Optimize fulfillment networks, reduce delivery times, and improve customer satisfaction',
      icon: Package},
    {

      industry: 'Manufacturing',
      description:'
        'Streamline production planning, optimize supplier networks, and reduce lead times',
      icon: Factory},
    {

      industry: 'Retail',
      description:'
        'Optimize store replenishment, reduce stockouts, and improve inventory turnover',
      icon: Store},
    {

      industry: 'Logistics',
      description:'
        'Optimize transportation networks, reduce costs, and improve delivery efficiency',
      icon: Truck},
    {

      industry: 'Food & Beverage',
      description:'
        'Manage perishable supply chains, reduce waste, and ensure food safety',
      icon: Package},
    {

      industry: 'Healthcare',
      description:'
        'Optimize medical supply chains, ensure availability, and reduce costs',
      icon: Shield},
  ];

  const integrations = [
    {

      name: 'ERP Systems',
      platforms: ['SAP',Oracle',Microsoft Dynamics',NetSuite']},
    {

      name: 'WMS Systems',
      platforms: ['Manhattan Associates',HighJump',Softeon',JDA']},
    {

      name: 'Transportation',
      platforms: ['FedEx',UPS',DHL',TMS Systems']},
    {

      name: 'E-commerce',
      platforms: ['Shopify',WooCommerce',Magento',BigCommerce']},
    {

      name: 'Analytics',
      platforms: ['Tableau',Power BI',Google Analytics',Custom APIs']},
    {

      name: 'IoT & Sensors',
      platforms: ['
        'RFID',GPS Tracking',Temperature Sensors',IoT Platforms',
      ]},
  ];

  const useCases = [
    {

      metric: '30%',
      label: 'Cost Reduction',
      description: 'Average reduction in supply chain costs'},
    {

      metric: '50%',
      label: 'Lead Time Reduction',
      description: 'Faster delivery and reduced lead times'},
    {

      metric: '95%',
      label: 'Forecast Accuracy',
      description: 'AI-powered demand prediction accuracy'},
    {

      metric: '40%',
      label: 'Inventory Optimization',
      description: 'Reduction in excess inventory levels'},
  ];

  const optimizationAreas = [
    {

      category: 'Demand Planning',
      areas: ['
        'Forecasting',Seasonal Analysis',Trend Prediction',Demand Shaping',
      ]},
    {

      category: 'Inventory Management',
      areas: ['
        'Stock Optimization',Reorder Points',Safety Stock',ABC Analysis',
      ]},
    {

      category: 'Transportation',
      areas: ['
        'Route Optimization',Load Planning',Carrier Selection',Freight Optimization',
      ]},
    {

      category: 'Supplier Management',
      areas: ['
        'Performance Tracking',Risk Assessment',Cost Analysis',Quality Monitoring',
      ]},
  ];

  return()
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO"
        title="AI Supply Chain Optimization - Zion Tech Group"
        description="Optimize your supply chain with AI-powered forecasting, route optimization, and inventory management. Reduce costs and improve efficiency."
      />

      {/* Hero Section */}"
      <section className="relative overflow-hidden py-20 lg:py-32">"        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-red-900/20"></div>
"
        <div className="relative max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}"
            className="text-center max-w-4xl mx-auto"
          >"
            <div className="inline-flex items-center px-4 py-2 bg-orange-600/20 text-orange-400 rounded-full text-sm font-medium mb-6">"
              <Truck className="w-4 h-4 mr-2" />              AI-Powered Optimization
            </div>"
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6">
              AI Supply Chain"
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                {' '}
                Optimization
              </span>
            </h1>"
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your supply chain with AI-powered optimization. Reduce
              costs, improve efficiency, and enhance customer satisfaction with
              intelligent supply chain management.
            </p>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
              <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 text-lg flex items-center justify-center">"
                <Play className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>"
              <button className="border border-orange-500 text-orange-400 px-8 py-4 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 text-lg">"
                <Download className="w-5 h-5 mr-2 inline" />                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics Section */}"
      <section className="py-20">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {keyMetrics.map((metric, index (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}"
                className="text-center"
              >"
                <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">
                  {metric.metric}
                </div>"
                <div className="text-lg font-semibold text-white mb-2">
                  {metric.label}
                </div>"
                <div className="text-sm text-gray-400">
                  {metric.description}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}"
      <section className="py-20 bg-slate-800/50">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}"
            className="text-center mb-16"
          >"
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Powerful Features
            </h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join industry leaders who have revolutionized their supply chain operations with AI-powered optimization.
            </p>
          </motion.div>
"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map(feature: unknown, index: unknown (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}"
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-orange-500/50"
              >
                {/* Icon */}"
                <div className="mb-6">"
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">"
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div>"
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                    {feature.title}
                  </h3>"
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effect */}"
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Optimization Areas Section */}"
      <section className="py-20">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}"
            className="text-center mb-16"
          >"
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Optimization Areas
            </h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored optimization strategies for different industries with unique supply chain challenges and requirements.
            </p>
          </motion.div>
"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {optimizationAreas.map(category: unknown, index: unknown 
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}"
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-orange-500/50"
              >"
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">
                  {category.category}
                </h3>"
                <ul className="space-y-2">
                  {category.areas.map((area, areaIndex) => (
                    <li
                      key={areaIndex}"
                      className="flex items-center text-gray-300 text-sm"
                    >"
                      <CheckCircle className="w-4 h-4 text-orange-400 mr-2 flex-shrink-0" />                      {area}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}"
      <section className="py-20 bg-slate-800/50">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}"
            className="text-center mb-16"
          >"
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Business Benefits
            </h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how AI Supply Chain Optimization transforms different industries and business operations.
            </p>
          </motion.div>
"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map(benefit: unknown, index: unknown (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}"
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-orange-500/50"
              >
                {/* Icon */}"
                <div className="mb-6">"
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">"
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div>"
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                    {benefit.title}
                  </h3>"
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Hover Effect */}"
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}"
      <section className="py-20">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}"
            className="text-center mb-16"
          >"
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Transparent Pricing
            </h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that best fits your business needs. All plans include a 14-day free trial.
            </p>
          </motion.div>
"
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map(plan: unknown, index: unknown (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 ${

                  plan.popular'
                    ? 'border-orange-500/50 bg-gradient-to-br from-orange-500/10 to-red-500/10''
                    : 'border-white/10 hover:border-orange-500/50'`
                }`}
              >
                {plan.popular && ("
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">"
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
"
                <div className="text-center mb-8">"
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>"
                  <p className="text-gray-400 text-sm mb-4">
                    {plan.description}
                  </p>"
                  <div className="text-4xl font-bold text-white mb-2">
                    {plan.price}"
                    <span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
"
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}"
                      className="flex items-center text-gray-300"
                    >"
                      <CheckCircle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />"                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button`
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${

                    plan.popular'
                      ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white hover:from-orange-700 hover:to-red-700''
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'`
                  }`}
                >
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}"
      <section className="py-20 bg-slate-800/50">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}"
            className="text-center mb-16"
          >"
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Industry Use Cases
            </h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how organizations across industries leverage our AI supply
              chain optimization to improve efficiency.
            </p>
          </motion.div>
"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map(useCase: unknown, index: unknown (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}"
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-orange-500/50"
              >
                {/* Icon */}"
                <div className="mb-6">"
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">"
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div>"
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                    {useCase.industry}
                  </h3>"
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {useCase.description}
                  </p>
                </div>

                {/* Hover Effect */}"
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}"
      <section className="py-20">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}"
            className="text-center mb-16"
          >"
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Seamless Integrations
            </h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your existing supply chain and logistics tools for a
              unified optimization experience.
            </p>
          </motion.div>
"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map(integration: unknown, index: unknown 
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}"
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-orange-500/50"
              >"
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">
                  {integration.name}
                </h3>"
                <div className="flex flex-wrap gap-2">
                  {integration.platforms.map((platform, platformIndex (
                    <span
                      key={platformIndex}"
                      className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full border border-white/20"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}"
      <section className="py-20 bg-gradient-to-r from-orange-900/20 to-red-900/20">"
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >"
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Optimize Your Supply Chain?
            </h2>"
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using AI-powered supply chain
              optimization to reduce costs and improve operational efficiency.
            </p>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
              <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 text-lg flex items-center justify-center">"
                <Star className="w-5 h-5 mr-2" />                Start Free Trial
              </button>"
              <button className="border border-orange-500 text-orange-400 px-8 py-4 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 text-lg">"
                <Share2 className="w-5 h-5 mr-2 inline" />
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
'"`