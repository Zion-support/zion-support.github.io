import React from 'react';
import { motion } from 'framer-motion';
import {

  Truck, 
  Package, 
  Globe, 
  Brain, 
  CheckCircle,
  ArrowRight,
  Star,
  Database,
  AlertTriangle,
  Lightbulb,
  BarChart3,
  PieChart,
  LineChart,
  Target,
  Zap,
  Clock,
  Eye,
  Settings,
  Download,
  Share2,
  Filter,
  Search,
  AlertCircle,
  FileCheck,
  Calendar,
  Lock,
  Cloud,
  Server,
  Activity,
  Users,
  TrendingUp,
  Shield,
  MapPin,
  Route,
  Warehouse,
  Factory,
  Ship,
  Plane,
  Train
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AISupplyChainIntelligenceOptimizationPlatform() {

  const features = [
    {

      icon: Brain,
      title: "AI-Powered Demand Forecasting",
      description: "Advanced machine learning algorithms that analyze historical data, market trends, and external factors to predict demand with high accuracy",
      benefits: ["Accurate demand prediction", "Seasonal pattern recognition", "Market trend analysis"]
    },
    {

      icon: Globe,
      title: "Global Supply Chain Visibility",
      description: "Real-time tracking and monitoring of goods across the entire supply chain from suppliers to end customers",
      benefits: ["End-to-end visibility", "Real-time tracking", "Supplier performance monitoring"]
    },
    {

      icon: Route,
      title: "Intelligent Route Optimization",
      description: "AI-driven route planning that optimizes transportation routes, reduces costs, and improves delivery times",
      benefits: ["Cost optimization", "Delivery time reduction", "Fuel efficiency"]
    },
    {

      icon: Warehouse,
      title: "Inventory Optimization",
      description: "Smart inventory management that balances stock levels, reduces carrying costs, and prevents stockouts",
      benefits: ["Optimal stock levels", "Cost reduction", "Stockout prevention"]
    },
    {

      icon: Shield,
      title: "Risk Management & Mitigation",
      description: "Comprehensive risk assessment and mitigation strategies for supply chain disruptions and vulnerabilities",
      benefits: ["Risk identification", "Disruption prevention", "Contingency planning"]
    },
    {

      icon: BarChart3,
      title: "Advanced Analytics Dashboard",
      description: "Real-time analytics platform providing insights into supply chain performance, costs, and optimization opportunities",
      benefits: ["Performance metrics", "Cost analysis", "Optimization insights"]
    }
  ];

  const pricingPlans = [
    {

      name: "Starter",
      price: "$499",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 100 SKUs",
        "Basic demand forecasting",
        "Inventory tracking",
        "Standard reporting",
        "Email support",
        "Basic analytics",
        "Mobile app access"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {

      name: "Professional",
      price: "$1,299",
      period: "/month",
      description: "Ideal for mid-size companies and growing businesses",
      features: [
        "Up to 1,000 SKUs",
        "Advanced forecasting models",
        "Route optimization",
        "Real-time analytics",
        "Priority support",
        "API access",
        "Custom dashboards",
        "Multi-location support"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {

      name: "Enterprise",
      price: "$2,999",
      period: "/month",
      description: "For large corporations and multinational companies",
      features: [
        "Unlimited SKUs",
        "Full AI capabilities",
        "Global optimization",
        "24/7 dedicated support",
        "Custom development",
        "White-label options",
        "Advanced security",
        "Multi-currency support"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    "Retail inventory management",
    "Manufacturing supply chains",
    "E-commerce fulfillment",
    "Logistics optimization",
    "Supplier management",
    "Demand planning"
  ];

  const targetIndustries = [
    "Retail",
    "Manufacturing",
    "E-commerce",
    "Logistics",
    "Healthcare",
    "Automotive",
    "Food & Beverage",
    "Pharmaceuticals"
  ];

  const benefits = [
    "Reduce inventory costs by 30%",
    "Improve forecast accuracy by 40%",
    "Cut transportation costs by 25%",
    "Reduce stockouts by 60%",
    "Improve supplier performance",
    "Enhance customer satisfaction"
  ];

  const optimizationFeatures = [
    "Demand Forecasting",
    "Inventory Optimization",
    "Route Optimization",
    "Supplier Management",
    "Cost Optimization",
    "Risk Assessment",
    "Performance Analytics",
    "Real-time Monitoring"
  ];

  const intelligenceCapabilities = [
    "Predictive Analytics",
    "Machine Learning",
    "IoT Integration",
    "Blockchain Tracking",
    "Geospatial Analysis",
    "Weather Impact Analysis",
    "Market Intelligence",
    "Competitive Analysis"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI-Powered Supply Chain Intelligence & Optimization Platform
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-blue-100">
              Transform your supply chain operations with AI-driven intelligence, predictive analytics, and automated optimization. 
              Reduce costs, improve efficiency, and enhance visibility across your entire supply network.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Advanced Supply Chain Technology Features
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our AI-powered platform combines cutting-edge machine learning with supply chain expertise to deliver unprecedented intelligence and optimization capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Optimization Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Supply Chain Optimization Tools
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive optimization capabilities to streamline your supply chain operations and maximize efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {optimizationFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md border border-slate-200 text-center"
              >
                <Target className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-900">{feature}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Intelligence Capabilities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              AI Intelligence Capabilities
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Advanced artificial intelligence and machine learning capabilities to provide deep insights and predictive analytics.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {intelligenceCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-50 p-6 rounded-lg border border-slate-200 text-center"
              >
                <Brain className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-900">{capability}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Supply Chain Platform Pricing Plans
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose the plan that best fits your supply chain needs. All plans include our core AI capabilities and optimization features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-white p-8 rounded-xl shadow-lg border-2 ${

                  plan.popular 
                    ? 'border-blue-500 relative' 
                    : 'border-slate-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                    <span className="text-slate-600">{plan.period}</span>
                  </div>
                  <p className="text-slate-600">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${

                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Supply Chain Applications
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our platform addresses the full spectrum of supply chain management needs across various industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-50 p-6 rounded-lg border border-slate-200"
              >
                <div className="flex items-center">
                  <Package className="w-6 h-6 text-blue-500 mr-3" />
                  <span className="font-semibold text-slate-900">{useCase}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Transform Supply Chain Operations
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Experience unprecedented efficiency and intelligence with AI-powered supply chain optimization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md border border-slate-200"
              >
                <div className="flex items-center">
                  <TrendingUp className="w-8 h-8 text-green-500 mr-4" />
                  <span className="font-semibold text-slate-900">{benefit}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Supply Chain with AI?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join leading companies that trust our AI-powered platform for supply chain optimization and intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-slate-300 mb-2">Mobile: +1 302 464 0950</p>
              <p className="text-slate-300 mb-2">Email: kleber@ziontechgroup.com</p>
              <p className="text-slate-300">Address: 364 E Main St STE 1008 Middletown DE 19709</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-slate-300 hover:text-white">Home</Link></li>
                <li><Link to="/services" className="text-slate-300 hover:text-white">Services</Link></li>
                <li><Link to="/about" className="text-slate-300 hover:text-white">About</Link></li>
                <li><Link to="/contact" className="text-slate-300 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Supply Chain Services</h3>
              <ul className="space-y-2">
                <li><Link to="/services/ai-supply-chain-intelligence-optimization-platform" className="text-slate-300 hover:text-white">Intelligence Platform</Link></li>
                <li><Link to="/services/ai-supply-chain-optimization" className="text-slate-300 hover:text-white">Supply Chain Optimization</Link></li>
                <li><Link to="/services/ai-supply-chain-optimization-enhanced" className="text-slate-300 hover:text-white">Enhanced Optimization</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://ziontechgroup.com" className="text-slate-300 hover:text-white">
                  <Globe className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-slate-400">&copy; 2025 Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}