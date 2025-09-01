import React from 'react';
import { motion } from 'framer-motion';
import { Network, TrendingUp, Shield, Zap, BarChart3, Globe, Truck, Package, CheckCircle, ArrowRight, Phone, Mail, MapPin, Clock, DollarSign, Users } from 'lucide-react';

const AISupplyChainOptimization: React.FC = () => {

  const features = [
    {

      icon: Network,
      title: "AI-Powered Forecasting",
      description: "Advanced machine learning algorithms predict demand patterns with 95%+ accuracy across all product categories"
    },
    {

      icon: TrendingUp,
      title: "Real-time Visibility",
      description: "End-to-end supply chain transparency with real-time tracking, alerts, and predictive analytics"
    },
    {

      icon: Truck,
      title: "Intelligent Routing",
      description: "AI-optimized logistics routes that reduce delivery times by 30% and cut transportation costs by 25%"
    },
    {

      icon: Shield,
      title: "Risk Management",
      description: "Proactive identification and mitigation of supply chain risks with automated contingency planning"
    },
    {

      icon: BarChart3,
      title: "Performance Analytics",
      description: "Comprehensive KPI dashboards with actionable insights for continuous supply chain improvement"
    },
    {

      icon: Globe,
      title: "Global Optimization",
      description: "Multi-region supply chain coordination with intelligent inventory distribution and demand balancing"
    }
  ];

  const benefits = [
    {

      icon: DollarSign,
      title: "Cost Reduction",
      value: "25-40%",
      description: "Lower inventory costs, reduced transportation expenses, and optimized supplier relationships"
    },
    {

      icon: Clock,
      title: "Faster Delivery",
      value: "30-50%",
      description: "Improved lead times and faster order fulfillment through intelligent routing and inventory optimization"
    },
    {

      icon: TrendingUp,
      title: "Increased Efficiency",
      value: "35-60%",
      description: "Streamlined operations, reduced waste, and improved resource utilization across the supply chain"
    },
    {

      icon: Shield,
      title: "Risk Mitigation",
      value: "90%+",
      description: "Proactive risk identification and automated contingency planning for business continuity"
    }
  ];

  const pricing = [
    {

      plan: "Starter",
      price: "$499",
      period: "/month",
      features: [
        "Up to 5,000 SKUs",
        "Basic demand forecasting",
        "Inventory optimization",
        "Standard reporting",
        "Email support",
        "Basic API access"
      ],
      popular: false
    },
    {

      plan: "Professional",
      price: "$1,499",
      period: "/month",
      features: [
        "Up to 25,000 SKUs",
        "Advanced AI forecasting",
        "Multi-location optimization",
        "Real-time analytics",
        "Priority support",
        "Full API access",
        "Custom integrations",
        "Advanced reporting"
      ],
      popular: true
    },
    {

      plan: "Enterprise",
      price: "$3,999",
      period: "/month",
      features: [
        "Unlimited SKUs",
        "Custom AI models",
        "Global optimization",
        "Dedicated support team",
        "White-label solutions",
        "Advanced security",
        "Custom development",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  const industries = [
    "Manufacturing & Industrial",
    "Retail & E-commerce",
    "Healthcare & Pharmaceuticals",
    "Food & Beverage",
    "Automotive & Aerospace",
    "Technology & Electronics",
    "Logistics & Transportation",
    "Energy & Utilities"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <div className="container mx-auto px-4 py-20 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-full">
              <Network className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            AI Supply Chain Optimization
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8">
            Transform your supply chain with AI that predicts demand, optimizes inventory, and reduces costs while improving customer satisfaction
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:+13024640950"
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email kleber@ziontechgroup.com
            </a>
          </div>
        </motion.div>
      </div>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Supply Chain Intelligence
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our AI platform provides unprecedented visibility and optimization capabilities for modern supply chains
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-green-400/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="p-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg w-fit mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Measurable Results
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our AI solutions deliver quantifiable improvements across all supply chain metrics
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-green-400/40 transition-all duration-300"
              >
                <div className="p-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg w-fit mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <div className="text-3xl font-bold text-green-400 mb-4">{benefit.value}</div>
                <p className="text-slate-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Industry Solutions
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Tailored AI optimization solutions for diverse industry requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-6 hover:border-green-400/40 transition-all duration-300"
              >
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-white font-medium">{industry}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Transparent Pricing
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose the plan that fits your supply chain complexity and scale as you grow
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.plan}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative bg-white/5 border rounded-2xl p-8 ${

                  plan.popular 
                    ? 'border-green-400/50 bg-gradient-to-b from-green-500/10 to-transparent' 
                    : 'border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.plan}</h3>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-400">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${

                    plan.popular
                      ? 'bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Contact us today to learn how our AI Supply Chain Optimization can transform your operations
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <Phone className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <a href="tel:+13024640950" className="text-green-400 hover:text-green-300">
                  +1 302 464 0950
                </a>
              </div>
              
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">
                  kleber@ziontechgroup.com
                </a>
              </div>
              
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-slate-300 text-sm">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
              >
                Request Demo
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/20"
              >
                Visit Website
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AISupplyChainOptimization;