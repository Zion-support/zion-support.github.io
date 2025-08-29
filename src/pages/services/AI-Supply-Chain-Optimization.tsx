import React from 'react';
import { motion } from 'framer-motion';
import { 
  Truck, 
  Brain, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Users, 
  Clock, 
  DollarSign,
  TrendingUp,
  Globe,
  Search,
  BarChart3,
  Target,
  Award,
  Phone,
  Play,
  Route,
  Package,
  Warehouse,
  Factory,
  Ship,
  Plane,
  Train,
  Car,
  MapPin,
  Mail
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function AISupplyChainOptimization() {
  const features = [
    "AI-powered demand forecasting and planning",
    "Real-time supply chain visibility and tracking",
    "Automated inventory optimization",
    "Route optimization and logistics planning",
    "Supplier performance analytics",
    "Risk assessment and mitigation",
    "Cost optimization and savings analysis",
    "Multi-modal transportation planning",
    "Sustainability and carbon footprint tracking",
    "Integration with ERP and WMS systems"
  ];

  const benefits = [
    "Reduce supply chain costs by 15-25%",
    "Improve delivery performance by 30%",
    "Reduce inventory carrying costs by 20%",
    "Enhance supplier collaboration and performance",
    "Minimize supply chain disruptions",
    "Optimize transportation routes and costs"
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$499",
      period: "/month",
      features: [
        "Up to 5 locations",
        "Basic demand forecasting",
        "Standard reporting",
        "Email support"
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
        "Real-time tracking",
        "Priority support",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,999",
      period: "/month",
      features: [
        "Unlimited locations",
        "Full AI capabilities",
        "Custom integrations",
        "Dedicated support",
        "White-label options"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Manufacturing",
      description: "Optimize production planning, inventory management, and supplier relationships",
      icon: Factory
    },
    {
      title: "Retail",
      description: "Improve demand forecasting, store replenishment, and omnichannel fulfillment",
      icon: Package
    },
    {
      title: "Logistics",
      description: "Optimize routes, reduce costs, and improve delivery performance",
      icon: Truck
    },
    {
      title: "Healthcare",
      description: "Ensure critical supplies availability and optimize medical inventory",
      icon: Award
    }
  ];

  return (
    <>
      <SEO 
        title="AI-Powered Supply Chain Optimization | Zion Tech Group"
        description="Revolutionary AI platform for supply chain optimization, demand forecasting, and logistics planning. Reduce costs by 15-25% and improve delivery performance by 30%."
        keywords="AI supply chain optimization, demand forecasting, logistics planning, inventory optimization, supply chain analytics, transportation optimization"
        ogImage="https://ziontechgroup.com/images/ai-supply-chain-optimization.jpg"
        ogUrl="https://ziontechgroup.com/services/ai-supply-chain-optimization"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  AI-Powered Supply Chain Optimization
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                  Transform your supply chain operations with our advanced AI platform that optimizes 
                  demand forecasting, inventory management, and logistics planning in real-time.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#demo"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <Truck className="mr-2 h-5 w-5" />
                    Request Demo
                  </a>
                  <a
                    href="#pricing"
                    className="inline-flex items-center px-8 py-4 border-2 border-green-500 text-green-400 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300"
                  >
                    <DollarSign className="mr-2 h-5 w-5" />
                    View Pricing
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Features for Modern Supply Chains
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI platform combines cutting-edge technology with supply chain expertise to deliver 
                unprecedented efficiency and cost savings.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-700/50 p-6 rounded-xl border border-slate-600 hover:border-green-500 transition-all duration-300"
                >
                  <CheckCircle className="h-8 w-8 text-green-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Transform Your Supply Chain Operations
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience unprecedented efficiency and cost savings with our AI-powered optimization platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Perfect for Every Industry
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI platform adapts to your industry's specific supply chain challenges and requirements.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-700/50 p-6 rounded-xl border border-slate-600 hover:border-green-500 transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <useCase.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
                  <p className="text-gray-300 text-sm">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that best fits your organization's supply chain complexity and scale as you grow.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative bg-slate-700/50 p-8 rounded-xl border-2 ${
                    plan.popular 
                      ? 'border-green-500 bg-gradient-to-br from-slate-700/50 to-green-900/20' 
                      : 'border-slate-600'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="/contact"
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Optimize Your Supply Chain?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join hundreds of companies already using our AI platform to streamline their supply chain operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Sales
                </a>
                <a
                  href="/demo"
                  className="inline-flex items-center px-8 py-4 border-2 border-green-500 text-green-400 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Schedule Demo
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}