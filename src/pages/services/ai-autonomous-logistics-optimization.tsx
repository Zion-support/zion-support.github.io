import React from 'react';
import { motion } from 'framer-motion';
import { 
  Truck, 
  Brain, 
  Zap, 
  Route, 
  Package, 
  CheckCircle, 
  ArrowRight,
  Users,
  Globe,
  MapPin,
  Clock,
  DollarSign,
  Star,
  Award,
  Rocket,
  Cpu,
  Monitor,
  Smartphone,
  Cloud,
  Target,
  TrendingUp,
  Lightbulb,
  Heart,
  Sparkles,
  Play,
  Factory,
  BarChart3,
  Activity,
  Network,
  Database,
  Shield,
  Settings,
  Gauge,
  Fuel,
  Calendar,
  AlertTriangle,
  CheckSquare,
  FileText,
  Code,
  Palette,
  ShoppingCart,
  Snowflake
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function AIAutonomousLogisticsOptimization() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Route Optimization",
      description: "Advanced algorithms that continuously learn and optimize delivery routes in real-time for maximum efficiency."
    },
    {
      icon: Truck,
      title: "Autonomous Fleet Management",
      description: "Intelligent fleet coordination with predictive maintenance and real-time vehicle tracking."
    },
    {
      icon: Route,
      title: "Dynamic Route Planning",
      description: "Real-time route adjustments based on traffic, weather, and delivery priorities."
    },
    {
      icon: Package,
      title: "Smart Inventory Management",
      description: "AI-driven demand forecasting and automated inventory optimization across all locations."
    },
    {
      icon: Activity,
      title: "Predictive Analytics",
      description: "Machine learning models that predict delivery times, delays, and optimize resource allocation."
    },
    {
      icon: Network,
      title: "Supply Chain Intelligence",
      description: "End-to-end visibility and optimization across the entire supply chain network."
    }
  ];

  const benefits = [
    "Reduce delivery costs by up to 40% with AI optimization",
    "Improve delivery accuracy to 99.5%",
    "Real-time fleet monitoring and predictive maintenance",
    "Automated route planning saves 25% in fuel costs",
    "24/7 autonomous logistics operations",
    "Seamless integration with existing ERP and WMS systems"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for small logistics operations",
      features: [
        "AI route optimization",
        "Basic fleet tracking",
        "Up to 50 vehicles",
        "Email support",
        "Standard reporting"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$599",
      period: "/month",
      description: "Ideal for growing logistics companies",
      features: [
        "Advanced AI optimization",
        "Full fleet management",
        "Up to 200 vehicles",
        "Priority support",
        "Advanced analytics",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,499",
      period: "/month",
      description: "For large logistics enterprises",
      features: [
        "Enterprise AI logistics",
        "Custom optimization models",
        "Unlimited vehicles",
        "Dedicated support team",
        "Custom analytics",
        "API access & integrations"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "E-commerce Delivery",
      description: "Optimize last-mile delivery with AI-powered route planning and real-time tracking.",
      icon: Package
    },
    {
      title: "Manufacturing Supply Chain",
      description: "Streamline raw material delivery and finished product distribution with predictive analytics.",
      icon: Factory
    },
    {
      title: "Retail Distribution",
      description: "Optimize store replenishment and cross-docking operations for maximum efficiency.",
      icon: ShoppingCart
    },
    {
      title: "Cold Chain Logistics",
      description: "Monitor temperature-sensitive shipments with IoT sensors and AI-powered alerts.",
      icon: Snowflake
    }
  ];

  const industries = [
    "E-commerce & Retail",
    "Manufacturing & Industrial",
    "Healthcare & Pharmaceuticals",
    "Food & Beverage",
    "Automotive & Aerospace",
    "Energy & Utilities"
  ];

  return (
    <>
      <SEO 
        title="AI Autonomous Logistics Optimization | Zion Tech Group"
        description="Revolutionary AI-powered logistics optimization platform. Reduce costs by 40%, improve delivery accuracy to 99.5%, and achieve autonomous fleet management. Transform your supply chain today."
        keywords="AI logistics, autonomous logistics, route optimization, fleet management, supply chain optimization, delivery optimization, logistics AI"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full text-zion-cyan text-sm font-medium mb-8">
                <Truck className="w-4 h-4 mr-2" />
                AI-Powered Autonomous Logistics
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                AI Autonomous
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple"> Logistics</span>
                <br />Optimization
              </h1>
              
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
                Transform your logistics operations with autonomous AI that never sleeps. 
                Reduce costs by 40%, improve delivery accuracy to 99.5%, and achieve 
                unprecedented efficiency in your supply chain.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center justify-center"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-20 right-20 w-32 h-32 border border-zion-cyan/20 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-20 left-20 w-24 h-24 border border-zion-purple/20 rounded-full"
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-zion-slate-dark/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Revolutionary Logistics Features
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Our AI platform combines cutting-edge technology with autonomous capabilities 
                to provide unmatched logistics optimization.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-zion-slate-light">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Our Platform?
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Experience unprecedented logistics efficiency with autonomous AI that continuously 
                learns, optimizes, and improves your operations.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {benefits.slice(0, 3).map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <CheckCircle className="w-6 h-6 text-zion-cyan mt-1 flex-shrink-0" />
                    <span className="text-zion-slate-light">{benefit}</span>
                  </motion.div>
                ))}
              </div>
              <div className="space-y-6">
                {benefits.slice(3).map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <CheckCircle className="w-6 h-6 text-zion-cyan mt-1 flex-shrink-0" />
                    <span className="text-zion-slate-light">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-zion-slate-dark/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Transparent Pricing
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Choose the plan that fits your logistics needs. All plans include 
                our core AI-powered optimization features.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative bg-zion-slate-dark border rounded-xl p-8 ${
                    plan.popular 
                      ? 'border-zion-cyan shadow-lg shadow-zion-cyan/20' 
                      : 'border-zion-purple/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-zion-slate-light mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-zion-slate-light ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                        <span className="text-zion-slate-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:shadow-lg'
                        : 'bg-zion-purple/20 text-zion-purple border border-zion-purple/30 hover:bg-zion-purple/30'
                    }`}
                  >
                    Get Started
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Industry Solutions
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Our platform is designed to meet the unique logistics challenges 
                of various industries.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-zion-slate-light">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-zion-slate-dark/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Industries We Serve
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Our AI logistics platform is trusted by leading companies across 
                multiple industries worldwide.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 border border-zion-purple/20 rounded-lg p-4 text-center hover:border-zion-cyan/40 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Factory className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-zion-slate-light text-sm font-medium">{industry}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Optimize Your Logistics?
              </h2>
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
                Join thousands of companies that trust our AI-powered 
                autonomous logistics optimization platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                >
                  <Truck className="w-5 h-5 mr-2" />
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center justify-center"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}