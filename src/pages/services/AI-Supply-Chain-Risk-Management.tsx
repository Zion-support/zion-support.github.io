import React from 'react';
import { motion } from 'framer-motion';
import { 
  Truck, 
  Shield, 
  AlertTriangle, 
  Globe, 
  BarChart3, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Zap,
  Database,
  Settings,
  Eye,
  Star,
  Target,
  MapPin,
  TrendingUp
} from 'lucide-react';

const AISupplyChainRiskManagement: React.FC = () => {
  const features = [
    {
      icon: Truck,
      title: "Real-time Supply Chain Monitoring",
      description: "Track shipments, inventory, and supplier performance across global networks"
    },
    {
      icon: Shield,
      title: "AI-Powered Risk Assessment",
      description: "Predict supply chain disruptions using advanced machine learning algorithms"
    },
    {
      icon: AlertTriangle,
      title: "Early Warning System",
      description: "Proactive alerts for potential delays, shortages, and supplier issues"
    },
    {
      icon: Globe,
      title: "Global Supplier Intelligence",
      description: "Monitor supplier health, financial stability, and geopolitical risks"
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Forecast demand, optimize inventory, and identify cost-saving opportunities"
    },
    {
      icon: Clock,
      title: "Automated Risk Reporting",
      description: "Real-time dashboards and automated reports for stakeholders"
    }
  ];

  const benefits = [
    "Reduce supply chain disruptions by up to 45% through early detection",
    "Cut inventory costs by 25-35% with AI-powered demand forecasting",
    "Improve supplier performance by 30% with real-time monitoring",
    "Reduce lead times by 20-40% through optimized routing and planning",
    "Achieve 99.5% on-time delivery with predictive risk management",
    "Save up to $2M annually through automated risk mitigation"
  ];

  const pricing = [
    {
      plan: "Professional",
      price: "$2,800",
      period: "/month",
      features: [
        "Up to 100 suppliers monitoring",
        "Basic AI risk models",
        "Daily risk reports",
        "Email alerts",
        "Standard analytics",
        "Email support"
      ]
    },
    {
      plan: "Enterprise",
      price: "$6,800",
      period: "/month",
      features: [
        "Up to 1,000 suppliers monitoring",
        "Advanced AI risk models",
        "Real-time monitoring",
        "Custom risk thresholds",
        "Full analytics suite",
        "Priority support",
        "API access"
      ]
    },
    {
      plan: "Global",
      price: "$15,000",
      period: "/month",
      features: [
        "Unlimited suppliers monitoring",
        "Custom AI model training",
        "Multi-region support",
        "24/7 dedicated support",
        "Custom integrations",
        "White-label options",
        "On-premise deployment"
      ]
    }
  ];

  const useCases = [
    {
      title: "Manufacturing",
      description: "Monitor raw material suppliers and production line dependencies",
      icon: Target
    },
    {
      title: "Retail",
      description: "Track inventory levels and optimize stock across multiple locations",
      icon: BarChart3
    },
    {
      title: "Healthcare",
      description: "Ensure critical medical supplies and pharmaceutical availability",
      icon: Shield
    },
    {
      title: "Logistics",
      description: "Optimize shipping routes and monitor carrier performance",
      icon: Truck
    }
  ];

  const riskTypes = [
    {
      title: "Supplier Risk",
      description: "Financial stability, operational capacity, and compliance issues",
      icon: AlertTriangle
    },
    {
      title: "Geopolitical Risk",
      description: "Trade wars, sanctions, and political instability in supplier regions",
      icon: Globe
    },
    {
      title: "Natural Disasters",
      description: "Earthquakes, hurricanes, and climate-related disruptions",
      icon: AlertTriangle
    },
    {
      title: "Demand Volatility",
      description: "Sudden changes in customer demand and market conditions",
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-6">
              <Truck className="w-4 h-4 mr-2" />
              AI-Powered Supply Chain Risk Management
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Supply Chain
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                {" "}Risk Management
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Protect your supply chain with AI-driven risk management. Monitor suppliers globally, 
              predict disruptions, and optimize operations for maximum resilience and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-200"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-gray-500 hover:text-white transition-all duration-200"
              >
                Watch Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Supply Chain Risk Management
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Leverage AI to identify, assess, and mitigate supply chain risks in real-time
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Types Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Risk Coverage
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Monitor and mitigate all types of supply chain risks
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {riskTypes.map((risk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <risk.icon className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {risk.title}
                </h3>
                <p className="text-gray-400">
                  {risk.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Tailored solutions for different industries and supply chain types
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {useCase.title}
                </h3>
                <p className="text-gray-400">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Transform Your Supply Chain
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              See measurable improvements in resilience, efficiency, and cost savings
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose the plan that fits your supply chain risk management needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                  index === 1 
                    ? 'border-orange-500/50 bg-orange-500/5' 
                    : 'border-slate-700'
                }`}
              >
                {index === 1 && (
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-500 text-white text-sm font-medium mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    index === 1
                      ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:from-orange-600 hover:to-yellow-600'
                      : 'border border-slate-600 text-gray-300 hover:border-slate-500 hover:text-white'
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
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Secure Your Supply Chain?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join leading organizations that trust our AI-powered supply chain risk management platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-200"
              >
                Schedule a Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-gray-500 hover:text-white transition-all duration-200"
              >
                Call +1 (302) 464-0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 px-4 border-t border-slate-700">
        <div className="max-w-4xl mx-auto text-center">
          <div className="grid md:grid-cols-3 gap-8 text-gray-400">
            <div>
              <h3 className="text-white font-semibold mb-2">Contact Us</h3>
              <p>kleber@ziontechgroup.com</p>
              <p>+1 (302) 464-0950</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Address</h3>
              <p>364 E Main St STE 1008</p>
              <p>Middletown DE 19709</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Website</h3>
              <a 
                href="https://ziontechgroup.com" 
                className="text-orange-400 hover:text-orange-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISupplyChainRiskManagement;