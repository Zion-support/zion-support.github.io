import React from 'react';
import { motion } from 'framer-motion';
import { 
  Truck, 
  Network, 
  TrendingUp, 
  Shield, 
  Zap, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Globe, 
  Database, 
  BarChart3,
  Clock,
  DollarSign,
  Star,
  Target,
  Lightbulb,
  Building,
  Factory,
  Package,
  Route,
  MapPin,
  AlertTriangle,
  Eye,
  GitFork,
  MessageCircle,
  Phone,
  Mail,
  Cpu,
  Brain,
  Cloud,
  Lock,
  Activity,
  PieChart,
  Gauge,
  Settings,
  RefreshCw,
  Calendar,
  FileText,
  Award,
  Rocket
} from 'lucide-react';

const AISupplyChainOptimization: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Forecasting",
      description: "Predict demand patterns with 95% accuracy using advanced machine learning algorithms"
    },
    {
      icon: Network,
      title: "Real-time Visibility",
      description: "Track inventory, shipments, and supplier performance across your entire supply chain"
    },
    {
      icon: Route,
      title: "Intelligent Routing",
      description: "Optimize delivery routes and transportation costs with AI-driven logistics planning"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Identify and mitigate supply chain risks before they impact your business"
    },
    {
      icon: Zap,
      title: "Automated Optimization",
      description: "Continuously optimize inventory levels, supplier selection, and order timing"
    },
    {
      icon: Activity,
      title: "Performance Analytics",
      description: "Comprehensive dashboards and KPIs to measure and improve supply chain efficiency"
    }
  ];

  const useCases = [
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Optimize production planning, inventory management, and supplier relationships"
    },
    {
      icon: Package,
      title: "E-commerce",
      description: "Streamline fulfillment, reduce shipping costs, and improve customer delivery times"
    },
    {
      icon: Building,
      title: "Retail",
      description: "Balance inventory levels, reduce stockouts, and optimize store replenishment"
    },
    {
      icon: Truck,
      title: "Logistics",
      description: "Optimize routes, reduce fuel costs, and improve delivery efficiency"
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$499",
      period: "/month",
      description: "Perfect for small businesses starting their supply chain optimization journey",
      features: [
        "Up to 5 locations",
        "Basic demand forecasting",
        "Inventory optimization",
        "Email support",
        "Standard reporting",
        "Basic risk alerts"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$1,299",
      period: "/month",
      description: "Ideal for growing companies with complex supply chain operations",
      features: [
        "Up to 25 locations",
        "Advanced AI forecasting",
        "Multi-supplier optimization",
        "Priority support",
        "Custom dashboards",
        "API access",
        "Advanced analytics",
        "Risk management tools"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,999",
      period: "/month",
      description: "For large organizations with global supply chain networks",
      features: [
        "Unlimited locations",
        "Custom AI model training",
        "White-label solutions",
        "Dedicated support",
        "Advanced automation",
        "Custom integrations",
        "SLA guarantees",
        "On-premise options"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Cost Reduction",
      value: "15-30%",
      description: "Lower inventory costs, reduced transportation expenses, and optimized supplier pricing"
    },
    {
      icon: Clock,
      title: "Efficiency Gains",
      value: "40-60%",
      description: "Faster order processing, reduced lead times, and improved resource utilization"
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      value: "80%",
      description: "Proactive identification and prevention of supply chain disruptions"
    },
    {
      icon: TrendingUp,
      title: "Revenue Growth",
      value: "10-25%",
      description: "Improved customer satisfaction, reduced stockouts, and faster time-to-market"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 text-green-300 text-sm font-medium mb-6">
              <Truck className="w-4 h-4 mr-2" />
              AI-Powered Supply Chain
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent">
              AI Supply Chain Optimization
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your supply chain with AI that predicts demand, optimizes inventory, and reduces costs while improving customer satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center px-8 py-4 border border-green-400 text-green-300 font-semibold rounded-lg hover:bg-green-400/10 transition-all duration-300"
              >
                Watch Demo
                <Play className="ml-2 w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Key Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">30%</div>
              <div className="text-gray-400">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">95%</div>
              <div className="text-gray-400">Forecast Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">60%</div>
              <div className="text-gray-400">Efficiency Gain</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-gray-400">Monitoring</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 bg-white/5">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Measurable Business Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered supply chain optimization delivers quantifiable results that directly impact your bottom line.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-green-500/10 to-blue-500/10 backdrop-blur-sm rounded-xl p-8 border border-green-400/20 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-green-400 mb-2">{benefit.value}</div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced AI Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI doesn't just analyze—it learns, predicts, and continuously optimizes your supply chain operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-green-400/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 px-4 bg-white/5">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored supply chain optimization solutions for your specific industry and business model.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-green-500/10 to-blue-500/10 backdrop-blur-sm rounded-xl p-8 border border-green-400/20"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300 text-lg">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your supply chain complexity. All plans include a 14-day free trial.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-green-400/50 bg-gradient-to-br from-green-500/10 to-blue-500/10' 
                    : 'border-white/10'
                } hover:border-green-400/30 transition-all duration-300 hover:transform hover:scale-105`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-4xl font-bold text-green-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.name === "Enterprise" ? "https://ziontechgroup.com/contact" : "https://ziontechgroup.com/contact"}
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 bg-white/5">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join industry leaders who have transformed their operations with AI-powered supply chain optimization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 border border-green-400 text-green-300 font-semibold rounded-lg hover:bg-green-400/10 transition-all duration-300"
              >
                Schedule Demo
                <MessageCircle className="ml-2 w-5 h-5" />
              </a>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="flex items-center justify-center">
                <Phone className="w-6 h-6 text-green-400 mr-3" />
                <span className="text-gray-300">+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="w-6 h-6 text-green-400 mr-3" />
                <span className="text-gray-300">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="w-6 h-6 text-green-400 mr-3" />
                <span className="text-gray-300">364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AISupplyChainOptimization;