import React from 'react';
import { motion } from 'framer-motion';
import { 
  Network, 
  TrendingUp, 
  Package, 
  Truck, 
  Warehouse,
  Globe,
  BarChart3,
  Target,
  Zap,
  Shield,
  Clock,
  DollarSign,
  Users,
  CheckCircle,
  ArrowRight,
  Play,
  Brain,
  BarChart,
  Route,
  AlertTriangle,
  Award
} from 'lucide-react';

const AISupplyChainOptimization = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-blue-600" />,
      title: "AI-Powered Demand Forecasting",
      description: "Advanced machine learning algorithms that predict demand patterns with 95% accuracy, reducing stockouts and overstock situations."
    },
    {
      icon: <Route className="w-6 h-6 text-green-600" />,
      title: "Intelligent Route Optimization",
      description: "AI-driven logistics optimization that reduces delivery times by 30% and cuts transportation costs by 25% through smart routing."
    },
    {
      icon: <BarChart className="w-6 h-6 text-purple-600" />,
      title: "Real-Time Analytics Dashboard",
      description: "Comprehensive supply chain visibility with real-time monitoring, predictive alerts, and actionable insights for decision-makers."
    },
    {
      icon: <Shield className="w-6 h-6 text-red-600" />,
      title: "Risk Management & Compliance",
      description: "Automated risk assessment, compliance monitoring, and contingency planning to ensure supply chain resilience and regulatory adherence."
    },
    {
      icon: <Warehouse className="w-6 h-6 text-indigo-600" />,
      title: "Inventory Optimization",
      description: "Smart inventory management that automatically adjusts stock levels based on demand forecasts, seasonal trends, and supplier lead times."
    },
    {
      icon: <Globe className="w-6 h-6 text-yellow-600" />,
      title: "Global Supply Chain Integration",
      description: "Seamless integration with suppliers, logistics providers, and ERP systems across multiple countries and time zones."
    }
  ];

  const benefits = [
    "Reduce supply chain costs by 20-35%",
    "Improve delivery performance by 40%",
    "Reduce inventory carrying costs by 25%",
    "Increase supplier collaboration efficiency by 50%",
    "Minimize supply chain disruptions by 60%",
    "Achieve 99.5% order fulfillment accuracy"
  ];

  const useCases = [
    {
      title: "Manufacturing & Production",
      description: "Optimize production schedules, manage raw material procurement, and streamline manufacturing workflows with AI-driven insights.",
      icon: <Package className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Retail & E-commerce",
      description: "Forecast demand, optimize inventory levels, and improve customer satisfaction through intelligent supply chain management.",
      icon: <Truck className="w-8 h-8 text-green-500" />
    },
    {
      title: "Healthcare & Pharmaceuticals",
      description: "Ensure critical medical supplies availability, manage cold chain logistics, and maintain compliance with healthcare regulations.",
      icon: <Shield className="w-8 h-8 text-red-500" />
    },
    {
      title: "Food & Beverage",
      description: "Manage perishable inventory, optimize distribution networks, and ensure food safety compliance throughout the supply chain.",
      icon: <Warehouse className="w-8 h-8 text-yellow-500" />
    }
  ];

  const pricing = [
    {
      plan: "Starter",
      price: "$499",
      period: "per month",
      features: [
        "Up to 5 locations",
        "Basic demand forecasting",
        "Inventory optimization",
        "Standard reporting",
        "Email support",
        "Basic integrations"
      ]
    },
    {
      plan: "Professional",
      price: "$1,299",
      period: "per month",
      features: [
        "Up to 25 locations",
        "Advanced AI forecasting",
        "Route optimization",
        "Real-time analytics",
        "Priority support",
        "API access",
        "Custom dashboards"
      ]
    },
    {
      plan: "Enterprise",
      price: "$2,999",
      period: "per month",
      features: [
        "Unlimited locations",
        "Full AI suite",
        "Custom AI models",
        "White-label solution",
        "24/7 dedicated support",
        "Advanced integrations",
        "SLA guarantees"
      ]
    }
  ];

  const integrations = [
    'SAP ERP',
    'Oracle SCM',
    'Microsoft Dynamics',
    'NetSuite',
    'Salesforce',
    'Shopify',
    'WooCommerce',
    'FedEx',
    'UPS',
    'DHL',
    'Amazon FBA',
    'Webhook APIs'
  ];

  const keyMetrics = [
    {
      metric: '95%',
      label: 'Demand Forecast Accuracy'
    },
    {
      metric: '30%',
      label: 'Delivery Time Reduction'
    },
    {
      metric: '35%',
      label: 'Cost Reduction'
    },
    {
      metric: '40%',
      label: 'Performance Improvement'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-green-100 rounded-full">
                <Network className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Supply Chain Optimization
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your supply chain with AI-powered optimization. Reduce costs, 
              improve efficiency, and gain real-time visibility across your entire 
              supply network with predictive analytics and intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center px-8 py-4 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors"
              >
                Watch Demo
                <Play className="ml-2 w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Intelligent Supply Chain Management
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI-powered platform provides comprehensive supply chain optimization 
              with real-time insights, predictive analytics, and automated decision-making.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored supply chain optimization solutions for various industries 
              with specific requirements and compliance needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="mr-4">{useCase.icon}</div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {useCase.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-lg">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Measurable Results
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI-powered supply chain optimization delivers quantifiable improvements 
              across all key performance indicators.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-zion-slate-light text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that best fits your supply chain complexity and requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-white p-8 rounded-xl shadow-lg border-2 ${
                  index === 1 ? 'border-green-500 scale-105' : 'border-gray-200'
                }`}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.plan}
                  </h3>
                  <div className="text-4xl font-bold text-green-600 mb-1">
                    {plan.price}
                  </div>
                  <div className="text-gray-600">{plan.period}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://ziontechgroup.com/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    index === 1
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Return on Investment
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI supply chain optimization delivers significant ROI within the first year.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-green-600 mb-2">20-35%</div>
              <div className="text-gray-600">Cost Reduction</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">40%</div>
              <div className="text-gray-600">Delivery Improvement</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-purple-600 mb-2">25%</div>
              <div className="text-gray-600">Inventory Cost Reduction</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-yellow-600 mb-2">6-12</div>
              <div className="text-gray-600">Months to ROI</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Join industry leaders who trust our AI-powered supply chain optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Contact Sales
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-colors"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
              <p className="text-gray-400">
                Empowering the future through innovative technology solutions.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">+1 302 464 0950</p>
              <p className="text-gray-400">kleber@ziontechgroup.com</p>
              <p className="text-gray-400">364 E Main St STE 1008</p>
              <p className="text-gray-400">Middletown DE 19709</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>AI Solutions</li>
                <li>IT Services</li>
                <li>Micro SaaS</li>
                <li>Supply Chain</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://ziontechgroup.com" className="text-gray-400 hover:text-white">
                  Website
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AISupplyChainOptimization;