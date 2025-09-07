import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Truck, 
  Globe, 
  Brain, 
  TrendingUp, 
  Zap, 
  Clock, 
  DollarSign, 
  CheckCircle, 
  ArrowRight,
  BarChart3,
  Shield,
  Cpu,
  Network,
  Package,
  Route,
  Warehouse,
  Factory,
  Car,
  Ship,
  Plane,
  MessageCircle,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AISupplyChainOptimization() {
  const features = [
    {
      title: "Predictive Demand Forecasting",
      description: "AI-powered demand prediction with 95% accuracy using machine learning algorithms",
      icon: Brain,
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Real-time Route Optimization",
      description: "Dynamic route planning that reduces delivery time by 30% and fuel costs by 25%",
      icon: Route,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Inventory Intelligence",
      description: "Smart inventory management with automated reorder points and stock optimization",
      icon: Warehouse,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Supply Chain Visibility",
      description: "End-to-end visibility across your entire supply chain with real-time tracking",
      icon: Globe,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Risk Management",
      description: "AI-driven risk assessment and mitigation strategies for supply chain disruptions",
      icon: Shield,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Performance Analytics",
      description: "Comprehensive dashboards with KPIs and actionable insights for continuous improvement",
      icon: BarChart3,
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: 399,
      period: "month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 100 SKUs",
        "Basic demand forecasting",
        "Standard route optimization",
        "Email support",
        "Basic analytics dashboard",
        "Mobile app access"
      ],
      cta: "Start Free Trial",
      popular: false,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Professional",
      price: 999,
      period: "month",
      description: "Ideal for growing businesses and mid-size companies",
      features: [
        "Up to 1,000 SKUs",
        "Advanced AI forecasting",
        "Multi-modal optimization",
        "Priority support",
        "Advanced analytics",
        "API access",
        "Custom integrations",
        "Training sessions"
      ],
      cta: "Get Started",
      popular: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Enterprise",
      price: 2499,
      period: "month",
      description: "For large enterprises with complex supply chains",
      features: [
        "Unlimited SKUs",
        "Custom AI model training",
        "Dedicated account manager",
        "24/7 priority support",
        "White-label solutions",
        "Advanced risk management",
        "Custom compliance rules",
        "On-site training"
      ],
      cta: "Contact Sales",
      popular: false,
      color: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    {
      title: "30% Cost Reduction",
      description: "Significant reduction in logistics and inventory costs",
      icon: DollarSign,
      metric: "30%"
    },
    {
      title: "95% Forecast Accuracy",
      description: "Industry-leading accuracy in demand prediction",
      icon: TrendingUp,
      metric: "95%"
    },
    {
      title: "25% Fuel Savings",
      description: "Optimized routes reduce fuel consumption and emissions",
      icon: Zap,
      metric: "25%"
    },
    {
      title: "50% Faster Delivery",
      description: "Improved delivery times through intelligent optimization",
      icon: Clock,
      metric: "50%"
    }
  ];

  const useCases = [
    {
      title: "E-commerce Fulfillment",
      description: "Optimize order fulfillment and last-mile delivery for online retailers",
      icon: Package,
      examples: ["Order routing", "Warehouse optimization", "Delivery scheduling"]
    },
    {
      title: "Manufacturing Supply Chain",
      description: "Streamline raw material procurement and production planning",
      icon: Factory,
      examples: ["Supplier management", "Production scheduling", "Quality control"]
    },
    {
      title: "Logistics & Transportation",
      description: "Optimize fleet management and route planning for logistics companies",
      icon: Truck,
      examples: ["Fleet optimization", "Route planning", "Driver scheduling"]
    },
    {
      title: "Retail Inventory Management",
      description: "Smart inventory management for retail chains and stores",
      icon: Warehouse,
      examples: ["Stock optimization", "Reorder automation", "Store allocation"]
    }
  ];

  const industries = [
    {
      name: "E-commerce",
      icon: Package,
      description: "Online retail and marketplace optimization",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Manufacturing",
      icon: Factory,
      description: "Industrial production and supply chain management",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Logistics",
      icon: Truck,
      description: "Transportation and delivery optimization",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Retail",
      icon: Warehouse,
      description: "Brick-and-mortar retail optimization",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Healthcare",
      icon: Shield,
      description: "Medical supply chain and pharmaceutical logistics",
      color: "from-red-500 to-pink-500"
    },
    {
      name: "Food & Beverage",
      icon: Car,
      description: "Fresh food logistics and cold chain management",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709"
  };

  return (
    <>
      <SEO 
        title="AI Supply Chain Optimization | Zion Tech Group"
        description="Revolutionary AI-powered supply chain optimization platform. 95% forecast accuracy, 30% cost reduction, and real-time visibility. Start your free trial today."
        keywords="AI supply chain, supply chain optimization, demand forecasting, route optimization, inventory management, logistics AI"
        canonical="https://ziontechgroup.com/services/ai-supply-chain-optimization"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-blue-600/20 to-purple-600/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
                <Brain className="w-4 h-4 mr-2" />
                AI-Powered Supply Chain Technology
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                AI Supply Chain Optimization
              </h1>
              <p className="text-xl lg:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Transform your supply chain with AI-powered optimization. 
                95% forecast accuracy, 30% cost reduction, and real-time visibility across your entire network.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border border-slate-600 text-slate-300 font-semibold rounded-lg hover:border-slate-500 hover:text-white transition-all duration-300"
                >
                  Watch Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Revolutionary Supply Chain AI Features
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our AI platform combines cutting-edge technology with deep supply chain expertise 
                to deliver unprecedented efficiency and cost savings.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Proven Results & Benefits
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Join thousands of companies who have transformed their supply chains 
                with our AI-powered optimization platform.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text mb-4">
                    {benefit.metric}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-slate-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Comprehensive Supply Chain Solutions
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                From demand forecasting to last-mile delivery, our AI platform handles 
                every aspect of supply chain optimization.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                      <p className="text-slate-300 mb-4">{useCase.description}</p>
                      <ul className="space-y-2">
                        {useCase.examples.map((example, idx) => (
                          <li key={idx} className="flex items-center text-slate-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {example}
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

        {/* Industries Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Industry Solutions
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our AI platform is designed to meet the unique challenges of various industries 
                and supply chain complexities.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${industry.color} rounded-lg flex items-center justify-center mb-4`}>
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{industry.name}</h3>
                  <p className="text-slate-300">{industry.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Transparent Pricing
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Choose the plan that fits your business size and supply chain complexity. 
                All plans include our core AI features and 24/7 support.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative bg-slate-800/50 rounded-xl p-8 border ${
                    plan.popular 
                      ? 'border-green-500/50 ring-2 ring-green-500/20' 
                      : 'border-slate-700/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-slate-300 mb-6">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">${plan.price}</span>
                      <span className="text-slate-400">/{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={plan.name === "Enterprise" ? "/contact" : "/contact"}
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700'
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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600/20 via-blue-600/20 to-purple-600/20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Optimize Your Supply Chain?
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Join thousands of companies who have already revolutionized 
                their supply chains with AI. Start your free trial today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border border-slate-600 text-slate-300 font-semibold rounded-lg hover:border-slate-500 hover:text-white transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-8"
              >
                <h2 className="text-3xl font-bold text-white mb-4">
                  Get in Touch
                </h2>
                <p className="text-slate-300">
                  Ready to revolutionize your supply chain? Contact our team to learn more.
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                  <p className="text-slate-300">{contactInfo.phone}</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                  <p className="text-slate-300">{contactInfo.email}</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                  <p className="text-slate-300">{contactInfo.address}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}