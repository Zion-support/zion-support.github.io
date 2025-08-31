import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Truck, 
  TrendingUp, 
  Shield, 
  Zap, 
  Globe, 
  Users, 
  Award,
  CheckCircle,
  ArrowRight,
  Star,
  BarChart3,
  Cpu,
  Database,
  Lock,
  Eye,
  Target,
  Rocket,
  DollarSign,
  Clock,
  Phone,
  Mail,
  MapPin,
  Package,
  Warehouse,
  Factory,
  Route,
  BarCode,
  Gauge,
  AlertTriangle,
  Calendar,
  Smartphone,
  Cloud,
  Network,
  Server
} from 'lucide-react';

const AISupplyChainOptimizationPlatform: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Demand Forecasting",
      description: "Predict demand with 92% accuracy using machine learning and historical data analysis"
    },
    {
      icon: Truck,
      title: "Intelligent Route Optimization",
      description: "Optimize delivery routes in real-time, reducing fuel costs by up to 25%"
    },
    {
      icon: TrendingUp,
      title: "Inventory Optimization",
      description: "Automated inventory management with just-in-time ordering and stock level optimization"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Identify and mitigate supply chain risks with AI-powered predictive analytics"
    },
    {
      icon: Zap,
      title: "Real-time Tracking",
      description: "End-to-end visibility across your entire supply chain with IoT integration"
    },
    {
      icon: Globe,
      title: "Global Supply Chain Management",
      description: "Manage multi-country operations with localized compliance and regulations"
    }
  ];

  const benefits = [
    "Reduce supply chain costs by 20-35% through AI optimization",
    "Improve delivery accuracy by 95% with predictive analytics",
    "Reduce inventory carrying costs by 30% with smart forecasting",
    "Increase supplier performance by 40% with automated monitoring",
    "Reduce lead times by 25% through route optimization",
    "Improve customer satisfaction by 50% with better delivery performance"
  ];

  const pricing = [
    {
      name: "Startup",
      price: "$2,000",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Basic demand forecasting",
        "Up to 5 locations",
        "Standard analytics dashboard",
        "Email support",
        "Basic integrations"
      ],
      popular: false
    },
    {
      name: "Enterprise",
      price: "$8,000",
      period: "/month",
      description: "Ideal for growing companies and mid-size enterprises",
      features: [
        "Advanced AI forecasting",
        "Up to 25 locations",
        "Custom analytics dashboard",
        "Priority support",
        "Advanced integrations",
        "Risk management tools"
      ],
      popular: true
    },
    {
      name: "Global",
      price: "$25,000",
      period: "/month",
      description: "For large multinational corporations",
      features: [
        "Full AI optimization suite",
        "Unlimited locations",
        "Custom AI models",
        "White-label solutions",
        "24/7 dedicated support",
        "On-premise deployment",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Manufacturing",
      description: "Optimize production schedules, inventory levels, and supplier relationships"
    },
    {
      title: "Retail & E-commerce",
      description: "Streamline order fulfillment, warehouse operations, and last-mile delivery"
    },
    {
      title: "Logistics & Transportation",
      description: "Optimize routes, reduce fuel costs, and improve delivery efficiency"
    },
    {
      title: "Food & Beverage",
      description: "Manage perishable inventory and ensure food safety compliance"
    },
    {
      title: "Healthcare & Pharmaceuticals",
      description: "Ensure critical supplies reach healthcare facilities on time"
    }
  ];

  const integrations = [
    "SAP ERP",
    "Oracle SCM",
    "Microsoft Dynamics",
    "NetSuite",
    "Salesforce",
    "Shopify",
    "WMS Systems",
    "TMS Platforms",
    "IoT Devices",
    "Blockchain Networks"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-400 text-sm font-medium mb-8">
              <Package className="w-4 h-4 mr-2" />
              Revolutionary Supply Chain AI Technology
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Supply Chain
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                {" "}Optimization Platform
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your supply chain operations with AI-powered optimization. Reduce costs, 
              improve efficiency, and enhance customer satisfaction with predictive analytics and automation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Get Started Today
              </a>
              <a
                href="#demo"
                className="inline-flex items-center px-8 py-4 border border-white/20 text-white hover:bg-white/10 font-semibold rounded-lg transition-colors"
              >
                <Eye className="w-5 h-5 mr-2" />
                Watch Demo
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Supply Chain Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the future of supply chain management with cutting-edge AI technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your Supply Chain
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See measurable improvements in efficiency and cost reduction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <CheckCircle className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                <p className="text-lg text-gray-300">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Competitive Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your organization's supply chain needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-white/5 backdrop-blur-lg border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-orange-500 bg-orange-500/10' 
                    : 'border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors ${
                    plan.popular
                      ? 'bg-orange-600 hover:bg-orange-700 text-white'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Proven solutions across multiple industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Works with your existing systems and platforms
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg p-4 text-center hover:bg-white/10 transition-all duration-300"
              >
                <p className="text-gray-300 font-medium">{integration}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading companies already using our AI optimization platform
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Schedule a Demo
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 border border-white/20 text-white hover:bg-white/10 font-semibold rounded-lg transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Sales
              </a>
            </div>

            <div className="mt-8 text-gray-400">
              <p>Contact us: <a href="tel:+13024640950" className="text-orange-400 hover:text-orange-300">+1 302 464 0950</a></p>
              <p>Email: <a href="mailto:kleber@ziontechgroup.com" className="text-orange-400 hover:text-orange-300">kleber@ziontechgroup.com</a></p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AISupplyChainOptimizationPlatform;