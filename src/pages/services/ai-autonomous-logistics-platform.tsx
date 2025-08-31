import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Truck, 
  Route, 
  Package, 
  Globe, 
  Zap, 
  Shield, 
  BarChart3, 
  Clock, 
  DollarSign, 
  CheckCircle,
  MapPin,
  TrendingUp,
  Users,
  Cpu,
  Database,
  Network,
  Smartphone,
  Lock,
  Eye,
  Sparkles,
  Phone,
  Mail,
  ArrowRight,
  Star,
  Award,
  Rocket,
  Target,
  Lightbulb,
  Code,
  Server,
  Wifi,
  Activity,
  FileText,
  MessageCircle,
  Search,
  BarChart,
  Settings,
  Palette,
  Scale,
  Gauge,
  PenTool,
  Brain,
  Cloud,
  ShieldCheck,
  Bot,
  Workflow,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Video,
  GraduationCap,
  Handshake,
  ShoppingCart,
  Heart,
  Home
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AIAutonomousLogisticsPlatform() {
  const features = [
    {
      title: "AI-Powered Route Optimization",
      description: "Advanced algorithms that optimize delivery routes in real-time, reducing fuel costs and delivery times by up to 35%",
      icon: Route,
      benefits: ["Real-time traffic analysis", "Weather impact prediction", "Dynamic route recalculation", "Multi-stop optimization"]
    },
    {
      title: "Autonomous Fleet Management",
      description: "Intelligent fleet coordination with predictive maintenance and autonomous decision-making capabilities",
      icon: Truck,
      benefits: ["Predictive maintenance alerts", "Autonomous dispatching", "Real-time fleet tracking", "Performance analytics"]
    },
    {
      title: "Smart Inventory Management",
      description: "AI-driven inventory forecasting and automated reordering to prevent stockouts and overstock situations",
      icon: Package,
      benefits: ["Demand forecasting", "Automated reordering", "Seasonal trend analysis", "Multi-warehouse optimization"]
    },
    {
      title: "Real-Time Supply Chain Visibility",
      description: "End-to-end visibility across the entire supply chain with predictive analytics and risk assessment",
      icon: Eye,
      benefits: ["End-to-end tracking", "Risk assessment", "Performance metrics", "Compliance monitoring"]
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small logistics operations",
      features: [
        "Up to 50 vehicles",
        "Basic route optimization",
        "Real-time tracking",
        "Basic analytics dashboard",
        "Email support",
        "Mobile app access"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for growing logistics companies",
      features: [
        "Up to 200 vehicles",
        "Advanced AI optimization",
        "Predictive analytics",
        "Multi-warehouse support",
        "API access",
        "Priority support",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For large-scale logistics operations",
      features: [
        "Unlimited vehicles",
        "Full AI autonomy",
        "Advanced predictive modeling",
        "Custom AI training",
        "24/7 dedicated support",
        "White-label solutions",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Cost Reduction",
      value: "35%",
      description: "Average reduction in operational costs through AI optimization"
    },
    {
      title: "Delivery Speed",
      value: "40%",
      description: "Faster delivery times with intelligent route planning"
    },
    {
      title: "Fuel Efficiency",
      value: "25%",
      description: "Improved fuel efficiency through optimized routes"
    },
    {
      title: "Customer Satisfaction",
      value: "95%",
      description: "Higher customer satisfaction with accurate ETAs"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Autonomous Logistics Platform - Zion Tech Group</title>
        <meta name="description" content="Revolutionize your logistics operations with our AI-powered autonomous platform. Reduce costs by 35%, improve delivery times by 40%, and achieve 95% customer satisfaction." />
        <meta name="keywords" content="AI logistics, autonomous logistics, route optimization, fleet management, supply chain AI, logistics automation" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-autonomous-logistics-platform" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-cyan/20 border border-zion-cyan/30 text-zion-cyan text-sm font-medium mb-6">
              <Truck className="w-4 h-4 mr-2" />
              AI-Powered Logistics
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              AI Autonomous
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple"> Logistics Platform</span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Transform your logistics operations with cutting-edge AI that optimizes routes, manages fleets autonomously, 
              and provides real-time supply chain visibility. Reduce costs by 35% and improve delivery efficiency by 40%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center px-8 py-4 border border-zion-purple/30 text-zion-purple font-semibold rounded-lg hover:bg-zion-purple/10 transition-all duration-300"
              >
                <Video className="mr-2 w-5 h-5" />
                Watch Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Results Across Industries
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our AI platform has delivered measurable improvements for logistics companies worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-6 bg-zion-slate-dark/50 rounded-xl border border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="text-4xl font-bold text-zion-cyan mb-2">{benefit.value}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-zion-slate-light text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced AI Capabilities
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Leverage cutting-edge artificial intelligence to revolutionize your logistics operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="p-8 bg-zion-slate-dark/50 rounded-xl border border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-zion-cyan/20 rounded-lg">
                    <feature.icon className="w-6 h-6 text-zion-cyan" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-zion-slate-light mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Choose the plan that fits your logistics operation size and requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative p-8 rounded-xl border transition-all duration-300 ${
                  tier.popular
                    ? 'bg-zion-slate-dark border-zion-cyan/40 scale-105'
                    : 'bg-zion-slate-dark/50 border-zion-purple/20 hover:border-zion-cyan/40'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-zion-cyan text-zion-slate-dark px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-zion-cyan mb-2">
                    {tier.price}
                    <span className="text-lg text-zion-slate-light">{tier.period}</span>
                  </div>
                  <p className="text-zion-slate-light">{tier.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white hover:from-zion-cyan/90 hover:to-zion-blue/90'
                      : 'bg-zion-purple/20 text-zion-purple border border-zion-purple/30 hover:bg-zion-purple/30'
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
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Logistics Operations?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join hundreds of companies already using our AI platform to reduce costs, improve efficiency, 
              and deliver exceptional customer experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-zion-purple/30 text-zion-purple font-semibold rounded-lg hover:bg-zion-purple/10 transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call +1 (302) 464-0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}