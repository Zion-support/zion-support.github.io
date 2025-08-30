import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Truck, 
  Package, 
  Globe, 
  Brain, 
  Zap, 
  Shield, 
  BarChart3, 
  Cpu, 
  Database, 
  Network, 
  Lock, 
  Rocket, 
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  TrendingUp,
  Users,
  Target,
  Lightbulb,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Activity,
  FileText,
  Map,
  Navigation,
  Route,
  Warehouse,
  Factory,
  Ship,
  Plane,
  Train,
  Car,
  Bike,
  Bus,
  Anchor,
  Compass,
  Gauge,
  Timer,
  Calendar,
  Clock,
  TrendingDown,
  BarChart,
  PieChart,
  LineChart,
  ScatterChart,
  AreaChart,
  CandlestickChart,
  GanttChart,
  Kanban
} from 'lucide-react';

const AISupplyChainOptimization: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI Demand Forecasting',
      description: 'Predict demand patterns with 95% accuracy using advanced machine learning algorithms'
    },
    {
      icon: Truck,
      title: 'Route Optimization',
      description: 'Optimize delivery routes to reduce costs and improve delivery times by 30%'
    },
    {
      icon: Warehouse,
      title: 'Inventory Management',
      description: 'Smart inventory control with automated reordering and stock level optimization'
    },
    {
      icon: Globe,
      title: 'Global Supply Chain',
      description: 'End-to-end visibility across international supply chains and logistics networks'
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Live monitoring and analytics for supply chain performance and optimization'
    },
    {
      icon: Zap,
      title: 'Automated Operations',
      description: 'Intelligent automation of supply chain processes and decision-making'
    }
  ];

  const supplyChainModules = [
    {
      name: 'Demand Planning',
      features: ['AI forecasting models', 'Seasonal analysis', 'Trend prediction', 'Demand variability']
    },
    {
      name: 'Inventory Optimization',
      features: ['Stock level management', 'Reorder automation', 'Safety stock calculation', 'ABC analysis']
    },
    {
      name: 'Logistics Management',
      features: ['Route optimization', 'Carrier selection', 'Freight optimization', 'Last-mile delivery']
    },
    {
      name: 'Supplier Management',
      features: ['Supplier performance', 'Risk assessment', 'Contract management', 'Quality control']
    },
    {
      name: 'Warehouse Operations',
      features: ['Space utilization', 'Picking optimization', 'Storage strategies', 'Automation integration']
    },
    {
      name: 'Risk Management',
      features: ['Supply disruption', 'Geopolitical risks', 'Weather impact', 'Contingency planning']
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$2,800',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'AI Demand Forecasting (up to 100 SKUs)',
        'Basic Inventory Management',
        'Route Optimization (up to 50 routes)',
        'Standard Analytics Dashboard',
        'Email Support',
        'Basic Reporting',
        'Mobile App Access'
      ],
      marketPrice: '$3,600',
      savings: '22%',
      popular: false
    },
    {
      name: 'Professional',
      price: '$6,500',
      period: '/month',
      description: 'Ideal for growing businesses and mid-size companies',
      features: [
        'Advanced AI Forecasting',
        'Comprehensive Inventory Management',
        'Advanced Route Optimization',
        'Supplier Management',
        'Risk Assessment',
        'Priority Support',
        'Custom Integration',
        'Advanced Analytics',
        'Training & Certification'
      ],
      marketPrice: '$8,200',
      savings: '21%',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$15,000',
      period: '/month',
      description: 'For large enterprises and global supply chains',
      features: [
        'Enterprise AI Platform',
        'Unlimited SKU Management',
        'Global Supply Chain Visibility',
        'Custom AI Models',
        'Advanced Risk Management',
        '24/7 Dedicated Support',
        'White-label Solutions',
        'Custom Development',
        'Consulting Services',
        'Staff Training'
      ],
      marketPrice: '$19,500',
      savings: '23%',
      popular: false
    }
  ];

  const benefits = [
    {
      title: 'Cost Reduction',
      description: 'Reduce supply chain costs by 25-35% through AI optimization and automation',
      icon: TrendingUp
    },
    {
      title: 'Improved Efficiency',
      description: 'Increase supply chain efficiency by 40% with intelligent automation',
      icon: Zap
    },
    {
      title: 'Better Visibility',
      description: 'Real-time visibility across the entire supply chain for better decision-making',
      icon: Eye
    },
    {
      title: 'Risk Mitigation',
      description: 'Proactive risk identification and mitigation to prevent supply chain disruptions',
      icon: Shield
    }
  ];

  const performanceStats = [
    { metric: 'Cost Reduction', value: '30%', description: 'Average reduction in supply chain costs' },
    { metric: 'Delivery Time', value: '25% faster', description: 'Improved delivery performance' },
    { metric: 'Inventory Turnover', value: '40% increase', description: 'Better inventory management' },
    { metric: 'Forecast Accuracy', value: '95%', description: 'AI-powered demand forecasting accuracy' }
  ];

  const useCases = [
    {
      industry: 'Manufacturing',
      applications: ['Raw Material Planning', 'Production Scheduling', 'Quality Control', 'Supplier Management']
    },
    {
      industry: 'Retail & E-commerce',
      applications: ['Inventory Management', 'Demand Forecasting', 'Last-mile Delivery', 'Returns Processing']
    },
    {
      industry: 'Logistics & Transportation',
      applications: ['Route Optimization', 'Fleet Management', 'Freight Optimization', 'Warehouse Operations']
    },
    {
      industry: 'Healthcare & Pharmaceuticals',
      applications: ['Medical Supply Chain', 'Cold Chain Management', 'Regulatory Compliance', 'Emergency Response']
    }
  ];

  const industries = [
    {
      name: 'Manufacturing',
      icon: Factory,
      description: 'Optimize production planning, inventory management, and supplier relationships'
    },
    {
      name: 'Retail',
      icon: Package,
      description: 'Streamline inventory, improve demand forecasting, and enhance customer delivery'
    },
    {
      name: 'Healthcare',
      icon: Shield,
      description: 'Ensure medical supply availability, compliance, and emergency response readiness'
    },
    {
      name: 'Logistics',
      icon: Truck,
      description: 'Optimize routes, reduce costs, and improve delivery performance'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-6">
              <Truck className="w-4 h-4 mr-2" />
              Supply Chain Innovation
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI-Powered Supply Chain Optimization
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Revolutionary supply chain technology that combines artificial intelligence with logistics expertise 
              to deliver unprecedented efficiency, cost savings, and operational excellence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
            >
              <Truck className="w-5 h-5 mr-2" />
              Optimize Your Supply Chain
            </Link>
            <Link
              to="#demo"
              className="inline-flex items-center px-8 py-4 rounded-lg border-2 border-blue-500 text-blue-300 font-semibold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              <Eye className="w-5 h-5 mr-2" />
              Watch Demo
            </Link>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-indigo-400 rounded-full animate-bounce"></div>
        </div>
      </section>

      {/* Performance Statistics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {performanceStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="text-center bg-gradient-to-br from-blue-900/50 to-cyan-900/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20"
              >
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-blue-300 mb-2">{stat.metric}</div>
                <div className="text-sm text-gray-300">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced Supply Chain Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive supply chain solutions powered by cutting-edge AI technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supply Chain Modules Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/30 to-cyan-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Supply Chain Modules
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Modular supply chain solutions that adapt to your specific business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supplyChainModules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="bg-gradient-to-br from-slate-800/80 to-blue-800/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20"
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Truck className="w-6 h-6 mr-3 text-blue-400" />
                  {module.name}
                </h3>
                <div className="space-y-3">
                  {module.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-400 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored supply chain optimization for your specific industry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : index % 2 === 0 ? -20 : 20 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                className="bg-gradient-to-br from-slate-800/80 to-blue-800/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4">
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{industry.name}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-blue-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Supply Chain Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your supply chain operations across all business functions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : index % 2 === 0 ? -20 : 20 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                className="bg-gradient-to-br from-slate-800/80 to-cyan-800/80 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20"
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Target className="w-6 h-6 mr-3 text-cyan-400" />
                  {useCase.industry}
                </h3>
                <div className="space-y-3">
                  {useCase.applications.map((app, appIndex) => (
                    <div key={appIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-400 flex-shrink-0" />
                      {app}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Supply Chain Platform Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access advanced supply chain AI technology at competitive prices
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className={`relative bg-gradient-to-br from-slate-800/80 to-blue-800/80 backdrop-blur-sm rounded-2xl p-8 border-2 ${
                  tier.popular 
                    ? 'border-blue-500 scale-105' 
                    : 'border-blue-500/20'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{tier.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400">{tier.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{tier.description}</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-gray-400 line-through mr-2">{tier.marketPrice}</span>
                    <span className="bg-green-500 text-white px-2 py-1 rounded text-sm font-semibold">
                      Save {tier.savings}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-gray-300">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700'
                      : 'border-2 border-blue-500 text-blue-300 hover:bg-blue-500 hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-blue-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Supply Chain Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your supply chain with AI-powered optimization technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : index % 2 === 0 ? -20 : 20 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                className="bg-gradient-to-br from-slate-800/80 to-cyan-800/80 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the supply chain revolution with AI-powered optimization technology
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-2 text-blue-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-2 text-blue-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-2 text-blue-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                <Truck className="w-5 h-5 mr-2" />
                Schedule Supply Chain Demo
              </Link>
              <Link
                to="https://ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 rounded-lg border-2 border-blue-500 text-blue-300 font-semibold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                <Globe className="w-5 h-5 mr-2" />
                Visit Our Website
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AISupplyChainOptimization;