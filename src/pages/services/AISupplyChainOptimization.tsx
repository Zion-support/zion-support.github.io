import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Truck, 
  Brain, 
  BarChart3, 
  Globe, 
  CheckCircle,
  ArrowRight,
  Star,
  DollarSign,
  Target,
  Rocket,
  Cpu,
  Database,
  Cloud,
  Lock,
  Phone,
  Mail,
  MapPin,
  Zap,
  TrendingUp,
  Shield,
  Clock,
  Eye,
  Package,
  Warehouse,
  Route,
  AlertTriangle,
  RefreshCw,
  Users,
  Settings
} from 'lucide-react';

export default function AISupplyChainOptimization() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Demand Forecasting",
      description: "Machine learning algorithms that predict demand patterns with 95% accuracy, reducing stockouts and overstock situations."
    },
    {
      icon: Route,
      title: "Intelligent Route Optimization",
      description: "AI algorithms that calculate the most efficient delivery routes, reducing fuel costs and delivery times by up to 30%."
    },
    {
      icon: Warehouse,
      title: "Smart Inventory Management",
      description: "Real-time inventory tracking with predictive analytics for optimal stock levels and automated reorder points."
    },
    {
      icon: Globe,
      title: "Global Supply Chain Visibility",
      description: "End-to-end visibility across your entire supply chain with real-time tracking and predictive analytics."
    },
    {
      icon: AlertTriangle,
      title: "Risk Management & Alerts",
      description: "Proactive identification of supply chain risks with automated alerts and mitigation recommendations."
    },
    {
      icon: RefreshCw,
      title: "Dynamic Optimization",
      description: "Continuous learning and adaptation to changing market conditions, demand patterns, and supply constraints."
    }
  ];

  const benefits = [
    "Reduce inventory costs by 25-40%",
    "Improve delivery performance by 35%",
    "Cut supply chain costs by 20-30%",
    "Increase customer satisfaction by 45%",
    "Reduce carbon footprint by 30%",
    "Improve supplier performance by 40%"
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$599",
      period: "/month",
      description: "Perfect for small businesses with basic supply chain optimization needs",
      features: [
        "Up to 5 locations",
        "Basic demand forecasting",
        "Inventory optimization",
        "Standard reporting",
        "Email support",
        "3 team members",
        "Basic integrations"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$1,299",
      period: "/month",
      description: "Ideal for growing businesses with complex supply chain operations",
      features: [
        "Up to 25 locations",
        "Advanced AI forecasting",
        "Route optimization",
        "Risk management",
        "Advanced analytics",
        "Unlimited team members",
        "Priority support",
        "API access",
        "Custom dashboards",
        "Multi-warehouse optimization"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$3,499",
      period: "/month",
      description: "For large organizations requiring enterprise-grade supply chain optimization",
      features: [
        "Unlimited locations",
        "Custom AI models",
        "Advanced risk management",
        "White-label solutions",
        "Advanced security & compliance",
        "Custom training & onboarding",
        "SLA guarantees",
        "24/7 dedicated support",
        "On-premise options",
        "Multi-enterprise support"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      industry: "Manufacturing",
      description: "Optimize production planning, raw material procurement, and finished goods distribution",
      benefits: ["Reduced lead times", "Better resource utilization", "Improved production efficiency"]
    },
    {
      industry: "Retail & E-commerce",
      description: "Streamline inventory management, demand forecasting, and last-mile delivery optimization",
      benefits: ["Higher inventory turnover", "Better customer service", "Reduced shipping costs"]
    },
    {
      industry: "Healthcare",
      description: "Optimize medical supply chains, pharmaceutical distribution, and equipment logistics",
      benefits: ["Better patient care", "Reduced waste", "Improved compliance"]
    },
    {
      industry: "Food & Beverage",
      description: "Optimize perishable goods supply chains with temperature monitoring and freshness tracking",
      benefits: ["Reduced spoilage", "Better quality control", "Improved sustainability"]
    }
  ];

  const capabilities = [
    {
      category: "AI & Machine Learning",
      items: [
        "Demand Forecasting",
        "Inventory Optimization",
        "Route Optimization",
        "Supplier Performance Analysis",
        "Risk Assessment",
        "Predictive Maintenance"
      ]
    },
    {
      category: "Supply Chain Management",
      items: [
        "Multi-location Management",
        "Real-time Tracking",
        "Automated Reordering",
        "Supplier Management",
        "Quality Control",
        "Compliance Monitoring"
      ]
    },
    {
      category: "Analytics & Reporting",
      items: [
        "Real-time Dashboards",
        "Performance Metrics",
        "Cost Analysis",
        "Sustainability Tracking",
        "Predictive Analytics",
        "Custom Reports"
      ]
    },
    {
      category: "Integration & Security",
      items: [
        "ERP Integration",
        "WMS Integration",
        "TMS Integration",
        "Data Encryption",
        "GDPR Compliance",
        "Enterprise SSO"
      ]
    }
  ];

  const technologies = [
    {
      name: "Machine Learning",
      description: "Advanced ML algorithms for demand forecasting and optimization",
      icon: Brain
    },
    {
      name: "IoT Sensors",
      description: "Real-time monitoring of inventory, temperature, and location",
      icon: Package
    },
    {
      name: "Blockchain",
      description: "Secure, transparent tracking of goods across the supply chain",
      icon: Lock
    },
    {
      name: "Cloud Computing",
      description: "Scalable, secure infrastructure for global operations",
      icon: Cloud
    },
    {
      name: "Big Data Analytics",
      description: "Processing and analysis of massive supply chain datasets",
      icon: BarChart3
    },
    {
      name: "API Integration",
      description: "Seamless connection with existing business systems",
      icon: Settings
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Supply Chain Optimization - Zion Tech Group"
        description="Transform your supply chain with AI-powered optimization. Reduce costs, improve efficiency, and gain real-time visibility across your entire operation."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-medium mb-6">
              <Truck className="w-4 h-4 mr-2" />
              AI-Powered Supply Chain
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              AI Supply Chain Optimization
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionize your supply chain with AI-powered optimization that reduces costs, improves efficiency, 
              and provides real-time visibility across your entire operation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Powerful Features for Supply Chain Excellence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform provides everything you need to optimize, automate, and transform your supply chain operations.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-blue-500 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Transform Your Supply Chain Performance
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See measurable improvements in efficiency, cost reduction, and customer satisfaction.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-lg text-white">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Comprehensive Platform Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to optimize your supply chain from end to end.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600"
              >
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mr-3">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Cutting-Edge Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built on the latest AI and supply chain technologies for maximum performance and reliability.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-700 to-slate-600 p-6 rounded-xl border border-slate-500 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{tech.name}</h3>
                <p className="text-gray-300">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include a 14-day free trial.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border-2 ${
                  plan.popular 
                    ? 'border-blue-500 from-blue-900/20 to-blue-800/20' 
                    : 'border-slate-600'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
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
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700'
                      : 'bg-slate-600 text-white hover:bg-slate-500'
                  }`}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI supply chain optimization platform is designed to work across all industries.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-700 to-slate-600 p-6 rounded-xl border border-slate-500"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.industry}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses that have transformed their supply chain operations with AI-powered optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Ready to revolutionize your supply chain? Our experts are here to help you get started.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-white">+1 302 464 0950</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-white">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-white">364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-slate-700 to-slate-600 p-8 rounded-xl border border-slate-500"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Request a Demo</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Company"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about your supply chain optimization needs"
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                >
                  Request Demo
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}