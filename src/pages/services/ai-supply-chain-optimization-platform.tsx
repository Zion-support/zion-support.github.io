import React from 'react';
import { motion } from 'framer-motion';
import {

  Truck, 
  Package, 
  Brain, 
  Shield, 
  Users, 
  CheckCircle, 
  ArrowRight,
  BarChart3,
  Clock,
  DollarSign,
  Target,
  Zap,
  Eye,
  Lock,
  Globe,
  Activity,
  LineChart,
  PieChart,
  AlertTriangle,
  Settings,
  Database,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const AISupplyChainOptimizationPlatform = () => {

  const features = [
    {

      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Demand Forecasting",
      description: "Advanced machine learning algorithms predict demand patterns with 95% accuracy, reducing stockouts and overstock situations."
    },
    {

      icon: <Truck className="w-6 h-6" />,
      title: "Route Optimization",
      description: "Intelligent route planning that reduces delivery times by 30% and cuts transportation costs by 25%."
    },
    {

      icon: <Shield className="w-6 h-6" />,
      title: "Risk Management",
      description: "Real-time risk assessment and mitigation strategies for supply chain disruptions and supplier issues."
    },
    {

      icon: <Users className="w-6 h-6" />,
      title: "Supplier Management",
      description: "AI-driven supplier performance analysis and automated procurement recommendations."
    },
    {

      icon: <Database className="w-6 h-6" />,
      title: "Inventory Optimization",
      description: "Smart inventory management that maintains optimal stock levels while minimizing carrying costs."
    },
    {

      icon: <BarChart3 className="w-6 h-6" />,
      title: "Performance Analytics",
      description: "Comprehensive supply chain KPIs and real-time performance monitoring dashboards."
    }
  ];

  const pricingPlans = [
    {

      name: "Small Business",
      price: "$399",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 100 SKUs",
        "Basic demand forecasting",
        "Standard reporting",
        "Email support",
        "Basic integrations",
        "Mobile app access"
      ],
      popular: false
    },
    {

      name: "Enterprise",
      price: "$1,199",
      period: "/month",
      description: "Ideal for growing companies and mid-market businesses",
      features: [
        "Up to 10,000 SKUs",
        "Advanced AI algorithms",
        "Custom dashboards",
        "Priority support",
        "Full integration suite",
        "Advanced analytics",
        "Risk management",
        "API access"
      ],
      popular: true
    },
    {

      name: "Global Enterprise",
      price: "$2,999",
      period: "/month",
      description: "For large multinational corporations",
      features: [
        "Unlimited SKUs",
        "Custom AI models",
        "White-label solution",
        "Dedicated support",
        "Multi-warehouse management",
        "Custom integrations",
        "Training and consultation",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  const benefits = [
    {

      icon: <DollarSign className="w-8 h-8" />,
      title: "Cost Reduction",
      description: "Reduce supply chain costs by 20-35% through AI optimization"
    },
    {

      icon: <Clock className="w-8 h-8" />,
      title: "Faster Delivery",
      description: "Improve delivery times by 30-40% with route optimization"
    },
    {

      icon: <Shield className="w-8 h-8" />,
      title: "Risk Mitigation",
      description: "Identify and prevent supply chain disruptions before they occur"
    },
    {

      icon: <Truck className="w-8 h-8" />,
      title: "Improved Efficiency",
      description: "Streamline operations and reduce manual processes by 50%"
    }
  ];

  const industries = [
    {

      icon: <Package className="w-8 h-8" />,
      title: "E-commerce",
      description: "Optimize fulfillment and last-mile delivery for online retailers"
    },
    {

      icon: <Truck className="w-8 h-8" />,
      title: "Manufacturing",
      description: "Streamline production planning and raw material procurement"
    },
    {

      icon: <Globe className="w-8 h-8" />,
      title: "Retail",
      description: "Improve inventory management and store replenishment"
    },
    {

      icon: <Activity className="w-8 h-8" />,
      title: "Healthcare",
      description: "Ensure critical medical supplies are always available"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <Truck className="w-12 h-12 text-blue-500 mr-3" />
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                AI Supply Chain
                <span className="text-blue-500 block">Optimization Platform</span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your supply chain with AI-powered optimization. Predict demand, 
              optimize routes, and manage inventory with unprecedented precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-blue-500 transition-colors"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Supply Chain Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI platform combines cutting-edge technology with supply chain expertise to deliver 
              insights that optimize operations and reduce costs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition-colors"
              >
                <div className="text-blue-500 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform adapts to various industries, providing tailored optimization 
              strategies for different supply chain challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-blue-500 mb-4 flex justify-center">{industry.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{industry.title}</h3>
                <p className="text-gray-300">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Supply Chain Leaders Choose Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience measurable improvements in efficiency, cost reduction, and customer satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-blue-500 mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your business size and supply chain complexity. 
              All plans include our core AI capabilities and optimization tools.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-slate-800 p-8 rounded-lg border ${

                  plan.popular 
                    ? 'border-blue-500 ring-2 ring-blue-500/20' 
                    : 'border-slate-700'
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
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://ziontechgroup.com/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${

                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join leading companies that have already improved efficiency and reduced costs with AI optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Schedule Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <Phone className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div>
                <Mail className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <MapPin className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AISupplyChainOptimizationPlatform;