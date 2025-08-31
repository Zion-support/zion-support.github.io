import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Shield, 
  AlertTriangle, 
  TrendingUp, 
  BarChart3, 
  Globe, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Users,
  Zap,
  Search,
  Eye,
  AlertCircle,
  MapPin,
  Phone,
  Mail,
  MapPin as MapPinIcon,
  Truck,
  Factory,
  Ship,
  Plane,
  Train,
  Car,
  Database,
  Network,
  Target,
  PieChart,
  LineChart,
  Bell,
  Settings,
  FileText,
  Calendar,
  DollarSign,
  Percent
} from 'lucide-react';

export default function AISupplyChainRiskManagement() {
  const features = [
    {
      title: "Real-Time Risk Monitoring",
      description: "24/7 monitoring of supply chain risks with instant alerts and notifications",
      icon: Eye,
      benefits: ["Instant risk detection", "Proactive alerts", "Real-time updates", "Automated monitoring"]
    },
    {
      title: "AI-Powered Risk Assessment",
      description: "Advanced AI algorithms analyze multiple risk factors and predict potential disruptions",
      icon: AlertTriangle,
      benefits: ["Predictive analytics", "Risk scoring", "Scenario modeling", "Impact assessment"]
    },
    {
      title: "Supply Chain Mapping",
      description: "Complete visibility into your supply chain network with supplier relationships and dependencies",
      icon: Network,
      benefits: ["End-to-end visibility", "Supplier mapping", "Dependency analysis", "Network optimization"]
    },
    {
      title: "Automated Mitigation Strategies",
      description: "AI-driven recommendations for risk mitigation and contingency planning",
      icon: Shield,
      benefits: ["Automated responses", "Contingency plans", "Mitigation strategies", "Recovery planning"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$399",
      period: "/month",
      description: "Perfect for small businesses with basic supply chain needs",
      features: [
        "Up to 100 suppliers monitored",
        "Basic risk alerts",
        "Standard reporting",
        "Email support",
        "Mobile app access",
        "Basic risk scoring"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$899",
      period: "/month",
      description: "Ideal for growing companies with complex supply chains",
      features: [
        "Up to 500 suppliers monitored",
        "Advanced AI risk assessment",
        "Real-time monitoring",
        "Priority support",
        "API access",
        "Custom dashboards",
        "Team collaboration",
        "Advanced analytics"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For large enterprises with global supply chains",
      features: [
        "Unlimited suppliers",
        "Custom AI models",
        "White-label solution",
        "24/7 dedicated support",
        "Advanced risk modeling",
        "Custom integrations",
        "On-premise deployment",
        "SLA guarantees",
        "Multi-site management",
        "Advanced reporting"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const riskTypes = [
    {
      title: "Supplier Risks",
      description: "Monitor supplier financial health, performance, and compliance",
      icon: Factory,
      risks: ["Financial instability", "Quality issues", "Delivery delays", "Compliance violations"]
    },
    {
      title: "Logistics Risks",
      description: "Track transportation and delivery risks across all modes",
      icon: Truck,
      risks: ["Port congestion", "Weather delays", "Capacity constraints", "Route disruptions"]
    },
    {
      title: "Geopolitical Risks",
      description: "Monitor political, economic, and regulatory changes",
      icon: Globe,
      risks: ["Trade wars", "Sanctions", "Political instability", "Regulatory changes"]
    },
    {
      title: "Demand Risks",
      description: "Predict and manage demand fluctuations and market changes",
      icon: TrendingUp,
      risks: ["Demand volatility", "Market shifts", "Seasonal changes", "Competitive pressure"]
    }
  ];

  const transportationModes = [
    { name: "Ocean Freight", icon: Ship, description: "Container ships and bulk carriers" },
    { name: "Air Freight", icon: Plane, description: "Cargo planes and express delivery" },
    { name: "Rail Transport", icon: Train, description: "Freight trains and intermodal" },
    { name: "Road Transport", icon: Car, description: "Trucks and delivery vehicles" }
  ];

  const stats = [
    { number: "99.9%", label: "Uptime", icon: Clock },
    { number: "50+", label: "Countries Monitored", icon: Globe },
    { number: "10,000+", label: "Suppliers Tracked", icon: Database },
    { number: "24/7", label: "Monitoring", icon: Eye }
  ];

  const benefits = [
    "Reduce supply chain disruptions by 80%",
    "Cut risk management costs by 60%",
    "Improve supplier performance by 45%",
    "Increase supply chain resilience by 70%",
    "Reduce inventory costs by 30%",
    "Improve customer satisfaction by 50%"
  ];

  return (
    <>
      <Helmet>
        <title>AI Supply Chain Risk Management Platform - Zion Tech Group</title>
        <meta name="description" content="Protect your supply chain with AI-powered risk management. Monitor suppliers, predict disruptions, and automate mitigation strategies with our advanced platform." />
        <meta name="keywords" content="AI supply chain risk management, supplier monitoring, supply chain visibility, risk assessment AI, disruption prediction" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-supply-chain-risk-management" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative z-10 container mx-auto px-4 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 text-sm font-medium mb-6">
                <Zap className="w-4 h-4 mr-2 text-yellow-400" />
                AI-Powered Risk Management
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                AI Supply Chain <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Risk Management</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Protect your supply chain with AI-powered risk management. Monitor suppliers in real-time, predict disruptions, 
                and automate mitigation strategies. Reduce supply chain disruptions by 80% and cut risk management costs by 60%.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
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

        {/* Features Section */}
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
                Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI platform provides comprehensive supply chain risk management with real-time monitoring and predictive analytics.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300"
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                  
                  <div className="space-y-3">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Risk Types Section */}
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
                Risk <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Categories</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive coverage of all major supply chain risk categories with AI-powered monitoring and assessment.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {riskTypes.map((riskType, index) => (
                <motion.div
                  key={riskType.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300 text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center">
                      <riskType.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{riskType.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{riskType.description}</p>
                  
                  <div className="space-y-2">
                    {riskType.risks.map((risk, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{risk}</span>
                      </div>
                    ))}
                  </div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Transportation Modes Covered
              </h2>
              <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
                Monitor risks across all major transportation modes and logistics networks.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {transportationModes.map((mode, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zinc-800/30 border border-zinc-700/30 rounded-lg p-6 text-center hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">
                    <mode.icon className="w-12 h-12 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{mode.name}</h3>
                  <p className="text-sm text-zinc-400">{mode.description}</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Our Platform?
              </h2>
              <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
                Proven results and measurable impact across all our risk management solutions.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zinc-800/30 border border-zinc-700/30 rounded-lg p-6 text-center hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-zinc-300 font-medium">{benefit}</p>
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
                Simple <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that best fits your supply chain risk management needs. All plans include a 14-day free trial.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 ${
                    plan.popular 
                      ? 'border-cyan-500/50 bg-gradient-to-br from-white/5 to-cyan-900/20' 
                      : 'border-white/10'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{plan.description}</p>
                  </div>
                  
                  <div className="mb-8">
                    <div className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                        : 'bg-zinc-700 text-white hover:bg-zinc-600'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Protect Your Supply Chain?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Join thousands of companies who have already revolutionized their supply chain risk management with AI-powered solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-6">Get in Touch</h3>
                  <p className="text-gray-300 mb-8">
                    Ready to revolutionize your supply chain risk management? Our team is here to help you get started with AI-powered solutions.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300">+1 302 464 0950</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300">kleber@ziontechgroup.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPinIcon className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300">364 E Main St STE 1008, Middletown DE 19709</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                    />
                    <textarea
                      placeholder="Message"
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                    ></textarea>
                    <button
                      type="submit"
                      className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}