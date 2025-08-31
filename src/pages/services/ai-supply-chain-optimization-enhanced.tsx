import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Truck, 
  Globe, 
  BarChart3, 
  Zap, 
  CheckCircle, 
  Brain,
  Clock,
  DollarSign,
  Users,
  Shield,
  Target,
  TrendingUp,
  Package,
  Route,
  Warehouse,
  AlertTriangle,
  Phone,
  Mail,
  MapPin,
  Factory,
  Ship,
  Plane,
  Car,
  Database,
  Network,
  Cpu,
  Eye,
  Search,
  Filter,
  PieChart,
  LineChart
} from 'lucide-react';

export default function AISupplyChainOptimizationEnhanced() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Demand Forecasting",
      description: "Predict demand with 94% accuracy using advanced machine learning algorithms"
    },
    {
      icon: Route,
      title: "Intelligent Route Optimization",
      description: "Optimize delivery routes to reduce costs by up to 35% and improve delivery times"
    },
    {
      icon: Warehouse,
      title: "Smart Inventory Management",
      description: "Automated inventory optimization with real-time stock level monitoring"
    },
    {
      icon: Globe,
      title: "Global Supply Chain Visibility",
      description: "End-to-end visibility across your entire supply chain network"
    },
    {
      icon: AlertTriangle,
      title: "Risk Management & Mitigation",
      description: "Identify and mitigate supply chain risks before they impact operations"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics Dashboard",
      description: "Comprehensive insights and reporting for data-driven decision making"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$399",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 100 SKUs",
        "Basic demand forecasting",
        "Route optimization",
        "Email support",
        "Basic analytics",
        "Mobile app access"
      ],
      popular: false,
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Professional",
      price: "$999",
      period: "/month",
      description: "Ideal for mid-sized companies and growing businesses",
      features: [
        "Up to 1,000 SKUs",
        "Advanced AI forecasting",
        "Multi-location optimization",
        "Priority support",
        "Advanced analytics",
        "API access",
        "Custom dashboards",
        "Risk management"
      ],
      popular: true,
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Enterprise",
      price: "$2,499",
      period: "/month",
      description: "For large enterprises and global operations",
      features: [
        "Unlimited SKUs",
        "Custom AI models",
        "Global optimization",
        "24/7 dedicated support",
        "Custom integrations",
        "White-label options",
        "Advanced security",
        "Compliance reporting"
      ],
      popular: false,
      color: "from-purple-500 to-purple-600"
    }
  ];

  const benefits = [
    "Reduce supply chain costs by 25-40%",
    "Improve delivery times by 30-50%",
    "Reduce inventory carrying costs by 20-35%",
    "Increase customer satisfaction by 45%",
    "Minimize supply chain disruptions by 60%",
    "Optimize warehouse space utilization by 25%"
  ];

  const useCases = [
    {
      title: "E-commerce Fulfillment",
      description: "Optimize order fulfillment and delivery for online retail operations",
      icon: Package
    },
    {
      title: "Manufacturing Supply Chain",
      description: "Streamline raw material procurement and production planning",
      icon: Factory
    },
    {
      title: "Global Logistics",
      description: "Optimize international shipping and customs processes",
      icon: Ship
    },
    {
      title: "Retail Distribution",
      description: "Efficient distribution network management for retail chains",
      icon: Truck
    }
  ];

  const stats = [
    { number: "94%", label: "Forecast Accuracy", icon: Target },
    { number: "40%", label: "Cost Reduction", icon: DollarSign },
    { number: "50%", label: "Delivery Improvement", icon: Clock },
    { number: "60%", label: "Risk Reduction", icon: Shield }
  ];

  const transportationModes = [
    {
      mode: "Ocean Freight",
      optimization: "Route planning",
      savings: "15-25%",
      icon: Ship
    },
    {
      mode: "Air Freight",
      optimization: "Priority routing",
      savings: "20-30%",
      icon: Plane
    },
    {
      mode: "Ground Transport",
      optimization: "Last-mile delivery",
      savings: "25-35%",
      icon: Truck
    },
    {
      mode: "Rail Freight",
      optimization: "Bulk transport",
      savings: "10-20%",
      icon: Car
    }
  ];

  const industries = [
    {
      name: "Manufacturing",
      icon: Factory,
      description: "Streamline production planning and material flow"
    },
    {
      name: "Retail",
      icon: Package,
      description: "Optimize inventory and distribution networks"
    },
    {
      name: "Healthcare",
      icon: Shield,
      description: "Ensure critical supplies reach destinations on time"
    },
    {
      name: "Food & Beverage",
      icon: Truck,
      description: "Maintain freshness with optimized cold chain logistics"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Supply Chain Optimization Platform - Zion Tech Group</title>
        <meta name="description" content="Revolutionize your supply chain with AI-powered optimization. Reduce costs by 40%, improve delivery times by 50%, and achieve 94% forecast accuracy." />
        <meta name="keywords" content="AI supply chain optimization, logistics optimization, demand forecasting, inventory management, route optimization, supply chain analytics" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-supply-chain-optimization-enhanced" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative z-10 container mx-auto px-4 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 text-sm font-medium mb-6">
                <Truck className="w-4 h-4 mr-2 text-blue-400" />
                AI-Powered Supply Chain Optimization
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                AI Supply Chain <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Optimization Platform</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Transform your supply chain operations with AI-powered optimization. Reduce costs by 40%, 
                improve delivery times by 50%, and achieve 94% forecast accuracy across your entire network.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-zinc-600 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-all duration-300"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">
                    <stat.icon className="w-12 h-12 text-blue-400" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Transportation Modes Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Multi-Modal <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Transportation Optimization</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Optimize every mode of transportation in your supply chain for maximum efficiency and cost savings.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {transportationModes.map((mode, index) => (
                <motion.div
                  key={mode.mode}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <mode.icon className="w-12 h-12 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{mode.mode}</h3>
                    <div className="space-y-3">
                      <div className="text-sm">
                        <span className="text-gray-400">Optimization:</span>
                        <p className="text-white">{mode.optimization}</p>
                      </div>
                      <div className="text-sm">
                        <span className="text-gray-400">Savings:</span>
                        <p className="text-green-400 font-semibold">{mode.savings}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful Features for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Supply Chain Excellence</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI platform combines cutting-edge technology with supply chain expertise to deliver unmatched optimization capabilities.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-500/20 rounded-lg">
                      <feature.icon className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tailored supply chain optimization solutions for various industries and business models.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-500/20 rounded-lg mr-4">
                      <industry.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{industry.name}</h3>
                  </div>
                  <p className="text-gray-400">{industry.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Real-World <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Applications</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how our AI platform transforms various supply chain operations and business models.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-500/20 rounded-lg mr-4">
                      <useCase.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                  </div>
                  <p className="text-gray-400">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Flexible <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Pricing Plans</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that best fits your supply chain complexity and optimization needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-zinc-800/50 border rounded-xl p-8 ${
                    plan.popular 
                      ? 'border-blue-500/50 bg-gradient-to-br from-zinc-800/80 to-blue-900/20' 
                      : 'border-zinc-700/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                        : 'bg-zinc-700 text-white hover:bg-zinc-600'
                    }`}
                  >
                    Get Started
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Supply Chain</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience unprecedented efficiency and cost savings across your entire supply chain network.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center bg-zinc-800/50 border border-zinc-700/50 rounded-lg p-4 hover:border-blue-500/50 transition-all duration-300"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Optimize</span> Your Supply Chain?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Join thousands of companies who have already revolutionized their supply chain operations with AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-blue-500 text-white font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300"
                >
                  Contact Sales
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex flex-col items-center">
                    <Phone className="w-8 h-8 text-blue-400 mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                    <p className="text-gray-400">+1 302 464 0950</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Mail className="w-8 h-8 text-blue-400 mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                    <p className="text-gray-400">kleber@ziontechgroup.com</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <MapPin className="w-8 h-8 text-blue-400 mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                    <p className="text-gray-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}