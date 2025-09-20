import React from 'react';
import { motion } from 'framer-motion';
import { 
  Truck, 
  Globe, 
  Zap, 
  Brain, 
  CheckCircle, 
  Clock, 
  DollarSign,
  Users,
  BarChart3,
  Shield,
  TrendingUp,
  Award,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Package,
  Route,
  Warehouse,
  Cpu
} from 'lucide-react';
import SEO from '../../components/SEO';

export default function AISupplyChainOptimization() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Demand Forecasting",
      description: "Machine learning algorithms predict demand patterns with 94% accuracy, reducing stockouts and overstock by 60%"
    },
    {
      icon: <Route className="w-6 h-6" />,
      title: "Intelligent Route Optimization",
      description: "Real-time route planning that reduces delivery costs by 35% and improves delivery times by 40%"
    },
    {
      icon: <Warehouse className="w-6 h-6" />,
      title: "Smart Inventory Management",
      description: "Automated inventory tracking with predictive reordering and dynamic safety stock calculations"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Supply Chain Visibility",
      description: "End-to-end visibility across all suppliers, warehouses, and distribution centers in real-time"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Risk Management & Compliance",
      description: "AI-driven risk assessment and automated compliance monitoring for regulatory requirements"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Advanced Analytics Dashboard",
      description: "Comprehensive insights into supply chain performance, cost analysis, and optimization opportunities"
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$499",
      period: "/month",
      features: [
        "Up to 5 locations",
        "Basic demand forecasting",
        "Route optimization",
        "Email support",
        "Standard analytics"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$1,299",
      period: "/month",
      features: [
        "Up to 25 locations",
        "Advanced AI forecasting",
        "Multi-modal optimization",
        "Priority support",
        "Advanced analytics",
        "API access",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,999",
      period: "/month",
      features: [
        "Unlimited locations",
        "Custom AI models",
        "Real-time optimization",
        "Dedicated support",
        "White-label options",
        "SLA guarantees",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const benefits = [
    "Reduce supply chain costs by 25-40%",
    "Improve delivery performance by 60%",
    "Reduce inventory carrying costs by 30%",
    "Increase supplier collaboration efficiency",
    "Minimize supply chain disruptions",
    "Achieve 99.5% order fulfillment rate"
  ];

  const useCases = [
    {
      industry: "E-commerce & Retail",
      description: "Optimize fulfillment networks, reduce shipping costs, and improve customer delivery experience",
      savings: "35% cost reduction"
    },
    {
      industry: "Manufacturing",
      description: "Streamline production planning, optimize supplier networks, and reduce lead times",
      savings: "40% efficiency gain"
    },
    {
      industry: "Healthcare & Pharmaceuticals",
      description: "Ensure critical supplies availability, optimize distribution networks, and maintain compliance",
      savings: "50% risk reduction"
    },
    {
      industry: "Food & Beverage",
      description: "Optimize cold chain logistics, reduce waste, and improve freshness delivery",
      savings: "30% waste reduction"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI-Powered Supply Chain Optimization Platform - Zion Tech Group"
        description="Revolutionary AI platform for supply chain optimization, demand forecasting, and logistics management. Reduce costs by 25-40% while improving efficiency."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Supply Chain Optimization
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your supply chain with intelligent optimization, predictive analytics, and real-time visibility. 
              Reduce costs by 25-40% while improving delivery performance and customer satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Optimize Your Supply Chain
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center px-8 py-4 border-2 border-green-500 text-green-400 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                Watch Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our Supply Chain Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built by supply chain experts and AI engineers, our platform delivers unprecedented efficiency and cost savings.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-green-500 transition-all duration-300"
              >
                <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
                <p className="text-white text-lg font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful Features for Supply Chain Excellence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to optimize your supply chain operations and achieve operational excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-green-500 transition-all duration-300 group"
              >
                <div className="text-green-400 mb-4 group-hover:text-green-300 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored optimization strategies for different industries and supply chain complexities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-green-500 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.industry}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <div className="flex items-center">
                  <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
                  <span className="text-green-400 font-semibold">{useCase.savings}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your supply chain complexity and optimization needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-slate-900/80 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-green-500 ring-2 ring-green-500/20' 
                    : 'border-slate-700'
                } hover:border-green-500 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a
                  href="https://ziontechgroup.com/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700'
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

      {/* Market Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Market-Leading Supply Chain Solution
              </h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <DollarSign className="w-6 h-6 text-green-400 mr-4" />
                  <div>
                    <p className="text-white font-semibold">Market Price Range</p>
                    <p className="text-gray-300">$800 - $5,000/month for similar solutions</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-blue-400 mr-4" />
                  <div>
                    <p className="text-white font-semibold">Implementation Time</p>
                    <p className="text-gray-300">4-8 weeks for full deployment</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-yellow-400 mr-4" />
                  <div>
                    <p className="text-white font-semibold">ROI Timeline</p>
                    <p className="text-gray-300">400% return within 8 months</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-purple-400 mr-4" />
                  <div>
                    <p className="text-white font-semibold">Target Market</p>
                    <p className="text-gray-300">Manufacturers, retailers, logistics companies, distributors</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-slate-900/80 backdrop-blur-sm rounded-xl p-8 border border-slate-700"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Performance Metrics</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Cost Reduction</span>
                  <span className="text-green-400 font-semibold">25-40%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Delivery Performance</span>
                  <span className="text-blue-400 font-semibold">+60%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Inventory Optimization</span>
                  <span className="text-purple-400 font-semibold">30%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Forecast Accuracy</span>
                  <span className="text-yellow-400 font-semibold">94%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-12 border border-green-500/30"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of companies who have already transformed their supply chain operations with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Schedule a Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-green-500 text-green-400 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-green-400 mb-4" />
              <p className="text-white font-semibold mb-2">Phone</p>
              <a href="tel:+13024640950" className="text-gray-300 hover:text-green-400 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-green-400 mb-4" />
              <p className="text-white font-semibold mb-2">Email</p>
              <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-green-400 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-green-400 mb-4" />
              <p className="text-white font-semibold mb-2">Address</p>
              <p className="text-gray-300">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
          <div className="mt-8">
            <a
              href="https://ziontechgroup.com"
              className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors"
            >
              Visit our website
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}