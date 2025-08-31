import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Truck, 
  Package, 
  Globe, 
  Zap, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Cpu,
  Network,
  Lock,
  Eye,
  Sparkles,
  Target,
  Rocket,
  Lightbulb,
  Code,
  Server,
  Cloud,
  Activity,
  TrendingUp,
  BarChart3,
  Database,
  Smartphone,
  Monitor,
  Calendar,
  Clock,
  DollarSign,
  Award,
  Handshake,
  Phone,
  Mail,
  MapPin,
  ShoppingCart,
  Warehouse,
  Factory,
  Ship,
  Plane,
  Train,
  Car,
  Route,
  Navigation,
  Compass,
  Map,
  Layers,
  GitBranch,
  GitCommit,
  GitPullRequest
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AISupplyChainOptimizationPlatform() {
  const features = [
    {
      title: "Real-time Tracking",
      description: "Monitor shipments, inventory, and logistics in real-time across the entire supply chain",
      icon: Eye,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Predictive Analytics",
      description: "AI-powered forecasting for demand, inventory, and supply chain disruptions",
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Route Optimization",
      description: "Intelligent routing algorithms to minimize costs and delivery times",
      icon: Route,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Risk Management",
      description: "Proactive identification and mitigation of supply chain risks and vulnerabilities",
      icon: Shield,
      color: "from-red-500 to-orange-500"
    }
  ];

  const useCases = [
    {
      title: "Manufacturing",
      description: "Optimize production schedules, inventory levels, and supplier relationships",
      icon: Factory,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Retail & E-commerce",
      description: "Streamline order fulfillment, warehouse operations, and last-mile delivery",
      icon: ShoppingCart,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Logistics & Transportation",
      description: "Optimize fleet management, route planning, and cargo loading",
      icon: Truck,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Healthcare & Pharmaceuticals",
      description: "Ensure critical supplies reach destinations safely and on time",
      icon: Package,
      color: "from-red-500 to-pink-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$399",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 100 SKUs",
        "Basic tracking & monitoring",
        "Standard reporting",
        "Email support",
        "Basic integrations"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$899",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "Up to 1,000 SKUs",
        "Advanced analytics & forecasting",
        "Priority support",
        "Advanced integrations",
        "Custom dashboards",
        "Multi-location support"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,999",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited SKUs",
        "Custom AI models",
        "24/7 dedicated support",
        "White-label solution",
        "Advanced analytics & reporting",
        "Custom integrations",
        "SLA guarantees"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      title: "25% Cost Reduction",
      description: "Significantly reduce logistics and inventory costs",
      icon: DollarSign,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "40% Faster Delivery",
      description: "Optimize routes and processes for faster delivery times",
      icon: Zap,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "99.9% Accuracy",
      description: "AI-powered predictions with industry-leading accuracy",
      icon: Target,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Real-time Visibility",
      description: "Complete transparency across your entire supply chain",
      icon: Eye,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const transportationModes = [
    {
      name: "Road Transport",
      icon: Truck,
      description: "Optimize truck routes and fleet management",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Air Freight",
      icon: Plane,
      description: "Efficient air cargo routing and scheduling",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Ocean Shipping",
      icon: Ship,
      description: "Maritime logistics and container optimization",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Rail & Intermodal",
      icon: Train,
      description: "Multi-modal transportation optimization",
      color: "from-orange-500 to-red-500"
    }
  ];

  const industries = [
    {
      name: "Automotive",
      icon: Car,
      description: "Just-in-time manufacturing and parts logistics",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Consumer Goods",
      icon: Package,
      description: "Retail supply chain and distribution optimization",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Food & Beverage",
      icon: ShoppingCart,
      description: "Cold chain logistics and perishable goods management",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Electronics",
      icon: Cpu,
      description: "High-tech supply chain and component sourcing",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Supply Chain Optimization
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Optimize Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">
                {" "}Supply Chain with AI
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Transform your supply chain operations with intelligent AI-powered optimization. 
              Reduce costs, improve efficiency, and gain real-time visibility across your entire network.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          >
            {[
              { label: "Cost Reduction", value: "25%", icon: DollarSign },
              { label: "Delivery Speed", value: "40%", icon: Zap },
              { label: "Accuracy", value: "99.9%", icon: Target },
              { label: "Global Coverage", value: "150+", icon: Globe }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-zion-slate-light">{stat.label}</div>
              </div>
            ))}
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
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Powerful AI Features for Supply Chain Optimization
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our platform combines cutting-edge AI technology with deep supply chain expertise to deliver 
              the most intelligent optimization solutions available.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transportation Modes Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Multi-Modal Transportation Optimization
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Optimize across all transportation modes with intelligent routing algorithms and 
              real-time decision-making capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {transportationModes.map((mode, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${mode.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <mode.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{mode.name}</h3>
                <p className="text-zion-slate-light">{mode.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Tailored optimization solutions designed for the unique challenges and requirements 
              of different industries and business models.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{industry.name}</h3>
                <p className="text-zion-slate-light">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Industry-Leading Use Cases
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Discover how organizations across industries are leveraging our platform 
              to revolutionize their supply chain operations and achieve breakthrough results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${useCase.color} rounded-lg flex items-center justify-center mb-4`}>
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-zion-slate-light">{useCase.description}</p>
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
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Transparent Pricing Plans
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Choose the plan that best fits your organization's supply chain optimization needs. 
              All plans include our core AI capabilities and optimization features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-zion-blue-dark/50 backdrop-blur-sm border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-zion-cyan shadow-lg shadow-zion-cyan/20' 
                    : 'border-zion-purple/30'
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
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-zion-slate-light ml-1">{plan.period}</span>
                  </div>
                  <p className="text-zion-slate-light">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:from-zion-cyan-dark hover:to-zion-purple-dark'
                    : 'bg-zion-purple/20 text-zion-cyan border border-zion-purple/30 hover:bg-zion-purple/30'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark/30">
        <div className="max-w-7xl mx-auto">
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
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Experience the difference that AI-powered supply chain optimization can make for your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
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
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join thousands of organizations already using our AI-powered platform 
              to optimize their supply chain operations and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Phone className="w-8 h-8 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-zion-slate-light">+1 302 464 0950</p>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
              <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}