import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Truck, 
  BarChart3, 
  TrendingUp, 
  Globe, 
  Zap, 
  CheckCircle,
  Play,
  Star,
  DollarSign,
  Settings,
  BarChart3,
  Target,
  Clock,
  Shield,
  Rocket,
  Package,
  Route,
  Warehouse,
  Factory,
  MapPin,
  AlertTriangle,
  Calendar,
  Users
} from 'lucide-react';

export default function AISupplyChainOptimization() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Demand Forecasting",
      description: "Machine learning algorithms that predict demand patterns with 95% accuracy, reducing stockouts and overstock situations."
    },
    {
      icon: Truck,
      title: "Intelligent Route Optimization",
      description: "Real-time route planning that minimizes fuel costs, delivery times, and carbon footprint while maximizing efficiency."
    },
    {
      icon: Globe,
      title: "Global Supply Chain Visibility",
      description: "End-to-end tracking across all suppliers, warehouses, and distribution centers with real-time status updates."
    },
    {
      icon: Zap,
      title: "Predictive Risk Management",
      description: "AI algorithms that identify potential supply chain disruptions before they occur, enabling proactive mitigation strategies."
    },
    {
      icon: Analytics,
      title: "Advanced Analytics Dashboard",
      description: "Comprehensive insights into supply chain performance, cost analysis, and optimization opportunities with predictive modeling."
    },
    {
      icon: Shield,
      title: "Compliance & Sustainability",
      description: "Automated compliance monitoring, carbon footprint tracking, and sustainability reporting for regulatory requirements."
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for small businesses with basic supply chain needs",
      features: [
        "Up to 5 locations",
        "Basic demand forecasting",
        "Route optimization",
        "Standard reporting",
        "Email support",
        "Mobile app access"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$599",
      period: "/month",
      description: "Ideal for growing companies with complex supply chain operations",
      features: [
        "Up to 25 locations",
        "Advanced AI forecasting",
        "Multi-modal optimization",
        "Risk management",
        "Priority support",
        "Custom dashboards",
        "API access",
        "Team collaboration"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,299",
      period: "/month",
      description: "For large organizations requiring enterprise-grade supply chain optimization",
      features: [
        "Unlimited locations",
        "Custom AI models",
        "White-label solution",
        "24/7 dedicated support",
        "Advanced security features",
        "SLA guarantees",
        "On-premise deployment",
        "Custom integrations"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Reduce Costs by 25-40%",
      description: "Optimize inventory levels, transportation routes, and supplier relationships to significantly lower operational expenses."
    },
    {
      icon: Clock,
      title: "Improve Delivery Times by 35%",
      description: "Streamline logistics operations and optimize routes to deliver products faster and more reliably."
    },
    {
      icon: DollarSign,
      title: "Increase Profit Margins by 20-30%",
      description: "Better inventory management and reduced waste lead to higher profitability and competitive advantage."
    },
    {
      icon: Shield,
      title: "Reduce Supply Chain Risks by 60%",
      description: "Predictive analytics and real-time monitoring help prevent disruptions and ensure business continuity."
    }
  ];

  const useCases = [
    {
      title: "Manufacturing Supply Chain",
      description: "Optimize raw material procurement, production scheduling, and finished goods distribution across global manufacturing networks.",
      metrics: ["Inventory reduction", "Production efficiency", "Lead time optimization"]
    },
    {
      title: "Retail & E-commerce",
      description: "Streamline inventory management, optimize warehouse operations, and improve last-mile delivery for omnichannel retail.",
      metrics: ["Stockout prevention", "Warehouse efficiency", "Delivery optimization"]
    },
    {
      title: "Healthcare & Pharmaceuticals",
      description: "Ensure critical medical supplies availability, optimize cold chain logistics, and maintain compliance with regulatory requirements.",
      metrics: ["Supply availability", "Temperature monitoring", "Compliance tracking"]
    },
    {
      title: "Food & Beverage",
      description: "Optimize perishable goods supply chains, reduce food waste, and ensure food safety throughout the distribution network.",
      metrics: ["Waste reduction", "Freshness optimization", "Safety compliance"]
    }
  ];

  const industries = [
    { name: "Manufacturing", icon: Factory, description: "Optimize production and distribution networks" },
    { name: "Retail", icon: Package, description: "Streamline inventory and logistics operations" },
    { name: "Healthcare", icon: Shield, description: "Ensure critical supply availability and compliance" },
    { name: "Food & Beverage", icon: Warehouse, description: "Optimize perishable goods supply chains" },
    { name: "Automotive", icon: Truck, description: "Streamline parts and vehicle distribution" },
    { name: "Electronics", icon: Zap, description: "Optimize global component supply chains" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Optimization
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Supply Chain Optimization
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionize your supply chain with AI-powered optimization that reduces costs by 25-40%, improves delivery times by 35%, 
              and increases profit margins by 20-30%. Transform complexity into competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg font-semibold text-white hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </Link>
              <Link
                to="/demo"
                className="px-8 py-4 border-2 border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                <Play className="w-5 h-5 inline mr-2" />
                Watch Demo
              </Link>
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
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Supply Chain Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered platform combines cutting-edge machine learning with deep supply chain expertise to deliver 
              unprecedented optimization and visibility across your entire network.
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
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
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
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Transform Your Supply Chain Performance
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join industry leaders who have revolutionized their supply chain operations with AI-powered optimization.
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
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored optimization strategies for different industries with unique supply chain challenges and requirements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-green-500/50 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{industry.name}</h3>
                <p className="text-gray-300">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how AI Supply Chain Optimization transforms different industries and business operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300 mb-6">{useCase.description}</p>
                <div className="space-y-3">
                  {useCase.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center gap-3 text-green-400">
                      <TrendingUp className="w-5 h-5 flex-shrink-0" />
                      {metric}
                    </div>
                  ))}
                </div>
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
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that best fits your business needs. All plans include a 14-day free trial.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-green-500/50 bg-gradient-to-b from-green-500/10 to-transparent' 
                    : 'border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={plan.name === "Enterprise" ? "/contact" : "/signup"}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700'
                      : 'border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white'
                  }`}
                >
                  {plan.cta}
                </Link>
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
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join industry leaders who have revolutionized their supply chain operations with AI-powered optimization. 
              Start your free trial today and see the difference in just 14 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg font-semibold text-white hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </Link>
              <Link
                to="/demo"
                className="px-8 py-4 border-2 border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}