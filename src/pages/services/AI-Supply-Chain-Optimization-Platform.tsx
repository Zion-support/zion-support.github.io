import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Truck, 
  Brain, 
  Shield, 
  Clock, 
  DollarSign,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  Users,
  Database,
  Network,
  Cpu,
  Server,
  Globe,
  Target,
  TrendingUp,
  Activity,
  Fingerprint,
  Key,
  Search,
  BarChart3,
  Package,
  Warehouse,
  Award,
  Phone,
  Mail,
  MapPin,
  Lock,
  Eye,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  ArrowUpDown,
  Route,
  MapPin as MapPinIcon,
  Globe as GlobeIcon
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function AISupplyChainOptimizationPlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Demand Forecasting",
      description: "Advanced ML algorithms with 92.4% accuracy for demand prediction and inventory optimization"
    },
    {
      icon: Truck,
      title: "Intelligent Route Optimization",
      description: "Real-time logistics optimization reducing delivery times by up to 35%"
    },
    {
      icon: Shield,
      title: "Risk Management & Compliance",
      description: "Comprehensive risk assessment and regulatory compliance monitoring"
    },
    {
      icon: Clock,
      title: "Real-Time Visibility",
      description: "End-to-end supply chain visibility with instant alerts and tracking"
    }
  ];

  const services = [
    {
      title: "Demand Forecasting",
      description: "AI-powered demand prediction with seasonal analysis and trend identification",
      icon: BarChart3,
      features: ["ML-based forecasting", "Seasonal analysis", "Trend identification", "Accuracy optimization"]
    },
    {
      title: "Inventory Optimization",
      description: "Intelligent inventory management with automated reorder points and safety stock",
      icon: Warehouse,
      features: ["Automated reordering", "Safety stock management", "ABC analysis", "Cost optimization"]
    },
    {
      title: "Logistics Optimization",
      description: "Route optimization and transportation management with real-time tracking",
      icon: Route,
      features: ["Route optimization", "Carrier selection", "Real-time tracking", "Cost reduction"]
    },
    {
      title: "Supplier Management",
      description: "Comprehensive supplier assessment and performance monitoring",
      icon: Users,
      features: ["Supplier scoring", "Performance monitoring", "Risk assessment", "Contract management"]
    }
  ];

  const technologies = [
    "GPT-4 & Claude 3.5 Integration",
    "Machine Learning Algorithms",
    "Internet of Things (IoT)",
    "Blockchain for Transparency",
    "Cloud-Native Architecture",
    "Real-time Data Processing",
    "API-First Design",
    "Advanced Analytics Engine"
  ];

  const pricing = [
    {
      plan: "Starter",
      price: "$799",
      period: "/month",
      features: [
        "Up to 1,000 SKUs",
        "Basic demand forecasting",
        "Inventory optimization",
        "Email support",
        "Basic reporting"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      plan: "Professional",
      price: "$2,499",
      period: "/month",
      features: [
        "Up to 10,000 SKUs",
        "Advanced AI algorithms",
        "Full supply chain visibility",
        "Phone & email support",
        "Advanced analytics",
        "Custom integrations",
        "API access"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      plan: "Enterprise",
      price: "$6,999",
      period: "/month",
      features: [
        "Unlimited SKUs",
        "Custom AI models",
        "Dedicated support team",
        "24/7 priority support",
        "Full platform customization",
        "White-label options",
        "Advanced compliance"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const marketStats = [
    {
      metric: "Market Size",
      value: "$67.2B",
      description: "Global supply chain analytics market by 2028",
      icon: TrendingUp,
      color: "from-green-400 to-emerald-500"
    },
    {
      metric: "Cost Reduction",
      value: "25-35%",
      description: "Average supply chain cost reduction",
      icon: DollarSign,
      color: "from-blue-400 to-purple-500"
    },
    {
      metric: "Efficiency Gain",
      value: "40%",
      description: "Average operational efficiency improvement",
      icon: Zap,
      color: "from-purple-400 to-pink-500"
    },
    {
      metric: "ROI",
      value: "380%",
      description: "Average return on investment",
      icon: CheckCircle2,
      color: "from-orange-400 to-red-500"
    }
  ];

  const industries = [
    "Manufacturing & Automotive",
    "Retail & E-commerce",
    "Healthcare & Pharmaceuticals",
    "Food & Beverage",
    "Logistics & Transportation",
    "Energy & Utilities"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <SEO 
        title="AI Supply Chain Optimization Platform - Zion Tech Group"
        description="Revolutionary AI-powered supply chain optimization platform with demand forecasting, inventory management, and logistics optimization. Transform your supply chain with intelligent automation."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500/20 to-blue-500/20 border border-orange-400/30 rounded-full text-orange-300 text-sm font-medium mb-6">
              <Truck className="w-4 h-4 mr-2" />
              AI-Powered Supply Chain Optimization
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Supply Chain
              <span className="block bg-gradient-to-r from-orange-400 via-blue-500 to-emerald-600 bg-clip-text text-transparent">
                Optimization Platform
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Revolutionize your supply chain with our AI-powered platform that provides demand forecasting, 
              inventory optimization, and logistics management. Reduce costs by 25-35% while improving efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-blue-600 text-white font-semibold rounded-lg hover:from-orange-400 hover:to-blue-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-orange-500/20"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-orange-400/30 text-orange-400 font-semibold rounded-lg hover:bg-orange-400/10 transition-all duration-200"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              AI Supply Chain Features
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our AI-powered supply chain platform combines cutting-edge technology with logistics expertise 
              to provide comprehensive optimization and visibility.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-orange-400/30 transition-all duration-200 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-orange-400/40 group-hover:to-blue-500/40 transition-all duration-200">
                  <feature.icon className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Supply Chain Services
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              From demand forecasting to logistics optimization, our AI supply chain platform covers every aspect 
              of modern supply chain management and optimization.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-orange-400/30 transition-all duration-200"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-slate-300 text-lg mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-300">
                      <CheckCircle className="w-4 h-4 text-orange-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Statistics Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Market Analysis & Impact
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Understand the supply chain analytics market landscape and the transformative impact of AI technology.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketStats.map((stat, index) => (
              <motion.div
                key={stat.metric}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{stat.metric}</h3>
                <p className="text-3xl font-bold text-orange-400 mb-2">{stat.value}</p>
                <p className="text-slate-300">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Supported Industries
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our platform serves diverse industries with specialized supply chain optimization solutions.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center p-4 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:border-orange-400/30 transition-all duration-200"
              >
                <Truck className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                <span className="text-white text-sm">{industry}</span>
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
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Choose the plan that fits your supply chain needs. All plans include our core AI features.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.plan}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-slate-800/50 border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-orange-400/50 bg-gradient-to-b from-orange-500/10 to-slate-800/50' 
                    : 'border-slate-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-orange-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.plan}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-300">
                      <CheckCircle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-orange-500 to-blue-600 text-white hover:from-orange-400 hover:to-blue-500'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Supply Chain Technologies
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our platform leverages cutting-edge technologies to provide the most advanced supply chain optimization available.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center p-4 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:border-orange-400/30 transition-all duration-200"
              >
                <Truck className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                <span className="text-white text-sm">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500/10 to-blue-500/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join leading companies that have already transformed their supply chains with AI technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-blue-600 text-white font-semibold rounded-lg hover:from-orange-400 hover:to-blue-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-orange-500/20"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-orange-400/30 text-orange-400 font-semibold rounded-lg hover:bg-orange-400/10 transition-all duration-200"
              >
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Ready to revolutionize your supply chain? Contact our team for a personalized demo.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-slate-300">+1 302 464 0950</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-slate-300">kleber@ziontechgroup.com</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
              <p className="text-slate-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}