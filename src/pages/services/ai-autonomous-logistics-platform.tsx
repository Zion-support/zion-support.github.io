import React from 'react';
import { motion } from 'framer-motion';
import { SEOOptimizer } from '../../components/SEOOptimizer';
import { 
  Truck, 
  Route, 
  Package, 
  Globe, 
  Zap, 
  Shield, 
  BarChart3, 
  Clock, 
  DollarSign, 
  CheckCircle,
  ArrowRight,
  Brain,
  Cpu,
  Database,
  Network,
  Activity,
  TrendingUp,
  Users,
  Building2,
  Rocket,
  Target,
  Lightbulb,
  Star,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const AIAutonomousLogisticsPlatform = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Route Optimization",
      description: "Advanced algorithms that optimize delivery routes in real-time, reducing fuel costs and delivery times by up to 35%."
    },
    {
      icon: <Route className="w-6 h-6" />,
      title: "Autonomous Fleet Management",
      description: "Intelligent fleet coordination with predictive maintenance, real-time tracking, and automated dispatching."
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Smart Inventory Management",
      description: "AI-driven demand forecasting and automated inventory optimization to prevent stockouts and reduce carrying costs."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Supply Chain Visibility",
      description: "End-to-end visibility across your entire supply chain with real-time monitoring and predictive analytics."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Risk Management & Compliance",
      description: "Automated compliance monitoring, risk assessment, and regulatory reporting for global logistics operations."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Advanced Analytics Dashboard",
      description: "Comprehensive analytics with predictive insights, performance metrics, and actionable recommendations."
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$2,500",
      period: "/month",
      description: "Perfect for small logistics operations",
      features: [
        "AI Route Optimization (up to 50 vehicles)",
        "Basic Fleet Management",
        "Inventory Tracking",
        "Standard Analytics",
        "Email Support",
        "API Access"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$5,000",
      period: "/month",
      description: "Ideal for growing logistics companies",
      features: [
        "AI Route Optimization (up to 200 vehicles)",
        "Advanced Fleet Management",
        "Predictive Analytics",
        "Real-time Monitoring",
        "Priority Support",
        "Custom Integrations",
        "Advanced Reporting"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$12,000",
      period: "/month",
      description: "For large-scale logistics operations",
      features: [
        "Unlimited Vehicle Management",
        "AI-Powered Predictive Maintenance",
        "Custom AI Models",
        "24/7 Dedicated Support",
        "White-label Solutions",
        "Advanced Security Features",
        "Custom Development"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      title: "Cost Reduction",
      value: "35%",
      description: "Average reduction in logistics costs through AI optimization"
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-400" />,
      title: "Delivery Time",
      value: "40%",
      description: "Faster delivery times with intelligent routing"
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      title: "Risk Mitigation",
      value: "60%",
      description: "Reduced supply chain risks through predictive analytics"
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      title: "Customer Satisfaction",
      value: "85%",
      description: "Improved customer satisfaction scores"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer 
        title="AI Autonomous Logistics Platform | Zion Tech Group"
        description="Revolutionize your logistics operations with our AI-powered autonomous platform. Optimize routes, manage fleets, and gain real-time visibility across your supply chain."
        keywords="AI logistics, autonomous logistics, supply chain optimization, fleet management, route optimization, logistics automation"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-cyan/10 border border-zion-cyan/20 text-zion-cyan text-sm font-medium mb-6">
              <Truck className="w-4 h-4 mr-2" />
              AI-Powered Logistics
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              AI Autonomous
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple"> Logistics Platform</span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Transform your logistics operations with intelligent automation, predictive analytics, and autonomous fleet management. 
              Reduce costs, improve efficiency, and gain unprecedented visibility across your supply chain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=AI Logistics Platform Demo"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 transform hover:scale-105"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Request Demo
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/10 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +1 (302) 464-0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary Features
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our AI platform combines cutting-edge technology with industry expertise to deliver unprecedented logistics efficiency.
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
                className="bg-zion-slate-dark/50 border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-zion-cyan mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-zion-slate-light leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Join hundreds of companies already transforming their logistics operations with our AI platform.
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
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {benefit.value}
                </div>
                <h3 className="text-lg font-semibold text-zion-cyan mb-2">
                  {benefit.title}
                </h3>
                <p className="text-zion-slate-light text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Choose the plan that fits your logistics needs. All plans include our core AI features and 24/7 support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-zion-slate-dark/50 border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-zion-cyan shadow-lg shadow-zion-cyan/20' 
                    : 'border-zion-purple/20'
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
                  <p className="text-zion-slate-light mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-zion-slate-light ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:from-zion-cyan/90 hover:to-zion-purple/90'
                    : 'bg-zion-slate-dark border border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan/10'
                }">
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Logistics?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join the future of logistics with AI-powered automation and intelligent optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=AI Logistics Platform Demo"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 transform hover:scale-105"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Schedule Demo
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/10 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-zion-cyan mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <a href="tel:+13024640950" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                +1 (302) 464-0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-zion-cyan mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-zion-cyan mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-zion-slate-light">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAutonomousLogisticsPlatform;