import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Truck, 
  Network, 
  Brain, 
  Shield, 
  Database, 
  Globe,
  CheckCircle,
  Star,
  DollarSign,
  Target,
  Handshake,
  Lightbulb,
  Cloud,
  Building,
  Heart,
  ShoppingCart,
  FileText,
  Sparkles,
  Workflow,
  ShieldCheck,
  Activity,
  PieChart,
  LineChart,
  BarChart,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Zap,
  Eye,
  Search,
  Filter,
  Archive,
  RefreshCw,
  Globe2,
  Factory,
  Car,
  Plane,
  Satellite,
  Wifi,
  HardDrive,
  Monitor,
  Server,
  Router,
  Smartphone,
  AlertTriangle,
  TrendingUp,
  TrendingDown
} from 'lucide-react';

export default function AISupplyChainRiskManagementPlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Risk Assessment",
      description: "Intelligent algorithms that continuously monitor and assess supply chain risks in real-time."
    },
    {
      icon: Network,
      title: "End-to-End Visibility",
      description: "Complete transparency across your entire supply chain from suppliers to end customers."
    },
    {
      icon: Truck,
      title: "Logistics Optimization",
      description: "AI-driven route optimization, inventory management, and delivery scheduling."
    },
    {
      icon: Database,
      title: "Predictive Analytics",
      description: "Advanced forecasting and risk prediction using machine learning and historical data."
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Automated alerts and proactive strategies to minimize supply chain disruptions."
    },
    {
      icon: Eye,
      title: "Real-time Monitoring",
      description: "Continuous tracking of suppliers, shipments, and potential risk factors."
    }
  ];

  const benefits = [
    "Reduce supply chain disruptions by 70%",
    "Lower operational costs by 40%",
    "Improve delivery reliability by 85%",
    "Real-time risk monitoring",
    "Enhanced supplier management",
    "Better inventory optimization",
    "Improved customer satisfaction",
    "Competitive advantage"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$4,499",
      period: "/month",
      description: "Perfect for small organizations starting with supply chain risk management",
      features: [
        "Basic risk assessment",
        "Supplier monitoring",
        "Standard reporting",
        "Email support",
        "Basic analytics",
        "Up to 100 suppliers"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$9,999",
      period: "/month",
      description: "Ideal for growing organizations with complex supply chain needs",
      features: [
        "Advanced risk assessment",
        "Full supply chain visibility",
        "Predictive analytics",
        "Priority support",
        "Advanced monitoring",
        "Unlimited suppliers",
        "Custom models",
        "API integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$19,999",
      period: "/month",
      description: "For large enterprises requiring maximum supply chain risk management capabilities",
      features: [
        "Full risk management suite",
        "Custom AI model development",
        "Advanced risk features",
        "Dedicated support team",
        "Multi-tenant architecture",
        "Custom integrations",
        "SLA guarantees",
        "On-premise deployment option"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      industry: "Manufacturing",
      description: "Supply chain optimization, supplier risk management, and production planning",
      icon: Factory
    },
    {
      industry: "Retail",
      description: "Inventory management, supplier monitoring, and customer demand forecasting",
      icon: ShoppingCart
    },
    {
      industry: "Healthcare",
      description: "Medical supply chain management, supplier compliance, and patient safety",
      icon: Heart
    },
    {
      industry: "Automotive",
      description: "Parts supply chain, supplier quality management, and production scheduling",
      icon: Car
    },
    {
      industry: "Technology",
      description: "Component supply chain, supplier risk assessment, and product development",
      icon: Cpu
    },
    {
      industry: "Food & Beverage",
      description: "Food safety, supplier compliance, and quality assurance",
      icon: ShoppingCart
    }
  ];

  const riskCategories = [
    "Supplier Risk",
    "Logistics Risk",
    "Demand Risk",
    "Financial Risk",
    "Regulatory Risk",
    "Environmental Risk",
    "Geopolitical Risk",
    "Technology Risk"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Supply Chain Risk Management Platform - Zion Tech Group"
        description="Comprehensive AI-powered supply chain risk management platform for end-to-end visibility, risk assessment, and predictive analytics. Transform your supply chain operations."
        keywords="AI supply chain risk management, supplier monitoring, logistics optimization, risk assessment, supply chain visibility"
        canonicalUrl="https://ziontechgroup.com/services/AI-Supply-Chain-Risk-Management-Platform"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-blue-500/10 to-indigo-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Supply Chain{' '}
              <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                Risk Management Platform
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Master your supply chain with our AI-powered risk management platform. Gain end-to-end visibility, 
              predict disruptions, and optimize operations for maximum efficiency and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 bg-gradient-to-r from-teal-400 to-blue-500 text-white font-semibold rounded-lg hover:from-teal-500 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg shadow-teal-500/25"
              >
                Get Started
              </a>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border border-teal-400/50 text-teal-400 font-semibold rounded-lg hover:bg-teal-400/10 transition-all duration-200"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Transform Supply Chain Operations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform delivers measurable improvements that revolutionize how organizations manage and optimize their supply chains
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-teal-400/50 transition-all duration-300"
              >
                <CheckCircle className="w-12 h-12 text-teal-400 mb-4" />
                <p className="text-white text-lg">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-r from-teal-500/5 to-blue-500/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Risk Management Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge AI capabilities designed specifically for comprehensive supply chain risk management
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-teal-400/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Categories */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Risk Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform monitors and manages all critical supply chain risk factors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {riskCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-white/10 hover:border-teal-400/50 transition-all duration-300 text-center"
              >
                <AlertTriangle className="w-8 h-8 text-teal-400 mx-auto mb-3" />
                <p className="text-white font-semibold">{category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gradient-to-r from-teal-500/5 to-blue-500/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform serves diverse industries with specialized supply chain risk management solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-teal-400/50 transition-all duration-300"
              >
                <useCase.icon className="w-12 h-12 text-teal-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.industry}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Risk Management Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that transforms your supply chain risk management capabilities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white/5 backdrop-blur-lg rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-teal-400/50 scale-105' 
                    : 'border-white/10 hover:border-teal-400/30'
                }`}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-teal-500 to-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-teal-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=AI%20Supply%20Chain%20Risk%20Management%20Platform%20-%20{plan.name}%20Plan"
                  className="w-full bg-gradient-to-r from-teal-400 to-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-teal-500 hover:to-blue-600 transition-all duration-200 text-center block"
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-teal-500/5 to-blue-500/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Master Your Supply Chain?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to learn how our AI Supply Chain Risk Management Platform can transform your operations
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-teal-400 mb-3" />
                <p className="text-white font-semibold">Phone</p>
                <a href="tel:+13024640950" className="text-teal-400 hover:text-teal-300 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-teal-400 mb-3" />
                <p className="text-white font-semibold">Email</p>
                <a href="mailto:kleber@ziontechgroup.com" className="text-teal-400 hover:text-teal-300 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-teal-400 mb-3" />
                <p className="text-white font-semibold">Address</p>
                <p className="text-gray-300 text-sm">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=AI%20Supply%20Chain%20Risk%20Management%20Platform%20Inquiry"
                className="px-8 py-4 bg-gradient-to-r from-teal-400 to-blue-500 text-white font-semibold rounded-lg hover:from-teal-500 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg shadow-teal-500/25"
              >
                Request Demo
              </a>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border border-teal-400/50 text-teal-400 font-semibold rounded-lg hover:bg-teal-400/10 transition-all duration-200"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}